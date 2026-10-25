// The supported UI languages. `ru` is the default. Kept apart from the
// dictionaries so client components can import the tiny language list without
// dragging every translation into their bundle.
export const LANGS = [
  { code: "ru", label: "Русский", short: "RU" },
  { code: "en", label: "English", short: "EN" },
  { code: "ua", label: "Українська", short: "UA" },
] as const;

export type Lang = (typeof LANGS)[number]["code"];

export const LOCALES: Lang[] = LANGS.map((l) => l.code);
export const DEFAULT_LANG: Lang = "ru";

export function isLang(v: string | undefined | null): v is Lang {
  return v === "ru" || v === "en" || v === "ua";
}

// A value that carries the site's languages (e.g. a title). Ukrainian (ua) is
// optional so existing ru+en content still type-checks and simply falls back to
// Russian until a Ukrainian version is added. Reading always falls back to the
// default language so nothing renders blank.
export type Localized<T = string> = { ru: T; en: T; ua?: T };

/** Languages a piece of content is actually written in. `ru` always is; a
 *  language whose text is missing would only show the Russian fallback, so it
 *  must not be offered to search engines as a translation of its own. */
export function langsOf(value: Localized<unknown>): Lang[] {
  return LOCALES.filter((l) => l === "ru" || value[l] != null);
}

export function pick<T>(value: Localized<T>, lang: Lang): T {
  // `.ru` is always present (required in Localized); ua may be absent and falls
  // back to it. Index with the literal so the fallback is typed as T, not T|undefined.
  return value[lang] ?? value.ru;
}
