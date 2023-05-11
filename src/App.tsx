import { useContext } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { HomePage } from './pages/HomePage';
import { NotFoundPage } from './pages/NotFoundPage';
import { ProductsPage } from './pages/ProductsPage';
import { FavouritesPage } from './pages/FavouritesPage';
import { CartPage } from './pages/CartPage';

import './App.scss';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ThemeContext } from './context/ThemeContext';

export const App = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleThemeChange = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={theme}>
      <Header onThemeChange={handleThemeChange} />

      <div className="page">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<Navigate to="/" replace />} />

          <Route path="/phones" element={<ProductsPage />} />
          <Route path="/tablets" element={<ProductsPage />} />
          <Route path="/accessories" element={<ProductsPage />} />

          <Route path="/favourites" element={<FavouritesPage />} />

          <Route path="/cart" element={<CartPage />} />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
};
