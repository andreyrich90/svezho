import type { Localized } from "./langs";

// Editorial recipe collections — curated groupings shown as "Подборки".
// Recipes themselves live in the DB; a collection just references them by slug,
// in display order. Add a new collection by appending here.
export interface Collection {
  slug: string;
  emoji: string;
  title: Localized;
  description: Localized;
  recipeSlugs: string[];
}

export const COLLECTIONS: Collection[] = [
  {
    slug: "zakuski-k-pivu",
    emoji: "🍺",
    title: { ru: "Закуски к пиву", en: "Beer snacks", ua: "Закуски до пива" },
    description: {
      ru: "Пять хрустящих закусок для дружеской компании — от золотых луковых колец до крыльев в медовой глазури. Выбирайте любую.",
      en: "Five crunchy snacks for good company — from golden onion rings to honey-glazed wings. Pick any of them.",
      ua: "П’ять хрустких закусок для дружньої компанії — від золотих цибулевих кілець до крилець у медовій глазурі. Обирайте будь-яку.",
    },
    recipeSlugs: [
      "zolotye-lukovye-kolca-v-pivnom-klyare",
      "kurinye-krylya-v-medovo-chesnochnoy-glazuri",
      "syrnye-palochki-v-dvoynoy-panirovke",
      "kartofelnye-dolki-s-paprikoy",
      "rzhanye-grenki-s-chesnokom-i-syrnym-dipom",
    ],
  },
  {
    slug: "pp-uzhiny",
    emoji: "🍽️",
    title: { ru: "ПП-ужины", en: "Healthy dinners", ua: "ПХ-вечері" },
    description: {
      ru: "Лёгкие ужины без готовки часами — белок, овощи и ничего лишнего. Выбирайте любой.",
      en: "Light dinners that don't take hours — protein, veg and nothing extra. Pick any.",
      ua: "Легкі вечері без готування годинами — білок, овочі й нічого зайвого. Обирайте будь-яку.",
    },
    recipeSlugs: [
      "kurinye-oladi-s-kabachkom",
      "kurica-s-kinoa-bowl",
      "grecheskiy-salat",
      "tomatnyy-krem-sup",
    ],
  },
  {
    slug: "9-vidov-kotlet",
    emoji: "🍖",
    title: { ru: "9 видов котлет", en: "9 kinds of cutlets", ua: "9 видів котлет" },
    description: {
      ru: "Шпаргалка на любой вкус: от классических мясных до постных гречневых и капустных с тянущимся сыром. Выбирайте любой рецепт.",
      en: "A cheat-sheet for every taste: from classic meat to lean buckwheat and cheesy cabbage. Pick any recipe.",
      ua: "Шпаргалка на будь-який смак: від класичних м’ясних до пісних гречаних і капустяних із тягучим сиром. Обирайте будь-який рецепт.",
    },
    recipeSlugs: [
      "domashnie-myasnye-kotlety",
      "pozharskie-kotlety",
      "kurinye-kotlety-s-syrom",
      "kotlety-iz-indeyki-s-kabachkom",
      "rybnye-kotlety-iz-mintaya",
      "pechenochnye-kotlety-s-risom",
      "kartofelnye-kotlety-s-gribami",
      "grechnevye-kotlety-s-gribami",
      "kapustnye-kotlety-s-syrom",
    ],
  },
  {
    slug: "8-receptov-krevetok",
    emoji: "🦐",
    title: { ru: "8 рецептов креветок", en: "8 shrimp recipes", ua: "8 рецептів креветок" },
    description: {
      ru: "Быстро, сочно и невероятно вкусно: от креветок в чесночном масле до пасты «как в ресторане». Выбирайте любой рецепт.",
      en: "Fast, juicy and unbelievably good: from garlic-butter shrimp to restaurant-style pasta. Pick any recipe.",
      ua: "Швидко, соковито й неймовірно смачно: від креветок у часниковому маслі до пасти «як у ресторані». Обирайте будь-який рецепт.",
    },
    recipeSlugs: [
      "krevetki-v-chesnochnom-masle",
      "krevetki-medovo-chili",
      "krevetki-v-slivochnom-souse",
      "hrustyaschie-krevetki",
      "kokosovoe-karri-s-krevetkami",
      "krevetki-teriyaki",
      "limonno-perechnye-krevetki",
      "pasta-s-krevetkami",
    ],
  },
  {
    slug: "8-receptov-kuritsy",
    emoji: "🍗",
    title: { ru: "8 рецептов курицы", en: "8 chicken recipes", ua: "8 рецептів курки" },
    description: {
      ru: "Курица на любой вечер: от сливочно-чесночного филе и терияки до шницеля и домашнего супа с лапшой. Выбирайте любой рецепт.",
      en: "Chicken for any evening: from creamy garlic breast and teriyaki to schnitzel and homemade noodle soup. Pick any recipe.",
      ua: "Курка на будь-який вечір: від вершково-часникового філе й теріякі до шніцеля та домашнього супу з локшиною. Обирайте будь-який рецепт.",
    },
    recipeSlugs: [
      "kurinoe-file-v-slivochno-chesnochnom-souse",
      "kuritsa-teriyaki",
      "kurinye-bedra-medovo-gorchichnye",
      "kuritsa-v-karri-s-kokosovym-molokom",
      "kurinye-shashlychki-v-duhovke",
      "kuritsa-stir-fray-s-ovoschami",
      "kurinyy-shnitsel-v-panirovke",
      "kurinyy-sup-s-lapshoy",
    ],
  },
  {
    slug: "8-bystryh-desertov",
    emoji: "🍰",
    title: { ru: "8 быстрых десертов", en: "8 quick desserts", ua: "8 швидких десертів" },
    description: {
      ru: "Сладкое на любой случай: шоколадный фондан, чизкейк без выпечки, тирамису, банановый хлеб и лёгкие ПП-варианты. Выбирайте любой рецепт.",
      en: "Something sweet for any occasion: chocolate fondant, no-bake cheesecake, tiramisu, banana bread and light healthy options. Pick any recipe.",
      ua: "Солодке на будь-який випадок: шоколадний фондан, чизкейк без випікання, тірамісу, банановий хліб і легкі ПХ-варіанти. Обирайте будь-який рецепт.",
    },
    recipeSlugs: [
      "shokoladnyy-fondan",
      "chizkeyk-bez-vypechki",
      "tiramisu-klassicheskiy",
      "ovsyanoe-pechenye",
      "bananovyy-hleb",
      "tvorozhnaya-zapekanka",
      "sharlotka-s-yablokami",
      "shokoladnyy-brauni",
    ],
  },
  {
    slug: "8-idey-dlya-zavtraka",
    emoji: "🍳",
    title: { ru: "8 идей для завтрака", en: "8 breakfast ideas", ua: "8 ідей для сніданку" },
    description: {
      ru: "С чего начать утро: омлет и шакшука, ленивая овсянка и гранола, панкейки, френч-тост и смузи-боул. Быстрые и полезные варианты на выбор.",
      en: "How to start the morning: omelette and shakshuka, overnight oats and granola, pancakes, French toast and a smoothie bowl. Quick and wholesome options to pick from.",
      ua: "З чого почати ранок: омлет і шакшука, лінива вівсянка й гранола, панкейки, френч-тост і смузі-боул. Швидкі та корисні варіанти на вибір.",
    },
    recipeSlugs: [
      "omlet-s-ovoschami-i-syrom",
      "shakshuka",
      "lenivaya-ovsyanka-v-banke",
      "domashnyaya-granola",
      "frantsuzskie-grenki",
      "amerikanskie-pankeyki",
      "risovaya-kasha-na-moloke",
      "smuzi-boul",
    ],
  },
];

export function findCollection(slug: string): Collection | undefined {
  return COLLECTIONS.find((c) => c.slug === slug);
}
