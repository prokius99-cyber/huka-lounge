/**
 * Единственный источник данных о бизнесе: название, контакты, адрес, часы, соцсети.
 * Каждое значение — из analysis.md (с источником). Нет факта — {{VERIFY: что}}.
 * Компоненты берут данные ТОЛЬКО отсюда, поэтому телефон на сайте всегда один (NAP).
 */
export const business = {
  /** Написание с брифа; на знаке — XYKA LOUNGE (analysis.md → VERIFY написания). */
  name: 'Хука Lounge',
  wordmark: 'XYKA LOUNGE',
  /** Короткое описание для title/description — без {{VERIFY}}. */
  tagline: 'кальян-бар, бар и ресторан на Приморском',
  description:
    'Хука Lounge — кальян-бар, бар и ресторан на Приморском проспекте, 137. Ежедневно с 14:00 до 02:00. Бронь стола в WhatsApp.',
  /** Телефон в формате +7XXXXXXXXXX и в человеческом виде. Источник: Яндекс.Карты. */
  phone: { e164: '+79992225570', display: '+7 (999) 222-55-70' },
  email: '',
  address: {
    street: 'Приморский проспект, 137, корп. 1В',
    city: 'Санкт-Петербург',
    region: '',
    postalCode: '197374',
    note: '2 этаж, ЖК «Золотая Гавань»',
    district: 'Приморский район',
  },
  geo: { lat: 0, lon: 0 },
  /** Часы в формате schema.org. Источник: 2ГИС, vsemeda, вывеска. */
  hours: ['Mo-Su 14:00-02:00'],
  hoursDisplay: 'Ежедневно 14:00–02:00',
  open: { from: 14, to: 2 },
  /** Средний чек — vsemeda.com. */
  averageCheck: '1200 ₽',
  ratings: [
    {
      source: 'Яндекс Карты',
      value: '4,9',
      count: '111 оценок',
      note: '82 отзыва · «Хорошее место 2026»',
      url: 'https://yandex.ru/maps/2/saint-petersburg/search/%D0%A5%D1%83%D0%BA%D0%B0%20Lounge%20%D0%9F%D1%80%D0%B8%D0%BC%D0%BE%D1%80%D1%81%D0%BA%D0%B8%D0%B9%20%D0%BF%D1%80%D0%BE%D1%81%D0%BF%D0%B5%D0%BA%D1%82%20137/',
    },
    {
      source: '2ГИС',
      value: '4,5',
      count: '136 оценок',
      note: '120 отзывов',
      url: 'https://2gis.ru/spb/firm/70000001054281698',
    },
  ],
  links: {
    yandexMaps:
      'https://yandex.ru/maps/2/saint-petersburg/search/%D0%A5%D1%83%D0%BA%D0%B0%20Lounge%20%D0%9F%D1%80%D0%B8%D0%BC%D0%BE%D1%80%D1%81%D0%BA%D0%B8%D0%B9%20%D0%BF%D1%80%D0%BE%D1%81%D0%BF%D0%B5%D0%BA%D1%82%20137/',
    twoGis: 'https://2gis.ru/spb/firm/70000001054281698',
    vk: 'https://vk.com/xykalounge',
    telegram: 'xyka_lounge', // username без @ — для ссылки t.me/<username>
    whatsapp: '79992225570', // номер в формате 7XXXXXXXXXX
    max: 'https://max.ru/+79992225570',
    menu: 'https://xykalounge.taplink.ws',
  },
  /** Цвет панели браузера на телефоне = --c-bg из DESIGN.md. */
  themeColor: '#0d0a07',
  /** Тип для JSON-LD. */
  schemaType: 'BarOrPub',
  /** Реквизиты для подвала и политики конфиденциальности. */
  legal: { operator: '{{VERIFY: ИП/ООО}}', inn: '{{VERIFY: ИНН}}', ogrn: '' },
};

export const bookingUrl = `https://wa.me/${business.links.whatsapp}?text=${encodeURIComponent('Здравствуйте! Хочу забронировать стол в Хука Lounge.')}`;

/** Заявки: адрес приёма (вебхук, форма, серверная функция). Пусто — форма предлагает мессенджеры. */
export const orderEndpoint = import.meta.env.PUBLIC_ORDER_ENDPOINT || '';

/** Демо для клиента: noindex + запрет в robots.txt. Включено по умолчанию до выкладки на домен клиента. */
export const isDemo = (import.meta.env.PUBLIC_DEMO ?? 'true') !== 'false';
