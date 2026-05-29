import { pathFor, site, type SeoPage } from "../data/pages";

export function schemaForPage(page: SeoPage) {
  const path = pathFor(page);
  const url = `${site.url}${path}`;
  const schema: Record<string, unknown>[] = [
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: page.keyword,
      description: page.description,
      applicationCategory: "UtilitiesApplication",
      operatingSystem: "Webbrowser",
      url,
      inLanguage: "de-DE",
      isAccessibleForFree: true,
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "EUR"
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
          item: site.url
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
