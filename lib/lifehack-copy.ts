import type { Localized } from "./langs";

// Lifehack copy kept out of the long seed arrays:
//  • LIFEHACK_SUMMARIES — the card text and the meta description. Written at
//    200+ characters so the search snippet says what the trick is and why it
//    works, rather than a one-line teaser.
//  • UA_LIFEHACKS — Ukrainian title and body for the six lifehacks that were
//    ru + en only.
// applyLifehackCopy() in lib/data.ts merges both in; scripts/ua-sql.ts writes
// the same text into the live database, so the two cannot disagree.

export const LIFEHACK_SUMMARIES: Record<string, Localized> = {
  "kak-hranit-zelen": {
    ru: "Петрушка, укроп и кинза желтеют через два дня, если держать их в пакете. Поставьте пучок в стакан с водой, как букет, накройте сверху пакетом и меняйте воду раз в 2–3 дня — зелень простоит свежей до двух недель.",
    en: "Parsley, dill and coriander wilt in two days in a plastic bag. Stand the bunch in a glass of water like flowers, cover the tops loosely with a bag and change the water every 2–3 days — the herbs stay fresh for up to two weeks.",
    ua: "Петрушка, кріп і кінза жовтіють за два дні, якщо тримати їх у пакеті. Поставте пучок у склянку з водою, як букет, накрийте зверху пакетом і міняйте воду раз на 2–3 дні — зелень простоїть свіжою до двох тижнів.",
  },
  "rezat-luk-bez-slez": {
    ru: "Слёзы при нарезке лука вызывает газ, который выделяется из повреждённых клеток. Три приёма, которые реально работают: охладить лук 15 минут, резать очень острым ножом и не трогать корень до самого конца.",
    en: "Onion tears come from a gas released by damaged cells. Three tricks that actually work: chill the onion for 15 minutes, cut it with a really sharp knife, and leave the root end until the very last cut.",
    ua: "Сльози під час нарізання цибулі спричиняє газ, що виділяється з пошкоджених клітин. Три прийоми, які справді працюють: охолодити цибулю 15 хвилин, різати дуже гострим ножем і не чіпати корінь до самого кінця.",
  },
  "otmyt-prigorevshuyu-skovorodu": {
    ru: "Пригоревший нагар не нужно оттирать целый час и травить агрессивной химией. Две ложки соды, вода и 10 минут кипения размягчают даже старый нагар — после этого он отходит обычной лопаткой почти без усилий.",
    en: "Burnt-on food doesn't need an hour of scrubbing or harsh chemicals. Two spoons of baking soda, some water and 10 minutes of boiling soften even old residue — after that it lifts off with a spatula almost effortlessly.",
    ua: "Пригорілий наліт не треба відтирати цілу годину й труїти агресивною хімією. Дві ложки соди, вода й 10 хвилин кипіння розм'якшують навіть старий наліт — після цього він відходить лопаткою майже без зусиль.",
  },
  "zamorozka-produktov-pravilno": {
    ru: "Что и как замораживать, чтобы не выбрасывать испорченное: порции плоским слоем в пакетах размораживаются быстрее, подписанная дата не даёт продуктам залежаться, а зелень в масле в формочках для льда становится готовой заправкой.",
    en: "What to freeze and how, so nothing ends up in the bin: flat portions in bags thaw faster, a written date stops food from getting forgotten, and herbs frozen in oil in ice-cube trays become a ready-made dressing.",
    ua: "Що й як заморожувати, щоб не викидати зіпсоване: порції пласким шаром у пакетах розморожуються швидше, підписана дата не дає продуктам залежатися, а зелень в олії у формочках для льоду стає готовою заправкою.",
  },
  "ekonomit-na-produktah": {
    ru: "Пять простых привычек, которые снижают счёт в магазине почти на треть без всяких диет: меню на неделю и покупки по списку, домашние бульоны и соусы, сезонные овощи и блюда из остатков вместо мусорного ведра.",
    en: "Five simple habits that cut the grocery bill by almost a third with no dieting at all: a weekly menu and a shopping list, homemade stock and sauces, seasonal vegetables, and meals from leftovers instead of the bin.",
    ua: "П'ять простих звичок, які зменшують чек у магазині майже на третину без жодних дієт: меню на тиждень і покупки за списком, домашні бульйони й соуси, сезонні овочі та страви із залишків замість смітника.",
  },
  "proverit-svezhest-yaic": {
    ru: "Стакан холодной воды скажет о яйце больше, чем дата на упаковке. Лежит на дне — свежее, встало вертикально — используйте поскорее, всплыло — выбросьте. Проверка занимает 10 секунд и работает с любыми яйцами.",
    en: "A glass of cold water tells you more about an egg than the date on the box. Lying on the bottom means fresh, standing upright means use it soon, floating means throw it away. The test takes 10 seconds and works with any eggs.",
    ua: "Склянка холодної води скаже про яйце більше, ніж дата на упаковці. Лежить на дні — свіже, стало вертикально — використайте якнайшвидше, спливло — викиньте. Перевірка займає 10 секунд і працює з будь-якими яйцями.",
  },
  "pochistit-chesnok-za-10-sekund": {
    ru: "Чистить чеснок по одному зубчику больше не придётся: банка с крышкой или две металлические миски и 15–20 секунд энергичной тряски снимают шелуху со всей головки сразу. Объясняем, почему с молодым чесноком приём не работает.",
    en: "No more peeling garlic clove by clove: a jar with a lid or two metal bowls and 15–20 seconds of hard shaking take the skins off a whole head at once. We also explain why the trick doesn't work with young, fresh garlic.",
    ua: "Чистити часник по одному зубчику більше не доведеться: банка з кришкою або дві металеві миски й 15–20 секунд енергійного трусіння знімають лушпиння з усієї головки одразу. Пояснюємо, чому з молодим часником прийом не працює.",
  },
  "bystro-razmyagchit-maslo": {
    ru: "Забыли заранее достать масло для выпечки? Три способа размягчить его за 5–15 минут без микроволновки: натереть на тёрке, нарезать кубиками или накрыть тёплым стаканом. И почему растопленное масло портит крем и песочное тесто.",
    en: "Forgot to take the butter out for baking? Three ways to soften it in 5–15 minutes without a microwave: grate it, cube it, or cover it with a warmed glass. Plus why melted butter ruins buttercream and shortcrust pastry.",
    ua: "Забули заздалегідь дістати масло для випічки? Три способи розм'якшити його за 5–15 хвилин без мікрохвильовки: натерти на тертці, нарізати кубиками або накрити теплою склянкою. І чому розтоплене масло псує крем і пісочне тісто.",
  },
  "vyzhat-iz-limona-bolshe-soka": {
    ru: "Как выжать из лимона почти вдвое больше сока без соковыжималки: прогреть его 10–15 секунд, прокатать по столу с нажимом, разрезать вдоль, а не поперёк, и выжимать через вилку. Косточки при этом остаются в ладони.",
    en: "How to get almost twice as much juice from a lemon without a juicer: warm it for 10–15 seconds, roll it hard on the counter, cut it lengthways rather than across, and squeeze it over a fork. The pips stay in your hand.",
    ua: "Як вичавити з лимона майже вдвічі більше соку без соковижималки: прогріти його 10–15 секунд, прокатати по столу з натиском, розрізати вздовж, а не впоперек, і вичавлювати через виделку. Кісточки при цьому залишаються в долоні.",
  },
  "snyat-kozhicu-s-pomidorov": {
    ru: "Кожица с помидоров снимается за 30 секунд, если знать приём: крестообразный надрез, 20–30 секунд в кипятке и сразу в ледяную воду. Подходит для соусов, супов и заготовок — так же легко чистятся персики и абрикосы.",
    en: "Tomato skins come off in 30 seconds once you know the trick: score a cross, drop the tomato into boiling water for 20–30 seconds, then straight into iced water. Perfect for sauces, soups and preserves — and it works for peaches and apricots too.",
    ua: "Шкірка з помідорів знімається за 30 секунд, якщо знати прийом: хрестоподібний надріз, 20–30 секунд в окропі й одразу в крижану воду. Підходить для соусів, супів і заготовок — так само легко чистяться персики й абрикоси.",
  },
  "yayca-komnatnoy-temperatury-bystro": {
    ru: "Рецепт выпечки просит яйца комнатной температуры, а они в холодильнике? Тёплая вода около 40 °C согреет их за 5–10 минут. Рассказываем, почему холодные яйца расслаивают крем и мешают бисквиту подняться.",
    en: "The baking recipe wants room-temperature eggs and yours are in the fridge? Warm tap water at about 40 °C brings them up in 5–10 minutes. We explain why cold eggs split buttercream and stop a sponge from rising properly.",
    ua: "Рецепт випічки просить яйця кімнатної температури, а вони в холодильнику? Тепла вода близько 40 °C зігріє їх за 5–10 хвилин. Розповідаємо, чому холодні яйця розшаровують крем і заважають бісквіту піднятися.",
  },
  "polovinka-avokado-ne-temneet": {
    ru: "Вторая половинка авокадо темнеет от контакта с воздухом. Сбрызните срез лимонным соком и прижмите плёнку прямо к мякоти без пузырей — так авокадо останется зелёным 1–2 дня. Косточка, вопреки мифу, почти не помогает.",
    en: "The other half of an avocado browns where air touches it. Brush the cut with lemon juice and press cling film right onto the flesh with no air bubbles — it stays green for 1–2 days. Contrary to the myth, the stone hardly helps.",
    ua: "Друга половинка авокадо темніє від контакту з повітрям. Збризніть зріз лимонним соком і притисніть плівку просто до м'якоті без бульбашок — так авокадо залишиться зеленим 1–2 дні. Кісточка, всупереч міфу, майже не допомагає.",
  },
  "hleb-ne-cherstveet": {
    ru: "Холодильник сушит хлеб в разы быстрее кухонного стола: при его температуре крахмал кристаллизуется быстрее всего. Как хранить хлеб 2–3 дня, что замораживать ломтиками и почему при плесени нужно выбросить всю буханку.",
    en: "The fridge dries bread out several times faster than the counter: starch crystallises fastest at fridge temperature. How to keep bread for 2–3 days, what to freeze in slices, and why one patch of mould means the whole loaf goes.",
    ua: "Холодильник сушить хліб у рази швидше за кухонний стіл: за його температури крохмаль кристалізується найшвидше. Як зберігати хліб 2–3 дні, що заморожувати скибочками й чому за пліснявою треба викинути всю буханку.",
  },
  "yagody-ne-pleseneyut": {
    ru: "Клубника и малина плесневеют за пару дней, но короткая ванна из уксуса и воды смывает споры плесени. Затем полностью обсушите ягоды и храните в контейнере с бумажным полотенцем — так они простоят до недели.",
    en: "Strawberries and raspberries go mouldy in a couple of days, but a quick bath in vinegar and water washes off the mould spores. Dry the berries completely and keep them in a container lined with paper towel — they last up to a week.",
    ua: "Полуниця й малина пліснявіють за пару днів, але коротка ванна з оцту й води змиває спори плісняви. Потім повністю обсушіть ягоди й зберігайте в контейнері з паперовим рушником — так вони простоять до тижня.",
  },
  "med-zasaharilsya": {
    ru: "Засахаренный мёд не испортился и не подделка: натуральный мёд почти всегда кристаллизуется через несколько месяцев. Как вернуть ему жидкость на водяной бане до 45 °C и не потерять аромат и полезные ферменты.",
    en: "Crystallised honey hasn't gone off and isn't fake: real honey almost always crystallises after a few months. How to make it runny again in a warm water bath below 45 °C without losing its aroma and beneficial enzymes.",
    ua: "Зацукрований мед не зіпсувався й не підробка: натуральний мед майже завжди кристалізується через кілька місяців. Як повернути йому рідину на водяній бані до 45 °C і не втратити аромат і корисні ферменти.",
  },
  "banany-dolshe-ostayutsya-zheltymi": {
    ru: "Бананы чернеют за два дня из-за этилена — газа, который ускоряет созревание и выходит в основном через черешки. Разделите связку, оберните черешки плёнкой и храните отдельно от яблок и авокадо — и они дольше останутся жёлтыми.",
    en: "Bananas blacken in two days because of ethylene — a ripening gas that escapes mostly through the stems. Split the bunch, wrap the stems in cling film and keep them away from apples and avocados, and they stay yellow much longer.",
    ua: "Банани чорніють за два дні через етилен — газ, який пришвидшує дозрівання й виходить переважно через черешки. Розділіть зв'язку, оберніть черешки плівкою й зберігайте окремо від яблук і авокадо — і вони довше залишаться жовтими.",
  },
  "otmyt-duhovku-sodoy": {
    ru: "Духовку можно отмыть без едкой химии: паста из соды и воды за ночь размягчает даже старый пригоревший жир, а уксус утром растворяет остатки. Пошагово — как наносить пасту, что делать с решётками и где нельзя её мазать.",
    en: "You can clean an oven without harsh chemicals: a baking-soda paste left overnight softens even old baked-on grease, and vinegar dissolves what's left in the morning. Step by step — how to apply it, what to do with the racks and where not to put it.",
    ua: "Духовку можна відмити без їдкої хімії: паста із соди й води за ніч розм'якшує навіть старий пригорілий жир, а оцет уранці розчиняє залишки. Покроково — як наносити пасту, що робити з решітками й де її не можна мазати.",
  },
  "nakip-v-chaynike": {
    ru: "Накипь в чайнике уходит за один раз и за копейки: 1–2 ложки лимонной кислоты на литр воды, кипячение и час ожидания. Как убрать кислый привкус после чистки и как часто повторять, чтобы налёт больше не нарастал.",
    en: "Limescale in a kettle comes off in one go and for pennies: 1–2 spoons of citric acid per litre of water, a boil and an hour's wait. How to get rid of the sour taste afterwards and how often to repeat so the scale never builds up again.",
    ua: "Накип у чайнику зникає за один раз і за копійки: 1–2 ложки лимонної кислоти на літр води, кип'ятіння й година очікування. Як прибрати кислий присмак після чищення й як часто повторювати, щоб наліт більше не наростав.",
  },
  "zapah-ryby-i-chesnoka-s-ruk": {
    ru: "Запах рыбы, чеснока и лука въедается в кожу и не смывается мылом. Работают нержавеющая сталь под холодной водой, лимон с солью, кофейная гуща или сухая горчица. И почему руки нужно мыть именно холодной водой, а не горячей.",
    en: "The smell of fish, garlic and onion sinks into the skin and soap won't shift it. What works: stainless steel under cold water, lemon with salt, coffee grounds or dry mustard. And why you should wash your hands in cold water, not hot.",
    ua: "Запах риби, часнику й цибулі в'їдається в шкіру й не змивається милом. Працюють нержавіюча сталь під холодною водою, лимон із сіллю, кавова гуща або суха гірчиця. І чому руки треба мити саме холодною водою, а не гарячою.",
  },
  "doska-bez-zapaha": {
    ru: "Деревянная разделочная доска впитывает запахи и пятна, но крупная соль и половинка лимона отмывают её лучше любого средства. Плюс паста из соды для стойких пятен и масло раз в месяц, чтобы доска не трескалась.",
    en: "A wooden chopping board soaks up smells and stains, but coarse salt and half a lemon clean it better than any product. Plus a baking-soda paste for stubborn marks, and a monthly coat of oil so the board doesn't crack.",
    ua: "Дерев'яна обробна дошка вбирає запахи й плями, але крупна сіль і половинка лимона відмивають її краще за будь-який засіб. Плюс паста із соди для стійких плям і олія раз на місяць, щоб дошка не тріскалася.",
  },
  "otmyt-terku-posle-syra": {
    ru: "Засохший сыр на тёрке держится намертво и рвёт губки. Мойте её сразу и холодной водой, чистите щёткой с изнанки, а если не успели — натрите кусок сырой картошки или корку хлеба: они вытолкнут остатки сыра из зубцов.",
    en: "Dried cheese clings to a grater and shreds sponges. Wash it straight away in cold water, scrub from the inside with a brush, and if you're too late, grate a piece of raw potato or a bread crust — they push the cheese out of the teeth.",
    ua: "Засохлий сир на тертці тримається намертво й рве губки. Мийте її одразу й холодною водою, чистьте щіткою з виворотного боку, а якщо не встигли — натріть шматок сирої картоплі або скоринку хліба: вони виштовхнуть залишки сиру.",
  },
  "bulon-iz-ochistkov": {
    ru: "Очистки лука и моркови, концы сельдерея, стебли зелени и грибные ножки превращаются в ароматный бесплатный бульон. Что собирать в пакет в морозилке, чего туда класть нельзя и сколько варить, чтобы получилась основа для супов.",
    en: "Onion and carrot peelings, celery ends, herb stalks and mushroom stems turn into a fragrant stock that costs nothing. What to collect in a freezer bag, what must never go in, and how long to simmer it for a proper soup base.",
    ua: "Очистки цибулі й моркви, кінчики селери, стебла зелені й ніжки грибів перетворюються на ароматний безкоштовний бульйон. Що збирати в пакет у морозилці, чого туди класти не можна й скільки варити, щоб вийшла основа для супів.",
  },
  "zelen-v-masle-kubikami": {
    ru: "Остатки петрушки, укропа и базилика, которые начинают вянуть, не нужно выбрасывать. Порубите их, залейте маслом в формочках для льда и заморозьте — получатся кубики готовой заправки, которые хранятся до полугода.",
    en: "Leftover parsley, dill and basil that's starting to wilt doesn't have to go in the bin. Chop it, cover it with oil in an ice-cube tray and freeze — you get cubes of ready-made dressing that keep for up to six months.",
    ua: "Залишки петрушки, кропу й базиліку, які починають в'янути, не треба викидати. Порубайте їх, залийте олією у формочках для льоду й заморозьте — вийдуть кубики готової заправки, що зберігаються до пів року.",
  },
  "korki-parmezana-v-sup": {
    ru: "Твёрдая корка пармезана, которую уже не натереть, — секретный ингредиент итальянских бабушек. Брошенная в суп, соус или ризотто на 30 минут, она отдаёт глубокий сырный вкус умами. Так же работают корки грана падано и пекорино.",
    en: "The hard parmesan rind you can no longer grate is an Italian grandmother's secret ingredient. Dropped into soup, sauce or risotto for 30 minutes, it gives a deep cheesy umami flavour. Grana Padano and pecorino rinds work the same way.",
    ua: "Тверда скоринка пармезану, яку вже не натерти, — секретний інгредієнт італійських бабусь. Кинута в суп, соус чи різото на 30 хвилин, вона віддає глибокий сирний смак умамі. Так само працюють скоринки грана падано й пекоріно.",
  },
  "perezrelye-banany-v-morozilku": {
    ru: "Почерневшие бананы — не мусор, а лучшая основа для выпечки: чем темнее банан, тем больше в нём сахара. Как их заморозить на 3 месяца, использовать в банановом хлебе и маффинах и сделать густой смузи без сахара и льда.",
    en: "Blackened bananas aren't rubbish — they're the best base for baking: the darker the banana, the more sugar it holds. How to freeze them for 3 months, use them in banana bread and muffins, and make a thick smoothie with no sugar or ice.",
    ua: "Почорнілі банани — не сміття, а найкраща основа для випічки: що темніший банан, то більше в ньому цукру. Як заморозити їх на 3 місяці, використати в банановому хлібі й мафінах і зробити густий смузі без цукру й льоду.",
  },
  "cherstvyy-hleb-vtoraya-zhizn": {
    ru: "Чёрствый батон за 5 минут снова становится мягким внутри и хрустящим снаружи — нужна только вода и духовка. А из остатков получаются гренки, панировочные сухари, французские тосты, хлебный пудинг и панцанелла.",
    en: "A stale loaf turns soft inside and crisp outside again in 5 minutes — all it takes is a splash of water and the oven. And the leftovers make croutons, breadcrumbs, French toast, bread pudding and panzanella.",
    ua: "Черствий батон за 5 хвилин знову стає м'яким усередині й хрустким зовні — потрібні лише вода й духовка. А із залишків виходять грінки, панірувальні сухарі, французькі тости, хлібний пудинг і панцанела.",
  },
};

export const UA_LIFEHACKS: Record<string, { title: string; body: string[] }> = {
  "kak-hranit-zelen": {
    title: "Як зберігати зелень два тижні",
    body: [
      "Обріжте кінчики стебел і поставте пучок у склянку з водою, як букет.",
      "Накрийте зелень зверху пакетом і приберіть у холодильник.",
      "Міняйте воду раз на 2–3 дні — зелень залишиться свіжою до двох тижнів.",
    ],
  },
  "rezat-luk-bez-slez": {
    title: "Різати цибулю без сліз",
    body: [
      "Охолодіть цибулю в холодильнику 15 хвилин перед нарізанням — холод сповільнює виділення газу.",
      "Використовуйте гострий ніж: він ріже клітини, а не чавить їх.",
      "Не зрізайте кореневу частину до кінця — там найбільше подразнювальних речовин.",
    ],
  },
  "otmyt-prigorevshuyu-skovorodu": {
    title: "Відмити пригорілу сковорідку",
    body: [
      "Насипте на дно 2 ст. л. соди й залийте водою на палець вище за наліт.",
      "Доведіть до кипіння й проваріть 10 хвилин.",
      "Злийте, остудіть — наліт відійде лопаткою майже без зусиль.",
    ],
  },
  "zamorozka-produktov-pravilno": {
    title: "Заморожування продуктів без втрат",
    body: [
      "Заморожуйте порціями: розкладіть у пакети пласким шаром — розморожується швидше.",
      "Підписуйте дату: більшість продуктів зберігаються 3 місяці без втрати якості.",
      "Зелень і трави залийте оливковою олією у формочці для льоду — готова заправка під рукою.",
    ],
  },
  "ekonomit-na-produktah": {
    title: "Економити на продуктах без дієти",
    body: [
      "Плануйте меню на тиждень і купуйте за списком — імпульсивні покупки зникають.",
      "Готуйте базові продукти самі: бульйон, хліб, соуси домашні дешевші.",
      "Використовуйте сезонні овочі — вони дешевші й смачніші.",
      "Не викидайте залишки: з них виходять супи, запіканки й начинки.",
    ],
  },
  "proverit-svezhest-yaic": {
    title: "Перевірити свіжість яєць за 10 секунд",
    body: [
      "Опустіть яйце в склянку з холодною водою.",
      "Лежить на дні — свіже. Стало вертикально — використайте якнайшвидше.",
      "Спливло на поверхню — викиньте, воно зіпсоване.",
    ],
  },
};

const MIN_SUMMARY = 200;

/** Apply the copy above to a lifehack — seed or database row. Ukrainian title
 *  and body only fill a gap; a summary is replaced only while the stored one is
 *  still a short teaser, so text later written at full length (e.g. from the
 *  admin) always wins over this file. */
export function withLifehackCopy<
  L extends { slug: string; title: Localized; summary: Localized; body: Localized<string[]> },
>(l: L): L {
  const ua = UA_LIFEHACKS[l.slug];
  const sum = LIFEHACK_SUMMARIES[l.slug];
  const summary = { ...l.summary };
  if (sum) {
    for (const k of ["ru", "en", "ua"] as const) {
      const cur = summary[k];
      if (sum[k] && (!cur || cur.length < MIN_SUMMARY)) summary[k] = sum[k];
    }
  }
  return {
    ...l,
    summary,
    title: ua && !l.title.ua ? { ...l.title, ua: ua.title } : l.title,
    body: ua && !l.body.ua ? { ...l.body, ua: ua.body } : l.body,
  };
}
