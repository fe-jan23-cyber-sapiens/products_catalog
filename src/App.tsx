import { useContext } from 'react';

import './App.scss';
// eslint-disable-next-line import/no-extraneous-dependencies
import { AuthProvider } from '@descope/react-sdk';
import { ThemeContext } from './context/ThemeContext';
import { THEME_DARK, THEME_LIGHT } from './utils/constants';
import { Footer, Header } from './components';
import { MainRoutes } from './routes/MainRoutes';
import { ButtonScrollTop } from './components/ButtonScrollTop/ButtonScrollTop';

export const App = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleThemeChange = () => {
    setTheme(theme === THEME_LIGHT
      ? THEME_DARK
      : THEME_LIGHT);
  };

  return (
    <AuthProvider projectId="P2PrllCsf5bR0pmZY0IA8z1CBv2z">
      <div className={`app ${theme}`}>
        <Header onThemeChange={handleThemeChange} />

        <main className="app__main-section">
          <ButtonScrollTop />
          <MainRoutes />
        </main>

        <Footer />
      </div>
    </AuthProvider>
  );
};
