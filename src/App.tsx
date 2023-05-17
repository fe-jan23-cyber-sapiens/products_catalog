/* eslint-disable import/no-extraneous-dependencies */
import { useContext, useEffect, useState } from 'react';
import './App.scss';

import { ThemeContext } from './context/ThemeContext';
import { THEME_DARK, THEME_LIGHT } from './utils/constants';
import { Footer, Header, WavyText } from './components';
import { MainRoutes } from './routes/MainRoutes';
import { ButtonScrollTop } from './components/ButtonScrollTop/ButtonScrollTop';
// eslint-disable-next-line import/order
import { AuthProvider } from '@descope/react-sdk';

export const App = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const [isShown, setIsShown] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsShown(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleThemeChange = () => {
    setTheme(theme === THEME_LIGHT
      ? THEME_DARK
      : THEME_LIGHT);
  };

  return (
    <AuthProvider projectId="P2PrllCsf5bR0pmZY0IA8z1CBv2z">
      <div className={`app ${theme}`}>
        {isShown ? (
          <div className="app__wave wave">
            <WavyText text="Nice Gadgets" />
          </div>
        ) : (
          <>
            <Header onThemeChange={handleThemeChange} />

            <main className="app__main-section">
              <ButtonScrollTop />
              <MainRoutes />
            </main>

            <Footer />
          </>
        )}
      </div>
    </AuthProvider>
  );
};
