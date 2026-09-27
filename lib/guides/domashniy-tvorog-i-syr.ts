import type { Guide } from "./types";

export const guide: Guide = {
  slug: "domashniy-tvorog-i-syr",
  emoji: "🧀",
  image: "/img/guides/domashniy-tvorog-i-syr.webp",
  updated: "2026-09-26",
  title: {
    ru: "Домашний творог, рикотта, панир и маскарпоне из обычного молока",
    en: "Homemade cottage cheese, ricotta, paneer and mascarpone from ordinary milk",
    ua: "Домашній сир, рікота, панір і маскарпоне зі звичайного молока",
  },
  summary: {
    ru: "Творог из кефира в духовке и нежнейший творог из замороженного кефира, рикотта и панир из молока с лимоном, маскарпоне из сливок, лабне из йогурта. Какое молоко подходит, почему не надо кипятить, сколько получается, а ещё — как собрать сырную тарелку и хранить сыр.",
    en: "Cottage cheese from kefir in the oven and ultra-soft curd from frozen kefir, ricotta and paneer from milk and lemon, mascarpone from cream, labneh from yoghurt. Which milk works, why not to boil it, how much you get — plus how to build a cheese board and store cheese.",
    ua: "Сир із кефіру в духовці й найніжніший сир із замороженого кефіру, рікота й панір із молока з лимоном, маскарпоне з вершків, лабне з йогурту. Яке молоко підходить, чому не треба кип'ятити, скільки виходить, а ще — як зібрати сирну тарілку й зберігати сир.",
  },
  relatedRecipes: ["syrniki-iz-tvoroga", "tvorozhnaya-zapekanka", "chizkeyk-bez-vypechki", "salat-kapreze"],
  sections: {
    ru: [
      {
        heading: "Как молоко превращается в сыр",
        paragraphs: [
          "Белок молока — казеин — свёртывается, когда в молоко добавляют кислоту (лимонный сок, уксус, кефир) или фермент (сычужный фермент), особенно при нагреве. Он собирается в хлопья, а жидкость — сыворотка — отделяется. Отцедив сыворотку, получаем творог или мягкий сыр.",
          "Все рецепты в этой статье — кислотные: для них не нужны закваски и специальное оборудование, только кастрюля, марля и дуршлаг.",
        ],
        tip: "Лучший результат даёт пастеризованное молоко 3,2–3,5% жирности. Ультрапастеризованное (UHT, хранится месяцами без холодильника) свёртывается плохо: белки повреждены высокой температурой, и хлопья получаются мелкими. Обезжиренное молоко даёт сухой и резиновый творог.",
      },
      {
        heading: "Творог из кефира",
        paragraphs: [
          "Самый простой способ. Из 1 литра кефира 2,5–3,2% получается 200–250 г нежного творога.",
        ],
        list: [
          "Налейте кефир в кастрюлю и поставьте её на водяную баню или в духовку при 80–90 °C.",
          "Не мешайте. Через 15–30 минут кефир отделится: сверху — белый сгусток, по краям — прозрачная желтоватая сыворотка.",
          "Главное — не перегреть: не доводите до кипения. Если нагреть выше 70 °C, творог станет крупинчатым и сухим.",
          "Остудите, переложите на дуршлаг, застеленный марлей в 2–3 слоя, и дайте стечь 1–2 часа. Для сухого творога подвесьте марлю на ночь в холодильнике.",
        ],
      },
      {
        heading: "Творог из замороженного кефира",
        paragraphs: [
          "Способ без нагрева даёт самый нежный, кремовый творог — почти как творожный сыр.",
          "Положите пакет кефира в морозилку на сутки. Разрежьте пакет, достаньте ледяной брусок и положите его в дуршлаг, застеленный марлей, над миской. Оставьте в холодильнике на 12–24 часа — пока кефир оттаивает, сыворотка стекает, а в марле остаётся нежнейшая творожная масса.",
          "Из 1 литра выходит 250–300 г. Такой творог идеален для десертов, кремов и завтраков с ягодами, а для сырников он слишком влажный.",
        ],
      },
      {
        heading: "Рикотта",
        paragraphs: [
          "Итальянский сыр рикотта изначально делается из сыворотки, но домашний вариант из молока со сливками получается даже нежнее.",
        ],
        list: [
          "1 л молока 3,2%, 250 мл сливок 20–33%, ½ ч. л. соли.",
          "3 ст. л. лимонного сока или 2 ст. л. уксуса 6%.",
          "Нагрейте молоко со сливками и солью до 85–90 °C — появятся пузырьки по краям и пар, но не кипение.",
          "Снимите с огня, влейте лимонный сок и один раз очень осторожно перемешайте. Оставьте на 5–10 минут — образуются хлопья.",
          "Аккуратно переложите шумовкой в дуршлаг с марлей. Отцеживайте 15–20 минут для мягкой рикотты, 1 час — для плотной.",
        ],
        tip: "Сыворотку не выливайте: на ней отлично получаются блины, оладьи, хлеб и тесто для пиццы. Хранится в холодильнике 3–4 дня.",
      },
      {
        heading: "Панир и адыгейский сыр",
        paragraphs: [
          "Панир — индийский несолёный сыр, который не плавится при жарке. Он держит форму кубиками в карри и отлично обжаривается до корочки. Адыгейский сыр делается почти так же, но из сыворотки.",
          "Доведите 2 литра молока 3,2% до кипения. Снимите с огня, влейте 4–5 ст. л. лимонного сока, перемешайте — молоко сразу свернётся крупными хлопьями, а сыворотка станет прозрачной. Если сыворотка мутная — добавьте ещё ложку сока.",
          "Откиньте на марлю, промойте холодной водой, чтобы убрать кислый привкус, отожмите. Сформируйте плоский квадрат 2–3 см толщиной, положите под груз — например, кастрюлю с водой — на 1–2 часа. Из 2 литров выходит 300–350 г.",
        ],
        tip: "Для адыгейского сыра добавьте в горячее молоко соль (1 ч. л. на литр) и отцеживайте в плетёной корзинке — она даст характерный рисунок на корочке.",
      },
      {
        heading: "Маскарпоне и лабне",
        paragraphs: [
          "Маскарпоне: нагрейте 500 мл сливок 33% до 85 °C на водяной бане, влейте 1 ст. л. лимонного сока и помешивайте 5 минут — сливки загустеют, но не свернутся хлопьями. Остудите, переложите в сито с марлей и оставьте в холодильнике на ночь. Получится около 350 г плотного крема — для тирамису и чизкейка.",
          "Лабне — ближневосточный сыр из йогурта. Смешайте 500 г греческого или натурального йогурта с ½ ч. л. соли, выложите в марлю и подвесьте над миской в холодильнике на 12–24 часа. Чем дольше, тем плотнее: через сутки лабне можно скатать в шарики и залить оливковым маслом с травами.",
        ],
      },
      {
        heading: "Как пользоваться домашним творогом",
        paragraphs: [
          "Домашний творог влажнее магазинного. Для сырников и запеканки отожмите его сильнее или подвесьте на ночь — лишняя влага заставит сырники растекаться и потребует больше муки.",
          "Для кремов и нежной выпечки протрите творог через сито или пробейте блендером — он станет гладким, как сливочный сыр.",
          "Храните домашний творог и сыры в закрытом контейнере в холодильнике: творог и рикотту — 3–4 дня, панир — до 5 дней в воде, которую меняют ежедневно, маскарпоне — 3–4 дня.",
        ],
      },
      {
        heading: "Сырная тарелка",
        paragraphs: [
          "Хорошая сырная тарелка — это 3–5 сыров с разной текстурой и вкусом. Подавайте их от мягких и нежных к выдержанным и острым.",
        ],
        list: [
          "Мягкий: бри, камамбер, козий сыр, моцарелла, рикотта.",
          "Полутвёрдый: гауда, маасдам, эмменталь, чеддер.",
          "Твёрдый выдержанный: пармезан, пекорино, выдержанная гауда.",
          "С голубой плесенью: горгонзола, дор блю, рокфор.",
          "Количество: 50–80 г на человека как закуска, 100–150 г, если сыр — главное блюдо вечера.",
          "К сыру: мёд, орехи, виноград, инжир, груши, варенье из инжира или айвы, крекеры и багет.",
        ],
        tip: "Достаньте сыр из холодильника за 30–60 минут до подачи. Холодный сыр почти не пахнет и кажется безвкусным — аромат раскрывается при комнатной температуре.",
      },
      {
        heading: "Как хранить сыр",
        paragraphs: [
          "Сыр живой: ему нужно дышать. В плотной плёнке он «задыхается», покрывается влагой и приобретает неприятный запах. Лучше заворачивать сыр в пергамент или вощёную бумагу, а сверху — в неплотный пакет.",
          "Храните сыр в самом тёплом отделении холодильника — ящике для овощей. Твёрдые сыры хранятся 3–4 недели, полутвёрдые — 2–3 недели, мягкие — до недели после вскрытия.",
          "Плесень на твёрдом сыре можно срезать с запасом 1–2 см — остальное безопасно. Мягкий сыр, творог и тёртый сыр с плесенью выбросьте целиком: в них плесень прорастает глубоко.",
        ],
      },
    ],
    en: [
      {
        heading: "How milk becomes cheese",
        paragraphs: [
          "Milk protein — casein — curdles when acid (lemon juice, vinegar, kefir) or an enzyme (rennet) is added, especially with heat. It gathers into curds, and the liquid — whey — separates. Drain off the whey and you have cottage cheese or a soft cheese.",
          "Every recipe in this article uses acid: no cultures or special equipment, just a pan, muslin and a colander.",
        ],
        tip: "Pasteurised milk of 3.2–3.5% fat gives the best result. UHT milk (the kind that keeps for months without refrigeration) curdles poorly: the proteins are damaged by the high heat and the curds come out tiny. Skimmed milk gives dry, rubbery curd.",
      },
      {
        heading: "Cottage cheese from kefir",
        paragraphs: [
          "The simplest method. 1 litre of 2.5–3.2% kefir gives 200–250 g of soft curd.",
        ],
        list: [
          "Pour the kefir into a pan and set it over a bain-marie or in the oven at 80–90 °C.",
          "Don't stir. After 15–30 minutes the kefir separates: a white curd on top and clear yellowish whey around the edges.",
          "The key is not to overheat: don't let it boil. Above 70 °C the curd turns grainy and dry.",
          "Cool, tip into a colander lined with 2–3 layers of muslin and drain for 1–2 hours. For dry curd, hang the muslin overnight in the fridge.",
        ],
      },
      {
        heading: "Curd from frozen kefir",
        paragraphs: [
          "This no-heat method gives the softest, creamiest curd — almost like cream cheese.",
          "Put a carton of kefir in the freezer for a day. Cut open the carton, take out the frozen block and put it in a muslin-lined colander over a bowl. Leave in the fridge for 12–24 hours — as the kefir thaws, the whey drains and the softest curd is left in the muslin.",
          "1 litre gives 250–300 g. It's ideal for desserts, creams and breakfasts with berries, but too wet for syrniki.",
        ],
      },
      {
        heading: "Ricotta",
        paragraphs: [
          "Italian ricotta was originally made from whey, but a homemade version from milk and cream is even softer.",
        ],
        list: [
          "1 l 3.2% milk, 250 ml 20–33% cream, ½ tsp salt.",
          "3 tbsp lemon juice or 2 tbsp 6% vinegar.",
          "Heat the milk, cream and salt to 85–90 °C — bubbles at the edges and steam, but not boiling.",
          "Take off the heat, add the lemon juice and stir very gently once. Leave for 5–10 minutes — curds form.",
          "Gently ladle into a muslin-lined colander. Drain 15–20 minutes for soft ricotta, 1 hour for firm.",
        ],
        tip: "Don't pour away the whey: it makes excellent pancakes, fritters, bread and pizza dough. It keeps 3–4 days in the fridge.",
      },
      {
        heading: "Paneer and Adyghe cheese",
        paragraphs: [
          "Paneer is an unsalted Indian cheese that doesn't melt when fried. It holds its shape in cubes in a curry and browns beautifully. Adyghe cheese from the Caucasus is made almost the same way.",
          "Bring 2 litres of 3.2% milk to the boil. Take off the heat, add 4–5 tbsp lemon juice and stir — the milk curdles at once into large curds and the whey turns clear. If the whey is cloudy, add another spoon of juice.",
          "Drain through muslin, rinse with cold water to remove the sour taste and squeeze. Shape into a flat 2–3 cm square and press under a weight — a pan of water, say — for 1–2 hours. 2 litres gives 300–350 g.",
        ],
        tip: "For Adyghe cheese, add salt to the hot milk (1 tsp per litre) and drain in a wicker basket — it leaves the characteristic pattern on the crust.",
      },
      {
        heading: "Mascarpone and labneh",
        paragraphs: [
          "Mascarpone: heat 500 ml 33% cream to 85 °C over a bain-marie, add 1 tbsp lemon juice and stir for 5 minutes — the cream thickens but doesn't split into curds. Cool, tip into a muslin-lined sieve and leave in the fridge overnight. You get about 350 g of thick cream — for tiramisu and cheesecake.",
          "Labneh is a Middle Eastern yoghurt cheese. Mix 500 g Greek or natural yoghurt with ½ tsp salt, spoon into muslin and hang over a bowl in the fridge for 12–24 hours. The longer, the firmer: after a day you can roll labneh into balls and cover them with olive oil and herbs.",
        ],
      },
      {
        heading: "Using homemade curd",
        paragraphs: [
          "Homemade curd is wetter than shop-bought. For syrniki and bakes, squeeze it harder or hang it overnight — excess moisture makes syrniki spread and needs more flour.",
          "For creams and delicate bakes, push the curd through a sieve or blend it — it turns as smooth as cream cheese.",
          "Keep homemade curd and cheeses in a sealed container in the fridge: curd and ricotta 3–4 days, paneer up to 5 days in water changed daily, mascarpone 3–4 days.",
        ],
      },
      {
        heading: "A cheese board",
        paragraphs: [
          "A good cheese board has 3–5 cheeses with different textures and flavours. Serve them from mild and soft to aged and strong.",
        ],
        list: [
          "Soft: brie, camembert, goat's cheese, mozzarella, ricotta.",
          "Semi-hard: gouda, maasdam, emmental, cheddar.",
          "Hard and aged: parmesan, pecorino, aged gouda.",
          "Blue: gorgonzola, Danish blue, roquefort.",
          "Amount: 50–80 g per person as a starter, 100–150 g if cheese is the main event.",
          "With the cheese: honey, nuts, grapes, figs, pears, fig or quince paste, crackers and baguette.",
        ],
        tip: "Take cheese out of the fridge 30–60 minutes before serving. Cold cheese barely smells and seems tasteless — the aroma opens up at room temperature.",
      },
      {
        heading: "How to store cheese",
        paragraphs: [
          "Cheese is alive: it needs to breathe. Wrapped tightly in cling film it sweats and picks up an unpleasant smell. Better to wrap it in baking paper or wax paper, then loosely in a bag.",
          "Keep cheese in the warmest part of the fridge — the vegetable drawer. Hard cheeses keep 3–4 weeks, semi-hard 2–3 weeks, soft up to a week once opened.",
          "Mould on hard cheese can be cut off with a 1–2 cm margin — the rest is safe. Throw away mouldy soft cheese, curd or grated cheese entirely: in them the mould spreads deep.",
        ],
      },
    ],
    ua: [
      {
        heading: "Як молоко перетворюється на сир",
        paragraphs: [
          "Білок молока — казеїн — згортається, коли в молоко додають кислоту (лимонний сік, оцет, кефір) або фермент (сичужний фермент), особливо під час нагрівання. Він збирається в пластівці, а рідина — сироватка — відділяється. Відцідивши сироватку, отримуємо сир (творог) або м'який сир.",
          "Усі рецепти в цій статті — кислотні: для них не потрібні закваски й спеціальне обладнання, лише каструля, марля й друшляк.",
        ],
        tip: "Найкращий результат дає пастеризоване молоко 3,2–3,5% жирності. Ультрапастеризоване (UHT, зберігається місяцями без холодильника) згортається погано: білки пошкоджені високою температурою, і пластівці виходять дрібними. Знежирене молоко дає сухий і гумовий сир.",
      },
      {
        heading: "Сир із кефіру",
        paragraphs: [
          "Найпростіший спосіб. З 1 літра кефіру 2,5–3,2% виходить 200–250 г ніжного сиру.",
        ],
        list: [
          "Налийте кефір у каструлю й поставте її на водяну баню або в духовку за 80–90 °C.",
          "Не мішайте. Через 15–30 хвилин кефір розділиться: зверху — білий згусток, по краях — прозора жовтувата сироватка.",
          "Головне — не перегріти: не доводьте до кипіння. Якщо нагріти вище 70 °C, сир стане крупинчастим і сухим.",
          "Остудіть, перекладіть на друшляк, застелений марлею у 2–3 шари, і дайте стекти 1–2 години. Для сухого сиру підвісьте марлю на ніч у холодильнику.",
        ],
      },
      {
        heading: "Сир із замороженого кефіру",
        paragraphs: [
          "Спосіб без нагрівання дає найніжніший, кремовий сир — майже як вершковий.",
          "Покладіть пакет кефіру в морозилку на добу. Розріжте пакет, дістаньте крижаний брусок і покладіть його в друшляк, застелений марлею, над мискою. Залиште в холодильнику на 12–24 години — поки кефір відтає, сироватка стікає, а в марлі лишається найніжніша сирна маса.",
          "З 1 літра виходить 250–300 г. Такий сир ідеальний для десертів, кремів і сніданків з ягодами, а для сирників він надто вологий.",
        ],
      },
      {
        heading: "Рікота",
        paragraphs: [
          "Італійську рікоту спочатку роблять із сироватки, але домашній варіант із молока з вершками виходить навіть ніжнішим.",
        ],
        list: [
          "1 л молока 3,2%, 250 мл вершків 20–33%, ½ ч. л. солі.",
          "3 ст. л. лимонного соку або 2 ст. л. оцту 6%.",
          "Нагрійте молоко з вершками й сіллю до 85–90 °C — з'являться бульбашки по краях і пара, але не кипіння.",
          "Зніміть із вогню, влийте лимонний сік і один раз дуже обережно перемішайте. Залиште на 5–10 хвилин — утворяться пластівці.",
          "Обережно перекладіть шумівкою в друшляк із марлею. Відціджуйте 15–20 хвилин для м'якої рікоти, 1 годину — для щільної.",
        ],
        tip: "Сироватку не виливайте: на ній чудово виходять млинці, оладки, хліб і тісто для піци. Зберігається в холодильнику 3–4 дні.",
      },
      {
        heading: "Панір і адигейський сир",
        paragraphs: [
          "Панір — індійський несолоний сир, який не плавиться під час смаження. Він тримає форму кубиками в карі й чудово обсмажується до скоринки. Адигейський сир роблять майже так само, але із сироватки.",
          "Доведіть 2 літри молока 3,2% до кипіння. Зніміть із вогню, влийте 4–5 ст. л. лимонного соку, перемішайте — молоко одразу згорнеться великими пластівцями, а сироватка стане прозорою. Якщо сироватка каламутна — додайте ще ложку соку.",
          "Відкиньте на марлю, промийте холодною водою, щоб прибрати кислий присмак, відтисніть. Сформуйте плаский квадрат завтовшки 2–3 см, покладіть під вантаж — наприклад, каструлю з водою — на 1–2 години. З 2 літрів виходить 300–350 г.",
        ],
        tip: "Для адигейського сиру додайте в гаряче молоко сіль (1 ч. л. на літр) і відціджуйте в плетеному кошику — він дасть характерний малюнок на скоринці.",
      },
      {
        heading: "Маскарпоне й лабне",
        paragraphs: [
          "Маскарпоне: нагрійте 500 мл вершків 33% до 85 °C на водяній бані, влийте 1 ст. л. лимонного соку й помішуйте 5 хвилин — вершки загуснуть, але не згорнуться пластівцями. Остудіть, перекладіть у сито з марлею й залиште в холодильнику на ніч. Вийде близько 350 г щільного крему — для тірамісу й чізкейку.",
          "Лабне — близькосхідний сир із йогурту. Змішайте 500 г грецького чи натурального йогурту з ½ ч. л. солі, викладіть у марлю й підвісьте над мискою в холодильнику на 12–24 години. Що довше, то щільніше: через добу лабне можна скачати в кульки й залити оливковою олією з травами.",
        ],
      },
      {
        heading: "Як використовувати домашній сир",
        paragraphs: [
          "Домашній сир вологіший за магазинний. Для сирників і запіканки відтисніть його сильніше або підвісьте на ніч — зайва волога змусить сирники розтікатися й потребуватиме більше борошна.",
          "Для кремів і ніжної випічки протріть сир крізь сито або проколотіть блендером — він стане гладеньким, як вершковий сир.",
          "Зберігайте домашній сир і сири в закритому контейнері в холодильнику: сир і рікоту — 3–4 дні, панір — до 5 днів у воді, яку щодня міняють, маскарпоне — 3–4 дні.",
        ],
      },
      {
        heading: "Сирна тарілка",
        paragraphs: [
          "Добра сирна тарілка — це 3–5 сирів із різною текстурою й смаком. Подавайте їх від м'яких і ніжних до витриманих і гострих.",
        ],
        list: [
          "М'який: брі, камамбер, козячий сир, моцарела, рікота.",
          "Напівтвердий: гауда, маасдам, емменталь, чедер.",
          "Твердий витриманий: пармезан, пекоріно, витримана гауда.",
          "Із блакитною цвіллю: горгонзола, дор блю, рокфор.",
          "Кількість: 50–80 г на людину як закуска, 100–150 г, якщо сир — головна страва вечора.",
          "До сиру: мед, горіхи, виноград, інжир, груші, варення з інжиру чи айви, крекери й багет.",
        ],
        tip: "Дістаньте сир із холодильника за 30–60 хвилин до подачі. Холодний сир майже не пахне й здається несмачним — аромат розкривається за кімнатної температури.",
      },
      {
        heading: "Як зберігати сир",
        paragraphs: [
          "Сир живий: йому треба дихати. У щільній плівці він «задихається», вкривається вологою й набуває неприємного запаху. Краще загортати сир у пергамент або вощений папір, а зверху — у нещільний пакет.",
          "Зберігайте сир у найтеплішому відділенні холодильника — шухляді для овочів. Тверді сири зберігаються 3–4 тижні, напівтверді — 2–3 тижні, м'які — до тижня після відкриття.",
          "Цвіль на твердому сирі можна зрізати із запасом 1–2 см — решта безпечна. М'який сир, творог і тертий сир із цвіллю викиньте повністю: у них цвіль проростає глибоко.",
        ],
      },
    ],
  },
  faq: {
    ru: [
      { q: "Почему молоко не свернулось?", a: "Молоко ультрапастеризованное, недостаточно нагрето или мало кислоты. Нагрейте до 85–90 °C и добавьте ещё ложку лимонного сока." },
      { q: "Почему творог получился сухим и крупинчатым?", a: "Кефир перегрели или кипятили. Держите температуру ниже 70–80 °C и не мешайте, пока идёт разделение." },
      { q: "Можно ли сделать творог из козьего молока?", a: "Да, по тем же рецептам. Козье молоко даёт более нежный и мелкий сгусток, поэтому отцеживайте через более плотную ткань." },
      { q: "Выгодно ли делать творог дома?", a: "По цене — обычно примерно так же, как магазинный хорошего качества. Главный плюс — вы точно знаете состав, а свежий домашний творог и рикотта значительно нежнее." },
      { q: "Чем заменить маскарпоне в тирамису?", a: "Сливочным сыром (творожным сыром) пополам со сливками 33%, взбитыми до мягких пиков. Или домашним маскарпоне по рецепту выше." },
    ],
    en: [
      { q: "Why didn't my milk curdle?", a: "It's UHT milk, it wasn't heated enough, or there wasn't enough acid. Heat to 85–90 °C and add another spoon of lemon juice." },
      { q: "Why is my curd dry and grainy?", a: "The kefir was overheated or boiled. Keep it below 70–80 °C and don't stir while it separates." },
      { q: "Can I make curd from goat's milk?", a: "Yes, with the same recipes. Goat's milk gives a softer, finer curd, so drain it through a tighter cloth." },
      { q: "Is homemade curd cheaper?", a: "Usually about the same as a good shop-bought one. The real advantage is knowing exactly what's in it, and fresh homemade curd and ricotta are much softer." },
      { q: "What can replace mascarpone in tiramisu?", a: "Cream cheese mixed half and half with 33% cream whipped to soft peaks. Or homemade mascarpone from the recipe above." },
    ],
    ua: [
      { q: "Чому молоко не згорнулося?", a: "Молоко ультрапастеризоване, недостатньо нагріте або мало кислоти. Нагрійте до 85–90 °C і додайте ще ложку лимонного соку." },
      { q: "Чому сир вийшов сухим і крупинчастим?", a: "Кефір перегріли або кип'ятили. Тримайте температуру нижче 70–80 °C і не мішайте, поки йде розділення." },
      { q: "Чи можна зробити сир із козячого молока?", a: "Так, за тими самими рецептами. Козяче молоко дає ніжніший і дрібніший згусток, тому відціджуйте крізь щільнішу тканину." },
      { q: "Чи вигідно робити сир удома?", a: "За ціною — зазвичай приблизно так само, як магазинний доброї якості. Головна перевага — ви точно знаєте склад, а свіжий домашній сир і рікота значно ніжніші." },
      { q: "Чим замінити маскарпоне в тірамісу?", a: "Вершковим сиром навпіл із вершками 33%, збитими до м'яких піків. Або домашнім маскарпоне за рецептом вище." },
    ],
  },
};
