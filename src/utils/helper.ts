import { Product } from './typedefs';
import { THEME_LIGHT } from './constants';

export const findProducts = (products: Product[], text: string) => {
  return products.filter(
    item => item.name.toLowerCase().includes(text.toLowerCase()),
  );
};

export const getSortedBy = (
  phones: Product[],
  sortBy: string,
): Product[] => {
  const sortedProducts = [...phones];

  switch (sortBy) {
    case 'price':
      return sortedProducts.sort((a, b) => Number(a.price) - Number(b.price));

    case 'discount':
      return sortedProducts.map(phone => ({
        ...phone,
        discountPrice: phone.fullPrice - Number(phone.price),
      })).sort((a, b) => b.discountPrice - a.discountPrice);

    case 'newest':
      return sortedProducts.sort((a, b) => b.year - a.year);

    default:
      return phones;
  }
};

export function getNumbers(from: number, to: number): number[] {
  const numbers = [];

  for (let n = from; n <= to; n += 1) {
    numbers.push(n);
  }

  return numbers;
}

export const getCurrentImage = (
  currentTheme: string,
  lightThemeImg: string,
  darkThemeImg: string,
) => {
  return currentTheme === THEME_LIGHT
    ? lightThemeImg
    : darkThemeImg;
};
