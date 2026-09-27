import type { Lifehack, LifehackCategory } from "./types";

// Second batch of lifehacks (RU/EN/UA). Lives in code, so it shows up on the
// site even when the Supabase `lifehacks` table only holds the first batch:
// getLifehacks() merges DB rows with these by slug (DB wins).
const img = (c: LifehackCategory) => `/img/lifehacks/${c}.svg`;

export const EXTRA_LIFEHACKS: Lifehack[] = [
  // ── cooking ──────────────────────────────────────────────
  {
    id: "l-garlic-shake",
    slug: "pochistit-chesnok-za-10-sekund",
    category: "cooking",
    image: img("cooking"),
    title: {
      ru: "Как почистить головку чеснока за 10 секунд",
      en: "Peel a whole head of garlic in 10 seconds",
      ua: "Як почистити головку часнику за 10 секунд",
    },
    summary: {
      ru: "Банка с крышкой и немного силы — и все зубчики без шелухи.",
      en: "A jar with a lid and a bit of muscle — every clove comes out naked.",
      ua: "Банка з кришкою й трохи сили — і всі зубчики без лушпиння.",
    },
    body: {
      ru: [
        "Разделите головку на зубчики, надавив на неё ладонью.",
        "Сложите зубчики в банку с крышкой или между двумя одинаковыми металлическими мисками.",
        "Энергично трясите 15–20 секунд. Шелуха отойдёт сама — останется выбрать чистые зубчики.",
        "Молодой чеснок с плотной влажной шелухой так не чистится — его проще раздавить плоской стороной ножа.",
      ],
      en: [
        "Break the head into cloves by pressing down on it with your palm.",
        "Put the cloves in a jar with a lid, or between two identical metal bowls.",
        "Shake hard for 15–20 seconds. The skins fall away — just pick out the clean cloves.",
        "Young garlic with damp, tight skins won't peel this way — crush it with the flat of a knife instead.",
      ],
      ua: [
        "Розділіть головку на зубчики, натиснувши на неї долонею.",
        "Складіть зубчики в банку з кришкою або між двома однаковими металевими мисками.",
        "Енергійно трусіть 15–20 секунд. Лушпиння відійде саме — лишиться вибрати чисті зубчики.",
        "Молодий часник зі щільним вологим лушпинням так не чиститься — його простіше розчавити пласким боком ножа.",
      ],
    },
    createdAt: "2026-09-20T09:00:00Z",
  },
  {
    id: "l-soft-butter",
    slug: "bystro-razmyagchit-maslo",
    category: "cooking",
    image: img("cooking"),
    title: {
      ru: "Размягчить масло для выпечки за 5 минут",
      en: "Soften butter for baking in 5 minutes",
      ua: "Розм'якшити масло для випічки за 5 хвилин",
    },
    summary: {
      ru: "Забыли достать масло заранее? Три способа без микроволновки.",
      en: "Forgot to take the butter out? Three ways without a microwave.",
      ua: "Забули дістати масло заздалегідь? Три способи без мікрохвильовки.",
    },
    body: {
      ru: [
        "Натрите холодное масло на крупной тёрке — тонкая стружка станет мягкой за 3–5 минут.",
        "Или нарежьте масло кубиками по 1 см и разложите на тарелке: через 15 минут оно будет готово к взбиванию.",
        "Способ со стаканом: налейте в стакан кипяток на минуту, вылейте, вытрите насухо и накройте им брусок масла на 5 минут.",
        "Микроволновка растапливает масло неравномерно: снаружи жидко, внутри холодно. Для кремов и песочного теста такое масло не подходит.",
      ],
      en: [
        "Grate cold butter on the coarse side of a grater — thin shreds soften in 3–5 minutes.",
        "Or cut it into 1 cm cubes and spread them on a plate: in 15 minutes it's ready to cream.",
        "The glass trick: fill a glass with boiling water for a minute, pour it out, dry it and cover the block of butter with it for 5 minutes.",
        "A microwave melts butter unevenly — runny outside, cold inside. That butter is no good for frosting or shortcrust.",
      ],
      ua: [
        "Натріть холодне масло на великій тертці — тонка стружка стане м'якою за 3–5 хвилин.",
        "Або наріжте масло кубиками по 1 см і розкладіть на тарілці: через 15 хвилин воно буде готове до збивання.",
        "Спосіб зі склянкою: налийте в склянку окріп на хвилину, вилийте, витріть насухо й накрийте нею брусок масла на 5 хвилин.",
        "Мікрохвильовка розтоплює масло нерівномірно: зовні рідко, всередині холодно. Для кремів і пісочного тіста таке масло не підходить.",
      ],
    },
    createdAt: "2026-09-19T09:00:00Z",
  },
  {
    id: "l-lemon-juice",
    slug: "vyzhat-iz-limona-bolshe-soka",
    category: "cooking",
    image: img("cooking"),
    title: {
      ru: "Как выжать из лимона вдвое больше сока",
      en: "Get twice as much juice from a lemon",
      ua: "Як вичавити з лимона вдвічі більше соку",
    },
    summary: {
      ru: "Тёплый лимон и правильный разрез — и никакой соковыжималки.",
      en: "A warm lemon and the right cut — no juicer needed.",
      ua: "Теплий лимон і правильний розріз — і жодної соковижималки.",
    },
    body: {
      ru: [
        "Холодный лимон отдаёт сок плохо. Подержите его 10–15 секунд в микроволновке или 2 минуты в тёплой воде.",
        "Прокатайте лимон по столу, сильно надавливая ладонью: перегородки внутри лопнут.",
        "Разрежьте лимон не поперёк, а вдоль — так вскрывается больше долек.",
        "Выжимайте через вилку: вставьте её в мякоть и поворачивайте, сжимая половинку. Косточки задержите ладонью.",
      ],
      en: [
        "A cold lemon gives up little juice. Warm it for 10–15 seconds in the microwave or 2 minutes in warm water.",
        "Roll it on the counter, pressing hard with your palm: the membranes inside burst.",
        "Cut it lengthways rather than across — more segments open up.",
        "Squeeze over a fork: push it into the flesh and twist as you squeeze the half. Catch the pips in your palm.",
      ],
      ua: [
        "Холодний лимон погано віддає сік. Потримайте його 10–15 секунд у мікрохвильовці або 2 хвилини в теплій воді.",
        "Прокатайте лимон по столу, сильно натискаючи долонею: перетинки всередині лопнуть.",
        "Розріжте лимон не впоперек, а вздовж — так розкривається більше часточок.",
        "Вичавлюйте через виделку: встроміть її в м'якоть і повертайте, стискаючи половинку. Кісточки затримайте долонею.",
      ],
    },
    createdAt: "2026-09-18T09:00:00Z",
  },
  {
    id: "l-tomato-peel",
    slug: "snyat-kozhicu-s-pomidorov",
    category: "cooking",
    image: img("cooking"),
    title: {
      ru: "Снять кожицу с помидоров за 30 секунд",
      en: "Peel tomatoes in 30 seconds",
      ua: "Зняти шкірку з помідорів за 30 секунд",
    },
    summary: {
      ru: "Крестик, кипяток и ледяная вода — кожица слезает сама.",
      en: "A cross, boiling water and iced water — the skin slips off.",
      ua: "Хрестик, окріп і крижана вода — шкірка злазить сама.",
    },
    body: {
      ru: [
        "Сделайте на верхушке помидора неглубокий крестообразный надрез.",
        "Опустите в кипящую воду на 20–30 секунд — пока края надреза не начнут отворачиваться.",
        "Сразу переложите в миску с ледяной водой на минуту.",
        "Потяните за уголки надреза — кожица снимется целиком. Так же чистят персики и абрикосы.",
      ],
      en: [
        "Score a shallow cross in the top of the tomato.",
        "Drop it into boiling water for 20–30 seconds — until the edges of the cut start to curl back.",
        "Move it straight into a bowl of iced water for a minute.",
        "Pull at the corners of the cross — the skin comes away in one piece. Peaches and apricots peel the same way.",
      ],
      ua: [
        "Зробіть на верхівці помідора неглибокий хрестоподібний надріз.",
        "Опустіть в окріп на 20–30 секунд — доки краї надрізу не почнуть відвертатися.",
        "Одразу перекладіть у миску з крижаною водою на хвилину.",
        "Потягніть за кутики надрізу — шкірка зніметься цілою. Так само чистять персики й абрикоси.",
      ],
    },
    createdAt: "2026-09-17T09:00:00Z",
  },
  {
    id: "l-eggs-warm",
    slug: "yayca-komnatnoy-temperatury-bystro",
    category: "cooking",
    image: img("cooking"),
    title: {
      ru: "Яйца комнатной температуры за 5 минут",
      en: "Room-temperature eggs in 5 minutes",
      ua: "Яйця кімнатної температури за 5 хвилин",
    },
    summary: {
      ru: "Рецепт выпечки просит тёплые яйца, а они в холодильнике? Не беда.",
      en: "The recipe wants room-temperature eggs and yours are in the fridge? No problem.",
      ua: "Рецепт випічки просить теплі яйця, а вони в холодильнику? Не біда.",
    },
    body: {
      ru: [
        "Холодные яйца застуживают масло в тесте — крем расслаивается, бисквит хуже поднимается.",
        "Положите яйца в миску с тёплой водой из-под крана (около 40 °C, как для рук) на 5–10 минут.",
        "Не используйте горячую воду: белок у скорлупы может начать схватываться.",
        "Для рецептов, где нужны только желтки или белки, разделите холодные яйца — так проще — и оставьте их в мисках на 15 минут.",
      ],
      en: [
        "Cold eggs chill the butter in a batter — the mixture splits and sponges rise less.",
        "Put the eggs in a bowl of warm tap water (about 40 °C, comfortable for your hands) for 5–10 minutes.",
        "Don't use hot water: the white by the shell can start to set.",
        "For recipes needing only yolks or whites, separate the eggs while cold — it's easier — and leave them in bowls for 15 minutes.",
      ],
      ua: [
        "Холодні яйця застуджують масло в тісті — крем розшаровується, бісквіт гірше піднімається.",
        "Покладіть яйця в миску з теплою водою з-під крана (близько 40 °C, як для рук) на 5–10 хвилин.",
        "Не використовуйте гарячу воду: білок біля шкаралупи може почати схоплюватися.",
        "Для рецептів, де потрібні лише жовтки чи білки, розділіть холодні яйця — так простіше — і залиште їх у мисках на 15 хвилин.",
      ],
    },
    createdAt: "2026-09-16T09:00:00Z",
  },

  // ── storage ──────────────────────────────────────────────
  {
    id: "l-avocado-half",
    slug: "polovinka-avokado-ne-temneet",
    category: "storage",
    image: img("storage"),
    title: {
      ru: "Чтобы половинка авокадо не потемнела",
      en: "Keep half an avocado from browning",
      ua: "Щоб половинка авокадо не потемніла",
    },
    summary: {
      ru: "Лимон и плёнка вплотную — и вторая половина свежая завтра.",
      en: "Lemon and cling film pressed flat — the other half stays fresh till tomorrow.",
      ua: "Лимон і плівка впритул — і друга половина свіжа завтра.",
    },
    body: {
      ru: [
        "Авокадо темнеет от контакта с воздухом — как яблоко.",
        "Сбрызните срез лимонным или лаймовым соком.",
        "Плотно прижмите пищевую плёнку прямо к мякоти, без воздушных пузырей, и уберите в холодильник.",
        "Косточку можно оставить, но она защищает только то, что под ней. Главное — кислота и отсутствие воздуха. Так авокадо хранится 1–2 дня.",
      ],
      en: [
        "Avocado browns when it meets air — like an apple.",
        "Brush the cut surface with lemon or lime juice.",
        "Press cling film directly onto the flesh with no air bubbles and refrigerate.",
        "You can leave the stone in, but it only protects what's underneath it. Acid and no air are what count. It keeps 1–2 days this way.",
      ],
      ua: [
        "Авокадо темніє від контакту з повітрям — як яблуко.",
        "Збризніть зріз лимонним або лаймовим соком.",
        "Щільно притисніть харчову плівку просто до м'якоті, без бульбашок повітря, і приберіть у холодильник.",
        "Кісточку можна залишити, але вона захищає лише те, що під нею. Головне — кислота й відсутність повітря. Так авокадо зберігається 1–2 дні.",
      ],
    },
    createdAt: "2026-09-15T09:00:00Z",
  },
  {
    id: "l-bread-storage",
    slug: "hleb-ne-cherstveet",
    category: "storage",
    image: img("storage"),
    title: {
      ru: "Хлеб дольше не черствеет: не кладите его в холодильник",
      en: "Bread stays fresh longer — keep it out of the fridge",
      ua: "Хліб довше не черствіє: не кладіть його в холодильник",
    },
    summary: {
      ru: "Холодильник сушит хлеб в разы быстрее, чем кухонный стол.",
      en: "The fridge stales bread several times faster than the counter.",
      ua: "Холодильник сушить хліб у рази швидше, ніж кухонний стіл.",
    },
    body: {
      ru: [
        "При температуре холодильника крахмал в хлебе кристаллизуется быстрее всего — хлеб черствеет за день.",
        "Храните хлеб при комнатной температуре в хлебнице, льняном мешочке или бумажном пакете 2–3 дня.",
        "Что не успеете съесть — нарежьте и заморозьте. Ломтики можно жарить в тостере прямо из морозилки.",
        "Если на хлебе появилась плесень, выбросьте всю буханку: нити грибка прорастают глубже, чем видно.",
      ],
      en: [
        "At fridge temperature the starch in bread recrystallises fastest — it goes stale in a day.",
        "Keep bread at room temperature in a bread bin, linen bag or paper bag for 2–3 days.",
        "Slice and freeze what you won't eat in time. Slices go straight from the freezer into the toaster.",
        "If mould appears, throw the whole loaf away: the threads grow deeper than you can see.",
      ],
      ua: [
        "За температури холодильника крохмаль у хлібі кристалізується найшвидше — хліб черствіє за день.",
        "Зберігайте хліб за кімнатної температури в хлібниці, лляному мішечку або паперовому пакеті 2–3 дні.",
        "Те, що не встигнете з'їсти, наріжте й заморозьте. Скибочки можна підсмажувати в тостері просто з морозилки.",
        "Якщо на хлібі з'явилася цвіль, викиньте всю хлібину: нитки грибка проростають глибше, ніж видно.",
      ],
    },
    createdAt: "2026-09-14T09:00:00Z",
  },
  {
    id: "l-berries",
    slug: "yagody-ne-pleseneyut",
    category: "storage",
    image: img("storage"),
    title: {
      ru: "Ягоды не плесневеют неделю",
      en: "Berries that don't go mouldy for a week",
      ua: "Ягоди не пліснявіють тиждень",
    },
    summary: {
      ru: "Уксусная ванна и сухое полотенце продлевают жизнь клубники и малины.",
      en: "A vinegar bath and a dry towel extend the life of strawberries and raspberries.",
      ua: "Оцтова ванна й сухий рушник подовжують життя полуниці й малини.",
    },
    body: {
      ru: [
        "Разведите 1 часть уксуса в 3 частях холодной воды и окуните ягоды на 1–2 минуты — это смывает споры плесени.",
        "Промойте чистой водой, чтобы не было привкуса уксуса.",
        "Обсушите ягоды полностью — разложите на полотенце на 30 минут. Влага — главный враг ягод.",
        "Храните в контейнере, выстеленном бумажным полотенцем, с неплотной крышкой. Сразу уберите помятые ягоды: одна испорченная портит всю коробку.",
      ],
      en: [
        "Mix 1 part vinegar with 3 parts cold water and dip the berries for 1–2 minutes — it washes off mould spores.",
        "Rinse with clean water so there's no vinegar taste.",
        "Dry the berries completely — spread them on a towel for 30 minutes. Moisture is berries' worst enemy.",
        "Store them in a container lined with kitchen paper with the lid ajar. Remove any squashed berries straight away: one bad berry spoils the whole box.",
      ],
      ua: [
        "Розведіть 1 частину оцту в 3 частинах холодної води й занурте ягоди на 1–2 хвилини — це змиває спори цвілі.",
        "Промийте чистою водою, щоб не було присмаку оцту.",
        "Обсушіть ягоди повністю — розкладіть на рушнику на 30 хвилин. Волога — головний ворог ягід.",
        "Зберігайте в контейнері, вистеленому паперовим рушником, із нещільною кришкою. Одразу приберіть пом'яті ягоди: одна зіпсована псує всю коробку.",
      ],
    },
    createdAt: "2026-09-13T09:00:00Z",
  },
  {
    id: "l-honey",
    slug: "med-zasaharilsya",
    category: "storage",
    image: img("storage"),
    title: {
      ru: "Мёд засахарился — он не испортился",
      en: "Crystallised honey hasn't gone off",
      ua: "Мед зацукрувався — він не зіпсувався",
    },
    summary: {
      ru: "Как вернуть мёду жидкость и не потерять его полезные свойства.",
      en: "How to make honey runny again without spoiling it.",
      ua: "Як повернути меду рідкість і не втратити його корисних властивостей.",
    },
    body: {
      ru: [
        "Засахаривание — естественный процесс: натуральный мёд почти всегда кристаллизуется через несколько месяцев. Это не признак подделки и не порча.",
        "Поставьте стеклянную банку в кастрюлю с тёплой водой, не выше 40–45 °C, и помешивайте, пока кристаллы не растворятся.",
        "Не кипятите мёд и не грейте его в микроволновке: при перегреве он теряет аромат и ферменты.",
        "Храните мёд в закрытой банке при комнатной температуре. В холодильнике он засахаривается быстрее.",
      ],
      en: [
        "Crystallisation is natural: real honey almost always sets within a few months. It isn't a sign of fakery or spoilage.",
        "Stand the glass jar in a pan of warm water, no hotter than 40–45 °C, and stir until the crystals dissolve.",
        "Don't boil honey or microwave it: overheating destroys its aroma and enzymes.",
        "Keep honey in a closed jar at room temperature. It crystallises faster in the fridge.",
      ],
      ua: [
        "Зацукрування — природний процес: натуральний мед майже завжди кристалізується за кілька місяців. Це не ознака підробки й не псування.",
        "Поставте скляну банку в каструлю з теплою водою, не вище 40–45 °C, і помішуйте, доки кристали не розчиняться.",
        "Не кип'ятіть мед і не грійте його в мікрохвильовці: від перегріву він утрачає аромат і ферменти.",
        "Зберігайте мед у закритій банці за кімнатної температури. У холодильнику він зацукровується швидше.",
      ],
    },
    createdAt: "2026-09-12T09:00:00Z",
  },
  {
    id: "l-bananas",
    slug: "banany-dolshe-ostayutsya-zheltymi",
    category: "storage",
    image: img("storage"),
    title: {
      ru: "Бананы дольше остаются жёлтыми",
      en: "Keep bananas yellow for longer",
      ua: "Банани довше лишаються жовтими",
    },
    summary: {
      ru: "Отделите их от связки и от других фруктов — и они не почернеют за два дня.",
      en: "Separate them from the bunch and other fruit — and they won't blacken in two days.",
      ua: "Відокремте їх від зв'язки й від інших фруктів — і вони не почорніють за два дні.",
    },
    body: {
      ru: [
        "Бананы выделяют этилен — газ, ускоряющий созревание. Больше всего его выходит через черешки.",
        "Разделите связку и оберните черешок каждого банана пищевой плёнкой.",
        "Храните бананы отдельно от яблок, груш и авокадо — и подальше от них, иначе всё созреет быстрее.",
        "Спелые бананы можно убрать в холодильник: кожура потемнеет, но мякоть останется светлой и не перезреет ещё 3–4 дня.",
      ],
      en: [
        "Bananas give off ethylene, a gas that speeds ripening, mostly through their stems.",
        "Split the bunch and wrap each stem in cling film.",
        "Keep bananas away from apples, pears and avocados, or everything ripens faster.",
        "Ripe bananas can go in the fridge: the skin darkens but the flesh stays pale and won't overripen for another 3–4 days.",
      ],
      ua: [
        "Банани виділяють етилен — газ, що пришвидшує дозрівання. Найбільше його виходить через черешки.",
        "Розділіть зв'язку й оберніть черешок кожного банана харчовою плівкою.",
        "Зберігайте банани окремо від яблук, груш і авокадо — і подалі від них, інакше все дозріє швидше.",
        "Стиглі банани можна прибрати в холодильник: шкірка потемніє, але м'якоть лишиться світлою й не перестигне ще 3–4 дні.",
      ],
    },
    createdAt: "2026-09-11T09:00:00Z",
  },

  // ── cleaning ─────────────────────────────────────────────
  {
    id: "l-oven",
    slug: "otmyt-duhovku-sodoy",
    category: "cleaning",
    image: img("cleaning"),
    title: {
      ru: "Отмыть духовку содой и уксусом без химии",
      en: "Clean the oven with baking soda and vinegar, no harsh chemicals",
      ua: "Відмити духовку содою й оцтом без хімії",
    },
    summary: {
      ru: "Паста из соды за ночь размягчает даже старый жир.",
      en: "A baking-soda paste softens even old grease overnight.",
      ua: "Паста із соди за ніч розм'якшує навіть старий жир.",
    },
    body: {
      ru: [
        "Смешайте полстакана соды (около 125 г) с 3–4 ст. л. воды до густой пасты.",
        "Нанесите пасту на холодные стенки и дно духовки, обходя нагревательные элементы. Оставьте на ночь или минимум на 8 часов.",
        "Утром сотрите пасту влажной губкой. Там, где остались белые следы, сбрызните уксусом из пульверизатора — он вспенится и растворит остатки соды.",
        "Вытрите чистой влажной тряпкой. Решётки замочите в ванне с горячей водой и содой на ночь.",
      ],
      en: [
        "Mix half a cup of baking soda (about 125 g) with 3–4 tbsp water into a thick paste.",
        "Spread it over the cold walls and floor of the oven, avoiding the heating elements. Leave overnight, or at least 8 hours.",
        "In the morning wipe it off with a damp sponge. Where white traces remain, spray with vinegar — it foams and dissolves the leftover soda.",
        "Wipe with a clean damp cloth. Soak the racks overnight in a bath of hot water and baking soda.",
      ],
      ua: [
        "Змішайте пів склянки соди (близько 125 г) з 3–4 ст. л. води до густої пасти.",
        "Нанесіть пасту на холодні стінки й дно духовки, обходячи нагрівальні елементи. Залиште на ніч або щонайменше на 8 годин.",
        "Уранці зітріть пасту вологою губкою. Там, де лишилися білі сліди, збризніть оцтом із пульверизатора — він спіниться й розчинить рештки соди.",
        "Витріть чистою вологою ганчіркою. Решітки замочіть у ванні з гарячою водою й содою на ніч.",
      ],
    },
    createdAt: "2026-09-10T09:00:00Z",
  },
  {
    id: "l-kettle",
    slug: "nakip-v-chaynike",
    category: "cleaning",
    image: img("cleaning"),
    title: {
      ru: "Накипь в чайнике уходит за один раз",
      en: "Descale a kettle in one go",
      ua: "Накип у чайнику зникає за один раз",
    },
    summary: {
      ru: "Лимонная кислота справляется лучше дорогих средств и стоит копейки.",
      en: "Citric acid works better than pricey descalers and costs pennies.",
      ua: "Лимонна кислота справляється краще за дорогі засоби й коштує копійки.",
    },
    body: {
      ru: [
        "Налейте в чайник 1 литр воды и добавьте 1–2 ст. л. лимонной кислоты.",
        "Вскипятите и оставьте на 1–2 часа. Сильный налёт растворится, а мягкий — отойдёт хлопьями.",
        "Слейте воду, протрите стенки мягкой губкой и промойте.",
        "Вскипятите чистую воду один раз и вылейте её — так уйдёт кислый привкус. Повторяйте раз в месяц, и накипь не будет нарастать.",
      ],
      en: [
        "Pour 1 litre of water into the kettle and add 1–2 tbsp citric acid.",
        "Boil and leave for 1–2 hours. Heavy scale dissolves; softer deposits come away in flakes.",
        "Pour it out, wipe the inside with a soft sponge and rinse.",
        "Boil a kettle of clean water once and discard it to remove any sour taste. Repeat monthly and scale won't build up.",
      ],
      ua: [
        "Налийте в чайник 1 літр води й додайте 1–2 ст. л. лимонної кислоти.",
        "Закип'ятіть і залиште на 1–2 години. Сильний наліт розчиниться, а м'який — відійде пластівцями.",
        "Злийте воду, протріть стінки м'якою губкою й промийте.",
        "Закип'ятіть чисту воду один раз і вилийте її — так піде кислий присмак. Повторюйте раз на місяць, і накип не наростатиме.",
      ],
    },
    createdAt: "2026-09-09T09:00:00Z",
  },
  {
    id: "l-hands-smell",
    slug: "zapah-ryby-i-chesnoka-s-ruk",
    category: "cleaning",
    image: img("cleaning"),
    title: {
      ru: "Убрать запах рыбы и чеснока с рук",
      en: "Get the smell of fish and garlic off your hands",
      ua: "Прибрати запах риби й часнику з рук",
    },
    summary: {
      ru: "Нержавеющая ложка, лимон или кофейная гуща — работает лучше мыла.",
      en: "A stainless-steel spoon, lemon or coffee grounds — better than soap.",
      ua: "Нержавіюча ложка, лимон або кавова гуща — працює краще за мило.",
    },
    body: {
      ru: [
        "Потрите руки о нержавеющую сталь — ложку, лезвие ножа плашмя или раковину — под струёй холодной воды 30 секунд.",
        "Или протрите руки половинкой лимона или смесью соли с лимонным соком, потом вымойте с мылом.",
        "Кофейная гуща и сухая горчица тоже хорошо впитывают запах.",
        "Мойте руки холодной водой: горячая сильнее «впечатывает» запах в кожу.",
      ],
      en: [
        "Rub your hands on stainless steel — a spoon, the flat of a knife blade or the sink — under cold running water for 30 seconds.",
        "Or rub them with half a lemon or a mix of salt and lemon juice, then wash with soap.",
        "Coffee grounds and dry mustard powder also absorb odours well.",
        "Use cold water: hot water sets the smell into your skin.",
      ],
      ua: [
        "Потріть руки об нержавіючу сталь — ложку, лезо ножа плазом або раковину — під струменем холодної води 30 секунд.",
        "Або протріть руки половинкою лимона чи сумішшю солі з лимонним соком, потім вимийте з милом.",
        "Кавова гуща й суха гірчиця теж добре вбирають запах.",
        "Мийте руки холодною водою: гаряча сильніше «вбиває» запах у шкіру.",
      ],
    },
    createdAt: "2026-09-08T09:00:00Z",
  },
  {
    id: "l-board",
    slug: "doska-bez-zapaha",
    category: "cleaning",
    image: img("cleaning"),
    title: {
      ru: "Разделочная доска без запаха и пятен",
      en: "A cutting board with no smells or stains",
      ua: "Обробна дошка без запаху й плям",
    },
    summary: {
      ru: "Соль и половинка лимона отмывают дерево лучше любого средства.",
      en: "Salt and half a lemon clean wood better than any detergent.",
      ua: "Сіль і половинка лимона відмивають дерево краще за будь-який засіб.",
    },
    body: {
      ru: [
        "Посыпьте доску крупной солью и потрите половинкой лимона, выжимая сок. Соль работает как абразив, лимон — убирает запах и пятна.",
        "Оставьте на 5 минут, смойте горячей водой и поставьте сушиться вертикально.",
        "Для стойких пятен — паста из соды с водой на 10 минут.",
        "Раз в месяц натирайте деревянную доску пищевым минеральным маслом: она не будет трескаться и впитывать запахи.",
      ],
      en: [
        "Sprinkle the board with coarse salt and rub it with half a lemon, squeezing out the juice. The salt scrubs; the lemon lifts smells and stains.",
        "Leave for 5 minutes, rinse with hot water and stand it upright to dry.",
        "For stubborn stains, a paste of baking soda and water for 10 minutes.",
        "Once a month rub a wooden board with food-grade mineral oil: it won't crack or absorb smells.",
      ],
      ua: [
        "Посипте дошку крупною сіллю й потріть половинкою лимона, вичавлюючи сік. Сіль працює як абразив, лимон — прибирає запах і плями.",
        "Залиште на 5 хвилин, змийте гарячою водою й поставте сушитися вертикально.",
        "Для стійких плям — паста із соди з водою на 10 хвилин.",
        "Раз на місяць натирайте дерев'яну дошку харчовою мінеральною олією: вона не тріскатиметься й не вбиратиме запахи.",
      ],
    },
    createdAt: "2026-09-07T09:00:00Z",
  },
  {
    id: "l-grater",
    slug: "otmyt-terku-posle-syra",
    category: "cleaning",
    image: img("cleaning"),
    title: {
      ru: "Как быстро отмыть тёрку после сыра",
      en: "How to clean a grater fast after cheese",
      ua: "Як швидко відмити тертку після сиру",
    },
    summary: {
      ru: "Холодная вода, щётка с изнанки и кусок сырой картошки.",
      en: "Cold water, a brush from the back and a piece of raw potato.",
      ua: "Холодна вода, щітка з виворітного боку й шматок сирої картоплі.",
    },
    body: {
      ru: [
        "Мойте тёрку сразу — засохший сыр держится намертво.",
        "Сначала холодной водой: горячая плавит сыр, и он размазывается по зубцам.",
        "Чистите щёткой с внутренней стороны, по направлению от зубцов, а не губкой — губка рвётся.",
        "Если сыр засох — натрите на тёрке кусок сырой картошки или корку хлеба: они вытолкнут остатки сыра.",
      ],
      en: [
        "Wash the grater straight away — dried cheese sticks like glue.",
        "Start with cold water: hot water melts cheese and smears it over the teeth.",
        "Clean with a brush from the inside, away from the teeth, not with a sponge — sponges shred.",
        "If the cheese has dried, grate a piece of raw potato or a bread crust: it pushes the remains out.",
      ],
      ua: [
        "Мийте тертку одразу — засохлий сир тримається намертво.",
        "Спершу холодною водою: гаряча плавить сир, і він розмазується по зубцях.",
        "Чистіть щіткою з внутрішнього боку, у напрямку від зубців, а не губкою — губка рветься.",
        "Якщо сир засох — натріть на тертці шматок сирої картоплі або скоринку хліба: вони виштовхнуть рештки сиру.",
      ],
    },
    createdAt: "2026-09-06T09:00:00Z",
  },

  // ── saving ───────────────────────────────────────────────
  {
    id: "l-scrap-stock",
    slug: "bulon-iz-ochistkov",
    category: "saving",
    image: img("saving"),
    title: {
      ru: "Бесплатный бульон из очистков овощей",
      en: "Free stock from vegetable scraps",
      ua: "Безкоштовний бульйон з очисток овочів",
    },
    summary: {
      ru: "Пакет в морозилке превращает кожуру и хвостики в ароматный бульон.",
      en: "A bag in the freezer turns peels and ends into fragrant stock.",
      ua: "Пакет у морозилці перетворює шкірки й хвостики на ароматний бульйон.",
    },
    body: {
      ru: [
        "Заведите в морозилке пакет и складывайте туда луковую шелуху, морковные очистки, концы сельдерея, стебли петрушки и укропа, грибные ножки.",
        "Не кладите капусту и брокколи — они дают горечь, и картофельные очистки — бульон помутнеет.",
        "Когда пакет наполнится (около 1 литра), залейте очистки 2 литрами воды и варите 45–60 минут, процедите.",
        "Получится бесплатная основа для супов, ризотто и соусов. Замораживайте порциями.",
      ],
      en: [
        "Keep a bag in the freezer and add onion skins, carrot peelings, celery ends, parsley and dill stems and mushroom stalks.",
        "Leave out cabbage and broccoli (they turn bitter) and potato peelings (they cloud the stock).",
        "When the bag is full (about a litre), cover the scraps with 2 litres of water, simmer for 45–60 minutes and strain.",
        "You get a free base for soups, risotto and sauces. Freeze in portions.",
      ],
      ua: [
        "Заведіть у морозилці пакет і складайте туди цибулине лушпиння, морквяні очистки, кінчики селери, стебла петрушки й кропу, ніжки грибів.",
        "Не кладіть капусту й броколі — вони дають гіркоту, і картопляні очистки — бульйон скаламутніє.",
        "Коли пакет наповниться (близько 1 літра), залийте очистки 2 літрами води й варіть 45–60 хвилин, процідіть.",
        "Вийде безкоштовна основа для супів, ризото й соусів. Заморожуйте порціями.",
      ],
    },
    createdAt: "2026-09-05T09:00:00Z",
  },
  {
    id: "l-herb-cubes",
    slug: "zelen-v-masle-kubikami",
    category: "saving",
    image: img("saving"),
    title: {
      ru: "Зелень в масле кубиками — ничего не пропадает",
      en: "Herbs frozen in oil — nothing goes to waste",
      ua: "Зелень в олії кубиками — нічого не пропадає",
    },
    summary: {
      ru: "Остатки петрушки, укропа и базилика превращаются в готовую заправку.",
      en: "Leftover parsley, dill and basil become ready-made flavour bombs.",
      ua: "Залишки петрушки, кропу й базиліку перетворюються на готову заправку.",
    },
    body: {
      ru: [
        "Мелко порубите зелень, которая начинает вянуть, и заполните ею формочки для льда на две трети.",
        "Залейте оливковым маслом или растопленным сливочным и заморозьте.",
        "Пересыпьте кубики в пакет — хранятся до 6 месяцев.",
        "Бросайте кубик прямо на сковороду, в суп, соус или пасту: масло растопится, а зелень даст свежий аромат.",
      ],
      en: [
        "Finely chop herbs that are starting to wilt and fill ice-cube trays two-thirds full.",
        "Top up with olive oil or melted butter and freeze.",
        "Tip the cubes into a bag — they keep up to 6 months.",
        "Drop a cube straight into a pan, soup, sauce or pasta: the fat melts and the herbs add fresh flavour.",
      ],
      ua: [
        "Дрібно порубайте зелень, що починає в'янути, і заповніть нею формочки для льоду на дві третини.",
        "Залийте оливковою олією або розтопленим вершковим маслом і заморозьте.",
        "Пересипте кубики в пакет — зберігаються до 6 місяців.",
        "Кидайте кубик просто на сковороду, у суп, соус чи пасту: масло розтане, а зелень дасть свіжий аромат.",
      ],
    },
    createdAt: "2026-09-04T09:00:00Z",
  },
  {
    id: "l-parmesan-rind",
    slug: "korki-parmezana-v-sup",
    category: "saving",
    image: img("saving"),
    title: {
      ru: "Не выбрасывайте корки пармезана",
      en: "Don't throw away parmesan rinds",
      ua: "Не викидайте скоринки пармезану",
    },
    summary: {
      ru: "Твёрдая корка — секретный ингредиент для супа и соуса.",
      en: "The hard rind is a secret ingredient for soup and sauce.",
      ua: "Тверда скоринка — секретний інгредієнт для супу й соусу.",
    },
    body: {
      ru: [
        "Корку, которую уже не натереть, положите в пакет и уберите в морозилку.",
        "Опустите кусочек корки в суп, томатный соус, ризотто или бульон на время томления — от 30 минут.",
        "Она отдаст глубокий сырный вкус умами и немного соли. Перед подачей выньте корку.",
        "Так же работают корки других твёрдых сыров — грана падано, пекорино.",
      ],
      en: [
        "Put rinds you can't grate any more in a bag and freeze them.",
        "Drop a piece into soup, tomato sauce, risotto or stock while it simmers — 30 minutes or more.",
        "It gives a deep, cheesy umami flavour and a little salt. Fish it out before serving.",
        "Rinds of other hard cheeses — Grana Padano, pecorino — work the same way.",
      ],
      ua: [
        "Скоринку, яку вже не натерти, покладіть у пакет і приберіть у морозилку.",
        "Опустіть шматочок скоринки в суп, томатний соус, ризото чи бульйон на час томління — від 30 хвилин.",
        "Вона віддасть глибокий сирний смак умамі й трохи солі. Перед подачею вийміть скоринку.",
        "Так само працюють скоринки інших твердих сирів — грана падано, пекоріно.",
      ],
    },
    createdAt: "2026-09-03T09:00:00Z",
  },
  {
    id: "l-ripe-bananas",
    slug: "perezrelye-banany-v-morozilku",
    category: "saving",
    image: img("saving"),
    title: {
      ru: "Перезрелые бананы — в морозилку, а не в мусор",
      en: "Overripe bananas go in the freezer, not the bin",
      ua: "Перестиглі банани — у морозилку, а не в смітник",
    },
    summary: {
      ru: "Чёрные бананы — лучшая основа для выпечки и смузи.",
      en: "Black bananas are the best base for baking and smoothies.",
      ua: "Чорні банани — найкраща основа для випічки й смузі.",
    },
    body: {
      ru: [
        "Чем темнее банан, тем он слаще: крахмал превратился в сахар. Для выпечки это идеально.",
        "Очистите бананы, разрежьте на кусочки или половинки и заморозьте в пакете — до 3 месяцев.",
        "Для бананового хлеба и маффинов разморозьте их и используйте вместе с выделившейся жидкостью.",
        "Замороженные кусочки — основа густого смузи и «мороженого» из бананов без сахара и льда.",
      ],
      en: [
        "The darker the banana, the sweeter it is: the starch has turned to sugar. Perfect for baking.",
        "Peel the bananas, cut into pieces or halves and freeze in a bag — up to 3 months.",
        "For banana bread and muffins, thaw them and use them with the liquid they release.",
        "Frozen chunks are the base for thick smoothies and banana \"ice cream\" with no sugar or ice.",
      ],
      ua: [
        "Що темніший банан, то він солодший: крохмаль перетворився на цукор. Для випічки це ідеально.",
        "Очистіть банани, розріжте на шматочки чи половинки й заморозьте в пакеті — до 3 місяців.",
        "Для бананового хліба й мафінів розморозьте їх і використовуйте разом із рідиною, що виділилася.",
        "Заморожені шматочки — основа густого смузі й «морозива» з бананів без цукру й льоду.",
      ],
    },
    createdAt: "2026-09-02T09:00:00Z",
  },
  {
    id: "l-stale-bread",
    slug: "cherstvyy-hleb-vtoraya-zhizn",
    category: "saving",
    image: img("saving"),
    title: {
      ru: "Вторая жизнь чёрствого хлеба",
      en: "A second life for stale bread",
      ua: "Друге життя черствого хліба",
    },
    summary: {
      ru: "Как освежить батон за 5 минут и что приготовить из остатков.",
      en: "How to revive a loaf in 5 minutes and what to make with the rest.",
      ua: "Як освіжити батон за 5 хвилин і що приготувати з рештків.",
    },
    body: {
      ru: [
        "Слегка зачерствевший батон сбрызните водой и подержите в духовке при 150–160 °C 5–7 минут — он снова станет мягким внутри и хрустящим снаружи. Съешьте сразу.",
        "Гренки: нарежьте кубиками, сбрызните маслом, посолите и запеките при 180 °C 10–15 минут — для супов и салатов.",
        "Панировочные сухари: высушите хлеб при 100–120 °C до хруста и измельчите в блендере. Хранятся в банке несколько месяцев.",
        "Французские тосты, хлебный пудинг, панцанелла и фрикадельки с размоченным хлебом — чёрствый хлеб в них даже лучше свежего.",
      ],
      en: [
        "Sprinkle a slightly stale loaf with water and warm it at 150–160 °C for 5–7 minutes — it's soft inside and crisp outside again. Eat it straight away.",
        "Croutons: cube, drizzle with oil, salt and bake at 180 °C for 10–15 minutes — for soups and salads.",
        "Breadcrumbs: dry the bread at 100–120 °C until crisp and blitz in a blender. They keep in a jar for months.",
        "French toast, bread pudding, panzanella and meatballs with soaked bread — stale bread is even better in them than fresh.",
      ],
      ua: [
        "Трохи зачерствілий батон збризніть водою й потримайте в духовці за 150–160 °C 5–7 хвилин — він знову стане м'яким усередині й хрустким зовні. З'їжте одразу.",
        "Грінки: наріжте кубиками, збризніть олією, посоліть і запечіть за 180 °C 10–15 хвилин — для супів і салатів.",
        "Панірувальні сухарі: висушіть хліб за 100–120 °C до хрусткості й подрібніть у блендері. Зберігаються в банці кілька місяців.",
        "Французькі тости, хлібний пудинг, панцанела й фрикадельки з розмоченим хлібом — черствий хліб у них навіть кращий за свіжий.",
      ],
    },
    createdAt: "2026-09-01T09:00:00Z",
  },
];
