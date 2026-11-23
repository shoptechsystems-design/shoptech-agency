import type React from "react";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-teal-700 via-teal-600 to-teal-500 p-0.5 shadow-sm">
        <div className="flex h-full w-full items-center justify-center rounded-[10px] bg-slate-50">
          <img src="/shoptech-mark-96.webp" alt="ShopTech Systems logo" width={24} height={24} className="h-6 w-6 object-contain" />
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

