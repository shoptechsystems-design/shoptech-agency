// Build-time prerender: renders every route to static HTML so crawlers (e.g. AdSense) see real content.
import { build } from "vite";
import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

const root = import.meta.dirname;
const dist = path.resolve(root, "dist/public");
const ssrDir = path.resolve(root, "dist/ssr");

await build({
  configFile: path.resolve(root, "vite.config.ts"),
  build: { ssr: path.resolve(root, "client/src/entry-server.tsx"), outDir: ssrDir, emptyOutDir: true, rollupOptions: { output: { manualChunks: () => undefined } } },
  logLevel: "warn",
});

const { render } = await import(pathToFileURL(path.join(ssrDir, "entry-server.js")).href);

// Routes come from the sitemap, so new blog posts are picked up automatically.
const sitemap = fs.readFileSync(path.resolve(root, "client/public/sitemap.xml"), "utf8");
const routes = [...sitemap.matchAll(/<loc>https?:\/\/[^/]+(\/[^<]*)<\/loc>/g)].map((m) => m[1]);

const template = fs.readFileSync(path.join(dist, "index.html"), "utf8");
const esc = (s) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

for (const route of routes) {
  const { html, meta } = render(route);
  let out = template.replace("<!--app-html-->", html);
  if (meta) {
    out = out.replace(/<title>.*?<\/title>/, `<title>${esc(meta.title)}</title>`);
    out = out.replace(/(<meta name="description" content=")[^"]*(")/, `$1${esc(meta.description)}$2`);
  }
  out = out.replace("</head>", `    <link rel="canonical" href="https://shoptechsystems.online${route === "/" ? "/" : route}" />\n  </head>`);
  const file = route === "/" ? path.join(dist, "index.html") : path.join(dist, route, "index.html");
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, out);
  console.log("prerendered", route);
}
fs.rmSync(ssrDir, { recursive: true, force: true });
