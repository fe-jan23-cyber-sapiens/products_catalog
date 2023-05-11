import { FC, useContext } from 'react';
import './ThemeSwitcher.scss';
import { ThemeContext } from '../../context/ThemeContext';

interface ThemeSwitcherProps {
  onThemeChange: () => void;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ onThemeChange }) => {
  const { theme } = useContext(ThemeContext);

  return (

    <label className="switch">
      <input
        onClick={onThemeChange}
        type="checkbox"
        checked={theme === 'light'}
      />
      <span className="slider" />
    </label>
  );
};
