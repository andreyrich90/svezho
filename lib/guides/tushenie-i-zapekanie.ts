import type { Guide } from "./types";

export const guide: Guide = {
  slug: "tushenie-i-zapekanie",
  emoji: "🍖",
  image: "/img/guides/tushenie-i-zapekanie.webp",
  updated: "2026-09-26",
  title: {
    ru: "Тушение и запекание мяса: мягкое, как масло, и сочное внутри",
    en: "Braising and roasting meat: butter-soft and juicy inside",
    ua: "Тушкування й запікання м'яса: м'яке, як масло, і соковите всередині",
  },
  summary: {
    ru: "Какие куски тушить, а какие запекать, почему жёсткая говядина становится мягкой только через 2–3 часа, сколько жидкости наливать, как запечь мясо с температурой внутри до градуса, зачем ему отдых и как нарезать, чтобы оно не казалось сухим.",
    en: "Which cuts to braise and which to roast, why tough beef only turns tender after 2–3 hours, how much liquid to use, how to roast meat to within a degree, why it needs to rest and how to slice it so it never seems dry.",
    ua: "Які шматки тушкувати, а які запікати, чому жорстка яловичина стає м'якою лише через 2–3 години, скільки рідини наливати, як запекти м'ясо з температурою всередині до градуса, навіщо йому відпочинок і як нарізати, щоб воно не здавалося сухим.",
  },
  relatedRecipes: ["kurinye-bedra-medovo-gorchichnye", "kuritsa-v-karri-s-kokosovym-molokom", "kurinye-shashlychki-v-duhovke", "kurinoe-file-v-slivochno-chesnochnom-souse"],
  sections: {
    ru: [
      {
        heading: "Два вида мяса — два способа",
        paragraphs: [
          "Мясо бывает нежным и жёстким, и это определяет, как его готовить. Нежные куски (вырезка, корейка, филе грудки, ростбиф) — это мышцы, которые мало работали: в них мало соединительной ткани. Их готовят быстро и до нужной температуры — жарят, запекают при высокой температуре. Если их долго тушить, они станут сухими.",
          "Жёсткие куски (лопатка, шея, голяшка, грудинка, говяжьи щёки, куриные бёдра) — это активные мышцы с большим количеством коллагена. Быстро приготовленные, они жёсткие, как резина. Но при долгом нагреве в жидкости коллаген превращается в желатин — мясо становится мягким, сочным и само распадается на волокна.",
        ],
        list: [
          "Тушить: говяжья лопатка, грудинка, голяшка, щёки; свиная шея и лопатка, рёбра; баранья лопатка; куриные бёдра и голени.",
          "Запекать или жарить: вырезка, толстый и тонкий край, ростбиф, свиная корейка, куриная грудка, целая курица.",
        ],
      },
      {
        heading: "Что происходит при тушении",
        paragraphs: [
          "Коллаген начинает распадаться примерно с 70 °C, но медленно, — на это нужны часы. Одновременно мышечные волокна сжимаются и теряют сок. Поэтому в первый час тушения мясо становится жёстче, чем было, и многие решают, что оно «не тушится», и сдаются. Нужно продолжать: после 2 часов коллаген переходит в желатин, который впитывается обратно в волокна, и мясо размягчается.",
          "Главное правило — тихий огонь. Бурное кипение (100 °C) выжимает из волокон сок быстрее, чем коллаген успевает раствориться, и мясо получается сухим и волокнистым, даже плавая в соусе. Жидкость должна едва подрагивать — 85–95 °C.",
        ],
      },
      {
        heading: "Тушение: пошагово",
        paragraphs: [],
        list: [
          "Нарежьте мясо крупными кусками 4–5 см: мелкие пересохнут. Обсушите бумажным полотенцем и посолите — 1 ч. л. на 1 кг.",
          "Обжарьте в толстостенной кастрюле или казане на сильном огне небольшими порциями, чтобы куски не касались друг друга, до тёмно-коричневой корочки. Это даёт 80% вкуса блюда.",
          "Выньте мясо, в том же жире обжарьте лук, морковь, чеснок, 1 ст. л. томатной пасты.",
          "Деглазируйте: влейте 100–150 мл вина, бульона или воды и соскребите лопаткой всё прилипшее ко дну — это концентрат вкуса.",
          "Верните мясо, долейте жидкость так, чтобы она доходила до половины или двух третей высоты мяса, но не покрывала его полностью.",
          "Накройте крышкой и тушите на самом слабом огне или в духовке при 150–160 °C.",
        ],
        tip: "Духовка лучше плиты: она греет кастрюлю равномерно со всех сторон, ничего не пригорает, и не нужно следить за огнём.",
      },
      {
        heading: "Сколько тушить",
        paragraphs: [
          "Время — ориентир: проверяйте вилкой. Готовое мясо легко протыкается и начинает распадаться на волокна при нажатии. Если сопротивляется — тушите ещё 20–30 минут.",
        ],
        list: [
          "Говядина (лопатка, грудинка): 2,5–3 часа.",
          "Говяжьи щёки, голяшка: 3–4 часа.",
          "Свиная шея, лопатка: 1,5–2 часа.",
          "Свиные рёбра: 1,5–2 часа.",
          "Баранья лопатка: 2–2,5 часа.",
          "Куриные бёдра и голени: 40–60 минут.",
        ],
        tip: "Тушёное мясо на следующий день вкуснее: вкусы соединяются, а застывший сверху жир легко снять ложкой. Разогревайте медленно под крышкой.",
      },
      {
        heading: "Запекание: сначала соль",
        paragraphs: [
          "Сухой посол — лучший способ сделать запечённое мясо сочным. Посолите мясо за 12–24 часа до готовки: 1% соли от веса (10 г на 1 кг) и оставьте в холодильнике на решётке без плёнки. Сначала соль вытянет сок, потом он растворит соль и впитается обратно, а белки станут удерживать больше влаги. Сухая поверхность к тому же лучше зарумянится.",
          "Если времени нет — солите непосредственно перед духовкой. Хуже всего — за 10–40 минут: соль успевает вытянуть влагу на поверхность, но не успевает вернуть её обратно.",
          "Достаньте мясо из холодильника за 30–60 минут до запекания (крупный кусок — за 1–2 часа), чтобы оно прогревалось равномерно.",
        ],
      },
      {
        heading: "Термометр: единственный точный способ",
        paragraphs: [
          "Время в рецептах — лишь ориентир: кусок разной толщины и духовки по-разному греют. Кухонный термометр со щупом стоит как один хороший кусок мяса и навсегда решает проблему сухого или сырого мяса. Вводите щуп в самое толстое место, не касаясь кости.",
        ],
        list: [
          "Говядина: с кровью — 50–52 °C, medium rare — 54–57 °C, medium — 60–63 °C, well done — 68–70 °C.",
          "Свинина: 63 °C — сочная и безопасная (с отдыхом 3 минуты), до 70 °C — более плотная.",
          "Курица: грудка — 70–74 °C, бёдра — 80–85 °C (тёмному мясу нужна более высокая температура, чтобы стать нежным).",
          "Фарш (котлеты, рулеты): не ниже 71 °C.",
          "Баранина: 57–63 °C — розовая, 70 °C — готовая.",
        ],
        tip: "Снимайте мясо на 3–5 °C раньше целевой температуры: во время отдыха она продолжит подниматься. Для крупных кусков — даже на 5–7 °C.",
      },
      {
        heading: "Высокая и низкая температура",
        paragraphs: [
          "Классический способ — высокая температура (200–220 °C). Корочка образуется быстро, но край куска перегревается сильнее, чем середина, и вокруг розового центра появляется серое кольцо пересушенного мяса.",
          "Обратный способ («reverse sear») даёт более равномерный результат. Запекайте мясо при 110–130 °C до температуры на 5–7 °C ниже целевой, затем обжарьте его 1–2 минуты с каждой стороны на раскалённой сковороде или выставьте в духовку на 250 °C на 8–10 минут для корочки. Мясо будет одинаково розовым от края до края.",
          "Целую курицу запекайте при 200 °C около 40–45 минут на каждый килограмм. Для хрустящей кожи обсушите её и оставьте в холодильнике без плёнки на ночь.",
        ],
      },
      {
        heading: "Отдых: не режьте сразу",
        paragraphs: [
          "Когда мясо только из духовки, соки внутри под давлением и сконцентрированы в центре. Если сразу разрезать, они вытекут на доску, а мясо окажется сухим. За время отдыха температура выравнивается, волокна расслабляются, а соки распределяются по куску.",
          "Стейк или куриная грудка отдыхают 5 минут, запечённый кусок 1–2 кг — 10–15 минут, целая курица или индейка — 15–20 минут. Накройте мясо фольгой свободно, не плотно: иначе пар размочит корочку.",
        ],
      },
      {
        heading: "Нарезка: поперёк волокон",
        paragraphs: [
          "Посмотрите на мясо: вы увидите параллельные линии — это мышечные волокна. Режьте перпендикулярно им. Тогда каждый ломтик содержит короткие кусочки волокон, и мясо легко жуётся. Если резать вдоль, волокна будут длинными, и даже идеально приготовленное мясо покажется жёстким.",
          "Чем жёстче кусок, тем тоньше режьте: грудинку и фланк — ломтиками 3–5 мм, ростбиф — 5–10 мм. Используйте длинный острый нож и режьте одним движением, не пилите.",
        ],
        tip: "Сок, который всё-таки вытек на доску, не выливайте — полейте им нарезанное мясо или добавьте в соус.",
      },
    ],
    en: [
      {
        heading: "Two kinds of meat — two methods",
        paragraphs: [
          "Meat is either tender or tough, and that decides how to cook it. Tender cuts (fillet, loin, chicken breast, sirloin) come from muscles that did little work: they have little connective tissue. They're cooked quickly to the right temperature — fried or roasted hot. Braise them for hours and they dry out.",
          "Tough cuts (shoulder, neck, shin, brisket, beef cheeks, chicken thighs) are hard-working muscles full of collagen. Cooked quickly, they're rubbery. But with long heating in liquid, collagen turns into gelatine — the meat becomes soft, juicy and falls into shreds on its own.",
        ],
        list: [
          "Braise: beef chuck, brisket, shin, cheeks; pork neck and shoulder, ribs; lamb shoulder; chicken thighs and drumsticks.",
          "Roast or fry: fillet, sirloin, rib-eye, rib roast, pork loin, chicken breast, whole chicken.",
        ],
      },
      {
        heading: "What happens during braising",
        paragraphs: [
          "Collagen starts to break down from around 70 °C, but slowly — it takes hours. Meanwhile the muscle fibres contract and lose juice. So in the first hour the meat gets tougher than it was, and many people decide it \"won't braise\" and give up. Keep going: after 2 hours the collagen becomes gelatine, which soaks back into the fibres, and the meat softens.",
          "The main rule is a gentle heat. A rolling boil (100 °C) squeezes juice out of the fibres faster than the collagen dissolves, and the meat ends up dry and stringy even while swimming in sauce. The liquid should barely tremble — 85–95 °C.",
        ],
      },
      {
        heading: "Braising: step by step",
        paragraphs: [],
        list: [
          "Cut the meat into large 4–5 cm pieces: small ones dry out. Pat dry with kitchen paper and salt — 1 tsp per 1 kg.",
          "Brown in a heavy casserole over high heat in small batches, so the pieces don't touch, to a deep brown crust. That gives 80% of the dish's flavour.",
          "Remove the meat and, in the same fat, cook onion, carrot, garlic and 1 tbsp tomato paste.",
          "Deglaze: pour in 100–150 ml wine, stock or water and scrape up everything stuck to the bottom — it's concentrated flavour.",
          "Return the meat and add liquid to half or two-thirds of the way up the meat, but don't cover it completely.",
          "Cover with a lid and braise on the lowest heat or in the oven at 150–160 °C.",
        ],
        tip: "The oven beats the hob: it heats the pot evenly from all sides, nothing catches, and there's no flame to watch.",
      },
      {
        heading: "How long to braise",
        paragraphs: [
          "Times are a guide: check with a fork. Done meat is easily pierced and starts to separate into fibres when pressed. If it resists, give it another 20–30 minutes.",
        ],
        list: [
          "Beef (chuck, brisket): 2.5–3 hours.",
          "Beef cheeks, shin: 3–4 hours.",
          "Pork neck, shoulder: 1.5–2 hours.",
          "Pork ribs: 1.5–2 hours.",
          "Lamb shoulder: 2–2.5 hours.",
          "Chicken thighs and drumsticks: 40–60 minutes.",
        ],
        tip: "Braised meat tastes better the next day: the flavours marry, and the fat that sets on top lifts off with a spoon. Reheat slowly, covered.",
      },
      {
        heading: "Roasting: salt first",
        paragraphs: [
          "Dry brining is the best way to make roast meat juicy. Salt the meat 12–24 hours ahead: 1% of its weight (10 g per 1 kg), and leave it on a rack in the fridge uncovered. First the salt draws out juice, then the juice dissolves the salt and is reabsorbed, and the proteins hold more moisture. A dry surface also browns better.",
          "No time? Salt just before it goes in the oven. The worst is 10–40 minutes ahead: the salt has drawn moisture to the surface but hasn't had time to pull it back in.",
          "Take the meat out of the fridge 30–60 minutes before roasting (1–2 hours for a large joint) so it cooks evenly.",
        ],
      },
      {
        heading: "A thermometer: the only precise way",
        paragraphs: [
          "Recipe times are just a guide: joints vary in thickness and ovens heat differently. A probe thermometer costs about as much as one good piece of meat and ends dry or raw meat for good. Insert the probe into the thickest part, away from the bone.",
        ],
        list: [
          "Beef: rare 50–52 °C, medium rare 54–57 °C, medium 60–63 °C, well done 68–70 °C.",
          "Pork: 63 °C is juicy and safe (with a 3-minute rest); up to 70 °C is firmer.",
          "Chicken: breast 70–74 °C, thighs 80–85 °C (dark meat needs more heat to turn tender).",
          "Mince (burgers, meatloaf): at least 71 °C.",
          "Lamb: 57–63 °C pink, 70 °C well done.",
        ],
        tip: "Take the meat out 3–5 °C before the target temperature: it keeps rising while it rests. For large joints, even 5–7 °C early.",
      },
      {
        heading: "High and low temperature",
        paragraphs: [
          "The classic method is high heat (200–220 °C). The crust forms fast, but the outside overheats more than the middle, leaving a grey band of overcooked meat around the pink centre.",
          "The reverse sear gives a more even result. Roast at 110–130 °C until 5–7 °C below the target temperature, then sear 1–2 minutes per side in a very hot pan or blast in a 250 °C oven for 8–10 minutes for the crust. The meat will be evenly pink edge to edge.",
          "Roast a whole chicken at 200 °C for about 40–45 minutes per kilo. For crisp skin, dry it and leave it uncovered in the fridge overnight.",
        ],
      },
      {
        heading: "Resting: don't cut straight away",
        paragraphs: [
          "Fresh from the oven, the juices inside are under pressure and concentrated in the centre. Cut immediately and they run out onto the board, leaving the meat dry. While it rests, the temperature evens out, the fibres relax and the juices spread through the joint.",
          "A steak or chicken breast rests 5 minutes, a 1–2 kg roast 10–15 minutes, a whole chicken or turkey 15–20 minutes. Tent loosely with foil, not tightly, or the steam will soften the crust.",
        ],
      },
      {
        heading: "Slicing: against the grain",
        paragraphs: [
          "Look at the meat: you'll see parallel lines — the muscle fibres. Cut across them. Each slice then contains short lengths of fibre and chews easily. Cut along them and the fibres stay long, and even perfectly cooked meat will seem tough.",
          "The tougher the cut, the thinner you slice: brisket and flank 3–5 mm, roast beef 5–10 mm. Use a long sharp knife and cut in one stroke, don't saw.",
        ],
        tip: "Don't pour away the juice that does run onto the board — spoon it over the sliced meat or add it to the sauce.",
      },
    ],
    ua: [
      {
        heading: "Два види м'яса — два способи",
        paragraphs: [
          "М'ясо буває ніжним і жорстким, і це визначає, як його готувати. Ніжні шматки (вирізка, корейка, філе грудки, ростбіф) — це м'язи, які мало працювали: у них мало сполучної тканини. Їх готують швидко й до потрібної температури — смажать, запікають за високої температури. Якщо їх довго тушкувати, вони стануть сухими.",
          "Жорсткі шматки (лопатка, шия, гомілка, грудинка, яловичі щічки, курячі стегна) — це активні м'язи з великою кількістю колагену. Швидко приготовані, вони жорсткі, як гума. Але за довгого нагрівання в рідині колаген перетворюється на желатин — м'ясо стає м'яким, соковитим і саме розпадається на волокна.",
        ],
        list: [
          "Тушкувати: яловича лопатка, грудинка, гомілка, щічки; свиняча шия й лопатка, реберця; бараняча лопатка; курячі стегна й гомілки.",
          "Запікати або смажити: вирізка, товстий і тонкий край, ростбіф, свиняча корейка, куряча грудка, ціла курка.",
        ],
      },
      {
        heading: "Що відбувається під час тушкування",
        paragraphs: [
          "Колаген починає розпадатися приблизно від 70 °C, але повільно, — на це потрібні години. Водночас м'язові волокна стискаються й утрачають сік. Тому в першу годину тушкування м'ясо стає жорсткішим, ніж було, і багато хто вирішує, що воно «не тушкується», і здається. Треба продовжувати: після 2 годин колаген переходить у желатин, який вбирається назад у волокна, і м'ясо м'якне.",
          "Головне правило — тихий вогонь. Бурхливе кипіння (100 °C) вичавлює з волокон сік швидше, ніж колаген устигає розчинитися, і м'ясо виходить сухим і волокнистим, навіть плаваючи в соусі. Рідина має ледь тремтіти — 85–95 °C.",
        ],
      },
      {
        heading: "Тушкування: покроково",
        paragraphs: [],
        list: [
          "Наріжте м'ясо великими шматками 4–5 см: дрібні пересохнуть. Обсушіть паперовим рушником і посоліть — 1 ч. л. на 1 кг.",
          "Обсмажте в товстостінній каструлі або казані на сильному вогні невеликими порціями, щоб шматки не торкалися один одного, до темно-коричневої скоринки. Це дає 80% смаку страви.",
          "Вийміть м'ясо, у тому самому жирі обсмажте цибулю, моркву, часник, 1 ст. л. томатної пасти.",
          "Деглазуйте: влийте 100–150 мл вина, бульйону або води й зішкребіть лопаткою все, що прилипло до дна, — це концентрат смаку.",
          "Поверніть м'ясо, долийте рідину так, щоб вона сягала половини або двох третин висоти м'яса, але не вкривала його повністю.",
          "Накрийте кришкою й тушкуйте на найслабшому вогні або в духовці за 150–160 °C.",
        ],
        tip: "Духовка краща за плиту: вона гріє каструлю рівномірно з усіх боків, нічого не пригорає, і не треба стежити за вогнем.",
      },
      {
        heading: "Скільки тушкувати",
        paragraphs: [
          "Час — орієнтир: перевіряйте виделкою. Готове м'ясо легко проколюється й починає розпадатися на волокна від натискання. Якщо опирається — тушкуйте ще 20–30 хвилин.",
        ],
        list: [
          "Яловичина (лопатка, грудинка): 2,5–3 години.",
          "Яловичі щічки, гомілка: 3–4 години.",
          "Свиняча шия, лопатка: 1,5–2 години.",
          "Свинячі реберця: 1,5–2 години.",
          "Бараняча лопатка: 2–2,5 години.",
          "Курячі стегна й гомілки: 40–60 хвилин.",
        ],
        tip: "Тушковане м'ясо наступного дня смачніше: смаки поєднуються, а застиглий зверху жир легко зняти ложкою. Розігрівайте повільно під кришкою.",
      },
      {
        heading: "Запікання: спершу сіль",
        paragraphs: [
          "Сухе соління — найкращий спосіб зробити запечене м'ясо соковитим. Посоліть м'ясо за 12–24 години до готування: 1% солі від ваги (10 г на 1 кг) і залиште в холодильнику на решітці без плівки. Спершу сіль витягне сік, потім він розчинить сіль і вбереться назад, а білки утримуватимуть більше вологи. Суха поверхня до того ж краще зарум'яниться.",
          "Якщо часу немає — соліть безпосередньо перед духовкою. Найгірше — за 10–40 хвилин: сіль устигає витягти вологу на поверхню, але не встигає повернути її назад.",
          "Дістаньте м'ясо з холодильника за 30–60 хвилин до запікання (великий шматок — за 1–2 години), щоб воно прогрівалося рівномірно.",
        ],
      },
      {
        heading: "Термометр: єдиний точний спосіб",
        paragraphs: [
          "Час у рецептах — лише орієнтир: шматки різної товщини, а духовки по-різному гріють. Кухонний термометр зі щупом коштує як один добрий шматок м'яса й назавжди розв'язує проблему сухого чи сирого м'яса. Вводьте щуп у найтовще місце, не торкаючись кістки.",
        ],
        list: [
          "Яловичина: із кров'ю — 50–52 °C, medium rare — 54–57 °C, medium — 60–63 °C, well done — 68–70 °C.",
          "Свинина: 63 °C — соковита й безпечна (з відпочинком 3 хвилини), до 70 °C — щільніша.",
          "Курка: грудка — 70–74 °C, стегна — 80–85 °C (темному м'ясу потрібна вища температура, щоб стати ніжним).",
          "Фарш (котлети, рулети): не нижче 71 °C.",
          "Баранина: 57–63 °C — рожева, 70 °C — готова.",
        ],
        tip: "Знімайте м'ясо на 3–5 °C раніше за цільову температуру: під час відпочинку вона й далі підніматиметься. Для великих шматків — навіть на 5–7 °C.",
      },
      {
        heading: "Висока й низька температура",
        paragraphs: [
          "Класичний спосіб — висока температура (200–220 °C). Скоринка утворюється швидко, але край шматка перегрівається сильніше, ніж середина, і навколо рожевого центру з'являється сіре кільце пересушеного м'яса.",
          "Зворотний спосіб («reverse sear») дає рівномірніший результат. Запікайте м'ясо за 110–130 °C до температури на 5–7 °C нижче за цільову, потім обсмажте його 1–2 хвилини з кожного боку на розпеченій сковороді або виставте в духовку на 250 °C на 8–10 хвилин для скоринки. М'ясо буде однаково рожевим від краю до краю.",
          "Цілу курку запікайте за 200 °C близько 40–45 хвилин на кожен кілограм. Для хрусткої шкірки обсушіть її й залиште в холодильнику без плівки на ніч.",
        ],
      },
      {
        heading: "Відпочинок: не ріжте одразу",
        paragraphs: [
          "Коли м'ясо щойно з духовки, соки всередині під тиском і зосереджені в центрі. Якщо одразу розрізати, вони витечуть на дошку, а м'ясо виявиться сухим. За час відпочинку температура вирівнюється, волокна розслабляються, а соки розподіляються по шматку.",
          "Стейк або куряча грудка відпочивають 5 хвилин, запечений шматок 1–2 кг — 10–15 хвилин, ціла курка чи індичка — 15–20 хвилин. Накрийте м'ясо фольгою вільно, не щільно: інакше пара розмочить скоринку.",
        ],
      },
      {
        heading: "Нарізання: впоперек волокон",
        paragraphs: [
          "Погляньте на м'ясо: ви побачите паралельні лінії — це м'язові волокна. Ріжте перпендикулярно до них. Тоді кожна скибочка містить короткі шматочки волокон, і м'ясо легко жується. Якщо різати вздовж, волокна будуть довгими, і навіть ідеально приготоване м'ясо здаватиметься жорстким.",
          "Що жорсткіший шматок, то тонше ріжте: грудинку й фланк — скибочками 3–5 мм, ростбіф — 5–10 мм. Використовуйте довгий гострий ніж і ріжте одним рухом, не пиляйте.",
        ],
        tip: "Сік, який усе-таки витік на дошку, не виливайте — полийте ним нарізане м'ясо або додайте в соус.",
      },
    ],
  },
  faq: {
    ru: [
      { q: "Почему тушёное мясо жёсткое, хотя тушилось 2 часа?", a: "Либо кипело слишком сильно, либо ему нужно ещё время. Уменьшите огонь до едва заметного кипения и продолжайте тушить, проверяя каждые 20–30 минут." },
      { q: "Нужно ли обжаривать мясо перед тушением?", a: "Для вкуса — да: корочка даёт глубокий, «жареный» вкус и цвет соусу. Для мягкости — не обязательно. Если торопитесь, можно пропустить, но блюдо будет проще." },
      { q: "Можно ли тушить в мультиварке?", a: "Да, режим «Тушение» или «Томление» даёт нужную мягкую температуру. Жидкости наливайте меньше — в мультиварке она почти не испаряется." },
      { q: "Как запечь курицу, чтобы грудка не была сухой?", a: "Ориентируйтесь на температуру в грудке — 70–72 °C, а потом дайте курице отдохнуть. Можно также запекать грудкой вниз первые 30 минут, а потом перевернуть." },
      { q: "Сколько хранится тушёное мясо?", a: "3–4 дня в холодильнике в закрытой посуде, до 3 месяцев в морозилке — вместе с соусом, чтобы мясо не пересохло." },
    ],
    en: [
      { q: "Why is my braise tough after 2 hours?", a: "Either it boiled too hard or it needs more time. Turn the heat down to a bare simmer and keep going, checking every 20–30 minutes." },
      { q: "Do I need to brown meat before braising?", a: "For flavour, yes: the crust gives a deep, roasted taste and colours the sauce. For tenderness, no. In a hurry you can skip it, but the dish will be plainer." },
      { q: "Can I braise in a slow cooker?", a: "Yes — the stew or slow setting gives the gentle heat you need. Use less liquid, since it barely evaporates in a slow cooker." },
      { q: "How do I roast chicken without a dry breast?", a: "Go by the breast temperature — 70–72 °C — then rest the bird. You can also roast it breast-side down for the first 30 minutes, then turn it over." },
      { q: "How long does braised meat keep?", a: "3–4 days in the fridge covered, up to 3 months frozen — with its sauce so it doesn't dry out." },
    ],
    ua: [
      { q: "Чому тушковане м'ясо жорстке, хоча тушкувалося 2 години?", a: "Або кипіло надто сильно, або йому потрібен ще час. Зменште вогонь до ледь помітного кипіння й продовжуйте тушкувати, перевіряючи кожні 20–30 хвилин." },
      { q: "Чи треба обсмажувати м'ясо перед тушкуванням?", a: "Для смаку — так: скоринка дає глибокий, «смажений» смак і колір соусу. Для м'якості — не обов'язково. Якщо поспішаєте, можна пропустити, але страва буде простішою." },
      { q: "Чи можна тушкувати в мультиварці?", a: "Так, режим «Тушкування» або «Томління» дає потрібну м'яку температуру. Рідини наливайте менше — у мультиварці вона майже не випаровується." },
      { q: "Як запекти курку, щоб грудка не була сухою?", a: "Орієнтуйтеся на температуру в грудці — 70–72 °C, а потім дайте курці відпочити. Можна також запікати грудкою донизу перші 30 хвилин, а потім перевернути." },
      { q: "Скільки зберігається тушковане м'ясо?", a: "3–4 дні в холодильнику в закритому посуді, до 3 місяців у морозилці — разом із соусом, щоб м'ясо не пересохло." },
    ],
  },
};
