import { getNumbers } from './utils';

export const itemsTotal = 95;
export const pageByDefault = 1;
export const itemsByDefault = 16;
export const itemsPerPageOptions = ['16', '32', '64'];

export const items = getNumbers(1, itemsTotal)
  .map(n => `Item ${n}`);
