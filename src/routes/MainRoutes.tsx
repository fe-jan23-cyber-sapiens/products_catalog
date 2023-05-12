import { FC } from 'react';
import {
  Navigate,
  Route,
  RouteProps,
  Routes,
} from 'react-router-dom';
import { HomePage } from '../pages/HomePage/HomePage';
import { ProductsPage } from '../pages/ProductsPage';
import { FavouritesPage } from '../pages/FavouritesPage';
import { CartPage } from '../pages/CartPage';
import { NotFoundPage } from '../pages/NotFoundPage';
import { RoutePath } from './RoutePath';
import { PATH } from './types/Path';
import { ProductPage } from '../pages/ProductPage/ProductPage';

export const routeConfig: Record<PATH, RouteProps> = {
  [PATH.Main]: {
    path: RoutePath.main,
    element: <HomePage />,
  },

  [PATH.Home]: {
    path: RoutePath.home,
    element: <Navigate to={PATH.Main} replace />,
  },

  [PATH.Phones]: {
    path: RoutePath.phones,
    element: <ProductsPage />,
  },

  [PATH.Phone]: {
    path: RoutePath.phoneId,
    element: <ProductPage />,
  },

  [PATH.Tablets]: {
    path: RoutePath.tablets,
    element: <ProductsPage />,
  },

  [PATH.Accessories]: {
    path: RoutePath.accessories,
    element: <ProductsPage />,
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
};

export const MainRoutes: FC = () => (
  <Routes>
    {Object.values(routeConfig).map(({
      path,
      element,
    }) => (
      <Route
        path={path}
        key={path}
        element={element}
      />
    ))}
  </Routes>
);
