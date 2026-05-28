import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../dist", import.meta.url));
const sourceRoot = fileURLToPath(new URL("../", import.meta.url));
const minWords = 800;
const exceptions = new Set([
  "datenschutz/index.html",
  "kontakt/index.html",
  "ueber-uns/index.html",
  "impressum/index.html"
]);

if (!existsSync(root)) {
  throw new Error("dist fehlt. Bitte zuerst astro build ausfuehren.");
}

const htmlFiles = walk(root).filter((file) => file.endsWith(".html"));
const failures = [];
const h1s = new Map();
const blockedVisibleTerms = [
  "SEO",
  "Suchseiten",
  "Kernbegriff",
  "Suchintention",
  "Suchanfrage",
  "redaktionelle",
  "produktive Veroeffentlichung",
  "Betreiberangaben",
  "Sitemap"
];

for (const file of htmlFiles) {
  const rel = relative(root, file);
  const html = readFileSync(file, "utf8");
  const text = htmlToText(html);
  if (html.includes("mailto:")) {
    failures.push(`${rel}: Kontakt-E-Mail darf kein mailto-Link sein.`);
  }
  if (!html.includes("<link rel=\"canonical\"")) {
    failures.push(`${rel}: canonical fehlt.`);
  }
  if (!html.includes("<meta name=\"description\"")) {
    failures.push(`${rel}: meta description fehlt.`);
  }

  const h1 = html.match(/<h1[^>]*>(.*?)<\/h1>/s)?.[1]?.replace(/<[^>]+>/g, "").trim();
  if (!h1) failures.push(`${rel}: H1 fehlt.`);
  else {
    if (h1s.has(h1)) failures.push(`${rel}: H1 doppelt mit ${h1s.get(h1)} (${h1}).`);
    h1s.set(h1, rel);
  }

  for (const term of blockedVisibleTerms) {
    if (text.includes(term)) {
      failures.push(`${rel}: sichtbarer Betriebs-/SEO-Begriff gefunden: ${term}`);
    }
  }

  if (!exceptions.has(rel)) {
    const count = wordCount(text);
    if (count < minWords) {
      failures.push(`${rel}: nur ${count} Woerter, erwartet mindestens ${minWords}.`);
    }
  }
}

if (!existsSync(join(root, "sitemap.xml"))) failures.push("sitemap.xml fehlt.");
if (!existsSync(join(root, "robots.txt"))) failures.push("robots.txt fehlt.");

const indexHtml = readFileSync(join(root, "index.html"), "utf8");
const pageSource = readFileSync(join(sourceRoot, "src/data/pages.ts"), "utf8");
const slugs = [...pageSource.matchAll(/slug: "([^"]+)"/g)].map((match) => match[1]).filter(Boolean);
for (const slug of slugs) {
  if (!indexHtml.includes(`href="/${slug}/"`)) {
    failures.push(`index.html: Link zu /${slug}/ fehlt.`);
  }
}

if (failures.length) {
  console.error(failures.join("\n"));
  process.exit(1);
}

console.log(`Site-Check bestanden: ${htmlFiles.length} HTML-Seiten, ${h1s.size} eindeutige H1, keine mailto-Links.`);

function walk(dir) {
  return readdirSync(dir).flatMap((name) => {
    const file = join(dir, name);
    return statSync(file).isDirectory() ? walk(file) : [file];
  });
}

function htmlToText(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<svg[\s\S]*?<\/svg>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, "\"")
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, " ")
    .trim();
}

function wordCount(text) {
  return text
    .replace(/[^\p{L}\p{N}\s-]/gu, " ")
    .split(/\s+/)
    .map((word) => word.trim())
    .filter(Boolean).length;
}
