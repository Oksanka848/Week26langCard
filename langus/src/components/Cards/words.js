const engWords =
[
  {
    "id": 1,
    "en": "fly",
    "ru": "летать",
    "tr": "[ flai ]"
  },
  {
    "id": 2,
    "en": "pilot",
    "ru": "пилот",
    "tr": "[ 'pailət ]"
  },
  {
    "id": 3,
    "en": "hospital",
    "ru": "больница",
    "tr": "[ 'hɔspitl ]"
  },
  {
    "id": 4,
    "en": "estate",
    "ru": "поместье, имущество, сословие",
    "tr": "[ is'teit ]"
  },
  {
    "id": 5,
    "en": "apartment",
    "ru": "квартира",
    "tr": "[ ə'pɑ:tmənt ]"
  },
  {
    "id": 6,
    "en": "bakery",
    "ru": "пекарня",
    "tr": "[ 'beikəri ]"
  },
  {
    "id": 7,
    "en": "temple",
    "ru": "храм",
    "tr": "[ templ ]"
  },
  {
    "id": 8,
    "en": "church",
    "ru": "церковь",
    "tr": "[ ʧə:ʧ ]"
  },
  {
    "id": 9,
    "en": "dentist",
    "ru": "зубной врач",
    "tr": "[ 'dentist ]"
  },
  {
    "id": 10,
    "en": "doctor",
    "ru": "доктор, врач",
    "tr": "[ 'dɔktə ]"
  },
  {
    "id": 11,
    "en": "nurse",
    "ru": "няня (не nanny)",
    "tr": "[ nə:s ]"
  },
  {
    "id": 12,
    "en": "cup",
    "ru": "чашка",
    "tr": "[ kʌp ]"
  },
  {
    "id": 13,
    "en": "cupboard",
    "ru": "буфет",
    "tr": "[ 'kʌbəd ]"
  },
  {
    "id": 14,
    "en": "glass",
    "ru": "стакан, бокал",
    "tr": "[ glɑ:s ]"
  },
  {
    "id": 15,
    "en": "plate",
    "ru": "тарелка",
    "tr": "[ pleit ]"
  },
  {
    "id": 16,
    "en": "saucepan",
    "ru": "кастрюля",
    "tr": "[ 'sɔ:spən ]"
  },
  {
    "id": 17,
    "en": "jug",
    "ru": "кувшин",
    "tr": "[ ʤʌg ]"
  },
  {
    "id": 18,
    "en": "kettle",
    "ru": "чайник",
    "tr": "[ ketl ]"
  },
  {
    "id": 19,
    "en": "sink",
    "ru": "тонуть",
    "tr": "[ siŋk ]"
  },
  {
    "id": 20,
    "en": "tap",
    "ru": "постучать",
    "tr": "[ tæp ]"
  },
  {
    "id": 21,
    "en": "telephone",
    "ru": "телефон, звонить по телефону",
    "tr": "[ 'telifəun ]"
  },
  {
    "id": 22,
    "en": "knife",
    "ru": "нож",
    "tr": "[ naif ]"
  },
  {
    "id": 23,
    "en": "plane",
    "ru": "самолет",
    "tr": "[ plein ]"
  },
  {
    "id": 24,
    "en": "photographer",
    "ru": "фотограф",
    "tr": "[ fə'tɔgrəfə ]"
  },
  {
    "id": 25,
    "en": "reporter",
    "ru": "репортер",
    "tr": "[ ri'pɔ:tə ]"
  },
  {
    "id": 26,
    "en": "postman",
    "ru": "почтальон",
    "tr": "[ 'pəustman ]"
  },
  {
    "id": 27,
    "en": "cabbage",
    "ru": "капуста",
    "tr": "[ 'kæbiʤ ]"
  },
  {
    "id": 28,
    "en": "fork",
    "ru": "вилка",
    "tr": "[ fɔ:k ]"
  },
  {
    "id": 29,
    "en": "spoon",
    "ru": "ложка",
    "tr": "[ spu:n ]"
  },
  {
    "id": 30,
    "en": "waiter",
    "ru": "официант",
    "tr": "[ 'weitə ]"
  },
  {
    "id": 31,
    "en": "waitress",
    "ru": "официантка",
    "tr": "[ weits ]"
  },
  {
    "id": 32,
    "en": "market",
    "ru": "рынок",
    "tr": "[ 'mɑ:kit ]"
  },
  {
    "id": 33,
    "en": "actor",
    "ru": "актер",
    "tr": "[ 'æktə ]"
  },
  {
    "id": 34,
    "en": "drugstore",
    "ru": "аптека",
    "tr": "[ 'drʌg‚stɔ:r ]"
  },
  {
    "id": 35,
    "en": "pedestrian",
    "ru": "пешеход",
    "tr": "[ pi'destriən ]"
  },
  {
    "id": 36,
    "en": "block",
    "ru": "блок, квартал",
    "tr": "[ blɔk ]"
  },
  {
    "id": 37,
    "en": "bus",
    "ru": "автобус",
    "tr": "[ bʌs ]"
  },
  {
    "id": 38,
    "en": "car",
    "ru": "машина",
    "tr": "[ kɑ: ]"
  },
  {
    "id": 39,
    "en": "stadium",
    "ru": "стадион",
    "tr": "[ 'steidjəm ]"
  },
  {
    "id": 40,
    "en": "street",
    "ru": "улица",
    "tr": "[ stri:t ]"
  },
  {
    "id": 41,
    "en": "taxi",
    "ru": "такси",
    "tr": "[ 'tæksi ]"
  },
  {
    "id": 42,
    "en": "tram",
    "ru": "трамвай",
    "tr": "[ træm ]"
  },
  {
    "id": 43,
    "en": "underground",
    "ru": "метрополитен, подземный, подпольный",
    "tr": "[ 'ʌndəgraund ]"
  },
  {
    "id": 44,
    "en": "van",
    "ru": "фургон, багажный вагон",
    "tr": "[ væn ]"
  },
  {
    "id": 45,
    "en": "park",
    "ru": "парк, (при)парковать(ся)",
    "tr": "[ pɑ:k ]"
  },
  {
    "id": 46,
    "en": "boulevard",
    "ru": "бульвар",
    "tr": "[ 'bu:lvɑ: ]"
  },
  {
    "id": 47,
    "en": "truck",
    "ru": "грузовик",
    "tr": "[ trʌk ]"
  },
  {
    "id": 48,
    "en": "bicycle",
    "ru": "велосипед",
    "tr": "[ 'baisikl ]"
  },
  {
    "id": 49,
    "en": "train",
    "ru": "поезд, привлекать, воспитывать",
    "tr": "[ trein ]"
  },
  {
    "id": 50,
    "en": "coach",
    "ru": "тренировать, инструктор",
    "tr": "[ kəuʧ ]"
  },
  {
    "id": 51,
    "en": "fly",
    "ru": "летать",
    "tr": "[ flai ]"
  },
  {
    "id": 52,
    "en": "pilot",
    "ru": "пилот",
    "tr": "[ 'pailət ]"
  },
  {
    "id": 53,
    "en": "hospital",
    "ru": "больница",
    "tr": "[ 'hɔspitl ]"
  },
  {
    "id": 54,
    "en": "estate",
    "ru": "поместье, имущество, сословие",
    "tr": "[ is'teit ]"
  },
  {
    "id": 55,
    "en": "apartment",
    "ru": "квартира",
    "tr": "[ ə'pɑ:tmənt ]"
  },
  {
    "id": 56,
    "en": "bakery",
    "ru": "пекарня",
    "tr": "[ 'beikəri ]"
  },
  {
    "id": 57,
    "en": "temple",
    "ru": "храм",
    "tr": "[ templ ]"
  },
  {
    "id": 58,
    "en": "church",
    "ru": "церковь",
    "tr": "[ ʧə:ʧ ]"
  },
  {
    "id": 59,
    "en": "dentist",
    "ru": "зубной врач",
    "tr": "[ 'dentist ]"
  },
  {
    "id": 60,
    "en": "doctor",
    "ru": "доктор, врач",
    "tr": "[ 'dɔktə ]"
  },
  {
    "id": 61,
    "en": "nurse",
    "ru": "няня (не nanny)",
    "tr": "[ nə:s ]"
  },
  {
    "id": 62,
    "en": "cup",
    "ru": "чашка",
    "tr": "[ kʌp ]"
  },
  {
    "id": 63,
    "en": "cupboard",
    "ru": "буфет",
    "tr": "[ 'kʌbəd ]"
  },
  {
    "id": 64,
    "en": "glass",
    "ru": "стакан, бокал",
    "tr": "[ glɑ:s ]"
  },
  {
    "id": 65,
    "en": "plate",
    "ru": "тарелка",
    "tr": "[ pleit ]"
  },
  {
    "id": 66,
    "en": "saucepan",
    "ru": "кастрюля",
    "tr": "[ 'sɔ:spən ]"
  },
  {
    "id": 67,
    "en": "jug",
    "ru": "кувшин",
    "tr": "[ ʤʌg ]"
  },
  {
    "id": 68,
    "en": "kettle",
    "ru": "чайник",
    "tr": "[ ketl ]"
  },
  {
    "id": 69,
    "en": "sink",
    "ru": "тонуть",
    "tr": "[ siŋk ]"
  },
  {
    "id": 70,
    "en": "tap",
    "ru": "постучать",
    "tr": "[ tæp ]"
  },
  {
    "id": 71,
    "en": "telephone",
    "ru": "телефон, звонить по телефону",
    "tr": "[ 'telifəun ]"
  },
  {
    "id": 72,
    "en": "knife",
    "ru": "нож",
    "tr": "[ naif ]"
  },
  {
    "id": 73,
    "en": "plane",
    "ru": "самолет",
    "tr": "[ plein ]"
  },
  {
    "id": 74,
    "en": "photographer",
    "ru": "фотограф",
    "tr": "[ fə'tɔgrəfə ]"
  },
  {
    "id": 75,
    "en": "reporter",
    "ru": "репортер",
    "tr": "[ ri'pɔ:tə ]"
  },
  {
    "id": 76,
    "en": "postman",
    "ru": "почтальон",
    "tr": "[ 'pəustman ]"
  },
  {
    "id": 77,
    "en": "cabbage",
    "ru": "капуста",
    "tr": "[ 'kæbiʤ ]"
  },
  {
    "id": 78,
    "en": "fork",
    "ru": "вилка",
    "tr": "[ fɔ:k ]"
  },
  {
    "id": 79,
    "en": "spoon",
    "ru": "ложка",
    "tr": "[ spu:n ]"
  },
  {
    "id": 80,
    "en": "waiter",
    "ru": "официант",
    "tr": "[ 'weitə ]"
  },
  {
    "id": 81,
    "en": "waitress",
    "ru": "официантка",
    "tr": "[ weits ]"
  },
  {
    "id": 82,
    "en": "market",
    "ru": "рынок",
    "tr": "[ 'mɑ:kit ]"
  },
  {
    "id": 83,
    "en": "actor",
    "ru": "актер",
    "tr": "[ 'æktə ]"
  },
  {
    "id": 84,
    "en": "drugstore",
    "ru": "аптека",
    "tr": "[ 'drʌg‚stɔ:r ]"
  },
  {
    "id": 85,
    "en": "pedestrian",
    "ru": "пешеход",
    "tr": "[ pi'destriən ]"
  },
  {
    "id": 86,
    "en": "block",
    "ru": "блок, квартал",
    "tr": "[ blɔk ]"
  },
  {
    "id": 87,
    "en": "bus",
    "ru": "автобус",
    "tr": "[ bʌs ]"
  },
  {
    "id": 88,
    "en": "car",
    "ru": "машина",
    "tr": "[ kɑ: ]"
  },
  {
    "id": 89,
    "en": "stadium",
    "ru": "стадион",
    "tr": "[ 'steidjəm ]"
  },
  {
    "id": 90,
    "en": "street",
    "ru": "улица",
    "tr": "[ stri:t ]"
  },
  {
    "id": 91,
    "en": "taxi",
    "ru": "такси",
    "tr": "[ 'tæksi ]"
  },
  {
    "id": 92,
    "en": "tram",
    "ru": "трамвай",
    "tr": "[ træm ]"
  },
  {
    "id": 93,
    "en": "underground",
    "ru": "метрополитен, подземный, подпольный",
    "tr": "[ 'ʌndəgraund ]"
  }
];
