import type { Guide } from "./types";

export const guide: Guide = {
  slug: "drozhzhevoe-testo",
  emoji: "🍞",
  updated: "2026-09-26",
  title: {
    ru: "Дрожжевое тесто, которое всегда поднимается: дрожжи, температура и тест пальцем",
    en: "Yeast dough that always rises: yeast types, temperature and the poke test",
    ua: "Дріжджове тісто, що завжди піднімається: дріжджі, температура й тест пальцем",
  },
  summary: {
    ru: "Почему тесто не подходит и получается плотным: как пересчитать свежие дрожжи в сухие, какой температуры должно быть молоко, почему соль нельзя сыпать прямо на дрожжи, сколько месить и как пальцем понять, что тесто готово к выпечке.",
    en: "Why dough won't rise and bakes up dense: converting fresh yeast to dry, how warm the milk should be, why salt shouldn't touch the yeast directly, how long to knead, and how a finger poke tells you the dough is ready to bake.",
    ua: "Чому тісто не підходить і виходить щільним: як перерахувати свіжі дріжджі в сухі, якої температури має бути молоко, чому сіль не можна сипати просто на дріжджі, скільки місити й як пальцем зрозуміти, що тісто готове до випікання.",
  },
  sections: {
    ru: [
      {
        heading: "Как работают дрожжи",
        paragraphs: [
          "Дрожжи — живые микроорганизмы. Они питаются сахарами из муки и выделяют углекислый газ. Клейковина теста, как резиновая сетка, удерживает этот газ, и тесто поднимается.",
          "Значит, для пышного теста нужны три вещи: живые активные дрожжи, тепло, при котором им комфортно, и хорошо развитая клейковина, которая удержит газ.",
        ],
      },
      {
        heading: "Какие бывают дрожжи и как их пересчитать",
        paragraphs: [
          "Свежие (прессованные) дрожжи — брикет, хранятся в холодильнике около 2 недель. Сухие активные — гранулы, их сначала растворяют в тёплой жидкости. Сухие быстродействующие (инстантные) — мелкий порошок, их можно смешивать прямо с мукой.",
          "В рецептах часто указан один вид, а дома есть другой. Пересчёт простой.",
        ],
        list: [
          "10 г свежих дрожжей ≈ 4–5 г сухих активных ≈ 3–4 г сухих быстродействующих.",
          "На 500 г муки для хлеба: 15–20 г свежих или 5–7 г сухих быстродействующих (1 пакетик).",
          "На 500 г муки для сдобы (много масла, яиц, сахара): 25–30 г свежих или 8–10 г сухих — сдобное тесто тяжелее и поднимается медленнее.",
        ],
        tip: "Сомневаетесь, живы ли дрожжи? Растворите их в 50 мл тёплой воды с 1 ч. л. сахара. Через 10 минут должна появиться пышная пенная «шапка». Нет пены — дрожжи не работают, тесто не поднимется.",
      },
      {
        heading: "Секрет №1: тёплое, но не горячее",
        paragraphs: [
          "Самая частая причина неудачи — слишком горячая жидкость. Дрожжи комфортно работают при 26–35 °C, при 45–50 °C начинают погибать, при 55–60 °C гибнут полностью.",
          "Молоко или вода для теста должны быть 35–38 °C — чуть теплее тела. Проверка без термометра: капните на запястье. Должно быть приятно тепло, но не горячо.",
          "Холодная жидкость дрожжи не убьёт, но тесто будет подниматься в 2–3 раза дольше.",
        ],
      },
      {
        heading: "Секрет №2: соль и сахар — отдельно от дрожжей",
        paragraphs: [
          "Соль в прямом контакте вытягивает из дрожжей воду и тормозит их работу. Поэтому соль смешивайте с мукой, а дрожжи — с жидкостью или другой частью муки. Встретятся они уже в тесте, где соль равномерно распределена и не вредит.",
          "Немного сахара дрожжи любят — это быстрая еда. Но много сахара (как в сдобе) действует как соль: оттягивает воду. Поэтому сладкое тесто поднимается медленнее, и для него берут больше дрожжей.",
          "Сливочное масло в сдобном тесте лучше добавлять после того, как тесто уже вымешано и стало эластичным. Жир обволакивает муку и мешает клейковине формироваться.",
        ],
      },
      {
        heading: "Секрет №3: вымешать до «окна»",
        paragraphs: [
          "Клейковине нужно время, чтобы развиться. Месите тесто руками 8–10 минут (миксером с крюками 5–7 минут), пока оно не станет гладким, эластичным и перестанет рваться.",
          "Не добавляйте муку каждый раз, когда тесто липнет к рукам — в начале замеса это нормально. Лишняя мука делает хлеб сухим и плотным. Лучше смажьте руки и стол растительным маслом.",
        ],
        tip: "Тест «окно»: отщипните кусочек теста и аккуратно растяните пальцами. Если он растягивается в тонкую, почти прозрачную плёнку и не рвётся — клейковина готова. Рвётся сразу — месите ещё 2–3 минуты.",
      },
      {
        heading: "Секрет №4: расстойка и тест пальцем",
        paragraphs: [
          "Накройте тесто плёнкой или влажным полотенцем и оставьте в тёплом месте без сквозняков, при 25–30 °C. Хорошее место — выключенная духовка с включённой лампочкой или рядом с тёплой (не горячей) батареей. Тесто должно увеличиться примерно вдвое — обычно за 1–1,5 часа.",
          "Затем тесто обминают, выпуская крупные пузыри, формуют изделия и дают им подойти второй раз, 20–40 минут.",
        ],
        list: [
          "Нажмите на тесто пальцем на 1 см. Ямка медленно выравнивается, но остаётся небольшой след — тесто готово.",
          "Ямка сразу выпрыгивает обратно — тесто ещё не подошло, подождите.",
          "Ямка не выравнивается совсем, тесто оседает — перестояло. Обомните, сформуйте заново и дайте короткую расстойку.",
        ],
      },
      {
        heading: "Холодная расстойка — для вкуса",
        paragraphs: [
          "Тесто можно поставить подходить в холодильник на 8–24 часа. Дрожжи работают медленно, и за это время в тесте развиваются вкусовые вещества — хлеб и пицца получаются ароматнее, с лучшей корочкой. К тому же это удобно: замесили вечером, испекли утром.",
          "Перед выпечкой дайте холодному тесту час согреться при комнатной температуре.",
        ],
      },
      {
        heading: "Выпечка",
        paragraphs: [
          "Духовку разогрейте заранее, минимум 20 минут. Булочки и пироги из сдобы выпекают при 180 °C, хлеб — при 220–230 °C.",
          "Для румяного верха смажьте изделия перед выпечкой желтком, смешанным с ложкой молока. Для хлеба с хрустящей корочкой поставьте на дно духовки противень с кипятком на первые 10–15 минут — пар даст тесту подняться, прежде чем корка затвердеет.",
          "Готовый хлеб простучите снизу: звук должен быть глухим, «пустым».",
        ],
      },
      {
        heading: "Почему тесто не поднялось",
        paragraphs: ["Проверьте по списку:"],
        list: [
          "Дрожжи просрочены или погибли — сделайте пробу с сахаром.",
          "Жидкость была горячее 45 °C.",
          "На кухне холодно, тесто стоит на сквозняке.",
          "Соль высыпали прямо на дрожжи.",
          "Слишком много сахара и масла для такого количества дрожжей.",
          "Тесто недомесили — клейковина не держит газ.",
          "Добавили лишнюю муку — тесто стало тугим и тяжёлым.",
        ],
      },
    ],
    en: [
      {
        heading: "How yeast works",
        paragraphs: [
          "Yeast is a living micro-organism. It feeds on sugars from the flour and gives off carbon dioxide. The dough's gluten, like a rubber net, traps the gas, and the dough rises.",
          "So a light dough needs three things: live, active yeast; warmth the yeast is comfortable in; and well-developed gluten to hold the gas.",
        ],
      },
      {
        heading: "Types of yeast and how to convert them",
        paragraphs: [
          "Fresh (compressed) yeast comes as a block and keeps about 2 weeks in the fridge. Active dry yeast is granules that are first dissolved in warm liquid. Instant (fast-action) dry yeast is a fine powder that can be mixed straight into flour.",
          "Recipes often name one type while you have another at home. Converting is easy.",
        ],
        list: [
          "10 g fresh yeast ≈ 4–5 g active dry ≈ 3–4 g instant.",
          "Per 500 g flour for bread: 15–20 g fresh or 5–7 g instant (one 7 g sachet).",
          "Per 500 g flour for enriched dough (lots of butter, eggs, sugar): 25–30 g fresh or 8–10 g instant — enriched dough is heavier and rises more slowly.",
        ],
        tip: "Not sure your yeast is alive? Dissolve it in 50 ml warm water with 1 tsp sugar. After 10 minutes a thick foamy head should appear. No foam — the yeast is dead and the dough won't rise.",
      },
      {
        heading: "Secret #1: warm, not hot",
        paragraphs: [
          "The most common cause of failure is liquid that's too hot. Yeast works happily at 26–35 °C (80–95 °F), starts dying at 45–50 °C (115–120 °F) and is killed completely at 55–60 °C (130–140 °F).",
          "Milk or water for dough should be 35–38 °C (95–100 °F) — just above body temperature. No thermometer? Drip some on your wrist. It should feel pleasantly warm, not hot.",
          "Cold liquid won't kill the yeast, but the dough will take 2–3 times longer to rise.",
        ],
      },
      {
        heading: "Secret #2: keep salt and sugar away from the yeast",
        paragraphs: [
          "In direct contact, salt pulls water out of yeast and slows it down. So mix the salt into the flour and the yeast into the liquid or another part of the flour. They meet in the dough, where the salt is evenly spread and does no harm.",
          "Yeast likes a little sugar — it's fast food. But a lot of sugar (as in enriched doughs) acts like salt and draws water away. That's why sweet dough rises more slowly and needs more yeast.",
          "In enriched dough, add the butter after the dough has been kneaded and become elastic. Fat coats the flour and gets in the way of gluten forming.",
        ],
      },
      {
        heading: "Secret #3: knead to the windowpane",
        paragraphs: [
          "Gluten needs time to develop. Knead by hand for 8–10 minutes (5–7 minutes in a mixer with a dough hook) until the dough is smooth, elastic and no longer tears.",
          "Don't add flour every time the dough sticks to your hands — that's normal at the start. Extra flour makes bread dry and dense. Oil your hands and the worktop instead.",
        ],
        tip: "The windowpane test: pinch off a piece of dough and gently stretch it with your fingers. If it stretches into a thin, almost see-through film without tearing, the gluten is ready. If it tears straight away, knead for another 2–3 minutes.",
      },
      {
        heading: "Secret #4: proofing and the poke test",
        paragraphs: [
          "Cover the dough with cling film or a damp towel and leave it somewhere warm and draught-free, at 25–30 °C (77–86 °F). A good spot is a switched-off oven with the light on, or near a warm (not hot) radiator. The dough should roughly double — usually in 1–1.5 hours.",
          "Then knock it back to release large bubbles, shape it and let it rise a second time, 20–40 minutes.",
        ],
        list: [
          "Press the dough 1 cm deep with a finger. The dent fills back slowly but leaves a slight mark — ready.",
          "The dent springs straight back — not ready yet, wait.",
          "The dent doesn't fill at all and the dough sinks — over-proofed. Knock back, reshape and give it a short rise.",
        ],
      },
      {
        heading: "A cold rise — for flavour",
        paragraphs: [
          "You can let dough rise in the fridge for 8–24 hours. The yeast works slowly, and flavour compounds develop — bread and pizza come out more aromatic with a better crust. It's also convenient: mix in the evening, bake in the morning.",
          "Before baking, let the cold dough warm up at room temperature for an hour.",
        ],
      },
      {
        heading: "Baking",
        paragraphs: [
          "Preheat the oven properly, at least 20 minutes. Buns and pies from enriched dough bake at 180 °C (350 °F); bread at 220–230 °C (430–450 °F).",
          "For a golden top, brush with a yolk mixed with a spoonful of milk before baking. For crusty bread, put a tray of boiling water on the oven floor for the first 10–15 minutes — the steam lets the dough rise before the crust hardens.",
          "Tap the bottom of finished bread: it should sound hollow.",
        ],
      },
      {
        heading: "Why the dough didn't rise",
        paragraphs: ["Check the list:"],
        list: [
          "The yeast was out of date or dead — do the sugar test.",
          "The liquid was hotter than 45 °C (115 °F).",
          "The kitchen is cold, or the dough sat in a draught.",
          "Salt was poured straight onto the yeast.",
          "Too much sugar and butter for that amount of yeast.",
          "The dough was under-kneaded — the gluten can't hold the gas.",
          "Extra flour was added — the dough got stiff and heavy.",
        ],
      },
    ],
    ua: [
      {
        heading: "Як працюють дріжджі",
        paragraphs: [
          "Дріжджі — живі мікроорганізми. Вони живляться цукрами з борошна й виділяють вуглекислий газ. Клейковина тіста, як гумова сітка, утримує цей газ, і тісто піднімається.",
          "Отже, для пишного тіста потрібні три речі: живі активні дріжджі, тепло, за якого їм комфортно, і добре розвинена клейковина, що утримає газ.",
        ],
      },
      {
        heading: "Які бувають дріжджі й як їх перерахувати",
        paragraphs: [
          "Свіжі (пресовані) дріжджі — брикет, зберігаються в холодильнику близько 2 тижнів. Сухі активні — гранули, їх спершу розчиняють у теплій рідині. Сухі швидкодійні (інстантні) — дрібний порошок, їх можна змішувати просто з борошном.",
          "У рецептах часто вказано один вид, а вдома є інший. Перерахунок простий.",
        ],
        list: [
          "10 г свіжих дріжджів ≈ 4–5 г сухих активних ≈ 3–4 г сухих швидкодійних.",
          "На 500 г борошна для хліба: 15–20 г свіжих або 5–7 г сухих швидкодійних (1 пакетик).",
          "На 500 г борошна для здоби (багато масла, яєць, цукру): 25–30 г свіжих або 8–10 г сухих — здобне тісто важче й піднімається повільніше.",
        ],
        tip: "Сумніваєтеся, чи живі дріжджі? Розчиніть їх у 50 мл теплої води з 1 ч. л. цукру. За 10 хвилин має з'явитися пишна пінна «шапка». Немає піни — дріжджі не працюють, тісто не підніметься.",
      },
      {
        heading: "Секрет №1: тепле, але не гаряче",
        paragraphs: [
          "Найчастіша причина невдачі — занадто гаряча рідина. Дріжджі комфортно працюють за 26–35 °C, за 45–50 °C починають гинути, за 55–60 °C гинуть повністю.",
          "Молоко чи вода для тіста мають бути 35–38 °C — трохи тепліше за тіло. Перевірка без термометра: капніть на зап'ястя. Має бути приємно тепло, але не гаряче.",
          "Холодна рідина дріжджі не вб'є, але тісто підніматиметься у 2–3 рази довше.",
        ],
      },
      {
        heading: "Секрет №2: сіль і цукор — окремо від дріжджів",
        paragraphs: [
          "Сіль у прямому контакті витягує з дріжджів воду й гальмує їхню роботу. Тому сіль змішуйте з борошном, а дріжджі — з рідиною чи іншою частиною борошна. Зустрінуться вони вже в тісті, де сіль рівномірно розподілена й не шкодить.",
          "Трохи цукру дріжджі люблять — це швидка їжа. Але багато цукру (як у здобі) діє як сіль: відтягує воду. Тому солодке тісто піднімається повільніше, і для нього беруть більше дріжджів.",
          "Вершкове масло в здобному тісті краще додавати після того, як тісто вже вимішане й стало еластичним. Жир обгортає борошно й заважає клейковині формуватися.",
        ],
      },
      {
        heading: "Секрет №3: вимісити до «вікна»",
        paragraphs: [
          "Клейковині потрібен час, щоб розвинутися. Місіть тісто руками 8–10 хвилин (міксером із гаками 5–7 хвилин), поки воно не стане гладким, еластичним і не перестане рватися.",
          "Не додавайте борошно щоразу, коли тісто липне до рук — на початку замісу це нормально. Зайве борошно робить хліб сухим і щільним. Краще змастіть руки й стіл олією.",
        ],
        tip: "Тест «вікно»: відщипніть шматочок тіста й обережно розтягніть пальцями. Якщо він розтягується в тонку, майже прозору плівку й не рветься — клейковина готова. Рветься одразу — місіть ще 2–3 хвилини.",
      },
      {
        heading: "Секрет №4: розстоювання й тест пальцем",
        paragraphs: [
          "Накрийте тісто плівкою чи вологим рушником і залиште в теплому місці без протягів, за 25–30 °C. Добре місце — вимкнена духовка з увімкненою лампочкою або біля теплої (не гарячої) батареї. Тісто має збільшитися приблизно вдвічі — зазвичай за 1–1,5 години.",
          "Потім тісто обминають, випускаючи великі бульбашки, формують вироби й дають їм підійти вдруге, 20–40 хвилин.",
        ],
        list: [
          "Натисніть на тісто пальцем на 1 см. Ямка повільно вирівнюється, але лишається невеликий слід — тісто готове.",
          "Ямка одразу вистрибує назад — тісто ще не підійшло, зачекайте.",
          "Ямка не вирівнюється зовсім, тісто осідає — перестояло. Обімніть, сформуйте заново й дайте коротке розстоювання.",
        ],
      },
      {
        heading: "Холодне розстоювання — для смаку",
        paragraphs: [
          "Тісто можна поставити підходити в холодильник на 8–24 години. Дріжджі працюють повільно, і за цей час у тісті розвиваються смакові речовини — хліб і піца виходять ароматнішими, з кращою скоринкою. До того ж це зручно: замісили ввечері, спекли вранці.",
          "Перед випіканням дайте холодному тісту годину зігрітися за кімнатної температури.",
        ],
      },
      {
        heading: "Випікання",
        paragraphs: [
          "Духовку розігрійте заздалегідь, щонайменше 20 хвилин. Булочки й пироги зі здоби випікають за 180 °C, хліб — за 220–230 °C.",
          "Для рум'яного верху змастіть вироби перед випіканням жовтком, змішаним із ложкою молока. Для хліба з хрусткою скоринкою поставте на дно духовки деко з окропом на перші 10–15 хвилин — пара дасть тісту піднятися, перш ніж скоринка затвердіє.",
          "Готовий хліб постукайте знизу: звук має бути глухим, «порожнім».",
        ],
      },
      {
        heading: "Чому тісто не піднялося",
        paragraphs: ["Перевірте за списком:"],
        list: [
          "Дріжджі прострочені або загинули — зробіть пробу з цукром.",
          "Рідина була гарячішою за 45 °C.",
          "На кухні холодно, тісто стоїть на протязі.",
          "Сіль висипали просто на дріжджі.",
          "Забагато цукру й масла для такої кількості дріжджів.",
          "Тісто недомісили — клейковина не тримає газ.",
          "Додали зайве борошно — тісто стало тугим і важким.",
        ],
      },
    ],
  },
  faq: {
    ru: [
      { q: "Сколько сухих дрожжей заменяют 10 г свежих?", a: "Примерно 3–4 г сухих быстродействующих или 4–5 г сухих активных." },
      { q: "Какой температуры должно быть молоко для теста?", a: "35–38 °C — чуть теплее тела. Выше 45 °C дрожжи начинают погибать." },
      { q: "Как понять, что тесто подошло?", a: "Нажмите пальцем на 1 см: ямка медленно выравнивается, но небольшой след остаётся. Если выпрыгивает сразу — рано, если не выравнивается — тесто перестояло." },
      { q: "Почему тесто не поднимается?", a: "Чаще всего дрожжи погибли от горячей жидкости, в кухне холодно или соль попала прямо на дрожжи. Сделайте пробу дрожжей с сахаром и тёплой водой." },
    ],
    en: [
      { q: "How much dry yeast replaces 10 g fresh?", a: "About 3–4 g instant or 4–5 g active dry yeast." },
      { q: "How warm should the milk for dough be?", a: "35–38 °C (95–100 °F) — just above body temperature. Above 45 °C (115 °F) yeast starts to die." },
      { q: "How do I know the dough has risen enough?", a: "Poke it 1 cm deep: the dent fills back slowly but leaves a slight mark. If it springs back at once it's too early; if it doesn't fill, it's over-proofed." },
      { q: "Why won't my dough rise?", a: "Most often the yeast was killed by hot liquid, the kitchen is cold, or salt went straight onto the yeast. Test the yeast with sugar and warm water." },
    ],
    ua: [
      { q: "Скільки сухих дріжджів замінюють 10 г свіжих?", a: "Приблизно 3–4 г сухих швидкодійних або 4–5 г сухих активних." },
      { q: "Якої температури має бути молоко для тіста?", a: "35–38 °C — трохи тепліше за тіло. Вище 45 °C дріжджі починають гинути." },
      { q: "Як зрозуміти, що тісто підійшло?", a: "Натисніть пальцем на 1 см: ямка повільно вирівнюється, але невеликий слід лишається. Якщо вистрибує одразу — рано, якщо не вирівнюється — тісто перестояло." },
      { q: "Чому тісто не піднімається?", a: "Найчастіше дріжджі загинули від гарячої рідини, на кухні холодно або сіль потрапила просто на дріжджі. Зробіть пробу дріжджів із цукром і теплою водою." },
    ],
  },
};
