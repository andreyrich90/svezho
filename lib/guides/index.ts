import { pick, type Lang } from "../langs";
import type { Guide } from "./types";
import { guide as klyar } from "./hrustyashchiy-klyar";
import { guide as kotlety } from "./sochnye-kotlety";
import { guide as kremy } from "./sekrety-kremov";
import { guide as biskvit } from "./pyshnyy-biskvit";
import { guide as myaso } from "./kak-zharit-myaso-i-kuricu";
import { guide as sousy } from "./sekrety-sousov";
import { guide as ris } from "./ris-grechka-pasta";
import { guide as yaica } from "./sekrety-yaic";
import { guide as specii } from "./specii-i-sol";
import { guide as bliny } from "./bliny-i-syrniki";
import { guide as testo } from "./drozhzhevoe-testo";
import { guide as hranenie } from "./hranenie-i-zamorozka";

export type { Guide, GuideSection, GuideFaq } from "./types";

// "Секреты кухни" — long-read articles, newest first. Add a new article by
// creating lib/guides/<slug>.ts and listing it here.
export const GUIDES: Guide[] = [
  bliny, yaica, testo, specii, ris, hranenie,
  klyar, kotlety, kremy, biskvit, myaso, sousy,
];

export function findGuide(slug: string): Guide | undefined {
  return GUIDES.find((g) => g.slug === slug);
}

/** Reading time in minutes (~180 words/min), from the localized text. */
export function readingMinutes(g: Guide, lang: Lang): number {
  const sections = pick(g.sections, lang);
  const faq = g.faq ? pick(g.faq, lang) : [];
  const text = [
    ...sections.flatMap((s) => [s.heading, ...s.paragraphs, ...(s.list ?? []), s.tip ?? ""]),
    ...faq.flatMap((f) => [f.q, f.a]),
  ].join(" ");
  const words = text.split(/\s+/).filter(Boolean).length;
  return Math.max(3, Math.round(words / 180));
}
