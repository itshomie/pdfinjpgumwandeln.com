import type { APIRoute } from "astro";
import { allSeoPages, pathFor, site } from "../data/pages";

export const GET: APIRoute = () => {
  const urls = allSeoPages.map(pathFor);
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls
    .map(
      (path) =>
        `  <url><loc>${site.url}${path}</loc><changefreq>weekly</changefreq><priority>${path === "/" ? "1.0" : "0.8"}</priority></url>`
    )
    .join("\n")}\n</urlset>\n`;

  return new Response(body, {
    headers: { "Content-Type": "application/xml; charset=utf-8" }
  });
};
