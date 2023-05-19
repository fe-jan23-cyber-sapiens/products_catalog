import { getNumbers } from './helper';

export const itemsTotal = 95;
export const pageByDefault = 1;
export const itemsPerPageOptions = ['16', '32', '64'];
export const sortOptions = ['Newest', 'Discount', 'Price'];

export const VIDEO_PATH = 'https://res.cloudinary.com/dhg5wnekh/'
  + 'video/upload/v1684446826/song_made_ctpwl2.mp4';

export const items = getNumbers(1, itemsTotal)
  .map((n: number) => `Item ${n}`);

export const THEME_LIGHT = 'light';
export const THEME_DARK = 'dark';

export const BASE_URL = 'https://products-catalog-api.onrender.com';
