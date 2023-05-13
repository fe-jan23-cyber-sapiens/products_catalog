import { FC } from 'react';
import {
  Navigate,
  Route,
  RouteProps,
  Routes,
} from 'react-router-dom';
import { HomePage } from '../pages/HomePage/HomePage';
import { ProductsPage } from '../pages/ProductsPage/ProductsPage';
import { FavouritesPage } from '../pages/FavouritesPage';
import { CartPage } from '../pages/CartPage';
import { NotFoundPage } from '../pages/NotFoundPage';
import { RoutePath } from './RoutePath';
import { PATH } from './types/Path';
import { Contacts } from '../pages/Contacts';
import { Rights } from '../pages/Rights';
import { ProductPage } from '../pages/ProductPage/ProductPage';

export const routeConfig: Record<PATH, RouteProps> = {
  [PATH.Main]: {
    path: RoutePath.main,
    element: <HomePage />,
  },

  [PATH.Home]: {
    path: RoutePath.home,
    element: <Navigate to={PATH.Home} replace />,
  },

  [PATH.Phones]: {
    path: RoutePath.phones,
    element: <ProductsPage title="Mobile phones" endpoint="phones" />,
  },

  [PATH.Phone]: {
    path: RoutePath.phoneId,
    element: <ProductPage />,
  },

  [PATH.Tablets]: {
    path: RoutePath.tablets,
    element: <ProductsPage title="Tablets" endpoint="tablets" />,
  },

  [PATH.Accessories]: {
    path: RoutePath.accessories,
    element: <ProductsPage title="Accessories" endpoint="accessories" />,
  },

  [PATH.Favourites]: {
    path: RoutePath.favourites,
    element: <FavouritesPage />,
  },

  [PATH.Cart]: {
    path: RoutePath.cart,
    element: <CartPage />,
  },

  [PATH.Error]: {
    path: RoutePath.error,
    element: <NotFoundPage />,
  },

  [PATH.Contacts]: {
    path: RoutePath.contacts,
    element: <Contacts />,
  },

  [PATH.Rights]: {
    path: RoutePath.rights,
    element: <Rights />,
  },
};

export const MainRoutes: FC = () => (
  <Routes>
    {Object.values(routeConfig).map(({ path, element }) => (
      <Route path={path} key={path} element={element} />
    ))}
  </Routes>
);
