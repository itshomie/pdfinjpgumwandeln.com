import { allSeoPages, pathFor, type SeoPage } from "../data/pages";

export interface ArticleSection {
  heading: string;
  paragraphs: string[];
}

const groupLabels: Record<string, string> = {
  "pdf-jpg": "PDF-zu-JPG",
  "jpg-pdf": "JPG-zu-PDF",
  "svg-pdf": "SVG/PDF",
  "tiff-pdf": "TIFF/PDF",
  vector: "Vektor",
  platform: "Plattform",
  online: "Online",
  free: "Kostenlos"
};

export function buildSeoSections(page: SeoPage): ArticleSection[] {
  const keyword = page.keyword;
  const relatedNames = page.related
    .map((slug) => allSeoPages.find((item) => item.slug === slug)?.keyword)
    .filter(Boolean)
    .join(", ");

  return [
    {
      heading: `${keyword}: was Nutzer wirklich erwarten`,
      paragraphs: [
        `${keyword} ist keine abstrakte Formatfrage, sondern meistens ein sehr konkreter Arbeitsmoment. ${page.audience} moechten ${page.intent}. ${page.angle} Deshalb beginnt diese Seite mit dem passenden Werkzeug und fuehrt danach durch die Entscheidungen, die fuer ein gutes Ergebnis wichtig sind: Dateityp, Reihenfolge, Qualitaet, Datenschutz und die spaetere Verwendung.`,
        `Der typische Ausgangspunkt ist klar: ${page.scenario} In genau solchen Situationen stoert ein kompliziertes Programm, eine Registrierung oder eine unklare Upload-Strecke. Nutzer brauchen ein Ergebnis, das sofort pruefbar ist und in der Zielanwendung funktioniert. Die Anleitung ist deshalb bewusst praktisch geschrieben und trennt technische Details von den Schritten, die direkt ausgefuehrt werden muessen.`
      ]
    },
    {
      heading: `Der passende Ablauf fuer ${keyword}`,
      paragraphs: [
        `Ein guter Ablauf besteht nicht nur aus einem Konvertieren-Button. ${page.workflow} Wer diesen Weg einhaelt, erkennt frueh, ob die Ausgabe zu gross, zu klein, unscharf oder falsch sortiert ist. Besonders bei Dokumenten mit mehreren Seiten ist diese Kontrolle entscheidend, weil ein Fehler sonst erst beim Empfaenger auffaellt.`,
        `Die folgende Reihenfolge hat sich fuer ${groupLabels[page.group] ?? "Datei"}-Workflows bewaehrt: Erst wird die Quelldatei geprueft, dann die Zielnutzung geklaert, anschliessend wird eine passende Qualitaet gesetzt. Danach wird nicht blind weitergeleitet, sondern die erzeugte Datei kurz geoeffnet. Diese halbe Minute verhindert die meisten Probleme mit abgeschnittenen Seiten, falscher Orientierung oder zu starker Kompression.`
      ]
    },
    {
      heading: "Schritt fuer Schritt",
      paragraphs: [
        `Fuer diese Suchanfrage sind die Schritte bewusst knapp gehalten: ${page.steps.join(" ")} Diese Liste wirkt einfach, aber sie deckt die typischen Fehlerquellen ab. Wer mehrere Dateien verarbeitet, sollte vor dem Download besonders auf Reihenfolge und Dateinamen achten. Wer nur eine einzelne Seite braucht, sollte nicht automatisch alle Seiten exportieren, weil dadurch unnoetige Dateien entstehen.`,
        `Nach dem Download lohnt sich ein kurzer Test in der Zielumgebung. Wird die Datei in einem Formular hochgeladen, sollte sie dort in der Vorschau lesbar sein. Wird sie per E-Mail verschickt, sollte die Dateigroesse zum Anhanglimit passen. Wird sie in einem CMS eingesetzt, sind Bildabmessungen und Dateiname oft genauso wichtig wie die reine visuelle Qualitaet.`
      ]
    },
    {
      heading: "Qualitaet, Aufloesung und Dateigroesse",
      paragraphs: [
        `${page.qualityFocus} Viele schlechte Ergebnisse entstehen nicht durch das Format selbst, sondern durch eine unpassende Einstellung. Bei Textdokumenten sind Kanten, kleine Schrift und Tabellenlinien die Messlatte. Bei Fotos, Scans und farbigen Seiten zaehlt zusaetzlich, ob Kompression sichtbare Artefakte erzeugt. Ein guter Export ist deshalb der kleinste Export, der im Zielkontext noch sauber aussieht.`,
        `Wenn das Ergebnis fuer eine Vorschau gedacht ist, reicht oft eine moderate Einstellung. Fuer Druck, Archiv oder nachtraegliche Bearbeitung sollte mehr Reserve eingeplant werden. Umgekehrt bringt eine extrem hohe Einstellung wenig, wenn die Ausgangsdatei selbst nur ein kleiner Scan oder ein unscharfes Handyfoto ist. Die beste Qualitaet entsteht durch passende Quellen und eine Einstellung, die zum realen Zweck passt.`
      ]
    },
    {
      heading: "Datenschutz und lokale Verarbeitung",
      paragraphs: [
        `${page.privacyFocus} Bei Dateien mit Namen, Adressen, Rechnungsdaten, Vertragsdetails oder internen Layouts ist diese Frage wichtiger als die letzte Sekunde Geschwindigkeit. Eine Weboberflaeche kann bequem sein, ohne dass die Datei an einen externen Server gesendet werden muss.`,
        `Trotzdem bleibt Eigenverantwortung wichtig: Dateien sollten nach der Arbeit nicht unnoetig im Download-Ordner liegen, freigegebene Rechner sollten nicht mit sensiblen Dokumenten verlassen werden, und Ergebnisse sollten nur an die Empfaenger gehen, die sie wirklich brauchen. Datenschutz ist bei Konvertierung selten ein einzelner Schalter, sondern eine saubere Kette aus lokaler Verarbeitung, bewusster Ablage und kontrollierter Weitergabe.`
      ]
    },
    {
      heading: "Typische Fehler vermeiden",
      paragraphs: [
        `Bei ${keyword} tauchen einige Fehler immer wieder auf: ${page.pitfalls.join(" ")} Diese Punkte wirken klein, koennen aber aus einem eigentlich einfachen Export ein Supportproblem machen. Besonders kritisch sind Dateien, die in einem Portal nur einmal hochgeladen werden koennen oder Fristen betreffen.`,
        `Praktisch hilft eine feste Pruefroutine: Datei oeffnen, erste und letzte Seite kontrollieren, bei Bildern die Schaerfe pruefen, bei PDFs die Seitenzahl vergleichen und erst danach weiterleiten. Wenn das Ergebnis nicht passt, sollte man nicht sofort ein anderes Tool suchen, sondern zuerst Skalierung, Kompression, Reihenfolge oder Ausgangsbild korrigieren.`
      ]
    },
    {
      heading: "Wann ein anderes Format besser ist",
      paragraphs: [
        `Nicht jede Suchanfrage endet im gleichen Zielformat. Fuer Fotos und schnelle Webvorschauen ist JPG stark, fuer Dokumentstapel ist PDF oft besser, fuer Archiv- und Scanprozesse kann TIFF verlangt werden, und fuer Webgrafiken oder technische Weitergabe kann SVG oder ein echter Vektorworkflow sinnvoll sein. Wer das Zielformat nur waehlt, weil es irgendwo vorgeschlagen wurde, erzeugt leicht eine Datei, die spaeter nicht optimal funktioniert.`,
        `Die verwandten Seiten zu ${relatedNames || "aehnlichen Konvertierungen"} helfen, den naechsten Schritt zu waehlen. Wichtig ist dabei: Ein neues Dateiformat verbessert nicht automatisch die Quelle. Ein unscharfer Scan bleibt unscharf, ein JPG wird durch PDF nicht durchsuchbar, und ein Rasterbild wird durch eine Vektor-Endung nicht zu sauberen Pfaden.`
      ]
    },
    {
      heading: "Praxisbeispiele aus Deutschland",
      paragraphs: [
        `Im deutschen Alltag geht es oft um sehr konkrete Portale: Bewerbungsplattformen, Versicherungsformulare, Kleinanzeigen, Hochschulportale, interne Ticket-Systeme oder Behoerden-Uploads. Diese Systeme akzeptieren nicht immer die Datei, die Nutzer gerade vorliegen haben. Deshalb ist ein schneller, lokaler Formatwechsel nuetzlich, solange das Ergebnis nachvollziehbar bleibt.`,
        `Ein Beispiel: Ein Nutzer hat ein PDF mit drei Seiten und braucht nur die erste Seite als Bild fuer eine Vorschau. In diesem Fall ist ein gezielter JPG-Export sinnvoller als ein grosses Paket. Ein anderes Beispiel: Mehrere Fotos von Belegen sollen als eine Anlage hochgeladen werden. Dann ist der Weg von JPG zu PDF passender. Die Suchintention entscheidet also, nicht der Name des Tools.`
      ]
    },
    {
      heading: "Checkliste vor dem Weitergeben",
      paragraphs: [
        `Vor dem Versand oder Upload sollte die Datei vollstaendig geoeffnet werden. Stimmen Seitenzahl, Ausrichtung, Lesbarkeit und Dateiname? Ist die Datei kleiner als das Limit des Zielsystems? Sind keine privaten Seiten enthalten, die gar nicht weitergegeben werden sollten? Diese kurze Kontrolle ist besonders wichtig, wenn mehrere Seiten oder mehrere Bilder beteiligt sind.`,
        `Fuer wiederkehrende Aufgaben lohnt sich ein einheitlicher Dateiname, etwa mit Datum, Thema und Seitenzahl. So werden aus Downloads keine unuebersichtlichen Sammlungen. Wer beruflich konvertiert, kann zusaetzlich eine lokale Arbeitskopie und eine finale Weitergabekopie trennen. Das ist einfach, verhindert aber viele Verwechslungen.`
      ]
    },
    {
      heading: "Fazit",
      paragraphs: [
        `${keyword} funktioniert am besten, wenn Werkzeug, Format und Zielnutzung zusammenpassen. Diese Seite liefert deshalb nicht nur den direkten Export, sondern auch die Hinweise, die ein brauchbares Ergebnis von einer schnellen, aber fehlerhaften Datei unterscheiden. Wer Qualitaet kurz testet, Datenschutz beachtet und das Zielformat bewusst waehlt, spart spaeter Korrekturen.`,
        `Nutze zuerst das Werkzeug auf dieser Seite und oeffne danach die passenden Detailseiten, wenn dein Fall genauer ist: Windows, Mac, Handy, Online-Nutzung, mehrere Bilder, SVG, TIFF oder Vektorpruefung. So bleibt jede Seite auf einen Kernbegriff fokussiert, waehrend die internen Links den naechsten sinnvollen Schritt anbieten.`
      ]
    }
  ];
}

export function faqFor(page: SeoPage) {
  return [
    {
      question: `Kann ich ${page.keyword} ohne Installation nutzen?`,
      answer:
        "Ja. Das Werkzeug laeuft im Browser und ist fuer typische Alltagsdateien ohne zusaetzliche Installation gedacht. Bei sehr grossen Dateien haengt die Geschwindigkeit vom Geraet und Browser ab."
    },
    {
      question: "Wird meine Datei hochgeladen?",
      answer:
        "Die Konvertierung ist als lokale Browser-Verarbeitung angelegt. Dateien werden fuer den normalen Konvertierungsvorgang nicht an einen externen Server uebertragen."
    },
    {
      question: "Welche Qualitaet sollte ich waehlen?",
      answer:
        "Fuer Web und Vorschau reicht meist eine ausgewogene Einstellung. Fuer kleine Schrift, Tabellen, Druck oder Archiv sollte eine hoehere Skalierung genutzt und das Ergebnis danach geprueft werden."
    },
    {
      question: "Was mache ich, wenn das Ergebnis zu gross ist?",
      answer:
        "Reduziere zuerst die Qualitaet oder die Skalierung und exportiere erneut. Bei Bild-zu-PDF-Workflows hilft es, unscharfe oder unnoetig grosse Ausgangsbilder vorher auszusortieren."
    }
  ];
}

export function relatedPages(page: SeoPage) {
  return page.related
    .map((slug) => allSeoPages.find((item) => item.slug === slug))
    .filter((item): item is SeoPage => Boolean(item))
    .map((item) => ({ ...item, path: pathFor(item) }));
}

export function articleTextFor(page: SeoPage) {
  return buildSeoSections(page)
    .flatMap((section) => [section.heading, ...section.paragraphs])
    .join(" ");
}

export function wordCount(text: string) {
  const words = text
    .replace(/[^\p{L}\p{N}\s-]/gu, " ")
    .split(/\s+/)
    .map((word) => word.trim())
    .filter(Boolean);

  return words.length;
}
