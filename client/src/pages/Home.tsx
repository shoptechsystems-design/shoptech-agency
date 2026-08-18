import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
  ArrowRight, ArrowUpRight, Check, Code2, Zap, Shield, Users, TrendingUp, Smartphone,
  Search, Share2, BarChart3, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram,
  ChevronUp, Sparkles, MessageSquare, ClipboardList, Palette, Rocket, Wrench, Menu, X, Star,
  Globe, ShoppingBag, UtensilsCrossed, Building2, LineChart, Briefcase, Clock, BadgeCheck, Gauge,
} from "lucide-react";
import { useState, useEffect } from "react";
import projects from "../data/projects.json";

/* ---------- Small building blocks ---------- */

function Logo({ dark = false, className = "" }: { dark?: boolean; className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <img src="/shoptech-mark.png" alt="ShopTech Systems logo" className="h-10 w-10" />
      <span className="flex flex-col leading-none">
        <span className={`text-lg font-bold tracking-tight ${dark ? "text-white" : "text-slate-900"}`}>
          Shop<span className="text-blue-500">Tech</span> Systems
        </span>
        <span className={`mt-0.5 text-[10px] font-semibold uppercase tracking-[0.18em] ${dark ? "text-slate-400" : "text-slate-400"}`}>
          Business Software Solutions
        </span>
      </span>
    </div>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="eyebrow">
      <span className="h-px w-6 bg-blue-600/60" />
      {children}
    </span>
  );
}

const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#process", label: "Process" },
  { href: "#testimonials", label: "Reviews" },
  { href: "#faq", label: "FAQ" },
];

/* ---------- Page ---------- */

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="min-h-screen bg-white text-slate-700 antialiased">
      {/* ============ Navigation ============ */}
      <nav
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled ? "border-b border-slate-200/80 bg-white/80 backdrop-blur-lg" : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="container flex items-center justify-between py-4">
          <a href="#home"><Logo /></a>

          <div className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900"
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <a href="#contact" className="text-sm font-semibold text-slate-700 hover:text-blue-600">Contact</a>
            <Button className="gap-1.5 rounded-full bg-blue-600 px-5 text-white shadow-lg shadow-blue-600/20 hover:bg-blue-700">
              Get Consultation <ArrowRight className="h-4 w-4" />
            </Button>
          </div>

          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-700 lg:hidden"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="border-t border-slate-200 bg-white lg:hidden">
            <div className="container flex flex-col py-4">
              {NAV_LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-100"
                >
                  {l.label}
                </a>
              ))}
              <Button
                onClick={() => setMenuOpen(false)}
                className="mt-3 w-full rounded-full bg-blue-600 text-white hover:bg-blue-700"
              >
                Get Free Consultation
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* ============ Hero ============ */}
      <section id="home" className="relative overflow-hidden bg-slate-50 pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="bg-grid absolute inset-0" />
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-blue-400/20 blur-3xl" />
        <div className="absolute top-40 -left-24 h-80 w-80 rounded-full bg-indigo-400/20 blur-3xl" />

        <div className="container relative">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div className="animate-fade-in-up">
              <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-700">
                <Sparkles className="h-4 w-4" /> Smart digital solutions for modern business
              </span>
              <h1 className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                Grow your business with{" "}
                <span className="text-gradient">technology that works</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
                We help startups, local businesses, and enterprises build a powerful online presence —
                combining custom web development, POS systems, and results-driven digital marketing.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button className="h-13 gap-2 rounded-full bg-blue-600 px-7 py-6 text-base text-white shadow-xl shadow-blue-600/25 hover:bg-blue-700">
                  Get Free Consultation <ArrowRight className="h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  className="h-13 rounded-full border-slate-300 bg-white px-7 py-6 text-base text-slate-800 hover:bg-slate-100"
                >
                  Explore Services
                </Button>
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
                {[
                  { value: "500+", label: "Projects delivered" },
                  { value: "300+", label: "Happy clients" },
                  { value: "8+", label: "Years experience" },
                ].map((s) => (
                  <div key={s.label}>
                    <div className="text-2xl font-bold text-slate-900">{s.value}</div>
                    <div className="text-sm text-slate-500">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dashboard mockup (no external assets) */}
            <div className="animate-slide-in-right">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-2xl shadow-slate-900/10">
                  <div className="mb-5 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600/10">
                        <LineChart className="h-4 w-4 text-blue-600" />
                      </span>
                      <div>
                        <div className="text-sm font-semibold text-slate-900">Business Overview</div>
                        <div className="text-xs text-slate-400">Last 30 days</div>
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-600">
                      <TrendingUp className="h-3 w-3" /> +32%
                    </span>
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { k: "Revenue", v: "$48.2k" },
                      { k: "Orders", v: "1,240" },
                      { k: "Visitors", v: "18.9k" },
                    ].map((m) => (
                      <div key={m.k} className="rounded-xl bg-slate-50 p-3">
                        <div className="text-xs text-slate-400">{m.k}</div>
                        <div className="mt-1 text-lg font-bold text-slate-900">{m.v}</div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 flex h-32 items-end gap-2 rounded-xl bg-slate-50 p-4">
                    {[40, 65, 45, 80, 55, 90, 70, 100, 85].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-t-md bg-gradient-to-t from-blue-600 to-indigo-500"
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>
                </div>

                <div className="absolute -bottom-5 -left-5 hidden rounded-xl border border-slate-200 bg-white p-3 shadow-xl sm:flex sm:items-center sm:gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/10">
                    <BadgeCheck className="h-5 w-5 text-emerald-500" />
                  </span>
                  <div>
                    <div className="text-sm font-semibold text-slate-900">Project launched</div>
                    <div className="text-xs text-slate-400">On time, every time</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ Trust strip ============ */}
      <section className="border-y border-slate-200 bg-white py-8">
        <div className="container">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {[
              { icon: Users, title: "Expert team", sub: "Certified specialists" },
              { icon: Gauge, title: "Fast delivery", sub: "Without cutting corners" },
              { icon: Shield, title: "Secure & reliable", sub: "Enterprise-grade systems" },
              { icon: Clock, title: "24/7 support", sub: "Always here to help" },
            ].map((f) => {
              const Icon = f.icon;
              return (
                <div key={f.title} className="flex items-center gap-3">
                  <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="text-sm font-semibold text-slate-900">{f.title}</div>
                    <div className="text-xs text-slate-500">{f.sub}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ Services ============ */}
      <section id="services" className="section-py bg-white">
        <div className="container">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <Eyebrow>What we offer</Eyebrow>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
              Everything you need to grow online
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              From web design to digital marketing, our services are built to move your business forward.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Code2, title: "Website Design & Development", description: "Custom business websites, corporate sites, and high-converting landing pages built to reflect your brand.", features: ["Business & corporate sites", "Landing pages", "Fully responsive design"] },
              { icon: Wrench, title: "Management & Maintenance", description: "Keep your website fast, secure, and up to date with proactive monitoring and regular updates.", features: ["Updates & backups", "Security monitoring", "Speed optimization"] },
              { icon: BarChart3, title: "POS System Solutions", description: "Streamline operations with a complete point-of-sale platform tailored to your workflow.", features: ["Billing & inventory", "Sales tracking", "Reports & analytics"] },
              { icon: Search, title: "SEO Services", description: "Climb the rankings and drive organic traffic with proven technical and on-page SEO.", features: ["Technical & on-page SEO", "Keyword research", "Local SEO"] },
              { icon: Share2, title: "Social Media Marketing", description: "Build your brand and generate leads across every major social platform.", features: ["Facebook & Instagram", "Brand awareness", "Paid campaigns"] },
              { icon: Smartphone, title: "Digital Business Solutions", description: "Custom software, integrations, and automation that transform how you operate.", features: ["Custom development", "API integration", "Cloud & automation"] },
            ].map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="group relative flex flex-col rounded-2xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-600/5"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-slate-900">{service.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{service.description}</p>
                  <ul className="mt-5 space-y-2.5 border-t border-slate-100 pt-5">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2.5 text-sm text-slate-700">
                        <Check className="h-4 w-4 flex-shrink-0 text-blue-600" strokeWidth={3} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ About / Why choose ============ */}
      <section id="about" className="section-py bg-slate-50">
        <div className="container">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div>
              <Eyebrow>Why ShopTech</Eyebrow>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
                A partner invested in your results
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-slate-600">
                We're a team of experienced designers, developers, and marketers dedicated to helping
                businesses establish and grow their digital presence — with solutions that scale as you do.
              </p>

              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                {[
                  { icon: Users, title: "Experienced team", desc: "Digital experts across design, dev & marketing" },
                  { icon: TrendingUp, title: "Affordable pricing", desc: "Plans that fit every business size" },
                  { icon: Zap, title: "Fast delivery", desc: "Quality work, shipped on schedule" },
                  { icon: Shield, title: "Secure & reliable", desc: "Modern, scalable, and maintained" },
                ].map((f) => {
                  const Icon = f.icon;
                  return (
                    <div key={f.title} className="flex gap-3.5">
                      <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-white text-blue-600 shadow-sm ring-1 ring-slate-200">
                        <Icon className="h-5 w-5" />
                      </span>
                      <div>
                        <div className="font-semibold text-slate-900">{f.title}</div>
                        <div className="mt-0.5 text-sm text-slate-500">{f.desc}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Stat panel */}
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-blue-900 to-blue-700 p-10 text-white shadow-2xl">
              <div className="bg-grid absolute inset-0 opacity-[0.15]" />
              <div className="relative">
                <h3 className="text-2xl font-bold text-white">Trusted by growing businesses</h3>
                <p className="mt-2 text-blue-100">Numbers that reflect real, measurable impact.</p>
                <div className="mt-8 grid grid-cols-2 gap-6">
                  {[
                    { value: "500+", label: "Projects completed" },
                    { value: "300+", label: "Happy clients" },
                    { value: "98%", label: "Client satisfaction" },
                    { value: "24/7", label: "Support availability" },
                  ].map((s) => (
                    <div key={s.label} className="rounded-2xl bg-white/10 p-5 ring-1 ring-white/15 backdrop-blur-sm">
                      <div className="text-3xl font-bold text-white">{s.value}</div>
                      <div className="mt-1 text-sm text-blue-100">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ Process ============ */}
      <section id="process" className="section-py bg-white">
        <div className="container">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <Eyebrow>How we work</Eyebrow>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
              A proven process, start to finish
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              A clear, collaborative methodology that takes you from first conversation to ongoing support.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-0 right-0 top-7 hidden h-px bg-slate-200 lg:block" />
            <div className="relative grid gap-8 sm:grid-cols-2 lg:grid-cols-6">
              {[
                { icon: MessageSquare, title: "Consultation", desc: "Understand your goals" },
                { icon: ClipboardList, title: "Planning", desc: "Strategic roadmap" },
                { icon: Palette, title: "Design", desc: "Craft the experience" },
                { icon: Code2, title: "Development", desc: "Expert execution" },
                { icon: Rocket, title: "Launch", desc: "Go live with confidence" },
                { icon: Wrench, title: "Support", desc: "Ongoing care" },
              ].map((step, i) => {
                const Icon = step.icon;
                return (
                  <div key={step.title} className="relative flex flex-col items-center text-center">
                    <span className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-200 bg-white text-blue-600 shadow-sm">
                      <Icon className="h-6 w-6" />
                      <span className="absolute -right-1.5 -top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">
                        {i + 1}
                      </span>
                    </span>
                    <h3 className="mt-4 text-base font-semibold text-slate-900">{step.title}</h3>
                    <p className="mt-1 text-sm text-slate-500">{step.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ============ Portfolio ============ */}
      <section id="portfolio" className="section-py bg-slate-50">
        <div className="container">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <Eyebrow>Showcase</Eyebrow>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
              Work we're proud of
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Successful projects across diverse industries, showcasing our range and craft.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <a
                key={project.id}
                href={project.link || "#"}
                target={project.link ? "_blank" : undefined}
                rel={project.link ? "noopener noreferrer" : undefined}
                className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative h-48 overflow-hidden bg-slate-200">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <span className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-white opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-blue-600">{project.category}</p>
                  <h3 className="mt-1.5 text-lg font-bold text-slate-900 transition-colors group-hover:text-blue-600">
                    {project.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm text-slate-600">{project.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="inline-block rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-600">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ============ Testimonials ============ */}
      <section id="testimonials" className="section-py bg-white">
        <div className="container">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <Eyebrow>Client stories</Eyebrow>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
              Loved by businesses like yours
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Real success stories from the businesses we've helped transform.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { name: "Sarah Johnson", role: "CEO, Tech Innovations", text: "ShopTech transformed our online presence completely. The team is professional, responsive, and delivers exceptional results.", rating: 5 },
              { name: "Michael Chen", role: "Owner, Local Retail Store", text: "The POS system implementation was seamless. Our operations are more efficient, and we've seen a real increase in sales.", rating: 5 },
              { name: "Emily Rodriguez", role: "Marketing Director", text: "Their SEO services have been game-changing. We now rank on the first page for all our target keywords.", rating: 5 },
              { name: "David Thompson", role: "Founder, E-commerce Startup", text: "Working with ShopTech was the best decision for our business. They understood our vision and executed perfectly.", rating: 5 },
              { name: "Jessica Lee", role: "Restaurant Owner", text: "The website they built is stunning and easy to use. We've received so many compliments from our customers.", rating: 5 },
              { name: "Robert Martinez", role: "Corporate Manager", text: "Professional, reliable, and results-driven. ShopTech is our go-to partner for all digital solutions.", rating: 5 },
            ].map((t) => (
              <figure
                key={t.name}
                className="flex flex-col rounded-2xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-600/5"
              >
                <div className="flex gap-0.5">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 text-slate-700">"{t.text}"</blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-5">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 text-sm font-bold text-white">
                    {t.name.split(" ").map((n) => n[0]).join("")}
                  </span>
                  <div>
                    <div className="font-semibold text-slate-900">{t.name}</div>
                    <div className="text-sm text-slate-500">{t.role}</div>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section id="faq" className="section-py bg-slate-50">
        <div className="container">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <Eyebrow>Questions</Eyebrow>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
              Frequently asked questions
            </h2>
            <p className="mt-4 text-lg text-slate-600">Everything you need to know before getting started.</p>
          </div>

          <div className="mx-auto max-w-3xl">
            <Accordion type="single" collapsible className="space-y-4">
              {[
                { q: "How long does it take to build a website?", a: "Typically a custom website takes 4–8 weeks depending on complexity and requirements. We'll provide a detailed timeline during the consultation phase." },
                { q: "Do you provide ongoing maintenance?", a: "Yes! We offer comprehensive maintenance packages including updates, security monitoring, backups, and performance optimization." },
                { q: "Do you offer SEO services?", a: "Absolutely. Our SEO services include technical SEO, on-page optimization, keyword research, local SEO, and speed optimization to boost your rankings." },
                { q: "Can you redesign existing websites?", a: "Yes, we specialize in website redesigns. We can modernize your existing site while preserving your brand identity and improving performance." },
                { q: "What industries do you serve?", a: "We work with businesses across all industries — startups, retail, restaurants, e-commerce, corporate enterprises, and more." },
                { q: "What is your pricing model?", a: "We offer flexible pricing based on your specific needs, with a customized quote after understanding your requirements during the consultation." },
              ].map((item, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="overflow-hidden rounded-2xl border border-slate-200 bg-white px-6 data-[state=open]:border-blue-200 data-[state=open]:shadow-sm"
                >
                  <AccordionTrigger className="py-5 text-left text-base font-semibold text-slate-900 hover:no-underline">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 text-slate-600">{item.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* ============ Contact ============ */}
      <section id="contact" className="section-py relative overflow-hidden bg-slate-900 text-white">
        <div className="absolute -top-24 right-0 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-indigo-600/20 blur-3xl" />

        <div className="container relative">
          <div className="grid gap-14 lg:grid-cols-2">
            <div>
              <span className="eyebrow text-blue-400">
                <span className="h-px w-6 bg-blue-400/60" /> Let's connect
              </span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
                Ready to grow your business?
              </h2>
              <p className="mt-4 max-w-lg text-lg leading-relaxed text-slate-300">
                Contact us today for a free consultation. Our team is ready to help you achieve your goals —
                we'll get back to you within 24 hours.
              </p>

              <div className="mt-10 space-y-4">
                {[
                  { icon: Mail, label: "Email", value: "shoptechsystems@gmail.com", href: "mailto:shoptechsystems@gmail.com" },
                  { icon: Phone, label: "Phone", value: "Available 24/7 for your inquiries" },
                  { icon: MapPin, label: "Service area", value: "Serving businesses worldwide" },
                ].map((c) => {
                  const Icon = c.icon;
                  return (
                    <div key={c.label} className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                      <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-blue-600/20 text-blue-300">
                        <Icon className="h-5 w-5" />
                      </span>
                      <div>
                        <div className="text-sm font-semibold text-white">{c.label}</div>
                        {c.href ? (
                          <a href={c.href} className="text-sm text-slate-300 hover:text-white">{c.value}</a>
                        ) : (
                          <div className="text-sm text-slate-300">{c.value}</div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-8 flex gap-3">
                {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition-all hover:border-white/20 hover:bg-white/10 hover:text-white"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-slate-900">Send us a message</h3>
              <p className="mt-1 text-sm text-slate-500">We'll get back to you within 24 hours.</p>
              <form className="mt-6 space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-slate-700">Your name</label>
                    <input type="text" placeholder="John Doe" className="field" />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-slate-700">Your email</label>
                    <input type="email" placeholder="john@example.com" className="field" />
                  </div>
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-slate-700">Your phone</label>
                  <input type="tel" placeholder="+1 (555) 000-0000" className="field" />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-slate-700">Service of interest</label>
                  <select className="field">
                    <option value="">Select a service</option>
                    <option value="web">Website Design & Development</option>
                    <option value="maintenance">Website Management</option>
                    <option value="pos">POS System</option>
                    <option value="seo">SEO Services</option>
                    <option value="social">Social Media Marketing</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-slate-700">Your message</label>
                  <textarea placeholder="Tell us about your project..." rows={4} className="field resize-none" />
                </div>
                <Button className="h-12 w-full gap-2 rounded-xl bg-blue-600 text-base font-semibold text-white hover:bg-blue-700">
                  Send Message <ArrowRight className="h-5 w-5" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ============ Footer ============ */}
      <footer className="border-t border-slate-800 bg-slate-950 py-16 text-slate-400">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <Logo dark />
              <p className="mt-4 max-w-xs leading-relaxed text-slate-400">
                Empowering businesses with smart digital solutions. Your trusted partner for digital transformation.
              </p>
              <div className="mt-6 flex gap-3">
                {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                  <a key={i} href="#" className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-slate-400 transition-colors hover:bg-white/10 hover:text-white">
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Company</h4>
              <ul className="mt-5 space-y-3 text-sm">
                {[["Home", "#home"], ["About", "#about"], ["Portfolio", "#portfolio"], ["Reviews", "#testimonials"]].map(([l, h]) => (
                  <li key={l}><a href={h} className="hover:text-white">{l}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Services</h4>
              <ul className="mt-5 space-y-3 text-sm">
                {["Web Design", "SEO", "Social Media", "POS Systems"].map((l) => (
                  <li key={l}><a href="#services" className="hover:text-white">{l}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Contact</h4>
              <ul className="mt-5 space-y-3 text-sm">
                <li><a href="mailto:shoptechsystems@gmail.com" className="hover:text-white">shoptechsystems@gmail.com</a></li>
                <li>Available 24/7</li>
                <li>Serving businesses worldwide</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-8 text-sm sm:flex-row">
            <p>&copy; 2026 ShopTech. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      {/* ============ Scroll to top ============ */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white shadow-xl shadow-blue-600/30 transition-all duration-300 hover:scale-110 hover:bg-blue-700"
          aria-label="Scroll to top"
        >
          <ChevronUp className="h-6 w-6" />
        </button>
      )}
    </div>
  );
}
