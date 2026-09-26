import type { Guide } from "./types";

export const guide: Guide = {
  slug: "bobovye",
  emoji: "🫘",
  updated: "2026-09-26",
  title: {
    ru: "Фасоль, нут, чечевица: как замачивать, сколько варить и как сделать хумус",
    en: "Beans, chickpeas and lentils: how to soak, how long to cook and how to make hummus",
    ua: "Квасоля, нут, сочевиця: як замочувати, скільки варити й як зробити хумус",
  },
  summary: {
    ru: "Какие бобовые нужно замачивать, а какие нет, таблица времени варки, правда ли соль мешает развариться и почему кислота — да. Чем опасна недоваренная красная фасоль, как уменьшить вздутие, выход из сухих бобов, идеально гладкий хумус и заморозка.",
    en: "Which pulses need soaking and which don't, a cooking-time table, whether salt really stops beans softening and why acid does. Why undercooked red kidney beans are dangerous, how to reduce bloating, dry-to-cooked yields, perfectly smooth hummus and freezing.",
    ua: "Які бобові треба замочувати, а які ні, таблиця часу варіння, чи правда сіль заважає розваритися й чому кислота — так. Чим небезпечна недоварена червона квасоля, як зменшити здуття, вихід із сухих бобів, ідеально гладенький хумус і заморожування.",
  },
  relatedRecipes: ["salat-s-tuncom-i-fasolyu", "vinegret", "kurica-s-kinoa-bowl"],
  sections: {
    ru: [
      {
        heading: "Зачем готовить бобовые из сухих",
        paragraphs: [
          "Консервированные бобовые удобны, но сухие стоят в 3–4 раза дешевле, вкуснее и держат форму лучше. Из 100 г сухих бобов получается 250–300 г готовых — столько же, сколько в стандартной банке.",
          "Бобовые — это недорогой растительный белок (20–25 г на 100 г сухих), клетчатка, железо и магний. Если варить сразу большую партию и замораживать, они будут под рукой так же, как консервы.",
        ],
      },
      {
        heading: "Замачивать или нет",
        paragraphs: [
          "Замачивание сокращает время варки почти вдвое, помогает бобам свариться равномерно и уменьшает количество веществ, вызывающих вздутие.",
        ],
        list: [
          "Нужно замачивать: фасоль, нут, целый горох, бобы, соевые бобы — на 8–12 часов или на ночь.",
          "Не нужно: чечевица любого цвета, колотый горох, маш — они варятся быстро и так.",
          "Воды — в 3–4 раза больше, чем бобов: они увеличиваются в 2–2,5 раза.",
          "В тёплой комнате замачивайте в холодильнике, иначе бобы могут начать бродить.",
          "После замачивания воду слейте и промойте бобы.",
        ],
        tip: "Быстрое замачивание: залейте бобы водой, доведите до кипения, прокипятите 2 минуты, снимите с огня и оставьте под крышкой на 1 час. Результат почти такой же, как после ночи в воде.",
      },
      {
        heading: "Сколько варить",
        paragraphs: [
          "Время зависит от сорта и возраста бобов: старые, долго лежавшие бобы варятся вдвое дольше и могут остаться жёсткими. Проверяйте на вкус — готовые бобы мягкие и кремовые внутри, без мучнистой сердцевины.",
        ],
        list: [
          "Красная чечевица: 15–20 минут, без замачивания — разваривается в пюре.",
          "Зелёная и коричневая чечевица: 25–35 минут — держит форму.",
          "Чёрная чечевица (белуга): 20–25 минут.",
          "Колотый горох: 40–60 минут.",
          "Маш: 30–40 минут.",
          "Нут (замоченный): 1–1,5 часа.",
          "Фасоль белая и красная (замоченная): 1–1,5 часа.",
          "В скороварке: нут и фасоль — 15–20 минут после набора давления.",
        ],
      },
      {
        heading: "Соль и кислота: правда и мифы",
        paragraphs: [
          "Старый совет «не солите бобы до конца варки, иначе они не разварятся» — миф. Исследования показали обратное: соль в воде для замачивания (1 ст. л. на литр) делает кожицу мягче и тоньше, бобы варятся ровнее и меньше лопаются. Солить воду при варке тоже можно с самого начала — бобы будут вкуснее.",
          "А вот кислота действительно мешает бобам размягчиться. Томаты, уксус, вино, лимонный сок добавляйте только тогда, когда бобы уже мягкие. Жёсткая вода (много кальция) тоже замедляет варку.",
        ],
        tip: "Щепотка соды (¼ ч. л. на литр воды) делает воду щелочной и ускоряет размягчение. Особенно полезно для нута, если вы делаете хумус. Для целых бобов в салат соду лучше не использовать — они могут развариться и приобрести мыльный привкус.",
      },
      {
        heading: "Красная фасоль: обязательно прокипятить",
        paragraphs: [
          "Сырая и недоваренная красная фасоль содержит фитогемагглютинин — вещество, которое вызывает сильное отравление: рвоту и боль в животе уже через 1–3 часа. Даже несколько сырых зёрен могут дать симптомы.",
          "Токсин полностью разрушается при интенсивном кипячении. Поэтому фасоль после замачивания обязательно кипятят на сильном огне не меньше 10 минут, а потом доваривают до мягкости. Опасность — в мультиварке на низкой температуре: при 80 °C токсин не только не разрушается, но становится активнее. Сначала прокипятите, потом кладите в мультиварку.",
          "Консервированная фасоль уже прошла термообработку и безопасна.",
        ],
      },
      {
        heading: "Как уменьшить вздутие",
        paragraphs: [
          "Вздутие вызывают олигосахариды — сложные сахара, которые не перевариваются в желудке, а бродят в кишечнике. Полностью убрать их нельзя, но можно заметно уменьшить.",
        ],
        list: [
          "Замачивайте и сливайте воду — часть олигосахаридов уходит в неё.",
          "Варите до полной мягкости: недоваренные бобы переносятся хуже.",
          "Добавляйте при варке кумин (зиру), фенхель, лавровый лист, имбирь, асафетиду.",
          "Начинайте с небольших порций и увеличивайте постепенно — кишечник привыкает за 2–3 недели.",
          "Красная чечевица и маш переносятся легче всего.",
        ],
      },
      {
        heading: "Идеальный хумус",
        paragraphs: [
          "Секрет гладкого, как крем, хумуса — разваренный нут и холодная вода.",
        ],
        list: [
          "250 г варёного нута (из 100 г сухого или 1 банка), ещё тёплого.",
          "3 ст. л. тахини (кунжутной пасты).",
          "Сок 1 лимона, 1 зубчик чеснока, ½ ч. л. соли, ½ ч. л. молотого кумина.",
          "3–4 ст. л. ледяной воды.",
          "Сначала взбейте в блендере тахини с лимонным соком и чесноком 1 минуту до светлого цвета. Добавьте нут и соль, пробейте 2–3 минуты. По ложке вливайте ледяную воду, пока хумус не станет пышным и кремовым.",
          "Подавайте с оливковым маслом, паприкой и зеленью.",
        ],
        tip: "Для самого гладкого хумуса снимите с нута кожицу: потрите тёплый нут между ладонями в миске с водой — кожица всплывёт. Или варите нут с ¼ ч. л. соды: он разварится, и кожица станет незаметной.",
      },
      {
        heading: "Что приготовить из бобовых",
        paragraphs: [],
        list: [
          "Чечевичный суп: красная чечевица, лук, морковь, томаты, кумин — 25 минут, затем пюрировать.",
          "Дал: красная чечевица с куркумой, имбирём, чесноком, заправка из обжаренных в масле специй.",
          "Фасоль в томате: белая фасоль, томаты, лук, паприка — отличный завтрак с яйцом и хлебом.",
          "Фалафель: только замоченный, но не варёный нут, измельчённый с зеленью и специями, — иначе фалафель развалится во фритюре.",
          "Салаты: чечевица с запечёнными овощами и фетой, фасоль с тунцом, нут с огурцом и помидорами.",
          "Хрустящий нут: обсушенный варёный нут с маслом и специями — 30–40 минут при 200 °C. Закуска вместо чипсов.",
        ],
      },
      {
        heading: "Хранение и заморозка",
        paragraphs: [
          "Сухие бобовые хранятся в закрытой банке в сухом тёмном месте до года. Дольше — можно, но варятся хуже и дольше.",
          "Варёные бобы храните в холодильнике 4–5 дней в той жидкости, в которой они варились: так они не пересохнут и не потрескаются. Замораживайте порциями по 250–300 г с небольшим количеством жидкости — до 6 месяцев. Размораживать не обязательно: сразу в суп, рагу или на сковороду.",
          "Консервированные бобовые перед использованием промойте: так уйдёт до 40% соли и характерный «консервный» привкус. Жидкость от нута (аквафаба) можно сохранить для безе и выпечки без яиц.",
        ],
      },
    ],
    en: [
      {
        heading: "Why cook pulses from dry",
        paragraphs: [
          "Canned pulses are convenient, but dried ones cost 3–4 times less, taste better and hold their shape better. 100 g dried beans gives 250–300 g cooked — the same as a standard can.",
          "Pulses are cheap plant protein (20–25 g per 100 g dried), fibre, iron and magnesium. Cook a big batch at once and freeze it, and they're as handy as canned.",
        ],
      },
      {
        heading: "To soak or not",
        paragraphs: [
          "Soaking nearly halves cooking time, helps beans cook evenly and reduces the compounds that cause bloating.",
        ],
        list: [
          "Soak: beans, chickpeas, whole peas, broad beans, soybeans — 8–12 hours or overnight.",
          "No need: lentils of any colour, split peas, mung beans — they cook quickly anyway.",
          "Use 3–4 times as much water as beans: they swell 2–2.5 times.",
          "In a warm room, soak in the fridge or the beans may start to ferment.",
          "After soaking, drain and rinse the beans.",
        ],
        tip: "Quick soak: cover the beans with water, bring to the boil, boil for 2 minutes, take off the heat and leave covered for 1 hour. Almost the same result as a night in water.",
      },
      {
        heading: "How long to cook",
        paragraphs: [
          "Timing depends on variety and age: old beans that have sat for a long time take twice as long and may stay hard. Taste to check — cooked beans are soft and creamy inside with no chalky centre.",
        ],
        list: [
          "Red lentils: 15–20 minutes, no soaking — they collapse into a purée.",
          "Green and brown lentils: 25–35 minutes — they hold their shape.",
          "Black (beluga) lentils: 20–25 minutes.",
          "Split peas: 40–60 minutes.",
          "Mung beans: 30–40 minutes.",
          "Chickpeas (soaked): 1–1.5 hours.",
          "White and red beans (soaked): 1–1.5 hours.",
          "In a pressure cooker: chickpeas and beans 15–20 minutes at pressure.",
        ],
      },
      {
        heading: "Salt and acid: fact and myth",
        paragraphs: [
          "The old advice \"don't salt beans until the end or they won't soften\" is a myth. Research shows the opposite: salt in the soaking water (1 tbsp per litre) makes the skins softer and thinner, and the beans cook more evenly and split less. You can salt the cooking water from the start too — the beans taste better.",
          "Acid, however, really does stop beans softening. Add tomatoes, vinegar, wine or lemon juice only once the beans are tender. Hard water (lots of calcium) slows cooking too.",
        ],
        tip: "A pinch of baking soda (¼ tsp per litre) makes the water alkaline and speeds softening. Especially useful for chickpeas if you're making hummus. For whole beans destined for salad, skip it — they may collapse and taste soapy.",
      },
      {
        heading: "Red kidney beans: always boil hard",
        paragraphs: [
          "Raw and undercooked red kidney beans contain phytohaemagglutinin, which causes severe food poisoning: vomiting and stomach pain within 1–3 hours. Even a few raw beans can cause symptoms.",
          "The toxin is fully destroyed by vigorous boiling. So after soaking, kidney beans must be boiled hard for at least 10 minutes, then simmered until tender. The danger is a slow cooker on low: at 80 °C the toxin isn't destroyed and even becomes more active. Boil first, then put them in the slow cooker.",
          "Canned kidney beans have already been heat-treated and are safe.",
        ],
      },
      {
        heading: "How to reduce bloating",
        paragraphs: [
          "Bloating comes from oligosaccharides — complex sugars that aren't digested in the stomach but ferment in the gut. You can't remove them entirely, but you can cut them down noticeably.",
        ],
        list: [
          "Soak and discard the water — some oligosaccharides go with it.",
          "Cook until completely tender: undercooked beans are harder to digest.",
          "Add cumin, fennel, bay leaf, ginger or asafoetida while cooking.",
          "Start with small portions and increase gradually — the gut adapts within 2–3 weeks.",
          "Red lentils and mung beans are the easiest to digest.",
        ],
      },
      {
        heading: "Perfect hummus",
        paragraphs: [
          "The secret of hummus as smooth as cream is well-cooked chickpeas and ice-cold water.",
        ],
        list: [
          "250 g cooked chickpeas (from 100 g dried or 1 can), still warm.",
          "3 tbsp tahini (sesame paste).",
          "Juice of 1 lemon, 1 garlic clove, ½ tsp salt, ½ tsp ground cumin.",
          "3–4 tbsp ice-cold water.",
          "First blend the tahini with the lemon juice and garlic for 1 minute until pale. Add the chickpeas and salt and blend for 2–3 minutes. Add the iced water a spoonful at a time until the hummus is fluffy and creamy.",
          "Serve with olive oil, paprika and herbs.",
        ],
        tip: "For the smoothest hummus, skin the chickpeas: rub the warm chickpeas between your palms in a bowl of water — the skins float up. Or cook them with ¼ tsp baking soda: they'll soften so much the skins disappear.",
      },
      {
        heading: "What to make with pulses",
        paragraphs: [],
        list: [
          "Lentil soup: red lentils, onion, carrot, tomatoes, cumin — 25 minutes, then blend.",
          "Dal: red lentils with turmeric, ginger and garlic, finished with spices fried in oil.",
          "Beans in tomato sauce: white beans, tomatoes, onion, paprika — a great breakfast with egg and bread.",
          "Falafel: soaked but uncooked chickpeas blended with herbs and spices — cooked chickpeas make falafel fall apart in the oil.",
          "Salads: lentils with roast vegetables and feta, beans with tuna, chickpeas with cucumber and tomatoes.",
          "Crunchy chickpeas: dried cooked chickpeas with oil and spices, 30–40 minutes at 200 °C. A snack instead of crisps.",
        ],
      },
      {
        heading: "Storage and freezing",
        paragraphs: [
          "Dried pulses keep up to a year in a sealed jar somewhere dry and dark. Longer is possible, but they cook worse and slower.",
          "Keep cooked beans in the fridge for 4–5 days in their cooking liquid so they don't dry out or split. Freeze in 250–300 g portions with a little liquid for up to 6 months. No need to thaw: straight into soup, stew or the pan.",
          "Rinse canned pulses before use: it removes up to 40% of the salt and the tinny taste. The chickpea liquid (aquafaba) can be kept for meringues and egg-free baking.",
        ],
      },
    ],
    ua: [
      {
        heading: "Навіщо готувати бобові із сухих",
        paragraphs: [
          "Консервовані бобові зручні, але сухі коштують у 3–4 рази дешевше, смачніші й краще тримають форму. Зі 100 г сухих бобів виходить 250–300 г готових — стільки ж, скільки в стандартній банці.",
          "Бобові — це недорогий рослинний білок (20–25 г на 100 г сухих), клітковина, залізо й магній. Якщо варити одразу велику партію й заморожувати, вони будуть під рукою так само, як консерви.",
        ],
      },
      {
        heading: "Замочувати чи ні",
        paragraphs: [
          "Замочування скорочує час варіння майже вдвічі, допомагає бобам зваритися рівномірно й зменшує кількість речовин, що спричиняють здуття.",
        ],
        list: [
          "Треба замочувати: квасолю, нут, цілий горох, боби, соєві боби — на 8–12 годин або на ніч.",
          "Не треба: сочевицю будь-якого кольору, колотий горох, маш — вони й так варяться швидко.",
          "Води — у 3–4 рази більше, ніж бобів: вони збільшуються у 2–2,5 раза.",
          "У теплій кімнаті замочуйте в холодильнику, інакше боби можуть почати бродити.",
          "Після замочування воду злийте й промийте боби.",
        ],
        tip: "Швидке замочування: залийте боби водою, доведіть до кипіння, прокип'ятіть 2 хвилини, зніміть із вогню й залиште під кришкою на 1 годину. Результат майже такий самий, як після ночі у воді.",
      },
      {
        heading: "Скільки варити",
        paragraphs: [
          "Час залежить від сорту й віку бобів: старі, довго збережені боби варяться вдвічі довше й можуть лишитися жорсткими. Перевіряйте на смак — готові боби м'які й кремові всередині, без борошнистої серцевини.",
        ],
        list: [
          "Червона сочевиця: 15–20 хвилин, без замочування — розварюється в пюре.",
          "Зелена й коричнева сочевиця: 25–35 хвилин — тримає форму.",
          "Чорна сочевиця (білуга): 20–25 хвилин.",
          "Колотий горох: 40–60 хвилин.",
          "Маш: 30–40 хвилин.",
          "Нут (замочений): 1–1,5 години.",
          "Квасоля біла й червона (замочена): 1–1,5 години.",
          "У скороварці: нут і квасоля — 15–20 хвилин після набору тиску.",
        ],
      },
      {
        heading: "Сіль і кислота: правда й міфи",
        paragraphs: [
          "Стара порада «не соліть боби до кінця варіння, інакше вони не розваряться» — міф. Дослідження показали протилежне: сіль у воді для замочування (1 ст. л. на літр) робить шкірку м'якшою й тоншою, боби варяться рівніше й менше лускають. Солити воду під час варіння теж можна від самого початку — боби будуть смачнішими.",
          "А от кислота справді заважає бобам розм'якнути. Томати, оцет, вино, лимонний сік додавайте лише тоді, коли боби вже м'які. Жорстка вода (багато кальцію) теж сповільнює варіння.",
        ],
        tip: "Дрібка соди (¼ ч. л. на літр води) робить воду лужною й пришвидшує розм'якшення. Особливо корисно для нуту, якщо ви робите хумус. Для цілих бобів у салат соду краще не використовувати — вони можуть розваритися й набути мильного присмаку.",
      },
      {
        heading: "Червона квасоля: обов'язково прокип'ятити",
        paragraphs: [
          "Сира й недоварена червона квасоля містить фітогемаглютинін — речовину, яка спричиняє сильне отруєння: блювання й біль у животі вже через 1–3 години. Навіть кілька сирих зерен можуть дати симптоми.",
          "Токсин повністю руйнується під час інтенсивного кип'ятіння. Тому квасолю після замочування обов'язково кип'ятять на сильному вогні щонайменше 10 хвилин, а потім доварюють до м'якості. Небезпека — у мультиварці на низькій температурі: за 80 °C токсин не лише не руйнується, а й стає активнішим. Спершу прокип'ятіть, потім кладіть у мультиварку.",
          "Консервована квасоля вже пройшла термообробку й безпечна.",
        ],
      },
      {
        heading: "Як зменшити здуття",
        paragraphs: [
          "Здуття спричиняють олігосахариди — складні цукри, що не перетравлюються в шлунку, а бродять у кишечнику. Повністю прибрати їх не можна, але можна помітно зменшити.",
        ],
        list: [
          "Замочуйте й зливайте воду — частина олігосахаридів іде в неї.",
          "Варіть до повної м'якості: недоварені боби переносяться гірше.",
          "Додавайте під час варіння кмин (зіру), фенхель, лавровий лист, імбир, асафетиду.",
          "Починайте з невеликих порцій і збільшуйте поступово — кишечник звикає за 2–3 тижні.",
          "Червона сочевиця й маш переносяться найлегше.",
        ],
      },
      {
        heading: "Ідеальний хумус",
        paragraphs: [
          "Секрет гладенького, як крем, хумусу — розварений нут і холодна вода.",
        ],
        list: [
          "250 г вареного нуту (зі 100 г сухого або 1 банка), ще теплого.",
          "3 ст. л. тахіні (кунжутної пасти).",
          "Сік 1 лимона, 1 зубчик часнику, ½ ч. л. солі, ½ ч. л. меленого кмину.",
          "3–4 ст. л. крижаної води.",
          "Спершу збийте в блендері тахіні з лимонним соком і часником 1 хвилину до світлого кольору. Додайте нут і сіль, проколотіть 2–3 хвилини. По ложці вливайте крижану воду, доки хумус не стане пишним і кремовим.",
          "Подавайте з оливковою олією, паприкою й зеленню.",
        ],
        tip: "Для найгладенькішого хумусу зніміть із нуту шкірку: потріть теплий нут між долонями в мисці з водою — шкірка спливе. Або варіть нут з ¼ ч. л. соди: він розвариться, і шкірка стане непомітною.",
      },
      {
        heading: "Що приготувати з бобових",
        paragraphs: [],
        list: [
          "Сочевичний суп: червона сочевиця, цибуля, морква, томати, кмин — 25 хвилин, потім пюрувати.",
          "Дал: червона сочевиця з куркумою, імбиром, часником, заправка з обсмажених в олії спецій.",
          "Квасоля в томаті: біла квасоля, томати, цибуля, паприка — чудовий сніданок з яйцем і хлібом.",
          "Фалафель: лише замочений, але не варений нут, подрібнений із зеленню й спеціями, — інакше фалафель розвалиться у фритюрі.",
          "Салати: сочевиця із запеченими овочами й фетою, квасоля з тунцем, нут з огірком і помідорами.",
          "Хрусткий нут: обсушений варений нут з олією й спеціями — 30–40 хвилин за 200 °C. Закуска замість чипсів.",
        ],
      },
      {
        heading: "Зберігання й заморожування",
        paragraphs: [
          "Сухі бобові зберігаються в закритій банці в сухому темному місці до року. Довше — можна, але вони варяться гірше й довше.",
          "Варені боби зберігайте в холодильнику 4–5 днів у тій рідині, у якій вони варилися: так вони не пересохнуть і не потріскаються. Заморожуйте порціями по 250–300 г із невеликою кількістю рідини — до 6 місяців. Розморожувати не обов'язково: одразу в суп, рагу чи на сковороду.",
          "Консервовані бобові перед використанням промийте: так піде до 40% солі й характерний «консервний» присмак. Рідину від нуту (аквафабу) можна зберегти для безе й випічки без яєць.",
        ],
      },
    ],
  },
  faq: {
    ru: [
      { q: "Почему фасоль не разваривается даже через 3 часа?", a: "Скорее всего, бобы старые или вода очень жёсткая, либо в кастрюлю рано добавили томаты. Добавьте щепотку соды и продолжайте варить; в следующий раз покупайте бобы с недавней датой упаковки." },
      { q: "Можно ли не замачивать нут?", a: "Можно, но варить придётся 2–3 часа, и он сварится менее равномерно. В скороварке без замачивания — около 40–45 минут." },
      { q: "Чем заменить тахини в хумусе?", a: "Ложкой арахисовой пасты или оливкового масла с щепоткой молотого кунжута. Вкус будет другим, но хумус получится." },
      { q: "Сколько чечевицы на порцию?", a: "60–80 г сухой на гарнир или основное блюдо, 40–50 г на суп." },
      { q: "Полезны ли пророщенные бобовые?", a: "Да, пророщенные маш и чечевица легче усваиваются. Но проращивание требует чистоты: держите ростки в холодильнике и ешьте в течение 2–3 дней. Сырые ростки фасоли есть нельзя." },
    ],
    en: [
      { q: "Why won't my beans soften even after 3 hours?", a: "Most likely the beans are old or the water is very hard, or tomatoes went in too early. Add a pinch of baking soda and keep cooking; next time buy beans with a recent packing date." },
      { q: "Can I skip soaking chickpeas?", a: "You can, but they'll need 2–3 hours and will cook less evenly. In a pressure cooker, unsoaked, about 40–45 minutes." },
      { q: "What can replace tahini in hummus?", a: "A spoon of peanut butter, or olive oil with a pinch of ground sesame. The flavour will differ, but it works." },
      { q: "How many lentils per serving?", a: "60–80 g dried for a side or main, 40–50 g for soup." },
      { q: "Are sprouted pulses good for you?", a: "Yes, sprouted mung beans and lentils are easier to digest. But sprouting needs hygiene: keep sprouts in the fridge and eat within 2–3 days. Never eat raw kidney bean sprouts." },
    ],
    ua: [
      { q: "Чому квасоля не розварюється навіть через 3 години?", a: "Найімовірніше, боби старі або вода дуже жорстка, або в каструлю рано додали томати. Додайте дрібку соди й продовжуйте варити; наступного разу купуйте боби з нещодавньою датою пакування." },
      { q: "Чи можна не замочувати нут?", a: "Можна, але варити доведеться 2–3 години, і він звариться менш рівномірно. У скороварці без замочування — близько 40–45 хвилин." },
      { q: "Чим замінити тахіні в хумусі?", a: "Ложкою арахісової пасти або оливкової олії з дрібкою меленого кунжуту. Смак буде іншим, але хумус вийде." },
      { q: "Скільки сочевиці на порцію?", a: "60–80 г сухої на гарнір чи основну страву, 40–50 г на суп." },
      { q: "Чи корисні пророщені бобові?", a: "Так, пророщені маш і сочевиця легше засвоюються. Але пророщування потребує чистоти: тримайте паростки в холодильнику й їжте протягом 2–3 днів. Сирі паростки квасолі їсти не можна." },
    ],
  },
};
