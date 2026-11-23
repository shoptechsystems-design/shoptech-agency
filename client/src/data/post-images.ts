// Cover photos come from Unsplash (free licence). scripts/fetch-blog-images.py downloads each one once and writes
// optimised, self-hosted copies to public/blog/<slug>-{400,800,1280}.webp (+ -og.jpg for social sharing), so pages
// never wait on a third-party image server.
const IMAGES: Record<string, { id: string; alt: string }> = {
  "agentic-ai-for-small-business-what-it-is-and-where-to-start": { id: "1677442136019-21780ecad995", alt: "Blue AI lettering over an abstract network pattern" },
  "vibe-coding-and-ai-coding-assistants-risks-for-business": { id: "1555949963-ff9fe0c870eb", alt: "Colourful source code on a screen" },
  "small-business-cybersecurity-checklist": { id: "1526374965328-7f61d4dc18c5", alt: "Green digital code falling down a dark screen" },
  "cloud-costs-for-small-teams-how-to-stop-overspending": { id: "1558494949-ef010cbdcc31", alt: "Rows of server racks with cabling in a data centre" },
  "low-code-vs-custom-software-which-is-right-for-you": { id: "1498050108023-c5249f4df085", alt: "Laptop showing code on a tidy desk" },
  "api-first-design-connecting-your-business-systems": { id: "1544197150-b99a580bb7a8", alt: "Network cables plugged into a patch panel" },
  "data-privacy-for-web-and-mobile-apps-what-to-get-right": { id: "1531297484001-80022131f5a1", alt: "Laptop glowing in a dark room" },
  "devops-and-platform-engineering-for-small-teams": { id: "1461749280684-dccba630e2f6", alt: "Code on a monitor in a developer workspace" },
  "passkeys-and-passwordless-login-for-your-app": { id: "1512941937669-90a1b58e7e9c", alt: "Smartphone showing a home screen of apps" },
  "how-much-does-custom-business-software-cost": { id: "1454165804606-c3d57bc86b40", alt: "People planning a project with notes and laptops" },
  "erp-vs-spreadsheets-when-to-switch": { id: "1460925895917-afdab827c52f", alt: "Laptop showing a business analytics dashboard" },
  "how-to-choose-a-software-development-agency": { id: "1600880292203-757bb62b4baf", alt: "Two colleagues celebrating a successful meeting" },
  "why-small-businesses-need-a-crm": { id: "1504868584819-f8e8b4b6d7e3", alt: "Laptop with customer charts and reports" },
  "shopify-vs-custom-ecommerce": { id: "1573164713714-d95e436ab8d6", alt: "Person using a laptop and phone to manage an online store" },
  "web-app-vs-mobile-app": { id: "1551650975-87deedd944c3", alt: "Mobile app on a phone beside a desktop design" },
  "how-ai-automation-saves-small-business-time": { id: "1485827404703-89b55fcc595e", alt: "Friendly white robot representing AI automation" },
  "fleet-dispatch-software-guide": { id: "1494412651409-8963ce7935a7", alt: "Aerial view of a busy freight container port" },
  "school-management-system-features": { id: "1509062522246-3755977927d7", alt: "Teacher and students in a classroom" },
  "website-speed-and-seo-basics": { id: "1551288049-bebda4e38f71", alt: "Dashboard showing website traffic and speed metrics" },
};

export const hasPostImage = (slug: string) => Boolean(IMAGES[slug]);

export function postImage(slug: string) {
  const img = IMAGES[slug];
  if (!img) return null;
  return {
    src: `/blog/${slug}-800.webp`,
    srcSet: [400, 800, 1280].map((w) => `/blog/${slug}-${w}.webp ${w}w`).join(", "),
    alt: img.alt,
    width: 1280,
    height: 720,
  };
}

/** 1200x630 JPEG for Open Graph / Twitter cards (absolute URL). */
export const postOgImage = (slug: string) => (IMAGES[slug] ? `https://shoptechsystems.online/blog/${slug}-og.jpg` : undefined);
