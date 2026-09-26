import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
  ArrowRight, ArrowUpRight, Check, Code2, Zap, Shield, Users, TrendingUp, Smartphone,
  Search, BarChart3, Mail, Phone, MapPin, Facebook, Linkedin, Instagram,
  ChevronUp, Sparkles, MessageSquare, ClipboardList, Palette, Rocket, Wrench, Menu, X, Star,
  LineChart, Clock, BadgeCheck, Gauge, Layers, Terminal, Activity, Database, Server, Cpu, Filter,
} from "lucide-react";
import { useState, useEffect, useMemo } from "react";
import projectsData from "../data/projects.json";
import { Project3DCard, Project } from "../components/Project3DCard";

/* ---------- Building Blocks ---------- */

function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-400 p-0.5 shadow-[0_0_20px_rgba(59,130,246,0.5)]">
        <div className="flex h-full w-full items-center justify-center rounded-[10px] bg-slate-950">
          <img src="/shoptech-mark.png" alt="ShopTech Systems logo" className="h-6 w-6 object-contain" />
        </div>
      </div>
      <span className="flex flex-col leading-none">
        <span className="text-xl font-extrabold tracking-tight text-white">
          Shop<span className="text-cyan-400">Tech</span> Systems
        </span>
        <span className="mt-1 text-[9px] font-bold uppercase tracking-[0.22em] text-slate-400">
          Enterprise Digital Systems
        </span>
      </span>
    </div>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/25 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-cyan-400 backdrop-blur-md shadow-[0_0_15px_rgba(6,182,212,0.15)]">
      <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_#22d3ee]" />
      {children}
    </div>
  );
}

const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#portfolio", label: "Showcase" },
  { href: "#services", label: "Solutions" },
  { href: "#process", label: "Architecture" },
  { href: "#testimonials", label: "Reviews" },
  { href: "#faq", label: "FAQ" },
];

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
  const [contactSubmitted, setContactSubmitted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const filteredProjects = useMemo(() => {
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
        searchQuery === "" ||
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.technologies.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="relative min-h-screen bg-[#060913] text-slate-200 selection:bg-blue-600/30 selection:text-white antialiased overflow-x-hidden">
      {/* ============ Ambient Tech Background ============ */}
      <div className="pointer-events-none fixed inset-0 z-0">
        {/* Subtle Cyber Grid */}
        <div className="cyber-grid absolute inset-0 opacity-60" />
        
        {/* Glowing Ambient Light Orbs */}
        <div className="absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full glow-orb-blue blur-[140px] opacity-70" />
        <div className="absolute top-[30%] -right-40 h-[650px] w-[650px] rounded-full glow-orb-purple blur-[160px] opacity-60" />
        <div className="absolute top-[65%] left-1/3 h-[700px] w-[700px] rounded-full glow-orb-cyan blur-[180px] opacity-50" />
      </div>

      {/* ============ Navigation ============ */}
      <nav
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-white/10 bg-slate-950/80 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="container flex items-center justify-between py-4">
          <a href="#home">
            <Logo />
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden items-center gap-1 rounded-full border border-white/10 bg-slate-900/60 p-1.5 backdrop-blur-md lg:flex">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-full px-4 py-1.5 text-xs font-semibold text-slate-300 transition-all duration-200 hover:bg-white/10 hover:text-white"
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* Right Action & Status */}
          <div className="hidden items-center gap-4 lg:flex">
            <div className="flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-[11px] font-medium text-emerald-400">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
              <span>Available for Projects</span>
            </div>
            <a
              href="#contact"
              className="btn-tech-glow inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-bold text-white tracking-wide"
            >
              Get Consultation <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-slate-900/80 text-white lg:hidden"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile menu dropdown */}
        {menuOpen && (
          <div className="border-b border-white/10 bg-slate-950/95 backdrop-blur-2xl lg:hidden">
            <div className="container flex flex-col gap-2 py-6">
              {NAV_LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm font-semibold text-slate-200 hover:bg-white/10"
                >
                  {l.label}
                </a>
              ))}
              <div className="pt-2">
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
      <section id="home" className="relative pt-32 pb-20 md:pt-44 md:pb-32">
        <div className="container relative z-10">
          <div className="grid items-center gap-16 lg:grid-cols-12">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <Eyebrow>Next-Gen Software & Digital Systems</Eyebrow>

              <h1 className="mt-6 text-3xl font-extrabold leading-[1.12] tracking-tight text-white sm:text-5xl sm:leading-[1.08] lg:text-6xl xl:text-7xl">
                Engineering <br className="hidden sm:block" />
                <span className="text-gradient-tech">technology</span> that <br className="hidden sm:block" />
                <span className="text-gradient-cyan">powers modern business</span>.
              </h1>

              <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg">
                We design and build mission-critical enterprise web apps, custom ERPs, dispatch & fleet
                systems, and intelligent platforms engineered for speed, scale, and uncompromising reliability.
              </p>

              {/* CTAs */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#portfolio"
                  className="btn-tech-glow inline-flex items-center gap-2.5 rounded-full px-7 py-3.5 text-sm font-bold text-white shadow-xl"
                >
                  Explore Portfolio ({projectsData.length}) <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#contact"
                  className="glass-card inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3.5 text-sm font-semibold text-slate-200 hover:border-white/30 hover:bg-white/10 hover:text-white"
                >
                  Schedule Discovery Call
                </a>
              </div>

              {/* Live Trust Metrics Ticker */}
              <div className="mt-12 grid grid-cols-3 gap-6 border-t border-white/10 pt-8 max-w-lg">
                <div>
                  <div className="font-mono text-2xl sm:text-3xl font-extrabold text-white">21+</div>
                  <div className="mt-1 text-xs font-medium text-slate-400 uppercase tracking-wider">Live Deployments</div>
                </div>
                <div>
                  <div className="font-mono text-2xl sm:text-3xl font-extrabold text-cyan-400">99.98%</div>
                  <div className="mt-1 text-xs font-medium text-slate-400 uppercase tracking-wider">Uptime Standard</div>
                </div>
                <div>
                  <div className="font-mono text-2xl sm:text-3xl font-extrabold text-blue-400">100%</div>
                  <div className="mt-1 text-xs font-medium text-slate-400 uppercase tracking-wider">On-Time Delivery</div>
                </div>
              </div>
            </div>

            {/* Right: 3D Floating Interactive Stage */}
            <div className="lg:col-span-5 relative">
              <div
                className="relative mx-auto w-full max-w-md lg:max-w-none"
                style={{ perspective: "1000px" }}
              >
                {/* Main 3D System Telemetry Card */}
                <div
                  className="relative rounded-3xl border border-white/15 bg-slate-900/80 p-6 backdrop-blur-2xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8),0_0_40px_rgba(59,130,246,0.2)] transition-transform duration-500 hover:rotate-1"
                  style={{
                    transform: "rotateY(-6deg) rotateX(4deg)",
                    transformStyle: "preserve-3d",
                  }}
                >
                  {/* Card Header */}
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <div className="flex items-center gap-2">
                      <span className="h-3 w-3 rounded-full bg-rose-500/80" />
                      <span className="h-3 w-3 rounded-full bg-amber-500/80" />
                      <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
                      <span className="ml-2 font-mono text-xs font-semibold text-slate-400">
                        shoptech.core::v2.4
                      </span>
                    </div>
                    <span className="flex items-center gap-1.5 rounded-md border border-cyan-500/30 bg-cyan-500/10 px-2 py-0.5 font-mono text-[10px] text-cyan-300">
                      <Activity className="h-3 w-3 animate-spin" /> LIVE
                    </span>
                  </div>

                  {/* System Metrics Showcase */}
                  <div className="mt-5 space-y-4">
                    <div className="rounded-xl border border-white/10 bg-slate-950/60 p-4">
                      <div className="flex items-center justify-between text-xs font-medium text-slate-400">
                        <span>Cluster Throughput</span>
                        <span className="font-mono text-cyan-400 font-bold">14,280 req/s</span>
                      </div>
                      <div className="mt-2.5 h-1.5 w-full overflow-hidden rounded-full bg-slate-800">
                        <div className="h-full w-[82%] rounded-full bg-gradient-to-r from-blue-500 to-cyan-400" />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="rounded-xl border border-white/10 bg-slate-950/60 p-3.5">
                        <div className="flex items-center gap-2 text-xs text-slate-400">
                          <Cpu className="h-3.5 w-3.5 text-blue-400" /> Architecture
                        </div>
                        <div className="mt-1 font-mono text-sm font-bold text-white">Full-Stack SSR</div>
                      </div>
                      <div className="rounded-xl border border-white/10 bg-slate-950/60 p-3.5">
                        <div className="flex items-center gap-2 text-xs text-slate-400">
                          <Zap className="h-3.5 w-3.5 text-amber-400" /> Response Time
                        </div>
                        <div className="mt-1 font-mono text-sm font-bold text-emerald-400">32 ms (Global)</div>
                      </div>
                    </div>

                    <div className="rounded-xl border border-white/10 bg-slate-950/60 p-4">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-medium text-slate-400">Integrated Security</span>
                        <span className="text-xs font-semibold text-emerald-400 flex items-center gap-1">
                          <Shield className="h-3.5 w-3.5" /> SOC2 Compliant
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating 3D Badge 1: Top Right (visible sm+) */}
                <div
                  className="animate-float-slow absolute -top-8 -right-4 lg:-right-6 hidden sm:flex rounded-2xl border border-cyan-500/30 bg-slate-900/90 p-4 backdrop-blur-xl shadow-2xl"
                  style={{ transform: "translateZ(60px)" }}
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/20 text-cyan-400">
                      <Layers className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">Multi-Tenant ERP</div>
                      <div className="text-[11px] text-slate-400">Production Ready</div>
                    </div>
                  </div>
                </div>

                {/* Floating 3D Badge 2: Bottom Left (visible sm+) */}
                <div
                  className="animate-float-reverse absolute -bottom-6 -left-4 lg:-left-6 hidden sm:flex rounded-2xl border border-purple-500/30 bg-slate-900/90 p-4 backdrop-blur-xl shadow-2xl"
                  style={{ transform: "translateZ(70px)" }}
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/20 text-purple-400">
                      <Server className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">Freight & Fleet Engine</div>
                      <div className="text-[11px] text-slate-400">24/7 Live Dispatch</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ Interactive 3D Showcase (Portfolio) ============ */}
      <section id="portfolio" className="relative section-py border-t border-white/10 bg-slate-950/40">
        <div className="container relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow>Production Showcase</Eyebrow>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
              Systems & platforms <span className="text-gradient-cyan">we've engineered</span>.
            </h2>
            <p className="mt-4 text-base text-slate-400 sm:text-lg">
              Explore our full catalog of 21 live client platforms across ERP, logistics, retail POS, AI voice systems, and custom web applications.
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
                      ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-[0_0_20px_rgba(37,99,235,0.4)]"
                      : "border border-white/10 bg-slate-900/60 text-slate-400 hover:border-white/20 hover:text-white hover:bg-white/5 active:bg-white/10"
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
                className="w-full rounded-full border border-white/10 bg-slate-900/80 py-2.5 pl-9 pr-4 text-sm sm:text-xs font-medium text-white placeholder-slate-500 outline-none backdrop-blur-md transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white text-xs p-1"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* Results count */}
          <div className="mt-4 flex items-center justify-between text-xs text-slate-400">
            <span>Showing <span className="font-bold text-white">{filteredProjects.length}</span> of {projectsData.length} projects</span>
            {searchQuery && (
              <span>Filtered by "{searchQuery}"</span>
            )}
          </div>

          {/* 3D Tilt Project Cards Grid */}
          <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project) => (
              <Project3DCard key={project.id} project={project} />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-12 text-center backdrop-blur-xl">
              <p className="text-lg font-bold text-white">No matching projects found</p>
              <p className="mt-2 text-sm text-slate-400">Try adjusting your category filter or search keywords.</p>
              <Button
                onClick={() => {
                  setActiveCategory("All");
                  setSearchQuery("");
                }}
                className="mt-4 rounded-full bg-blue-600 px-6 text-white hover:bg-blue-700"
              >
                Reset Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* ============ Solutions / Capabilities ============ */}
      <section id="services" className="relative section-py border-t border-white/10">
        <div className="container relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow>Capabilities</Eyebrow>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
              End-to-end solutions for <span className="text-gradient-tech">exponential growth</span>.
            </h2>
            <p className="mt-4 text-base text-slate-400 sm:text-lg">
              We cover the full spectrum of software development—from custom web portals to automated business tools and high-converting marketing engines.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Code2,
                title: "Custom Web & SaaS Apps",
                desc: "High-performance web apps with modern React/Next.js architectures, scalable APIs, and seamless database architectures.",
                tags: ["React", "Node", "PostgreSQL", "Cloud"],
                color: "from-blue-500 to-indigo-600",
              },
              {
                icon: Smartphone,
                title: "POS & Retail Systems",
                desc: "Integrated point-of-sale platforms, inventory sync, multi-store support, and companion mobile apps for shop owners.",
                tags: ["POS", "Inventory", "Mobile", "Billing"],
                color: "from-cyan-500 to-blue-600",
              },
              {
                icon: Rocket,
                title: "Logistics & Fleet Dispatch",
                desc: "Real-time dispatch consoles, driver routing, live load boards, rate calculators, and carrier support operations.",
                tags: ["Dispatch", "Routing", "Fleet", "Live Ops"],
                color: "from-amber-500 to-rose-600",
              },
              {
                icon: MessageSquare,
                title: "AI Voice & Workflow Agents",
                desc: "Automated calling systems, AI voice agents, smart lead routing, and hands-free intake for busy service businesses.",
                tags: ["Voice AI", "LLM", "Automations", "APIs"],
                color: "from-purple-500 to-pink-600",
              },
              {
                icon: Layers,
                title: "Enterprise ERP & Portals",
                desc: "Unified platforms for schools, pharmacies, healthcare, and marketplaces with role-based access and reporting.",
                tags: ["Multi-tenant", "RBAC", "Reports", "Billing"],
                color: "from-emerald-500 to-teal-600",
              },
              {
                icon: TrendingUp,
                title: "Digital Growth & SEO",
                desc: "Technical SEO audits, high-intent landing pages, fast Core Web Vitals, and conversion rate optimization that drives revenue.",
                tags: ["SEO", "Conversion", "Analytics", "Growth"],
                color: "from-blue-600 to-cyan-500",
              },
            ].map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="glass-card group flex flex-col justify-between rounded-2xl border border-white/10 bg-slate-900/50 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-500/40"
                >
                  <div>
                    <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-tr ${service.color} text-white shadow-lg`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-6 text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-400">
                      {service.desc}
                    </p>
                  </div>
                  <div className="mt-6 flex flex-wrap gap-1.5 border-t border-white/5 pt-4">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1 font-mono text-[11px] text-slate-300"
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
      <section id="process" className="relative section-py border-t border-white/10 bg-slate-950/60">
        <div className="container relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow>Execution Pipeline</Eyebrow>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
              From whiteboard to <span className="text-gradient-cyan">bulletproof production</span>.
            </h2>
            <p className="mt-4 text-base text-slate-400 sm:text-lg">
              Our structured 4-phase agile engineering cycle ensures fast time-to-market without compromising code quality or scalability.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                num: "01",
                title: "Deep Discovery & Audit",
                desc: "We analyze your business workflows, define technical requirements, and architect the optimal software stack.",
                icon: Search,
              },
              {
                num: "02",
                title: "System Architecture & UI",
                desc: "Interactive high-fidelity prototypes, database schema modeling, and seamless user experience flows.",
                icon: Palette,
              },
              {
                num: "03",
                title: "Sprint Development",
                desc: "Rapid iterative engineering with automated testing, CI/CD pipelines, and weekly transparent milestone demos.",
                icon: Terminal,
              },
              {
                num: "04",
                title: "Zero-Downtime Launch & Ops",
                desc: "Global edge deployment, uptime telemetry, continuous optimization, and dedicated ongoing technical support.",
                icon: Shield,
              },
            ].map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.num}
                  className="glass-card relative rounded-2xl border border-white/10 bg-slate-900/60 p-7 backdrop-blur-xl"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-3xl font-black text-white/20">
                      {step.num}
                    </span>
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-500/30 bg-blue-500/10 text-cyan-400">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>
                  <h3 className="mt-6 text-lg font-bold text-white">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">{step.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ Reviews & Testimonials ============ */}
      <section id="testimonials" className="relative section-py border-t border-white/10">
        <div className="container relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow>Client Reviews</Eyebrow>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
              Trusted by operators <span className="text-gradient-tech">across the globe</span>.
            </h2>
            <p className="mt-4 text-base text-slate-400 sm:text-lg">
              Here is what founders, directors, and operations managers say about partnering with ShopTech Systems.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Sarah Johnson",
                role: "CEO, Tech Innovations",
                text: "ShopTech transformed our online architecture completely. The team is hyper-responsive, writes clean scalable code, and delivered ahead of deadline.",
                rating: 5,
              },
              {
                name: "Michael Chen",
                role: "Director, Retail & POS Operations",
                text: "The custom POS and cloud sync system was flawless. Our counter lines move 3x faster, inventory stays synchronized across 4 locations.",
                rating: 5,
              },
              {
                name: "Emily Rodriguez",
                role: "VP of Growth, Logistics Firm",
                text: "Their dispatch console and real-time load board gave our fleet team an unfair competitive advantage. Couldn't recommend them more.",
                rating: 5,
              },
              {
                name: "David Thompson",
                role: "Founder, Fintech Product",
                text: "Working with ShopTech was hands-down the best engineering decision we made. Clean code, beautiful dark glass design, and zero bugs in production.",
                rating: 5,
              },
              {
                name: "Jessica Lee",
                role: "Founder, Luxury Lifestyle Brand",
                text: "The website they built looks like a million dollars. Conversions doubled within 30 days of launch, and our customers love the booking flow.",
                rating: 5,
              },
              {
                name: "Robert Martinez",
                role: "Head of Operations, ERP Group",
                text: "Professional, reliable, and deeply knowledgeable in enterprise software systems. ShopTech is our long-term technology partner.",
                rating: 5,
              },
            ].map((t) => (
              <figure
                key={t.name}
                className="glass-card flex flex-col justify-between rounded-2xl border border-white/10 bg-slate-900/60 p-7 backdrop-blur-xl"
              >
                <div>
                  <div className="flex gap-1">
                    {[...Array(t.rating)].map((_, j) => (
                      <Star key={j} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <blockquote className="mt-4 text-sm leading-relaxed text-slate-300">
                    "{t.text}"
                  </blockquote>
                </div>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-white/5 pt-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-sm font-bold text-white shadow-md">
                    {t.name.split(" ").map(n => n[0]).join("")}
                  </span>
                  <div>
                    <div className="text-sm font-bold text-white">{t.name}</div>
                    <div className="text-xs text-slate-400">{t.role}</div>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FAQ Section ============ */}
      <section id="faq" className="relative section-py border-t border-white/10 bg-slate-950/50">
        <div className="container relative z-10">
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>Questions & Answers</Eyebrow>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Frequently asked questions
            </h2>
            <p className="mt-3 text-slate-400 text-sm sm:text-base">
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
                  a: "Yes. We handle end-to-end deployment on modern cloud platforms (Vercel, Netlify, AWS, Cloudflare) with automated SSL, CDN edge delivery, and 24/7 technical monitoring.",
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
                  className="rounded-xl border border-white/10 bg-slate-900/60 px-6 backdrop-blur-xl data-[state=open]:border-blue-500/40"
                >
                  <AccordionTrigger className="text-left text-base font-semibold text-white hover:text-cyan-400 py-4">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm leading-relaxed text-slate-400 pb-4">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* ============ Contact / Consultation CTA ============ */}
      <section id="contact" className="relative section-py border-t border-white/10">
        <div className="container relative z-10">
          <div className="mx-auto max-w-4xl rounded-3xl border border-blue-500/30 bg-gradient-to-b from-slate-900/90 to-slate-950/90 p-8 md:p-14 backdrop-blur-2xl shadow-[0_0_80px_rgba(37,99,235,0.2)]">
            <div className="grid items-center gap-10 md:grid-cols-12">
              <div className="md:col-span-7">
                <Eyebrow>Start Your Project</Eyebrow>
                <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                  Ready to engineer your <span className="text-gradient-cyan">next breakthrough</span>?
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-slate-400 sm:text-base">
                  Tell us about your project goals. We'll schedule a discovery session within 24 hours and map out an execution blueprint.
                </p>

                <div className="mt-8 space-y-3">
                  <div className="flex items-center gap-3 text-sm text-slate-300">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500/10 text-cyan-400">
                      <Mail className="h-4 w-4" />
                    </div>
                    <span>contact@shoptechsystems.online</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-300">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500/10 text-cyan-400">
                      <Clock className="h-4 w-4" />
                    </div>
                    <span>Guaranteed Response within 24 Hours</span>
                  </div>
                </div>
              </div>

              {/* Consultation Form */}
              <div className="md:col-span-5">
                <div className="rounded-2xl border border-white/10 bg-slate-950/80 p-6 shadow-2xl">
                  {contactSubmitted ? (
                    <div className="py-8 text-center">
                      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                        <Check className="h-6 w-6" />
                      </div>
                      <h4 className="mt-4 text-lg font-bold text-white">Consultation Requested!</h4>
                      <p className="mt-2 text-xs text-slate-400">
                        Our engineering lead will reach out to your email shortly.
                      </p>
                    </div>
                  ) : (
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        setContactSubmitted(true);
                      }}
                      className="space-y-3.5"
                    >
                      <div>
                        <label className="text-xs font-semibold text-slate-300">Your Name</label>
                        <input
                          required
                          type="text"
                          placeholder="Alex Morgan"
                          className="mt-1 min-h-[44px] w-full rounded-xl border border-white/10 bg-slate-900 px-3.5 py-2.5 text-sm sm:text-xs text-white placeholder-slate-500 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-semibold text-slate-300">Email Address</label>
                        <input
                          required
                          type="email"
                          placeholder="alex@company.com"
                          className="mt-1 min-h-[44px] w-full rounded-xl border border-white/10 bg-slate-900 px-3.5 py-2.5 text-sm sm:text-xs text-white placeholder-slate-500 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-semibold text-slate-300">Project Type</label>
                        <select className="mt-1 min-h-[44px] w-full rounded-xl border border-white/10 bg-slate-900 px-3.5 py-2.5 text-sm sm:text-xs text-white outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500">
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
      <footer className="border-t border-white/10 bg-slate-950 py-14">
        <div className="container">
          <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
            <Logo />

            <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
              {NAV_LINKS.map((l) => (
                <a key={l.href} href={l.href} className="hover:text-white transition-colors">
                  {l.label}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-2 text-xs text-slate-500">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              <span>All Systems Operational</span>
            </div>
          </div>

          <div className="mt-10 border-t border-white/5 pt-8 text-center text-xs text-slate-500">
            © {new Date().getFullYear()} ShopTech Systems. All rights reserved. Enterprise Business Software Solutions.
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-blue-500/40 bg-blue-600/90 text-white shadow-[0_0_20px_rgba(37,99,235,0.5)] backdrop-blur-md transition-all hover:scale-110 hover:bg-blue-600 cursor-pointer"
          aria-label="Scroll to top"
        >
          <ChevronUp className="h-5 w-5" />
        </button>
      )}
    </div>
  );
}
