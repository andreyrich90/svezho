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
import { guide as pelmeni } from "./pelmeni-i-vareniki";
import { guide as supy } from "./supy-i-bulony";
import { guide as ryba } from "./ryba-i-moreprodukty";
import { guide as zapravki } from "./zapravki-i-marinady";
import { guide as spasti } from "./kak-spasti-blyudo";
import { guide as pesochnoe } from "./pesochnoe-i-zavarnoe-testo";
import { guide as shokolad } from "./sekrety-shokolada";
import { guide as pizza } from "./testo-dlya-piccy";
import { guide as kartofel } from "./sekrety-kartofelya";
import { guide as tushenie } from "./tushenie-i-zapekanie";
import { guide as nozhi } from "./nozhi-i-narezka";
import { guide as zagotovki } from "./domashnie-zagotovki";
import { guide as kofe } from "./kofe-i-chay";
import { guide as keksy } from "./keksy-i-maffiny";
import { guide as pirozhki } from "./testo-dlya-pirozhkov";
import { guide as gril } from "./gril-i-mangal";
import { guide as pasta } from "./sousy-k-paste";
import { guide as hleb } from "./hleb-na-zakvaske";
import { guide as bezYaic } from "./vypechka-bez-yaic-i-glyutena";
import { guide as kashi } from "./kashi-na-zavtrak";
import { guide as menyu } from "./menyu-na-nedelyu";
import { guide as sloenoe } from "./sloenoe-i-shtrudelnoe-testo";
import { guide as vok } from "./vok-i-aziatskie-sousy";
import { guide as ovoshchi } from "./kak-gotovit-ovoshchi";
import { guide as deserty } from "./deserty-bez-vypechki";
import { guide as farsh } from "./blyuda-iz-farsha";
import { guide as napitki } from "./domashnie-napitki";
import { guide as frityur } from "./zharka-vo-frityure";
import { guide as sousyMyaso } from "./sousy-k-myasu";
import { guide as prazdnik } from "./prazdnichnyy-stol";

export type { Guide, GuideSection, GuideFaq } from "./types";

// "Секреты кухни" — long-read articles, newest first. Add a new article by
// creating lib/guides/<slug>.ts and listing it here.
export const GUIDES: Guide[] = [
  prazdnik, farsh, deserty, sousyMyaso, napitki, frityur,
  vok, ovoshchi, kashi, menyu, sloenoe, bezYaic,
  pasta, gril, pirozhki, keksy, kofe, hleb,
  pizza, kartofel, shokolad, tushenie, nozhi, zagotovki,
  spasti, supy, pelmeni, ryba, zapravki, pesochnoe,
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
