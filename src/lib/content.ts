import { allSeoPages, pathFor, type SeoPage } from "../data/pages";

export interface ArticleSection {
  heading: string;
  paragraphs: string[];
}

export interface FaqItem {
  question: string;
  answer: string;
}

interface PageContent {
  sections: ArticleSection[];
  faqs: FaqItem[];
}

const contentBySlug: Record<string, PageContent> = {
  "": {
    sections: [
      {
        heading: "PDF in JPG umwandeln: was am Ergebnis wirklich zählt",
        paragraphs: [
          "Wer eine PDF-Datei als JPG braucht, möchte meistens kein neues Dokument erstellen, sondern eine Seite als Bild weiterverwenden. Genau dafür ist die Startseite aufgebaut: Datei auswählen, Auflösung bewusst setzen, exportieren und danach prüfen, ob Schrift, Stempel und Tabellen im Zielsystem lesbar bleiben.",
          "Der Vorteil von JPG liegt in der breiten Unterstützung. Shops, Messenger, CMS-Systeme und einfache Upload-Formulare akzeptieren Bilder oft schneller als PDF-Dateien. Trotzdem sollte jede Seite nach der Umwandlung kurz geöffnet werden, weil ein schönes Vorschaubild nicht automatisch bedeutet, dass auch kleine Details sauber zu erkennen sind."
        ]
      },
      {
        heading: "Die passende Qualität für JPG-Dateien aus PDF",
        paragraphs: [
          "Für eine Webvorschau reicht oft eine moderate Skalierung, während Rechnungen, Formulare und Präsentationsfolien mehr Reserve brauchen. Kleine Schrift wird nicht durch die Dateiendung scharf, sondern durch genügend Pixel beim Rendern der PDF-Seite.",
          "Eine sehr hohe Einstellung ist aber nicht immer besser. Wenn die Ausgangsdatei nur ein niedriger Scan ist, wächst vor allem die Dateigröße. Sinnvoll ist ein Export, der in der späteren Anwendung gut aussieht und trotzdem klein genug für E-Mail, Portal oder Archiv bleibt."
        ]
      },
      {
        heading: "Mehrseitige PDFs sauber als JPG ablegen",
        paragraphs: [
          "Bei mehreren Seiten ist Ordnung wichtiger als Geschwindigkeit. Die Bilddateien sollten klare Seitennummern tragen, damit beim Hochladen oder Weiterleiten keine Seite vertauscht wird. Ein ZIP-Paket ist praktisch, wenn aus einem langen PDF viele JPG-Dateien entstehen.",
          "Wer nur eine einzelne Seite benötigt, sollte nicht automatisch das gesamte Dokument exportieren. Das spart Zeit, Speicherplatz und verhindert, dass vertrauliche Seiten weitergegeben werden, die für den eigentlichen Zweck gar nicht gebraucht werden."
        ]
      },
      {
        heading: "Datenschutz beim Konvertieren",
        paragraphs: [
          "Viele PDFs enthalten Namen, Adressen, Kundendaten, Vertragsdetails oder interne Notizen. Deshalb ist es sinnvoll, die Umwandlung im Browser lokal auszuführen, statt die Datei erst an einen unbekannten Dienst hochzuladen.",
          "Nach dem Download bleibt Verantwortung beim Nutzer: Ergebnisse sollten nicht dauerhaft im Download-Ordner liegen, gemeinsam genutzte Geräte brauchen besondere Vorsicht, und vor dem Versand sollte kontrolliert werden, ob wirklich nur die vorgesehenen Seiten enthalten sind."
        ]
      },
      {
        heading: "Wann ein anderes Format besser passt",
        paragraphs: [
          "JPG ist ideal für einzelne Seiten, Vorschaubilder und viele Alltags-Uploads. Für zusammenhängende Dokumente ist PDF meist sinnvoller, für Archiv- oder Scanprozesse kann TIFF verlangt werden, und für Layout- oder Webgrafik-Fragen lohnt sich SVG oder eine Vektorprüfung.",
          "Die Unterseiten führen deshalb nicht nur zu Varianten desselben Begriffs, sondern zu konkreten Situationen: online arbeiten, Windows nutzen, am Mac exportieren, am Handy speichern oder ein anderes Zielformat wählen."
        ]
      }
    ],
    faqs: [
      {
        question: "Bleibt die PDF-Datei beim Umwandeln auf meinem Gerät?",
        answer:
          "Ja. Der Konverter ist für lokale Verarbeitung im Browser angelegt. Die Datei wird für den normalen Export nicht an einen Anwendungsserver hochgeladen."
      },
      {
        question: "Warum bekomme ich bei mehreren Seiten ein ZIP?",
        answer:
          "Mehrseitige PDFs erzeugen mehrere JPG-Dateien. Ein ZIP hält diese Dateien zusammen und bewahrt die Reihenfolge über die Dateinamen."
      },
      {
        question: "Welche Einstellung ist für kleine Schrift sinnvoll?",
        answer:
          "Nimm eine höhere Skalierung und öffne das Ergebnis danach bei 100 Prozent. Nur so siehst du, ob Zahlen, Tabellenlinien und Stempel wirklich lesbar sind."
      }
    ]
  },
  "pdf-in-jpg-umwandeln-online": {
    sections: [
      {
        heading: "pdf in jpg umwandeln online: direkt im Browser arbeiten",
        paragraphs: [
          "Wer pdf in jpg umwandeln online sucht, möchte meist schnell arbeiten, ohne Installation und ohne ein weiteres Programm auf dem Rechner. Entscheidend ist dabei, ob das Online-Werkzeug die Datei nur im Browser verarbeitet oder ob zuerst ein Upload auf fremde Server nötig ist.",
          "Diese Seite ist auf den Web-Workflow zugeschnitten. Du öffnest den Konverter, wählst die PDF-Datei aus, legst die Qualität fest und speicherst die JPG-Dateien anschließend lokal. Dadurch passt der Ablauf gut zu Portalen, CMS-Systemen und Formularen, die Bilder statt PDF-Dateien verlangen."
        ]
      },
      {
        heading: "Online heißt nicht automatisch Upload",
        paragraphs: [
          "Viele Nutzer setzen online mit Server-Upload gleich. Für vertrauliche Dokumente ist das problematisch, weil Rechnungen, Ausweise oder interne Unterlagen dann außerhalb des eigenen Geräts verarbeitet werden. Ein lokaler Browser-Export reduziert diesen unnötigen Zwischenschritt.",
          "Natürlich braucht die Webseite selbst eine Internetverbindung. Die ausgewählte Datei muss für den normalen Konvertierungsvorgang aber nicht an einen Konvertierungsserver übertragen werden. Das ist der wichtigste Unterschied zu klassischen Upload-Diensten."
        ]
      },
      {
        heading: "Mehrseitige PDFs online richtig vorbereiten",
        paragraphs: [
          "Bei einer einzelnen Seite reicht meist ein schneller Download. Bei einem mehrseitigen PDF solltest du vorher überlegen, ob alle Seiten als JPG gebraucht werden oder nur bestimmte Seiten für eine Vorschau, Anzeige oder Dokumentation.",
          "Wenn mehrere Bilder entstehen, sind Seitennummern im Dateinamen entscheidend. Sonst landen die Dateien später in falscher Reihenfolge in einem Formular oder Bildarchiv. Öffne das Ergebnis deshalb kurz, bevor du es weiter hochlädst."
        ]
      },
      {
        heading: "Qualität, Dateigröße und Zielportal",
        paragraphs: [
          "Viele Online-Portale begrenzen Dateigröße oder Bildabmessungen. Ein zu großer Export kann dort scheitern, ein zu kleiner Export macht Text unscharf. Der sinnvolle Mittelweg hängt davon ab, ob das JPG nur als Vorschau dient oder wirklich gelesen werden muss.",
          "Für Tabellen, Stempel und kleingedruckte Angaben ist eine höhere Skalierung besser. Für reine Vorschaubilder reicht oft eine kleinere Einstellung. Prüfe das Ergebnis immer im Kontext, in dem es später genutzt wird."
        ]
      },
      {
        heading: "Typische Fehler bei Online-Konvertern vermeiden",
        paragraphs: [
          "Achte darauf, ob ein Dienst klare Angaben zur Verarbeitung macht, ob Wasserzeichen eingefügt werden und ob die Reihenfolge mehrerer Seiten nachvollziehbar bleibt. Gerade kostenlose Online-Angebote unterscheiden sich in diesen Punkten stark.",
          "Wenn du regelmäßig PDF in JPG umwandeln online nutzt, lohnt sich ein fester Ablauf: Datei wählen, Qualität setzen, Export prüfen, Download sauber benennen und erst dann im Zielsystem hochladen."
        ]
      }
    ],
    faqs: [
      {
        question: "Kann ich PDF in JPG online ohne Konto umwandeln?",
        answer:
          "Ja. Für den Browser-Export ist kein Konto nötig. Du wählst die Datei aus und lädst das Ergebnis direkt herunter."
      },
      {
        question: "Was ist bei Online-Tools datenschutzkritisch?",
        answer:
          "Kritisch ist vor allem ein unklarer Server-Upload. Bei sensiblen PDFs solltest du einen Ablauf wählen, bei dem die Datei lokal im Browser verarbeitet wird."
      },
      {
        question: "Warum ist mein online erzeugtes JPG unscharf?",
        answer:
          "Meist wurde die PDF-Seite mit zu niedriger Skalierung gerendert. Stelle eine höhere Qualität ein und prüfe das Bild in Originalgröße."
      }
    ]
  },
  "pdf-in-jpg-umwandeln-windows": {
    sections: [
      {
        heading: "pdf in jpg umwandeln windows: der praktische Ablauf",
        paragraphs: [
          "Unter Windows liegen PDFs oft im Downloads-Ordner, auf dem Desktop oder in einem Projektordner im Explorer. Der schnellste Weg ist deshalb ein Browser-Workflow: Datei auswählen, JPG erzeugen, Download speichern und die Bilder im Explorer kontrollieren.",
          "Die Seite richtet sich an Windows 10 und Windows 11. Sie passt besonders dann, wenn keine zusätzliche Software installiert werden darf oder wenn ein Arbeitsrechner keine Adminrechte für neue Programme zulässt."
        ]
      },
      {
        heading: "Explorer, Dateiendungen und Ordnung",
        paragraphs: [
          "Windows blendet Dateiendungen je nach Einstellung aus. Dadurch können PDF, JPG und ZIP im Alltag leichter verwechselt werden. Nach dem Export solltest du im Explorer prüfen, ob die Dateien wirklich auf .jpg enden und ob ein ZIP-Paket zuerst entpackt werden muss.",
          "Bei mehrseitigen PDFs helfen klare Dateinamen mit Seitennummern. Sortiere den Ordner nach Namen, bevor du die Bilder in ein Portal hochlädst. So erkennst du sofort, ob die Reihenfolge stimmt."
        ]
      },
      {
        heading: "Edge, Chrome und lokale Verarbeitung",
        paragraphs: [
          "Der Konverter läuft in modernen Browsern wie Microsoft Edge oder Chrome. Das ist für Windows-Nutzer praktisch, weil keine separate PDF-Software nötig ist und die ausgewählte Datei für den normalen Export lokal verarbeitet wird.",
          "Auf älteren Geräten kann ein großes PDF trotzdem Zeit brauchen. Wenn der Browser langsam reagiert, beginne mit einer moderaten Qualität oder exportiere nur die erste Seite, um den passenden Wert zu testen."
        ]
      },
      {
        heading: "JPG-Qualität für Office, E-Mail und Upload",
        paragraphs: [
          "Für ein Word-Dokument oder eine PowerPoint-Folie genügt oft eine mittlere Einstellung. Für ein Behördenportal, eine Versicherung oder einen Nachweis mit kleiner Schrift sollte die Auflösung höher sein, damit Zahlen und Unterschriften lesbar bleiben.",
          "Kontrolliere das Bild nicht nur in der kleinen Windows-Vorschau. Öffne es in voller Größe oder füge es probeweise in die Zielanwendung ein. Erst dort zeigt sich, ob das JPG wirklich geeignet ist."
        ]
      },
      {
        heading: "Wann Windows-Bordmittel nicht reichen",
        paragraphs: [
          "Windows kann vieles anzeigen, aber eine PDF-Seite sauber als einzelne JPG-Datei zu exportieren ist nicht immer mit einem Klick erledigt. Screenshots sind nur eine Notlösung, weil sie Bildschirmauflösung, Zoomstufe und sichtbaren Ausschnitt übernehmen.",
          "Ein gezielter Export ist stabiler: Er rendert die Seite als Bild, benennt sie nachvollziehbar und erzeugt bei mehreren Seiten ein Paket, das sich danach im Explorer weiterverwenden lässt."
        ]
      }
    ],
    faqs: [
      {
        question: "Funktioniert der Export unter Windows 11 genauso wie unter Windows 10?",
        answer:
          "Ja. Entscheidend ist ein aktueller Browser. Der Umgang mit Downloads, ZIP-Dateien und Explorer ist unter Windows 10 und 11 sehr ähnlich."
      },
      {
        question: "Warum sollte ich keinen Screenshot der PDF-Seite machen?",
        answer:
          "Ein Screenshot hängt von Zoom und Bildschirmauflösung ab. Ein Export erzeugt gleichmäßigere Bilddateien und ist bei mehreren Seiten besser nachvollziehbar."
      },
      {
        question: "Wo finde ich die erzeugten JPG-Dateien?",
        answer:
          "In der Regel im Downloads-Ordner. Bei mehreren Seiten wird oft ein ZIP heruntergeladen, das du im Explorer zuerst entpacken solltest."
      }
    ]
  },
  "pdf-in-jpg-umwandeln-mac": {
    sections: [
      {
        heading: "pdf in jpg umwandeln mac: Finder, Vorschau und Browser",
        paragraphs: [
          "Am Mac wirkt die Vorschau-App zunächst wie die naheliegende Lösung. Für einzelne Seiten ist sie oft ausreichend, bei mehreren Seiten oder wiederkehrenden Aufgaben wird der Ablauf aber schnell kleinteilig.",
          "Diese Seite setzt deshalb auf einen Browser-Workflow, der gut zu Finder, Safari, Chrome und dem Downloads-Ordner passt. Du wählst das PDF aus, exportierst die Seiten als JPG und kontrollierst das Ergebnis anschließend im Finder."
        ]
      },
      {
        heading: "Wann Vorschau genügt und wann ein Konverter besser ist",
        paragraphs: [
          "Wenn du nur eine einzelne Seite manuell speichern möchtest, kann Vorschau reichen. Sobald mehrere Seiten, ein einheitlicher Dateiname oder ein ZIP-Paket gebraucht werden, ist ein gezielter Export übersichtlicher.",
          "Das gilt besonders für Präsentationen, gescannte Unterlagen oder PDFs aus Mail und iCloud Drive. Dort ist es hilfreich, die Seiten direkt in einer nachvollziehbaren Reihenfolge als Bilder abzulegen."
        ]
      },
      {
        heading: "Safari, Chrome und iCloud-Dateien",
        paragraphs: [
          "Dateien aus iCloud Drive sind nicht immer sofort vollständig lokal verfügbar. Wenn ein PDF beim Auswählen nicht reagiert oder ungewöhnlich lange lädt, öffne es zuerst im Finder und warte, bis macOS die Datei geladen hat.",
          "Safari und Chrome speichern Downloads je nach Einstellung an unterschiedlichen Orten. Prüfe daher vor dem nächsten Upload, ob die JPG-Dateien im Downloads-Ordner, auf dem Schreibtisch oder in einem selbst gewählten Ordner liegen."
        ]
      },
      {
        heading: "Retina-Display ist kein Qualitätsbeweis",
        paragraphs: [
          "Mac-Displays lassen viele Bilder schärfer wirken, als sie später in einem Portal oder auf einem anderen Gerät erscheinen. Darum sollte ein exportiertes JPG bei 100 Prozent oder direkt in der Zielanwendung geprüft werden.",
          "Wenn Tabellenlinien oder kleingedruckte Angaben wichtig sind, wähle eine höhere Skalierung. Für reine Webvorschauen oder Folienbilder reicht häufig eine ausgewogene Einstellung mit kleinerer Dateigröße."
        ]
      },
      {
        heading: "PDF-Seiten am Mac sauber weitergeben",
        paragraphs: [
          "Vor dem Versand solltest du die erzeugten Dateien umbenennen oder zumindest die Seitennummern kontrollieren. Gerade AirDrop, Mail und Cloud-Ordner können mehrere ähnlich benannte Dateien schnell unübersichtlich machen.",
          "Wenn das Ergebnis an Kunden, Schule oder Behörden geht, lohnt sich ein letzter Blick: richtige Seite, richtige Ausrichtung, lesbare Schrift und keine vertraulichen Seiten, die versehentlich mit exportiert wurden."
        ]
      }
    ],
    faqs: [
      {
        question: "Kann ich PDF in JPG am Mac ohne App-Installation umwandeln?",
        answer:
          "Ja. Ein aktueller Browser reicht aus. Die Datei wird ausgewählt, lokal verarbeitet und danach als JPG oder ZIP heruntergeladen."
      },
      {
        question: "Ist Vorschau am Mac schlechter?",
        answer:
          "Nein. Vorschau ist für einzelne Exporte nützlich. Für mehrere Seiten und klare Dateinamen ist ein spezialisierter Browser-Ablauf oft bequemer."
      },
      {
        question: "Warum ist das JPG im Zielportal weniger scharf als am Mac?",
        answer:
          "Retina-Displays kaschieren niedrige Auflösung. Prüfe das JPG in Originalgröße und erhöhe bei kleiner Schrift die Skalierung."
      }
    ]
  },
  "pdf-in-jpg-umwandeln-handy": {
    sections: [
      {
        heading: "pdf in jpg umwandeln handy: mobil ohne App-Zwang",
        paragraphs: [
          "Am Handy entsteht der Bedarf oft unterwegs: Ein PDF aus Mail, Messenger, Dateien-App oder Cloud-Speicher soll als Bild in ein Formular, eine Anzeige oder einen Chat. Dafür ist ein Browser-Konverter praktischer als eine zusätzliche App mit Zugriff auf die gesamte Galerie.",
          "Die mobile Bedienung muss besonders klar sein. Datei auswählen, Qualität setzen, Export starten und das Ergebnis im Download-Ordner oder Teilen-Menü wiederfinden: Das sind die Schritte, die auf kleinem Bildschirm zuverlässig funktionieren müssen."
        ]
      },
      {
        heading: "iPhone, Android und der Speicherort",
        paragraphs: [
          "Auf dem iPhone landen Downloads häufig in der Dateien-App, auf Android je nach Browser im Downloads-Ordner oder direkt in einer Benachrichtigung. Wenn du das JPG weitergeben willst, öffne es zuerst einmal selbst.",
          "Bei Cloud-Dateien kann es sein, dass das PDF vor dem Export lokal geladen werden muss. Warte, bis die Datei vollständig verfügbar ist, statt den Export mehrfach zu starten."
        ]
      },
      {
        heading: "Lesbarkeit ist wichtiger als maximale Kompression",
        paragraphs: [
          "Auf dem Handy wirken Bilder in der Vorschau schnell ausreichend, weil sie stark verkleinert angezeigt werden. Entscheidend ist aber, ob kleine Schrift, Tabellen, Stempel oder Unterschriften im Zielportal noch lesbar sind.",
          "Wähle bei Dokumenten mit Text lieber eine höhere Skalierung. Wenn das Ergebnis zu groß wird, reduziere danach gezielt die Qualität, statt sofort mit einer sehr kleinen Einstellung zu beginnen."
        ]
      },
      {
        heading: "Mehrseitige PDFs mobil realistisch behandeln",
        paragraphs: [
          "Viele Seiten bedeuten am Smartphone mehr Speicherbedarf und längere Wartezeit. Wenn du nur eine Seite brauchst, exportiere nicht das gesamte PDF. Das spart Akku, Datenchaos und spätere Suche im Download-Ordner.",
          "Bei mehreren JPG-Dateien ist ein ZIP hilfreich, aber nicht jede mobile App zeigt ZIP-Inhalte sofort bequem an. Prüfe daher, ob das Zielsystem einzelne Bilder oder ein entpacktes Paket erwartet."
        ]
      },
      {
        heading: "Datenschutz auf dem Smartphone",
        paragraphs: [
          "Gerade am Handy enthalten PDFs oft sensible Inhalte aus Mail, Messenger oder Cloud-Konten. Eine lokale Umwandlung vermeidet, dass du dafür eine unbekannte App installieren oder einer App Zugriff auf viele private Dateien geben musst.",
          "Nach dem Export solltest du nicht benötigte Kopien löschen. Das gilt besonders für Ausweise, Rechnungen, Verträge und medizinische Unterlagen, die sonst dauerhaft in Downloads oder zuletzt verwendeten Dateien sichtbar bleiben."
        ]
      }
    ],
    faqs: [
      {
        question: "Kann ich am Handy mehrere PDF-Seiten als JPG speichern?",
        answer:
          "Ja, aber große PDFs brauchen auf Smartphones mehr Zeit und Speicher. Wenn möglich, exportiere nur die tatsächlich benötigten Seiten."
      },
      {
        question: "Wo finde ich das JPG nach dem Download?",
        answer:
          "Unter iOS meist in der Dateien-App, unter Android häufig im Downloads-Ordner des Browsers. Der genaue Ort hängt von Browser und Geräteeinstellung ab."
      },
      {
        question: "Brauche ich dafür Zugriff auf meine Galerie?",
        answer:
          "Nein. Für PDF zu JPG wählst du die PDF-Datei aus. Eine lokale Browser-Verarbeitung benötigt keinen pauschalen Galeriezugriff."
      }
    ]
  },
  "pdf-in-bilddatei-umwandeln": {
    sections: [
      {
        heading: "pdf in bilddatei umwandeln: zuerst das Zielformat klären",
        paragraphs: [
          "Wer PDF in Bilddatei umwandeln sucht, weiß oft noch nicht, ob JPG, TIFF oder SVG die beste Wahl ist. Genau diese Entscheidung ist wichtig, weil jedes Format einen anderen Zweck erfüllt und nicht jedes Zielsystem alle Bildarten akzeptiert.",
          "JPG eignet sich für Web, Vorschau und viele Alltags-Uploads. TIFF ist eher ein Archiv- und Scanformat. SVG kann für Webgrafiken nützlich sein, ersetzt aber keine echte Vektordatei, wenn das PDF nur aus einem Scan besteht."
        ]
      },
      {
        heading: "JPG, TIFF und SVG unterscheiden",
        paragraphs: [
          "JPG komprimiert stark und ist dadurch handlich. Für Fotos, farbige Seiten und schnelle Vorschauen ist das ideal, bei sehr kleiner Schrift oder Liniengrafiken muss die Qualität aber sorgfältig gewählt werden.",
          "TIFF speichert Bilddaten oft größer, dafür stabiler für bestimmte Archiv- oder Druckprozesse. SVG ist ein Webformat und kann skalierbar sein, doch ein gerendertes PDF als SVG bleibt häufig eine eingebettete Bildvorschau."
        ]
      },
      {
        heading: "Nicht jede Bilddatei verbessert die PDF-Quelle",
        paragraphs: [
          "Ein Formatwechsel ist keine Qualitätsreparatur. Ein unscharfer Scan bleibt unscharf, ein Foto in einer PDF wird durch SVG nicht plötzlich zu sauberen Pfaden, und ein niedrig aufgelöstes Dokument gewinnt durch TIFF nicht automatisch Details.",
          "Darum sollte die Ausgangsdatei vor dem Export kurz geprüft werden. Wenn das PDF bereits schlecht lesbar ist, hilft eher ein besserer Scan oder eine höhere Renderauflösung als ein anderes Dateiformat."
        ]
      },
      {
        heading: "Bilddateien für Uploads und Weitergabe",
        paragraphs: [
          "Viele Portale nennen nur grob „Bilddatei“ und akzeptieren tatsächlich nur JPG oder PNG. Andere Systeme in Archiv, Druckvorstufe oder Dokumentenmanagement verlangen explizit TIFF. Lies die Vorgaben des Zielsystems, bevor du exportierst.",
          "Wenn keine Vorgabe existiert, ist JPG meist die pragmatische Wahl. Es lässt sich fast überall öffnen, ist klein genug für E-Mail und funktioniert in den meisten Formularen ohne zusätzliche Software."
        ]
      },
      {
        heading: "Sensible PDFs lokal vorbereiten",
        paragraphs: [
          "Die Formatentscheidung passiert oft kurz vor dem Weitergeben. Deshalb ist lokale Verarbeitung sinnvoll: Du kannst das PDF prüfen, eine Bilddatei erzeugen und nur das Ergebnis weiterleiten, das wirklich gebraucht wird.",
          "Achte bei mehrseitigen Dokumenten darauf, ob alle Seiten als einzelne Bilddateien entstehen sollen. Manchmal reicht eine Titelseite oder eine Vorschau, während das vollständige PDF intern bleiben sollte."
        ]
      }
    ],
    faqs: [
      {
        question: "Welche Bilddatei ist für ein PDF am sinnvollsten?",
        answer:
          "Für normale Uploads ist JPG meist passend. TIFF ist eher für Archiv- und Scanprozesse gedacht, SVG für Web- oder Layouttests."
      },
      {
        question: "Wird ein PDF durch SVG automatisch vektoriell?",
        answer:
          "Nein. Wenn die PDF-Seite nur gerendert wird, enthält das SVG oft eine Bildvorschau. Echte Vektoren hängen von der Ausgangsdatei ab."
      },
      {
        question: "Warum ist TIFF so groß?",
        answer:
          "TIFF speichert Bilddaten häufig verlustarm oder unkomprimiert. Das ist für manche Workflows gewünscht, aber für normale Web-Uploads meist zu schwer."
      }
    ]
  },
  "jpg-in-pdf-umwandeln": {
    sections: [
      {
        heading: "jpg in pdf umwandeln: aus Bildern ein Dokument machen",
        paragraphs: [
          "Bei jpg in pdf umwandeln geht es nicht nur um eine neue Dateiendung. Einzelne Fotos, Scans oder Screenshots sollen zu einem Dokument werden, das sich leichter versenden, archivieren oder in ein Portal hochladen lässt.",
          "Der wichtigste Punkt ist die Reihenfolge. Was im Bilderordner noch lose nebeneinanderliegt, wird im PDF zu einer festen Seitenfolge. Deshalb sollten Dateinamen, Drehung und Bildqualität vor dem Export geprüft werden."
        ]
      },
      {
        heading: "Welche Bilder sich für ein PDF eignen",
        paragraphs: [
          "Gut geeignet sind gerade fotografierte Belege, klare Scans, Screenshots mit lesbarer Schrift und Fotos von unterschriebenen Formularen. Unscharfe, abgeschnittene oder zu dunkle Bilder werden im PDF nicht besser.",
          "Wenn mehrere Bilder zusammengehören, sollten sie vor dem Export inhaltlich sortiert werden: Deckblatt zuerst, dann Anlagen, dann Nachweise. So entsteht ein PDF, das Empfänger ohne Rückfragen lesen können."
        ]
      },
      {
        heading: "Seitenformat und Bildgröße verstehen",
        paragraphs: [
          "Ein PDF aus JPG-Dateien übernimmt die Bildproportionen. Hochformatige Fotos wirken wie Dokumentseiten, querformatige Screenshots können dagegen breite Seiten erzeugen. Das ist nicht falsch, sollte aber zum Zweck passen.",
          "Sehr große Handyfotos können ein PDF unnötig aufblähen. Für einen Upload zählt meist Lesbarkeit, nicht die maximale Kameraauflösung. Prüfe deshalb nach dem Export die Dateigröße und öffne das PDF einmal vollständig."
        ]
      },
      {
        heading: "Datenschutz bei Belegen und Ausweisen",
        paragraphs: [
          "JPG-Dateien zeigen oft sensible Informationen: Namen, Adressen, Kundennummern, Ausweisdaten oder medizinische Angaben. Eine lokale Umwandlung ist hier sinnvoll, weil die Bilder nicht erst an einen fremden Dienst übertragen werden müssen.",
          "Nach dem Erstellen des PDFs solltest du die losen Ausgangsbilder nicht unnötig in Downloads oder Galerie liegen lassen. Gerade bei Ausweisen und Verträgen ist eine klare Ablage wichtig."
        ]
      },
      {
        heading: "Wann PDF besser ist als einzelne JPGs",
        paragraphs: [
          "Ein PDF ist immer dann besser, wenn mehrere Bilder zusammen eine Aussage bilden. Das gilt für Bewerbungsanlagen, Versicherungsnachweise, Steuerbelege, Hausaufgaben oder fotografierte Vertragsseiten.",
          "Ein einzelnes JPG ist schneller geteilt, aber ein PDF hält die Reihenfolge und wirkt formaler. Wenn der Empfänger ein Dokument erwartet, ist der Weg von JPG zu PDF meist die sauberere Lösung."
        ]
      }
    ],
    faqs: [
      {
        question: "Kann ich mehrere JPG-Dateien in ein PDF umwandeln?",
        answer:
          "Ja. Wähle mehrere Bilder aus und prüfe vor dem Export die Reihenfolge. Jedes Bild wird als eigene PDF-Seite abgelegt."
      },
      {
        question: "Werden unscharfe Fotos im PDF schärfer?",
        answer:
          "Nein. Das PDF übernimmt die Qualität der Ausgangsbilder. Unscharfe oder abgeschnittene Fotos solltest du vorher ersetzen."
      },
      {
        question: "Warum ist mein PDF aus JPG-Dateien so groß?",
        answer:
          "Meist sind die Fotos sehr hoch aufgelöst. Sortiere unnötige Bilder aus und nutze nur Aufnahmen, die für den Zweck wirklich gebraucht werden."
      }
    ]
  },
  "mehrere-jpg-in-pdf-umwandeln": {
    sections: [
      {
        heading: "mehrere jpg in pdf umwandeln: Reihenfolge zuerst",
        paragraphs: [
          "Wenn mehrere JPG in PDF umgewandelt werden, entscheidet die Reihenfolge über die Verständlichkeit des Dokuments. Belege, Formulare oder Aufgabenblätter müssen später in genau der Reihenfolge erscheinen, in der der Empfänger sie lesen soll.",
          "Dateinamen wie IMG_1001 und IMG_0999 sind dafür riskant. Besser ist eine kurze Kontrolle vor dem Export oder eine Umbenennung mit Nummern, zum Beispiel 01, 02 und 03."
        ]
      },
      {
        heading: "Bilder auswählen, drehen und aussortieren",
        paragraphs: [
          "Vor dem Erstellen des PDFs sollten alle Bilder einmal geöffnet werden. Sind Seiten abgeschnitten? Ist ein Foto verwackelt? Steht ein Beleg auf dem Kopf? Solche Fehler lassen sich vor dem Export deutlich einfacher korrigieren.",
          "Mischungen aus Hoch- und Querformat sind möglich, wirken aber nicht immer professionell. Für Formulare und Nachweise ist ein ruhiger, einheitlicher Bildausschnitt meist besser."
        ]
      },
      {
        heading: "Mehrseitige PDFs für Portale und E-Mail",
        paragraphs: [
          "Viele Upload-Portale akzeptieren nur eine Datei. Genau dafür ist ein PDF aus mehreren JPGs sinnvoll: Alle Bilder bleiben zusammen und können nicht versehentlich getrennt oder falsch hochgeladen werden.",
          "Achte trotzdem auf die Dateigröße. Mehrere Handyfotos in voller Auflösung können schnell ein sehr großes PDF erzeugen. Wenn das Portal ein Limit hat, prüfe die Größe direkt nach dem Download."
        ]
      },
      {
        heading: "Typische Fälle aus dem Alltag",
        paragraphs: [
          "Mehrere JPG in PDF umwandeln ist besonders nützlich für Reisekosten, Versicherungen, Steuerbelege, Schulaufgaben, Bewerbungen und unterschriebene Dokumente. In all diesen Fällen zählt, dass die Seitenfolge eindeutig bleibt.",
          "Wenn ein Bild nur eine unwichtige Vorschau ist, gehört es nicht in das PDF. Ein gutes Dokument enthält nur die Seiten, die für den Vorgang gebraucht werden."
        ]
      },
      {
        heading: "Das fertige PDF prüfen",
        paragraphs: [
          "Öffne das PDF nach dem Export und blättere es vollständig durch. Prüfe erste und letzte Seite, Lesbarkeit, Ausrichtung und Reihenfolge. Diese Kontrolle dauert weniger als eine Minute und verhindert die meisten Rückfragen.",
          "Wenn du das PDF beruflich oder offiziell einreichst, gib ihm einen eindeutigen Namen. Datum, Thema und Seitenzahl helfen später beim Wiederfinden."
        ]
      }
    ],
    faqs: [
      {
        question: "Wie sortiere ich mehrere JPGs vor dem PDF-Export?",
        answer:
          "Am sichersten ist eine klare Dateibenennung mit führenden Nummern. Danach kannst du die Reihenfolge in der Dateiliste leichter kontrollieren."
      },
      {
        question: "Kann jedes JPG eine eigene PDF-Seite werden?",
        answer:
          "Ja. Das ist für Belege, Scans und fotografierte Dokumentseiten meist die beste Struktur."
      },
      {
        question: "Was mache ich bei gemischtem Hoch- und Querformat?",
        answer:
          "Du kannst es exportieren, solltest das Ergebnis aber prüfen. Für formale Unterlagen wirken einheitlich gedrehte Bilder meist sauberer."
      }
    ]
  },
  "jpg-in-pdf-umwandeln-handy": {
    sections: [
      {
        heading: "jpg in pdf umwandeln handy: Fotos direkt einreichen",
        paragraphs: [
          "Am Smartphone entstehen viele Dokumente zuerst als Foto: Quittungen, unterschriebene Formulare, Ausweise, Tafelbilder oder Arbeitsblätter. Mit jpg in pdf umwandeln handy werden daraus Dateien, die sich besser per E-Mail versenden oder in Portale hochladen lassen.",
          "Der wichtigste Schritt passiert vor dem Konverter: Das Foto muss lesbar sein. Gutes Licht, gerade Kanten und ein ruhiger Ausschnitt sind wichtiger als jede spätere PDF-Einstellung."
        ]
      },
      {
        heading: "Galerie, Dateien-App und Reihenfolge",
        paragraphs: [
          "Wenn mehrere Bilder aus der Galerie ausgewählt werden, stimmt die Reihenfolge nicht immer mit der gewünschten Seitenfolge überein. Prüfe daher vor dem Export, welche Aufnahme zuerst erscheinen soll.",
          "Auf iOS und Android unterscheiden sich Teilen-Menüs, Downloads und Dateiauswahl. Öffne das fertige PDF einmal, bevor du es abschickst, damit du nicht nur auf die kleine Vorschau vertraust."
        ]
      },
      {
        heading: "Dateigröße am Smartphone kontrollieren",
        paragraphs: [
          "Handykameras erzeugen große Bilder. Für ein PDF mit mehreren Fotos kann das schnell zu viel werden, besonders bei mobilen Daten oder Upload-Limits. Für Textdokumente reicht oft ein gut lesbares Bild ohne maximale Kameraauflösung.",
          "Wenn das PDF zu groß ist, sortiere doppelte oder unscharfe Fotos aus. Eine zweite saubere Aufnahme ist besser als ein riesiges PDF mit schlechten Seiten."
        ]
      },
      {
        heading: "Private Bilder und sensible Daten",
        paragraphs: [
          "Fotos von Ausweisen, Rechnungen und medizinischen Unterlagen enthalten persönliche Daten. Ein lokaler Browser-Workflow ist am Handy sinnvoll, weil keine zusätzliche App Zugriff auf die gesamte Galerie benötigt.",
          "Nach dem Versand solltest du prüfen, ob die Ausgangsbilder noch in der Galerie, im Download-Ordner oder in zuletzt verwendeten Dateien liegen. Lösche Kopien, die nicht mehr gebraucht werden."
        ]
      },
      {
        heading: "Wann ein Scan besser ist als ein Foto",
        paragraphs: [
          "Für offizielle Dokumente ist eine Scan-App oder ein gerade aufgenommenes Foto mit guter Perspektive oft besser als ein schneller Schnappschuss. Schräg fotografierte Seiten wirken im PDF unruhig und können schwer lesbar sein.",
          "Wenn du regelmäßig Unterlagen vom Handy einreichst, lohnt sich ein fester Ablauf: Foto prüfen, Bilder sortieren, PDF erzeugen, PDF öffnen und erst danach weiterleiten."
        ]
      }
    ],
    faqs: [
      {
        question: "Kann ich mehrere Handyfotos in ein PDF packen?",
        answer:
          "Ja. Wähle alle passenden Bilder aus und kontrolliere die Reihenfolge, bevor du das PDF weitergibst."
      },
      {
        question: "Warum ist mein Handy-PDF zu groß?",
        answer:
          "Moderne Kameras speichern sehr große Fotos. Entferne unnötige Bilder und verwende nur Aufnahmen, die wirklich lesbar und relevant sind."
      },
      {
        question: "Muss ich eine App installieren?",
        answer:
          "Nein. Der Browser-Workflow reicht für typische JPG-zu-PDF-Aufgaben aus und benötigt keinen pauschalen Zugriff auf deine Galerie."
      }
    ]
  },
  "jpg-in-pdf-umwandeln-windows": {
    sections: [
      {
        heading: "jpg in pdf umwandeln windows: Bilder aus dem Explorer bündeln",
        paragraphs: [
          "Unter Windows liegen JPGs oft verstreut in Downloads, Bilderordnern oder auf dem Desktop. Bevor du sie in ein PDF umwandelst, solltest du die Dateien in einem Ordner sammeln und im Explorer nach der gewünschten Reihenfolge sortieren.",
          "Das ist besonders wichtig, wenn aus mehreren Scans oder Fotos eine formale Anlage entstehen soll. Ein PDF übernimmt die Reihenfolge der ausgewählten Bilder, nicht automatisch die inhaltlich richtige Sortierung."
        ]
      },
      {
        heading: "Windows-Druckdialog oder Browser-Konverter",
        paragraphs: [
          "Windows kann Bilder über den Druckdialog als PDF ausgeben. Das ist für einzelne Dateien praktisch, erzeugt aber je nach Einstellung Ränder, Skalierung oder unerwartete Seitenformate.",
          "Ein Browser-Konverter ist direkter, wenn mehrere JPGs zu einem Dokument werden sollen. Du wählst die Bilder aus, erzeugst ein PDF und prüfst es danach in Edge, Acrobat Reader oder einem anderen PDF-Viewer."
        ]
      },
      {
        heading: "Drehung, Dateiendungen und Vorschau",
        paragraphs: [
          "Falsch gedrehte Bilder fallen im Explorer manchmal weniger auf als im fertigen PDF. Öffne kritische Fotos vorher oder nutze die Vorschau, bevor du sie in das Dokument übernimmst.",
          "Wenn Windows Dateiendungen ausblendet, achte auf den Dateityp. PNG oder WebP können je nach Konverter ebenfalls funktionieren, die Seite ist aber auf den typischen JPG-zu-PDF-Fall ausgerichtet."
        ]
      },
      {
        heading: "PDF-Größe für E-Mail und Portale",
        paragraphs: [
          "Viele Windows-Nutzer erstellen PDFs für Bewerbungen, Versicherungen, interne Systeme oder Behördenportale. Diese Stellen haben oft Größenlimits. Ein PDF aus vielen großen Fotos kann dort scheitern, obwohl es lokal problemlos geöffnet wird.",
          "Nach dem Export solltest du die Dateigröße im Explorer prüfen. Wenn sie zu hoch ist, entferne unnötige Bilder oder ersetze riesige Handyfotos durch besser zugeschnittene Aufnahmen."
        ]
      },
      {
        heading: "Saubere Ablage nach dem Export",
        paragraphs: [
          "Speichere das fertige PDF nicht irgendwo im Downloads-Ordner, wenn es später wieder gebraucht wird. Ein klarer Name mit Datum und Zweck verhindert Verwechslungen mit den Ausgangsbildern.",
          "Wenn sensible Bilder verarbeitet wurden, räume auch die temporären Dateien auf. Gerade auf gemeinsam genutzten Windows-Rechnern ist das Teil eines sauberen Workflows."
        ]
      }
    ],
    faqs: [
      {
        question: "Kann Windows JPGs ohne Zusatzprogramm als PDF speichern?",
        answer:
          "Für einfache Fälle ja, etwa über den Druckdialog. Für mehrere Bilder und klare Reihenfolge ist ein Browser-Konverter oft übersichtlicher."
      },
      {
        question: "Warum hat mein PDF unter Windows Ränder?",
        answer:
          "Das passiert häufig beim Drucken als PDF. Ein direkter Bild-zu-PDF-Export kann solche unerwünschten Druckränder vermeiden."
      },
      {
        question: "Wie kontrolliere ich die Reihenfolge?",
        answer:
          "Sortiere die Bilder im Explorer und prüfe das fertige PDF Seite für Seite, bevor du es verschickst oder hochlädst."
      }
    ]
  },
  "jpg-in-pdf-umwandeln-mac": {
    sections: [
      {
        heading: "jpg in pdf umwandeln mac: Bilder auf macOS ordnen",
        paragraphs: [
          "Auf dem Mac kommen JPGs aus AirDrop, Fotos, Mail, Scanner-Apps oder Downloads. Bevor daraus ein PDF wird, sollten die Bilder im Finder gesammelt und in die richtige Reihenfolge gebracht werden.",
          "macOS bietet mit Vorschau bereits gute Bordmittel. Für wiederkehrende Aufgaben oder mehrere Bilder ist ein klarer Browser-Workflow trotzdem angenehm, weil Auswahl, Export und Download in einem Schritt zusammenlaufen."
        ]
      },
      {
        heading: "Vorschau-App und Mehrseiten-PDF",
        paragraphs: [
          "Die Vorschau-App kann Bilder öffnen und als PDF speichern. Wenn du aber viele Dateien hast, kann das Sortieren, Ziehen und Speichern schnell umständlich werden.",
          "Ein Konverter behandelt jedes ausgewählte JPG als Seite und erzeugt daraus ein einzelnes PDF. Danach kannst du es wie gewohnt in Vorschau öffnen und kontrollieren."
        ]
      },
      {
        heading: "Fotos-App, AirDrop und Dateinamen",
        paragraphs: [
          "Bilder aus der Fotos-App haben nach dem Export nicht immer die Namen, die du erwartest. AirDrop speichert Dateien je nach Einstellung ebenfalls an unterschiedlichen Orten. Darum lohnt sich vor dem PDF-Export ein kurzer Blick in den Finder.",
          "Wenn die Reihenfolge wichtig ist, benenne die Bilder mit führenden Zahlen. Das wirkt banal, verhindert aber falsch sortierte PDFs bei Bewerbungsunterlagen, Belegen oder eingescannten Seiten."
        ]
      },
      {
        heading: "Qualität und Seitenformat am Mac",
        paragraphs: [
          "Hochformatige Dokumentfotos ergeben meist natürliche PDF-Seiten. Querformatige Screenshots oder breite Fotos können dagegen sehr breite Seiten erzeugen. Das ist für Präsentationen akzeptabel, für Formulare aber oft unpraktisch.",
          "Prüfe das PDF nach dem Export in Vorschau bei realistischer Zoomstufe. Wenn Text schwer lesbar ist, liegt das meist an der Aufnahmequalität und nicht am PDF-Format."
        ]
      },
      {
        heading: "Sensible Fotos nicht unnötig verteilen",
        paragraphs: [
          "Viele JPGs zeigen private oder berufliche Unterlagen. Lokale Verarbeitung passt gut zum Mac-Workflow, weil die Bilder nicht an einen externen Dienst hochgeladen werden müssen.",
          "Nach dem Erstellen des PDFs solltest du entscheiden, ob die Ausgangsbilder weiterhin gebraucht werden. Gerade bei AirDrop- und Download-Ordnern entstehen sonst schnell doppelte Kopien."
        ]
      }
    ],
    faqs: [
      {
        question: "Kann ich JPGs am Mac mit Vorschau in PDF umwandeln?",
        answer:
          "Ja, besonders für einzelne oder wenige Bilder. Bei vielen Dateien ist ein Konverter mit klarer Reihenfolge oft bequemer."
      },
      {
        question: "Warum stimmt die Reihenfolge nach AirDrop nicht?",
        answer:
          "AirDrop- und Kameradateien haben oft technische Dateinamen. Benenne wichtige Bilder vor dem Export mit 01, 02, 03."
      },
      {
        question: "Wie prüfe ich das PDF am Mac?",
        answer:
          "Öffne es in Vorschau und blättere alle Seiten durch. Achte auf Drehung, Lesbarkeit und vollständige Ränder."
      }
    ]
  },
  "jpg-in-pdf-umwandeln-online": {
    sections: [
      {
        heading: "jpg in pdf umwandeln online: schnell ein PDF erstellen",
        paragraphs: [
          "JPG in PDF umwandeln online ist der passende Weg, wenn Bilder bereits auf dem Gerät liegen und ohne Installation zu einem Dokument zusammengeführt werden sollen. Das betrifft Fotos, Scans, Screenshots und heruntergeladene Bilddateien.",
          "Der Ablauf ist bewusst einfach: Bilder auswählen, Reihenfolge prüfen, PDF erzeugen und herunterladen. Wichtig ist, dass die Bilder nicht erst an einen unklaren Upload-Dienst übertragen werden müssen."
        ]
      },
      {
        heading: "Online-Workflow ohne Konto",
        paragraphs: [
          "Für viele Alltagsfälle ist ein Konto überflüssig. Ein Online-Konverter sollte die Aufgabe direkt erledigen, ohne Registrierung, Warteschlange oder Wasserzeichen, die später im Dokument stören.",
          "Gerade bei kurzfristigen Uploads zählt Verlässlichkeit: Das PDF muss sich öffnen lassen, die Seiten müssen richtig sortiert sein und die Dateigröße muss zum Zielportal passen."
        ]
      },
      {
        heading: "Bilder vor dem Online-Export prüfen",
        paragraphs: [
          "Der Konverter kann kein schlechtes Ausgangsbild retten. Wenn ein Foto verwackelt, zu dunkel oder abgeschnitten ist, wird es auch im PDF so aussehen. Öffne kritische Bilder daher vorher.",
          "Screenshots sollten nicht unnötig viel Rand enthalten, Scans sollten gerade ausgerichtet sein, und Belege sollten vollständig sichtbar sein. Diese Vorbereitung spart spätere Korrekturen."
        ]
      },
      {
        heading: "Datenschutz bei Bildern im Browser",
        paragraphs: [
          "Bilder zeigen oft mehr private Informationen, als man auf den ersten Blick bemerkt: Adressen, Kontonummern, Kundendaten oder Gesichter. Ein lokaler Browser-Workflow ist deshalb sinnvoll, wenn die Bilder nicht auf fremde Server gehören.",
          "Nach dem Download bleibt das fertige PDF auf deinem Gerät. Von dort kannst du es gezielt weitergeben, statt mehrere einzelne Bilder in unterschiedlichen Apps zu verteilen."
        ]
      },
      {
        heading: "Wann online nicht die beste Wahl ist",
        paragraphs: [
          "Bei extrem großen Bildserien, sehr alten Geräten oder instabilen Browsern kann ein Desktop-Programm komfortabler sein. Für typische Alltagsmengen ist der Online-Weg aber schnell genug und leichter zugänglich.",
          "Wenn du regelmäßig sehr viele Dokumente verarbeitest, lohnt sich ein fester Ordner mit klarer Benennung. Für einzelne Aufgaben reicht meist der direkte Browser-Export."
        ]
      }
    ],
    faqs: [
      {
        question: "Kann ich JPG in PDF online ohne Registrierung nutzen?",
        answer:
          "Ja. Für den beschriebenen Browser-Workflow ist keine Anmeldung nötig."
      },
      {
        question: "Bleiben die Bilder in der richtigen Reihenfolge?",
        answer:
          "Sie sollten vor dem Export kontrolliert werden. Bei wichtigen Dokumenten sind Dateinamen mit Nummern am sichersten."
      },
      {
        question: "Kann ich auch PNG oder WebP verwenden?",
        answer:
          "Der Schwerpunkt liegt auf JPG, viele moderne Browser-Workflows können aber auch andere gängige Bildformate verarbeiten."
      }
    ]
  },
  "pdf-in-svg-umwandeln": {
    sections: [
      {
        heading: "pdf in svg umwandeln: Vorschau oder echte Vektoren",
        paragraphs: [
          "Bei pdf in svg umwandeln muss zuerst geklärt werden, was mit SVG gemeint ist. Ein Browser kann eine PDF-Seite rendern und als SVG-Container mit Bildvorschau speichern. Das ist nützlich für Webdarstellung, aber nicht dasselbe wie eine bearbeitbare Vektordatei.",
          "Wenn ein PDF echte Pfade, Textobjekte oder Diagramme enthält, können professionelle Werkzeuge daraus unter Umständen nutzbare Vektordaten gewinnen. Ein gescanntes PDF bleibt dagegen ein Rasterbild, auch wenn es in eine SVG-Datei eingebettet wird."
        ]
      },
      {
        heading: "Wann SVG als Ausgabe sinnvoll ist",
        paragraphs: [
          "SVG eignet sich gut, wenn eine Seite in einer Weboberfläche eingebettet, in einer Dokumentation gezeigt oder als skalierbare Vorschau getestet werden soll. Die Datei lässt sich im Browser öffnen und kann in Webprojekten leichter eingebunden werden als ein PDF.",
          "Für Logos, Plotterdaten oder technische Zeichnungen reicht eine bloße Seitenvorschau nicht. Dort brauchst du echte Pfade, saubere Farben und kontrollierte Schriften."
        ]
      },
      {
        heading: "Grenzen beim PDF-zu-SVG-Export",
        paragraphs: [
          "PDFs können Text, Bilder, Vektoren, Transparenzen und Schriften mischen. Beim Umwandeln in SVG ist deshalb entscheidend, ob Layouttreue oder Bearbeitbarkeit wichtiger ist.",
          "Ein layouttreuer Export kann visuell gut aussehen, enthält aber oft eingebettete Rasterdaten. Ein bearbeitbarer Export ist anspruchsvoller und sollte in Programmen wie Illustrator, Inkscape oder spezialisierten PDF-Werkzeugen geprüft werden."
        ]
      },
      {
        heading: "Qualität für Web und Layout prüfen",
        paragraphs: [
          "Für Webvorschauen zählt, ob die Datei schnell lädt und in der gewünschten Größe scharf genug wirkt. Eine zu hohe Auflösung macht eingebettete Bilder groß, eine zu niedrige Auflösung lässt Text ausfransen.",
          "Öffne das SVG nach dem Export im Browser und in der Zielumgebung. Erst dort zeigt sich, ob Skalierung, Ränder und Farben wie erwartet dargestellt werden."
        ]
      },
      {
        heading: "Datenschutz bei Layoutdateien",
        paragraphs: [
          "PDFs für Design, Produktdaten oder interne Dokumentation enthalten häufig vertrauliche Informationen. Eine lokale Prüfung ist sinnvoll, bevor solche Dateien in ein CMS, Repository oder externes Tool wandern.",
          "Wenn du nur eine Vorschau brauchst, exportiere nur die relevante Seite. So vermeidest du, dass komplette Dokumente weitergegeben werden, obwohl ein einzelner Ausschnitt genügt."
        ]
      }
    ],
    faqs: [
      {
        question: "Wird mein PDF durch SVG automatisch bearbeitbar?",
        answer:
          "Nein. Ein SVG kann eine gerenderte Vorschau enthalten. Bearbeitbare Vektoren hängen von den Inhalten der PDF-Datei ab."
      },
      {
        question: "Wofür ist PDF zu SVG dann sinnvoll?",
        answer:
          "Für Webvorschauen, Dokumentationen und Layouttests, bei denen eine PDF-Seite als skalierbare Datei eingebunden werden soll."
      },
      {
        question: "Warum fehlen Schriften oder Details?",
        answer:
          "PDF-Schriften, Transparenzen und eingebettete Bilder lassen sich nicht immer verlustfrei in SVG-Strukturen übertragen."
      }
    ]
  },
  "pdf-in-tiff-umwandeln": {
    sections: [
      {
        heading: "pdf in tiff umwandeln: ein Format für spezielle Workflows",
        paragraphs: [
          "TIFF ist kein typisches Alltagsformat für schnelle Bildfreigaben. Wer pdf in tiff umwandeln sucht, hat meist eine Vorgabe aus Archiv, Scan-Verarbeitung, Druckvorstufe oder Dokumentenmanagement.",
          "Die Seite behandelt deshalb nicht nur den Export, sondern auch die Frage, ob TIFF wirklich verlangt wird. Für normale Web-Uploads ist JPG meistens handlicher, während TIFF größere, stabilere Bilddaten liefern kann."
        ]
      },
      {
        heading: "Warum TIFF-Dateien groß werden",
        paragraphs: [
          "TIFF speichert Bildinformationen oft verlustarm oder unkomprimiert. Das kann für Archivprozesse sinnvoll sein, führt aber schnell zu deutlich größeren Dateien als bei JPG.",
          "Wenn ein PDF viele Seiten enthält, entstehen entsprechend viele große Bilddateien. Plane Speicherplatz und Download-Zeit ein, bevor du ein langes Dokument vollständig exportierst."
        ]
      },
      {
        heading: "Auflösung für Archiv und Druck",
        paragraphs: [
          "Bei TIFF zählt die Zielvorgabe. Manche Systeme erwarten eine bestimmte Auflösung, Farbtiefe oder Kompression. Ein pauschal hoher Export ist nicht immer besser, wenn das Zielsystem danach eigene Regeln anwendet.",
          "Für Textscans sollte die Schrift klar bleiben, für grafische Seiten sollten Linien und Farbflächen sauber wirken. Prüfe eine Testseite, bevor du ein ganzes Dokument umwandelst."
        ]
      },
      {
        heading: "Mehrseitige PDFs in TIFF-Dateien zerlegen",
        paragraphs: [
          "Browserbasierte Exporte erzeugen häufig eine TIFF-Datei pro PDF-Seite. Das ist für viele Weiterverarbeitungen praktischer als ein komplexes mehrseitiges TIFF, das nicht jede Software gleich interpretiert.",
          "Achte auf Dateinamen mit Seitennummern. In Archiv- und DMS-Systemen ist die Reihenfolge später entscheidend, besonders wenn aus einem Dokument mehrere Einzeldateien entstehen."
        ]
      },
      {
        heading: "Sensible Archivdaten lokal verarbeiten",
        paragraphs: [
          "Archiv- und Scanunterlagen enthalten oft personenbezogene Daten, Verträge oder interne Geschäftsdokumente. Ein lokaler Export im Browser vermeidet unnötige Uploads, bevor die Dateien in das eigentliche Zielsystem gehen.",
          "Nach dem Export solltest du prüfen, ob TIFF im Zielsystem wirklich akzeptiert wird. Manche Webportale schreiben zwar Bilddateien vor, nehmen aber am Ende nur JPG oder PNG an."
        ]
      }
    ],
    faqs: [
      {
        question: "Wann ist TIFF besser als JPG?",
        answer:
          "TIFF ist sinnvoll, wenn ein Archiv-, Scan- oder Druckworkflow dieses Format ausdrücklich verlangt. Für normale Uploads ist JPG meist einfacher."
      },
      {
        question: "Warum erzeugt der Export mehrere TIFF-Dateien?",
        answer:
          "Viele Workflows behandeln jede PDF-Seite als eigene Bilddatei. Das ist oft kompatibler als ein mehrseitiges Spezial-TIFF."
      },
      {
        question: "Kann TIFF die PDF-Qualität verbessern?",
        answer:
          "Nein. TIFF bewahrt gerenderte Bilddaten, verbessert aber keine unscharfe oder niedrig aufgelöste Ausgangsdatei."
      }
    ]
  },
  "pdf-in-eps-umwandeln": {
    sections: [
      {
        heading: "pdf in eps umwandeln: Erwartungen realistisch setzen",
        paragraphs: [
          "EPS ist ein älteres Produktionsformat aus der PostScript-Welt. Wer pdf in eps umwandeln möchte, arbeitet meist mit Druckvorstufe, Plottern, alten Layoutsystemen oder Vorgaben einer Druckerei.",
          "Ein Browser kann ein PDF prüfen und Hinweise liefern, ersetzt aber keinen professionellen EPS-Export. Diese Seite macht deshalb bewusst keine falschen Versprechen: Aus einem schlechten Scan wird durch EPS keine saubere Vektordatei."
        ]
      },
      {
        heading: "Was vor dem EPS-Export geprüft werden sollte",
        paragraphs: [
          "Entscheidend ist, ob das PDF echte Vektorpfade, eingebettete Schriften, saubere Farbräume und transparente Elemente enthält. Je komplexer die PDF-Datei, desto wichtiger ist eine Kontrolle in der Zielsoftware.",
          "Wenn die Datei nur aus einem Bild besteht, kann ein EPS-Export zwar technisch möglich sein, bietet aber keinen Qualitätsgewinn. Für Logos oder Schneidedaten brauchst du möglichst die Originaldatei."
        ]
      },
      {
        heading: "Werkzeuge für PDF zu EPS",
        paragraphs: [
          "Für ernsthafte EPS-Ausgaben kommen Werkzeuge wie Adobe Illustrator, Inkscape, Ghostscript oder Druckvorstufen-Software infrage. Sie können PostScript-spezifische Fragen besser behandeln als ein reiner Webkonverter.",
          "Trotzdem ist eine Voranalyse hilfreich. Seitenzahl, Seitengröße und Textobjekte geben Hinweise darauf, ob die PDF-Datei überhaupt geeignet ist oder ob du zuerst die Quelle anfordern solltest."
        ]
      },
      {
        heading: "Risiken bei Transparenzen, Schriften und Farben",
        paragraphs: [
          "Moderne PDFs enthalten oft Transparenzen, Ebenen, Farbprofile und eingebettete Fonts. EPS kann damit je nach Workflow nur eingeschränkt umgehen. Beim Export können Effekte reduziert, Schriften ersetzt oder Farben verändert werden.",
          "Darum sollte eine EPS-Datei nie ungeprüft in Produktion gehen. Öffne sie in der Zielsoftware oder lasse eine Druckvorstufenprüfung laufen, bevor sie an Druckerei oder Plotter weitergegeben wird."
        ]
      },
      {
        heading: "Datenschutz und Produktionsdaten",
        paragraphs: [
          "Druckdaten können Marken, Kundendaten, Entwürfe oder interne technische Zeichnungen enthalten. Eine lokale Analyse ist sinnvoll, bevor die Datei an externe Konverter oder Dienstleister gesendet wird.",
          "Wenn das PDF vertraulich ist, kläre zuerst, ob EPS wirklich nötig ist. Häufig akzeptiert die Druckerei auch ein korrekt erzeugtes PDF/X oder stellt eigene Exportvorgaben bereit."
        ]
      }
    ],
    faqs: [
      {
        question: "Kann ein Browser PDF direkt in EPS umwandeln?",
        answer:
          "Für professionelle EPS-Ausgabe ist Spezialsoftware nötig. Der Browser kann aber helfen, das PDF vorher zu prüfen und den passenden Workflow zu wählen."
      },
      {
        question: "Wird ein Scan durch EPS vektoriell?",
        answer:
          "Nein. Ein Scan bleibt ein Rasterbild. Für echte Vektoren brauchst du Pfade aus der Originaldatei oder eine gezielte Nachzeichnung."
      },
      {
        question: "Wann sollte ich die Originaldatei anfordern?",
        answer:
          "Immer dann, wenn Logos, Schnittpfade, Schriften oder Produktionsfarben exakt bearbeitet werden müssen."
      }
    ]
  },
  "tiff-in-pdf-umwandeln": {
    sections: [
      {
        heading: "tiff in pdf umwandeln: Archivbilder leichter weitergeben",
        paragraphs: [
          "TIFF-Dateien stammen häufig aus Scannern, Archiven oder Dokumentenmanagementsystemen. Sie sind robust, aber nicht überall bequem zu öffnen. Mit tiff in pdf umwandeln wird aus dem Bildmaterial ein vertrautes Dokumentformat.",
          "Das ist besonders hilfreich, wenn Empfänger kein TIFF anzeigen können oder ein Portal ausdrücklich PDF verlangt. Die Bildinformationen werden als PDF-Seiten abgelegt und lassen sich danach einfacher versenden."
        ]
      },
      {
        heading: "Einseitige und mehrseitige TIFFs",
        paragraphs: [
          "TIFF kann eine einzelne Seite oder mehrere Bilder in einer Datei enthalten. Nicht jeder Browser und nicht jede Software behandelt mehrseitige TIFFs gleich, deshalb ist eine Kontrolle nach dem Export wichtig.",
          "Wenn mehrere Seiten erkannt werden, sollten sie im PDF vollständig und in der richtigen Reihenfolge erscheinen. Öffne das fertige Dokument und blättere es einmal durch."
        ]
      },
      {
        heading: "Dateigröße und Arbeitsspeicher",
        paragraphs: [
          "Hochauflösende TIFFs können sehr groß sein. Beim Umwandeln in PDF braucht der Browser genügend Arbeitsspeicher, um die Bilddaten zu dekodieren und auf PDF-Seiten zu platzieren.",
          "Wenn ein sehr großes TIFF Probleme macht, teste zuerst eine kleinere Datei oder teile den Vorgang auf. Für alte Archivbestände kann auch spezialisierte Desktop-Software sinnvoll sein."
        ]
      },
      {
        heading: "PDF als Austauschformat",
        paragraphs: [
          "PDF ist für E-Mail, Uploads und normale Dokumentenablage deutlich verbreiteter als TIFF. Das bedeutet nicht, dass TIFF schlechter ist, sondern dass PDF im Alltag leichter weitergegeben werden kann.",
          "Für die Langzeitarchivierung kann das ursprüngliche TIFF trotzdem wichtig bleiben. Bewahre die Quelldatei auf, wenn sie Teil eines Archiv- oder Scanprozesses ist."
        ]
      },
      {
        heading: "Sensible Scans lokal umwandeln",
        paragraphs: [
          "TIFFs enthalten oft Verträge, Personalunterlagen, medizinische Dokumente oder gescannte Akten. Eine lokale Umwandlung ist deshalb sinnvoll, bevor die Datei an Dritte geht.",
          "Nach dem Export solltest du prüfen, ob das PDF alle Seiten enthält und ob keine unnötigen Scans mitgesendet werden. Gerade Archivdateien enthalten manchmal mehr Seiten als erwartet."
        ]
      }
    ],
    faqs: [
      {
        question: "Kann ein mehrseitiges TIFF in ein PDF umgewandelt werden?",
        answer:
          "Ja, sofern die Seiten im Browser dekodiert werden können. Danach sollte das PDF vollständig geprüft werden."
      },
      {
        question: "Warum kann mein Browser TIFF nicht anzeigen?",
        answer:
          "TIFF wird im Web nicht so einheitlich unterstützt wie JPG oder PNG. Ein PDF-Export macht die Datei für Empfänger oft leichter zugänglich."
      },
      {
        question: "Soll ich das Original-TIFF löschen?",
        answer:
          "Nur wenn du sicher bist, dass es nicht archiviert werden muss. Für Scan- und Archivprozesse ist die Quelldatei oft weiterhin wichtig."
      }
    ]
  },
  "svg-in-pdf-umwandeln": {
    sections: [
      {
        heading: "svg in pdf umwandeln: Webgrafiken als Dokument weitergeben",
        paragraphs: [
          "SVG ist im Web stark, aber nicht jeder Empfänger kann SVG-Dateien sicher öffnen oder korrekt darstellen. Mit svg in pdf umwandeln wird eine Grafik in ein vertrautes Dokumentformat gebracht.",
          "Das ist nützlich für Freigaben, Dokumentationen, Druckvorschauen oder den Versand an Menschen, die keine Web- oder Designwerkzeuge verwenden."
        ]
      },
      {
        heading: "Schriften, Bilder und CSS im SVG",
        paragraphs: [
          "SVG-Dateien können externe Schriften, eingebettete Bilder, CSS-Regeln und Skripte enthalten. Beim Rendern zu PDF ist entscheidend, ob alle benötigten Ressourcen verfügbar sind und korrekt dargestellt werden.",
          "Wenn eine Schrift fehlt, kann das PDF anders aussehen als die ursprüngliche Webgrafik. Prüfe das Ergebnis daher visuell, besonders bei Logos, Diagrammen und technischen Beschriftungen."
        ]
      },
      {
        heading: "Seitenformat und ViewBox",
        paragraphs: [
          "Die SVG-ViewBox bestimmt, wie groß und in welchem Ausschnitt die Grafik gerendert wird. Sehr kleine oder ungewöhnliche ViewBox-Werte können zu unerwarteten PDF-Seiten führen.",
          "Für saubere Ergebnisse sollte die SVG-Datei klare Abmessungen haben. Wenn das PDF zu viel Rand oder abgeschnittene Inhalte zeigt, liegt die Ursache oft in der SVG-Struktur."
        ]
      },
      {
        heading: "PDF für Freigabe, nicht automatisch für Druckproduktion",
        paragraphs: [
          "Ein PDF aus SVG eignet sich gut, um eine Grafik zu kommentieren, zu versenden oder in eine Dokumentation aufzunehmen. Für professionellen Druck braucht es zusätzliche Kontrolle von Farben, Beschnitt und Schriften.",
          "Wenn eine Druckerei Produktionsdaten verlangt, sollte das PDF nach deren Vorgaben erstellt und geprüft werden. Ein schneller Browser-Export ist eher eine praktische Vorschau als ein vollständiger Prepress-Prozess."
        ]
      },
      {
        heading: "Lokales Rendern bei internen Grafiken",
        paragraphs: [
          "SVGs zeigen häufig interne Diagramme, Produktgrafiken oder Markenelemente. Lokales Rendern im Browser verhindert unnötige Uploads, bevor die Grafik als PDF weitergegeben wird.",
          "Nach dem Export solltest du die PDF-Datei einmal öffnen und mit der Ausgangsgrafik vergleichen. Achte auf Linien, Text, Farben und eingebettete Bilder."
        ]
      }
    ],
    faqs: [
      {
        question: "Bleibt SVG im PDF vektoriell?",
        answer:
          "Das hängt vom Renderweg und von der SVG-Datei ab. Für visuelle Freigaben zählt vor allem, ob das PDF korrekt aussieht."
      },
      {
        question: "Warum sieht die Schrift anders aus?",
        answer:
          "Die verwendete Schrift ist möglicherweise nicht eingebettet oder im Browser nicht verfügbar. Dann wird sie beim Rendern ersetzt."
      },
      {
        question: "Kann ich SVG zu PDF für Druckdaten nutzen?",
        answer:
          "Für Vorschauen ja. Für Produktionsdruck solltest du Farben, Beschnitt, Schriften und Auflösung nach Vorgabe der Druckerei prüfen."
      }
    ]
  },
  "pdf-in-vektordatei-umwandeln": {
    sections: [
      {
        heading: "pdf in vektordatei umwandeln: zuerst den Inhalt prüfen",
        paragraphs: [
          "Nicht jedes PDF enthält echte Vektoren. Ein PDF kann Pfade, Text und Bilder enthalten, es kann aber auch nur ein gescannter Bildcontainer sein. Wer pdf in vektordatei umwandeln möchte, muss deshalb zuerst die Datei realistisch einschätzen.",
          "Die lokale Analyse hilft dabei, Seiten, Größen und Textanteile zu prüfen. Viele Textobjekte sind ein Hinweis, aber noch kein Beweis für sauber bearbeitbare Vektorpfade."
        ]
      },
      {
        heading: "Vektorpfade, Text und Rasterbilder unterscheiden",
        paragraphs: [
          "Vektorpfade lassen sich ohne Qualitätsverlust skalieren und in Programmen weiterbearbeiten. Textobjekte können ebenfalls editierbar sein, hängen aber von eingebetteten Schriften und Programmunterstützung ab.",
          "Rasterbilder sind dagegen Pixelgrafiken. Ein Scan, ein Foto oder ein eingebettetes JPG wird durch eine andere Dateiendung nicht zu einer echten Vektordatei."
        ]
      },
      {
        heading: "Wann SVG, EPS oder Originaldaten sinnvoll sind",
        paragraphs: [
          "Für Webvorschauen kann SVG reichen. Für alte Druck- oder Plotterprozesse wird manchmal EPS verlangt. Für saubere Bearbeitung ist aber oft die Originaldatei aus Illustrator, InDesign, CAD oder einem anderen Quellprogramm die beste Lösung.",
          "Wenn du ein Logo, Schnittmuster oder technisches Diagramm bearbeiten musst, frage nach der Quelle, bevor du viel Zeit in automatische Konvertierung investierst."
        ]
      },
      {
        heading: "Grenzen automatischer Vektorisierung",
        paragraphs: [
          "Automatische Vektorisierung kann einfache Logos oder Strichzeichnungen nachzeichnen, erzeugt aber oft zu viele Punkte, unruhige Kurven und ungenaue Details. Für professionelle Ergebnisse ist Nacharbeit fast immer nötig.",
          "Bei Fotos, Scans und komplexen Layouts ist Vektorisierung selten der richtige Weg. Dort ist ein sauberer Rasterexport oder eine neue Quelldatei häufig ehrlicher und schneller."
        ]
      },
      {
        heading: "Vertrauliche Vorprüfung im Browser",
        paragraphs: [
          "Vektordaten betreffen oft Marken, technische Pläne oder interne Produktionsinformationen. Eine lokale Vorprüfung reduziert das Risiko, solche Dateien unnötig an externe Konverter weiterzugeben.",
          "Nach der Analyse solltest du entscheiden, ob eine SVG-Vorschau genügt, ob EPS wirklich erforderlich ist oder ob die Originaldatei beschafft werden muss."
        ]
      }
    ],
    faqs: [
      {
        question: "Kann jedes PDF in eine Vektordatei umgewandelt werden?",
        answer:
          "Nein. Nur wenn geeignete Vektor- oder Textinformationen vorhanden sind, lässt sich sinnvoll weiterarbeiten. Ein Scan bleibt zunächst ein Rasterbild."
      },
      {
        question: "Woran erkenne ich ein vektorhaltiges PDF?",
        answer:
          "Hinweise sind scharfe Kanten bei starker Vergrößerung, markierbarer Text und viele Text- oder Grafikobjekte. Sicher ist es erst nach Prüfung in geeigneter Software."
      },
      {
        question: "Ist automatische Vektorisierung zuverlässig?",
        answer:
          "Für einfache Motive manchmal, für professionelle Logos, Pläne oder Schriften selten ohne Nacharbeit."
      }
    ]
  }
};

const supplementalSections: Record<string, ArticleSection[]> = {
  "pdf-in-jpg-umwandeln-online": [
    {
      heading: "Vor dem nächsten Upload online prüfen",
      paragraphs: [
        "Viele Nutzer erzeugen das JPG nur, weil ein anderes Online-Formular genau dieses Format verlangt. Deshalb sollte der Download nicht der letzte Schritt sein. Öffne die Datei, prüfe Breite, Höhe und Lesbarkeit und lade sie erst danach in das Zielportal hoch.",
        "Wenn das Portal eine Vorschau zeigt, vergleiche sie mit der geöffneten JPG-Datei. Manche Systeme verkleinern Bilder automatisch oder schneiden Ränder ab. In solchen Fällen hilft ein neuer Export mit anderer Skalierung mehr als ein wiederholter Upload derselben Datei.",
        "Für wiederkehrende Online-Aufgaben lohnt sich ein einheitlicher Dateiname. Eine Benennung mit Datum, Thema und Seitenzahl verhindert, dass mehrere ähnlich erzeugte JPG-Dateien später verwechselt werden."
      ]
    }
  ],
  "pdf-in-jpg-umwandeln-windows": [
    {
      heading: "Windows-Ordner nach dem Export aufräumen",
      paragraphs: [
        "Windows speichert Downloads schnell hintereinander im selben Ordner. Wenn aus einem PDF mehrere Bilder und zusätzlich ein ZIP entstehen, sollte der Ordner direkt nach dem Export sortiert werden. Sonst bleiben alte Versionen neben neuen Dateien liegen.",
        "Für Behörden, Versicherungen oder interne Portale ist eine klare Benennung besonders wichtig. Statt nur den ursprünglichen PDF-Namen zu behalten, kann ein Zusatz wie seite-01 oder vorschau helfen, den Zweck der JPG-Datei später sofort zu erkennen.",
        "Auf Firmenrechnern sollte außerdem geprüft werden, ob Downloads automatisch synchronisiert werden. Wenn sensible Dokumente in OneDrive oder einem Netzwerkordner landen, gehört das zur Datenschutzbewertung des gesamten Arbeitsablaufs."
      ]
    }
  ],
  "pdf-in-jpg-umwandeln-mac": [
    {
      heading: "Mac-Workflow für Mail, Finder und Kundenfreigaben",
      paragraphs: [
        "Viele Mac-Nutzer ziehen Dateien direkt aus Mail oder Finder in eine Weboberfläche. Das funktioniert gut, solange die Quelldatei vollständig lokal verfügbar ist und der Download-Ort bekannt bleibt. Bei iCloud-Dateien lohnt sich ein kurzer Blick auf das Wolkensymbol im Finder.",
        "Wenn JPG-Dateien an Kunden oder Kollegen gehen, sollte nicht nur die Bildschärfe stimmen. Auch Dateinamen und Reihenfolge wirken professioneller, wenn sie nicht wie zufällige Download-Dateien aussehen.",
        "Für Präsentationen oder Webseiten kann ein PDF-Export am Mac schnell zu groß oder zu klein ausfallen. Teste deshalb eine Seite und verwende dieselbe Einstellung erst dann für weitere Seiten."
      ]
    }
  ],
  "pdf-in-jpg-umwandeln-handy": [
    {
      heading: "Teilen-Menü und mobile Uploads kontrollieren",
      paragraphs: [
        "Am Smartphone wird eine erzeugte JPG-Datei oft direkt über das Teilen-Menü weitergegeben. Das ist bequem, kann aber dazu führen, dass die falsche Datei gewählt wird, wenn mehrere Exporte im Download-Ordner liegen.",
        "Vor einem offiziellen Upload sollte das Bild einmal aus der Dateien-App oder dem Downloads-Ordner geöffnet werden. Gerade mobile Vorschauen zeigen häufig nur eine verkleinerte Ansicht, in der kleine Schrift besser wirkt, als sie wirklich ist.",
        "Wenn der mobile Browser bei großen PDFs langsam wird, ist ein Test mit der ersten Seite sinnvoll. Danach lässt sich entscheiden, ob die Qualität passt oder ob der Export besser an einem Desktop durchgeführt wird."
      ]
    }
  ],
  "pdf-in-bilddatei-umwandeln": [
    {
      heading: "Formatwahl nach Empfänger statt nach Gewohnheit",
      paragraphs: [
        "Die beste Bilddatei ist die Datei, die der Empfänger ohne Zusatzaufwand verwenden kann. Für eine Kleinanzeige ist JPG fast immer ausreichend, für ein Archivsystem kann TIFF vorgeschrieben sein, und für eine Webgrafik kann SVG sinnvoll wirken.",
        "Wenn keine klare Vorgabe existiert, sollte zuerst der Zweck entscheiden: ansehen, lesen, archivieren, drucken oder weiterbearbeiten. Jede dieser Situationen stellt andere Anforderungen an Kompression, Dateigröße und technische Struktur.",
        "Ein kurzer Test spart später Zeit. Erzeuge eine Datei, lade sie probeweise in das Zielsystem oder öffne sie in der Zielsoftware und entscheide erst danach, ob das Format wirklich passt."
      ]
    }
  ],
  "jpg-in-pdf-umwandeln": [
    {
      heading: "Aus losen Bildern eine nachvollziehbare Anlage machen",
      paragraphs: [
        "Ein gutes PDF aus JPG-Dateien wirkt wie ein bewusst zusammengestelltes Dokument. Es enthält keine doppelten Fotos, keine versehentlichen Galerie-Bilder und keine Seiten, die für den Vorgang irrelevant sind.",
        "Besonders bei Bewerbungen, Versicherungen und Rechnungen sollte die erste Seite den Inhalt gut einordnen. Wenn mehrere Belege folgen, hilft eine logische Reihenfolge nach Datum oder Thema.",
        "Nach dem Export sollte das PDF nicht nur geöffnet, sondern komplett durchgeblättert werden. Erst dann ist sicher, dass Seitenfolge, Ausrichtung und Lesbarkeit stimmen.",
        "Wenn das PDF an ein Bewerbungsportal, eine Versicherung oder eine Behörde geht, lohnt sich zusätzlich ein Blick auf Seitenzahl und Dateigröße. So vermeidest du, dass ein formal richtiges Dokument wegen eines technischen Limits abgelehnt wird."
      ]
    }
  ],
  "mehrere-jpg-in-pdf-umwandeln": [
    {
      heading: "Mehrere Bilder als eine saubere Dokumentstrecke",
      paragraphs: [
        "Bei vielen Bildern hilft es, vor dem Export eine kleine Auswahlrunde zu machen. Entferne doppelte Aufnahmen, unscharfe Seiten und Bilder, die nur zur Orientierung gedacht waren. Das fertige PDF wird dadurch kürzer und leichter verständlich.",
        "Wenn die Bilder aus verschiedenen Quellen stammen, können Dateinamen und Zeitstempel durcheinandergeraten. Eine manuelle Sortierung ist dann zuverlässiger als die automatische Reihenfolge des Systems.",
        "Für längere Anlagen ist es sinnvoll, die fertige Datei sofort eindeutig zu benennen. Ein Name wie belege-2026-05.pdf ist später hilfreicher als der Name des ersten Fotos.",
        "Wenn das PDF sehr viele Seiten enthält, kann eine Aufteilung nach Themen besser sein. Belege, Ausweise und Formulare müssen nicht immer in einer Datei landen, wenn das Zielsystem mehrere Anlagen sauber akzeptiert."
      ]
    }
  ],
  "jpg-in-pdf-umwandeln-handy": [
    {
      heading: "Am Handy vor dem PDF lieber neu fotografieren",
      paragraphs: [
        "Wenn ein Foto schlecht ist, lohnt sich am Smartphone fast immer eine neue Aufnahme. Eine gerade, helle und vollständige Seite erzeugt ein besseres PDF als jede nachträgliche Korrektur.",
        "Bei mehreren Seiten sollte jede Aufnahme direkt nach dem Fotografieren geprüft werden. So merkst du sofort, ob eine Seite fehlt, doppelt aufgenommen wurde oder durch Finger, Schatten oder Reflexionen gestört ist.",
        "Für offizielle Uploads ist ein ruhiger Hintergrund hilfreich. Ein Dokument auf einem Tisch wirkt im PDF deutlich sauberer als ein Foto aus einem unruhigen Umfeld.",
        "Wenn du das PDF sofort vom Handy weiterleitest, prüfe vorher den Dateinamen. Viele Empfänger sehen nur eine generische Bezeichnung aus dem Download-Ordner. Ein verständlicher Name mit Thema und Datum erleichtert spätere Rückfragen."
      ]
    }
  ],
  "jpg-in-pdf-umwandeln-windows": [
    {
      heading: "Windows-Dateien für Empfänger nachvollziehbar machen",
      paragraphs: [
        "Ein PDF wird unter Windows oft direkt aus einem Ordner mit vielen Fotos erstellt. Für den Empfänger ist aber nicht sichtbar, wie dieser Ordner aussah. Er sieht nur das fertige Dokument und dessen Seitenfolge.",
        "Darum sollte vor dem Export alles entfernt werden, was nicht in das Dokument gehört. Screenshots, doppelte Scans und alte Versionen führen sonst schnell zu Rückfragen.",
        "Wenn das PDF in ein Portal hochgeladen wird, prüfe nach dem Download die Dateigröße und öffne die Datei in einem Viewer. Windows zeigt im Explorer nur Basisdaten, nicht die Lesbarkeit jeder Seite.",
        "Bei wiederkehrenden Windows-Aufgaben ist ein Ordner pro Vorgang hilfreich. Lege dort nur die finalen JPG-Dateien und das erzeugte PDF ab. Dadurch bleibt nachvollziehbar, aus welchen Bildern das Dokument entstanden ist."
      ]
    }
  ],
  "jpg-in-pdf-umwandeln-mac": [
    {
      heading: "Mac-Dateien zwischen Fotos-App und Finder sauber trennen",
      paragraphs: [
        "Die Fotos-App ist gut zum Sammeln von Bildern, der Finder ist besser für eine kontrollierte Dokumentenablage. Für JPG zu PDF ist es deshalb sinnvoll, die benötigten Bilder zuerst in einen Arbeitsordner zu exportieren.",
        "Dort lassen sich Reihenfolge, Drehung und Dateiname besser prüfen. Erst wenn der Ordner stimmt, sollte daraus ein PDF entstehen.",
        "Nach dem Export kann Vorschau als Kontrolle dienen. Blättere jede Seite durch und achte darauf, ob macOS Bilder automatisch gedreht oder anders skaliert hat als erwartet.",
        "Bei Bildern aus iPhone oder iPad kann zusätzlich die Herkunft eine Rolle spielen. AirDrop, iCloud-Fotos und exportierte Alben verwenden nicht immer dieselben Dateinamen. Ein Arbeitsordner im Finder verhindert, dass die falsche Version im PDF landet.",
        "Wenn das PDF an Schule, Arbeitgeber oder Kunde geht, sollte es nicht wie ein schneller Zwischenstand aussehen. Ein kurzer finaler Dateiname und eine Kontrolle in Vorschau reichen meistens aus."
      ]
    }
  ],
  "jpg-in-pdf-umwandeln-online": [
    {
      heading: "Online-PDF direkt für das Zielsystem testen",
      paragraphs: [
        "Ein online erzeugtes PDF ist erst dann fertig, wenn es im Zielsystem akzeptiert wird. Manche Portale begrenzen Dateigröße, Seitenzahl oder Dateinamen. Ein kurzer Test verhindert, dass der Fehler erst beim Absenden sichtbar wird.",
        "Wenn Bilder vertrauliche Inhalte zeigen, sollte der Online-Ablauf möglichst ohne Server-Upload funktionieren. Das ist besonders wichtig bei Ausweisen, Belegen, medizinischen Unterlagen und internen Screenshots.",
        "Bei Bildserien aus dem Smartphone empfiehlt sich eine kleine Vorauswahl. Je weniger unnötige Fotos im PDF landen, desto schneller lässt es sich herunterladen und weitergeben.",
        "Achte außerdem darauf, ob das Zielportal ein einzelnes PDF oder mehrere Anlagen erwartet. Ein zusammengefasstes PDF ist übersichtlich, kann aber unpraktisch sein, wenn das Formular jede Kategorie getrennt abfragt.",
        "Wenn mehrere Kategorien gefordert sind, erstelle lieber mehrere kleinere PDFs. Das macht den Upload nachvollziehbarer und verhindert, dass ein großes Sammeldokument wegen einer einzigen falschen Seite neu erstellt werden muss. Für private Unterlagen ist diese Trennung auch datensparsamer."
      ]
    }
  ],
  "pdf-in-svg-umwandeln": [
    {
      heading: "SVG-Datei nach dem Export technisch einordnen",
      paragraphs: [
        "Nach dem Export sollte nicht nur die Optik geprüft werden. Öffne die SVG-Datei in einem Browser und bei Bedarf in einem Editor, um zu sehen, ob sie als eingebettete Vorschau oder als bearbeitbare Struktur vorliegt.",
        "Für Webteams ist diese Unterscheidung wichtig. Eine eingebettete Bildvorschau kann für Dokumentation reichen, ist aber für CSS-Anpassungen, Farbänderungen oder Animationen nicht die richtige Grundlage.",
        "Wenn ein Entwickler echte SVG-Pfade erwartet, sollte das vor der Weitergabe klar gesagt werden. Sonst entsteht schnell ein Missverständnis zwischen visueller Vorschau und echter Vektordatei.",
        "Für Redaktionssysteme zählen außerdem Dateigröße, sichtbarer Ausschnitt und Hintergrundfarbe. Teste das SVG deshalb nicht nur lokal, sondern auch in der Umgebung, in der es später angezeigt wird.",
        "Wenn die Datei in ein Designsystem oder eine Dokumentation wandert, sollte klar benannt werden, dass sie aus einem PDF stammt. So erwartet niemand automatisch saubere Symbolpfade oder editierbare Textebenen."
      ]
    }
  ],
  "pdf-in-tiff-umwandeln": [
    {
      heading: "TIFF-Ergebnis mit den Vorgaben des Systems abgleichen",
      paragraphs: [
        "Bei TIFF zählt selten nur, ob eine Datei geöffnet werden kann. Archiv- und DMS-Systeme haben oft genaue Erwartungen an Auflösung, Farbe, Kompression und Seitenstruktur.",
        "Darum ist ein Test mit einer einzelnen PDF-Seite sinnvoll. Wenn diese Seite korrekt verarbeitet wird, kann der gleiche Export für weitere Seiten genutzt werden.",
        "Bei langen PDFs sollte außerdem die Benennung der Einzelseiten geprüft werden. Ohne klare Nummerierung wird die spätere Zuordnung im Archiv unnötig schwer.",
        "Wenn das TIFF in eine Produktionskette geht, sollte zusätzlich geklärt werden, ob Farbe oder Schwarzweiß erwartet wird. Ein farbiger Export kann unnötig groß sein, ein Schwarzweiß-Export kann Stempel oder Grafiken verlieren.",
        "Für Stapelverarbeitung ist ein kleiner Probelauf wichtig. Eine einzelne korrekt exportierte Seite sagt mehr aus als eine theoretische Einstellung, die erst nach fünfzig Seiten als falsch auffällt. Halte die gewählte Einstellung kurz fest, wenn mehrere Dokumente gleich behandelt werden sollen. Das spart Wiederholung bei späteren Archivläufen und macht Ergebnisse vergleichbarer, besonders bei gleichen Dokumenttypen und Vorgaben. Gerade bei monatlichen Stapeln zahlt sich diese Notiz aus."
      ]
    }
  ],
  "pdf-in-eps-umwandeln": [
    {
      heading: "EPS-Anforderung mit der Druckerei klären",
      paragraphs: [
        "Bevor Zeit in eine EPS-Konvertierung fließt, sollte die tatsächliche Anforderung geprüft werden. Manche Druckereien nennen EPS aus Gewohnheit, akzeptieren aber ein korrektes PDF mit passenden Farb- und Beschnittdaten.",
        "Wenn EPS zwingend ist, sind technische Details wichtig: Schriften, Transparenzen, Farbprofile und Schnittpfade müssen nach dem Export kontrolliert werden.",
        "Für produktive Daten ist ein Probedruck oder eine Preflight-Prüfung sinnvoll. Ein Dateiformat allein garantiert noch keine druckfähige Ausgabe.",
        "Bei alten Workflows sollte außerdem geprüft werden, welche EPS-Version erwartet wird. Unterschiedliche Programme gehen mit Transparenzen, Farbprofilen und eingebetteten Bildern nicht gleich um.",
        "Wenn die EPS-Datei an einen Dienstleister geht, dokumentiere kurz, aus welchem PDF sie entstanden ist. Das hilft bei Rückfragen zu Schriften, Farben oder fehlenden Elementen. Bei kritischen Druckdaten sollte immer eine sichtbare Kontrollversion mitgesendet werden. So lassen sich technische und visuelle Fehler leichter auseinanderhalten. Das spart besonders bei Korrekturschleifen Zeit."
      ]
    }
  ],
  "tiff-in-pdf-umwandeln": [
    {
      heading: "PDF aus TIFF ist nicht automatisch durchsuchbar",
      paragraphs: [
        "Ein PDF, das aus TIFF-Bildern erstellt wird, enthält zunächst Bildseiten. Text wird dadurch nicht automatisch erkennbar oder kopierbar. Dafür wäre zusätzlich OCR nötig.",
        "Für viele Uploads ist das kein Problem, weil nur eine sichtbare Dokumentdatei verlangt wird. Für Archivsuche, Aktenmanagement oder barrierearme Ablage kann fehlende Texterkennung aber relevant sein.",
        "Wenn Durchsuchbarkeit wichtig ist, sollte das fertige PDF später mit einem OCR-Werkzeug verarbeitet oder aus einer Quelle mit echtem Text erzeugt werden.",
        "Auch die Seitenabmessungen verdienen Aufmerksamkeit. Alte Scanner erzeugen manchmal ungewöhnliche Formate oder Ränder. Im PDF kann das harmlos sein, bei offiziellen Uploads aber zu abgeschnittenen Vorschauen führen.",
        "Wenn mehrere TIFF-Dateien zu einem Vorgang gehören, sollte vor dem PDF-Export entschieden werden, ob sie ein gemeinsames Dokument bilden oder getrennt bleiben müssen. Eine spätere Trennung ist möglich, aber unnötig mühsam, wenn die Struktur vorher schon bekannt ist. Das gilt besonders für Akten mit Anhängen."
      ]
    }
  ],
  "svg-in-pdf-umwandeln": [
    {
      heading: "SVG vor dem PDF-Export auf externe Abhängigkeiten prüfen",
      paragraphs: [
        "Viele SVG-Dateien wirken in der ursprünglichen Webseite korrekt, weil dort Schriften, CSS und Bilder verfügbar sind. Außerhalb dieses Umfelds können dieselben Ressourcen fehlen.",
        "Vor dem PDF-Export sollte die SVG-Datei deshalb möglichst eigenständig sein. Eingebettete Schriften oder sauber referenzierte Bilder reduzieren Überraschungen beim Rendern.",
        "Wenn das PDF für Freigaben genutzt wird, ist ein Vergleich mit der Ausgangsgrafik Pflicht. Kleine Unterschiede bei Schriftlauf, Linienbreite oder Farben können bei Logos und Diagrammen wichtig sein.",
        "Für Dokumentationen ist außerdem relevant, ob die PDF-Seite einen passenden Rand hat. Eine Grafik, die im Browser randlos wirkt, kann im PDF zu knapp platziert sein.",
        "Wenn das PDF kommentiert oder freigegeben werden soll, hilft etwas Weißraum um die Grafik. So werden Markierungen, Anmerkungen und Druckvorschauen leichter lesbar. Besonders bei Diagrammen ist ein ruhiger Rand oft besser als eine randlose, aber gedrängte Darstellung. Für Freigabeschleifen ist Lesbarkeit wichtiger als maximale Flächennutzung, auch wenn die Quelldatei kompakter aussieht und weniger Platz belegt im Layout. Das macht Korrekturen übersichtlicher."
      ]
    }
  ],
  "pdf-in-vektordatei-umwandeln": [
    {
      heading: "Ergebnisqualität statt Dateiendung bewerten",
      paragraphs: [
        "Bei Vektordateien zählt nicht, ob am Ende SVG oder EPS im Dateinamen steht. Entscheidend ist, ob Pfade sauber, Farben korrekt, Schriften kontrolliert und Formen ohne unnötige Punkte bearbeitbar sind.",
        "Ein automatisch erzeugtes Ergebnis kann für eine schnelle Webvorschau reichen, aber für Logos, technische Pläne oder Schneidedaten unbrauchbar sein. Prüfe deshalb immer in der Zielsoftware.",
        "Wenn die Anforderungen hoch sind, ist die Originaldatei fast immer wertvoller als eine nachträgliche Konvertierung. Die Analyse hilft vor allem dabei, diese Entscheidung früh zu treffen.",
        "Für einfache Weitergaben kann eine visuelle Vektornähe genügen. Für Produktion, Skalierung oder Bearbeitung müssen aber Kurven, Ebenen und Schriften stimmen.",
        "Wenn mehrere Zielformate möglich sind, sollte der geplante nächste Arbeitsschritt entscheiden. Webeinbettung, Druckvorstufe und technische Bearbeitung stellen sehr unterschiedliche Anforderungen. Ein kurzer Test in der Zielsoftware ist zuverlässiger als die Annahme, dass jede Vektordatei gleich gut funktioniert. Dokumentiere das brauchbare Ergebnis für spätere Wiederholungen und ähnliche Dateien im Team."
      ]
    }
  ]
};

export function buildSeoSections(page: SeoPage): ArticleSection[] {
  return [...contentFor(page).sections, ...(supplementalSections[page.slug] ?? [])];
}

export function faqFor(page: SeoPage): FaqItem[] {
  return contentFor(page).faqs;
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

function contentFor(page: SeoPage) {
  const content = contentBySlug[page.slug];
  if (!content) {
    throw new Error(`No hand-written SEO content configured for "${page.slug || "/"}".`);
  }
  return content;
}
