import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "node:path";
import { defineConfig } from "vite";

export default defineConfig(({ isSsrBuild }) => ({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },
  envDir: path.resolve(import.meta.dirname),
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,
    manifest: true,
    rollupOptions: {
      output: {
        // Only for the browser build; the prerender (SSR) build must not split chunks.
        ...(isSsrBuild ? {} : { manualChunks: { "react-vendor": ["react", "react-dom"], icons: ["lucide-react"] } }),
      },
    },
  },
  server: {
    port: 3000,
    strictPort: false,
    host: true,
  },
}));
