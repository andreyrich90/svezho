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
import { guide as griby } from "./kak-gotovit-griby";
import { guide as bobovye } from "./bobovye";
import { guide as tvorog } from "./domashniy-tvorog-i-syr";
import { guide as pechenye } from "./sekrety-pechenya";
import { guide as mery } from "./mery-i-vesa";
import { guide as ryba2 } from "./solenie-ryby";
import { guide as holodec } from "./holodec-i-zalivnoe";
import { guide as sushi } from "./sushi-i-rolly";
import { guide as morozhenoe } from "./domashnee-morozhenoe";
import { guide as tort } from "./kak-sobrat-tort";
import { guide as mikrovolnovka } from "./gotovka-v-mikrovolnovke";
import { guide as utka } from "./utka-i-indeyka";
import { guide as plov } from "./plov";
import { guide as pechen } from "./pechen-i-subprodukty";
import { guide as ppGotovka } from "./pp-gotovka";
import { guide as zapekanki } from "./zapekanki";
import { guide as travy } from "./travy-i-zelen";
import { guide as salat } from "./kak-sostavit-salat";
import { guide as yabloki } from "./yabloki";
import { guide as tykva } from "./tykva";
import { guide as karamel } from "./karamel";
import { guide as orehi } from "./orehi-i-semechki";
import { guide as posuda } from "./skovorody-i-kastryuli";
import { guide as syry } from "./syry-i-syrnaya-tarelka";
import { guide as kabachki } from "./kabachki-i-baklazhany";
import { guide as luk } from "./luk-i-chesnok";
import { guide as pomidory } from "./pomidory";
import { guide as kapusta } from "./kapusta";
import { guide as kurica } from "./kurica-celikom";
import { guide as lanch } from "./lanch-boksy";

export type { Guide, GuideSection, GuideFaq } from "./types";

// "Секреты кухни" — long-read articles, newest first. Add a new article by
// creating lib/guides/<slug>.ts and listing it here.
export const GUIDES: Guide[] = [
  kabachki, luk, pomidory, kapusta, kurica, lanch,
  yabloki, tykva, karamel, orehi, posuda, syry,
  plov, pechen, ppGotovka, zapekanki, travy, salat,
  sushi, tort, morozhenoe, holodec, utka, mikrovolnovka,
  mery, ryba2, pechenye, griby, tvorog, bobovye,
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
