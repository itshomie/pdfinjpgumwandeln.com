import type { APIRoute } from "astro";
import { allSeoPages, pathFor, site } from "../data/pages";
import { ratgeberPages, ratgeberPath } from "../data/ratgeber";

export const GET: APIRoute = () => {
  const lastmod = new Date().toISOString().slice(0, 10);
  const urls = [
    ...allSeoPages.map(pathFor),
    "/ratgeber/",
    ...ratgeberPages.map(ratgeberPath),
    "/ueber-uns/",
    "/kontakt/",
    "/datenschutz/",
    "/impressum/"
  ];
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls
    .map(
      (path) =>
        `  <url><loc>${new URL(path, site.url).toString()}</loc><lastmod>${lastmod}</lastmod><changefreq>weekly</changefreq><priority>${path === "/" ? "1.0" : "0.8"}</priority></url>`
    )
    .join("\n")}\n</urlset>\n`;

  return new Response(body, {
    headers: { "Content-Type": "application/xml; charset=utf-8" }
  });
};
