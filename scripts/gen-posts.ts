// Splits the article source (client/src/data/posts*.ts) into:
//   generated/posts-meta.json    : small list used by the blog index, home page, sitemap
//   generated/posts/<slug>.json  : one file per article body, loaded on demand
// so a visitor reading one article never downloads the other eighteen.
import { mkdirSync, rmSync, writeFileSync } from "node:fs";
import { POSTS } from "../client/src/data/posts";

const out = new URL("../client/src/data/generated/", import.meta.url);
rmSync(new URL("posts/", out), { recursive: true, force: true });
mkdirSync(new URL("posts/", out), { recursive: true });

const meta = POSTS.map(({ slug, title, description, date, category, readMins }) => ({ slug, title, description, date, category, readMins }));
writeFileSync(new URL("posts-meta.json", out), JSON.stringify(meta, null, 2) + "\n");
for (const p of POSTS) writeFileSync(new URL(`posts/${p.slug}.json`, out), JSON.stringify(p.sections));
console.log(`posts: ${POSTS.length} articles split`);
