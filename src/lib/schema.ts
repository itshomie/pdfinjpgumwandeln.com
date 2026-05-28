import { faqFor } from "./content";
import { pathFor, site, type SeoPage } from "../data/pages";

export function schemaForPage(page: SeoPage) {
  const url = `${site.url}${pathFor(page)}`;
  return [
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: page.keyword,
      applicationCategory: "UtilitiesApplication",
      operatingSystem: "Webbrowser",
      url,
      inLanguage: "de-DE",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "EUR"
      }
    },
    {
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
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqFor(page).map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer
        }
      }))
    }
  ];
}
