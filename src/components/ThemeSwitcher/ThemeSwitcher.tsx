import { FC, useContext } from 'react';
import './ThemeSwitcher.scss';
import { ThemeContext } from '../../context/ThemeContext';
import { THEME_DARK } from '../../utils/constants';

interface ThemeSwitcherProps {
  onThemeChange: () => void;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ onThemeChange }) => {
  const { theme } = useContext(ThemeContext);
  const isThemeDark = theme === THEME_DARK;

  return (

    <label className="switch">
      <input
        onClick={onThemeChange}
        type="checkbox"
        defaultChecked={isThemeDark}
      />
      <span className="slider" />
    </label>
  );
};
