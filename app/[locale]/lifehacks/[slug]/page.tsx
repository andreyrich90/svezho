import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { getDict } from "@/lib/i18n";
import { isLang, pick, langsOf, LOCALES, type Lang } from "@/lib/langs";
import { href } from "@/lib/nav";
import { alternates, absUrl, isRealPhoto, ogLocale, OG_FALLBACK } from "@/lib/seo";
import { articleJsonLd, breadcrumbJsonLd, jsonLdScript } from "@/lib/jsonld";
import { getLifehack, getLifehacks } from "@/lib/content";

// Re-read from the database in the background at most every 30s (ISR),
// so new recipes added via SQL appear without a redeploy.
export const revalidate = 30;

export const dynamicParams = true;

export async function generateStaticParams() {
  const items = await getLifehacks();
  return LOCALES.flatMap((locale) => items.map((l) => ({ locale, slug: l.slug })));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const lang: Lang = isLang(locale) ? locale : "ru";
  const item = await getLifehack(slug);
  if (!item) return { title: "404" };
  const title = pick(item.title, lang);
  const description = pick(item.summary, lang);
  // Lifehack illustrations are SVG, which Facebook/Telegram/X cannot show as a
  // share card — fall back to the branded PNG until a real photo is attached.
  const image = isRealPhoto(item.image) ? absUrl(item.image) : OG_FALLBACK;
  return {
    title,
    description,
    alternates: alternates(`/lifehacks/${item.slug}`, lang, langsOf(item.body)),
    openGraph: {
      type: "article",
      title,
      description,
      images: [image],
      locale: ogLocale(lang),
    },
    twitter: { card: "summary_large_image", title, description, images: [image] },
  };
}

export default async function LifehackPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const lang: Lang = isLang(locale) ? locale : "ru";
  const t = getDict(lang);
  const item = await getLifehack(slug);
  if (!item) notFound();

  const title = pick(item.title, lang);
  const jsonLd = [
    articleJsonLd({
      lang,
      path: `/lifehacks/${item.slug}`,
      headline: title,
      description: pick(item.summary, lang),
      updated: item.createdAt,
      image: isRealPhoto(item.image) ? item.image : OG_FALLBACK,
    }),
    breadcrumbJsonLd(lang, [
      { name: t["nav.home"], path: "/" },
      { name: t["lifehacks.title"], path: "/lifehacks" },
      { name: title, path: `/lifehacks/${item.slug}` },
    ]),
  ];

  return (
    <article className="mx-auto max-w-3xl px-4 py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdScript(jsonLd) }} />
      <Link
        href={href(lang, "/lifehacks")}
        className="inline-flex items-center gap-1.5 text-sm font-semibold text-muted transition hover:text-ink"
      >
        <ArrowLeft size={16} /> {t["lifehack.back"]}
      </Link>

      <span className="mt-4 inline-block text-sm font-semibold uppercase tracking-wide text-honey">
        {t[`lcat.${item.category}`]}
      </span>
      <h1 className="mt-2 font-display text-4xl font-bold leading-tight text-ink sm:text-5xl">
        {pick(item.title, lang)}
      </h1>
      <p className="mt-3 text-lg text-muted">{pick(item.summary, lang)}</p>

      <div className="mt-6 overflow-hidden rounded-xl2 border border-line shadow-soft">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={item.image}
          alt={pick(item.title, lang)}
          className="aspect-[16/9] w-full object-cover"
        />
      </div>

      <div className="prose-recipe mt-8 space-y-5">
        {pick(item.body, lang).map((para, i) => (
          <div key={i} className="flex gap-4">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-honey/20 font-display font-bold text-honey">
              {i + 1}
            </span>
            <p className="pt-1 leading-relaxed text-ink">{para}</p>
          </div>
        ))}
      </div>
    </article>
  );
}
