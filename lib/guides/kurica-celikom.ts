import type { Guide } from "./types";

export const guide: Guide = {
  slug: "kurica-celikom",
  emoji: "🐔",
  updated: "2026-09-27",
  title: {
    ru: "Курица целиком: как разделать, запечь с хрустящей кожей и сварить бульон из остатков",
    en: "A whole chicken: how to joint it, roast it with crisp skin and make stock from the leftovers",
    ua: "Курка цілком: як розібрати, запекти з хрусткою шкіркою й зварити бульйон із залишків",
  },
  summary: {
    ru: "Почему целая курица выгоднее частей, разделка на 8 частей за 5 минут, запекание со сухим посолом и хрустящей кожей, курица «бабочкой», как понять готовность по температуре, сочная грудка, бульон из каркаса и безопасность при работе с сырой птицей.",
    en: "Why a whole chicken is better value than parts, jointing into 8 pieces in 5 minutes, roasting with a dry brine and crisp skin, spatchcock chicken, checking doneness by temperature, keeping the breast juicy, stock from the carcass and handling raw poultry safely.",
    ua: "Чому ціла курка вигідніша за частини, розбирання на 8 частин за 5 хвилин, запікання із сухим засолом і хрусткою шкіркою, курка «метеликом», як зрозуміти готовність за температурою, соковита грудка, бульйон із каркаса й безпека під час роботи з сирою птицею.",
  },
  relatedRecipes: ["kurinyy-sup-s-lapshoy", "kurinye-bedra-medovo-gorchichnye", "kurinye-shashlychki-v-duhovke"],
  sections: {
    ru: [
      {
        heading: "Почему выгодно брать целую",
        paragraphs: [
          "Килограмм целой курицы стоит заметно дешевле, чем филе или бёдра по отдельности. А из одной тушки получается сразу несколько блюд: грудка на ужин, ножки для запекания, крылья на закуску и каркас на бульон.",
          "Для запекания целиком выбирайте тушку 1,4–1,8 кг: она пропекается равномерно, и грудка не успевает пересохнуть, пока ножки доходят до готовности.",
        ],
      },
      {
        heading: "Безопасность",
        paragraphs: [
          "Не мойте сырую курицу под краном: брызги разносят бактерии по раковине и кухне на полметра вокруг, а готовка всё равно их уничтожает. Просто промокните тушку бумажными полотенцами.",
        ],
        list: [
          "Отдельная доска для сырого мяса и птицы.",
          "Мойте руки, нож и доску горячей водой с мылом сразу после разделки.",
          "Размораживайте курицу в холодильнике — на это уйдёт около суток на 2 кг.",
          "Готовность определяется температурой, а не цветом: 74 °C в самой толстой части бедра.",
        ],
      },
      {
        heading: "Разделка на 8 частей",
        paragraphs: [
          "Нужен острый нож средней длины. Кухонные ножницы для птицы облегчают работу, но не обязательны.",
        ],
        list: [
          "Ножки: оттяните ножку от тушки, прорежьте кожу, выверните бедро из сустава и отрежьте его вместе с «устрицей» на спине.",
          "Разделите ножку на бедро и голень по линии жира на суставе — нож пройдёт без усилия.",
          "Крылья: оттяните крыло, нащупайте сустав у плеча и перережьте его.",
          "Грудка: разрежьте тушку по бокам рёбер, отделив спинку. Разрежьте грудку вдоль грудины пополам.",
          "Каждую половинку грудки можно разрезать ещё поперёк — получится 8 кусков примерно одного размера.",
          "Спинку, кончики крыльев и обрезки сложите в морозилку — на бульон.",
        ],
        tip: "Если нож упирается в кость — вы не попали в сустав. Пошевелите часть, найдите место, где она гнётся, и режьте там.",
      },
      {
        heading: "Сухой посол — секрет хрустящей кожи",
        paragraphs: [
          "Натрите курицу солью (1 ч. л. на 500 г) снаружи и изнутри и оставьте без укрытия на решётке в холодильнике на 12–24 часа. Соль проникнет в мясо и сделает его сочнее, а холодный воздух высушит кожу.",
          "Сухая кожа — главное условие хруста: влажная кожа в духовке сначала пропаривается и только потом начинает жариться. Если времени нет, хотя бы тщательно промокните курицу и дайте ей полежать на воздухе час.",
        ],
      },
      {
        heading: "Запекание целиком",
        paragraphs: [
          "Достаньте курицу из холодильника за 30–40 минут. Смажьте кожу маслом, положите внутрь лимон, чеснок и травы, свяжите ножки ниткой.",
          "Запекайте при 220 °C первые 20 минут, затем уменьшите до 190 °C и пеките ещё 45–60 минут. Ориентир — около 40 минут на килограмм. Готовность проверяйте термометром в толще бедра: 74 °C. Без термометра — проколите бедро: сок должен быть прозрачным.",
        ],
        list: [
          "Кладите курицу на решётку или на подушку из овощей — так низ не тушится в соку.",
          "Не открывайте духовку часто: каждый раз теряется 20–30 °C.",
          "Дайте курице отдохнуть 10–15 минут перед нарезкой — сок распределится.",
        ],
      },
      {
        heading: "Курица «бабочкой»: быстрее и равномернее",
        paragraphs: [
          "Вырежьте ножницами хребет курицы, переверните её грудкой вверх и надавите ладонью на грудину, пока она не хрустнет. Тушка ляжет плоско.",
          "Плоская курица запекается при 220 °C за 40–45 минут вместо полутора часов, кожа румянится вся целиком, а грудка и ножки доходят одновременно. Так же готовят цыплёнка табака на сковороде под грузом.",
        ],
      },
      {
        heading: "Как сохранить грудку сочной",
        paragraphs: [
          "Грудку можно вынимать при 68–70 °C — за время отдыха она дойдёт до безопасных 72–74 °C, а бедру для нежности нужно 74–80 °C. Поэтому при запекании целиком грудка всегда рискует пересохнуть.",
        ],
        list: [
          "Сухой посол заранее — самое действенное средство.",
          "Положите под кожу грудки сливочное масло с травами.",
          "Накройте грудку фольгой, если она уже румяная, а ножки ещё не готовы.",
          "Запекайте курицу грудкой вниз первую половину времени, затем переверните.",
        ],
      },
      {
        heading: "Бульон из каркаса",
        paragraphs: [
          "Каркас от запечённой или сырой курицы — основа отличного бульона. Залейте его 2–2,5 л холодной воды, доведите до кипения, снимите пену и варите на минимальном огне 2–3 часа, не давая бурлить.",
          "За 40 минут до конца добавьте луковицу, морковь, корень петрушки или сельдерей, перец горошком и лавровый лист. Процедите, остудите и снимите жир. Бульон хранится в холодильнике 4 дня, в морозилке — 3 месяца.",
        ],
        tip: "Собирайте в пакет в морозилке каркасы, шеи, кончики крыльев и обрезки овощей. Когда наберётся полный пакет — варите бульон.",
      },
      {
        heading: "Остатки: что приготовить на следующий день",
        paragraphs: [
          "Разберите остатки запечённой курицы руками, пока они тёплые, — мясо отделяется легче. Храните в холодильнике до 3 дней.",
        ],
        list: [
          "Куриный салат с сельдереем, яблоком и йогуртовой заправкой.",
          "Суп с лапшой на бульоне из того же каркаса.",
          "Начинка для лаваша, тако или пирогов.",
          "Жареный рис или лапша вок с овощами.",
        ],
      },
    ],
    en: [
      {
        heading: "Why buy it whole",
        paragraphs: [
          "A kilo of whole chicken costs noticeably less than breasts or thighs bought separately. And one bird gives several meals: breast for dinner, legs for roasting, wings as a snack and the carcass for stock.",
          "For roasting whole, choose a 1.4–1.8 kg bird: it cooks evenly, and the breast doesn't dry out while the legs finish cooking.",
        ],
      },
      {
        heading: "Safety",
        paragraphs: [
          "Don't wash raw chicken under the tap: the splashes spread bacteria half a metre around the sink and kitchen, and cooking kills them anyway. Just pat the bird dry with paper towels.",
        ],
        list: [
          "A separate board for raw meat and poultry.",
          "Wash your hands, knife and board with hot soapy water straight after jointing.",
          "Thaw chicken in the fridge — it takes about a day per 2 kg.",
          "Doneness is about temperature, not colour: 74 °C in the thickest part of the thigh.",
        ],
      },
      {
        heading: "Jointing into 8 pieces",
        paragraphs: [
          "You need a sharp medium-length knife. Poultry shears make it easier but aren't essential.",
        ],
        list: [
          "Legs: pull the leg away from the body, cut through the skin, pop the thigh out of its socket and cut it off along with the \"oyster\" on the back.",
          "Split the leg into thigh and drumstick along the line of fat at the joint — the knife goes through easily.",
          "Wings: pull the wing out, feel for the shoulder joint and cut through it.",
          "Breast: cut along both sides of the ribs to remove the back. Split the breast in half along the breastbone.",
          "Cut each breast half across again — you'll have 8 pieces of roughly equal size.",
          "Freeze the back, wing tips and trimmings for stock.",
        ],
        tip: "If the knife hits bone, you've missed the joint. Wiggle the piece, find where it bends and cut there.",
      },
      {
        heading: "Dry brining — the secret to crisp skin",
        paragraphs: [
          "Rub the chicken with salt (1 tsp per 500 g) inside and out and leave it uncovered on a rack in the fridge for 12–24 hours. The salt penetrates the meat and makes it juicier, while the cold air dries the skin.",
          "Dry skin is the key to crispness: wet skin steams in the oven first and only then starts to brown. If you're short on time, at least pat the chicken thoroughly dry and let it sit in the air for an hour.",
        ],
      },
      {
        heading: "Roasting whole",
        paragraphs: [
          "Take the chicken out of the fridge 30–40 minutes ahead. Rub the skin with butter or oil, put lemon, garlic and herbs inside and tie the legs with string.",
          "Roast at 220 °C for the first 20 minutes, then lower to 190 °C and roast another 45–60 minutes. As a guide, about 40 minutes per kilo. Check with a thermometer in the thickest part of the thigh: 74 °C. Without one, pierce the thigh: the juices should run clear.",
        ],
        list: [
          "Set the chicken on a rack or a bed of vegetables so the underside doesn't stew in its juices.",
          "Don't open the oven often: each time it loses 20–30 °C.",
          "Let the chicken rest for 10–15 minutes before carving so the juices settle.",
        ],
      },
      {
        heading: "Spatchcock: faster and more even",
        paragraphs: [
          "Cut out the backbone with shears, turn the bird breast up and press on the breastbone with your palm until it cracks. The chicken will lie flat.",
          "A flattened chicken roasts at 220 °C in 40–45 minutes instead of an hour and a half, all the skin browns, and the breast and legs are done at the same time. The Georgian chicken tabaka is cooked the same way in a pan under a weight.",
        ],
      },
      {
        heading: "Keeping the breast juicy",
        paragraphs: [
          "The breast can come out at 68–70 °C — it climbs to a safe 72–74 °C while resting — whereas the thigh needs 74–80 °C to turn tender. So when roasting whole, the breast always risks drying out.",
        ],
        list: [
          "Dry brining in advance is the most effective fix.",
          "Push herb butter under the breast skin.",
          "Cover the breast with foil if it's already brown but the legs aren't done.",
          "Roast breast side down for the first half of the time, then turn it over.",
        ],
      },
      {
        heading: "Stock from the carcass",
        paragraphs: [
          "The carcass of a roast or raw chicken makes excellent stock. Cover it with 2–2.5 l cold water, bring to the boil, skim the foam and simmer on the lowest heat for 2–3 hours without letting it bubble hard.",
          "40 minutes before the end, add an onion, a carrot, parsley root or celery, peppercorns and a bay leaf. Strain, cool and lift off the fat. The stock keeps 4 days in the fridge and 3 months in the freezer.",
        ],
        tip: "Keep a bag in the freezer for carcasses, necks, wing tips and vegetable trimmings. When it's full, make stock.",
      },
      {
        heading: "Leftovers: what to make the next day",
        paragraphs: [
          "Pull leftover roast chicken off the bone while it's still warm — the meat comes away more easily. Keep it in the fridge for up to 3 days.",
        ],
        list: [
          "Chicken salad with celery, apple and a yoghurt dressing.",
          "Noodle soup made with stock from the same carcass.",
          "Filling for wraps, tacos or pies.",
          "Fried rice or stir-fried noodles with vegetables.",
        ],
      },
    ],
    ua: [
      {
        heading: "Чому вигідно брати цілу",
        paragraphs: [
          "Кілограм цілої курки коштує помітно дешевше, ніж філе чи стегна окремо. А з однієї тушки виходить одразу кілька страв: грудка на вечерю, ніжки для запікання, крильця на закуску й каркас на бульйон.",
          "Для запікання цілою обирайте тушку 1,4–1,8 кг: вона пропікається рівномірно, і грудка не встигає пересохнути, поки ніжки доходять до готовності.",
        ],
      },
      {
        heading: "Безпека",
        paragraphs: [
          "Не мийте сиру курку під краном: бризки розносять бактерії раковиною й кухнею на пів метра довкола, а готування однаково їх знищує. Просто промокніть тушку паперовими рушниками.",
        ],
        list: [
          "Окрема дошка для сирого м'яса й птиці.",
          "Мийте руки, ніж і дошку гарячою водою з милом одразу після розбирання.",
          "Розморожуйте курку в холодильнику — на це піде близько доби на 2 кг.",
          "Готовність визначається температурою, а не кольором: 74 °C у найтовщій частині стегна.",
        ],
      },
      {
        heading: "Розбирання на 8 частин",
        paragraphs: [
          "Потрібен гострий ніж середньої довжини. Кухонні ножиці для птиці полегшують роботу, але не обов'язкові.",
        ],
        list: [
          "Ніжки: відтягніть ніжку від тушки, проріжте шкірку, виверніть стегно із суглоба й відріжте його разом з «устрицею» на спинці.",
          "Розділіть ніжку на стегно й гомілку по лінії жиру на суглобі — ніж пройде без зусиль.",
          "Крильця: відтягніть крильце, намацайте суглоб біля плеча й переріжте його.",
          "Грудка: розріжте тушку з боків ребер, відокремивши спинку. Розріжте грудку вздовж грудини навпіл.",
          "Кожну половинку грудки можна розрізати ще впоперек — вийде 8 шматків приблизно однакового розміру.",
          "Спинку, кінчики крилець і обрізки складіть у морозилку — на бульйон.",
        ],
        tip: "Якщо ніж упирається в кістку — ви не влучили в суглоб. Поворушіть частину, знайдіть місце, де вона гнеться, і ріжте там.",
      },
      {
        heading: "Сухий засол — секрет хрусткої шкірки",
        paragraphs: [
          "Натріть курку сіллю (1 ч. л. на 500 г) зовні й усередині й залиште без накриття на решітці в холодильнику на 12–24 години. Сіль проникне в м'ясо й зробить його соковитішим, а холодне повітря висушить шкірку.",
          "Суха шкірка — головна умова хрускоту: волога шкірка в духовці спершу пропарюється й лише потім починає смажитися. Якщо часу немає, хоча б ретельно промокніть курку й дайте їй полежати на повітрі годину.",
        ],
      },
      {
        heading: "Запікання цілою",
        paragraphs: [
          "Дістаньте курку з холодильника за 30–40 хвилин. Змастіть шкірку маслом, покладіть усередину лимон, часник і трави, зв'яжіть ніжки ниткою.",
          "Запікайте при 220 °C перші 20 хвилин, потім зменште до 190 °C і печіть ще 45–60 хвилин. Орієнтир — близько 40 хвилин на кілограм. Готовність перевіряйте термометром у товщі стегна: 74 °C. Без термометра — проколіть стегно: сік має бути прозорим.",
        ],
        list: [
          "Кладіть курку на решітку або на подушку з овочів — так низ не тушкується в соку.",
          "Не відчиняйте духовку часто: щоразу втрачається 20–30 °C.",
          "Дайте курці відпочити 10–15 хвилин перед нарізанням — сік розподілиться.",
        ],
      },
      {
        heading: "Курка «метеликом»: швидше й рівномірніше",
        paragraphs: [
          "Виріжте ножицями хребет курки, переверніть її грудкою догори й натисніть долонею на грудину, доки вона не хрусне. Тушка ляже пласко.",
          "Пласка курка запікається при 220 °C за 40–45 хвилин замість півтори години, шкірка рум'яниться вся, а грудка й ніжки доходять одночасно. Так само готують курча тапака на сковорідці під вантажем.",
        ],
      },
      {
        heading: "Як зберегти грудку соковитою",
        paragraphs: [
          "Грудку можна виймати при 68–70 °C — під час відпочинку вона дійде до безпечних 72–74 °C, а стегну для ніжності треба 74–80 °C. Тому під час запікання цілою грудка завжди ризикує пересохнути.",
        ],
        list: [
          "Сухий засол заздалегідь — найдієвіший засіб.",
          "Покладіть під шкірку грудки вершкове масло з травами.",
          "Накрийте грудку фольгою, якщо вона вже рум'яна, а ніжки ще не готові.",
          "Запікайте курку грудкою донизу першу половину часу, потім переверніть.",
        ],
      },
      {
        heading: "Бульйон із каркаса",
        paragraphs: [
          "Каркас від запеченої чи сирої курки — основа чудового бульйону. Залийте його 2–2,5 л холодної води, доведіть до кипіння, зніміть піну й варіть на мінімальному вогні 2–3 години, не даючи вирувати.",
          "За 40 хвилин до кінця додайте цибулину, моркву, корінь петрушки чи селеру, перець горошком і лавровий лист. Процідіть, остудіть і зніміть жир. Бульйон зберігається в холодильнику 4 дні, у морозилці — 3 місяці.",
        ],
        tip: "Збирайте в пакет у морозилці каркаси, шиї, кінчики крилець і обрізки овочів. Коли набереться повний пакет — варіть бульйон.",
      },
      {
        heading: "Залишки: що приготувати наступного дня",
        paragraphs: [
          "Розберіть залишки запеченої курки руками, поки вони теплі, — м'ясо відокремлюється легше. Зберігайте в холодильнику до 3 днів.",
        ],
        list: [
          "Курячий салат із селерою, яблуком і йогуртовою заправкою.",
          "Суп із локшиною на бульйоні з того самого каркаса.",
          "Начинка для лаваша, тако чи пирогів.",
          "Смажений рис або локшина вок з овочами.",
        ],
      },
    ],
  },
  faq: {
    ru: [
      { q: "Почему кожа курицы не хрустит?", a: "Кожа была влажной, температура — низкой или курица лежала в собственном соку. Обсушите её заранее, запекайте на решётке и начинайте при 220 °C." },
      { q: "Можно ли запекать курицу из замороженной?", a: "Не рекомендуется: снаружи она пересохнет раньше, чем прогреется середина. Разморозьте её в холодильнике." },
      { q: "Розовое мясо у кости — это сырое?", a: "Не всегда. У молодых птиц мясо у кости может оставаться розоватым и при полной готовности. Проверяйте термометром: 74 °C в бедре." },
      { q: "Сколько хранится запечённая курица?", a: "3–4 дня в холодильнике в закрытом контейнере. Мясо без костей можно заморозить на 3 месяца." },
      { q: "Чем натереть курицу для запекания?", a: "Базовый вариант — соль, перец, чеснок и сливочное масло. Дальше — паприка, тимьян, розмарин, лимонная цедра или горчица с мёдом." },
    ],
    en: [
      { q: "Why isn't my chicken skin crisp?", a: "The skin was wet, the temperature too low, or the chicken sat in its own juices. Dry it in advance, roast on a rack and start at 220 °C." },
      { q: "Can I roast a chicken from frozen?", a: "It's not recommended: the outside dries out before the middle heats through. Thaw it in the fridge." },
      { q: "Is pink meat near the bone raw?", a: "Not always. In young birds the meat near the bone can stay pinkish even when fully cooked. Check with a thermometer: 74 °C in the thigh." },
      { q: "How long does roast chicken keep?", a: "3–4 days in the fridge in a closed container. Boneless meat can be frozen for 3 months." },
      { q: "What should I rub on a chicken before roasting?", a: "The basics are salt, pepper, garlic and butter. Beyond that: paprika, thyme, rosemary, lemon zest, or mustard with honey." },
    ],
    ua: [
      { q: "Чому шкірка курки не хрумтить?", a: "Шкірка була вологою, температура — низькою або курка лежала у власному соку. Обсушіть її заздалегідь, запікайте на решітці й починайте при 220 °C." },
      { q: "Чи можна запікати курку замороженою?", a: "Не рекомендується: зовні вона пересохне раніше, ніж прогріється середина. Розморозьте її в холодильнику." },
      { q: "Рожеве м'ясо біля кістки — це сире?", a: "Не завжди. У молодих птахів м'ясо біля кістки може лишатися рожевуватим і за повної готовності. Перевіряйте термометром: 74 °C у стегні." },
      { q: "Скільки зберігається запечена курка?", a: "3–4 дні в холодильнику в закритому контейнері. М'ясо без кісток можна заморозити на 3 місяці." },
      { q: "Чим натерти курку для запікання?", a: "Базовий варіант — сіль, перець, часник і вершкове масло. Далі — паприка, чебрець, розмарин, лимонна цедра або гірчиця з медом." },
    ],
  },
};
