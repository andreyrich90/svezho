import type { Guide } from "./types";

export const guide: Guide = {
  slug: "vypechka-bez-yaic-i-glyutena",
  emoji: "🌾",
  updated: "2026-09-26",
  title: {
    ru: "Выпечка без яиц, глютена и молока: чем заменить и как не испортить",
    en: "Baking without eggs, gluten or dairy: what to swap and how not to ruin it",
    ua: "Випічка без яєць, глютену й молока: чим замінити й як не зіпсувати",
  },
  summary: {
    ru: "Льняное «яйцо», аквафаба, банан и йогурт — что и когда заменяет яйцо. Какие виды муки не содержат глютена, как собрать свою смесь и сколько нужно ксантана или псиллиума. Растительное молоко и масло вместо сливочного — с точными пропорциями замен.",
    en: "Flax eggs, aquafaba, banana and yoghurt — what replaces an egg and when. Which flours are gluten-free, how to blend your own mix and how much xanthan or psyllium you need. Plant milk and oil instead of butter — with exact swap ratios.",
    ua: "Лляне «яйце», аквафаба, банан і йогурт — що й коли замінює яйце. Які види борошна не містять глютену, як скласти свою суміш і скільки потрібно ксантану чи псиліуму. Рослинне молоко й олія замість вершкового масла — з точними пропорціями замін.",
  },
  relatedRecipes: ["bananovyy-hleb", "ovsyanoe-pechenye", "domashnyaya-granola", "chizkeyk-bez-vypechki"],
  sections: {
    ru: [
      {
        heading: "Что делает яйцо в выпечке",
        paragraphs: [
          "Прежде чем заменять яйцо, нужно понять, какую работу оно выполняло. У яйца их сразу несколько: оно связывает тесто, поднимает его (взбитые яйца держат воздух), даёт влагу и жир, а при выпечке — золотистый цвет.",
          "Поэтому универсальной замены нет. В печенье и оладьях яйцо — в основном связка, и его легко заменить. В бисквите и безе яйца — это сама структура и подъём, и без них нужен совсем другой подход.",
        ],
        tip: "Замены работают надёжно, если в рецепте не больше 2–3 яиц. Если яиц 4 и больше (бисквит, заварной крем, суфле) — лучше искать отдельный рецепт, изначально созданный без яиц.",
      },
      {
        heading: "Замены одного яйца",
        paragraphs: [],
        list: [
          "Льняное «яйцо»: 1 ст. л. молотых семян льна + 3 ст. л. воды, оставить на 10 минут до желеобразного состояния. Лучшая связка для печенья, маффинов, оладий, котлет. Даёт лёгкий ореховый вкус. Семена чиа работают так же.",
          "Банан: ½ спелого банана (около 60 г), размятого в пюре. Даёт влагу и сладость, подходит для кексов, панкейков, брауни. Выпечка будет пахнуть бананом.",
          "Яблочное пюре: 60 г несладкого пюре. Влага и связка без привкуса. Хорошо для кексов и маффинов. Выпечка получается плотнее — добавьте ½ ч. л. разрыхлителя.",
          "Йогурт или кефир: 60 г. Влага и нежность для кексов и оладий.",
          "Аквафаба: 3 ст. л. жидкости из банки нута заменяют целое яйцо, 2 ст. л. — белок.",
          "Для подъёма: 1 ч. л. яблочного уксуса + ½ ч. л. соды добавьте к любой из замен, если яйцо в рецепте работало на подъём.",
        ],
      },
      {
        heading: "Аквафаба: безе без яиц",
        paragraphs: [
          "Аквафаба — жидкость, в которой варился нут. Благодаря белкам и крахмалам она взбивается в устойчивую пену почти как яичный белок. Из неё можно сделать безе, мусс, макаруны и майонез.",
          "Для безе: 100 мл аквафабы (из банки 400 г) взбейте миксером 3–5 минут до мягких пиков, добавьте ¼ ч. л. лимонной кислоты или 1 ч. л. лимонного сока — пена станет устойчивее. Затем по ложке 100 г сахарной пудры, взбивая ещё 5–7 минут до плотных глянцевых пиков. Сушите при 90–100 °C 1,5–2 часа.",
        ],
        tip: "Если аквафаба жидкая и плохо взбивается — уварите её на огне на треть и остудите. Чем гуще жидкость, тем стабильнее пена.",
      },
      {
        heading: "Глютен: где он есть и где нет",
        paragraphs: [
          "Глютен — белок пшеницы, ржи и ячменя. Именно он делает тесто эластичным, держит газ и форму хлеба. Без него тесто рассыпчатое, липкое и не поднимается, поэтому безглютеновой выпечке нужна замена-связка.",
          "Не содержат глютена: рисовая, гречневая, кукурузная, миндальная, кокосовая, нутовая, амарантовая мука, киноа, сорго, крахмалы (картофельный, кукурузный, тапиоковый). Овёс сам по себе без глютена, но почти всегда загрязнён пшеницей при переработке — людям с целиакией можно только овсяные хлопья с маркировкой «без глютена».",
        ],
        tip: "При целиакии важна и перекрёстная контаминация: отдельная доска, сито, формы, чистая поверхность. Даже горсть обычной муки в воздухе может навредить.",
      },
      {
        heading: "Безглютеновая смесь муки своими руками",
        paragraphs: [
          "Одна безглютеновая мука редко даёт хороший результат: рисовая — песочная и сухая, гречневая — тяжёлая и тёмная, крахмал — клейкий. Лучше смешать несколько.",
        ],
        list: [
          "Базовая формула: 40% рисовой муки + 30% цельнозерновой (гречневой, сорго, овсяной без глютена) + 30% крахмала (картофельного или тапиокового).",
          "Например, на 500 г смеси: 200 г рисовой, 150 г гречневой, 150 г картофельного крахмала.",
          "Связка на каждые 150 г смеси: для печенья и кексов — ½ ч. л. ксантановой камеди; для хлеба и пиццы — 1 ч. л. ксантана или 10–15 г шелухи псиллиума на 500 г муки.",
        ],
        tip: "Псиллиум (шелуха подорожника) — лучшая связка для безглютенового хлеба. Он образует гель, похожий на клейковину, и тесто можно даже формовать руками. Смешайте его с водой за 5 минут до замеса.",
      },
      {
        heading: "Миндальная и кокосовая мука",
        paragraphs: [
          "Миндальная мука жирная и влажная, выпечка с ней нежная и сочная, но она быстро темнеет. Снизьте температуру на 10–20 °C и следите за цветом. Её нельзя заменять 1:1 на пшеничную в рецептах с дрожжами: не будет структуры.",
          "Кокосовая мука — самая капризная: она впитывает в 3–4 раза больше жидкости, чем пшеничная. Если заменяете, берите только ¼ от количества пшеничной муки и добавьте по 1 яйцу на каждые 30 г кокосовой муки. Лучше всего использовать проверенные рецепты, созданные именно под кокосовую муку.",
        ],
      },
      {
        heading: "Правила безглютеновой выпечки",
        paragraphs: [
          "Безглютеновое тесто ведёт себя иначе, и привычные ориентиры не работают.",
        ],
        list: [
          "Жидкости нужно больше: тесто для хлеба и кексов должно быть мягче и более липким, чем обычное.",
          "Дайте тесту постоять 20–30 минут: мука без глютена впитывает влагу дольше, и выпечка будет менее песочной.",
          "Выпекайте дольше при чуть меньшей температуре: безглютеновая выпечка снаружи готова раньше, чем внутри. Ориентир для хлеба — 96–98 °C внутри.",
          "Полностью остужайте перед нарезкой: горячий безглютеновый мякиш липкий и сырой на ощупь, он «доходит» при остывании.",
          "Хранение: безглютеновая выпечка черствеет быстрее. Режьте и замораживайте порциями, разогревайте в тостере.",
        ],
      },
      {
        heading: "Без молока и сливочного масла",
        paragraphs: [
          "Молоко заменяется любым растительным молоком 1:1. Для выпечки лучше несладкое соевое или овсяное: в них больше белка и крахмала, и тесто ведёт себя ближе к молочному. Для «пахты» добавьте 1 ст. л. лимонного сока или уксуса на 250 мл растительного молока и оставьте на 5 минут.",
          "Сливочное масло заменяют:",
        ],
        list: [
          "растительным маслом — 80 г вместо 100 г сливочного (в масле нет воды). Подходит для маффинов, кексов, брауни, где масло растапливают;",
          "твёрдым кокосовым маслом — 1:1, если масло в рецепте холодное или его взбивают (песочное тесто, крем, печенье);",
          "растительным маргарином для выпечки — 1:1 практически везде;",
          "пюре авокадо — 1:1 в шоколадной выпечке, где его вкус незаметен.",
        ],
      },
      {
        heading: "Без сахара и что с ним делать",
        paragraphs: [
          "Сахар в выпечке — это не только сладость: он удерживает влагу, делает мякиш нежным, помогает подняться и даёт румяную корочку. Если его просто убрать, выпечка станет сухой, плотной и бледной.",
          "Мёд и сиропы (кленовый, агавы, финиковый) слаще сахара и жидкие: берите ¾ от количества сахара и уменьшите жидкость в рецепте на 3–4 ст. л. на 200 г сахара. Выпечка с мёдом темнеет быстрее — снизьте температуру на 10–15 °C.",
          "Банан, финики, яблочное пюре дают естественную сладость и влагу. Сахарозаменители (эритрит, стевия) работают по-разному — ориентируйтесь на указания производителя.",
        ],
      },
    ],
    en: [
      {
        heading: "What an egg does in baking",
        paragraphs: [
          "Before you swap an egg, work out what job it was doing. An egg does several at once: it binds the batter, raises it (beaten eggs hold air), adds moisture and fat, and gives a golden colour when baked.",
          "That's why there's no universal substitute. In biscuits and pancakes the egg is mainly a binder and easy to replace. In a sponge or meringue the eggs are the structure and the lift, and you need a completely different approach.",
        ],
        tip: "Swaps work reliably when a recipe has no more than 2–3 eggs. With 4 or more (sponge, custard, soufflé), look for a recipe designed egg-free from the start.",
      },
      {
        heading: "Substitutes for one egg",
        paragraphs: [],
        list: [
          "Flax egg: 1 tbsp ground flaxseed + 3 tbsp water, left 10 minutes until gel-like. The best binder for biscuits, muffins, pancakes and patties. Adds a light nutty flavour. Chia seeds work the same way.",
          "Banana: ½ ripe banana (about 60 g), mashed. Adds moisture and sweetness; good for loaf cakes, pancakes, brownies. The bake will taste of banana.",
          "Apple purée: 60 g unsweetened purée. Moisture and binding with no aftertaste. Good for cakes and muffins. The crumb is denser — add ½ tsp baking powder.",
          "Yoghurt or kefir: 60 g. Moisture and tenderness for cakes and pancakes.",
          "Aquafaba: 3 tbsp chickpea can liquid replaces a whole egg, 2 tbsp an egg white.",
          "For lift: add 1 tsp cider vinegar + ½ tsp baking soda to any of these if the egg's job was raising.",
        ],
      },
      {
        heading: "Aquafaba: meringue without eggs",
        paragraphs: [
          "Aquafaba is the liquid chickpeas were cooked in. Thanks to its proteins and starches, it whips into a stable foam almost like egg white. You can make meringue, mousse, macarons and mayonnaise with it.",
          "For meringue: whip 100 ml aquafaba (from a 400 g can) for 3–5 minutes to soft peaks, add ¼ tsp citric acid or 1 tsp lemon juice to stabilise the foam. Then add 100 g icing sugar a spoonful at a time, whipping another 5–7 minutes to firm, glossy peaks. Dry at 90–100 °C for 1.5–2 hours.",
        ],
        tip: "If the aquafaba is thin and won't whip, reduce it by a third on the hob and cool it. The thicker the liquid, the more stable the foam.",
      },
      {
        heading: "Gluten: where it is and isn't",
        paragraphs: [
          "Gluten is a protein in wheat, rye and barley. It's what makes dough elastic and lets bread hold gas and shape. Without it dough is crumbly, sticky and won't rise, so gluten-free baking needs a substitute binder.",
          "Gluten-free: rice, buckwheat, corn, almond, coconut, chickpea and amaranth flours, quinoa, sorghum, and starches (potato, corn, tapioca). Oats themselves have no gluten but are almost always contaminated with wheat during processing — people with coeliac disease should only use oats labelled gluten-free.",
        ],
        tip: "With coeliac disease, cross-contamination matters too: a separate board, sieve and tins, and a clean surface. Even a handful of ordinary flour in the air can cause harm.",
      },
      {
        heading: "Blending your own gluten-free flour",
        paragraphs: [
          "A single gluten-free flour rarely works well: rice is gritty and dry, buckwheat heavy and dark, starch gummy. It's better to blend several.",
        ],
        list: [
          "Base formula: 40% rice flour + 30% wholegrain flour (buckwheat, sorghum, gluten-free oat) + 30% starch (potato or tapioca).",
          "For example, for 500 g of mix: 200 g rice flour, 150 g buckwheat flour, 150 g potato starch.",
          "Binder per 150 g of mix: for biscuits and cakes, ½ tsp xanthan gum; for bread and pizza, 1 tsp xanthan or 10–15 g psyllium husk per 500 g flour.",
        ],
        tip: "Psyllium husk is the best binder for gluten-free bread. It forms a gel similar to gluten, and you can even shape the dough by hand. Mix it with the water 5 minutes before making the dough.",
      },
      {
        heading: "Almond and coconut flour",
        paragraphs: [
          "Almond flour is rich and moist; bakes made with it are tender and juicy but brown quickly. Lower the temperature by 10–20 °C and watch the colour. It can't replace wheat flour 1:1 in yeast recipes: there's no structure.",
          "Coconut flour is the most temperamental: it absorbs 3–4 times more liquid than wheat flour. If substituting, use only a quarter of the wheat flour amount and add 1 egg for every 30 g of coconut flour. Best to use tested recipes written specifically for it.",
        ],
      },
      {
        heading: "Rules for gluten-free baking",
        paragraphs: [
          "Gluten-free dough behaves differently, and the usual cues don't apply.",
        ],
        list: [
          "More liquid: bread and cake batters should be softer and stickier than usual.",
          "Rest the batter for 20–30 minutes: gluten-free flour absorbs moisture more slowly, and the bake will be less gritty.",
          "Bake longer at a slightly lower temperature: gluten-free bakes are done outside before inside. For bread aim for 96–98 °C in the centre.",
          "Cool completely before slicing: a hot gluten-free crumb is gummy and feels raw — it sets as it cools.",
          "Storage: gluten-free bakes stale faster. Slice and freeze in portions, reheat in the toaster.",
        ],
      },
      {
        heading: "Without milk and butter",
        paragraphs: [
          "Replace milk with any plant milk 1:1. For baking, unsweetened soy or oat milk is best: they have more protein and starch, so the batter behaves closer to dairy. For \"buttermilk\", add 1 tbsp lemon juice or vinegar to 250 ml plant milk and leave for 5 minutes.",
          "Butter can be replaced with:",
        ],
        list: [
          "vegetable oil — 80 g for every 100 g butter (oil has no water). Good for muffins, loaf cakes and brownies where the butter is melted;",
          "solid coconut oil — 1:1 where the butter is cold or creamed (shortcrust, frosting, biscuits);",
          "plant-based baking margarine — 1:1 almost anywhere;",
          "mashed avocado — 1:1 in chocolate bakes, where you won't taste it.",
        ],
      },
      {
        heading: "Without sugar, and what to do instead",
        paragraphs: [
          "Sugar in baking isn't just sweetness: it holds moisture, keeps the crumb tender, helps the rise and gives a golden crust. Simply leave it out and the bake turns dry, dense and pale.",
          "Honey and syrups (maple, agave, date) are sweeter than sugar and liquid: use three-quarters of the sugar amount and cut the recipe's liquid by 3–4 tbsp per 200 g of sugar. Honey bakes brown faster — lower the temperature by 10–15 °C.",
          "Banana, dates and apple purée add natural sweetness and moisture. Sweeteners (erythritol, stevia) all behave differently — follow the manufacturer's guidance.",
        ],
      },
    ],
    ua: [
      {
        heading: "Що робить яйце у випічці",
        paragraphs: [
          "Перш ніж замінювати яйце, треба зрозуміти, яку роботу воно виконувало. У яйця їх одразу кілька: воно зв'язує тісто, піднімає його (збиті яйця тримають повітря), дає вологу й жир, а під час випікання — золотистий колір.",
          "Тому універсальної заміни немає. У печиві й оладках яйце — здебільшого зв'язка, і його легко замінити. У бісквіті й безе яйця — це сама структура й підйом, і без них потрібен зовсім інший підхід.",
        ],
        tip: "Заміни працюють надійно, якщо в рецепті не більше 2–3 яєць. Якщо яєць 4 і більше (бісквіт, заварний крем, суфле) — краще шукати окремий рецепт, від початку створений без яєць.",
      },
      {
        heading: "Заміни одного яйця",
        paragraphs: [],
        list: [
          "Лляне «яйце»: 1 ст. л. меленого насіння льону + 3 ст. л. води, залишити на 10 хвилин до желеподібного стану. Найкраща зв'язка для печива, мафінів, оладок, котлет. Дає легкий горіховий смак. Насіння чіа працює так само.",
          "Банан: ½ стиглого банана (близько 60 г), розім'ятого в пюре. Дає вологу й солодкість, підходить для кексів, панкейків, брауні. Випічка пахнутиме бананом.",
          "Яблучне пюре: 60 г несолодкого пюре. Волога й зв'язка без присмаку. Добре для кексів і мафінів. Випічка виходить щільнішою — додайте ½ ч. л. розпушувача.",
          "Йогурт або кефір: 60 г. Волога й ніжність для кексів і оладок.",
          "Аквафаба: 3 ст. л. рідини з банки нуту замінюють ціле яйце, 2 ст. л. — білок.",
          "Для підйому: 1 ч. л. яблучного оцту + ½ ч. л. соди додайте до будь-якої із замін, якщо яйце в рецепті працювало на підйом.",
        ],
      },
      {
        heading: "Аквафаба: безе без яєць",
        paragraphs: [
          "Аквафаба — рідина, у якій варився нут. Завдяки білкам і крохмалям вона збивається в стійку піну майже як яєчний білок. З неї можна зробити безе, мус, макаруни й майонез.",
          "Для безе: 100 мл аквафаби (з банки 400 г) збийте міксером 3–5 хвилин до м'яких піків, додайте ¼ ч. л. лимонної кислоти або 1 ч. л. лимонного соку — піна стане стійкішою. Потім по ложці 100 г цукрової пудри, збиваючи ще 5–7 хвилин до щільних глянсових піків. Сушіть за 90–100 °C 1,5–2 години.",
        ],
        tip: "Якщо аквафаба рідка й погано збивається — уваріть її на вогні на третину й остудіть. Що густіша рідина, то стабільніша піна.",
      },
      {
        heading: "Глютен: де він є і де немає",
        paragraphs: [
          "Глютен — білок пшениці, жита й ячменю. Саме він робить тісто еластичним, тримає газ і форму хліба. Без нього тісто розсипчасте, липке й не піднімається, тому безглютеновій випічці потрібна заміна-зв'язка.",
          "Не містять глютену: рисове, гречане, кукурудзяне, мигдальне, кокосове, нутове, амарантове борошно, кіноа, сорго, крохмалі (картопляний, кукурудзяний, тапіоковий). Овес сам собою без глютену, але майже завжди забруднений пшеницею під час переробки — людям із целіакією можна лише вівсяні пластівці з маркуванням «без глютену».",
        ],
        tip: "За целіакії важливе й перехресне забруднення: окрема дошка, сито, форми, чиста поверхня. Навіть жменя звичайного борошна в повітрі може зашкодити.",
      },
      {
        heading: "Безглютенова суміш борошна власноруч",
        paragraphs: [
          "Одне безглютенове борошно рідко дає добрий результат: рисове — піщане й сухе, гречане — важке й темне, крохмаль — клейкий. Краще змішати кілька.",
        ],
        list: [
          "Базова формула: 40% рисового борошна + 30% цільнозернового (гречаного, сорго, вівсяного без глютену) + 30% крохмалю (картопляного або тапіокового).",
          "Наприклад, на 500 г суміші: 200 г рисового, 150 г гречаного, 150 г картопляного крохмалю.",
          "Зв'язка на кожні 150 г суміші: для печива й кексів — ½ ч. л. ксантанової камеді; для хліба й піци — 1 ч. л. ксантану або 10–15 г лушпиння псиліуму на 500 г борошна.",
        ],
        tip: "Псиліум (лушпиння подорожника) — найкраща зв'язка для безглютенового хліба. Він утворює гель, схожий на клейковину, і тісто можна навіть формувати руками. Змішайте його з водою за 5 хвилин до замісу.",
      },
      {
        heading: "Мигдальне й кокосове борошно",
        paragraphs: [
          "Мигдальне борошно жирне й вологе, випічка з ним ніжна й соковита, але вона швидко темніє. Знизьте температуру на 10–20 °C і стежте за кольором. Його не можна замінювати 1:1 на пшеничне в рецептах із дріжджами: не буде структури.",
          "Кокосове борошно — найпримхливіше: воно вбирає в 3–4 рази більше рідини, ніж пшеничне. Якщо замінюєте, беріть лише ¼ від кількості пшеничного борошна й додайте по 1 яйцю на кожні 30 г кокосового борошна. Найкраще користуватися перевіреними рецептами, створеними саме під кокосове борошно.",
        ],
      },
      {
        heading: "Правила безглютенової випічки",
        paragraphs: [
          "Безглютенове тісто поводиться інакше, і звичні орієнтири не працюють.",
        ],
        list: [
          "Рідини потрібно більше: тісто для хліба й кексів має бути м'якшим і липкішим, ніж звичайне.",
          "Дайте тісту постояти 20–30 хвилин: борошно без глютену вбирає вологу довше, і випічка буде менш піщаною.",
          "Випікайте довше за трохи нижчої температури: безглютенова випічка зовні готова раніше, ніж усередині. Орієнтир для хліба — 96–98 °C усередині.",
          "Повністю остуджуйте перед нарізанням: гаряча безглютенова м'якушка липка й сира на дотик, вона «доходить» під час охолодження.",
          "Зберігання: безглютенова випічка черствіє швидше. Ріжте й заморожуйте порціями, розігрівайте в тостері.",
        ],
      },
      {
        heading: "Без молока й вершкового масла",
        paragraphs: [
          "Молоко замінюють будь-яким рослинним молоком 1:1. Для випічки краще несолодке соєве або вівсяне: у них більше білка й крохмалю, і тісто поводиться ближче до молочного. Для «маслянки» додайте 1 ст. л. лимонного соку або оцту на 250 мл рослинного молока й залиште на 5 хвилин.",
          "Вершкове масло замінюють:",
        ],
        list: [
          "олією — 80 г замість 100 г вершкового (в олії немає води). Підходить для мафінів, кексів, брауні, де масло розтоплюють;",
          "твердою кокосовою олією — 1:1, якщо масло в рецепті холодне або його збивають (пісочне тісто, крем, печиво);",
          "рослинним маргарином для випічки — 1:1 практично скрізь;",
          "пюре авокадо — 1:1 у шоколадній випічці, де його смак непомітний.",
        ],
      },
      {
        heading: "Без цукру — і що з цим робити",
        paragraphs: [
          "Цукор у випічці — це не лише солодкість: він утримує вологу, робить м'якушку ніжною, допомагає піднятися й дає рум'яну скоринку. Якщо його просто прибрати, випічка стане сухою, щільною й блідою.",
          "Мед і сиропи (кленовий, агави, фініковий) солодші за цукор і рідкі: беріть ¾ від кількості цукру й зменште рідину в рецепті на 3–4 ст. л. на 200 г цукру. Випічка з медом темніє швидше — знизьте температуру на 10–15 °C.",
          "Банан, фініки, яблучне пюре дають природну солодкість і вологу. Цукрозамінники (еритрит, стевія) працюють по-різному — орієнтуйтеся на вказівки виробника.",
        ],
      },
    ],
  },
  faq: {
    ru: [
      { q: "Можно ли просто убрать яйца из рецепта?", a: "Только если их 1 и тесто и так густое (печенье, оладьи) — добавьте 3 ст. л. жидкости. В остальных случаях используйте замену, иначе выпечка развалится." },
      { q: "Гречка содержит глютен?", a: "Нет. Несмотря на название (buckwheat), гречка — не родственник пшеницы и глютена не содержит. Но проверяйте маркировку: гречневую муку могут молоть на одном оборудовании с пшеничной." },
      { q: "Где купить ксантан и псиллиум?", a: "В магазинах здорового питания, крупных супермаркетах в отделе безглютеновых продуктов и в интернет-магазинах. Хранятся годами — одной пачки хватит надолго." },
      { q: "Почему безглютеновое печенье рассыпается?", a: "Не хватает связки (ксантана или яйца) или печенье сняли с противня горячим. Дайте ему остыть 10 минут прямо на противне — оно окрепнет." },
      { q: "Чем заменить сливки для крема?", a: "Кокосовыми сливками (жирная часть из охлаждённой банки кокосового молока) — они отлично взбиваются. Или растительными сливками для взбивания." },
    ],
    en: [
      { q: "Can I just leave the eggs out?", a: "Only if there's one and the dough is already thick (biscuits, pancakes) — add 3 tbsp liquid. Otherwise use a substitute or the bake will fall apart." },
      { q: "Does buckwheat contain gluten?", a: "No. Despite the name, buckwheat isn't related to wheat and has no gluten. But check the label: buckwheat flour may be milled on the same equipment as wheat." },
      { q: "Where can I buy xanthan and psyllium?", a: "In health-food shops, large supermarkets' gluten-free section and online. They keep for years — one pack lasts a long time." },
      { q: "Why do my gluten-free biscuits crumble?", a: "Not enough binder (xanthan or egg), or they were moved off the tray while hot. Let them cool for 10 minutes on the tray — they firm up." },
      { q: "What replaces cream for frosting?", a: "Coconut cream (the thick part from a chilled can of coconut milk) — it whips beautifully. Or plant-based whipping cream." },
    ],
    ua: [
      { q: "Чи можна просто прибрати яйця з рецепта?", a: "Лише якщо яйце одне й тісто й так густе (печиво, оладки) — додайте 3 ст. л. рідини. В інших випадках використовуйте заміну, інакше випічка розвалиться." },
      { q: "Чи містить гречка глютен?", a: "Ні. Попри англійську назву (buckwheat), гречка — не родичка пшениці й глютену не містить. Але перевіряйте маркування: гречане борошно можуть молоти на тому самому обладнанні, що й пшеничне." },
      { q: "Де купити ксантан і псиліум?", a: "У магазинах здорового харчування, великих супермаркетах у відділі безглютенових продуктів та в інтернет-магазинах. Зберігаються роками — однієї пачки вистачить надовго." },
      { q: "Чому безглютенове печиво розсипається?", a: "Бракує зв'язки (ксантану або яйця) або печиво зняли з дека гарячим. Дайте йому охолонути 10 хвилин просто на деку — воно зміцніє." },
      { q: "Чим замінити вершки для крему?", a: "Кокосовими вершками (жирна частина з охолодженої банки кокосового молока) — вони чудово збиваються. Або рослинними вершками для збивання." },
    ],
  },
};
