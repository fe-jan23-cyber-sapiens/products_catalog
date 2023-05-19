import { PATH } from './types/Path';

export const RoutePath: Record<PATH, string> = {
  [PATH.Main]: '/',
  [PATH.Home]: '/home',
  [PATH.Phones]: '/phones',
  [PATH.Phone]: '/phones/:phoneId',
  [PATH.Tablet]: '/tablets/:tabletId',
  [PATH.Tablets]: '/tablets',
  [PATH.Accessories]: '/accessories',
  [PATH.Accessory]: '/accessories/:accessoryId',
  [PATH.Favourites]: '/favourites',
  [PATH.Cart]: '/cart',
  [PATH.Order]: '/order',
  [PATH.Error]: '*',
  [PATH.Contacts]: '/contacts',
  [PATH.Rights]: '/rights',
  [PATH.Success]: '/orderSuccess',
};
