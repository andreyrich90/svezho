import type { Guide } from "./types";

export const guide: Guide = {
  slug: "sekrety-pechenya",
  emoji: "🍪",
  updated: "2026-09-26",
  title: {
    ru: "Печенье: как сделать его тягучим, хрустящим или мягким — по вашему выбору",
    en: "Cookies: how to make them chewy, crisp or soft — your choice",
    ua: "Печиво: як зробити його тягучим, хрустким або м'яким — на ваш вибір",
  },
  summary: {
    ru: "Как растопленное или мягкое масло, коричневый или белый сахар, лишний желток и количество муки меняют текстуру печенья. Зачем охлаждать тесто сутки, когда вынимать печенье из духовки, базовый рецепт шоколадного печенья, топлёное ореховое масло и хранение.",
    en: "How melted or softened butter, brown or white sugar, an extra yolk and the amount of flour change a cookie's texture. Why to chill the dough for a day, when to take cookies out of the oven, a base chocolate chip recipe, brown butter and storage.",
    ua: "Як розтоплене чи м'яке масло, коричневий чи білий цукор, зайвий жовток і кількість борошна змінюють текстуру печива. Навіщо охолоджувати тісто добу, коли виймати печиво з духовки, базовий рецепт шоколадного печива, горіхове (коричневе) масло й зберігання.",
  },
  relatedRecipes: ["ovsyanoe-pechenye", "shokoladnyy-brauni", "domashnyaya-granola"],
  sections: {
    ru: [
      {
        heading: "Каждый ингредиент меняет текстуру",
        paragraphs: [
          "Одно и то же печенье может получиться плоским и хрустящим, толстым и мягким или тягучим с хрустящим краем. Всё решают пропорции и состояние ингредиентов. Меняя по одному параметру, вы можете настроить печенье под свой вкус.",
        ],
        list: [
          "Хрустящее и тонкое: больше белого сахара, растопленное масло, меньше муки, выпекать дольше.",
          "Тягучее: больше коричневого сахара, растопленное масло, дополнительный желток, вынимать чуть недопечённым.",
          "Мягкое и пышное, как кекс: взбитое мягкое масло, больше муки, разрыхлитель, меньше сахара.",
        ],
      },
      {
        heading: "Масло: растопленное или мягкое",
        paragraphs: [
          "Растопленное масло соединяется с мукой и сахаром в плотное тесто без пузырьков воздуха. Печенье получается плотным и тягучим, с хрустящим краем.",
          "Мягкое масло, взбитое с сахаром 2–3 минуты, насыщает тесто воздухом. Печенье поднимается выше, становится светлее и мягче, ближе к кексу.",
          "Холодное масло кусочками (как для песочного теста) даёт рассыпчатое печенье — шортбред. Температура масла — один из самых сильных рычагов.",
        ],
        tip: "Топлёное (коричневое) масло: растопите масло и варите на среднем огне 5–7 минут, помешивая, пока молочный белок на дне не станет золотисто-коричневым и не появится ореховый аромат. Остудите. Оно даёт печенью карамельно-ореховый вкус. Учтите, что масло теряет около 15% воды, — добавьте 1–2 ст. л. молока.",
      },
      {
        heading: "Сахар: белый или коричневый",
        paragraphs: [
          "Белый сахар делает печенье хрустящим и помогает ему растекаться: при нагреве он плавится и тесто расплывается.",
          "Коричневый сахар содержит патоку — она удерживает влагу, делает печенье мягким и тягучим и даёт карамельный вкус. Кислотность патоки также реагирует с содой.",
          "Большинство классических рецептов используют оба сахара. Хотите тягучее — увеличьте долю коричневого до 2:1 или 3:1. Хотите хрустящее — наоборот.",
        ],
      },
      {
        heading: "Яйца, мука и разрыхлитель",
        paragraphs: [
          "Яйцо связывает тесто и добавляет влагу. Дополнительный желток (без белка) делает печенье богаче, мягче и тягучее; дополнительный белок — суше и хрустящее.",
          "Мука определяет, насколько печенье растечётся. Меньше муки — тонкое и хрустящее, больше — толстое и мягкое. Даже 20–30 г разницы заметны, поэтому муку лучше взвешивать, а не мерить стаканами.",
          "Сода делает печенье более растекающимся, трещиноватым и тёмным. Разрыхлитель — более пышным и светлым.",
        ],
      },
      {
        heading: "Охладите тесто",
        paragraphs: [
          "Самый недооценённый приём. Тесто, отдохнувшее в холодильнике от 30 минут до 72 часов, даёт совсем другое печенье.",
        ],
        list: [
          "Масло застывает — печенье меньше растекается и получается толще.",
          "Мука полностью впитывает влагу — текстура плотнее и тягучее.",
          "Сахар и ферменты успевают сработать — вкус становится глубже, карамельнее, как у дорогой выпечки.",
          "Минимум — 30 минут, лучший результат — 24–48 часов.",
        ],
        tip: "Сформуйте шарики сразу, выложите на поднос, накройте плёнкой и уберите в холодильник. Можно заморозить шарики и хранить до 3 месяцев — выпекать прямо из морозилки, добавив 1–2 минуты.",
      },
      {
        heading: "Выпечка: когда вынимать",
        paragraphs: [
          "Главная ошибка — передержать печенье в духовке, ожидая, что оно станет твёрдым. Горячее печенье всегда мягкое, оно затвердеет при остывании.",
          "Выпекайте при 175–180 °C. Вынимайте, когда края стали золотистыми и схватились, а центр ещё выглядит влажным и чуть недопечённым. Оставьте на противне на 5 минут — печенье дойдёт от тепла металла и станет плотнее, — затем переложите на решётку.",
          "Выпекайте по одному противню на среднем уровне. Если противня два — поменяйте их местами на середине времени.",
        ],
        tip: "Для ровного круглого печенья: сразу после духовки обведите каждое печенье стаканом или круглой формочкой чуть большего диаметра, «подкатывая» края к центру.",
      },
      {
        heading: "Базовое шоколадное печенье",
        paragraphs: [
          "Тягучее печенье с хрустящим краем, на 12–14 штук.",
        ],
        list: [
          "115 г сливочного масла, растопленного и чуть остывшего",
          "100 г коричневого сахара и 50 г белого",
          "1 яйцо (плюс 1 желток для большей тягучести)",
          "1 ч. л. ванильного экстракта",
          "170 г муки, ½ ч. л. соды, ½ ч. л. соли",
          "150 г тёмного шоколада, крупно порубленного",
          "Смешайте масло с сахарами венчиком, добавьте яйцо и ваниль. Вмешайте муку с содой и солью лопаткой — только до исчезновения сухой муки. Добавьте шоколад.",
          "Охладите тесто 30 минут или до 48 часов. Сформуйте шарики по 45–50 г, выложите с промежутками 5 см.",
          "Выпекайте при 180 °C 10–12 минут. Сразу посыпьте щепоткой крупной соли.",
        ],
        tip: "Рубленый шоколад плитками лучше, чем капли: он тает неровными лужицами и дробится на мелкую крошку, которая окрашивает тесто. Капли специально сделаны, чтобы не таять.",
      },
      {
        heading: "Другие классические печенья",
        paragraphs: [],
        list: [
          "Овсяное: часть муки заменяется овсяными хлопьями. Для хруста — хлопья обычные, для мягкости — быстрого приготовления. С изюмом, корицей, орехами.",
          "Песочное (шортбред): 1 часть сахара, 2 части холодного масла, 3 части муки. Без яиц и разрыхлителя. Подробнее — в нашей статье о песочном тесте.",
          "Имбирное: мёд или патока, имбирь, корица, гвоздика. Тесто охлаждают и раскатывают, вырезают формочками. Выпекают до плотности, для твёрдого печенья — чуть дольше.",
          "Амаретти: миндальная мука, белки и сахар — без муки. Хрустящие снаружи и тягучие внутри.",
          "Меренги: 1 часть белков на 2 части сахара по весу, сушить при 90–100 °C 1,5–2 часа.",
        ],
      },
      {
        heading: "Хранение",
        paragraphs: [
          "Мягкое и тягучее печенье храните в плотно закрытом контейнере. Чтобы оно дольше оставалось мягким, положите внутрь ломтик хлеба: печенье заберёт у него влагу. Хлеб меняйте каждые 1–2 дня.",
          "Хрустящее печенье храните отдельно от мягкого — иначе оно впитает влагу и размякнет. Жестяная коробка подходит лучше пластикового контейнера.",
          "Большинство печенья хранится 5–7 дней. Испечённое печенье можно заморозить до 3 месяцев; размораживайте при комнатной температуре 20–30 минут или освежите в духовке при 160 °C 3–4 минуты.",
        ],
      },
    ],
    en: [
      {
        heading: "Every ingredient changes the texture",
        paragraphs: [
          "The same cookie can come out thin and crisp, thick and soft, or chewy with a crisp edge. It all comes down to ratios and the state of the ingredients. Change one variable at a time and you can tune cookies to your taste.",
        ],
        list: [
          "Crisp and thin: more white sugar, melted butter, less flour, bake longer.",
          "Chewy: more brown sugar, melted butter, an extra yolk, take out slightly underbaked.",
          "Soft and cakey: creamed softened butter, more flour, baking powder, less sugar.",
        ],
      },
      {
        heading: "Butter: melted or softened",
        paragraphs: [
          "Melted butter combines with flour and sugar into a dense dough with no air bubbles. The cookies are dense and chewy with a crisp edge.",
          "Softened butter creamed with sugar for 2–3 minutes fills the dough with air. The cookies rise higher and turn paler and softer, closer to a cake.",
          "Cold butter in pieces (as for shortcrust) gives crumbly shortbread. Butter temperature is one of the strongest levers you have.",
        ],
        tip: "Brown butter: melt the butter and cook over medium heat for 5–7 minutes, stirring, until the milk solids on the bottom turn golden brown and it smells nutty. Cool. It gives cookies a caramel-nutty flavour. Note that the butter loses about 15% water — add 1–2 tbsp milk.",
      },
      {
        heading: "Sugar: white or brown",
        paragraphs: [
          "White sugar makes cookies crisp and helps them spread: it melts as it heats and the dough flows.",
          "Brown sugar contains molasses — it holds moisture, makes cookies soft and chewy and gives a caramel flavour. The molasses' acidity also reacts with baking soda.",
          "Most classic recipes use both. For chewy, raise the brown share to 2:1 or 3:1. For crisp, the reverse.",
        ],
      },
      {
        heading: "Eggs, flour and raising agents",
        paragraphs: [
          "Egg binds the dough and adds moisture. An extra yolk (without the white) makes cookies richer, softer and chewier; an extra white makes them drier and crisper.",
          "Flour decides how much a cookie spreads. Less flour, thin and crisp; more, thick and soft. Even 20–30 g makes a difference, so weigh flour rather than measuring it in cups.",
          "Baking soda makes cookies spread more, crack and darken. Baking powder makes them puffier and paler.",
        ],
      },
      {
        heading: "Chill the dough",
        paragraphs: [
          "The most underrated trick. Dough rested in the fridge from 30 minutes to 72 hours gives a completely different cookie.",
        ],
        list: [
          "The butter firms up — the cookies spread less and come out thicker.",
          "The flour fully hydrates — the texture is denser and chewier.",
          "Sugar and enzymes get to work — the flavour deepens and turns caramel-like, like bakery cookies.",
          "Minimum 30 minutes; best results at 24–48 hours.",
        ],
        tip: "Scoop the balls straight away, lay them on a tray, cover with cling film and refrigerate. You can freeze the balls for up to 3 months — bake straight from frozen, adding 1–2 minutes.",
      },
      {
        heading: "Baking: when to take them out",
        paragraphs: [
          "The main mistake is leaving cookies in the oven waiting for them to firm up. Hot cookies are always soft; they set as they cool.",
          "Bake at 175–180 °C. Take them out when the edges are golden and set but the centre still looks moist and slightly underdone. Leave on the tray for 5 minutes — they finish cooking from the heat of the metal and firm up — then move to a rack.",
          "Bake one tray at a time on the middle shelf. With two trays, swap them halfway through.",
        ],
        tip: "For perfectly round cookies: straight out of the oven, circle each cookie with a glass or round cutter slightly larger than it, nudging the edges inwards.",
      },
      {
        heading: "Basic chocolate chip cookies",
        paragraphs: [
          "Chewy with a crisp edge; makes 12–14.",
        ],
        list: [
          "115 g butter, melted and slightly cooled",
          "100 g brown sugar and 50 g white sugar",
          "1 egg (plus 1 yolk for extra chew)",
          "1 tsp vanilla extract",
          "170 g flour, ½ tsp baking soda, ½ tsp salt",
          "150 g dark chocolate, roughly chopped",
          "Whisk the butter with the sugars, add the egg and vanilla. Fold in the flour, soda and salt with a spatula — just until no dry flour remains. Add the chocolate.",
          "Chill the dough for 30 minutes or up to 48 hours. Scoop 45–50 g balls and space them 5 cm apart.",
          "Bake at 180 °C for 10–12 minutes. Sprinkle with a pinch of flaky salt straight away.",
        ],
        tip: "Chopped bar chocolate beats chips: it melts into uneven puddles and shatters into fine shards that marble the dough. Chips are designed not to melt.",
      },
      {
        heading: "Other classic cookies",
        paragraphs: [],
        list: [
          "Oatmeal: some of the flour is replaced with oats. Rolled oats for crunch, quick oats for softness. With raisins, cinnamon or nuts.",
          "Shortbread: 1 part sugar, 2 parts cold butter, 3 parts flour. No eggs or raising agent. More in our article on shortcrust pastry.",
          "Gingerbread: honey or molasses, ginger, cinnamon, cloves. The dough is chilled, rolled and cut with cutters. Bake until firm — a little longer for hard cookies.",
          "Amaretti: almond flour, egg whites and sugar — no wheat flour. Crisp outside, chewy inside.",
          "Meringues: 1 part egg whites to 2 parts sugar by weight, dried at 90–100 °C for 1.5–2 hours.",
        ],
      },
      {
        heading: "Storage",
        paragraphs: [
          "Keep soft and chewy cookies in an airtight container. To keep them soft for longer, add a slice of bread: the cookies take moisture from it. Replace the bread every 1–2 days.",
          "Store crisp cookies separately from soft ones — otherwise they absorb moisture and go soft. A tin works better than a plastic box.",
          "Most cookies keep 5–7 days. Baked cookies freeze for up to 3 months; thaw at room temperature for 20–30 minutes or refresh in a 160 °C oven for 3–4 minutes.",
        ],
      },
    ],
    ua: [
      {
        heading: "Кожен інгредієнт змінює текстуру",
        paragraphs: [
          "Те саме печиво може вийти пласким і хрустким, товстим і м'яким або тягучим із хрустким краєм. Усе вирішують пропорції й стан інгредієнтів. Змінюючи по одному параметру, ви можете налаштувати печиво під свій смак.",
        ],
        list: [
          "Хрустке й тонке: більше білого цукру, розтоплене масло, менше борошна, випікати довше.",
          "Тягуче: більше коричневого цукру, розтоплене масло, додатковий жовток, виймати трохи недопеченим.",
          "М'яке й пишне, як кекс: збите м'яке масло, більше борошна, розпушувач, менше цукру.",
        ],
      },
      {
        heading: "Масло: розтоплене чи м'яке",
        paragraphs: [
          "Розтоплене масло з'єднується з борошном і цукром у щільне тісто без бульбашок повітря. Печиво виходить щільним і тягучим, із хрустким краєм.",
          "М'яке масло, збите з цукром 2–3 хвилини, насичує тісто повітрям. Печиво піднімається вище, стає світлішим і м'якшим, ближчим до кексу.",
          "Холодне масло шматочками (як для пісочного тіста) дає розсипчасте печиво — шортбред. Температура масла — один із найсильніших важелів.",
        ],
        tip: "Коричневе (горіхове) масло: розтопіть масло й варіть на середньому вогні 5–7 хвилин, помішуючи, доки молочний білок на дні не стане золотисто-коричневим і не з'явиться горіховий аромат. Остудіть. Воно дає печиву карамельно-горіховий смак. Зважте, що масло втрачає близько 15% води, — додайте 1–2 ст. л. молока.",
      },
      {
        heading: "Цукор: білий чи коричневий",
        paragraphs: [
          "Білий цукор робить печиво хрустким і допомагає йому розтікатися: під час нагрівання він плавиться, і тісто розпливається.",
          "Коричневий цукор містить патоку — вона утримує вологу, робить печиво м'яким і тягучим і дає карамельний смак. Кислотність патоки також реагує із содою.",
          "Більшість класичних рецептів використовують обидва цукри. Хочете тягуче — збільште частку коричневого до 2:1 або 3:1. Хочете хрустке — навпаки.",
        ],
      },
      {
        heading: "Яйця, борошно й розпушувач",
        paragraphs: [
          "Яйце зв'язує тісто й додає вологи. Додатковий жовток (без білка) робить печиво багатшим, м'якшим і тягучішим; додатковий білок — сухішим і хрусткішим.",
          "Борошно визначає, наскільки печиво розтечеться. Менше борошна — тонке й хрустке, більше — товсте й м'яке. Навіть 20–30 г різниці помітні, тому борошно краще зважувати, а не міряти склянками.",
          "Сода робить печиво більш розтічним, потрісканим і темним. Розпушувач — пишнішим і світлішим.",
        ],
      },
      {
        heading: "Охолодіть тісто",
        paragraphs: [
          "Найнедооціненіший прийом. Тісто, що відпочило в холодильнику від 30 хвилин до 72 годин, дає зовсім інше печиво.",
        ],
        list: [
          "Масло застигає — печиво менше розтікається й виходить товщим.",
          "Борошно повністю вбирає вологу — текстура щільніша й тягучіша.",
          "Цукор і ферменти встигають спрацювати — смак стає глибшим, карамельнішим, як у дорогої випічки.",
          "Мінімум — 30 хвилин, найкращий результат — 24–48 годин.",
        ],
        tip: "Сформуйте кульки одразу, викладіть на тацю, накрийте плівкою й приберіть у холодильник. Можна заморозити кульки й зберігати до 3 місяців — випікати просто з морозилки, додавши 1–2 хвилини.",
      },
      {
        heading: "Випікання: коли виймати",
        paragraphs: [
          "Головна помилка — передержати печиво в духовці, чекаючи, що воно стане твердим. Гаряче печиво завжди м'яке, воно затвердне під час охолодження.",
          "Випікайте за 175–180 °C. Виймайте, коли краї стали золотистими й схопилися, а центр ще виглядає вологим і трохи недопеченим. Залиште на деку на 5 хвилин — печиво дійде від тепла металу й стане щільнішим, — потім перекладіть на решітку.",
          "Випікайте по одному деку на середньому рівні. Якщо дек два — поміняйте їх місцями посередині часу.",
        ],
        tip: "Для рівного круглого печива: одразу після духовки обведіть кожне печиво склянкою або круглою формочкою трохи більшого діаметра, «підкочуючи» краї до центру.",
      },
      {
        heading: "Базове шоколадне печиво",
        paragraphs: [
          "Тягуче печиво з хрустким краєм, на 12–14 штук.",
        ],
        list: [
          "115 г вершкового масла, розтопленого й трохи охололого",
          "100 г коричневого цукру й 50 г білого",
          "1 яйце (плюс 1 жовток для більшої тягучості)",
          "1 ч. л. ванільного екстракту",
          "170 г борошна, ½ ч. л. соди, ½ ч. л. солі",
          "150 г чорного шоколаду, крупно порубаного",
          "Змішайте масло з цукрами вінчиком, додайте яйце й ваніль. Вмішайте борошно із содою й сіллю лопаткою — лише до зникнення сухого борошна. Додайте шоколад.",
          "Охолодіть тісто 30 хвилин або до 48 годин. Сформуйте кульки по 45–50 г, викладіть із проміжками 5 см.",
          "Випікайте за 180 °C 10–12 хвилин. Одразу посипте дрібкою крупної солі.",
        ],
        tip: "Рубаний шоколад із плиток кращий за краплі: він тане нерівними калюжками й кришиться на дрібну крихту, яка фарбує тісто. Краплі спеціально зроблені, щоб не танути.",
      },
      {
        heading: "Інше класичне печиво",
        paragraphs: [],
        list: [
          "Вівсяне: частину борошна замінюють вівсяними пластівцями. Для хрусткості — пластівці звичайні, для м'якості — швидкого приготування. Із родзинками, корицею, горіхами.",
          "Пісочне (шортбред): 1 частина цукру, 2 частини холодного масла, 3 частини борошна. Без яєць і розпушувача. Докладніше — у нашій статті про пісочне тісто.",
          "Імбирне: мед або патока, імбир, кориця, гвоздика. Тісто охолоджують і розкачують, вирізають формочками. Випікають до щільності, для твердого печива — трохи довше.",
          "Амаретті: мигдальне борошно, білки й цукор — без пшеничного борошна. Хрусткі зовні й тягучі всередині.",
          "Меренги: 1 частина білків на 2 частини цукру за вагою, сушити за 90–100 °C 1,5–2 години.",
        ],
      },
      {
        heading: "Зберігання",
        paragraphs: [
          "М'яке й тягуче печиво зберігайте в щільно закритому контейнері. Щоб воно довше лишалося м'яким, покладіть усередину скибочку хліба: печиво забере в нього вологу. Хліб міняйте кожні 1–2 дні.",
          "Хрустке печиво зберігайте окремо від м'якого — інакше воно вбере вологу й розм'якне. Бляшана коробка підходить краще за пластиковий контейнер.",
          "Більшість печива зберігається 5–7 днів. Спечене печиво можна заморозити до 3 місяців; розморожуйте за кімнатної температури 20–30 хвилин або освіжіть у духовці за 160 °C 3–4 хвилини.",
        ],
      },
    ],
  },
  faq: {
    ru: [
      { q: "Почему печенье растеклось в блин?", a: "Масло было слишком мягким или растопленным горячим, мало муки или тесто не охладили. Охладите тесто минимум 30 минут и взвешивайте муку." },
      { q: "Почему печенье твёрдое, как камень?", a: "Передержали в духовке или вымесили тесто после добавления муки. Вынимайте, когда центр ещё мягкий, и перемешивайте муку только до однородности." },
      { q: "Можно ли уменьшить сахар?", a: "На 20–25% — да. Больше не стоит: сахар отвечает не только за сладость, но и за текстуру и растекание. Без него печенье будет сухим и бледным." },
      { q: "Нужно ли смазывать противень?", a: "Лучше застелить пергаментом или силиконовым ковриком. На смазанном маслом противне печенье растекается сильнее." },
      { q: "Почему шоколад в печенье побелел?", a: "Это сахарный или жировой налёт от перепада температуры — безопасен. Храните печенье при комнатной температуре, а не в холодильнике." },
    ],
    en: [
      { q: "Why did my cookies spread into pancakes?", a: "The butter was too soft or melted hot, there wasn't enough flour, or the dough wasn't chilled. Chill the dough for at least 30 minutes and weigh the flour." },
      { q: "Why are my cookies rock hard?", a: "They were overbaked or the dough was overmixed after the flour went in. Take them out while the centre is still soft and mix the flour only until combined." },
      { q: "Can I cut the sugar?", a: "By 20–25%, yes. More isn't a good idea: sugar is responsible not just for sweetness but for texture and spread. Without it cookies turn dry and pale." },
      { q: "Should I grease the tray?", a: "Better to line it with baking paper or a silicone mat. On a greased tray cookies spread more." },
      { q: "Why has the chocolate in my cookies turned white?", a: "That's sugar or fat bloom from a temperature change — harmless. Store cookies at room temperature, not in the fridge." },
    ],
    ua: [
      { q: "Чому печиво розтеклося в млинець?", a: "Масло було надто м'яким або розтопленим гарячим, мало борошна або тісто не охолодили. Охолодіть тісто щонайменше 30 хвилин і зважуйте борошно." },
      { q: "Чому печиво тверде, як камінь?", a: "Передержали в духовці або вимісили тісто після додавання борошна. Виймайте, коли центр ще м'який, і перемішуйте борошно лише до однорідності." },
      { q: "Чи можна зменшити цукор?", a: "На 20–25% — так. Більше не варто: цукор відповідає не лише за солодкість, а й за текстуру й розтікання. Без нього печиво буде сухим і блідим." },
      { q: "Чи треба змащувати деко?", a: "Краще застелити пергаментом або силіконовим килимком. На змащеному маслом деку печиво розтікається сильніше." },
      { q: "Чому шоколад у печиві побілів?", a: "Це цукровий або жировий наліт від перепаду температури — безпечний. Зберігайте печиво за кімнатної температури, а не в холодильнику." },
    ],
  },
};
