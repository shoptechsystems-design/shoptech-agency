import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, CheckCircle, Code2, Zap, Shield, Users, TrendingUp, Smartphone, Search, Share2, BarChart3, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, ChevronUp, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-md" : "bg-transparent"}`}>
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <img src="/manus-storage/shoptech-logo_8c3ddd6b.png" alt="ShopTech Logo" className="h-8 w-8" />
            <span className="text-xl font-bold text-navy-900">ShopTech</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">Home</a>
            <a href="#about" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">About</a>
            <a href="#services" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">Services</a>
            <a href="#portfolio" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">Portfolio</a>
            <a href="#process" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">Process</a>
            <a href="#testimonials" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">Testimonials</a>
            <a href="#faq" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">FAQ</a>
            <a href="#contact" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">Get Consultation</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 bg-gradient-to-br from-white via-blue-50 to-purple-50">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h1 className="text-5xl md:text-6xl font-bold text-navy-900 mb-6 leading-tight">
                Empowering Businesses with Smart Digital Solutions
              </h1>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Transform your business with cutting-edge technology and innovative digital marketing strategies. We help startups, local businesses, and enterprises build a powerful online presence while increasing sales and operational efficiency.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg flex items-center gap-2">
                  Get Free Consultation <ArrowRight className="w-5 h-5" />
                </Button>
                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-6 text-lg">
                  View Services
                </Button>
              </div>
            </div>
            <div className="animate-slide-in-right">
              <img src="/manus-storage/shoptech-hero-visual_8388a640.png" alt="Digital Solutions" className="w-full rounded-lg shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-py bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">About ShopTech</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We are a team of experienced professionals dedicated to helping businesses establish and grow their digital presence through professional technology and marketing solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mb-16">
            {[
              { label: "Projects Completed", value: "500+" },
              { label: "Happy Clients", value: "300+" },
              { label: "Years of Experience", value: "8+" },
              { label: "Support Availability", value: "24/7" }
            ].map((stat, i) => (
              <div key={i} className="card-premium text-center hover-lift">
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="relative overflow-hidden rounded-2xl p-12 text-white bg-gradient-to-br from-blue-600 via-blue-700 to-navy-900 shadow-2xl">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full -mr-48 -mt-48"></div>
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full -ml-48 -mb-48"></div>
            </div>
            <div className="relative z-10">
              <div className="inline-block mb-6 bg-white/20 px-4 py-2 rounded-full">
                <span className="text-sm font-semibold text-white">WHY CHOOSE US</span>
              </div>
              <h3 className="text-4xl font-bold mb-10">Why Choose ShopTech?</h3>
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  { icon: "🚀", feature: "Experienced Team of Digital Experts" },
                  { icon: "💰", feature: "Affordable Pricing for All Business Sizes" },
                  { icon: "⚡", feature: "Fast Delivery Without Compromising Quality" },
                  { icon: "🔧", feature: "Modern, Scalable Solutions" },
                  { icon: "🔒", feature: "Secure & Reliable Systems" },
                  { icon: "🤝", feature: "Ongoing Support & Maintenance" }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 group">
                    <div className="text-3xl flex-shrink-0 group-hover:scale-125 transition-transform duration-300">{item.icon}</div>
                    <span className="text-lg font-medium leading-relaxed group-hover:text-blue-100 transition-colors">{item.feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-py bg-gradient-to-b from-white via-blue-50 to-white">
        <div className="container">
          <div className="text-center mb-20">
            <div className="inline-block mb-4">
              <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold">WHAT WE OFFER</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-navy-900 mb-6">Our Services</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto font-medium">
              Comprehensive digital solutions tailored to your business needs. From web design to digital marketing, we've got you covered.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Code2,
                title: "Website Design & Development",
                description: "Custom business websites, corporate sites, landing pages, and responsive design solutions tailored to your brand.",
                features: ["Business Websites", "Corporate Sites", "Landing Pages", "Custom Solutions", "Responsive Design"],
                gradient: "from-blue-500 to-blue-600"
              },
              {
                icon: Zap,
                title: "Website Management & Maintenance",
                description: "Keep your website running smoothly with regular updates, security monitoring, and performance optimization.",
                features: ["Regular Updates", "Security Backups", "Performance Monitoring", "Security Enhancements", "Speed Optimization"],
                gradient: "from-purple-500 to-purple-600"
              },
              {
                icon: BarChart3,
                title: "POS System Solutions",
                description: "Streamline your business operations with our comprehensive point-of-sale systems.",
                features: ["Billing System", "Inventory Management", "Sales Tracking", "Reports & Analytics", "Customer Management"],
                gradient: "from-indigo-500 to-indigo-600"
              },
              {
                icon: Search,
                title: "SEO Services",
                description: "Boost your online visibility and drive organic traffic with our comprehensive SEO strategies.",
                features: ["Technical SEO", "On-page SEO", "Keyword Research", "Local SEO", "Speed Optimization"],
                gradient: "from-blue-500 to-cyan-600"
              },
              {
                icon: Share2,
                title: "Social Media Marketing",
                description: "Build your brand presence and engage your audience across all major social platforms.",
                features: ["Facebook Marketing", "Instagram Marketing", "Brand Awareness", "Lead Generation", "Paid Campaigns"],
                gradient: "from-pink-500 to-rose-600"
              },
              {
                icon: Smartphone,
                title: "Digital Business Solutions",
                description: "Innovative technology solutions to transform your business operations and customer experience.",
                features: ["Custom Development", "API Integration", "Cloud Solutions", "Automation", "Consulting"],
                gradient: "from-emerald-500 to-teal-600"
              }
            ].map((service, i) => {
              const Icon = service.icon;
              return (
                <div key={i} className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white p-8 shadow-md transition-all duration-300 hover:shadow-2xl hover:border-blue-300">
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                  <div className={`w-14 h-14 bg-gradient-to-br ${service.gradient} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-navy-900 mb-3 group-hover:text-blue-600 transition-colors">{service.title}</h3>
                  <p className="text-gray-600 mb-5 leading-relaxed">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, j) => (
                      <li key={j} className="text-sm text-gray-700 flex items-center gap-2">
                        <div className={`w-2 h-2 bg-gradient-to-r ${service.gradient} rounded-full`}></div>
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

      {/* Process Section */}
      <section id="process" className="section-py bg-gradient-to-r from-navy-900 via-blue-800 to-blue-600 text-white">
        <div className="container">
          <div className="text-center mb-20">
            <div className="inline-block mb-4">
              <span className="bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold">OUR WORKFLOW</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">Our Process</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto font-medium">
              A proven methodology to deliver exceptional results, from consultation to ongoing support
            </p>
          </div>

          <div className="grid md:grid-cols-7 gap-4 items-center">
            {[
              { step: "1", title: "Consultation", icon: "💬", desc: "Understand your needs" },
              { step: "2", title: "Planning", icon: "📋", desc: "Strategic roadmap" },
              { step: "3", title: "Design", icon: "🎨", desc: "Creative vision" },
              { step: "4", title: "Development", icon: "💻", desc: "Expert execution" },
              { step: "5", title: "Testing", icon: "✓", desc: "Quality assurance" },
              { step: "6", title: "Launch", icon: "🚀", desc: "Go live" },
              { step: "7", title: "Support", icon: "🤝", desc: "Ongoing care" }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center group">
                <div className="w-24 h-24 bg-gradient-to-br from-white/40 to-white/20 backdrop-blur-xl rounded-full flex items-center justify-center text-4xl mb-4 group-hover:from-white/60 group-hover:to-white/40 transition-all duration-300 group-hover:scale-125 border-2 border-white/50 shadow-xl group-hover:shadow-2xl">
                  {item.icon}
                </div>
                <p className="text-sm font-bold text-center text-white mb-2 group-hover:text-blue-100 transition-colors">{item.title}</p>
                <p className="text-xs text-blue-100 text-center leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="section-py bg-gradient-to-b from-gray-50 to-white">
        <div className="container">
          <div className="text-center mb-20">
            <div className="inline-block mb-4">
              <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold">SHOWCASE</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-navy-900 mb-6">Our Portfolio</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto font-medium">
              Successful projects across diverse industries showcasing our expertise and creativity
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { category: "Business Website", title: "Tech Startup Portal", color: "from-blue-400 to-blue-600", icon: "🌐" },
              { category: "E-commerce Store", title: "Fashion Retail Platform", color: "from-pink-400 to-rose-600", icon: "🛍️" },
              { category: "Restaurant Website", title: "Fine Dining Showcase", color: "from-orange-400 to-red-600", icon: "🍽️" },
              { category: "Corporate Website", title: "Enterprise Solutions", color: "from-indigo-400 to-indigo-600", icon: "🏢" },
              { category: "POS Dashboard", title: "Retail Management System", color: "from-green-400 to-emerald-600", icon: "📊" },
              { category: "Business Website", title: "Professional Services", color: "from-purple-400 to-purple-600", icon: "💼" }
            ].map((project, i) => (
              <div key={i} className="group cursor-pointer">
                <div className={`relative overflow-hidden rounded-xl mb-4 h-72 bg-gradient-to-br ${project.color} flex items-center justify-center transition-all duration-300 hover:shadow-2xl`}>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                  <div className="text-center text-white relative z-10">
                    <div className="text-6xl mb-4 group-hover:scale-125 transition-transform duration-300">{project.icon}</div>
                    <p className="text-xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">{project.title}</p>
                  </div>
                </div>
                <p className="text-sm text-blue-600 font-bold mb-2 uppercase tracking-wide">{project.category}</p>
                <h3 className="text-lg font-bold text-navy-900 group-hover:text-blue-600 transition-colors">{project.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="section-py bg-gradient-to-b from-white to-blue-50">
        <div className="container">
          <div className="text-center mb-20">
            <div className="inline-block mb-4">
              <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold">SOCIAL PROOF</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-navy-900 mb-6">Client Testimonials</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto font-medium">
              Real success stories from businesses we've transformed
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Sarah Johnson", role: "CEO, Tech Innovations", text: "ShopTech transformed our online presence completely. Their team is professional, responsive, and delivers exceptional results.", rating: 5 },
              { name: "Michael Chen", role: "Owner, Local Retail Store", text: "The POS system implementation was seamless. Our operations are now more efficient, and we've seen a significant increase in sales.", rating: 5 },
              { name: "Emily Rodriguez", role: "Marketing Director", text: "Their SEO services have been game-changing for our business. We're now ranking on the first page for all our target keywords.", rating: 5 },
              { name: "David Thompson", role: "Founder, E-commerce Startup", text: "Working with ShopTech was the best decision for our business. They understood our vision and executed it perfectly.", rating: 5 },
              { name: "Jessica Lee", role: "Restaurant Owner", text: "The website they built for us is stunning and user-friendly. We've received so many compliments from our customers.", rating: 5 },
              { name: "Robert Martinez", role: "Corporate Manager", text: "Professional, reliable, and results-driven. ShopTech is our go-to partner for all digital solutions.", rating: 5 }
            ].map((testimonial, i) => (
              <div key={i} className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white p-8 shadow-md transition-all duration-300 hover:shadow-2xl hover:border-blue-300">
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-blue-600 to-purple-600 group-hover:w-2 transition-all duration-300"></div>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <span key={j} className="text-yellow-400 text-lg">★</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic leading-relaxed">"{testimonial.text}"</p>
                <div className="border-t border-gray-200 pt-4">
                  <p className="font-bold text-navy-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="section-py bg-white">
        <div className="container">
          <div className="text-center mb-20">
            <div className="inline-block mb-4">
              <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold">QUESTIONS</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-navy-900 mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto font-medium">
              Find answers to common questions about our services
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {[
                { q: "How long does it take to build a website?", a: "Typically, a custom website takes 4-8 weeks depending on complexity and requirements. We'll provide a detailed timeline during the consultation phase." },
                { q: "Do you provide ongoing maintenance?", a: "Yes! We offer comprehensive maintenance packages including updates, security monitoring, backups, and performance optimization." },
                { q: "Do you offer SEO services?", a: "Absolutely. Our SEO services include technical SEO, on-page optimization, keyword research, local SEO, and speed optimization to boost your rankings." },
                { q: "Can you redesign existing websites?", a: "Yes, we specialize in website redesigns. We can modernize your existing site while preserving your brand identity and improving performance." },
                { q: "What industries do you serve?", a: "We work with businesses across all industries - startups, retail, restaurants, e-commerce, corporate enterprises, and more." },
                { q: "What is your pricing model?", a: "We offer flexible pricing based on your specific needs. We provide customized quotes after understanding your requirements during the consultation." }
              ].map((item, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-b border-gray-200">
                  <AccordionTrigger className="text-lg font-semibold text-navy-900 hover:text-blue-600 py-4">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 pb-4">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-py bg-gradient-to-br from-navy-900 via-blue-800 to-blue-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full -mr-48 -mt-48"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full -ml-48 -mb-48"></div>
        </div>
        <div className="container relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div className="animate-slide-in-left">
              <div className="inline-block mb-6 bg-white/20 px-4 py-2 rounded-full hover:bg-white/30 transition-all duration-300">
                <span className="text-sm font-semibold text-white">LET'S CONNECT</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">Get In Touch</h2>
              <p className="text-xl text-blue-100 mb-10 leading-relaxed font-medium">
                Ready to transform your digital presence? Contact us today for a free consultation. Our team is ready to help you achieve your business goals.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4 group p-6 rounded-xl bg-white/15 border border-white/30 hover:bg-white/25 hover:border-white/50 transition-all duration-300 backdrop-blur-sm">
                  <div className="w-14 h-14 bg-gradient-to-br from-white/40 to-white/20 rounded-lg flex items-center justify-center group-hover:from-white/60 group-hover:to-white/40 transition-all duration-300 flex-shrink-0">
                    <Mail className="w-7 h-7" />
                  </div>
                  <div>
                    <p className="font-bold mb-2 text-lg text-white">Email</p>
                    <a href="mailto:shoptechsystems@gmail.com" className="text-blue-100 hover:text-white transition-colors text-base font-medium">
                      shoptechsystems@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4 group p-6 rounded-xl bg-white/15 border border-white/30 hover:bg-white/25 hover:border-white/50 transition-all duration-300 backdrop-blur-sm">
                  <div className="w-14 h-14 bg-gradient-to-br from-white/40 to-white/20 rounded-lg flex items-center justify-center group-hover:from-white/60 group-hover:to-white/40 transition-all duration-300 flex-shrink-0">
                    <Phone className="w-7 h-7" />
                  </div>
                  <div>
                    <p className="font-bold mb-2 text-lg text-white">Phone</p>
                    <p className="text-blue-100 text-base font-medium">Available 24/7 for your inquiries</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 group p-6 rounded-xl bg-white/15 border border-white/30 hover:bg-white/25 hover:border-white/50 transition-all duration-300 backdrop-blur-sm">
                  <div className="w-14 h-14 bg-gradient-to-br from-white/40 to-white/20 rounded-lg flex items-center justify-center group-hover:from-white/60 group-hover:to-white/40 transition-all duration-300 flex-shrink-0">
                    <MapPin className="w-7 h-7" />
                  </div>
                  <div>
                    <p className="font-bold mb-2 text-lg text-white">Service Area</p>
                    <p className="text-blue-100 text-base font-medium">Serving businesses worldwide</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 mt-12">
                <a href="#" className="w-14 h-14 bg-gradient-to-br from-white/40 to-white/20 hover:from-white/60 hover:to-white/40 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-125 border border-white/30 hover:border-white/50 shadow-lg">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="#" className="w-14 h-14 bg-gradient-to-br from-white/40 to-white/20 hover:from-white/60 hover:to-white/40 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-125 border border-white/30 hover:border-white/50 shadow-lg">
                  <Twitter className="w-6 h-6" />
                </a>
                <a href="#" className="w-14 h-14 bg-gradient-to-br from-white/40 to-white/20 hover:from-white/60 hover:to-white/40 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-125 border border-white/30 hover:border-white/50 shadow-lg">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="#" className="w-14 h-14 bg-gradient-to-br from-white/40 to-white/20 hover:from-white/60 hover:to-white/40 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-125 border border-white/30 hover:border-white/50 shadow-lg">
                  <Instagram className="w-6 h-6" />
                </a>
              </div>
            </div>

            <div className="animate-slide-in-right">
              <div className="bg-gradient-to-br from-white/30 via-white/20 to-white/10 backdrop-blur-2xl rounded-2xl p-12 border-2 border-white/50 shadow-2xl hover:border-white/70 transition-all duration-300">
                <h3 className="text-4xl font-bold mb-3 text-white">Send us a Message</h3>
                <p className="text-blue-100 mb-10 text-base font-medium">We'll get back to you within 24 hours</p>
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-white">Your Name</label>
                    <input type="text" placeholder="John Doe" className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/80 border border-white/40 transition-all duration-300 hover:bg-white/25 focus:bg-white/30" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-white">Your Email</label>
                    <input type="email" placeholder="john@example.com" className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/80 border border-white/40 transition-all duration-300 hover:bg-white/25 focus:bg-white/30" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-white">Your Phone</label>
                    <input type="tel" placeholder="+1 (555) 000-0000" className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/80 border border-white/40 transition-all duration-300 hover:bg-white/25 focus:bg-white/30" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-white">Select a Service</label>
                    <select className="w-full px-4 py-3 rounded-lg bg-white/20 text-white focus:outline-none focus:ring-2 focus:ring-white/80 border border-white/40 transition-all duration-300 hover:bg-white/25 focus:bg-white/30">
                      <option value="" className="text-gray-900">Select a Service</option>
                      <option value="web" className="text-gray-900">Website Design & Development</option>
                      <option value="maintenance" className="text-gray-900">Website Management</option>
                      <option value="pos" className="text-gray-900">POS System</option>
                      <option value="seo" className="text-gray-900">SEO Services</option>
                      <option value="social" className="text-gray-900">Social Media Marketing</option>
                      <option value="other" className="text-gray-900">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-white">Your Message</label>
                    <textarea placeholder="Tell us about your project..." rows={4} className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/80 border border-white/40 transition-all duration-300 hover:bg-white/25 focus:bg-white/30 resize-none"></textarea>
                  </div>
                  <Button className="w-full bg-white text-blue-600 hover:bg-blue-50 font-bold py-3 text-lg transition-all duration-300 hover:scale-105 shadow-lg">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy-900 text-white py-16">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img src="/manus-storage/shoptech-logo_8c3ddd6b.png" alt="ShopTech Logo" className="h-6 w-6" />
                <span className="text-lg font-bold">ShopTech</span>
              </div>
              <p className="text-gray-400 leading-relaxed">Empowering businesses with smart digital solutions. Your trusted partner for digital transformation.</p>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-lg">Quick Links</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
                <li><a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-lg">Services</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#services" className="hover:text-white transition-colors">Web Design</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">SEO</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Social Media</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">POS Systems</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-lg">Contact</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="mailto:shoptechsystems@gmail.com" className="hover:text-white transition-colors">shoptechsystems@gmail.com</a></li>
                <li>Available 24/7</li>
                <li className="text-sm">Serving businesses worldwide</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2026 ShopTech. All Rights Reserved.</p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 z-40"
        >
          <ChevronUp className="w-6 h-6" />
        </button>
      )}
    </div>
  );
}
