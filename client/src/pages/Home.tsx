import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
  ArrowRight, ArrowUpRight, Check, Code2, Zap, Shield, Users, TrendingUp, Smartphone,
  Search, BarChart3, Mail, Phone, MapPin, Facebook, Linkedin, Instagram, Twitter,
  ChevronUp, Sparkles, MessageSquare, ClipboardList, Palette, Rocket, Wrench, Menu, X, Star,
  LineChart, Clock, BadgeCheck, Gauge, Layers, Terminal, Activity, Database, Server, Cpu, Filter,
  FileText, Receipt, FileEdit, Wallet, Droplets,
} from "lucide-react";
import { useState, useEffect, useMemo } from "react";
import { Link } from "wouter";
import projectsData from "../data/projects.json";
import appsData from "../data/apps.json";
import { Project3DCard, Project } from "../components/Project3DCard";
import { SiteFooter } from "../components/SiteFooter";

/* ---------- Building Blocks ---------- */

export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-teal-700 via-teal-600 to-teal-500 p-0.5 shadow-sm">
        <div className="flex h-full w-full items-center justify-center rounded-[10px] bg-slate-50">
          <img src="/shoptech-mark.png" alt="ShopTech Systems logo" className="h-6 w-6 object-contain" />
        </div>
      </div>
      <span className="flex flex-col leading-none">
        <span className="text-xl font-semibold tracking-tight text-slate-900">
          Shop<span className="text-teal-700">Tech</span> Systems
        </span>
        <span className="mt-1 text-[9px] font-bold uppercase tracking-[0.22em] text-slate-600">
          Software Agency
        </span>
      </span>
    </div>
  );
}

const WHATSAPP_NUMBER = "+923164091654";
export const WHATSAPP_LINK = "https://wa.me/923164091654?text=Hello%20ShopTech%20Systems,%20I%20would%20like%20to%20inquire%20about%20a%20project.";

export function WhatsAppIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="currentColor"
      className={className}
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export function TikTokIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.9 2.9 0 0 1-2.9 2.9 2.9 2.9 0 1 1 2.9-2.9c0-.23-.03-.46-.08-.68V11.4a6.34 6.34 0 1 0 3.53 5.68V9.86a8.22 8.22 0 0 0 4.8 1.54V7.96c-.35 0-.7-.04-1.03-.12Z" />
    </svg>
  );
}

export function Eyebrow({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <div className={`font-mono text-xs font-semibold uppercase tracking-[0.16em] ${dark ? "text-teal-300" : "text-teal-700"}`}>
      {children}
    </div>
  );
}

export const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#portfolio", label: "Work" },
  { href: "#apps", label: "Apps" },
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#faq", label: "FAQ" },
];

const APP_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  FileText, Receipt, FileEdit, Wallet, Droplets, Smartphone,
};

const CATEGORIES = [
  "All",
  "ERP & Management",
  "Logistics & Fleet",
  "E-commerce",
  "AI & Automation",
  "Booking & Services",
];

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState("");
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [visibleCount, setVisibleCount] = useState(9);

  // Debounce search input by 120ms to keep typing silky smooth with 0 dropped frames
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchQuery(searchQuery);
    }, 120);
    return () => clearTimeout(timer);
  }, [searchQuery]);

  useEffect(() => {
    setVisibleCount(9);
  }, [activeCategory, debouncedSearchQuery]);

  // Preload top featured project images during browser idle time so portfolio appears instantly
  useEffect(() => {
    if (typeof window !== "undefined") {
      const topImages = [
        "/projects/dispatchflow.webp",
        "/projects/luxbarbershop.webp",
        "/projects/premiumwash.webp",
      ];
      const preload = () => {
        topImages.forEach((src) => {
          const img = new Image();
          img.src = src;
        });
      };
      if ("requestIdleCallback" in window) {
        window.requestIdleCallback(preload);
      } else {
        setTimeout(preload, 120);
      }
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const filteredProjects = useMemo(() => {
    const query = debouncedSearchQuery.trim().toLowerCase();
    return (projectsData as Project[]).filter((p) => {
      const matchesCategory =
        activeCategory === "All" ||
        (activeCategory === "ERP & Management" &&
          (p.category.toLowerCase().includes("erp") ||
            p.category.toLowerCase().includes("management") ||
            p.category.toLowerCase().includes("crm") ||
            p.category.toLowerCase().includes("invoicing") ||
            p.category.toLowerCase().includes("document"))) ||
        (activeCategory === "Logistics & Fleet" &&
          (p.category.toLowerCase().includes("dispatch") ||
            p.category.toLowerCase().includes("freight") ||
            p.category.toLowerCase().includes("rental") ||
            p.category.toLowerCase().includes("fleet"))) ||
        (activeCategory === "E-commerce" &&
          (p.category.toLowerCase().includes("e-commerce") ||
            p.category.toLowerCase().includes("pos") ||
            p.category.toLowerCase().includes("ordering") ||
            p.category.toLowerCase().includes("marketplace") ||
            p.category.toLowerCase().includes("store"))) ||
        (activeCategory === "AI & Automation" &&
          (p.category.toLowerCase().includes("ai") ||
            p.technologies.some((t) => t.toLowerCase().includes("ai") || t.toLowerCase().includes("voice")))) ||
        (activeCategory === "Booking & Services" &&
          (p.category.toLowerCase().includes("barbershop") ||
            p.category.toLowerCase().includes("salon") ||
            p.category.toLowerCase().includes("spa") ||
            p.category.toLowerCase().includes("wash") ||
            p.category.toLowerCase().includes("community") ||
            p.category.toLowerCase().includes("healthcare")));

      const matchesSearch =
        query === "" ||
        p.title.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query) ||
        p.technologies.some((t) => t.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, debouncedSearchQuery]);

  const displayedProjects = useMemo(() => {
    return filteredProjects.slice(0, visibleCount);
  }, [filteredProjects, visibleCount]);

  return (
    <div className="relative min-h-screen bg-white text-slate-800 selection:bg-teal-50 selection:text-slate-900 antialiased overflow-x-hidden">
      {/* ============ Navigation ============ */}
      <nav
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-slate-200 bg-white/90 backdrop-blur-xl shadow-sm"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="container flex items-center justify-between py-4">
          <a href="#home">
            <Logo />
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden items-center gap-1 rounded-full border border-slate-200 bg-white p-1.5 backdrop-blur-md lg:flex">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-full px-4 py-1.5 text-xs font-semibold text-slate-700 transition-all duration-200 hover:bg-slate-100 hover:text-slate-900"
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* Right Action & Status */}
          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-emerald-600/40 bg-emerald-50 px-3.5 py-1.5 text-xs font-semibold text-emerald-700 hover:bg-emerald-50 hover:border-emerald-600/40 transition-all shadow-[0_0_15px_rgba(16,185,129,0.15)]"
              title="Chat with us on WhatsApp"
            >
              <WhatsAppIcon className="h-3.5 w-3.5" />
              <span>WhatsApp</span>
            </a>
            <a
              href="#contact"
              className="btn-tech-glow inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-xs font-bold text-white tracking-wide"
            >
              Get Consultation <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-300 bg-white text-slate-900 lg:hidden"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile menu dropdown */}
        {menuOpen && (
          <div className="border-b border-slate-200 bg-slate-50 backdrop-blur-2xl lg:hidden">
            <div className="container flex flex-col gap-2 py-6">
              {NAV_LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-100"
                >
                  {l.label}
                </a>
              ))}
              <div className="pt-2 space-y-2">
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-center gap-2.5 rounded-xl border border-emerald-600/40 bg-emerald-50 py-3 text-center text-sm font-bold text-emerald-700 hover:bg-emerald-50"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  <span>Chat on WhatsApp (+92 316 4091654)</span>
                </a>
                <a
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  className="btn-tech-glow block w-full rounded-xl py-3 text-center text-sm font-bold text-white"
                >
                  Get Free Consultation
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* ============ Hero Section ============ */}
      <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="container relative z-10">
          <div className="grid items-center gap-14 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <Eyebrow>Software agency</Eyebrow>
              <h1 className="mt-5 text-4xl font-semibold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl lg:text-[3.4rem]">
                Custom software, web and mobile apps for <span className="text-teal-700">growing businesses</span>.
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
                ShopTech Systems designs and builds web platforms, ERPs, dispatch tools and Android apps.
                A small senior team, a clear scope and direct communication from first call to launch.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a href="#portfolio" className="btn-tech-glow inline-flex items-center gap-2 rounded-lg px-6 py-3.5 text-sm font-semibold text-white">
                  View our work <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-900 transition-colors hover:border-slate-400 hover:bg-slate-50"
                >
                  <WhatsAppIcon className="h-4 w-4 text-emerald-600" />
                  Chat on WhatsApp
                </a>
              </div>

              <dl className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-slate-200 pt-8">
                <div>
                  <dd className="text-2xl font-semibold text-slate-900">{(projectsData as Project[]).filter((p) => p.kind === "live").length}</dd>
                  <dt className="mt-1 text-xs text-slate-500">Live client sites</dt>
                </div>
                <div>
                  <dd className="text-2xl font-semibold text-slate-900">{(projectsData as Project[]).filter((p) => p.kind !== "live").length}</dd>
                  <dt className="mt-1 text-xs text-slate-500">Concept builds</dt>
                </div>
                <div>
                  <dd className="text-2xl font-semibold text-slate-900">{appsData.length}</dd>
                  <dt className="mt-1 text-xs text-slate-500">Android apps</dt>
                </div>
              </dl>
            </div>

            {/* Real work, not a mock-up */}
            <div className="lg:col-span-6">
              <div className="grid grid-cols-2 gap-4">
                {(projectsData as Project[]).filter((p) => p.kind === "live").slice(0, 3).map((p, i) => (
                  <a
                    key={p.id}
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-lg ${i === 0 ? "col-span-2" : ""}`}
                  >
                    <div className="flex items-center gap-1.5 border-b border-slate-100 bg-slate-50 px-3 py-2">
                      <span className="h-2 w-2 rounded-full bg-slate-300" />
                      <span className="h-2 w-2 rounded-full bg-slate-300" />
                      <span className="h-2 w-2 rounded-full bg-slate-300" />
                      <span className="ml-2 truncate text-[11px] text-slate-500">{p.link.replace(/^https?:\/\//, "").replace(/\/$/, "")}</span>
                    </div>
                    <img src={p.image} alt={p.title} width={1200} height={630} loading={i === 0 ? "eager" : "lazy"} className="aspect-[1200/630] w-full object-cover object-top" />
                    <div className="flex items-center justify-between px-4 py-3">
                      <span className="text-sm font-semibold text-slate-900">{p.title}</span>
                      <span className="text-xs text-slate-500">{p.category}</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ Interactive 3D Showcase (Portfolio) ============ */}
      <section id="portfolio" className="relative section-py border-t border-slate-200 bg-slate-50">
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <Eyebrow>Selected Work</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
              Our work, <span className="text-teal-700">live and in concept</span>.
            </h2>
            <p className="mt-4 text-base text-slate-600 sm:text-lg">
              Live sites we have delivered for clients appear first. The rest are concept builds: working prototypes we created to show what we can build for ERP, logistics, retail, AI voice systems and web apps.
            </p>
          </div>

          {/* Filter Bar & Search */}
          <div className="mt-10 sm:mt-12 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            {/* Category Filter Pills (horizontal scroll on mobile with no scrollbar) */}
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1 sm:pb-0 sm:flex-wrap">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`flex-shrink-0 whitespace-nowrap rounded-full px-4 py-2 text-xs font-semibold transition-all duration-200 cursor-pointer min-h-[36px] ${
                    activeCategory === cat
                      ? "bg-gradient-to-r from-teal-700 to-teal-600 text-white shadow-[0_0_20px_rgba(15,118,110,0.4)]"
                      : "border border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:text-slate-900 hover:bg-slate-100 active:bg-slate-100"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Live Search Input */}
            <div className="relative w-full md:w-72">
              <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
              <input
                type="text"
                placeholder="Search platforms, tech..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-full border border-slate-200 bg-white py-2.5 pl-9 pr-4 text-sm sm:text-xs font-medium text-slate-900 placeholder-slate-500 outline-none backdrop-blur-md transition-all focus:border-teal-600/40 focus:ring-2 focus:ring-teal-600/30"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-600 hover:text-slate-900 text-xs p-1"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* Results count */}
          <div className="mt-4 flex items-center justify-between text-xs text-slate-600">
            <span>
              Showing{" "}
              <span className="font-bold text-slate-900">
                {displayedProjects.length}
              </span>{" "}
              of{" "}
              <span className="font-bold text-slate-900">
                {filteredProjects.length}
              </span>{" "}
              {filteredProjects.length === 1 ? "platform" : "platforms"}
              {filteredProjects.length < projectsData.length && (
                <span className="text-slate-500"> (filtered from {projectsData.length})</span>
              )}
            </span>
            {searchQuery && (
              <span className="text-teal-700 font-mono text-[11px]">Filtered by "{searchQuery}"</span>
            )}
          </div>

          {/* 3D Tilt Project Cards Grid */}
          <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {displayedProjects.map((project, index) => (
              <Project3DCard key={project.id} project={project} priority={index < 6} />
            ))}
          </div>

          {/* Progressive Loading Action */}
          {filteredProjects.length > visibleCount && (
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => setVisibleCount((prev) => Math.min(prev + 6, filteredProjects.length))}
                className="btn-tech-glow inline-flex items-center gap-2 rounded-lg px-7 py-3 text-xs font-bold text-white shadow-xl cursor-pointer active:scale-95"
              >
                <span>Load More Platforms ({filteredProjects.length - visibleCount} remaining)</span>
                <ArrowRight className="h-4 w-4" />
              </button>
              <button
                onClick={() => setVisibleCount(filteredProjects.length)}
                className="text-xs font-semibold text-slate-600 hover:text-slate-900 underline underline-offset-4 cursor-pointer py-2 transition-colors"
              >
                Show All {filteredProjects.length} Platforms
              </button>
            </div>
          )}

          {filteredProjects.length === 0 && (
            <div className="rounded-2xl border border-slate-200 bg-white p-12 text-center backdrop-blur-xl">
              <p className="text-lg font-bold text-slate-900">No matching projects found</p>
              <p className="mt-2 text-sm text-slate-600">Try adjusting your category filter or search keywords.</p>
              <Button
                onClick={() => {
                  setActiveCategory("All");
                  setSearchQuery("");
                }}
                className="mt-4 rounded-full bg-teal-700 px-6 text-white hover:bg-teal-800"
              >
                Reset Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* ============ Our Applications ============ */}
      <section id="apps" className="relative section-py border-t border-slate-200">
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <Eyebrow>Our Applications</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
              Mobile apps <span className="text-teal-700">by ShopTech Systems</span>.
            </h2>
            <p className="mt-4 text-base text-slate-600 sm:text-lg">
              Our own Android apps, built for everyday productivity.
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {appsData.map((app) => {
              const Icon = APP_ICONS[app.icon] ?? Smartphone;
              return (
                <div
                  key={app.id}
                  className="glass-card group flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-teal-600/40"
                >
                  <div>
                    {"iconImage" in app && app.iconImage ? (
                      <img src={app.iconImage} alt={`${app.name} app icon`} className="h-12 w-12 rounded-xl object-cover shadow-lg" />
                    ) : (
                      <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-tr ${app.color} text-slate-900 shadow-lg`}>
                        <Icon className="h-6 w-6" />
                      </div>
                    )}
                    <h3 className="mt-6 text-xl font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
                      {"features" in app ? <Link href={`/apps/${app.id}`}>{app.name}</Link> : app.name}
                    </h3>
                    <p className="mt-1 font-mono text-[11px] uppercase tracking-wider text-teal-700">
                      {app.tagline}
                    </p>
                    {app.description && (
                      <p className="mt-3 text-sm leading-relaxed text-slate-600">{app.description}</p>
                    )}
                  </div>
                  <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-slate-100 pt-4">
                    {"features" in app && (
                      <Link href={`/apps/${app.id}`} className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-700 hover:text-teal-700">
                        Learn more <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    )}
                    {app.playUrl ? (
                      <a
                        href={app.playUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-tech-glow inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-xs font-bold text-white"
                      >
                        Get it on Google Play <ArrowUpRight className="h-3.5 w-3.5" />
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-100 px-4 py-2 text-xs font-semibold text-slate-700">
                        <Smartphone className="h-3.5 w-3.5" />
                        Google Play: Coming Soon
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ Solutions / Capabilities ============ */}
      <section id="services" className="relative section-py border-t border-slate-200">
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <Eyebrow>Capabilities</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
              What we <span className="text-teal-700">build</span>.
            </h2>
            <p className="mt-4 text-base text-slate-600 sm:text-lg">
              From custom web portals and business systems to mobile apps and automation, we cover the full cycle: planning, design, development and support.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Code2,
                title: "Custom Web & SaaS Apps",
                desc: "High-performance web apps with modern architectures, scalable APIs, and reliable data foundations.",
                tags: ["Web Apps", "SaaS", "APIs", "Cloud"],
                color: "from-teal-700 to-teal-600",
              },
              {
                icon: Smartphone,
                title: "POS & Retail Systems",
                desc: "Integrated point-of-sale platforms, inventory sync, multi-store support, and companion mobile apps for shop owners.",
                tags: ["POS", "Inventory", "Mobile", "Billing"],
                color: "from-teal-700 to-teal-600",
              },
              {
                icon: Rocket,
                title: "Logistics & Fleet Dispatch",
                desc: "Real-time dispatch consoles, driver routing, live load boards, rate calculators, and carrier support operations.",
                tags: ["Dispatch", "Routing", "Fleet", "Live Ops"],
                color: "from-teal-700 to-teal-600",
              },
              {
                icon: MessageSquare,
                title: "AI Voice & Workflow Agents",
                desc: "Automated calling systems, AI voice agents, smart lead routing, and hands-free intake for busy service businesses.",
                tags: ["Voice AI", "Automation", "Lead Routing", "Workflows"],
                color: "from-teal-700 to-teal-600",
              },
              {
                icon: Layers,
                title: "Enterprise ERP & Portals",
                desc: "Unified platforms for schools, pharmacies, healthcare, and marketplaces with role-based access and reporting.",
                tags: ["Multi-tenant", "RBAC", "Reports", "Billing"],
                color: "from-teal-700 to-teal-600",
              },
              {
                icon: TrendingUp,
                title: "Digital Growth & SEO",
                desc: "Technical SEO audits, high-intent landing pages, fast Core Web Vitals, and conversion rate optimization that drives revenue.",
                tags: ["SEO", "Conversion", "Analytics", "Growth"],
                color: "from-teal-700 to-teal-500",
              },
            ].map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="glass-card group flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-teal-600/40"
                >
                  <div>
                    <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-tr ${service.color} text-slate-900 shadow-lg`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-6 text-xl font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                      {service.desc}
                    </p>
                  </div>
                  <div className="mt-6 flex flex-wrap gap-1.5 border-t border-slate-100 pt-4">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-slate-200 bg-slate-100 px-2.5 py-1 font-mono text-[11px] text-slate-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ Architecture / Process ============ */}
      <section id="process" className="relative section-py bg-slate-900">
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <Eyebrow dark>How we work</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
              From first call to <span className="text-teal-300">launch</span>.
            </h2>
            <p className="mt-4 text-base text-slate-300 sm:text-lg">
              A simple four-step process keeps projects on scope, on schedule and easy to follow.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                num: "01",
                title: "Discovery",
                desc: "We learn how your business works, agree on requirements and choose the right technology.",
                icon: Search,
              },
              {
                num: "02",
                title: "Design & planning",
                desc: "Clickable prototypes, data models and user flows, reviewed with you before we build.",
                icon: Palette,
              },
              {
                num: "03",
                title: "Build in sprints",
                desc: "Short development cycles with automated tests and regular demos so you always see progress.",
                icon: Terminal,
              },
              {
                num: "04",
                title: "Launch & support",
                desc: "We deploy, monitor and keep improving the product, with support after launch.",
                icon: Shield,
              },
            ].map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.num}
                  className="relative rounded-xl border border-white/10 bg-white/5 p-7"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-3xl font-semibold text-white/20">
                      {step.num}
                    </span>
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-teal-300">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>
                  <h3 className="mt-6 text-lg font-semibold text-white">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300">{step.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ FAQ Section ============ */}
      <section id="faq" className="relative section-py border-t border-slate-200 bg-slate-50">
        <div className="container relative z-10">
          <div className="max-w-2xl">
            <Eyebrow>Questions & Answers</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Frequently asked questions
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base">
              Everything you need to know about working with ShopTech Systems.
            </p>
          </div>

          <div className="mx-auto mt-12 max-w-3xl">
            <Accordion type="single" collapsible className="space-y-3">
              {[
                {
                  q: "What types of software and web platforms do you build?",
                  a: "We specialize in custom web applications, SaaS platforms, multi-tenant ERPs, point-of-sale (POS) systems, logistics/dispatch management software, AI voice agents, and high-performance e-commerce portals.",
                },
                {
                  q: "How long does a typical custom software project take?",
                  a: "Most custom platforms take between 2 to 6 weeks depending on scope, complexity, and custom integrations. We work in rapid weekly sprints with live demos.",
                },
                {
                  q: "Do you provide hosting, domain setup, and ongoing maintenance?",
                  a: "Yes. We handle end-to-end deployment on modern cloud platforms with automated SSL, CDN edge delivery, and 24/7 technical monitoring.",
                },
                {
                  q: "Can you upgrade or modernize an existing legacy software system?",
                  a: "Absolutely. We routinely refactor, modernize, and migrate outdated web applications into modern, ultra-fast architectures with zero downtime.",
                },
                {
                  q: "How do we get started?",
                  a: "Simply request a free consultation using the form below. We'll analyze your requirements, provide architectural recommendations, and give you an exact timeline and estimate.",
                },
              ].map((item, idx) => (
                <AccordionItem
                  key={idx}
                  value={`item-${idx}`}
                  className="rounded-xl border border-slate-200 bg-white px-6 backdrop-blur-xl data-[state=open]:border-teal-600/40"
                >
                  <AccordionTrigger className="text-left text-base font-semibold text-slate-900 hover:text-teal-700 py-4">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm leading-relaxed text-slate-600 pb-4">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* ============ Contact / Consultation CTA ============ */}
      <section id="contact" className="relative py-16 md:py-20 border-t border-slate-200">
        <div className="container relative z-10">
          <div className="mx-auto max-w-4xl rounded-2xl border border-slate-200 bg-slate-50 p-8 md:p-14">
            <div className="grid items-center gap-10 md:grid-cols-12">
              <div className="md:col-span-7">
                <Eyebrow>Start Your Project</Eyebrow>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl text-balance">
                  Tell us what you <span className="text-teal-700">want to build</span>.
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
                  Tell us about your project goals. We will reply within one business day to arrange a short discovery call.
                </p>

                <div className="mt-8 space-y-3.5">
                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3.5 text-sm text-slate-700 hover:text-emerald-700 transition-colors group rounded-xl border border-emerald-600/40 bg-emerald-50 p-3.5 backdrop-blur-md shadow-[0_0_15px_rgba(16,185,129,0.1)]"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700 group-hover:scale-110 transition-transform shadow-[0_0_12px_rgba(16,185,129,0.3)]">
                      <WhatsAppIcon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900 group-hover:text-emerald-700 flex items-center gap-2">
                        +92 316 4091654
                        <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-bold text-emerald-700">
                          Instant Response
                        </span>
                      </div>
                      <div className="text-xs text-slate-600">Click to chat directly on WhatsApp</div>
                    </div>
                  </a>

                  <div className="flex items-center gap-3 text-sm text-slate-700 px-1">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-teal-50 text-teal-700">
                      <Mail className="h-4 w-4" />
                    </div>
                    <span>contact@shoptechsystems.online</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-700 px-1">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-teal-50 text-teal-700">
                      <Clock className="h-4 w-4" />
                    </div>
                    <span>Reply within one business day</span>
                  </div>
                </div>
              </div>

              {/* Consultation Form */}
              <div className="md:col-span-5">
                <div className="rounded-xl border border-slate-200 bg-white p-6">
                  {contactSubmitted ? (
                    <div className="py-8 text-center">
                      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50 text-emerald-700">
                        <Check className="h-6 w-6" />
                      </div>
                      <h4 className="mt-4 text-lg font-bold text-slate-900">Consultation Requested!</h4>
                      <p className="mt-2 text-xs text-slate-600">
                        Your request is ready in WhatsApp. Tap Send there and we will reply within 24 hours.
                      </p>
                    </div>
                  ) : (
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        // No backend: hand the request to WhatsApp so it actually reaches us
                        const f = new FormData(e.currentTarget);
                        const text = `Hello ShopTech Systems, I would like a free consultation.\nName: ${f.get("name")}\nEmail: ${f.get("email")}\nProject type: ${f.get("project")}`;
                        window.open(`https://wa.me/923164091654?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
                        setContactSubmitted(true);
                      }}
                      className="space-y-3.5"
                    >
                      <div>
                        <label className="text-xs font-semibold text-slate-700">Your Name</label>
                        <input
                          required
                          type="text"
                          name="name"
                          placeholder="Alex Morgan"
                          className="mt-1 min-h-[44px] w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm sm:text-xs text-slate-900 placeholder-slate-500 outline-none focus:border-teal-600/40 focus:ring-1 focus:ring-teal-600/30"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-semibold text-slate-700">Email Address</label>
                        <input
                          required
                          type="email"
                          name="email"
                          placeholder="alex@company.com"
                          className="mt-1 min-h-[44px] w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm sm:text-xs text-slate-900 placeholder-slate-500 outline-none focus:border-teal-600/40 focus:ring-1 focus:ring-teal-600/30"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-semibold text-slate-700">Project Type</label>
                        <select name="project" className="mt-1 min-h-[44px] w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm sm:text-xs text-slate-900 outline-none focus:border-teal-600/40 focus:ring-1 focus:ring-teal-600/30">
                          <option>Custom Web Application</option>
                          <option>ERP / Enterprise Management</option>
                          <option>Logistics & Dispatch Software</option>
                          <option>POS / Retail System</option>
                          <option>AI Voice & Automation</option>
                          <option>Other Digital Project</option>
                        </select>
                      </div>
                      <button
                        type="submit"
                        className="btn-tech-glow mt-4 min-h-[44px] w-full rounded-xl py-3 text-xs sm:text-sm font-bold text-white tracking-wide cursor-pointer active:scale-[0.99]"
                      >
                        Request Free Consultation
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ Footer ============ */}
      <SiteFooter />

      {/* Floating WhatsApp Quick Action Button */}
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 rounded-full border border-emerald-600/40 bg-gradient-to-r from-emerald-600 to-green-600 px-4 py-3 text-slate-900 shadow-[0_0_25px_rgba(16,185,129,0.5)] backdrop-blur-md transition-all duration-300 hover:scale-105 hover:shadow-[0_0_35px_rgba(16,185,129,0.7)] group cursor-pointer"
        aria-label="Chat on WhatsApp"
      >
        <div className="relative flex h-5 w-5 items-center justify-center">
          <span className="absolute -top-1 -right-1 h-2.5 w-2.5 rounded-full bg-emerald-500 animate-ping" />
          <span className="absolute -top-1 -right-1 h-2.5 w-2.5 rounded-full bg-emerald-500" />
          <WhatsAppIcon className="h-5 w-5" />
        </div>
        <span className="text-xs font-bold tracking-wide">WhatsApp Us</span>
      </a>

      {/* Scroll to Top Button (positioned above WhatsApp widget) */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-20 right-6.5 z-40 flex h-10 w-10 items-center justify-center rounded-full border border-teal-600/40 bg-white text-teal-700 shadow-md transition-all hover:scale-110 hover:bg-teal-700 hover:text-white cursor-pointer"
          aria-label="Scroll to top"
        >
          <ChevronUp className="h-4 w-4" />
        </button>
      )}
    </div>
  );
}
