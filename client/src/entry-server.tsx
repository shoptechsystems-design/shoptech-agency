import { renderToPipeableStream } from "react-dom/server";
import { Writable } from "node:stream";
import { Router } from "wouter";
import App from "./App";
import { POSTS } from "./data/blog";
import appsData from "./data/apps.json";
import type { PageMeta } from "./lib/seo";

/** Renders one route to an HTML string, waiting for lazy-loaded pages to resolve. */
export function render(url: string): Promise<{ html: string; meta?: PageMeta }> {
  (globalThis as any).__PAGE_META__ = undefined;
  return new Promise((resolve, reject) => {
    let html = "";
    const sink = new Writable({
      write(chunk, _enc, cb) {
        html += chunk.toString();
        cb();
      },
      final(cb) {
        resolve({ html, meta: (globalThis as any).__PAGE_META__ });
        cb();
      },
    });
    const { pipe } = renderToPipeableStream(
      <Router ssrPath={url}>
        <App />
      </Router>,
      { onAllReady: () => pipe(sink), onError: reject, onShellError: reject }
    );
  });
}

export type RouteInfo = { path: string; lastmod?: string; priority: number; changefreq: string };

/** Every indexable route, used for prerendering and for the generated sitemap. */
export function getRoutes(): RouteInfo[] {
  const today = new Date().toISOString().slice(0, 10);
  const latestPost = POSTS.map((p) => p.date).sort().slice(-1)[0] ?? today;
  const routes: RouteInfo[] = [
    { path: "/", lastmod: today, priority: 1.0, changefreq: "weekly" },
    { path: "/blog", lastmod: latestPost, priority: 0.8, changefreq: "weekly" },
    { path: "/about", lastmod: today, priority: 0.6, changefreq: "monthly" },
    { path: "/contact", lastmod: today, priority: 0.6, changefreq: "monthly" },
    { path: "/privacy", lastmod: today, priority: 0.3, changefreq: "yearly" },
    { path: "/terms", lastmod: today, priority: 0.3, changefreq: "yearly" },
  ];
  for (const p of POSTS) routes.push({ path: `/blog/${p.slug}`, lastmod: p.date, priority: 0.7, changefreq: "monthly" });
  for (const a of appsData as { id: string; features?: unknown }[]) {
    if (a.features) {
      routes.push({ path: `/apps/${a.id}`, lastmod: today, priority: 0.6, changefreq: "monthly" });
      routes.push({ path: `/apps/${a.id}/privacy`, lastmod: today, priority: 0.2, changefreq: "yearly" });
      routes.push({ path: `/apps/${a.id}/terms`, lastmod: today, priority: 0.2, changefreq: "yearly" });
      routes.push({ path: `/apps/${a.id}/delete-account`, lastmod: today, priority: 0.2, changefreq: "yearly" });
    }
  }
  return routes;
}
