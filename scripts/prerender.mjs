// Build-time prerender + SEO output.
// Renders every route to static HTML (so crawlers and slow phones see real content immediately),
// writes per-page <head> tags + structured data, generates sitemap.xml and a real 404.html.
import { build } from "vite";
import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

const root = path.resolve(import.meta.dirname, "..");
const dist = path.resolve(root, "dist/public");
const ssrDir = path.resolve(root, "dist/ssr");
const SITE = "https://shoptechsystems.online";

await build({
  configFile: path.resolve(root, "vite.config.ts"),
  build: {
    ssr: path.resolve(root, "client/src/entry-server.tsx"),
    outDir: ssrDir,
    emptyOutDir: true,
    manifest: false,
    rollupOptions: { output: { inlineDynamicImports: true } },
  },
  logLevel: "warn",
});

const { render, getRoutes } = await import(pathToFileURL(path.join(ssrDir, "entry-server.js")).href);

// ---- client build facts (manifest, hashed font) ----
const manifest = JSON.parse(fs.readFileSync(path.join(dist, ".vite/manifest.json"), "utf8"));
const fontFile = fs.readdirSync(path.join(dist, "assets")).find((f) => /^inter-latin-wght-normal.*\.woff2$/.test(f));

function chunkFilesFor(key) {
  const files = new Set();
  const seen = new Set();
  const entry = manifest["index.html"];
  const skip = new Set([entry.file, ...(entry.imports || []).map((k) => manifest[k].file)]);
  (function walk(k) {
    if (!k || seen.has(k) || !manifest[k]) return;
    seen.add(k);
    const m = manifest[k];
    if (!skip.has(m.file)) files.add(m.file);
    (m.imports || []).forEach(walk);
  })(key);
  return [...files];
}

function pageChunkKey(route) {
  if (route === "/") return "src/pages/Home.tsx";
  if (route === "/blog" || route.startsWith("/blog/")) return "src/pages/Blog.tsx";
  if (/^\/apps\/[^/]+\/(privacy|terms|delete-account)$/.test(route)) return "src/pages/PenvitaLegal.tsx";
  if (route.startsWith("/apps/")) return "src/pages/AppDetail.tsx";
  if (["/about", "/contact", "/privacy", "/terms"].includes(route)) return "src/pages/Info.tsx";
  return "src/pages/NotFound.tsx";
}

// ---- helpers ----
const esc = (s = "") => String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const ld = (obj) => `<script type="application/ld+json">${JSON.stringify(obj).replace(/</g, "\\u003c")}</script>`;

const ORG = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE}/#organization`,
  name: "ShopTech Systems",
  url: SITE,
  logo: { "@type": "ImageObject", url: `${SITE}/shoptech-logo.png` },
  description: "ShopTech Systems designs and builds custom software, web platforms, ERPs, dispatch tools and mobile apps for growing businesses.",
  email: "contact@shoptechsystems.online",
  sameAs: [
    "https://www.linkedin.com/company/shoptech-systems",
    "https://www.facebook.com/people/ShopTech-Systems/61591023865889/",
    "https://www.instagram.com/shoptechsystems/",
    "https://x.com/ShopTechSystems",
    "https://www.tiktok.com/@shoptechsystems",
  ],
};
const WEBSITE = { "@context": "https://schema.org", "@type": "WebSite", "@id": `${SITE}/#website`, url: SITE, name: "ShopTech Systems", publisher: { "@id": `${SITE}/#organization` }, inLanguage: "en" };

function trimDesc(d, max = 158) {
  if (d.length <= max) return d;
  const cut = d.slice(0, max - 1);
  return cut.slice(0, cut.lastIndexOf(" ")).replace(/[,;:.\-\s]+$/, "") + "\u2026";
}

function headFor(route, meta, is404) {
  meta = { ...meta, description: trimDesc(meta.description) };
  const url = route === "/" ? `${SITE}/` : `${SITE}${route}`;
  const image = meta.image || `${SITE}/og-default.jpg`;
  const known = image.startsWith(`${SITE}/og-default`) || /\/blog\/[^/]+-og\.jpg$/.test(image);
  const h = [];
  h.push(`<title>${esc(meta.title)}</title>`);
  h.push(`<meta name="description" content="${esc(meta.description)}" />`);
  h.push(`<meta name="robots" content="${meta.noindex || is404 ? "noindex, follow" : "index, follow, max-image-preview:large, max-snippet:-1"}" />`);
  if (!(meta.noindex || is404)) h.push(`<link rel="canonical" href="${url}" />`);
  h.push(`<meta property="og:site_name" content="ShopTech Systems" />`);
  h.push(`<meta property="og:locale" content="en_US" />`);
  h.push(`<meta property="og:type" content="${meta.type || "website"}" />`);
  h.push(`<meta property="og:url" content="${url}" />`);
  h.push(`<meta property="og:title" content="${esc(meta.title)}" />`);
  h.push(`<meta property="og:description" content="${esc(meta.description)}" />`);
  h.push(`<meta property="og:image" content="${esc(image)}" />`);
  if (known) { h.push(`<meta property="og:image:width" content="1200" />`); h.push(`<meta property="og:image:height" content="630" />`); }
  if (meta.imageAlt) h.push(`<meta property="og:image:alt" content="${esc(meta.imageAlt)}" />`);
  if (meta.type === "article") {
    if (meta.published) h.push(`<meta property="article:published_time" content="${meta.published}" />`);
    if (meta.modified) h.push(`<meta property="article:modified_time" content="${meta.modified}" />`);
    if (meta.section) h.push(`<meta property="article:section" content="${esc(meta.section)}" />`);
  }
  h.push(`<meta name="twitter:card" content="summary_large_image" />`);
  h.push(`<meta name="twitter:title" content="${esc(meta.title)}" />`);
  h.push(`<meta name="twitter:description" content="${esc(meta.description)}" />`);
  h.push(`<meta name="twitter:image" content="${esc(image)}" />`);

  // performance hints
  if (fontFile) h.push(`<link rel="preload" href="/assets/${fontFile}" as="font" type="font/woff2" crossorigin />`);
  for (const f of chunkFilesFor(pageChunkKey(route))) h.push(`<link rel="modulepreload" crossorigin href="/${f}" />`);
  if (meta.preload) {
    const p = meta.preload;
    if (p.src.startsWith("https://images.unsplash.com")) h.push(`<link rel="preconnect" href="https://images.unsplash.com" crossorigin />`);
    h.push(`<link rel="preload" as="image" href="${esc(p.src)}"${p.srcSet ? ` imagesrcset="${esc(p.srcSet)}"` : ""}${p.sizes ? ` imagesizes="${esc(p.sizes)}"` : ""} fetchpriority="high" />`);
  }

  // structured data
  h.push(ld(ORG), ld(WEBSITE));
  for (const obj of meta.jsonLd || []) h.push(ld(obj));
  return h.map((x) => "    " + x).join("\n");
}

// React 19 hoists resource hints (e.g. image preloads) to the start of the stream. They would land inside #root
// and confuse hydration, and we already emit our own hints in <head>, so drop them.
const stripHoisted = (h) => h.replace(/^(?:<link[^>]*>)+/, "");

// ---- render everything ----
const template = fs.readFileSync(path.join(dist, "index.html"), "utf8");
const strip = (t) => t.replace(/<title>.*?<\/title>\s*/s, "").replace(/<meta name="description"[^>]*>\s*/g, "");

function write(file, html) {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, html);
}

const routes = getRoutes();
for (const r of routes) {
  const { html: raw, meta } = await render(r.path);
  const html = stripHoisted(raw);
  if (!meta) throw new Error(`No page meta recorded for ${r.path}`);
  let out = strip(template).replace("<!--head-tags-->", headFor(r.path, meta, false)).replace("<!--app-html-->", html);
  write(r.path === "/" ? path.join(dist, "index.html") : path.join(dist, r.path, "index.html"), out);
  console.log("prerendered", r.path);
}

// real 404 page (hosts serve it with status 404 for unknown URLs)
{
  const { html: raw404, meta } = await render("/404");
  const html = stripHoisted(raw404);
  const out = strip(template).replace("<!--head-tags-->", headFor("/404", meta, true)).replace("<!--app-html-->", html);
  write(path.join(dist, "404.html"), out);
  console.log("prerendered 404.html");
}

// sitemap generated from the same route list
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  routes.map((r) => `  <url>\n    <loc>${SITE}${r.path === "/" ? "/" : r.path}</loc>\n${r.lastmod ? `    <lastmod>${r.lastmod}</lastmod>\n` : ""}    <changefreq>${r.changefreq}</changefreq>\n    <priority>${r.priority.toFixed(1)}</priority>\n  </url>`).join("\n") +
  `\n</urlset>\n`;
write(path.join(dist, "sitemap.xml"), sitemap);
console.log("sitemap.xml:", routes.length, "urls");

// cleanup build-only files
fs.rmSync(path.join(dist, ".vite"), { recursive: true, force: true });
fs.rmSync(ssrDir, { recursive: true, force: true });
