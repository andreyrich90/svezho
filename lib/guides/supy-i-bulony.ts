import type { Guide } from "./types";

export const guide: Guide = {
  slug: "supy-i-bulony",
  emoji: "🍲",
  image: "/img/guides/supy-i-bulony.webp",
  updated: "2026-09-26",
  title: {
    ru: "Прозрачный бульон и вкусный суп: правила, которые знают повара",
    en: "Clear broth and a great soup: the rules cooks know",
    ua: "Прозорий бульйон і смачний суп: правила, які знають кухарі",
  },
  summary: {
    ru: "Почему бульон мутнеет и как это исправить яичным белком, в какой воде начинать варить мясо, сколько варить курицу и говядину, в каком порядке закладывать овощи, как сохранить яркий цвет борща и сделать шелковистый крем-суп.",
    en: "Why broth turns cloudy and how to clear it with egg white, whether to start meat in cold or hot water, how long to simmer chicken and beef, the order to add vegetables, how to keep borscht bright red and make a silky cream soup.",
    ua: "Чому бульйон каламутніє і як це виправити яєчним білком, у якій воді починати варити м'ясо, скільки варити курку та яловичину, у якому порядку закладати овочі, як зберегти яскравий колір борщу й зробити шовковистий крем-суп.",
  },
  relatedRecipes: ["kurinyy-sup-s-lapshoy", "tomatnyy-krem-sup"],
  sections: {
    ru: [
      {
        heading: "Холодная или горячая вода",
        paragraphs: [
          "Всё зависит от цели. Если вам нужен насыщенный бульон — кладите мясо и кости в холодную воду и нагревайте медленно. Белки и вкус постепенно переходят в воду. Если важнее вкусное, сочное мясо, а бульон вторичен — опускайте мясо в кипяток: поверхность быстро схватится и удержит соки внутри.",
          "Для классического супа почти всегда нужен первый вариант: холодная вода, медленный нагрев.",
        ],
      },
      {
        heading: "Пропорции для бульона",
        paragraphs: [
          "Лучший бульон получается из мяса на кости: кости, хрящи и суставы дают желатин — тот самый насыщенный «липкий» вкус. Чистое филе даёт пустой бульон.",
        ],
        list: [
          "Куриный: 1 кг курицы (спинки, крылья, бёдра) на 2,5 л воды, 1–1,5 часа.",
          "Говяжий: 1 кг говядины на кости на 3 л воды, 3–4 часа.",
          "Свиной: 1 кг рёбер или рульки на 3 л воды, 2–2,5 часа.",
          "Овощной: 1 кг овощей (лук, морковь, сельдерей, корень петрушки, грибные ножки) на 2 л воды, 40–50 минут.",
        ],
        tip: "Разрежьте луковицу пополам и обожгите срезом на сухой сковороде до почти чёрного цвета. Положенная в бульон, она даст золотисто-янтарный цвет и лёгкий карамельный вкус.",
      },
      {
        heading: "Почему бульон мутнеет",
        paragraphs: [
          "Мутность — это мелкие частицы свернувшегося белка и эмульгированный жир. Они появляются в двух случаях: не сняли пену и бульон кипел бурно. Сильное кипение буквально взбивает жир с водой в эмульсию, как майонез.",
          "Правило: как только бульон закипел, снимите всю пену и убавьте огонь до минимума — поверхность должна едва подрагивать, с редкими пузырьками у края. Крышку кладите со щелью.",
        ],
        list: [
          "Снимайте пену до кипения — в момент, когда она поднимается «шапкой».",
          "Солите в конце: соль в начале ускоряет выход белка в воду.",
          "Не мешайте бульон ложкой — это поднимает осадок со дна.",
          "Процеживайте через сито, застеленное марлей или бумажным полотенцем.",
        ],
      },
      {
        heading: "Как осветлить мутный бульон",
        paragraphs: [
          "Помогает старый ресторанный приём — «оттяжка» яичным белком. Белок сворачивается и, как фильтр, собирает на себя все мелкие частицы.",
          "На 2 литра бульона возьмите 1–2 белка. Взбейте их вилкой со стаканом остывшего бульона. Процеженный бульон доведите до лёгкого кипения, влейте белковую смесь, аккуратно перемешайте один раз и больше не трогайте. Держите на минимальном огне 15–20 минут — белок соберётся хлопьями на поверхности. Процедите через марлю.",
        ],
        tip: "Если нужен суп прямо сейчас — просто процедите бульон через сложенное в 4 слоя бумажное полотенце. Это быстрее, хотя и не так идеально.",
      },
      {
        heading: "Когда класть овощи",
        paragraphs: [
          "Овощи для вкуса бульона (лук, морковь, сельдерей) кладите целыми кусками за 40–60 минут до конца и затем выбросьте — они отдали вкус и стали безвкусными. Овощи для супа закладывайте по времени готовности, чтобы все стали мягкими одновременно.",
        ],
        list: [
          "Картофель кубиками — 15–20 минут.",
          "Морковь кружками — 10–15 минут, если не обжаривалась.",
          "Свежая капуста — 10–15 минут; квашеная — 30–40.",
          "Крупы: рис — 15–18 минут, гречка — 15, перловка — отварите отдельно заранее.",
          "Лапша — 5–7 минут; зелень — в самом конце, после выключения огня.",
        ],
        tip: "Лапшу для бульона лучше отварить отдельно и класть прямо в тарелку. В кастрюле она выделяет крахмал, мутит суп и к следующему дню разбухает в кашу.",
      },
      {
        heading: "Зажарка: вкус, который нельзя пропустить",
        paragraphs: [
          "Лук и морковь, обжаренные в масле 7–10 минут до золотистого цвета, дают супу глубину. Пассеровка — это не калории ради калорий: жир растворяет ароматические вещества, которые в воде не раскрываются. Порция — 1 луковица и 1 морковь на 2–2,5 л супа, 2 ст. л. масла.",
          "Добавьте в зажарку 1 ст. л. томатной пасты и прогрейте её 1–2 минуты — сладость станет глубже, а сырой вкус исчезнет.",
        ],
      },
      {
        heading: "Борщ: как сохранить яркий цвет",
        paragraphs: [
          "Красный цвет свёклы — пигмент бетанин. Он разрушается от долгого кипячения и щелочной среды, но устойчив в кислой. Поэтому свёклу тушат отдельно с кислотой и добавляют в конце.",
          "Натрите 1–2 свёклы (300–400 г на 3 л борща), потушите в масле 10–15 минут с 1 ст. л. уксуса 9% или соком половины лимона и 1 ч. л. сахара. Добавьте в почти готовый борщ, доведите до кипения и сразу выключите. Дайте настояться 20–30 минут.",
        ],
        tip: "Если борщ всё-таки побурел — натрите на мелкой тёрке небольшую сырую свёклу, отожмите сок и влейте его в горячий, но не кипящий борщ с каплей лимонного сока.",
      },
      {
        heading: "Крем-суп: шёлковая текстура",
        paragraphs: [
          "Основа — овощи, сваренные до полной мягкости, и немного жидкости. Жидкость лучше добавлять постепенно при пюрировании: разбавить густой суп легко, загустить жидкий — трудно.",
          "Для бархатистости нужен жир: на 1 л супа — 100 мл сливок 20% или 30 г сливочного масла, вмешанного в конце. Для гладкости протрите суп через сито — это разница между «домашним» и «ресторанным».",
          "Горячий суп в стационарном блендере наполняйте не больше чем на треть и придерживайте крышку полотенцем: пар резко расширяется и может выбить крышку.",
        ],
      },
      {
        heading: "Соль и последние штрихи",
        paragraphs: [
          "Средняя норма — 1 ч. л. (6–7 г) соли на литр супа, но солите в конце и пробуйте: бульон уваривается, а колбаса, сыр или квашеная капуста добавляют свою соль.",
          "Если суп кажется «плоским», но соли достаточно — ему не хватает кислоты. Чайная ложка лимонного сока или уксуса на кастрюлю делает вкус ярче. Суп на следующий день вкуснее: ароматы успевают соединиться.",
        ],
        list: [
          "Холодильник — до 3 суток в закрытой кастрюле.",
          "Морозилка — до 3 месяцев (без картофеля и лапши: они становятся ватными).",
          "Остужайте быстро: кастрюлю — в раковину с холодной водой на 20–30 минут.",
        ],
      },
    ],
    en: [
      {
        heading: "Cold or hot water",
        paragraphs: [
          "It depends on what you want. For a rich broth, put the meat and bones into cold water and heat slowly: proteins and flavour gradually move into the liquid. If juicy meat matters more than the broth, drop the meat into boiling water: the surface sets fast and keeps the juices in.",
          "For a classic soup you almost always want the first option: cold water, slow heat.",
        ],
      },
      {
        heading: "Broth ratios",
        paragraphs: [
          "The best broth comes from meat on the bone: bones, cartilage and joints release gelatine — that rich, lip-sticking body. Boneless fillet gives a thin broth.",
        ],
        list: [
          "Chicken: 1 kg chicken (backs, wings, thighs) to 2.5 l water, 1–1.5 hours.",
          "Beef: 1 kg bone-in beef to 3 l water, 3–4 hours.",
          "Pork: 1 kg ribs or hock to 3 l water, 2–2.5 hours.",
          "Vegetable: 1 kg vegetables (onion, carrot, celery, parsley root, mushroom stalks) to 2 l water, 40–50 minutes.",
        ],
        tip: "Halve an onion and char the cut side in a dry pan until almost black. Added to the pot, it gives a golden amber colour and a gentle caramel note.",
      },
      {
        heading: "Why broth turns cloudy",
        paragraphs: [
          "Cloudiness is tiny bits of coagulated protein and emulsified fat. You get it for two reasons: the scum wasn't skimmed, and the broth boiled hard. A rolling boil literally whips fat and water into an emulsion, like mayonnaise.",
          "The rule: as soon as it comes to the boil, skim all the foam and turn the heat right down — the surface should barely tremble, with the odd bubble at the edge. Leave the lid ajar.",
        ],
        list: [
          "Skim before the boil — as the foam rises in a cap.",
          "Salt at the end: salt early speeds up protein leaching into the water.",
          "Don't stir the broth — it lifts the sediment from the bottom.",
          "Strain through a sieve lined with muslin or kitchen paper.",
        ],
      },
      {
        heading: "How to clear a cloudy broth",
        paragraphs: [
          "An old restaurant trick is the egg-white raft. The white coagulates and, like a filter, traps all the fine particles.",
          "For 2 litres of broth take 1–2 egg whites. Whisk them with a glass of cooled broth. Bring the strained broth to a gentle simmer, pour in the egg mixture, stir once and then leave it alone. Keep it on the lowest heat for 15–20 minutes — the white will gather into flakes on the surface. Strain through muslin.",
        ],
        tip: "If you need soup right now, just strain the broth through kitchen paper folded four times. Faster, if not quite as perfect.",
      },
      {
        heading: "When to add vegetables",
        paragraphs: [
          "Vegetables for flavouring the broth (onion, carrot, celery) go in whole 40–60 minutes before the end and then get thrown away — they've given their taste and become bland. Vegetables for the soup go in according to cooking time so everything is tender at once.",
        ],
        list: [
          "Diced potato — 15–20 minutes.",
          "Sliced carrot — 10–15 minutes if not sautéed.",
          "Fresh cabbage — 10–15 minutes; sauerkraut — 30–40.",
          "Grains: rice — 15–18 minutes, buckwheat — 15, pearl barley — cook separately in advance.",
          "Noodles — 5–7 minutes; herbs — at the very end, off the heat.",
        ],
        tip: "Cook noodles for a clear soup separately and add them to the bowl. In the pot they shed starch, cloud the soup and swell into mush by the next day.",
      },
      {
        heading: "The sauté: flavour you shouldn't skip",
        paragraphs: [
          "Onion and carrot cooked in oil for 7–10 minutes until golden give a soup depth. This isn't calories for their own sake: fat dissolves aromatic compounds that don't open up in water. Use 1 onion and 1 carrot per 2–2.5 l of soup and 2 tbsp oil.",
          "Add 1 tbsp tomato paste to the sauté and cook it for 1–2 minutes — the sweetness deepens and the raw taste disappears.",
        ],
      },
      {
        heading: "Borscht: keeping the colour bright",
        paragraphs: [
          "Beetroot's red is the pigment betanin. It breaks down with long boiling and in alkaline conditions but is stable in acid. That's why the beet is stewed separately with acid and added at the end.",
          "Grate 1–2 beetroots (300–400 g for 3 l of borscht) and stew them in oil for 10–15 minutes with 1 tbsp 9% vinegar or the juice of half a lemon and 1 tsp sugar. Add to the nearly finished borscht, bring to the boil and switch off at once. Let it stand for 20–30 minutes.",
        ],
        tip: "If the borscht has turned brown anyway, finely grate a small raw beet, squeeze out the juice and stir it into the hot but not boiling soup with a drop of lemon juice.",
      },
      {
        heading: "Cream soup: a silky texture",
        paragraphs: [
          "The base is vegetables cooked until completely soft plus a little liquid. Add the liquid gradually while blending: thinning a thick soup is easy, thickening a thin one is not.",
          "For velvetiness you need fat: per 1 l of soup, 100 ml of 20% cream or 30 g butter stirred in at the end. For smoothness, push the soup through a sieve — that's the difference between homely and restaurant.",
          "Fill a jug blender no more than a third full with hot soup and hold the lid down with a towel: steam expands suddenly and can blow the lid off.",
        ],
      },
      {
        heading: "Salt and final touches",
        paragraphs: [
          "A typical amount is 1 tsp (6–7 g) of salt per litre of soup, but salt at the end and taste: broth reduces, and sausage, cheese or sauerkraut bring their own salt.",
          "If a soup tastes flat but has enough salt, it's missing acid. A teaspoon of lemon juice or vinegar for the whole pot brightens it. Soup is better the next day, once the flavours have married.",
        ],
        list: [
          "Fridge — up to 3 days in a covered pot.",
          "Freezer — up to 3 months (without potato and noodles: they turn woolly).",
          "Cool it quickly: stand the pot in a sink of cold water for 20–30 minutes.",
        ],
      },
    ],
    ua: [
      {
        heading: "Холодна чи гаряча вода",
        paragraphs: [
          "Усе залежить від мети. Якщо вам потрібен насичений бульйон — кладіть м'ясо й кістки в холодну воду й нагрівайте повільно. Білки й смак поступово переходять у воду. Якщо важливіше смачне, соковите м'ясо, а бульйон другорядний — опускайте м'ясо в окріп: поверхня швидко схопиться й утримає соки всередині.",
          "Для класичного супу майже завжди потрібен перший варіант: холодна вода, повільне нагрівання.",
        ],
      },
      {
        heading: "Пропорції для бульйону",
        paragraphs: [
          "Найкращий бульйон виходить із м'яса на кістці: кістки, хрящі й суглоби дають желатин — той самий насичений «липкий» смак. Чисте філе дає порожній бульйон.",
        ],
        list: [
          "Курячий: 1 кг курки (спинки, крильця, стегна) на 2,5 л води, 1–1,5 години.",
          "Яловичий: 1 кг яловичини на кістці на 3 л води, 3–4 години.",
          "Свинячий: 1 кг реберець або рульки на 3 л води, 2–2,5 години.",
          "Овочевий: 1 кг овочів (цибуля, морква, селера, корінь петрушки, ніжки грибів) на 2 л води, 40–50 хвилин.",
        ],
        tip: "Розріжте цибулину навпіл і обпаліть зрізом на сухій сковороді майже до чорного. Покладена в бульйон, вона дасть золотисто-бурштиновий колір і легкий карамельний смак.",
      },
      {
        heading: "Чому бульйон каламутніє",
        paragraphs: [
          "Каламуть — це дрібні частинки згорнутого білка й емульгований жир. Вони з'являються у двох випадках: не зняли піну й бульйон кипів бурхливо. Сильне кипіння буквально збиває жир із водою в емульсію, як майонез.",
          "Правило: щойно бульйон закипів, зніміть усю піну й зменште вогонь до мінімуму — поверхня має ледь тремтіти, з рідкими бульбашками біля краю. Кришку кладіть зі щілиною.",
        ],
        list: [
          "Знімайте піну до кипіння — тоді, коли вона піднімається «шапкою».",
          "Соліть наприкінці: сіль на початку пришвидшує вихід білка у воду.",
          "Не мішайте бульйон ложкою — це піднімає осад із дна.",
          "Проціджуйте крізь сито, застелене марлею або паперовим рушником.",
        ],
      },
      {
        heading: "Як освітлити каламутний бульйон",
        paragraphs: [
          "Допомагає старий ресторанний прийом — «відтяжка» яєчним білком. Білок згортається і, як фільтр, збирає на себе всі дрібні частинки.",
          "На 2 літри бульйону візьміть 1–2 білки. Збийте їх виделкою зі склянкою охолодженого бульйону. Проціджений бульйон доведіть до легкого кипіння, влийте білкову суміш, обережно перемішайте один раз і більше не чіпайте. Тримайте на мінімальному вогні 15–20 хвилин — білок збереться пластівцями на поверхні. Процідіть крізь марлю.",
        ],
        tip: "Якщо суп потрібен просто зараз — процідіть бульйон крізь складений у 4 шари паперовий рушник. Це швидше, хоча й не так ідеально.",
      },
      {
        heading: "Коли класти овочі",
        paragraphs: [
          "Овочі для смаку бульйону (цибуля, морква, селера) кладіть цілими шматками за 40–60 хвилин до кінця, а потім викиньте — вони віддали смак і стали несмачними. Овочі для супу закладайте за часом готовності, щоб усі стали м'якими одночасно.",
        ],
        list: [
          "Картопля кубиками — 15–20 хвилин.",
          "Морква кружальцями — 10–15 хвилин, якщо не обсмажувалася.",
          "Свіжа капуста — 10–15 хвилин; квашена — 30–40.",
          "Крупи: рис — 15–18 хвилин, гречка — 15, перлова — відваріть окремо заздалегідь.",
          "Локшина — 5–7 хвилин; зелень — у самому кінці, після вимкнення вогню.",
        ],
        tip: "Локшину для бульйону краще відварити окремо й класти просто в тарілку. У каструлі вона виділяє крохмаль, каламутить суп і до наступного дня розбухає в кашу.",
      },
      {
        heading: "Засмажка: смак, який не можна пропустити",
        paragraphs: [
          "Цибуля й морква, обсмажені в олії 7–10 хвилин до золотистого кольору, дають супу глибину. Пасерування — це не калорії заради калорій: жир розчиняє ароматичні речовини, які у воді не розкриваються. Порція — 1 цибулина й 1 морквина на 2–2,5 л супу, 2 ст. л. олії.",
          "Додайте до засмажки 1 ст. л. томатної пасти й прогрійте її 1–2 хвилини — солодкість стане глибшою, а сирий смак зникне.",
        ],
      },
      {
        heading: "Борщ: як зберегти яскравий колір",
        paragraphs: [
          "Червоний колір буряка — пігмент бетанін. Він руйнується від довгого кипіння й лужного середовища, але стійкий у кислому. Тому буряк тушкують окремо з кислотою й додають наприкінці.",
          "Натріть 1–2 буряки (300–400 г на 3 л борщу), потушкуйте в олії 10–15 хвилин з 1 ст. л. оцту 9% або соком половини лимона й 1 ч. л. цукру. Додайте в майже готовий борщ, доведіть до кипіння й одразу вимкніть. Дайте настоятися 20–30 хвилин.",
        ],
        tip: "Якщо борщ усе ж побурів — натріть на дрібній тертці невеликий сирий буряк, відтисніть сік і влийте його в гарячий, але не киплячий борщ із краплею лимонного соку.",
      },
      {
        heading: "Крем-суп: шовкова текстура",
        paragraphs: [
          "Основа — овочі, зварені до повної м'якості, і трохи рідини. Рідину краще додавати поступово під час пюрування: розбавити густий суп легко, загустити рідкий — важко.",
          "Для оксамитовості потрібен жир: на 1 л супу — 100 мл вершків 20% або 30 г вершкового масла, вмішаного наприкінці. Для гладкості протріть суп крізь сито — це різниця між «домашнім» і «ресторанним».",
          "Гарячий суп у стаціонарному блендері наповнюйте не більше ніж на третину й притримуйте кришку рушником: пара різко розширюється й може вибити кришку.",
        ],
      },
      {
        heading: "Сіль і останні штрихи",
        paragraphs: [
          "Середня норма — 1 ч. л. (6–7 г) солі на літр супу, але соліть наприкінці й куштуйте: бульйон уварюється, а ковбаса, сир чи квашена капуста додають свою сіль.",
          "Якщо суп здається «пласким», але солі досить — йому бракує кислоти. Чайна ложка лимонного соку або оцту на каструлю робить смак яскравішим. Суп наступного дня смачніший: аромати встигають поєднатися.",
        ],
        list: [
          "Холодильник — до 3 діб у закритій каструлі.",
          "Морозилка — до 3 місяців (без картоплі й локшини: вони стають ватними).",
          "Остуджуйте швидко: каструлю — в раковину з холодною водою на 20–30 хвилин.",
        ],
      },
    ],
  },
  faq: {
    ru: [
      { q: "Нужно ли сливать первую воду?", a: "Для говяжьих и свиных костей — можно: доведите до кипения, прокипятите 5 минут, слейте, промойте кости и залейте свежей холодной водой. Бульон будет чище. Для курицы достаточно тщательно снимать пену." },
      { q: "Почему суп пересолился, хотя я солил как обычно?", a: "Скорее всего, солили в начале, а бульон уварился на четверть. Солите в последние 10 минут." },
      { q: "Картошка в супе разварилась — почему?", a: "Сорт с высоким содержанием крахмала или слишком мелкая нарезка. Для супов берите желтомясые сорта, режьте кубиком 1,5–2 см и не варите дольше 20 минут." },
      { q: "Можно ли варить бульон в мультиварке?", a: "Да, режим «Тушение» даёт как раз нужное слабое кипение — бульон получается прозрачным. Время то же, что и на плите." },
      { q: "Как снять лишний жир с бульона?", a: "Остудите его в холодильнике: жир застынет коркой, и его легко снять ложкой. Горячий бульон можно промокнуть листом бумажного полотенца по поверхности." },
    ],
    en: [
      { q: "Should I throw away the first water?", a: "For beef and pork bones you can: bring to the boil, boil 5 minutes, drain, rinse the bones and cover with fresh cold water. The broth will be cleaner. For chicken, careful skimming is enough." },
      { q: "Why is my soup too salty when I salted it as usual?", a: "Most likely you salted at the start and the broth reduced by a quarter. Salt in the last 10 minutes." },
      { q: "Why did the potato fall apart?", a: "A floury variety or pieces cut too small. Use waxy, yellow-fleshed potatoes, cut into 1.5–2 cm cubes and don't cook longer than 20 minutes." },
      { q: "Can I make broth in a slow cooker?", a: "Yes — the stew setting gives exactly the gentle simmer you need, and the broth comes out clear. Timing is the same as on the hob." },
      { q: "How do I remove excess fat?", a: "Chill the broth: the fat sets into a crust that lifts off with a spoon. On hot broth, drag a sheet of kitchen paper across the surface." },
    ],
    ua: [
      { q: "Чи треба зливати першу воду?", a: "Для яловичих і свинячих кісток — можна: доведіть до кипіння, прокип'ятіть 5 хвилин, злийте, промийте кістки й залийте свіжою холодною водою. Бульйон буде чистішим. Для курки досить ретельно знімати піну." },
      { q: "Чому суп пересолився, хоча я солив як завжди?", a: "Найімовірніше, солили на початку, а бульйон уварився на чверть. Соліть в останні 10 хвилин." },
      { q: "Картопля в супі розварилася — чому?", a: "Сорт із високим вмістом крохмалю або надто дрібне нарізання. Для супів беріть жовтом'ясі сорти, ріжте кубиком 1,5–2 см і не варіть довше за 20 хвилин." },
      { q: "Чи можна варити бульйон у мультиварці?", a: "Так, режим «Тушкування» дає саме потрібне слабке кипіння — бульйон виходить прозорим. Час той самий, що й на плиті." },
      { q: "Як зняти зайвий жир із бульйону?", a: "Охолодіть його в холодильнику: жир застигне кіркою, і його легко зняти ложкою. Гарячий бульйон можна промокнути аркушем паперового рушника по поверхні." },
    ],
  },
};
