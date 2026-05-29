# PDF in JPG umwandeln

Astro/React-Projekt für `pdfinjpgumwandeln.com`.

## Inhalt

- Deutsche Startseite für `pdf in jpg umwandeln`
- 17 thematisch fokussierte Innenseiten nach Suchintention statt doppelter Keyword-Varianten
- Statische HTML-Ausgabe mit Canonicals, Meta-Descriptions und passendem Structured Data
- `_redirects` für entfernte Keyword-Varianten auf die passenden Canonical-Seiten
- Browser-Werkzeuge für PDF zu JPG, JPG zu PDF, PDF zu SVG, PDF zu TIFF, SVG zu PDF, TIFF zu PDF sowie Vektor/EPS-Prüfung
- Kontaktadresse als reiner Text: `support@pdfinjpgumwandeln.com`

## Entwicklung

Node.js `>=22.12.0` ist erforderlich.

```bash
npm install
npm run dev
```

## Prüfung und Build

```bash
npm run build
```

Der Build führt `astro check`, `astro build` und `scripts/check-site.mjs` aus. Der Check prüft unter anderem:

- mindestens 800 Wörter auf allen Ratgeberseiten, ausgenommen Datenschutz, Kontakt, Über uns und Impressum
- eindeutige H1-Überschriften
- vorhandene Canonical- und Description-Tags
- `noindex, follow` für Support-/Policy-Seiten und keine solchen URLs in der Sitemap
- Slug passt zum jeweiligen Kernkeyword
- keine sichtbaren deutschen Umschriften wie `fuer`, `waehlen` oder `pruefen`
- Artikelähnlichkeit unter dem definierten Grenzwert
- keine `mailto:`-Links
