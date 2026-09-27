import type { Guide } from "./types";

export const guide: Guide = {
  slug: "lanch-boksy",
  emoji: "🍱",
  image: "/img/guides/lanch-boksy.webp",
  updated: "2026-09-27",
  title: {
    ru: "Еда с собой: как собрать ланч-бокс, который вкусен к обеду и безопасен",
    en: "Packed lunches: how to build a lunchbox that's tasty and safe by midday",
    ua: "Їжа з собою: як зібрати ланч-бокс, смачний до обіду й безпечний",
  },
  summary: {
    ru: "Формула сытного обеда в контейнере, какие блюда хорошо переживают ночь в холодильнике, а какие раскисают, сколько еда может быть без холода, разогрев в микроволновке без «холодной середины», контейнеры и сборка на неделю за полтора часа.",
    en: "A formula for a filling lunch in a box, which dishes survive a night in the fridge and which go soggy, how long food can stay unrefrigerated, microwaving without a cold centre, containers, and prepping a week's lunches in an hour and a half.",
    ua: "Формула ситного обіду в контейнері, які страви добре переживають ніч у холодильнику, а які розкисають, скільки їжа може бути без холоду, розігрівання в мікрохвильовці без «холодної середини», контейнери й збирання на тиждень за півтори години.",
  },
  relatedRecipes: ["kurica-s-kinoa-bowl", "lenivaya-ovsyanka-v-banke", "salat-s-tuncom-i-fasolyu"],
  sections: {
    ru: [
      {
        heading: "Формула сытного ланча",
        paragraphs: [
          "Обед, после которого не клонит в сон и не хочется перекусывать через час, собирается из четырёх частей.",
        ],
        list: [
          "Белок (100–150 г): курица, индейка, рыба, яйца, тофу, фасоль, нут, творог.",
          "Сложные углеводы (150–200 г готовых): гречка, бурый рис, булгур, киноа, картофель, цельнозерновая паста.",
          "Овощи (150–200 г): свежие, запечённые или тушёные — чем больше цветов, тем лучше.",
          "Соус или жир: заправка, хумус, йогурт, орехи, авокадо — без них еда кажется сухой.",
        ],
        tip: "Соус кладите в отдельную маленькую баночку. Так рис не раскиснет, а салат не поплывёт до обеда.",
      },
      {
        heading: "Что хорошо переносит ночь в холодильнике",
        paragraphs: [
          "Некоторые блюда наутро становятся даже вкуснее — вкусы успевают соединиться. Другие теряют текстуру.",
        ],
        list: [
          "Отлично: рагу, карри, тушёное мясо, плов, гречка с мясом, котлеты, запечённые овощи, фасолевые и зерновые салаты.",
          "Хорошо: паста с томатным соусом, запечённая курица, омлет и фриттата, сырники.",
          "Плохо: жареное в кляре и панировке (размокает), нежные листовые салаты с заправкой, паста со сливочным соусом (густеет и расслаивается), рыба на пару (сохнет и пахнет при разогреве).",
        ],
      },
      {
        heading: "Безопасность: правило двух часов",
        paragraphs: [
          "Бактерии быстрее всего размножаются в «опасной зоне» от 5 до 60 °C. Готовая еда не должна находиться при комнатной температуре дольше 2 часов, а в жару выше 30 °C — дольше часа.",
        ],
        list: [
          "Остужайте еду быстро: разложите по неглубоким контейнерам и уберите в холодильник в течение 1–2 часов после готовки.",
          "Если на работе нет холодильника — используйте термосумку с аккумулятором холода.",
          "Замороженная бутылка воды в сумке работает как хладоэлемент, а к обеду её можно пить.",
          "Горячий суп или кашу носите в термосе, предварительно прогретом кипятком.",
          "Готовые блюда храните в холодильнике не дольше 3–4 дней.",
        ],
      },
      {
        heading: "Разогрев без холодной середины",
        paragraphs: [
          "Микроволновка греет неравномерно: края кипят, а центр остаётся холодным. Это не только невкусно, но и небезопасно — еду нужно прогреть до 75 °C во всём объёме.",
        ],
        list: [
          "Раскладывайте еду кольцом по краю контейнера, оставив центр пустым или тонким.",
          "Накройте крышкой с приоткрытым краем или влажной салфеткой — пар прогреет равномернее.",
          "Грейте в два захода с перемешиванием посередине.",
          "Сбрызните рис и крупы ложкой воды перед разогревом — они не пересохнут.",
          "Дайте постоять 1 минуту после разогрева: тепло распределится.",
        ],
      },
      {
        heading: "Контейнеры",
        paragraphs: [
          "Хороший контейнер экономит больше времени, чем кажется: не течёт, греется и моется без проблем.",
        ],
        list: [
          "Стеклянные с герметичной крышкой — не впитывают запахи, можно греть без крышки, но тяжелее.",
          "Пластиковые — лёгкие; для разогрева выбирайте с маркировкой для микроволновой печи и не грейте в поцарапанных.",
          "Контейнеры с отделениями — чтобы гарнир и соус не смешивались.",
          "Банки — для салатов слоями, овсянки на ночь и супов.",
        ],
      },
      {
        heading: "Салаты, которые не раскисают",
        paragraphs: [
          "Секрет в порядке слоёв: снизу то, что не боится заправки, сверху — нежное. В банке: заправка → плотные овощи (огурец, морковь, перец) → крупа или бобовые → белок → сыр → листья.",
          "Для салатов на несколько дней выбирайте основу, которая не вянет: капуста, кейл, морковь, свёкла, бобовые, булгур, киноа. Листья салата и рукколу добавляйте в день еды.",
        ],
      },
      {
        heading: "Подготовка на неделю за полтора часа",
        paragraphs: [
          "Не нужно готовить пять одинаковых обедов. Удобнее приготовить «кубики», из которых каждый день собирается новое сочетание.",
        ],
        list: [
          "Духовка: противень курицы или индейки и противень овощей одновременно — 30–40 минут.",
          "Плита: большая кастрюля крупы и десяток яиц вкрутую.",
          "Соусы: 2 заправки в банках — например, йогуртовая и кунжутно-соевая.",
          "Нарезка: огурцы, перец, зелень — в контейнер с бумажным полотенцем.",
          "Каждое утро: 3 минуты — собрать контейнер из разных «кубиков».",
        ],
        tip: "Готовьте на 3–4 дня, а не на 5. На пятницу лучше оставить что-то из морозилки — котлеты, суп или плов.",
      },
      {
        heading: "Что можно заморозить впрок",
        paragraphs: [
          "Морозилка — лучший друг ланч-бокса. Порционные заготовки выручают в дни, когда готовить некогда.",
        ],
        list: [
          "Супы и рагу — в порционных контейнерах, до 3 месяцев.",
          "Котлеты, тефтели, голубцы — до 3 месяцев.",
          "Плов, гречка с мясом, чили — до 2 месяцев.",
          "Размораживайте с вечера в холодильнике, утром — в сумку.",
        ],
      },
    ],
    en: [
      {
        heading: "A formula for a filling lunch",
        paragraphs: [
          "A lunch that doesn't make you sleepy or send you looking for snacks an hour later is built from four parts.",
        ],
        list: [
          "Protein (100–150 g): chicken, turkey, fish, eggs, tofu, beans, chickpeas, cottage cheese.",
          "Complex carbs (150–200 g cooked): buckwheat, brown rice, bulgur, quinoa, potatoes, wholegrain pasta.",
          "Vegetables (150–200 g): fresh, roasted or braised — the more colours, the better.",
          "Sauce or fat: dressing, hummus, yoghurt, nuts, avocado — without them food feels dry.",
        ],
        tip: "Pack the sauce in a separate small pot. That way the rice doesn't go soggy and the salad doesn't wilt before lunch.",
      },
      {
        heading: "What survives a night in the fridge",
        paragraphs: [
          "Some dishes taste even better the next day — the flavours have time to meld. Others lose their texture.",
        ],
        list: [
          "Great: stews, curries, braised meat, plov, buckwheat with meat, meatballs and patties, roast vegetables, bean and grain salads.",
          "Good: pasta with tomato sauce, roast chicken, omelette and frittata, syrniki.",
          "Poor: anything battered or breaded (goes soft), delicate dressed leaf salads, pasta in cream sauce (thickens and separates), steamed fish (dries out and smells when reheated).",
        ],
      },
      {
        heading: "Safety: the two-hour rule",
        paragraphs: [
          "Bacteria multiply fastest in the \"danger zone\" from 5 to 60 °C. Cooked food shouldn't sit at room temperature for more than 2 hours, or more than an hour when it's above 30 °C.",
        ],
        list: [
          "Cool food quickly: divide it into shallow containers and refrigerate within 1–2 hours of cooking.",
          "If there's no fridge at work, use an insulated bag with an ice pack.",
          "A frozen bottle of water in the bag works as an ice pack, and you can drink it by lunchtime.",
          "Carry hot soup or porridge in a flask pre-warmed with boiling water.",
          "Keep cooked dishes in the fridge for no more than 3–4 days.",
        ],
      },
      {
        heading: "Reheating without a cold centre",
        paragraphs: [
          "Microwaves heat unevenly: the edges boil while the middle stays cold. That's not only unpleasant but unsafe — food should reach 75 °C all the way through.",
        ],
        list: [
          "Arrange the food in a ring around the edge of the container, leaving the centre empty or thin.",
          "Cover with a lid left slightly open or a damp paper towel — the steam heats more evenly.",
          "Heat in two stages, stirring in between.",
          "Sprinkle rice and grains with a spoon of water before reheating so they don't dry out.",
          "Let it stand for a minute after heating: the heat evens out.",
        ],
      },
      {
        heading: "Containers",
        paragraphs: [
          "A good container saves more time than you'd think: it doesn't leak, reheats and washes up easily.",
        ],
        list: [
          "Glass with an airtight lid — doesn't absorb smells and can be heated without the lid, but it's heavier.",
          "Plastic — light; for reheating choose microwave-safe ones and don't heat scratched containers.",
          "Divided containers — so the sides and sauce don't mix.",
          "Jars — for layered salads, overnight oats and soups.",
        ],
      },
      {
        heading: "Salads that don't go soggy",
        paragraphs: [
          "The secret is the order of layers: at the bottom whatever doesn't mind the dressing, delicate things on top. In a jar: dressing → sturdy vegetables (cucumber, carrot, pepper) → grains or pulses → protein → cheese → leaves.",
          "For salads that last several days, choose a base that doesn't wilt: cabbage, kale, carrot, beetroot, pulses, bulgur, quinoa. Add lettuce and rocket on the day.",
        ],
      },
      {
        heading: "A week's prep in an hour and a half",
        paragraphs: [
          "You don't need five identical lunches. It's easier to cook \"building blocks\" and combine them differently each day.",
        ],
        list: [
          "Oven: a tray of chicken or turkey and a tray of vegetables at the same time — 30–40 minutes.",
          "Hob: a big pot of grains and a dozen hard-boiled eggs.",
          "Sauces: 2 dressings in jars — say, a yoghurt one and a sesame-soy one.",
          "Prep: cucumbers, peppers, herbs — in a container lined with paper towel.",
          "Each morning: 3 minutes to assemble a box from different blocks.",
        ],
        tip: "Cook for 3–4 days, not 5. For Friday, keep something from the freezer — patties, soup or plov.",
      },
      {
        heading: "What to freeze ahead",
        paragraphs: [
          "The freezer is a lunchbox's best friend. Portioned meals save the day when there's no time to cook.",
        ],
        list: [
          "Soups and stews — in portion containers, up to 3 months.",
          "Patties, meatballs, cabbage rolls — up to 3 months.",
          "Plov, buckwheat with meat, chilli — up to 2 months.",
          "Thaw overnight in the fridge and pack it in the morning.",
        ],
      },
    ],
    ua: [
      {
        heading: "Формула ситного ланчу",
        paragraphs: [
          "Обід, після якого не хилить на сон і не хочеться перекушувати за годину, складається з чотирьох частин.",
        ],
        list: [
          "Білок (100–150 г): курка, індичка, риба, яйця, тофу, квасоля, нут, сир.",
          "Складні вуглеводи (150–200 г готових): гречка, бурий рис, булгур, кіноа, картопля, цільнозернова паста.",
          "Овочі (150–200 г): свіжі, запечені або тушковані — що більше кольорів, то краще.",
          "Соус або жир: заправка, хумус, йогурт, горіхи, авокадо — без них їжа здається сухою.",
        ],
        tip: "Соус кладіть в окрему маленьку баночку. Так рис не розкисне, а салат не попливе до обіду.",
      },
      {
        heading: "Що добре переносить ніч у холодильнику",
        paragraphs: [
          "Деякі страви наступного дня стають навіть смачнішими — смаки встигають поєднатися. Інші втрачають текстуру.",
        ],
        list: [
          "Чудово: рагу, карі, тушковане м'ясо, плов, гречка з м'ясом, котлети, запечені овочі, квасолеві й зернові салати.",
          "Добре: паста з томатним соусом, запечена курка, омлет і фрітата, сирники.",
          "Погано: смажене в клярі й паніруванні (розмокає), ніжні листові салати із заправкою, паста з вершковим соусом (густішає й розшаровується), риба на парі (сохне й пахне під час розігрівання).",
        ],
      },
      {
        heading: "Безпека: правило двох годин",
        paragraphs: [
          "Бактерії найшвидше розмножуються в «небезпечній зоні» від 5 до 60 °C. Готова їжа не має перебувати за кімнатної температури довше 2 годин, а в спеку понад 30 °C — довше години.",
        ],
        list: [
          "Остуджуйте їжу швидко: розкладіть по неглибоких контейнерах і приберіть у холодильник протягом 1–2 годин після готування.",
          "Якщо на роботі немає холодильника — використовуйте термосумку з акумулятором холоду.",
          "Заморожена пляшка води в сумці працює як холодоелемент, а до обіду її можна пити.",
          "Гарячий суп чи кашу носіть у термосі, попередньо прогрітому окропом.",
          "Готові страви зберігайте в холодильнику не довше 3–4 днів.",
        ],
      },
      {
        heading: "Розігрівання без холодної середини",
        paragraphs: [
          "Мікрохвильовка гріє нерівномірно: краї кипають, а центр лишається холодним. Це не лише несмачно, а й небезпечно — їжу треба прогріти до 75 °C у всьому об'ємі.",
        ],
        list: [
          "Розкладайте їжу кільцем по краю контейнера, лишивши центр порожнім або тонким.",
          "Накрийте кришкою з прочиненим краєм або вологою серветкою — пара прогріє рівномірніше.",
          "Грійте у два заходи з перемішуванням посередині.",
          "Збризніть рис і крупи ложкою води перед розігріванням — вони не пересохнуть.",
          "Дайте постояти 1 хвилину після розігрівання: тепло розподілиться.",
        ],
      },
      {
        heading: "Контейнери",
        paragraphs: [
          "Добрий контейнер заощаджує більше часу, ніж здається: не тече, гріється й миється без проблем.",
        ],
        list: [
          "Скляні з герметичною кришкою — не вбирають запахів, можна гріти без кришки, але важчі.",
          "Пластикові — легкі; для розігрівання обирайте з маркуванням для мікрохвильової печі й не грійте в подряпаних.",
          "Контейнери з відділеннями — щоб гарнір і соус не змішувалися.",
          "Банки — для салатів шарами, вівсянки на ніч і супів.",
        ],
      },
      {
        heading: "Салати, що не розкисають",
        paragraphs: [
          "Секрет у порядку шарів: знизу те, що не боїться заправки, зверху — ніжне. У банці: заправка → щільні овочі (огірок, морква, перець) → крупа чи бобові → білок → сир → листя.",
          "Для салатів на кілька днів обирайте основу, що не в'яне: капуста, кейл, морква, буряк, бобові, булгур, кіноа. Листя салату й руколу додавайте в день їжі.",
        ],
      },
      {
        heading: "Підготовка на тиждень за півтори години",
        paragraphs: [
          "Не треба готувати п'ять однакових обідів. Зручніше приготувати «кубики», з яких щодня збирається нове поєднання.",
        ],
        list: [
          "Духовка: деко курки чи індички й деко овочів одночасно — 30–40 хвилин.",
          "Плита: велика каструля крупи й десяток яєць зварених круто.",
          "Соуси: 2 заправки в банках — наприклад, йогуртова й кунжутно-соєва.",
          "Нарізка: огірки, перець, зелень — у контейнер із паперовим рушником.",
          "Щоранку: 3 хвилини — зібрати контейнер із різних «кубиків».",
        ],
        tip: "Готуйте на 3–4 дні, а не на 5. На п'ятницю краще лишити щось із морозилки — котлети, суп або плов.",
      },
      {
        heading: "Що можна заморозити про запас",
        paragraphs: [
          "Морозилка — найкращий друг ланч-боксу. Порційні заготовки рятують у дні, коли готувати ніколи.",
        ],
        list: [
          "Супи й рагу — у порційних контейнерах, до 3 місяців.",
          "Котлети, тефтелі, голубці — до 3 місяців.",
          "Плов, гречка з м'ясом, чилі — до 2 місяців.",
          "Розморожуйте звечора в холодильнику, уранці — у сумку.",
        ],
      },
    ],
  },
  faq: {
    ru: [
      { q: "Можно ли разогревать рис повторно?", a: "Да, если после готовки его быстро остудили и хранили в холодильнике не больше суток-двух. Разогревайте один раз и до горячего состояния по всему объёму." },
      { q: "Сколько может лежать ланч-бокс без холодильника?", a: "Не больше 2 часов при комнатной температуре и не больше часа в жару. С термосумкой и хладоэлементом — до 4–6 часов." },
      { q: "Как сделать, чтобы бутерброд не размок?", a: "Смажьте хлеб тонким слоем масла или сливочного сыра — он станет барьером. Помидоры и огурцы кладите между сыром и мясом, а не прямо на хлеб." },
      { q: "Что взять, если на работе нет микроволновки?", a: "Салаты из круп и бобовых, роллы и лаваши, холодная курица, запечённые овощи, сырники — или горячее в термосе." },
      { q: "Можно ли есть еду холодной прямо из холодильника?", a: "Да, если она была правильно приготовлена и хранилась в холоде. Многие блюда — салаты из круп, запечённые овощи, курица — вкусны и холодными." },
    ],
    en: [
      { q: "Is it safe to reheat rice?", a: "Yes, if it was cooled quickly after cooking and kept in the fridge for no more than a day or two. Reheat it once, until piping hot throughout." },
      { q: "How long can a lunchbox go without a fridge?", a: "No more than 2 hours at room temperature and no more than an hour in hot weather. With an insulated bag and ice pack, up to 4–6 hours." },
      { q: "How do I stop a sandwich going soggy?", a: "Spread the bread thinly with butter or cream cheese — it acts as a barrier. Put tomatoes and cucumbers between the cheese and meat, not straight onto the bread." },
      { q: "What if there's no microwave at work?", a: "Grain and bean salads, wraps, cold chicken, roast vegetables, syrniki — or something hot in a flask." },
      { q: "Can I eat food cold straight from the fridge?", a: "Yes, if it was cooked properly and kept cold. Many dishes — grain salads, roast vegetables, chicken — taste good cold." },
    ],
    ua: [
      { q: "Чи можна розігрівати рис повторно?", a: "Так, якщо після готування його швидко остудили й зберігали в холодильнику не більше доби-двох. Розігрівайте один раз і до гарячого стану по всьому об'єму." },
      { q: "Скільки може лежати ланч-бокс без холодильника?", a: "Не більше 2 годин за кімнатної температури й не більше години в спеку. З термосумкою й холодоелементом — до 4–6 годин." },
      { q: "Як зробити, щоб бутерброд не розмок?", a: "Змастіть хліб тонким шаром масла або вершкового сиру — він стане бар'єром. Помідори й огірки кладіть між сиром і м'ясом, а не просто на хліб." },
      { q: "Що взяти, якщо на роботі немає мікрохвильовки?", a: "Салати з круп і бобових, роли й лаваші, холодна курка, запечені овочі, сирники — або гаряче в термосі." },
      { q: "Чи можна їсти їжу холодною просто з холодильника?", a: "Так, якщо вона була правильно приготована й зберігалася в холоді. Багато страв — салати з круп, запечені овочі, курка — смачні й холодними." },
    ],
  },
};
