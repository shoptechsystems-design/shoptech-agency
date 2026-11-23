import { ArrowLeft, ArrowRight, Clock } from "lucide-react";
import { useRoute } from "wouter";
import SiteLayout, { usePageMeta } from "@/components/SiteLayout";
import { POSTS, formatDate, getPost } from "@/data/posts";
import NotFound from "./NotFound";
import { Eyebrow } from "./Home";
import { PostCover } from "@/components/PostCover";

export function BlogIndex() {
  usePageMeta(
    "Blog | ShopTech Systems",
    "Practical guides on custom software, ERP, e-commerce, mobile apps and automation for growing businesses."
  );
  return (
    <SiteLayout>
      <section className="container">
        <Eyebrow>Blog</Eyebrow>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-5xl">Insights &amp; guides</h1>
        <p className="mt-4 max-w-2xl text-base text-slate-600 sm:text-lg">
          Practical advice on software, apps and automation for business owners.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {POSTS.map((p, i) => (
            <a
              key={p.slug}
              href={`/blog/${p.slug}`}
              className="group flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white transition-shadow hover:shadow-lg"
            >
              <PostCover slug={p.slug} width={640} eager={i < 3} />
              <div className="flex flex-1 flex-col p-5">
                <span className="font-mono text-[11px] uppercase tracking-wider text-teal-700">{p.category}</span>
                <h2 className="mt-2 text-lg font-semibold leading-snug text-slate-900 text-balance">{p.title}</h2>
                <p className="mt-2 flex-1 text-sm leading-6 text-slate-600 line-clamp-3">{p.description}</p>
                <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
                  <span>{formatDate(p.date)} · {p.readMins} min read</span>
                  <span className="inline-flex items-center gap-1 font-semibold text-teal-700">
                    Read <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </div>
            </a>
          ))}
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
        <a href="/blog" className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 hover:text-slate-900">
          <ArrowLeft className="h-4 w-4" /> All articles
        </a>

        <header className="mt-6 max-w-4xl">
          <span className="font-mono text-[11px] uppercase tracking-wider text-teal-700">{post.category}</span>
          <h1 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-slate-900 text-balance sm:text-5xl">{post.title}</h1>
          <p className="mt-4 text-base text-slate-600 sm:text-lg">{post.description}</p>
          <p className="mt-4 flex items-center gap-2 text-xs text-slate-500">
            <Clock className="h-3.5 w-3.5" /> {formatDate(post.date)} · {post.readMins} min read · ShopTech Systems
          </p>
        </header>

        <PostCover
          slug={post.slug}
          width={1400}
          eager
          sizes="(min-width: 1320px) 1240px, 100vw"
          className="mt-8 rounded-2xl aspect-[21/9]!"
        />

        <div className="mt-12 grid gap-12 lg:grid-cols-12">
          <div className="space-y-5 text-[15px] leading-7 text-slate-700 sm:text-base sm:leading-8 lg:col-span-8">
            {post.sections.map((s, i) => (
              <section key={i} className="space-y-4">
                {s.h && <h2 className="pt-4 text-xl font-semibold text-slate-900 sm:text-2xl">{s.h}</h2>}
                {s.p?.map((t, j) => <p key={j}>{t}</p>)}
                {s.list && (
                  <ul className="list-disc space-y-2 pl-6">
                    {s.list.map((t, j) => <li key={j}>{t}</li>)}
                  </ul>
                )}
              </section>
            ))}
          </div>

          <aside className="space-y-6 lg:col-span-4">
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 lg:sticky lg:top-28">
              <h2 className="text-lg font-semibold text-slate-900">Have a project in mind?</h2>
              <p className="mt-2 text-sm text-slate-600">ShopTech Systems builds web platforms, mobile apps and business software.</p>
              <a href="/#contact" className="btn-tech-glow mt-5 inline-flex items-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold text-white">
                Get a free consultation <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </aside>
        </div>

        <div className="mt-16 border-t border-slate-200 pt-10">
          <h2 className="text-xl font-semibold text-slate-900">Keep reading</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <a key={p.slug} href={`/blog/${p.slug}`} className="group overflow-hidden rounded-xl border border-slate-200 bg-white transition-shadow hover:shadow-lg">
                <PostCover slug={p.slug} width={640} />
                <div className="p-5">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-teal-700">{p.category}</span>
                  <h3 className="mt-2 text-base font-semibold leading-snug text-slate-900">{p.title}</h3>
                </div>
              </a>
            ))}
          </div>
        </div>
      </article>
    </SiteLayout>
  );
}
