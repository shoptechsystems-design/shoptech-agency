import SiteLayout from "@/components/SiteLayout";
import { usePageMeta } from "@/lib/seo";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  usePageMeta("Page not found | ShopTech Systems", "The page you are looking for does not exist.", { noindex: true });
  return (
    <SiteLayout>
      <section className="container">
        <div className="mx-auto max-w-xl py-16 text-center">
          <p className="font-mono text-sm font-semibold uppercase tracking-[0.16em] text-teal-700">404</p>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">Page not found</h1>
          <p className="mt-4 text-slate-600">
            Sorry, the page you are looking for does not exist. It may have been moved or removed.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href="/" className="btn-tech-glow inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold text-white">
              Back to home <ArrowRight className="h-4 w-4" />
            </a>
            <a href="/blog" className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50">
              Read our blog
            </a>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
