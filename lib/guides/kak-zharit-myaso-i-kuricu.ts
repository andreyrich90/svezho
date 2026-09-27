import type { Guide } from "./types";

export const guide: Guide = {
  slug: "kak-zharit-myaso-i-kuricu",
  emoji: "🍗",
  image: "/img/guides/kak-zharit-myaso-i-kuricu.webp",
  updated: "2026-09-26",
  title: {
    ru: "Как жарить мясо и курицу: сухой посол, румяная корочка и точные температуры",
    en: "How to cook meat and chicken: dry brining, a golden crust and exact temperatures",
    ua: "Як смажити м'ясо й курку: сухе засолювання, рум'яна скоринка й точні температури",
  },
  summary: {
    ru: "Почему куриная грудка получается сухой, а мясо серым и жёстким. Сухой посол на 1% соли, раскалённая сковорода, температура готовности для курицы и стейка, «отдых» мяса и маринады, которые не портят текстуру.",
    en: "Why chicken breast turns dry and meat comes out grey and tough. Dry brining with 1% salt, a properly hot pan, doneness temperatures for chicken and steak, resting, and marinades that don't ruin the texture.",
    ua: "Чому куряча грудка виходить сухою, а м'ясо сірим і жорстким. Сухе засолювання на 1% солі, розпечена сковорода, температура готовності для курки й стейка, «відпочинок» м'яса й маринади, що не псують текстуру.",
  },
  relatedRecipes: [
    "kurinoe-file-v-slivochno-chesnochnom-souse",
    "kurinye-bedra-medovo-gorchichnye",
    "kuritsa-teriyaki",
    "kurinye-krylya-v-medovo-chesnochnoy-glazuri",
  ],
  sections: {
    ru: [
      {
        heading: "Откуда берутся корочка и вкус",
        paragraphs: [
          "Румяная корочка и «жареный» аромат — это реакция Майяра: белки и сахара на поверхности мяса вступают в реакцию при температуре выше 140 °C. Пока на поверхности есть вода, выше 100 °C она не нагреется — мясо будет вариться в собственном соку и станет серым.",
          "Отсюда главная логика жарки: сухая поверхность, горячая сковорода и отсутствие толкотни, чтобы влага успевала испаряться.",
        ],
      },
      {
        heading: "Секрет №1: сухой посол",
        paragraphs: [
          "Это самый недооценённый приём домашней кухни. Посолите мясо заранее — за 1–24 часа — и оставьте в холодильнике без плёнки. Сначала соль вытягивает сок на поверхность, затем он растворяет соль и впитывается обратно, унося её вглубь. Мясо получается равномерно посоленным изнутри и заметно сочнее, а поверхность подсыхает — корочка будет лучше.",
          "Если времени нет, солите прямо перед жаркой. Хуже всего — посолить за 10–20 минут: сок уже вышел на поверхность, но ещё не впитался, и мясо будет тушиться, а не жариться.",
        ],
        tip: "Соль — около 1% от веса мяса: 5–6 г мелкой соли на 500 г. Для курицы достаточно 1–2 часов, для стейков и свиных отбивных — от 4 часов до ночи.",
      },
      {
        heading: "Секрет №2: мокрый рассол для куриной грудки",
        paragraphs: [
          "Куриная грудка почти без жира и пересыхает за минуту. Лучшая страховка — рассол. Растворите соль в воде и опустите в него грудку на 1–2 часа в холодильнике. Мясо впитает немного солёной воды и потеряет меньше влаги при жарке.",
          "Перед жаркой обязательно обсушите грудку полотенцем. Толстую грудку разрежьте вдоль или отбейте до ровной толщины 1,5–2 см — тогда она прожарится равномерно, а тонкий край не пересохнет, пока готовится толстый.",
        ],
        tip: "Рассол: 50 г соли на 1 литр холодной воды (5%). Можно добавить 1 ст. л. сахара — корочка станет румянее.",
      },
      {
        heading: "Секрет №3: горячая сковорода и терпение",
        paragraphs: [
          "Разогревайте сковороду 2–3 минуты на среднем-сильном огне, прежде чем налить масло. Масло должно слегка «дрожать» и растекаться, как вода. Лучше всего держат жар чугун и толстая сталь.",
          "Выложите мясо и не трогайте его 2–3 минуты. Сначала оно прилипнет — это нормально. Когда корочка сформируется, мясо само отойдёт от сковороды, и его можно перевернуть. Не выкладывайте слишком много кусков сразу: между ними должно быть место, иначе температура упадёт и мясо пустит сок.",
        ],
        list: [
          "Масло — рафинированное, с высокой точкой дымления: подсолнечное, рапсовое, оливковое рафинированное.",
          "Сливочное масло добавляйте в конце, иначе оно подгорит.",
          "Не прижимайте мясо лопаткой — вы выдавливаете сок.",
        ],
      },
      {
        heading: "Секрет №4: термометр вместо «на глаз»",
        paragraphs: [
          "Кухонный щуп-термометр стоит недорого и навсегда избавляет от сухой курицы и сырой середины. Втыкайте его в самую толстую часть куска, не касаясь кости.",
          "Помните о «доходе»: после снятия с огня температура внутри поднимается ещё на 3–5 °C. Стейк снимайте чуть раньше нужной температуры. Курицу доводите до безопасных 74 °C.",
        ],
        list: [
          "Курица и индейка — 74 °C.",
          "Свинина — 63–65 °C (с отдыхом), фарш — 71 °C.",
          "Говяжий стейк: с кровью — 50–52 °C, medium rare — 55–57 °C, medium — 60–63 °C, прожаренный — от 70 °C.",
        ],
      },
      {
        heading: "Секрет №5: сливочное масло и «отдых»",
        paragraphs: [
          "Ресторанный приём для стейка и куриного бедра: за 1–2 минуты до готовности добавьте в сковороду кусочек сливочного масла, раздавленный зубчик чеснока и веточку тимьяна или розмарина. Наклоните сковороду и поливайте мясо ложкой пенящимся маслом. Корочка станет глубже, а аромат — насыщеннее.",
          "После жарки дайте мясу отдохнуть: стейку и грудке — 5 минут, большому куску — 10–15 минут. Сок, который при жарке ушёл к центру, распределится обратно, и при разрезе не вытечет на доску.",
          "Нарезайте мясо поперёк волокон — так оно кажется гораздо нежнее.",
        ],
      },
      {
        heading: "Маринады: что работает, а что портит мясо",
        paragraphs: [
          "Маринад в основном работает на поверхности: вглубь проникают только соль и немного сахара. Поэтому главное в маринаде — соль, а масло, специи и травы дают вкус снаружи.",
          "Кислота (уксус, лимон, вино) при долгом маринаде не размягчает мясо, а делает поверхность рыхлой и «ватной». Держите кислые маринады не дольше 2 часов для курицы и 4–6 часов для свинины. Мягче всего работают йогурт и кефир — их можно оставлять на ночь.",
          "Маринады с мёдом, сахаром и соевым соусом быстро подгорают. Жарьте такое мясо на среднем огне или добавляйте сладкую глазурь в последние 2–3 минуты.",
        ],
      },
      {
        heading: "Частые ошибки",
        paragraphs: ["Почему мясо получилось сухим, жёстким или серым:"],
        list: [
          "Мясо не обсушили — оно тушилось в собственном соку.",
          "Сковорода недостаточно разогрета.",
          "В сковороду положили слишком много кусков.",
          "Мясо переворачивали каждые 30 секунд.",
          "Курицу жарили «до верности» — далеко за 74 °C.",
          "Мясо резали сразу со сковороды — сок вытек.",
          "Курицу держали в уксусном маринаде всю ночь.",
        ],
      },
    ],
    en: [
      {
        heading: "Where crust and flavour come from",
        paragraphs: [
          "A golden crust and that 'seared' aroma come from the Maillard reaction: proteins and sugars on the surface of the meat react above 140 °C (285 °F). While there's water on the surface it can't get hotter than 100 °C — the meat stews in its own juices and turns grey.",
          "That's the whole logic of searing: a dry surface, a hot pan, and no crowding, so moisture can evaporate.",
        ],
      },
      {
        heading: "Secret #1: dry brining",
        paragraphs: [
          "This is the most underrated technique in home cooking. Salt the meat ahead — 1 to 24 hours — and leave it uncovered in the fridge. First the salt draws juice to the surface; then the juice dissolves the salt and is reabsorbed, carrying it deep inside. The meat ends up evenly seasoned and noticeably juicier, and the surface dries out — so the crust is better.",
          "No time? Salt right before cooking. The worst option is salting 10–20 minutes ahead: the juice has come out but hasn't gone back in, so the meat steams instead of searing.",
        ],
        tip: "Salt — about 1% of the meat's weight: 5–6 g fine salt per 500 g. Chicken needs 1–2 hours; steaks and pork chops, 4 hours to overnight.",
      },
      {
        heading: "Secret #2: a wet brine for chicken breast",
        paragraphs: [
          "Chicken breast has almost no fat and dries out in a minute. The best insurance is a brine. Dissolve salt in water and put the breast in it for 1–2 hours in the fridge. The meat takes up a little salty water and loses less moisture when cooked.",
          "Always pat the breast dry before cooking. Slice a thick breast in half horizontally or pound it to an even 1.5–2 cm — then it cooks evenly, and the thin end doesn't dry out while the thick part catches up.",
        ],
        tip: "Brine: 50 g salt per 1 litre cold water (5%). Add 1 tbsp sugar for a more golden crust.",
      },
      {
        heading: "Secret #3: a hot pan and patience",
        paragraphs: [
          "Heat the pan for 2–3 minutes over medium-high heat before adding oil. The oil should shimmer and flow like water. Cast iron and heavy steel hold heat best.",
          "Lay the meat in and leave it alone for 2–3 minutes. It will stick at first — that's normal. Once a crust forms, the meat releases from the pan by itself and can be turned. Don't crowd the pan: leave space between pieces, or the temperature drops and the meat releases its juices.",
        ],
        list: [
          "Use refined oil with a high smoke point: sunflower, rapeseed/canola, light olive oil.",
          "Add butter only at the end, or it burns.",
          "Don't press the meat with a spatula — you're squeezing out the juice.",
        ],
      },
      {
        heading: "Secret #4: a thermometer instead of guessing",
        paragraphs: [
          "A probe thermometer is cheap and ends dry chicken and raw middles for good. Insert it into the thickest part without touching bone.",
          "Remember carryover cooking: after you take meat off the heat, the inside rises another 3–5 °C. Pull steak a little before the target. Bring chicken to a safe 74 °C (165 °F).",
        ],
        list: [
          "Chicken and turkey — 74 °C (165 °F).",
          "Pork — 63–65 °C (145–150 °F) with rest; mince — 71 °C (160 °F).",
          "Beef steak: rare 50–52 °C, medium-rare 55–57 °C, medium 60–63 °C, well done 70 °C and up.",
        ],
      },
      {
        heading: "Secret #5: butter basting and resting",
        paragraphs: [
          "A restaurant trick for steak and chicken thigh: 1–2 minutes before it's done, add a knob of butter, a crushed garlic clove and a sprig of thyme or rosemary to the pan. Tilt the pan and spoon the foaming butter over the meat. The crust deepens and the aroma gets richer.",
          "After cooking, let the meat rest: 5 minutes for steak or breast, 10–15 minutes for a large piece. The juices that were pushed toward the centre redistribute and don't flood the board when you slice.",
          "Slice against the grain — the meat feels much more tender.",
        ],
      },
      {
        heading: "Marinades: what works and what ruins meat",
        paragraphs: [
          "A marinade mostly works on the surface: only salt and a little sugar travel inside. So the key ingredient in a marinade is salt; oil, spices and herbs flavour the outside.",
          "Acid (vinegar, lemon, wine) doesn't tenderise meat in long marinades — it makes the surface mushy and cottony. Keep acidic marinades to 2 hours for chicken and 4–6 hours for pork. Yoghurt and kefir work most gently and can be left overnight.",
          "Marinades with honey, sugar and soy sauce burn quickly. Cook such meat over medium heat, or add the sweet glaze in the last 2–3 minutes.",
        ],
      },
      {
        heading: "Common mistakes",
        paragraphs: ["Why meat came out dry, tough or grey:"],
        list: [
          "The meat wasn't patted dry — it stewed in its own juice.",
          "The pan wasn't hot enough.",
          "Too many pieces went into the pan.",
          "The meat was flipped every 30 seconds.",
          "Chicken was cooked 'to be safe' — far past 74 °C.",
          "The meat was cut straight from the pan — the juice ran out.",
          "Chicken sat in a vinegar marinade overnight.",
        ],
      },
    ],
    ua: [
      {
        heading: "Звідки беруться скоринка й смак",
        paragraphs: [
          "Рум'яна скоринка й «смажений» аромат — це реакція Маяра: білки й цукри на поверхні м'яса реагують за температури вище 140 °C. Поки на поверхні є вода, вище 100 °C вона не нагріється — м'ясо варитиметься у власному соку й стане сірим.",
          "Звідси головна логіка смаження: суха поверхня, гаряча сковорода й відсутність тісноти, щоб волога встигала випаровуватися.",
        ],
      },
      {
        heading: "Секрет №1: сухе засолювання",
        paragraphs: [
          "Це найбільш недооцінений прийом домашньої кухні. Посоліть м'ясо заздалегідь — за 1–24 години — і залиште в холодильнику без плівки. Спочатку сіль витягує сік на поверхню, потім він розчиняє сіль і вбирається назад, несучи її вглиб. М'ясо виходить рівномірно посоленим зсередини й помітно соковитішим, а поверхня підсихає — скоринка буде кращою.",
          "Якщо часу немає, соліть просто перед смаженням. Найгірше — посолити за 10–20 хвилин: сік уже вийшов на поверхню, але ще не вбрався, і м'ясо тушкуватиметься, а не смажитиметься.",
        ],
        tip: "Сіль — близько 1% від ваги м'яса: 5–6 г дрібної солі на 500 г. Для курки достатньо 1–2 годин, для стейків і свинячих відбивних — від 4 годин до ночі.",
      },
      {
        heading: "Секрет №2: мокрий розсіл для курячої грудки",
        paragraphs: [
          "Куряча грудка майже без жиру й пересихає за хвилину. Найкраща страховка — розсіл. Розчиніть сіль у воді й занурте в нього грудку на 1–2 години в холодильнику. М'ясо вбере трохи солоної води й втратить менше вологи під час смаження.",
          "Перед смаженням обов'язково обсушіть грудку рушником. Товсту грудку розріжте вздовж або відбийте до рівної товщини 1,5–2 см — тоді вона просмажиться рівномірно, а тонкий край не пересохне, поки готується товстий.",
        ],
        tip: "Розсіл: 50 г солі на 1 літр холодної води (5%). Можна додати 1 ст. л. цукру — скоринка стане рум'янішою.",
      },
      {
        heading: "Секрет №3: гаряча сковорода й терпіння",
        paragraphs: [
          "Розігрівайте сковороду 2–3 хвилини на середньо-сильному вогні, перш ніж налити олію. Олія має злегка «тремтіти» й розтікатися, як вода. Найкраще тримають жар чавун і товста сталь.",
          "Викладіть м'ясо й не чіпайте його 2–3 хвилини. Спочатку воно прилипне — це нормально. Коли скоринка сформується, м'ясо саме відійде від сковороди, і його можна перевернути. Не викладайте забагато шматків одразу: між ними має бути місце, інакше температура впаде й м'ясо пустить сік.",
        ],
        list: [
          "Олія — рафінована, з високою точкою димлення: соняшникова, ріпакова, оливкова рафінована.",
          "Вершкове масло додавайте наприкінці, інакше воно пригорить.",
          "Не притискайте м'ясо лопаткою — ви видавлюєте сік.",
        ],
      },
      {
        heading: "Секрет №4: термометр замість «на око»",
        paragraphs: [
          "Кухонний щуп-термометр коштує недорого й назавжди позбавляє сухої курки та сирої середини. Встромляйте його в найтовщу частину шматка, не торкаючись кістки.",
          "Пам'ятайте про «дохід»: після зняття з вогню температура всередині піднімається ще на 3–5 °C. Стейк знімайте трохи раніше потрібної температури. Курку доводьте до безпечних 74 °C.",
        ],
        list: [
          "Курка й індичка — 74 °C.",
          "Свинина — 63–65 °C (із відпочинком), фарш — 71 °C.",
          "Яловичий стейк: із кров'ю — 50–52 °C, medium rare — 55–57 °C, medium — 60–63 °C, просмажений — від 70 °C.",
        ],
      },
      {
        heading: "Секрет №5: вершкове масло й «відпочинок»",
        paragraphs: [
          "Ресторанний прийом для стейка й курячого стегна: за 1–2 хвилини до готовності додайте в сковороду шматочок вершкового масла, роздавлений зубчик часнику й гілочку чебрецю чи розмарину. Нахиліть сковороду й поливайте м'ясо ложкою масла, що піниться. Скоринка стане глибшою, а аромат — насиченішим.",
          "Після смаження дайте м'ясу відпочити: стейку й грудці — 5 хвилин, великому шматку — 10–15 хвилин. Сік, що під час смаження пішов до центру, розподілиться назад і при розрізанні не витече на дошку.",
          "Нарізайте м'ясо поперек волокон — так воно здається набагато ніжнішим.",
        ],
      },
      {
        heading: "Маринади: що працює, а що псує м'ясо",
        paragraphs: [
          "Маринад здебільшого працює на поверхні: вглиб проникають лише сіль і трохи цукру. Тому головне в маринаді — сіль, а олія, спеції й трави дають смак зовні.",
          "Кислота (оцет, лимон, вино) під час довгого маринування не розм'якшує м'ясо, а робить поверхню пухкою й «ватною». Тримайте кислі маринади не довше 2 годин для курки й 4–6 годин для свинини. Найм'якше працюють йогурт і кефір — їх можна лишати на ніч.",
          "Маринади з медом, цукром і соєвим соусом швидко пригорають. Смажте таке м'ясо на середньому вогні або додавайте солодку глазур в останні 2–3 хвилини.",
        ],
      },
      {
        heading: "Часті помилки",
        paragraphs: ["Чому м'ясо вийшло сухим, жорстким або сірим:"],
        list: [
          "М'ясо не обсушили — воно тушкувалося у власному соку.",
          "Сковорода недостатньо розігріта.",
          "У сковороду поклали забагато шматків.",
          "М'ясо перевертали кожні 30 секунд.",
          "Курку смажили «для певності» — далеко за 74 °C.",
          "М'ясо різали одразу зі сковороди — сік витік.",
          "Курку тримали в оцтовому маринаді всю ніч.",
        ],
      },
    ],
  },
  faq: {
    ru: [
      { q: "Сколько соли нужно для сухого посола?", a: "Около 1% от веса мяса — 5–6 г мелкой соли на 500 г. Посолите за 1–24 часа и держите в холодильнике без плёнки." },
      { q: "При какой температуре курица готова?", a: "74 °C в самой толстой части. Это безопасная температура, при которой грудка ещё остаётся сочной." },
      { q: "Почему мясо на сковороде становится серым и пускает сок?", a: "Сковорода недостаточно горячая, мясо мокрое или кусков слишком много. Обсушите мясо, разогрейте сковороду и жарьте партиями." },
      { q: "Сколько мясо должно отдыхать после жарки?", a: "Стейк или грудку — 5 минут, большой кусок — 10–15 минут. Иначе сок вытечет при разрезе." },
    ],
    en: [
      { q: "How much salt for a dry brine?", a: "About 1% of the meat's weight — 5–6 g fine salt per 500 g. Salt 1–24 hours ahead and keep uncovered in the fridge." },
      { q: "What temperature is chicken done at?", a: "74 °C (165 °F) in the thickest part. It's the safe temperature at which breast is still juicy." },
      { q: "Why does meat turn grey and release juice in the pan?", a: "The pan isn't hot enough, the meat is wet, or there are too many pieces. Pat dry, heat the pan properly and cook in batches." },
      { q: "How long should meat rest after cooking?", a: "5 minutes for a steak or chicken breast, 10–15 minutes for a large piece. Otherwise the juice runs out when you cut it." },
    ],
    ua: [
      { q: "Скільки солі потрібно для сухого засолювання?", a: "Близько 1% від ваги м'яса — 5–6 г дрібної солі на 500 г. Посоліть за 1–24 години й тримайте в холодильнику без плівки." },
      { q: "За якої температури курка готова?", a: "74 °C у найтовщій частині. Це безпечна температура, за якої грудка ще лишається соковитою." },
      { q: "Чому м'ясо на сковороді стає сірим і пускає сік?", a: "Сковорода недостатньо гаряча, м'ясо мокре або шматків забагато. Обсушіть м'ясо, розігрійте сковороду й смажте партіями." },
      { q: "Скільки м'ясо має відпочивати після смаження?", a: "Стейк чи грудку — 5 хвилин, великий шматок — 10–15 хвилин. Інакше сік витече при розрізанні." },
    ],
  },
};
