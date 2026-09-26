import type { Localized } from "./langs";
import type { Recipe, RecipeCategory } from "./types";

// SEO landing pages, the recipe-site equivalent of SeaJobs' rank/vessel pages:
// every page gets a unique <title>, H1 and intro paragraph in each language,
// plus a server-rendered list of matching recipes. Slugs are keyword-matching
// and must stay stable once indexed.

export interface CategoryLanding {
  cat: RecipeCategory;
  emoji: string;
  /** Search-shaped H1 / title, e.g. "Рецепты завтраков". */
  h1: Localized;
  intro: Localized;
}

export const CATEGORY_LANDINGS: CategoryLanding[] = [
  {
    cat: "breakfast",
    emoji: "🍳",
    h1: { ru: "Рецепты завтраков", en: "Breakfast recipes", ua: "Рецепти сніданків" },
    intro: {
      ru: "Простые и быстрые завтраки на каждый день: омлеты, сырники, каши, панкейки, гранола и полезные ПП-варианты. У каждого рецепта пошаговое описание, время приготовления и калорийность.",
      en: "Simple, quick breakfasts for every day: omelettes, pancakes, porridge, granola and light healthy options. Every recipe has step-by-step instructions, cooking time and calories.",
      ua: "Прості та швидкі сніданки на кожен день: омлети, сирники, каші, панкейки, гранола й корисні ПХ-варіанти. У кожного рецепта покроковий опис, час приготування та калорійність.",
    },
  },
  {
    cat: "soup",
    emoji: "🍲",
    h1: { ru: "Рецепты супов", en: "Soup recipes", ua: "Рецепти супів" },
    intro: {
      ru: "Домашние супы на обед: куриный с лапшой, крем-супы и лёгкие овощные. Понятные шаги, доступные продукты и точные пропорции — суп получится с первого раза.",
      en: "Homemade soups for lunch: chicken noodle, creamy blended soups and light vegetable ones. Clear steps, everyday ingredients and exact amounts — it works the first time.",
      ua: "Домашні супи на обід: курячий із локшиною, крем-супи й легкі овочеві. Зрозумілі кроки, доступні продукти й точні пропорції — суп вийде з першого разу.",
    },
  },
  {
    cat: "main",
    emoji: "🍝",
    h1: { ru: "Рецепты вторых блюд", en: "Main course recipes", ua: "Рецепти других страв" },
    intro: {
      ru: "Что приготовить на ужин: курица, котлеты, креветки, паста и блюда из фарша. Рецепты с фото, временем готовки и калориями — от быстрых будничных до праздничных.",
      en: "What to cook for dinner: chicken, cutlets, shrimp, pasta and mince dishes. Recipes with photos, cooking time and calories — from quick weeknight meals to special occasions.",
      ua: "Що приготувати на вечерю: курка, котлети, креветки, паста й страви з фаршу. Рецепти з фото, часом приготування й калоріями — від швидких буденних до святкових.",
    },
  },
  {
    cat: "salad",
    emoji: "🥗",
    h1: { ru: "Рецепты салатов", en: "Salad recipes", ua: "Рецепти салатів" },
    intro: {
      ru: "Салаты на любой случай: праздничные оливье и мимоза, цезарь, лёгкие салаты с тунцом, креветками и овощами. Пошаговые рецепты с фото и калорийностью.",
      en: "Salads for any occasion: festive Olivier and Mimosa, Caesar, and light salads with tuna, shrimp and vegetables. Step-by-step recipes with photos and calories.",
      ua: "Салати на будь-який випадок: святкові олів'є та мімоза, цезар, легкі салати з тунцем, креветками й овочами. Покрокові рецепти з фото та калорійністю.",
    },
  },
  {
    cat: "dessert",
    emoji: "🍰",
    h1: { ru: "Рецепты десертов", en: "Dessert recipes", ua: "Рецепти десертів" },
    intro: {
      ru: "Домашние десерты: шоколадный фондан, чизкейк без выпечки, тирамису, творожная запеканка и сладкое без сахара. Простые рецепты, которые получаются даже у новичков.",
      en: "Homemade desserts: chocolate fondant, no-bake cheesecake, tiramisu, cottage-cheese bake and sugar-free treats. Simple recipes that work even for beginners.",
      ua: "Домашні десерти: шоколадний фондан, чизкейк без випікання, тірамісу, сирна запіканка й солодке без цукру. Прості рецепти, що виходять навіть у новачків.",
    },
  },
  {
    cat: "baking",
    emoji: "🥐",
    h1: { ru: "Рецепты выпечки", en: "Baking recipes", ua: "Рецепти випічки" },
    intro: {
      ru: "Домашняя выпечка: шарлотка с яблоками, банановый хлеб, брауни и блины. Точные граммовки, температура духовки и подсказки, чтобы тесто всегда удавалось.",
      en: "Home baking: apple charlotte, banana bread, brownies and pancakes. Exact amounts, oven temperatures and tips so the batter always comes out right.",
      ua: "Домашня випічка: шарлотка з яблуками, банановий хліб, брауні й млинці. Точні грамовки, температура духовки й підказки, щоб тісто завжди вдавалося.",
    },
  },
  {
    cat: "snack",
    emoji: "🧀",
    h1: { ru: "Рецепты закусок", en: "Snack recipes", ua: "Рецепти закусок" },
    intro: {
      ru: "Закуски к пиву и на праздничный стол: луковые кольца, куриные крылья, сырные палочки, хрустящие креветки и гренки. Быстро, хрустяще и всегда к месту.",
      en: "Snacks for beer and parties: onion rings, chicken wings, cheese sticks, crispy shrimp and croutons. Quick, crunchy and always a hit.",
      ua: "Закуски до пива й на святковий стіл: цибулеві кільця, курячі крильця, сирні палички, хрусткі креветки й грінки. Швидко, хрустко й завжди доречно.",
    },
  },
  {
    cat: "drink",
    emoji: "🥤",
    h1: { ru: "Рецепты напитков", en: "Drink recipes", ua: "Рецепти напоїв" },
    intro: {
      ru: "Домашние напитки: смузи, лимонады, какао и полезные коктейли без алкоголя. Готовятся за несколько минут из простых продуктов.",
      en: "Homemade drinks: smoothies, lemonades, cocoa and healthy alcohol-free shakes. Ready in minutes from simple ingredients.",
      ua: "Домашні напої: смузі, лимонади, какао й корисні безалкогольні коктейлі. Готуються за кілька хвилин із простих продуктів.",
    },
  },
];

export function categoryLanding(cat: string): CategoryLanding | undefined {
  return CATEGORY_LANDINGS.find((c) => c.cat === cat);
}

// ---------------------------------------------------------------------------
// Ingredient landings: /recipes/ingredient/<slug> — "рецепты с курицей" etc.
// Matching runs on the Russian title + ingredient list (every recipe has RU),
// so a recipe added through SQL or the AI import lands on these pages by
// itself. `match` patterns are lowercase with ё folded to е.
// ---------------------------------------------------------------------------

export interface IngredientLanding {
  slug: string;
  emoji: string;
  /** "с курицей" style name used inside titles/links. */
  name: Localized;
  h1: Localized;
  intro: Localized;
  match: RegExp[];
}

// Word-ish boundary for Cyrillic (JS \b only understands ASCII letters).
const w = (stem: string) => new RegExp(`(^|[^а-я])${stem}`);

export const INGREDIENT_LANDINGS: IngredientLanding[] = [
  {
    slug: "kuritsa",
    emoji: "🍗",
    name: { ru: "Курица", en: "Chicken", ua: "Курка" },
    h1: { ru: "Рецепты с курицей", en: "Chicken recipes", ua: "Рецепти з куркою" },
    intro: {
      ru: "Блюда из курицы на каждый день: филе в сливочном соусе, терияки, запечённые бёдра, котлеты, салаты и супы. Курица готовится быстро и почти всегда получается сочной, если знать пару секретов — они есть в каждом рецепте.",
      en: "Everyday chicken dishes: breast in cream sauce, teriyaki, baked thighs, cutlets, salads and soups. Chicken cooks fast and stays juicy if you know a couple of tricks — every recipe includes them.",
      ua: "Страви з курки на кожен день: філе у вершковому соусі, теріякі, запечені стегна, котлети, салати й супи. Курка готується швидко й майже завжди виходить соковитою, якщо знати кілька секретів — вони є в кожному рецепті.",
    },
    match: [w("куриц"), w("курин")],
  },
  {
    slug: "krevetki",
    emoji: "🦐",
    name: { ru: "Креветки", en: "Shrimp", ua: "Креветки" },
    h1: { ru: "Рецепты с креветками", en: "Shrimp recipes", ua: "Рецепти з креветками" },
    intro: {
      ru: "Креветки в чесночном масле, в сливочном соусе, терияки, в кляре, в пасте и салатах. Главное правило — не передержать на огне: 1–2 минуты с каждой стороны, и креветки останутся нежными.",
      en: "Shrimp in garlic butter, in cream sauce, teriyaki, battered, in pasta and salads. The golden rule is not to overcook: 1–2 minutes per side keeps them tender.",
      ua: "Креветки в часниковому маслі, у вершковому соусі, теріякі, у клярі, у пасті й салатах. Головне правило — не перетримати на вогні: 1–2 хвилини з кожного боку, і креветки лишаться ніжними.",
    },
    match: [w("кревет")],
  },
  {
    slug: "farsh",
    emoji: "🥩",
    name: { ru: "Фарш", en: "Mince", ua: "Фарш" },
    h1: { ru: "Рецепты из фарша", en: "Mince recipes", ua: "Рецепти з фаршу" },
    intro: {
      ru: "Что приготовить из фарша: сочные котлеты из говядины, свинины, курицы и индейки. Рецепты с подсказками, как сделать котлеты нежными и не дать им развалиться.",
      en: "What to make with mince: juicy cutlets from beef, pork, chicken and turkey. Recipes with tips on keeping cutlets tender and stopping them from falling apart.",
      ua: "Що приготувати з фаршу: соковиті котлети з яловичини, свинини, курки та індички. Рецепти з підказками, як зробити котлети ніжними й не дати їм розвалитися.",
    },
    match: [w("фарш")],
  },
  {
    slug: "tvorog",
    emoji: "🥛",
    name: { ru: "Творог", en: "Cottage cheese", ua: "Сир кисломолочний" },
    h1: { ru: "Рецепты с творогом", en: "Cottage cheese recipes", ua: "Рецепти з кисломолочним сиром" },
    intro: {
      ru: "Сырники, творожная запеканка и другие блюда из творога — вкусные, сытные и богатые белком. Отлично подходят для ПП-завтрака и лёгкого десерта.",
      en: "Syrniki, cottage-cheese bake and other cottage-cheese dishes — tasty, filling and high in protein. Great for a healthy breakfast or a light dessert.",
      ua: "Сирники, сирна запіканка та інші страви з кисломолочного сиру — смачні, ситні й багаті на білок. Чудово підходять для ПХ-сніданку та легкого десерту.",
    },
    match: [w("творог"), w("творож")],
  },
  {
    slug: "shokolad",
    emoji: "🍫",
    name: { ru: "Шоколад", en: "Chocolate", ua: "Шоколад" },
    h1: { ru: "Рецепты с шоколадом", en: "Chocolate recipes", ua: "Рецепти з шоколадом" },
    intro: {
      ru: "Шоколадные десерты и выпечка: фондан с жидким центром, брауни, тирамису. Для лучшего вкуса берите тёмный шоколад с содержанием какао от 60%.",
      en: "Chocolate desserts and bakes: molten-centre fondant, brownies, tiramisu. For the best flavour use dark chocolate with at least 60% cocoa.",
      ua: "Шоколадні десерти й випічка: фондан із рідким центром, брауні, тірамісу. Для кращого смаку беріть чорний шоколад із вмістом какао від 60%.",
    },
    match: [w("шоколад"), w("какао")],
  },
  {
    slug: "yaytsa",
    emoji: "🥚",
    name: { ru: "Яйца", en: "Eggs", ua: "Яйця" },
    h1: { ru: "Рецепты с яйцами", en: "Egg recipes", ua: "Рецепти з яйцями" },
    intro: {
      ru: "Омлеты, шакшука, французские гренки, выпечка и салаты с яйцами. Яйца — самый быстрый способ приготовить сытный завтрак или ужин за 10–15 минут.",
      en: "Omelettes, shakshuka, French toast, bakes and salads with eggs. Eggs are the quickest route to a filling breakfast or dinner in 10–15 minutes.",
      ua: "Омлети, шакшука, французькі грінки, випічка й салати з яйцями. Яйця — найшвидший спосіб приготувати ситний сніданок чи вечерю за 10–15 хвилин.",
    },
    match: [w("яйц")],
  },
  {
    slug: "kartofel",
    emoji: "🥔",
    name: { ru: "Картофель", en: "Potatoes", ua: "Картопля" },
    h1: { ru: "Рецепты с картофелем", en: "Potato recipes", ua: "Рецепти з картоплею" },
    intro: {
      ru: "Блюда из картошки: хрустящие дольки с паприкой, картофельные котлеты с грибами, супы и салаты. Простые, бюджетные и сытные рецепты на каждый день.",
      en: "Potato dishes: crispy paprika wedges, potato cutlets with mushrooms, soups and salads. Simple, budget-friendly and filling everyday recipes.",
      ua: "Страви з картоплі: хрусткі дольки з паприкою, картопляні котлети з грибами, супи й салати. Прості, бюджетні й ситні рецепти на кожен день.",
    },
    match: [w("картоф"), w("картошк")],
  },
  {
    slug: "griby",
    emoji: "🍄",
    name: { ru: "Грибы", en: "Mushrooms", ua: "Гриби" },
    h1: { ru: "Рецепты с грибами", en: "Mushroom recipes", ua: "Рецепти з грибами" },
    intro: {
      ru: "Блюда с шампиньонами и другими грибами: котлеты, начинки, соусы и гарниры. Грибы добавляют блюдам глубокий вкус и отлично подходят для постного меню.",
      en: "Dishes with mushrooms: cutlets, fillings, sauces and sides. Mushrooms add a deep, savoury flavour and suit meat-free menus perfectly.",
      ua: "Страви з печерицями та іншими грибами: котлети, начинки, соуси й гарніри. Гриби додають стравам глибокого смаку й чудово підходять для пісного меню.",
    },
    match: [w("гриб"), w("шампиньон")],
  },
  {
    slug: "ryba",
    emoji: "🐟",
    name: { ru: "Рыба", en: "Fish", ua: "Риба" },
    h1: { ru: "Рецепты с рыбой", en: "Fish recipes", ua: "Рецепти з рибою" },
    intro: {
      ru: "Рыбные котлеты, салаты с тунцом и рыбными консервами — полезные блюда, богатые белком и омега-3. Подходят для ПП и лёгкого ужина.",
      en: "Fish cutlets and salads with tuna and canned fish — wholesome dishes rich in protein and omega-3. Great for healthy eating and a light dinner.",
      ua: "Рибні котлети, салати з тунцем і рибними консервами — корисні страви, багаті на білок та омега-3. Підходять для ПХ і легкої вечері.",
    },
    match: [w("рыб"), w("минтай"), w("тунец"), w("тунц"), w("лосос")],
  },
  {
    slug: "syr",
    emoji: "🧀",
    name: { ru: "Сыр", en: "Cheese", ua: "Сир" },
    h1: { ru: "Рецепты с сыром", en: "Cheese recipes", ua: "Рецепти з сиром" },
    intro: {
      ru: "Блюда с сыром: котлеты с тянущейся начинкой, сырные палочки, омлеты, салаты и паста с пармезаном. Сыр делает любое блюдо сытнее и уютнее.",
      en: "Dishes with cheese: cutlets with a melty filling, cheese sticks, omelettes, salads and parmesan pasta. Cheese makes any dish heartier and cosier.",
      ua: "Страви з сиром: котлети з тягучою начинкою, сирні палички, омлети, салати й паста з пармезаном. Сир робить будь-яку страву ситнішою та затишнішою.",
    },
    match: [/(^|[^а-я])сыр([^а-я]|$)/, w("сырн"), w("пармезан"), w("моцарелл"), w("маскарпоне")],
  },
  {
    slug: "ovsyanka",
    emoji: "🌾",
    name: { ru: "Овсянка", en: "Oats", ua: "Вівсянка" },
    h1: { ru: "Рецепты с овсянкой", en: "Oat recipes", ua: "Рецепти з вівсянкою" },
    intro: {
      ru: "Овсяные хлопья — основа полезного меню: ленивая овсянка в банке, гранола, печенье без сахара и каши. Много клетчатки и долгая сытость.",
      en: "Rolled oats are the base of a healthy menu: overnight oats, granola, sugar-free cookies and porridge. Lots of fibre and long-lasting fullness.",
      ua: "Вівсяні пластівці — основа корисного меню: лінива вівсянка в банці, гранола, печиво без цукру й каші. Багато клітковини й тривала ситість.",
    },
    match: [w("овсян")],
  },
  {
    slug: "banan",
    emoji: "🍌",
    name: { ru: "Бананы", en: "Bananas", ua: "Банани" },
    h1: { ru: "Рецепты с бананом", en: "Banana recipes", ua: "Рецепти з бананом" },
    intro: {
      ru: "Банановый хлеб, смузи, овсяное печенье и завтраки с бананом. Спелые бананы дают естественную сладость — можно класть меньше сахара.",
      en: "Banana bread, smoothies, oat cookies and breakfasts with banana. Ripe bananas bring natural sweetness, so you can use less sugar.",
      ua: "Банановий хліб, смузі, вівсяне печиво й сніданки з бананом. Стиглі банани дають природну солодкість — можна класти менше цукру.",
    },
    match: [w("банан")],
  },
];

/** Below this many recipes a landing is "thin": linked less and kept noindex. */
export const MIN_LANDING_RECIPES = 3;

export function ingredientLanding(slug: string): IngredientLanding | undefined {
  return INGREDIENT_LANDINGS.find((l) => l.slug === slug);
}

function haystack(r: Recipe): string {
  return [r.title.ru, ...(r.ingredients.ru ?? [])].join(" \n ").toLowerCase().replace(/ё/g, "е");
}

export function recipesWithIngredient(all: Recipe[], landing: IngredientLanding): Recipe[] {
  return all.filter((r) => {
    const h = haystack(r);
    return landing.match.some((re) => re.test(h));
  });
}

/** Ingredient landings a given recipe belongs to (for links on the recipe page). */
export function ingredientLandingsFor(r: Recipe): IngredientLanding[] {
  const h = haystack(r);
  return INGREDIENT_LANDINGS.filter((l) => l.match.some((re) => re.test(h)));
}
