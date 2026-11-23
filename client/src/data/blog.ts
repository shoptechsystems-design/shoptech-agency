// Client-facing blog data. Article bodies are NOT imported here: each lives in generated/posts/<slug>.json
// and is loaded on demand, so list pages stay small. Regenerate with `npm run gen:posts`.
import metaJson from "./generated/posts-meta.json";

export type PostSection = { h?: string; p?: string[]; list?: string[] };
export type PostMeta = {
  slug: string;
  title: string;
  description: string;
  date: string; // ISO
  category: string;
  readMins: number;
};

export const POSTS: PostMeta[] = metaJson;
export const getPost = (slug: string) => POSTS.find((p) => p.slug === slug);

export const formatDate = (iso: string) =>
  new Date(iso + "T00:00:00").toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });

const bodies = import.meta.glob<PostSection[]>("./generated/posts/*.json", { import: "default" });
const cache = new Map<string, Promise<PostSection[]>>();

/** Cached promise per article, for use with React's `use()`. */
export function loadPostSections(slug: string): Promise<PostSection[]> {
  let p = cache.get(slug);
  if (!p) {
    const load = bodies[`./generated/posts/${slug}.json`];
    p = load ? load() : Promise.resolve([]);
    cache.set(slug, p);
  }
  return p;
}

const SUFFIX = " | ShopTech Systems";
const SEO_TITLE_OVERRIDES: Record<string, string> = {
  "vibe-coding-and-ai-coding-assistants-risks-for-business": "Vibe Coding & AI Coding Assistants: Benefits and Risks",
};
/** <title> that stays within ~60 characters so search results do not truncate it. */
export function seoTitle(post: PostMeta): string {
  const override = SEO_TITLE_OVERRIDES[post.slug];
  if (override) return override;
  return post.title.length + SUFFIX.length <= 62 ? post.title + SUFFIX : post.title;
}
