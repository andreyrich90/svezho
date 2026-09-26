import type { Metadata } from "next";
import { DEFAULT_LANG, LOCALES, type Lang } from "./langs";

// The canonical production origin. Canonicals and hreflang must point at the
// real live domain, so this resolves in order:
//   1. NEXT_PUBLIC_SITE_URL  — set this once your custom domain is connected
//   2. VERCEL_PROJECT_PRODUCTION_URL — Vercel's stable production hostname
//   3. the current preview/prod vercel.app fallback
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "https://svezho.vercel.app")
).replace(/\/+$/, "");

// Branded 1200x630 share card, used when a page has no real photo of its own.
export const OG_FALLBACK = `${SITE_URL}/og.png`;

/** Absolute URL for an image path; site-relative paths get the origin. */
export function absUrl(src: string): string {
  return /^https?:\/\//.test(src) ? src : `${SITE_URL}${src.startsWith("/") ? "" : "/"}${src}`;
}

/** True for an uploaded photo (not one of the /img/recipes/*.svg placeholders). */
export function isRealPhoto(src?: string | null): src is string {
  return !!src && /^https?:\/\//.test(src) && !/\.svg(\?|$)/i.test(src);
}

// Our URL locale segment ("ua") vs. the BCP-47 code search engines expect ("uk").
const HREFLANG: Record<Lang, string> = { ru: "ru", en: "en", ua: "uk" };
const OG_LOCALE: Record<Lang, string> = { ru: "ru_RU", en: "en_US", ua: "uk_UA" };

export function ogLocale(lang: Lang): string {
  return OG_LOCALE[lang];
}

// Locale-prefixed path, e.g. localePath("ru", "/recipes") -> "/ru/recipes".
export function localePath(lang: Lang, path = ""): string {
  const clean = path && path !== "/" ? (path.startsWith("/") ? path : `/${path}`) : "";
  return `/${lang}${clean}`;
}

// Build canonical + hreflang alternates for a locale-agnostic path.
// `path` is without the locale prefix, e.g. "" (home), "/recipes",
// "/recipes/garlic-shrimp".
export function alternates(path: string, lang: Lang): NonNullable<Metadata["alternates"]> {
  const languages: Record<string, string> = {};
  for (const l of LOCALES) languages[HREFLANG[l]] = `${SITE_URL}${localePath(l, path)}`;
  languages["x-default"] = `${SITE_URL}${localePath(DEFAULT_LANG, path)}`;
  return {
    canonical: `${SITE_URL}${localePath(lang, path)}`,
    languages,
  };
}
