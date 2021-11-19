import {Store} from './store';

export const MicrosoftPL: Store = {
  currency: 'zł',
  labels: {
    inStock: {
      container: 'button[aria-label="Finalizuj zakup pakietu"]',
      text: ['Finalizuj'],
    },
    outOfStock: {
      container: 'button[aria-label="Finalizuj zakup pakietu"]',
      text: ['Brak w magazynie'],
    },
  },
  links: [
    {
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      url: 'https://www.xbox.com/pl-pl/configure/8WJ714N3RBTL',
    },
    {
      brand: 'microsoft',
      model: 'xbox series x',
      series: 'xboxsx',
      url: 'https://www.xbox.com/pl-pl/configure/8wj714n3rbtl',
    },
    {
      brand: 'microsoft',
      model: 'xbox series x halo',
      series: 'xboxsxhalo',
      url: 'https://www.xbox.com/pl-pl/configure/8RPM8T9CK0P6',
    },
    {
      brand: 'microsoft',
      model: 'xbox series s',
      series: 'xboxss',
      url: 'https://www.xbox.com/pl-pl/configure/942J774TP9JN',
    },
  ],
  name: 'microsoft-pl',
};
