import { pathFor, site, type SeoPage } from "../data/pages";

export function schemaForPage(page: SeoPage) {
  const path = pathFor(page);
  const url = new URL(path, site.url).toString();
  const websiteUrl = new URL("/", site.url).toString();
  const schema: Record<string, unknown>[] = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${url}#webpage`,
      url,
      name: page.title,
      headline: page.keyword,
      description: page.description,
      inLanguage: "de-DE",
      isPartOf: {
        "@type": "WebSite",
        "@id": `${websiteUrl}#website`,
        name: site.name,
        url: websiteUrl,
        inLanguage: "de-DE"
      }
    }
  ];

  if (path !== "/") {
    schema.push({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Startseite",
          item: websiteUrl
        },
        {
          "@type": "ListItem",
          position: 2,
          name: page.keyword,
          item: url
        }
      ]
    });
  }

  return schema;
}
