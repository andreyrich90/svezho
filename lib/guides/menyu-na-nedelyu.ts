import type { Guide } from "./types";

export const guide: Guide = {
  slug: "menyu-na-nedelyu",
  emoji: "📋",
  updated: "2026-09-26",
  title: {
    ru: "Меню на неделю: как планировать, экономить и не выбрасывать продукты",
    en: "A weekly menu: how to plan, save money and stop throwing food away",
    ua: "Меню на тиждень: як планувати, заощаджувати й не викидати продукти",
  },
  summary: {
    ru: "Как составить меню за 15 минут, принцип «готовь один раз — ешь дважды», заготовки на неделю за 2 часа в воскресенье, список покупок по отделам магазина. Сколько продуктов нужно на порцию, самые дешёвые источники белка и что приготовить из остатков.",
    en: "How to plan a menu in 15 minutes, the cook-once-eat-twice principle, a week's prep in 2 hours on Sunday and a shopping list by store section. How much food per serving, the cheapest sources of protein and what to make from leftovers.",
    ua: "Як скласти меню за 15 хвилин, принцип «готуй один раз — їж двічі», заготовки на тиждень за 2 години в неділю, список покупок за відділами магазину. Скільки продуктів потрібно на порцію, найдешевші джерела білка й що приготувати із залишків.",
  },
  relatedRecipes: ["kurinyy-sup-s-lapshoy", "kurica-s-kinoa-bowl", "vinegret", "tvorozhnaya-zapekanka"],
  sections: {
    ru: [
      {
        heading: "Зачем планировать",
        paragraphs: [
          "Без плана мы ходим в магазин 4–5 раз в неделю, каждый раз покупаем «на всякий случай» и в итоге выбрасываем до трети купленного. Спонтанные решения — самые дорогие: доставка, полуфабрикаты, перекус по дороге.",
          "Меню на неделю экономит деньги (в среднем 20–30% бюджета на еду), время (один большой поход в магазин вместо пяти) и силы — не нужно каждый вечер решать, что приготовить.",
        ],
      },
      {
        heading: "Меню за 15 минут: пошагово",
        paragraphs: [],
        list: [
          "Начните с холодильника: что нужно использовать в первую очередь? Эти продукты — основа первых двух дней.",
          "Посмотрите на неделю: в какие дни вы поздно возвращаетесь? Туда — быстрые блюда на 15–20 минут или разогрев заготовок.",
          "Планируйте 4–5 ужинов, а не 7: остатки и один «свободный» вечер закроют оставшиеся дни.",
          "Используйте один продукт в нескольких блюдах: курица — запечь целиком в понедельник, остатки — в салат во вторник, из каркаса — бульон на суп.",
          "Завтраки и обеды сделайте однотипными: 2–3 варианта завтрака на всю неделю и обеды из ужинов накануне.",
          "Выпишите ингредиенты и составьте список покупок.",
        ],
        tip: "Сделайте «ротацию» из 10–15 любимых блюд, которые получаются всегда, и добавляйте в неделю одно новое. Так планирование станет почти автоматическим.",
      },
      {
        heading: "«Готовь один раз — ешь дважды»",
        paragraphs: [
          "Главный принцип экономии времени: одно приготовление — два разных блюда. Не одно и то же блюдо два дня подряд, а основа, которая превращается во что-то новое.",
        ],
        list: [
          "Запечённая курица → салат с курицей, начинка для блинов или шаурмы, суп на бульоне из каркаса.",
          "Большая кастрюля риса → гарнир сегодня, жареный рис с яйцом и овощами завтра.",
          "Тушёное мясо → с пюре в первый день, в пасте или тортилье — во второй.",
          "Отварной картофель в мундире → гарнир, затем салат или жареная картошка.",
          "Томатный соус (двойная порция) → паста, затем шакшука или основа для пиццы.",
        ],
      },
      {
        heading: "Заготовки на неделю за 2 часа",
        paragraphs: [
          "Выделите 2 часа в выходной — и по будням ужин будет собираться за 10–15 минут. Не нужно готовить готовые блюда на всю неделю: они надоедают и не все хорошо хранятся. Готовьте компоненты.",
        ],
        list: [
          "Крупа: сварите рис, гречку или киноа на 3–4 дня.",
          "Белок: запеките курицу или бёдра, отварите яйца, сварите фасоль или нут.",
          "Овощи: запеките противень овощей, нарежьте свежие для салатов и перекусов.",
          "Соус: сделайте 1–2 универсальных — йогуртовый с зеленью, томатный или заправку для салата.",
          "Суп: одна кастрюля на 3 дня обедов.",
        ],
        tip: "Порядок, чтобы уложиться в 2 часа: сначала включите духовку и поставьте запекаться овощи и курицу, параллельно — кастрюлю с крупой и суп на плиту. Пока всё готовится — нарежьте овощи и сделайте соусы.",
      },
      {
        heading: "Сколько покупать: нормы на порцию",
        paragraphs: [
          "Одна из причин перерасхода — мы плохо представляем, сколько еды нужно. Вот средние нормы на одного взрослого на одно блюдо.",
        ],
        list: [
          "Крупа, рис: 60–80 г сухой.",
          "Паста: 80–100 г сухой.",
          "Картофель: 200–250 г.",
          "Мясо, птица, рыба: 120–150 г сырого веса без кости.",
          "Бобовые: 50–70 г сухих или 150 г консервированных.",
          "Овощи на гарнир или салат: 150–250 г.",
          "Суп: 300–350 мл.",
        ],
      },
      {
        heading: "Список покупок и сам поход в магазин",
        paragraphs: [
          "Составляйте список по отделам магазина: овощи и фрукты, молочное, мясо и рыба, бакалея, заморозка. Так вы пройдёте магазин один раз и не будете возвращаться к полкам, где уже были, и мимо соблазнов.",
          "Ходите в магазин сытым — на голодный желудок покупки вырастают на 15–20%. Сравнивайте цену за килограмм, а не за упаковку: крупная упаковка не всегда дешевле. Смотрите на нижние и верхние полки — на уровне глаз обычно самые дорогие товары.",
        ],
        tip: "Сфотографируйте содержимое холодильника перед выходом. Это надёжнее памяти и спасает от покупки третьей пачки сметаны.",
      },
      {
        heading: "Дешёвый белок",
        paragraphs: [
          "Белок — самая дорогая часть рациона. Но недорогие источники есть, и они не хуже дорогих.",
        ],
        list: [
          "Яйца — самый дешёвый полноценный белок: завтраки, омлеты, запеканки, добавка в кашу.",
          "Бобовые: сухая фасоль, чечевица, нут в 3–4 раза дешевле консервированных. Красная чечевица варится 15–20 минут без замачивания.",
          "Куриные бёдра и целая курица — дешевле филе, а вкус и сочность лучше.",
          "Печень и субпродукты — недорогие и очень питательные.",
          "Замороженная рыба (минтай, хек) и рыбные консервы.",
          "Творог и кефир — белок для завтраков и выпечки.",
        ],
      },
      {
        heading: "Меньше выбрасывать",
        paragraphs: [
          "Правило «первым пришёл — первым ушёл»: новые продукты ставьте в холодильник назад, старые выдвигайте вперёд. Заведите на полке коробку «съесть в первую очередь» — туда всё, что скоро испортится.",
          "Замораживайте до того, как продукт испортится, а не когда он уже на грани: хлеб нарезанным, бананы очищенными (для смузи и выпечки), зелень — в масле в формочках для льда, остатки соуса и бульона — порциями.",
        ],
        list: [
          "Чёрствый хлеб → гренки, сухари, панировка, французские тосты.",
          "Мягкие овощи → суп, рагу, соус, фриттата.",
          "Перезрелые бананы → банановый хлеб, смузи, панкейки.",
          "Остатки риса или гречки → котлеты, жареный рис, начинка для перцев.",
          "Кисломолочное с истекающим сроком → оладьи, блины, выпечка.",
        ],
      },
      {
        heading: "Пример недели",
        paragraphs: [
          "Выходные: заготовка — запечённая курица целиком, противень овощей, кастрюля гречки и риса, куриный суп на каркасе, йогуртовый соус.",
        ],
        list: [
          "Пн: курица с запечёнными овощами и гречкой.",
          "Вт: боул — рис, курица, свежие овощи, йогуртовый соус.",
          "Ср: паста с томатным соусом (двойная порция соуса).",
          "Чт: шакшука на оставшемся соусе, хлеб.",
          "Пт: жареный рис с яйцом и овощами из остатков риса.",
          "Сб–Вс: блюдо «на выходные» и новая заготовка.",
          "Обеды — суп и остатки ужинов; завтраки — овсянка в банке или омлет.",
        ],
      },
    ],
    en: [
      {
        heading: "Why plan",
        paragraphs: [
          "Without a plan we go shopping 4–5 times a week, buy \"just in case\" every time and end up throwing away up to a third of what we bought. Spontaneous decisions are the most expensive: delivery, ready meals, a snack on the go.",
          "A weekly menu saves money (on average 20–30% of the food budget), time (one big shop instead of five) and energy — no deciding every evening what to cook.",
        ],
      },
      {
        heading: "A menu in 15 minutes: step by step",
        paragraphs: [],
        list: [
          "Start with the fridge: what needs using up first? Those foods are the base of the first two days.",
          "Look at the week: which days are you home late? Put quick 15–20 minute meals or reheated prep there.",
          "Plan 4–5 dinners, not 7: leftovers and one free evening cover the rest.",
          "Use one ingredient in several dishes: roast a whole chicken on Monday, put the leftovers in a salad on Tuesday and make stock from the carcass for soup.",
          "Keep breakfasts and lunches simple: 2–3 breakfast options for the whole week and lunches from the previous night's dinner.",
          "Write down the ingredients and make a shopping list.",
        ],
        tip: "Build a rotation of 10–15 favourite dishes that always work and add one new one a week. Planning becomes almost automatic.",
      },
      {
        heading: "Cook once, eat twice",
        paragraphs: [
          "The main time-saving principle: one cooking session, two different meals. Not the same dish two days running, but a base that turns into something new.",
        ],
        list: [
          "Roast chicken → chicken salad, filling for pancakes or wraps, soup from the carcass stock.",
          "A big pot of rice → a side today, egg fried rice with vegetables tomorrow.",
          "Braised meat → with mash on day one, in pasta or tortillas on day two.",
          "Jacket-boiled potatoes → a side, then a salad or fried potatoes.",
          "Tomato sauce (double batch) → pasta, then shakshuka or a pizza base.",
        ],
      },
      {
        heading: "A week's prep in 2 hours",
        paragraphs: [
          "Set aside 2 hours at the weekend and weekday dinners come together in 10–15 minutes. You don't need to cook finished meals for the whole week: they get boring and don't all keep well. Cook components.",
        ],
        list: [
          "Grains: cook rice, buckwheat or quinoa for 3–4 days.",
          "Protein: roast chicken or thighs, boil eggs, cook beans or chickpeas.",
          "Vegetables: roast a tray of vegetables, chop fresh ones for salads and snacks.",
          "Sauce: make 1–2 all-rounders — herby yoghurt, tomato or a salad dressing.",
          "Soup: one pot for 3 days of lunches.",
        ],
        tip: "The order to fit it into 2 hours: first switch on the oven and put the vegetables and chicken in, and at the same time get the grains and soup going on the hob. While everything cooks, chop vegetables and make the sauces.",
      },
      {
        heading: "How much to buy: portion guide",
        paragraphs: [
          "One reason for overspending is that we don't picture how much food we need. Here are average amounts per adult per meal.",
        ],
        list: [
          "Grains, rice: 60–80 g dry.",
          "Pasta: 80–100 g dry.",
          "Potatoes: 200–250 g.",
          "Meat, poultry, fish: 120–150 g raw, boneless.",
          "Pulses: 50–70 g dried or 150 g canned.",
          "Vegetables for a side or salad: 150–250 g.",
          "Soup: 300–350 ml.",
        ],
      },
      {
        heading: "The shopping list and the shop itself",
        paragraphs: [
          "Write your list by store section: fruit and veg, dairy, meat and fish, dry goods, frozen. You'll go round the shop once and won't double back past shelves you've done — or past temptations.",
          "Shop on a full stomach — hungry shopping adds 15–20% to the bill. Compare price per kilo, not per pack: a big pack isn't always cheaper. Look at the top and bottom shelves — eye level usually holds the priciest products.",
        ],
        tip: "Photograph the inside of the fridge before you leave. It's more reliable than memory and stops you buying a third pot of sour cream.",
      },
      {
        heading: "Cheap protein",
        paragraphs: [
          "Protein is the most expensive part of the diet. But cheap sources exist, and they're no worse than expensive ones.",
        ],
        list: [
          "Eggs — the cheapest complete protein: breakfasts, omelettes, bakes, stirred into porridge.",
          "Pulses: dried beans, lentils and chickpeas cost 3–4 times less than canned. Red lentils cook in 15–20 minutes without soaking.",
          "Chicken thighs and whole chickens are cheaper than breast, and juicier and tastier.",
          "Liver and offal — inexpensive and very nutritious.",
          "Frozen fish (pollock, hake) and canned fish.",
          "Cottage cheese and kefir — protein for breakfasts and baking.",
        ],
      },
      {
        heading: "Throw away less",
        paragraphs: [
          "First in, first out: put new food at the back of the fridge and move older food to the front. Keep a \"use first\" box on a shelf for anything about to go off.",
          "Freeze before food spoils, not when it's on the edge: bread sliced, bananas peeled (for smoothies and baking), herbs in oil in ice-cube trays, leftover sauce and stock in portions.",
        ],
        list: [
          "Stale bread → croutons, breadcrumbs, coating, French toast.",
          "Soft vegetables → soup, stew, sauce, frittata.",
          "Overripe bananas → banana bread, smoothies, pancakes.",
          "Leftover rice or buckwheat → patties, fried rice, stuffing for peppers.",
          "Dairy near its date → fritters, pancakes, baking.",
        ],
      },
      {
        heading: "A sample week",
        paragraphs: [
          "Weekend prep: a whole roast chicken, a tray of vegetables, a pot of buckwheat and rice, chicken soup from the carcass, a yoghurt sauce.",
        ],
        list: [
          "Mon: chicken with roast vegetables and buckwheat.",
          "Tue: a bowl — rice, chicken, fresh vegetables, yoghurt sauce.",
          "Wed: pasta with tomato sauce (double batch of sauce).",
          "Thu: shakshuka with the leftover sauce, bread.",
          "Fri: egg fried rice with vegetables from the leftover rice.",
          "Sat–Sun: a weekend dish and the next round of prep.",
          "Lunches — soup and last night's leftovers; breakfasts — overnight oats or an omelette.",
        ],
      },
    ],
    ua: [
      {
        heading: "Навіщо планувати",
        paragraphs: [
          "Без плану ми ходимо в магазин 4–5 разів на тиждень, щоразу купуємо «про всяк випадок» і зрештою викидаємо до третини купленого. Спонтанні рішення — найдорожчі: доставка, напівфабрикати, перекус дорогою.",
          "Меню на тиждень заощаджує гроші (у середньому 20–30% бюджету на їжу), час (один великий похід у магазин замість п'яти) і сили — не треба щовечора вирішувати, що приготувати.",
        ],
      },
      {
        heading: "Меню за 15 хвилин: покроково",
        paragraphs: [],
        list: [
          "Почніть із холодильника: що треба використати насамперед? Ці продукти — основа перших двох днів.",
          "Погляньте на тиждень: у які дні ви пізно повертаєтеся? Туди — швидкі страви на 15–20 хвилин або розігрів заготовок.",
          "Плануйте 4–5 вечерь, а не 7: залишки й один «вільний» вечір закриють решту днів.",
          "Використовуйте один продукт у кількох стравах: курку — запекти цілою в понеділок, залишки — у салат у вівторок, із каркаса — бульйон на суп.",
          "Сніданки й обіди зробіть однотипними: 2–3 варіанти сніданку на весь тиждень і обіди з учорашніх вечерь.",
          "Випишіть інгредієнти й складіть список покупок.",
        ],
        tip: "Зробіть «ротацію» з 10–15 улюблених страв, які виходять завжди, і додавайте на тиждень одну нову. Так планування стане майже автоматичним.",
      },
      {
        heading: "«Готуй один раз — їж двічі»",
        paragraphs: [
          "Головний принцип заощадження часу: одне приготування — дві різні страви. Не та сама страва два дні поспіль, а основа, що перетворюється на щось нове.",
        ],
        list: [
          "Запечена курка → салат із куркою, начинка для млинців чи шаурми, суп на бульйоні з каркаса.",
          "Велика каструля рису → гарнір сьогодні, смажений рис з яйцем і овочами завтра.",
          "Тушковане м'ясо → із пюре першого дня, у пасті чи тортильї — другого.",
          "Варена картопля в мундирі → гарнір, потім салат або смажена картопля.",
          "Томатний соус (подвійна порція) → паста, потім шакшука або основа для піци.",
        ],
      },
      {
        heading: "Заготовки на тиждень за 2 години",
        paragraphs: [
          "Виділіть 2 години на вихідних — і в будні вечеря збиратиметься за 10–15 хвилин. Не треба готувати готові страви на весь тиждень: вони набридають і не всі добре зберігаються. Готуйте компоненти.",
        ],
        list: [
          "Крупа: зваріть рис, гречку або кіноа на 3–4 дні.",
          "Білок: запечіть курку чи стегна, зваріть яйця, зваріть квасолю або нут.",
          "Овочі: запечіть деко овочів, наріжте свіжі для салатів і перекусів.",
          "Соус: зробіть 1–2 універсальні — йогуртовий із зеленню, томатний або заправку для салату.",
          "Суп: одна каструля на 3 дні обідів.",
        ],
        tip: "Порядок, щоб укластися у 2 години: спершу ввімкніть духовку й поставте запікатися овочі й курку, паралельно — каструлю з крупою й суп на плиту. Поки все готується — наріжте овочі й зробіть соуси.",
      },
      {
        heading: "Скільки купувати: норми на порцію",
        paragraphs: [
          "Одна з причин перевитрат — ми погано уявляємо, скільки їжі потрібно. Ось середні норми на одного дорослого на одну страву.",
        ],
        list: [
          "Крупа, рис: 60–80 г сухої.",
          "Паста: 80–100 г сухої.",
          "Картопля: 200–250 г.",
          "М'ясо, птиця, риба: 120–150 г сирої ваги без кістки.",
          "Бобові: 50–70 г сухих або 150 г консервованих.",
          "Овочі на гарнір чи салат: 150–250 г.",
          "Суп: 300–350 мл.",
        ],
      },
      {
        heading: "Список покупок і сам похід у магазин",
        paragraphs: [
          "Складайте список за відділами магазину: овочі й фрукти, молочне, м'ясо й риба, бакалія, заморожування. Так ви пройдете магазин один раз і не повертатиметеся до полиць, де вже були, і повз спокуси.",
          "Ходіть у магазин ситими — на голодний шлунок покупки зростають на 15–20%. Порівнюйте ціну за кілограм, а не за упаковку: велика упаковка не завжди дешевша. Дивіться на нижні й верхні полиці — на рівні очей зазвичай найдорожчі товари.",
        ],
        tip: "Сфотографуйте вміст холодильника перед виходом. Це надійніше за пам'ять і рятує від купівлі третьої пачки сметани.",
      },
      {
        heading: "Дешевий білок",
        paragraphs: [
          "Білок — найдорожча частина раціону. Але недорогі джерела є, і вони не гірші за дорогі.",
        ],
        list: [
          "Яйця — найдешевший повноцінний білок: сніданки, омлети, запіканки, додавання в кашу.",
          "Бобові: суха квасоля, сочевиця, нут у 3–4 рази дешевші за консервовані. Червона сочевиця вариться 15–20 хвилин без замочування.",
          "Курячі стегна й ціла курка — дешевші за філе, а смак і соковитість кращі.",
          "Печінка й субпродукти — недорогі й дуже поживні.",
          "Заморожена риба (минтай, хек) і рибні консерви.",
          "Сир і кефір — білок для сніданків і випічки.",
        ],
      },
      {
        heading: "Менше викидати",
        paragraphs: [
          "Правило «першим прийшов — першим пішов»: нові продукти ставте в холодильник назад, старі висувайте вперед. Заведіть на полиці коробку «з'їсти насамперед» — туди все, що скоро зіпсується.",
          "Заморожуйте до того, як продукт зіпсується, а не коли він уже на межі: хліб нарізаним, банани очищеними (для смузі й випічки), зелень — в олії у формочках для льоду, залишки соусу й бульйону — порціями.",
        ],
        list: [
          "Черствий хліб → грінки, сухарі, панірування, французькі тости.",
          "М'які овочі → суп, рагу, соус, фрітата.",
          "Перестиглі банани → банановий хліб, смузі, панкейки.",
          "Залишки рису чи гречки → котлети, смажений рис, начинка для перців.",
          "Кисломолочне, у якого спливає термін → оладки, млинці, випічка.",
        ],
      },
      {
        heading: "Приклад тижня",
        paragraphs: [
          "Вихідні: заготовка — запечена ціла курка, деко овочів, каструля гречки й рису, курячий суп на каркасі, йогуртовий соус.",
        ],
        list: [
          "Пн: курка із запеченими овочами й гречкою.",
          "Вт: боул — рис, курка, свіжі овочі, йогуртовий соус.",
          "Ср: паста з томатним соусом (подвійна порція соусу).",
          "Чт: шакшука на залишку соусу, хліб.",
          "Пт: смажений рис з яйцем і овочами із залишків рису.",
          "Сб–Нд: страва «на вихідні» й нова заготовка.",
          "Обіди — суп і залишки вечерь; сніданки — вівсянка в банці або омлет.",
        ],
      },
    ],
  },
  faq: {
    ru: [
      { q: "Сколько хранятся заготовки в холодильнике?", a: "Отварные крупы и запечённые овощи — 3–4 дня, запечённое мясо и курица — 3–4 дня, суп — 3 дня, нарезанные свежие овощи — 2–3 дня. То, что будете есть в пятницу и позже, лучше заморозить." },
      { q: "Как планировать меню на семью с детьми?", a: "Готовьте общую основу и добавляйте «взрослые» элементы отдельно: острый соус, пряные специи, сложные гарниры. Детям — та же курица и рис, но без перца." },
      { q: "Сколько денег реально можно сэкономить?", a: "По опыту большинства семей — 20–30% бюджета на еду за счёт отказа от спонтанных покупок, доставки и выброшенных продуктов." },
      { q: "Что делать, если план сорвался?", a: "Ничего страшного — держите в запасе 2–3 «аварийных» блюда из долгохранящихся продуктов: паста с томатами из банки, омлет, гречка с яйцом. А несъеденное блюдо перенесите на следующий день." },
      { q: "Нужно ли покупать продукты впрок?", a: "Только то, что вы точно используете и что долго хранится: крупы, паста, консервы, специи, замороженные овощи. Акции на скоропортящиеся продукты выгодны, только если вы успеете их съесть или заморозить." },
    ],
    en: [
      { q: "How long does meal prep keep in the fridge?", a: "Cooked grains and roast vegetables 3–4 days, roast meat and chicken 3–4 days, soup 3 days, chopped fresh vegetables 2–3 days. Freeze anything you'll eat on Friday or later." },
      { q: "How do I plan for a family with children?", a: "Cook a shared base and add the \"grown-up\" elements separately: hot sauce, strong spices, complex sides. Children get the same chicken and rice without the chilli." },
      { q: "How much can I actually save?", a: "Most families find 20–30% of the food budget by cutting impulse buys, takeaways and food waste." },
      { q: "What if the plan falls apart?", a: "No problem — keep 2–3 emergency meals made from long-life ingredients: pasta with canned tomatoes, an omelette, buckwheat with egg. Move the uneaten dish to the next day." },
      { q: "Should I stock up?", a: "Only on things you'll definitely use that keep well: grains, pasta, canned goods, spices, frozen vegetables. Deals on perishables only pay if you'll eat or freeze them in time." },
    ],
    ua: [
      { q: "Скільки зберігаються заготовки в холодильнику?", a: "Варені крупи й запечені овочі — 3–4 дні, запечене м'ясо й курка — 3–4 дні, суп — 3 дні, нарізані свіжі овочі — 2–3 дні. Те, що їстимете в п'ятницю й пізніше, краще заморозити." },
      { q: "Як планувати меню на родину з дітьми?", a: "Готуйте спільну основу й додавайте «дорослі» елементи окремо: гострий соус, пряні спеції, складні гарніри. Дітям — та сама курка й рис, але без перцю." },
      { q: "Скільки грошей реально можна заощадити?", a: "З досвіду більшості родин — 20–30% бюджету на їжу завдяки відмові від спонтанних покупок, доставки й викинутих продуктів." },
      { q: "Що робити, якщо план зірвався?", a: "Нічого страшного — тримайте про запас 2–3 «аварійні» страви з продуктів, що довго зберігаються: паста з томатами з банки, омлет, гречка з яйцем. А нез'їдену страву перенесіть на наступний день." },
      { q: "Чи треба купувати продукти про запас?", a: "Лише те, що ви точно використаєте й що довго зберігається: крупи, пасту, консерви, спеції, заморожені овочі. Акції на швидкопсувні продукти вигідні, лише якщо ви встигнете їх з'їсти або заморозити." },
    ],
  },
};
