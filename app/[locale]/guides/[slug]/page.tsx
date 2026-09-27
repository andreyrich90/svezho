import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight, Clock } from "lucide-react";
import AdSlot from "@/components/AdSlot";
import GuideCard from "@/components/GuideCard";
import RecipeCard from "@/components/RecipeCard";
import PopularLinks from "@/components/PopularLinks";
import { getDict } from "@/lib/i18n";
import { isLang, pick, LOCALES, type Lang } from "@/lib/langs";
import { href } from "@/lib/nav";
import { alternates, ogLocale, OG_FALLBACK } from "@/lib/seo";
import { articleJsonLd, breadcrumbJsonLd, faqJsonLd, jsonLdScript } from "@/lib/jsonld";
import { GUIDES, findGuide, readingMinutes } from "@/lib/guides";
import { getRecipes } from "@/lib/content";

// Ad unit for in-article placement (optional; renders nothing when unset).
const AD_SLOT_ARTICLE = process.env.NEXT_PUBLIC_ADSENSE_SLOT_ARTICLE || "";

export const revalidate = 300;
export const dynamicParams = false;

export function generateStaticParams() {
  return LOCALES.flatMap((locale) => GUIDES.map((g) => ({ locale, slug: g.slug })));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const lang: Lang = isLang(locale) ? locale : "ru";
  const g = findGuide(slug);
  if (!g) return { title: "404" };
  const title = pick(g.title, lang);
  const description = pick(g.summary, lang).slice(0, 160);
  return {
    title,
    description,
    alternates: alternates(`/guides/${g.slug}`, lang),
    openGraph: {
      type: "article",
      title,
      description,
      locale: ogLocale(lang),
      modifiedTime: g.updated,
      images: [g.image ?? OG_FALLBACK],
    },
  };
}

function formatDate(iso: string, lang: Lang) {
  const locale = lang === "en" ? "en-GB" : lang === "ua" ? "uk-UA" : "ru-RU";
  return new Date(iso).toLocaleDateString(locale, { day: "numeric", month: "long", year: "numeric" });
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const lang: Lang = isLang(locale) ? locale : "ru";
  const t = getDict(lang);
  const guide = findGuide(slug);
  if (!guide) notFound();

  const title = pick(guide.title, lang);
  const sections = pick(guide.sections, lang);
  const faq = guide.faq ? pick(guide.faq, lang) : [];
  const all = await getRecipes();
  const related = (guide.relatedRecipes ?? [])
    .map((s) => all.find((r) => r.slug === s))
    .filter((r): r is NonNullable<typeof r> => Boolean(r))
    .slice(0, 3);
  const more = GUIDES.filter((g) => g.slug !== guide.slug).slice(0, 3);
  // Put the ad roughly in the middle of the article.
  const adAfter = Math.max(1, Math.floor(sections.length / 2) - 1);

  const jsonLd: unknown[] = [
    articleJsonLd({
      lang,
      path: `/guides/${guide.slug}`,
      headline: title,
      description: pick(guide.summary, lang),
      updated: guide.updated,
      image: guide.image ?? OG_FALLBACK,
    }),
    breadcrumbJsonLd(lang, [
      { name: t["nav.home"], path: "/" },
      { name: t["guides.title"], path: "/guides" },
      { name: title, path: `/guides/${guide.slug}` },
    ]),
  ];
  if (faq.length) jsonLd.push(faqJsonLd(faq));

  return (
    <article className="mx-auto max-w-3xl px-5 py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdScript(jsonLd) }} />

      <nav aria-label="breadcrumb" className="flex flex-wrap items-center gap-1.5 text-sm text-muted">
        <Link href={href(lang, "/")} className="hover:text-ink">{t["nav.home"]}</Link>
        <ChevronRight size={14} />
        <Link href={href(lang, "/guides")} className="hover:text-ink">{t["guides.title"]}</Link>
      </nav>

      <header className="mt-5">
        {!guide.image && <div className="text-5xl">{guide.emoji}</div>}
        <h1 className="mt-3 font-display text-3xl font-bold leading-tight text-ink sm:text-[42px]">{title}</h1>
        <p className="mt-4 text-lg leading-relaxed text-ink/75">{pick(guide.summary, lang)}</p>
        <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm font-semibold text-muted">
          <span className="inline-flex items-center gap-1.5">
            <Clock size={15} /> {readingMinutes(guide, lang)} {t["guides.minRead"]}
          </span>
          <span>
            {t["guides.updated"]}: {formatDate(guide.updated, lang)}
          </span>
        </div>
      </header>

      {guide.image && (
        <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-xl2 bg-cream2 shadow-card">
          <Image
            src={guide.image}
            alt={title}
            fill
            priority
            sizes="(min-width: 768px) 720px, 100vw"
            className="object-cover"
          />
        </div>
      )}

      {/* Table of contents */}
      <nav aria-label={t["guides.toc"]} className="mt-8 rounded-xl2 border border-line bg-cream2/60 p-5">
        <div className="text-xs font-bold uppercase tracking-wider text-clay">{t["guides.toc"]}</div>
        <ol className="mt-3 space-y-1.5">
          {sections.map((s, i) => (
            <li key={i}>
              <a href={`#s-${i + 1}`} className="text-[15px] font-semibold text-ink/80 hover:text-clay">
                {i + 1}. {s.heading}
              </a>
            </li>
          ))}
          {faq.length > 0 && (
            <li>
              <a href="#faq" className="text-[15px] font-semibold text-ink/80 hover:text-clay">
                {sections.length + 1}. {t["guides.faq"]}
              </a>
            </li>
          )}
        </ol>
      </nav>

      <div className="mt-10 space-y-10">
        {sections.map((s, i) => (
          <section key={i} id={`s-${i + 1}`} className="scroll-mt-24">
            <h2 className="font-display text-2xl font-bold leading-snug text-basil sm:text-[28px]">{s.heading}</h2>
            <div className="mt-4 space-y-4">
              {s.paragraphs.map((p, j) => (
                <p key={j} className="text-[17px] leading-[1.75] text-ink/90">
                  {p}
                </p>
              ))}
            </div>
            {s.list && s.list.length > 0 && (
              <ul className="mt-4 space-y-2.5">
                {s.list.map((item, j) => (
                  <li key={j} className="flex gap-3 text-[16px] leading-relaxed text-ink/90">
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-clay" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}
            {s.tip && (
              <aside className="mt-5 rounded-xl2 border-l-4 border-honey bg-honey/15 px-5 py-4">
                <div className="text-xs font-extrabold uppercase tracking-wider text-clay">💡 {t["guides.tip"]}</div>
                <p className="mt-1.5 text-[16px] font-semibold leading-relaxed text-ink">{s.tip}</p>
              </aside>
            )}
            {i === adAfter && <AdSlot slot={AD_SLOT_ARTICLE} format="fluid" className="pt-4" />}
          </section>
        ))}
      </div>

      {faq.length > 0 && (
        <section id="faq" className="mt-12 scroll-mt-24">
          <h2 className="font-display text-2xl font-bold text-basil sm:text-[28px]">{t["guides.faq"]}</h2>
          <div className="mt-5 space-y-3">
            {faq.map((f, i) => (
              <details key={i} className="group rounded-xl2 border border-line bg-surface px-5 py-4 open:shadow-card">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-3 text-[16px] font-bold text-ink [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <span className="mt-0.5 shrink-0 text-clay transition group-open:rotate-45">＋</span>
                </summary>
                <p className="mt-3 text-[16px] leading-relaxed text-ink/85">{f.a}</p>
              </details>
            ))}
          </div>
        </section>
      )}

      {related.length > 0 && (
        <section className="mt-14 border-t border-line pt-8">
          <h2 className="font-display text-2xl font-bold text-basil">{t["guides.tryRecipes"]}</h2>
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((r) => (
              <RecipeCard key={r.id} recipe={r} />
            ))}
          </div>
        </section>
      )}

      {more.length > 0 && (
        <section className="mt-14 border-t border-line pt-8">
          <h2 className="font-display text-2xl font-bold text-basil">{t["guides.more"]}</h2>
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {more.map((g) => (
              <GuideCard key={g.slug} guide={g} lang={lang} />
            ))}
          </div>
        </section>
      )}

      <PopularLinks lang={lang} />
    </article>
  );
}
