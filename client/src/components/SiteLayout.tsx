import { useEffect, useState } from "react";
import { ArrowRight, Menu, X, Facebook, Linkedin, Instagram, Twitter } from "lucide-react";
import { Logo, NAV_LINKS, TikTokIcon, WHATSAPP_LINK, WhatsAppIcon } from "@/pages/Home";

export const SUPPORT_EMAIL = "contact@shoptechsystems.online";

export const INFO_LINKS = [
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
];

const siteHref = (hash: string) => `/${hash}`;

/** Sets document title + meta description for a page and restores them on leave. */
export function usePageMeta(title: string, description: string) {
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

/** Shared shell (nav + footer) for the content pages. Mirrors the look of the main site. */
export default function SiteLayout({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0" style={{ transform: "translateZ(0)" }}>
        <div className="cyber-grid absolute inset-0 opacity-60" />
        <div className="absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full glow-orb-blue blur-[140px] opacity-70" />
        <div className="absolute top-[30%] -right-40 h-[650px] w-[650px] rounded-full glow-orb-purple blur-[160px] opacity-60" />
      </div>

      <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
        <div className="container flex items-center justify-between py-4">
          <a href="/"><Logo /></a>
          <div className="hidden items-center gap-1 rounded-full border border-white/10 bg-slate-900/60 p-1.5 backdrop-blur-md lg:flex">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={siteHref(l.href)} className="rounded-full px-4 py-1.5 text-xs font-semibold text-slate-300 transition-all duration-200 hover:bg-white/10 hover:text-white">
                {l.label}
              </a>
            ))}
          </div>
          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1.5 text-xs font-semibold text-emerald-400 hover:bg-emerald-500/20 transition-all"
            >
              <WhatsAppIcon className="h-3.5 w-3.5" /> <span>WhatsApp</span>
            </a>
            <a href="/#contact" className="btn-tech-glow inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-bold text-white tracking-wide">
              Get Consultation <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-slate-900/80 text-white lg:hidden"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
        {menuOpen && (
          <div className="border-b border-white/10 bg-slate-950/95 backdrop-blur-2xl lg:hidden">
            <div className="container flex flex-col gap-2 py-6">
              {NAV_LINKS.map((l) => (
                <a key={l.href} href={siteHref(l.href)} className="rounded-xl px-4 py-3 text-sm font-semibold text-slate-200 hover:bg-white/10">
                  {l.label}
                </a>
              ))}
              <a href="/#contact" className="btn-tech-glow mt-2 block w-full rounded-xl py-3 text-center text-sm font-bold text-white">
                Get Free Consultation
              </a>
            </div>
          </div>
        )}
      </nav>

      <main className="relative z-10 pt-28 md:pt-32">{children}</main>

      <footer className="relative z-10 mt-20 border-t border-white/10 bg-slate-950 py-14">
        <div className="container">
          <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
            <Logo />
            <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
              {NAV_LINKS.map((l) => (
                <a key={l.href} href={siteHref(l.href)} className="hover:text-white transition-colors">{l.label}</a>
              ))}
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors font-medium"
              >
                <WhatsAppIcon className="h-3.5 w-3.5" />
                <span>+92 316 4091654</span>
              </a>
            </div>
            <nav aria-label="Social media" className="flex items-center gap-3">
              {[
                { label: "LinkedIn", href: "https://www.linkedin.com/company/shoptech-systems", Icon: Linkedin },
                { label: "Facebook", href: "https://www.facebook.com/people/ShopTech-Systems/61591023865889/", Icon: Facebook },
                { label: "Instagram", href: "https://www.instagram.com/shoptechsystems/", Icon: Instagram },
                { label: "X", href: "https://x.com/ShopTechSystems", Icon: Twitter },
                { label: "TikTok", href: "https://www.tiktok.com/@shoptechsystems", Icon: TikTokIcon },
              ].map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`ShopTech Systems on ${label}`}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-slate-400 transition-colors hover:border-blue-400/50 hover:bg-blue-500/10 hover:text-white"
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </a>
              ))}
            </nav>
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              <span>All Systems Operational</span>
            </div>
          </div>
          <div className="mt-10 border-t border-white/5 pt-8 text-center text-xs text-slate-500">
            © {new Date().getFullYear()} ShopTech Systems. All rights reserved. Enterprise Business Software Solutions.
            <div className="mt-3 flex flex-wrap items-center justify-center gap-x-5 gap-y-1">
              {INFO_LINKS.map((l) => (
                <a key={l.href} href={l.href} className="hover:text-white transition-colors">{l.label}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
