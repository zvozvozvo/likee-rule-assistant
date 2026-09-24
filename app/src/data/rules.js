export const rules = [
  // ================= НАСИЛИЕ =================

  {
    id:"gun_person",
    category:"Насилие",
    title:"Оружие направлено на человека",
    action:"Reject",
    ban:"Ствол направлен на человека.",
    allow:"Военный контекст без нападения.",
    trap:"Даже без выстрела считается угрозой.",
    keywords:["оружие","пистолет","автомат","пушка","gun"]
  },
  {
    id:"knife_attack",
    category:"Насилие",
    title:"Ножевое нападение",
    action:"Reject",
    ban:"Удар ножом.",
    allow:"Нож просто лежит.",
    trap:"Смотри именно действие.",
    keywords:["нож","лезвие"]
  },
  {
    id:"open_wound",
    category:"Насилие",
    title:"Открытые раны",
    action:"Reject",
    ban:"Тяжёлые открытые раны.",
    allow:"Мелкая царапина.",
    trap:"Акцент на крови усиливает нарушение.",
    keywords:["кровь","рана","органы"]
  },
  {
    id:"real_death",
    category:"Насилие",
    title:"Реальная смерть",
    action:"Reject",
    ban:"Показ смерти человека.",
    allow:"",
    trap:"Даже короткий фрагмент считается.",
    keywords:["смерть","труп"]
  },
  {
    id:"minor_blood",
    category:"Насилие",
    title:"Небольшая кровь",
    action:"Ignore",
    ban:"Мелкая царапина.",
    allow:"Без акцента.",
    trap:"Главное смотреть масштаб.",
    keywords:["царапина"]
  },
  {
    id:"surgery",
    category:"Насилие",
    title:"Медицинская операция",
    action:"Ignore",
    ban:"Учебный медицинский материал.",
    allow:"Без акцента на крови.",
    trap:"Не путать с жестокостью.",
    keywords:["операция","медицина"]
  },

  // ================= САМОПОВРЕЖДЕНИЕ =================

  {
    id:"self_harm_rope",
    category:"Самоповреждение",
    title:"Петля",
    action:"Reject",
    ban:"Попытка самоповреждения.",
    allow:"",
    trap:"Контекст важнее текста.",
    keywords:["петля","верёвка"]
  },
  {
    id:"cuts",
    category:"Самоповреждение",
    title:"Порезы",
    action:"Reject",
    ban:"Самоповреждение.",
    allow:"Медицина.",
    trap:"Смотри намерение.",
    keywords:["порез"]
  },
  {
    id:"jump_self",
    category:"Самоповреждение",
    title:"Попытка спрыгнуть",
    action:"Reject",
    ban:"Попытка причинить вред себе.",
    allow:"",
    trap:"Даже без падения.",
    keywords:["прыжок"]
  },

  // ================= 18+ =================

  {
    id:"sexual_touch",
    category:"18+",
    title:"Сексуальные прикосновения",
    action:"Reject",
    ban:"Повторные прикосновения к груди, паху или ягодицам.",
    allow:"Случайные касания.",
    trap:"Балет и медицина исключение.",
    keywords:["ягодицы","грудь","пах"]
  },
  {
    id:"wet_girl",
    category:"18+",
    title:"Мокрая девушка",
    action:"Tag A",
    ban:"Эротический контекст без полной наготы.",
    allow:"Нет эротизации.",
    trap:"Полотенце проверяем по подмышке.",
    keywords:["полотенце","ванна"]
  },
  {
    id:"thighs",
    category:"18+",
    title:"Голые бедра",
    action:"Tag A",
    ban:"Более 3 секунд.",
    allow:"Обычная одежда.",
    trap:"Смотри длительность.",
    keywords:["бедро"]
  },
  {
    id:"male_shower",
    category:"18+",
    title:"Мужчина в душе",
    action:"Reject",
    ban:"Акцент на груди или паху.",
    allow:"",
    trap:"Если пол непонятен, оценивается как мужчина.",
    keywords:["душ"]
  },
  {
    id:"erotic_moves",
    category:"18+",
    title:"Эротические движения",
    action:"Reject",
    ban:"Повторяющиеся сексуальные движения.",
    allow:"",
    trap:"Фокус на ягодицах усиливает нарушение.",
    keywords:["тверк","бедра"]
  },

  // ================= ТАБАК =================

  {
    id:"smoking",
    category:"Табак",
    title:"Взрослый курит",
    action:"Conceal",
    ban:"Курение без рекламы.",
    allow:"Нет продажи.",
    trap:"Продажа уже Reject.",
    keywords:["вейп","iqos","сигарета"]
  },
  {
    id:"sell_vape",
    category:"Табак",
    title:"Продажа никотина",
    action:"Reject",
    ban:"QR, цена, ссылка.",
    allow:"",
    trap:"Telegram тоже считается рекламой.",
    keywords:["qr","вейп","купить"]
  },

  // ================= ВЫСОТА =================

  {
    id:"roof",
    category:"Высота",
    title:"Крыша здания",
    action:"Reject",
    ban:"Опасное лазание.",
    allow:"Смотровая площадка.",
    trap:"Перила не спасают.",
    keywords:["крыша","высота"]
  },
  {
    id:"hook_train",
    category:"Высота",
    title:"Зацепер",
    action:"Reject",
    ban:"Между вагонами или на крыше.",
    allow:"Обычная поездка.",
    trap:"Любая езда снаружи.",
    keywords:["поезд","зацепер"]
  },
  {
    id:"danger_challenge",
    category:"Высота",
    title:"Опасный челлендж",
    action:"Reject",
    ban:"Реальный риск травм.",
    allow:"",
    trap:"Не путать с кино.",
    keywords:["челлендж"]
  },

  // ================= ПРИВАТНОСТЬ =================

  {
    id:"passport",
    category:"Приватность",
    title:"Паспорт",
    action:"Reject",
    ban:"Читаемый документ.",
    allow:"Замазанные данные.",
    trap:"Даже частично читаемый номер.",
    keywords:["паспорт","документ"]
  },
  {
    id:"phone",
    category:"Приватность",
    title:"Телефонный номер",
    action:"Reject",
    ban:"Виден номер.",
    allow:"Замазан.",
    trap:"Описание тоже считается.",
    keywords:["номер","телефон"]
  },
  {
    id:"bank_card",
    category:"Приватность",
    title:"Банковская карта",
    action:"Reject",
    ban:"Видны реквизиты.",
    allow:"",
    trap:"Смотри обе стороны карты.",
    keywords:["карта"]
  },
  {
    id:"address",
    category:"Приватность",
    title:"Домашний адрес",
    action:"Reject",
    ban:"Публикация адреса.",
    allow:"",
    trap:"Доксинг тоже сюда.",
    keywords:["адрес"]
  },

  // ================= ЭКСТРЕМИЗМ =================

  {
    id:"nazi",
    category:"Экстремизм",
    title:"Нацистская символика",
    action:"Reject",
    ban:"Пропагандистский контекст.",
    allow:"Исторический контекст.",
    trap:"Буддийская свастика исключение.",
    keywords:["свастика"]
  },
  {
    id:"buddha",
    category:"Экстремизм",
    title:"Буддийская свастика",
    action:"Ignore",
    ban:"Не нарушение.",
    allow:"Религиозный символ.",
    trap:"Не путать с нацистской.",
    keywords:["буддизм"]
  },

  // ================= МОШЕННИЧЕСТВО =================

  {
    id:"easy_money",
    category:"Мошенничество",
    title:"Лёгкие деньги",
    action:"Reject",
    ban:"Гарантированный заработок.",
    allow:"",
    trap:"'100000 за день' тоже сюда.",
    keywords:["100000","деньги"]
  },
  {
    id:"telegram_sell",
    category:"Мошенничество",
    title:"Telegram для продажи",
    action:"Reject",
    ban:"Увод на запрещённую продажу.",
    allow:"",
    trap:"Ник Telegram тоже считается.",
    keywords:["telegram"]
  },
  {
    id:"fake_giveaway",
    category:"Мошенничество",
    title:"Фейковый розыгрыш",
    action:"Reject",
    ban:"Лайк за деньги.",
    allow:"",
    trap:"Обещание выплаты без подтверждения.",
    keywords:["розыгрыш"]
  },

  // ================= АЗАРТНЫЕ ИГРЫ =================

  {
    id:"casino",
    category:"Азартные игры",
    title:"Казино",
    action:"Reject",
    ban:"Реклама казино.",
    allow:"",
    trap:"Ссылка тоже нарушение.",
    keywords:["казино"]
  },
  {
    id:"bets",
    category:"Азартные игры",
    title:"Ставки",
    action:"Reject",
    ban:"Призыв поставить.",
    allow:"",
    trap:"Букмекеры тоже сюда.",
    keywords:["ставки"]
  },

  // ================= НАРКОТИКИ =================

  {
    id:"drug_use",
    category:"Наркотики",
    title:"Употребление наркотиков",
    action:"Reject",
    ban:"Процесс употребления.",
    allow:"",
    trap:"Даже демонстрация считается.",
    keywords:["наркотики"]
  },
  {
    id:"drug_sale",
    category:"Наркотики",
    title:"Продажа наркотиков",
    action:"Reject",
    ban:"Контакты и цена.",
    allow:"",
    trap:"QR тоже считается.",
    keywords:["клад","наркота"]
  },

  // ================= ОРУЖИЕ =================

  {
    id:"weapon_sale",
    category:"Оружие",
    title:"Продажа оружия",
    action:"Reject",
    ban:"Продажа оружия.",
    allow:"",
    trap:"Боеприпасы тоже сюда.",
    keywords:["оружие"]
  },

  // ================= ЖИВОТНЫЕ =================

  {
    id:"animal_abuse",
    category:"Животные",
    title:"Избиение животного",
    action:"Reject",
    ban:"Реальная жестокость.",
    allow:"Обычный питомец.",
    trap:"Не путать с игрой.",
    keywords:["кот","собака","животное"]
  },
  {
    id:"pet",
    category:"Животные",
    title:"Домашний питомец",
    action:"Ignore",
    ban:"Обычный ролик.",
    allow:"",
    trap:"Без жестокости.",
    keywords:["кот","собака"]
  },

  // ================= ИГРЫ =================

  {
    id:"roblox",
    category:"Игры",
    title:"Roblox с расчленением",
    action:"Reject",
    ban:"Детский хоррор.",
    allow:"Обычный Roblox.",
    trap:"Смотри кровь.",
    keywords:["roblox"]
  },
  {
    id:"gacha",
    category:"Игры",
    title:"Gacha с кровью",
    action:"Reject",
    ban:"Кровавый контент.",
    allow:"Обычная Gacha.",
    trap:"Не путать с обычной анимацией.",
    keywords:["gacha"]
  },

  // ================= СПАМ =================

  {
    id:"spam",
    category:"Спам",
    title:"Повторяющийся текст",
    action:"Reject",
    ban:"Спам.",
    allow:"",
    trap:"Массовые одинаковые сообщения тоже сюда.",
    keywords:["спам"]
  },
  {
    id:"boost",
    category:"Спам",
    title:"Накрутка подписчиков",
    action:"Reject",
    ban:"Продажа накрутки.",
    allow:"",
    trap:"Даже без цены.",
    keywords:["подписчики"]
  },

  // ================= ДЕТИ =================

  {
    id:"child_smoking",
    category:"Дети",
    title:"Ребёнок курит",
    action:"Reject",
    ban:"Несовершеннолетний с никотином.",
    allow:"",
    trap:"Возраст оцениваем по контексту.",
    keywords:["ребёнок"]
  },
  {
    id:"child_alcohol",
    category:"Дети",
    title:"Ребёнок с алкоголем",
    action:"Reject",
    ban:"Несовершеннолетний с алкоголем.",
    allow:"",
    trap:"Не путать с реквизитом.",
    keywords:["ребёнок"]
  },

  // ================= ПОЛИТИКА =================

  {
    id:"politics",
    category:"Политика",
    title:"Политический контент",
    action:"Conceal",
    ban:"Чувствительная политическая тема.",
    allow:"",
    trap:"Смотри контекст ролика.",
    keywords:["политика"]
  },

  // ================= РЕЛИГИЯ =================

  {
    id:"temple",
    category:"Религия",
    title:"Оскорбление храма",
    action:"Reject",
    ban:"Намеренное оскорбление.",
    allow:"",
    trap:"Смотри именно действие.",
    keywords:["храм"]
  },
  // ===== NEW RULES (Violence 2026 PDF) =====

{
id:"campus-attack",
title:"Нападение на школу",
category:"Насилие",
action:"Reject",
ban:"Нападение на территории школы, стрельба, ножевые атаки, взрывы, поджоги.",
allow:"Новостной репортаж официальных СМИ.",
trap:"Даже реконструкция или монтаж про школьного стрелка — Reject.",
keywords:["школа","стрелок","галявиев","нападение"]
},

{
id:"gun-sale",
title:"Продажа оружия",
category:"Оружие",
action:"Reject",
ban:"Продажа оружия, QR, цены, ссылки, «напиши в ЛС».",
allow:"Игровые скины и безопасные игрушечные пистолеты.",
trap:"Даже копия оружия с призывом купить — Reject.",
keywords:["пистолет","ружье","купить","QR","оружие"]
},

{
id:"gun-point-camera",
title:"Оружие направлено в камеру",
category:"Оружие",
action:"Reject",
ban:"Дуло направлено в человека, себя или камеру.",
allow:"Военные без стрельбы, оружие просто лежит.",
trap:"Военная техника без попадания по людям — Ignore.",
keywords:["дуло","камера","угроза","оружие"]
},

{
id:"weapon-display",
title:"Оружие просто показано",
category:"Оружие",
action:"Ignore",
ban:"",
allow:"Лежит на столе, в кобуре или висит без угрозы.",
trap:"Если появляется продажа или угроза, становится Reject.",
keywords:["нож","пистолет","витрина"]
},

{
id:"knife-violence",
title:"Ножевое насилие",
category:"Насилие",
action:"Reject",
ban:"Ножевые удары, драка с ножом, реальные последствия.",
allow:"",
trap:"",
keywords:["нож","поножовщина"]
},

{
id:"deformation",
title:"Сильные физические деформации",
category:"Насилие",
action:"Reject",
ban:"Тяжёлые деформации лица или тела, вызывающие шок.",
allow:"",
trap:"Фильмы и ИИ тоже наказываются.",
keywords:["деформация","увечье"]
},

{
id:"eating-disorder",
title:"Пропаганда расстройств пищевого поведения",
category:"Насилие",
action:"Reject",
ban:"Голодание, вызов рвоты, опасные диеты, романтизация РПП.",
allow:"Образовательные и медицинские материалы.",
trap:"",
keywords:["анорексия","булимия","голодовка"]
},

{
id:"heavy-burns",
title:"Тяжёлые ожоги и переломы",
category:"Насилие",
action:"Reject",
ban:"Обширные ожоги, сильные переломы, тяжёлые кровавые раны.",
allow:"",
trap:"Игры и фильмы тоже Reject.",
keywords:["ожог","перелом"]
},

{
id:"trypophobia",
title:"Трипофобия",
category:"Насилие",
action:"Reject",
ban:"Большие скопления отверстий, личинки в коже, органы.",
allow:"Учебная медицина и модели органов.",
trap:"",
keywords:["трипофобия","личинки","органы"]
},

{
id:"medical-lips",
title:"Инъекции губ и пирсинг",
category:"Насилие",
action:"Ignore",
ban:"",
allow:"Косметология без кровавости.",
trap:"",
keywords:["ботокс","пирсинг"]
},

{
id:"scratch-closeup",
title:"Царапины крупным планом",
category:"Насилие",
action:"Ignore",
ban:"",
allow:"Обычные ссадины и небольшие раны.",
trap:"",
keywords:["царапина","рана"]
},

{
id:"disability-mock",
title:"Высмеивание инвалидности",
category:"Насилие",
action:"Reject",
ban:"Насмешки, имитация симптомов, унижение людей с инвалидностью.",
allow:"Социальная реклама и просветительский контент.",
trap:"",
keywords:["инвалид","насмешка"]
},

{
id:"screamer",
title:"Скример",
category:"Насилие",
action:"Reject",
ban:"Преднамеренные страшные розыгрыши.",
allow:"",
trap:"",
keywords:["скример","страшилка"]
},

{
id:"corpse-closeup",
title:"Труп крупным планом",
category:"Насилие",
action:"Reject",
ban:"Крупный план реального мёртвого тела.",
allow:"Похороны без акцента на теле.",
trap:"",
keywords:["труп","мертвец"]
},

{
id:"animal-abuse",
title:"Жестокое обращение с животными",
category:"Животные",
action:"Reject",
ban:"Избиение, сжигание, расчленение, кровавые раны, издевательство.",
allow:"Животное с инвалидностью, если видно уход.",
trap:"Разлагающийся труп животного — Reject.",
keywords:["животное","избиение","расчленение"]
},
// ===== NEW RULES (18+, High Altitude, Politics) =====

{
id:"sexual-touch-sensitive",
title:"Активные прикосновения к интимным зонам",
category:"18+",
action:"Reject",
ban:"Поглаживание, разминание, надавливание, многократное касание гениталий, груди, ягодиц, бёдер.",
allow:"Случайный кратковременный контакт при движении или переодевании.",
trap:"Даже через одежду может считаться нарушением.",
keywords:["грудь","ягодицы","бедра","интим"]
},

{
id:"sexual-object-touch",
title:"Предмет касается интимной зоны",
category:"18+",
action:"Reject",
ban:"Еда, реквизит и другие предметы используются для сексуального прикосновения.",
allow:"",
trap:"",
keywords:["предмет","еда","эротика"]
},

{
id:"sexual-arousal",
title:"Сексуальное возбуждение",
category:"18+",
action:"Reject",
ban:"Контент с очевидным сексуальным подтекстом и возбуждением.",
allow:"",
trap:"",
keywords:["сексуально","эротика","возбуждение"]
},

{
id:"vulgar-indecent",
title:"Пошлый и непристойный контент",
category:"18+",
action:"Reject",
ban:"Контент с откровенно непристойным сексуальным поведением.",
allow:"",
trap:"",
keywords:["пошлость","непристойность"]
},

{
id:"twerking-adult",
title:"Взрослая женщина трясёт ягодицами",
category:"18+",
action:"Tag A",
ban:"",
allow:"Спортивные соревнования без сексуального акцента.",
trap:"Длительный акцент на ягодицах более секунды получает Tag A.",
keywords:["тверк","ягодицы"]
},

{
id:"butt-emphasis",
title:"Акцент на ягодицах",
category:"18+",
action:"Tag A",
ban:"",
allow:"",
trap:"Спиной или боком к камере более секунды для демонстрации изгибов.",
keywords:["ягодицы","поза"]
},

{
id:"side-boob",
title:"Боковая часть груди",
category:"18+",
action:"Ignore",
ban:"",
allow:"Пляж, бассейн, побережье.",
trap:"Правило относится именно к этим сценам.",
keywords:["грудь","пляж"]
},

{
id:"towel-fake-nude",
title:"Имитация наготы полотенцем",
category:"18+",
action:"Ignore",
ban:"",
allow:"Полотенце или простыня создают иллюзию наготы.",
trap:"",
keywords:["полотенце","простыня"]
},

{
id:"underwear-emphasis",
title:"Демонстрация нижнего белья",
category:"18+",
action:"Tag A",
ban:"",
allow:"",
trap:"Если акцент становится сексуальным.",
keywords:["белье"]
},

{
id:"lingerie-pose",
title:"Сексуальная поза в белье",
category:"18+",
action:"Reject",
ban:"Откровенная сексуальная демонстрация тела в белье.",
allow:"",
trap:"",
keywords:["белье","сексуальная поза"]
},

{
id:"high-altitude-roof",
title:"Съёмка с крыши вниз",
category:"Высота",
action:"Reject",
ban:"Съёмка вниз с крыши, края балкона, края высотного здания.",
allow:"",
trap:"Наличие перил не спасает.",
keywords:["крыша","высота","селфи"]
},

{
id:"high-altitude-climb",
title:"Лазание по высотным сооружениям",
category:"Высота",
action:"Reject",
ban:"Краны, мосты, вышки, дымовые трубы, скалы.",
allow:"",
trap:"",
keywords:["кран","мост","вышка"]
},

{
id:"abandoned-climb",
title:"Исследование заброшек на высоте",
category:"Высота",
action:"Reject",
ban:"Заброшенные здания, фабрики, тоннели, опасные конструкции.",
allow:"",
trap:"",
keywords:["заброшка","туннель"]
},

{
id:"political-sensitive",
title:"Политически чувствительные события",
category:"Политика",
action:"Conceal",
ban:"",
allow:"Новостные материалы могут идти по отдельным правилам.",
trap:"",
keywords:["политика","конфликт","граница"]
},

{
id:"political-conflict",
title:"Военные и территориальные конфликты",
category:"Политика",
action:"Conceal",
ban:"Индия-Пакистан, Палестина-Израиль и другие чувствительные конфликты.",
allow:"",
trap:"",
keywords:["война","конфликт"]
},

{
id:"mass-riots",
title:"Массовые беспорядки",
category:"Политика",
action:"Reject",
ban:"Призывы или распространение незаконных массовых действий.",
allow:"",
trap:"",
keywords:["митинг","беспорядки"]
},

{
id:"redan",
title:"ЧВК Редан",
category:"Политика",
action:"Reject",
ban:"Символика, обсуждение и контент, связанный с ЧВК Редан.",
allow:"",
trap:"",
keywords:["редан","чвк"]
},

{
id:"anti-birth",
title:"Пропаганда отказа от рождения детей",
category:"Политика",
action:"Reject",
ban:"Призывы отказаться от рождения детей.",
allow:"",
trap:"",
keywords:["чайлдфри","рождение"]
},
// ===== NEW RULES (Fraud, Gambling, Drugs, Spam, Children, Privacy) =====

{
id:"fake-giveaway",
title:"Фейковый розыгрыш",
category:"Мошенничество",
action:"Reject",
ban:"Ложные розыгрыши, обещание выигрыша без подтверждения.",
allow:"Официальные розыгрыши с прозрачными условиями.",
trap:"«Напиши в ЛС и получишь приз» — Reject.",
keywords:["розыгрыш","приз","выигрыш"]
},

{
id:"easy-money",
title:"Лёгкие деньги",
category:"Мошенничество",
action:"Reject",
ban:"«Заработай миллион без усилий», быстрый доход.",
allow:"Реальные вакансии без ложных обещаний.",
trap:"",
keywords:["легкие деньги","доход"]
},

{
id:"telegram-sale",
title:"Продажа через Telegram",
category:"Мошенничество",
action:"Reject",
ban:"Перевод общения в Telegram для покупки запрещённых товаров.",
allow:"",
trap:"",
keywords:["telegram","купить"]
},

{
id:"fake-docs",
title:"Продажа поддельных документов",
category:"Мошенничество",
action:"Reject",
ban:"Паспорта, права, дипломы и другие документы.",
allow:"",
trap:"",
keywords:["паспорт","права","диплом"]
},

{
id:"crypto-scam",
title:"Крипто-мошенничество",
category:"Мошенничество",
action:"Reject",
ban:"Гарантированная прибыль, пампы, схемы обогащения.",
allow:"Обучение без обещаний доходности.",
trap:"",
keywords:["крипта","bitcoin","прибыль"]
},

{
id:"casino-ad",
title:"Реклама казино",
category:"Азартные игры",
action:"Reject",
ban:"Казино, слоты, рулетка, букмекерские ссылки.",
allow:"",
trap:"",
keywords:["казино","слоты","ставки"]
},

{
id:"betting-link",
title:"Ссылка на ставки",
category:"Азартные игры",
action:"Reject",
ban:"Реферальные ссылки и QR на букмекерские сервисы.",
allow:"",
trap:"",
keywords:["ставки","букмекер","QR"]
},

{
id:"lottery-money",
title:"Денежная лотерея",
category:"Азартные игры",
action:"Reject",
ban:"Розыгрыш денег через азартный механизм.",
allow:"",
trap:"",
keywords:["лотерея","деньги"]
},

{
id:"drugs-use",
title:"Употребление наркотиков",
category:"Наркотики",
action:"Reject",
ban:"Реальное употребление запрещённых веществ.",
allow:"Антинаркотическая социальная реклама.",
trap:"",
keywords:["наркотики","употребление"]
},

{
id:"drug-sale",
title:"Продажа наркотиков",
category:"Наркотики",
action:"Reject",
ban:"Закладки, цены, контакты, QR, реклама.",
allow:"",
trap:"",
keywords:["закладка","купить","наркотики"]
},

{
id:"drug-instruction",
title:"Инструкция по изготовлению наркотиков",
category:"Наркотики",
action:"Reject",
ban:"Рецепты и инструкции изготовления.",
allow:"",
trap:"",
keywords:["рецепт","изготовление"]
},

{
id:"weed-display",
title:"Демонстрация марихуаны",
category:"Наркотики",
action:"Reject",
ban:"Крупный показ вещества с позитивным контекстом.",
allow:"Новостной или образовательный контент.",
trap:"",
keywords:["марихуана","трава","weed"]
},

{
id:"gacha-blood",
title:"Gacha с кровью",
category:"Игры",
action:"Reject",
ban:"Gacha-сцены с кровью и насилием.",
allow:"",
trap:"",
keywords:["gacha"]
},

{
id:"roblox-dismemberment",
title:"Roblox с расчленением",
category:"Игры",
action:"Reject",
ban:"Жестокое насилие даже в Roblox.",
allow:"",
trap:"",
keywords:["roblox"]
},

{
id:"game-violence-light",
title:"Лёгкое игровое насилие",
category:"Игры",
action:"Ignore",
ban:"",
allow:"Без реалистичной крови.",
trap:"",
keywords:["игра"]
},

{
id:"repeat-text",
title:"Повторяющийся текст",
category:"Спам",
action:"Reject",
ban:"Массовый одинаковый текст.",
allow:"",
trap:"",
keywords:["спам","повтор"]
},

{
id:"follower-cheat",
title:"Накрутка подписчиков",
category:"Спам",
action:"Reject",
ban:"«Подпишись взаимно», накрутка, обмен лайками.",
allow:"",
trap:"",
keywords:["подписчики","накрутка"]
},

{
id:"mass-comments",
title:"Массовые комментарии",
category:"Спам",
action:"Reject",
ban:"Флуд и автоматические комментарии.",
allow:"",
trap:"",
keywords:["комментарии","флуд"]
},

{
id:"child-smoking",
title:"Ребёнок курит",
category:"Дети",
action:"Reject",
ban:"Несовершеннолетний курит сигарету, вейп или кальян.",
allow:"",
trap:"",
keywords:["ребенок","курит","вейп"]
},

{
id:"child-alcohol",
title:"Ребёнок с алкоголем",
category:"Дети",
action:"Reject",
ban:"Несовершеннолетний употребляет алкоголь.",
allow:"",
trap:"",
keywords:["ребенок","алкоголь"]
},

{
id:"child-danger",
title:"Ребёнок в опасной ситуации",
category:"Дети",
action:"Reject",
ban:"Опасные челленджи, высота, оружие рядом.",
allow:"",
trap:"",
keywords:["ребенок","опасность"]
},

{
id:"passport-number",
title:"Паспорт с читаемыми данными",
category:"Приватность",
action:"Reject",
ban:"Номер паспорта, серия, персональные данные.",
allow:"Замазанные данные.",
trap:"",
keywords:["паспорт","номер"]
},

{
id:"bank-card-full",
title:"Полная банковская карта",
category:"Приватность",
action:"Reject",
ban:"Полный номер карты, CVV, срок действия.",
allow:"Закрытые цифры.",
trap:"",
keywords:["карта","CVV"]
},

{
id:"home-address",
title:"Домашний адрес",
category:"Приватность",
action:"Reject",
ban:"Полный адрес проживания.",
allow:"Общий вид улицы без раскрытия адреса.",
trap:"",
keywords:["адрес","дом"]
},

{
id:"phone-visible",
title:"Телефонный номер крупным планом",
category:"Приватность",
action:"Reject",
ban:"Читаемый номер телефона.",
allow:"Если номер полностью скрыт.",
trap:"",
keywords:["телефон","номер"]
},
// ===== NEW RULES (Extremism, Religion, Terrorism, Animals, Dangerous Challenges) =====

{
id:"nazi-symbols",
title:"Нацистская символика",
category:"Экстремизм",
action:"Reject",
ban:"Свастика, SS, Totenkopf, пропаганда нацизма.",
allow:"Исторические фильмы и музеи без пропаганды.",
trap:"Контекст имеет значение.",
keywords:["свастика","SS","нацизм"]
},

{
id:"extremist-propaganda",
title:"Пропаганда экстремизма",
category:"Экстремизм",
action:"Reject",
ban:"Поддержка экстремистских организаций и призывы присоединиться.",
allow:"",
trap:"",
keywords:["экстремизм","организация"]
},

{
id:"terrorist-symbols",
title:"Символика террористических организаций",
category:"Экстремизм",
action:"Reject",
ban:"Флаги, эмблемы, лозунги террористических групп.",
allow:"Документальные материалы без пропаганды.",
trap:"",
keywords:["терроризм","флаг"]
},

{
id:"terrorist-instructions",
title:"Инструкции по теракту",
category:"Экстремизм",
action:"Reject",
ban:"Изготовление бомб, инструкции нападений.",
allow:"",
trap:"",
keywords:["бомба","теракт"]
},

{
id:"explosive-recipe",
title:"Рецепт взрывчатки",
category:"Экстремизм",
action:"Reject",
ban:"Самодельные взрывные устройства.",
allow:"",
trap:"",
keywords:["взрывчатка","бомба"]
},

{
id:"religious-insult",
title:"Оскорбление религиозных чувств",
category:"Религия",
action:"Reject",
ban:"Унижение святынь и верующих.",
allow:"Нейтральное обсуждение религии.",
trap:"",
keywords:["религия","оскорбление"]
},

{
id:"temple-vandalism",
title:"Вандализм в храме",
category:"Религия",
action:"Reject",
ban:"Осквернение храмов и святынь.",
allow:"",
trap:"",
keywords:["храм","церковь"]
},

{
id:"quran-burning",
title:"Сожжение религиозной книги",
category:"Религия",
action:"Reject",
ban:"Публичное уничтожение священных книг.",
allow:"",
trap:"",
keywords:["коран","библия"]
},

{
id:"religious-debate",
title:"Обсуждение религии",
category:"Религия",
action:"Ignore",
ban:"",
allow:"Спокойные дискуссии без унижения.",
trap:"",
keywords:["религия","дискуссия"]
},

{
id:"animal-fight",
title:"Бои животных",
category:"Животные",
action:"Reject",
ban:"Петушиные, собачьи и другие бои.",
allow:"",
trap:"",
keywords:["бой","животное"]
},

{
id:"animal-burning",
title:"Сжигание животного",
category:"Животные",
action:"Reject",
ban:"Любая жестокость со смертельной опасностью.",
allow:"",
trap:"",
keywords:["животное","огонь"]
},

{
id:"animal-dismemberment",
title:"Расчленение животного",
category:"Животные",
action:"Reject",
ban:"Крупный план расчленения.",
allow:"Кулинария без шокирующего акцента, если это соответствует правилам.",
trap:"",
keywords:["животное","расчленение"]
},

{
id:"pet-care",
title:"Уход за больным питомцем",
category:"Животные",
action:"Ignore",
ban:"",
allow:"Лечение и забота о животном.",
trap:"",
keywords:["питомец","лечение"]
},

{
id:"train-surfing",
title:"Зацепинг",
category:"Высота",
action:"Reject",
ban:"Поезд снаружи, крыша вагона, сцепка.",
allow:"",
trap:"",
keywords:["зацепер","поезд"]
},

{
id:"roof-jump",
title:"Прыжок с крыши",
category:"Высота",
action:"Reject",
ban:"Опасные прыжки и челленджи.",
allow:"",
trap:"",
keywords:["крыша","прыжок"]
},

{
id:"dangerous-challenge",
title:"Опасный челлендж",
category:"Высота",
action:"Reject",
ban:"Повторение действий с риском смерти или тяжёлых травм.",
allow:"",
trap:"",
keywords:["челлендж","опасность"]
},

{
id:"gas-inhalation",
title:"Вдыхание газа",
category:"Наркотики",
action:"Reject",
ban:"Пропаганда токсикомании.",
allow:"",
trap:"",
keywords:["газ","баллон"]
},

{
id:"fake-medicine",
title:"Опасные медицинские советы",
category:"Мошенничество",
action:"Reject",
ban:"Ложные советы, угрожающие здоровью.",
allow:"Материалы врачей без опасных рекомендаций.",
trap:"",
keywords:["лечение","лекарство"]
},

{
id:"personal-data-document",
title:"Документ с персональными данными",
category:"Приватность",
action:"Reject",
ban:"Любой документ с читаемыми личными данными.",
allow:"Все данные полностью скрыты.",
trap:"",
keywords:["документ","личные данные"]
},

{
id:"child-danger-game",
title:"Ребёнок повторяет опасный челлендж",
category:"Дети",
action:"Reject",
ban:"Несовершеннолетний участвует в опасном тренде.",
allow:"",
trap:"",
keywords:["ребенок","челлендж"]
},

{
id:"hate-slogan",
title:"Лозунги ненависти",
category:"Экстремизм",
action:"Reject",
ban:"Призывы к насилию против групп людей.",
allow:"",
trap:"",
keywords:["ненависть","лозунг"]
},

{
id:"memorial-respect",
title:"Памятники и мемориалы",
category:"Политика",
action:"Conceal",
ban:"Чувствительный политический контекст вокруг мемориалов.",
allow:"Нейтральная съёмка без провокаций.",
trap:"",
keywords:["мемориал","памятник"]
},
// ===== NEW RULES (Pages 9–12: LQ, Traffic, AI, Underage) =====

{
id:"meaningless-video",
title:"Бессмысленное статичное видео",
category:"Качество",
action:"Ignore",
ban:"",
allow:"Почти всё видео состоит из стены, потолка, чёрного экрана или одного неподвижного кадра с минимальными эффектами.",
trap:"Встроенные заставки CapCut/TikTok не спасают от LQ.",
keywords:["стена","потолок","черный экран","LQ"]
},

{
id:"feces-content",
title:"Фекалии крупным планом",
category:"Насилие",
action:"Reject",
ban:"Умышленный показ фекалий ради шока.",
allow:"",
trap:"",
keywords:["фекалии","дерьмо"]
},

{
id:"disabled-clickbait",
title:"Использование инвалидности ради хайпа",
category:"Насилие",
action:"Reject",
ban:"Использование людей с инвалидностью для набора просмотров и подписок.",
allow:"",
trap:"",
keywords:["инвалид","хайп"]
},

{
id:"likee-vip-fraud",
title:"Фейковый Likee VIP",
category:"Мошенничество",
action:"Reject",
ban:"Обман о получении Likee VIP, Pro Account, монет или верификации.",
allow:"",
trap:"",
keywords:["Likee VIP","верификация"]
},

{
id:"panic-rumors",
title:"Панические слухи",
category:"Мошенничество",
action:"Reject",
ban:"Использование чрезвычайных событий для распространения паники.",
allow:"",
trap:"",
keywords:["конец света","слухи"]
},

{
id:"telegram-diversion",
title:"Перенаправление в Telegram",
category:"Спам",
action:"Reject",
ban:"Призыв перейти в Telegram, ТГ, телегу, TG и подобные варианты.",
allow:"Просто упоминание Telegram без призыва перейти.",
trap:"Омофоны и эмодзи тоже считаются обходом.",
keywords:["telegram","тг","телега","tg"]
},

{
id:"social-diversion",
title:"Перенаправление в соцсети",
category:"Спам",
action:"Reject",
ban:"Instagram, YouTube, WhatsApp, Boosty и другие платформы с аккаунтом или призывом перейти.",
allow:"Автоматические водяные знаки редакторов.",
trap:"'Ссылка в профиле' + логотип платформы = Reject.",
keywords:["instagram","youtube","boosty","whatsapp"]
},

{
id:"external-qr",
title:"QR-код для перехода",
category:"Спам",
action:"Reject",
ban:"QR-коды и URL для перехода на сторонние платформы.",
allow:"QR на вывеске, упаковке, официальном сайте или в обучающем ролике без призыва перейти.",
trap:"",
keywords:["QR","URL","ссылка"]
},

{
id:"reward-diversion",
title:"Бесплатные награды через сторонние платформы",
category:"Мошенничество",
action:"Reject",
ban:"'Получи валюту', 'забери подарок', 'лотерея' через внешний сервис.",
allow:"Официальные акции игры.",
trap:"",
keywords:["валюта","подарок","лотерея"]
},

{
id:"gore-website",
title:"Призыв посетить gore-сайт",
category:"Насилие",
action:"Reject",
ban:"Призыв искать goresee, livegore, kaotic, BestGore и подобные сайты.",
allow:"Новостное упоминание без призыва искать.",
trap:"'Не гуглите это' тоже считается призывом.",
keywords:["goresee","livegore","bestgore"]
},

{
id:"dating-app",
title:"Реклама приложения знакомств",
category:"Спам",
action:"Reject",
ban:"Продвижение chat-roulette.ru, roulette.chat и аналогов.",
allow:"",
trap:"",
keywords:["chatroulette","roulette.chat"]
},

{
id:"direct-like-farming",
title:"Обман ради лайков",
category:"Спам",
action:"Reject",
ban:"'Поставь лайк или случится беда', ложные обещания наград.",
allow:"'Если понравилось, поставьте лайк' без обмана.",
trap:"",
keywords:["лайк","подписка","угроза"]
},

{
id:"lgbt-intimate",
title:"Интимный контакт ЛГБТ",
category:"18+",
action:"Reject",
ban:"Поцелуи и интимные ласки между лицами одного пола.",
allow:"Родительская любовь без сексуального подтекста.",
trap:"Фильмы, игры и ИИ оцениваются так же.",
keywords:["поцелуй","ЛГБТ"]
},

{
id:"lgbt-symbols",
title:"ЛГБТ-символика и заявления",
category:"18+",
action:"Reject",
ban:"Высказывания поддержки ЛГБТ, заявления о принадлежности к ЛГБТ и специальные флаги из списка платформы.",
allow:"Обычная радуга без связи с тематикой.",
trap:"",
keywords:["радуга","ЛГБТ","флаг"]
},

{
id:"crossdressing",
title:"Трансгендерные и кроссдресс-перформансы",
category:"18+",
action:"Reject",
ban:"Переодевание из мужчины в женщину и наоборот как основной контент.",
allow:"Актёрская игра в скетче.",
trap:"",
keywords:["кроссдресс","трансгендер"]
},

{
id:"anti-likee",
title:"Призывы удалить Likee",
category:"Политика",
action:"Reject",
ban:"Призывы удалить приложение или очернение Likee.",
allow:"",
trap:"",
keywords:["удали likee"]
},

{
id:"red-yellow-door",
title:"Красная дверь / Жёлтая дверь",
category:"Насилие",
action:"Reject",
ban:"Инструкция или многократное повторение ритуала.",
allow:"",
trap:"",
keywords:["красная дверь","желтая дверь"]
},

{
id:"dark-web",
title:"Даркнет",
category:"Мошенничество",
action:"Reject",
ban:"Tor, .onion, Kraken, обучение входу в даркнет.",
allow:"Документальный рассказ без инструкций.",
trap:"",
keywords:["tor",".onion","kraken"]
},

{
id:"vpn-promotion",
title:"Реклама VPN",
category:"Мошенничество",
action:"Reject",
ban:"Продвижение VPN и подмены геолокации.",
allow:"",
trap:"",
keywords:["vpn","геолокация"]
},

{
id:"aigc-tag",
title:"Контент, созданный ИИ",
category:"AIGC",
action:"Tag A",
ban:"",
allow:"Полностью сгенерированное видео или глубокий синтез без других нарушений.",
trap:"Обычные фильтры не считаются AIGC.",
keywords:["AI","deepfake","нейросеть"]
},

{
id:"book-disrespect",
title:"Оскорбление книг",
category:"Насилие",
action:"Reject",
ban:"Топтание, сжигание, плевки, мочеиспускание, граффити на книгах.",
allow:"Книга случайно упала.",
trap:"",
keywords:["книга","учебник"]
},

{
id:"dangerous-suspension",
title:"Опасное повешение",
category:"Насилие",
action:"Reject",
ban:"Кадры, создающие впечатление повешения.",
allow:"Воздушная акробатика и pole dance.",
trap:"",
keywords:["повешение","веревка"]
},

{
id:"mouth-corner-trimming",
title:"Разрезанные уголки губ (макияж)",
category:"Насилие",
action:"Reject",
ban:"Макияж, имитирующий разрезанные уголки губ.",
allow:"Blue V/Gold V/Gray V.",
trap:"Даже клоунский грим наказывается за сходство.",
keywords:["улыбка джокера","макияж"]
},

{
id:"off-platform-recording",
title:"Запись экрана другой платформы",
category:"Качество",
action:"Ignore",
ban:"",
allow:"Экран TikTok, Shorts и других платформ более 3 секунд получает LQ.",
trap:"Likee не считается нарушением.",
keywords:["экран","TikTok","Shorts"]
},

{
id:"minor-fake-pregnancy",
title:"Несовершеннолетняя имитирует беременность",
category:"Дети",
action:"Reject",
ban:"Подушка под одеждой, имитация большой груди или ягодиц.",
allow:"",
trap:"",
keywords:["беременность","несовершеннолетняя"]
},

{
id:"minor-kiss",
title:"Поцелуй несовершеннолетних",
category:"Дети",
action:"Reject",
ban:"Поцелуй между несовершеннолетними или взрослого с несовершеннолетним.",
allow:"Семейная любовь без интимного подтекста.",
trap:"",
keywords:["поцелуй","ребенок"]
},

{
id:"minor-body-focus",
title:"Фокус на теле несовершеннолетнего",
category:"Дети",
action:"Reject",
ban:"Длительный акцент на пахе, груди, ягодицах, бёдрах более 3 секунд.",
allow:"Блеск для губ не считается.",
trap:"",
keywords:["фокус","тело"]
},

{
id:"minor-sexual-pose",
title:"Сексуальная поза несовершеннолетнего",
category:"Дети",
action:"Reject",
ban:"Hip thrust, имитация оргазма, демонстрация изгибов тела.",
allow:"",
trap:"",
keywords:["hip thrust","поза"]
},

{
id:"minor-undressing",
title:"Несовершеннолетний снимает одежду",
category:"Дети",
action:"Reject",
ban:"Намеренное стягивание одежды ради демонстрации кожи.",
allow:"Случайный порыв ветра.",
trap:"",
keywords:["одежда","ребенок"]
},

{
id:"minor-improper-clothing",
title:"Откровенная одежда несовершеннолетнего",
category:"Дети",
action:"Reject",
ban:"Нижнее бельё, купальник с акцентом, обтягивающая одежда, показывающая форму гениталий.",
allow:"Ребёнок 0–3 лет в подгузнике без верхней одежды.",
trap:"",
keywords:["белье","купальник","ребенок"]
},
]