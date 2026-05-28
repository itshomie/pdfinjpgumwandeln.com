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
    "PDF in JPG umwandeln fuer deutsche Nutzer: lokale Browser-Konvertierung, klare Qualitaetseinstellungen und praktische Anleitungen fuer Windows, Mac und Handy.",
  group: "pdf-jpg",
  toolMode: "pdf-to-jpg",
  audience: "deutsche Nutzer, die PDF-Seiten schnell als JPG-Bilder speichern wollen",
  intent: "eine PDF-Datei ohne Installation in gut lesbare JPG-Dateien umwandeln",
  angle:
    "Die Startseite verbindet ein direkt nutzbares Werkzeug mit einem verstaendlichen Format-Ratgeber, damit Besucher sofort konvertieren und danach die passende Detailseite finden.",
  scenario:
    "Typisch ist eine Rechnung, Praesentation, Scan-Datei oder ein PDF-Formular, das in einem Shop, Messenger, CMS oder Bildarchiv als einzelne Bilddatei gebraucht wird.",
  qualityFocus:
    "Die entscheidenden Stellschrauben sind Seitenauflosung, JPEG-Qualitaet, klare Dateinamen und die Frage, ob alle Seiten oder nur die erste Seite exportiert werden sollen.",
  privacyFocus:
    "Die Datei wird im Browser verarbeitet. Das ist besonders fuer vertrauliche Unterlagen wichtig, weil kein Upload an einen fremden Konvertierungsserver vorgesehen ist.",
  workflow:
    "Besucher laden eine PDF-Datei, waehlen Skalierung und Qualitaet, starten die Umwandlung und erhalten bei mehreren Seiten automatisch ein ZIP-Paket.",
  pitfalls: [
    "Zu niedrige Aufloesung macht kleine Schrift in der JPG-Datei unscharf.",
    "Ein einzelnes JPG ersetzt kein mehrseitiges Dokument, wenn die Reihenfolge spaeter nachvollziehbar bleiben muss.",
    "Sehr grosse PDFs koennen auf alten Handys laenger rendern als auf einem Desktop."
  ],
  steps: [
    "PDF auswaehlen oder in die Upload-Flaeche ziehen.",
    "Aufloesung passend zum Ziel waehlen: Vorschau, Web oder Druck.",
    "Alle Seiten oder nur die benoetigten Seiten exportieren.",
    "JPG-Dateien herunterladen und vor dem Teilen kurz oeffnen.",
    "Bei vielen Seiten das ZIP entpacken und die Dateinamen pruefen."
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
      "PDF in JPG umwandeln online: Web-Werkzeug mit lokalem Rendern, Qualitaetsreglern und ZIP-Ausgabe fuer mehrseitige PDFs.",
    group: "online",
    toolMode: "pdf-to-jpg",
    audience: "Nutzer, die ohne Installation direkt im Browser arbeiten wollen",
    intent: "PDF-Seiten online erreichbar in JPG-Dateien umwandeln",
    angle:
      "Diese Seite ist die allgemeine Online-Variante und erklaert den Unterschied zwischen Bedienung im Web und Dateiverarbeitung auf dem eigenen Geraet.",
    scenario:
      "Die Umwandlung wird oft zwischen zwei Online-Schritten gebraucht: PDF herunterladen, JPG erzeugen, JPG wieder in ein Portal oder CMS hochladen.",
    qualityFocus:
      "Ein sichtbarer Qualitaetsregler hilft, den Export an Webvorschau, Archiv oder drucknahe Nutzung anzupassen.",
    privacyFocus:
      "Lokales Browser-Rendering reduziert das Risiko, dass Dokumente auf Servern fremder Anbieter zwischengespeichert werden.",
    workflow:
      "Die Seite oeffnen, PDF auswaehlen, Konvertierung starten und die entstandenen JPG-Dateien herunterladen.",
    pitfalls: [
      "Online-Konverter ohne klare Datenschutzinfo sind fuer sensible PDFs ungeeignet.",
      "Ein Ergebnis ohne Seitenzahlen kann bei mehrseitigen Dokumenten verwirrend sein.",
      "Bei schlechter Verbindung sollte der Prozess nicht von Uploads abhaengen."
    ],
    steps: [
      "Browser oeffnen.",
      "PDF-Datei auswaehlen.",
      "Qualitaet einstellen.",
      "JPG-Ausgabe starten.",
      "Download speichern und kontrollieren."
    ],
    related: [
      "pdf-in-jpg-umwandeln-windows",
      "pdf-in-jpg-umwandeln-mac",
      "pdf-in-jpg-umwandeln-handy",
      "pdf-in-bilddatei-umwandeln"
    ]
  },
  {
    keyword: "pdf in jpg umwandeln windows",
    slug: "pdf-in-jpg-umwandeln-windows",
    title: "PDF in JPG umwandeln Windows - ohne Zusatzprogramm",
    description:
      "PDF in JPG umwandeln Windows: Browser-Workflow fuer Windows 10 und 11, inklusive Dateiablage, ZIP-Download und Qualitaetstipps.",
    group: "platform",
    toolMode: "pdf-to-jpg",
    audience: "Windows-Nutzer, die PDFs ohne neue Desktop-Software als JPG speichern wollen, egal ob Windows 10 oder Windows 11",
    intent: "auf einem Windows-PC schnell PDF-Seiten in JPG-Dateien exportieren",
    angle:
      "Die Seite ist auf den Windows-Alltag ausgelegt: Downloads-Ordner, Explorer, ZIP-Dateien, Edge oder Chrome und typische Upload-Portale unter Windows 10 und 11.",
    scenario:
      "Ein PDF liegt auf dem Desktop oder im Download-Ordner und soll als JPG in eine Webanwendung, ein Office-Dokument oder eine E-Mail eingefuegt werden.",
    qualityFocus:
      "Windows zeigt Bildabmessungen im Explorer schnell an. Das hilft, nach der Konvertierung zu pruefen, ob die JPG-Datei gross genug fuer den Zielzweck ist.",
    privacyFocus:
      "Gerade auf Arbeitsrechnern ist eine browserbasierte Loesung praktisch, weil keine Adminrechte fuer eine Installation erforderlich sind und die Datei lokal bleibt.",
    workflow:
      "PDF im Browser auswaehlen, JPGs exportieren, ZIP im Explorer entpacken und die Bilder in der Zielanwendung verwenden.",
    pitfalls: [
      "Windows versteckt Dateiendungen manchmal, wodurch JPG und PDF verwechselt werden.",
      "Der Downloads-Ordner wird schnell unuebersichtlich, wenn viele Seiten exportiert werden.",
      "Aeltere Rechner koennen grosse PDFs langsamer rendern."
    ],
    steps: [
      "Browser unter Windows oeffnen.",
      "PDF aus Desktop, Dokumente oder Downloads waehlen.",
      "Qualitaet einstellen.",
      "ZIP oder JPG herunterladen.",
      "Im Explorer entpacken und Dateiendungen pruefen."
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
      "PDF in JPG umwandeln Mac: Anleitung fuer macOS, Browser-Tool und Hinweise zu Vorschau, Finder, Safari und JPG-Qualitaet.",
    group: "platform",
    toolMode: "pdf-to-jpg",
    audience: "Mac-Nutzer, die eine praktische Alternative oder Ergaenzung zur Vorschau-App suchen",
    intent: "auf macOS PDFs als JPG exportieren, besonders wenn mehrere Seiten betroffen sind",
    angle:
      "Der Fokus liegt auf einem Mac-Workflow, der nicht an einer einzelnen App haengt: PDF im Finder, Browser-Tool fuer den Export, Ergebnis im Download-Ordner.",
    scenario:
      "Das PDF kommt aus Mail, iCloud Drive oder einem Download und soll als Bild in eine Webseite, Praesentation oder Kundennachricht eingefuegt werden.",
    qualityFocus:
      "Mac-Displays kaschieren niedrige Aufloesung. Die Seite empfiehlt deshalb, exportierte JPGs bei 100 Prozent oder in der Zielanwendung zu pruefen.",
    privacyFocus:
      "Mit lokaler Verarbeitung bleiben PDFs aus iCloud Drive, Mail oder Kundenprojekten auf dem Geraet, solange der Nutzer sie nicht aktiv weitergibt.",
    workflow:
      "Datei im Finder finden, im Browser auswaehlen, Export starten, ZIP entpacken und JPGs in der Ziel-App verwenden.",
    pitfalls: [
      "Vorschau exportiert komfortabel einzelne Seiten, aber nicht immer ganze Stapel.",
      "Download-Orte in Safari und Chrome koennen unterschiedlich eingestellt sein.",
      "Dateien aus iCloud werden vor dem Export eventuell erst lokal geladen."
    ],
    steps: [
      "PDF im Finder oder aus Downloads bereitlegen.",
      "Browser-Tool oeffnen.",
      "PDF laden.",
      "Alle benoetigten Seiten als JPG exportieren.",
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
      "PDF in JPG umwandeln Handy: PDF-Seiten auf Smartphone oder Tablet lokal im Browser als JPG speichern, mit Tipps fuer Lesbarkeit und Download.",
    group: "platform",
    toolMode: "pdf-to-jpg",
    audience: "Handy-Nutzer, die PDF-Seiten ohne App-Installation als JPG-Bilder speichern wollen",
    intent: "auf dem Smartphone eine PDF-Datei in JPG-Dateien umwandeln und direkt weiterverwenden",
    angle:
      "Diese Seite behandelt den mobilen Arbeitsfluss statt einer weiteren Keyword-Variante: Dateiauswahl, kleiner Bildschirm, Downloads-Ordner und die Frage, wann ein JPG am Handy wirklich besser ist als das PDF.",
    scenario:
      "Typisch ist ein PDF aus Mail, Messenger, Cloud-Speicher oder einem Portal, das als Bild in eine Anzeige, ein Formular, einen Chat oder ein CMS hochgeladen werden soll.",
    qualityFocus:
      "Auf dem Handy ist Lesbarkeit wichtiger als maximale Dateigroesse. Kleine Schrift, Stempel und Tabellen sollten nach dem Export in der Bildvorschau geprueft werden.",
    privacyFocus:
      "Eine lokale Browser-Konvertierung ist besonders am Handy sinnvoll, weil keine unbekannte App Zugriff auf Dokumente, Galerie oder Cloud-Ordner braucht.",
    workflow:
      "PDF am Smartphone auswaehlen, Skalierung bewusst setzen, JPG exportieren, Download oeffnen und erst danach teilen oder hochladen.",
    pitfalls: [
      "Mobile Browser haben weniger Arbeitsspeicher als Desktop-Rechner.",
      "Downloads sind auf iOS und Android nicht immer an derselben Stelle sichtbar.",
      "Sehr kleine Vorschauen koennen lesbar wirken, obwohl die JPG-Datei im Zielportal unscharf erscheint."
    ],
    steps: [
      "PDF aus Dateien, Downloads oder Cloud-Speicher auswaehlen.",
      "Skalierung fuer kleine Schrift etwas hoeher setzen.",
      "Konvertierung starten.",
      "JPG im Download-Ordner oder Teilen-Dialog oeffnen.",
      "Bild im Zielportal pruefen, bevor es abgeschickt wird."
    ],
    related: [
      "pdf-in-jpg-umwandeln-online",
      "pdf-in-jpg-umwandeln-windows",
      "pdf-in-jpg-umwandeln-mac",
      "pdf-in-bilddatei-umwandeln"
    ]
  },
  {
    keyword: "pdf in bilddatei umwandeln",
    slug: "pdf-in-bilddatei-umwandeln",
    title: "PDF in Bilddatei umwandeln - JPG, TIFF oder SVG waehlen",
    description:
      "PDF in Bilddatei umwandeln: Unterschiede zwischen JPG, TIFF und SVG verstehen und die passende Ausgabe fuer den Zweck waehlen.",
    group: "pdf-jpg",
    toolMode: "pdf-to-jpg",
    audience: "Nutzer, die noch nicht sicher sind, welches Bildformat aus einem PDF entstehen soll",
    intent: "PDF-Inhalte als Bilddatei verwenden und das richtige Zielformat auswaehlen",
    angle:
      "Diese Seite ist der Format-Kompass. Sie erklaert, wann JPG, TIFF oder SVG sinnvoll ist, statt jeden Fall automatisch als JPG zu behandeln.",
    scenario:
      "Ein PDF soll in eine Webseite, ein Archiv, eine Praesentation, ein Shop-System oder eine Druckvorstufe uebernommen werden.",
    qualityFocus:
      "JPG ist praktisch fuer Web und Fotos, TIFF fuer bestimmte Archiv- und Druckprozesse, SVG fuer Webeinbettung oder Vektor-nahe Workflows.",
    privacyFocus:
      "Da die Wahl des Formats oft vor der Weitergabe steht, ist lokale Verarbeitung ein guter Zwischenschritt.",
    workflow:
      "Zuerst wird der Zweck geklaert, danach wird das passende Ausgabeformat mit dem Werkzeug oder der verlinkten Spezialseite erzeugt.",
    pitfalls: [
      "JPG ist nicht ideal fuer Transparenz oder echte Vektoren.",
      "TIFF kann fuer normale Web-Uploads zu gross sein.",
      "SVG aus einem PDF ist nicht automatisch eine echte Vektordatei."
    ],
    steps: [
      "Zielsystem pruefen.",
      "Format auswaehlen.",
      "PDF-Datei laden.",
      "Bilddatei erzeugen.",
      "Ergebnis im Zielsystem testen."
    ],
    related: [
      "pdf-in-jpg-umwandeln-online",
      "pdf-in-tiff-umwandeln",
      "pdf-in-svg-umwandeln",
      "pdf-in-vektordatei-umwandeln"
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
    audience: "Nutzer, die aus Fotos, Scans oder Screenshots ein zusammenhaengendes PDF bauen wollen",
    intent: "JPG-Dateien in ein PDF packen, damit Versand, Archivierung und Upload einfacher werden",
    angle:
      "Der Blick geht hier in die Gegenrichtung: Lose Bilddateien werden zu einem geordneten Dokument mit Seitenfolge, statt als einzelne Uploads verteilt zu bleiben.",
    scenario:
      "Typisch sind fotografierte Quittungen, Ausweis-Kopien, unterschriebene Formulare, Hausaufgaben, Bewerbungsanlagen oder mehrere Screenshot-Seiten, die ein Portal nur als PDF akzeptiert.",
    qualityFocus:
      "Das Ergebnis haengt weniger von einer abstrakten DPI-Zahl ab als von der Bildschaerfe, dem Seitenformat und der Reihenfolge. Ein sauber zugeschnittenes JPG ergibt ein deutlich besseres PDF.",
    privacyFocus:
      "Fotos von Ausweisen oder Rechnungen enthalten sensible Details. Eine lokale Umwandlung vermeidet, dass diese Bilder vor dem PDF-Export an Dritte gesendet werden.",
    workflow:
      "Die Bilder werden sortiert, bei Bedarf automatisch auf eigene PDF-Seiten gesetzt und danach als eine Datei gespeichert.",
    pitfalls: [
      "Unscharfe Handyfotos bleiben auch im PDF unscharf.",
      "Falsch sortierte JPGs erzeugen ein PDF, das spaeter schwer zu korrigieren ist.",
      "Sehr grosse Fotos koennen ein PDF unnoetig aufblaehen, obwohl der Inhalt nur Text zeigt."
    ],
    steps: [
      "JPG-Dateien auswaehlen und die Reihenfolge pruefen.",
      "Bei Bedarf mehrere Bilder gleichzeitig laden.",
      "PDF erzeugen und die Seitenansicht kontrollieren.",
      "Dateigroesse mit dem Zielportal abgleichen.",
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
    audience: "Nutzer, die mehrere Fotos oder Scans in einer einzigen PDF-Datei buendeln wollen",
    intent: "aus vielen einzelnen JPG-Dateien ein geordnetes mehrseitiges PDF erstellen",
    angle:
      "Der Schwerpunkt dieser Seite liegt auf Ordnung: Reihenfolge, Seitenformat und klare Benennung sind wichtiger als ein einzelner schneller Export.",
    scenario:
      "Sehr haeufig geht es um Belege fuer Steuer, Versicherung oder Reisekosten, um Schulaufgaben, Bewerbungsanlagen oder Fotos einer unterschriebenen Vertragsseite.",
    qualityFocus:
      "Ein gutes PDF aus mehreren JPGs nutzt jede Bilddatei als eigene Seite und vermeidet unnoetige Skalierung, die Text verschlechtert.",
    privacyFocus:
      "Mehrere Belege oder Ausweiskopien enthalten oft zusammen noch mehr persoenliche Informationen als ein einzelnes Bild. Lokale Verarbeitung ist deshalb besonders sinnvoll.",
    workflow:
      "Bilder werden gesammelt, sortiert, in ein Seitenformat gebracht und als ein PDF heruntergeladen.",
    pitfalls: [
      "Dateinamen wie IMG_1001 und IMG_0999 fuehren schnell zu falscher Reihenfolge.",
      "Querformat und Hochformat gemischt koennen die Lesbarkeit stoeren.",
      "Zu grosse Handyfotos blaehen das PDF ohne sichtbaren Nutzen auf."
    ],
    steps: [
      "Alle JPG-Dateien gleichzeitig auswaehlen.",
      "Reihenfolge anhand der Dateiliste pruefen.",
      "PDF-Erstellung starten.",
      "Mehrseitiges PDF herunterladen.",
      "Vor dem Upload alle Seiten kurz durchblaettern."
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
      "JPG in PDF umwandeln Handy: Fotos und Scans direkt am Smartphone zu einem PDF machen, mit Tipps fuer Schaerfe und Reihenfolge.",
    group: "jpg-pdf",
    toolMode: "jpg-to-pdf",
    audience: "Handy-Nutzer, die Fotos, Screenshots oder Scans als PDF verschicken muessen",
    intent: "auf dem Smartphone aus einem oder mehreren JPG-Bildern ein PDF erstellen",
    angle:
      "Hier steht nicht der Desktop im Mittelpunkt, sondern die Realitaet auf dem Handy: Kamera, Galerie, mobile Browser und Portale mit Dateigroessenlimit.",
    scenario:
      "Ein unterschriebenes Formular, eine Quittung, ein Ausweisfoto oder mehrere Seiten einer Aufgabe wurden fotografiert und sollen als eine PDF-Datei per Mail oder Upload eingereicht werden.",
    qualityFocus:
      "Am Handy entscheidet die Aufnahmequalitaet. Gutes Licht, gerade Kanten und ein ruhiger Ausschnitt sind wichtiger als spaetere Nachbearbeitung.",
    privacyFocus:
      "Wenn Fotos persoenliche Daten zeigen, sollte die Umwandlung nicht ueber eine unbekannte App mit Zugriff auf die ganze Galerie laufen.",
    workflow:
      "Bilder auswaehlen, Reihenfolge pruefen, PDF erzeugen und direkt aus dem Download-Ordner oder Teilen-Dialog weitergeben.",
    pitfalls: [
      "Verwackelte Fotos bleiben im PDF schlecht lesbar.",
      "Mobile Browser koennen sehr grosse Bildserien langsamer verarbeiten.",
      "Hoch- und Querformat gemischt wirkt bei Formularen schnell unprofessionell."
    ],
    steps: [
      "Fotos in der Galerie pruefen und unscharfe Bilder aussortieren.",
      "JPG-Dateien im Tool auswaehlen.",
      "Reihenfolge vor dem Export kontrollieren.",
      "PDF erzeugen.",
      "Datei oeffnen und erst danach versenden."
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
      "JPG in PDF umwandeln Windows: praktische Wege mit Browser, Explorer und Druckdialog, passend fuer Windows 10 und Windows 11.",
    group: "platform",
    toolMode: "jpg-to-pdf",
    audience: "Windows-Nutzer, die Bilder in ein PDF umwandeln muessen",
    intent: "JPG-Dateien unter Windows als PDF speichern oder zusammenfassen",
    angle:
      "Die Seite verbindet Windows-Bordmittel mit dem Browser-Tool. So kann der Nutzer entscheiden, ob ein einzelnes Bild reicht oder ein geordnetes Mehrseiten-PDF gebraucht wird.",
    scenario:
      "Fotos aus dem Smartphone liegen im Explorer, mehrere Scans wurden heruntergeladen oder Screenshots sollen als eine PDF-Anlage verschickt werden.",
    qualityFocus:
      "Windows zeigt Bildgroessen im Explorer. Vor dem PDF-Export lohnt sich ein kurzer Blick, ob die Aufnahmen scharf und richtig gedreht sind.",
    privacyFocus:
      "Bilder mit privaten Daten bleiben beim lokalen Browser-Export auf dem Rechner und muessen nicht erst an eine Online-App gesendet werden.",
    workflow:
      "Bilder im Explorer sortieren, im Browser laden, als PDF erzeugen und danach im Standard-PDF-Viewer pruefen.",
    pitfalls: [
      "Der Windows-Druckdialog kann Seitenraender erzeugen, die nicht gewuenscht sind.",
      "Falsch gedrehte Bilder werden im PDF stoerend sichtbar.",
      "Viele Fotos in Originalgroesse machen ein sehr grosses PDF."
    ],
    steps: [
      "JPGs im Explorer sammeln.",
      "Reihenfolge und Drehung pruefen.",
      "Bilder im Tool auswaehlen.",
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
    title: "JPG in PDF umwandeln Mac - Bilder auf macOS buendeln",
    description:
      "JPG in PDF umwandeln Mac: Fotos und Scans unter macOS als PDF speichern, mit Finder-, Vorschau- und Browser-Tipps.",
    group: "platform",
    toolMode: "jpg-to-pdf",
    audience: "Mac-Nutzer, die mehrere JPGs zu einem PDF zusammenfassen wollen",
    intent: "unter macOS aus Bildern ein PDF erstellen",
    angle:
      "Die Seite vergleicht den schnellen Vorschau-Weg mit einem browserbasierten Mehrbild-Workflow, der fuer wiederkehrende Aufgaben oft uebersichtlicher ist.",
    scenario:
      "Fotos aus Fotos-App, AirDrop, Scanner oder Downloads sollen als ein PDF an Schule, Arbeitgeber, Behoerde oder Kunde gehen.",
    qualityFocus:
      "Vor dem Export sollten Bilder im Finder oder in Vorschau gedreht und unscharfe Aufnahmen ersetzt werden.",
    privacyFocus:
      "Lokale Verarbeitung passt gut zu macOS-Workflows, bei denen Dateien aus Mail, iCloud oder AirDrop nicht unnoetig in fremde Dienste wandern sollen.",
    workflow:
      "Bilder im Finder sammeln, in der gewuenschten Reihenfolge ins Tool laden, PDF herunterladen und in Vorschau kontrollieren.",
    pitfalls: [
      "Die Fotos-App exportiert manchmal andere Dateinamen als erwartet.",
      "AirDrop-Bilder landen je nach Einstellung an unterschiedlichen Orten.",
      "Einzelne Vorschau-Exporte koennen bei mehreren Bildern mehr Klicks verursachen."
    ],
    steps: [
      "JPGs im Finder sammeln.",
      "Bilder sortieren und drehen.",
      "Dateien im Browser-Tool auswaehlen.",
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
    title: "JPG in PDF umwandeln online - Bilder im Browser buendeln",
    description:
      "JPG in PDF umwandeln online: mehrere Bilder direkt im Browser zu einer PDF-Datei zusammenfassen, ohne Konto und ohne Upload-Zwang.",
    group: "online",
    toolMode: "jpg-to-pdf",
    audience: "Nutzer, die online JPG-Bilder in ein PDF bringen wollen",
    intent: "im Browser aus Bildern ein PDF erstellen",
    angle:
      "Die Online-Variante fuer JPG nach PDF betont einen schnellen Webfluss: Bilder liegen lokal, das Ergebnis wird direkt im Browser erzeugt.",
    scenario:
      "Fotos aus der Galerie, Downloads oder Screenshots sollen in einem Portal als eine PDF-Datei hochgeladen werden.",
    qualityFocus:
      "Das PDF uebernimmt die Bildschaerfe. Wer vorher unscharfe oder abgeschnittene JPGs aussortiert, spart spaeter Korrekturrunden.",
    privacyFocus:
      "Eine lokale Browser-Erstellung ist besonders bei Ausweisen, Belegen und medizinischen Dokumenten sinnvoll.",
    workflow:
      "Bilder online auswaehlen, Reihenfolge behalten, PDF erstellen und herunterladen.",
    pitfalls: [
      "Mobile Datenverbindungen sind fuer grosse Upload-Konverter unpraktisch.",
      "Manche Online-Tools komprimieren Bilder ohne Nachfrage.",
      "Ein PDF mit falsch sortierten Bildern wird meist erst beim Empfaenger bemerkt."
    ],
    steps: [
      "Online-Werkzeug oeffnen.",
      "JPG-Dateien auswaehlen.",
      "Reihenfolge pruefen.",
      "PDF generieren.",
      "Datei herunterladen und oeffnen."
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
    title: "PDF in SVG umwandeln - fuer Web und Layout pruefen",
    description:
      "PDF in SVG umwandeln: Wann SVG sinnvoll ist, wo Grenzen liegen und wie ein browserbasierter SVG-Export fuer Seitenvorschauen funktioniert.",
    group: "svg-pdf",
    toolMode: "pdf-to-svg",
    audience: "Designer, Entwickler und Content-Teams, die PDF-Seiten im Web oder Layout als SVG nutzen wollen",
    intent: "eine PDF-Seite als SVG-Datei erhalten oder verstehen, wann echte Vektoren benoetigt werden",
    angle:
      "Diese Seite unterscheidet zwischen einem layoutgetreuen SVG-Container und einer echten Vektorisierung. Das ist wichtig, weil viele PDF-Dateien gemischte Inhalte aus Text, Bildern und Vektoren enthalten.",
    scenario:
      "Ein PDF-Poster soll im Web eingebettet, eine Seitenvorschau als skalierbare Grafik abgelegt oder ein Layout fuer eine technische Dokumentation weitergereicht werden.",
    qualityFocus:
      "Fuer reine Vorschauen reicht ein SVG mit eingebettetem gerendertem Seitenbild. Fuer Logos, Plots oder Schneidedaten braucht man dagegen echte Pfade aus der Originalquelle.",
    privacyFocus:
      "Wenn ein PDF vertrauliche Layouts enthaelt, ist es sinnvoll, die Vorschau lokal zu erzeugen, bevor sie in ein CMS oder Repository wandert.",
    workflow:
      "Das Werkzeug rendert die PDF-Seite im Browser und verpackt sie in eine SVG-Datei. Zusaetzlich erklaert die Seite, wann ein Quellformat wie AI, SVG oder InDesign gebraucht wird.",
    pitfalls: [
      "Ein SVG-Container macht aus einem gescannten PDF keine echten Vektoren.",
      "Eingebettete Rasterbilder koennen bei starker Vergroesserung unscharf bleiben.",
      "Fonts und Transparenzen sind bei PDF-zu-SVG-Workflows oft der kritische Punkt."
    ],
    steps: [
      "PDF-Datei laden.",
      "Eine Seite fuer den SVG-Export auswaehlen.",
      "Skalierung passend zur Webdarstellung setzen.",
      "SVG-Datei herunterladen.",
      "Bei Vektorbedarf das Ergebnis in einem Editor kontrollieren."
    ],
    related: [
      "svg-in-pdf-umwandeln",
      "pdf-in-vektordatei-umwandeln",
      "pdf-in-eps-umwandeln",
      "pdf-in-bilddatei-umwandeln"
    ]
  },
  {
    keyword: "pdf in tiff umwandeln",
    slug: "pdf-in-tiff-umwandeln",
    title: "PDF in TIFF umwandeln - fuer Archiv und Druckvorstufe",
    description:
      "PDF in TIFF umwandeln: Wann TIFF sinnvoll ist, wie Seiten als Bilddateien exportiert werden und welche Qualitaetsfragen wichtig sind.",
    group: "tiff-pdf",
    toolMode: "pdf-to-tiff",
    audience: "Nutzer aus Archiv, Scan-Verarbeitung oder Druckvorstufe, die PDF-Seiten als TIFF benoetigen",
    intent: "PDF-Seiten in ein bildbasiertes TIFF-Format bringen",
    angle:
      "TIFF ist weniger ein Alltagsformat als ein Arbeitsformat fuer Archivierung, Scan-Strecken und bestimmte Druck- oder DMS-Prozesse. Deshalb erklaert diese Seite den Zweck genauer.",
    scenario:
      "Ein Dokumentenmanagementsystem, eine Archivvorgabe oder eine Druckerei verlangt TIFF-Dateien statt PDF oder JPG.",
    qualityFocus:
      "Bei TIFF geht es um verlustarme oder unkomprimierte Bilddaten. Die Ausgabe wird groesser, kann aber fuer Weiterverarbeitung stabiler sein.",
    privacyFocus:
      "Archiv- und Druckdaten enthalten oft vertrauliche Inhalte. Lokale Erzeugung ist sinnvoll, bevor Dateien an ein externes System uebergeben werden.",
    workflow:
      "Das Browser-Tool rendert PDF-Seiten und speichert sie als TIFF-Dateien. Bei mehreren Seiten wird ein geordnetes Paket erzeugt.",
    pitfalls: [
      "TIFF-Dateien sind oft deutlich groesser als JPG-Dateien.",
      "Nicht jede Webanwendung akzeptiert TIFF als Uploadformat.",
      "Mehrseitige TIFF-Spezialfaelle werden von Browsern nicht einheitlich unterstuetzt."
    ],
    steps: [
      "PDF-Datei laden.",
      "Zielauflosung festlegen.",
      "TIFF-Export starten.",
      "Dateigroesse und Lesbarkeit pruefen.",
      "Datei nur in Systemen einsetzen, die TIFF ausdruecklich erwarten."
    ],
    related: [
      "tiff-in-pdf-umwandeln",
      "pdf-in-bilddatei-umwandeln",
      "pdf-in-jpg-umwandeln-online",
      "pdf-in-eps-umwandeln"
    ]
  },
  {
    keyword: "pdf in eps umwandeln",
    slug: "pdf-in-eps-umwandeln",
    title: "PDF in EPS umwandeln - Druckvorstufe richtig vorbereiten",
    description:
      "PDF in EPS umwandeln: Grenzen von Browser-Tools, sinnvolle Pruefung und Workflow-Tipps fuer Vektor- und Druckdaten.",
    group: "vector",
    toolMode: "pdf-audit",
    audience: "Designer, Druckvorstufen-Nutzer und Teams, die EPS aus PDF-Daten ableiten muessen",
    intent: "herausfinden, wie ein PDF fuer EPS- oder PostScript-Workflows vorbereitet werden kann",
    angle:
      "Diese Seite macht keine falschen Versprechen: EPS ist ein PostScript-basiertes Produktionsformat. Ein Browser kann ein PDF pruefen und vorbereitende Hinweise geben, ersetzt aber kein professionelles Druckwerkzeug.",
    scenario:
      "Eine Druckerei, ein Plotter-Workflow oder ein altes Layoutsystem verlangt EPS statt PDF, obwohl die Ausgangsdatei nur als PDF vorliegt.",
    qualityFocus:
      "Entscheidend ist, ob die PDF-Datei echte Vektorpfade, eingebettete Schriften und saubere Farbraeume enthaelt. Ein reiner Scan wird durch EPS nicht vektoriell.",
    privacyFocus:
      "Produktionsdaten koennen Marken, Kundendaten oder interne Layouts enthalten. Eine lokale Analyse hilft, bevor Dateien weitergegeben werden.",
    workflow:
      "Das Werkzeug analysiert Seitenzahl, Textanteil und Seitengroessen. Danach beschreibt die Seite, wann Ghostscript, Illustrator, Inkscape oder die Originaldatei sinnvoll sind.",
    pitfalls: [
      "PDF nach EPS ist kein allgemeiner Qualitaetsverbesserer.",
      "Transparenzen und moderne PDF-Effekte koennen im EPS-Workflow verloren gehen.",
      "Scans bleiben Rasterbilder, auch wenn die Dateiendung EPS lautet."
    ],
    steps: [
      "PDF-Datei lokal analysieren.",
      "Text- und Seiteninformationen pruefen.",
      "Klaeren, ob echte Vektoren benoetigt werden.",
      "Professionelles Exportwerkzeug waehlen.",
      "EPS-Ausgabe in der Zielsoftware testen."
    ],
    related: [
      "pdf-in-vektordatei-umwandeln",
      "pdf-in-svg-umwandeln",
      "pdf-in-tiff-umwandeln",
      "svg-in-pdf-umwandeln"
    ]
  },
  {
    keyword: "tiff in pdf umwandeln",
    slug: "tiff-in-pdf-umwandeln",
    title: "TIFF in PDF umwandeln - Archivbilder als Dokument",
    description:
      "TIFF in PDF umwandeln: gescannte TIFF-Dateien in ein PDF bringen, lokal im Browser und mit Hinweisen fuer grosse Dateien.",
    group: "tiff-pdf",
    toolMode: "tiff-to-pdf",
    audience: "Nutzer mit Scan- oder Archivdateien im TIFF-Format",
    intent: "TIFF-Bilder in eine PDF-Datei umwandeln, die leichter geteilt oder hochgeladen werden kann",
    angle:
      "TIFF-Dateien sind robust, aber nicht ueberall bequem. Diese Seite zeigt, wie daraus ein handhabbares PDF fuer Versand, Ablage oder Upload wird.",
    scenario:
      "Ein Scanner, Archivsystem oder DMS liefert TIFF-Dateien, waehrend Empfaenger, Portale oder E-Mail-Prozesse PDF erwarten.",
    qualityFocus:
      "Die Bildinformation aus dem TIFF sollte erhalten bleiben, ohne das PDF unnoetig zu vergroessern. Besonders bei mehrseitigen oder hochaufloesenden Scans zaehlt Kontrolle.",
    privacyFocus:
      "Archivscans enthalten haeufig personenbezogene Daten. Eine lokale Umwandlung reduziert externe Verarbeitungsschritte.",
    workflow:
      "TIFF laden, Seite dekodieren, als PDF-Seite platzieren und Ergebnis herunterladen.",
    pitfalls: [
      "Nicht jeder Browser zeigt TIFF direkt an.",
      "Sehr grosse TIFF-Dateien koennen viel Arbeitsspeicher brauchen.",
      "Mehrseitige TIFFs sind technisch uneinheitlich und sollten nach dem Export geprueft werden."
    ],
    steps: [
      "TIFF-Datei auswaehlen.",
      "Konvertierung starten.",
      "PDF herunterladen.",
      "Alle Seiten kontrollieren.",
      "PDF im gewuenschten System testen."
    ],
    related: [
      "pdf-in-tiff-umwandeln",
      "jpg-in-pdf-umwandeln",
      "pdf-in-bilddatei-umwandeln",
      "jpg-in-pdf-umwandeln-online"
    ]
  },
  {
    keyword: "svg in pdf umwandeln",
    slug: "svg-in-pdf-umwandeln",
    title: "SVG in PDF umwandeln - Grafiken weitergeben",
    description:
      "SVG in PDF umwandeln: Vektor- oder Webgrafiken als PDF bereitstellen, mit Hinweisen zu Groesse, Fonts und Browser-Rendering.",
    group: "svg-pdf",
    toolMode: "svg-to-pdf",
    audience: "Nutzer, die SVG-Grafiken fuer Versand, Druckvorschau oder Dokumentation als PDF brauchen",
    intent: "eine SVG-Datei in ein PDF bringen, das leichter weitergegeben werden kann",
    angle:
      "SVG ist fuer Web und skalierbare Grafiken stark, aber nicht jeder Empfaenger kann SVG-Dateien oeffnen. PDF ist als Austauschformat oft vertrauter.",
    scenario:
      "Ein Logoentwurf, Diagramm, Icon-Set, technische Grafik oder exportiertes Webbild soll in ein PDF fuer Freigabe, Kommentar oder Archiv.",
    qualityFocus:
      "Fonts, externe Bilder und CSS im SVG sind die kritischen Punkte. Ein sauber eingebettetes SVG liefert die beste PDF-Ausgabe.",
    privacyFocus:
      "Grafiken koennen Markendaten oder interne Diagramme enthalten. Lokales Rendern im Browser vermeidet unnoetige Uploads.",
    workflow:
      "SVG-Datei laden, im Browser rendern, als PDF-Seite platzieren und Ergebnis herunterladen.",
    pitfalls: [
      "Externe Schriftarten oder Bilder im SVG koennen beim Rendern fehlen.",
      "Sehr kleine ViewBox-Werte koennen zu unerwarteten Seitenformaten fuehren.",
      "Nicht jedes SVG ist fuer Druckfarben oder Beschnitt vorbereitet."
    ],
    steps: [
      "SVG-Datei auswaehlen.",
      "Vorschau rendern lassen.",
      "PDF erzeugen.",
      "PDF oeffnen und Grafikkanten pruefen.",
      "Bei Produktionsdruck Originaldaten bereithalten."
    ],
    related: [
      "pdf-in-svg-umwandeln",
      "pdf-in-vektordatei-umwandeln",
      "pdf-in-eps-umwandeln",
      "jpg-in-pdf-umwandeln"
    ]
  },
  {
    keyword: "pdf in vektordatei umwandeln",
    slug: "pdf-in-vektordatei-umwandeln",
    title: "PDF in Vektordatei umwandeln - Vektoren realistisch pruefen",
    description:
      "PDF in Vektordatei umwandeln: kostenlos lokal pruefen, ob echte Vektoren vorhanden sind, und passende Wege fuer SVG, EPS oder Originaldaten waehlen.",
    group: "vector",
    toolMode: "pdf-audit",
    audience: "Nutzer, die aus einem PDF eine bearbeitbare Vektorgrundlage gewinnen wollen",
    intent: "herausfinden, ob und wie ein PDF als Vektordatei weitergenutzt werden kann",
    angle:
      "Diese Seite setzt Erwartungen gerade: Ein PDF kann Vektoren enthalten, muss es aber nicht. Ein Scan bleibt Rasterbild, auch wenn er in einer PDF-Huelle steckt.",
    scenario:
      "Ein Logo, Plot, Schnittmuster, Diagramm oder technischer Plan liegt nur als PDF vor und soll in einem Vektorprogramm weiterbearbeitet werden.",
    qualityFocus:
      "Relevant sind Pfade, Textobjekte, eingebettete Schriften und Bilder. Die lokale Analyse gibt Hinweise, ob ein PDF eher text-/vektorhaltig oder rein bildbasiert ist.",
    privacyFocus:
      "Vektorquellen koennen Marken- oder Produktionsdaten enthalten. Eine lokale Vorpruefung ist sinnvoll, bevor die Datei an externe Konverter geht.",
    workflow:
      "Das Tool analysiert die PDF-Struktur grob und kostenlos im Browser. Danach fuehrt die Seite zu SVG-, EPS- oder Originaldatei-Workflows.",
    pitfalls: [
      "Automatische Vektorisierung erzeugt oft ungenaue Pfade.",
      "Schriften koennen beim Oeffnen in Vektorprogrammen ersetzt werden.",
      "Ein JPG in einer PDF-Datei wird durch Umbenennen nicht zu einer Vektorgrafik."
    ],
    steps: [
      "PDF-Datei analysieren.",
      "Text- und Seiteninformationen bewerten.",
      "Klaeren, ob Pfade oder nur Rasterbilder vorhanden sind.",
      "Passendes Zielformat waehlen.",
      "Ergebnis in der Zielsoftware kontrollieren."
    ],
    related: [
      "pdf-in-svg-umwandeln",
      "pdf-in-eps-umwandeln",
      "svg-in-pdf-umwandeln",
      "pdf-in-bilddatei-umwandeln"
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
