import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { Logo, TikTokIcon, WHATSAPP_LINK, WhatsAppIcon } from "@/components/brand";

const SUPPORT_EMAIL = "contact@shoptechsystems.online";

const SOCIALS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/shoptech-systems", Icon: Linkedin },
  { label: "Facebook", href: "https://www.facebook.com/people/ShopTech-Systems/61591023865889/", Icon: Facebook },
  { label: "Instagram", href: "https://www.instagram.com/shoptechsystems/", Icon: Instagram },
  { label: "X", href: "https://x.com/ShopTechSystems", Icon: Twitter },
  { label: "TikTok", href: "https://www.tiktok.com/@shoptechsystems", Icon: TikTokIcon },
];

const COLUMNS = [
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Our work", href: "/#portfolio" },
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Web & SaaS apps", href: "/#services" },
      { label: "Mobile apps", href: "/#apps" },
      { label: "ERP & portals", href: "/#services" },
      { label: "AI & automation", href: "/#services" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="container py-14">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-slate-600">
              We design and build web platforms, business systems and mobile apps for growing companies.
            </p>
            <div className="mt-6 space-y-2 text-sm">
              <a href={`mailto:${SUPPORT_EMAIL}`} className="block text-slate-700 hover:text-teal-700">{SUPPORT_EMAIL}</a>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-slate-700 hover:text-teal-700">
                <WhatsAppIcon className="h-4 w-4 text-emerald-600" /> +92 316 4091654
              </a>
            </div>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title} className="md:col-span-2">
              <h2 className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">{col.title}</h2>
              <ul className="mt-4 space-y-3 text-sm">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="text-slate-700 transition-colors hover:text-teal-700">{l.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-5 border-t border-slate-200 pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-slate-500">© {new Date().getFullYear()} ShopTech Systems. All rights reserved.</p>
          <nav aria-label="Social media" className="flex items-center gap-2">
            {SOCIALS.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`ShopTech Systems on ${label}`}
                title={label}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 transition-colors hover:border-teal-600/40 hover:text-teal-700"
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
