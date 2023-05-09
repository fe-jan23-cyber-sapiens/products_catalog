import './main.scss';
import { FC, useContext } from 'react';
import { ThemeContext } from './context/ThemeContext';

export const App: FC = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleThemeChange = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={theme}>
      <div className="background">
        <h2>hello cyber sapiens</h2>
        <button type="button" onClick={handleThemeChange}>
          Switch
        </button>
      </div>
    </div>
  );
};
