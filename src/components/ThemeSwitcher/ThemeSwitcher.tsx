import { FC, useContext } from 'react';
import './ThemeSwitcher.scss';
import { ThemeContext } from '../../context/ThemeContext';
import { THEME_DARK } from '../../utils/constants';

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
        checked={theme === THEME_DARK}
      />
      <span className="slider" />
    </label>
  );
};
