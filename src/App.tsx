<<<<<<< HEAD
import { Navigate, Route, Routes } from 'react-router-dom';

import { HomePage } from './pages/HomePage';
import { NotFoundPage } from './pages/NotFoundPage';
import { ProductsPage } from './pages/ProductsPage';
import { FavouritesPage } from './pages/FavouritesPage';
import { CartPage } from './pages/CartPage';
=======
import { useContext } from 'react';
>>>>>>> fe61859bdaa2df9da64c6395da55b63c57141c91

import './App.scss';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ThemeContext } from './context/ThemeContext';
import { THEME_DARK, THEME_LIGHT } from './utils/constants';
import { MainRoutes } from './routes/MainRoutes';

export const App = () => {
<<<<<<< HEAD
  return (
    <>
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
    </>
=======
  const { theme, setTheme } = useContext(ThemeContext);

  const handleThemeChange = () => {
    setTheme(theme === THEME_LIGHT
      ? THEME_DARK
      : THEME_LIGHT);
  };

  return (
    <div className={`app ${theme}`}>
      <Header
        onThemeChange={handleThemeChange}
      />

      <main className="app__main-section">
        <MainRoutes />
      </main>

      <Footer />
    </div>
>>>>>>> fe61859bdaa2df9da64c6395da55b63c57141c91
  );
};
