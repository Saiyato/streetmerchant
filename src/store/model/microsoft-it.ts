import {Store} from './store';

export const MicrosoftIT: Store = {
  currency: '€',
  labels: {
    inStock: {
      container: 'button[aria-label="Completa transazione pacchetto"]',
      text: ['Completa transazione'],
    },
    outOfStock: {
      container: 'button[aria-label="Completa transazione pacchetto"]',
      text: ['Non disponibile'],
    },
  },
  links: [
    {
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      url: 'https://www.xbox.com/it-it/configure/8WJ714N3RBTL',
    },
    {
      brand: 'microsoft',
      model: 'xbox series x',
      series: 'xboxsx',
      url: 'https://www.xbox.com/it-it/configure/8wj714n3rbtl',
    },
    {
      brand: 'microsoft',
      model: 'xbox series x halo',
      series: 'xboxsxhalo',
      url: 'https://www.xbox.com/it-it/configure/8RPM8T9CK0P6',
    },
    {
      brand: 'microsoft',
      model: 'xbox series s',
      series: 'xboxss',
      url: 'https://www.xbox.com/it-it/configure/942J774TP9JN',
    },
  ],
  name: 'microsoft-it',
};
