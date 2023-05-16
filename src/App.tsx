import { useContext } from 'react';
import './App.scss';

import { ThemeContext } from './context/ThemeContext';
import { THEME_DARK, THEME_LIGHT } from './utils/constants';
import { Footer, Header } from './components';
import { MainRoutes } from './routes/MainRoutes';
import { ButtonScrollTop } from './components/ButtonScrollTop/ButtonScrollTop';
// import { useModal } from './hooks/useModal';

export const App = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  // const { modal, toggleModal } = useModal(true);

  const handleThemeChange = () => {
    setTheme(theme === THEME_LIGHT
      ? THEME_DARK
      : THEME_LIGHT);
  };

  return (
    <div className={`app ${theme}`}>
      {/* {modal && (
        <div className="app__wave wave">
          <WavyText text="Nice Gadgets" />
        </div>
      )} */}
      <>
        <Header
          onThemeChange={handleThemeChange}
        />

        <main className="app__main-section">
          <ButtonScrollTop />
          <MainRoutes />
        </main>

        <Footer />
      </>
    </div>
  );
};
