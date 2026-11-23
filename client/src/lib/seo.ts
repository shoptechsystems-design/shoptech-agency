import { useEffect } from "react";

export const SITE_URL = "https://shoptechsystems.online";
export const SITE_NAME = "ShopTech Systems";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-default.jpg`;
export const CONTACT_EMAIL = "contact@shoptechsystems.online";

export const SOCIAL_PROFILES = [
  "https://www.linkedin.com/company/shoptech-systems",
  "https://www.facebook.com/people/ShopTech-Systems/61591023865889/",
  "https://www.instagram.com/shoptechsystems/",
  "https://x.com/ShopTechSystems",
  "https://www.tiktok.com/@shoptechsystems",
];

export type PageMeta = {
  title: string;
  description: string;
  /** Path on the site, e.g. "/blog/my-post". Used for canonical + og:url. */
  path?: string;
  image?: string;
  imageAlt?: string;
  type?: "website" | "article";
  published?: string;
  modified?: string;
  section?: string;
  noindex?: boolean;
  /** Extra JSON-LD objects for this page. */
  jsonLd?: object[];
  /** Image to preload because it is the LCP element. */
  preload?: { src: string; srcSet?: string; sizes?: string };
};

/**
 * Sets the page title/description on the client and, during the build-time prerender
 * (no window), records the full SEO metadata so scripts-prerender.mjs can write it into the HTML head.
 */
export function usePageMeta(title: string, description: string, extra: Omit<PageMeta, "title" | "description"> = {}) {
  if (typeof window === "undefined") {
    (globalThis as any).__PAGE_META__ = { title, description, ...extra } satisfies PageMeta;
  }
  useEffect(() => {
    window.scrollTo(0, 0);
    const prevTitle = document.title;
    const meta = document.querySelector('meta[name="description"]');
    const prevDesc = meta?.getAttribute("content") ?? null;
    document.title = title;
    meta?.setAttribute("content", description);
    return () => {
      document.title = prevTitle;
      if (meta && prevDesc !== null) meta.setAttribute("content", prevDesc);
    };
  }, [title, description]);
}

/* ---------- JSON-LD builders ---------- */

export const organizationLd = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  url: SITE_URL,
  logo: { "@type": "ImageObject", url: `${SITE_URL}/shoptech-logo.png` },
  description: "ShopTech Systems designs and builds custom software, web platforms, ERPs, dispatch tools and mobile apps for growing businesses.",
  email: CONTACT_EMAIL,
  sameAs: SOCIAL_PROFILES,
});

export const websiteLd = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: SITE_NAME,
  publisher: { "@id": `${SITE_URL}/#organization` },
  inLanguage: "en",
});

export const breadcrumbLd = (items: { name: string; path: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((it, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: it.name,
    item: `${SITE_URL}${it.path}`,
  })),
});

export const faqLd = (faqs: { q: string; a: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
});

export const blogPostingLd = (p: { title: string; description: string; slug: string; date: string; image?: string; category: string }) => ({
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: p.title,
  description: p.description,
  datePublished: p.date,
  dateModified: p.date,
  articleSection: p.category,
  image: p.image ? [p.image] : [DEFAULT_OG_IMAGE],
  mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}/blog/${p.slug}` },
  author: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
  publisher: { "@id": `${SITE_URL}/#organization` },
  inLanguage: "en",
});
