import { useContext } from 'react';

import './App.scss';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ThemeContext } from './context/ThemeContext';
import { THEME_DARK, THEME_LIGHT } from './utils/constants';
import { MainRoutes } from './routes/MainRoutes';

export const App = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleThemeChange = () => {
    setTheme(theme === THEME_LIGHT
      ? THEME_DARK
      : THEME_LIGHT);
  };

  return (
    <div className={`app ${theme}`}>
      <Header onThemeChange={handleThemeChange} />

      <main className="app__main-section">
        <MainRoutes />
      </main>

      <Footer />
    </div>
  );
};
