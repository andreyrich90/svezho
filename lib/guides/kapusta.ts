import type { Guide } from "./types";

export const guide: Guide = {
  slug: "kapusta",
  emoji: "🥬",
  updated: "2026-09-27",
  title: {
    ru: "Капуста: квашеная, тушёная, запечённая — и без неприятного запаха",
    en: "Cabbage: fermented, braised, roasted — and without the unpleasant smell",
    ua: "Капуста: квашена, тушкована, запечена — і без неприємного запаху",
  },
  summary: {
    ru: "Белокочанная, краснокочанная, пекинская, савойская, брокколи и цветная — что для чего, откуда берётся запах и как его избежать, квашеная капуста по пропорции 2 %, тушёная капуста, стейки из капусты в духовке, салат, который не пускает сок, и хранение.",
    en: "White, red, napa and savoy cabbage, broccoli and cauliflower — what's for what, where the smell comes from and how to avoid it, sauerkraut at a 2 % ratio, braised cabbage, roasted cabbage steaks, a slaw that doesn't go watery, and storage.",
    ua: "Білоголова, червоноголова, пекінська, савойська, броколі й цвітна — що для чого, звідки береться запах і як його уникнути, квашена капуста за пропорцією 2 %, тушкована капуста, стейки з капусти в духовці, салат, що не пускає сік, і зберігання.",
  },
  relatedRecipes: ["kapustnye-kotlety-s-syrom", "vinegret"],
  sections: {
    ru: [
      {
        heading: "Какая капуста для чего",
        paragraphs: [
          "Капуста — одна из самых дешёвых и полезных круглогодичных овощей, но разные виды ведут себя на кухне по-разному.",
        ],
        list: [
          "Белокочанная — квашение, тушение, щи, голубцы, салаты. Поздние сорта плотнее и лучше для квашения.",
          "Краснокочанная — салаты, тушение с яблоком и уксусом, маринады. Жёстче белой.",
          "Пекинская — нежная и сочная: салаты, вок, кимчи.",
          "Савойская — гофрированная и мягкая: голубцы (листья гибкие без варки), тушение, супы.",
          "Брокколи и цветная — запекание, бланширование, пюре, крем-супы.",
          "Брюссельская — запекание до карамельной корочки, жарка с беконом.",
        ],
      },
      {
        heading: "Откуда запах и как его избежать",
        paragraphs: [
          "Неприятный «серный» запах появляется, когда капусту долго варят: содержащиеся в ней серные соединения при длительном нагреве распадаются. Чем дольше и мельче — тем сильнее запах и серее цвет.",
        ],
        list: [
          "Готовьте быстро: бланширование 2–4 минуты, жарка, вок, запекание.",
          "Если тушите — делайте это с кислотой (томат, уксус, яблоко) и не дольше 40–50 минут.",
          "Варите брокколи и цветную в большом количестве воды без крышки.",
          "Лавровый лист, тмин и укроп маскируют запах в супах и тушёной капусте.",
        ],
        tip: "Идеально приготовленная брокколи — ярко-зелёная и хрустящая. Как только она стала оливковой, её переварили.",
      },
      {
        heading: "Квашеная капуста: пропорция 2 %",
        paragraphs: [
          "Для квашения нужны всего капуста и соль — ровно 2 % от веса капусты, то есть 20 г соли на 1 кг. Меньше — капуста может раскиснуть, больше — брожение замедлится и вкус будет пересоленным.",
          "Нашинкуйте капусту, добавьте тёртую морковь (5–10 % веса), посолите и мните руками 5–10 минут, пока не выделится сок. Утрамбуйте в банку так, чтобы сок полностью покрыл капусту, поставьте сверху груз.",
          "Держите при комнатной температуре 18–22 °C 3–5 дней, протыкая капусту до дна деревянной палочкой раз в день, чтобы выпустить газ. Когда вкус устроит — уберите в холодильник.",
        ],
        list: [
          "Соль — без йода: йодированная может замедлить брожение и дать горечь.",
          "Капуста всегда должна быть под соком — то, что сверху, может покрыться плесенью.",
          "Тмин, клюква, яблоко или свёкла — классические добавки.",
        ],
      },
      {
        heading: "Тушёная капуста",
        paragraphs: [
          "Обжарьте лук и морковь, добавьте нашинкованную капусту (1 кг) и жарьте на среднем огне 10 минут, помешивая, до лёгкой золотистости. Именно это даёт вкус, а не «варёную» капусту.",
          "Добавьте 2 ст. л. томатной пасты, 100 мл воды, лавровый лист, соль, перец и тушите под крышкой 25–35 минут до мягкости. В конце — капля уксуса и щепотка сахара для баланса.",
        ],
        tip: "Кислую квашеную капусту для тушения промойте и отожмите — или смешайте пополам со свежей: вкус будет мягче.",
      },
      {
        heading: "Капустные стейки в духовке",
        paragraphs: [
          "Разрежьте кочан через кочерыжку на пласты толщиной 2–2,5 см — кочерыжка удержит листья вместе. Смажьте маслом с солью, чесноком и копчёной паприкой.",
          "Запекайте при 220 °C 25–30 минут, перевернув на середине, до мягкости внутри и тёмных карамельных краёв. Подавайте с йогуртовым соусом, пармезаном или зелёным маслом.",
        ],
      },
      {
        heading: "Салат, который не пускает сок",
        paragraphs: [
          "Капустный салат быстро становится водянистым, потому что соль вытягивает сок. Если салат нужен хрустящим через час — посолите нашинкованную капусту заранее.",
          "Пересыпьте капусту 1 ч. л. соли на 500 г, оставьте на 20–30 минут, затем хорошо отожмите руками. Теперь заправляйте: салат останется хрустящим и не поплывёт.",
        ],
        list: [
          "Классика: капуста, морковь, зелень, масло, уксус, щепотка сахара.",
          "Коулслоу: капуста, морковь, майонез с йогуртом и горчицей.",
          "Азиатский: пекинская капуста, морковь, кунжутное масло, соевый соус, рисовый уксус.",
        ],
      },
      {
        heading: "Брокколи и цветная капуста",
        paragraphs: [
          "Режьте соцветия одинакового размера, а стебель не выбрасывайте — очистите и нарежьте, он сладкий и хрустящий.",
          "Бланшируйте 2–3 минуты в кипящей подсоленной воде и сразу в ледяную воду — так сохранится цвет. Для запекания: 220 °C, 20–25 минут с маслом, пока края не потемнеют. Цветная капуста в духовке становится ореховой и сладкой.",
        ],
      },
      {
        heading: "Как хранить капусту",
        paragraphs: [
          "Целый плотный кочан белокочанной капусты хранится в холодильнике 3–6 недель, в погребе — месяцами. Не снимайте верхние листья: они защищают кочан.",
          "Разрезанный кочан заверните в плёнку по срезу — он пролежит неделю. Брокколи и цветную храните в неплотном пакете 3–5 дней, пекинскую — до двух недель. Квашеная капуста в холодильнике хранится до нескольких месяцев, если остаётся под рассолом.",
        ],
      },
    ],
    en: [
      {
        heading: "Which cabbage for what",
        paragraphs: [
          "Cabbage is one of the cheapest and healthiest year-round vegetables, but different kinds behave differently in the kitchen.",
        ],
        list: [
          "White cabbage — fermenting, braising, soups, cabbage rolls, slaws. Late varieties are denser and better for sauerkraut.",
          "Red cabbage — salads, braising with apple and vinegar, pickles. Tougher than white.",
          "Napa (Chinese) cabbage — tender and juicy: salads, stir-fries, kimchi.",
          "Savoy — crinkly and soft: cabbage rolls (the leaves bend without boiling), braises, soups.",
          "Broccoli and cauliflower — roasting, blanching, purée, smooth soups.",
          "Brussels sprouts — roast until caramelised, or fry with bacon.",
        ],
      },
      {
        heading: "Where the smell comes from and how to avoid it",
        paragraphs: [
          "The unpleasant \"sulphurous\" smell appears when cabbage cooks for a long time: its sulphur compounds break down with prolonged heat. The longer and finer, the stronger the smell and the greyer the colour.",
        ],
        list: [
          "Cook it fast: blanch for 2–4 minutes, fry, stir-fry or roast.",
          "If braising, do it with acid (tomato, vinegar, apple) and for no more than 40–50 minutes.",
          "Boil broccoli and cauliflower in plenty of water, uncovered.",
          "Bay leaf, caraway and dill mask the smell in soups and braised cabbage.",
        ],
        tip: "Perfectly cooked broccoli is bright green and crisp. As soon as it turns olive, it's overcooked.",
      },
      {
        heading: "Sauerkraut: the 2 % ratio",
        paragraphs: [
          "Fermenting needs only cabbage and salt — exactly 2 % of the cabbage's weight, which is 20 g salt per 1 kg. Less, and the cabbage can go soft; more, and fermentation slows and it tastes too salty.",
          "Shred the cabbage, add grated carrot (5–10 % of the weight), salt it and massage with your hands for 5–10 minutes until juice comes out. Pack it into a jar so the juice covers the cabbage completely and weigh it down.",
          "Keep it at room temperature, 18–22 °C, for 3–5 days, poking down to the bottom with a wooden stick once a day to release gas. When you like the taste, move it to the fridge.",
        ],
        list: [
          "Use non-iodised salt: iodised salt can slow fermentation and add bitterness.",
          "The cabbage must always stay under the brine — anything exposed on top can go mouldy.",
          "Caraway, cranberries, apple or beetroot are classic additions.",
        ],
      },
      {
        heading: "Braised cabbage",
        paragraphs: [
          "Fry an onion and a carrot, add 1 kg shredded cabbage and fry over medium heat for 10 minutes, stirring, until lightly golden. That's what gives flavour rather than \"boiled\" cabbage.",
          "Add 2 tbsp tomato paste, 100 ml water, a bay leaf, salt and pepper, and braise covered for 25–35 minutes until tender. Finish with a drop of vinegar and a pinch of sugar for balance.",
        ],
        tip: "Rinse and squeeze sour sauerkraut before braising — or mix it half and half with fresh cabbage for a milder flavour.",
      },
      {
        heading: "Roasted cabbage steaks",
        paragraphs: [
          "Cut the head through the core into slabs 2–2.5 cm thick — the core holds the leaves together. Brush with oil mixed with salt, garlic and smoked paprika.",
          "Roast at 220 °C for 25–30 minutes, turning halfway, until tender inside with dark caramelised edges. Serve with a yoghurt sauce, parmesan or herb butter.",
        ],
      },
      {
        heading: "A slaw that doesn't go watery",
        paragraphs: [
          "A cabbage salad quickly turns watery because salt draws out the juice. If you need it crisp an hour later, salt the shredded cabbage in advance.",
          "Toss the cabbage with 1 tsp salt per 500 g, leave for 20–30 minutes, then squeeze it well by hand. Now dress it: the salad stays crunchy and won't go soggy.",
        ],
        list: [
          "Classic: cabbage, carrot, herbs, oil, vinegar and a pinch of sugar.",
          "Coleslaw: cabbage, carrot, mayonnaise with yoghurt and mustard.",
          "Asian: napa cabbage, carrot, sesame oil, soy sauce and rice vinegar.",
        ],
      },
      {
        heading: "Broccoli and cauliflower",
        paragraphs: [
          "Cut the florets to the same size and don't throw away the stalk — peel and slice it; it's sweet and crunchy.",
          "Blanch for 2–3 minutes in boiling salted water, then straight into iced water to keep the colour. For roasting: 220 °C, 20–25 minutes with oil, until the edges darken. Roasted cauliflower turns nutty and sweet.",
        ],
      },
      {
        heading: "How to store cabbage",
        paragraphs: [
          "A whole, firm white cabbage keeps 3–6 weeks in the fridge and for months in a cellar. Don't remove the outer leaves: they protect the head.",
          "Wrap a cut head in cling film over the cut surface — it will keep a week. Keep broccoli and cauliflower in a loose bag for 3–5 days, napa cabbage for up to two weeks. Sauerkraut keeps for months in the fridge as long as it stays under its brine.",
        ],
      },
    ],
    ua: [
      {
        heading: "Яка капуста для чого",
        paragraphs: [
          "Капуста — один із найдешевших і найкорисніших цілорічних овочів, але різні види поводяться на кухні по-різному.",
        ],
        list: [
          "Білоголова — квашення, тушкування, щі, голубці, салати. Пізні сорти щільніші й кращі для квашення.",
          "Червоноголова — салати, тушкування з яблуком і оцтом, маринади. Жорсткіша за білу.",
          "Пекінська — ніжна й соковита: салати, вок, кімчі.",
          "Савойська — гофрована й м'яка: голубці (листя гнучке без варіння), тушкування, супи.",
          "Броколі й цвітна — запікання, бланшування, пюре, крем-супи.",
          "Брюссельська — запікання до карамельної скоринки, смаження з беконом.",
        ],
      },
      {
        heading: "Звідки запах і як його уникнути",
        paragraphs: [
          "Неприємний «сірчаний» запах з'являється, коли капусту довго варять: сірчані сполуки в ній за тривалого нагрівання розпадаються. Що довше й дрібніше — то сильніший запах і сіріший колір.",
        ],
        list: [
          "Готуйте швидко: бланшування 2–4 хвилини, смаження, вок, запікання.",
          "Якщо тушкуєте — робіть це з кислотою (томат, оцет, яблуко) і не довше 40–50 хвилин.",
          "Варіть броколі й цвітну у великій кількості води без кришки.",
          "Лавровий лист, кмин і кріп маскують запах у супах і тушкованій капусті.",
        ],
        tip: "Ідеально приготована броколі — яскраво-зелена й хрустка. Щойно вона стала оливковою, її переварили.",
      },
      {
        heading: "Квашена капуста: пропорція 2 %",
        paragraphs: [
          "Для квашення потрібні лише капуста й сіль — рівно 2 % від ваги капусти, тобто 20 г солі на 1 кг. Менше — капуста може розкиснути, більше — бродіння сповільниться, а смак буде пересоленим.",
          "Нашаткуйте капусту, додайте терту моркву (5–10 % ваги), посоліть і мніть руками 5–10 хвилин, доки не виділиться сік. Утрамбуйте в банку так, щоб сік повністю вкрив капусту, поставте зверху вантаж.",
          "Тримайте за кімнатної температури 18–22 °C 3–5 днів, проколюючи капусту до дна дерев'яною паличкою раз на день, щоб випустити газ. Коли смак влаштує — приберіть у холодильник.",
        ],
        list: [
          "Сіль — без йоду: йодована може сповільнити бродіння й дати гіркоту.",
          "Капуста завжди має бути під соком — те, що зверху, може вкритися цвіллю.",
          "Кмин, журавлина, яблуко чи буряк — класичні додатки.",
        ],
      },
      {
        heading: "Тушкована капуста",
        paragraphs: [
          "Обсмажте цибулю й моркву, додайте нашатковану капусту (1 кг) і смажте на середньому вогні 10 хвилин, помішуючи, до легкої золотистості. Саме це дає смак, а не «варену» капусту.",
          "Додайте 2 ст. л. томатної пасти, 100 мл води, лавровий лист, сіль, перець і тушкуйте під кришкою 25–35 хвилин до м'якості. Наприкінці — крапля оцту й дрібка цукру для балансу.",
        ],
        tip: "Кислу квашену капусту для тушкування промийте й віджміть — або змішайте навпіл зі свіжою: смак буде м'якшим.",
      },
      {
        heading: "Капустяні стейки в духовці",
        paragraphs: [
          "Розріжте головку через качан на пласти завтовшки 2–2,5 см — качан утримає листя разом. Змастіть олією із сіллю, часником і копченою паприкою.",
          "Запікайте при 220 °C 25–30 хвилин, перевернувши посередині, до м'якості всередині й темних карамельних країв. Подавайте з йогуртовим соусом, пармезаном або зеленим маслом.",
        ],
      },
      {
        heading: "Салат, що не пускає сік",
        paragraphs: [
          "Капустяний салат швидко стає водянистим, бо сіль витягує сік. Якщо салат потрібен хрустким за годину — посоліть нашатковану капусту заздалегідь.",
          "Пересипте капусту 1 ч. л. солі на 500 г, залиште на 20–30 хвилин, потім добре віджміть руками. Тепер заправляйте: салат лишиться хрустким і не попливе.",
        ],
        list: [
          "Класика: капуста, морква, зелень, олія, оцет, дрібка цукру.",
          "Коулслоу: капуста, морква, майонез із йогуртом і гірчицею.",
          "Азійський: пекінська капуста, морква, кунжутна олія, соєвий соус, рисовий оцет.",
        ],
      },
      {
        heading: "Броколі й цвітна капуста",
        paragraphs: [
          "Ріжте суцвіття однакового розміру, а стебло не викидайте — очистьте й наріжте, воно солодке й хрустке.",
          "Бланшуйте 2–3 хвилини в киплячій підсоленій воді й одразу в крижану воду — так збережеться колір. Для запікання: 220 °C, 20–25 хвилин з олією, доки краї не потемніють. Цвітна капуста в духовці стає горіховою й солодкою.",
        ],
      },
      {
        heading: "Як зберігати капусту",
        paragraphs: [
          "Цілу щільну головку білоголової капусти зберігають у холодильнику 3–6 тижнів, у погребі — місяцями. Не знімайте верхнє листя: воно захищає головку.",
          "Розрізану головку загорніть у плівку по зрізу — вона пролежить тиждень. Броколі й цвітну зберігайте в нещільному пакеті 3–5 днів, пекінську — до двох тижнів. Квашена капуста в холодильнику зберігається кілька місяців, якщо лишається під розсолом.",
        ],
      },
    ],
  },
  faq: {
    ru: [
      { q: "Почему квашеная капуста получилась мягкой и склизкой?", a: "Слишком мало соли, слишком тепло (выше 24 °C) или капуста была ранних сортов. Берите поздние плотные кочаны и держите пропорцию 2 %." },
      { q: "Как сделать листья для голубцов мягкими?", a: "Опустите кочан с вырезанной кочерыжкой в кипяток на 3–5 минут и снимайте листья по мере размягчения. Или заморозьте кочан на ночь — после разморозки листья станут гибкими." },
      { q: "Почему краснокочанная капуста посинела?", a: "Её пигмент меняет цвет в зависимости от кислотности. Добавьте уксус или лимонный сок — цвет вернётся к красному." },
      { q: "Можно ли есть кочерыжку?", a: "Да, особенно у молодой капусты — она сладкая и хрустящая. У старой капусты кочерыжка жёсткая, её лучше удалить." },
      { q: "Сколько варить брокколи?", a: "3–4 минуты в кипящей воде или 5–6 минут на пару — до ярко-зелёного цвета и лёгкого хруста." },
    ],
    en: [
      { q: "Why did my sauerkraut turn soft and slimy?", a: "Too little salt, too warm (above 24 °C), or an early-season cabbage. Use dense late cabbages and stick to 2 % salt." },
      { q: "How do I soften leaves for cabbage rolls?", a: "Cut out the core and lower the head into boiling water for 3–5 minutes, peeling off leaves as they soften. Or freeze the head overnight — the leaves turn pliable once thawed." },
      { q: "Why did my red cabbage turn blue?", a: "Its pigment changes colour with acidity. Add vinegar or lemon juice and it turns red again." },
      { q: "Can I eat the core?", a: "Yes, especially from young cabbage — it's sweet and crunchy. The core of an old cabbage is tough and best removed." },
      { q: "How long should I cook broccoli?", a: "3–4 minutes in boiling water or 5–6 minutes steamed — until bright green with a slight crunch." },
    ],
    ua: [
      { q: "Чому квашена капуста вийшла м'якою й слизькою?", a: "Замало солі, надто тепло (понад 24 °C) або капуста ранніх сортів. Беріть пізні щільні головки й тримайте пропорцію 2 %." },
      { q: "Як зробити листя для голубців м'яким?", a: "Занурте головку з вирізаним качаном в окріп на 3–5 хвилин і знімайте листя в міру розм'якшення. Або заморозьте головку на ніч — після розморожування листя стане гнучким." },
      { q: "Чому червоноголова капуста посиніла?", a: "Її пігмент змінює колір залежно від кислотності. Додайте оцет або лимонний сік — колір повернеться до червоного." },
      { q: "Чи можна їсти качан?", a: "Так, особливо в молодої капусти — він солодкий і хрусткий. У старої капусти качан жорсткий, його краще видалити." },
      { q: "Скільки варити броколі?", a: "3–4 хвилини в киплячій воді або 5–6 хвилин на парі — до яскраво-зеленого кольору й легкого хрускоту." },
    ],
  },
};
