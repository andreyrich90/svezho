import type { Guide } from "./types";

export const guide: Guide = {
  slug: "domashnie-zagotovki",
  emoji: "🫙",
  updated: "2026-09-26",
  title: {
    ru: "Домашние заготовки: хрустящие огурцы, квашеная капуста и варенье без ошибок",
    en: "Home preserving: crunchy pickles, sauerkraut and jam without mistakes",
    ua: "Домашні заготовки: хрусткі огірки, квашена капуста й варення без помилок",
  },
  summary: {
    ru: "Как простерилизовать банки в духовке, точные пропорции маринада и рассола, почему огурцы получаются мягкими, сколько соли нужно на килограмм капусты и как понять, что варенье готово. Отдельно — правила безопасности: какие продукты нельзя закатывать дома и что делать со вздувшейся крышкой.",
    en: "How to sterilise jars in the oven, exact ratios for pickling liquid and brine, why pickles go soft, how much salt per kilo of cabbage, and how to tell when jam is set. Plus the safety rules: what must never be home-canned and what to do with a bulging lid.",
    ua: "Як простерилізувати банки в духовці, точні пропорції маринаду й розсолу, чому огірки виходять м'якими, скільки солі потрібно на кілограм капусти й як зрозуміти, що варення готове. Окремо — правила безпеки: які продукти не можна закривати вдома й що робити зі здутою кришкою.",
  },
  sections: {
    ru: [
      {
        heading: "Три способа сохранить урожай",
        paragraphs: [
          "Маринование — консервирование кислотой: уксус создаёт среду, в которой бактерии не размножаются. Огурцы, помидоры, перец, кабачки в маринаде хранятся год при комнатной температуре.",
          "Квашение и соление — молочнокислое брожение: соль подавляет вредные бактерии, а полезные молочнокислые превращают сахар овощей в молочную кислоту. Так делают квашеную капусту, солёные огурцы, мочёные яблоки. Хранят в прохладе.",
          "Варенье и джем — консервирование сахаром: высокая концентрация сахара забирает у микробов воду. Классика — 1 кг сахара на 1 кг ягод.",
        ],
      },
      {
        heading: "Стерилизация банок",
        paragraphs: [
          "Банки вымойте с содой (без моющих средств — они плохо смываются), проверьте, нет ли сколов на горлышке: такая банка не закроется герметично.",
        ],
        list: [
          "Духовка — удобнее всего, можно сразу много банок: поставьте мокрые банки горлышком вверх в холодную духовку, нагрейте до 120–150 °C и держите 15 минут. Выключите и оставьте остывать внутри.",
          "Над паром: банку горлышком вниз на специальную насадку над кипящей водой — 10–15 минут для литровых банок.",
          "Микроволновка: налейте в банку 2–3 см воды и включите на полную мощность на 3–4 минуты — вода закипит, и банка простерилизуется паром.",
          "Крышки: прокипятите 5 минут в кастрюле.",
        ],
        tip: "Горячий продукт раскладывайте в горячие банки, холодный — в остывшие. Резкий перепад температуры — главная причина, по которой лопаются банки.",
      },
      {
        heading: "Маринованные огурцы: пропорции",
        paragraphs: [
          "Огурцы берите небольшие, плотные, с тёмными пупырышками — это засолочные сорта. Салатные с гладкой кожицей после маринования становятся мягкими. Замочите огурцы в холодной воде на 3–4 часа: они наберут влагу и останутся хрустящими.",
          "В каждую литровую банку: зонтик укропа, 2–3 зубчика чеснока, лист хрена или смородины, 3–4 горошины чёрного перца, лавровый лист.",
        ],
        list: [
          "Маринад на 1 литр воды:",
          "2 ст. л. соли без горки (около 50 г) — только каменной, не йодированной",
          "2–3 ст. л. сахара",
          "100 мл уксуса 9% (или 1 ч. л. уксусной эссенции 70% на литровую банку)",
          "На литровую банку уходит примерно 400–500 мл маринада.",
        ],
        tip: "Секрет хрусткости — дубильные вещества: листья хрена, дуба, вишни или смородины. И не передерживайте огурцы в кипятке — они должны только прогреться.",
      },
      {
        heading: "Метод тройной заливки",
        paragraphs: [
          "Этот способ позволяет закрыть огурцы и помидоры без стерилизации уже заполненных банок в кастрюле.",
        ],
        list: [
          "Разложите овощи и специи в стерильные банки. Залейте кипятком, накройте крышками и оставьте на 10 минут.",
          "Слейте воду в кастрюлю, снова доведите до кипения и залейте банки ещё раз на 10 минут.",
          "Слейте воду, добавьте в неё соль и сахар, доведите до кипения. В банки влейте уксус и сразу — кипящий маринад до самого края.",
          "Закатайте, переверните вверх дном и укутайте одеялом до полного остывания — сутки.",
        ],
      },
      {
        heading: "Малосольные огурцы за сутки",
        paragraphs: [
          "Это не консервы, а быстрая закуска: хранятся в холодильнике до недели.",
          "Рассол: 1 литр воды, 2 ст. л. соли без горки. Огурцы с обрезанными кончиками плотно уложите в банку или кастрюлю с укропом, чесноком, листьями хрена и смородины. Залейте холодным рассолом — огурцы будут готовы через 2–3 дня; горячим — через 12–24 часа. Оставьте при комнатной температуре, затем уберите в холодильник.",
        ],
        tip: "Самый быстрый способ — в пакете: огурцы, 1 ч. л. соли на 500 г, чеснок, укроп. Завяжите, встряхните и оставьте на 4–6 часов в холодильнике. Хрустящие малосольные к ужину.",
      },
      {
        heading: "Квашеная капуста",
        paragraphs: [
          "Главное число — 2% соли от веса капусты: 20 г (1 ст. л. с небольшой горкой) на 1 кг нашинкованной капусты. Меньше — капуста может закиснуть и размякнуть, больше — брожение замедлится и она будет солёной.",
          "Нашинкуйте капусту, добавьте 1 тёртую морковь на 1 кг и соль. Перетрите руками 1–2 минуты, пока капуста не пустит сок. Плотно утрамбуйте в банку так, чтобы сок полностью покрыл капусту. Оставьте 2–3 см свободными сверху — при брожении сок поднимается.",
          "Держите при 18–22 °C 3–5 дней. Каждый день протыкайте капусту до дна деревянной палочкой в нескольких местах, выпуская газ, — иначе появится горечь. Когда брожение утихнет и капуста станет приятно кислой — уберите в холод.",
        ],
        tip: "Белая плёнка на поверхности — это дрожжи, её просто снимают. А вот пушистая плесень или неприятный гнилостный запах означают, что заготовка испорчена.",
      },
      {
        heading: "Варенье и джем",
        paragraphs: [
          "Классическое соотношение — 1:1 по весу ягод и сахара. Такое варенье хранится в кладовке год. Если хотите меньше сахара (1:0,5), храните в холодильнике или используйте загуститель с пектином по инструкции на упаковке.",
          "Для целых ягод в сиропе засыпьте их сахаром на 4–6 часов, чтобы пустили сок, затем варите в 2–3 приёма по 5 минут с перерывами на остывание по несколько часов. Ягоды пропитаются сиропом и не разварятся. Пена собирает примеси — снимайте её.",
        ],
        list: [
          "Проверка «блюдцем»: капните варенье на холодное блюдце из морозилки и подождите 30 секунд. Если капля не растекается, а при нажатии пальцем морщится — готово.",
          "Раскладывайте горячим в горячие банки до самого края и сразу закрывайте.",
          "Лимонный сок (1 ст. л. на 1 кг ягод) сохраняет цвет и помогает загустеть.",
        ],
      },
      {
        heading: "Безопасность: главное правило",
        paragraphs: [
          "Самая серьёзная опасность домашних консервов — ботулизм. Его бактерии живут в почве и размножаются без кислорода, в среде с низкой кислотностью. В плотно закрытой банке они выделяют токсин, который не имеет ни запаха, ни вкуса и смертельно опасен.",
          "Маринады с уксусом, квашеная капуста и варенье с достаточным количеством сахара для ботулизма непригодны. Опасны низкокислотные продукты, закатанные герметично без промышленного автоклава.",
        ],
        list: [
          "Не закатывайте герметично дома: грибы, мясо, рыбу, горох и фасоль, овощи без уксуса.",
          "Грибы маринуйте с уксусом и храните в холодильнике под капроновой крышкой.",
          "Чеснок или травы в масле храните только в холодильнике и не дольше недели.",
          "Не уменьшайте количество уксуса в проверенном рецепте.",
        ],
        tip: "Вздувшаяся крышка («бомбаж»), помутневший рассол с пузырьками, струя газа при открытии — такую банку выбрасывайте целиком, не пробуя. Кипячение не гарантирует уничтожения токсина.",
      },
      {
        heading: "Как хранить",
        paragraphs: [
          "Закатанные банки храните в тёмном прохладном месте — 5–15 °C, кладовка или погреб. Маринады и варенье — до года, дольше вкус ухудшается. Квашеную капусту и солёные огурцы — при 0–5 °C, в холодильнике или погребе, до 6 месяцев.",
          "Подпишите банки: что внутри и дата. Через месяц все банки с огурцами одинаковые.",
          "Открытую банку храните в холодильнике: маринады — до 2 недель, варенье — до месяца. Набирайте чистой сухой ложкой, чтобы не занести плесень.",
        ],
      },
    ],
    en: [
      {
        heading: "Three ways to preserve a harvest",
        paragraphs: [
          "Pickling in vinegar preserves with acid: vinegar creates an environment where bacteria can't grow. Cucumbers, tomatoes, peppers and courgettes pickled in vinegar keep for a year at room temperature.",
          "Fermenting and brining rely on lactic acid fermentation: salt suppresses harmful bacteria while beneficial lactic bacteria turn the vegetables' sugar into lactic acid. That's how sauerkraut, brined cucumbers and pickled apples are made. They're kept cool.",
          "Jam and preserves use sugar: a high concentration draws water away from microbes. The classic is 1 kg sugar per 1 kg fruit.",
        ],
      },
      {
        heading: "Sterilising jars",
        paragraphs: [
          "Wash jars with baking soda (not washing-up liquid — it's hard to rinse off) and check the rims for chips: a chipped jar won't seal.",
        ],
        list: [
          "Oven — easiest, and many jars at once: put wet jars upright into a cold oven, heat to 120–150 °C and hold for 15 minutes. Switch off and let them cool inside.",
          "Over steam: a jar upside down on a special rack over boiling water — 10–15 minutes for litre jars.",
          "Microwave: pour 2–3 cm of water into the jar and heat on full power for 3–4 minutes — the water boils and steam sterilises the jar.",
          "Lids: boil for 5 minutes in a pan.",
        ],
        tip: "Hot food into hot jars, cold food into cool ones. A sudden temperature shock is the main reason jars crack.",
      },
      {
        heading: "Pickled cucumbers: the ratio",
        paragraphs: [
          "Choose small, firm cucumbers with dark bumps — pickling varieties. Smooth salad cucumbers go soft. Soak the cucumbers in cold water for 3–4 hours: they take on water and stay crunchy.",
          "In each litre jar: a dill head, 2–3 garlic cloves, a horseradish or blackcurrant leaf, 3–4 black peppercorns, a bay leaf.",
        ],
        list: [
          "Pickling liquid per 1 litre of water:",
          "2 level tbsp salt (about 50 g) — rock salt only, not iodised",
          "2–3 tbsp sugar",
          "100 ml 9% vinegar (or 1 tsp 70% vinegar essence per litre jar)",
          "A litre jar takes roughly 400–500 ml of liquid.",
        ],
        tip: "The secret of crunch is tannins: horseradish, oak, cherry or blackcurrant leaves. And don't leave the cucumbers in boiling water too long — they should only heat through.",
      },
      {
        heading: "The triple-pour method",
        paragraphs: [
          "This method seals cucumbers and tomatoes without processing the filled jars in a water bath.",
        ],
        list: [
          "Pack the vegetables and spices into sterile jars. Fill with boiling water, cover with lids and leave for 10 minutes.",
          "Pour the water into a pan, bring back to the boil and pour over the jars again for 10 minutes.",
          "Pour off the water, add the salt and sugar and bring to the boil. Add the vinegar to the jars and immediately fill to the brim with the boiling liquid.",
          "Seal, turn upside down and wrap in a blanket until completely cool — a full day.",
        ],
      },
      {
        heading: "Quick half-sour cucumbers in a day",
        paragraphs: [
          "These aren't preserves but a quick snack: they keep in the fridge for up to a week.",
          "Brine: 1 litre water, 2 level tbsp salt. Pack cucumbers with the ends trimmed tightly into a jar or pan with dill, garlic, horseradish and blackcurrant leaves. With cold brine they're ready in 2–3 days; with hot brine in 12–24 hours. Leave at room temperature, then move to the fridge.",
        ],
        tip: "Fastest of all is in a bag: cucumbers, 1 tsp salt per 500 g, garlic, dill. Tie it up, shake and leave in the fridge for 4–6 hours. Crunchy pickles by dinner.",
      },
      {
        heading: "Sauerkraut",
        paragraphs: [
          "The key number is 2% salt by weight of cabbage: 20 g (a heaped tablespoon) per 1 kg of shredded cabbage. Less and the cabbage can go soft and sour off; more and fermentation slows and it tastes salty.",
          "Shred the cabbage, add 1 grated carrot per 1 kg and the salt. Squeeze with your hands for 1–2 minutes until the cabbage releases juice. Pack tightly into a jar so the juice covers the cabbage completely. Leave 2–3 cm of headspace — the juice rises during fermentation.",
          "Keep at 18–22 °C for 3–5 days. Every day, poke the cabbage to the bottom in several places with a wooden stick to release gas — otherwise it turns bitter. When fermentation calms down and the cabbage is pleasantly sour, move it somewhere cold.",
        ],
        tip: "A white film on the surface is yeast — just skim it off. Fuzzy mould or a rotten smell, though, means the batch has spoiled.",
      },
      {
        heading: "Jam and preserves",
        paragraphs: [
          "The classic ratio is 1:1 by weight of fruit and sugar. Jam like this keeps in the cupboard for a year. If you want less sugar (1:0.5), keep it in the fridge or use a pectin setting agent as the pack directs.",
          "For whole berries in syrup, cover them with sugar for 4–6 hours to release juice, then cook in 2–3 stages of 5 minutes, cooling for a few hours in between. The berries soak up syrup and don't fall apart. Skim off the foam — it collects impurities.",
        ],
        list: [
          "The saucer test: drop some jam onto a saucer chilled in the freezer and wait 30 seconds. If it doesn't run and wrinkles when pushed with a finger, it's set.",
          "Pour it hot into hot jars right to the brim and seal immediately.",
          "Lemon juice (1 tbsp per 1 kg fruit) keeps the colour and helps it set.",
        ],
      },
      {
        heading: "Safety: the main rule",
        paragraphs: [
          "The most serious danger in home preserves is botulism. The bacteria live in soil and multiply without oxygen in low-acid conditions. In a sealed jar they produce a toxin with no smell or taste that can be fatal.",
          "Vinegar pickles, sauerkraut and jam with enough sugar are unsuitable for botulism. The danger is low-acid foods sealed airtight without an industrial pressure canner.",
        ],
        list: [
          "Don't seal at home: mushrooms, meat, fish, peas and beans, vegetables without vinegar.",
          "Pickle mushrooms with vinegar and keep them in the fridge under a plastic lid.",
          "Keep garlic or herbs in oil only in the fridge and for no more than a week.",
          "Don't reduce the vinegar in a tested recipe.",
        ],
        tip: "A bulging lid, cloudy liquid with bubbles, a hiss of gas on opening — throw the whole jar away without tasting. Boiling doesn't guarantee the toxin is destroyed.",
      },
      {
        heading: "How to store",
        paragraphs: [
          "Keep sealed jars somewhere dark and cool — 5–15 °C, a pantry or cellar. Pickles and jam keep up to a year; after that the taste declines. Sauerkraut and brined cucumbers keep at 0–5 °C, in the fridge or cellar, for up to 6 months.",
          "Label the jars with the contents and date. After a month all jars of cucumbers look the same.",
          "Keep an opened jar in the fridge: pickles up to 2 weeks, jam up to a month. Use a clean, dry spoon so you don't introduce mould.",
        ],
      },
    ],
    ua: [
      {
        heading: "Три способи зберегти врожай",
        paragraphs: [
          "Маринування — консервування кислотою: оцет створює середовище, у якому бактерії не розмножуються. Огірки, помідори, перець, кабачки в маринаді зберігаються рік за кімнатної температури.",
          "Квашення й соління — молочнокисле бродіння: сіль пригнічує шкідливі бактерії, а корисні молочнокислі перетворюють цукор овочів на молочну кислоту. Так роблять квашену капусту, солоні огірки, мочені яблука. Зберігають у прохолоді.",
          "Варення й джем — консервування цукром: висока концентрація цукру забирає в мікробів воду. Класика — 1 кг цукру на 1 кг ягід.",
        ],
      },
      {
        heading: "Стерилізація банок",
        paragraphs: [
          "Банки вимийте із содою (без мийних засобів — вони погано змиваються), перевірте, чи немає сколів на шийці: така банка не закриється герметично.",
        ],
        list: [
          "Духовка — найзручніше, можна одразу багато банок: поставте мокрі банки шийкою догори в холодну духовку, нагрійте до 120–150 °C і тримайте 15 хвилин. Вимкніть і залиште охолонути всередині.",
          "Над парою: банку шийкою донизу на спеціальну насадку над киплячою водою — 10–15 хвилин для літрових банок.",
          "Мікрохвильовка: налийте в банку 2–3 см води й увімкніть на повну потужність на 3–4 хвилини — вода закипить, і банка простерилізується парою.",
          "Кришки: прокип'ятіть 5 хвилин у каструлі.",
        ],
        tip: "Гарячий продукт розкладайте в гарячі банки, холодний — в охололі. Різкий перепад температури — головна причина, через яку банки лускають.",
      },
      {
        heading: "Мариновані огірки: пропорції",
        paragraphs: [
          "Огірки беріть невеликі, щільні, з темними пухирцями — це засолювальні сорти. Салатні з гладенькою шкіркою після маринування стають м'якими. Замочіть огірки в холодній воді на 3–4 години: вони наберуть вологу й лишаться хрусткими.",
          "У кожну літрову банку: парасолька кропу, 2–3 зубчики часнику, лист хрону чи смородини, 3–4 горошини чорного перцю, лавровий лист.",
        ],
        list: [
          "Маринад на 1 літр води:",
          "2 ст. л. солі без гірки (близько 50 г) — лише кам'яної, не йодованої",
          "2–3 ст. л. цукру",
          "100 мл оцту 9% (або 1 ч. л. оцтової есенції 70% на літрову банку)",
          "На літрову банку йде приблизно 400–500 мл маринаду.",
        ],
        tip: "Секрет хрусткості — дубильні речовини: листя хрону, дуба, вишні або смородини. І не передержуйте огірки в окропі — вони мають лише прогрітися.",
      },
      {
        heading: "Метод потрійного заливання",
        paragraphs: [
          "Цей спосіб дає змогу закрити огірки й помідори без стерилізації вже заповнених банок у каструлі.",
        ],
        list: [
          "Розкладіть овочі й спеції в стерильні банки. Залийте окропом, накрийте кришками й залиште на 10 хвилин.",
          "Злийте воду в каструлю, знову доведіть до кипіння й залийте банки ще раз на 10 хвилин.",
          "Злийте воду, додайте до неї сіль і цукор, доведіть до кипіння. У банки влийте оцет і одразу — киплячий маринад до самого краю.",
          "Закатайте, переверніть догори дном і вкутайте ковдрою до повного охолодження — на добу.",
        ],
      },
      {
        heading: "Малосольні огірки за добу",
        paragraphs: [
          "Це не консерви, а швидка закуска: зберігаються в холодильнику до тижня.",
          "Розсіл: 1 літр води, 2 ст. л. солі без гірки. Огірки з обрізаними кінчиками щільно укладіть у банку або каструлю з кропом, часником, листям хрону й смородини. Залийте холодним розсолом — огірки будуть готові за 2–3 дні; гарячим — за 12–24 години. Залиште за кімнатної температури, потім приберіть у холодильник.",
        ],
        tip: "Найшвидший спосіб — у пакеті: огірки, 1 ч. л. солі на 500 г, часник, кріп. Зав'яжіть, струсніть і залиште на 4–6 годин у холодильнику. Хрусткі малосольні до вечері.",
      },
      {
        heading: "Квашена капуста",
        paragraphs: [
          "Головне число — 2% солі від ваги капусти: 20 г (1 ст. л. з невеликою гіркою) на 1 кг нашаткованої капусти. Менше — капуста може закиснути й розм'якнути, більше — бродіння сповільниться, і вона буде солоною.",
          "Нашаткуйте капусту, додайте 1 терту моркву на 1 кг і сіль. Перетріть руками 1–2 хвилини, доки капуста не пустить сік. Щільно утрамбуйте в банку так, щоб сік повністю вкрив капусту. Залиште 2–3 см вільними зверху — під час бродіння сік піднімається.",
          "Тримайте за 18–22 °C 3–5 днів. Щодня проколюйте капусту до дна дерев'яною паличкою в кількох місцях, випускаючи газ, — інакше з'явиться гіркота. Коли бродіння вщухне й капуста стане приємно кислою — приберіть у холод.",
        ],
        tip: "Біла плівка на поверхні — це дріжджі, її просто знімають. А от пухнаста цвіль або неприємний гнильний запах означають, що заготовка зіпсована.",
      },
      {
        heading: "Варення й джем",
        paragraphs: [
          "Класичне співвідношення — 1:1 за вагою ягід і цукру. Таке варення зберігається в коморі рік. Якщо хочете менше цукру (1:0,5), зберігайте в холодильнику або використовуйте загусник із пектином за інструкцією на упаковці.",
          "Для цілих ягід у сиропі засипте їх цукром на 4–6 годин, щоб пустили сік, потім варіть у 2–3 заходи по 5 хвилин із перервами на охолодження по кілька годин. Ягоди просякнуть сиропом і не розваряться. Піна збирає домішки — знімайте її.",
        ],
        list: [
          "Перевірка «блюдцем»: капніть варення на холодне блюдце з морозилки й зачекайте 30 секунд. Якщо крапля не розтікається, а від натискання пальцем зморщується — готово.",
          "Розкладайте гарячим у гарячі банки до самого краю й одразу закривайте.",
          "Лимонний сік (1 ст. л. на 1 кг ягід) зберігає колір і допомагає загуснути.",
        ],
      },
      {
        heading: "Безпека: головне правило",
        paragraphs: [
          "Найсерйозніша небезпека домашніх консервів — ботулізм. Його бактерії живуть у ґрунті й розмножуються без кисню, у середовищі з низькою кислотністю. У щільно закритій банці вони виділяють токсин, який не має ні запаху, ні смаку й смертельно небезпечний.",
          "Маринади з оцтом, квашена капуста й варення з достатньою кількістю цукру для ботулізму непридатні. Небезпечні низькокислотні продукти, закриті герметично без промислового автоклава.",
        ],
        list: [
          "Не закривайте герметично вдома: гриби, м'ясо, рибу, горох і квасолю, овочі без оцту.",
          "Гриби маринуйте з оцтом і зберігайте в холодильнику під капроновою кришкою.",
          "Часник або трави в олії зберігайте лише в холодильнику й не довше тижня.",
          "Не зменшуйте кількість оцту в перевіреному рецепті.",
        ],
        tip: "Здута кришка («бомбаж»), каламутний розсіл із бульбашками, струмінь газу під час відкривання — таку банку викидайте повністю, не куштуючи. Кип'ятіння не гарантує знищення токсину.",
      },
      {
        heading: "Як зберігати",
        paragraphs: [
          "Закриті банки зберігайте в темному прохолодному місці — 5–15 °C, комора або льох. Маринади й варення — до року, довше смак погіршується. Квашену капусту й солоні огірки — за 0–5 °C, у холодильнику або льоху, до 6 місяців.",
          "Підпишіть банки: що всередині й дата. За місяць усі банки з огірками однакові.",
          "Відкриту банку зберігайте в холодильнику: маринади — до 2 тижнів, варення — до місяця. Набирайте чистою сухою ложкою, щоб не занести цвіль.",
        ],
      },
    ],
  },
  faq: {
    ru: [
      { q: "Почему маринованные огурцы получились мягкими?", a: "Чаще всего — салатный сорт, несвежие огурцы, йодированная соль или перегрев. Берите засолочные огурцы, замачивайте их перед закаткой и добавляйте листья хрена или дуба." },
      { q: "Почему помутнел рассол в огурцах?", a: "В маринованных огурцах с уксусом — признак порчи: банку лучше выбросить. В солёных без уксуса (бочковых) лёгкая мутность — нормальный результат брожения." },
      { q: "Можно ли заменить уксус лимонной кислотой?", a: "Да: 1 ч. л. лимонной кислоты примерно заменяет 100 мл уксуса 9%. Вкус будет мягче." },
      { q: "Почему варенье засахарилось?", a: "Слишком много сахара или его переварили. Прогрейте банку на водяной бане с ложкой лимонного сока — кристаллы растворятся. В следующий раз добавьте лимонный сок при варке." },
      { q: "Можно ли вместо заготовок просто заморозить?", a: "Да, и для многих продуктов это даже лучше: ягоды, зелень, перец, кабачки для рагу отлично переносят заморозку и сохраняют больше витаминов. Подробнее — в нашей статье о хранении и заморозке." },
    ],
    en: [
      { q: "Why did my pickled cucumbers go soft?", a: "Usually a salad variety, stale cucumbers, iodised salt or overheating. Use pickling cucumbers, soak them before jarring and add horseradish or oak leaves." },
      { q: "Why has the pickling liquid gone cloudy?", a: "In vinegar pickles it's a sign of spoilage: better throw the jar away. In fermented (barrel-style) pickles without vinegar, slight cloudiness is a normal result of fermentation." },
      { q: "Can I use citric acid instead of vinegar?", a: "Yes: 1 tsp citric acid roughly replaces 100 ml 9% vinegar. The taste will be milder." },
      { q: "Why has my jam crystallised?", a: "Too much sugar or it was overcooked. Warm the jar in a water bath with a spoon of lemon juice and the crystals will dissolve. Next time add lemon juice while cooking." },
      { q: "Can I just freeze instead of preserving?", a: "Yes, and for many foods it's even better: berries, herbs, peppers and courgettes for stews freeze well and keep more vitamins. See our article on storage and freezing." },
    ],
    ua: [
      { q: "Чому мариновані огірки вийшли м'якими?", a: "Найчастіше — салатний сорт, несвіжі огірки, йодована сіль або перегрів. Беріть засолювальні огірки, замочуйте їх перед закриванням і додавайте листя хрону чи дуба." },
      { q: "Чому розсіл в огірках скаламутнів?", a: "У маринованих огірках з оцтом — ознака псування: банку краще викинути. У солоних без оцту (бочкових) легка каламуть — нормальний результат бродіння." },
      { q: "Чи можна замінити оцет лимонною кислотою?", a: "Так: 1 ч. л. лимонної кислоти приблизно замінює 100 мл оцту 9%. Смак буде м'якшим." },
      { q: "Чому варення зацукрувалося?", a: "Забагато цукру або його переварили. Прогрійте банку на водяній бані з ложкою лимонного соку — кристали розчиняться. Наступного разу додайте лимонний сік під час варіння." },
      { q: "Чи можна замість заготовок просто заморозити?", a: "Так, і для багатьох продуктів це навіть краще: ягоди, зелень, перець, кабачки для рагу чудово переносять заморожування й зберігають більше вітамінів. Докладніше — у нашій статті про зберігання й заморожування." },
    ],
  },
};
