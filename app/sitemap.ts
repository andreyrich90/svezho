import type { MetadataRoute } from "next";
import { LOCALES, type Lang } from "@/lib/langs";
import { SITE_URL, localePath, isRealPhoto, absUrl } from "@/lib/seo";
import { INGREDIENT_LANDINGS, recipesWithIngredient, MIN_LANDING_RECIPES } from "@/lib/landings";
import { COLLECTIONS } from "@/lib/collections";
import { RECIPE_CATEGORIES } from "@/lib/types";
import { getLifehacks, getRecipes } from "@/lib/content";
import { GUIDES } from "@/lib/guides";

// Re-generate at most every 30 min so new recipes enter the sitemap without a
// redeploy.
export const revalidate = 1800;

const HREFLANG: Record<Lang, string> = { ru: "ru", en: "en", ua: "uk" };

// Every URL is emitted once per locale, each carrying the full hreflang set so
// Google understands the ru/en/ua versions are the same page.
function entries(
  path: string,
  priority: number,
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"],
  opts: { lastModified?: Date; images?: string[] } = {}
): MetadataRoute.Sitemap {
  const languages: Record<string, string> = {};
  for (const l of LOCALES) languages[HREFLANG[l]] = `${SITE_URL}${localePath(l, path)}`;
  return LOCALES.map((l) => ({
    url: `${SITE_URL}${localePath(l, path)}`,
    lastModified: opts.lastModified ?? new Date(),
    changeFrequency,
    priority,
    alternates: { languages },
    // <image:image> entries — how Google Images discovers the recipe photos.
    ...(opts.images?.length ? { images: opts.images } : {}),
  }));
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [recipes, lifehacks] = await Promise.all([getRecipes(), getLifehacks()]);

  const staticPaths: [string, number, MetadataRoute.Sitemap[number]["changeFrequency"]][] = [
    ["", 1.0, "daily"],
    ["/recipes", 0.9, "daily"],
    ["/pp", 0.8, "weekly"],
    ["/collections", 0.8, "weekly"],
    ["/lifehacks", 0.7, "weekly"],
    ["/guides", 0.8, "weekly"],
    ["/about", 0.4, "monthly"],
    ["/contacts", 0.3, "yearly"],
    ["/privacy", 0.2, "yearly"],
  ];

  const out: MetadataRoute.Sitemap = [];
  for (const [p, prio, cf] of staticPaths) out.push(...entries(p, prio, cf));
  for (const cat of RECIPE_CATEGORIES) {
    if (recipes.filter((r) => r.category === cat).length >= MIN_LANDING_RECIPES)
      out.push(...entries(`/recipes/category/${cat}`, 0.8, "weekly"));
  }
  for (const l of INGREDIENT_LANDINGS) {
    if (recipesWithIngredient(recipes, l).length >= MIN_LANDING_RECIPES)
      out.push(...entries(`/recipes/ingredient/${l.slug}`, 0.8, "weekly"));
  }
  for (const c of COLLECTIONS) out.push(...entries(`/collections/${c.slug}`, 0.7, "weekly"));
  for (const r of recipes) {
    const images = [r.image, ...(r.gallery ?? [])].filter(isRealPhoto).map(absUrl);
    const created = r.createdAt ? new Date(r.createdAt) : undefined;
    out.push(
      ...entries(`/recipes/${r.slug}`, 0.9, "weekly", {
        lastModified: created && !isNaN(+created) ? created : undefined,
        images,
      })
    );
  }
  for (const g of GUIDES)
    out.push(...entries(`/guides/${g.slug}`, 0.8, "monthly", { lastModified: new Date(g.updated) }));
  for (const l of lifehacks) out.push(...entries(`/lifehacks/${l.slug}`, 0.6, "monthly"));

  return out;
}
