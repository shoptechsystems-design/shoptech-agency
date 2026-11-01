import { useEffect, useState } from "react";
import { useRoute } from "wouter";
import {
  ArrowLeft, ArrowRight, Check, ChevronRight, Smartphone, Mail, Menu, X,
  Facebook, Linkedin, Instagram, Twitter, FileText, Download, Palette, RefreshCw,
} from "lucide-react";
import appsData from "../data/apps.json";
import NotFound from "./NotFound";
import { Logo, Eyebrow, NAV_LINKS, WHATSAPP_LINK, WhatsAppIcon, TikTokIcon } from "./Home";

type AppEntry = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  iconImage?: string;
  banner?: string;
  features?: string[];
  highlights?: string[];
  howItWorks?: { title: string; text: string }[];
  screenshots?: string[];
  minAndroid?: string;
  playUrl: string;
};

const STEP_ICONS = [FileText, Palette, Download];

const SUPPORT_EMAIL = "contact@shoptechsystems.online";

// Nav links point back to the main site sections
const siteHref = (hash: string) => `/${hash}`;

export default function AppDetail() {
  const [, params] = useRoute("/apps/:id");
  const app = (appsData as AppEntry[]).find((a) => a.id === params?.id);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!app) return;
    window.scrollTo(0, 0);
    const prevTitle = document.title;
    document.title = `${app.name} — ${app.tagline} | ShopTech Systems`;
    const meta = document.querySelector('meta[name="description"]');
    const prevDesc = meta?.getAttribute("content") ?? null;
    meta?.setAttribute("content", app.description);
    return () => {
      document.title = prevTitle;
      if (meta && prevDesc !== null) meta.setAttribute("content", prevDesc);
    };
  }, [app]);

  if (!app || !app.features) return <NotFound />;

  const PlayButton = ({ large = false }: { large?: boolean }) =>
    app.playUrl ? (
      <a
        href={app.playUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`btn-tech-glow inline-flex items-center gap-2 rounded-full font-bold text-white ${large ? "px-7 py-3.5 text-sm" : "px-5 py-2.5 text-xs"}`}
      >
        Get it on Google Play <ArrowRight className="h-4 w-4" />
      </a>
    ) : (
      <span className={`inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] font-semibold text-slate-200 ${large ? "px-6 py-3.5 text-sm" : "px-4 py-2 text-xs"}`}>
        <Smartphone className="h-4 w-4 text-cyan-400" /> Google Play: Coming Soon
      </span>
    );

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Ambient background, same as the main site */}
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0" style={{ transform: "translateZ(0)" }}>
        <div className="cyber-grid absolute inset-0 opacity-60" />
        <div className="absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full glow-orb-blue blur-[140px] opacity-70" />
        <div className="absolute top-[30%] -right-40 h-[650px] w-[650px] rounded-full glow-orb-purple blur-[160px] opacity-60" />
      </div>

      {/* Navigation (same as main site) */}
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
        <div className="container flex items-center justify-between py-4">
          <a href="/"><Logo /></a>
          <div className="hidden items-center gap-1 rounded-full border border-white/10 bg-slate-900/60 p-1.5 backdrop-blur-md lg:flex">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={siteHref(l.href)}
                className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-all duration-200 hover:bg-white/10 hover:text-white ${l.href === "#apps" ? "bg-white/10 text-white" : "text-slate-300"}`}
              >
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

      <main className="relative z-10 pt-28 md:pt-32">
        {/* Back + breadcrumb */}
        <div className="container">
          <div className="flex items-center gap-3">
            <a
              href="/#apps"
              aria-label="Back to all apps"
              title="Back to all apps"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-slate-900/70 text-slate-200 transition-all hover:border-blue-400/50 hover:bg-blue-500/10 hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
            </a>
            <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-slate-500">
              <a href="/" className="hover:text-white">Home</a>
              <ChevronRight className="h-3 w-3" />
              <a href="/#apps" className="hover:text-white">Apps</a>
              <ChevronRight className="h-3 w-3" />
              <span className="text-slate-300">{app.name}</span>
            </nav>
          </div>
        </div>

        {/* Hero */}
        <section className="container pt-10 pb-16 md:pt-14 md:pb-24">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="flex items-center gap-4">
                {app.iconImage && (
                  <img src={app.iconImage} alt={`${app.name} app icon`} className="h-20 w-20 rounded-[22px] shadow-[0_0_40px_rgba(59,130,246,0.35)] ring-1 ring-white/15" />
                )}
                <Eyebrow>Android App</Eyebrow>
              </div>
              <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">{app.name}</h1>
              <p className="mt-3 text-xl font-semibold text-gradient-cyan">{app.tagline}</p>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg">{app.description}</p>

              {app.highlights && (
                <div className="mt-6 flex flex-wrap gap-2">
                  {app.highlights.map((h) => (
                    <span key={h} className="rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-xs font-semibold text-slate-300">
                      {h}
                    </span>
                  ))}
                </div>
              )}

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <PlayButton large />
                <a href={`mailto:${SUPPORT_EMAIL}`} className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300 hover:text-white">
                  <Mail className="h-4 w-4" /> Contact support
                </a>
              </div>
              {app.minAndroid && <p className="mt-4 text-xs text-slate-500">Requires {app.minAndroid}</p>}
            </div>

            {app.banner && (
              <div className="relative">
                <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-tr from-blue-600/25 via-indigo-500/10 to-cyan-400/25 blur-2xl" />
                <img
                  src={app.banner}
                  alt={`${app.name} preview`}
                  className="relative w-full rounded-2xl border border-white/15 shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
                />
              </div>
            )}
          </div>
        </section>

        {/* Features */}
        <section className="relative section-py border-t border-white/10 bg-slate-950/40">
          <div className="container">
            <div className="mx-auto max-w-2xl text-center">
              <Eyebrow>Features</Eyebrow>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                Everything you need, <span className="text-gradient-cyan">nothing you don't</span>.
              </h2>
            </div>
            <div className="mx-auto mt-12 grid max-w-5xl gap-4 sm:grid-cols-2">
              {app.features.map((f) => (
                <div key={f} className="glass-card flex items-start gap-4 rounded-2xl border border-white/10 bg-slate-900/50 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40">
                  <span className="mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-tr from-blue-600 to-cyan-400 text-white">
                    <Check className="h-4 w-4" />
                  </span>
                  <span className="text-sm leading-relaxed text-slate-300">{f}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Screenshots (shown only when provided) */}
        {app.screenshots && app.screenshots.length > 0 && (
          <section className="relative section-py border-t border-white/10">
            <div className="container">
              <div className="mx-auto max-w-2xl text-center">
                <Eyebrow>Screenshots</Eyebrow>
                <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">See it in action</h2>
              </div>
              <div className="mt-12 flex gap-4 overflow-x-auto no-scrollbar pb-2 md:justify-center">
                {app.screenshots.map((src, i) => (
                  <img
                    key={src}
                    src={src}
                    alt={`${app.name} screenshot ${i + 1}`}
                    loading="lazy"
                    className="h-[480px] w-auto flex-shrink-0 rounded-2xl border border-white/10 shadow-xl"
                  />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* How it works */}
        {app.howItWorks && app.howItWorks.length > 0 && (
          <section className="relative section-py border-t border-white/10 bg-slate-950/40">
            <div className="container">
              <div className="mx-auto max-w-2xl text-center">
                <Eyebrow>How it works</Eyebrow>
                <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">Three simple steps</h2>
              </div>
              <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-3">
                {app.howItWorks.map((s, i) => (
                  <div key={s.title} className="glass-card relative rounded-2xl border border-white/10 bg-slate-900/50 p-8 backdrop-blur-xl">
                    <span className="absolute right-6 top-4 text-5xl font-extrabold text-white/[0.05]">0{i + 1}</span>
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-400 text-white shadow-lg">
                      {(() => { const StepIcon = STEP_ICONS[i % STEP_ICONS.length]; return <StepIcon className="h-5 w-5" />; })()}
                    </div>
                    <h3 className="mt-5 text-lg font-bold text-white">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-400">{s.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* App info + support */}
        <section className="relative section-py border-t border-white/10">
          <div className="container">
            <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-3">
              {[
                { label: "Developer", value: "ShopTech Systems" },
                { label: "Platform", value: app.minAndroid ? `Android (${app.minAndroid})` : "Android" },
                { label: "Support", value: SUPPORT_EMAIL, href: `mailto:${SUPPORT_EMAIL}` },
              ].map((i) => (
                <div key={i.label} className="glass-card rounded-2xl border border-white/10 bg-slate-900/50 p-6 text-center backdrop-blur-xl">
                  <p className="font-mono text-[11px] uppercase tracking-wider text-cyan-400">{i.label}</p>
                  {i.href ? (
                    <a href={i.href} className="mt-2 block break-all text-sm font-semibold text-white hover:text-cyan-300">{i.value}</a>
                  ) : (
                    <p className="mt-2 text-sm font-semibold text-white">{i.value}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Business CTA, keeps the page tied to the agency */}
        <section className="relative pb-20">
          <div className="container">
            <div className="mx-auto max-w-4xl rounded-3xl border border-blue-500/25 bg-gradient-to-br from-blue-600/15 via-slate-900/60 to-cyan-500/10 p-8 text-center backdrop-blur-xl sm:p-12">
              <RefreshCw className="mx-auto h-6 w-6 text-cyan-400" />
              <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
                Need a custom app or platform for your business?
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-sm text-slate-400 sm:text-base">
                ShopTech Systems designs and builds web platforms, mobile apps and business software.
              </p>
              <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
                <a href="/#contact" className="btn-tech-glow inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold text-white">
                  Get a Free Consultation <ArrowRight className="h-4 w-4" />
                </a>
                <a href="/#portfolio" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-slate-200 hover:text-white">
                  View our work
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer (same as main site) */}
      <footer className="relative z-10 border-t border-white/10 bg-slate-950 py-14">
        <div className="container">
          <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
            <Logo />
            <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
              {NAV_LINKS.map((l) => (
                <a key={l.href} href={siteHref(l.href)} className="hover:text-white transition-colors">{l.label}</a>
              ))}
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
          </div>
          <div className="mt-10 border-t border-white/5 pt-8 text-center text-xs text-slate-500">
            © {new Date().getFullYear()} ShopTech Systems. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
