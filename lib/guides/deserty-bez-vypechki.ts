import type { Guide } from "./types";

export const guide: Guide = {
  slug: "deserty-bez-vypechki",
  emoji: "🍮",
  updated: "2026-09-26",
  title: {
    ru: "Десерты без выпечки: желатин, агар, панна-котта и муссы, которые держат форму",
    en: "No-bake desserts: gelatine, agar, panna cotta and mousses that hold their shape",
    ua: "Десерти без випічки: желатин, агар, панакота й муси, що тримають форму",
  },
  summary: {
    ru: "Сколько желатина нужно на литр для желе, панна-котты и мусса, почему нельзя кипятить желатин и какие фрукты не дают ему застыть. Агар-агар вместо желатина, стабильные взбитые сливки, основа из печенья для чизкейка и как аккуратно достать десерт из формы.",
    en: "How much gelatine per litre for jelly, panna cotta and mousse, why gelatine must never boil and which fruits stop it setting. Agar instead of gelatine, stable whipped cream, a biscuit base for cheesecake and how to turn a dessert out cleanly.",
    ua: "Скільки желатину потрібно на літр для желе, панакоти й мусу, чому не можна кип'ятити желатин і які фрукти не дають йому застигнути. Агар-агар замість желатину, стабільні збиті вершки, основа з печива для чізкейку й як акуратно дістати десерт із форми.",
  },
  relatedRecipes: ["chizkeyk-bez-vypechki", "tiramisu-klassicheskiy", "smuzi-boul", "shokoladnyy-fondan"],
  sections: {
    ru: [
      {
        heading: "Желатин: листовой и порошковый",
        paragraphs: [
          "Желатин продаётся в двух видах. Листовой удобнее: его проще дозировать (лист «серебряного» желатина весит около 2 г) и он не даёт комочков. Порошковый дешевле и встречается чаще.",
          "Любой желатин сначала замачивают в холодной воде. Порошок — в 5–6 частях воды (10 г на 50–60 мл) на 10 минут, он впитает всю воду и набухнет. Листы — в миске с большим количеством ледяной воды на 5–10 минут, затем отжимают. Растворяют набухший желатин в тёплой, но не кипящей жидкости.",
        ],
        tip: "Главное правило: желатин нельзя кипятить. Выше 70–80 °C он теряет силу, и десерт не застынет. Добавляйте его в жидкость, снятую с огня, или растопите отдельно на водяной бане.",
      },
      {
        heading: "Сколько желатина нужно",
        paragraphs: [
          "Дозировка зависит от того, какой результат нужен: дрожащая панна-котта или желе, которое режут ножом. Количество указано на 1 литр жидкости.",
        ],
        list: [
          "Мягкая, дрожащая текстура (панна-котта, кремы): 12–16 г.",
          "Классическое желе в креманках: 15–20 г.",
          "Мусс и суфле: 16–20 г на 1 кг массы.",
          "Желе, которое нужно достать из формы и нарезать: 25–30 г.",
          "Прослойки в торте: 20–25 г.",
        ],
        tip: "Кислота (лимонный сок, кислые ягоды), алкоголь и сахар в большом количестве ослабляют желатин. Для кислых и алкогольных желе добавьте 10–20% желатина сверх нормы.",
      },
      {
        heading: "Фрукты, которые мешают застыванию",
        paragraphs: [
          "Свежие ананас, киви, папайя, манго, инжир, дыня и имбирь содержат ферменты, которые расщепляют белок желатина. Желе с ними не застынет вообще, сколько желатина ни положи.",
          "Решение: прогрейте такие фрукты до кипения на 1–2 минуты — ферменты разрушатся. Или используйте консервированные: они уже прошли термообработку. Или замените желатин на агар-агар — он растительный, и ферменты на него не действуют.",
        ],
      },
      {
        heading: "Агар-агар: растительная замена",
        paragraphs: [
          "Агар получают из водорослей. Он в 8–10 раз сильнее желатина, и его, в отличие от желатина, нужно обязательно кипятить: он растворяется только при кипении 1–2 минуты.",
          "Агар застывает уже при 35–40 °C, прямо на столе, за 20–30 минут. Готовое желе плотнее и чуть «ломкое», а не дрожащее. Зато оно не тает при комнатной температуре.",
        ],
        list: [
          "Мягкое желе: 1 г агара на 500 мл жидкости.",
          "Плотное, режущееся желе: 2 г на 500 мл.",
          "Замена желатина: примерно 1 г агара вместо 8–10 г желатина.",
          "Размешайте агар в холодной жидкости, доведите до кипения и прокипятите 1–2 минуты, помешивая.",
        ],
      },
      {
        heading: "Панна-котта",
        paragraphs: [
          "Классический итальянский десерт: сливки, сахар, ваниль и совсем немного желатина — чтобы она едва держала форму и таяла во рту.",
        ],
        list: [
          "500 мл сливок 33% (или 400 мл сливок и 100 мл молока)",
          "50–60 г сахара",
          "Стручок ванили или 1 ч. л. ванильного экстракта",
          "6–8 г желатина (6 г — для креманок, 8 г — чтобы перевернуть на тарелку)",
          "Замочите желатин. Сливки с сахаром и ванилью нагрейте почти до кипения, снимите с огня и растворите в них отжатый желатин. Процедите, разлейте по формочкам и уберите в холодильник минимум на 4 часа.",
        ],
        tip: "Если в холодильнике ваниль оседает на дно — перед разливом остудите смесь до комнатной температуры, помешивая. Она станет гуще, и зёрнышки ванили распределятся равномерно.",
      },
      {
        heading: "Взбитые сливки, которые не оседают",
        paragraphs: [
          "Для взбивания нужны сливки жирностью 33–35%. Сливки 20% не взбиваются. Всё должно быть холодным: сливки, миска и венчики — уберите их в морозилку на 10 минут.",
          "Взбивайте на средней скорости до мягких пиков, затем добавьте сахарную пудру (30–40 г на 250 мл) и взбейте до устойчивых пиков. Остановитесь вовремя: если перебить, сливки превратятся в масло с сывороткой.",
        ],
        tip: "Для крема, который держит форму на торте несколько дней, добавьте маскарпоне или сливочный сыр в пропорции 1 часть на 3–4 части сливок и взбивайте вместе. Или вмешайте 2–3 г растворённого и остывшего желатина на 250 мл сливок.",
      },
      {
        heading: "Муссы",
        paragraphs: [
          "Мусс — это вкусовая основа, в которую вмешали взбитые сливки или белки. Главное правило: вмешивать лёгкое в тяжёлое аккуратно, лопаткой, движениями снизу вверх, чтобы сохранить воздух.",
          "Шоколадный мусс без яиц: растопите 150 г тёмного шоколада, дайте остыть до 35–40 °C (тёплый, но не горячий). Взбейте 300 мл сливок 33% до мягких пиков. Вмешайте в шоколад сначала треть сливок — чтобы выровнять консистенцию, — затем остальное. Разложите по креманкам, 3 часа в холодильнике.",
          "Ягодный мусс: 300 г ягодного пюре, 60–80 г сахара, 10 г желатина, 300 мл взбитых сливок. Желатин растворите в тёплом пюре, остудите до начала загустевания и вмешайте сливки.",
        ],
        tip: "Если шоколад горячий, сливки растают и мусс будет жидким. Если слишком холодный — шоколад схватится крупинками. Держите шоколад при 35–40 °C.",
      },
      {
        heading: "Основа из печенья",
        paragraphs: [
          "Основа для чизкейка без выпечки, тартов и пирожных: 200 г песочного печенья, измельчённого в крошку, и 80–100 г растопленного сливочного масла. Масса должна слипаться в кулаке.",
          "Плотно утрамбуйте крошку в форму дном стакана и уберите в холодильник на 30 минут, пока масло не застынет. Для хруста можно добавить 1 ст. л. какао, горсть молотых орехов или вместо части печенья — вафли.",
        ],
      },
      {
        heading: "Застывание и подача",
        paragraphs: [
          "Желатиновым десертам нужно минимум 4 часа в холодильнике, а лучше — ночь. Не ставьте их в морозилку для ускорения: желатин кристаллизуется, и десерт станет водянистым после оттаивания.",
          "Чтобы достать десерт из формы, опустите её на 5–10 секунд в горячую воду, проведите тонким ножом по краю, накройте тарелкой и переверните. Если не выходит — ещё 5 секунд в горячей воде. Силиконовые формы просто выверните.",
          "Слоёные желе делайте по очереди: каждый следующий слой заливайте, когда предыдущий уже схватился, но ещё липкий на ощупь, и новый слой остыл до комнатной температуры. Иначе слои смешаются.",
        ],
      },
    ],
    en: [
      {
        heading: "Gelatine: sheets and powder",
        paragraphs: [
          "Gelatine comes in two forms. Sheets are easier: they're simpler to measure (a silver-grade sheet weighs about 2 g) and don't form lumps. Powder is cheaper and more widely available.",
          "Any gelatine is soaked in cold water first. Powder in 5–6 parts water (10 g in 50–60 ml) for 10 minutes — it absorbs all the water and swells. Sheets in a bowl of plenty of iced water for 5–10 minutes, then squeezed out. Dissolve the bloomed gelatine in warm, not boiling, liquid.",
        ],
        tip: "The main rule: never boil gelatine. Above 70–80 °C it loses strength and the dessert won't set. Add it to liquid taken off the heat, or melt it separately over a bain-marie.",
      },
      {
        heading: "How much gelatine you need",
        paragraphs: [
          "The dose depends on the result you want: a wobbly panna cotta or a jelly you can cut with a knife. Amounts are per 1 litre of liquid.",
        ],
        list: [
          "Soft, wobbly texture (panna cotta, creams): 12–16 g.",
          "Classic jelly in glasses: 15–20 g.",
          "Mousse and soufflé: 16–20 g per 1 kg of mixture.",
          "Jelly to turn out and slice: 25–30 g.",
          "Cake layers: 20–25 g.",
        ],
        tip: "Acid (lemon juice, tart berries), alcohol and lots of sugar weaken gelatine. For sour or boozy jellies add 10–20% more gelatine.",
      },
      {
        heading: "Fruits that stop jelly setting",
        paragraphs: [
          "Fresh pineapple, kiwi, papaya, mango, fig, melon and ginger contain enzymes that break down the protein in gelatine. Jelly with them won't set at all, however much gelatine you use.",
          "The fix: bring these fruits to the boil for 1–2 minutes — the enzymes are destroyed. Or use canned fruit, which has already been heated. Or swap gelatine for agar — it's plant-based and the enzymes don't affect it.",
        ],
      },
      {
        heading: "Agar: the plant-based alternative",
        paragraphs: [
          "Agar is made from seaweed. It's 8–10 times stronger than gelatine and, unlike gelatine, must be boiled: it only dissolves after 1–2 minutes at a boil.",
          "Agar sets at 35–40 °C, right on the counter, in 20–30 minutes. The jelly is firmer and slightly brittle rather than wobbly. On the plus side, it doesn't melt at room temperature.",
        ],
        list: [
          "Soft jelly: 1 g agar per 500 ml liquid.",
          "Firm, sliceable jelly: 2 g per 500 ml.",
          "Replacing gelatine: roughly 1 g agar for 8–10 g gelatine.",
          "Stir the agar into cold liquid, bring to the boil and boil for 1–2 minutes, stirring.",
        ],
      },
      {
        heading: "Panna cotta",
        paragraphs: [
          "The classic Italian dessert: cream, sugar, vanilla and just enough gelatine that it barely holds its shape and melts in the mouth.",
        ],
        list: [
          "500 ml 33% cream (or 400 ml cream and 100 ml milk)",
          "50–60 g sugar",
          "A vanilla pod or 1 tsp vanilla extract",
          "6–8 g gelatine (6 g for glasses, 8 g to turn out onto a plate)",
          "Bloom the gelatine. Heat the cream with the sugar and vanilla almost to the boil, take off the heat and dissolve the squeezed gelatine in it. Strain, pour into moulds and chill for at least 4 hours.",
        ],
        tip: "If the vanilla sinks to the bottom in the fridge, cool the mixture to room temperature while stirring before pouring. It thickens and the vanilla seeds stay evenly suspended.",
      },
      {
        heading: "Whipped cream that doesn't collapse",
        paragraphs: [
          "Whipping needs cream of 33–35% fat. 20% cream won't whip. Everything must be cold: cream, bowl and whisks — put them in the freezer for 10 minutes.",
          "Whip on medium speed to soft peaks, then add icing sugar (30–40 g per 250 ml) and whip to firm peaks. Stop in time: overwhip and the cream turns into butter and whey.",
        ],
        tip: "For a frosting that holds on a cake for days, add mascarpone or cream cheese at 1 part to 3–4 parts cream and whip together. Or fold in 2–3 g of dissolved, cooled gelatine per 250 ml cream.",
      },
      {
        heading: "Mousses",
        paragraphs: [
          "A mousse is a flavoured base with whipped cream or egg whites folded in. The main rule: fold the light into the heavy gently, with a spatula, in bottom-to-top strokes to keep the air.",
          "Egg-free chocolate mousse: melt 150 g dark chocolate and cool it to 35–40 °C (warm, not hot). Whip 300 ml 33% cream to soft peaks. Fold a third of the cream into the chocolate first to loosen it, then the rest. Spoon into glasses and chill for 3 hours.",
          "Berry mousse: 300 g berry purée, 60–80 g sugar, 10 g gelatine, 300 ml whipped cream. Dissolve the gelatine in the warm purée, cool until it starts to thicken and fold in the cream.",
        ],
        tip: "If the chocolate is hot, the cream melts and the mousse is runny. Too cold and the chocolate seizes into specks. Keep it at 35–40 °C.",
      },
      {
        heading: "A biscuit base",
        paragraphs: [
          "A base for no-bake cheesecake, tarts and slices: 200 g shortbread or digestive biscuits crushed to crumbs and 80–100 g melted butter. The mixture should hold together when squeezed in your fist.",
          "Press the crumbs firmly into the tin with the base of a glass and chill for 30 minutes until the butter sets. For crunch, add 1 tbsp cocoa, a handful of ground nuts, or swap some of the biscuits for wafers.",
        ],
      },
      {
        heading: "Setting and serving",
        paragraphs: [
          "Gelatine desserts need at least 4 hours in the fridge, ideally overnight. Don't put them in the freezer to speed things up: the gelatine crystallises and the dessert turns watery once thawed.",
          "To turn a dessert out, dip the mould in hot water for 5–10 seconds, run a thin knife round the edge, cover with a plate and invert. If it won't come, another 5 seconds in hot water. Silicone moulds simply peel away.",
          "Make layered jellies in stages: pour each new layer once the previous one has set but is still tacky to the touch, and the new layer has cooled to room temperature. Otherwise the layers blend.",
        ],
      },
    ],
    ua: [
      {
        heading: "Желатин: листовий і порошковий",
        paragraphs: [
          "Желатин продається у двох видах. Листовий зручніший: його простіше дозувати (аркуш «срібного» желатину важить близько 2 г), і він не дає грудочок. Порошковий дешевший і трапляється частіше.",
          "Будь-який желатин спершу замочують у холодній воді. Порошок — у 5–6 частинах води (10 г на 50–60 мл) на 10 хвилин, він вбере всю воду й набухне. Аркуші — у мисці з великою кількістю крижаної води на 5–10 хвилин, потім віджимають. Розчиняють набухлий желатин у теплій, але не киплячій рідині.",
        ],
        tip: "Головне правило: желатин не можна кип'ятити. Вище 70–80 °C він утрачає силу, і десерт не застигне. Додавайте його в рідину, зняту з вогню, або розтопіть окремо на водяній бані.",
      },
      {
        heading: "Скільки желатину потрібно",
        paragraphs: [
          "Дозування залежить від того, який результат потрібен: тремтлива панакота чи желе, яке ріжуть ножем. Кількість указано на 1 літр рідини.",
        ],
        list: [
          "М'яка, тремтлива текстура (панакота, креми): 12–16 г.",
          "Класичне желе в креманках: 15–20 г.",
          "Мус і суфле: 16–20 г на 1 кг маси.",
          "Желе, яке треба дістати з форми й нарізати: 25–30 г.",
          "Прошарки в торті: 20–25 г.",
        ],
        tip: "Кислота (лимонний сік, кислі ягоди), алкоголь і цукор у великій кількості послаблюють желатин. Для кислих і алкогольних желе додайте 10–20% желатину понад норму.",
      },
      {
        heading: "Фрукти, що заважають застиганню",
        paragraphs: [
          "Свіжі ананас, ківі, папая, манго, інжир, диня й імбир містять ферменти, які розщеплюють білок желатину. Желе з ними не застигне зовсім, скільки желатину не поклади.",
          "Рішення: прогрійте такі фрукти до кипіння на 1–2 хвилини — ферменти зруйнуються. Або використовуйте консервовані: вони вже пройшли термообробку. Або замініть желатин на агар-агар — він рослинний, і ферменти на нього не діють.",
        ],
      },
      {
        heading: "Агар-агар: рослинна заміна",
        paragraphs: [
          "Агар отримують із водоростей. Він у 8–10 разів сильніший за желатин, і його, на відміну від желатину, обов'язково треба кип'ятити: він розчиняється лише за кипіння 1–2 хвилини.",
          "Агар застигає вже за 35–40 °C, просто на столі, за 20–30 хвилин. Готове желе щільніше й трохи «крихке», а не тремтливе. Зате воно не тане за кімнатної температури.",
        ],
        list: [
          "М'яке желе: 1 г агару на 500 мл рідини.",
          "Щільне желе, що ріжеться: 2 г на 500 мл.",
          "Заміна желатину: приблизно 1 г агару замість 8–10 г желатину.",
          "Розмішайте агар у холодній рідині, доведіть до кипіння й прокип'ятіть 1–2 хвилини, помішуючи.",
        ],
      },
      {
        heading: "Панакота",
        paragraphs: [
          "Класичний італійський десерт: вершки, цукор, ваніль і зовсім трохи желатину — щоб вона ледь тримала форму й танула в роті.",
        ],
        list: [
          "500 мл вершків 33% (або 400 мл вершків і 100 мл молока)",
          "50–60 г цукру",
          "Стручок ванілі або 1 ч. л. ванільного екстракту",
          "6–8 г желатину (6 г — для креманок, 8 г — щоб перевернути на тарілку)",
          "Замочіть желатин. Вершки з цукром і ваніллю нагрійте майже до кипіння, зніміть із вогню й розчиніть у них віджатий желатин. Процідіть, розлийте по формочках і приберіть у холодильник щонайменше на 4 години.",
        ],
        tip: "Якщо в холодильнику ваніль осідає на дно — перед розливанням остудіть суміш до кімнатної температури, помішуючи. Вона стане густішою, і зернятка ванілі розподіляться рівномірно.",
      },
      {
        heading: "Збиті вершки, що не осідають",
        paragraphs: [
          "Для збивання потрібні вершки жирністю 33–35%. Вершки 20% не збиваються. Усе має бути холодним: вершки, миска й вінчики — приберіть їх у морозилку на 10 хвилин.",
          "Збивайте на середній швидкості до м'яких піків, потім додайте цукрову пудру (30–40 г на 250 мл) і збийте до стійких піків. Зупиніться вчасно: якщо перебити, вершки перетворяться на масло із сироваткою.",
        ],
        tip: "Для крему, що тримає форму на торті кілька днів, додайте маскарпоне або вершковий сир у пропорції 1 частина на 3–4 частини вершків і збивайте разом. Або вмішайте 2–3 г розчиненого й охолодженого желатину на 250 мл вершків.",
      },
      {
        heading: "Муси",
        paragraphs: [
          "Мус — це смакова основа, у яку вмішали збиті вершки чи білки. Головне правило: вмішувати легке у важке обережно, лопаткою, рухами знизу вгору, щоб зберегти повітря.",
          "Шоколадний мус без яєць: розтопіть 150 г чорного шоколаду, дайте охолонути до 35–40 °C (теплий, але не гарячий). Збийте 300 мл вершків 33% до м'яких піків. Вмішайте в шоколад спершу третину вершків — щоб вирівняти консистенцію, — потім решту. Розкладіть по креманках, 3 години в холодильнику.",
          "Ягідний мус: 300 г ягідного пюре, 60–80 г цукру, 10 г желатину, 300 мл збитих вершків. Желатин розчиніть у теплому пюре, остудіть до початку загуснення й вмішайте вершки.",
        ],
        tip: "Якщо шоколад гарячий, вершки розтануть і мус буде рідким. Якщо надто холодний — шоколад схопиться крупинками. Тримайте шоколад за 35–40 °C.",
      },
      {
        heading: "Основа з печива",
        paragraphs: [
          "Основа для чізкейку без випічки, тартів і тістечок: 200 г пісочного печива, подрібненого на крихту, і 80–100 г розтопленого вершкового масла. Маса має злипатися в кулаці.",
          "Щільно утрамбуйте крихту у форму дном склянки й приберіть у холодильник на 30 хвилин, доки масло не застигне. Для хрусткості можна додати 1 ст. л. какао, жменю мелених горіхів або замість частини печива — вафлі.",
        ],
      },
      {
        heading: "Застигання й подача",
        paragraphs: [
          "Желатиновим десертам потрібно щонайменше 4 години в холодильнику, а краще — ніч. Не ставте їх у морозилку для пришвидшення: желатин кристалізується, і десерт стане водянистим після розморожування.",
          "Щоб дістати десерт із форми, опустіть її на 5–10 секунд у гарячу воду, проведіть тонким ножем по краю, накрийте тарілкою й переверніть. Якщо не виходить — ще 5 секунд у гарячій воді. Силіконові форми просто виверніть.",
          "Шаруваті желе робіть по черзі: кожен наступний шар заливайте, коли попередній уже схопився, але ще липкий на дотик, а новий шар охолов до кімнатної температури. Інакше шари змішаються.",
        ],
      },
    ],
  },
  faq: {
    ru: [
      { q: "Почему желе не застыло?", a: "Желатин прокипятили, его было мало, или в желе свежие ананас, киви, манго. Растопите желе, добавьте ещё набухшего желатина (не кипятя) и снова охладите." },
      { q: "Почему в желе комочки?", a: "Желатин плохо набух или его влили в холодную жидкость. Процедите жидкость через сито перед разливом по формам." },
      { q: "Можно ли заменить желатин крахмалом?", a: "Нет: крахмал загущает, но не даёт желеобразной структуры. Для кремов и киселей он подходит, для желе и панна-котты — нет." },
      { q: "Сколько хранятся десерты с желатином?", a: "2–3 дня в холодильнике под плёнкой. Со свежими сливками и фруктами — до 2 дней." },
      { q: "Почему взбитые сливки не взбиваются?", a: "Сливки недостаточно жирные (меньше 30%) или тёплые. Охладите всё вместе с миской и венчиками. Помогает загуститель для сливок." },
    ],
    en: [
      { q: "Why didn't my jelly set?", a: "The gelatine boiled, there wasn't enough, or the jelly has fresh pineapple, kiwi or mango in it. Melt the jelly, add more bloomed gelatine (without boiling) and chill again." },
      { q: "Why is my jelly lumpy?", a: "The gelatine didn't bloom properly or went into cold liquid. Strain the liquid through a sieve before pouring into moulds." },
      { q: "Can I replace gelatine with starch?", a: "No: starch thickens but doesn't give a jelly structure. It works for custards and fruit kissel, not for jelly or panna cotta." },
      { q: "How long do gelatine desserts keep?", a: "2–3 days in the fridge, covered. With fresh cream and fruit, up to 2 days." },
      { q: "Why won't my cream whip?", a: "It isn't rich enough (under 30%) or it's warm. Chill everything, including the bowl and whisks. A cream stabiliser helps too." },
    ],
    ua: [
      { q: "Чому желе не застигло?", a: "Желатин прокип'ятили, його було мало, або в желе свіжі ананас, ківі, манго. Розтопіть желе, додайте ще набухлого желатину (не кип'ятячи) і знову охолодіть." },
      { q: "Чому в желе грудочки?", a: "Желатин погано набух або його влили в холодну рідину. Процідіть рідину крізь сито перед розливанням у форми." },
      { q: "Чи можна замінити желатин крохмалем?", a: "Ні: крохмаль загущує, але не дає желеподібної структури. Для кремів і киселів він підходить, для желе й панакоти — ні." },
      { q: "Скільки зберігаються десерти з желатином?", a: "2–3 дні в холодильнику під плівкою. Зі свіжими вершками й фруктами — до 2 днів." },
      { q: "Чому вершки не збиваються?", a: "Вершки недостатньо жирні (менше 30%) або теплі. Охолодіть усе разом із мискою й вінчиками. Допомагає загусник для вершків." },
    ],
  },
};
