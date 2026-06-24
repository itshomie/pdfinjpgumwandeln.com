import { site } from "./pages";

export interface RatgeberTable {
  columns: string[];
  rows: string[][];
}

export interface RatgeberArticle {
  keyword: string;
  slug: string;
  title: string;
  description: string;
  intro: string[];
  sections: {
    heading: string;
    paragraphs: string[];
    table?: RatgeberTable;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
  relatedTools: string[];
}

export const ratgeberPages: RatgeberArticle[] = [
  {
    keyword: "pdf in bilddatei umwandeln",
    slug: "pdf-in-bilddatei-umwandeln",
    title: "PDF in Bilddatei umwandeln: welches Format passt wirklich?",
    description:
      "PDF in Bilddatei umwandeln: Ratgeber zu JPG, TIFF, SVG und typischen Fehlern bei Upload, Archiv, Druck und Webnutzung.",
    intro: [
      "PDF in Bilddatei umwandeln klingt nach einem einfachen Knopf. In der Praxis entscheidet aber das Zielformat darüber, ob die Datei später wirklich brauchbar ist.",
      "JPG, TIFF und SVG lösen unterschiedliche Probleme. Wer zuerst das Format wählt und erst danach über den Zweck nachdenkt, produziert schnell zu große, unscharfe oder schwer verwendbare Dateien."
    ],
    sections: [
      {
        heading: "Erst den Zweck klären, dann das Format wählen",
        paragraphs: [
          "Viele Nutzer kommen mit einer sehr offenen Aufgabe auf die Seite: Ein PDF soll irgendwie zu einer Bilddatei werden. Das ist noch keine ausreichende Entscheidung. Soll die Datei in ein Formular hochgeladen werden? Soll sie in ein Archiv? Wird sie in einer Webseite angezeigt? Oder muss sie in einem Layoutprogramm weiterverarbeitet werden?",
          "Für einen schnellen Upload ist JPG oft die bequemste Lösung. Für bestimmte Scan- und Archivprozesse kann TIFF verlangt werden. Für Webeinbettung oder grafische Vorschauen wirkt SVG naheliegend, ist aber nur dann sinnvoll, wenn die Grenzen des Formats verstanden sind.",
          "Ein guter Ablauf beginnt deshalb nicht mit maximaler Qualität, sondern mit einer simplen Frage: Was soll die Bilddatei nach der Umwandlung leisten?"
        ],
        table: {
          columns: ["Ziel", "Passendes Format", "Worauf achten"],
          rows: [
            ["Webformular oder Anzeige", "JPG", "Lesbarkeit und Dateigröße prüfen"],
            ["Scan- oder Archivsystem", "TIFF", "Vorgaben zu Auflösung und Farbe beachten"],
            ["Webvorschau oder Einbettung", "SVG", "Nicht mit echter Vektorisierung verwechseln"],
            ["Druck oder Produktion", "meist PDF oder Spezialsoftware", "Vorgaben der Druckerei prüfen"]
          ]
        }
      },
      {
        heading: "JPG ist bequem, aber nicht für alles richtig",
        paragraphs: [
          "JPG ist für die meisten Alltagsfälle der schnellste Weg. Die Datei lässt sich fast überall öffnen, in Portalen hochladen und per E-Mail verschicken. Für Fotos, gescannte Seiten und Vorschauen ist das praktisch.",
          "Der Nachteil liegt in der Kompression. Kleine Schrift, Tabellenlinien und Stempel können leiden, wenn die Auflösung zu niedrig gewählt wird. Ein PDF mit viel Text sollte deshalb nach dem Export immer in Originalgröße geöffnet werden.",
          "Wenn das PDF mehrere Seiten hat, entstehen mehrere Bilddateien. Das ist für einzelne Uploads gut, kann aber bei langen Dokumenten unübersichtlich werden. Saubere Dateinamen mit Seitennummern sind dann wichtiger als noch eine weitere Qualitätsstufe."
        ]
      },
      {
        heading: "TIFF ist eher Arbeitsformat als Alltagsformat",
        paragraphs: [
          "TIFF taucht häufig bei Archiven, Scans, DMS-Systemen oder Druckvorstufe auf. Dort kann es sinnvoll sein, weil es Bilddaten stabil und je nach Einstellung verlustarm speichern kann.",
          "Für normale Nutzer ist TIFF aber oft unbequem. Viele Webformulare akzeptieren es nicht, manche Browser zeigen es nicht direkt an, und die Dateien können deutlich größer werden als JPGs.",
          "Wenn ein Empfänger ausdrücklich TIFF verlangt, ist das ein klarer Grund. Wenn niemand TIFF verlangt, ist ein JPG oder ein gut vorbereitetes PDF häufig die bessere Wahl. Muss man wirklich TIFF erzeugen, nur weil es technisch möglich ist? Meistens nicht."
        ],
        table: {
          columns: ["Frage", "Wenn ja", "Wenn nein"],
          rows: [
            ["Gibt es eine TIFF-Vorgabe?", "TIFF testen", "JPG oder PDF prüfen"],
            ["Muss die Datei archiviert werden?", "Original erhalten", "kleineres Format wählen"],
            ["Ist der Upload begrenzt?", "Testdatei erzeugen", "Qualität höher wählen"],
            ["Ist Text sehr klein?", "Auflösung kontrollieren", "Dateigröße sparen"]
          ]
        }
      },
      {
        heading: "SVG aus PDF wird oft falsch verstanden",
        paragraphs: [
          "SVG klingt nach Vektor. Trotzdem wird aus einem gescannten PDF keine echte Vektorgrafik, nur weil das Ergebnis als SVG gespeichert wird. Häufig enthält eine solche Datei lediglich eine gerenderte Seitenvorschau.",
          "Für Webdokumentation kann das reichen. Für Logos, Schneidedaten, technische Pläne oder bearbeitbare Diagramme reicht es nicht. Dann muss geprüft werden, ob im PDF echte Pfade, Textobjekte und passende Schriften vorhanden sind.",
          "Wer eine Bilddatei nur ansehen oder einbetten möchte, kann mit einer Vorschau zufrieden sein. Wer sie bearbeiten möchte, braucht eine andere Prüfung."
        ]
      },
      {
        heading: "Ein kleiner Test verhindert falsche Stapelarbeit",
        paragraphs: [
          "Bei langen PDFs sollte nicht sofort das ganze Dokument exportiert werden. Eine einzelne Testseite zeigt schneller, ob Schrift lesbar bleibt, ob Ränder abgeschnitten werden und ob das Zielsystem die Datei akzeptiert.",
          "Erst wenn dieser Test passt, lohnt sich der vollständige Export. Das spart Zeit und verhindert, dass zwanzig oder fünfzig Seiten mit einer falschen Einstellung neu erzeugt werden müssen.",
          "Gerade bei sensiblen Dokumenten ist dieser Schritt auch datensparsam. Man gibt nicht mehr Seiten weiter als nötig und erkennt früh, ob lokale Verarbeitung genügt oder ein anderes Werkzeug gebraucht wird."
        ]
      }
    ],
    faqs: [
      {
        question: "Welches Bildformat ist für PDF-Seiten am einfachsten?",
        answer: "Für normale Uploads und Vorschauen ist JPG meistens am einfachsten."
      },
      {
        question: "Ist TIFF besser als JPG?",
        answer: "Nur wenn ein Archiv-, Scan- oder Druckworkflow TIFF verlangt. Für Alltag und Web ist JPG oft praktischer."
      },
      {
        question: "Kann SVG ein PDF automatisch vektorisieren?",
        answer: "Nein. SVG kann eine Vorschau enthalten. Echte Vektoren hängen von der PDF-Quelle ab."
      }
    ],
    relatedTools: ["pdf-in-jpg-umwandeln-online", "pdf-in-tiff-umwandeln", "pdf-in-svg-umwandeln"]
  },
  {
    keyword: "pdf in eps umwandeln",
    slug: "pdf-in-eps-umwandeln",
    title: "PDF in EPS umwandeln: wann der Umweg sinnvoll ist",
    description:
      "PDF in EPS umwandeln: verständlicher Ratgeber zu Druckvorstufe, Vektordaten, Schriften, Transparenzen und sicheren Alternativen.",
    intro: [
      "PDF in EPS umwandeln ist keine normale Alltagsaufgabe. Meist steckt dahinter eine Druckerei, ein altes Layoutsystem, ein Plotter oder eine Produktionsvorgabe.",
      "Genau deshalb sollte man nicht blind irgendeinen Online-Konverter nutzen. EPS ist alt, streng und bei modernen PDF-Effekten nicht immer geduldig."
    ],
    sections: [
      {
        heading: "EPS ist ein Produktionsformat, kein Qualitätszauber",
        paragraphs: [
          "EPS kommt aus der PostScript-Welt. Das Format wurde lange für Druckdaten, Grafiken und bestimmte Layoutprogramme genutzt. Es kann nützlich sein, wenn ein System genau dieses Format erwartet.",
          "Aus einem schlechten PDF wird dadurch aber keine bessere Datei. Ein Scan bleibt ein Bild, ein unscharfes Logo bleibt unscharf, und fehlende Schriften tauchen nicht plötzlich wieder auf.",
          "Vor einer Umwandlung sollte deshalb klar sein, warum EPS verlangt wird. Ist es eine echte technische Vorgabe oder nur eine alte Formulierung aus einem Datenblatt?"
        ],
        table: {
          columns: ["Situation", "EPS sinnvoll?", "Besser prüfen"],
          rows: [
            ["Druckerei verlangt EPS ausdrücklich", "möglich", "Version, Farben, Schriften"],
            ["Logo soll bearbeitet werden", "nur mit echten Pfaden", "Originaldatei anfordern"],
            ["PDF ist ein Scan", "kaum sinnvoll", "Rasterqualität verbessern"],
            ["Druckerei akzeptiert PDF/X", "meist nein", "sauberes PDF liefern"]
          ]
        }
      },
      {
        heading: "Vor dem Export die PDF-Quelle ansehen",
        paragraphs: [
          "Ein PDF kann sehr unterschiedliche Inhalte enthalten: Text, Bilder, Vektorpfade, Transparenzen, Ebenen und eingebettete Schriften. Für EPS ist diese Mischung entscheidend.",
          "Wenn die Datei echte Pfade enthält, kann ein Export brauchbar sein. Wenn sie nur aus einem eingebetteten JPG besteht, bringt EPS kaum einen Vorteil. Die Dateiendung ändert dann mehr am Namen als am Inhalt.",
          "Ein schneller Hinweis ist die Vergrößerung. Bleiben Kanten scharf und Text markierbar, ist die Quelle oft besser als bei einem reinen Scan. Sicher ist das aber erst in geeigneter Software."
        ]
      },
      {
        heading: "Schriften, Transparenzen und Farben sind die kritischen Punkte",
        paragraphs: [
          "Moderne PDFs können Transparenzen, Farbprofile, Ebenen und eingebettete Schriften enthalten. EPS behandelt solche Dinge je nach Werkzeug und Zielsystem anders.",
          "Beim Export können Transparenzen reduziert, Schriften ersetzt oder Farben verändert werden. Das fällt manchmal erst in der Druckvorschau oder beim Plotten auf.",
          "Darum sollte eine EPS-Datei nie ungeprüft weitergegeben werden. Öffne sie in der Zielsoftware und vergleiche sie mit einer sichtbaren Kontrollversion des PDFs."
        ],
        table: {
          columns: ["Prüfpunkt", "Risiko", "Sinnvolle Kontrolle"],
          rows: [
            ["Schriften", "Ersatz oder Verschiebung", "Textbild vergleichen"],
            ["Transparenzen", "flache oder fehlerhafte Darstellung", "Preflight nutzen"],
            ["Farben", "abweichende Profile", "CMYK/RGB-Vorgabe klären"],
            ["Schnittpfade", "fehlende Produktionsdaten", "in Zielsoftware öffnen"]
          ]
        }
      },
      {
        heading: "Welche Werkzeuge für EPS realistischer sind",
        paragraphs: [
          "Für ernsthafte EPS-Ausgaben sind Programme wie Illustrator, Inkscape, Ghostscript oder Druckvorstufenwerkzeuge realistischer als ein einfacher Browser-Konverter. Sie zeigen mehr Details und erlauben Kontrolle vor dem Speichern.",
          "Ein Browser kann trotzdem nützlich sein, wenn zuerst nur geprüft werden soll, ob das PDF Text enthält, welche Seiten vorhanden sind oder ob ein einfacherer Weg genügt.",
          "Wenn Produktionsdaten betroffen sind, ist die sauberste Lösung oft nicht Konvertierung, sondern die Originaldatei. Bei Logos, CAD-Plänen oder Layoutdaten ist sie meistens wertvoller als jeder nachträgliche Export.",
          "Für kleine Freigaben kann ein erzeugtes EPS ausreichen, wenn es nur geöffnet und betrachtet werden muss. Sobald aber Maße, Linien, Schriften oder Farben produktiv verwendet werden, sollte die Datei nicht nur heruntergeladen, sondern in genau dem Programm geprüft werden, das später damit arbeitet."
        ]
      },
      {
        heading: "Datenschutz bei Druck- und Markendaten",
        paragraphs: [
          "Druckdaten enthalten häufig Marken, Kundendaten, Entwürfe oder technische Zeichnungen. Solche Dateien sollte man nicht unnötig an externe Konverter senden.",
          "Wenn EPS wirklich nötig ist, lohnt sich eine lokale Vorprüfung und danach ein kontrollierter Export mit passender Software. Wenn EPS nicht zwingend ist, ist ein korrekt erzeugtes PDF oft sicherer und einfacher.",
          "Die praktische Frage lautet also nicht: Wie bekomme ich irgendwie EPS? Die bessere Frage lautet: Welches Format akzeptiert der nächste Schritt wirklich?"
        ]
      }
    ],
    faqs: [
      {
        question: "Kann ich jedes PDF in EPS umwandeln?",
        answer: "Technisch oft ja, sinnvoll aber nur bei geeigneten Quellen und klarer EPS-Anforderung."
      },
      {
        question: "Wird ein Scan durch EPS bearbeitbar?",
        answer: "Nein. Ein Scan bleibt ein Rasterbild und braucht für echte Vektoren eine separate Nachzeichnung."
      },
      {
        question: "Was sollte ich zuerst fragen?",
        answer: "Ob wirklich EPS verlangt wird oder ob ein korrektes PDF mit den richtigen Druckvorgaben genügt."
      }
    ],
    relatedTools: ["pdf-in-svg-umwandeln", "svg-in-pdf-umwandeln", "pdf-in-tiff-umwandeln"]
  },
  {
    keyword: "pdf in vektordatei umwandeln",
    slug: "pdf-in-vektordatei-umwandeln",
    title: "PDF in Vektordatei umwandeln: was wirklich geht",
    description:
      "PDF in Vektordatei umwandeln: Ratgeber zu echten Vektoren, Scans, SVG, EPS, Originaldaten und typischen Fehlern.",
    intro: [
      "PDF in Vektordatei umwandeln ist eine dieser Aufgaben, bei denen die Erwartung oft größer ist als die Datei selbst.",
      "Ein PDF kann Vektoren enthalten. Es kann aber auch nur ein Scan, ein Screenshot oder ein eingebettetes Bild sein. Der Unterschied entscheidet alles."
    ],
    sections: [
      {
        heading: "PDF ist ein Container, keine Garantie für Vektoren",
        paragraphs: [
          "Viele Menschen sehen scharfe Linien in einem PDF und gehen davon aus, dass es automatisch eine Vektordatei ist. Das stimmt nicht immer. PDF ist ein Containerformat und kann sehr unterschiedliche Inhalte tragen.",
          "Eine technische Zeichnung kann echte Pfade enthalten. Ein gescanntes Dokument kann dagegen nur aus Pixeln bestehen. Ein Logo kann als Vektor vorliegen oder als eingebettetes JPG.",
          "Vor jeder Umwandlung muss deshalb geprüft werden, was im PDF wirklich steckt. Ohne diese Prüfung wird aus einer Konvertierung schnell ein Ratespiel."
        ],
        table: {
          columns: ["PDF-Inhalt", "Vektor-Chance", "Nächster Schritt"],
          rows: [
            ["markierbarer Text", "mittel", "Schriften und Export prüfen"],
            ["saubere Pfade oder Diagramme", "hoch", "in Vektorsoftware öffnen"],
            ["Scan oder Foto", "niedrig", "Nachzeichnung oder Rasterexport prüfen"],
            ["gemischtes Layout", "unklar", "Seite einzeln testen"]
          ]
        }
      },
      {
        heading: "SVG, EPS und echte Originaldateien unterscheiden",
        paragraphs: [
          "SVG ist für Webgrafiken praktisch. EPS gehört eher zu älteren Druck- und Produktionsprozessen. Beide Formate können sinnvoll sein, aber sie ersetzen nicht automatisch die Originaldatei.",
          "Wenn ein Logo, Plan oder Diagramm wirklich bearbeitet werden soll, ist die Quelle aus Illustrator, InDesign, CAD oder einem anderen Programm fast immer besser.",
          "Eine aus PDF erzeugte Datei kann für Vorschau, Dokumentation oder einfache Weitergabe reichen. Für präzise Bearbeitung sollte sie in der Zielsoftware geprüft werden."
        ]
      },
      {
        heading: "Automatische Vektorisierung hat klare Grenzen",
        paragraphs: [
          "Automatische Vektorisierung zeichnet Pixel nach. Das kann bei einfachen Formen funktionieren, erzeugt aber oft zu viele Punkte, unruhige Kurven und ungenaue Konturen.",
          "Bei Schriften wird es besonders heikel. Nachgezeichnete Buchstaben sehen vielleicht ähnlich aus, sind aber nicht mehr als Text editierbar. Für Logos oder Beschriftungen kann das ein Problem sein.",
          "Für professionelle Arbeit ist Nachbearbeitung fast immer nötig. Wer perfekte Pfade erwartet, sollte nicht nur auf das Wort Vektor im Dateinamen schauen."
        ],
        table: {
          columns: ["Anforderung", "Automatik reicht?", "Besserer Weg"],
          rows: [
            ["kleine Webvorschau", "oft", "SVG-Vorschau testen"],
            ["Logo weiterbearbeiten", "selten", "Originaldatei anfordern"],
            ["Plotter oder Schnitt", "selten", "Pfade manuell prüfen"],
            ["Scan lesbar machen", "nein", "besserer Scan oder OCR"]
          ]
        }
      },
      {
        heading: "Wie man ein PDF vor der Weitergabe prüft",
        paragraphs: [
          "Eine einfache Vorprüfung spart viel Zeit. Zoome stark in das PDF hinein, markiere Text, prüfe Kanten und öffne die Datei wenn möglich in einem Vektorprogramm.",
          "Wenn Text markierbar ist, heißt das noch nicht, dass alle Formen editierbar sind. Wenn Kanten bei starker Vergrößerung pixelig werden, liegt wahrscheinlich Rastermaterial vor.",
          "Für gemischte Dateien sollte jede relevante Seite einzeln bewertet werden. Eine Seite kann Vektoren enthalten, die nächste nur ein Bild.",
          "Hilfreich ist auch ein einfacher Vergleich: Öffne dieselbe Stelle im PDF, im exportierten SVG oder EPS und in der Zielsoftware. Wenn Linien, Textabstände oder Farben schon dort abweichen, wird die Datei später nicht zuverlässiger. Dann ist es besser, die Quelle anzufordern oder die Grafik neu aufzubauen. Dieser kurze Test verhindert falsche Freigaben, unnötige Korrekturrunden und verwechselte Produktionsdaten."
        ]
      },
      {
        heading: "Vertrauliche Dateien lokal einschätzen",
        paragraphs: [
          "Vektordaten betreffen oft Marken, Maschinen, Produktzeichnungen oder interne Dokumente. Eine lokale Einschätzung ist deshalb sinnvoll, bevor Dateien an externe Dienste geschickt werden.",
          "Wenn nur eine schnelle Vorschau gebraucht wird, reicht vielleicht ein Bildexport. Wenn Bearbeitung oder Produktion geplant ist, sollte das Ergebnis in der Zielsoftware geöffnet und nicht nur im Browser angesehen werden.",
          "Der beste Weg ist also selten ein einzelner Konvertierungsbutton. Besser ist eine kurze Entscheidungskette: Inhalt prüfen, Ziel klären, Format wählen, Ergebnis testen."
        ]
      }
    ],
    faqs: [
      {
        question: "Ist jedes PDF eine Vektordatei?",
        answer: "Nein. Ein PDF kann Vektoren enthalten, kann aber auch nur aus Bildern oder Scans bestehen."
      },
      {
        question: "Welches Format ist besser, SVG oder EPS?",
        answer: "Für Web eher SVG, für bestimmte alte Druck- oder Produktionsprozesse manchmal EPS."
      },
      {
        question: "Wann brauche ich die Originaldatei?",
        answer: "Wenn Pfade, Schriften, Farben oder technische Details exakt bearbeitet werden müssen."
      }
    ],
    relatedTools: ["pdf-in-svg-umwandeln", "svg-in-pdf-umwandeln", "pdf-in-tiff-umwandeln"]
  }
];

export function ratgeberPath(article: RatgeberArticle) {
  return `/ratgeber/${article.slug}/`;
}

export function ratgeberBySlug(slug: string) {
  return ratgeberPages.find((article) => article.slug === slug);
}

export function absoluteRatgeberUrl(article: RatgeberArticle) {
  return new URL(ratgeberPath(article), site.url).toString();
}
