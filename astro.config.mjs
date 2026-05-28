import react from "@astrojs/react";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://pdfinjpgumwandeln.com",
  integrations: [react()],
  output: "static",
  vite: {
    optimizeDeps: {
      include: ["pdfjs-dist", "jspdf", "jszip", "canvg", "utif"]
    }
  }
});
