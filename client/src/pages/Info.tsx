import { ArrowRight, Mail } from "lucide-react";
import SiteLayout, { SUPPORT_EMAIL, usePageMeta } from "@/components/SiteLayout";
import { Eyebrow, WHATSAPP_LINK, WhatsAppIcon } from "./Home";

const UPDATED = "November 1, 2026";

function Page({ eyebrow, title, intro, children }: { eyebrow: string; title: string; intro?: string; children: React.ReactNode }) {
  return (
    <SiteLayout>
      <section className="container">
        <div className="mx-auto max-w-3xl">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-white sm:text-5xl">{title}</h1>
          {intro && <p className="mt-4 text-base text-slate-400 sm:text-lg">{intro}</p>}
          <div className="mt-10 space-y-5 text-[15px] leading-7 text-slate-300 [&_a]:text-cyan-400 [&_a:hover]:text-cyan-300 [&_h2]:pt-6 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-white [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6">
            {children}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

export function Privacy() {
  usePageMeta("Privacy Policy | ShopTech Systems", "How ShopTech Systems collects, uses and protects information when you visit shoptechsystems.online, including cookies and Google AdSense advertising.");
  return (
    <Page eyebrow="Legal" title="Privacy Policy" intro={`Last updated: ${UPDATED}`}>
      <p>
        ShopTech Systems ("we", "us") operates shoptechsystems.online. This policy explains what information we
        collect when you use this website, how we use it, and the choices you have.
      </p>

      <h2>Information we collect</h2>
      <ul>
        <li><strong>Information you send us.</strong> If you email us, message us on WhatsApp or request a consultation, we receive the details you choose to share, such as your name, email address, phone number and project description.</li>
        <li><strong>Usage data.</strong> Like most websites, our hosting provider and analytics or advertising partners may automatically receive technical data such as your IP address, browser type, device, pages viewed and referring page.</li>
        <li><strong>Cookies.</strong> Small files stored in your browser that help the site work and help our advertising partners serve and measure ads.</li>
      </ul>

      <h2>How we use information</h2>
      <ul>
        <li>To respond to enquiries and provide the services you ask for.</li>
        <li>To operate, secure and improve the website.</li>
        <li>To display advertising that helps fund the site.</li>
        <li>To meet legal obligations.</li>
      </ul>

      <h2>Advertising and Google AdSense</h2>
      <p>
        This site uses Google AdSense to display ads. Google and its partners use cookies, including the
        DoubleClick cookie, to serve ads based on your visits to this and other websites. Google's use of
        advertising cookies enables it and its partners to serve ads to you based on your browsing activity.
      </p>
      <p>
        You can opt out of personalised advertising by visiting{" "}
        <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer">Google Ads Settings</a>, or learn more
        about how Google uses data at{" "}
        <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener noreferrer">policies.google.com/technologies/partner-sites</a>.
        You can also control cookies through your browser settings.
      </p>

      <h2>Third-party services</h2>
      <p>
        The site loads fonts from Google Fonts and may link to third-party platforms such as Google Play,
        WhatsApp, LinkedIn, Facebook, Instagram, X and TikTok. These services have their own privacy policies,
        and we are not responsible for their practices.
      </p>

      <h2>Sharing of information</h2>
      <p>
        We do not sell your personal information. We share it only with service providers who help us run the
        site and our business, when required by law, or with your consent.
      </p>

      <h2>Data retention and security</h2>
      <p>
        We keep enquiry details only as long as needed to respond and to maintain a record of our business
        relationship. We use reasonable technical and organisational measures to protect information, but no
        method of transmission over the internet is completely secure.
      </p>

      <h2>Your rights</h2>
      <p>
        You may ask us to access, correct or delete the personal information we hold about you by emailing{" "}
        <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>.
      </p>

      <h2>Children's privacy</h2>
      <p>This website is not directed to children under 13, and we do not knowingly collect their personal information.</p>

      <h2>Changes to this policy</h2>
      <p>We may update this policy from time to time. The "last updated" date above shows when it was last revised.</p>

      <h2>Contact</h2>
      <p>Questions about this policy? Email <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>.</p>
    </Page>
  );
}

export function Terms() {
  usePageMeta("Terms of Service | ShopTech Systems", "The terms that apply when you use the ShopTech Systems website and our published apps.");
  return (
    <Page eyebrow="Legal" title="Terms of Service" intro={`Last updated: ${UPDATED}`}>
      <p>
        By accessing shoptechsystems.online you agree to these terms. If you do not agree, please do not use the
        website.
      </p>

      <h2>Use of the website</h2>
      <p>
        You may browse and use this website for lawful purposes. You agree not to misuse it, attempt to gain
        unauthorised access, interfere with its operation, or copy it in a way that infringes our rights.
      </p>

      <h2>Intellectual property</h2>
      <p>
        The content on this website, including text, design, logos, graphics and code, belongs to ShopTech
        Systems or its licensors and is protected by applicable intellectual property laws. Client project
        names and screenshots are shown for portfolio purposes and remain the property of their respective owners.
      </p>

      <h2>Services and quotes</h2>
      <p>
        Information on this site is general in nature and is not a binding offer. Specific services, prices,
        timelines and deliverables are agreed in a written proposal or contract between ShopTech Systems and the client.
      </p>

      <h2>Our apps</h2>
      <p>
        Apps we publish on Google Play are provided under the terms shown on their store listings. Please see
        each app's page and our <a href="/privacy">Privacy Policy</a> for details on data handling.
      </p>

      <h2>Advertising and external links</h2>
      <p>
        The website may display third-party advertising and link to external sites. We do not control or endorse
        those sites and are not responsible for their content or practices.
      </p>

      <h2>Disclaimer</h2>
      <p>
        The website and its content are provided "as is" without warranties of any kind. Articles on our blog
        are for general information and are not professional, legal or financial advice.
      </p>

      <h2>Limitation of liability</h2>
      <p>
        To the fullest extent permitted by law, ShopTech Systems is not liable for any indirect or consequential
        loss arising from your use of this website.
      </p>

      <h2>Changes</h2>
      <p>We may update these terms at any time. Continued use of the site after changes means you accept the updated terms.</p>

      <h2>Contact</h2>
      <p>Questions about these terms? Email <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>.</p>
    </Page>
  );
}

export function About() {
  usePageMeta("About Us | ShopTech Systems", "ShopTech Systems is a software agency building web platforms, mobile apps, ERPs and business automation for growing companies.");
  return (
    <Page
      eyebrow="About"
      title="About ShopTech Systems"
      intro="We design and build the software that businesses run on."
    >
      <p>
        ShopTech Systems is a software agency that builds web platforms, mobile apps, ERP and management
        systems, logistics and dispatch tools, e-commerce stores and AI-powered automation. Our portfolio spans
        school management, fleet dispatch, point-of-sale, pharmacy, booking and CRM platforms.
      </p>

      <h2>What we do</h2>
      <ul>
        <li><strong>Custom web platforms</strong> built for speed, reliability and real daily use.</li>
        <li><strong>Mobile apps</strong> for Android, including our own published apps on Google Play.</li>
        <li><strong>Business software</strong> such as ERPs, CRMs, inventory and invoicing systems.</li>
        <li><strong>E-commerce and automation</strong> that remove manual work and help stores sell more.</li>
      </ul>

      <h2>How we work</h2>
      <p>
        We start by understanding how your business actually operates, agree a clear scope and timeline, build
        in visible stages so you can review progress, and stay available after launch for support and improvements.
        You deal directly with the people building your product.
      </p>

      <h2>Our own products</h2>
      <p>
        Alongside client work we build and publish our own tools. You can see them in the Apps section of the{" "}
        <a href="/#apps">home page</a>.
      </p>

      <div className="pt-4">
        <a href="/contact" className="btn-tech-glow inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold text-white no-underline">
          Talk to us <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </Page>
  );
}

export function Contact() {
  usePageMeta("Contact Us | ShopTech Systems", "Get in touch with ShopTech Systems for a free consultation on your web, mobile or business software project.");
  return (
    <Page
      eyebrow="Contact"
      title="Contact us"
      intro="Tell us about your project and we will reply as soon as we can."
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <a
          href={`mailto:${SUPPORT_EMAIL}`}
          className="glass-card block rounded-2xl border border-white/10 bg-slate-900/50 p-6 no-underline backdrop-blur-xl transition-colors hover:border-blue-400/40"
        >
          <Mail className="h-5 w-5 text-cyan-400" />
          <p className="mt-3 text-sm font-bold text-white">Email</p>
          <p className="mt-1 break-all text-sm text-slate-400">{SUPPORT_EMAIL}</p>
        </a>
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="glass-card block rounded-2xl border border-white/10 bg-slate-900/50 p-6 no-underline backdrop-blur-xl transition-colors hover:border-emerald-400/40"
        >
          <WhatsAppIcon className="h-5 w-5 text-emerald-400" />
          <p className="mt-3 text-sm font-bold text-white">WhatsApp</p>
          <p className="mt-1 text-sm text-slate-400">+92 316 4091654</p>
        </a>
      </div>

      <p>
        Prefer a form? Use the consultation form on the <a href="/#contact">home page</a>. For app support
        questions, email us and mention the app name.
      </p>
    </Page>
  );
}
