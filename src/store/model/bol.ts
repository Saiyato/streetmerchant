import {Store} from './store';

export const Bol: Store = {
  currency: '€',
  labels: {
    inStock: {
      container: 'div > div.buy-block__highlight.u-mr--xxs',
      text: ['Op voorraad'],
    },
    maxPrice: {
      container: 'span > div.promo-price',
      euroFormat: true,
    },
    outOfStock: {
      container: 'div > div.buy-block__title',
      text: ['Levertermijn onbekend', 'pre-order'],
    },
  },
  links: [
    {
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      url: 'https://www.bol.com/nl/nl/p/xbox-elite-series-2-controller-zwart-series-x-s-xbox-one/9200000113983766',
    },
    {
      brand: 'microsoft',
      model: 'xbox series s',
      series: 'xboxss',
      url: 'https://www.bol.com/nl/nl/p/xbox-series-s-console/9300000003688722',
    },
    {
      brand: 'microsoft',
      model: 'xbox series x',
      series: 'xboxsx',
      url: 'https://www.bol.com/nl/nl/p/xbox-series-x-console/9300000003688723',
    },
    {
      brand: 'microsoft',
      model: 'xbox series x halo',
      series: 'xboxsxhalo',
      url: 'https://www.bol.com/nl/nl/p/xbox-series-x-halo-infinite-limited-edition-bundel/9300000054521531',
    },
  ],
  name: 'bol',
};
