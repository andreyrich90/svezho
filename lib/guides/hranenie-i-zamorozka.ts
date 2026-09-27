import type { Guide } from "./types";

export const guide: Guide = {
  slug: "hranenie-i-zamorozka",
  emoji: "🧊",
  image: "/img/guides/hranenie-i-zamorozka.webp",
  updated: "2026-09-26",
  title: {
    ru: "Как хранить и замораживать продукты: зоны холодильника, сроки и правильная разморозка",
    en: "How to store and freeze food: fridge zones, storage times and safe thawing",
    ua: "Як зберігати й заморожувати продукти: зони холодильника, терміни й правильне розморожування",
  },
  summary: {
    ru: "Что класть на какую полку холодильника, какие продукты нельзя хранить в холоде, сколько живут готовые блюда, как замораживать ягоды, зелень и мясо без потери вкуса и как безопасно размораживать — без стола и горячей воды.",
    en: "What goes on which fridge shelf, which foods shouldn't be chilled, how long cooked dishes keep, how to freeze berries, herbs and meat without losing flavour, and how to thaw safely — no counter-top or hot water.",
    ua: "Що класти на яку полицю холодильника, які продукти не можна зберігати в холоді, скільки живуть готові страви, як заморожувати ягоди, зелень і м'ясо без втрати смаку й як безпечно розморожувати — без столу й гарячої води.",
  },
  sections: {
    ru: [
      {
        heading: "Правильная температура",
        paragraphs: [
          "Холодильник должен держать 1–4 °C, морозилка — минус 18 °C или ниже. При +5 °C и выше бактерии размножаются заметно быстрее, и продукты портятся раньше срока. Если у холодильника нет табло, положите на среднюю полку недорогой термометр — это самый простой способ проверить.",
          "Не набивайте холодильник до отказа: холодному воздуху нужно циркулировать. И не ставьте внутрь горячее — остудите кастрюлю до комнатной температуры (но не дольше 2 часов) и только потом убирайте.",
        ],
      },
      {
        heading: "Что на какую полку",
        paragraphs: ["В холодильнике разные зоны, и у каждой своя задача:"],
        list: [
          "Верхние полки — готовые блюда, остатки, сыр, колбасы, то, что едят без обработки.",
          "Средние полки — молочные продукты, яйца (в родной упаковке, а не в дверце).",
          "Нижняя полка, ближе к задней стенке, — самое холодное место: сырое мясо, птица и рыба. Всегда на тарелке или в контейнере, чтобы сок не капал на другие продукты.",
          "Ящики для овощей — овощи и фрукты с повышенной влажностью.",
          "Дверца — самая тёплая зона: соусы, напитки, масло. Не молоко и не яйца.",
        ],
      },
      {
        heading: "Что не нужно хранить в холодильнике",
        paragraphs: [
          "Некоторые продукты холод портит, а не бережёт.",
        ],
        list: [
          "Помидоры — теряют вкус и становятся мучнистыми. Храните при комнатной температуре.",
          "Бананы — чернеют. Авокадо дозревает только в тепле, а в холодильник его можно убрать уже спелым.",
          "Картофель — крахмал превращается в сахар, картошка сластит. Нужен тёмный прохладный шкаф.",
          "Лук и чеснок — отсыревают и прорастают. Храните в сухом месте, но отдельно от картофеля: лук ускоряет его прорастание.",
          "Хлеб — в холодильнике черствеет быстрее, чем на столе. Если не успеваете съесть — замораживайте.",
          "Базилик — чернеет от холода. Держите как букет в стакане воды на столе.",
        ],
      },
      {
        heading: "Зелень, сыр и фрукты",
        paragraphs: [
          "Петрушку, укроп и кинзу поставьте как букет в банку с водой, накройте пакетом и уберите в холодильник — они простоят 1–2 недели. Другой способ — завернуть сухую зелень в бумажное полотенце и положить в контейнер.",
          "Сыр в плёнке «задыхается» и покрывается плесенью. Заворачивайте его в пергамент или бумагу, а сверху — в неплотный пакет.",
          "Яблоки выделяют этилен — газ, который ускоряет созревание и порчу других фруктов и овощей. Храните их отдельно.",
        ],
      },
      {
        heading: "Сколько хранятся готовые блюда",
        paragraphs: [
          "Остатки еды убирайте в холодильник в течение 2 часов после приготовления, в закрытых контейнерах. Большие объёмы (кастрюля супа) разложите в неглубокие ёмкости — так они остынут быстрее.",
        ],
        list: [
          "Большинство готовых блюд, супы, гарниры — 3–4 дня.",
          "Отварной рис — не больше суток.",
          "Салаты с майонезом — до 12–24 часов.",
          "Фарш и сырая рыба — 1–2 дня, сырое мясо кусками и птица — 2–3 дня.",
          "Если сомневаетесь — не пробуйте. Выбросить дешевле, чем отравиться.",
        ],
      },
      {
        heading: "Как замораживать правильно",
        paragraphs: [
          "Главные враги заморозки — воздух и медленное замерзание. Воздух вызывает «ожог морозилки» — сухие серые пятна и посторонний вкус. Поэтому упаковывайте продукты плоско, в пакеты с застёжкой, выдавливая весь воздух. Плоский пакет замерзает и размораживается быстрее и занимает меньше места.",
          "Всегда подписывайте пакет: что внутри и дата. Через три месяца вы не отличите фарш из говядины от свиного.",
        ],
        list: [
          "Ягоды: разложите в один слой на подносе, заморозьте 2 часа, затем пересыпьте в пакет. Они не слипнутся в комок.",
          "Зелень: мелко порубите, разложите в формочки для льда, залейте оливковым маслом или водой и заморозьте. Готовые кубики для супов и соусов.",
          "Хлеб: нарезайте ломтиками перед заморозкой — можно доставать по одному и сразу в тостер.",
          "Овощи (брокколи, фасоль, морковь): бланшируйте 1–3 минуты в кипятке, сразу охладите в ледяной воде, обсушите и замораживайте — сохранят цвет и текстуру.",
          "Супы и соусы: остудите и разлейте порционно, оставив 2–3 см сверху — жидкость расширяется при замерзании.",
        ],
        tip: "Сроки в морозилке (−18 °C): сырое мясо кусками — 6–12 месяцев, фарш — 3–4 месяца, птица — до 9–12 месяцев, жирная рыба — 2–3 месяца, нежирная — до 6, готовые блюда — 2–3 месяца.",
      },
      {
        heading: "Как безопасно размораживать",
        paragraphs: [
          "Никогда не размораживайте мясо и рыбу на столе при комнатной температуре: поверхность быстро нагревается до опасной зоны, пока середина ещё ледяная. Горячая вода — по той же причине плохая идея.",
        ],
        list: [
          "В холодильнике — самый безопасный способ. Кусок мяса 500 г размораживается примерно за ночь, целая курица — за сутки. Положите на тарелку, на нижнюю полку.",
          "В холодной воде — быстрее: герметичный пакет погрузите в холодную воду и меняйте её каждые 30 минут. 500 г оттают за 1–1,5 часа. Готовить сразу.",
          "В микроволновке в режиме разморозки — быстро, но края могут начать готовиться. Готовить сразу после разморозки.",
        ],
        tip: "Размороженное в холодильнике сырое мясо можно заморозить снова (вкус станет немного хуже). Размороженное в воде или микроволновке — только приготовить, а уже готовое блюдо можно заморозить.",
      },
      {
        heading: "Частые ошибки",
        paragraphs: ["Что сокращает жизнь продуктов:"],
        list: [
          "Холодильник настроен на +6…+8 °C.",
          "Сырое мясо хранится на верхней полке и капает на готовую еду.",
          "Молоко и яйца стоят в дверце.",
          "Помидоры и хлеб лежат в холодильнике.",
          "Продукты замораживают в неподписанных пакетах с воздухом.",
          "Мясо размораживают на столе или в горячей воде.",
          "Горячую кастрюлю ставят в холодильник или, наоборот, оставляют на плите на всю ночь.",
        ],
      },
    ],
    en: [
      {
        heading: "The right temperature",
        paragraphs: [
          "The fridge should hold 1–4 °C (34–40 °F) and the freezer −18 °C (0 °F) or lower. At +5 °C and above bacteria multiply noticeably faster, and food spoils early. If your fridge has no display, put a cheap thermometer on the middle shelf — the easiest way to check.",
          "Don't cram the fridge full: cold air needs to circulate. And don't put hot food inside — cool the pot to room temperature (but for no longer than 2 hours) and only then put it away.",
        ],
      },
      {
        heading: "What goes on which shelf",
        paragraphs: ["A fridge has different zones, each with its own job:"],
        list: [
          "Top shelves — cooked dishes, leftovers, cheese, deli meats: things eaten without cooking.",
          "Middle shelves — dairy and eggs (in their carton, not in the door).",
          "Bottom shelf, towards the back — the coldest spot: raw meat, poultry and fish. Always on a plate or in a container so juices don't drip onto other food.",
          "Crisper drawers — vegetables and fruit that like higher humidity.",
          "Door — the warmest zone: sauces, drinks, butter. Not milk and not eggs.",
        ],
      },
      {
        heading: "What shouldn't go in the fridge",
        paragraphs: ["Cold harms some foods rather than protecting them."],
        list: [
          "Tomatoes — lose flavour and turn mealy. Keep at room temperature.",
          "Bananas — go black. Avocados only ripen in the warm; refrigerate them once ripe.",
          "Potatoes — starch turns to sugar and they taste sweet. They need a dark, cool cupboard.",
          "Onions and garlic — go damp and sprout. Keep them dry, but away from potatoes: onions make potatoes sprout faster.",
          "Bread — goes stale faster in the fridge than on the counter. If you can't finish it, freeze it.",
          "Basil — blackens in the cold. Keep it like a bouquet in a glass of water on the counter.",
        ],
      },
      {
        heading: "Herbs, cheese and fruit",
        paragraphs: [
          "Stand parsley, dill and coriander like a bouquet in a jar of water, cover with a bag and refrigerate — they'll last 1–2 weeks. Or wrap the dry herbs in paper towel and keep them in a container.",
          "Cheese 'suffocates' in cling film and goes mouldy. Wrap it in baking parchment or paper, then loosely in a bag.",
          "Apples give off ethylene — a gas that speeds up ripening and spoilage of other fruit and vegetables. Store them separately.",
        ],
      },
      {
        heading: "How long cooked food keeps",
        paragraphs: [
          "Refrigerate leftovers within 2 hours of cooking, in closed containers. Split large amounts (a pot of soup) into shallow containers — they'll cool faster.",
        ],
        list: [
          "Most cooked dishes, soups and sides — 3–4 days.",
          "Cooked rice — no more than a day.",
          "Salads with mayonnaise — 12–24 hours.",
          "Mince and raw fish — 1–2 days; raw meat in pieces and poultry — 2–3 days.",
          "When in doubt, don't taste it. Throwing it away is cheaper than food poisoning.",
        ],
      },
      {
        heading: "How to freeze properly",
        paragraphs: [
          "The enemies of freezing are air and slow freezing. Air causes freezer burn — dry grey patches and off flavours. So pack food flat in zip-lock bags, pressing out all the air. A flat bag freezes and thaws faster and takes less space.",
          "Always label the bag: what's inside and the date. In three months you won't tell beef mince from pork.",
        ],
        list: [
          "Berries: spread in a single layer on a tray, freeze for 2 hours, then tip into a bag. They won't freeze into one lump.",
          "Herbs: chop finely, pack into ice-cube trays, cover with olive oil or water and freeze. Ready-made cubes for soups and sauces.",
          "Bread: slice before freezing — take out one slice at a time, straight into the toaster.",
          "Vegetables (broccoli, green beans, carrots): blanch 1–3 minutes in boiling water, plunge into ice water, dry and freeze — they keep their colour and texture.",
          "Soups and sauces: cool and portion, leaving 2–3 cm at the top — liquid expands as it freezes.",
        ],
        tip: "Freezer times (−18 °C / 0 °F): raw meat in pieces — 6–12 months, mince — 3–4 months, poultry — up to 9–12 months, oily fish — 2–3 months, lean fish — up to 6, cooked dishes — 2–3 months.",
      },
      {
        heading: "How to thaw safely",
        paragraphs: [
          "Never thaw meat or fish on the counter at room temperature: the surface quickly warms into the danger zone while the middle is still frozen. Hot water is a bad idea for the same reason.",
        ],
        list: [
          "In the fridge — the safest method. A 500 g piece of meat thaws roughly overnight, a whole chicken in about a day. Put it on a plate on the bottom shelf.",
          "In cold water — faster: submerge a sealed bag in cold water and change the water every 30 minutes. 500 g thaws in 1–1.5 hours. Cook straight away.",
          "In the microwave on defrost — fast, but the edges can start cooking. Cook immediately after thawing.",
        ],
        tip: "Raw meat thawed in the fridge can be refrozen (with a slight loss of quality). Meat thawed in water or the microwave must be cooked first — the cooked dish can then be frozen.",
      },
      {
        heading: "Common mistakes",
        paragraphs: ["What shortens food's life:"],
        list: [
          "The fridge is set to +6…+8 °C.",
          "Raw meat sits on the top shelf and drips onto ready-to-eat food.",
          "Milk and eggs are kept in the door.",
          "Tomatoes and bread are kept in the fridge.",
          "Food is frozen in unlabelled bags full of air.",
          "Meat is thawed on the counter or in hot water.",
          "A hot pot goes straight into the fridge — or is left on the stove overnight.",
        ],
      },
    ],
    ua: [
      {
        heading: "Правильна температура",
        paragraphs: [
          "Холодильник має тримати 1–4 °C, морозилка — мінус 18 °C або нижче. За +5 °C і вище бактерії розмножуються помітно швидше, і продукти псуються раніше терміну. Якщо в холодильника немає табло, покладіть на середню полицю недорогий термометр — це найпростіший спосіб перевірити.",
          "Не набивайте холодильник ущент: холодному повітрю треба циркулювати. І не ставте всередину гаряче — остудіть каструлю до кімнатної температури (але не довше 2 годин) і лише потім прибирайте.",
        ],
      },
      {
        heading: "Що на яку полицю",
        paragraphs: ["У холодильнику різні зони, і в кожної своє завдання:"],
        list: [
          "Верхні полиці — готові страви, залишки, сир, ковбаси, те, що їдять без обробки.",
          "Середні полиці — молочні продукти, яйця (у рідній упаковці, а не в дверцятах).",
          "Нижня полиця, ближче до задньої стінки, — найхолодніше місце: сире м'ясо, птиця й риба. Завжди на тарілці чи в контейнері, щоб сік не капав на інші продукти.",
          "Шухляди для овочів — овочі й фрукти з підвищеною вологістю.",
          "Дверцята — найтепліша зона: соуси, напої, масло. Не молоко й не яйця.",
        ],
      },
      {
        heading: "Що не треба зберігати в холодильнику",
        paragraphs: ["Деякі продукти холод псує, а не береже."],
        list: [
          "Помідори — втрачають смак і стають борошнистими. Зберігайте за кімнатної температури.",
          "Банани — чорніють. Авокадо дозріває лише в теплі, а в холодильник його можна прибрати вже стиглим.",
          "Картопля — крохмаль перетворюється на цукор, картопля солодшає. Потрібна темна прохолодна шафа.",
          "Цибуля й часник — відсирівають і проростають. Зберігайте в сухому місці, але окремо від картоплі: цибуля пришвидшує її проростання.",
          "Хліб — у холодильнику черствіє швидше, ніж на столі. Якщо не встигаєте з'їсти — заморожуйте.",
          "Базилік — чорніє від холоду. Тримайте як букет у склянці води на столі.",
        ],
      },
      {
        heading: "Зелень, сир і фрукти",
        paragraphs: [
          "Петрушку, кріп і кінзу поставте як букет у банку з водою, накрийте пакетом і приберіть у холодильник — вони простоять 1–2 тижні. Інший спосіб — загорнути суху зелень у паперовий рушник і покласти в контейнер.",
          "Сир у плівці «задихається» й укривається пліснявою. Загортайте його в пергамент чи папір, а зверху — в нещільний пакет.",
          "Яблука виділяють етилен — газ, що пришвидшує дозрівання й псування інших фруктів і овочів. Зберігайте їх окремо.",
        ],
      },
      {
        heading: "Скільки зберігаються готові страви",
        paragraphs: [
          "Залишки їжі прибирайте в холодильник протягом 2 годин після приготування, у закритих контейнерах. Великі об'єми (каструлю супу) розкладіть у неглибокі ємності — так вони охолонуть швидше.",
        ],
        list: [
          "Більшість готових страв, супи, гарніри — 3–4 дні.",
          "Варений рис — не більше доби.",
          "Салати з майонезом — до 12–24 годин.",
          "Фарш і сира риба — 1–2 дні, сире м'ясо шматками й птиця — 2–3 дні.",
          "Якщо сумніваєтеся — не куштуйте. Викинути дешевше, ніж отруїтися.",
        ],
      },
      {
        heading: "Як заморожувати правильно",
        paragraphs: [
          "Головні вороги заморожування — повітря й повільне замерзання. Повітря спричиняє «опік морозилки» — сухі сірі плями й сторонній смак. Тому пакуйте продукти пласко, у пакети із застібкою, видавлюючи все повітря. Плаский пакет замерзає й розморожується швидше та займає менше місця.",
          "Завжди підписуйте пакет: що всередині й дата. За три місяці ви не відрізните яловичий фарш від свинячого.",
        ],
        list: [
          "Ягоди: розкладіть в один шар на таці, заморозьте 2 години, потім пересипте в пакет. Вони не злипнуться в грудку.",
          "Зелень: дрібно порубайте, розкладіть у формочки для льоду, залийте оливковою олією чи водою й заморозьте. Готові кубики для супів і соусів.",
          "Хліб: наріжте скибочками перед заморожуванням — можна діставати по одній і одразу в тостер.",
          "Овочі (броколі, квасоля, морква): бланшуйте 1–3 хвилини в окропі, одразу охолодіть у крижаній воді, обсушіть і заморожуйте — збережуть колір і текстуру.",
          "Супи й соуси: остудіть і розлийте порційно, лишивши 2–3 см зверху — рідина розширюється під час замерзання.",
        ],
        tip: "Терміни в морозилці (−18 °C): сире м'ясо шматками — 6–12 місяців, фарш — 3–4 місяці, птиця — до 9–12 місяців, жирна риба — 2–3 місяці, нежирна — до 6, готові страви — 2–3 місяці.",
      },
      {
        heading: "Як безпечно розморожувати",
        paragraphs: [
          "Ніколи не розморожуйте м'ясо й рибу на столі за кімнатної температури: поверхня швидко нагрівається до небезпечної зони, поки середина ще крижана. Гаряча вода — погана ідея з тієї ж причини.",
        ],
        list: [
          "У холодильнику — найбезпечніший спосіб. Шматок м'яса 500 г розморожується приблизно за ніч, ціла курка — за добу. Покладіть на тарілку на нижню полицю.",
          "У холодній воді — швидше: герметичний пакет занурте в холодну воду й міняйте її кожні 30 хвилин. 500 г розтануть за 1–1,5 години. Готувати одразу.",
          "У мікрохвильовці в режимі розморожування — швидко, але краї можуть почати готуватися. Готувати одразу після розморожування.",
        ],
        tip: "Сире м'ясо, розморожене в холодильнику, можна заморозити знову (смак стане трохи гіршим). Розморожене у воді чи мікрохвильовці — лише приготувати, а вже готову страву можна заморозити.",
      },
      {
        heading: "Часті помилки",
        paragraphs: ["Що скорочує життя продуктів:"],
        list: [
          "Холодильник налаштований на +6…+8 °C.",
          "Сире м'ясо зберігається на верхній полиці й капає на готову їжу.",
          "Молоко та яйця стоять у дверцятах.",
          "Помідори й хліб лежать у холодильнику.",
          "Продукти заморожують у непідписаних пакетах із повітрям.",
          "М'ясо розморожують на столі чи в гарячій воді.",
          "Гарячу каструлю ставлять у холодильник або, навпаки, лишають на плиті на всю ніч.",
        ],
      },
    ],
  },
  faq: {
    ru: [
      { q: "Сколько хранятся готовые блюда в холодильнике?", a: "Большинство — 3–4 дня. Отварной рис — не больше суток, салаты с майонезом — до 12–24 часов." },
      { q: "Как правильно разморозить мясо?", a: "Лучше всего в холодильнике: 500 г — примерно за ночь. Быстрее — в герметичном пакете в холодной воде, меняя её каждые 30 минут. Не на столе и не в горячей воде." },
      { q: "Можно ли повторно замораживать мясо?", a: "Если оно размораживалось в холодильнике — да, но вкус немного ухудшится. Если в воде или микроволновке — сначала приготовьте, потом замораживайте готовое блюдо." },
      { q: "Почему нельзя хранить помидоры в холодильнике?", a: "Холод разрушает вещества, отвечающие за вкус и аромат, и мякоть становится мучнистой. Храните помидоры при комнатной температуре." },
    ],
    en: [
      { q: "How long do cooked dishes keep in the fridge?", a: "Most keep 3–4 days. Cooked rice no more than a day, mayonnaise-based salads 12–24 hours." },
      { q: "What's the right way to thaw meat?", a: "Best in the fridge: 500 g takes roughly overnight. Faster: in a sealed bag in cold water, changing the water every 30 minutes. Not on the counter and not in hot water." },
      { q: "Can I refreeze meat?", a: "If it was thawed in the fridge, yes, with a slight loss of flavour. If thawed in water or the microwave, cook it first and freeze the cooked dish." },
      { q: "Why shouldn't tomatoes go in the fridge?", a: "Cold breaks down the compounds responsible for flavour and aroma, and the flesh turns mealy. Keep tomatoes at room temperature." },
    ],
    ua: [
      { q: "Скільки зберігаються готові страви в холодильнику?", a: "Більшість — 3–4 дні. Варений рис — не більше доби, салати з майонезом — до 12–24 годин." },
      { q: "Як правильно розморозити м'ясо?", a: "Найкраще в холодильнику: 500 г — приблизно за ніч. Швидше — у герметичному пакеті в холодній воді, міняючи її кожні 30 хвилин. Не на столі й не в гарячій воді." },
      { q: "Чи можна повторно заморожувати м'ясо?", a: "Якщо воно розморожувалося в холодильнику — так, але смак трохи погіршиться. Якщо у воді чи мікрохвильовці — спершу приготуйте, потім заморожуйте готову страву." },
      { q: "Чому не можна зберігати помідори в холодильнику?", a: "Холод руйнує речовини, що відповідають за смак і аромат, і м'якоть стає борошнистою. Зберігайте помідори за кімнатної температури." },
    ],
  },
};
