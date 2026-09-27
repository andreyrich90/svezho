import type { Guide } from "./types";

export const guide: Guide = {
  slug: "kofe-i-chay",
  emoji: "☕",
  image: "/img/guides/kofe-i-chay.webp",
  updated: "2026-09-26",
  title: {
    ru: "Кофе и чай дома: пропорции, температура и время, как в кофейне",
    en: "Coffee and tea at home: ratios, temperature and timing like a café",
    ua: "Кава й чай удома: пропорції, температура й час, як у кав'ярні",
  },
  summary: {
    ru: "Сколько граммов кофе на чашку, какой помол для турки, френч-пресса и гейзерной кофеварки, почему кофе горчит или кислит, как взбить молоко без капучинатора и приготовить колд-брю. Для чая — температура и время заваривания чёрного, зелёного, белого и улуна.",
    en: "How many grams of coffee per cup, which grind for a cezve, French press and moka pot, why coffee tastes bitter or sour, how to froth milk without a steamer and make cold brew. For tea — temperatures and steeping times for black, green, white and oolong.",
    ua: "Скільки грамів кави на чашку, який помел для турки, френч-преса й гейзерної кавоварки, чому кава гірчить або кислить, як збити молоко без капучинатора й приготувати колд-брю. Для чаю — температура й час заварювання чорного, зеленого, білого та улуна.",
  },
  relatedRecipes: ["tiramisu-klassicheskiy", "ovsyanoe-pechenye", "bananovyy-hleb"],
  sections: {
    ru: [
      {
        heading: "Зерно и свежесть",
        paragraphs: [
          "Кофе — это обжаренное семя, и его главный враг — время. Пик вкуса наступает через 5–7 дней после обжарки и держится примерно месяц. Молотый кофе теряет большую часть аромата уже через 15–30 минут. Поэтому лучшее, что можно сделать для вкуса, — покупать зерно с датой обжарки на пачке и молоть прямо перед приготовлением.",
          "Арабика — мягче, с кислинкой и сложным ароматом. Робуста — горче, крепче, в ней вдвое больше кофеина и она даёт густую пенку. Для эспрессо и турки часто берут смеси, для фильтра — чистую арабику.",
        ],
        tip: "Храните зерно в непрозрачной герметичной банке при комнатной температуре. Холодильник вреден: зерно впитывает запахи и собирает конденсат при каждом открывании. Большой запас можно заморозить порциями и не размораживать повторно.",
      },
      {
        heading: "Главная пропорция и вода",
        paragraphs: [
          "Базовое соотношение для большинства способов — 1:16, то есть 60–65 г кофе на литр воды, или около 15 г на кружку 250 мл. Хотите крепче — сдвигайте к 1:14, мягче — к 1:17. Кухонные весы делают кофе предсказуемым: ложка молотого кофе может весить от 5 до 10 г.",
          "Кофе на 98% состоит из воды, поэтому вода важна. Берите фильтрованную или бутилированную, не дистиллированную: без минералов кофе получается плоским. Температура — 90–96 °C: закипевший чайник должен постоять 30–60 секунд. Кипяток обжигает кофе и даёт горечь.",
        ],
      },
      {
        heading: "Помол: почему кофе горчит или кислит",
        paragraphs: [
          "Помол управляет скоростью экстракции — тем, как быстро вода вымывает из кофе вкус. Сначала выходят кислоты, потом сладость, в самом конце — горечь. Кислый, «пустой» кофе недоэкстрагирован: помол слишком крупный или время слишком короткое. Горький, вяжущий — переэкстрагирован: помол слишком мелкий, вода слишком горячая или время слишком долгое.",
        ],
        list: [
          "Турка — самый тонкий, как пудра.",
          "Эспрессо — тонкий, как мелкая соль.",
          "Гейзерная кофеварка — чуть крупнее эспрессо.",
          "Пуровер (воронка) — средне-тонкий, как песок.",
          "Кофеварка капельная — средний.",
          "Френч-пресс и колд-брю — крупный, как морская соль.",
        ],
      },
      {
        heading: "Кофе в турке",
        paragraphs: [
          "На 100 мл холодной воды — 7–8 г кофе самого тонкого помола (1 ч. л. с горкой). Сахар, если нужен, кладите сразу. Щепотка соли смягчает горечь, корица или кардамон — по желанию.",
          "Размешайте и поставьте на самый слабый огонь. Чем медленнее нагрев, тем лучше экстракция и гуще пенка — в идеале 2–3 минуты. Когда пенка начнёт подниматься и в центре появится «трещинка» — сразу снимите с огня. Кофе не должен кипеть: кипение разрушает пенку и даёт горечь.",
        ],
        tip: "Дайте кофе постоять 30 секунд, чтобы осела гуща, и разливайте медленно. Для сладкой пенки можно дать ей подняться 2–3 раза, снимая турку с огня.",
      },
      {
        heading: "Френч-пресс и гейзерная кофеварка",
        paragraphs: [
          "Френч-пресс: на 500 мл воды — 30–32 г кофе крупного помола. Залейте водой 93–95 °C, перемешайте, накройте крышкой без нажима. Через 4 минуты снимите ложкой «шапку» с поверхности и медленно опустите поршень. Сразу разлейте — если кофе стоит на гуще, он продолжает экстрагироваться и горчит.",
          "Гейзерная кофеварка: налейте в нижнюю часть горячую воду до клапана — так кофе меньше «подгорает» на плите. Засыпьте кофе в воронку горкой и разровняйте, но не утрамбовывайте. Поставьте на средний огонь с открытой крышкой. Как только кофе потечёт светлее и появится булькающее шипение — снимите с огня и остудите основание холодным полотенцем.",
        ],
      },
      {
        heading: "Пуровер и колд-брю",
        paragraphs: [
          "Пуровер (воронка с фильтром): 15 г кофе средне-тонкого помола на 250 мл воды. Промойте бумажный фильтр горячей водой, чтобы убрать бумажный привкус. Сначала залейте 30–40 мл воды и подождите 30–40 секунд — кофе «расцветёт», выпустив углекислый газ. Затем лейте тонкой струйкой по спирали. Общее время — 2,5–3,5 минуты.",
          "Колд-брю: 100 г кофе крупного помола на 800 мл холодной воды (1:8). Перемешайте, накройте и оставьте в холодильнике на 12–18 часов. Процедите через бумажный фильтр. Получится концентрат, мягкий, сладковатый и почти без кислотности. Разбавьте водой или молоком 1:1 и подавайте со льдом. Хранится неделю.",
        ],
      },
      {
        heading: "Молоко для капучино без кофемашины",
        paragraphs: [
          "Идеальная температура молока — 60–65 °C: горячее, но ещё можно держать кружку. Выше 70 °C молоко приобретает варёный вкус, а пена оседает.",
          "Лучше всего взбивается холодное молоко жирностью 3,2–3,5%: белок даёт пену, а жир — бархатистость. Нагрейте молоко и взбейте френч-прессом: 15–20 быстрых движений поршнем вверх-вниз. Или ручным капучинатором, или просто в банке с крышкой — трясите 30 секунд, затем снимите крышку и прогрейте в микроволновке 30 секунд, чтобы пена стабилизировалась.",
          "Для растительного молока берите версию «бариста»: в обычном миндальном или овсяном мало белка, и пена быстро распадается.",
        ],
      },
      {
        heading: "Чай: температура решает всё",
        paragraphs: [
          "Нежный чай кипяток «сваривает»: зелёный становится горьким и травянистым, белый теряет аромат. Каждому виду — своя температура и время.",
        ],
        list: [
          "Чёрный: 95–100 °C, 3–5 минут.",
          "Зелёный: 70–80 °C, 1–3 минуты.",
          "Белый: 75–85 °C, 2–4 минуты.",
          "Улун: 85–95 °C, 2–4 минуты; можно заваривать 3–5 раз.",
          "Пуэр: 95–100 °C, 1–3 минуты после быстрого промывания кипятком.",
          "Травяной: 100 °C, 5–7 минут под крышкой.",
          "Норма: 2–3 г листового чая (1 ч. л.) на 200 мл воды.",
        ],
        tip: "Без термометра: для зелёного чая дайте закипевшему чайнику остыть 5 минут без крышки или разбавьте кипяток холодной водой в пропорции 4:1.",
      },
      {
        heading: "Как заварить чай правильно",
        paragraphs: [
          "Прогрейте заварочный чайник кипятком и вылейте воду: холодный фарфор забирает тепло, и чай заваривается хуже. Засыпьте листья и залейте водой нужной температуры.",
          "Не передерживайте: с каждой минутой из листьев выходит всё больше танинов, и чай становится терпким и вяжущим. Когда время вышло — процедите весь чай в чашки или другой чайник. Листья, оставшиеся в воде, продолжают завариваться.",
          "Пакетированный чай — это обычно мелкая крошка: он заваривается быстрее (2–3 минуты) и не любит, когда его отжимают ложкой. Листовой чай раскрывается медленнее и выдерживает несколько проливов.",
        ],
      },
    ],
    en: [
      {
        heading: "Beans and freshness",
        paragraphs: [
          "Coffee is a roasted seed, and its main enemy is time. Flavour peaks 5–7 days after roasting and holds for about a month. Ground coffee loses most of its aroma within 15–30 minutes. So the best thing you can do for flavour is buy beans with a roast date on the bag and grind just before brewing.",
          "Arabica is softer, with acidity and a complex aroma. Robusta is more bitter and stronger, has twice the caffeine and gives a thick crema. Espresso and cezve coffee often use blends; filter coffee usually single-origin arabica.",
        ],
        tip: "Keep beans in an opaque airtight tin at room temperature. The fridge is bad for them: beans absorb smells and collect condensation every time you open it. A big stock can be frozen in portions and never refrozen.",
      },
      {
        heading: "The key ratio and the water",
        paragraphs: [
          "The base ratio for most methods is 1:16 — 60–65 g coffee per litre of water, or about 15 g per 250 ml mug. For stronger coffee move towards 1:14, for milder to 1:17. Kitchen scales make coffee predictable: a spoon of ground coffee can weigh anything from 5 to 10 g.",
          "Coffee is 98% water, so the water matters. Use filtered or bottled, not distilled: without minerals coffee tastes flat. The temperature should be 90–96 °C: let a boiled kettle stand for 30–60 seconds. Boiling water scorches coffee and makes it bitter.",
        ],
      },
      {
        heading: "Grind: why coffee tastes bitter or sour",
        paragraphs: [
          "Grind size controls extraction speed — how quickly water washes flavour out of the coffee. Acids come out first, then sweetness, and bitterness last. Sour, hollow coffee is under-extracted: the grind is too coarse or the time too short. Bitter, astringent coffee is over-extracted: the grind is too fine, the water too hot or the time too long.",
        ],
        list: [
          "Cezve (Turkish) — finest, like powder.",
          "Espresso — fine, like table salt.",
          "Moka pot — slightly coarser than espresso.",
          "Pour-over — medium-fine, like sand.",
          "Drip machine — medium.",
          "French press and cold brew — coarse, like sea salt.",
        ],
      },
      {
        heading: "Coffee in a cezve",
        paragraphs: [
          "Per 100 ml cold water — 7–8 g of the finest-ground coffee (a heaped teaspoon). Add sugar at the start if you want it. A pinch of salt softens bitterness; cinnamon or cardamom are optional.",
          "Stir and set over the lowest heat. The slower it heats, the better the extraction and the thicker the foam — ideally 2–3 minutes. When the foam starts to rise and a crack appears in the middle, take it off the heat at once. It must not boil: boiling destroys the foam and adds bitterness.",
        ],
        tip: "Let the coffee stand for 30 seconds for the grounds to settle, then pour slowly. For a sweet foam, let it rise 2–3 times, lifting the pot off the heat each time.",
      },
      {
        heading: "French press and moka pot",
        paragraphs: [
          "French press: 30–32 g coarse coffee per 500 ml water. Pour on water at 93–95 °C, stir and put the lid on without pressing. After 4 minutes, skim the crust off the top with a spoon and slowly press the plunger. Pour straight away — coffee left on the grounds keeps extracting and turns bitter.",
          "Moka pot: fill the base with hot water up to the valve — that way the coffee cooks less on the hob. Fill the basket with coffee in a mound and level it, but don't tamp. Set over medium heat with the lid open. As soon as the coffee runs paler and you hear a gurgling hiss, take it off the heat and cool the base with a cold towel.",
        ],
      },
      {
        heading: "Pour-over and cold brew",
        paragraphs: [
          "Pour-over: 15 g medium-fine coffee per 250 ml water. Rinse the paper filter with hot water to remove the papery taste. First pour 30–40 ml of water and wait 30–40 seconds — the coffee blooms, releasing carbon dioxide. Then pour in a thin spiral. Total time 2.5–3.5 minutes.",
          "Cold brew: 100 g coarse coffee to 800 ml cold water (1:8). Stir, cover and leave in the fridge for 12–18 hours. Strain through a paper filter. You get a concentrate that is smooth, sweetish and barely acidic. Dilute 1:1 with water or milk and serve over ice. It keeps for a week.",
        ],
      },
      {
        heading: "Milk for a cappuccino without a machine",
        paragraphs: [
          "The ideal milk temperature is 60–65 °C: hot, but you can still hold the cup. Above 70 °C milk tastes cooked and the foam collapses.",
          "Cold milk with 3.2–3.5% fat froths best: protein makes the foam and fat makes it velvety. Warm the milk and froth it in a French press: 15–20 quick strokes of the plunger. Or with a handheld frother, or just in a jar with a lid — shake for 30 seconds, then take the lid off and microwave for 30 seconds to stabilise the foam.",
          "For plant milk, buy the barista version: ordinary almond or oat milk is low in protein and the foam soon falls apart.",
        ],
      },
      {
        heading: "Tea: temperature is everything",
        paragraphs: [
          "Boiling water stews delicate tea: green turns bitter and grassy, white loses its aroma. Each type has its own temperature and time.",
        ],
        list: [
          "Black: 95–100 °C, 3–5 minutes.",
          "Green: 70–80 °C, 1–3 minutes.",
          "White: 75–85 °C, 2–4 minutes.",
          "Oolong: 85–95 °C, 2–4 minutes; can be steeped 3–5 times.",
          "Pu-erh: 95–100 °C, 1–3 minutes after a quick rinse with boiling water.",
          "Herbal: 100 °C, 5–7 minutes, covered.",
          "Amount: 2–3 g loose tea (1 tsp) per 200 ml water.",
        ],
        tip: "Without a thermometer: for green tea let a boiled kettle cool for 5 minutes with the lid off, or mix boiling water with cold water 4:1.",
      },
      {
        heading: "How to brew tea properly",
        paragraphs: [
          "Warm the teapot with boiling water and pour it out: cold porcelain draws off heat and the tea brews worse. Add the leaves and pour on water at the right temperature.",
          "Don't overdo it: every minute more tannins come out of the leaves and the tea turns harsh and astringent. When the time's up, pour all the tea into cups or another pot. Leaves left in water keep brewing.",
          "Tea bags usually hold fine dust: they brew faster (2–3 minutes) and don't like being squeezed with a spoon. Loose leaf opens more slowly and stands up to several infusions.",
        ],
      },
    ],
    ua: [
      {
        heading: "Зерно й свіжість",
        paragraphs: [
          "Кава — це обсмажене насіння, і її головний ворог — час. Пік смаку настає через 5–7 днів після обсмаження й тримається приблизно місяць. Мелена кава втрачає більшу частину аромату вже за 15–30 хвилин. Тому найкраще, що можна зробити для смаку, — купувати зерно з датою обсмаження на пачці й молоти просто перед приготуванням.",
          "Арабіка — м'якша, з кислинкою й складним ароматом. Робуста — гіркіша, міцніша, у ній удвічі більше кофеїну, і вона дає густу пінку. Для еспресо й турки часто беруть суміші, для фільтра — чисту арабіку.",
        ],
        tip: "Зберігайте зерно в непрозорій герметичній банці за кімнатної температури. Холодильник шкідливий: зерно вбирає запахи й збирає конденсат під час кожного відкривання. Великий запас можна заморозити порціями й не розморожувати повторно.",
      },
      {
        heading: "Головна пропорція й вода",
        paragraphs: [
          "Базове співвідношення для більшості способів — 1:16, тобто 60–65 г кави на літр води, або близько 15 г на кухоль 250 мл. Хочете міцніше — зсувайте до 1:14, м'якше — до 1:17. Кухонні ваги роблять каву передбачуваною: ложка меленої кави може важити від 5 до 10 г.",
          "Кава на 98% складається з води, тому вода важлива. Беріть фільтровану або бутильовану, не дистильовану: без мінералів кава виходить пласкою. Температура — 90–96 °C: закипілий чайник має постояти 30–60 секунд. Окріп обпікає каву й дає гіркоту.",
        ],
      },
      {
        heading: "Помел: чому кава гірчить або кислить",
        paragraphs: [
          "Помел керує швидкістю екстракції — тим, як швидко вода вимиває з кави смак. Спершу виходять кислоти, потім солодкість, наприкінці — гіркота. Кисла, «порожня» кава недоекстрагована: помел надто крупний або час надто короткий. Гірка, в'язка — переекстрагована: помел надто дрібний, вода надто гаряча або час надто довгий.",
        ],
        list: [
          "Турка — найдрібніший, як пудра.",
          "Еспресо — дрібний, як дрібна сіль.",
          "Гейзерна кавоварка — трохи крупніший за еспресо.",
          "Пуровер (лійка) — середньо-дрібний, як пісок.",
          "Крапельна кавоварка — середній.",
          "Френч-прес і колд-брю — крупний, як морська сіль.",
        ],
      },
      {
        heading: "Кава в турці",
        paragraphs: [
          "На 100 мл холодної води — 7–8 г кави найдрібнішого помелу (1 ч. л. з гіркою). Цукор, якщо потрібен, кладіть одразу. Дрібка солі пом'якшує гіркоту, кориця чи кардамон — за бажанням.",
          "Розмішайте й поставте на найслабший вогонь. Що повільніше нагрівання, то краща екстракція й густіша пінка — в ідеалі 2–3 хвилини. Коли пінка почне підніматися й у центрі з'явиться «тріщинка» — одразу зніміть із вогню. Кава не має кипіти: кипіння руйнує пінку й дає гіркоту.",
        ],
        tip: "Дайте каві постояти 30 секунд, щоб осіла гуща, і розливайте повільно. Для солодкої пінки можна дати їй піднятися 2–3 рази, знімаючи турку з вогню.",
      },
      {
        heading: "Френч-прес і гейзерна кавоварка",
        paragraphs: [
          "Френч-прес: на 500 мл води — 30–32 г кави крупного помелу. Залийте водою 93–95 °C, перемішайте, накрийте кришкою без натискання. Через 4 хвилини зніміть ложкою «шапку» з поверхні й повільно опустіть поршень. Одразу розлийте — якщо кава стоїть на гущі, вона й далі екстрагується й гірчить.",
          "Гейзерна кавоварка: налийте в нижню частину гарячу воду до клапана — так кава менше «підгорає» на плиті. Засипте каву в лійку гіркою й розрівняйте, але не утрамбовуйте. Поставте на середній вогонь із відкритою кришкою. Щойно кава потече світліше й з'явиться булькотливе шипіння — зніміть із вогню й остудіть основу холодним рушником.",
        ],
      },
      {
        heading: "Пуровер і колд-брю",
        paragraphs: [
          "Пуровер (лійка з фільтром): 15 г кави середньо-дрібного помелу на 250 мл води. Промийте паперовий фільтр гарячою водою, щоб прибрати паперовий присмак. Спершу залийте 30–40 мл води й зачекайте 30–40 секунд — кава «розквітне», випустивши вуглекислий газ. Потім лийте тонким струменем по спіралі. Загальний час — 2,5–3,5 хвилини.",
          "Колд-брю: 100 г кави крупного помелу на 800 мл холодної води (1:8). Перемішайте, накрийте й залиште в холодильнику на 12–18 годин. Процідіть крізь паперовий фільтр. Вийде концентрат — м'який, солодкуватий і майже без кислотності. Розбавте водою або молоком 1:1 і подавайте з льодом. Зберігається тиждень.",
        ],
      },
      {
        heading: "Молоко для капучино без кавомашини",
        paragraphs: [
          "Ідеальна температура молока — 60–65 °C: гаряче, але кухоль ще можна тримати. Вище 70 °C молоко набуває вареного смаку, а піна осідає.",
          "Найкраще збивається холодне молоко жирністю 3,2–3,5%: білок дає піну, а жир — оксамитовість. Нагрійте молоко й збийте френч-пресом: 15–20 швидких рухів поршнем угору-вниз. Або ручним капучинатором, або просто в банці з кришкою — трусіть 30 секунд, потім зніміть кришку й прогрійте в мікрохвильовці 30 секунд, щоб піна стабілізувалася.",
          "Для рослинного молока беріть версію «бариста»: у звичайному мигдальному чи вівсяному мало білка, і піна швидко розпадається.",
        ],
      },
      {
        heading: "Чай: температура вирішує все",
        paragraphs: [
          "Ніжний чай окріп «варить»: зелений стає гірким і трав'янистим, білий утрачає аромат. Кожному виду — своя температура й час.",
        ],
        list: [
          "Чорний: 95–100 °C, 3–5 хвилин.",
          "Зелений: 70–80 °C, 1–3 хвилини.",
          "Білий: 75–85 °C, 2–4 хвилини.",
          "Улун: 85–95 °C, 2–4 хвилини; можна заварювати 3–5 разів.",
          "Пуер: 95–100 °C, 1–3 хвилини після швидкого промивання окропом.",
          "Трав'яний: 100 °C, 5–7 хвилин під кришкою.",
          "Норма: 2–3 г листового чаю (1 ч. л.) на 200 мл води.",
        ],
        tip: "Без термометра: для зеленого чаю дайте закипілому чайнику охолонути 5 хвилин без кришки або розбавте окріп холодною водою в пропорції 4:1.",
      },
      {
        heading: "Як заварити чай правильно",
        paragraphs: [
          "Прогрійте заварювальний чайник окропом і вилийте воду: холодна порцеляна забирає тепло, і чай заварюється гірше. Засипте листя й залийте водою потрібної температури.",
          "Не передержуйте: щохвилини з листя виходить дедалі більше танінів, і чай стає терпким і в'язким. Коли час минув — процідіть увесь чай у чашки або інший чайник. Листя, що лишилося у воді, продовжує заварюватися.",
          "Пакетований чай — це зазвичай дрібна крихта: він заварюється швидше (2–3 хвилини) і не любить, коли його віджимають ложкою. Листовий чай розкривається повільніше й витримує кілька проливів.",
        ],
      },
    ],
  },
  faq: {
    ru: [
      { q: "Можно ли молоть кофе в блендере?", a: "Можно в крайнем случае, но помол будет неравномерным: пыль и крупные куски вместе, поэтому кофе одновременно горчит и кислит. Жерновая кофемолка даёт ровный помол и стоит того." },
      { q: "Почему в турке кофе убегает?", a: "Слишком сильный огонь. Пенка поднимается резко в последние секунды — не отходите от плиты и снимайте турку, как только она начнёт подниматься." },
      { q: "Сколько кофеина в чашке?", a: "Около 80–100 мг в чашке фильтр-кофе 250 мл, 60–70 мг в порции эспрессо, 30–50 мг в чашке чёрного чая, 20–30 мг — зелёного." },
      { q: "Можно ли пить вчерашний заваренный чай?", a: "Опасности нет, если он хранился в холодильнике. Но при комнатной температуре за сутки в нём могут размножиться бактерии, а вкус станет терпким и плоским." },
      { q: "Почему на чае появляется плёнка?", a: "Это соединения танинов с минералами жёсткой воды. На вкус почти не влияет, но с фильтрованной водой плёнки не будет, а чай станет прозрачнее и ароматнее." },
    ],
    en: [
      { q: "Can I grind coffee in a blender?", a: "At a pinch, but the grind will be uneven: dust and chunks together, so the coffee is bitter and sour at once. A burr grinder gives an even grind and is worth it." },
      { q: "Why does my cezve boil over?", a: "The heat is too high. The foam rises suddenly in the last few seconds — stay at the hob and lift the pot as soon as it starts to climb." },
      { q: "How much caffeine is in a cup?", a: "About 80–100 mg in a 250 ml cup of filter coffee, 60–70 mg in a shot of espresso, 30–50 mg in a cup of black tea and 20–30 mg in green." },
      { q: "Is yesterday's brewed tea safe to drink?", a: "Yes if it was kept in the fridge. At room temperature bacteria can grow over a day, and the taste turns harsh and flat." },
      { q: "Why is there a film on my tea?", a: "It's tannins combining with minerals in hard water. It barely affects the taste, but with filtered water there's no film and the tea is clearer and more fragrant." },
    ],
    ua: [
      { q: "Чи можна молоти каву в блендері?", a: "Можна в крайньому разі, але помел буде нерівномірним: пил і великі шматки разом, тому кава водночас гірчить і кислить. Жорнова кавомолка дає рівний помел і варта того." },
      { q: "Чому в турці кава збігає?", a: "Надто сильний вогонь. Пінка піднімається різко в останні секунди — не відходьте від плити й знімайте турку, щойно вона почне підніматися." },
      { q: "Скільки кофеїну в чашці?", a: "Близько 80–100 мг у чашці фільтр-кави 250 мл, 60–70 мг у порції еспресо, 30–50 мг у чашці чорного чаю, 20–30 мг — зеленого." },
      { q: "Чи можна пити вчорашній заварений чай?", a: "Небезпеки немає, якщо він зберігався в холодильнику. Але за кімнатної температури за добу в ньому можуть розмножитися бактерії, а смак стане терпким і пласким." },
      { q: "Чому на чаї з'являється плівка?", a: "Це сполуки танінів із мінералами жорсткої води. На смак майже не впливає, але з фільтрованою водою плівки не буде, а чай стане прозорішим і ароматнішим." },
    ],
  },
};
