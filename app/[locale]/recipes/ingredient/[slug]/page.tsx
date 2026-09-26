import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight } from "lucide-react";
import RecipeCard from "@/components/RecipeCard";
import PopularLinks from "@/components/PopularLinks";
import { getDict } from "@/lib/i18n";
import { isLang, pick, LOCALES, type Lang } from "@/lib/langs";
import { href } from "@/lib/nav";
import { alternates, ogLocale, OG_FALLBACK } from "@/lib/seo";
import { breadcrumbJsonLd, itemListJsonLd, jsonLdScript } from "@/lib/jsonld";
import { INGREDIENT_LANDINGS, ingredientLanding, recipesWithIngredient, MIN_LANDING_RECIPES } from "@/lib/landings";
import { getRecipes } from "@/lib/content";

export const revalidate = 60;
export const dynamicParams = false;

export function generateStaticParams() {
  return LOCALES.flatMap((locale) => INGREDIENT_LANDINGS.map((l) => ({ locale, slug: l.slug })));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const lang: Lang = isLang(locale) ? locale : "ru";
  const t = getDict(lang);
  const l = ingredientLanding(slug);
  if (!l) return { title: "404" };
  const recipes = recipesWithIngredient(await getRecipes(), l);
  const title = `${pick(l.h1, lang)} ${t["seo.withPhoto"]}`;
  const description = pick(l.intro, lang).slice(0, 158);
  return {
    title,
    description,
    alternates: alternates(`/recipes/ingredient/${l.slug}`, lang),
    // Too few recipes = thin page: keep it reachable but out of the index.
    robots: recipes.length < MIN_LANDING_RECIPES ? { index: false, follow: true } : undefined,
    openGraph: { title, description, locale: ogLocale(lang), images: [recipes.find((r) => /^https?:/.test(r.image))?.image || OG_FALLBACK] },
  };
}

export default async function IngredientPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const lang: Lang = isLang(locale) ? locale : "ru";
  const t = getDict(lang);
  const landing = ingredientLanding(slug);
  if (!landing) notFound();

  const recipes = recipesWithIngredient(await getRecipes(), landing);
  const h1 = pick(landing.h1, lang);

  const jsonLd = [
    breadcrumbJsonLd(lang, [
      { name: t["nav.home"], path: "/" },
      { name: t["recipes.title"], path: "/recipes" },
      { name: h1, path: `/recipes/ingredient/${landing.slug}` },
    ]),
    itemListJsonLd(lang, h1, recipes.map((r) => r.slug)),
  ];

  return (
    <div className="mx-auto max-w-content px-5 py-12 sm:px-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdScript(jsonLd) }} />

      <nav aria-label="breadcrumb" className="flex flex-wrap items-center gap-1.5 text-sm text-muted">
        <Link href={href(lang, "/")} className="hover:text-ink">{t["nav.home"]}</Link>
        <ChevronRight size={14} />
        <Link href={href(lang, "/recipes")} className="hover:text-ink">{t["recipes.title"]}</Link>
        <ChevronRight size={14} />
        <span className="text-ink">{h1}</span>
      </nav>

      <header className="mt-4 max-w-3xl">
        <h1 className="font-display text-4xl font-semibold text-basil sm:text-5xl">
          {landing.emoji} {h1}
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-ink/80">{pick(landing.intro, lang)}</p>
        <p className="mt-2 text-sm font-semibold text-clay">
          {t["recipes.count"]} {recipes.length}
        </p>
      </header>

      <div className="mt-9 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {recipes.map((r) => (
          <RecipeCard key={r.id} recipe={r} />
        ))}
      </div>

      <PopularLinks lang={lang} />
    </div>
  );
}
