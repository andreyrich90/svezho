import type { Guide } from "./types";

export const guide: Guide = {
  slug: "pyshnyy-biskvit",
  emoji: "🎂",
  image: "/img/guides/pyshnyy-biskvit.webp",
  updated: "2026-09-26",
  title: {
    ru: "Пышный бисквит, который не опадает: пропорции, взбивание до «ленты» и правда про соду",
    en: "A tall sponge that doesn't sink: ratios, whipping to the 'ribbon' stage and the truth about baking soda",
    ua: "Пишний бісквіт, що не опадає: пропорції, збивання до «стрічки» й правда про соду",
  },
  summary: {
    ru: "Разбираем, почему бисквит оседает и получается плотным: классическая пропорция яиц, сахара и муки, как понять, что яйца взбиты достаточно, зачем крахмал, когда можно открывать духовку и нужно ли гасить соду уксусом.",
    en: "Why sponge cakes sink and turn dense: the classic egg-sugar-flour ratio, how to tell the eggs are whipped enough, why starch helps, when you can open the oven, and whether soda needs to be 'quenched' with vinegar.",
    ua: "Розбираємо, чому бісквіт осідає й виходить щільним: класична пропорція яєць, цукру й борошна, як зрозуміти, що яйця збиті достатньо, навіщо крохмаль, коли можна відчиняти духовку і чи треба гасити соду оцтом.",
  },
  relatedRecipes: ["sharlotka-s-yablokami", "bananovyy-hleb", "amerikanskie-pankeyki", "shokoladnyy-brauni"],
  sections: {
    ru: [
      {
        heading: "Откуда берётся пышность",
        paragraphs: [
          "В классическом бисквите нет ни разрыхлителя, ни соды. Он поднимается только за счёт воздуха, который вы вбиваете в яйца. В духовке пузырьки воздуха расширяются, яичный белок вокруг них запекается и фиксирует пористую структуру.",
          "Отсюда два главных правила: вбить как можно больше воздуха и не потерять его, пока вмешиваете муку и ставите форму в духовку.",
        ],
      },
      {
        heading: "Классическая пропорция: 1 яйцо — 25–30 г сахара — 25–30 г муки",
        paragraphs: [
          "Запомните пропорцию «на одно яйцо», и вы сможете сделать бисквит любого размера без рецепта. Для формы диаметром 20–22 см берут 4 яйца, для 24–26 см — 5–6.",
          "Для особенно нежного бисквита замените 20–25% муки крахмалом. Крахмал не даёт клейковины, и мякиш получается мягче и воздушнее.",
        ],
        tip: "Бисквит на форму 22 см: 4 яйца, 120 г сахара, 90 г муки + 30 г кукурузного крахмала, щепотка соли. Выпекать при 170–175 °C 30–35 минут.",
      },
      {
        heading: "Секрет №1: тёплые яйца и стадия «ленты»",
        paragraphs: [
          "Яйца комнатной температуры взбиваются в 1,5–2 раза объёмнее холодных. Достаньте их из холодильника за час или подержите 5 минут в тёплой (не горячей) воде.",
          "Взбивайте яйца целиком с сахаром на высокой скорости 8–10 минут. Не бойтесь переборщить — недобить гораздо хуже. Масса должна посветлеть почти до белого и увеличиться в 3 раза.",
        ],
        tip: "Проверка «ленты»: поднимите венчик — масса стекает широкой лентой и остаётся на поверхности следом 2–3 секунды, прежде чем раствориться. Если след исчезает сразу — взбивайте дальше.",
      },
      {
        heading: "Секрет №2: мука — просеять и вмешать руками",
        paragraphs: [
          "Просейте муку с крахмалом дважды: так она насыщается воздухом и не образует комков, которые потом придётся размешивать и выбивать из теста пузырьки.",
          "Вмешивайте муку в 2–3 приёма силиконовой лопаткой, а не миксером. Движение — снизу вверх по стенке миски, поворачивая миску. Остановитесь, как только исчезнут сухие следы муки. Каждое лишнее движение лопаткой — это лопнувшие пузырьки и более плотный бисквит.",
        ],
      },
      {
        heading: "Секрет №3: форма и духовка",
        paragraphs: [
          "Застелите пергаментом только дно формы, а бортики не смазывайте. Тесто «цепляется» за сухие стенки и поднимается выше. На смазанных стенках оно соскальзывает и опадает.",
          "Духовку разогрейте заранее, минимум 15 минут. Ставьте форму сразу, как только тесто готово, — пузырьки не ждут.",
          "Первые 20–25 минут духовку не открывайте. Поток холодного воздуха — главная причина, по которой бисквит «садится». Готовность проверяйте в конце деревянной шпажкой: из центра она должна выходить сухой.",
        ],
      },
      {
        heading: "Секрет №4: остывание и «отдых»",
        paragraphs: [
          "Резкий перепад температуры тоже роняет бисквит. Когда он готов, выключите духовку и оставьте его внутри с приоткрытой дверцей на 10 минут. Затем достаньте и остудите в форме на решётке.",
          "Профессиональный приём: остывший бисквит заверните в плёнку и оставьте на 6–8 часов или на ночь. Мякиш стабилизируется, перестаёт крошиться, и его легко разрезать на ровные коржи.",
        ],
      },
      {
        heading: "Сода, разрыхлитель и миф про уксус",
        paragraphs: [
          "Для кексов, шарлотки, панкейков и выпечки на кефире нужен разрыхлитель или сода. Сода — это щёлочь: чтобы выделить газ, ей нужна кислота. Поэтому её используют в тесте с кефиром, сметаной, йогуртом, мёдом или какао. Разрыхлитель уже содержит и соду, и кислоту, и работает в любом тесте.",
          "Гасить соду уксусом в ложке бесполезно: газ выделяется прямо в ложке и улетает, до теста он не доходит. Правильно — смешать соду с мукой, а кислота из кефира сработает уже в тесте, в духовке.",
        ],
        list: [
          "Разрыхлитель: 1 ч. л. (4–5 г) на 150–200 г муки.",
          "Сода: 0,5 ч. л. на 250 мл кефира или 200 г сметаны.",
          "Слишком много соды — выпечка горчит, темнеет и пахнет мылом.",
        ],
      },
      {
        heading: "Почему бисквит опал или получился плотным",
        paragraphs: ["Разберите свой случай по списку:"],
        list: [
          "Яйца недобиты — нет стадии «ленты».",
          "Муку вмешивали миксером или слишком долго.",
          "Тесто долго стояло до выпечки.",
          "Духовку открыли в первые 20 минут.",
          "Бисквит не допёкся — середина сырая и оседает при остывании.",
          "Температура слишком высокая — верх схватился, а середина поднялась и треснула «шапкой».",
          "Бортики формы смазаны маслом.",
        ],
      },
    ],
    en: [
      {
        heading: "Where the rise comes from",
        paragraphs: [
          "A classic sponge has no baking powder or soda. It rises only thanks to the air you whip into the eggs. In the oven the air bubbles expand, and the egg protein around them sets and fixes the porous structure.",
          "Hence the two main rules: whip in as much air as possible, and don't lose it while you fold in the flour and get the tin into the oven.",
        ],
      },
      {
        heading: "The classic ratio: 1 egg — 25–30 g sugar — 25–30 g flour",
        paragraphs: [
          "Remember the ratio 'per egg' and you can make a sponge of any size without a recipe. A 20–22 cm (8–9 in) tin takes 4 eggs; a 24–26 cm (10 in) tin takes 5–6.",
          "For an extra-tender sponge, replace 20–25% of the flour with starch. Starch forms no gluten, so the crumb comes out softer and airier.",
        ],
        tip: "Sponge for a 22 cm tin: 4 eggs, 120 g sugar, 90 g flour + 30 g cornstarch, a pinch of salt. Bake at 170–175 °C (340–350 °F) for 30–35 minutes.",
      },
      {
        heading: "Secret #1: warm eggs and the ribbon stage",
        paragraphs: [
          "Room-temperature eggs whip up to 1.5–2 times more volume than cold ones. Take them out of the fridge an hour ahead, or leave them in warm (not hot) water for 5 minutes.",
          "Whip whole eggs with sugar on high speed for 8–10 minutes. Don't worry about overdoing it — under-whipping is much worse. The mixture should turn almost white and triple in volume.",
        ],
        tip: "The ribbon test: lift the whisk — the mixture falls in a thick ribbon that sits on the surface for 2–3 seconds before disappearing. If the trail vanishes immediately, keep whipping.",
      },
      {
        heading: "Secret #2: sift the flour and fold by hand",
        paragraphs: [
          "Sift the flour and starch twice: it gets aerated and won't form lumps that you'd later have to stir out, knocking bubbles out of the batter.",
          "Fold the flour in 2–3 additions with a silicone spatula, not a mixer. Move from the bottom up along the side of the bowl, turning the bowl as you go. Stop as soon as there are no dry streaks. Every extra stroke pops bubbles and makes the sponge denser.",
        ],
      },
      {
        heading: "Secret #3: the tin and the oven",
        paragraphs: [
          "Line only the base of the tin with parchment and don't grease the sides. The batter clings to dry sides and climbs higher; on greased sides it slips and sinks.",
          "Preheat the oven properly, at least 15 minutes. Put the tin in as soon as the batter is ready — the bubbles won't wait.",
          "Don't open the oven for the first 20–25 minutes. A rush of cold air is the main reason sponges collapse. Check at the end with a wooden skewer: it should come out of the centre dry.",
        ],
      },
      {
        heading: "Secret #4: cooling and resting",
        paragraphs: [
          "A sudden temperature drop can also sink a sponge. When it's done, turn off the oven and leave the sponge inside with the door ajar for 10 minutes. Then take it out and cool it in the tin on a rack.",
          "A professional trick: wrap the cooled sponge in cling film and leave it for 6–8 hours or overnight. The crumb settles, stops crumbling, and slices easily into even layers.",
        ],
      },
      {
        heading: "Baking soda, baking powder and the vinegar myth",
        paragraphs: [
          "Muffins, apple cakes, pancakes and kefir- or buttermilk-based bakes need baking powder or baking soda. Soda is an alkali: to release gas it needs an acid. So it's used in batters with kefir, buttermilk, sour cream, yoghurt, honey or cocoa. Baking powder already contains both soda and acid and works in any batter.",
          "'Quenching' soda with vinegar in a spoon is pointless: the gas is released right there in the spoon and escapes before it ever reaches the batter. The right way is to mix soda into the flour and let the acid in the batter do its job in the oven.",
        ],
        list: [
          "Baking powder: 1 tsp (4–5 g) per 150–200 g flour.",
          "Baking soda: ½ tsp per 250 ml kefir/buttermilk or 200 g sour cream.",
          "Too much soda — bakes taste bitter, darken and smell soapy.",
        ],
      },
      {
        heading: "Why the sponge sank or turned dense",
        paragraphs: ["Go through the list:"],
        list: [
          "The eggs weren't whipped to the ribbon stage.",
          "The flour was mixed in with a mixer, or for too long.",
          "The batter sat before baking.",
          "The oven was opened in the first 20 minutes.",
          "The sponge was underbaked — a raw middle sinks as it cools.",
          "The oven was too hot — the top set, the middle rose and cracked into a dome.",
          "The sides of the tin were greased.",
        ],
      },
    ],
    ua: [
      {
        heading: "Звідки береться пишність",
        paragraphs: [
          "У класичному бісквіті немає ні розпушувача, ні соди. Він піднімається лише завдяки повітрю, яке ви вбиваєте в яйця. У духовці бульбашки повітря розширюються, яєчний білок довкола них запікається й фіксує пористу структуру.",
          "Звідси два головні правила: вбити якомога більше повітря й не втратити його, поки вмішуєте борошно й ставите форму в духовку.",
        ],
      },
      {
        heading: "Класична пропорція: 1 яйце — 25–30 г цукру — 25–30 г борошна",
        paragraphs: [
          "Запам'ятайте пропорцію «на одне яйце», і ви зможете зробити бісквіт будь-якого розміру без рецепта. Для форми діаметром 20–22 см беруть 4 яйця, для 24–26 см — 5–6.",
          "Для особливо ніжного бісквіта замініть 20–25% борошна крохмалем. Крохмаль не дає клейковини, і м'якуш виходить м'якшим і повітрянішим.",
        ],
        tip: "Бісквіт на форму 22 см: 4 яйця, 120 г цукру, 90 г борошна + 30 г кукурудзяного крохмалю, дрібка солі. Випікати за 170–175 °C 30–35 хвилин.",
      },
      {
        heading: "Секрет №1: теплі яйця та стадія «стрічки»",
        paragraphs: [
          "Яйця кімнатної температури збиваються в 1,5–2 рази об'ємніше за холодні. Дістаньте їх із холодильника за годину або потримайте 5 хвилин у теплій (не гарячій) воді.",
          "Збивайте яйця цілими з цукром на високій швидкості 8–10 хвилин. Не бійтеся переборщити — недобити набагато гірше. Маса має посвітлішати майже до білого й збільшитися втричі.",
        ],
        tip: "Перевірка «стрічки»: підніміть вінчик — маса стікає широкою стрічкою й лишається на поверхні слідом 2–3 секунди, перш ніж розчинитися. Якщо слід зникає одразу — збивайте далі.",
      },
      {
        heading: "Секрет №2: борошно — просіяти й вмішати руками",
        paragraphs: [
          "Просійте борошно з крохмалем двічі: так воно насичується повітрям і не утворює грудочок, які потім доведеться розмішувати, вибиваючи з тіста бульбашки.",
          "Вмішуйте борошно у 2–3 прийоми силіконовою лопаткою, а не міксером. Рух — знизу вгору по стінці миски, повертаючи миску. Зупиніться, щойно зникнуть сухі сліди борошна. Кожен зайвий рух лопаткою — це луснуті бульбашки й щільніший бісквіт.",
        ],
      },
      {
        heading: "Секрет №3: форма й духовка",
        paragraphs: [
          "Застеліть пергаментом лише дно форми, а бортики не змащуйте. Тісто «чіпляється» за сухі стінки й піднімається вище. На змащених стінках воно зісковзує й опадає.",
          "Духовку розігрійте заздалегідь, щонайменше 15 хвилин. Ставте форму одразу, щойно тісто готове, — бульбашки не чекають.",
          "Перші 20–25 хвилин духовку не відчиняйте. Потік холодного повітря — головна причина, через яку бісквіт «сідає». Готовність перевіряйте наприкінці дерев'яною шпажкою: з центру вона має виходити сухою.",
        ],
      },
      {
        heading: "Секрет №4: охолодження й «відпочинок»",
        paragraphs: [
          "Різкий перепад температури теж обвалює бісквіт. Коли він готовий, вимкніть духовку й залиште його всередині з прочиненими дверцятами на 10 хвилин. Потім дістаньте й остудіть у формі на решітці.",
          "Професійний прийом: охололий бісквіт загорніть у плівку й залиште на 6–8 годин або на ніч. М'якуш стабілізується, перестає кришитися, і його легко розрізати на рівні коржі.",
        ],
      },
      {
        heading: "Сода, розпушувач і міф про оцет",
        paragraphs: [
          "Для кексів, шарлотки, панкейків і випічки на кефірі потрібен розпушувач або сода. Сода — це луг: щоб виділити газ, їй потрібна кислота. Тому її використовують у тісті з кефіром, сметаною, йогуртом, медом чи какао. Розпушувач уже містить і соду, і кислоту та працює в будь-якому тісті.",
          "Гасити соду оцтом у ложці марно: газ виділяється просто в ложці й вилітає, до тіста він не доходить. Правильно — змішати соду з борошном, а кислота з кефіру спрацює вже в тісті, у духовці.",
        ],
        list: [
          "Розпушувач: 1 ч. л. (4–5 г) на 150–200 г борошна.",
          "Сода: 0,5 ч. л. на 250 мл кефіру або 200 г сметани.",
          "Забагато соди — випічка гірчить, темніє й пахне милом.",
        ],
      },
      {
        heading: "Чому бісквіт опав або вийшов щільним",
        paragraphs: ["Розберіть свій випадок за списком:"],
        list: [
          "Яйця недобиті — немає стадії «стрічки».",
          "Борошно вмішували міксером або надто довго.",
          "Тісто довго стояло до випікання.",
          "Духовку відчинили в перші 20 хвилин.",
          "Бісквіт не допікся — сира середина осідає під час охолодження.",
          "Температура занадто висока — верх схопився, а середина піднялася й тріснула «шапкою».",
          "Бортики форми змащені маслом.",
        ],
      },
    ],
  },
  faq: {
    ru: [
      { q: "Сколько взбивать яйца для бисквита?", a: "8–10 минут на высокой скорости, до стадии «ленты»: след от стекающей массы держится на поверхности 2–3 секунды." },
      { q: "Нужно ли добавлять разрыхлитель в бисквит?", a: "В классический — нет, он поднимается за счёт взбитых яиц. Если яйца взбиты хорошо, разрыхлитель не нужен." },
      { q: "Почему бисквит опал после духовки?", a: "Чаще всего его недопекли, открыли духовку слишком рано или резко остудили. Дайте ему постоять 10 минут в выключенной духовке с приоткрытой дверцей." },
      { q: "Нужно ли гасить соду уксусом?", a: "Нет. Газ выделяется в ложке и улетает. Смешайте соду с мукой — кислота из кефира или сметаны сработает в тесте." },
    ],
    en: [
      { q: "How long should I whip eggs for a sponge?", a: "8–10 minutes on high speed, to the ribbon stage: the trail from the falling mixture sits on the surface for 2–3 seconds." },
      { q: "Does a sponge need baking powder?", a: "A classic one doesn't — it rises on whipped eggs. If the eggs are whipped well, no baking powder is needed." },
      { q: "Why did my sponge sink after baking?", a: "Most often it was underbaked, the oven was opened too early, or it cooled too fast. Leave it for 10 minutes in the switched-off oven with the door ajar." },
      { q: "Should I quench baking soda with vinegar?", a: "No. The gas is released in the spoon and escapes. Mix the soda into the flour — the acid from kefir, buttermilk or sour cream will work in the batter." },
    ],
    ua: [
      { q: "Скільки збивати яйця для бісквіта?", a: "8–10 хвилин на високій швидкості, до стадії «стрічки»: слід від маси, що стікає, тримається на поверхні 2–3 секунди." },
      { q: "Чи треба додавати розпушувач у бісквіт?", a: "У класичний — ні, він піднімається завдяки збитим яйцям. Якщо яйця збиті добре, розпушувач не потрібен." },
      { q: "Чому бісквіт опав після духовки?", a: "Найчастіше його не допекли, відчинили духовку надто рано або різко остудили. Дайте йому постояти 10 хвилин у вимкненій духовці з прочиненими дверцятами." },
      { q: "Чи треба гасити соду оцтом?", a: "Ні. Газ виділяється в ложці й вилітає. Змішайте соду з борошном — кислота з кефіру чи сметани спрацює в тісті." },
    ],
  },
};
