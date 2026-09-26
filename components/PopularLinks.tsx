import Link from "next/link";
import { getDict } from "@/lib/i18n";
import { pick, type Lang } from "@/lib/langs";
import { href } from "@/lib/nav";
import { CATEGORY_LANDINGS, INGREDIENT_LANDINGS } from "@/lib/landings";
import { COLLECTIONS } from "@/lib/collections";

// Internal-linking block to the SEO landing pages (the Recepto counterpart of
// SeaJobs' PopularJobLinks). Every page that renders it passes link equity to
// the category / ingredient / collection landings and helps Google find and
// index them. Anchor texts are the landing H1s ("Рецепты с курицей"), i.e. the
// exact phrases people search for.
//
// Server component on purpose: the landing texts never ship to the browser.

// Ingredient landings shown as chips — the ones with enough recipes to be
// worth a link (thin ones stay reachable but unlinked).
const INGREDIENT_CHIPS = [
  "kuritsa", "krevetki", "farsh", "syr", "yaytsa", "kartofel",
  "ryba", "shokolad", "ovsyanka", "banan",
];

export default function PopularLinks({
  lang,
  variant = "section",
}: {
  lang: Lang;
  variant?: "section" | "footer";
}) {
  const t = getDict(lang);
  const ingredients = INGREDIENT_CHIPS
    .map((s) => INGREDIENT_LANDINGS.find((l) => l.slug === s))
    .filter((l): l is (typeof INGREDIENT_LANDINGS)[number] => Boolean(l));

  const groups = [
    {
      title: t["links.categories"],
      items: CATEGORY_LANDINGS.map((c) => ({
        key: c.cat,
        href: href(lang, `/recipes/category/${c.cat}`),
        label: pick(c.h1, lang),
      })),
    },
    {
      title: t["links.ingredients"],
      items: ingredients.map((l) => ({
        key: l.slug,
        href: href(lang, `/recipes/ingredient/${l.slug}`),
        label: pick(l.h1, lang),
      })),
    },
    {
      title: t["links.collections"],
      items: COLLECTIONS.map((c) => ({
        key: c.slug,
        href: href(lang, `/collections/${c.slug}`),
        label: pick(c.title, lang),
      })),
    },
  ];

  if (variant === "footer") {
    const chip =
      "rounded-full border border-cream/15 px-3 py-1 text-xs text-cream/70 transition hover:border-honey/60 hover:text-cream";
    return (
      <div className="mt-10 border-t border-cream/15 pt-8">
        {groups.map((g) => (
          <div key={g.title} className="mb-5 last:mb-0">
            <h4 className="mb-3 text-xs font-bold uppercase tracking-wider text-honey">{g.title}</h4>
            <div className="flex flex-wrap gap-2">
              {g.items.map((i) => (
                <Link key={i.key} href={i.href} className={chip}>
                  {i.label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }

  const chip =
    "rounded-full border border-line bg-surface px-3.5 py-1.5 text-sm font-semibold text-ink/80 transition hover:border-clay hover:text-clay";
  return (
    <section className="mt-14 rounded-xl2 border border-line bg-cream2/60 p-6">
      {groups.map((g) => (
        <div key={g.title} className="mb-6 last:mb-0">
          <h2 className="mb-3 font-display text-lg font-semibold text-basil">{g.title}</h2>
          <div className="flex flex-wrap gap-2">
            {g.items.map((i) => (
              <Link key={i.key} href={i.href} className={chip}>
                {i.label}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
