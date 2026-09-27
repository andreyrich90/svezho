import type { Guide } from "./types";

export const guide: Guide = {
  slug: "sushi-i-rolly",
  emoji: "🍣",
  image: "/img/guides/sushi-i-rolly.webp",
  updated: "2026-09-26",
  title: {
    ru: "Суши и роллы дома: рис как в ресторане, начинки и безопасная рыба",
    en: "Sushi and rolls at home: restaurant-style rice, fillings and safe fish",
    ua: "Суші й роли вдома: рис як у ресторані, начинки й безпечна риба",
  },
  summary: {
    ru: "Какой рис взять и как его промыть, пропорция воды и заправки су, как остудить рис правильно. Как сворачивать маки и роллы «наизнанку» без разваливания, какую рыбу можно есть сырой, начинки без сырой рыбы, запечённые роллы и хранение.",
    en: "Which rice to use and how to rinse it, the water ratio and seasoned vinegar, how to cool rice properly. How to roll maki and inside-out rolls that don't fall apart, which fish is safe raw, fillings without raw fish, baked rolls and storage.",
    ua: "Який рис узяти і як його промити, пропорція води й заправки су, як правильно остудити рис. Як згортати макі й роли «навиворіт» без розвалювання, яку рибу можна їсти сирою, начинки без сирої риби, запечені роли й зберігання.",
  },
  relatedRecipes: ["salat-s-krevetkami-i-avokado", "krevetki-teriyaki", "hrustyaschie-krevetki"],
  sections: {
    ru: [
      {
        heading: "Рис — это 80% суши",
        paragraphs: [
          "В Японии повар суши годами учится варить рис, прежде чем ему доверят рыбу. Хорошие суши держатся благодаря клейкости риса, но зёрна при этом остаются отдельными, упругими и слегка тёплыми.",
          "Нужен японский круглозёрный или среднезёрный рис — в магазинах он продаётся как «рис для суши». Длиннозёрный рис (жасмин, басмати) и пропаренный не подходят: в них мало крахмала амилопектина, и роллы развалятся. Обычный круглый рис для каши — крайний вариант: он слишком разваривается.",
        ],
      },
      {
        heading: "Промывка и варка",
        paragraphs: [],
        list: [
          "Промывайте рис в холодной воде, аккуратно перетирая зёрна руками, 4–6 раз, пока вода не станет почти прозрачной. Так уходит поверхностный крахмал, который делает рис липкой кашей.",
          "Откиньте на сито и дайте постоять 15–30 минут — зёрна равномерно впитают остатки воды.",
          "Пропорция: 1 часть риса на 1,1–1,2 части воды по объёму (например, 300 г риса и 330–360 мл воды).",
          "Доведите до кипения на сильном огне под крышкой, затем уменьшите до минимума и варите 12–15 минут. Крышку не открывайте.",
          "Снимите с огня и оставьте под крышкой ещё 10–15 минут — рис дойдёт на пару.",
        ],
        tip: "Кусочек сушёной водоросли комбу размером 5×5 см, положенный в воду при варке и вынутый перед кипением, придаёт рису лёгкий вкус умами, как в хороших ресторанах.",
      },
      {
        heading: "Заправка су",
        paragraphs: [
          "Рис для суши обязательно приправляют смесью рисового уксуса, сахара и соли. Она даёт характерный кисло-сладкий вкус и слегка консервирует рис.",
        ],
        list: [
          "На 300 г сухого риса: 45–60 мл рисового уксуса, 1–1,5 ст. л. сахара, 1 ч. л. соли.",
          "Слегка подогрейте, пока сахар и соль не растворятся, — не кипятите, иначе кислота улетучится.",
          "Если нет рисового уксуса: яблочный уксус 6%, разбавленный водой 3:1, с чуть большим количеством сахара. Столовый уксус 9% не подходит — слишком резкий.",
          "Готовые смеси «приправа для суши» уже содержат сахар и соль — добавляйте их без дополнительных приправ.",
        ],
      },
      {
        heading: "Как смешать и остудить рис",
        paragraphs: [
          "Переложите горячий рис в широкую деревянную, стеклянную или пластиковую миску — не металлическую, металл реагирует с уксусом. Полейте заправкой через лопатку, распределяя по всей поверхности.",
          "Перемешивайте «режущими» движениями лопаткой, как будто разрезаете рис, а не мешаете кашу. Одновременно обмахивайте рис веером или крышкой — быстрое охлаждение делает зёрна глянцевыми и испаряет лишнюю влагу.",
          "Рис нужно остудить до температуры тела — он должен быть чуть тёплым. Горячий рис размочит нори, холодный — станет твёрдым и потеряет клейкость. Накройте миску влажным полотенцем, чтобы рис не заветрился.",
        ],
        tip: "Не убирайте рис для суши в холодильник: крахмал затвердевает, и рис становится сухим и крошащимся. Используйте его в течение нескольких часов в день приготовления.",
      },
      {
        heading: "Какую рыбу можно есть сырой",
        paragraphs: [
          "Это самый важный вопрос. В сырой рыбе могут быть личинки паразитов и бактерии. В ресторанах используют рыбу, которую замораживают глубокой шоковой заморозкой, чтобы уничтожить паразитов.",
        ],
        list: [
          "Покупайте рыбу с пометкой «для суши» или «для сашими» в проверенных рыбных магазинах.",
          "Рыбу, которую вы будете есть сырой, заморозьте дома при −18 °C и ниже не менее 7 суток, если она продавалась охлаждённой.",
          "Лучше всего подходят лосось, тунец, гребешок, желтохвост. Речную рыбу сырой не используйте никогда.",
          "Рыба должна пахнуть морем, а не рыбой, иметь упругую блестящую мякоть и яркий цвет.",
          "Беременным, детям и людям с ослабленным иммунитетом лучше выбирать роллы без сырой рыбы.",
        ],
      },
      {
        heading: "Начинки без сырой рыбы",
        paragraphs: [
          "Отличные роллы получаются вовсе без сырой рыбы — и такие безопаснее и проще для домашней кухни.",
        ],
        list: [
          "Слабосолёный или копчёный лосось (подробнее — в нашей статье о засолке рыбы).",
          "Варёные креветки, крабовые палочки или мясо краба, темпура из креветок.",
          "Копчёный угорь с соусом унаги.",
          "Японский омлет тамаго.",
          "Огурец, авокадо, болгарский перец, морковь соломкой, листья салата.",
          "Сливочный сыр («Филадельфия») — классика в сочетании с лососем и огурцом.",
          "Запечённая курица терияки или тофу — для тех, кто не ест рыбу.",
        ],
      },
      {
        heading: "Как сворачивать маки",
        paragraphs: [
          "Маки — классический ролл с нори снаружи. Для него нужен бамбуковый коврик (макису), миска с водой и уксусом (1 ст. л. уксуса на 200 мл воды) — чтобы смачивать руки, и очень острый нож.",
        ],
        list: [
          "Положите на коврик половинку листа нори блестящей стороной вниз.",
          "Смочите руки, возьмите 80–100 г риса и распределите тонким ровным слоем 0,5–1 см, оставив свободной полоску 1–1,5 см у дальнего края.",
          "Выложите начинку полоской в центр риса. Не перегружайте — 1–2 ингредиента, иначе ролл не закроется.",
          "Поднимите ближний край коврика и сверните ролл, прижимая начинку пальцами. Слегка уплотните ролл ковриком по всей длине.",
          "Смочите свободный край нори водой — он приклеится. Дайте роллу полежать швом вниз минуту.",
        ],
      },
      {
        heading: "Роллы «наизнанку» и нарезка",
        paragraphs: [
          "Урамаки — роллы рисом наружу, например «Филадельфия» и «Калифорния». Оберните коврик пищевой плёнкой — иначе рис прилипнет к бамбуку. Распределите рис по целому листу нори, посыпьте кунжутом или икрой, переверните лист рисом вниз, выложите начинку на нори и сверните. Для «Филадельфии» ролл затем покрывают тонкими ломтиками лосося и плотно прижимают ковриком через плёнку.",
          "Режьте очень острым длинным ножом, смоченным водой, одним движением на себя, не пилите. Протирайте нож влажной салфеткой после каждого реза. Сначала разрежьте ролл пополам, сложите половинки рядом и разрежьте каждую на 3 части — получится 6 одинаковых кусочков.",
        ],
        tip: "Запечённые роллы: выложите нарезанный ролл на противень, покройте «шапкой» из смеси майонеза, сливочного сыра и соуса чили или спайси, и запекайте при 200–220 °C 5–7 минут или под грилем, пока шапка не зарумянится.",
      },
      {
        heading: "Подача и хранение",
        paragraphs: [
          "К суши подают соевый соус, маринованный имбирь (гари) — чтобы освежить вкус между разными роллами, и васаби. Традиционно васаби не размешивают в соевом соусе, а кладут немного на кусочек рыбы.",
          "Суши и роллы лучше есть сразу после приготовления. Роллы с сырой рыбой нельзя хранить дольше нескольких часов даже в холодильнике. Роллы без сырой рыбы можно убрать в холодильник под плёнку до 24 часов, но рис станет твёрже. Перед подачей оставьте их на 15–20 минут при комнатной температуре.",
        ],
      },
    ],
    en: [
      {
        heading: "Rice is 80% of sushi",
        paragraphs: [
          "In Japan a sushi chef spends years learning to cook rice before being trusted with fish. Good sushi holds together thanks to sticky rice, yet the grains stay separate, springy and slightly warm.",
          "You need Japanese short- or medium-grain rice — sold as \"sushi rice\". Long-grain rice (jasmine, basmati) and parboiled rice won't work: they lack amylopectin starch and the rolls fall apart. Ordinary pudding rice is a last resort: it turns too mushy.",
        ],
      },
      {
        heading: "Rinsing and cooking",
        paragraphs: [],
        list: [
          "Rinse the rice in cold water, gently rubbing the grains with your hands, 4–6 times until the water is almost clear. This removes surface starch that makes rice gluey.",
          "Drain in a sieve and leave for 15–30 minutes — the grains absorb the remaining water evenly.",
          "Ratio: 1 part rice to 1.1–1.2 parts water by volume (for example 300 g rice and 330–360 ml water).",
          "Bring to the boil over high heat, covered, then turn to the lowest heat and cook 12–15 minutes. Don't lift the lid.",
          "Take off the heat and leave covered for another 10–15 minutes — the rice finishes in the steam.",
        ],
        tip: "A 5×5 cm piece of dried kombu added to the water and removed before it boils gives the rice a light umami flavour, as in good restaurants.",
      },
      {
        heading: "Seasoned vinegar (sushi-zu)",
        paragraphs: [
          "Sushi rice is always seasoned with rice vinegar, sugar and salt. It gives the characteristic sweet-sour flavour and lightly preserves the rice.",
        ],
        list: [
          "Per 300 g dry rice: 45–60 ml rice vinegar, 1–1.5 tbsp sugar, 1 tsp salt.",
          "Warm gently until the sugar and salt dissolve — don't boil, or the acidity evaporates.",
          "No rice vinegar? Use 6% cider vinegar diluted 3:1 with water and a little more sugar. 9% white vinegar is too harsh.",
          "Ready-made \"sushi seasoning\" already contains sugar and salt — use it without extra seasoning.",
        ],
      },
      {
        heading: "Mixing and cooling the rice",
        paragraphs: [
          "Tip the hot rice into a wide wooden, glass or plastic bowl — not metal, which reacts with the vinegar. Pour the seasoning over a spatula to spread it across the surface.",
          "Mix with slicing motions of the spatula, as if cutting the rice rather than stirring porridge. At the same time fan the rice with a fan or lid — fast cooling makes the grains glossy and drives off excess moisture.",
          "Cool the rice to body temperature — just slightly warm. Hot rice makes the nori soggy; cold rice hardens and loses its stickiness. Cover the bowl with a damp towel so the rice doesn't dry out.",
        ],
        tip: "Don't refrigerate sushi rice: the starch hardens and the rice turns dry and crumbly. Use it within a few hours on the day you make it.",
      },
      {
        heading: "Which fish is safe raw",
        paragraphs: [
          "This is the most important question. Raw fish can carry parasite larvae and bacteria. Restaurants use fish that has been blast-frozen to kill parasites.",
        ],
        list: [
          "Buy fish labelled \"sushi grade\" or \"sashimi grade\" from a trusted fishmonger.",
          "If fish you'll eat raw was sold chilled, freeze it at home at −18 °C or colder for at least 7 days.",
          "Salmon, tuna, scallops and yellowtail are the best choices. Never use freshwater fish raw.",
          "The fish should smell of the sea, not fishy, with firm, glossy flesh and bright colour.",
          "Pregnant women, children and people with weakened immunity are better off choosing rolls without raw fish.",
        ],
      },
      {
        heading: "Fillings without raw fish",
        paragraphs: [
          "Excellent rolls need no raw fish at all — and they're safer and easier for a home kitchen.",
        ],
        list: [
          "Lightly cured or smoked salmon (see our article on curing fish).",
          "Cooked shrimp, crab sticks or crab meat, shrimp tempura.",
          "Smoked eel with unagi sauce.",
          "Japanese tamago omelette.",
          "Cucumber, avocado, bell pepper, carrot matchsticks, lettuce.",
          "Cream cheese (Philadelphia) — a classic with salmon and cucumber.",
          "Teriyaki chicken or tofu for those who don't eat fish.",
        ],
      },
      {
        heading: "How to roll maki",
        paragraphs: [
          "Maki is the classic roll with nori outside. You need a bamboo mat (makisu), a bowl of water with vinegar (1 tbsp vinegar per 200 ml water) to wet your hands, and a very sharp knife.",
        ],
        list: [
          "Lay half a sheet of nori on the mat, shiny side down.",
          "Wet your hands, take 80–100 g rice and spread it in a thin even layer, 0.5–1 cm, leaving a 1–1.5 cm strip bare at the far edge.",
          "Lay the filling in a line across the middle. Don't overload it — 1–2 ingredients, or the roll won't close.",
          "Lift the near edge of the mat and roll, holding the filling in with your fingers. Firm the roll gently with the mat along its length.",
          "Dampen the bare edge of nori with water so it sticks. Leave the roll seam-side down for a minute.",
        ],
      },
      {
        heading: "Inside-out rolls and slicing",
        paragraphs: [
          "Uramaki have the rice outside — Philadelphia and California rolls, for example. Wrap the mat in cling film, or the rice sticks to the bamboo. Spread rice over a whole sheet of nori, sprinkle with sesame seeds or roe, flip the sheet rice-side down, lay the filling on the nori and roll. For a Philadelphia roll, drape thin slices of salmon over the top and press firmly with the mat through the film.",
          "Slice with a very sharp long knife dipped in water, in one pulling stroke — don't saw. Wipe the knife with a damp cloth after each cut. Halve the roll first, lay the halves side by side and cut each into 3 — six even pieces.",
        ],
        tip: "Baked rolls: set the sliced roll on a tray, top with a \"cap\" of mayonnaise, cream cheese and chilli or spicy sauce, and bake at 200–220 °C for 5–7 minutes or under the grill until the topping browns.",
      },
      {
        heading: "Serving and storage",
        paragraphs: [
          "Sushi is served with soy sauce, pickled ginger (gari) to refresh the palate between rolls, and wasabi. Traditionally wasabi isn't stirred into the soy sauce but dabbed onto the fish.",
          "Sushi and rolls are best eaten straight away. Rolls with raw fish shouldn't be kept more than a few hours, even in the fridge. Rolls without raw fish can be refrigerated under cling film for up to 24 hours, but the rice firms up. Leave them at room temperature for 15–20 minutes before serving.",
        ],
      },
    ],
    ua: [
      {
        heading: "Рис — це 80% суші",
        paragraphs: [
          "У Японії кухар суші роками вчиться варити рис, перш ніж йому довірять рибу. Добрі суші тримаються завдяки клейкості рису, але зернята при цьому лишаються окремими, пружними й трохи теплими.",
          "Потрібен японський круглозерний або середньозерний рис — у магазинах він продається як «рис для суші». Довгозерний рис (жасмин, басматі) і пропарений не підходять: у них мало крохмалю амілопектину, і роли розваляться. Звичайний круглий рис для каші — крайній варіант: він надто розварюється.",
        ],
      },
      {
        heading: "Промивання й варіння",
        paragraphs: [],
        list: [
          "Промивайте рис у холодній воді, обережно перетираючи зернята руками, 4–6 разів, доки вода не стане майже прозорою. Так іде поверхневий крохмаль, що робить рис липкою кашею.",
          "Відкиньте на сито й дайте постояти 15–30 хвилин — зернята рівномірно вберуть рештки води.",
          "Пропорція: 1 частина рису на 1,1–1,2 частини води за об'ємом (наприклад, 300 г рису й 330–360 мл води).",
          "Доведіть до кипіння на сильному вогні під кришкою, потім зменште до мінімуму й варіть 12–15 хвилин. Кришку не відкривайте.",
          "Зніміть із вогню й залиште під кришкою ще на 10–15 хвилин — рис дійде на парі.",
        ],
        tip: "Шматочок сушеної водорості комбу розміром 5×5 см, покладений у воду під час варіння й вийнятий перед кипінням, надає рису легкого смаку умамі, як у добрих ресторанах.",
      },
      {
        heading: "Заправка су",
        paragraphs: [
          "Рис для суші обов'язково приправляють сумішшю рисового оцту, цукру й солі. Вона дає характерний кисло-солодкий смак і трохи консервує рис.",
        ],
        list: [
          "На 300 г сухого рису: 45–60 мл рисового оцту, 1–1,5 ст. л. цукру, 1 ч. л. солі.",
          "Трохи підігрійте, доки цукор і сіль не розчиняться, — не кип'ятіть, інакше кислота вивітриться.",
          "Якщо немає рисового оцту: яблучний оцет 6%, розведений водою 3:1, із трохи більшою кількістю цукру. Столовий оцет 9% не підходить — надто різкий.",
          "Готові суміші «приправа для суші» вже містять цукор і сіль — додавайте їх без додаткових приправ.",
        ],
      },
      {
        heading: "Як змішати й остудити рис",
        paragraphs: [
          "Перекладіть гарячий рис у широку дерев'яну, скляну чи пластикову миску — не металеву, метал реагує з оцтом. Полийте заправкою через лопатку, розподіляючи по всій поверхні.",
          "Перемішуйте «ріжучими» рухами лопатки, ніби розрізаєте рис, а не мішаєте кашу. Водночас обмахуйте рис віялом чи кришкою — швидке охолодження робить зернята глянсовими й випаровує зайву вологу.",
          "Рис треба остудити до температури тіла — він має бути трохи теплим. Гарячий рис розмочить норі, холодний — стане твердим і втратить клейкість. Накрийте миску вологим рушником, щоб рис не обвітрився.",
        ],
        tip: "Не прибирайте рис для суші в холодильник: крохмаль твердне, і рис стає сухим і крихким. Використовуйте його протягом кількох годин у день приготування.",
      },
      {
        heading: "Яку рибу можна їсти сирою",
        paragraphs: [
          "Це найважливіше питання. У сирій рибі можуть бути личинки паразитів і бактерії. У ресторанах використовують рибу, яку заморожують глибоким шоковим заморожуванням, щоб знищити паразитів.",
        ],
        list: [
          "Купуйте рибу з позначкою «для суші» або «для сашимі» в перевірених рибних магазинах.",
          "Рибу, яку їстимете сирою, заморозьте вдома за −18 °C і нижче щонайменше на 7 діб, якщо вона продавалася охолодженою.",
          "Найкраще підходять лосось, тунець, гребінець, жовтохвіст. Річкову рибу сирою не використовуйте ніколи.",
          "Риба має пахнути морем, а не рибою, мати пружну блискучу м'якоть і яскравий колір.",
          "Вагітним, дітям і людям з ослабленим імунітетом краще обирати роли без сирої риби.",
        ],
      },
      {
        heading: "Начинки без сирої риби",
        paragraphs: [
          "Чудові роли виходять зовсім без сирої риби — і такі безпечніші й простіші для домашньої кухні.",
        ],
        list: [
          "Слабосолений або копчений лосось (докладніше — у нашій статті про засолювання риби).",
          "Варені креветки, крабові палички або м'ясо краба, темпура з креветок.",
          "Копчений вугор із соусом унагі.",
          "Японський омлет тамаго.",
          "Огірок, авокадо, болгарський перець, морква соломкою, листя салату.",
          "Вершковий сир («Філадельфія») — класика в поєднанні з лососем і огірком.",
          "Запечена курка теріякі або тофу — для тих, хто не їсть рибу.",
        ],
      },
      {
        heading: "Як згортати макі",
        paragraphs: [
          "Макі — класичний рол із норі зовні. Для нього потрібен бамбуковий килимок (макісу), миска з водою й оцтом (1 ст. л. оцту на 200 мл води) — щоб змочувати руки, і дуже гострий ніж.",
        ],
        list: [
          "Покладіть на килимок половинку аркуша норі блискучим боком донизу.",
          "Змочіть руки, візьміть 80–100 г рису й розподіліть тонким рівним шаром 0,5–1 см, залишивши вільною смужку 1–1,5 см біля дальнього краю.",
          "Викладіть начинку смужкою в центр рису. Не перевантажуйте — 1–2 інгредієнти, інакше рол не закриється.",
          "Підніміть ближній край килимка й згорніть рол, притискаючи начинку пальцями. Трохи ущільніть рол килимком по всій довжині.",
          "Змочіть вільний край норі водою — він приклеїться. Дайте ролу полежати швом донизу хвилину.",
        ],
      },
      {
        heading: "Роли «навиворіт» і нарізання",
        paragraphs: [
          "Урамакі — роли рисом назовні, наприклад «Філадельфія» й «Каліфорнія». Оберніть килимок харчовою плівкою — інакше рис прилипне до бамбука. Розподіліть рис по цілому аркушу норі, посипте кунжутом або ікрою, переверніть аркуш рисом донизу, викладіть начинку на норі й згорніть. Для «Філадельфії» рол потім укривають тонкими скибочками лосося й щільно притискають килимком крізь плівку.",
          "Ріжте дуже гострим довгим ножем, змоченим водою, одним рухом на себе, не пиляйте. Протирайте ніж вологою серветкою після кожного розрізу. Спершу розріжте рол навпіл, складіть половинки поруч і розріжте кожну на 3 частини — вийде 6 однакових шматочків.",
        ],
        tip: "Запечені роли: викладіть нарізаний рол на деко, вкрийте «шапкою» із суміші майонезу, вершкового сиру й соусу чилі чи спайсі й запікайте за 200–220 °C 5–7 хвилин або під грилем, доки шапка не зарум'яниться.",
      },
      {
        heading: "Подача й зберігання",
        paragraphs: [
          "До суші подають соєвий соус, маринований імбир (гарі) — щоб освіжити смак між різними ролами, і васабі. Традиційно васабі не розмішують у соєвому соусі, а кладуть трохи на шматочок риби.",
          "Суші й роли краще їсти одразу після приготування. Роли із сирою рибою не можна зберігати довше кількох годин навіть у холодильнику. Роли без сирої риби можна прибрати в холодильник під плівку до 24 годин, але рис стане твердішим. Перед подачею залиште їх на 15–20 хвилин за кімнатної температури.",
        ],
      },
    ],
  },
  faq: {
    ru: [
      { q: "Почему роллы разваливаются?", a: "Не тот рис, рис не промыт или слишком холодный, начинки слишком много или ролл не уплотнили ковриком. Берите рис для суши и остужайте его только до тёплого." },
      { q: "Почему нори жёсткий и не режется?", a: "Нори пересох или его долго держали на воздухе. Заворачивайте ролл сразу после выкладки риса, а режьте очень острым мокрым ножом. Если нори размок и рвётся — рис был слишком горячим или мокрым." },
      { q: "Чем заменить бамбуковый коврик?", a: "Плотной салфеткой или полотенцем, обёрнутым плёнкой, или листом пергамента. Коврик удобнее, но первые роллы можно свернуть и без него." },
      { q: "Сколько риса нужно на один ролл?", a: "80–100 г готового риса на маки из половинки нори, 150–180 г — на урамаки из целого листа. Из 300 г сухого риса выходит 5–6 роллов." },
      { q: "Можно ли использовать обычный рис?", a: "Круглозёрный рис для каши подходит в крайнем случае — промывайте его особенно тщательно. Длиннозёрный и пропаренный не подходят: роллы не будут держаться." },
    ],
    en: [
      { q: "Why do my rolls fall apart?", a: "The wrong rice, rice not rinsed or too cold, too much filling, or the roll wasn't firmed with the mat. Use sushi rice and cool it only until warm." },
      { q: "Why is my nori tough and won't cut?", a: "The nori dried out or sat in the air too long. Roll straight after spreading the rice and slice with a very sharp wet knife. If the nori is soggy and tears, the rice was too hot or wet." },
      { q: "What can replace a bamboo mat?", a: "A thick napkin or tea towel wrapped in cling film, or a sheet of baking paper. The mat is easier, but you can roll your first rolls without one." },
      { q: "How much rice per roll?", a: "80–100 g cooked rice for a maki on half a sheet of nori, 150–180 g for uramaki on a whole sheet. 300 g dry rice makes 5–6 rolls." },
      { q: "Can I use ordinary rice?", a: "Short-grain pudding rice will do at a pinch — rinse it especially well. Long-grain and parboiled rice won't work: the rolls won't hold." },
    ],
    ua: [
      { q: "Чому роли розвалюються?", a: "Не той рис, рис не промитий або надто холодний, начинки забагато або рол не ущільнили килимком. Беріть рис для суші й остуджуйте його лише до теплого." },
      { q: "Чому норі жорсткий і не ріжеться?", a: "Норі пересох або його довго тримали на повітрі. Загортайте рол одразу після викладання рису, а ріжте дуже гострим мокрим ножем. Якщо норі розмок і рветься — рис був надто гарячим або мокрим." },
      { q: "Чим замінити бамбуковий килимок?", a: "Щільною серветкою або рушником, обгорнутим плівкою, чи аркушем пергаменту. Килимок зручніший, але перші роли можна згорнути й без нього." },
      { q: "Скільки рису потрібно на один рол?", a: "80–100 г готового рису на макі з половинки норі, 150–180 г — на урамакі з цілого аркуша. З 300 г сухого рису виходить 5–6 ролів." },
      { q: "Чи можна використати звичайний рис?", a: "Круглозерний рис для каші підходить у крайньому разі — промивайте його особливо ретельно. Довгозерний і пропарений не підходять: роли не триматимуться." },
    ],
  },
};
