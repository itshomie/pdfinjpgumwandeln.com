export type ToolMode =
  | "pdf-to-jpg"
  | "jpg-to-pdf"
  | "pdf-to-svg"
  | "pdf-to-tiff"
  | "svg-to-pdf"
  | "tiff-to-pdf"
  | "pdf-audit";

export type PageGroup =
  | "pdf-jpg"
  | "jpg-pdf"
  | "svg-pdf"
  | "tiff-pdf"
  | "vector"
  | "platform"
  | "online";

export interface SeoPage {
  keyword: string;
  slug: string;
  title: string;
  description: string;
  group: PageGroup;
  toolMode: ToolMode;
  audience: string;
  intent: string;
  angle: string;
  scenario: string;
  qualityFocus: string;
  privacyFocus: string;
  workflow: string;
  pitfalls: string[];
  steps: string[];
  related: string[];
}

export const site = {
  name: "PDF in JPG umwandeln",
  domain: "pdfinjpgumwandeln.com",
  url: "https://pdfinjpgumwandeln.com",
  email: "support@pdfinjpgumwandeln.com"
};

export const homePage: SeoPage = {
  keyword: "pdf in jpg umwandeln",
  slug: "",
  title: "PDF in JPG umwandeln - kostenlos im Browser",
  description:
    "PDF in JPG umwandeln für deutsche Nutzer: lokale Browser-Konvertierung, klare Qualitätseinstellungen und praktische Anleitungen für Windows, Mac und Handy.",
  group: "pdf-jpg",
  toolMode: "pdf-to-jpg",
  audience: "deutsche Nutzer, die PDF-Seiten schnell als JPG-Bilder speichern wollen",
  intent: "eine PDF-Datei ohne Installation in gut lesbare JPG-Dateien umwandeln",
  angle:
    "Die Startseite verbindet ein direkt nutzbares Werkzeug mit einem verständlichen Format-Ratgeber, damit Besucher sofort konvertieren und danach die passende Detailseite finden.",
  scenario:
    "Typisch ist eine Rechnung, Präsentation, Scan-Datei oder ein PDF-Formular, das in einem Shop, Messenger, CMS oder Bildarchiv als einzelne Bilddatei gebraucht wird.",
  qualityFocus:
    "Die entscheidenden Stellschrauben sind Seitenauflösung, JPEG-Qualität, klare Dateinamen und die Frage, ob alle Seiten oder nur die erste Seite exportiert werden sollen.",
  privacyFocus:
    "Die Datei wird im Browser verarbeitet. Das ist besonders für vertrauliche Unterlagen wichtig, weil kein Upload an einen fremden Konvertierungsserver vorgesehen ist.",
  workflow:
    "Besucher laden eine PDF-Datei, wählen Skalierung und Qualität, starten die Umwandlung und erhalten bei mehreren Seiten automatisch ein ZIP-Paket.",
  pitfalls: [
    "Zu niedrige Auflösung macht kleine Schrift in der JPG-Datei unscharf.",
    "Ein einzelnes JPG ersetzt kein mehrseitiges Dokument, wenn die Reihenfolge später nachvollziehbar bleiben muss.",
    "Sehr große PDFs können auf alten Handys länger rendern als auf einem Desktop."
  ],
  steps: [
    "PDF auswählen oder in die Upload-Fläche ziehen.",
    "Auflösung passend zum Ziel wählen: Vorschau, Web oder Druck.",
    "Alle Seiten oder nur die benötigten Seiten exportieren.",
    "JPG-Dateien herunterladen und vor dem Teilen kurz öffnen.",
    "Bei vielen Seiten das ZIP entpacken und die Dateinamen prüfen."
  ],
  related: [
    "pdf-in-jpg-umwandeln-online",
    "pdf-in-jpg-umwandeln-windows",
    "pdf-in-jpg-umwandeln-mac",
    "pdf-in-jpg-umwandeln-handy"
  ]
};

export const seoPages: SeoPage[] = [
  {
    keyword: "pdf in jpg umwandeln online",
    slug: "pdf-in-jpg-umwandeln-online",
    title: "PDF in JPG umwandeln online - schnell und lokal",
    description:
      "PDF in JPG umwandeln online: Web-Werkzeug mit lokalem Rendern, Qualitätsreglern und ZIP-Ausgabe für mehrseitige PDFs.",
    group: "online",
    toolMode: "pdf-to-jpg",
    audience: "Nutzer, die ohne Installation direkt im Browser arbeiten wollen",
    intent: "PDF-Seiten online erreichbar in JPG-Dateien umwandeln",
    angle:
      "Diese Seite ist die allgemeine Online-Variante und erklärt den Unterschied zwischen Bedienung im Web und Dateiverarbeitung auf dem eigenen Gerät.",
    scenario:
      "Die Umwandlung wird oft zwischen zwei Online-Schritten gebraucht: PDF herunterladen, JPG erzeugen, JPG wieder in ein Portal oder CMS hochladen.",
    qualityFocus:
      "Ein sichtbarer Qualitätsregler hilft, den Export an Webvorschau, Archiv oder drucknahe Nutzung anzupassen.",
    privacyFocus:
      "Lokales Browser-Rendering reduziert das Risiko, dass Dokumente auf Servern fremder Anbieter zwischengespeichert werden.",
    workflow:
      "Die Seite öffnen, PDF auswählen, Konvertierung starten und die entstandenen JPG-Dateien herunterladen.",
    pitfalls: [
      "Online-Konverter ohne klare Datenschutzinfo sind für sensible PDFs ungeeignet.",
      "Ein Ergebnis ohne Seitenzahlen kann bei mehrseitigen Dokumenten verwirrend sein.",
      "Bei schlechter Verbindung sollte der Prozess nicht von Uploads abhängen."
    ],
    steps: [
      "Browser öffnen.",
      "PDF-Datei auswählen.",
      "Qualität einstellen.",
      "JPG-Ausgabe starten.",
      "Download speichern und kontrollieren."
    ],
    related: [
      "pdf-in-jpg-umwandeln-windows",
      "pdf-in-jpg-umwandeln-mac",
      "pdf-in-jpg-umwandeln-handy",
      "pdf-in-tiff-umwandeln"
    ]
  },
  {
    keyword: "pdf in jpg umwandeln windows",
    slug: "pdf-in-jpg-umwandeln-windows",
    title: "PDF in JPG umwandeln Windows - ohne Zusatzprogramm",
    description:
      "PDF in JPG umwandeln Windows: Browser-Workflow für Windows 10 und 11, inklusive Dateiablage, ZIP-Download und Qualitätstipps.",
    group: "platform",
    toolMode: "pdf-to-jpg",
    audience: "Windows-Nutzer, die PDFs ohne neue Desktop-Software als JPG speichern wollen, egal ob Windows 10 oder Windows 11",
    intent: "auf einem Windows-PC schnell PDF-Seiten in JPG-Dateien exportieren",
    angle:
      "Die Seite ist auf den Windows-Alltag ausgelegt: Downloads-Ordner, Explorer, ZIP-Dateien, Edge oder Chrome und typische Upload-Portale unter Windows 10 und 11.",
    scenario:
      "Ein PDF liegt auf dem Desktop oder im Download-Ordner und soll als JPG in eine Webanwendung, ein Office-Dokument oder eine E-Mail eingefügt werden.",
    qualityFocus:
      "Windows zeigt Bildabmessungen im Explorer schnell an. Das hilft, nach der Konvertierung zu prüfen, ob die JPG-Datei groß genug für den Zielzweck ist.",
    privacyFocus:
      "Gerade auf Arbeitsrechnern ist eine browserbasierte Lösung praktisch, weil keine Adminrechte für eine Installation erforderlich sind und die Datei lokal bleibt.",
    workflow:
      "PDF im Browser auswählen, JPGs exportieren, ZIP im Explorer entpacken und die Bilder in der Zielanwendung verwenden.",
    pitfalls: [
      "Windows versteckt Dateiendungen manchmal, wodurch JPG und PDF verwechselt werden.",
      "Der Downloads-Ordner wird schnell unübersichtlich, wenn viele Seiten exportiert werden.",
      "Ältere Rechner können große PDFs langsamer rendern."
    ],
    steps: [
      "Browser unter Windows öffnen.",
      "PDF aus Desktop, Dokumente oder Downloads wählen.",
      "Qualität einstellen.",
      "ZIP oder JPG herunterladen.",
      "Im Explorer entpacken und Dateiendungen prüfen."
    ],
    related: [
      "pdf-in-jpg-umwandeln-mac",
      "pdf-in-jpg-umwandeln-handy",
      "pdf-in-jpg-umwandeln-online",
      "jpg-in-pdf-umwandeln-windows"
    ]
  },
  {
    keyword: "pdf in jpg umwandeln mac",
    slug: "pdf-in-jpg-umwandeln-mac",
    title: "PDF in JPG umwandeln Mac - mehrere Seiten sauber exportieren",
    description:
      "PDF in JPG umwandeln Mac: Anleitung für macOS, Browser-Tool und Hinweise zu Vorschau, Finder, Safari und JPG-Qualität.",
    group: "platform",
    toolMode: "pdf-to-jpg",
    audience: "Mac-Nutzer, die eine praktische Alternative oder Ergänzung zur Vorschau-App suchen",
    intent: "auf macOS PDFs als JPG exportieren, besonders wenn mehrere Seiten betroffen sind",
    angle:
      "Der Fokus liegt auf einem Mac-Workflow, der nicht an einer einzelnen App hängt: PDF im Finder, Browser-Tool für den Export, Ergebnis im Download-Ordner.",
    scenario:
      "Das PDF kommt aus Mail, iCloud Drive oder einem Download und soll als Bild in eine Webseite, Präsentation oder Kundennachricht eingefügt werden.",
    qualityFocus:
      "Mac-Displays kaschieren niedrige Auflösung. Die Seite empfiehlt deshalb, exportierte JPGs bei 100 Prozent oder in der Zielanwendung zu prüfen.",
    privacyFocus:
      "Mit lokaler Verarbeitung bleiben PDFs aus iCloud Drive, Mail oder Kundenprojekten auf dem Gerät, solange der Nutzer sie nicht aktiv weitergibt.",
    workflow:
      "Datei im Finder finden, im Browser auswählen, Export starten, ZIP entpacken und JPGs in der Ziel-App verwenden.",
    pitfalls: [
      "Vorschau exportiert komfortabel einzelne Seiten, aber nicht immer ganze Stapel.",
      "Download-Orte in Safari und Chrome können unterschiedlich eingestellt sein.",
      "Dateien aus iCloud werden vor dem Export eventuell erst lokal geladen."
    ],
    steps: [
      "PDF im Finder oder aus Downloads bereitlegen.",
      "Browser-Tool öffnen.",
      "PDF laden.",
      "Alle benötigten Seiten als JPG exportieren.",
      "JPG-Dateien im Finder kontrollieren."
    ],
    related: [
      "pdf-in-jpg-umwandeln-windows",
      "pdf-in-jpg-umwandeln-handy",
      "pdf-in-jpg-umwandeln-online",
      "jpg-in-pdf-umwandeln-mac"
    ]
  },
  {
    keyword: "pdf in jpg umwandeln handy",
    slug: "pdf-in-jpg-umwandeln-handy",
    title: "PDF in JPG umwandeln Handy - mobil als Bild speichern",
    description:
      "PDF in JPG umwandeln Handy: PDF-Seiten auf Smartphone oder Tablet lokal im Browser als JPG speichern, mit Tipps für Lesbarkeit und Download.",
    group: "platform",
    toolMode: "pdf-to-jpg",
    audience: "Handy-Nutzer, die PDF-Seiten ohne App-Installation als JPG-Bilder speichern wollen",
    intent: "auf dem Smartphone eine PDF-Datei in JPG-Dateien umwandeln und direkt weiterverwenden",
    angle:
      "Diese Seite behandelt den mobilen Arbeitsfluss statt einer weiteren Keyword-Variante: Dateiauswahl, kleiner Bildschirm, Downloads-Ordner und die Frage, wann ein JPG am Handy wirklich besser ist als das PDF.",
    scenario:
      "Typisch ist ein PDF aus Mail, Messenger, Cloud-Speicher oder einem Portal, das als Bild in eine Anzeige, ein Formular, einen Chat oder ein CMS hochgeladen werden soll.",
    qualityFocus:
      "Auf dem Handy ist Lesbarkeit wichtiger als maximale Dateigröße. Kleine Schrift, Stempel und Tabellen sollten nach dem Export in der Bildvorschau geprüft werden.",
    privacyFocus:
      "Eine lokale Browser-Konvertierung ist besonders am Handy sinnvoll, weil keine unbekannte App Zugriff auf Dokumente, Galerie oder Cloud-Ordner braucht.",
    workflow:
      "PDF am Smartphone auswählen, Skalierung bewusst setzen, JPG exportieren, Download öffnen und erst danach teilen oder hochladen.",
    pitfalls: [
      "Mobile Browser haben weniger Arbeitsspeicher als Desktop-Rechner.",
      "Downloads sind auf iOS und Android nicht immer an derselben Stelle sichtbar.",
      "Sehr kleine Vorschauen können lesbar wirken, obwohl die JPG-Datei im Zielportal unscharf erscheint."
    ],
    steps: [
      "PDF aus Dateien, Downloads oder Cloud-Speicher auswählen.",
      "Skalierung für kleine Schrift etwas höher setzen.",
      "Konvertierung starten.",
      "JPG im Download-Ordner oder Teilen-Dialog öffnen.",
      "Bild im Zielportal prüfen, bevor es abgeschickt wird."
    ],
    related: [
      "pdf-in-jpg-umwandeln-online",
      "pdf-in-jpg-umwandeln-windows",
      "pdf-in-jpg-umwandeln-mac",
      "jpg-in-pdf-umwandeln"
    ]
  },
  {
    keyword: "jpg in pdf umwandeln",
    slug: "jpg-in-pdf-umwandeln",
    title: "JPG in PDF umwandeln - Bilder geordnet speichern",
    description:
      "JPG in PDF umwandeln: aus einem oder mehreren Bildern ein sauberes PDF erstellen, inklusive Reihenfolge, Seitenformat und Handy-Tipps.",
    group: "jpg-pdf",
    toolMode: "jpg-to-pdf",
    audience: "Nutzer, die aus Fotos, Scans oder Screenshots ein zusammenhängendes PDF bauen wollen",
    intent: "JPG-Dateien in ein PDF packen, damit Versand, Archivierung und Upload einfacher werden",
    angle:
      "Der Blick geht hier in die Gegenrichtung: Lose Bilddateien werden zu einem geordneten Dokument mit Seitenfolge, statt als einzelne Uploads verteilt zu bleiben.",
    scenario:
      "Typisch sind fotografierte Quittungen, Ausweis-Kopien, unterschriebene Formulare, Hausaufgaben, Bewerbungsanlagen oder mehrere Screenshot-Seiten, die ein Portal nur als PDF akzeptiert.",
    qualityFocus:
      "Das Ergebnis hängt weniger von einer abstrakten DPI-Zahl ab als von der Bildschärfe, dem Seitenformat und der Reihenfolge. Ein sauber zugeschnittenes JPG ergibt ein deutlich besseres PDF.",
    privacyFocus:
      "Fotos von Ausweisen oder Rechnungen enthalten sensible Details. Eine lokale Umwandlung vermeidet, dass diese Bilder vor dem PDF-Export an Dritte gesendet werden.",
    workflow:
      "Die Bilder werden sortiert, bei Bedarf automatisch auf eigene PDF-Seiten gesetzt und danach als eine Datei gespeichert.",
    pitfalls: [
      "Unscharfe Handyfotos bleiben auch im PDF unscharf.",
      "Falsch sortierte JPGs erzeugen ein PDF, das später schwer zu korrigieren ist.",
      "Sehr große Fotos können ein PDF unnötig aufblähen, obwohl der Inhalt nur Text zeigt."
    ],
    steps: [
      "JPG-Dateien auswählen und die Reihenfolge prüfen.",
      "Bei Bedarf mehrere Bilder gleichzeitig laden.",
      "PDF erzeugen und die Seitenansicht kontrollieren.",
      "Dateigröße mit dem Zielportal abgleichen.",
      "Fertiges PDF herunterladen und archivieren."
    ],
    related: [
      "mehrere-jpg-in-pdf-umwandeln",
      "jpg-in-pdf-umwandeln-online",
      "jpg-in-pdf-umwandeln-handy",
      "jpg-in-pdf-umwandeln-windows"
    ]
  },
  {
    keyword: "mehrere jpg in pdf umwandeln",
    slug: "mehrere-jpg-in-pdf-umwandeln",
    title: "Mehrere JPG in PDF umwandeln - Bilder sortiert zusammenfassen",
    description:
      "Mehrere JPG in PDF umwandeln: Bilder in Reihenfolge bringen, als mehrseitiges PDF speichern und typische Upload-Probleme vermeiden.",
    group: "jpg-pdf",
    toolMode: "jpg-to-pdf",
    audience: "Nutzer, die mehrere Fotos oder Scans in einer einzigen PDF-Datei bündeln wollen",
    intent: "aus vielen einzelnen JPG-Dateien ein geordnetes mehrseitiges PDF erstellen",
    angle:
      "Der Schwerpunkt dieser Seite liegt auf Ordnung: Reihenfolge, Seitenformat und klare Benennung sind wichtiger als ein einzelner schneller Export.",
    scenario:
      "Sehr häufig geht es um Belege für Steuer, Versicherung oder Reisekosten, um Schulaufgaben, Bewerbungsanlagen oder Fotos einer unterschriebenen Vertragsseite.",
    qualityFocus:
      "Ein gutes PDF aus mehreren JPGs nutzt jede Bilddatei als eigene Seite und vermeidet unnötige Skalierung, die Text verschlechtert.",
    privacyFocus:
      "Mehrere Belege oder Ausweiskopien enthalten oft zusammen noch mehr persönliche Informationen als ein einzelnes Bild. Lokale Verarbeitung ist deshalb besonders sinnvoll.",
    workflow:
      "Bilder werden gesammelt, sortiert, in ein Seitenformat gebracht und als ein PDF heruntergeladen.",
    pitfalls: [
      "Dateinamen wie IMG_1001 und IMG_0999 führen schnell zu falscher Reihenfolge.",
      "Querformat und Hochformat gemischt können die Lesbarkeit stören.",
      "Zu große Handyfotos blähen das PDF ohne sichtbaren Nutzen auf."
    ],
    steps: [
      "Alle JPG-Dateien gleichzeitig auswählen.",
      "Reihenfolge anhand der Dateiliste prüfen.",
      "PDF-Erstellung starten.",
      "Mehrseitiges PDF herunterladen.",
      "Vor dem Upload alle Seiten kurz durchblättern."
    ],
    related: [
      "jpg-in-pdf-umwandeln",
      "jpg-in-pdf-umwandeln-online",
      "jpg-in-pdf-umwandeln-handy",
      "jpg-in-pdf-umwandeln-mac"
    ]
  },
  {
    keyword: "jpg in pdf umwandeln handy",
    slug: "jpg-in-pdf-umwandeln-handy",
    title: "JPG in PDF umwandeln Handy - Fotos als PDF senden",
    description:
      "JPG in PDF umwandeln Handy: Fotos und Scans direkt am Smartphone zu einem PDF machen, mit Tipps für Schärfe und Reihenfolge.",
    group: "jpg-pdf",
    toolMode: "jpg-to-pdf",
    audience: "Handy-Nutzer, die Fotos, Screenshots oder Scans als PDF verschicken müssen",
    intent: "auf dem Smartphone aus einem oder mehreren JPG-Bildern ein PDF erstellen",
    angle:
      "Hier steht nicht der Desktop im Mittelpunkt, sondern die Realität auf dem Handy: Kamera, Galerie, mobile Browser und Portale mit Dateigrößenlimit.",
    scenario:
      "Ein unterschriebenes Formular, eine Quittung, ein Ausweisfoto oder mehrere Seiten einer Aufgabe wurden fotografiert und sollen als eine PDF-Datei per Mail oder Upload eingereicht werden.",
    qualityFocus:
      "Am Handy entscheidet die Aufnahmequalität. Gutes Licht, gerade Kanten und ein ruhiger Ausschnitt sind wichtiger als spätere Nachbearbeitung.",
    privacyFocus:
      "Wenn Fotos persönliche Daten zeigen, sollte die Umwandlung nicht über eine unbekannte App mit Zugriff auf die ganze Galerie laufen.",
    workflow:
      "Bilder auswählen, Reihenfolge prüfen, PDF erzeugen und direkt aus dem Download-Ordner oder Teilen-Dialog weitergeben.",
    pitfalls: [
      "Verwackelte Fotos bleiben im PDF schlecht lesbar.",
      "Mobile Browser können sehr große Bildserien langsamer verarbeiten.",
      "Hoch- und Querformat gemischt wirkt bei Formularen schnell unprofessionell."
    ],
    steps: [
      "Fotos in der Galerie prüfen und unscharfe Bilder aussortieren.",
      "JPG-Dateien im Tool auswählen.",
      "Reihenfolge vor dem Export kontrollieren.",
      "PDF erzeugen.",
      "Datei öffnen und erst danach versenden."
    ],
    related: [
      "jpg-in-pdf-umwandeln",
      "mehrere-jpg-in-pdf-umwandeln",
      "jpg-in-pdf-umwandeln-online",
      "jpg-in-pdf-umwandeln-windows"
    ]
  },
  {
    keyword: "jpg in pdf umwandeln windows",
    slug: "jpg-in-pdf-umwandeln-windows",
    title: "JPG in PDF umwandeln Windows - Bilder als PDF speichern",
    description:
      "JPG in PDF umwandeln Windows: praktische Wege mit Browser, Explorer und Druckdialog, passend für Windows 10 und Windows 11.",
    group: "platform",
    toolMode: "jpg-to-pdf",
    audience: "Windows-Nutzer, die Bilder in ein PDF umwandeln müssen",
    intent: "JPG-Dateien unter Windows als PDF speichern oder zusammenfassen",
    angle:
      "Die Seite verbindet Windows-Bordmittel mit dem Browser-Tool. So kann der Nutzer entscheiden, ob ein einzelnes Bild reicht oder ein geordnetes Mehrseiten-PDF gebraucht wird.",
    scenario:
      "Fotos aus dem Smartphone liegen im Explorer, mehrere Scans wurden heruntergeladen oder Screenshots sollen als eine PDF-Anlage verschickt werden.",
    qualityFocus:
      "Windows zeigt Bildgrößen im Explorer. Vor dem PDF-Export lohnt sich ein kurzer Blick, ob die Aufnahmen scharf und richtig gedreht sind.",
    privacyFocus:
      "Bilder mit privaten Daten bleiben beim lokalen Browser-Export auf dem Rechner und müssen nicht erst an eine Online-App gesendet werden.",
    workflow:
      "Bilder im Explorer sortieren, im Browser laden, als PDF erzeugen und danach im Standard-PDF-Viewer prüfen.",
    pitfalls: [
      "Der Windows-Druckdialog kann Seitenränder erzeugen, die nicht gewünscht sind.",
      "Falsch gedrehte Bilder werden im PDF störend sichtbar.",
      "Viele Fotos in Originalgröße machen ein sehr großes PDF."
    ],
    steps: [
      "JPGs im Explorer sammeln.",
      "Reihenfolge und Drehung prüfen.",
      "Bilder im Tool auswählen.",
      "PDF erstellen.",
      "PDF mit Edge oder einem Viewer kontrollieren."
    ],
    related: [
      "jpg-in-pdf-umwandeln",
      "mehrere-jpg-in-pdf-umwandeln",
      "jpg-in-pdf-umwandeln-handy",
      "pdf-in-jpg-umwandeln-windows"
    ]
  },
  {
    keyword: "jpg in pdf umwandeln mac",
    slug: "jpg-in-pdf-umwandeln-mac",
    title: "JPG in PDF umwandeln Mac - Bilder auf macOS bündeln",
    description:
      "JPG in PDF umwandeln Mac: Fotos und Scans unter macOS als PDF speichern, mit Finder-, Vorschau- und Browser-Tipps.",
    group: "platform",
    toolMode: "jpg-to-pdf",
    audience: "Mac-Nutzer, die mehrere JPGs zu einem PDF zusammenfassen wollen",
    intent: "unter macOS aus Bildern ein PDF erstellen",
    angle:
      "Die Seite vergleicht den schnellen Vorschau-Weg mit einem browserbasierten Mehrbild-Workflow, der für wiederkehrende Aufgaben oft übersichtlicher ist.",
    scenario:
      "Fotos aus Fotos-App, AirDrop, Scanner oder Downloads sollen als ein PDF an Schule, Arbeitgeber, Behörde oder Kunde gehen.",
    qualityFocus:
      "Vor dem Export sollten Bilder im Finder oder in Vorschau gedreht und unscharfe Aufnahmen ersetzt werden.",
    privacyFocus:
      "Lokale Verarbeitung passt gut zu macOS-Workflows, bei denen Dateien aus Mail, iCloud oder AirDrop nicht unnötig in fremde Dienste wandern sollen.",
    workflow:
      "Bilder im Finder sammeln, in der gewünschten Reihenfolge ins Tool laden, PDF herunterladen und in Vorschau kontrollieren.",
    pitfalls: [
      "Die Fotos-App exportiert manchmal andere Dateinamen als erwartet.",
      "AirDrop-Bilder landen je nach Einstellung an unterschiedlichen Orten.",
      "Einzelne Vorschau-Exporte können bei mehreren Bildern mehr Klicks verursachen."
    ],
    steps: [
      "JPGs im Finder sammeln.",
      "Bilder sortieren und drehen.",
      "Dateien im Browser-Tool auswählen.",
      "PDF erstellen.",
      "PDF in Vorschau kontrollieren."
    ],
    related: [
      "jpg-in-pdf-umwandeln",
      "mehrere-jpg-in-pdf-umwandeln",
      "jpg-in-pdf-umwandeln-online",
      "pdf-in-jpg-umwandeln-mac"
    ]
  },
  {
    keyword: "jpg in pdf umwandeln online",
    slug: "jpg-in-pdf-umwandeln-online",
    title: "JPG in PDF umwandeln online - Bilder im Browser bündeln",
    description:
      "JPG in PDF umwandeln online: mehrere Bilder direkt im Browser zu einer PDF-Datei zusammenfassen, ohne Konto und ohne Upload-Zwang.",
    group: "online",
    toolMode: "jpg-to-pdf",
    audience: "Nutzer, die online JPG-Bilder in ein PDF bringen wollen",
    intent: "im Browser aus Bildern ein PDF erstellen",
    angle:
      "Die Online-Variante für JPG nach PDF betont einen schnellen Webfluss: Bilder liegen lokal, das Ergebnis wird direkt im Browser erzeugt.",
    scenario:
      "Fotos aus der Galerie, Downloads oder Screenshots sollen in einem Portal als eine PDF-Datei hochgeladen werden.",
    qualityFocus:
      "Das PDF übernimmt die Bildschärfe. Wer vorher unscharfe oder abgeschnittene JPGs aussortiert, spart später Korrekturrunden.",
    privacyFocus:
      "Eine lokale Browser-Erstellung ist besonders bei Ausweisen, Belegen und medizinischen Dokumenten sinnvoll.",
    workflow:
      "Bilder online auswählen, Reihenfolge behalten, PDF erstellen und herunterladen.",
    pitfalls: [
      "Mobile Datenverbindungen sind für große Upload-Konverter unpraktisch.",
      "Manche Online-Tools komprimieren Bilder ohne Nachfrage.",
      "Ein PDF mit falsch sortierten Bildern wird meist erst beim Empfänger bemerkt."
    ],
    steps: [
      "Online-Werkzeug öffnen.",
      "JPG-Dateien auswählen.",
      "Reihenfolge prüfen.",
      "PDF generieren.",
      "Datei herunterladen und öffnen."
    ],
    related: [
      "jpg-in-pdf-umwandeln",
      "mehrere-jpg-in-pdf-umwandeln",
      "jpg-in-pdf-umwandeln-handy",
      "jpg-in-pdf-umwandeln-mac"
    ]
  },
  {
    keyword: "pdf in svg umwandeln",
    slug: "pdf-in-svg-umwandeln",
    title: "PDF in SVG umwandeln - für Web und Layout prüfen",
    description:
      "PDF in SVG umwandeln: Wann SVG sinnvoll ist, wo Grenzen liegen und wie ein browserbasierter SVG-Export für Seitenvorschauen funktioniert.",
    group: "svg-pdf",
    toolMode: "pdf-to-svg",
    audience: "Designer, Entwickler und Content-Teams, die PDF-Seiten im Web oder Layout als SVG nutzen wollen",
    intent: "eine PDF-Seite als SVG-Datei erhalten oder verstehen, wann echte Vektoren benötigt werden",
    angle:
      "Diese Seite unterscheidet zwischen einem layoutgetreuen SVG-Container und einer echten Vektorisierung. Das ist wichtig, weil viele PDF-Dateien gemischte Inhalte aus Text, Bildern und Vektoren enthalten.",
    scenario:
      "Ein PDF-Poster soll im Web eingebettet, eine Seitenvorschau als skalierbare Grafik abgelegt oder ein Layout für eine technische Dokumentation weitergereicht werden.",
    qualityFocus:
      "Für reine Vorschauen reicht ein SVG mit eingebettetem gerendertem Seitenbild. Für Logos, Plots oder Schneidedaten braucht man dagegen echte Pfade aus der Originalquelle.",
    privacyFocus:
      "Wenn ein PDF vertrauliche Layouts enthält, ist es sinnvoll, die Vorschau lokal zu erzeugen, bevor sie in ein CMS oder Repository wandert.",
    workflow:
      "Das Werkzeug rendert die PDF-Seite im Browser und verpackt sie in eine SVG-Datei. Zusätzlich erklärt die Seite, wann ein Quellformat wie AI, SVG oder InDesign gebraucht wird.",
    pitfalls: [
      "Ein SVG-Container macht aus einem gescannten PDF keine echten Vektoren.",
      "Eingebettete Rasterbilder können bei starker Vergrößerung unscharf bleiben.",
      "Fonts und Transparenzen sind bei PDF-zu-SVG-Workflows oft der kritische Punkt."
    ],
    steps: [
      "PDF-Datei laden.",
      "Eine Seite für den SVG-Export auswählen.",
      "Skalierung passend zur Webdarstellung setzen.",
      "SVG-Datei herunterladen.",
      "Bei Vektorbedarf das Ergebnis in einem Editor kontrollieren."
    ],
    related: [
      "svg-in-pdf-umwandeln",
      "pdf-in-tiff-umwandeln",
      "tiff-in-pdf-umwandeln",
      "pdf-in-jpg-umwandeln-online"
    ]
  },
  {
    keyword: "pdf in tiff umwandeln",
    slug: "pdf-in-tiff-umwandeln",
    title: "PDF in TIFF umwandeln - für Archiv und Druckvorstufe",
    description:
      "PDF in TIFF umwandeln: Wann TIFF sinnvoll ist, wie Seiten als Bilddateien exportiert werden und welche Qualitätsfragen wichtig sind.",
    group: "tiff-pdf",
    toolMode: "pdf-to-tiff",
    audience: "Nutzer aus Archiv, Scan-Verarbeitung oder Druckvorstufe, die PDF-Seiten als TIFF benötigen",
    intent: "PDF-Seiten in ein bildbasiertes TIFF-Format bringen",
    angle:
      "TIFF ist weniger ein Alltagsformat als ein Arbeitsformat für Archivierung, Scan-Strecken und bestimmte Druck- oder DMS-Prozesse. Deshalb erklärt diese Seite den Zweck genauer.",
    scenario:
      "Ein Dokumentenmanagementsystem, eine Archivvorgabe oder eine Druckerei verlangt TIFF-Dateien statt PDF oder JPG.",
    qualityFocus:
      "Bei TIFF geht es um verlustarme oder unkomprimierte Bilddaten. Die Ausgabe wird größer, kann aber für Weiterverarbeitung stabiler sein.",
    privacyFocus:
      "Archiv- und Druckdaten enthalten oft vertrauliche Inhalte. Lokale Erzeugung ist sinnvoll, bevor Dateien an ein externes System übergeben werden.",
    workflow:
      "Das Browser-Tool rendert PDF-Seiten und speichert sie als TIFF-Dateien. Bei mehreren Seiten wird ein geordnetes Paket erzeugt.",
    pitfalls: [
      "TIFF-Dateien sind oft deutlich größer als JPG-Dateien.",
      "Nicht jede Webanwendung akzeptiert TIFF als Uploadformat.",
      "Mehrseitige TIFF-Spezialfälle werden von Browsern nicht einheitlich unterstützt."
    ],
    steps: [
      "PDF-Datei laden.",
      "Zielauflösung festlegen.",
      "TIFF-Export starten.",
      "Dateigröße und Lesbarkeit prüfen.",
      "Datei nur in Systemen einsetzen, die TIFF ausdrücklich erwarten."
    ],
    related: [
      "tiff-in-pdf-umwandeln",
      "pdf-in-jpg-umwandeln-online",
      "pdf-in-svg-umwandeln",
      "svg-in-pdf-umwandeln"
    ]
  },
  {
    keyword: "tiff in pdf umwandeln",
    slug: "tiff-in-pdf-umwandeln",
    title: "TIFF in PDF umwandeln - Archivbilder als Dokument",
    description:
      "TIFF in PDF umwandeln: gescannte TIFF-Dateien in ein PDF bringen, lokal im Browser und mit Hinweisen für große Dateien.",
    group: "tiff-pdf",
    toolMode: "tiff-to-pdf",
    audience: "Nutzer mit Scan- oder Archivdateien im TIFF-Format",
    intent: "TIFF-Bilder in eine PDF-Datei umwandeln, die leichter geteilt oder hochgeladen werden kann",
    angle:
      "TIFF-Dateien sind robust, aber nicht überall bequem. Diese Seite zeigt, wie daraus ein handhabbares PDF für Versand, Ablage oder Upload wird.",
    scenario:
      "Ein Scanner, Archivsystem oder DMS liefert TIFF-Dateien, während Empfänger, Portale oder E-Mail-Prozesse PDF erwarten.",
    qualityFocus:
      "Die Bildinformation aus dem TIFF sollte erhalten bleiben, ohne das PDF unnötig zu vergrößern. Besonders bei mehrseitigen oder hochauflösenden Scans zählt Kontrolle.",
    privacyFocus:
      "Archivscans enthalten häufig personenbezogene Daten. Eine lokale Umwandlung reduziert externe Verarbeitungsschritte.",
    workflow:
      "TIFF laden, Seite dekodieren, als PDF-Seite platzieren und Ergebnis herunterladen.",
    pitfalls: [
      "Nicht jeder Browser zeigt TIFF direkt an.",
      "Sehr große TIFF-Dateien können viel Arbeitsspeicher brauchen.",
      "Mehrseitige TIFFs sind technisch uneinheitlich und sollten nach dem Export geprüft werden."
    ],
    steps: [
      "TIFF-Datei auswählen.",
      "Konvertierung starten.",
      "PDF herunterladen.",
      "Alle Seiten kontrollieren.",
      "PDF im gewünschten System testen."
    ],
    related: [
      "pdf-in-tiff-umwandeln",
      "jpg-in-pdf-umwandeln",
      "pdf-in-jpg-umwandeln-online",
      "jpg-in-pdf-umwandeln-online"
    ]
  },
  {
    keyword: "svg in pdf umwandeln",
    slug: "svg-in-pdf-umwandeln",
    title: "SVG in PDF umwandeln - Grafiken weitergeben",
    description:
      "SVG in PDF umwandeln: Vektor- oder Webgrafiken als PDF bereitstellen, mit Hinweisen zu Größe, Fonts und Browser-Rendering.",
    group: "svg-pdf",
    toolMode: "svg-to-pdf",
    audience: "Nutzer, die SVG-Grafiken für Versand, Druckvorschau oder Dokumentation als PDF brauchen",
    intent: "eine SVG-Datei in ein PDF bringen, das leichter weitergegeben werden kann",
    angle:
      "SVG ist für Web und skalierbare Grafiken stark, aber nicht jeder Empfänger kann SVG-Dateien öffnen. PDF ist als Austauschformat oft vertrauter.",
    scenario:
      "Ein Logoentwurf, Diagramm, Icon-Set, technische Grafik oder exportiertes Webbild soll in ein PDF für Freigabe, Kommentar oder Archiv.",
    qualityFocus:
      "Fonts, externe Bilder und CSS im SVG sind die kritischen Punkte. Ein sauber eingebettetes SVG liefert die beste PDF-Ausgabe.",
    privacyFocus:
      "Grafiken können Markendaten oder interne Diagramme enthalten. Lokales Rendern im Browser vermeidet unnötige Uploads.",
    workflow:
      "SVG-Datei laden, im Browser rendern, als PDF-Seite platzieren und Ergebnis herunterladen.",
    pitfalls: [
      "Externe Schriftarten oder Bilder im SVG können beim Rendern fehlen.",
      "Sehr kleine ViewBox-Werte können zu unerwarteten Seitenformaten führen.",
      "Nicht jedes SVG ist für Druckfarben oder Beschnitt vorbereitet."
    ],
    steps: [
      "SVG-Datei auswählen.",
      "Vorschau rendern lassen.",
      "PDF erzeugen.",
      "PDF öffnen und Grafikkanten prüfen.",
      "Bei Produktionsdruck Originaldaten bereithalten."
    ],
    related: [
      "pdf-in-svg-umwandeln",
      "jpg-in-pdf-umwandeln"
    ]
  }
];

export const allSeoPages = [homePage, ...seoPages];

export function pageBySlug(slug: string) {
  return allSeoPages.find((page) => page.slug === slug);
}

export function pathFor(page: SeoPage) {
  return page.slug ? `/${page.slug}/` : "/";
}
