import type { Guide } from "./types";

export const guide: Guide = {
  slug: "gril-i-mangal",
  emoji: "🔥",
  updated: "2026-09-26",
  title: {
    ru: "Гриль и мангал: сочный шашлык, правильные угли и овощи с полосками",
    en: "Grill and barbecue: juicy kebabs, proper coals and vegetables with char marks",
    ua: "Гриль і мангал: соковитий шашлик, правильне вугілля й овочі зі смужками",
  },
  summary: {
    ru: "Когда угли готовы, как устроить две зоны жара и проверить температуру ладонью, какое мясо брать на шашлык и почему уксус его портит. Сколько жарить шашлык, крылья, рыбу и овощи, как укротить огонь без воды и чем опасна чёрная корка.",
    en: "When the coals are ready, how to set up two heat zones and gauge temperature with your hand, which meat to use for kebabs and why vinegar ruins it. How long to grill kebabs, wings, fish and vegetables, how to tame flare-ups without water and why a black crust is a problem.",
    ua: "Коли вугілля готове, як облаштувати дві зони жару й перевірити температуру долонею, яке м'ясо брати на шашлик і чому оцет його псує. Скільки смажити шашлик, крильця, рибу й овочі, як приборкати вогонь без води й чим небезпечна чорна скоринка.",
  },
  relatedRecipes: ["kurinye-shashlychki-v-duhovke", "kurinye-krylya-v-medovo-chesnochnoy-glazuri", "krevetki-teriyaki", "kurinye-bedra-medovo-gorchichnye"],
  sections: {
    ru: [
      {
        heading: "Жарят на углях, а не на огне",
        paragraphs: [
          "Самая частая ошибка — ставить шашлык над пламенем. Открытый огонь сжигает поверхность, а середина остаётся сырой. Жарят на жаре углей: они отдают ровное инфракрасное тепло без пламени.",
          "Угли готовы, когда покрылись ровным слоем серого пепла и перестали гореть языками. Обычно это 30–40 минут после розжига для древесного угля и 40–60 минут для дров. Если в темноте угли светятся красным под пеплом — жар в самый раз.",
        ],
        tip: "Самый удобный розжиг — стартер-труба (чимни): засыпьте уголь сверху, снизу подложите бумагу или брикет для розжига. Через 15–20 минут уголь разгорится равномерно без жидкости для розжига, которая даёт химический привкус.",
      },
      {
        heading: "Две зоны жара",
        paragraphs: [
          "Сдвиньте угли на одну половину мангала или гриля, оставив вторую пустой или с тонким слоем. Получатся две зоны: прямой жар для корочки и косвенный — для того, чтобы мясо дошло, не сгорев.",
          "Это решает большинство проблем: толстые куски, курица на кости, колбаски — начинаете на прямом жаре для цвета и переносите на косвенный доходить. Если вспыхнул жир — просто переставьте шампур в холодную зону.",
        ],
      },
      {
        heading: "Проверка температуры ладонью",
        paragraphs: [
          "Поднесите ладонь к решётке на высоту 10–12 см, где будет лежать мясо, и считайте секунды, пока не придётся убрать руку.",
        ],
        list: [
          "2–3 секунды — сильный жар (230–290 °C): стейки, тонкое мясо, овощи для полосок.",
          "4–5 секунд — средний жар (180–230 °C): шашлык, курица, колбаски, рыба.",
          "6–8 секунд — слабый жар (120–180 °C): крупные куски, рёбра, доведение до готовности.",
        ],
        tip: "Регулировать жар на мангале проще высотой: поднимите шампуры на кирпичи или сдвиньте угли. У гриля с крышкой — заслонками: больше воздуха — сильнее жар.",
      },
      {
        heading: "Какое мясо брать на шашлык",
        paragraphs: [
          "Для шашлыка нужно мясо с прослойками жира: жир тает на огне и не даёт мясу пересохнуть. Постные куски на углях быстро становятся сухими.",
        ],
        list: [
          "Свинина: шея — лучший выбор, сочная и мягкая. Корейка — суше, но тоже хороша. Окорок — только в хорошем маринаде.",
          "Курица: бёдра без кости — сочнее и прощают передержку. Филе грудки — быстро пересыхает, режьте крупнее и не держите долго.",
          "Баранина: корейка или мякоть лопатки.",
          "Говядина: для шашлыка сложнее — берите мраморную вырезку или толстый край, жарьте до розового.",
        ],
        tip: "Куски — 4–5 см, одинакового размера: так они прожарятся одновременно. Мелкие пересохнут раньше, чем крупные дойдут.",
      },
      {
        heading: "Маринад: меньше уксуса",
        paragraphs: [
          "Уксус в большом количестве делает мясо не мягче, а «варёным» снаружи: кислота сворачивает белок, и поверхность становится серой и волокнистой, а шашлык — сухим. Классический маринад для свиной шеи в уксусе не нуждается вовсе.",
          "Простой и лучший маринад: на 1 кг мяса — 2–3 луковицы, натёртые или порезанные кольцами и помятые руками до сока, 2 ч. л. соли (1–1,5% от веса), 1 ч. л. молотого перца, специи по вкусу. Лук даёт сок и ферменты, соль делает мясо сочным. 4–12 часов в холодильнике.",
          "Для курицы подойдут кефир, йогурт, соевый соус с мёдом. Подробнее — в нашей статье о маринадах.",
        ],
      },
      {
        heading: "Как жарить шашлык",
        paragraphs: [
          "Нанизывайте куски не вплотную, а с зазором 3–5 мм: иначе жар не проникнет между ними, и бока останутся сырыми. Кольца лука с маринада можно нанизывать между кусками. Деревянные шпажки замочите в воде на 30 минут, чтобы не сгорели.",
          "Первые 5 минут жарьте на сильном жаре, поворачивая через 1–2 минуты, — поверхность быстро схватится и удержит сок. Затем поворачивайте каждые 3–4 минуты. Свиной шашлык готов за 15–20 минут, куриный из бёдер — за 12–15.",
          "Готовность: надрежьте самый крупный кусок — сок прозрачный, мясо светлое без розового. Точнее — термометр: свинина 63–70 °C, курица 74 °C и выше.",
        ],
        tip: "Снимите мясо с шампуров в кастрюлю, накройте крышкой и дайте отдохнуть 5 минут — соки распределятся, и шашлык будет сочнее.",
      },
      {
        heading: "Вспышки пламени: не заливайте водой",
        paragraphs: [
          "Жир, капающий на угли, вспыхивает. Многие плещут на угли водой — но это поднимает облако пепла, которое оседает на мясе, и резко сбивает жар.",
          "Лучше переставить шампуры в сторону, в косвенную зону, и дать жиру прогореть. На гриле с крышкой — закрыть крышку: без кислорода пламя погаснет. Если нужно сбить жар — используйте пульверизатор с тонким распылением, направляя его на пламя, а не на мясо.",
        ],
      },
      {
        heading: "Овощи, рыба и морепродукты",
        paragraphs: [
          "Овощи — сухие, смазанные маслом, посоленные прямо перед грилем. Кабачки и баклажаны — кружками 1–1,5 см, 3–4 минуты с каждой стороны. Перец — целиком, до чёрных пятен, затем в пакет на 10 минут: шкурка легко снимется. Кукуруза — 10–15 минут, поворачивая. Грибы шампиньоны — целиком на шпажках, 6–8 минут.",
          "Рыба прилипает к решётке — используйте решётку-корзинку или жарьте на коже. Решётку тщательно очистите, разогрейте и смажьте маслом. Стейки лосося 2–3 см — 3–4 минуты с каждой стороны. Скумбрия и дорадо целиком — 6–8 минут с каждой стороны.",
          "Креветки на шпажках — 1,5–2 минуты с каждой стороны на сильном жаре. Нанизывайте на две параллельные шпажки: так они не будут прокручиваться при переворачивании.",
        ],
        tip: "Полоски от решётки получаются, только если решётка раскалена, а продукт не двигают первые 2–3 минуты. Для «сеточки» поверните продукт на 90° на той же стороне.",
      },
      {
        heading: "Дрова, безопасность и чёрная корка",
        paragraphs: [
          "Для мангала подходят дрова лиственных пород: берёза, дуб, фруктовые (яблоня, вишня, груша) — они дают ровный жар и приятный аромат. Хвойные — ель, сосна — не годятся: смола даёт горькую копоть.",
          "Обугленные, чёрные места на мясе — это не «вкусная корочка». При сильном обугливании образуются вещества, которые при частом употреблении вредны. Срезайте подгоревшие участки, не жарьте над открытым огнём, используйте маринады — они снижают образование этих соединений.",
          "Не оставляйте мангал без присмотра, держите рядом ведро с водой или песком, никогда не подливайте жидкость для розжига на горящие угли — пламя может ударить по струе. Угли тушите водой полностью, только после того как закончили готовить.",
        ],
      },
    ],
    en: [
      {
        heading: "Grill over coals, not flames",
        paragraphs: [
          "The most common mistake is putting kebabs over flames. An open fire burns the surface while the middle stays raw. You grill over the heat of the coals: they give off even infrared heat without flames.",
          "Coals are ready when covered in an even layer of grey ash and no longer flaming. Usually that's 30–40 minutes after lighting for charcoal and 40–60 minutes for wood. If the coals glow red under the ash in the dark, the heat is just right.",
        ],
        tip: "The easiest way to light is a chimney starter: fill it with charcoal and put paper or a fire-lighter underneath. In 15–20 minutes the charcoal catches evenly without lighter fluid, which gives a chemical taste.",
      },
      {
        heading: "Two heat zones",
        paragraphs: [
          "Push the coals to one half of the grill, leaving the other half empty or thinly covered. That gives two zones: direct heat for the crust and indirect heat to finish cooking without burning.",
          "It solves most problems: thick pieces, bone-in chicken, sausages — start over direct heat for colour, then move to indirect to finish. If fat flares up, just move the skewer to the cool zone.",
        ],
      },
      {
        heading: "Testing the heat with your hand",
        paragraphs: [
          "Hold your palm 10–12 cm above the grate, where the meat will be, and count the seconds until you have to pull it away.",
        ],
        list: [
          "2–3 seconds — high heat (230–290 °C): steaks, thin cuts, vegetables for char marks.",
          "4–5 seconds — medium heat (180–230 °C): kebabs, chicken, sausages, fish.",
          "6–8 seconds — low heat (120–180 °C): large pieces, ribs, finishing.",
        ],
        tip: "On an open grill it's easiest to adjust heat by height: raise the skewers on bricks or move the coals. On a lidded grill use the vents: more air means more heat.",
      },
      {
        heading: "Which meat to use for kebabs",
        paragraphs: [
          "Kebabs need meat with some fat running through it: the fat melts over the heat and keeps the meat from drying out. Lean cuts dry out quickly over coals.",
        ],
        list: [
          "Pork: neck (collar) is the best choice — juicy and tender. Loin is drier but good too. Leg only with a good marinade.",
          "Chicken: boneless thighs are juicier and forgive overcooking. Breast dries out fast — cut it larger and don't keep it on long.",
          "Lamb: loin or boneless shoulder.",
          "Beef: harder for kebabs — use marbled tenderloin or sirloin and cook to pink.",
        ],
        tip: "Pieces 4–5 cm, all the same size, so they cook at the same time. Small ones dry out before large ones are done.",
      },
      {
        heading: "Marinade: go easy on vinegar",
        paragraphs: [
          "A lot of vinegar doesn't make meat more tender — it \"cooks\" the outside: acid sets the protein, the surface turns grey and stringy and the kebab ends up dry. A classic marinade for pork neck needs no vinegar at all.",
          "The simplest and best marinade: per 1 kg meat — 2–3 onions, grated or sliced into rings and squeezed by hand until juicy, 2 tsp salt (1–1.5% of the weight), 1 tsp ground pepper and spices to taste. Onion gives juice and enzymes; salt keeps the meat juicy. 4–12 hours in the fridge.",
          "For chicken, kefir, yoghurt or soy sauce with honey work well. More in our article on marinades.",
        ],
      },
      {
        heading: "How to grill kebabs",
        paragraphs: [
          "Thread the pieces with a 3–5 mm gap rather than tight together: otherwise heat can't get between them and the sides stay raw. Onion rings from the marinade can go between the pieces. Soak wooden skewers in water for 30 minutes so they don't burn.",
          "Grill over high heat for the first 5 minutes, turning every 1–2 minutes — the surface sets quickly and holds the juice. Then turn every 3–4 minutes. Pork kebabs are done in 15–20 minutes, chicken thigh kebabs in 12–15.",
          "Doneness: cut into the largest piece — the juice runs clear and the meat is pale with no pink. More precise is a thermometer: pork 63–70 °C, chicken 74 °C and above.",
        ],
        tip: "Slide the meat off the skewers into a pot, cover with the lid and rest for 5 minutes — the juices redistribute and the kebabs are juicier.",
      },
      {
        heading: "Flare-ups: don't douse them with water",
        paragraphs: [
          "Fat dripping onto the coals flares up. Many people splash water on the coals — but that raises a cloud of ash that settles on the meat and kills the heat.",
          "Better to move the skewers aside into the indirect zone and let the fat burn off. On a lidded grill, close the lid: without oxygen the flames go out. If you need to knock the heat back, use a fine-mist spray bottle aimed at the flame, not the meat.",
        ],
      },
      {
        heading: "Vegetables, fish and seafood",
        paragraphs: [
          "Vegetables should be dry, brushed with oil and salted just before grilling. Courgettes and aubergines in 1–1.5 cm rounds, 3–4 minutes per side. Peppers whole until blackened in patches, then into a bag for 10 minutes — the skin slips off. Corn 10–15 minutes, turning. Button mushrooms whole on skewers, 6–8 minutes.",
          "Fish sticks to the grate — use a fish basket or grill it skin-side down. Clean the grate thoroughly, heat it and oil it. Salmon steaks 2–3 cm thick, 3–4 minutes per side. Whole mackerel and sea bream 6–8 minutes per side.",
          "Shrimp on skewers: 1.5–2 minutes per side over high heat. Thread them onto two parallel skewers so they don't spin when you turn them.",
        ],
        tip: "Grill marks only appear if the grate is very hot and the food isn't moved for the first 2–3 minutes. For crosshatching, turn it 90° on the same side.",
      },
      {
        heading: "Wood, safety and black crust",
        paragraphs: [
          "Hardwoods suit a barbecue: birch, oak, fruitwoods (apple, cherry, pear) — they give even heat and a pleasant aroma. Softwoods like spruce and pine are no good: the resin gives bitter soot.",
          "Charred, black patches on meat are not a \"tasty crust\". Heavy charring produces compounds that are harmful if eaten often. Cut off burnt bits, don't grill over open flame and use marinades — they reduce the formation of these compounds.",
          "Never leave the grill unattended, keep a bucket of water or sand nearby and never squirt lighter fluid onto burning coals — the flame can travel up the stream. Put the coals out completely with water, but only once you've finished cooking.",
        ],
      },
    ],
    ua: [
      {
        heading: "Смажать на вугіллі, а не на вогні",
        paragraphs: [
          "Найчастіша помилка — ставити шашлик над полум'ям. Відкритий вогонь спалює поверхню, а середина лишається сирою. Смажать на жару вугілля: воно віддає рівне інфрачервоне тепло без полум'я.",
          "Вугілля готове, коли вкрилося рівним шаром сірого попелу й перестало горіти язиками. Зазвичай це 30–40 хвилин після розпалювання для деревного вугілля й 40–60 хвилин для дров. Якщо в темряві вугілля світиться червоним під попелом — жар саме те.",
        ],
        tip: "Найзручніше розпалювання — стартер-труба (чимні): засипте вугілля зверху, знизу підкладіть папір або брикет для розпалювання. За 15–20 хвилин вугілля розгориться рівномірно без рідини для розпалювання, яка дає хімічний присмак.",
      },
      {
        heading: "Дві зони жару",
        paragraphs: [
          "Зсуньте вугілля на одну половину мангала чи гриля, залишивши другу порожньою або з тонким шаром. Вийдуть дві зони: прямий жар для скоринки й непрямий — для того, щоб м'ясо дійшло, не згорівши.",
          "Це розв'язує більшість проблем: товсті шматки, курка на кістці, ковбаски — починаєте на прямому жару для кольору й переносите на непрямий доходити. Якщо спалахнув жир — просто переставте шампур у холодну зону.",
        ],
      },
      {
        heading: "Перевірка температури долонею",
        paragraphs: [
          "Піднесіть долоню до решітки на висоту 10–12 см, де лежатиме м'ясо, і рахуйте секунди, доки не доведеться прибрати руку.",
        ],
        list: [
          "2–3 секунди — сильний жар (230–290 °C): стейки, тонке м'ясо, овочі для смужок.",
          "4–5 секунд — середній жар (180–230 °C): шашлик, курка, ковбаски, риба.",
          "6–8 секунд — слабкий жар (120–180 °C): великі шматки, реберця, доведення до готовності.",
        ],
        tip: "Регулювати жар на мангалі простіше висотою: підніміть шампури на цеглини або зсуньте вугілля. У гриля з кришкою — заслінками: більше повітря — сильніший жар.",
      },
      {
        heading: "Яке м'ясо брати на шашлик",
        paragraphs: [
          "Для шашлику потрібне м'ясо з прошарками жиру: жир тане на вогні й не дає м'ясу пересохнути. Пісні шматки на вугіллі швидко стають сухими.",
        ],
        list: [
          "Свинина: шия — найкращий вибір, соковита й м'яка. Корейка — сухіша, але теж добра. Окіст — лише в доброму маринаді.",
          "Курка: стегна без кістки — соковитіші й прощають передержку. Філе грудки — швидко пересихає, ріжте більшим і не тримайте довго.",
          "Баранина: корейка або м'якоть лопатки.",
          "Яловичина: для шашлику складніша — беріть мармурову вирізку або товстий край, смажте до рожевого.",
        ],
        tip: "Шматки — 4–5 см, однакового розміру: так вони просмажаться одночасно. Дрібні пересохнуть раніше, ніж великі дійдуть.",
      },
      {
        heading: "Маринад: менше оцту",
        paragraphs: [
          "Оцет у великій кількості робить м'ясо не м'якшим, а «вареним» зовні: кислота згортає білок, поверхня стає сірою й волокнистою, а шашлик — сухим. Класичний маринад для свинячої шиї в оцті не потребує зовсім.",
          "Простий і найкращий маринад: на 1 кг м'яса — 2–3 цибулини, натерті або нарізані кільцями й пом'яті руками до соку, 2 ч. л. солі (1–1,5% від ваги), 1 ч. л. меленого перцю, спеції до смаку. Цибуля дає сік і ферменти, сіль робить м'ясо соковитим. 4–12 годин у холодильнику.",
          "Для курки підійдуть кефір, йогурт, соєвий соус із медом. Докладніше — у нашій статті про маринади.",
        ],
      },
      {
        heading: "Як смажити шашлик",
        paragraphs: [
          "Нанизуйте шматки не впритул, а із зазором 3–5 мм: інакше жар не проникне між ними, і боки лишаться сирими. Кільця цибулі з маринаду можна нанизувати між шматками. Дерев'яні шпажки замочіть у воді на 30 хвилин, щоб не згоріли.",
          "Перші 5 хвилин смажте на сильному жару, перевертаючи через 1–2 хвилини, — поверхня швидко схопиться й утримає сік. Потім перевертайте кожні 3–4 хвилини. Свинячий шашлик готовий за 15–20 хвилин, курячий зі стегон — за 12–15.",
          "Готовність: надріжте найбільший шматок — сік прозорий, м'ясо світле без рожевого. Точніше — термометр: свинина 63–70 °C, курка 74 °C і вище.",
        ],
        tip: "Зніміть м'ясо із шампурів у каструлю, накрийте кришкою й дайте відпочити 5 хвилин — соки розподіляться, і шашлик буде соковитішим.",
      },
      {
        heading: "Спалахи полум'я: не заливайте водою",
        paragraphs: [
          "Жир, що капає на вугілля, спалахує. Багато хто хлюпає на вугілля водою — але це здіймає хмару попелу, яка осідає на м'ясі, і різко збиває жар.",
          "Краще переставити шампури вбік, у непряму зону, і дати жиру прогоріти. На грилі з кришкою — закрити кришку: без кисню полум'я згасне. Якщо треба збити жар — використовуйте пульверизатор із тонким розпиленням, спрямовуючи його на полум'я, а не на м'ясо.",
        ],
      },
      {
        heading: "Овочі, риба й морепродукти",
        paragraphs: [
          "Овочі — сухі, змащені олією, посолені просто перед грилем. Кабачки й баклажани — кружальцями 1–1,5 см, 3–4 хвилини з кожного боку. Перець — цілим, до чорних плям, потім у пакет на 10 хвилин: шкірка легко зніметься. Кукурудза — 10–15 хвилин, перевертаючи. Гриби печериці — цілими на шпажках, 6–8 хвилин.",
          "Риба прилипає до решітки — використовуйте решітку-кошик або смажте на шкірці. Решітку ретельно очистіть, розігрійте й змастіть олією. Стейки лосося 2–3 см — 3–4 хвилини з кожного боку. Скумбрія й дорадо цілими — 6–8 хвилин з кожного боку.",
          "Креветки на шпажках — 1,5–2 хвилини з кожного боку на сильному жару. Нанизуйте на дві паралельні шпажки: так вони не прокручуватимуться під час перевертання.",
        ],
        tip: "Смужки від решітки виходять, лише якщо решітка розпечена, а продукт не рухають перші 2–3 хвилини. Для «сіточки» поверніть продукт на 90° на тому самому боці.",
      },
      {
        heading: "Дрова, безпека й чорна скоринка",
        paragraphs: [
          "Для мангала підходять дрова листяних порід: береза, дуб, фруктові (яблуня, вишня, груша) — вони дають рівний жар і приємний аромат. Хвойні — ялина, сосна — не годяться: смола дає гірку кіптяву.",
          "Обвуглені, чорні місця на м'ясі — це не «смачна скоринка». За сильного обвуглення утворюються речовини, шкідливі в разі частого вживання. Зрізайте пригорілі ділянки, не смажте над відкритим вогнем, використовуйте маринади — вони зменшують утворення цих сполук.",
          "Не залишайте мангал без нагляду, тримайте поруч відро з водою або піском, ніколи не підливайте рідину для розпалювання на палаюче вугілля — полум'я може вдарити по струменю. Вугілля гасіть водою повністю, лише після того як закінчили готувати.",
        ],
      },
    ],
  },
  faq: {
    ru: [
      { q: "Почему шашлык получился сухим?", a: "Постное мясо, слишком мелкие куски, уксус в маринаде или передержка на углях. Берите свиную шею или куриные бёдра, режьте 4–5 см и проверяйте готовность термометром." },
      { q: "Сколько угля нужно на мангал?", a: "Примерно 1–1,5 кг древесного угля на 2–3 кг мяса. Слой углей — 5–7 см, ровный по всей длине шампуров." },
      { q: "Можно ли жарить шашлык из замороженного мяса?", a: "Только после полной разморозки в холодильнике. Иначе снаружи сгорит, а внутри останется ледяным. Лучше мариновать размороженное." },
      { q: "Как сделать овощи на гриле без решётки?", a: "Нанижите на шампуры крупными кусками: перец, лук, кабачок, шампиньоны, помидоры черри. Или заверните в фольгу с маслом и чесноком и положите прямо на угли на 15–20 минут." },
      { q: "Почему мясо прилипает к решётке?", a: "Решётка грязная или холодная, или мясо перевернули слишком рано. Прогрейте и очистите решётку, смажьте маслом и не трогайте мясо, пока оно само не отойдёт." },
    ],
    en: [
      { q: "Why were my kebabs dry?", a: "Lean meat, pieces too small, vinegar in the marinade or overcooking. Use pork neck or chicken thighs, cut 4–5 cm pieces and check doneness with a thermometer." },
      { q: "How much charcoal do I need?", a: "Roughly 1–1.5 kg charcoal for 2–3 kg meat. A 5–7 cm layer of coals, even along the whole length of the skewers." },
      { q: "Can I grill kebabs from frozen meat?", a: "Only after thawing completely in the fridge. Otherwise the outside burns while the middle stays icy. Better to marinate the thawed meat." },
      { q: "How do I grill vegetables without a grate?", a: "Thread large pieces onto skewers: pepper, onion, courgette, mushrooms, cherry tomatoes. Or wrap them in foil with oil and garlic and lay them right on the coals for 15–20 minutes." },
      { q: "Why does meat stick to the grate?", a: "The grate is dirty or cold, or the meat was turned too soon. Heat and clean the grate, oil it and don't touch the meat until it releases by itself." },
    ],
    ua: [
      { q: "Чому шашлик вийшов сухим?", a: "Пісне м'ясо, надто дрібні шматки, оцет у маринаді або передержка на вугіллі. Беріть свинячу шию або курячі стегна, ріжте 4–5 см і перевіряйте готовність термометром." },
      { q: "Скільки вугілля потрібно на мангал?", a: "Приблизно 1–1,5 кг деревного вугілля на 2–3 кг м'яса. Шар вугілля — 5–7 см, рівний по всій довжині шампурів." },
      { q: "Чи можна смажити шашлик із замороженого м'яса?", a: "Лише після повного розморожування в холодильнику. Інакше зовні згорить, а всередині лишиться крижаним. Краще маринувати розморожене." },
      { q: "Як зробити овочі на грилі без решітки?", a: "Нанижіть на шампури великими шматками: перець, цибулю, кабачок, печериці, помідори чері. Або загорніть у фольгу з олією й часником і покладіть просто на вугілля на 15–20 хвилин." },
      { q: "Чому м'ясо прилипає до решітки?", a: "Решітка брудна або холодна, або м'ясо перевернули надто рано. Прогрійте й очистіть решітку, змастіть олією й не чіпайте м'ясо, доки воно саме не відійде." },
    ],
  },
};
