import Link from "next/link";
import { ArrowRight } from "lucide-react";
import RecipeCard from "@/components/RecipeCard";
import CategoryChips from "@/components/CategoryChips";
import CollectionCard from "@/components/CollectionCard";
import HeroSearch from "@/components/HeroSearch";
import RotatingGuides from "@/components/RotatingGuides";
import { GUIDES, readingMinutes } from "@/lib/guides";
import LifehacksStrip from "@/components/LifehacksStrip";
import MealPlanBanner from "@/components/MealPlanBanner";
import { getDict } from "@/lib/i18n";
import { isLang, pick, type Lang } from "@/lib/langs";
import { href } from "@/lib/nav";
import { COLLECTIONS } from "@/lib/collections";
import { isRealPhoto } from "@/lib/seo";
import { getCollectionCovers, getLifehacks, getPpRecipes, getRecipes } from "@/lib/content";

// Re-read from the database in the background at most every 30s (ISR),
// so new recipes added via SQL appear without a redeploy.
export const revalidate = 30;

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const lang: Lang = isLang(locale) ? locale : "ru";
  const t = getDict(lang);

  const [recipes, pp, lifehacks, covers] = await Promise.all([
    getRecipes(),
    getPpRecipes(),
    getLifehacks(),
    getCollectionCovers(),
  ]);

  const featured = recipes.slice(0, 6);
  // Hero shows real food photos: recipes that have one come first, and the
  // category placeholders are used only while no recipe has a photo yet.
  const withPhoto = recipes.filter((r) => isRealPhoto(r.image));
  const heroImgs = (withPhoto.length >= 2 ? withPhoto : recipes).slice(0, 2);

  const bySlug = new Map(recipes.map((r) => [r.slug, r]));
  const collectionCards = COLLECTIONS.map((c) => {
    const items = c.recipeSlugs.map((s) => bySlug.get(s)).filter(Boolean);
    return {
      c,
      cover: covers[c.slug] || (items[0] as any)?.image || "/img/recipes/snack.svg",
      count: items.length,
    };
  });

  return (
    <>
      {/* Hero */}
      <section className="hero-surface border-b border-line">
        <div className="mx-auto grid max-w-content items-center gap-14 px-5 py-16 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:py-20">
          <div>
            <span className="rise inline-flex items-center gap-2 rounded-full bg-clay/10 px-3.5 py-1.5 text-[13px] font-bold uppercase tracking-wide text-clay">
              <span className="text-leaf">●</span> {t["home.eyebrow"]}
            </span>
            <h1 className="rise mt-5 font-display text-[clamp(40px,5.5vw,62px)] font-semibold leading-[1.03] tracking-tight text-basil">
              {t["home.hero.line1"]}
              <br />
              {t["home.hero.line2pre"]}
              <em className="font-medium italic text-clay">
                {t["home.hero.accent"]}
              </em>
              .
            </h1>
            <p className="rise rise-1 mt-5 max-w-lg text-[17px] leading-relaxed text-ink/72">
              {t["home.hero.subtitle"]}
            </p>
            <div className="rise rise-2 mt-8 flex flex-wrap gap-3.5">
              <Link
                href={href(lang, "/recipes")}
                className="inline-flex items-center gap-2 rounded-full bg-clay px-6 py-3.5 font-bold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-clay2"
              >
                {t["home.hero.cta"]} <ArrowRight size={18} />
              </Link>
              <Link
                href={href(lang, "/pp")}
                className="inline-flex items-center gap-2 rounded-full border-[1.5px] border-basil px-6 py-3.5 font-bold text-basil transition hover:-translate-y-0.5 hover:bg-basil hover:text-cream"
              >
                🌱 {t["home.hero.cta2"]}
              </Link>
            </div>

            <HeroSearch />

            <div className="rise rise-3 mt-10 grid grid-cols-2 gap-x-8 gap-y-5 sm:flex sm:flex-wrap">
              <Stat href={href(lang, "/recipes")} value={`${recipes.length}`} label={t["home.stats.recipes"]} />
              <Stat href={href(lang, "/pp")} value={`${pp.length}`} label={t["home.stats.pp"]} />
              <Stat href={href(lang, "/guides")} value={`${GUIDES.length}`} label={t["home.stats.guides"]} />
              <Stat href={href(lang, "/lifehacks")} value={`${lifehacks.length}`} label={t["home.stats.lifehacks"]} />
            </div>

            {/* Hero image on mobile (the side visual is desktop-only). */}
            {heroImgs[0] && (
              <div className="rise rise-2 mt-9 overflow-hidden rounded-[24px] border-[5px] border-cream shadow-soft lg:hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={heroImgs[0].image} alt="" className="h-56 w-full object-cover sm:h-72" />
              </div>
            )}
          </div>

          {/* Hero visual */}
          <div className="relative hidden h-[500px] lg:block">
            <div className="floaty absolute -left-4 -top-4 z-30 flex h-24 w-24 rotate-[-8deg] items-center justify-center rounded-full bg-honey text-center text-[13px] font-extrabold leading-tight text-basil shadow-soft">
              {t["home.hero.badge"]}
            </div>
            {heroImgs[0] && (
              <div className="absolute right-0 top-0 z-20 h-[380px] w-[78%] overflow-hidden rounded-[28px] border-[6px] border-cream shadow-soft">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={heroImgs[0].image} alt="" className="h-full w-full object-cover" />
              </div>
            )}
            {heroImgs[1] && (
              <div className="absolute bottom-0 left-0 z-20 h-[230px] w-[52%] overflow-hidden rounded-[28px] border-[6px] border-cream shadow-soft">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={heroImgs[1].image} alt="" className="h-full w-full object-cover" />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Category chips */}
      <div className="mx-auto max-w-content px-5 pt-12 sm:px-8">
        <CategoryChips />
      </div>

      {/* Popular recipes */}
      <section className="mx-auto max-w-content px-5 py-16 sm:px-8">
        <SectionHead
          title={t["home.popular.title"]}
          subtitle={t["home.popular.subtitle"]}
          ctaLabel={t["home.popular.cta"]}
          ctaHref={href(lang, "/recipes")}
        />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((r) => (
            <RecipeCard key={r.id} recipe={r} />
          ))}
        </div>
      </section>

      {/* Collections */}
      {collectionCards.length > 0 && (
        <section className="mx-auto max-w-content px-5 pb-4 sm:px-8">
          <SectionHead
            title={t["home.collections.title"]}
            subtitle={t["home.collections.subtitle"]}
            ctaLabel={t["home.collections.cta"]}
            ctaHref={href(lang, "/collections")}
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {collectionCards.map(({ c, cover, count }) => (
              <CollectionCard
                key={c.slug}
                slug={c.slug}
                emoji={c.emoji}
                title={c.title}
                description={c.description}
                cover={cover}
                count={count}
              />
            ))}
          </div>
        </section>
      )}

      {/* Kitchen secrets (long reads) */}
      <section className="mx-auto max-w-content px-5 pb-4 pt-12 sm:px-8">
        <SectionHead
          title={t["guides.title"]}
          subtitle={t["guides.subtitle"]}
          ctaLabel={t["guides.back"]}
          ctaHref={href(lang, "/guides")}
        />
        <RotatingGuides
          guides={GUIDES.map((g) => ({
            slug: g.slug,
            emoji: g.emoji,
            image: g.image,
            title: pick(g.title, lang),
            summary: pick(g.summary, lang),
            minutes: readingMinutes(g, lang),
          }))}
        />
      </section>

      {/* Lifehacks band */}
      <LifehacksStrip items={lifehacks} />

      {/* Meal plan */}
      <MealPlanBanner />
    </>
  );
}

function Stat({ href, value, label }: { href: string; value: string; label: string }) {
  return (
    <Link href={href} className="group block">
      <div className="font-display text-3xl font-semibold text-basil transition group-hover:text-clay">{value}</div>
      <div className="mt-0.5 inline-flex items-center gap-1 text-[12.5px] font-semibold text-muted underline decoration-line decoration-2 underline-offset-4 transition group-hover:text-clay group-hover:decoration-clay">
        {label}
        <ArrowRight size={12} className="transition group-hover:translate-x-0.5" />
      </div>
    </Link>
  );
}

function SectionHead({
  title,
  subtitle,
  ctaLabel,
  ctaHref,
}: {
  title: string;
  subtitle?: string;
  ctaLabel: string;
  ctaHref: string;
}) {
  return (
    <div className="mb-9 flex flex-wrap items-end justify-between gap-3">
      <div>
        <h2 className="font-display text-3xl font-semibold text-basil sm:text-[34px]">{title}</h2>
        {subtitle && <p className="mt-2 text-muted">{subtitle}</p>}
      </div>
      <Link
        href={ctaHref}
        className="inline-flex items-center gap-1.5 font-bold text-clay hover:underline"
      >
        {ctaLabel} <ArrowRight size={16} />
      </Link>
    </div>
  );
}
