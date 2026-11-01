import { ArrowLeft, ArrowRight, Clock } from "lucide-react";
import { useRoute } from "wouter";
import SiteLayout, { usePageMeta } from "@/components/SiteLayout";
import { POSTS, formatDate, getPost } from "@/data/posts";
import NotFound from "./NotFound";
import { Eyebrow } from "./Home";

export function BlogIndex() {
  usePageMeta(
    "Blog | ShopTech Systems",
    "Practical guides on custom software, ERP, e-commerce, mobile apps and automation for growing businesses."
  );
  return (
    <SiteLayout>
      <section className="container">
        <div className="mx-auto max-w-5xl">
          <Eyebrow>Blog</Eyebrow>
          <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-white sm:text-5xl">Insights &amp; guides</h1>
          <p className="mt-4 max-w-2xl text-base text-slate-400 sm:text-lg">
            Practical advice on software, apps and automation for business owners.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {POSTS.map((p) => (
              <a
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="glass-card group flex flex-col rounded-2xl border border-white/10 bg-slate-900/50 p-6 backdrop-blur-xl transition-all hover:border-blue-400/40 hover:bg-slate-900/70"
              >
                <span className="font-mono text-[11px] uppercase tracking-wider text-cyan-400">{p.category}</span>
                <h2 className="mt-3 text-lg font-bold leading-snug text-white">{p.title}</h2>
                <p className="mt-2 flex-1 text-sm leading-6 text-slate-400">{p.description}</p>
                <div className="mt-5 flex items-center justify-between text-xs text-slate-500">
                  <span>{formatDate(p.date)} · {p.readMins} min read</span>
                  <span className="inline-flex items-center gap-1 font-semibold text-cyan-400 group-hover:text-cyan-300">
                    Read <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

export function BlogPost() {
  const [, params] = useRoute("/blog/:slug");
  const post = params ? getPost(params.slug) : undefined;

  usePageMeta(
    post ? `${post.title} | ShopTech Systems` : "Not found | ShopTech Systems",
    post ? post.description : ""
  );

  if (!post) return <NotFound />;

  const related = POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <SiteLayout>
      <article className="container">
        <div className="mx-auto max-w-3xl">
          <a href="/blog" className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-white">
            <ArrowLeft className="h-4 w-4" /> All articles
          </a>
          <div className="mt-6">
            <span className="font-mono text-[11px] uppercase tracking-wider text-cyan-400">{post.category}</span>
          </div>
          <h1 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl">{post.title}</h1>
          <p className="mt-4 flex items-center gap-2 text-xs text-slate-500">
            <Clock className="h-3.5 w-3.5" /> {formatDate(post.date)} · {post.readMins} min read · ShopTech Systems
          </p>

          <div className="mt-10 space-y-5 text-[15px] leading-7 text-slate-300 sm:text-base sm:leading-8">
            {post.sections.map((s, i) => (
              <section key={i} className="space-y-4">
                {s.h && <h2 className="pt-4 text-xl font-bold text-white sm:text-2xl">{s.h}</h2>}
                {s.p?.map((t, j) => <p key={j}>{t}</p>)}
                {s.list && (
                  <ul className="list-disc space-y-2 pl-6">
                    {s.list.map((t, j) => <li key={j}>{t}</li>)}
                  </ul>
                )}
              </section>
            ))}
          </div>

          <div className="mt-14 rounded-3xl border border-blue-500/25 bg-gradient-to-br from-blue-600/15 via-slate-900/60 to-cyan-500/10 p-8 text-center backdrop-blur-xl">
            <h2 className="text-xl font-extrabold text-white sm:text-2xl">Have a project in mind?</h2>
            <p className="mx-auto mt-2 max-w-md text-sm text-slate-400">
              ShopTech Systems builds web platforms, mobile apps and business software.
            </p>
            <a href="/#contact" className="btn-tech-glow mt-6 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold text-white">
              Get a Free Consultation <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-14">
            <h2 className="text-lg font-bold text-white">Keep reading</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-3">
              {related.map((p) => (
                <a key={p.slug} href={`/blog/${p.slug}`} className="rounded-2xl border border-white/10 bg-slate-900/50 p-4 text-sm font-semibold leading-snug text-slate-200 transition-colors hover:border-blue-400/40 hover:text-white">
                  {p.title}
                </a>
              ))}
            </div>
          </div>
        </div>
      </article>
    </SiteLayout>
  );
}
