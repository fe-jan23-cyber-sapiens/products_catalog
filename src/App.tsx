import { useContext, useEffect, useState } from 'react';

import './App.scss';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ThemeContext } from './context/ThemeContext';
import { THEME_DARK, THEME_LIGHT } from './utils/constants';
import { MainRoutes } from './routes/MainRoutes';
import { BurgerMenu } from './components/BurgerMenu/BurgerMenu';

export const App = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);

  const handleThemeChange = () => {
    setTheme(theme === THEME_LIGHT
      ? THEME_DARK
      : THEME_LIGHT);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const handleOpenMenu = () => {
    setIsOpen(currentPosition => !currentPosition);
  };

  return (
    <div className={`app ${theme}`}>
      <BurgerMenu isOpen={isOpen} onCloseMenu={handleOpenMenu} />

      <Header
        onThemeChange={handleThemeChange}
        onMenuOpen={handleOpenMenu}
      />

      <main className="app__main-section">
        <MainRoutes />
      </main>

      <Footer />
    </div>
  );
};
