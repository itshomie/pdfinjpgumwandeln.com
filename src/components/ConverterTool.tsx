import { useMemo, useState } from "react";
import { AlertCircle, CheckCircle2, Download, FileImage, FileText, Loader2, Settings, Upload } from "lucide-react";
import * as pdfjsLib from "pdfjs-dist";
import pdfWorker from "pdfjs-dist/build/pdf.worker.mjs?url";
import { jsPDF } from "jspdf";
import JSZip from "jszip";
import { Canvg } from "canvg";
import * as UTIF from "utif";

pdfjsLib.GlobalWorkerOptions.workerSrc = pdfWorker;

type ToolMode =
  | "pdf-to-jpg"
  | "jpg-to-pdf"
  | "pdf-to-svg"
  | "pdf-to-tiff"
  | "svg-to-pdf"
  | "tiff-to-pdf"
  | "pdf-audit";

interface Props {
  mode: ToolMode;
  keyword: string;
}

interface ResultItem {
  name: string;
  blob: Blob;
  detail: string;
}

const modeCopy: Record<ToolMode, { accept: string; multiple: boolean; title: string; hint: string; button: string }> = {
  "pdf-to-jpg": {
    accept: "application/pdf,.pdf",
    multiple: false,
    title: "PDF als JPG exportieren",
    hint: "Eine PDF-Datei auswählen. Mehrere Seiten werden als ZIP gespeichert.",
    button: "JPG erzeugen"
  },
  "jpg-to-pdf": {
    accept: "image/jpeg,image/jpg,image/png,image/webp,.jpg,.jpeg,.png,.webp",
    multiple: true,
    title: "Bilder als PDF speichern",
    hint: "Ein oder mehrere JPG-, PNG- oder WebP-Bilder auswählen.",
    button: "PDF erzeugen"
  },
  "pdf-to-svg": {
    accept: "application/pdf,.pdf",
    multiple: false,
    title: "PDF-Seite als SVG-Container exportieren",
    hint: "Erzeugt ein SVG mit eingebetteter Seitenvorschau für Web- und Layouttests.",
    button: "SVG erzeugen"
  },
  "pdf-to-tiff": {
    accept: "application/pdf,.pdf",
    multiple: false,
    title: "PDF-Seiten als TIFF exportieren",
    hint: "Erzeugt unkomprimierte TIFF-Dateien. Das Ergebnis kann deutlich größer sein.",
    button: "TIFF erzeugen"
  },
  "svg-to-pdf": {
    accept: "image/svg+xml,.svg",
    multiple: false,
    title: "SVG als PDF speichern",
    hint: "Rendert die SVG-Datei lokal und platziert sie auf einer PDF-Seite.",
    button: "PDF erzeugen"
  },
  "tiff-to-pdf": {
    accept: "image/tiff,.tif,.tiff",
    multiple: false,
    title: "TIFF als PDF speichern",
    hint: "Dekodiert TIFF-Bilder im Browser und speichert sie als PDF.",
    button: "PDF erzeugen"
  },
  "pdf-audit": {
    accept: "application/pdf,.pdf",
    multiple: false,
    title: "PDF für Vektor- und EPS-Workflows prüfen",
    hint: "Analysiert Seiten, Größen und Textanteil. Für echte EPS-Ausgabe ist Spezialsoftware erforderlich.",
    button: "PDF analysieren"
  }
};

const scaleOptions = [
  { label: "Web", value: 1.4 },
  { label: "Scharf", value: 2 },
  { label: "Drucknah", value: 3 }
];

export default function ConverterTool({ mode, keyword }: Props) {
  const copy = modeCopy[mode];
  const [files, setFiles] = useState<File[]>([]);
  const [scale, setScale] = useState(2);
  const [quality, setQuality] = useState(0.92);
  const [onlyFirstPage, setOnlyFirstPage] = useState(false);
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState<string>("");
  const [results, setResults] = useState<ResultItem[]>([]);

  const fileSummary = useMemo(() => {
    if (files.length === 0) return "Noch keine Datei ausgewählt";
    if (files.length === 1) return `${files[0].name} (${formatBytes(files[0].size)})`;
    const size = files.reduce((sum, file) => sum + file.size, 0);
    return `${files.length} Dateien (${formatBytes(size)})`;
  }, [files]);

  async function runConversion() {
    if (files.length === 0) {
      setMessage("Bitte zuerst eine Datei auswählen.");
      return;
    }

    setBusy(true);
    setMessage("");
    setResults([]);

    try {
      let created: ResultItem[];
      if (mode === "pdf-to-jpg") created = await convertPdfToRaster(files[0], "jpg", scale, quality, onlyFirstPage);
      else if (mode === "pdf-to-svg") created = await convertPdfToSvg(files[0], scale, onlyFirstPage);
      else if (mode === "pdf-to-tiff") created = await convertPdfToRaster(files[0], "tiff", scale, quality, onlyFirstPage);
      else if (mode === "jpg-to-pdf") created = [await imagesToPdf(files)];
      else if (mode === "svg-to-pdf") created = [await svgToPdf(files[0])];
      else if (mode === "tiff-to-pdf") created = [await tiffToPdf(files[0])];
      else created = [await auditPdf(files[0])];

      if (created.length > 1) {
        const zip = new JSZip();
        created.forEach((item) => zip.file(item.name, item.blob));
        const zipBlob = await zip.generateAsync({ type: "blob" });
        const packageName = `${baseName(files[0].name)}-${mode}.zip`;
        setResults([{ name: packageName, blob: zipBlob, detail: `${created.length} Dateien als ZIP-Paket` }]);
      } else {
        setResults(created);
      }

      setMessage("Fertig. Bitte Ergebnis kurz öffnen und prüfen.");
    } catch (error) {
      console.error(error);
      setMessage(error instanceof Error ? error.message : "Die Datei konnte nicht verarbeitet werden.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="converter-shell" aria-label={`Konverter für ${keyword}`}>
      <div className="converter-head">
        <div>
          <p className="tool-label">Lokales Browser-Werkzeug</p>
          <h3>{copy.title}</h3>
          <p>{copy.hint}</p>
        </div>
        <FileText aria-hidden="true" />
      </div>

      <label
        className="drop-zone"
        onDragOver={(event) => event.preventDefault()}
        onDrop={(event) => {
          event.preventDefault();
          const dropped = Array.from(event.dataTransfer.files);
          setFiles(copy.multiple ? dropped : dropped.slice(0, 1));
        }}
      >
        <Upload aria-hidden="true" />
        <span>Datei hier ablegen oder auswählen</span>
        <small>{fileSummary}</small>
        <input
          type="file"
          accept={copy.accept}
          multiple={copy.multiple}
          onChange={(event) => setFiles(Array.from(event.currentTarget.files ?? []))}
        />
      </label>

      {(mode.startsWith("pdf-to") || mode === "pdf-audit") && (
        <div className="settings-panel">
          <div className="settings-title">
            <Settings aria-hidden="true" />
            <span>Einstellungen</span>
          </div>
          {mode !== "pdf-audit" && (
            <>
              <div className="segmented" aria-label="Auflösung">
                {scaleOptions.map((item) => (
                  <button
                    key={item.label}
                    type="button"
                    className={scale === item.value ? "active" : ""}
                    onClick={() => setScale(item.value)}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
              {mode === "pdf-to-jpg" && (
                <label className="range-row">
                  <span>JPEG-Qualität {Math.round(quality * 100)}%</span>
                  <input
                    type="range"
                    min="0.65"
                    max="1"
                    step="0.01"
                    value={quality}
                    onChange={(event) => setQuality(Number(event.currentTarget.value))}
                  />
                </label>
              )}
            </>
          )}
          <label className="check-row">
            <input
              type="checkbox"
              checked={onlyFirstPage}
              onChange={(event) => setOnlyFirstPage(event.currentTarget.checked)}
            />
            <span>Nur erste PDF-Seite verarbeiten</span>
          </label>
        </div>
      )}

      <button className="convert-button" type="button" onClick={runConversion} disabled={busy}>
        {busy ? <Loader2 className="spin" aria-hidden="true" /> : <FileImage aria-hidden="true" />}
        <span>{busy ? "Wird verarbeitet" : copy.button}</span>
      </button>

      {message && (
        <p className={`tool-message ${results.length ? "success" : ""}`}>
          {results.length ? <CheckCircle2 aria-hidden="true" /> : <AlertCircle aria-hidden="true" />}
          <span>{message}</span>
        </p>
      )}

      {results.length > 0 && (
        <div className="result-list" aria-live="polite">
          {results.map((item) => (
            <button type="button" onClick={() => downloadBlob(item.blob, item.name)} key={item.name}>
              <Download aria-hidden="true" />
              <span>
                {item.name}
                <small>{item.detail}</small>
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

async function convertPdfToRaster(
  file: File,
  format: "jpg" | "tiff",
  scale: number,
  quality: number,
  onlyFirstPage: boolean
): Promise<ResultItem[]> {
  const pdf = await loadPdf(file);
  const pageCount = onlyFirstPage ? 1 : pdf.numPages;
  const results: ResultItem[] = [];

  for (let pageNumber = 1; pageNumber <= pageCount; pageNumber += 1) {
    const canvas = await renderPdfPage(pdf, pageNumber, scale);
    if (format === "jpg") {
      const blob = await canvasToBlob(canvas, "image/jpeg", quality);
      results.push({
        name: `${baseName(file.name)}-seite-${String(pageNumber).padStart(2, "0")}.jpg`,
        blob,
        detail: `${canvas.width} x ${canvas.height} Pixel`
      });
    } else {
      const blob = canvasToTiff(canvas);
      results.push({
        name: `${baseName(file.name)}-seite-${String(pageNumber).padStart(2, "0")}.tiff`,
        blob,
        detail: `${canvas.width} x ${canvas.height} Pixel, unkomprimiert`
      });
    }
  }

  return results;
}

async function convertPdfToSvg(file: File, scale: number, onlyFirstPage: boolean): Promise<ResultItem[]> {
  const pdf = await loadPdf(file);
  const pageCount = onlyFirstPage ? 1 : pdf.numPages;
  const results: ResultItem[] = [];

  for (let pageNumber = 1; pageNumber <= pageCount; pageNumber += 1) {
    const canvas = await renderPdfPage(pdf, pageNumber, scale);
    const dataUrl = canvas.toDataURL("image/jpeg", 0.92);
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${canvas.width}" height="${canvas.height}" viewBox="0 0 ${canvas.width} ${canvas.height}"><image href="${dataUrl}" width="${canvas.width}" height="${canvas.height}"/></svg>`;
    results.push({
      name: `${baseName(file.name)}-seite-${String(pageNumber).padStart(2, "0")}.svg`,
      blob: new Blob([svg], { type: "image/svg+xml" }),
      detail: "SVG-Container mit gerenderter Seitenvorschau"
    });
  }

  return results;
}

async function imagesToPdf(files: File[]): Promise<ResultItem> {
  const sortedFiles = [...files].sort((a, b) => a.name.localeCompare(b.name, "de"));
  let doc: jsPDF | null = null;

  for (let index = 0; index < sortedFiles.length; index += 1) {
    const canvas = await imageFileToCanvas(sortedFiles[index]);
    const page = canvasToPage(canvas);
    if (!doc) {
      doc = new jsPDF({ unit: "pt", format: [page.width, page.height], orientation: page.orientation });
    } else {
      doc.addPage([page.width, page.height], page.orientation);
    }
    doc.addImage(canvas.toDataURL("image/jpeg", 0.9), "JPEG", 0, 0, page.width, page.height);
  }

  if (!doc) throw new Error("Keine Bilddateien gefunden.");
  const blob = doc.output("blob");
  return {
    name: `${baseName(sortedFiles[0].name)}-bilder.pdf`,
    blob,
    detail: `${sortedFiles.length} Bild${sortedFiles.length === 1 ? "" : "er"} als PDF`
  };
}

async function svgToPdf(file: File): Promise<ResultItem> {
  const svgText = await file.text();
  const canvas = document.createElement("canvas");
  canvas.width = 1400;
  canvas.height = 1000;
  const context = canvas.getContext("2d");
  if (!context) throw new Error("Canvas konnte nicht erstellt werden.");
  context.fillStyle = "#ffffff";
  context.fillRect(0, 0, canvas.width, canvas.height);
  const renderer = Canvg.fromString(context, svgText, { ignoreMouse: true, ignoreAnimation: true });
  await renderer.render();
  const page = canvasToPage(canvas);
  const doc = new jsPDF({ unit: "pt", format: [page.width, page.height], orientation: page.orientation });
  doc.addImage(canvas.toDataURL("image/png"), "PNG", 0, 0, page.width, page.height);

  return {
    name: `${baseName(file.name)}.pdf`,
    blob: doc.output("blob"),
    detail: "SVG als PDF-Seite gerendert"
  };
}

async function tiffToPdf(file: File): Promise<ResultItem> {
  const buffer = await file.arrayBuffer();
  const decoder = ((UTIF as { default?: unknown }).default ?? UTIF) as {
    decode: (buffer: ArrayBuffer) => Array<Record<string, unknown>>;
    decodeImage: (buffer: ArrayBuffer, ifd: Record<string, unknown>) => void;
    toRGBA8: (ifd: Record<string, unknown>) => Uint8Array;
  };
  const ifds = decoder.decode(buffer);
  if (ifds.length === 0) throw new Error("Die TIFF-Datei enthält kein dekodierbares Bild.");

  let doc: jsPDF | null = null;
  for (const ifd of ifds) {
    decoder.decodeImage(buffer, ifd);
    const width = Number(ifd.width || ifd.t256 || 1000);
    const height = Number(ifd.height || ifd.t257 || 1000);
    const rgba = decoder.toRGBA8(ifd);
    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    const context = canvas.getContext("2d");
    if (!context) throw new Error("Canvas konnte nicht erstellt werden.");
    context.putImageData(new ImageData(new Uint8ClampedArray(rgba), width, height), 0, 0);
    const page = canvasToPage(canvas);
    if (!doc) {
      doc = new jsPDF({ unit: "pt", format: [page.width, page.height], orientation: page.orientation });
    } else {
      doc.addPage([page.width, page.height], page.orientation);
    }
    doc.addImage(canvas.toDataURL("image/jpeg", 0.92), "JPEG", 0, 0, page.width, page.height);
  }

  if (!doc) throw new Error("Die TIFF-Datei konnte nicht in PDF umgewandelt werden.");
  return {
    name: `${baseName(file.name)}.pdf`,
    blob: doc.output("blob"),
    detail: `${ifds.length} TIFF-Seite${ifds.length === 1 ? "" : "n"} als PDF`
  };
}

async function auditPdf(file: File): Promise<ResultItem> {
  const pdf = await loadPdf(file);
  const lines = [
    `Analyse für ${file.name}`,
    `Seiten: ${pdf.numPages}`,
    "",
    "Hinweise für Vektor-, SVG- und EPS-Workflows:"
  ];

  for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber += 1) {
    const page = await pdf.getPage(pageNumber);
    const viewport = page.getViewport({ scale: 1 });
    const text = await page.getTextContent();
    lines.push(
      `Seite ${pageNumber}: ${Math.round(viewport.width)} x ${Math.round(viewport.height)} PDF-Punkte, ${text.items.length} Textobjekte`
    );
  }

  lines.push(
    "",
    "Bewertung:",
    "Viele Textobjekte sprechen dafür, dass die PDF-Datei nicht nur ein reiner Scan ist. Das garantiert aber keine sauber bearbeitbaren Vektorpfade.",
    "Für echte EPS-Ausgabe sind Werkzeuge wie Adobe Illustrator, Inkscape oder Ghostscript sinnvoll. Transparenzen, Fonts und Farbräume müssen danach kontrolliert werden.",
    "Wenn die Datei aus einem Scan besteht, ist eine automatische Vektorisierung meist nur für einfache Logos oder Strichgrafiken brauchbar."
  );

  return {
    name: `${baseName(file.name)}-analyse.txt`,
    blob: new Blob([lines.join("\n")], { type: "text/plain;charset=utf-8" }),
    detail: "Lokaler PDF-Bericht für Vektor- und EPS-Entscheidungen"
  };
}

async function loadPdf(file: File) {
  const data = await file.arrayBuffer();
  return pdfjsLib.getDocument({ data }).promise;
}

async function renderPdfPage(pdf: Awaited<ReturnType<typeof loadPdf>>, pageNumber: number, scale: number) {
  const page = await pdf.getPage(pageNumber);
  const viewport = page.getViewport({ scale });
  const canvas = document.createElement("canvas");
  canvas.width = Math.floor(viewport.width);
  canvas.height = Math.floor(viewport.height);
  const context = canvas.getContext("2d");
  if (!context) throw new Error("Canvas konnte nicht erstellt werden.");
  await page.render({ canvas, canvasContext: context, viewport }).promise;
  return canvas;
}

function imageFileToCanvas(file: File): Promise<HTMLCanvasElement> {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = image.naturalWidth;
      canvas.height = image.naturalHeight;
      const context = canvas.getContext("2d");
      if (!context) {
        reject(new Error("Canvas konnte nicht erstellt werden."));
        return;
      }
      context.fillStyle = "#ffffff";
      context.fillRect(0, 0, canvas.width, canvas.height);
      context.drawImage(image, 0, 0);
      URL.revokeObjectURL(image.src);
      resolve(canvas);
    };
    image.onerror = () => reject(new Error(`${file.name} konnte nicht als Bild gelesen werden.`));
    image.src = URL.createObjectURL(file);
  });
}

function canvasToPage(canvas: HTMLCanvasElement) {
  const max = 900;
  const ratio = Math.min(max / canvas.width, max / canvas.height, 1);
  const width = Math.max(120, canvas.width * ratio);
  const height = Math.max(120, canvas.height * ratio);
  return { width, height, orientation: width >= height ? "landscape" : "portrait" } as const;
}

function canvasToBlob(canvas: HTMLCanvasElement, type: string, quality?: number): Promise<Blob> {
  return new Promise((resolve, reject) => {
    canvas.toBlob(
      (blob) => {
        if (blob) resolve(blob);
        else reject(new Error("Bild konnte nicht erzeugt werden."));
      },
      type,
      quality
    );
  });
}

function canvasToTiff(canvas: HTMLCanvasElement) {
  const context = canvas.getContext("2d");
  if (!context) throw new Error("Canvas konnte nicht gelesen werden.");
  const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
  const rgbSize = canvas.width * canvas.height * 3;
  const entryCount = 10;
  const ifdOffset = 8;
  const ifdSize = 2 + entryCount * 12 + 4;
  const bitsOffset = ifdOffset + ifdSize;
  const stripOffset = bitsOffset + 6;
  const buffer = new ArrayBuffer(stripOffset + rgbSize);
  const view = new DataView(buffer);

  view.setUint8(0, 0x49);
  view.setUint8(1, 0x49);
  view.setUint16(2, 42, true);
  view.setUint32(4, ifdOffset, true);
  view.setUint16(ifdOffset, entryCount, true);

  let offset = ifdOffset + 2;
  const entry = (tag: number, type: number, count: number, value: number) => {
    view.setUint16(offset, tag, true);
    view.setUint16(offset + 2, type, true);
    view.setUint32(offset + 4, count, true);
    if (type === 3 && count === 1) {
      view.setUint16(offset + 8, value, true);
      view.setUint16(offset + 10, 0, true);
    } else {
      view.setUint32(offset + 8, value, true);
    }
    offset += 12;
  };

  entry(256, 4, 1, canvas.width);
  entry(257, 4, 1, canvas.height);
  entry(258, 3, 3, bitsOffset);
  entry(259, 3, 1, 1);
  entry(262, 3, 1, 2);
  entry(273, 4, 1, stripOffset);
  entry(277, 3, 1, 3);
  entry(278, 4, 1, canvas.height);
  entry(279, 4, 1, rgbSize);
  entry(284, 3, 1, 1);
  view.setUint32(offset, 0, true);
  view.setUint16(bitsOffset, 8, true);
  view.setUint16(bitsOffset + 2, 8, true);
  view.setUint16(bitsOffset + 4, 8, true);

  const source = imageData.data;
  const target = new Uint8Array(buffer, stripOffset);
  for (let i = 0, j = 0; i < source.length; i += 4, j += 3) {
    target[j] = source[i];
    target[j + 1] = source[i + 1];
    target[j + 2] = source[i + 2];
  }

  return new Blob([buffer], { type: "image/tiff" });
}

function downloadBlob(blob: Blob, name: string) {
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = name;
  document.body.append(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function baseName(name: string) {
  return name.replace(/\.[^.]+$/, "").replace(/[^a-z0-9äöüß-]+/gi, "-").replace(/-+/g, "-").replace(/^-|-$/g, "") || "datei";
}

function formatBytes(bytes: number) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}
