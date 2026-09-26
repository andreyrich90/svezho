import type { Guide } from "./types";

export const guide: Guide = {
  slug: "kak-gotovit-griby",
  emoji: "🍄",
  updated: "2026-09-26",
  title: {
    ru: "Грибы: как чистить, жарить до корочки и не отравиться лесными",
    en: "Mushrooms: how to clean them, brown them properly and stay safe with wild ones",
    ua: "Гриби: як чистити, смажити до скоринки й не отруїтися лісовими",
  },
  summary: {
    ru: "Можно ли мыть шампиньоны, почему грибы на сковороде тушатся вместо жарки и как получить золотистую корочку. Лесные грибы: какие отваривают заранее и главные правила безопасности. Сушёные белые, хранение и заморозка, жюльен и грибной суп.",
    en: "Can you wash button mushrooms, why mushrooms stew instead of fry and how to get a golden crust. Wild mushrooms: which to pre-boil and the key safety rules. Dried porcini, storage and freezing, a mushroom gratin and mushroom soup.",
    ua: "Чи можна мити печериці, чому гриби на сковороді тушкуються замість смаження і як отримати золотисту скоринку. Лісові гриби: які відварюють заздалегідь і головні правила безпеки. Сушені білі, зберігання й заморожування, жульєн і грибний суп.",
  },
  relatedRecipes: ["kartofelnye-kotlety-s-gribami", "grechnevye-kotlety-s-gribami"],
  sections: {
    ru: [
      {
        heading: "Как выбрать грибы",
        paragraphs: [
          "Свежие шампиньоны — плотные, упругие, с гладкой матовой шляпкой. Плёнка под шляпкой у молодых грибов закрыта, пластинки светлые. Раскрытая шляпка с тёмно-коричневыми пластинками — гриб старше, у него сильнее вкус, но он быстрее портится.",
          "Признаки несвежих грибов: липкая или скользкая поверхность, тёмные мокрые пятна, неприятный кислый запах, сморщенная шляпка. Вешенки должны быть упругими, без жёлтых подсохших краёв. Шиитаке — с толстой мясистой шляпкой.",
        ],
      },
      {
        heading: "Мыть или не мыть",
        paragraphs: [
          "Популярный совет «никогда не мойте грибы — они впитают воду» преувеличен. Опыты показывают, что за короткое ополаскивание шампиньоны впитывают совсем немного воды — меньше грамма на гриб. А вот долгое замачивание действительно делает их водянистыми.",
          "Правильно: если грибы чистые — протрите влажной салфеткой или щёточкой. Если в земле — быстро промойте под проточной водой прямо перед готовкой, не замачивая, и сразу обсушите полотенцем. Срежьте потемневший край ножки. Кожицу со шляпок шампиньонов снимать не нужно.",
        ],
        tip: "Лесные грибы, наоборот, часто замачивают на 15–30 минут в подсоленной воде — так из пластинок и губки выходят песок, земля и мелкие насекомые.",
      },
      {
        heading: "Почему грибы тушатся, а не жарятся",
        paragraphs: [
          "Грибы почти на 90% состоят из воды. Когда их много на сковороде, вода выходит, но не успевает испариться, и грибы варятся в собственном соку — серые и скользкие.",
        ],
        list: [
          "Широкая сковорода, сильный огонь, грибы — в один слой. Если их много — жарьте в две-три порции.",
          "Сначала можно жарить на сухой сковороде или с минимумом масла: грибы отдадут воду, она испарится.",
          "Не мешайте первые 3–4 минуты — дайте появиться корочке.",
          "Когда вода испарилась и грибы начали румяниться — добавьте масло, лук, чеснок, травы.",
          "Солите в самом конце: соль вытягивает влагу и мешает корочке.",
          "Сливочное масло добавляйте в конце — на сильном огне оно подгорает.",
        ],
        tip: "Порежьте грибы толстыми ломтиками 5–7 мм или четвертинками: тонкие ломтики быстро теряют форму и сжимаются до ничего.",
      },
      {
        heading: "Лесные грибы: главное правило безопасности",
        paragraphs: [
          "Собирайте и ешьте только те грибы, которые вы знаете на 100%. Никаких «кажется, это подберёзовик». У многих съедобных грибов есть ядовитые двойники, а бледная поганка — смертельно опасна даже в небольшом количестве и может напоминать сыроежку или шампиньон.",
        ],
        list: [
          "Не собирайте грибы у дорог, заводов, в городских парках: они накапливают тяжёлые металлы.",
          "Не берите старые, червивые и перезревшие грибы.",
          "Не пробуйте сырые лесные грибы на вкус.",
          "Проверенного способа «определить ядовитый гриб» — серебряной ложкой, луком, чесноком — не существует. Это мифы.",
          "Маленьким детям лесные грибы не дают.",
          "Если после грибов появились тошнота, рвота, боль в животе или слабость — даже через 6–24 часа — немедленно обратитесь к врачу.",
        ],
      },
      {
        heading: "Какие грибы отваривают перед жаркой",
        paragraphs: [
          "Шампиньоны, вешенки, шиитаке, белые, подберёзовики, подосиновики, лисички отваривать не нужно — их сразу жарят, тушат или запекают.",
          "Многие другие лесные грибы — опята, маслята (очищенные от плёнки), моховики, грузди, свинушки — сначала отваривают в подсоленной воде 15–20 минут, воду сливают, а потом готовят как угодно. Условно-съедобные грибы (грузди, волнушки) дополнительно вымачивают 1–3 дня с частой сменой воды — так уходит горечь.",
          "Если вы не уверены, нужно ли отваривать гриб, — отварите: вкус от этого пострадает мало.",
        ],
      },
      {
        heading: "Сушёные грибы",
        paragraphs: [
          "Сушёные белые грибы — один из самых ароматных продуктов на кухне. 20–30 г сушёных дают вкус, сравнимый с 300 г свежих.",
          "Залейте сушёные грибы тёплой водой на 20–30 минут — они станут мягкими. Выньте грибы, а воду процедите через бумажный фильтр или сложенную марлю — на дне остаётся песок. Эта вода — готовый грибной бульон для супа, соуса или ризотто.",
        ],
        tip: "Смелите сушёные грибы в кофемолке в порошок. Щепотка в соус, суп, фарш или подливу добавляет глубокий вкус умами. Храните порошок в банке — до года.",
      },
      {
        heading: "Хранение и заморозка",
        paragraphs: [
          "Свежие грибы храните в холодильнике в бумажном пакете или в контейнере, накрытом бумажным полотенцем. В пластиковом пакете они задыхаются, покрываются слизью и портятся за 1–2 дня. В бумаге — 3–5 дней.",
          "Шампиньоны можно заморозить сырыми, но после разморозки они станут водянистыми — подойдут только для супа. Лучше обжарить их без масла до испарения воды, остудить и заморозить порциями — хранятся до 6 месяцев. Лесные грибы замораживают отваренными или обжаренными.",
          "Приготовленные грибы храните в холодильнике не больше 1–2 суток: грибной белок портится быстро.",
        ],
      },
      {
        heading: "Жюльен",
        paragraphs: [
          "Классический грибной жюльен на 4 кокотницы: 300 г грибов, 1 луковица, 200 мл сливок 20% или сметаны, 1 ст. л. муки, 20 г сливочного масла, 100 г твёрдого сыра, соль, перец, мускатный орех.",
          "Обжарьте грибы до испарения воды и румяности, добавьте лук и жарьте ещё 5 минут. Посыпьте мукой, перемешайте 1 минуту, влейте сливки и прогрейте до загустения, 2–3 минуты. Посолите, поперчите, добавьте щепотку мускатного ореха. Разложите по кокотницам, посыпьте тёртым сыром и запекайте при 200 °C 10–15 минут до золотистой корочки.",
        ],
        tip: "Классический вариант — с курицей: добавьте 200 г отварного куриного филе, нарезанного соломкой, вместе со сливками.",
      },
      {
        heading: "Грибной суп-пюре",
        paragraphs: [
          "На 4 порции: 500 г шампиньонов (плюс горсть сушёных белых для аромата), 1 луковица, 2 картофелины, 1 л бульона или воды, 200 мл сливок 10–20%, 30 г сливочного масла, тимьян.",
          "Обжарьте лук на масле, добавьте нарезанные грибы и жарьте до испарения воды и лёгкой корочки — 10 минут. Отложите несколько красивых ломтиков для подачи. Добавьте картофель кубиками, бульон (вместе с водой от сушёных грибов) и тимьян, варите 20 минут. Пробейте блендером, влейте сливки, посолите и прогрейте, не доводя до кипения.",
        ],
      },
    ],
    en: [
      {
        heading: "How to choose mushrooms",
        paragraphs: [
          "Fresh button mushrooms are firm and springy with smooth, matt caps. In young ones the veil under the cap is still closed and the gills are pale. An open cap with dark brown gills means an older mushroom — more flavour, but it spoils faster.",
          "Signs of stale mushrooms: a sticky or slimy surface, dark wet patches, a sour smell, a shrivelled cap. Oyster mushrooms should be springy with no dried yellow edges. Shiitake should have thick, meaty caps.",
        ],
      },
      {
        heading: "To wash or not to wash",
        paragraphs: [
          "The popular advice \"never wash mushrooms — they'll soak up water\" is overstated. Tests show a quick rinse adds very little water to button mushrooms — less than a gram each. Long soaking, however, really does make them watery.",
          "The right way: if the mushrooms are clean, wipe them with a damp cloth or brush. If they're earthy, rinse quickly under running water just before cooking without soaking, and dry them straight away with a towel. Trim the darkened end of the stem. There's no need to peel button mushroom caps.",
        ],
        tip: "Wild mushrooms, on the other hand, are often soaked for 15–30 minutes in salted water — it draws sand, soil and tiny insects out of the gills and pores.",
      },
      {
        heading: "Why mushrooms stew instead of fry",
        paragraphs: [
          "Mushrooms are almost 90% water. With too many in the pan, the water comes out but can't evaporate, and the mushrooms boil in their own juice — grey and slippery.",
        ],
        list: [
          "A wide pan, high heat, mushrooms in a single layer. With a lot of them, fry in two or three batches.",
          "You can start in a dry pan or with very little oil: the mushrooms release their water and it evaporates.",
          "Don't stir for the first 3–4 minutes — let a crust form.",
          "Once the water has gone and they start to brown, add oil, onion, garlic and herbs.",
          "Salt at the very end: salt draws out moisture and stops the crust forming.",
          "Add butter at the end — over high heat it burns.",
        ],
        tip: "Cut mushrooms into thick 5–7 mm slices or quarters: thin slices lose their shape fast and shrink to nothing.",
      },
      {
        heading: "Wild mushrooms: the golden safety rule",
        paragraphs: [
          "Only pick and eat mushrooms you know with 100% certainty. No \"I think this is a birch bolete\". Many edible mushrooms have poisonous look-alikes, and the death cap is deadly even in small amounts and can resemble a russula or a field mushroom.",
        ],
        list: [
          "Don't pick mushrooms near roads, factories or in city parks: they accumulate heavy metals.",
          "Don't take old, maggoty or overripe mushrooms.",
          "Don't taste raw wild mushrooms.",
          "There is no reliable way to \"test\" for a poisonous mushroom — silver spoons, onion, garlic. These are myths.",
          "Wild mushrooms aren't given to young children.",
          "If nausea, vomiting, stomach pain or weakness appear after eating mushrooms — even 6–24 hours later — see a doctor immediately.",
        ],
      },
      {
        heading: "Which mushrooms to boil before frying",
        paragraphs: [
          "Button, oyster, shiitake, porcini, birch and orange boletes and chanterelles don't need boiling — fry, braise or roast them straight away.",
          "Many other wild mushrooms — honey fungus, slippery jacks (peeled), bay boletes, milk caps — are first boiled in salted water for 15–20 minutes, the water discarded, and then cooked any way you like. Milk caps and other bitter species are also soaked for 1–3 days with frequent water changes to remove the bitterness.",
          "If you're not sure whether a mushroom needs boiling, boil it: the flavour will hardly suffer.",
        ],
      },
      {
        heading: "Dried mushrooms",
        paragraphs: [
          "Dried porcini are one of the most aromatic ingredients in the kitchen. 20–30 g of dried give flavour comparable to 300 g fresh.",
          "Cover dried mushrooms with warm water for 20–30 minutes until soft. Lift out the mushrooms and strain the water through a paper filter or folded muslin — sand settles at the bottom. That water is ready-made mushroom stock for soup, sauce or risotto.",
        ],
        tip: "Grind dried mushrooms to a powder in a spice grinder. A pinch in a sauce, soup, mince or gravy adds deep umami. Store the powder in a jar for up to a year.",
      },
      {
        heading: "Storage and freezing",
        paragraphs: [
          "Keep fresh mushrooms in the fridge in a paper bag or in a container covered with kitchen paper. In a plastic bag they sweat, turn slimy and spoil within 1–2 days. In paper they last 3–5 days.",
          "Button mushrooms can be frozen raw but go watery when thawed — fit only for soup. Better to dry-fry them until the water has gone, cool and freeze in portions — they keep up to 6 months. Freeze wild mushrooms boiled or fried.",
          "Keep cooked mushrooms in the fridge for no more than 1–2 days: mushroom protein spoils quickly.",
        ],
      },
      {
        heading: "Mushroom julienne (gratin)",
        paragraphs: [
          "A classic Russian mushroom julienne for 4 ramekins: 300 g mushrooms, 1 onion, 200 ml 20% cream or sour cream, 1 tbsp flour, 20 g butter, 100 g hard cheese, salt, pepper, nutmeg.",
          "Fry the mushrooms until the water has gone and they brown, add the onion and cook 5 minutes more. Sprinkle with the flour, stir for 1 minute, pour in the cream and heat until thick, 2–3 minutes. Season with salt, pepper and a pinch of nutmeg. Divide between ramekins, top with grated cheese and bake at 200 °C for 10–15 minutes until golden.",
        ],
        tip: "The classic version includes chicken: add 200 g boiled chicken breast cut into strips with the cream.",
      },
      {
        heading: "Cream of mushroom soup",
        paragraphs: [
          "For 4 servings: 500 g button mushrooms (plus a handful of dried porcini for aroma), 1 onion, 2 potatoes, 1 l stock or water, 200 ml 10–20% cream, 30 g butter, thyme.",
          "Soften the onion in butter, add the sliced mushrooms and cook until the water has gone and they brown slightly — 10 minutes. Set aside a few nice slices for garnish. Add the diced potato, stock (with the porcini soaking water) and thyme and simmer for 20 minutes. Blend, add the cream, season and heat without boiling.",
        ],
      },
    ],
    ua: [
      {
        heading: "Як обрати гриби",
        paragraphs: [
          "Свіжі печериці — щільні, пружні, з гладенькою матовою шапкою. Плівка під шапкою в молодих грибів закрита, пластинки світлі. Розкрита шапка з темно-коричневими пластинками — гриб старший, у нього сильніший смак, але він швидше псується.",
          "Ознаки несвіжих грибів: липка або слизька поверхня, темні мокрі плями, неприємний кислий запах, зморщена шапка. Гливи мають бути пружними, без жовтих підсохлих країв. Шиїтаке — з товстою м'ясистою шапкою.",
        ],
      },
      {
        heading: "Мити чи не мити",
        paragraphs: [
          "Популярна порада «ніколи не мийте гриби — вони вберуть воду» перебільшена. Досліди показують, що за коротке ополіскування печериці вбирають зовсім трохи води — менше грама на гриб. А от довге замочування справді робить їх водянистими.",
          "Правильно: якщо гриби чисті — протріть вологою серветкою або щіточкою. Якщо в землі — швидко промийте під проточною водою просто перед готуванням, не замочуючи, і одразу обсушіть рушником. Зріжте потемнілий край ніжки. Шкірку з шапок печериць знімати не треба.",
        ],
        tip: "Лісові гриби, навпаки, часто замочують на 15–30 хвилин у підсоленій воді — так із пластинок і губки виходять пісок, земля й дрібні комахи.",
      },
      {
        heading: "Чому гриби тушкуються, а не смажаться",
        paragraphs: [
          "Гриби майже на 90% складаються з води. Коли їх багато на сковороді, вода виходить, але не встигає випаруватися, і гриби варяться у власному соку — сірі й слизькі.",
        ],
        list: [
          "Широка сковорода, сильний вогонь, гриби — в один шар. Якщо їх багато — смажте у дві-три порції.",
          "Спершу можна смажити на сухій сковороді або з мінімумом олії: гриби віддадуть воду, вона випарується.",
          "Не мішайте перші 3–4 хвилини — дайте з'явитися скоринці.",
          "Коли вода випарувалася й гриби почали рум'янитися — додайте олію, цибулю, часник, трави.",
          "Соліть у самому кінці: сіль витягує вологу й заважає скоринці.",
          "Вершкове масло додавайте наприкінці — на сильному вогні воно пригорає.",
        ],
        tip: "Поріжте гриби товстими скибочками 5–7 мм або четвертинками: тонкі скибочки швидко втрачають форму й стискаються до нічого.",
      },
      {
        heading: "Лісові гриби: головне правило безпеки",
        paragraphs: [
          "Збирайте й їжте лише ті гриби, які ви знаєте на 100%. Жодних «здається, це підберезник». У багатьох їстівних грибів є отруйні двійники, а бліда поганка смертельно небезпечна навіть у невеликій кількості й може нагадувати сироїжку або печерицю.",
        ],
        list: [
          "Не збирайте гриби біля доріг, заводів, у міських парках: вони накопичують важкі метали.",
          "Не беріть старі, червиві й перестиглі гриби.",
          "Не куштуйте сирі лісові гриби.",
          "Перевіреного способу «визначити отруйний гриб» — срібною ложкою, цибулею, часником — не існує. Це міфи.",
          "Маленьким дітям лісові гриби не дають.",
          "Якщо після грибів з'явилися нудота, блювання, біль у животі чи слабкість — навіть через 6–24 години — негайно зверніться до лікаря.",
        ],
      },
      {
        heading: "Які гриби відварюють перед смаженням",
        paragraphs: [
          "Печериці, гливи, шиїтаке, білі, підберезники, підосичники, лисички відварювати не треба — їх одразу смажать, тушкують або запікають.",
          "Багато інших лісових грибів — опеньки, маслюки (очищені від плівки), моховики, грузді, свинушки — спершу відварюють у підсоленій воді 15–20 хвилин, воду зливають, а потім готують як завгодно. Умовно їстівні гриби (грузді, хвилянки) додатково вимочують 1–3 дні з частою зміною води — так іде гіркота.",
          "Якщо ви не впевнені, чи треба відварювати гриб, — відваріть: смак від цього постраждає мало.",
        ],
      },
      {
        heading: "Сушені гриби",
        paragraphs: [
          "Сушені білі гриби — один із найароматніших продуктів на кухні. 20–30 г сушених дають смак, порівнянний із 300 г свіжих.",
          "Залийте сушені гриби теплою водою на 20–30 хвилин — вони стануть м'якими. Вийміть гриби, а воду процідіть крізь паперовий фільтр або складену марлю — на дні лишається пісок. Ця вода — готовий грибний бульйон для супу, соусу чи ризото.",
        ],
        tip: "Змеліть сушені гриби в кавомолці на порошок. Дрібка в соус, суп, фарш чи підливу додає глибокого смаку умамі. Зберігайте порошок у банці — до року.",
      },
      {
        heading: "Зберігання й заморожування",
        paragraphs: [
          "Свіжі гриби зберігайте в холодильнику в паперовому пакеті або в контейнері, накритому паперовим рушником. У пластиковому пакеті вони задихаються, вкриваються слизом і псуються за 1–2 дні. У папері — 3–5 днів.",
          "Печериці можна заморозити сирими, але після розморожування вони стануть водянистими — підійдуть лише для супу. Краще обсмажити їх без олії до випаровування води, остудити й заморозити порціями — зберігаються до 6 місяців. Лісові гриби заморожують відвареними або обсмаженими.",
          "Приготовані гриби зберігайте в холодильнику не довше 1–2 діб: грибний білок псується швидко.",
        ],
      },
      {
        heading: "Жульєн",
        paragraphs: [
          "Класичний грибний жульєн на 4 кокотниці: 300 г грибів, 1 цибулина, 200 мл вершків 20% або сметани, 1 ст. л. борошна, 20 г вершкового масла, 100 г твердого сиру, сіль, перець, мускатний горіх.",
          "Обсмажте гриби до випаровування води й рум'яності, додайте цибулю й смажте ще 5 хвилин. Посипте борошном, перемішайте 1 хвилину, влийте вершки й прогрійте до загуснення, 2–3 хвилини. Посоліть, поперчіть, додайте дрібку мускатного горіха. Розкладіть по кокотницях, посипте тертим сиром і запікайте за 200 °C 10–15 хвилин до золотистої скоринки.",
        ],
        tip: "Класичний варіант — із куркою: додайте 200 г вареного курячого філе, нарізаного соломкою, разом із вершками.",
      },
      {
        heading: "Грибний суп-пюре",
        paragraphs: [
          "На 4 порції: 500 г печериць (плюс жменя сушених білих для аромату), 1 цибулина, 2 картоплини, 1 л бульйону або води, 200 мл вершків 10–20%, 30 г вершкового масла, чебрець.",
          "Обсмажте цибулю на маслі, додайте нарізані гриби й смажте до випаровування води й легкої скоринки — 10 хвилин. Відкладіть кілька гарних скибочок для подачі. Додайте картоплю кубиками, бульйон (разом із водою від сушених грибів) і чебрець, варіть 20 хвилин. Проколотіть блендером, влийте вершки, посоліть і прогрійте, не доводячи до кипіння.",
        ],
      },
    ],
  },
  faq: {
    ru: [
      { q: "Можно ли есть шампиньоны сырыми?", a: "Да, свежие магазинные шампиньоны можно есть сырыми в салатах, тонко нарезанными. Лесные грибы сырыми не едят." },
      { q: "Почему жареные грибы горчат?", a: "Подгорел лук или чеснок, либо это особенность вида (некоторые лесные грибы горчат без вымачивания). Добавляйте чеснок в конце и не держите грибы на слишком сильном огне после того, как они подрумянились." },
      { q: "Можно ли разогревать блюда с грибами?", a: "Да, если они хранились в холодильнике не больше 1–2 суток и разогреты до горячего состояния. Оставленные при комнатной температуре грибные блюда лучше выбросить." },
      { q: "Сколько варить грибной суп из сушёных грибов?", a: "После замачивания — 30–40 минут. Белые грибы дают самый насыщенный бульон; добавьте воду от замачивания, процедив её от песка." },
      { q: "Почему грибы темнеют после нарезки?", a: "Это окисление, как у яблок. На вкус не влияет. Чтобы шампиньоны для салата остались белыми, сбрызните их лимонным соком." },
    ],
    en: [
      { q: "Can you eat button mushrooms raw?", a: "Yes, fresh shop-bought button mushrooms can be eaten raw in salads, thinly sliced. Wild mushrooms aren't eaten raw." },
      { q: "Why do my fried mushrooms taste bitter?", a: "Burnt onion or garlic, or it's the species (some wild mushrooms are bitter without soaking). Add garlic at the end and don't keep mushrooms on very high heat once they've browned." },
      { q: "Can mushroom dishes be reheated?", a: "Yes, if they've been in the fridge no more than 1–2 days and are reheated until piping hot. Mushroom dishes left at room temperature are best thrown away." },
      { q: "How long do I cook soup from dried mushrooms?", a: "After soaking, 30–40 minutes. Porcini give the richest stock; add the soaking water, strained free of grit." },
      { q: "Why do mushrooms darken after slicing?", a: "It's oxidation, like apples. It doesn't affect the taste. To keep button mushrooms white for salad, sprinkle them with lemon juice." },
    ],
    ua: [
      { q: "Чи можна їсти печериці сирими?", a: "Так, свіжі магазинні печериці можна їсти сирими в салатах, тонко нарізаними. Лісові гриби сирими не їдять." },
      { q: "Чому смажені гриби гірчать?", a: "Пригоріли цибуля чи часник, або це особливість виду (деякі лісові гриби гірчать без вимочування). Додавайте часник наприкінці й не тримайте гриби на надто сильному вогні після того, як вони зарум'янилися." },
      { q: "Чи можна розігрівати страви з грибами?", a: "Так, якщо вони зберігалися в холодильнику не довше 1–2 діб і розігріті до гарячого стану. Грибні страви, залишені за кімнатної температури, краще викинути." },
      { q: "Скільки варити грибний суп із сушених грибів?", a: "Після замочування — 30–40 хвилин. Білі гриби дають найнасиченіший бульйон; додайте воду від замочування, процідивши її від піску." },
      { q: "Чому гриби темніють після нарізання?", a: "Це окиснення, як у яблук. На смак не впливає. Щоб печериці для салату лишилися білими, збризніть їх лимонним соком." },
    ],
  },
};
