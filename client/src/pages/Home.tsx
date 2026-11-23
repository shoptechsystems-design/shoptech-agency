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
import { PostCover } from "../components/PostCover";
import { POSTS } from "../data/posts";

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
  { href: "#blog", label: "Blog" },
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
      <section id="portfolio" className="relative border-t border-slate-200 bg-slate-50 py-16 md:py-24">
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <Eyebrow>Selected Work</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl md:text-4xl">
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
      <section id="apps" className="relative border-t border-slate-200 py-16 md:py-24">
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <Eyebrow>Our applications</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Android apps <span className="text-teal-700">we have built</span>.
            </h2>
            <p className="mt-4 text-base text-slate-600 sm:text-lg">
              Our own apps, designed for everyday productivity.
            </p>
          </div>

          {/* Featured app */}
          {appsData.filter((a) => "features" in a).slice(0, 1).map((app) => (
            <div key={app.id} className="mt-12 grid overflow-hidden rounded-2xl border border-slate-200 bg-white lg:grid-cols-5">
              <div className="flex flex-col justify-center p-8 sm:p-10 lg:col-span-2">
                <div className="flex items-center gap-4">
                  {"iconImage" in app && app.iconImage && (
                    <img src={app.iconImage} alt={`${app.name} app icon`} width={56} height={56} className="h-14 w-14 rounded-xl object-cover shadow-sm" />
                  )}
                  <div>
                    <h3 className="text-2xl font-semibold text-slate-900">{app.name}</h3>
                    <p className="mt-0.5 font-mono text-[11px] uppercase tracking-wider text-teal-700">{app.tagline}</p>
                  </div>
                </div>
                <p className="mt-5 text-sm leading-relaxed text-slate-600 sm:text-base">{app.description}</p>
                <div className="mt-7 flex flex-wrap items-center gap-3">
                  <Link href={`/apps/${app.id}`} className="btn-tech-glow inline-flex items-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold text-white">
                    Learn more <ArrowRight className="h-4 w-4" />
                  </Link>
                  {app.playUrl ? (
                    <a href={app.playUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50">
                      Get it on Google Play <ArrowUpRight className="h-4 w-4" />
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-600">
                      <Smartphone className="h-4 w-4" /> Google Play: coming soon
                    </span>
                  )}
                </div>
              </div>
              {"banner" in app && app.banner && (
                <div className="min-h-[220px] bg-slate-100 lg:col-span-3">
                  <img src={app.banner as string} alt={`${app.name} app preview`} loading="lazy" className="h-full w-full object-cover" />
                </div>
              )}
            </div>
          ))}

          {/* Other apps */}
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {appsData.filter((a) => !("features" in a)).map((app) => {
              const Icon = APP_ICONS[app.icon] ?? Smartphone;
              return (
                <div key={app.id} className="flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white">
                  {"image" in app && app.image ? (
                    <img src={app.image as string} alt={`${app.name} preview`} width={1200} height={630} loading="lazy" className="aspect-[1200/630] w-full border-b border-slate-100 object-cover object-top" />
                  ) : (
                    <div className={`flex aspect-[1200/630] w-full items-center justify-center bg-gradient-to-tr ${app.color}`}>
                      <Icon className="h-14 w-14 text-white/90" />
                    </div>
                  )}
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center gap-3">
                      <div className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-tr ${app.color} text-white`}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold leading-tight text-slate-900">{app.name}</h3>
                        <p className="mt-0.5 font-mono text-[11px] uppercase tracking-wider text-teal-700">{app.tagline}</p>
                      </div>
                    </div>
                    {app.description && <p className="mt-3 text-sm leading-relaxed text-slate-600">{app.description}</p>}
                    <div className="mt-auto border-t border-slate-100 pt-4 mt-5">
                      {app.playUrl ? (
                        <a href={app.playUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm font-semibold text-teal-700 hover:text-teal-800">
                          Google Play <ArrowUpRight className="h-3.5 w-3.5" />
                        </a>
                      ) : (
                        <span className="text-xs font-medium text-slate-500">Google Play: coming soon</span>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ Solutions / Capabilities ============ */}
      <section id="services" className="relative border-t border-slate-200 py-16 md:py-24">
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <Eyebrow>Capabilities</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl md:text-4xl">
              What we <span className="text-teal-700">build</span>.
            </h2>
            <p className="mt-4 text-base text-slate-600 sm:text-lg">
              From custom web portals and business systems to mobile apps and automation, we cover the full cycle: planning, design, development and support.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
                tags: ["Voice AI", "Automation", "Lead Routing"],
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
                  className="glass-card group flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-7"
                >
                  <div>
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-teal-50 text-teal-700">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-5 text-lg font-semibold text-slate-900">
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
      <section id="process" className="relative bg-slate-900 py-16 md:py-24">
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <Eyebrow dark>How we work</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-4xl">
              From first call to <span className="text-teal-300">launch</span>.
            </h2>
            <p className="mt-4 text-base text-slate-300 sm:text-lg">
              A simple four-step process keeps projects on scope, on schedule and easy to follow.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
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

      {/* ============ Latest from the blog ============ */}
      <section id="blog" className="relative py-16 md:py-24 border-t border-slate-200">
        <div className="container">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-2xl">
              <Eyebrow>From the blog</Eyebrow>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl md:text-4xl">
                Insights &amp; <span className="text-teal-700">guides</span>.
              </h2>
              <p className="mt-4 text-base text-slate-600 sm:text-lg">Practical advice on software, apps and automation for business owners.</p>
            </div>
            <a href="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-teal-700 hover:text-teal-800">
              View all articles <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {POSTS.slice(0, 3).map((p) => (
              <a key={p.slug} href={`/blog/${p.slug}`} className="group flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white transition-shadow hover:shadow-lg">
                <PostCover slug={p.slug} width={640} />
                <div className="flex flex-1 flex-col p-5">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-teal-700">{p.category}</span>
                  <h3 className="mt-2 text-lg font-semibold leading-snug text-slate-900 text-balance">{p.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-6 text-slate-600 line-clamp-3">{p.description}</p>
                  <span className="mt-4 text-xs text-slate-500">{p.readMins} min read</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FAQ Section ============ */}
      <section id="faq" className="relative border-t border-slate-200 bg-slate-50 py-16 md:py-24">
        <div className="container relative z-10 grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <Eyebrow>Questions & Answers</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Frequently asked questions
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base">
              Everything you need to know about working with ShopTech Systems.
            </p>
          </div>

          <div className="lg:col-span-8">
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
                  a: "Yes. We handle end-to-end deployment on modern cloud platforms with automated SSL, CDN edge delivery, and ongoing monitoring.",
                },
                {
                  q: "Can you upgrade or modernize an existing legacy software system?",
                  a: "Absolutely. We routinely refactor, modernize, and migrate outdated web applications into modern architectures with minimal downtime.",
                },
                {
                  q: "How do we get started?",
                  a: "Simply request a free consultation using the form below. We'll analyze your requirements, provide architectural recommendations, and give you an exact timeline and estimate.",
                },
              ].map((item, idx) => (
                <AccordionItem
                  key={idx}
                  value={`item-${idx}`}
                  className="rounded-xl border border-slate-200 last:border-b bg-white px-6 data-[state=open]:border-teal-600/40"
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
      <section id="contact" className="relative border-t border-slate-200 bg-slate-50 py-16 md:py-24">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <Eyebrow>Start your project</Eyebrow>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl md:text-4xl text-balance">
                Tell us what you <span className="text-teal-700">want to build</span>.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
                Share a few details and we will get back to you within one business day to arrange a short discovery call.
              </p>

              <ol className="mt-10 space-y-6">
                {[
                  { t: "You send the details", d: "A few lines about the problem and what you have in mind." },
                  { t: "We reply and ask questions", d: "A short call to understand your workflow and goals." },
                  { t: "You get a clear proposal", d: "Scope, timeline and cost, so you can decide with confidence." },
                ].map((step, i) => (
                  <li key={step.t} className="flex gap-4">
                    <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-teal-700/30 bg-white font-mono text-xs font-semibold text-teal-700">{i + 1}</span>
                    <div>
                      <div className="text-sm font-semibold text-slate-900">{step.t}</div>
                      <div className="mt-0.5 text-sm text-slate-600">{step.d}</div>
                    </div>
                  </li>
                ))}
              </ol>

              <a href="mailto:contact@shoptechsystems.online" className="mt-10 inline-flex items-center gap-3 text-sm font-medium text-slate-700 hover:text-teal-700">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-teal-700"><Mail className="h-4 w-4" /></span>
                contact@shoptechsystems.online
              </a>
            </div>

            {/* Consultation form */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 lg:p-10">
                {contactSubmitted ? (
                  <div className="py-16 text-center">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50 text-emerald-700">
                      <Check className="h-6 w-6" />
                    </div>
                    <h3 className="mt-4 text-xl font-semibold text-slate-900">Almost done</h3>
                    <p className="mx-auto mt-2 max-w-sm text-sm text-slate-600">
                      Your request is ready in WhatsApp. Tap Send there and we will reply within one business day.
                    </p>
                  </div>
                ) : (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      // No backend: hand the request to WhatsApp so it actually reaches us
                      const f = new FormData(e.currentTarget);
                      const text = `Hello ShopTech Systems, I would like a free consultation.\nName: ${f.get("name")}\nEmail: ${f.get("email")}\nProject type: ${f.get("project")}\nBudget: ${f.get("budget")}\nDetails: ${f.get("message")}`;
                      window.open(`https://wa.me/923164091654?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
                      setContactSubmitted(true);
                    }}
                    className="grid gap-5 sm:grid-cols-2"
                  >
                    <div>
                      <label htmlFor="c-name" className="text-sm font-medium text-slate-800">Full name</label>
                      <input id="c-name" required type="text" name="name" autoComplete="name" placeholder="Your name" className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-400 outline-none transition focus:border-teal-600 focus:ring-2 focus:ring-teal-600/20" />
                    </div>
                    <div>
                      <label htmlFor="c-email" className="text-sm font-medium text-slate-800">Work email</label>
                      <input id="c-email" required type="email" name="email" autoComplete="email" placeholder="you@company.com" className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-400 outline-none transition focus:border-teal-600 focus:ring-2 focus:ring-teal-600/20" />
                    </div>
                    <div>
                      <label htmlFor="c-project" className="text-sm font-medium text-slate-800">Project type</label>
                      <select id="c-project" name="project" className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-400 outline-none transition focus:border-teal-600 focus:ring-2 focus:ring-teal-600/20">
                        <option>Custom web application</option>
                        <option>Mobile app</option>
                        <option>ERP / business management</option>
                        <option>Logistics &amp; dispatch software</option>
                        <option>POS / retail system</option>
                        <option>AI &amp; automation</option>
                        <option>Website or landing page</option>
                        <option>Something else</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="c-budget" className="text-sm font-medium text-slate-800">Budget <span className="font-normal text-slate-500">(optional)</span></label>
                      <select id="c-budget" name="budget" className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-400 outline-none transition focus:border-teal-600 focus:ring-2 focus:ring-teal-600/20">
                        <option>Not sure yet</option>
                        <option>Under $1,000</option>
                        <option>$1,000 – $5,000</option>
                        <option>$5,000 – $15,000</option>
                        <option>$15,000+</option>
                      </select>
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="c-message" className="text-sm font-medium text-slate-800">Project details</label>
                      <textarea id="c-message" required name="message" rows={5} placeholder="What do you want to build, and what problem should it solve?" className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-400 outline-none transition focus:border-teal-600 focus:ring-2 focus:ring-teal-600/20 resize-y" />
                    </div>
                    <div className="sm:col-span-2">
                      <button type="submit" className="btn-tech-glow inline-flex w-full items-center justify-center gap-2 rounded-lg px-6 py-3.5 text-sm font-semibold text-white cursor-pointer">
                        Request free consultation <ArrowRight className="h-4 w-4" />
                      </button>
                      <p className="mt-3 text-center text-xs text-slate-500">We only use your details to reply to this request.</p>
                    </div>
                  </form>
                )}
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
