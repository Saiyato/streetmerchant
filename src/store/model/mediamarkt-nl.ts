import {Store} from './store';

export const MediamarktNL: Store = {
  backoffStatusCodes: [403, 429, 503],
  currency: '€',
  labels: {
    captcha: {
      container: 'body',
      text: ['Das ging uns leider zu schnell.'],
    },
    maxPrice: {
      container: 'span[font-family="price"]',
      euroFormat: false,
    },
    outOfStock: [
      {
        container: 'div.box.infobox.availability > ul > li > span > span',
        text: ['Online uitverkocht.'],
      },
    ],
  },
  links: [
    {
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      url: 'https://www.mediamarkt.nl/nl/product/-1673371.html',
    },
    {
      brand: 'microsoft',
      model: 'xbox series x',
      series: 'xboxsx',
      url: 'https://www.mediamarkt.nl/nl/product/-1667555.html',
    },
    {
      brand: 'microsoft',
      model: 'xbox series s',
      series: 'xboxss',
      url: 'https://www.mediamarkt.nl/nl/product/-1673371.html',
    },
  ],
  name: 'mediamarkt-nl',
};
