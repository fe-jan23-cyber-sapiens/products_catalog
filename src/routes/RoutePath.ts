import { PATH } from './types/Path';

export const RoutePath: Record<PATH, string> = {
  [PATH.Main]: '/',
  [PATH.Home]: '/home',
  [PATH.Phones]: '/phones',
  [PATH.Phone]: '/phones/:phoneId',
  [PATH.Tablets]: '/tablets',
  [PATH.Accessories]: '/accessories',
  [PATH.Favourites]: '/favourites',
  [PATH.Cart]: '/cart',
  [PATH.Error]: '*',
};
