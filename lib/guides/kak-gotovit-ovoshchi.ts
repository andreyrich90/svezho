import type { Guide } from "./types";

export const guide: Guide = {
  slug: "kak-gotovit-ovoshchi",
  emoji: "🥦",
  image: "/img/guides/kak-gotovit-ovoshchi.webp",
  updated: "2026-09-26",
  title: {
    ru: "Овощи, которые хочется есть: запекание, бланширование и карамелизация",
    en: "Vegetables you actually want to eat: roasting, blanching and caramelising",
    ua: "Овочі, які хочеться їсти: запікання, бланшування й карамелізація",
  },
  summary: {
    ru: "Почему запечённые овощи вкуснее варёных и как не превратить их в тушёные, как бланшировать брокколи и фасоль, чтобы они остались ярко-зелёными, что делать с водянистыми кабачками и горькими баклажанами, как карамелизовать лук. Плюс — как сохранить витамины и чем хороши замороженные овощи.",
    en: "Why roast vegetables taste better than boiled and how not to steam them by mistake, how to blanch broccoli and green beans so they stay bright green, what to do with watery courgettes and bitter aubergines, and how to caramelise onions. Plus how to keep the vitamins and why frozen vegetables are fine.",
    ua: "Чому запечені овочі смачніші за варені і як не перетворити їх на тушковані, як бланшувати броколі й квасолю, щоб вони лишилися яскраво-зеленими, що робити з водянистими кабачками й гіркими баклажанами, як карамелізувати цибулю. Плюс — як зберегти вітаміни й чим добрі заморожені овочі.",
  },
  relatedRecipes: ["kartofelnye-dolki-s-paprikoy", "kuritsa-stir-fray-s-ovoschami", "kurica-s-kinoa-bowl", "tomatnyy-krem-sup"],
  sections: {
    ru: [
      {
        heading: "Почему варёные овощи скучные",
        paragraphs: [
          "Варка в воде вымывает из овощей вкус, сахара и часть витаминов, а температура не поднимается выше 100 °C. Вкус остаётся плоским, а текстура — мягкой.",
          "При сухом жаре — в духовке, на сковороде, на гриле — поверхность нагревается до 150 °C и выше. Натуральные сахара карамелизуются, белки и сахара вступают в реакцию Майяра, и появляются сотни новых ароматических соединений. Та же морковь или брокколи после запекания становится сладкой, ореховой и насыщенной.",
        ],
      },
      {
        heading: "Запекание: главные правила",
        paragraphs: [],
        list: [
          "Температура: 200–220 °C. Ниже — овощи сначала пустят сок и потушатся, выше — подгорят снаружи раньше, чем станут мягкими внутри.",
          "Сухие овощи: после мытья тщательно обсушите их полотенцем. Вода = пар = тушение.",
          "Масло: 1–1,5 ст. л. на 500 г овощей. Перемешайте в миске руками, чтобы каждый кусочек покрылся тонкой плёнкой.",
          "Не переполняйте противень: кусочки должны лежать в один слой с промежутками. Если тесно — возьмите два противня.",
          "Солите перед духовкой: ½ ч. л. соли на 500 г.",
          "Переверните один раз, в середине времени.",
        ],
        tip: "Разогрейте противень в духовке заранее, 5–10 минут. Овощи на горячем металле сразу начинают поджариваться снизу, как на сковороде.",
      },
      {
        heading: "Время запекания при 220 °C",
        paragraphs: [
          "Режьте кусочки одного размера — 2–3 см. Если запекаете разные овощи на одном противне, закладывайте их по очереди или режьте твёрдые мельче, а мягкие крупнее.",
        ],
        list: [
          "Картофель, батат, свёкла, морковь, пастернак: 30–45 минут.",
          "Тыква, лук, сельдерей корневой: 25–35 минут.",
          "Цветная капуста, брокколи, брюссельская капуста: 20–25 минут.",
          "Перец, кабачок, баклажан: 20–25 минут.",
          "Помидоры черри, спаржа, грибы: 12–20 минут.",
          "Чеснок целой головкой, завёрнутый в фольгу: 40–45 минут — мякоть станет сладкой пастой.",
        ],
      },
      {
        heading: "Бланширование: яркий цвет и хруст",
        paragraphs: [
          "Бланширование — это короткая варка в кипящей подсоленной воде и сразу охлаждение в ледяной. Овощи становятся мягкими, но остаются хрустящими, а зелёные — ярко-изумрудными.",
          "Воды нужно много — чтобы кипение не прекратилось при закладке. Соль — щедро, 1 ст. л. на 2 литра. Сразу после варки переложите овощи в миску с водой и льдом на 1–2 минуты: это мгновенно останавливает приготовление и фиксирует цвет.",
        ],
        list: [
          "Стручковая фасоль: 2–3 минуты.",
          "Брокколи и цветная капуста соцветиями: 2–3 минуты.",
          "Зелёный горошек: 1–2 минуты.",
          "Спаржа: 2–4 минуты в зависимости от толщины.",
          "Шпинат: 20–30 секунд.",
          "Помидоры — 20–30 секунд, чтобы снять кожицу (сделайте крестообразный надрез).",
        ],
        tip: "Почему зелёные овощи становятся оливково-серыми? Хлорофилл разрушается от долгой варки и от кислоты. Не варите их дольше нужного, не накрывайте крышкой (кислоты из овощей оседают обратно) и добавляйте лимонный сок или уксус только перед подачей.",
      },
      {
        heading: "Обжаривание на сковороде",
        paragraphs: [
          "Правила те же, что для мяса: хорошо разогретая сковорода, небольшие порции, не мешать постоянно. Дайте овощам 2–3 минуты полежать спокойно, чтобы образовалась корочка, и только потом перемешайте.",
          "Грибы — особый случай. Сначала они выпускают много воды, и кажется, что это ошибка. Не солите и не накрывайте: дайте воде выпариться на сильном огне, и только после этого грибы начнут румяниться. Солите в самом конце — соль вытягивает влагу и мешает корочке.",
        ],
      },
      {
        heading: "Водянистые кабачки и горькие баклажаны",
        paragraphs: [
          "Кабачки на 95% состоят из воды. Для оладий, запеканок и начинок натрите кабачок, посолите (½ ч. л. на 500 г), оставьте на 15–20 минут и хорошо отожмите руками или через марлю — уйдёт до трети веса. Для жарки кружочками — жарьте на сильном огне в один слой и не накрывайте.",
          "Современные сорта баклажанов почти не горчат. Но посолить их всё равно полезно: ломтики, посыпанные солью на 20–30 минут, теряют лишнюю влагу, становятся плотнее и впитывают при жарке гораздо меньше масла. После соли промойте и обсушите.",
        ],
        tip: "Баклажан — губка для масла. Вместо того чтобы доливать масло на сковороду, смажьте ломтики кисточкой и запеките при 220 °C 20 минут — получится вкусно и вдвое менее жирно.",
      },
      {
        heading: "Карамелизованный лук",
        paragraphs: [
          "Настоящий карамелизованный лук — медовый, мягкий, тёмно-золотой — требует времени: 40–60 минут на слабом огне. «Карамелизованный лук за 10 минут» — это просто жареный лук.",
          "Нарежьте 1 кг лука тонкими полукольцами. Растопите 30 г сливочного масла с 1 ст. л. растительного в широкой сковороде с толстым дном. Добавьте лук и щепотку соли, накройте крышкой на первые 10 минут, чтобы он размяк. Затем снимите крышку и готовьте на слабом огне, помешивая каждые 5–7 минут. Если начинает прилипать — добавьте ложку воды и соскребите со дна: это и есть карамель.",
        ],
        tip: "Из 1 кг сырого лука получается около 250 г карамелизованного. Сделайте большую порцию и заморозьте в формочках для льда — для супов, бургеров, пиццы и паст.",
      },
      {
        heading: "Как сохранить витамины",
        paragraphs: [
          "Водорастворимые витамины (C и группа B) уходят в воду и разрушаются от долгого нагрева. Жирорастворимые (A, E, K) и каротиноиды, наоборот, лучше усваиваются с жиром и после тепловой обработки.",
        ],
        list: [
          "Готовьте быстро и с минимумом воды: на пару, в микроволновке, запекание, быстрая жарка.",
          "Режьте непосредственно перед готовкой: нарезанные овощи быстрее теряют витамин C.",
          "Добавляйте немного масла к моркови, тыкве, шпинату, томатам: бета-каротин и ликопин усваиваются с жиром.",
          "Используйте воду от варки овощей в супах и соусах.",
          "Разнообразие важнее идеального способа: сырые, запечённые и тушёные овощи — все полезны.",
        ],
      },
      {
        heading: "Замороженные овощи — это нормально",
        paragraphs: [
          "Замороженные овощи часто не менее полезны, чем «свежие» из магазина: их замораживают через несколько часов после сбора, в пик спелости, а свежие зимой могут неделями ехать и лежать на прилавке, теряя витамины.",
          "Не размораживайте их перед готовкой — они раскиснут. Для супов и рагу кладите прямо из морозилки. Для запекания — выложите на раскалённый противень в один слой, сбрызните маслом и увеличьте время на 5–10 минут. Для обжаривания — сильный огонь и небольшие порции, чтобы лёд быстро испарился.",
        ],
      },
    ],
    en: [
      {
        heading: "Why boiled vegetables are boring",
        paragraphs: [
          "Boiling in water washes flavour, sugars and some vitamins out of vegetables, and the temperature never rises above 100 °C. The taste stays flat and the texture soft.",
          "With dry heat — in the oven, in a pan, on the grill — the surface reaches 150 °C and more. Natural sugars caramelise, proteins and sugars undergo the Maillard reaction, and hundreds of new aroma compounds appear. The same carrot or broccoli becomes sweet, nutty and intense after roasting.",
        ],
      },
      {
        heading: "Roasting: the main rules",
        paragraphs: [],
        list: [
          "Temperature: 200–220 °C. Lower and the vegetables release juice and stew first; higher and they burn outside before softening inside.",
          "Dry vegetables: after washing, dry them thoroughly with a towel. Water = steam = stewing.",
          "Oil: 1–1.5 tbsp per 500 g vegetables. Toss by hand in a bowl so every piece has a thin coat.",
          "Don't crowd the tray: pieces should lie in a single layer with gaps. If it's tight, use two trays.",
          "Salt before the oven: ½ tsp per 500 g.",
          "Turn once, halfway through.",
        ],
        tip: "Preheat the tray in the oven for 5–10 minutes. Vegetables on hot metal start browning underneath straight away, like in a pan.",
      },
      {
        heading: "Roasting times at 220 °C",
        paragraphs: [
          "Cut pieces to the same size — 2–3 cm. If you're roasting different vegetables on one tray, add them in stages or cut the hard ones smaller and the soft ones larger.",
        ],
        list: [
          "Potato, sweet potato, beetroot, carrot, parsnip: 30–45 minutes.",
          "Pumpkin, onion, celeriac: 25–35 minutes.",
          "Cauliflower, broccoli, Brussels sprouts: 20–25 minutes.",
          "Pepper, courgette, aubergine: 20–25 minutes.",
          "Cherry tomatoes, asparagus, mushrooms: 12–20 minutes.",
          "A whole garlic bulb wrapped in foil: 40–45 minutes — the cloves turn into a sweet paste.",
        ],
      },
      {
        heading: "Blanching: bright colour and crunch",
        paragraphs: [
          "Blanching is brief cooking in boiling salted water followed by an immediate plunge into iced water. Vegetables become tender but stay crisp, and green ones turn bright emerald.",
          "Use plenty of water so it doesn't stop boiling when the vegetables go in. Salt generously — 1 tbsp per 2 litres. As soon as they're done, move them to a bowl of iced water for 1–2 minutes: it stops the cooking instantly and sets the colour.",
        ],
        list: [
          "Green beans: 2–3 minutes.",
          "Broccoli and cauliflower florets: 2–3 minutes.",
          "Peas: 1–2 minutes.",
          "Asparagus: 2–4 minutes depending on thickness.",
          "Spinach: 20–30 seconds.",
          "Tomatoes: 20–30 seconds to peel them (cut a cross in the skin first).",
        ],
        tip: "Why do green vegetables turn olive-grey? Chlorophyll breaks down with long cooking and with acid. Don't overcook them, don't put a lid on (acids from the vegetables drip back in) and add lemon juice or vinegar only just before serving.",
      },
      {
        heading: "Pan-frying",
        paragraphs: [
          "The rules are the same as for meat: a well-heated pan, small batches, no constant stirring. Leave the vegetables alone for 2–3 minutes to form a crust, and only then toss.",
          "Mushrooms are a special case. At first they release a lot of water and it looks like a mistake. Don't salt or cover them: let the water boil off over high heat, and only then will the mushrooms start to brown. Salt at the very end — salt draws out moisture and stops a crust forming.",
        ],
      },
      {
        heading: "Watery courgettes and bitter aubergines",
        paragraphs: [
          "Courgettes are 95% water. For fritters, bakes and fillings, grate the courgette, salt it (½ tsp per 500 g), leave for 15–20 minutes and squeeze hard by hand or through muslin — up to a third of the weight comes out. For frying in rounds, use high heat, a single layer and no lid.",
          "Modern aubergine varieties are hardly bitter. But salting still helps: slices sprinkled with salt for 20–30 minutes lose excess moisture, firm up and absorb far less oil when fried. Rinse and dry after salting.",
        ],
        tip: "An aubergine is a sponge for oil. Instead of topping up the pan, brush the slices with oil and roast at 220 °C for 20 minutes — tasty and half as greasy.",
      },
      {
        heading: "Caramelised onions",
        paragraphs: [
          "Real caramelised onions — jammy, soft and deep gold — take time: 40–60 minutes over low heat. \"Caramelised onions in 10 minutes\" are just fried onions.",
          "Thinly slice 1 kg onions. Melt 30 g butter with 1 tbsp oil in a wide heavy-based pan. Add the onions and a pinch of salt and cover for the first 10 minutes to soften them. Then take off the lid and cook over low heat, stirring every 5–7 minutes. If they start to stick, add a spoonful of water and scrape the bottom — that's the caramel.",
        ],
        tip: "1 kg of raw onions gives about 250 g caramelised. Make a big batch and freeze it in ice-cube trays — for soups, burgers, pizza and pasta.",
      },
      {
        heading: "How to keep the vitamins",
        paragraphs: [
          "Water-soluble vitamins (C and the B group) leach into water and break down with long heating. Fat-soluble ones (A, E, K) and carotenoids, on the other hand, are better absorbed with fat and after cooking.",
        ],
        list: [
          "Cook quickly with minimal water: steaming, microwaving, roasting, quick frying.",
          "Cut just before cooking: cut vegetables lose vitamin C faster.",
          "Add a little oil to carrots, pumpkin, spinach and tomatoes: beta-carotene and lycopene are absorbed with fat.",
          "Use vegetable cooking water in soups and sauces.",
          "Variety matters more than the perfect method: raw, roast and stewed vegetables are all good for you.",
        ],
      },
      {
        heading: "Frozen vegetables are fine",
        paragraphs: [
          "Frozen vegetables are often just as nutritious as \"fresh\" ones from the shop: they're frozen within hours of picking, at peak ripeness, while fresh ones in winter may spend weeks in transit and on the shelf, losing vitamins.",
          "Don't thaw them before cooking — they go limp. Add them straight from the freezer to soups and stews. To roast, spread them on a hot tray in a single layer, drizzle with oil and add 5–10 minutes. To fry, use high heat and small batches so the ice evaporates fast.",
        ],
      },
    ],
    ua: [
      {
        heading: "Чому варені овочі нудні",
        paragraphs: [
          "Варіння у воді вимиває з овочів смак, цукри й частину вітамінів, а температура не піднімається вище 100 °C. Смак лишається пласким, а текстура — м'якою.",
          "За сухого жару — у духовці, на сковороді, на грилі — поверхня нагрівається до 150 °C і вище. Природні цукри карамелізуються, білки й цукри вступають у реакцію Маяра, і з'являються сотні нових ароматичних сполук. Та сама морква чи броколі після запікання стає солодкою, горіховою й насиченою.",
        ],
      },
      {
        heading: "Запікання: головні правила",
        paragraphs: [],
        list: [
          "Температура: 200–220 °C. Нижче — овочі спершу пустять сік і потушкуються, вище — підгорять зовні раніше, ніж стануть м'якими всередині.",
          "Сухі овочі: після миття ретельно обсушіть їх рушником. Вода = пара = тушкування.",
          "Олія: 1–1,5 ст. л. на 500 г овочів. Перемішайте в мисці руками, щоб кожен шматочок укрився тонкою плівкою.",
          "Не переповнюйте деко: шматочки мають лежати в один шар із проміжками. Якщо тісно — візьміть два деки.",
          "Соліть перед духовкою: ½ ч. л. солі на 500 г.",
          "Переверніть один раз, посередині часу.",
        ],
        tip: "Розігрійте деко в духовці заздалегідь, 5–10 хвилин. Овочі на гарячому металі одразу починають підсмажуватися знизу, як на сковороді.",
      },
      {
        heading: "Час запікання за 220 °C",
        paragraphs: [
          "Ріжте шматочки одного розміру — 2–3 см. Якщо запікаєте різні овочі на одному деку, закладайте їх по черзі або ріжте тверді дрібніше, а м'які — більше.",
        ],
        list: [
          "Картопля, батат, буряк, морква, пастернак: 30–45 хвилин.",
          "Гарбуз, цибуля, коренева селера: 25–35 хвилин.",
          "Цвітна капуста, броколі, брюссельська капуста: 20–25 хвилин.",
          "Перець, кабачок, баклажан: 20–25 хвилин.",
          "Помідори чері, спаржа, гриби: 12–20 хвилин.",
          "Часник цілою головкою, загорнутий у фольгу: 40–45 хвилин — м'якоть стане солодкою пастою.",
        ],
      },
      {
        heading: "Бланшування: яскравий колір і хрускіт",
        paragraphs: [
          "Бланшування — це коротке варіння в киплячій підсоленій воді й одразу охолодження в крижаній. Овочі стають м'якими, але лишаються хрусткими, а зелені — яскраво-смарагдовими.",
          "Води потрібно багато — щоб кипіння не припинилося під час закладання. Сіль — щедро, 1 ст. л. на 2 літри. Одразу після варіння перекладіть овочі в миску з водою й льодом на 1–2 хвилини: це миттєво зупиняє готування й фіксує колір.",
        ],
        list: [
          "Стручкова квасоля: 2–3 хвилини.",
          "Броколі й цвітна капуста суцвіттями: 2–3 хвилини.",
          "Зелений горошок: 1–2 хвилини.",
          "Спаржа: 2–4 хвилини залежно від товщини.",
          "Шпинат: 20–30 секунд.",
          "Помідори — 20–30 секунд, щоб зняти шкірку (зробіть хрестоподібний надріз).",
        ],
        tip: "Чому зелені овочі стають оливково-сірими? Хлорофіл руйнується від довгого варіння й від кислоти. Не варіть їх довше, ніж треба, не накривайте кришкою (кислоти з овочів осідають назад) і додавайте лимонний сік чи оцет лише перед подачею.",
      },
      {
        heading: "Обсмажування на сковороді",
        paragraphs: [
          "Правила ті самі, що й для м'яса: добре розігріта сковорода, невеликі порції, не мішати постійно. Дайте овочам 2–3 хвилини спокійно полежати, щоб утворилася скоринка, і лише потім перемішайте.",
          "Гриби — особливий випадок. Спершу вони випускають багато води, і здається, що це помилка. Не соліть і не накривайте: дайте воді випаруватися на сильному вогні, і лише після цього гриби почнуть рум'янитися. Соліть у самому кінці — сіль витягує вологу й заважає скоринці.",
        ],
      },
      {
        heading: "Водянисті кабачки й гіркі баклажани",
        paragraphs: [
          "Кабачки на 95% складаються з води. Для оладок, запіканок і начинок натріть кабачок, посоліть (½ ч. л. на 500 г), залиште на 15–20 хвилин і добре відтисніть руками або крізь марлю — піде до третини ваги. Для смаження кружальцями — смажте на сильному вогні в один шар і не накривайте.",
          "Сучасні сорти баклажанів майже не гірчать. Але посолити їх однаково корисно: скибочки, посипані сіллю на 20–30 хвилин, утрачають зайву вологу, стають щільнішими й під час смаження вбирають набагато менше олії. Після солі промийте й обсушіть.",
        ],
        tip: "Баклажан — губка для олії. Замість того щоб доливати олію на сковороду, змастіть скибочки пензликом і запечіть за 220 °C 20 хвилин — вийде смачно й удвічі менш жирно.",
      },
      {
        heading: "Карамелізована цибуля",
        paragraphs: [
          "Справжня карамелізована цибуля — медова, м'яка, темно-золота — потребує часу: 40–60 хвилин на слабкому вогні. «Карамелізована цибуля за 10 хвилин» — це просто смажена цибуля.",
          "Наріжте 1 кг цибулі тонкими півкільцями. Розтопіть 30 г вершкового масла з 1 ст. л. олії в широкій сковороді з товстим дном. Додайте цибулю й дрібку солі, накрийте кришкою на перші 10 хвилин, щоб вона розм'якла. Потім зніміть кришку й готуйте на слабкому вогні, помішуючи кожні 5–7 хвилин. Якщо починає прилипати — додайте ложку води й зішкребіть із дна: це і є карамель.",
        ],
        tip: "З 1 кг сирої цибулі виходить близько 250 г карамелізованої. Зробіть велику порцію й заморозьте у формочках для льоду — для супів, бургерів, піци й паст.",
      },
      {
        heading: "Як зберегти вітаміни",
        paragraphs: [
          "Водорозчинні вітаміни (C і група B) переходять у воду й руйнуються від довгого нагрівання. Жиророзчинні (A, E, K) і каротиноїди, навпаки, краще засвоюються з жиром і після теплової обробки.",
        ],
        list: [
          "Готуйте швидко й із мінімумом води: на парі, у мікрохвильовці, запікання, швидке смаження.",
          "Ріжте безпосередньо перед готуванням: нарізані овочі швидше втрачають вітамін C.",
          "Додавайте трохи олії до моркви, гарбуза, шпинату, томатів: бета-каротин і лікопін засвоюються з жиром.",
          "Використовуйте воду від варіння овочів у супах і соусах.",
          "Різноманітність важливіша за ідеальний спосіб: сирі, запечені й тушковані овочі — усі корисні.",
        ],
      },
      {
        heading: "Заморожені овочі — це нормально",
        paragraphs: [
          "Заморожені овочі часто не менш корисні, ніж «свіжі» з магазину: їх заморожують за кілька годин після збирання, на піку стиглості, а свіжі взимку можуть тижнями їхати й лежати на прилавку, утрачаючи вітаміни.",
          "Не розморожуйте їх перед готуванням — вони розкиснуть. Для супів і рагу кладіть просто з морозилки. Для запікання — викладіть на розпечене деко в один шар, збризніть олією й збільште час на 5–10 хвилин. Для обсмажування — сильний вогонь і невеликі порції, щоб лід швидко випарувався.",
        ],
      },
    ],
  },
  faq: {
    ru: [
      { q: "Почему овощи в духовке не румянятся?", a: "Они мокрые, противень переполнен или температура низкая. Обсушите, разложите в один слой с промежутками и запекайте при 220 °C." },
      { q: "Как запечь разные овощи вместе, чтобы все были готовы одновременно?", a: "Режьте твёрдые (картофель, морковь) мельче, мягкие (перец, кабачок) — крупнее. Или закладывайте по очереди: сначала корнеплоды, через 15 минут — остальное." },
      { q: "Можно ли запекать овощи без масла?", a: "Можно, но они получатся суше и менее румяными. Масло проводит тепло и помогает карамелизации. Хватит 1 ст. л. на противень, если распределить руками." },
      { q: "Как хранить запечённые овощи?", a: "3–4 дня в холодильнике в закрытом контейнере. Разогревайте в духовке или на сковороде, а не в микроволновке: так они снова станут слегка хрустящими." },
      { q: "Как приготовить брокколи на пару без пароварки?", a: "Налейте в кастрюлю 2–3 см воды, поставьте сверху металлический дуршлаг или сито с брокколи и накройте крышкой. 4–5 минут после закипания." },
    ],
    en: [
      { q: "Why don't my roast vegetables brown?", a: "They're wet, the tray is crowded or the oven is too cool. Dry them, spread them in a single layer with gaps and roast at 220 °C." },
      { q: "How do I roast different vegetables together so they're all done at once?", a: "Cut hard ones (potato, carrot) smaller and soft ones (pepper, courgette) larger. Or add them in stages: root vegetables first, the rest 15 minutes later." },
      { q: "Can I roast vegetables without oil?", a: "You can, but they'll be drier and less browned. Oil conducts heat and helps caramelisation. 1 tbsp per tray is enough if you spread it by hand." },
      { q: "How do I store roast vegetables?", a: "3–4 days in the fridge in a sealed container. Reheat in the oven or a pan, not the microwave — that way they crisp up a little again." },
      { q: "How do I steam broccoli without a steamer?", a: "Pour 2–3 cm of water into a pan, set a metal colander or sieve with the broccoli over it and cover with a lid. 4–5 minutes once it boils." },
    ],
    ua: [
      { q: "Чому овочі в духовці не рум'яняться?", a: "Вони мокрі, деко переповнене або температура низька. Обсушіть, розкладіть в один шар із проміжками й запікайте за 220 °C." },
      { q: "Як запекти різні овочі разом, щоб усі були готові одночасно?", a: "Ріжте тверді (картоплю, моркву) дрібніше, м'які (перець, кабачок) — більше. Або закладайте по черзі: спершу коренеплоди, через 15 хвилин — решту." },
      { q: "Чи можна запікати овочі без олії?", a: "Можна, але вони вийдуть сухішими й менш рум'яними. Олія проводить тепло й допомагає карамелізації. Досить 1 ст. л. на деко, якщо розподілити руками." },
      { q: "Як зберігати запечені овочі?", a: "3–4 дні в холодильнику в закритому контейнері. Розігрівайте в духовці або на сковороді, а не в мікрохвильовці: так вони знову стануть трохи хрусткими." },
      { q: "Як приготувати броколі на парі без пароварки?", a: "Налийте в каструлю 2–3 см води, поставте зверху металевий друшляк або сито з броколі й накрийте кришкою. 4–5 хвилин після закипання." },
    ],
  },
};
