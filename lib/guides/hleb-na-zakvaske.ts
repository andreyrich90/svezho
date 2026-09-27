import type { Guide } from "./types";

export const guide: Guide = {
  slug: "hleb-na-zakvaske",
  emoji: "🥖",
  image: "/img/guides/hleb-na-zakvaske.webp",
  updated: "2026-09-26",
  title: {
    ru: "Хлеб на закваске: от первой закваски до хрустящей корки",
    en: "Sourdough bread: from your first starter to a crackling crust",
    ua: "Хліб на заквасці: від першої закваски до хрусткої скоринки",
  },
  summary: {
    ru: "Как вырастить закваску из муки и воды за неделю и как её кормить, базовый рецепт хлеба с гидратацией 70%, растяжения и складывания вместо замеса, как понять, что тесто поднялось, холодная расстойка и выпечка в чугунной кастрюле. Пошагово, с граммами и временем.",
    en: "How to grow a starter from flour and water in a week and how to feed it, a base 70% hydration loaf, stretch-and-folds instead of kneading, how to tell the dough has risen, cold proofing and baking in a cast-iron pot. Step by step, with grams and times.",
    ua: "Як виростити закваску з борошна й води за тиждень і як її годувати, базовий рецепт хліба з гідратацією 70%, розтягування й складання замість замісу, як зрозуміти, що тісто піднялося, холодне розстоювання й випікання в чавунній каструлі. Покроково, з грамами й часом.",
  },
  sections: {
    ru: [
      {
        heading: "Что такое закваска",
        paragraphs: [
          "Закваска — это живая культура диких дрожжей и молочнокислых бактерий, которые живут в муке и в воздухе. Дрожжи поднимают тесто, а бактерии дают хлебу характерную кислинку, глубокий аромат и более долгое хранение. Хлеб на закваске не черствеет 3–4 дня и дольше не плесневеет.",
          "Для закваски нужны только мука, вода, банка и неделя терпения. Закваска, выращенная один раз, при правильном уходе живёт годами.",
        ],
      },
      {
        heading: "Выращиваем закваску за 5–7 дней",
        paragraphs: [
          "Лучше всего начинать с цельнозерновой ржаной муки: в ней больше диких дрожжей и питательных веществ, и закваска просыпается быстрее. Потом её можно перевести на пшеничную. Вода — фильтрованная или отстоянная: хлор в водопроводной воде угнетает микроорганизмы.",
        ],
        list: [
          "День 1: смешайте в банке 50 г муки и 50 г тёплой воды (25–28 °C). Накройте неплотно и оставьте при комнатной температуре.",
          "День 2: могут появиться первые пузырьки. Добавьте 50 г муки и 50 г воды, перемешайте.",
          "Дни 3–7: каждый день выбрасывайте всё, кроме 50 г закваски, и кормите её 50 г муки и 50 г воды.",
          "На 2–3-й день закваска может бурно подняться, а потом «затихнуть» — это нормально: сначала размножаются другие бактерии, потом их вытесняют нужные. Продолжайте кормить.",
          "Закваска готова, когда стабильно увеличивается в 2 раза за 4–8 часов после кормления, пахнет приятно кисло, как йогурт или яблоко, и полна пузырьков.",
        ],
        tip: "Наденьте на банку резинку на уровне закваски после кормления — так легко увидеть, насколько она поднялась.",
      },
      {
        heading: "Как ухаживать за закваской",
        paragraphs: [
          "Если печёте часто — держите закваску при комнатной температуре и кормите раз в день. Если раз в неделю — храните в холодильнике и кормите раз в 5–7 дней.",
          "Стандартное кормление 1:1:1 — 1 часть закваски, 1 часть муки, 1 часть воды по весу. Например, 50 г закваски + 50 г муки + 50 г воды. Для более медленного и кислого развития — 1:2:2 или 1:5:5.",
          "За 8–12 часов до выпечки достаньте закваску из холодильника и покормите её. Использовать закваску нужно на пике активности — когда она поднялась максимально, но ещё не начала опадать.",
        ],
        tip: "Тест на готовность: бросьте чайную ложку закваски в стакан воды. Если она плавает — в ней достаточно газа, и можно замешивать тесто.",
      },
      {
        heading: "Базовый хлеб: пропорции",
        paragraphs: [
          "Этот рецепт даёт одну буханку весом около 850 г — хлеб с открытой пористой мякотью и хрустящей корочкой.",
        ],
        list: [
          "450 г пшеничной хлебопекарной муки (белка 12–13%)",
          "50 г цельнозерновой пшеничной или ржаной муки",
          "350 г воды (70% гидратации)",
          "100 г активной закваски (20%)",
          "10 г соли (2%)",
        ],
        tip: "Если это ваш первый хлеб на закваске — снизьте воду до 325 г (65%). С более плотным тестом проще работать, а когда рука привыкнет, увеличивайте воду.",
      },
      {
        heading: "Автолиз и замес",
        paragraphs: [
          "Смешайте муку с 325 г воды до однородности, без закваски и соли, накройте и оставьте на 30–60 минут. Это автолиз: мука впитывает воду, и клейковина начинает формироваться сама, без замеса. Тесто станет гладким и растяжимым.",
          "Добавьте закваску, вмешайте её руками, сжимая тесто пальцами. Затем всыпьте соль с оставшимися 25 г воды и снова вмешайте. Соль добавляют после автолиза, потому что она замедляет впитывание воды мукой.",
        ],
      },
      {
        heading: "Растяжения и складывания вместо замеса",
        paragraphs: [
          "Влажное тесто на закваске не месят как обычное. Вместо этого делают серии растяжений и складываний: они выстраивают клейковину и удерживают газ.",
          "Смочите руку водой, возьмите край теста, потяните вверх, пока оно не начнёт сопротивляться, и сложите на противоположную сторону. Поверните миску на четверть и повторите. Всего 4 складывания — это одна серия.",
          "Делайте серию каждые 30 минут, всего 4 серии за первые 2 часа. С каждым разом тесто будет становиться более гладким, упругим и держать форму.",
        ],
      },
      {
        heading: "Брожение: смотрите на тесто, а не на часы",
        paragraphs: [
          "После складываний оставьте тесто под крышкой. Общее время брожения при 24–26 °C — 4–6 часов, при 20–22 °C — 6–10 часов. Закваска работает медленнее, чем магазинные дрожжи, и сильно зависит от температуры.",
        ],
        list: [
          "Тесто увеличилось в объёме на 50–75% (не в 2 раза — это перебродившее тесто).",
          "Поверхность куполообразная, на ней и по бокам видны пузыри.",
          "Тесто колышется, как желе, если потрясти миску.",
          "Края теста отходят от стенок миски.",
        ],
        tip: "Удобнее всего бродить тесто в прозрачном контейнере с прямыми стенками: отметьте маркером начальный уровень и следите, когда оно поднимется на половину или три четверти.",
      },
      {
        heading: "Формовка и холодная расстойка",
        paragraphs: [
          "Выложите тесто на слегка присыпанный мукой стол. Сформируйте рыхлый шар, подворачивая края к центру, и дайте отдохнуть 20–30 минут. Затем финальная формовка: переверните, сложите как конверт и сверните в тугой рулет или шар, натягивая поверхность.",
          "Положите тесто швом вверх в корзинку для расстойки или миску, выстланную полотенцем, обильно присыпанным рисовой мукой (она не впитывает влагу и тесто не прилипает). Накройте пакетом и уберите в холодильник на 8–16 часов.",
          "Холодная расстойка — ключ к вкусу и удобству. Тесто медленно дозревает, приобретает сложный кисловатый вкус, а холодное тесто легче переложить и надрезать.",
        ],
      },
      {
        heading: "Выпечка в чугунной кастрюле",
        paragraphs: [
          "Хрустящая корка и высокий подъём требуют пара в первые 20 минут: влажная поверхность не затвердевает, и хлеб свободно растёт. Дома это проще всего сделать в чугунной кастрюле с крышкой — она удерживает пар, выходящий из самого теста.",
          "Поставьте кастрюлю с крышкой в духовку и разогрейте до 250 °C за 45–60 минут. Переверните тесто из корзинки на лист пергамента, сделайте лезвием надрез глубиной 5–10 мм под углом 30–45°. Аккуратно переложите хлеб с пергаментом в горячую кастрюлю и накройте крышкой.",
        ],
        list: [
          "20 минут при 250 °C под крышкой — хлеб поднимется.",
          "Снимите крышку, уменьшите до 230 °C и выпекайте ещё 20–25 минут до тёмно-коричневой корки.",
          "Готовность: при постукивании по дну хлеб звучит глухо, как барабан; температура внутри — 96–98 °C.",
          "Остудите на решётке минимум 1–2 часа, прежде чем резать: мякиш ещё допекается внутри, а горячий хлеб будет липким.",
        ],
        tip: "Не бойтесь тёмной корки: карамелизация даёт хлебу глубокий вкус. Бледная корка — признак недопечённости.",
      },
    ],
    en: [
      {
        heading: "What a starter is",
        paragraphs: [
          "A starter is a living culture of wild yeast and lactic acid bacteria that live in flour and in the air. The yeast raises the dough; the bacteria give the bread its characteristic tang, deep aroma and longer keeping. Sourdough stays fresh for 3–4 days and resists mould longer.",
          "All you need for a starter is flour, water, a jar and a week of patience. Grown once and looked after, a starter lives for years.",
        ],
      },
      {
        heading: "Growing a starter in 5–7 days",
        paragraphs: [
          "It's best to begin with wholegrain rye flour: it carries more wild yeast and nutrients, so the starter wakes up faster. You can switch it to wheat later. Use filtered or rested water: chlorine in tap water inhibits the microbes.",
        ],
        list: [
          "Day 1: mix 50 g flour and 50 g warm water (25–28 °C) in a jar. Cover loosely and leave at room temperature.",
          "Day 2: the first bubbles may appear. Add 50 g flour and 50 g water and stir.",
          "Days 3–7: each day, discard all but 50 g of starter and feed it 50 g flour and 50 g water.",
          "On day 2–3 the starter may rise vigorously and then go quiet — that's normal: other bacteria multiply first, then the right ones take over. Keep feeding.",
          "The starter is ready when it reliably doubles within 4–8 hours of feeding, smells pleasantly sour like yoghurt or apple, and is full of bubbles.",
        ],
        tip: "Put a rubber band around the jar at the level of the starter after feeding — it makes it easy to see how far it has risen.",
      },
      {
        heading: "Looking after a starter",
        paragraphs: [
          "If you bake often, keep the starter at room temperature and feed it once a day. If you bake once a week, keep it in the fridge and feed it every 5–7 days.",
          "The standard 1:1:1 feed is 1 part starter, 1 part flour, 1 part water by weight — for example 50 g starter + 50 g flour + 50 g water. For slower, more sour development, use 1:2:2 or 1:5:5.",
          "8–12 hours before baking, take the starter out of the fridge and feed it. Use it at peak activity — when it has risen as high as it will go but hasn't started to fall.",
        ],
        tip: "The float test: drop a teaspoon of starter into a glass of water. If it floats, it has enough gas and you can mix your dough.",
      },
      {
        heading: "The base loaf: ratios",
        paragraphs: [
          "This recipe makes one loaf of about 850 g — bread with an open, holey crumb and a crisp crust.",
        ],
        list: [
          "450 g strong white bread flour (12–13% protein)",
          "50 g wholemeal wheat or rye flour",
          "350 g water (70% hydration)",
          "100 g active starter (20%)",
          "10 g salt (2%)",
        ],
        tip: "If this is your first sourdough, cut the water to 325 g (65%). A firmer dough is easier to handle; once your hands get used to it, increase the water.",
      },
      {
        heading: "Autolyse and mixing",
        paragraphs: [
          "Mix the flour with 325 g of the water until even, without starter or salt, cover and leave for 30–60 minutes. This is the autolyse: the flour absorbs the water and gluten starts to form by itself, without kneading. The dough turns smooth and stretchy.",
          "Add the starter and work it in by hand, squeezing the dough through your fingers. Then add the salt with the remaining 25 g water and work it in again. Salt goes in after the autolyse because it slows down how fast flour absorbs water.",
        ],
      },
      {
        heading: "Stretch-and-folds instead of kneading",
        paragraphs: [
          "Wet sourdough isn't kneaded like ordinary dough. Instead you do sets of stretch-and-folds: they build gluten and trap gas.",
          "Wet your hand, take the edge of the dough, pull it up until it resists and fold it over to the opposite side. Turn the bowl a quarter and repeat. Four folds make one set.",
          "Do a set every 30 minutes, 4 sets over the first 2 hours. Each time the dough will get smoother, stronger and better at holding its shape.",
        ],
      },
      {
        heading: "Bulk fermentation: watch the dough, not the clock",
        paragraphs: [
          "After the folds, leave the dough covered. Total bulk fermentation at 24–26 °C is 4–6 hours; at 20–22 °C, 6–10 hours. Sourdough works more slowly than commercial yeast and depends heavily on temperature.",
        ],
        list: [
          "The dough has grown by 50–75% (not doubled — that's over-fermented).",
          "The surface is domed, with bubbles visible on top and at the sides.",
          "The dough jiggles like jelly when you shake the bowl.",
          "The edges pull away from the sides of the bowl.",
        ],
        tip: "It's easiest to ferment in a clear straight-sided container: mark the starting level and watch for it to rise by a half to three-quarters.",
      },
      {
        heading: "Shaping and cold proofing",
        paragraphs: [
          "Turn the dough onto a lightly floured counter. Shape it into a loose ball by folding the edges into the centre, and rest it for 20–30 minutes. Then do the final shape: flip it, fold it like an envelope and roll it into a tight log or ball, stretching the surface taut.",
          "Put the dough seam-side up in a proofing basket or a bowl lined with a towel well dusted with rice flour (it doesn't absorb moisture, so the dough won't stick). Cover with a bag and refrigerate for 8–16 hours.",
          "Cold proofing is the key to flavour and convenience. The dough ripens slowly, develops a complex tangy flavour, and cold dough is easier to turn out and score.",
        ],
      },
      {
        heading: "Baking in a cast-iron pot",
        paragraphs: [
          "A crackling crust and a high rise need steam for the first 20 minutes: a moist surface doesn't set and the bread can expand freely. At home the easiest way is a cast-iron pot with a lid — it traps the steam coming off the dough itself.",
          "Put the pot with its lid in the oven and preheat to 250 °C for 45–60 minutes. Turn the dough out of the basket onto a sheet of baking paper and score it with a blade 5–10 mm deep at a 30–45° angle. Carefully lower the bread on its paper into the hot pot and put the lid on.",
        ],
        list: [
          "20 minutes at 250 °C with the lid on — the bread rises.",
          "Remove the lid, lower to 230 °C and bake 20–25 minutes more until the crust is deep brown.",
          "Done: tapping the bottom sounds hollow like a drum; the inside is 96–98 °C.",
          "Cool on a rack for at least 1–2 hours before slicing: the crumb is still setting inside and hot bread will be gummy.",
        ],
        tip: "Don't fear a dark crust: caramelisation gives bread its deep flavour. A pale crust is a sign of underbaking.",
      },
    ],
    ua: [
      {
        heading: "Що таке закваска",
        paragraphs: [
          "Закваска — це жива культура диких дріжджів і молочнокислих бактерій, які живуть у борошні й у повітрі. Дріжджі піднімають тісто, а бактерії дають хлібу характерну кислинку, глибокий аромат і довше зберігання. Хліб на заквасці не черствіє 3–4 дні й довше не пліснявіє.",
          "Для закваски потрібні лише борошно, вода, банка й тиждень терпіння. Закваска, вирощена один раз, за правильного догляду живе роками.",
        ],
      },
      {
        heading: "Вирощуємо закваску за 5–7 днів",
        paragraphs: [
          "Найкраще починати з цільнозернового житнього борошна: у ньому більше диких дріжджів і поживних речовин, і закваска прокидається швидше. Потім її можна перевести на пшеничне. Вода — фільтрована або відстояна: хлор у водопровідній воді пригнічує мікроорганізми.",
        ],
        list: [
          "День 1: змішайте в банці 50 г борошна й 50 г теплої води (25–28 °C). Накрийте нещільно й залиште за кімнатної температури.",
          "День 2: можуть з'явитися перші бульбашки. Додайте 50 г борошна й 50 г води, перемішайте.",
          "Дні 3–7: щодня викидайте все, крім 50 г закваски, і годуйте її 50 г борошна й 50 г води.",
          "На 2–3-й день закваска може бурхливо піднятися, а потім «затихнути» — це нормально: спершу розмножуються інші бактерії, потім їх витісняють потрібні. Продовжуйте годувати.",
          "Закваска готова, коли стабільно збільшується вдвічі за 4–8 годин після годування, пахне приємно кисло, як йогурт або яблуко, і повна бульбашок.",
        ],
        tip: "Надіньте на банку гумку на рівні закваски після годування — так легко побачити, наскільки вона піднялася.",
      },
      {
        heading: "Як доглядати за закваскою",
        paragraphs: [
          "Якщо печете часто — тримайте закваску за кімнатної температури й годуйте раз на день. Якщо раз на тиждень — зберігайте в холодильнику й годуйте раз на 5–7 днів.",
          "Стандартне годування 1:1:1 — 1 частина закваски, 1 частина борошна, 1 частина води за вагою. Наприклад, 50 г закваски + 50 г борошна + 50 г води. Для повільнішого й кислішого розвитку — 1:2:2 або 1:5:5.",
          "За 8–12 годин до випікання дістаньте закваску з холодильника й погодуйте її. Використовувати закваску треба на піку активності — коли вона піднялася максимально, але ще не почала опадати.",
        ],
        tip: "Тест на готовність: киньте чайну ложку закваски в склянку води. Якщо вона плаває — у ній досить газу, і можна замішувати тісто.",
      },
      {
        heading: "Базовий хліб: пропорції",
        paragraphs: [
          "Цей рецепт дає одну хлібину вагою близько 850 г — хліб із відкритою пористою м'якушкою й хрусткою скоринкою.",
        ],
        list: [
          "450 г пшеничного хлібопекарського борошна (білка 12–13%)",
          "50 г цільнозернового пшеничного або житнього борошна",
          "350 г води (70% гідратації)",
          "100 г активної закваски (20%)",
          "10 г солі (2%)",
        ],
        tip: "Якщо це ваш перший хліб на заквасці — зменште воду до 325 г (65%). З щільнішим тістом простіше працювати, а коли рука звикне, збільшуйте воду.",
      },
      {
        heading: "Автоліз і заміс",
        paragraphs: [
          "Змішайте борошно з 325 г води до однорідності, без закваски й солі, накрийте й залиште на 30–60 хвилин. Це автоліз: борошно вбирає воду, і клейковина починає формуватися сама, без замісу. Тісто стане гладеньким і розтяжним.",
          "Додайте закваску, вмішайте її руками, стискаючи тісто пальцями. Потім всипте сіль із рештою 25 г води й знову вмішайте. Сіль додають після автолізу, бо вона сповільнює вбирання води борошном.",
        ],
      },
      {
        heading: "Розтягування й складання замість замісу",
        paragraphs: [
          "Вологе тісто на заквасці не місять як звичайне. Натомість роблять серії розтягувань і складань: вони вибудовують клейковину й утримують газ.",
          "Змочіть руку водою, візьміть край тіста, потягніть угору, доки воно не почне опиратися, і складіть на протилежний бік. Поверніть миску на чверть і повторіть. Усього 4 складання — це одна серія.",
          "Робіть серію кожні 30 хвилин, усього 4 серії за перші 2 години. Щоразу тісто ставатиме гладенькішим, пружнішим і краще триматиме форму.",
        ],
      },
      {
        heading: "Бродіння: дивіться на тісто, а не на годинник",
        paragraphs: [
          "Після складань залиште тісто під кришкою. Загальний час бродіння за 24–26 °C — 4–6 годин, за 20–22 °C — 6–10 годин. Закваска працює повільніше за магазинні дріжджі й сильно залежить від температури.",
        ],
        list: [
          "Тісто збільшилося в об'ємі на 50–75% (не вдвічі — це перебродиле тісто).",
          "Поверхня куполоподібна, на ній і з боків видно бульбашки.",
          "Тісто колихається, як желе, якщо потрусити миску.",
          "Краї тіста відходять від стінок миски.",
        ],
        tip: "Найзручніше бродити тісто в прозорому контейнері з прямими стінками: позначте маркером початковий рівень і стежте, коли воно підніметься на половину або три чверті.",
      },
      {
        heading: "Формування й холодне розстоювання",
        paragraphs: [
          "Викладіть тісто на злегка присипаний борошном стіл. Сформуйте пухку кулю, підгортаючи краї до центру, і дайте відпочити 20–30 хвилин. Потім фінальне формування: переверніть, складіть як конверт і згорніть у тугий рулет або кулю, натягуючи поверхню.",
          "Покладіть тісто швом догори в кошик для розстоювання або миску, вистелену рушником, щедро присипаним рисовим борошном (воно не вбирає вологу, і тісто не прилипає). Накрийте пакетом і приберіть у холодильник на 8–16 годин.",
          "Холодне розстоювання — ключ до смаку й зручності. Тісто повільно дозріває, набуває складного кислуватого смаку, а холодне тісто легше перекласти й надрізати.",
        ],
      },
      {
        heading: "Випікання в чавунній каструлі",
        paragraphs: [
          "Хрустка скоринка й високий підйом потребують пари в перші 20 хвилин: волога поверхня не твердне, і хліб вільно росте. Удома це найпростіше зробити в чавунній каструлі з кришкою — вона утримує пару, що виходить із самого тіста.",
          "Поставте каструлю з кришкою в духовку й розігрійте до 250 °C за 45–60 хвилин. Переверніть тісто з кошика на аркуш пергаменту, зробіть лезом надріз завглибшки 5–10 мм під кутом 30–45°. Обережно перекладіть хліб із пергаментом у гарячу каструлю й накрийте кришкою.",
        ],
        list: [
          "20 хвилин за 250 °C під кришкою — хліб підніметься.",
          "Зніміть кришку, зменште до 230 °C і випікайте ще 20–25 хвилин до темно-коричневої скоринки.",
          "Готовність: під час постукування по дну хліб звучить глухо, як барабан; температура всередині — 96–98 °C.",
          "Остудіть на решітці щонайменше 1–2 години, перш ніж різати: м'якушка ще допікається всередині, а гарячий хліб буде липким.",
        ],
        tip: "Не бійтеся темної скоринки: карамелізація дає хлібу глибокий смак. Бліда скоринка — ознака недопеченості.",
      },
    ],
  },
  faq: {
    ru: [
      { q: "Почему на закваске появилась тёмная жидкость?", a: "Это «хуч» — спирт, который выделяется, когда закваска голодна. Он безопасен. Слейте его или вмешайте (хлеб будет кислее) и покормите закваску." },
      { q: "Закваска заплесневела — можно спасти?", a: "Пушистую цветную плесень на поверхности — нет, лучше начать заново. Розовые или оранжевые разводы — тоже выбросить. Белая плёнка без пушка — обычно дрожжи, её можно снять и покормить закваску." },
      { q: "Почему хлеб получился плоским и плотным?", a: "Слабая закваска, недоброд или перебродившее тесто, слабая формовка. Используйте закваску на пике активности, следите за объёмом теста и натягивайте поверхность при формовке." },
      { q: "Куда девать выброшенную закваску?", a: "Её можно добавлять в блины, оладьи, крекеры и пиццу — она даёт приятную кислинку. Храните остатки в холодильнике в отдельной банке до недели." },
      { q: "Можно ли испечь хлеб без чугунной кастрюли?", a: "Да: на противне или камне при 250 °C, поставив на нижний уровень противень с кипятком для пара на первые 20 минут. Корка будет чуть тоньше, но хлеб всё равно получится." },
    ],
    en: [
      { q: "Why is there dark liquid on my starter?", a: "That's hooch — alcohol released when the starter is hungry. It's harmless. Pour it off or stir it in (the bread will be more sour) and feed the starter." },
      { q: "My starter has gone mouldy — can I save it?", a: "Fuzzy coloured mould on top — no, better start again. Pink or orange streaks — throw it away too. A white film with no fuzz is usually yeast; skim it off and feed the starter." },
      { q: "Why is my bread flat and dense?", a: "A weak starter, under- or over-fermented dough, or loose shaping. Use the starter at peak activity, watch the dough's volume and stretch the surface tight when shaping." },
      { q: "What do I do with the discarded starter?", a: "Add it to pancakes, fritters, crackers and pizza — it gives a pleasant tang. Keep the discard in a separate jar in the fridge for up to a week." },
      { q: "Can I bake without a cast-iron pot?", a: "Yes: on a tray or stone at 250 °C, with a tray of boiling water on the bottom shelf for steam during the first 20 minutes. The crust will be a little thinner, but the loaf will still work." },
    ],
    ua: [
      { q: "Чому на заквасці з'явилася темна рідина?", a: "Це «хуч» — спирт, який виділяється, коли закваска голодна. Він безпечний. Злийте його або вмішайте (хліб буде кислішим) і погодуйте закваску." },
      { q: "Закваска запліснявіла — можна врятувати?", a: "Пухнасту кольорову цвіль на поверхні — ні, краще почати заново. Рожеві чи помаранчеві розводи — теж викинути. Біла плівка без пушку — зазвичай дріжджі, її можна зняти й погодувати закваску." },
      { q: "Чому хліб вийшов пласким і щільним?", a: "Слабка закваска, недоброджене або перебродиле тісто, слабке формування. Використовуйте закваску на піку активності, стежте за об'ємом тіста й натягуйте поверхню під час формування." },
      { q: "Куди подіти викинуту закваску?", a: "Її можна додавати в млинці, оладки, крекери й піцу — вона дає приємну кислинку. Зберігайте рештки в холодильнику в окремій банці до тижня." },
      { q: "Чи можна спекти хліб без чавунної каструлі?", a: "Так: на деку або камені за 250 °C, поставивши на нижній рівень деко з окропом для пари на перші 20 хвилин. Скоринка буде трохи тоншою, але хліб однаково вийде." },
    ],
  },
};
