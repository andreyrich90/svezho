import type { Guide } from "./types";

export const guide: Guide = {
  slug: "nozhi-i-narezka",
  emoji: "🔪",
  updated: "2026-09-26",
  title: {
    ru: "Ножи и нарезка: как резать быстро, ровно и безопасно",
    en: "Knives and cutting: how to chop fast, evenly and safely",
    ua: "Ножі й нарізання: як різати швидко, рівно й безпечно",
  },
  summary: {
    ru: "Какие три ножа действительно нужны дома, как правильно держать нож и защищать пальцы «кошачьей лапкой», чем правка отличается от заточки и под каким углом точить. Как нарезать лук кубиком за минуту, что такое жюльен и брюнуаз и почему тупой нож опаснее острого.",
    en: "Which three knives you really need at home, how to hold a knife and protect your fingers with the claw grip, the difference between honing and sharpening and at what angle to sharpen. How to dice an onion in a minute, what julienne and brunoise are, and why a dull knife is more dangerous than a sharp one.",
    ua: "Які три ножі справді потрібні вдома, як правильно тримати ніж і захищати пальці «котячою лапкою», чим правлення відрізняється від заточування й під яким кутом гострити. Як нарізати цибулю кубиком за хвилину, що таке жюльєн і брюнуаз і чому тупий ніж небезпечніший за гострий.",
  },
  relatedRecipes: ["grecheskiy-salat", "vinegret", "kuritsa-stir-fray-s-ovoschami", "salat-kapreze"],
  sections: {
    ru: [
      {
        heading: "Три ножа, которых достаточно",
        paragraphs: [
          "Большие наборы из 12 ножей в подставке — в основном маркетинг. Профессиональные повара 90% работы делают одним ножом. Дома хватит трёх.",
        ],
        list: [
          "Поварской нож (шеф-нож) 18–21 см — для всего: овощи, мясо, зелень, рубка. Японский аналог — сантоку 16–18 см, с более прямым лезвием.",
          "Малый нож (овощной) 8–10 см — для работы на весу: почистить, вырезать глазки, нарезать мелкие продукты.",
          "Нож с волнистой заточкой (хлебный) 20–25 см — для хлеба, бисквитов, томатов и цитрусовых с плотной кожурой.",
        ],
        tip: "Выбирая шеф-нож, подержите его в руке. Хороший нож лежит сбалансированно — центр тяжести около места, где лезвие переходит в рукоять. Лучше один хороший нож, чем пять посредственных.",
      },
      {
        heading: "Как держать нож",
        paragraphs: [
          "Большинство людей держит нож за рукоять целиком, вытянув указательный палец по обуху. Так нож плохо контролируется и быстро устаёт рука.",
          "Профессиональный хват — «щипком». Большой и согнутый указательный палец зажимают лезвие у самого основания, с двух сторон, а остальные три пальца обхватывают рукоять. Так нож становится продолжением руки: он не болтается, им точнее управлять, и рука устаёт гораздо меньше.",
        ],
      },
      {
        heading: "«Кошачья лапка»: защищаем пальцы",
        paragraphs: [
          "Второй руке нужно не просто придерживать продукт — она ведёт нож и защищает себя. Согните пальцы так, чтобы кончики были подвёрнуты внутрь, а первые фаланги образовывали вертикальную «стенку». Большой палец спрячьте за остальными.",
          "Боковая поверхность лезвия скользит по костяшкам пальцев — они служат направляющей. Кончики пальцев убраны, и нож просто физически не может до них дотянуться. После каждого реза чуть отодвигайте «лапку» назад — так вы задаёте толщину ломтика.",
        ],
        tip: "Сначала режьте медленно. Скорость придёт сама, когда движения станут автоматическими. А подложите под доску влажное полотенце или салфетку — она перестанет скользить по столу.",
      },
      {
        heading: "Правильные движения",
        paragraphs: [
          "Нож не давит, а режет — скользящим движением. Острый нож проходит сквозь продукт под собственным весом, если двигать его вперёд-вниз.",
        ],
        list: [
          "Качание: кончик ножа остаётся на доске, вы поднимаете и опускаете рукоять, двигая продукт под лезвие. Для зелени, чеснока, мелкой рубки.",
          "Вперёд-вниз: нож входит пяткой и скользит вперёд до кончика. Для овощей — моркови, огурцов, картофеля.",
          "Тяга к себе: лезвие идёт назад, прорезая продукт. Для нежных продуктов — рыбы, мяса, помидоров.",
        ],
      },
      {
        heading: "Виды нарезки",
        paragraphs: [
          "Одинаковые кусочки — не только красота. Одинаковые размеры готовятся за одинаковое время: в супе не будет одновременно разваренной и сырой моркови.",
        ],
        list: [
          "Брюнуаз — кубик 2–3 мм: для соусов, заправок, сальсы, лука в фарш.",
          "Мелкий кубик — 5 мм: для зажарки, салатов, риса.",
          "Средний кубик — 1–1,5 см: для супов, рагу, винегрета.",
          "Крупный кубик — 2–2,5 см: для запекания, тушения.",
          "Жюльен — соломка 2–3 мм толщиной и 5–6 см длиной: для салатов, стир-фрая.",
          "Шифонад — тонкие ленточки из листьев: сложите листья стопкой, скатайте в трубочку и нарежьте поперёк. Для базилика, шпината, мяты.",
        ],
      },
      {
        heading: "Как нарезать лук кубиком",
        paragraphs: [
          "Главное — не отрезать корень: он держит слои вместе, пока вы режете.",
        ],
        list: [
          "Отрежьте верхушку, оставив корень. Разрежьте луковицу пополам вдоль, через корень, и снимите шелуху.",
          "Положите половинку срезом вниз, корнем от себя.",
          "Сделайте продольные надрезы с интервалом, равным желаемому кубику, не дорезая до корня 5–7 мм.",
          "Сделайте 1–2 горизонтальных надреза параллельно доске, также не дорезая до корня.",
          "Режьте поперёк — лук сам распадается на кубики. Остаток у корня нарежьте отдельно или отправьте в бульон.",
        ],
        tip: "Чтобы меньше плакать: острый нож (тупой давит клетки и выпускает больше едкого сока), охлаждённая в холодильнике на 30 минут луковица и вытяжка, включённая над доской.",
      },
      {
        heading: "Чеснок, зелень и имбирь",
        paragraphs: [
          "Чеснок: положите зубчик на доску, сверху — плоскую сторону лезвия и надавите ладонью. Шелуха снимется сама. Для пасты посыпьте чеснок щепоткой соли и растирайте плоскостью ножа — соль работает как абразив, и через минуту получится гладкое пюре.",
          "Зелень должна быть сухой: мокрые листья слипаются и превращаются в кашу. Режьте острым ножом и как можно меньше проходов: каждый проход по одному месту выдавливает сок, и зелень темнеет.",
          "Имбирь удобнее всего чистить краем чайной ложки: кожица легко соскребается, а мякоть остаётся. Натирайте на мелкой тёрке поперёк волокон.",
        ],
      },
      {
        heading: "Правка и заточка: разница",
        paragraphs: [
          "Режущая кромка ножа очень тонкая. При работе она не столько тупится, сколько сгибается — загибается в сторону на микроскопическом уровне. Мусат (стальной стержень) выпрямляет её обратно. Это правка — делайте её каждые 1–2 использования: 5–6 проходов с каждой стороны под тем же углом, что и заточка.",
          "Заточка — это снятие металла и формирование новой кромки. Её делают, когда правка перестаёт помогать: раз в 2–6 месяцев при домашнем использовании. Лучший инструмент — водные камни: грубый (400–1000) для формирования кромки и тонкий (3000–6000) для доводки.",
        ],
        list: [
          "Европейские ножи — угол заточки 20° на каждую сторону.",
          "Японские ножи — 15° на сторону: острее, но кромка деликатнее.",
          "Проверка остроты — лист бумаги: острый нож режет его на весу, не сминая.",
        ],
        tip: "Проверить, нужна ли заточка, помогает помидор: острый нож входит в кожицу от собственного веса. Если приходится давить — пора точить.",
      },
      {
        heading: "Доски, хранение, безопасность",
        paragraphs: [
          "Доска — деревянная или из пищевого пластика. Стекло, камень, мрамор и керамика быстро тупят нож. Для сырого мяса и рыбы держите отдельную доску, а если она одна — мойте её горячей водой с моющим средством сразу после мяса.",
          "Не мойте хорошие ножи в посудомойке: высокая температура, агрессивное средство и удары о другую посуду тупят кромку и портят рукоять. Мойте вручную сразу после работы и вытирайте насухо. Храните на магнитной планке или в подставке, но не россыпью в ящике.",
          "Тупой нож опаснее острого: чтобы им резать, приходится давить, и он соскальзывает. Острый нож идёт туда, куда вы его направили. А падающий нож никогда не ловите — просто отступите.",
        ],
      },
    ],
    en: [
      {
        heading: "Three knives are enough",
        paragraphs: [
          "Big 12-knife block sets are mostly marketing. Professional cooks do 90% of their work with one knife. At home three is plenty.",
        ],
        list: [
          "A chef's knife 18–21 cm — for everything: vegetables, meat, herbs, chopping. The Japanese equivalent is a santoku of 16–18 cm with a straighter blade.",
          "A paring knife 8–10 cm — for work in the hand: peeling, removing eyes, cutting small things.",
          "A serrated (bread) knife 20–25 cm — for bread, sponge cakes, tomatoes and thick-skinned citrus.",
        ],
        tip: "When choosing a chef's knife, hold it. A good knife feels balanced — the centre of gravity near where the blade meets the handle. One good knife beats five mediocre ones.",
      },
      {
        heading: "How to hold a knife",
        paragraphs: [
          "Most people grip the whole handle with the index finger stretched along the spine. That gives poor control and a tired hand.",
          "The professional grip is the pinch grip. Your thumb and bent index finger pinch the blade right at its base from both sides, and the other three fingers wrap the handle. The knife becomes an extension of your hand: it doesn't wobble, you steer it more precisely and your hand tires far less.",
        ],
      },
      {
        heading: "The claw: protecting your fingers",
        paragraphs: [
          "Your other hand doesn't just hold the food — it guides the knife and protects itself. Curl your fingers so the tips are tucked in and the first knuckles form a vertical wall. Tuck your thumb behind the other fingers.",
          "The flat of the blade slides against your knuckles — they act as a guide. The fingertips are tucked away and the knife physically can't reach them. After each cut, move the claw back slightly — that sets the thickness of the slice.",
        ],
        tip: "Cut slowly at first. Speed comes by itself once the movements are automatic. And put a damp towel or cloth under the board — it will stop sliding on the counter.",
      },
      {
        heading: "The right movements",
        paragraphs: [
          "A knife doesn't press, it slices — with a gliding motion. A sharp knife goes through food under its own weight if you move it forward and down.",
        ],
        list: [
          "Rocking: the tip stays on the board while you raise and lower the handle, feeding the food under the blade. For herbs, garlic, fine chopping.",
          "Forward and down: the heel enters first and the knife glides forward to the tip. For vegetables — carrots, cucumbers, potatoes.",
          "Pull cut: the blade draws backwards through the food. For delicate things — fish, meat, tomatoes.",
        ],
      },
      {
        heading: "Types of cut",
        paragraphs: [
          "Even pieces aren't just for looks. Pieces of the same size cook in the same time: no mushy and raw carrot in the same soup.",
        ],
        list: [
          "Brunoise — 2–3 mm dice: for sauces, dressings, salsa, onion for mince.",
          "Small dice — 5 mm: for sautés, salads, rice.",
          "Medium dice — 1–1.5 cm: for soups, stews, vinegret.",
          "Large dice — 2–2.5 cm: for roasting and braising.",
          "Julienne — matchsticks 2–3 mm thick and 5–6 cm long: for salads and stir-fries.",
          "Chiffonade — thin ribbons of leaves: stack the leaves, roll them up and slice across. For basil, spinach, mint.",
        ],
      },
      {
        heading: "How to dice an onion",
        paragraphs: [
          "The key is not to cut off the root: it holds the layers together while you cut.",
        ],
        list: [
          "Cut off the top, keeping the root. Halve the onion lengthways through the root and peel it.",
          "Lay a half cut-side down with the root away from you.",
          "Make lengthways cuts spaced to the size of dice you want, stopping 5–7 mm short of the root.",
          "Make 1–2 horizontal cuts parallel to the board, again stopping short of the root.",
          "Slice across — the onion falls into dice by itself. Chop the root end separately or save it for stock.",
        ],
        tip: "To cry less: a sharp knife (a dull one crushes cells and releases more irritant juice), an onion chilled in the fridge for 30 minutes, and the extractor fan on above the board.",
      },
      {
        heading: "Garlic, herbs and ginger",
        paragraphs: [
          "Garlic: put a clove on the board, lay the flat of the blade on top and press with your palm. The skin comes off by itself. For a paste, sprinkle the garlic with a pinch of salt and scrape it with the flat of the knife — the salt acts as an abrasive, and in a minute you have a smooth purée.",
          "Herbs must be dry: wet leaves clump and turn to mush. Use a sharp knife and as few passes as possible: each pass over the same spot squeezes out juice and the herbs darken.",
          "Ginger is easiest to peel with the edge of a teaspoon: the skin scrapes off and the flesh stays. Grate it finely across the fibres.",
        ],
      },
      {
        heading: "Honing and sharpening: the difference",
        paragraphs: [
          "A knife's edge is very thin. In use it doesn't so much dull as bend — it rolls to one side on a microscopic level. A honing steel straightens it back. That's honing — do it every 1–2 uses: 5–6 strokes per side at the same angle as the sharpening.",
          "Sharpening removes metal and forms a new edge. You do it when honing stops helping: every 2–6 months with home use. The best tool is whetstones: a coarse one (400–1000) to form the edge and a fine one (3000–6000) to polish it.",
        ],
        list: [
          "European knives — 20° per side.",
          "Japanese knives — 15° per side: sharper, but the edge is more delicate.",
          "Sharpness test — a sheet of paper: a sharp knife slices it held in the air without crumpling it.",
        ],
        tip: "A tomato tells you when to sharpen: a sharp knife breaks the skin under its own weight. If you have to press, it's time.",
      },
      {
        heading: "Boards, storage and safety",
        paragraphs: [
          "Use a wooden or food-grade plastic board. Glass, stone, marble and ceramic dull a knife fast. Keep a separate board for raw meat and fish; if you only have one, wash it with hot soapy water straight after the meat.",
          "Don't put good knives in the dishwasher: heat, harsh detergent and knocking against other items dull the edge and ruin the handle. Wash by hand right after use and dry at once. Store on a magnetic strip or in a block, never loose in a drawer.",
          "A dull knife is more dangerous than a sharp one: you have to press to cut and it slips. A sharp knife goes where you point it. And never try to catch a falling knife — just step back.",
        ],
      },
    ],
    ua: [
      {
        heading: "Трьох ножів досить",
        paragraphs: [
          "Великі набори з 12 ножів у підставці — здебільшого маркетинг. Професійні кухарі 90% роботи роблять одним ножем. Удома вистачить трьох.",
        ],
        list: [
          "Кухарський ніж (шеф-ніж) 18–21 см — для всього: овочі, м'ясо, зелень, рубання. Японський аналог — сантоку 16–18 см, із прямішим лезом.",
          "Малий ніж (овочевий) 8–10 см — для роботи на вазі: почистити, вирізати вічка, нарізати дрібні продукти.",
          "Ніж із хвилястим заточуванням (хлібний) 20–25 см — для хліба, бісквітів, томатів і цитрусових із щільною шкіркою.",
        ],
        tip: "Обираючи шеф-ніж, потримайте його в руці. Добрий ніж лежить збалансовано — центр ваги біля місця, де лезо переходить у руків'я. Краще один добрий ніж, ніж п'ять посередніх.",
      },
      {
        heading: "Як тримати ніж",
        paragraphs: [
          "Більшість людей тримає ніж за руків'я цілком, витягнувши вказівний палець уздовж обуха. Так ніж погано контролюється, і рука швидко втомлюється.",
          "Професійний хват — «щипком». Великий і зігнутий вказівний пальці затискають лезо біля самої основи з двох боків, а решта три пальці обхоплюють руків'я. Так ніж стає продовженням руки: він не бовтається, ним точніше керувати, і рука втомлюється набагато менше.",
        ],
      },
      {
        heading: "«Котяча лапка»: захищаємо пальці",
        paragraphs: [
          "Друга рука має не просто притримувати продукт — вона веде ніж і захищає себе. Зігніть пальці так, щоб кінчики були підвернуті всередину, а перші фаланги утворювали вертикальну «стінку». Великий палець сховайте за іншими.",
          "Бічна поверхня леза ковзає по кісточках пальців — вони слугують напрямною. Кінчики пальців прибрані, і ніж просто фізично не може до них дотягнутися. Після кожного різу трохи відсувайте «лапку» назад — так ви задаєте товщину скибочки.",
        ],
        tip: "Спершу ріжте повільно. Швидкість прийде сама, коли рухи стануть автоматичними. А підкладіть під дошку вологий рушник або серветку — вона перестане ковзати по столу.",
      },
      {
        heading: "Правильні рухи",
        paragraphs: [
          "Ніж не тисне, а ріже — ковзним рухом. Гострий ніж проходить крізь продукт під власною вагою, якщо рухати його вперед і вниз.",
        ],
        list: [
          "Гойдання: кінчик ножа лишається на дошці, ви піднімаєте й опускаєте руків'я, подаючи продукт під лезо. Для зелені, часнику, дрібного рубання.",
          "Вперед-униз: ніж входить п'ятою й ковзає вперед до кінчика. Для овочів — моркви, огірків, картоплі.",
          "Тяга до себе: лезо йде назад, прорізаючи продукт. Для ніжних продуктів — риби, м'яса, помідорів.",
        ],
      },
      {
        heading: "Види нарізання",
        paragraphs: [
          "Однакові шматочки — це не лише краса. Однакові розміри готуються за однаковий час: у супі не буде водночас розвареної й сирої моркви.",
        ],
        list: [
          "Брюнуаз — кубик 2–3 мм: для соусів, заправок, сальси, цибулі у фарш.",
          "Дрібний кубик — 5 мм: для засмажки, салатів, рису.",
          "Середній кубик — 1–1,5 см: для супів, рагу, вінегрету.",
          "Великий кубик — 2–2,5 см: для запікання, тушкування.",
          "Жюльєн — соломка завтовшки 2–3 мм і завдовжки 5–6 см: для салатів, стир-фраю.",
          "Шифонад — тонкі стрічечки з листя: складіть листя стосиком, скачайте в трубочку й наріжте впоперек. Для базиліку, шпинату, м'яти.",
        ],
      },
      {
        heading: "Як нарізати цибулю кубиком",
        paragraphs: [
          "Головне — не відрізати корінь: він тримає шари разом, поки ви ріжете.",
        ],
        list: [
          "Відріжте верхівку, залишивши корінь. Розріжте цибулину навпіл уздовж, крізь корінь, і зніміть лушпиння.",
          "Покладіть половинку зрізом донизу, коренем від себе.",
          "Зробіть поздовжні надрізи з інтервалом, що дорівнює бажаному кубику, не дорізаючи до кореня 5–7 мм.",
          "Зробіть 1–2 горизонтальні надрізи паралельно дошці, так само не дорізаючи до кореня.",
          "Ріжте впоперек — цибуля сама розпадається на кубики. Залишок біля кореня наріжте окремо або відправте в бульйон.",
        ],
        tip: "Щоб менше плакати: гострий ніж (тупий тисне клітини й випускає більше їдкого соку), охолоджена в холодильнику 30 хвилин цибулина й увімкнена над дошкою витяжка.",
      },
      {
        heading: "Часник, зелень та імбир",
        paragraphs: [
          "Часник: покладіть зубчик на дошку, зверху — пласку сторону леза й натисніть долонею. Лушпиння зніметься саме. Для пасти посипте часник дрібкою солі й розтирайте площиною ножа — сіль працює як абразив, і за хвилину вийде гладеньке пюре.",
          "Зелень має бути сухою: мокре листя злипається й перетворюється на кашу. Ріжте гострим ножем і якомога меншою кількістю проходів: кожен прохід по тому самому місцю вичавлює сік, і зелень темніє.",
          "Імбир найзручніше чистити краєм чайної ложки: шкірка легко зішкрібається, а м'якоть лишається. Натирайте на дрібній тертці впоперек волокон.",
        ],
      },
      {
        heading: "Правлення й заточування: різниця",
        paragraphs: [
          "Ріжуча кромка ножа дуже тонка. Під час роботи вона не стільки тупиться, скільки згинається — загинається вбік на мікроскопічному рівні. Мусат (сталевий стрижень) випрямляє її назад. Це правлення — робіть його кожні 1–2 використання: 5–6 проходів із кожного боку під тим самим кутом, що й заточування.",
          "Заточування — це зняття металу й формування нової кромки. Його роблять, коли правлення перестає допомагати: раз на 2–6 місяців за домашнього використання. Найкращий інструмент — водні камені: грубий (400–1000) для формування кромки й тонкий (3000–6000) для доведення.",
        ],
        list: [
          "Європейські ножі — кут заточування 20° на кожен бік.",
          "Японські ножі — 15° на бік: гостріші, але кромка делікатніша.",
          "Перевірка гостроти — аркуш паперу: гострий ніж ріже його на вазі, не зминаючи.",
        ],
        tip: "Перевірити, чи потрібне заточування, допомагає помідор: гострий ніж входить у шкірку від власної ваги. Якщо доводиться тиснути — час гострити.",
      },
      {
        heading: "Дошки, зберігання, безпека",
        paragraphs: [
          "Дошка — дерев'яна або з харчового пластику. Скло, камінь, мармур і кераміка швидко туплять ніж. Для сирого м'яса й риби тримайте окрему дошку, а якщо вона одна — мийте її гарячою водою з мийним засобом одразу після м'яса.",
          "Не мийте добрі ножі в посудомийці: висока температура, агресивний засіб і удари об інший посуд туплять кромку й псують руків'я. Мийте вручну одразу після роботи й витирайте насухо. Зберігайте на магнітній планці або в підставці, але не безладно в шухляді.",
          "Тупий ніж небезпечніший за гострий: щоб ним різати, доводиться тиснути, і він зісковзує. Гострий ніж іде туди, куди ви його спрямували. А ніж, що падає, ніколи не ловіть — просто відступіть.",
        ],
      },
    ],
  },
  faq: {
    ru: [
      { q: "Какую сталь выбрать для ножа?", a: "Для дома — нержавеющую сталь твёрдостью 56–60 HRC: она держит заточку и легко правится. Углеродистая сталь острее, но ржавеет и темнеет от кислоты. Керамика очень острая, но хрупкая и её нельзя править мусатом." },
      { q: "Можно ли точить нож электрической точилкой?", a: "Можно, но она снимает много металла, и нож быстрее «съедается». Для недорогих ножей — нормально, для хороших — лучше камни или профессиональная заточка." },
      { q: "Как часто нужно точить ножи?", a: "Правка мусатом — через каждые 1–2 использования, заточка на камнях — раз в 2–6 месяцев. Если нож после правки всё равно мнёт помидор — пора точить." },
      { q: "Почему нож оставляет на яблоке тёмный след?", a: "Так реагирует углеродистая или низкокачественная сталь с кислотой. Для фруктов берите нержавеющий нож и мойте его сразу после работы." },
      { q: "Как ухаживать за деревянной доской?", a: "Мойте вручную, сразу вытирайте и сушите стоя. Раз в месяц натирайте минеральным маслом, чтобы дерево не трескалось. Запах уберёт лимон с солью." },
    ],
    en: [
      { q: "Which steel should I choose?", a: "For home use, stainless steel of 56–60 HRC: it holds an edge and hones easily. Carbon steel gets sharper but rusts and discolours with acid. Ceramic is very sharp but brittle and can't be honed on a steel." },
      { q: "Can I use an electric sharpener?", a: "You can, but it removes a lot of metal and wears the knife down faster. Fine for cheap knives; for good ones use stones or a professional service." },
      { q: "How often should I sharpen?", a: "Hone every 1–2 uses, sharpen on stones every 2–6 months. If the knife still squashes a tomato after honing, it's time to sharpen." },
      { q: "Why does my knife leave a dark mark on an apple?", a: "That's carbon or low-quality steel reacting with acid. Use a stainless knife for fruit and wash it right after." },
      { q: "How do I look after a wooden board?", a: "Wash by hand, dry at once and stand it upright to dry. Rub with mineral oil once a month so the wood doesn't crack. Lemon and salt remove smells." },
    ],
    ua: [
      { q: "Яку сталь обрати для ножа?", a: "Для дому — нержавіючу сталь твердістю 56–60 HRC: вона тримає заточування й легко правиться. Вуглецева сталь гостріша, але іржавіє й темніє від кислоти. Кераміка дуже гостра, але крихка, і її не можна правити мусатом." },
      { q: "Чи можна гострити ніж електричною точилкою?", a: "Можна, але вона знімає багато металу, і ніж швидше «з'їдається». Для недорогих ножів — нормально, для добрих — краще камені або професійне заточування." },
      { q: "Як часто треба гострити ножі?", a: "Правлення мусатом — після кожних 1–2 використань, заточування на каменях — раз на 2–6 місяців. Якщо ніж після правлення все одно м'яне помідор — час гострити." },
      { q: "Чому ніж залишає на яблуці темний слід?", a: "Так реагує вуглецева або низькоякісна сталь із кислотою. Для фруктів беріть нержавіючий ніж і мийте його одразу після роботи." },
      { q: "Як доглядати за дерев'яною дошкою?", a: "Мийте вручну, одразу витирайте й сушіть стоячи. Раз на місяць натирайте мінеральною олією, щоб дерево не тріскалося. Запах прибере лимон із сіллю." },
    ],
  },
};
