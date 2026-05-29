import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../dist", import.meta.url));
const sourceRoot = fileURLToPath(new URL("../", import.meta.url));
const minWords = 800;
const exceptions = new Set([
  "404.html",
  "datenschutz/index.html",
  "kontakt/index.html",
  "ueber-uns/index.html",
  "impressum/index.html"
]);
const supportPagePaths = new Set(["/datenschutz/", "/kontakt/", "/ueber-uns/", "/impressum/"]);

if (!existsSync(root)) {
  throw new Error("dist fehlt. Bitte zuerst astro build ausführen.");
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
  "produktive Veröffentlichung",
  "Betreiberangaben",
  "Sitemap"
];
const visibleTransliterationPattern =
  /\b(fuer|waeh|pruef|qualitaet|aufloes|groess|geraet|koenn|moech|oeff|haeufig|spaeter|zusaetz|benoet|erklaer|fuehr|empfaenger|aeltere|loeschung|ueber)\b/i;
const maxArticleSimilarity = 0.82;
const articleVectors = [];

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
  const robots = html.match(/<meta name="robots" content="([^"]+)"/)?.[1] ?? "";
  if (exceptions.has(rel)) {
    if (!robots.includes("noindex")) {
      failures.push(`${rel}: Support-/Policy-Seite muss noindex sein.`);
    }
  } else if (robots.includes("noindex")) {
    failures.push(`${rel}: SEO-Seite ist versehentlich noindex.`);
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
  const transliteration = text.match(visibleTransliterationPattern);
  if (transliteration) {
    failures.push(`${rel}: unnatürliche deutsche Umschrift gefunden: ${transliteration[0]}`);
  }

  if (!exceptions.has(rel)) {
    const count = wordCount(text);
    if (count < minWords) {
      failures.push(`${rel}: nur ${count} Wörter, erwartet mindestens ${minWords}.`);
    }
    articleVectors.push({
      rel,
      vector: contentVector(extractArticleText(html))
    });
  }
}

if (!existsSync(join(root, "sitemap.xml"))) failures.push("sitemap.xml fehlt.");
if (!existsSync(join(root, "robots.txt"))) failures.push("robots.txt fehlt.");

if (existsSync(join(root, "sitemap.xml"))) {
  const sitemap = readFileSync(join(root, "sitemap.xml"), "utf8");
  const sitemapUrls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1]);
  for (const path of supportPagePaths) {
    if (sitemapUrls.includes(`https://pdfinjpgumwandeln.com${path}`)) {
      failures.push(`sitemap.xml: Support-/Policy-Seite darf nicht enthalten sein: ${path}`);
    }
  }
  for (const file of htmlFiles) {
    const rel = relative(root, file);
    if (exceptions.has(rel)) continue;
    const html = readFileSync(file, "utf8");
    const canonical = html.match(/<link rel="canonical" href="([^"]+)"/)?.[1];
    if (canonical && !sitemapUrls.includes(canonical)) {
      failures.push(`sitemap.xml: indexierbare Seite fehlt: ${canonical}`);
    }
  }
}

const indexHtml = readFileSync(join(root, "index.html"), "utf8");
const pageSource = readFileSync(join(sourceRoot, "src/data/pages.ts"), "utf8");
const slugs = [...pageSource.matchAll(/slug: "([^"]+)"/g)].map((match) => match[1]).filter(Boolean);
for (const slug of slugs) {
  if (!indexHtml.includes(`href="/${slug}/"`)) {
    failures.push(`index.html: Link zu /${slug}/ fehlt.`);
  }
}
const pageEntries = [...pageSource.matchAll(/keyword: "([^"]+)"[\s\S]*?slug: "([^"]*)"/g)].map((match) => ({
  keyword: match[1],
  slug: match[2]
}));
for (const { keyword, slug } of pageEntries) {
  const expectedSlug = keyword.toLowerCase().replace(/\s+/g, "-");
  if (slug && slug !== expectedSlug) {
    failures.push(`src/data/pages.ts: Slug ${slug} passt nicht zum Keyword "${keyword}" (${expectedSlug}).`);
  }
}

for (let i = 0; i < articleVectors.length; i += 1) {
  for (let j = i + 1; j < articleVectors.length; j += 1) {
    const similarity = cosine(articleVectors[i].vector, articleVectors[j].vector);
    if (similarity > maxArticleSimilarity) {
      failures.push(
        `${articleVectors[i].rel} und ${articleVectors[j].rel}: Artikel zu ähnlich (${similarity.toFixed(3)}).`
      );
    }
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

function extractArticleText(html) {
  const article = html.match(/<article class="seo-article"[\s\S]*?<\/article>/)?.[0] ?? html;
  return htmlToText(article);
}

function contentVector(text) {
  const stopWords = new Set(
    "aber als auch auf aus bei dem den der des die diese dieser dieses du ein eine einem einen einer eines für im in ist mit nach nicht nur oder sind sowie um und vom von vor was wenn wer wie wird zu zum zur".split(
      " "
    )
  );
  const vector = new Map();
  const terms = text
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s-]/gu, " ")
    .split(/\s+/)
    .map((word) => word.trim())
    .filter((word) => word.length > 3 && !stopWords.has(word));

  for (const term of terms) {
    vector.set(term, (vector.get(term) ?? 0) + 1);
  }
  return vector;
}

function cosine(left, right) {
  let dot = 0;
  let leftMagnitude = 0;
  let rightMagnitude = 0;

  for (const value of left.values()) leftMagnitude += value * value;
  for (const value of right.values()) rightMagnitude += value * value;
  for (const [term, value] of left) dot += value * (right.get(term) ?? 0);

  return dot / Math.sqrt(leftMagnitude * rightMagnitude);
}

function wordCount(text) {
  return text
    .replace(/[^\p{L}\p{N}\s-]/gu, " ")
    .split(/\s+/)
    .map((word) => word.trim())
    .filter(Boolean).length;
}
