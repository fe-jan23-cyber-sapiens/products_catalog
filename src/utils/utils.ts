// eslint-disable-next-line import/no-cycle
import { THEME_LIGHT } from './constants';

export function getNumbers(from: number, to: number): number[] {
  const numbers = [];

  for (let n = from; n <= to; n += 1) {
    numbers.push(n);
  }

  return numbers;
}

export const getCurrentImage = (
  currentTheme: string | boolean,
  lightThemeImg: string,
  darkThemeImg: string,
) => {
  return currentTheme === THEME_LIGHT
    ? lightThemeImg
    : darkThemeImg;
};
