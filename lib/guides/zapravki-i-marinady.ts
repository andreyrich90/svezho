import type { Guide } from "./types";

export const guide: Guide = {
  slug: "zapravki-i-marinady",
  emoji: "🥗",
  image: "/img/guides/zapravki-i-marinady.webp",
  updated: "2026-09-26",
  title: {
    ru: "Заправки и маринады: формулы, по которым можно придумать свою",
    en: "Dressings and marinades: formulas to invent your own",
    ua: "Заправки й маринади: формули, за якими можна вигадати свою",
  },
  summary: {
    ru: "Пропорция 3:1 для любой винегретной заправки, как сделать майонез за 2 минуты и почему он сворачивается, когда поливать салат, чтобы листья не обмякли. Сколько мариновать курицу, свинину, говядину и рыбу и почему дольше — не значит лучше.",
    en: "The 3:1 ratio for any vinaigrette, how to make mayonnaise in 2 minutes and why it splits, when to dress a salad so the leaves don't wilt. How long to marinate chicken, pork, beef and fish, and why longer isn't better.",
    ua: "Пропорція 3:1 для будь-якої вінегретної заправки, як зробити майонез за 2 хвилини й чому він розшаровується, коли поливати салат, щоб листя не зів'яло. Скільки маринувати курку, свинину, яловичину й рибу та чому довше — не означає краще.",
  },
  relatedRecipes: ["salat-cezar-s-kuricey", "grecheskiy-salat", "kurinye-shashlychki-v-duhovke", "kurinye-bedra-medovo-gorchichnye"],
  sections: {
    ru: [
      {
        heading: "Формула 3:1 — основа всех заправок",
        paragraphs: [
          "Классическая винегретная заправка — это 3 части масла на 1 часть кислоты. Всё остальное — вариации. Меняя масло, кислоту и добавки, вы получаете десятки разных заправок, не заглядывая в рецепт.",
          "Если любите поострее или кислота мягкая (бальзамик, яблочный уксус) — сдвигайте к 2:1. Если кислота резкая (столовый уксус 9%) — к 4:1.",
        ],
        list: [
          "Масло: оливковое, подсолнечное нерафинированное, кунжутное (только частью — оно очень яркое), ореховое.",
          "Кислота: лимонный или лаймовый сок, винный, яблочный, рисовый уксус, бальзамик.",
          "Эмульгатор: горчица, мёд, яичный желток, тахини, йогурт.",
          "Аромат: чеснок, шалот, травы, цедра, специи.",
        ],
      },
      {
        heading: "Правильный порядок смешивания",
        paragraphs: [
          "Соль не растворяется в масле. Поэтому сначала смешайте кислоту с солью, сахаром или мёдом и горчицей — и только потом вливайте масло тонкой струйкой, взбивая вилкой или венчиком. Или просто сложите всё в банку с крышкой и энергично потрясите 20 секунд.",
          "Горчица — ключ к стабильности. 1 ч. л. на 100 мл заправки удерживает масло и кислоту вместе, и заправка не расслаивается в тарелке, а обволакивает листья.",
        ],
        tip: "Базовая заправка на салат для 4 человек: 3 ст. л. оливкового масла, 1 ст. л. лимонного сока, ½ ч. л. дижонской горчицы, ½ ч. л. мёда, ¼ ч. л. соли, перец. Добавьте мелко рубленный шалот — и это уже ресторанный уровень.",
      },
      {
        heading: "Пять заправок на все случаи",
        paragraphs: [
          "Все пропорции — на 4 порции салата.",
        ],
        list: [
          "Медово-горчичная: 3 ст. л. масла, 1 ст. л. яблочного уксуса, 1 ст. л. мёда, 1 ст. л. зернистой горчицы.",
          "Бальзамическая: 3 ст. л. оливкового масла, 1,5 ст. л. бальзамика, 1 ч. л. мёда, ½ зубчика чеснока.",
          "Азиатская: 2 ст. л. растительного масла, 1 ч. л. кунжутного, 1 ст. л. соевого соуса, 1 ст. л. рисового уксуса, 1 ч. л. мёда, 1 ч. л. тёртого имбиря.",
          "Йогуртовая: 4 ст. л. греческого йогурта, 1 ст. л. лимонного сока, 1 ст. л. оливкового масла, укроп, чеснок, соль.",
          "Для «Цезаря»: 1 желток (или 2 ст. л. майонеза), 1 ч. л. горчицы, 1 ст. л. лимонного сока, 1 зубчик чеснока, 2 анчоуса или 1 ч. л. вустерского соуса, 30 г тёртого пармезана, 4 ст. л. оливкового масла.",
        ],
      },
      {
        heading: "Домашний майонез за 2 минуты",
        paragraphs: [
          "Главное правило — все продукты комнатной температуры. Холодный желток хуже эмульгирует, и майонез сворачивается.",
        ],
        list: [
          "1 желток",
          "1 ч. л. горчицы",
          "1 ст. л. лимонного сока или 1 ч. л. уксуса",
          "¼ ч. л. соли, щепотка сахара",
          "200–250 мл масла без запаха",
        ],
        tip: "Самый надёжный способ — погружной блендер в узком высоком стакане. Положите всё вместе, опустите блендер до дна, включите и не двигайте 10–15 секунд, пока снизу не начнёт образовываться белая эмульсия. Затем медленно поднимайте блендер вверх. Майонез готов за минуту.",
      },
      {
        heading: "Когда заправлять салат",
        paragraphs: [
          "Кислота и соль вытягивают воду из листьев, и через 5–10 минут салат обмякает. Поэтому листовые салаты заправляют прямо перед подачей. Листья должны быть абсолютно сухими — капли воды не дают заправке прилипнуть и разбавляют её. Используйте сушилку для зелени или промокните листья полотенцем.",
          "Заправки лучше меньше, чем больше: 1 ст. л. на большую горсть листьев. Перемешивайте руками в большой миске — так заправка распределяется равномерно, а листья не мнутся.",
          "Исключение — плотные овощи: капуста, свёкла, морковь, огурцы в корейском стиле, картофельный салат. Им, наоборот, полезно постоять в заправке 20–30 минут, чтобы пропитаться.",
        ],
        tip: "Картофель для салата заправляйте тёплым — он впитает заправку. Майонез добавляйте только в остывший, иначе он расслоится.",
      },
      {
        heading: "Из чего состоит маринад",
        paragraphs: [
          "У любого маринада три задачи: придать вкус, сделать мясо сочнее и немного размягчить волокна. Для этого нужны четыре элемента.",
        ],
        list: [
          "Соль — самое важное: именно она проникает вглубь и удерживает сок. Норма — 1–1,5% от веса мяса: 10–15 г (2–2,5 ч. л.) на 1 кг. Соевый соус тоже соль: 1 ст. л. ≈ 3 г соли.",
          "Масло — переносит ароматы специй и защищает поверхность от пересыхания.",
          "Кислота — лимонный сок, уксус, вино, кефир, йогурт. Размягчает поверхность, но в избытке делает её рыхлой.",
          "Аромат — чеснок, лук, травы, специи, мёд, горчица.",
        ],
        tip: "Маринад проникает вглубь мяса всего на несколько миллиметров. Поэтому толстые куски лучше надрезать или нарезать на порции — это работает лучше, чем мариновать сутки.",
      },
      {
        heading: "Сколько мариновать",
        paragraphs: [
          "Длительность зависит от продукта и от кислоты. Кислые маринады работают быстро и при передержке портят текстуру: мясо становится мучнистым, рыба — рыхлой. Маринады на йогурте, кефире и соевом соусе мягче, их можно держать дольше.",
        ],
        list: [
          "Рыба и креветки: 15–30 минут в кислом маринаде, до 2 часов в масляном.",
          "Курица: 2–12 часов; филе — 1–4 часа.",
          "Свинина: 4–12 часов.",
          "Говядина и баранина: 6–24 часа.",
          "Овощи для гриля: 30–60 минут.",
        ],
        tip: "Киви, ананас, папайя и имбирь содержат ферменты, которые расщепляют белок. Они отлично смягчают жёсткое мясо, но больше 30–60 минут держать нельзя — мясо превратится в кашу.",
      },
      {
        heading: "Как мариновать правильно",
        paragraphs: [
          "Используйте пакет с застёжкой: выпустите воздух, и маринад равномерно облепит каждый кусок — его нужно в два-три раза меньше, чем в миске. Мариновать — только в холодильнике.",
          "Металлическую посуду для кислых маринадов не берите: алюминий и неэмалированная сталь реагируют с кислотой. Подойдут стекло, керамика, пищевой пластик.",
          "Перед жаркой снимите лишний маринад и промокните мясо: мокрая поверхность не зарумянится, а тушится. Если в маринаде был мёд или сахар — готовьте на умеренном огне: сахар начинает подгорать быстрее, чем прожаривается мясо.",
        ],
        tip: "Маринад, в котором лежало сырое мясо, нельзя использовать как соус без кипячения. Прокипятите его 2–3 минуты — или сразу отложите часть свежего маринада для подачи.",
      },
      {
        heading: "Три маринада на каждый день",
        paragraphs: [
          "На 1 кг мяса или птицы.",
        ],
        list: [
          "Медово-соевый для курицы: 4 ст. л. соевого соуса, 2 ст. л. мёда, 2 ст. л. масла, 3 зубчика чеснока, 1 ч. л. тёртого имбиря. Соль не нужна — её даёт соус.",
          "Кефирный для шашлыка: 500 мл кефира, 2 луковицы кольцами, 2 ч. л. соли, 1 ч. л. молотого перца, 1 ч. л. сушёного базилика или кинзы.",
          "Горчично-травяной для свинины: 2 ст. л. горчицы, 3 ст. л. масла, 1 ст. л. лимонного сока, 2 ч. л. соли, чеснок, тимьян или розмарин, перец.",
        ],
      },
    ],
    en: [
      {
        heading: "The 3:1 formula — the base of every dressing",
        paragraphs: [
          "A classic vinaigrette is 3 parts oil to 1 part acid. Everything else is a variation. Change the oil, the acid and the extras and you have dozens of dressings without opening a recipe.",
          "If you like it sharper or your acid is mild (balsamic, cider vinegar), move towards 2:1. If the acid is harsh (9% white vinegar), move towards 4:1.",
        ],
        list: [
          "Oil: olive, unrefined sunflower, sesame (only in part — it's very strong), nut oils.",
          "Acid: lemon or lime juice, wine, cider or rice vinegar, balsamic.",
          "Emulsifier: mustard, honey, egg yolk, tahini, yoghurt.",
          "Aroma: garlic, shallot, herbs, zest, spices.",
        ],
      },
      {
        heading: "The right mixing order",
        paragraphs: [
          "Salt doesn't dissolve in oil. So first mix the acid with salt, sugar or honey and mustard — then pour in the oil in a thin stream while whisking. Or put everything in a jar with a lid and shake hard for 20 seconds.",
          "Mustard is the key to stability. 1 tsp per 100 ml of dressing holds oil and acid together, so the dressing coats the leaves instead of separating in the bowl.",
        ],
        tip: "A basic dressing for a salad for 4: 3 tbsp olive oil, 1 tbsp lemon juice, ½ tsp Dijon mustard, ½ tsp honey, ¼ tsp salt, pepper. Add a finely chopped shallot and it's restaurant level.",
      },
      {
        heading: "Five dressings for every occasion",
        paragraphs: [
          "All amounts are for 4 servings of salad.",
        ],
        list: [
          "Honey mustard: 3 tbsp oil, 1 tbsp cider vinegar, 1 tbsp honey, 1 tbsp wholegrain mustard.",
          "Balsamic: 3 tbsp olive oil, 1.5 tbsp balsamic, 1 tsp honey, ½ garlic clove.",
          "Asian: 2 tbsp neutral oil, 1 tsp sesame oil, 1 tbsp soy sauce, 1 tbsp rice vinegar, 1 tsp honey, 1 tsp grated ginger.",
          "Yoghurt: 4 tbsp Greek yoghurt, 1 tbsp lemon juice, 1 tbsp olive oil, dill, garlic, salt.",
          "Caesar: 1 yolk (or 2 tbsp mayonnaise), 1 tsp mustard, 1 tbsp lemon juice, 1 garlic clove, 2 anchovies or 1 tsp Worcestershire sauce, 30 g grated parmesan, 4 tbsp olive oil.",
        ],
      },
      {
        heading: "Homemade mayonnaise in 2 minutes",
        paragraphs: [
          "The main rule: everything at room temperature. A cold yolk emulsifies poorly and the mayonnaise splits.",
        ],
        list: [
          "1 egg yolk",
          "1 tsp mustard",
          "1 tbsp lemon juice or 1 tsp vinegar",
          "¼ tsp salt, a pinch of sugar",
          "200–250 ml neutral oil",
        ],
        tip: "The most reliable method is a stick blender in a tall narrow beaker. Put everything in, lower the blender to the bottom, switch on and don't move it for 10–15 seconds until a white emulsion forms underneath. Then slowly draw the blender upwards. Mayonnaise in a minute.",
      },
      {
        heading: "When to dress a salad",
        paragraphs: [
          "Acid and salt draw water out of leaves, and within 5–10 minutes the salad wilts. So leafy salads are dressed right before serving. The leaves must be completely dry — water droplets stop the dressing clinging and dilute it. Use a salad spinner or pat them dry with a towel.",
          "Less dressing is better than more: 1 tbsp per large handful of leaves. Toss with your hands in a big bowl — it spreads evenly and the leaves don't bruise.",
          "The exception is sturdy vegetables: cabbage, beetroot, carrot, Korean-style cucumbers, potato salad. They benefit from sitting in the dressing for 20–30 minutes to soak it up.",
        ],
        tip: "Dress potatoes for salad while warm — they absorb the dressing. Add mayonnaise only once they've cooled, or it will split.",
      },
      {
        heading: "What a marinade is made of",
        paragraphs: [
          "Any marinade has three jobs: add flavour, make the meat juicier and soften the fibres a little. It takes four elements.",
        ],
        list: [
          "Salt — the most important: it's what penetrates and holds in the juices. Use 1–1.5% of the meat's weight: 10–15 g (2–2.5 tsp) per 1 kg. Soy sauce is salt too: 1 tbsp ≈ 3 g salt.",
          "Oil — carries the flavour of spices and protects the surface from drying.",
          "Acid — lemon juice, vinegar, wine, kefir, yoghurt. Softens the surface but in excess makes it mushy.",
          "Aroma — garlic, onion, herbs, spices, honey, mustard.",
        ],
        tip: "A marinade penetrates only a few millimetres. Score thick pieces or cut them into portions — that works better than marinating for a day.",
      },
      {
        heading: "How long to marinate",
        paragraphs: [
          "The time depends on the food and the acid. Acidic marinades work fast and ruin the texture if overdone: meat turns mealy, fish falls apart. Yoghurt, kefir and soy marinades are gentler and can go longer.",
        ],
        list: [
          "Fish and shrimp: 15–30 minutes in an acidic marinade, up to 2 hours in an oil-based one.",
          "Chicken: 2–12 hours; breast fillet 1–4 hours.",
          "Pork: 4–12 hours.",
          "Beef and lamb: 6–24 hours.",
          "Vegetables for the grill: 30–60 minutes.",
        ],
        tip: "Kiwi, pineapple, papaya and ginger contain enzymes that break down protein. They tenderise tough meat brilliantly, but never for more than 30–60 minutes — the meat turns to mush.",
      },
      {
        heading: "How to marinate properly",
        paragraphs: [
          "Use a zip-lock bag: squeeze out the air and the marinade coats every piece evenly — you need two to three times less than in a bowl. Always marinate in the fridge.",
          "Avoid metal for acidic marinades: aluminium and uncoated steel react with acid. Glass, ceramic and food-safe plastic are fine.",
          "Before cooking, wipe off excess marinade and pat the meat dry: a wet surface stews instead of browning. If the marinade had honey or sugar, cook over moderate heat — sugar burns faster than the meat cooks.",
        ],
        tip: "Marinade that held raw meat must not be used as a sauce without boiling. Boil it for 2–3 minutes — or set aside some fresh marinade for serving before you add the meat.",
      },
      {
        heading: "Three everyday marinades",
        paragraphs: [
          "Per 1 kg of meat or poultry.",
        ],
        list: [
          "Honey-soy for chicken: 4 tbsp soy sauce, 2 tbsp honey, 2 tbsp oil, 3 garlic cloves, 1 tsp grated ginger. No salt needed — the soy provides it.",
          "Kefir for kebabs: 500 ml kefir, 2 onions in rings, 2 tsp salt, 1 tsp ground pepper, 1 tsp dried basil or coriander.",
          "Mustard and herb for pork: 2 tbsp mustard, 3 tbsp oil, 1 tbsp lemon juice, 2 tsp salt, garlic, thyme or rosemary, pepper.",
        ],
      },
    ],
    ua: [
      {
        heading: "Формула 3:1 — основа всіх заправок",
        paragraphs: [
          "Класична вінегретна заправка — це 3 частини олії на 1 частину кислоти. Усе інше — варіації. Змінюючи олію, кислоту й додатки, ви отримуєте десятки різних заправок, не зазираючи в рецепт.",
          "Якщо любите гостріше або кислота м'яка (бальзамік, яблучний оцет) — зсувайте до 2:1. Якщо кислота різка (столовий оцет 9%) — до 4:1.",
        ],
        list: [
          "Олія: оливкова, соняшникова нерафінована, кунжутна (лише частково — вона дуже яскрава), горіхова.",
          "Кислота: лимонний або лаймовий сік, винний, яблучний, рисовий оцет, бальзамік.",
          "Емульгатор: гірчиця, мед, яєчний жовток, тахіні, йогурт.",
          "Аромат: часник, шалот, трави, цедра, спеції.",
        ],
      },
      {
        heading: "Правильний порядок змішування",
        paragraphs: [
          "Сіль не розчиняється в олії. Тому спершу змішайте кислоту із сіллю, цукром або медом і гірчицею — і лише потім вливайте олію тонким струменем, збиваючи виделкою чи вінчиком. Або просто складіть усе в банку з кришкою й енергійно потрусіть 20 секунд.",
          "Гірчиця — ключ до стабільності. 1 ч. л. на 100 мл заправки утримує олію й кислоту разом, і заправка не розшаровується в тарілці, а обгортає листя.",
        ],
        tip: "Базова заправка на салат для 4 осіб: 3 ст. л. оливкової олії, 1 ст. л. лимонного соку, ½ ч. л. діжонської гірчиці, ½ ч. л. меду, ¼ ч. л. солі, перець. Додайте дрібно порубаний шалот — і це вже ресторанний рівень.",
      },
      {
        heading: "П'ять заправок на всі випадки",
        paragraphs: [
          "Усі пропорції — на 4 порції салату.",
        ],
        list: [
          "Медово-гірчична: 3 ст. л. олії, 1 ст. л. яблучного оцту, 1 ст. л. меду, 1 ст. л. зернистої гірчиці.",
          "Бальзамічна: 3 ст. л. оливкової олії, 1,5 ст. л. бальзаміку, 1 ч. л. меду, ½ зубчика часнику.",
          "Азійська: 2 ст. л. рослинної олії, 1 ч. л. кунжутної, 1 ст. л. соєвого соусу, 1 ст. л. рисового оцту, 1 ч. л. меду, 1 ч. л. тертого імбиру.",
          "Йогуртова: 4 ст. л. грецького йогурту, 1 ст. л. лимонного соку, 1 ст. л. оливкової олії, кріп, часник, сіль.",
          "Для «Цезаря»: 1 жовток (або 2 ст. л. майонезу), 1 ч. л. гірчиці, 1 ст. л. лимонного соку, 1 зубчик часнику, 2 анчоуси або 1 ч. л. вустерського соусу, 30 г тертого пармезану, 4 ст. л. оливкової олії.",
        ],
      },
      {
        heading: "Домашній майонез за 2 хвилини",
        paragraphs: [
          "Головне правило — усі продукти кімнатної температури. Холодний жовток гірше емульгує, і майонез розшаровується.",
        ],
        list: [
          "1 жовток",
          "1 ч. л. гірчиці",
          "1 ст. л. лимонного соку або 1 ч. л. оцту",
          "¼ ч. л. солі, дрібка цукру",
          "200–250 мл олії без запаху",
        ],
        tip: "Найнадійніший спосіб — занурювальний блендер у вузькій високій склянці. Покладіть усе разом, опустіть блендер до дна, увімкніть і не рухайте 10–15 секунд, доки знизу не почне утворюватися біла емульсія. Потім повільно піднімайте блендер угору. Майонез готовий за хвилину.",
      },
      {
        heading: "Коли заправляти салат",
        paragraphs: [
          "Кислота й сіль витягують воду з листя, і за 5–10 хвилин салат в'яне. Тому листові салати заправляють просто перед подачею. Листя має бути абсолютно сухим — краплі води не дають заправці прилипнути й розбавляють її. Використовуйте сушарку для зелені або промокніть листя рушником.",
          "Заправки краще менше, ніж більше: 1 ст. л. на велику жменю листя. Перемішуйте руками у великій мисці — так заправка розподіляється рівномірно, а листя не мнеться.",
          "Виняток — щільні овочі: капуста, буряк, морква, огірки по-корейськи, картопляний салат. Їм, навпаки, корисно постояти в заправці 20–30 хвилин, щоб просякнути.",
        ],
        tip: "Картоплю для салату заправляйте теплою — вона вбере заправку. Майонез додавайте лише в охолоджену, інакше він розшарується.",
      },
      {
        heading: "З чого складається маринад",
        paragraphs: [
          "Будь-який маринад має три завдання: надати смаку, зробити м'ясо соковитішим і трохи розм'якшити волокна. Для цього потрібні чотири елементи.",
        ],
        list: [
          "Сіль — найважливіше: саме вона проникає вглиб і утримує сік. Норма — 1–1,5% від ваги м'яса: 10–15 г (2–2,5 ч. л.) на 1 кг. Соєвий соус теж сіль: 1 ст. л. ≈ 3 г солі.",
          "Олія — переносить аромати спецій і захищає поверхню від пересихання.",
          "Кислота — лимонний сік, оцет, вино, кефір, йогурт. Розм'якшує поверхню, але в надлишку робить її пухкою.",
          "Аромат — часник, цибуля, трави, спеції, мед, гірчиця.",
        ],
        tip: "Маринад проникає вглиб м'яса лише на кілька міліметрів. Тому товсті шматки краще надрізати або нарізати на порції — це працює краще, ніж маринувати добу.",
      },
      {
        heading: "Скільки маринувати",
        paragraphs: [
          "Тривалість залежить від продукту й від кислоти. Кислі маринади працюють швидко й у разі передержки псують текстуру: м'ясо стає борошнистим, риба — пухкою. Маринади на йогурті, кефірі й соєвому соусі м'якші, їх можна тримати довше.",
        ],
        list: [
          "Риба й креветки: 15–30 хвилин у кислому маринаді, до 2 годин в олійному.",
          "Курка: 2–12 годин; філе — 1–4 години.",
          "Свинина: 4–12 годин.",
          "Яловичина й баранина: 6–24 години.",
          "Овочі для гриля: 30–60 хвилин.",
        ],
        tip: "Ківі, ананас, папая й імбир містять ферменти, що розщеплюють білок. Вони чудово пом'якшують жорстке м'ясо, але понад 30–60 хвилин тримати не можна — м'ясо перетвориться на кашу.",
      },
      {
        heading: "Як маринувати правильно",
        paragraphs: [
          "Використовуйте пакет із застібкою: випустіть повітря, і маринад рівномірно обліпить кожен шматок — його потрібно у два-три рази менше, ніж у мисці. Маринувати — лише в холодильнику.",
          "Металевий посуд для кислих маринадів не беріть: алюміній і неемальована сталь реагують із кислотою. Підійдуть скло, кераміка, харчовий пластик.",
          "Перед смаженням зніміть зайвий маринад і промокніть м'ясо: мокра поверхня не рум'яниться, а тушкується. Якщо в маринаді був мед чи цукор — готуйте на помірному вогні: цукор починає пригоряти швидше, ніж просмажується м'ясо.",
        ],
        tip: "Маринад, у якому лежало сире м'ясо, не можна використовувати як соус без кип'ятіння. Прокип'ятіть його 2–3 хвилини — або одразу відкладіть частину свіжого маринаду для подачі.",
      },
      {
        heading: "Три маринади на щодень",
        paragraphs: [
          "На 1 кг м'яса або птиці.",
        ],
        list: [
          "Медово-соєвий для курки: 4 ст. л. соєвого соусу, 2 ст. л. меду, 2 ст. л. олії, 3 зубчики часнику, 1 ч. л. тертого імбиру. Сіль не потрібна — її дає соус.",
          "Кефірний для шашлику: 500 мл кефіру, 2 цибулини кільцями, 2 ч. л. солі, 1 ч. л. меленого перцю, 1 ч. л. сушеного базиліку або кінзи.",
          "Гірчично-трав'яний для свинини: 2 ст. л. гірчиці, 3 ст. л. олії, 1 ст. л. лимонного соку, 2 ч. л. солі, часник, чебрець або розмарин, перець.",
        ],
      },
    ],
  },
  faq: {
    ru: [
      { q: "Майонез свернулся — можно спасти?", a: "Да. Возьмите чистую миску, положите новый желток и 1 ч. л. горчицы и по ложке, взбивая, добавляйте свернувшуюся массу. Эмульсия соберётся заново." },
      { q: "Сколько хранится домашняя заправка?", a: "Винегретная без чеснока и свежих трав — до недели в холодильнике в банке. С чесноком, травами или йогуртом — 2–3 дня. Домашний майонез на сыром желтке — не больше 2–3 дней." },
      { q: "Почему заправка расслаивается?", a: "Не хватает эмульгатора или масло влили сразу. Добавьте ½ ч. л. горчицы или мёда и снова взбейте." },
      { q: "Нужно ли солить мясо в маринаде?", a: "Обязательно — без соли маринад работает только на поверхности. Исключение — если в маринаде много соевого соуса." },
      { q: "Можно ли мариновать мясо в морозилке?", a: "Можно заморозить мясо сразу в маринаде: пока оно оттаивает в холодильнике, маринад как раз сделает своё дело. Это удобный способ заготовок." },
    ],
    en: [
      { q: "My mayonnaise split — can I save it?", a: "Yes. In a clean bowl put a fresh yolk and 1 tsp mustard, then whisk in the split mixture a spoonful at a time. The emulsion will come back together." },
      { q: "How long does homemade dressing keep?", a: "A vinaigrette without garlic or fresh herbs keeps up to a week in a jar in the fridge. With garlic, herbs or yoghurt — 2–3 days. Homemade mayonnaise with raw yolk — no more than 2–3 days." },
      { q: "Why does my dressing separate?", a: "Not enough emulsifier, or the oil went in all at once. Add ½ tsp mustard or honey and whisk again." },
      { q: "Should a marinade contain salt?", a: "Definitely — without salt a marinade only works on the surface. The exception is when it contains plenty of soy sauce." },
      { q: "Can I freeze meat in its marinade?", a: "Yes: freeze it straight in the marinade and it will do its job while thawing in the fridge. A handy way to prep ahead." },
    ],
    ua: [
      { q: "Майонез розшарувався — можна врятувати?", a: "Так. Візьміть чисту миску, покладіть новий жовток і 1 ч. л. гірчиці й по ложці, збиваючи, додавайте розшаровану масу. Емульсія збереться знову." },
      { q: "Скільки зберігається домашня заправка?", a: "Вінегретна без часнику й свіжих трав — до тижня в холодильнику в банці. З часником, травами або йогуртом — 2–3 дні. Домашній майонез на сирому жовтку — не більше 2–3 днів." },
      { q: "Чому заправка розшаровується?", a: "Бракує емульгатора або олію влили одразу. Додайте ½ ч. л. гірчиці чи меду й знову збийте." },
      { q: "Чи треба солити м'ясо в маринаді?", a: "Обов'язково — без солі маринад працює лише на поверхні. Виняток — якщо в маринаді багато соєвого соусу." },
      { q: "Чи можна заморозити м'ясо в маринаді?", a: "Можна: заморозьте м'ясо одразу в маринаді — поки воно відтає в холодильнику, маринад якраз зробить свою справу. Це зручний спосіб заготовок." },
    ],
  },
};
