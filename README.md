# PDF in JPG umwandeln

Astro/React-Projekt fuer `pdfinjpgumwandeln.com`.

## Inhalt

- Deutsche Startseite fuer `pdf in jpg umwandeln`
- 17 thematisch fokussierte Innenseiten nach Suchintention statt doppelter Keyword-Varianten
- Statische HTML-Ausgabe mit Canonicals, Meta-Descriptions, FAQ- und Breadcrumb-Structured-Data
- `_redirects` fuer entfernte Keyword-Varianten auf die passenden Canonical-Seiten
- Browser-Werkzeuge fuer PDF zu JPG, JPG zu PDF, PDF zu SVG, PDF zu TIFF, SVG zu PDF, TIFF zu PDF sowie Vektor/EPS-Pruefung
- Kontaktadresse als reiner Text: `support@pdfinjpgumwandeln.com`

## Entwicklung

Node.js `>=22.12.0` ist erforderlich.

```bash
npm install
npm run dev
```

## Pruefung und Build

```bash
npm run build
```

Der Build fuehrt `astro check`, `astro build` und `scripts/check-site.mjs` aus. Der Check prueft unter anderem:

- mindestens 800 Woerter auf allen Ratgeberseiten, ausgenommen Datenschutz, Kontakt, Über uns und Impressum
- eindeutige H1-Ueberschriften
- vorhandene Canonical- und Description-Tags
- keine `mailto:`-Links
