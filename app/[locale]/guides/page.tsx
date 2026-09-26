import type { Metadata } from "next";
import GuideCard from "@/components/GuideCard";
import PopularLinks from "@/components/PopularLinks";
import { getDict } from "@/lib/i18n";
import { isLang, pick, LOCALES, type Lang } from "@/lib/langs";
import { alternates } from "@/lib/seo";
import { itemListJsonLd, jsonLdScript } from "@/lib/jsonld";
import { SITE_URL, localePath } from "@/lib/seo";
import { GUIDES } from "@/lib/guides";

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const lang: Lang = isLang(locale) ? locale : "ru";
  const t = getDict(lang);
  return {
    title: t["guides.title"],
    description: t["guides.subtitle"],
    alternates: alternates("/guides", lang),
  };
}

export default async function GuidesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const lang: Lang = isLang(locale) ? locale : "ru";
  const t = getDict(lang);

  const list = {
    ...itemListJsonLd(lang, t["guides.title"], []),
    itemListElement: GUIDES.map((g, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${SITE_URL}${localePath(lang, `/guides/${g.slug}`)}`,
      name: pick(g.title, lang),
    })),
  };

  return (
    <div className="mx-auto max-w-content px-5 py-12 sm:px-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdScript(list) }} />
      <header className="max-w-3xl">
        <h1 className="font-display text-4xl font-semibold text-basil sm:text-5xl">🧑‍🍳 {t["guides.title"]}</h1>
        <p className="mt-4 text-lg leading-relaxed text-ink/80">{t["guides.subtitle"]}</p>
      </header>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {GUIDES.map((g) => (
          <GuideCard key={g.slug} guide={g} lang={lang} />
        ))}
      </div>

      <PopularLinks lang={lang} />
    </div>
  );
}
