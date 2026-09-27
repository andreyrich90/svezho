import type { Guide } from "./types";

export const guide: Guide = {
  slug: "plov",
  emoji: "🍛",
  image: "/img/guides/plov.webp",
  updated: "2026-09-27",
  title: {
    ru: "Плов рассыпчатый: зирвак, правильный рис и казан — пошагово",
    en: "Fluffy plov: zirvak, the right rice and a kazan — step by step",
    ua: "Плов розсипчастий: зірвак, правильний рис і казан — покроково",
  },
  summary: {
    ru: "Пропорция мяса, риса и моркови 1:1:1, почему морковь режут вручную соломкой, как приготовить зирвак и когда его солить, какой рис взять и как замочить, сколько воды наливать и как «запарить» плов, чтобы он получился рассыпчатым, а не кашей.",
    en: "The 1:1:1 meat, rice and carrot ratio, why carrots are cut by hand into batons, how to make the zirvak and when to salt it, which rice to use and how to soak it, how much water to add and how to steam plov so it comes out fluffy rather than mushy.",
    ua: "Пропорція м'яса, рису й моркви 1:1:1, чому моркву ріжуть вручну соломкою, як приготувати зірвак і коли його солити, який рис узяти і як замочити, скільки води наливати й як «запарити» плов, щоб він вийшов розсипчастим, а не кашею.",
  },
  sections: {
    ru: [
      {
        heading: "Главная пропорция 1:1:1",
        paragraphs: [
          "Классический узбекский плов строится на простой формуле: мясо, рис и морковь в равных пропорциях по весу. На 1 кг риса — 1 кг мяса и 1 кг моркови. Этого хватит на 8–10 человек.",
        ],
        list: [
          "1 кг баранины или говядины (лопатка, шея, рёбра — с жирком и косточками).",
          "1 кг риса для плова.",
          "1 кг моркови — жёлтой или оранжевой.",
          "2–3 луковицы.",
          "200–250 мл растительного масла без запаха (или часть — топлёный курдючный жир).",
          "2 головки чеснока целиком, 1 ст. л. зиры (кумина), 1 ст. л. сушёного барбариса, 1–2 стручка сушёного острого перца.",
          "Соль — около 2 ст. л. на всё.",
        ],
        tip: "Если делаете плов из курицы, берите бёдра и голени — они не пересохнут. Время тушения зирвака сократите до 20–25 минут.",
      },
      {
        heading: "Посуда: казан или толстостенная кастрюля",
        paragraphs: [
          "Лучше всего плов получается в чугунном казане с толстым круглым дном. Он медленно и равномерно отдаёт тепло, и рис на последнем этапе запаривается, а не пригорает.",
          "Если казана нет — подойдёт толстостенная чугунная кастрюля, гусятница или глубокая сковорода-сотейник с тяжёлой крышкой. Тонкая кастрюля с плоским дном — худший вариант: рис пригорит снизу и останется сырым сверху.",
        ],
      },
      {
        heading: "Морковь: соломкой и только ножом",
        paragraphs: [
          "Морковь в плове — не просто овощ, а основа вкуса и аромата. Её режут вручную брусочками толщиной 4–5 мм и длиной 5–6 см. На тёрке морковь превратится в кашу, отдаст весь сок и сделает плов мокрым и сладким.",
          "В Средней Азии используют жёлтую морковь — она менее сладкая и плотнее. Если найдёте — возьмите хотя бы половину жёлтой. Если нет — обычная оранжевая тоже даст отличный результат.",
        ],
      },
      {
        heading: "Зирвак: основа плова",
        paragraphs: [
          "Зирвак — это мясо, лук и морковь, обжаренные и протушенные в масле до получения ароматного насыщенного бульона. От него зависит вкус всего плова.",
        ],
        list: [
          "Раскалите масло в казане до лёгкого дымка. Если есть курдюк — вытопите его и выньте шкварки.",
          "Обжарьте кости и мясо крупными кусками 5–6 см до корочки на сильном огне — 7–10 минут. Не мешайте постоянно.",
          "Добавьте лук полукольцами и жарьте до золотистого цвета — 5–7 минут.",
          "Выложите морковь сверху ровным слоем, не мешайте 3–5 минут, затем перемешайте и жарьте ещё 10 минут до мягкости.",
          "Добавьте зиру (растерев в ладонях), барбарис, перчик. Влейте кипяток, чтобы он покрыл мясо, — около 1 литра.",
          "Тушите на слабом огне 40–60 минут для баранины и говядины.",
        ],
        tip: "Солите зирвак за 10 минут до закладки риса. Он должен казаться чуть пересоленным: рис впитает соль, и в готовом плове вкус будет в самый раз.",
      },
      {
        heading: "Рис: какой взять и как подготовить",
        paragraphs: [
          "Для плова нужен рис, который хорошо впитывает жир и бульон, но остаётся упругим и не разваривается. Лучше всего — сорта для плова: девзира, лазер, чунгара. Подойдёт и среднезёрный рис с пометкой «для плова». Круглый рис для каши не годится — получится каша. Длиннозёрный пропаренный — сухой и безвкусный в плове.",
          "Промойте рис 5–7 раз, пока вода не станет прозрачной. Затем замочите в тёплой подсоленной воде на 30–60 минут — девзиру можно на 1–2 часа. Перед закладкой слейте воду.",
        ],
      },
      {
        heading: "Закладка риса и вода",
        paragraphs: [
          "Разровняйте зирвак и выложите сверху рис ровным слоем — не перемешивайте его с зирваком. Это главное правило: всё, что под рисом, должно остаться под рисом.",
          "Осторожно влейте кипяток по шумовке, чтобы не размыть рис, — до уровня на 1,5–2 см выше риса. Для девзиры — чуть больше, на 2–2,5 см.",
          "Увеличьте огонь до максимума и дайте воде выкипеть. Когда вода уйдёт с поверхности, а рис станет почти готовым сверху, соберите его горкой к центру. Сделайте палочкой несколько отверстий до дна — через них будет выходить пар.",
        ],
      },
      {
        heading: "Запаривание — последний шаг",
        paragraphs: [
          "Воткните в рис целые головки чеснока, очищенные от верхней шелухи. Накройте казан плотной крышкой (можно подложить полотенце или тарелку, чтобы пар не уходил).",
          "Уменьшите огонь до минимума и оставьте плов томиться 20–30 минут. За это время рис дойдёт на пару и пропитается ароматом зирвака.",
          "Проверка: постучите шумовкой по рису — глухой звук означает, что вода выкипела. Попробуйте рис: он должен быть мягким, но рассыпчатым.",
        ],
        tip: "Не открывайте крышку во время запаривания без необходимости — пар уйдёт, и рис может остаться сыроватым.",
      },
      {
        heading: "Подача",
        paragraphs: [
          "Выньте чеснок, аккуратно перемешайте плов, поднимая снизу зирвак. Мясо можно вынуть, нарезать и выложить сверху.",
          "Выложите плов горкой на большое блюдо, сверху — мясо и головки чеснока. Традиционно к плову подают салат «Ачичук»: тонко нарезанные помидоры и лук с солью и перцем — он освежает жирное блюдо. И зелёный чай.",
        ],
      },
      {
        heading: "Частые ошибки",
        paragraphs: [],
        list: [
          "Рис перемешали с зирваком — получается каша.",
          "Морковь натёрли на тёрке — плов мокрый и сладкий.",
          "Слишком много воды — рис разварился; слишком мало — остался твёрдым.",
          "Мало масла — плов сухой и безвкусный. Масло — часть рецепта, а не лишний жир.",
          "Круглый рис для каши или неправильно промытый рис — клейкость вместо рассыпчатости.",
          "Солить в конце — рис остаётся пресным, соль должна быть в зирваке.",
        ],
      },
    ],
    en: [
      {
        heading: "The key 1:1:1 ratio",
        paragraphs: [
          "Classic Uzbek plov rests on a simple formula: meat, rice and carrots in equal weights. Per 1 kg of rice, 1 kg of meat and 1 kg of carrots. That serves 8–10 people.",
        ],
        list: [
          "1 kg lamb or beef (shoulder, neck, ribs — with some fat and bone).",
          "1 kg plov rice.",
          "1 kg carrots — yellow or orange.",
          "2–3 onions.",
          "200–250 ml neutral oil (or partly rendered lamb tail fat).",
          "2 whole heads of garlic, 1 tbsp cumin, 1 tbsp dried barberries, 1–2 dried chillies.",
          "Salt — about 2 tbsp in total.",
        ],
        tip: "For chicken plov, use thighs and drumsticks — they won't dry out. Cut the zirvak simmering time to 20–25 minutes.",
      },
      {
        heading: "The pot: a kazan or a heavy casserole",
        paragraphs: [
          "Plov turns out best in a cast-iron kazan with a thick rounded base. It gives off heat slowly and evenly, so in the final stage the rice steams instead of burning.",
          "No kazan? A heavy cast-iron casserole, a roasting pot or a deep sauté pan with a heavy lid will do. A thin pot with a flat base is the worst choice: the rice burns underneath and stays raw on top.",
        ],
      },
      {
        heading: "Carrots: batons, cut by hand",
        paragraphs: [
          "Carrots in plov aren't just a vegetable — they're the base of flavour and aroma. Cut them by hand into batons 4–5 mm thick and 5–6 cm long. Grated carrots turn mushy, release all their juice and make the plov wet and sweet.",
          "Central Asia uses yellow carrots — less sweet and firmer. If you can find them, use at least half yellow. If not, ordinary orange carrots still give an excellent result.",
        ],
      },
      {
        heading: "Zirvak: the foundation",
        paragraphs: [
          "Zirvak is meat, onion and carrot fried and then simmered in oil until they make a rich, fragrant broth. The flavour of the whole plov depends on it.",
        ],
        list: [
          "Heat the oil in the kazan until it just smokes. If using tail fat, render it and remove the cracklings.",
          "Brown the bones and meat in large 5–6 cm pieces over high heat for 7–10 minutes. Don't stir constantly.",
          "Add the onions in half-rings and fry until golden, 5–7 minutes.",
          "Spread the carrots on top, leave for 3–5 minutes without stirring, then stir and fry 10 minutes more until soft.",
          "Add the cumin (rubbed between your palms), barberries and chillies. Pour in boiling water to cover the meat — about 1 litre.",
          "Simmer on low heat for 40–60 minutes for lamb or beef.",
        ],
        tip: "Salt the zirvak 10 minutes before adding the rice. It should taste slightly too salty: the rice absorbs the salt and the finished plov comes out just right.",
      },
      {
        heading: "Rice: which to use and how to prepare it",
        paragraphs: [
          "Plov needs rice that soaks up fat and broth well yet stays firm and doesn't collapse. The best are plov varieties such as devzira, laser or chungara. Medium-grain rice labelled \"for plov\" works too. Short-grain pudding rice won't do — you get porridge. Long-grain parboiled rice is dry and tasteless in plov.",
          "Rinse the rice 5–7 times until the water runs clear. Then soak it in warm salted water for 30–60 minutes — devzira for 1–2 hours. Drain before adding.",
        ],
      },
      {
        heading: "Adding the rice and water",
        paragraphs: [
          "Level the zirvak and spread the rice over it evenly — don't stir it into the zirvak. That's the golden rule: everything under the rice stays under the rice.",
          "Gently pour boiling water over a slotted spoon so it doesn't disturb the rice, to 1.5–2 cm above the rice. For devzira a bit more, 2–2.5 cm.",
          "Turn the heat to maximum and let the water boil off. When it has gone from the surface and the top rice is nearly cooked, gather the rice into a dome in the centre. Poke several holes to the bottom with a stick — steam escapes through them.",
        ],
      },
      {
        heading: "Steaming — the final step",
        paragraphs: [
          "Push the whole garlic heads, loose outer skin removed, into the rice. Cover the kazan with a tight lid (a towel or plate underneath helps keep the steam in).",
          "Turn the heat to the lowest and leave the plov for 20–30 minutes. The rice finishes in the steam and takes on the aroma of the zirvak.",
          "Check: tap the rice with a slotted spoon — a dull sound means the water has gone. Taste the rice: it should be tender but separate.",
        ],
        tip: "Don't lift the lid during steaming unless you must — the steam escapes and the rice may stay underdone.",
      },
      {
        heading: "Serving",
        paragraphs: [
          "Remove the garlic and gently mix the plov, lifting the zirvak from the bottom. You can take the meat out, slice it and lay it on top.",
          "Pile the plov onto a large platter with the meat and garlic heads on top. It's traditionally served with achichuk salad — thinly sliced tomatoes and onion with salt and pepper — which freshens the rich dish, and green tea.",
        ],
      },
      {
        heading: "Common mistakes",
        paragraphs: [],
        list: [
          "The rice was stirred into the zirvak — it turns to porridge.",
          "The carrots were grated — the plov is wet and sweet.",
          "Too much water — the rice collapses; too little — it stays hard.",
          "Not enough oil — dry, bland plov. The oil is part of the recipe, not excess fat.",
          "Short-grain rice or poorly rinsed rice — sticky instead of fluffy.",
          "Salting at the end — the rice stays bland; the salt belongs in the zirvak.",
        ],
      },
    ],
    ua: [
      {
        heading: "Головна пропорція 1:1:1",
        paragraphs: [
          "Класичний узбецький плов будується на простій формулі: м'ясо, рис і морква в рівних пропорціях за вагою. На 1 кг рису — 1 кг м'яса й 1 кг моркви. Цього вистачить на 8–10 осіб.",
        ],
        list: [
          "1 кг баранини або яловичини (лопатка, шия, реберця — із жирком і кісточками).",
          "1 кг рису для плову.",
          "1 кг моркви — жовтої або помаранчевої.",
          "2–3 цибулини.",
          "200–250 мл олії без запаху (або частково — топлений курдючний жир).",
          "2 головки часнику цілими, 1 ст. л. зіри (кмину), 1 ст. л. сушеного барбарису, 1–2 стручки сушеного гострого перцю.",
          "Сіль — близько 2 ст. л. на все.",
        ],
        tip: "Якщо робите плов із курки, беріть стегна й гомілки — вони не пересохнуть. Час тушкування зірваку скоротіть до 20–25 хвилин.",
      },
      {
        heading: "Посуд: казан або товстостінна каструля",
        paragraphs: [
          "Найкраще плов виходить у чавунному казані з товстим круглим дном. Він повільно й рівномірно віддає тепло, і рис на останньому етапі запарюється, а не пригорає.",
          "Якщо казана немає — підійде товстостінна чавунна каструля, гусятниця або глибока сковорода-сотейник із важкою кришкою. Тонка каструля з пласким дном — найгірший варіант: рис пригорить знизу й лишиться сирим згори.",
        ],
      },
      {
        heading: "Морква: соломкою й лише ножем",
        paragraphs: [
          "Морква в плові — не просто овоч, а основа смаку й аромату. Її ріжуть вручну брусочками завтовшки 4–5 мм і завдовжки 5–6 см. На тертці морква перетвориться на кашу, віддасть увесь сік і зробить плов мокрим і солодким.",
          "У Середній Азії використовують жовту моркву — вона менш солодка й щільніша. Якщо знайдете — візьміть хоча б половину жовтої. Якщо ні — звичайна помаранчева теж дасть чудовий результат.",
        ],
      },
      {
        heading: "Зірвак: основа плову",
        paragraphs: [
          "Зірвак — це м'ясо, цибуля й морква, обсмажені й протушковані в олії до отримання ароматного насиченого бульйону. Від нього залежить смак усього плову.",
        ],
        list: [
          "Розпечіть олію в казані до легкого димку. Якщо є курдюк — витопіть його й вийміть шкварки.",
          "Обсмажте кістки й м'ясо великими шматками 5–6 см до скоринки на сильному вогні — 7–10 хвилин. Не мішайте постійно.",
          "Додайте цибулю півкільцями й смажте до золотистого кольору — 5–7 хвилин.",
          "Викладіть моркву зверху рівним шаром, не мішайте 3–5 хвилин, потім перемішайте й смажте ще 10 хвилин до м'якості.",
          "Додайте зіру (розтерши в долонях), барбарис, перчик. Влийте окріп, щоб він покрив м'ясо, — близько 1 літра.",
          "Тушкуйте на слабкому вогні 40–60 хвилин для баранини й яловичини.",
        ],
        tip: "Соліть зірвак за 10 хвилин до закладання рису. Він має здаватися трохи пересоленим: рис вбере сіль, і в готовому плові смак буде саме такий, як треба.",
      },
      {
        heading: "Рис: який узяти і як підготувати",
        paragraphs: [
          "Для плову потрібен рис, який добре вбирає жир і бульйон, але лишається пружним і не розварюється. Найкраще — сорти для плову: девзіра, лазер, чунгара. Підійде й середньозерний рис із позначкою «для плову». Круглий рис для каші не годиться — вийде каша. Довгозерний пропарений — сухий і несмачний у плові.",
          "Промийте рис 5–7 разів, доки вода не стане прозорою. Потім замочіть у теплій підсоленій воді на 30–60 хвилин — девзіру можна на 1–2 години. Перед закладанням злийте воду.",
        ],
      },
      {
        heading: "Закладання рису й вода",
        paragraphs: [
          "Розрівняйте зірвак і викладіть зверху рис рівним шаром — не перемішуйте його із зірваком. Це головне правило: усе, що під рисом, має лишитися під рисом.",
          "Обережно влийте окріп через шумівку, щоб не розмити рис, — до рівня на 1,5–2 см вище рису. Для девзіри — трохи більше, на 2–2,5 см.",
          "Збільште вогонь до максимуму й дайте воді википіти. Коли вода піде з поверхні, а рис стане майже готовим зверху, зберіть його гіркою до центру. Зробіть паличкою кілька отворів до дна — через них виходитиме пара.",
        ],
      },
      {
        heading: "Запарювання — останній крок",
        paragraphs: [
          "Встроміть у рис цілі головки часнику, очищені від верхнього лушпиння. Накрийте казан щільною кришкою (можна підкласти рушник або тарілку, щоб пара не виходила).",
          "Зменште вогонь до мінімуму й залиште плов томитися 20–30 хвилин. За цей час рис дійде на парі й просякне ароматом зірваку.",
          "Перевірка: постукайте шумівкою по рису — глухий звук означає, що вода випарувалася. Скуштуйте рис: він має бути м'яким, але розсипчастим.",
        ],
        tip: "Не відкривайте кришку під час запарювання без потреби — пара вийде, і рис може лишитися сируватим.",
      },
      {
        heading: "Подача",
        paragraphs: [
          "Вийміть часник, обережно перемішайте плов, піднімаючи знизу зірвак. М'ясо можна вийняти, нарізати й викласти зверху.",
          "Викладіть плов гіркою на велике блюдо, зверху — м'ясо й головки часнику. Традиційно до плову подають салат «Ачичук»: тонко нарізані помідори й цибуля із сіллю й перцем — він освіжає жирну страву. І зелений чай.",
        ],
      },
      {
        heading: "Часті помилки",
        paragraphs: [],
        list: [
          "Рис перемішали із зірваком — виходить каша.",
          "Моркву натерли на тертці — плов мокрий і солодкий.",
          "Забагато води — рис розварився; замало — лишився твердим.",
          "Мало олії — плов сухий і несмачний. Олія — частина рецепта, а не зайвий жир.",
          "Круглий рис для каші або погано промитий рис — клейкість замість розсипчастості.",
          "Солити наприкінці — рис лишається прісним, сіль має бути в зірваку.",
        ],
      },
    ],
  },
  faq: {
    ru: [
      { q: "Можно ли приготовить плов в мультиварке?", a: "Да: зирвак — в режиме «Жарка», затем рис сверху, вода на 1,5 см выше, режим «Плов» или «Крупа». Результат хороший, хотя без характерной корочки и аромата казана." },
      { q: "Почему плов получился кашей?", a: "Рис неподходящий (круглый), плохо промыт, его перемешали с зирваком или налили слишком много воды. Выбирайте рис для плова и не мешайте его до конца готовки." },
      { q: "Можно ли сделать плов без баранины?", a: "Конечно. Говядина — самая популярная замена, курица — самая быстрая, есть и постный плов с нутом, сухофруктами и грибами." },
      { q: "Сколько хранится плов?", a: "3–4 дня в холодильнике. Разогревайте на сковороде с ложкой воды под крышкой или в микроволновке, накрыв. Плов хорошо переносит заморозку до 2 месяцев." },
      { q: "Что делать, если рис остался твёрдым?", a: "Сделайте в рисе ещё несколько отверстий, влейте в них 50–100 мл кипятка, плотно накройте и томите на минимальном огне ещё 10–15 минут." },
    ],
    en: [
      { q: "Can I make plov in a multicooker?", a: "Yes: the zirvak on the fry setting, then the rice on top, water 1.5 cm above, on the plov or grain setting. The result is good, though without the crust and aroma of a kazan." },
      { q: "Why did my plov turn to mush?", a: "The rice was wrong (short-grain), poorly rinsed, stirred into the zirvak, or there was too much water. Use plov rice and don't stir it until the end." },
      { q: "Can I make plov without lamb?", a: "Of course. Beef is the most popular substitute, chicken the quickest, and there's also a meatless plov with chickpeas, dried fruit and mushrooms." },
      { q: "How long does plov keep?", a: "3–4 days in the fridge. Reheat in a covered pan with a spoon of water or covered in the microwave. Plov freezes well for up to 2 months." },
      { q: "What if the rice is still hard?", a: "Poke a few more holes in the rice, pour 50–100 ml boiling water into them, cover tightly and steam on the lowest heat for another 10–15 minutes." },
    ],
    ua: [
      { q: "Чи можна приготувати плов у мультиварці?", a: "Так: зірвак — у режимі «Смаження», потім рис зверху, вода на 1,5 см вище, режим «Плов» або «Крупа». Результат добрий, хоча без характерної скоринки й аромату казана." },
      { q: "Чому плов вийшов кашею?", a: "Рис невідповідний (круглий), погано промитий, його перемішали із зірваком або налили забагато води. Обирайте рис для плову й не мішайте його до кінця готування." },
      { q: "Чи можна зробити плов без баранини?", a: "Звісно. Яловичина — найпопулярніша заміна, курка — найшвидша, є й пісний плов із нутом, сухофруктами й грибами." },
      { q: "Скільки зберігається плов?", a: "3–4 дні в холодильнику. Розігрівайте на сковороді з ложкою води під кришкою або в мікрохвильовці, накривши. Плов добре переносить заморожування до 2 місяців." },
      { q: "Що робити, якщо рис лишився твердим?", a: "Зробіть у рисі ще кілька отворів, влийте в них 50–100 мл окропу, щільно накрийте й томіть на мінімальному вогні ще 10–15 хвилин." },
    ],
  },
};
