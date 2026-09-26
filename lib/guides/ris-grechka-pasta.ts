import type { Guide } from "./types";

export const guide: Guide = {
  slug: "ris-grechka-pasta",
  emoji: "🍚",
  updated: "2026-09-26",
  title: {
    ru: "Рассыпчатый рис, идеальная гречка и паста al dente: пропорции воды и главные ошибки",
    en: "Fluffy rice, perfect buckwheat and al dente pasta: water ratios and the main mistakes",
    ua: "Розсипчастий рис, ідеальна гречка й паста al dente: пропорції води та головні помилки",
  },
  summary: {
    ru: "Почему рис слипается, а гречка разваривается в кашу и как это исправить: сколько воды на разные сорта, зачем промывать рис и прокаливать гречку, сколько соли класть в воду для пасты и почему не нужно лить в неё масло.",
    en: "Why rice goes sticky and buckwheat turns to mush, and how to fix it: how much water for each type, why you rinse rice and toast buckwheat, how much salt goes in pasta water and why you shouldn't add oil to it.",
    ua: "Чому рис злипається, а гречка розварюється на кашу і як це виправити: скільки води на різні сорти, навіщо промивати рис і прожарювати гречку, скільки солі класти у воду для пасти й чому не треба лити в неї олію.",
  },
  relatedRecipes: ["kuritsa-teriyaki", "pasta-s-tomatami-i-bazilikom", "pasta-s-krevetkami", "risovaya-kasha-na-moloke"],
  sections: {
    ru: [
      {
        heading: "Почему крупы слипаются",
        paragraphs: [
          "На поверхности зёрен риса и гречки есть мелкая крахмальная пыль. В кипящей воде она превращается в клейстер, который склеивает зёрна между собой. Вторая причина — лишняя вода и помешивание: зёрна трутся друг о друга, оболочка лопается, и крахмал выходит наружу.",
          "Поэтому правила простые: промыть, отмерить воду точно и не мешать. Для каш и ризотто всё наоборот — там нужна липкость, и крупу не промывают.",
        ],
      },
      {
        heading: "Рис: промыть до прозрачной воды",
        paragraphs: [
          "Залейте рис холодной водой, перемешайте рукой и слейте мутную воду. Повторите 4–6 раз, пока вода не станет почти прозрачной. Это смывает лишний крахмал — зёрна не склеятся.",
          "Для плова и гарнира можно ещё обжарить промытый и обсушенный рис 1–2 минуты на масле, пока зёрна не станут полупрозрачными. Каждое зерно покроется тонкой плёнкой жира и точно останется отдельным.",
        ],
        list: [
          "Длиннозёрный белый рис — 1 : 1,5 (1 стакан риса на 1,5 стакана воды).",
          "Басмати и жасмин — 1 : 1,25–1,5.",
          "Круглозёрный рис для гарнира и суши — 1 : 1,1–1,2.",
          "Бурый рис — 1 : 2–2,25, варить 35–40 минут.",
        ],
        tip: "Способ, который работает всегда: вода закипела — всыпать рис и соль (0,5 ч. л. на стакан риса), накрыть крышкой, минимальный огонь 12–15 минут, затем снять с огня и оставить ещё на 10 минут под крышкой. Крышку всё это время не поднимать.",
      },
      {
        heading: "Почему нельзя поднимать крышку",
        paragraphs: [
          "Последние минуты рис готовится не в воде, а на пару. Когда вы поднимаете крышку, пар уходит, температура падает, и верхний слой остаётся жёстким, а нижний пригорает.",
          "«Отдых» 10 минут после варки тоже обязателен: влага равномерно распределяется, зёрна перестают быть мокрыми сверху и твёрдыми внутри. После отдыха разрыхлите рис вилкой, а не ложкой — ложка давит зёрна.",
        ],
      },
      {
        heading: "Гречка: прокалить и не мешать",
        paragraphs: [
          "Переберите и промойте гречку, дайте воде стечь. Затем прокалите крупу на сухой сковороде 3–5 минут, помешивая, пока не появится ореховый аромат. Прокалённая гречка получается рассыпчатой и заметно вкуснее — такой приём используют для гречки «по-купечески» и к мясу.",
          "Залейте гречку кипятком в пропорции 1 : 2 по объёму, посолите, накройте и варите на минимальном огне 15–18 минут, пока вода не впитается полностью. Снимите с огня, положите кусочек сливочного масла и укутайте кастрюлю полотенцем на 10 минут.",
        ],
        tip: "Гречка: 1 стакан крупы + 2 стакана кипятка + 0,5 ч. л. соли. Хотите мягче и «кашистее» — берите 1 : 2,5 и не прокаливайте.",
      },
      {
        heading: "Паста: много воды и много соли",
        paragraphs: [
          "Пасте нужен простор: около 1 литра воды на каждые 100 г. В маленьком объёме вода после закладки долго не закипает, макароны отдают весь крахмал в тесную кастрюлю и слипаются.",
          "Солите воду заметно — примерно 10 г соли на литр. Паста впитывает соль только пока варится; потом её уже не досолить изнутри. Вода должна быть на вкус как слегка солёный бульон.",
          "Первые 1–2 минуты после закладки помешайте пасту — именно тогда она прилипает ко дну и друг к другу. Дальше можно мешать изредка.",
        ],
      },
      {
        heading: "Al dente и соус: сливать раньше",
        paragraphs: [
          "Al dente — паста, которая уже мягкая, но в центре слегка упругая. Если вы будете доводить её в соусе, сливайте на 1–2 минуты раньше времени на пачке: она дойдёт на сковороде и впитает вкус соуса.",
          "Перед тем как слить, зачерпните кружку воды от пасты — в ней крахмал, который связывает соус. Пасту не промывайте: вы смоете крахмал, и соус будет стекать. Промывают только лапшу для холодных салатов и азиатских блюд.",
        ],
      },
      {
        heading: "Масло в воду для пасты — миф",
        paragraphs: [
          "Масло не смешивается с водой и просто плавает на поверхности. Слипание оно почти не предотвращает, а вот когда вы сливаете воду, тонкая плёнка масла покрывает пасту — и соус хуже к ней прилипает. Поэтому масло лучше добавить в соус, а не в кастрюлю.",
        ],
      },
      {
        heading: "Как хранить и разогревать",
        paragraphs: [
          "Готовый рис остудите и уберите в холодильник в течение часа-двух — долго стоящий в тепле рис небезопасен. Храните не больше суток и разогревайте до горячего состояния.",
          "Для жареного риса идеален вчерашний: подсохший холодный рис не слипается на сковороде. Если жарите свежий — разложите его тонким слоем на противне и дайте остыть и подсохнуть 20–30 минут.",
          "Гречку и пасту разогревайте с ложкой воды под крышкой — пар вернёт им мягкость.",
        ],
      },
      {
        heading: "Частые ошибки",
        paragraphs: ["Что портит гарнир чаще всего:"],
        list: [
          "Рис не промыли — он слипся.",
          "Налили воды «на глаз» — каша вместо рассыпчатого риса.",
          "Мешали рис во время варки и поднимали крышку.",
          "Сняли с огня без 10-минутного «отдыха».",
          "Пасту варили в маленькой кастрюле и не солили воду.",
          "Налили масло в воду для пасты и промыли готовые макароны.",
        ],
      },
    ],
    en: [
      {
        heading: "Why grains stick",
        paragraphs: [
          "The surface of rice and buckwheat grains carries fine starch dust. In boiling water it turns into a glue that binds the grains together. The second cause is too much water and stirring: grains rub against each other, the outer layer cracks and starch leaks out.",
          "So the rules are simple: rinse, measure water accurately and don't stir. Porridge and risotto are the opposite — there you want the stickiness, so the grain isn't rinsed.",
        ],
      },
      {
        heading: "Rice: rinse until the water runs clear",
        paragraphs: [
          "Cover the rice with cold water, swish it with your hand and pour off the cloudy water. Repeat 4–6 times until the water is almost clear. This washes off excess starch so the grains don't glue together.",
          "For pilaf and side dishes you can also fry the rinsed, drained rice in oil for 1–2 minutes until the grains turn translucent. Each grain gets a thin film of fat and is sure to stay separate.",
        ],
        list: [
          "Long-grain white rice — 1 : 1.5 (1 cup rice to 1.5 cups water).",
          "Basmati and jasmine — 1 : 1.25–1.5.",
          "Short-grain rice for sides and sushi — 1 : 1.1–1.2.",
          "Brown rice — 1 : 2–2.25, cook 35–40 minutes.",
        ],
        tip: "The method that always works: bring water to the boil, add rice and salt (½ tsp per cup of rice), cover, lowest heat for 12–15 minutes, then take off the heat and leave covered for another 10 minutes. Don't lift the lid at any point.",
      },
      {
        heading: "Why you shouldn't lift the lid",
        paragraphs: [
          "In the last minutes rice cooks in steam, not water. When you lift the lid the steam escapes, the temperature drops, and the top layer stays hard while the bottom burns.",
          "The 10-minute rest after cooking matters too: moisture spreads evenly, so the grains aren't wet on top and hard inside. After resting, fluff the rice with a fork, not a spoon — a spoon crushes the grains.",
        ],
      },
      {
        heading: "Buckwheat: toast it and don't stir",
        paragraphs: [
          "Pick over and rinse the buckwheat, and let it drain. Then toast it in a dry pan for 3–5 minutes, stirring, until it smells nutty. Toasted buckwheat stays fluffy and tastes noticeably better — it's the classic way to cook it as a side for meat.",
          "Pour boiling water over it at 1 : 2 by volume, salt, cover and cook on the lowest heat for 15–18 minutes until the water is fully absorbed. Take off the heat, add a knob of butter and wrap the pan in a towel for 10 minutes.",
        ],
        tip: "Buckwheat: 1 cup grain + 2 cups boiling water + ½ tsp salt. For softer, more porridge-like buckwheat use 1 : 2.5 and skip the toasting.",
      },
      {
        heading: "Pasta: plenty of water, plenty of salt",
        paragraphs: [
          "Pasta needs room: about 1 litre of water per 100 g. In a small pot the water takes ages to return to the boil, the pasta dumps all its starch into the cramped pot and sticks together.",
          "Salt the water noticeably — about 10 g per litre. Pasta only absorbs salt while it cooks; you can't season it from the inside afterwards. The water should taste like a lightly salted broth.",
          "Stir the pasta for the first 1–2 minutes after adding it — that's when it sticks to the bottom and to itself. After that, stir now and then.",
        ],
      },
      {
        heading: "Al dente and sauce: drain early",
        paragraphs: [
          "Al dente is pasta that's already soft but still slightly firm at the centre. If you're finishing it in the sauce, drain it 1–2 minutes before the packet time: it will finish in the pan and soak up the sauce's flavour.",
          "Before draining, scoop out a mug of pasta water — its starch binds the sauce. Don't rinse the pasta: you'll wash off the starch and the sauce will slide off. Only noodles for cold salads and Asian dishes are rinsed.",
        ],
      },
      {
        heading: "Oil in pasta water is a myth",
        paragraphs: [
          "Oil doesn't mix with water — it just floats on top. It does almost nothing to prevent sticking, but when you drain the water, a thin film of oil coats the pasta, and the sauce clings less. Put the oil in the sauce, not the pot.",
        ],
      },
      {
        heading: "Storing and reheating",
        paragraphs: [
          "Cool cooked rice and refrigerate it within an hour or two — rice left warm for long isn't safe. Keep it no longer than a day and reheat it until piping hot.",
          "Day-old rice is ideal for fried rice: dried-out cold rice doesn't clump in the pan. Frying fresh rice? Spread it thinly on a tray and let it cool and dry for 20–30 minutes.",
          "Reheat buckwheat and pasta with a spoonful of water under a lid — the steam brings back their softness.",
        ],
      },
      {
        heading: "Common mistakes",
        paragraphs: ["What ruins a side dish most often:"],
        list: [
          "The rice wasn't rinsed — it went sticky.",
          "Water was added 'by eye' — mush instead of fluffy rice.",
          "The rice was stirred while cooking and the lid was lifted.",
          "It came off the heat without the 10-minute rest.",
          "Pasta was cooked in a small pot in unsalted water.",
          "Oil went into the pasta water, and the cooked pasta was rinsed.",
        ],
      },
    ],
    ua: [
      {
        heading: "Чому крупи злипаються",
        paragraphs: [
          "На поверхні зерен рису й гречки є дрібний крохмальний пил. У киплячій воді він перетворюється на клейстер, що склеює зерна між собою. Друга причина — зайва вода й помішування: зерна труться одне об одне, оболонка лопається, і крохмаль виходить назовні.",
          "Тому правила прості: промити, відміряти воду точно й не мішати. Для каш і різото все навпаки — там потрібна липкість, і крупу не промивають.",
        ],
      },
      {
        heading: "Рис: промити до прозорої води",
        paragraphs: [
          "Залийте рис холодною водою, перемішайте рукою й злийте каламутну воду. Повторіть 4–6 разів, поки вода не стане майже прозорою. Це змиває зайвий крохмаль — зерна не склеяться.",
          "Для плову й гарніру можна ще обсмажити промитий і обсушений рис 1–2 хвилини на олії, поки зерна не стануть напівпрозорими. Кожне зерно вкриється тонкою плівкою жиру й точно лишиться окремим.",
        ],
        list: [
          "Довгозернистий білий рис — 1 : 1,5 (1 склянка рису на 1,5 склянки води).",
          "Басматі й жасмин — 1 : 1,25–1,5.",
          "Круглозернистий рис для гарніру й суші — 1 : 1,1–1,2.",
          "Бурий рис — 1 : 2–2,25, варити 35–40 хвилин.",
        ],
        tip: "Спосіб, що працює завжди: вода закипіла — всипати рис і сіль (0,5 ч. л. на склянку рису), накрити кришкою, мінімальний вогонь 12–15 хвилин, потім зняти з вогню й залишити ще на 10 хвилин під кришкою. Кришку весь цей час не піднімати.",
      },
      {
        heading: "Чому не можна піднімати кришку",
        paragraphs: [
          "Останні хвилини рис готується не у воді, а на парі. Коли ви піднімаєте кришку, пара виходить, температура падає, і верхній шар лишається жорстким, а нижній пригорає.",
          "«Відпочинок» 10 хвилин після варіння теж обов'язковий: волога рівномірно розподіляється, зерна перестають бути мокрими зверху й твердими всередині. Після відпочинку розпушіть рис виделкою, а не ложкою — ложка давить зерна.",
        ],
      },
      {
        heading: "Гречка: прожарити й не мішати",
        paragraphs: [
          "Переберіть і промийте гречку, дайте воді стекти. Потім прожарте крупу на сухій сковороді 3–5 хвилин, помішуючи, поки не з'явиться горіховий аромат. Прожарена гречка виходить розсипчастою й помітно смачнішою — так її готують як гарнір до м'яса.",
          "Залийте гречку окропом у пропорції 1 : 2 за об'ємом, посоліть, накрийте й варіть на мінімальному вогні 15–18 хвилин, поки вода не вбереться повністю. Зніміть з вогню, покладіть шматочок вершкового масла й укутайте каструлю рушником на 10 хвилин.",
        ],
        tip: "Гречка: 1 склянка крупи + 2 склянки окропу + 0,5 ч. л. солі. Хочете м'якшу, «кашисту» — беріть 1 : 2,5 і не прожарюйте.",
      },
      {
        heading: "Паста: багато води й багато солі",
        paragraphs: [
          "Пасті потрібен простір: близько 1 літра води на кожні 100 г. У малому об'ємі вода після закладання довго не закипає, макарони віддають увесь крохмаль у тісну каструлю й злипаються.",
          "Соліть воду помітно — приблизно 10 г солі на літр. Паста вбирає сіль лише поки вариться; потім її вже не досолити зсередини. Вода має бути на смак як злегка солоний бульйон.",
          "Перші 1–2 хвилини після закладання помішайте пасту — саме тоді вона прилипає до дна й одна до одної. Далі можна мішати зрідка.",
        ],
      },
      {
        heading: "Al dente і соус: зливати раніше",
        paragraphs: [
          "Al dente — паста, яка вже м'яка, але в центрі злегка пружна. Якщо доводитимете її в соусі, зливайте на 1–2 хвилини раніше за час на пачці: вона дійде на сковороді й вбере смак соусу.",
          "Перш ніж злити, зачерпніть кухоль води від пасти — у ній крохмаль, що зв'язує соус. Пасту не промивайте: ви змиєте крохмаль, і соус стікатиме. Промивають лише локшину для холодних салатів і азійських страв.",
        ],
      },
      {
        heading: "Олія у воду для пасти — міф",
        paragraphs: [
          "Олія не змішується з водою й просто плаває на поверхні. Злипанню вона майже не запобігає, а от коли ви зливаєте воду, тонка плівка олії вкриває пасту — і соус гірше до неї прилипає. Тому олію краще додати в соус, а не в каструлю.",
        ],
      },
      {
        heading: "Як зберігати й розігрівати",
        paragraphs: [
          "Готовий рис остудіть і приберіть у холодильник протягом години-двох — рис, що довго стоїть у теплі, небезпечний. Зберігайте не довше доби й розігрівайте до гарячого стану.",
          "Для смаженого рису ідеальний вчорашній: підсохлий холодний рис не злипається на сковороді. Якщо смажите свіжий — розкладіть його тонким шаром на деку й дайте охолонути та підсохнути 20–30 хвилин.",
          "Гречку й пасту розігрівайте з ложкою води під кришкою — пара поверне їм м'якість.",
        ],
      },
      {
        heading: "Часті помилки",
        paragraphs: ["Що псує гарнір найчастіше:"],
        list: [
          "Рис не промили — він злипся.",
          "Налили води «на око» — каша замість розсипчастого рису.",
          "Мішали рис під час варіння й піднімали кришку.",
          "Зняли з вогню без 10-хвилинного «відпочинку».",
          "Пасту варили в малій каструлі й не солили воду.",
          "Налили олію у воду для пасти й промили готові макарони.",
        ],
      },
    ],
  },
  faq: {
    ru: [
      { q: "Сколько воды нужно на стакан риса?", a: "Для длиннозёрного белого риса — 1,5 стакана воды на 1 стакан промытого риса. Для басмати 1,25–1,5, для бурого риса — 2–2,25." },
      { q: "Нужно ли промывать рис?", a: "Для гарнира и плова — да, до прозрачной воды: так он не слипнется. Для каши, ризотто и супа — нет, там нужен крахмал." },
      { q: "Сколько соли класть в воду для пасты?", a: "Около 10 г на литр воды, то есть примерно 1 столовая ложка без горки на 2 литра." },
      { q: "Надо ли лить масло в воду для макарон?", a: "Нет. Оно не спасает от слипания, зато мешает соусу прилипнуть к пасте. Просто помешайте пасту в первые две минуты." },
    ],
    en: [
      { q: "How much water per cup of rice?", a: "For long-grain white rice, 1.5 cups water per 1 cup rinsed rice. Basmati 1.25–1.5, brown rice 2–2.25." },
      { q: "Should I rinse rice?", a: "For sides and pilaf, yes — until the water runs clear, so it doesn't stick. For porridge, risotto and soup, no — you want the starch there." },
      { q: "How much salt goes in pasta water?", a: "About 10 g per litre — roughly a level tablespoon for 2 litres." },
      { q: "Should I add oil to pasta water?", a: "No. It doesn't stop sticking and it keeps sauce from clinging to the pasta. Just stir the pasta during the first two minutes." },
    ],
    ua: [
      { q: "Скільки води потрібно на склянку рису?", a: "Для довгозернистого білого рису — 1,5 склянки води на 1 склянку промитого рису. Для басматі 1,25–1,5, для бурого рису — 2–2,25." },
      { q: "Чи треба промивати рис?", a: "Для гарніру й плову — так, до прозорої води: так він не злипнеться. Для каші, різото й супу — ні, там потрібен крохмаль." },
      { q: "Скільки солі класти у воду для пасти?", a: "Близько 10 г на літр води, тобто приблизно 1 столова ложка без гірки на 2 літри." },
      { q: "Чи треба лити олію у воду для макаронів?", a: "Ні. Вона не рятує від злипання, зате заважає соусу прилипнути до пасти. Просто помішайте пасту в перші дві хвилини." },
    ],
  },
};
