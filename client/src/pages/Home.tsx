import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, CheckCircle, Code2, Zap, Shield, Users, TrendingUp, Smartphone, Search, Share2, BarChart3, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, ChevronUp } from "lucide-react";
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

          <div className="bg-gradient-to-r from-navy-900 to-blue-600 rounded-lg p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Why Choose ShopTech?</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Experienced Team of Digital Experts",
                "Affordable Pricing for All Business Sizes",
                "Fast Delivery Without Compromising Quality",
                "Modern, Scalable Solutions",
                "Secure & Reliable Systems",
                "Ongoing Support & Maintenance"
              ].map((feature, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" />
                  <span className="text-lg">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-py bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">Our Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive digital solutions tailored to your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Code2,
                title: "Website Design & Development",
                description: "Custom business websites, corporate sites, landing pages, and responsive design solutions tailored to your brand.",
                features: ["Business Websites", "Corporate Sites", "Landing Pages", "Custom Solutions", "Responsive Design"]
              },
              {
                icon: Zap,
                title: "Website Management & Maintenance",
                description: "Keep your website running smoothly with regular updates, security monitoring, and performance optimization.",
                features: ["Regular Updates", "Security Backups", "Performance Monitoring", "Security Enhancements", "Speed Optimization"]
              },
              {
                icon: BarChart3,
                title: "POS System Solutions",
                description: "Streamline your business operations with our comprehensive point-of-sale systems.",
                features: ["Billing System", "Inventory Management", "Sales Tracking", "Reports & Analytics", "Customer Management"]
              },
              {
                icon: Search,
                title: "SEO Services",
                description: "Boost your online visibility and drive organic traffic with our comprehensive SEO strategies.",
                features: ["Technical SEO", "On-page SEO", "Keyword Research", "Local SEO", "Speed Optimization"]
              },
              {
                icon: Share2,
                title: "Social Media Marketing",
                description: "Build your brand presence and engage your audience across all major social platforms.",
                features: ["Facebook Marketing", "Instagram Marketing", "Brand Awareness", "Lead Generation", "Paid Campaigns"]
              },
              {
                icon: Smartphone,
                title: "Digital Business Solutions",
                description: "Innovative technology solutions to transform your business operations and customer experience.",
                features: ["Custom Development", "API Integration", "Cloud Solutions", "Automation", "Consulting"]
              }
            ].map((service, i) => {
              const Icon = service.icon;
              return (
                <div key={i} className="card-premium hover-lift group">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                    <Icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-navy-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, j) => (
                      <li key={j} className="text-sm text-gray-600 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
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
      <section id="process" className="section-py bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">Our Process</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A proven methodology to deliver exceptional results
            </p>
          </div>

          <div className="grid md:grid-cols-7 gap-4 items-center">
            {[
              { step: "1", title: "Consultation", icon: "💬" },
              { step: "2", title: "Planning", icon: "📋" },
              { step: "3", title: "Design", icon: "🎨" },
              { step: "4", title: "Development", icon: "💻" },
              { step: "5", title: "Testing", icon: "✓" },
              { step: "6", title: "Launch", icon: "🚀" },
              { step: "7", title: "Support", icon: "🤝" }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center text-white font-bold text-xl mb-3 hover-lift">
                  {item.icon}
                </div>
                <p className="text-sm font-medium text-center text-gray-700">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="section-py bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">Our Portfolio</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Showcase of our successful projects across various industries
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { category: "Business Website", title: "Tech Startup Portal", image: "Business Website" },
              { category: "E-commerce Store", title: "Fashion Retail Platform", image: "E-commerce Store" },
              { category: "Restaurant Website", title: "Fine Dining Showcase", image: "Restaurant Website" },
              { category: "Corporate Website", title: "Enterprise Solutions", image: "Corporate Website" },
              { category: "POS Dashboard", title: "Retail Management System", image: "POS Dashboard" },
              { category: "Business Website", title: "Professional Services", image: "Business Website" }
            ].map((project, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg mb-4 h-64 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center hover-lift">
                  <div className="text-center text-white">
                    <div className="text-4xl mb-2">🎨</div>
                    <p className="text-lg font-semibold">{project.image}</p>
                  </div>
                </div>
                <p className="text-sm text-blue-600 font-medium mb-1">{project.category}</p>
                <h3 className="text-lg font-bold text-navy-900 group-hover:text-blue-600 transition-colors">{project.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="section-py bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">Client Testimonials</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              What our satisfied clients have to say about working with ShopTech
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Sarah Johnson", role: "CEO, Tech Innovations", text: "ShopTech transformed our online presence completely. Their team is professional, responsive, and delivers exceptional results." },
              { name: "Michael Chen", role: "Owner, Local Retail Store", text: "The POS system implementation was seamless. Our operations are now more efficient, and we've seen a significant increase in sales." },
              { name: "Emily Rodriguez", role: "Marketing Director", text: "Their SEO services have been game-changing for our business. We're now ranking on the first page for all our target keywords." },
              { name: "David Thompson", role: "Founder, E-commerce Startup", text: "Working with ShopTech was the best decision for our business. They understood our vision and executed it perfectly." },
              { name: "Jessica Lee", role: "Restaurant Owner", text: "The website they built for us is stunning and user-friendly. We've received so many compliments from our customers." },
              { name: "Robert Martinez", role: "Corporate Manager", text: "Professional, reliable, and results-driven. ShopTech is our go-to partner for all digital solutions." }
            ].map((testimonial, i) => (
              <div key={i} className="card-premium hover-lift">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <span key={j} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <div className="border-t pt-4">
                  <p className="font-bold text-navy-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="section-py bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
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
                  <AccordionTrigger className="text-lg font-semibold text-navy-900 hover:text-blue-600">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-py bg-gradient-to-br from-navy-900 to-blue-600 text-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h2>
              <p className="text-lg text-blue-100 mb-8">
                Ready to transform your digital presence? Contact us today for a free consultation.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-1">Email</p>
                    <a href="mailto:shoptechsystems@gmail.com" className="text-blue-100 hover:text-white transition-colors">
                      shoptechsystems@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-1">Phone</p>
                    <p className="text-blue-100">Available 24/7</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-1">Service Area</p>
                    <p className="text-blue-100">Serving businesses worldwide</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 mt-8">
                <a href="#" className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-lg p-8">
              <form className="space-y-4">
                <input type="text" placeholder="Your Name" className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50" />
                <input type="email" placeholder="Your Email" className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50" />
                <input type="tel" placeholder="Your Phone" className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50" />
                <select className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50">
                  <option value="">Select a Service</option>
                  <option value="web">Website Design & Development</option>
                  <option value="maintenance">Website Management</option>
                  <option value="pos">POS System</option>
                  <option value="seo">SEO Services</option>
                  <option value="social">Social Media Marketing</option>
                  <option value="other">Other</option>
                </select>
                <textarea placeholder="Your Message" rows={4} className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"></textarea>
                <Button className="w-full bg-white text-blue-600 hover:bg-blue-50 font-semibold py-3">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy-900 text-white py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img src="/manus-storage/shoptech-logo_8c3ddd6b.png" alt="ShopTech Logo" className="h-6 w-6" />
                <span className="text-lg font-bold">ShopTech</span>
              </div>
              <p className="text-gray-400">Empowering businesses with smart digital solutions.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
                <li><a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#services" className="hover:text-white transition-colors">Web Design</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">SEO</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Social Media</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">POS Systems</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="mailto:shoptechsystems@gmail.com" className="hover:text-white transition-colors">shoptechsystems@gmail.com</a></li>
                <li>Available 24/7</li>
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
