import type { Guide } from "./types";

export const guide: Guide = {
  slug: "ryba-i-moreprodukty",
  emoji: "🐟",
  image: "/img/guides/ryba-i-moreprodukty.webp",
  updated: "2026-09-26",
  title: {
    ru: "Рыба и морепродукты: хрустящая кожа, сочное филе и креветки без «резины»",
    en: "Fish and seafood: crisp skin, juicy fillets and shrimp that aren't rubbery",
    ua: "Риба й морепродукти: хрустка шкірка, соковите філе та креветки без «гуми»",
  },
  summary: {
    ru: "Как выбрать свежую рыбу, правильно разморозить и посолить её за 15 минут, пожарить с хрустящей кожей и не пересушить в духовке. Сколько секунд варить креветки и кальмары, как убрать запах тины и что делать с мидиями.",
    en: "How to choose fresh fish, thaw it properly and salt it in 15 minutes, pan-fry it with crisp skin and not dry it out in the oven. How many seconds shrimp and squid need, how to get rid of a muddy taste and what to do with mussels.",
    ua: "Як обрати свіжу рибу, правильно розморозити й посолити її за 15 хвилин, підсмажити з хрусткою шкіркою й не пересушити в духовці. Скільки секунд варити креветки й кальмари, як прибрати запах твані та що робити з мідіями.",
  },
  relatedRecipes: ["krevetki-v-chesnochnom-masle", "hrustyaschie-krevetki", "rybnye-kotlety-iz-mintaya", "limonno-perechnye-krevetki"],
  sections: {
    ru: [
      {
        heading: "Как выбрать свежую рыбу",
        paragraphs: [
          "Свежая рыба пахнет морем, огурцом или просто водой — но не «рыбой». Резкий аммиачный или кисловатый запах — признак того, что она лежит давно.",
        ],
        list: [
          "Глаза — выпуклые и прозрачные, не мутные и не впалые.",
          "Жабры — ярко-красные или розовые, не бурые и не серые.",
          "Мякоть — упругая: ямка от пальца выравнивается за секунду.",
          "Чешуя — блестящая, плотно прилегает.",
          "Филе — без засохших краёв и без лужицы мутной жидкости в упаковке.",
        ],
        tip: "Замороженная рыба часто лучше «охлаждённой» с прилавка: её морозят прямо на судне через несколько часов после вылова. Смотрите, чтобы в пакете не было снега и льда — это признак повторной заморозки.",
      },
      {
        heading: "Разморозка без потери сока",
        paragraphs: [
          "Лучший способ — переложить рыбу в холодильник на ночь, на тарелку, чтобы стекала жидкость. Филе оттает за 8–12 часов и потеряет минимум сока.",
          "Быстрый способ — в закрытом пакете в миске холодной воды: филе 2–3 см оттает за 30–60 минут. Горячая вода и микроволновка «сваривают» края, пока середина ещё ледяная.",
          "Филе можно готовить и без разморозки — в духовке или на пару, увеличив время примерно в полтора раза. А вот для жарки его нужно разморозить и тщательно обсушить.",
        ],
      },
      {
        heading: "Сухой посол за 15 минут: плотное и ароматное филе",
        paragraphs: [
          "Рыба нежнее мяса и легко разваливается. Короткий посол заранее делает её плотнее и сочнее: соль слегка перестраивает белки, и они меньше отдают влагу при нагреве. Заодно уходит белый «творожистый» белок, который выступает на лососе.",
          "Посыпьте филе солью — ½ ч. л. (3 г) на 200 г рыбы — и оставьте на 15 минут в холодильнике. Выступившую влагу промокните бумажным полотенцем. Больше соли в процессе готовки не нужно.",
        ],
        tip: "Вариант для особо сочной рыбы — рассол: 1 ст. л. соли на 1 литр холодной воды, филе в нём 10–15 минут. Потом обязательно обсушить.",
      },
      {
        heading: "Как пожарить рыбу с хрустящей кожей",
        paragraphs: [
          "Хрустящая кожа — это вопрос влаги и терпения. Кожа должна быть абсолютно сухой: промокните её полотенцем и, если есть время, оставьте рыбу в холодильнике без крышки на 30 минут.",
        ],
        list: [
          "Сделайте на коже 2–3 неглубоких надреза, чтобы филе не выгибалось.",
          "Разогрейте сковороду с 1–2 ст. л. масла до лёгкой дымки.",
          "Положите филе кожей вниз и прижмите лопаткой на 10–15 секунд.",
          "Не двигайте рыбу! 70–80% времени она жарится на коже: для филе толщиной 2,5 см — 4–5 минут.",
          "Когда мякоть побелеет на ⅔ высоты, переверните на 30–60 секунд — и снимайте.",
        ],
        tip: "Если рыба прилипла — не отдирайте её. Подождите ещё минуту: когда корочка сформируется, филе само отойдёт от сковороды.",
      },
      {
        heading: "Духовка: правило 10 минут",
        paragraphs: [
          "Простой ориентир, который работает почти для любой рыбы: 10 минут на каждые 2,5 см толщины при 200–220 °C. Меряйте в самом толстом месте.",
          "Если есть термометр: лосось с чуть полупрозрачной серединой — 50–52 °C внутри, полностью готовый — 55–60 °C. Белая рыба (треска, хек, минтай) — 60 °C. Выше 63 °C любая рыба начинает становиться сухой.",
          "Признак готовности без термометра — мякоть легко расслаивается вилкой на пластины и в центре больше не стекловидная.",
        ],
        tip: "Запекайте рыбу в пергаменте или фольге с кусочком масла, ломтиком лимона и веточкой укропа. Пар внутри конверта не даёт рыбе пересохнуть даже если вы передержали пару минут.",
      },
      {
        heading: "Как убрать запах тины и «рыбный» дух",
        paragraphs: [
          "Речная рыба (карп, щука, толстолобик) и минтай могут отдавать тиной. Помогает молоко: залейте филе на 20–30 минут, потом промойте и обсушите. Белки молока связывают вещества, которые дают неприятный запах.",
          "Кислота тоже работает: лимонный сок, белое вино, уксус. Сбрызните рыбу за 10 минут до готовки. Дольше не держите — кислота начнёт «варить» белок, и мякоть станет рыхлой.",
          "Руки и доску отмоет от запаха лимон или соль, а сковороду — пара ложек уксуса в горячей воде.",
        ],
      },
      {
        heading: "Креветки: считайте секунды",
        paragraphs: [
          "Креветки готовятся очень быстро и так же быстро превращаются в резину. Главный ориентир — форма: готовая креветка изогнута буквой «С». Если свернулась в «О» — вы её передержали.",
        ],
        list: [
          "Сырые (серые) очищенные среднего размера — 2–3 минуты на сковороде, по 1–1,5 минуты с каждой стороны.",
          "Варёно-мороженые (розовые) — только прогреть: 30–60 секунд в соусе или залить кипятком на 1 минуту.",
          "Королевские в панцире — 3–4 минуты в кипящей подсоленной воде после закипания.",
        ],
        tip: "Секрет упругих и хрустящих креветок: на 500 г очищенных креветок — 1 ст. л. соли и ½ ч. л. пищевой соды, перемешайте и оставьте на 15–20 минут. Сода поднимает pH, и креветки при жарке получаются плотными, сочными и лучше подрумяниваются. Потом промокните.",
      },
      {
        heading: "Кальмары и мидии",
        paragraphs: [
          "У кальмара две зоны готовности: 1–2 минуты или 30–40 минут. Быстро на сильном огне — он нежный. Дольше пары минут — становится жёстким, и снова мягким только после долгого тушения. Всё, что между, — резина.",
          "Мидии в раковинах перед готовкой переберите: открытые, которые не закрываются при постукивании, выбросьте. Готовьте под крышкой в небольшом количестве вина или бульона 5–7 минут, пока раковины не раскроются. Те, что так и не открылись, тоже выбросьте.",
        ],
        tip: "Замороженные кальмары и креветки часто покрыты толстым слоем льда («глазурью»), который может составлять до трети веса. Сравнивайте цену за килограмм нетто — она указывается на упаковке.",
      },
      {
        heading: "Специи и соусы к рыбе",
        paragraphs: [
          "Рыба любит простое: лимон, укроп, петрушку, чеснок, сливочное масло, белое вино, каперсы. Для жирных рыб (лосось, скумбрия) — соевый соус, мёд, имбирь, горчица. Для белой рыбы — паприка, тимьян, томаты.",
          "Быстрый соус к любой рыбе: растопите 50 г сливочного масла, добавьте сок половины лимона, 1 ст. л. каперсов и рубленую петрушку. Готово за 2 минуты.",
        ],
      },
    ],
    en: [
      {
        heading: "How to choose fresh fish",
        paragraphs: [
          "Fresh fish smells of the sea, of cucumber or simply of water — but not \"fishy\". A sharp ammonia or sourish smell means it has been sitting a while.",
        ],
        list: [
          "Eyes — bulging and clear, not cloudy or sunken.",
          "Gills — bright red or pink, not brown or grey.",
          "Flesh — springy: a fingertip dent springs back in a second.",
          "Scales — shiny and tight.",
          "Fillets — no dried edges and no pool of cloudy liquid in the pack.",
        ],
        tip: "Frozen fish is often better than \"chilled\" fish on the counter: it's frozen on the boat a few hours after the catch. Make sure there is no snow or ice in the bag — that's a sign it was thawed and refrozen.",
      },
      {
        heading: "Thawing without losing juice",
        paragraphs: [
          "The best way is to move the fish to the fridge overnight on a plate so the liquid can drain. A fillet thaws in 8–12 hours and loses very little juice.",
          "The quick way is in a sealed bag in a bowl of cold water: a 2–3 cm fillet thaws in 30–60 minutes. Hot water and the microwave cook the edges while the middle is still frozen.",
          "You can cook fillets from frozen in the oven or steamer, allowing about half as long again. For pan-frying, though, thaw and dry them thoroughly.",
        ],
      },
      {
        heading: "A 15-minute dry brine: firm, flavourful fillets",
        paragraphs: [
          "Fish is more delicate than meat and falls apart easily. A short salting in advance makes it firmer and juicier: salt slightly restructures the proteins so they hold on to more moisture when heated. It also cuts down the white curd-like albumin that seeps out of salmon.",
          "Sprinkle the fillet with salt — ½ tsp (3 g) per 200 g of fish — and leave for 15 minutes in the fridge. Pat away the moisture that appears. No more salt is needed while cooking.",
        ],
        tip: "For extra-juicy fish use a brine: 1 tbsp salt per 1 litre of cold water, fillets in it for 10–15 minutes. Dry them well afterwards.",
      },
      {
        heading: "How to pan-fry fish with crisp skin",
        paragraphs: [
          "Crisp skin is about moisture and patience. The skin must be bone dry: pat it with a towel and, if you have time, leave the fish uncovered in the fridge for 30 minutes.",
        ],
        list: [
          "Make 2–3 shallow cuts in the skin so the fillet doesn't curl.",
          "Heat a pan with 1–2 tbsp oil until it just shimmers.",
          "Lay the fillet skin-side down and press it with a spatula for 10–15 seconds.",
          "Don't move it! It spends 70–80% of the time on the skin: 4–5 minutes for a 2.5 cm fillet.",
          "When the flesh has turned opaque two-thirds of the way up, flip for 30–60 seconds and take it off.",
        ],
        tip: "If the fish sticks, don't tear it off. Wait another minute: once the crust forms, the fillet releases by itself.",
      },
      {
        heading: "The oven: the 10-minute rule",
        paragraphs: [
          "A simple guide that works for almost any fish: 10 minutes per 2.5 cm of thickness at 200–220 °C. Measure at the thickest point.",
          "With a thermometer: salmon with a slightly translucent centre is 50–52 °C inside, fully cooked is 55–60 °C. White fish (cod, hake, pollock) — 60 °C. Above 63 °C any fish starts to dry out.",
          "Without a thermometer: the flesh flakes easily with a fork and is no longer glassy in the middle.",
        ],
        tip: "Bake fish in parchment or foil with a knob of butter, a slice of lemon and a sprig of dill. The steam inside the parcel keeps it moist even if you overshoot by a couple of minutes.",
      },
      {
        heading: "Getting rid of muddy and fishy smells",
        paragraphs: [
          "Freshwater fish (carp, pike, silver carp) and pollock can taste muddy. Milk helps: soak the fillets for 20–30 minutes, then rinse and dry. Milk proteins bind the compounds behind the smell.",
          "Acid works too: lemon juice, white wine, vinegar. Sprinkle the fish 10 minutes before cooking. Not longer — acid starts to \"cook\" the protein and the flesh turns mushy.",
          "Lemon or salt gets the smell off your hands and board; a couple of spoons of vinegar in hot water does the pan.",
        ],
      },
      {
        heading: "Shrimp: count the seconds",
        paragraphs: [
          "Shrimp cook very fast and turn rubbery just as fast. The main guide is shape: a cooked shrimp curls into a C. If it has curled into an O, it's overdone.",
        ],
        list: [
          "Raw (grey) peeled medium shrimp — 2–3 minutes in a pan, 1–1.5 minutes per side.",
          "Cooked-frozen (pink) — just warm through: 30–60 seconds in a sauce or 1 minute in boiling water.",
          "King prawns in the shell — 3–4 minutes in salted boiling water once it returns to the boil.",
        ],
        tip: "The secret of firm, snappy shrimp: toss 500 g peeled shrimp with 1 tbsp salt and ½ tsp baking soda and leave for 15–20 minutes. The soda raises the pH so they cook up plump, juicy and brown better. Pat dry afterwards.",
      },
      {
        heading: "Squid and mussels",
        paragraphs: [
          "Squid has two windows: 1–2 minutes or 30–40 minutes. Quick over high heat, it's tender. Longer than a couple of minutes it toughens and only turns soft again after a long braise. Anything in between is rubber.",
          "Sort mussels before cooking: throw away any open ones that don't close when tapped. Cook covered in a little wine or stock for 5–7 minutes until the shells open. Discard any that stay shut.",
        ],
        tip: "Frozen squid and shrimp are often coated in a thick layer of ice glaze, which can make up to a third of the weight. Compare the price per kilo of net weight — it's printed on the pack.",
      },
      {
        heading: "Seasonings and sauces for fish",
        paragraphs: [
          "Fish loves simple things: lemon, dill, parsley, garlic, butter, white wine, capers. For oily fish (salmon, mackerel) — soy sauce, honey, ginger, mustard. For white fish — paprika, thyme, tomatoes.",
          "A quick sauce for any fish: melt 50 g butter, add the juice of half a lemon, 1 tbsp capers and chopped parsley. Ready in 2 minutes.",
        ],
      },
    ],
    ua: [
      {
        heading: "Як обрати свіжу рибу",
        paragraphs: [
          "Свіжа риба пахне морем, огірком або просто водою — але не «рибою». Різкий аміачний чи кислуватий запах — ознака того, що вона лежить давно.",
        ],
        list: [
          "Очі — опуклі й прозорі, не каламутні й не запалі.",
          "Зябра — яскраво-червоні або рожеві, не бурі й не сірі.",
          "М'якоть — пружна: ямка від пальця вирівнюється за секунду.",
          "Луска — блискуча, щільно прилягає.",
          "Філе — без засохлих країв і без калюжки каламутної рідини в упаковці.",
        ],
        tip: "Заморожена риба часто краща за «охолоджену» з прилавка: її заморожують просто на судні за кілька годин після вилову. Стежте, щоб у пакеті не було снігу й льоду — це ознака повторного заморожування.",
      },
      {
        heading: "Розморожування без втрати соку",
        paragraphs: [
          "Найкращий спосіб — перекласти рибу в холодильник на ніч, на тарілку, щоб стікала рідина. Філе відтане за 8–12 годин і втратить мінімум соку.",
          "Швидкий спосіб — у закритому пакеті в мисці холодної води: філе 2–3 см відтане за 30–60 хвилин. Гаряча вода й мікрохвильовка «варять» краї, поки середина ще крижана.",
          "Філе можна готувати й без розморожування — у духовці чи на парі, збільшивши час приблизно в півтора раза. А от для смаження його треба розморозити й ретельно обсушити.",
        ],
      },
      {
        heading: "Сухе соління за 15 хвилин: щільне й ароматне філе",
        paragraphs: [
          "Риба ніжніша за м'ясо й легко розвалюється. Коротке соління заздалегідь робить її щільнішою й соковитішою: сіль трохи перебудовує білки, і вони менше віддають вологу під час нагрівання. Заразом зникає білий «сирнистий» білок, який виступає на лососі.",
          "Посипте філе сіллю — ½ ч. л. (3 г) на 200 г риби — і залиште на 15 хвилин у холодильнику. Вологу, що виступила, промокніть паперовим рушником. Більше солі під час готування не потрібно.",
        ],
        tip: "Варіант для особливо соковитої риби — розсіл: 1 ст. л. солі на 1 літр холодної води, філе в ньому 10–15 хвилин. Потім обов'язково обсушити.",
      },
      {
        heading: "Як підсмажити рибу з хрусткою шкіркою",
        paragraphs: [
          "Хрустка шкірка — це питання вологи й терпіння. Шкірка має бути абсолютно сухою: промокніть її рушником і, якщо є час, залиште рибу в холодильнику без кришки на 30 хвилин.",
        ],
        list: [
          "Зробіть на шкірці 2–3 неглибокі надрізи, щоб філе не вигиналося.",
          "Розігрійте сковороду з 1–2 ст. л. олії до легкого серпанку.",
          "Покладіть філе шкіркою донизу й притисніть лопаткою на 10–15 секунд.",
          "Не рухайте рибу! 70–80% часу вона смажиться на шкірці: для філе завтовшки 2,5 см — 4–5 хвилин.",
          "Коли м'якоть побіліє на ⅔ висоти, переверніть на 30–60 секунд — і знімайте.",
        ],
        tip: "Якщо риба прилипла — не віддирайте її. Зачекайте ще хвилину: коли скоринка сформується, філе саме відійде від сковороди.",
      },
      {
        heading: "Духовка: правило 10 хвилин",
        paragraphs: [
          "Простий орієнтир, що працює майже для будь-якої риби: 10 хвилин на кожні 2,5 см товщини за 200–220 °C. Міряйте в найтовщому місці.",
          "Якщо є термометр: лосось із трохи напівпрозорою серединою — 50–52 °C усередині, повністю готовий — 55–60 °C. Біла риба (тріска, хек, минтай) — 60 °C. Вище 63 °C будь-яка риба починає ставати сухою.",
          "Ознака готовності без термометра — м'якоть легко розшаровується виделкою на пластини й у центрі більше не склоподібна.",
        ],
        tip: "Запікайте рибу в пергаменті або фользі зі шматочком масла, скибочкою лимона й гілочкою кропу. Пара всередині конверта не дає рибі пересохнути, навіть якщо ви передержали кілька хвилин.",
      },
      {
        heading: "Як прибрати запах твані та «рибний» дух",
        paragraphs: [
          "Річкова риба (короп, щука, товстолоб) і минтай можуть віддавати тванню. Допомагає молоко: залийте філе на 20–30 хвилин, потім промийте й обсушіть. Білки молока зв'язують речовини, що дають неприємний запах.",
          "Кислота теж працює: лимонний сік, біле вино, оцет. Збризніть рибу за 10 хвилин до готування. Довше не тримайте — кислота почне «варити» білок, і м'якоть стане пухкою.",
          "Руки й дошку відмиє від запаху лимон або сіль, а сковороду — кілька ложок оцту в гарячій воді.",
        ],
      },
      {
        heading: "Креветки: рахуйте секунди",
        paragraphs: [
          "Креветки готуються дуже швидко й так само швидко перетворюються на гуму. Головний орієнтир — форма: готова креветка вигнута літерою «С». Якщо згорнулася в «О» — ви її передержали.",
        ],
        list: [
          "Сирі (сірі) очищені середнього розміру — 2–3 хвилини на сковороді, по 1–1,5 хвилини з кожного боку.",
          "Варено-морожені (рожеві) — лише прогріти: 30–60 секунд у соусі або залити окропом на 1 хвилину.",
          "Королівські в панцирі — 3–4 хвилини в киплячій підсоленій воді після закипання.",
        ],
        tip: "Секрет пружних і хрустких креветок: на 500 г очищених креветок — 1 ст. л. солі й ½ ч. л. харчової соди, перемішайте й залиште на 15–20 хвилин. Сода підвищує pH, і креветки під час смаження виходять щільними, соковитими й краще рум'яняться. Потім промокніть.",
      },
      {
        heading: "Кальмари й мідії",
        paragraphs: [
          "У кальмара дві зони готовності: 1–2 хвилини або 30–40 хвилин. Швидко на сильному вогні — він ніжний. Довше за кілька хвилин — стає жорстким і знову м'яким лише після довгого тушкування. Усе, що посередині, — гума.",
          "Мідії в черепашках перед готуванням переберіть: відкриті, що не закриваються від постукування, викиньте. Готуйте під кришкою в невеликій кількості вина або бульйону 5–7 хвилин, доки черепашки не розкриються. Ті, що так і не відкрилися, теж викиньте.",
        ],
        tip: "Заморожені кальмари й креветки часто вкриті товстим шаром льоду («глазур'ю»), який може становити до третини ваги. Порівнюйте ціну за кілограм нетто — її вказують на упаковці.",
      },
      {
        heading: "Спеції та соуси до риби",
        paragraphs: [
          "Риба любить просте: лимон, кріп, петрушку, часник, вершкове масло, біле вино, каперси. Для жирних риб (лосось, скумбрія) — соєвий соус, мед, імбир, гірчицю. Для білої риби — паприку, чебрець, томати.",
          "Швидкий соус до будь-якої риби: розтопіть 50 г вершкового масла, додайте сік половини лимона, 1 ст. л. каперсів і рубану петрушку. Готово за 2 хвилини.",
        ],
      },
    ],
  },
  faq: {
    ru: [
      { q: "Почему рыба разваливается на сковороде?", a: "Её переворачивают слишком рано или слишком часто. Дайте корочке сформироваться и переворачивайте один раз широкой лопаткой. Помогает и 15-минутный сухой посол." },
      { q: "Нужно ли чистить креветки от кишечной вены?", a: "У крупных — желательно: тёмная полоска может хрустеть песком. Надрежьте спинку ножом и вытащите вену зубочисткой." },
      { q: "Можно ли повторно заморозить рыбу?", a: "Сырую — нежелательно: ухудшится текстура. А вот приготовленную из размороженной рыбы блюдо заморозить можно." },
      { q: "Как понять, что рыба готова, без термометра?", a: "Вставьте нож в самое толстое место на 5 секунд и приложите лезвие к губе. Тёплое — готово, холодное — нет. А мякоть должна расслаиваться на пластины." },
      { q: "Сколько хранится приготовленная рыба?", a: "1–2 дня в холодильнике в закрытом контейнере. Разогревайте мягко, под крышкой, иначе она пересохнет." },
    ],
    en: [
      { q: "Why does fish fall apart in the pan?", a: "It's turned too early or too often. Let the crust form and flip once with a wide spatula. The 15-minute dry brine helps too." },
      { q: "Do I need to devein shrimp?", a: "For large ones, yes: the dark vein can be gritty. Slit the back with a knife and lift the vein out with a toothpick." },
      { q: "Can I refreeze fish?", a: "Raw — better not, the texture suffers. A dish cooked from thawed fish can be frozen, though." },
      { q: "How do I tell fish is done without a thermometer?", a: "Push a knife into the thickest part for 5 seconds and touch the blade to your lip. Warm means done, cold means not yet. The flesh should also flake." },
      { q: "How long does cooked fish keep?", a: "1–2 days in the fridge in a sealed container. Reheat gently and covered or it will dry out." },
    ],
    ua: [
      { q: "Чому риба розвалюється на сковороді?", a: "Її перевертають надто рано або надто часто. Дайте скоринці сформуватися й перевертайте один раз широкою лопаткою. Допомагає й 15-хвилинне сухе соління." },
      { q: "Чи треба чистити креветки від кишкової вени?", a: "У великих — бажано: темна смужка може хрустіти піском. Надріжте спинку ножем і витягніть вену зубочисткою." },
      { q: "Чи можна повторно заморозити рибу?", a: "Сиру — небажано: погіршиться текстура. А от страву, приготовану з розмороженої риби, заморозити можна." },
      { q: "Як зрозуміти, що риба готова, без термометра?", a: "Встроміть ніж у найтовще місце на 5 секунд і прикладіть лезо до губи. Тепле — готово, холодне — ні. А м'якоть має розшаровуватися на пластини." },
      { q: "Скільки зберігається приготована риба?", a: "1–2 дні в холодильнику в закритому контейнері. Розігрівайте м'яко, під кришкою, інакше вона пересохне." },
    ],
  },
};
