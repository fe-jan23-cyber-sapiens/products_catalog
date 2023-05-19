import { useContext, useEffect, useState } from 'react';
import './App.scss';

import { AuthProvider } from '@descope/react-sdk';
import { ThemeContext } from './context/ThemeContext';
import { PROJECT_ID, THEME_DARK, THEME_LIGHT } from './utils/constants';
import {
  ButtonScrollTop,
  Footer,
  Header,
  WavyText,
} from './components';
import { MainRoutes } from './routes/MainRoutes';

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
    <AuthProvider projectId={PROJECT_ID}>
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
