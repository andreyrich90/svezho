import type { Guide } from "./types";

export const guide: Guide = {
  slug: "zharka-vo-frityure",
  emoji: "🍤",
  updated: "2026-09-26",
  title: {
    ru: "Жарка во фритюре дома: хрустящая корочка без лишнего жира и безопасно",
    en: "Deep-frying at home: a crisp crust without the grease, and safely",
    ua: "Смаження у фритюрі вдома: хрустка скоринка без зайвого жиру й безпечно",
  },
  summary: {
    ru: "Какое масло выбрать и до какой температуры греть, почему продукты во фритюре впитывают масло и как этого избежать, панировка в три этапа и панко. Сколько раз можно использовать масло, как его хранить и утилизировать, что делать, если масло загорелось, и чем хорош аэрогриль.",
    en: "Which oil to choose and how hot to heat it, why fried food soaks up oil and how to avoid it, three-step breading and panko. How many times oil can be reused, how to store and dispose of it, what to do if oil catches fire, and what an air fryer is good for.",
    ua: "Яку олію обрати й до якої температури гріти, чому продукти у фритюрі вбирають олію і як цього уникнути, панірування в три етапи й панко. Скільки разів можна використовувати олію, як її зберігати й утилізувати, що робити, якщо олія зайнялася, і чим добрий аерогриль.",
  },
  relatedRecipes: ["zolotye-lukovye-kolca-v-pivnom-klyare", "syrnye-palochki-v-dvoynoy-panirovke", "hrustyaschie-krevetki", "kurinyy-shnitsel-v-panirovke"],
  sections: {
    ru: [
      {
        heading: "Почему фритюр не делает еду жирной",
        paragraphs: [
          "Парадокс: правильно приготовленное во фритюре блюдо впитывает меньше масла, чем то, что жарилось на сковороде в небольшом количестве масла на слабом огне. Когда продукт попадает в горячее масло, влага на его поверхности мгновенно превращается в пар. Пар выходит наружу и не пускает масло внутрь, а поверхность быстро схватывается хрустящей корочкой.",
          "Проблемы начинаются, когда масло недостаточно горячее: пар выходит слабо, корочка образуется медленно, и продукт впитывает масло, как губка.",
        ],
      },
      {
        heading: "Какое масло выбрать",
        paragraphs: [
          "Для фритюра нужно масло с высокой температурой дымления — выше 200 °C — и нейтральным вкусом.",
        ],
        list: [
          "Подходят: подсолнечное рафинированное, арахисовое, рапсовое, кукурузное, соевое, рисовое.",
          "Не подходят: нерафинированное подсолнечное, оливковое extra virgin, сливочное масло — они дымят и горят при фритюрных температурах, дают горечь.",
          "Количество: столько, чтобы продукт плавал, не касаясь дна, — обычно слой 5–8 см. В кастрюлю наливайте не больше чем на ⅓–½ высоты: масло вспенивается при закладке.",
        ],
      },
      {
        heading: "Температура: главное, что нужно контролировать",
        paragraphs: [
          "Без термометра жарить во фритюре — лотерея. Кухонный термометр со щупом стоит недорого и решает 90% проблем.",
        ],
        list: [
          "160 °C — первая обжарка картофеля фри, крупные куски курицы на кости (дольше, чтобы прожарились внутри).",
          "170–175 °C — курица без кости, рыба в кляре, пончики, чебуреки.",
          "175–180 °C — большинство продуктов: овощи в кляре, луковые кольца, сырные палочки, креветки.",
          "185–190 °C — вторая обжарка фри, быстрые мелкие продукты.",
        ],
        tip: "Без термометра: опустите в масло деревянную палочку или ручку деревянной ложки. Если вокруг неё сразу побегут мелкие пузырьки — около 175 °C. Если пузырьки бурные и масло дымит — слишком горячо. Можно проверить кусочком хлеба: при 180 °C он зарумянивается за 60 секунд.",
      },
      {
        heading: "Маленькими порциями",
        paragraphs: [
          "Каждая порция холодных продуктов снижает температуру масла на 20–40 °C. Если положить слишком много, масло остынет до 130–140 °C, и вместо хрустящей корочки получится жирная и мягкая.",
          "Опускайте продукты по несколько штук, так чтобы они свободно плавали. Между порциями дайте маслу вернуть нужную температуру — 1–2 минуты.",
          "Продукты должны быть сухими и не ледяными. Вода в горячем масле мгновенно вскипает и разбрызгивает масло. Замороженные полуфабрикаты не размораживайте, но стряхните с них лёд.",
        ],
      },
      {
        heading: "Панировка в три этапа",
        paragraphs: [
          "Классическая схема: мука → яйцо → сухари. Мука подсушивает поверхность, чтобы яйцо держалось, яйцо работает клеем, сухари дают хруст.",
        ],
        list: [
          "Поставьте три миски в ряд: мука с солью, взбитое яйцо с 1 ст. л. воды или молока, сухари.",
          "Одна рука — «сухая» (мука и сухари), другая — «мокрая» (яйцо). Так пальцы не обрастут комками панировки.",
          "Для двойной панировки (особенно хрустящей и прочной) — повторите яйцо и сухари ещё раз.",
          "Дайте панированным продуктам полежать 10–15 минут на решётке: панировка схватится и не отвалится в масле.",
        ],
        tip: "Японские сухари панко — крупные, воздушные хлопья — дают гораздо более хрустящую и лёгкую корочку, чем обычные мелкие сухари, и меньше впитывают масла. Кляр — отдельная тема, о нём в нашей статье про хрустящий кляр.",
      },
      {
        heading: "После масла: решётка, а не бумага",
        paragraphs: [
          "Когда продукт достали из масла, пар продолжает выходить из него несколько минут. На бумажном полотенце этот пар конденсируется снизу, и корочка размокает.",
          "Лучше выкладывать жареное на решётку, поставленную над противнем: воздух обтекает со всех сторон, и корочка остаётся хрустящей. Если используете бумагу — переворачивайте через минуту.",
          "Солите сразу, пока поверхность ещё блестит маслом, — соль прилипнет. Держите готовые порции тёплыми в духовке при 90–100 °C на решётке, пока жарите остальное.",
        ],
      },
      {
        heading: "Безопасность",
        paragraphs: [
          "Горячее масло — одна из самых частых причин ожогов и пожаров на кухне. Несколько правил, которые нельзя нарушать.",
        ],
        list: [
          "Никогда не оставляйте масло на огне без присмотра.",
          "Используйте глубокую тяжёлую кастрюлю, ручкой внутрь плиты. Дети и животные — подальше.",
          "Опускайте продукты от себя, аккуратно, шумовкой или щипцами — не бросайте.",
          "Если масло задымило — сразу снимите с огня: следующая стадия — возгорание.",
          "Если масло загорелось: выключите огонь и накройте кастрюлю крышкой или противнем, не поднимая до полного остывания. Можно засыпать большим количеством соды.",
          "Никогда не лейте воду на горящее масло: вода мгновенно превращается в пар и выбрасывает горящее масло огненным шаром.",
        ],
      },
      {
        heading: "Сколько раз можно использовать масло",
        paragraphs: [
          "Масло можно использовать повторно, если его правильно хранить. После жарки дайте ему полностью остыть, процедите через мелкое сито с бумажным фильтром или марлей и храните в закрытой бутылке в тёмном прохладном месте.",
        ],
        list: [
          "После картофеля и овощей — 4–6 раз.",
          "После панированных продуктов и кляра — 2–3 раза: крошки пригорают и ухудшают масло.",
          "После рыбы — 1–2 раза и только для рыбы: запах переходит на другие продукты.",
          "Масло пора выбросить, если оно потемнело, загустело, пахнет неприятно, сильно пенится или начинает дымить при обычной температуре.",
        ],
        tip: "Не выливайте масло в раковину: оно застывает в трубах и забивает канализацию. Остудите, перелейте в бутылку и выбросьте вместе с мусором или сдайте в пункт приёма отработанного масла.",
      },
      {
        heading: "Аэрогриль: альтернатива фритюру",
        paragraphs: [
          "Аэрогриль — это небольшая мощная конвекционная духовка. Горячий воздух обдувает продукт со всех сторон, и поверхность подсыхает и румянится почти как во фритюре, но с 1 ст. л. масла вместо литра.",
          "Лучше всего в аэрогриле получаются картофель фри и дольки, крылышки, наггетсы и панированные продукты, овощи, разогрев полуфабрикатов. Жидкий кляр не подходит — он просто стечёт.",
          "Правила: не переполняйте корзину — один слой; сбрызните продукты маслом из спрея; встряхивайте корзину каждые 5 минут; температура 180–200 °C. Время обычно на 20–30% меньше, чем в духовке.",
        ],
      },
    ],
    en: [
      {
        heading: "Why deep-frying doesn't make food greasy",
        paragraphs: [
          "The paradox: food properly deep-fried absorbs less oil than food fried in a little oil over low heat in a pan. When food hits hot oil, moisture on its surface turns instantly to steam. The steam pushes outwards and keeps the oil out, while the surface quickly sets into a crisp crust.",
          "Trouble starts when the oil isn't hot enough: steam escapes weakly, the crust forms slowly and the food soaks up oil like a sponge.",
        ],
      },
      {
        heading: "Which oil to choose",
        paragraphs: [
          "Deep-frying needs oil with a high smoke point — above 200 °C — and a neutral flavour.",
        ],
        list: [
          "Good: refined sunflower, peanut, rapeseed, corn, soybean, rice bran.",
          "Not suitable: unrefined sunflower, extra virgin olive oil, butter — they smoke and burn at frying temperatures and taste bitter.",
          "Amount: enough for the food to float without touching the bottom — usually 5–8 cm deep. Fill the pan no more than a third to a half: oil foams up when food goes in.",
        ],
      },
      {
        heading: "Temperature: the thing to control",
        paragraphs: [
          "Deep-frying without a thermometer is a lottery. A probe thermometer is cheap and solves 90% of problems.",
        ],
        list: [
          "160 °C — first fry for chips, large bone-in chicken pieces (longer, to cook through).",
          "170–175 °C — boneless chicken, battered fish, doughnuts, chebureki.",
          "175–180 °C — most foods: battered vegetables, onion rings, cheese sticks, shrimp.",
          "185–190 °C — second fry for chips, small quick items.",
        ],
        tip: "Without a thermometer: dip a wooden chopstick or spoon handle into the oil. If small bubbles stream from it at once, it's about 175 °C. If the bubbles are violent and the oil smokes, it's too hot. Or test with a cube of bread: at 180 °C it browns in 60 seconds.",
      },
      {
        heading: "Small batches",
        paragraphs: [
          "Each batch of cold food lowers the oil temperature by 20–40 °C. Add too much and the oil drops to 130–140 °C, and you get a soft, greasy crust instead of a crisp one.",
          "Lower in a few pieces at a time so they float freely. Between batches let the oil recover its temperature — 1–2 minutes.",
          "Food should be dry and not icy. Water in hot oil boils instantly and spatters oil. Don't thaw frozen products, but shake off the ice.",
        ],
      },
      {
        heading: "Three-step breading",
        paragraphs: [
          "The classic sequence is flour → egg → crumbs. Flour dries the surface so the egg sticks, the egg acts as glue, the crumbs give crunch.",
        ],
        list: [
          "Line up three bowls: seasoned flour, egg beaten with 1 tbsp water or milk, breadcrumbs.",
          "Keep one hand \"dry\" (flour and crumbs) and one \"wet\" (egg). That way your fingers don't end up clubbed in breading.",
          "For a double coat (extra crisp and sturdy), repeat the egg and crumbs.",
          "Leave breaded food on a rack for 10–15 minutes: the coating sets and won't fall off in the oil.",
        ],
        tip: "Japanese panko — large, airy flakes — gives a much crisper, lighter crust than fine breadcrumbs and absorbs less oil. Batter is a separate topic — see our article on crispy batter.",
      },
      {
        heading: "After the oil: a rack, not paper",
        paragraphs: [
          "When food comes out of the oil, steam keeps escaping for several minutes. On kitchen paper that steam condenses underneath and the crust goes soggy.",
          "Better to drain fried food on a rack set over a tray: air flows all round and the crust stays crisp. If you use paper, turn the food after a minute.",
          "Salt immediately, while the surface still glistens with oil, so the salt sticks. Keep finished batches warm on a rack in a 90–100 °C oven while you fry the rest.",
        ],
      },
      {
        heading: "Safety",
        paragraphs: [
          "Hot oil is one of the most common causes of kitchen burns and fires. A few rules never to break.",
        ],
        list: [
          "Never leave oil on the heat unattended.",
          "Use a deep, heavy pan with the handle turned in. Keep children and pets away.",
          "Lower food in away from you, gently, with a slotted spoon or tongs — don't drop it.",
          "If the oil starts smoking, take it off the heat at once: the next stage is fire.",
          "If the oil catches fire: turn off the heat and cover the pan with a lid or baking tray, and don't lift it until completely cool. You can also smother it with plenty of baking soda.",
          "Never pour water on burning oil: the water flashes to steam and throws the burning oil out as a fireball.",
        ],
      },
      {
        heading: "How many times can oil be reused",
        paragraphs: [
          "Oil can be reused if stored properly. After frying, let it cool completely, strain it through a fine sieve lined with paper or muslin and keep it in a sealed bottle somewhere cool and dark.",
        ],
        list: [
          "After potatoes and vegetables — 4–6 times.",
          "After breaded or battered food — 2–3 times: crumbs burn and degrade the oil.",
          "After fish — 1–2 times, and only for fish: the smell carries over.",
          "Throw the oil away if it has darkened, thickened, smells off, foams heavily or smokes at normal temperatures.",
        ],
        tip: "Don't pour oil down the sink: it solidifies in the pipes and blocks the drains. Cool it, pour it into a bottle and put it out with the rubbish, or take it to a used-oil collection point.",
      },
      {
        heading: "The air fryer: an alternative",
        paragraphs: [
          "An air fryer is a small, powerful convection oven. Hot air blows over the food from all sides, drying and browning the surface almost like deep-frying — with 1 tbsp oil instead of a litre.",
          "It does best with chips and wedges, wings, nuggets and breaded foods, vegetables and reheating frozen items. Wet batter doesn't work — it just drips off.",
          "The rules: don't overfill the basket — one layer; spray the food with oil; shake the basket every 5 minutes; 180–200 °C. Times are usually 20–30% shorter than in an oven.",
        ],
      },
    ],
    ua: [
      {
        heading: "Чому фритюр не робить їжу жирною",
        paragraphs: [
          "Парадокс: правильно приготована у фритюрі страва вбирає менше олії, ніж та, що смажилася на сковороді в невеликій кількості олії на слабкому вогні. Коли продукт потрапляє в гарячу олію, волога на його поверхні миттєво перетворюється на пару. Пара виходить назовні й не пускає олію всередину, а поверхня швидко схоплюється хрусткою скоринкою.",
          "Проблеми починаються, коли олія недостатньо гаряча: пара виходить слабко, скоринка утворюється повільно, і продукт вбирає олію, як губка.",
        ],
      },
      {
        heading: "Яку олію обрати",
        paragraphs: [
          "Для фритюру потрібна олія з високою температурою димлення — вище 200 °C — і нейтральним смаком.",
        ],
        list: [
          "Підходять: соняшникова рафінована, арахісова, ріпакова, кукурудзяна, соєва, рисова.",
          "Не підходять: нерафінована соняшникова, оливкова extra virgin, вершкове масло — вони димлять і горять за фритюрних температур, дають гіркоту.",
          "Кількість: стільки, щоб продукт плавав, не торкаючись дна, — зазвичай шар 5–8 см. У каструлю наливайте не більше ніж на ⅓–½ висоти: олія спінюється під час закладання.",
        ],
      },
      {
        heading: "Температура: головне, що треба контролювати",
        paragraphs: [
          "Без термометра смажити у фритюрі — лотерея. Кухонний термометр зі щупом коштує недорого й розв'язує 90% проблем.",
        ],
        list: [
          "160 °C — перше обсмаження картоплі фрі, великі шматки курки на кістці (довше, щоб просмажилися всередині).",
          "170–175 °C — курка без кістки, риба в клярі, пончики, чебуреки.",
          "175–180 °C — більшість продуктів: овочі в клярі, цибулеві кільця, сирні палички, креветки.",
          "185–190 °C — друге обсмаження фрі, швидкі дрібні продукти.",
        ],
        tip: "Без термометра: опустіть в олію дерев'яну паличку або ручку дерев'яної ложки. Якщо навколо неї одразу побіжать дрібні бульбашки — близько 175 °C. Якщо бульбашки бурхливі й олія димить — надто гаряче. Можна перевірити шматочком хліба: за 180 °C він рум'яниться за 60 секунд.",
      },
      {
        heading: "Маленькими порціями",
        paragraphs: [
          "Кожна порція холодних продуктів знижує температуру олії на 20–40 °C. Якщо покласти забагато, олія охолоне до 130–140 °C, і замість хрусткої скоринки вийде жирна й м'яка.",
          "Опускайте продукти по кілька штук, щоб вони вільно плавали. Між порціями дайте олії повернути потрібну температуру — 1–2 хвилини.",
          "Продукти мають бути сухими й не крижаними. Вода в гарячій олії миттєво закипає й розбризкує олію. Заморожені напівфабрикати не розморожуйте, але струсіть із них лід.",
        ],
      },
      {
        heading: "Панірування в три етапи",
        paragraphs: [
          "Класична схема: борошно → яйце → сухарі. Борошно підсушує поверхню, щоб яйце трималося, яйце працює клеєм, сухарі дають хрускіт.",
        ],
        list: [
          "Поставте три миски в ряд: борошно із сіллю, збите яйце з 1 ст. л. води або молока, сухарі.",
          "Одна рука — «суха» (борошно й сухарі), інша — «мокра» (яйце). Так пальці не обростуть грудками панірування.",
          "Для подвійного панірування (особливо хрусткого й міцного) — повторіть яйце й сухарі ще раз.",
          "Дайте панірованим продуктам полежати 10–15 хвилин на решітці: панірування схопиться й не відпаде в олії.",
        ],
        tip: "Японські сухарі панко — великі, повітряні пластівці — дають набагато хрусткішу й легшу скоринку, ніж звичайні дрібні сухарі, і менше вбирають олії. Кляр — окрема тема, про нього в нашій статті про хрусткий кляр.",
      },
      {
        heading: "Після олії: решітка, а не папір",
        paragraphs: [
          "Коли продукт дістали з олії, пара продовжує виходити з нього кілька хвилин. На паперовому рушнику ця пара конденсується знизу, і скоринка розмокає.",
          "Краще викладати смажене на решітку, поставлену над деком: повітря обтікає з усіх боків, і скоринка лишається хрусткою. Якщо використовуєте папір — перевертайте через хвилину.",
          "Соліть одразу, поки поверхня ще блищить олією, — сіль прилипне. Тримайте готові порції теплими в духовці за 90–100 °C на решітці, поки смажите решту.",
        ],
      },
      {
        heading: "Безпека",
        paragraphs: [
          "Гаряча олія — одна з найчастіших причин опіків і пожеж на кухні. Кілька правил, які не можна порушувати.",
        ],
        list: [
          "Ніколи не залишайте олію на вогні без нагляду.",
          "Використовуйте глибоку важку каструлю, ручкою всередину плити. Діти й тварини — подалі.",
          "Опускайте продукти від себе, обережно, шумівкою або щипцями — не кидайте.",
          "Якщо олія задиміла — одразу зніміть із вогню: наступна стадія — займання.",
          "Якщо олія зайнялася: вимкніть вогонь і накрийте каструлю кришкою або деком, не піднімаючи до повного охолодження. Можна засипати великою кількістю соди.",
          "Ніколи не лийте воду на палаючу олію: вода миттєво перетворюється на пару й викидає палаючу олію вогняною кулею.",
        ],
      },
      {
        heading: "Скільки разів можна використовувати олію",
        paragraphs: [
          "Олію можна використовувати повторно, якщо правильно її зберігати. Після смаження дайте їй повністю охолонути, процідіть крізь дрібне сито з паперовим фільтром або марлею й зберігайте в закритій пляшці в темному прохолодному місці.",
        ],
        list: [
          "Після картоплі й овочів — 4–6 разів.",
          "Після панірованих продуктів і кляру — 2–3 рази: крихти пригорають і погіршують олію.",
          "Після риби — 1–2 рази й лише для риби: запах переходить на інші продукти.",
          "Олію час викинути, якщо вона потемніла, загусла, неприємно пахне, сильно піниться або починає димити за звичайної температури.",
        ],
        tip: "Не виливайте олію в раковину: вона застигає в трубах і забиває каналізацію. Остудіть, перелийте в пляшку й викиньте разом зі сміттям або здайте в пункт приймання відпрацьованої олії.",
      },
      {
        heading: "Аерогриль: альтернатива фритюру",
        paragraphs: [
          "Аерогриль — це невелика потужна конвекційна духовка. Гаряче повітря обдуває продукт з усіх боків, і поверхня підсихає й рум'яниться майже як у фритюрі, але з 1 ст. л. олії замість літра.",
          "Найкраще в аерогрилі виходять картопля фрі й часточки, крильця, нагетси й паніровані продукти, овочі, розігрівання напівфабрикатів. Рідкий кляр не підходить — він просто стече.",
          "Правила: не переповнюйте кошик — один шар; збризніть продукти олією зі спрею; струшуйте кошик кожні 5 хвилин; температура 180–200 °C. Час зазвичай на 20–30% менший, ніж у духовці.",
        ],
      },
    ],
  },
  faq: {
    ru: [
      { q: "Почему панировка отваливается?", a: "Продукт был мокрым, пропустили муку или сразу опустили в масло. Обсушите продукт, запанируйте по схеме мука–яйцо–сухари и дайте полежать 10–15 минут." },
      { q: "Почему снаружи сгорело, а внутри сыро?", a: "Масло слишком горячее для такого размера. Крупные куски жарьте при 160–170 °C или обжарьте до цвета и доведите в духовке при 180 °C." },
      { q: "Можно ли жарить во фритюре на сковороде?", a: "Да, в глубокой сковороде или сотейнике со слоем масла 2–3 см, переворачивая продукты. Это «полуфритюр» — подходит для котлет, шницелей, сырников, пирожков." },
      { q: "Как избавиться от запаха жареного на кухне?", a: "Включите вытяжку до начала жарки, не после. После — прокипятите кастрюлю воды с уксусом или корками цитрусовых 10 минут." },
      { q: "Сколько масла впитывает картофель фри?", a: "При правильной температуре — около 5–8% веса. При слишком холодном масле — до 15–20%. Термометр буквально экономит калории." },
    ],
    en: [
      { q: "Why does the breading fall off?", a: "The food was wet, the flour step was skipped, or it went straight into the oil. Dry the food, bread it flour–egg–crumbs and let it rest 10–15 minutes." },
      { q: "Why is it burnt outside and raw inside?", a: "The oil is too hot for pieces that size. Fry large pieces at 160–170 °C, or brown them and finish in a 180 °C oven." },
      { q: "Can I deep-fry in a frying pan?", a: "Yes, in a deep frying pan or sauté pan with 2–3 cm of oil, turning the food. That's shallow-frying — fine for patties, schnitzels, syrniki and pirozhki." },
      { q: "How do I get rid of the fried smell in the kitchen?", a: "Turn the extractor on before you start frying, not after. Afterwards, simmer a pan of water with vinegar or citrus peel for 10 minutes." },
      { q: "How much oil do chips absorb?", a: "At the right temperature, about 5–8% of their weight. In oil that's too cool, up to 15–20%. A thermometer literally saves calories." },
    ],
    ua: [
      { q: "Чому панірування відпадає?", a: "Продукт був мокрим, пропустили борошно або одразу опустили в олію. Обсушіть продукт, запаніруйте за схемою борошно–яйце–сухарі й дайте полежати 10–15 хвилин." },
      { q: "Чому зовні згоріло, а всередині сире?", a: "Олія надто гаряча для такого розміру. Великі шматки смажте за 160–170 °C або обсмажте до кольору й доведіть у духовці за 180 °C." },
      { q: "Чи можна смажити у фритюрі на сковороді?", a: "Так, у глибокій сковороді чи сотейнику з шаром олії 2–3 см, перевертаючи продукти. Це «напівфритюр» — підходить для котлет, шніцелів, сирників, пиріжків." },
      { q: "Як позбутися запаху смаженого на кухні?", a: "Увімкніть витяжку до початку смаження, а не після. Потім — прокип'ятіть каструлю води з оцтом або шкірками цитрусових 10 хвилин." },
      { q: "Скільки олії вбирає картопля фрі?", a: "За правильної температури — близько 5–8% ваги. У надто холодній олії — до 15–20%. Термометр буквально заощаджує калорії." },
    ],
  },
};
