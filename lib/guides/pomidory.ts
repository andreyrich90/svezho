import type { Guide } from "./types";

export const guide: Guide = {
  slug: "pomidory",
  emoji: "🍅",
  updated: "2026-09-27",
  title: {
    ru: "Помидоры: как выбрать вкусные, снять кожицу, сварить соус и завялить",
    en: "Tomatoes: how to pick tasty ones, peel them, make sauce and dry them",
    ua: "Помідори: як вибрати смачні, зняти шкірку, зварити соус і зав'ялити",
  },
  summary: {
    ru: "Какие томаты для салата, соуса и запекания, почему помидорам не место в холодильнике, как снять кожицу за минуту, томатный соус из свежих и консервированных томатов, запечённые черри, вяленые томаты в духовке и что делать с зелёными.",
    en: "Which tomatoes for salad, sauce and roasting, why tomatoes don't belong in the fridge, how to peel them in a minute, sauce from fresh and tinned tomatoes, roasted cherry tomatoes, oven-dried tomatoes and what to do with green ones.",
    ua: "Які томати для салату, соусу й запікання, чому помідорам не місце в холодильнику, як зняти шкірку за хвилину, томатний соус зі свіжих і консервованих томатів, запечені чері, в'ялені томати в духовці й що робити із зеленими.",
  },
  relatedRecipes: ["shakshuka", "tomatnyy-krem-sup", "pasta-s-tomatami-i-bazilikom", "salat-kapreze"],
  sections: {
    ru: [
      {
        heading: "Какой томат для чего",
        paragraphs: [
          "Все помидоры можно есть и варить, но у разных сортов разное соотношение мякоти, сока и семян.",
        ],
        list: [
          "Черри и коктейльные — самые сладкие, стабильно вкусные даже зимой: салаты, запекание, паста.",
          "Сливовидные («сливки», рома, сан-марцано) — много мякоти, мало сока и семян: соусы, запекание, вяление.",
          "Крупные мясистые (бычье сердце, розовые) — сочные и ароматные: салаты, бутерброды, гаспачо.",
          "Круглые красные среднего размера — универсальные, но зимой часто безвкусные.",
        ],
        tip: "Понюхайте помидор у плодоножки: спелый пахнет томатной ботвой и сладостью. Если запаха нет — вкуса, скорее всего, тоже не будет.",
      },
      {
        heading: "Почему не в холодильник",
        paragraphs: [
          "При температуре ниже 10–12 °C в помидорах останавливается выработка ароматических веществ, а мякоть становится мучнистой. Холодильник отнимает у томата именно то, ради чего его покупают.",
          "Храните помидоры при комнатной температуре, плодоножкой вниз, вдали от солнца. Недозрелые дозреют за 2–4 дня — быстрее рядом с бананом или яблоком. В холодильник убирайте только разрезанные или очень переспелые, а перед едой дайте им согреться.",
        ],
      },
      {
        heading: "Как снять кожицу за минуту",
        paragraphs: [
          "Кожица в соусах и супах скручивается жёсткими трубочками, поэтому её часто снимают.",
        ],
        list: [
          "Сделайте крестообразный надрез на попке помидора.",
          "Опустите в кипящую воду на 20–30 секунд, пока края надреза не начнут отгибаться.",
          "Сразу переложите в ледяную воду на минуту.",
          "Кожица снимется пальцами одним движением.",
          "Для соуса можно проще: разрежьте томат пополам и натрите мякотью на крупной тёрке — кожица останется в руке.",
        ],
      },
      {
        heading: "Салат из помидоров: секрет вкуса",
        paragraphs: [
          "Нарежьте помидоры, посолите и оставьте на 10–15 минут. Соль вытянет сок и сделает вкус ярче. Сок не выливайте — это основа заправки: добавьте к нему оливковое масло, каплю уксуса и перец.",
          "Режьте помидоры острым или зубчатым ножом, чтобы не давить мякоть. И собирайте салат прямо перед подачей: заправленные помидоры быстро пускают сок.",
        ],
      },
      {
        heading: "Томатный соус: свежие или консервированные",
        paragraphs: [
          "Летом, когда томаты сладкие, соус из свежих бесподобен. Остальную часть года консервированные томаты в собственном соку часто вкуснее: их собирают спелыми и закрывают в тот же день.",
          "Базовый соус: прогрейте 3 ст. л. оливкового масла с 3 раздавленными зубчиками чеснока, добавьте 800 г томатов (очищенных свежих или консервированных, размятых руками), соль и щепотку сахара, если томаты кислые. Томите на слабом огне 20–30 минут, в конце добавьте базилик.",
        ],
        list: [
          "Ложка томатной пасты, обжаренной в масле 1–2 минуты, добавляет соусу глубины.",
          "Кусочек сливочного масла в конце делает соус бархатным.",
          "Долгое томление (1–2 часа) — для рагу и болоньезе; для пасты хватит 20 минут, чтобы вкус остался свежим.",
        ],
      },
      {
        heading: "Запечённые черри",
        paragraphs: [
          "Самый простой способ сделать безвкусные зимние томаты вкусными. Выложите черри на противень, полейте маслом, посолите, добавьте чеснок и тимьян.",
          "Запекайте при 200 °C 15–20 минут, пока кожица не полопается и соки не начнут карамелизоваться. Подавайте с пастой, на тостах с рикоттой, с рыбой или просто с хлебом.",
        ],
      },
      {
        heading: "Вяленые томаты в духовке",
        paragraphs: [
          "Для вяления лучше всего сливовидные томаты. Разрежьте их пополам вдоль, удалите семена ложкой, выложите срезом вверх, посолите, посыпьте сахаром (щепотка на половинку) и сушёными травами.",
          "Сушите при 90–100 °C с приоткрытой дверцей 4–6 часов, пока томаты не станут кожистыми, но ещё гибкими. Переложите в банку, залейте оливковым маслом с чесноком и розмарином. Хранятся в холодильнике до месяца.",
        ],
        tip: "Масло из-под вяленых томатов не выбрасывайте — это готовая заправка для салата и пасты.",
      },
      {
        heading: "Зелёные помидоры",
        paragraphs: [
          "Совсем зелёные томаты содержат соланин и не годятся в сыром виде в больших количествах, но после термообработки и засолки они вкусны.",
        ],
        list: [
          "Жареные: кружки 1 см в кукурузной муке, по 2–3 минуты с каждой стороны.",
          "Квашеные или маринованные с чесноком, укропом и острым перцем.",
          "Зелёный томатный чатни с яблоком и луком — к мясу и сыру.",
          "Дозаривание: бурые и молочные томаты дозреют дома в коробке с бумагой за 1–2 недели.",
        ],
      },
    ],
    en: [
      {
        heading: "Which tomato for what",
        paragraphs: [
          "All tomatoes can be eaten raw or cooked, but varieties differ in their balance of flesh, juice and seeds.",
        ],
        list: [
          "Cherry and cocktail — the sweetest and reliably tasty even in winter: salads, roasting, pasta.",
          "Plum (roma, San Marzano) — lots of flesh, little juice and few seeds: sauces, roasting, drying.",
          "Large beefsteak and heirloom — juicy and aromatic: salads, sandwiches, gazpacho.",
          "Round medium red — all-purpose, but often bland in winter.",
        ],
        tip: "Smell the tomato at the stem: a ripe one smells of tomato leaves and sweetness. No smell usually means no flavour.",
      },
      {
        heading: "Why not the fridge",
        paragraphs: [
          "Below 10–12 °C tomatoes stop producing aroma compounds and the flesh turns mealy. The fridge takes away exactly what you bought the tomato for.",
          "Keep tomatoes at room temperature, stem side down, out of the sun. Unripe ones ripen in 2–4 days — faster next to a banana or apple. Only refrigerate cut or very overripe tomatoes, and let them warm up before eating.",
        ],
      },
      {
        heading: "Peeling in a minute",
        paragraphs: [
          "In sauces and soups the skin curls into tough little tubes, so it's often removed.",
        ],
        list: [
          "Score a cross in the base of the tomato.",
          "Drop it into boiling water for 20–30 seconds, until the edges of the cut start to curl.",
          "Transfer straight into iced water for a minute.",
          "The skin slips off with your fingers in one go.",
          "For sauce there's an easier way: halve the tomato and grate the cut side on a coarse grater — the skin stays in your hand.",
        ],
      },
      {
        heading: "Tomato salad: the flavour secret",
        paragraphs: [
          "Slice the tomatoes, salt them and leave for 10–15 minutes. The salt draws out the juice and brightens the flavour. Don't pour the juice away — it's the base of the dressing: add olive oil, a drop of vinegar and pepper.",
          "Cut tomatoes with a sharp or serrated knife so you don't crush the flesh. And assemble just before serving: dressed tomatoes release their juice quickly.",
        ],
      },
      {
        heading: "Tomato sauce: fresh or tinned",
        paragraphs: [
          "In summer, when tomatoes are sweet, a fresh sauce is unbeatable. The rest of the year, tinned whole tomatoes are often better: they're picked ripe and canned the same day.",
          "Basic sauce: warm 3 tbsp olive oil with 3 crushed garlic cloves, add 800 g tomatoes (peeled fresh or tinned, crushed by hand), salt, and a pinch of sugar if the tomatoes are sharp. Simmer on low heat for 20–30 minutes and add basil at the end.",
        ],
        list: [
          "A spoon of tomato paste fried in the oil for 1–2 minutes adds depth.",
          "A knob of butter at the end makes the sauce velvety.",
          "Long simmering (1–2 hours) is for ragù and bolognese; for pasta, 20 minutes keeps it tasting fresh.",
        ],
      },
      {
        heading: "Roasted cherry tomatoes",
        paragraphs: [
          "The simplest way to make bland winter tomatoes delicious. Spread cherry tomatoes on a tray, drizzle with oil, salt, and add garlic and thyme.",
          "Roast at 200 °C for 15–20 minutes, until the skins burst and the juices start to caramelise. Serve with pasta, on toast with ricotta, with fish or just with bread.",
        ],
      },
      {
        heading: "Oven-dried tomatoes",
        paragraphs: [
          "Plum tomatoes are best for drying. Halve them lengthways, scoop out the seeds, lay them cut side up, salt them, sprinkle with sugar (a pinch per half) and dried herbs.",
          "Dry at 90–100 °C with the door ajar for 4–6 hours, until leathery but still pliable. Pack into a jar and cover with olive oil with garlic and rosemary. They keep in the fridge for up to a month.",
        ],
        tip: "Don't throw away the oil from the tomatoes — it's a ready-made dressing for salad and pasta.",
      },
      {
        heading: "Green tomatoes",
        paragraphs: [
          "Fully green tomatoes contain solanine and aren't for eating raw in quantity, but they're delicious cooked or pickled.",
        ],
        list: [
          "Fried: 1 cm slices in cornmeal, 2–3 minutes a side.",
          "Fermented or pickled with garlic, dill and chilli.",
          "Green tomato chutney with apple and onion — for meat and cheese.",
          "Ripening: tomatoes that have started to blush will ripen at home in a box with paper in 1–2 weeks.",
        ],
      },
    ],
    ua: [
      {
        heading: "Який томат для чого",
        paragraphs: [
          "Усі помідори можна їсти й варити, але в різних сортів різне співвідношення м'якоті, соку й насіння.",
        ],
        list: [
          "Чері й коктейльні — найсолодші, стабільно смачні навіть узимку: салати, запікання, паста.",
          "Сливоподібні («сливки», рома, сан-марцано) — багато м'якоті, мало соку й насіння: соуси, запікання, в'ялення.",
          "Великі м'ясисті (бичаче серце, рожеві) — соковиті й ароматні: салати, бутерброди, гаспачо.",
          "Круглі червоні середнього розміру — універсальні, але взимку часто несмачні.",
        ],
        tip: "Понюхайте помідор біля плодоніжки: стиглий пахне томатним бадиллям і солодкістю. Якщо запаху немає — смаку, найпевніше, теж не буде.",
      },
      {
        heading: "Чому не в холодильник",
        paragraphs: [
          "За температури нижче 10–12 °C у помідорах зупиняється вироблення ароматичних речовин, а м'якоть стає борошнистою. Холодильник забирає в томата саме те, заради чого його купують.",
          "Зберігайте помідори за кімнатної температури, плодоніжкою донизу, подалі від сонця. Недостиглі достигнуть за 2–4 дні — швидше поруч із бананом чи яблуком. У холодильник прибирайте лише розрізані або дуже перестиглі, а перед їжею дайте їм зігрітися.",
        ],
      },
      {
        heading: "Як зняти шкірку за хвилину",
        paragraphs: [
          "Шкірка в соусах і супах скручується жорсткими трубочками, тому її часто знімають.",
        ],
        list: [
          "Зробіть хрестоподібний надріз на денці помідора.",
          "Занурте в киплячу воду на 20–30 секунд, доки краї надрізу не почнуть відгинатися.",
          "Одразу перекладіть у крижану воду на хвилину.",
          "Шкірка зніметься пальцями одним рухом.",
          "Для соусу можна простіше: розріжте томат навпіл і натріть м'якоттю на великій тертці — шкірка лишиться в руці.",
        ],
      },
      {
        heading: "Салат із помідорів: секрет смаку",
        paragraphs: [
          "Наріжте помідори, посоліть і залиште на 10–15 хвилин. Сіль витягне сік і зробить смак яскравішим. Сік не виливайте — це основа заправки: додайте до нього оливкову олію, краплю оцту й перець.",
          "Ріжте помідори гострим або зубчастим ножем, щоб не чавити м'якоть. І збирайте салат просто перед подачею: заправлені помідори швидко пускають сік.",
        ],
      },
      {
        heading: "Томатний соус: свіжі чи консервовані",
        paragraphs: [
          "Улітку, коли томати солодкі, соус зі свіжих неперевершений. Решту року консервовані томати у власному соку часто смачніші: їх збирають стиглими й закривають того ж дня.",
          "Базовий соус: прогрійте 3 ст. л. оливкової олії з 3 розчавленими зубчиками часнику, додайте 800 г томатів (очищених свіжих або консервованих, розім'ятих руками), сіль і дрібку цукру, якщо томати кислі. Томіть на слабкому вогні 20–30 хвилин, наприкінці додайте базилік.",
        ],
        list: [
          "Ложка томатної пасти, обсмаженої в олії 1–2 хвилини, додає соусу глибини.",
          "Шматочок вершкового масла наприкінці робить соус оксамитовим.",
          "Довге томління (1–2 години) — для рагу й болоньєзе; для пасти вистачить 20 хвилин, щоб смак лишився свіжим.",
        ],
      },
      {
        heading: "Запечені чері",
        paragraphs: [
          "Найпростіший спосіб зробити несмачні зимові томати смачними. Викладіть чері на деко, полийте олією, посоліть, додайте часник і чебрець.",
          "Запікайте при 200 °C 15–20 хвилин, доки шкірка не полопається й соки не почнуть карамелізуватися. Подавайте з пастою, на тостах із рікотою, з рибою або просто з хлібом.",
        ],
      },
      {
        heading: "В'ялені томати в духовці",
        paragraphs: [
          "Для в'ялення найкраще сливоподібні томати. Розріжте їх навпіл уздовж, видаліть насіння ложкою, викладіть зрізом догори, посоліть, посипте цукром (дрібка на половинку) і сушеними травами.",
          "Сушіть при 90–100 °C із прочиненими дверцятами 4–6 годин, доки томати не стануть шкірястими, але ще гнучкими. Перекладіть у банку, залийте оливковою олією з часником і розмарином. Зберігаються в холодильнику до місяця.",
        ],
        tip: "Олію з-під в'ялених томатів не викидайте — це готова заправка для салату й пасти.",
      },
      {
        heading: "Зелені помідори",
        paragraphs: [
          "Зовсім зелені томати містять соланін і не годяться в сирому вигляді у великих кількостях, але після термообробки й соління вони смачні.",
        ],
        list: [
          "Смажені: кружальця 1 см у кукурудзяному борошні, по 2–3 хвилини з кожного боку.",
          "Квашені або мариновані з часником, кропом і гострим перцем.",
          "Зелений томатний чатні з яблуком і цибулею — до м'яса й сиру.",
          "Дозрівання: бурі й молочні томати дозріють удома в коробці з папером за 1–2 тижні.",
        ],
      },
    ],
  },
  faq: {
    ru: [
      { q: "Почему томатный соус кислый?", a: "Томаты недозрелые или кислые по сорту. Добавьте щепотку сахара или тёртую морковь и дайте соусу протомиться дольше." },
      { q: "Нужно ли удалять семена?", a: "Для салата — нет, в них много вкуса. Для вяления и густых соусов — да, они добавляют воды." },
      { q: "Можно ли заморозить помидоры?", a: "Да, целиком или нарезанными — для соусов и супов. После разморозки кожица легко снимается сама, но для салата они уже не годятся." },
      { q: "Чем заменить томаты в собственном соку?", a: "Свежими спелыми томатами без кожицы в том же весе или пассатой — протёртыми томатами." },
      { q: "Как выбрать консервированные томаты?", a: "Смотрите на состав: томаты, томатный сок, соль — без лишнего. Целые очищенные томаты обычно вкуснее рубленых." },
    ],
    en: [
      { q: "Why is my tomato sauce sour?", a: "The tomatoes were underripe or a sharp variety. Add a pinch of sugar or some grated carrot and simmer the sauce longer." },
      { q: "Should I remove the seeds?", a: "Not for salad — they carry a lot of flavour. For drying and thick sauces, yes, as they add water." },
      { q: "Can I freeze tomatoes?", a: "Yes, whole or chopped, for sauces and soups. After thawing the skins slip off easily, but they're no good for salad." },
      { q: "What can replace tinned tomatoes?", a: "Ripe fresh tomatoes without skins in the same weight, or passata." },
      { q: "How do I choose tinned tomatoes?", a: "Check the ingredients: tomatoes, tomato juice, salt — nothing extra. Whole peeled tomatoes are usually better than chopped." },
    ],
    ua: [
      { q: "Чому томатний соус кислий?", a: "Томати недостиглі або кислі за сортом. Додайте дрібку цукру або терту моркву й дайте соусу протомитися довше." },
      { q: "Чи треба видаляти насіння?", a: "Для салату — ні, у ньому багато смаку. Для в'ялення й густих соусів — так, воно додає води." },
      { q: "Чи можна заморозити помідори?", a: "Так, цілими або нарізаними — для соусів і супів. Після розморожування шкірка легко знімається сама, але для салату вони вже не годяться." },
      { q: "Чим замінити томати у власному соку?", a: "Свіжими стиглими томатами без шкірки в тій самій вазі або пасатою — протертими томатами." },
      { q: "Як вибрати консервовані томати?", a: "Дивіться на склад: томати, томатний сік, сіль — без зайвого. Цілі очищені томати зазвичай смачніші за рубані." },
    ],
  },
};
