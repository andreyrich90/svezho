import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight } from "lucide-react";
import RecipeExplorer from "@/components/RecipeExplorer";
import CategoryChips from "@/components/CategoryChips";
import PopularLinks from "@/components/PopularLinks";
import { getDict } from "@/lib/i18n";
import { isLang, pick, LOCALES, type Lang } from "@/lib/langs";
import { href } from "@/lib/nav";
import { alternates, ogLocale, OG_FALLBACK } from "@/lib/seo";
import { categoryLanding, MIN_LANDING_RECIPES } from "@/lib/landings";
import { breadcrumbJsonLd, itemListJsonLd, jsonLdScript } from "@/lib/jsonld";
import { RECIPE_CATEGORIES, type RecipeCategory } from "@/lib/types";
import { getRecipes } from "@/lib/content";

export const revalidate = 30;
export const dynamicParams = false;

function isCategory(v: string): v is RecipeCategory {
  return (RECIPE_CATEGORIES as string[]).includes(v);
}

export function generateStaticParams() {
  return LOCALES.flatMap((locale) =>
    RECIPE_CATEGORIES.map((cat) => ({ locale, cat }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; cat: string }>;
}): Promise<Metadata> {
  const { locale, cat } = await params;
  const lang: Lang = isLang(locale) ? locale : "ru";
  const t = getDict(lang);
  if (!isCategory(cat)) return { title: "404" };
  const landing = categoryLanding(cat);
  const h1 = landing ? pick(landing.h1, lang) : t[`cat.${cat}`];
  const title = `${h1} ${t["seo.withPhoto"]}`;
  const description = (landing ? pick(landing.intro, lang) : t["recipes.subtitle"]).slice(0, 158);
  const count = (await getRecipes()).filter((r) => r.category === cat).length;
  return {
    title,
    description,
    alternates: alternates(`/recipes/category/${cat}`, lang),
    robots: count < MIN_LANDING_RECIPES ? { index: false, follow: true } : undefined,
    openGraph: { title, description, locale: ogLocale(lang), images: [OG_FALLBACK] },
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ locale: string; cat: string }>;
}) {
  const { locale, cat } = await params;
  const lang: Lang = isLang(locale) ? locale : "ru";
  const t = getDict(lang);
  if (!isCategory(cat)) notFound();

  const all = await getRecipes();
  const inCat = all.filter((r) => r.category === cat);
  const landing = categoryLanding(cat);
  const name = landing ? pick(landing.h1, lang) : t[`cat.${cat}`];

  const jsonLd = [
    breadcrumbJsonLd(lang, [
      { name: t["nav.home"], path: "/" },
      { name: t["recipes.title"], path: "/recipes" },
      { name, path: `/recipes/category/${cat}` },
    ]),
    itemListJsonLd(lang, name, inCat.map((r) => r.slug)),
  ];

  return (
    <div className="mx-auto max-w-content px-5 py-12 sm:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdScript(jsonLd) }}
      />

      <nav aria-label="breadcrumb" className="flex flex-wrap items-center gap-1.5 text-sm text-muted">
        <Link href={href(lang, "/")} className="hover:text-ink">{t["nav.home"]}</Link>
        <ChevronRight size={14} />
        <Link href={href(lang, "/recipes")} className="hover:text-ink">{t["recipes.title"]}</Link>
        <ChevronRight size={14} />
        <span className="text-ink">{name}</span>
      </nav>

      <header className="mb-6 mt-4">
        <h1 className="font-display text-4xl font-semibold text-basil sm:text-5xl">
          {landing?.emoji} {name}
        </h1>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-ink/80">
          {landing ? pick(landing.intro, lang) : t["recipes.subtitle"]}
        </p>
      </header>

      <div className="mb-8">
        <CategoryChips />
      </div>

      {/* Reuse the explorer, pre-filtered to this category so search + PP toggle still work. */}
      <RecipeExplorer recipes={inCat} />

      <PopularLinks lang={lang} />
    </div>
  );
}
