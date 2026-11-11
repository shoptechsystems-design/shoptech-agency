import { renderToString } from "react-dom/server";
import { Router } from "wouter";
import App from "./App";

export function render(url: string) {
  (globalThis as any).__PAGE_META__ = undefined;
  const html = renderToString(
    <Router ssrPath={url}>
      <App />
    </Router>
  );
  return { html, meta: (globalThis as any).__PAGE_META__ as { title: string; description: string } | undefined };
}
