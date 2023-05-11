import { Routes, Route, Navigate } from 'react-router-dom';

import { HomePage } from './pages/HomePage';
import { NotFoundPage } from './pages/NotFoundPage';
import { ProductsPage } from './pages/ProductsPage';
import { FavouritesPage } from './pages/FavouritesPage';
import { CartPage } from './pages/CartPage';
import { ProductItem } from './components/ProductCard';
import { OrderConfirmation } from './components/OrderConfirmation';

import './App.scss';

export const App = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/home" element={<Navigate to="/" replace />} />

    <Route path="/phones" element={<ProductsPage />} />
    <Route path="/tablets" element={<ProductsPage />} />
    <Route path="/accessories" element={<ProductsPage />} />
    <Route path="/card" element={<ProductItem />} />
    <Route path="/orderconfirmation" element={<OrderConfirmation />} />
    <Route path="/favourites" element={<FavouritesPage />} />

    <Route path="/cart" element={<CartPage />} />

    <Route path="*" element={<NotFoundPage />} />
  </Routes>
);
