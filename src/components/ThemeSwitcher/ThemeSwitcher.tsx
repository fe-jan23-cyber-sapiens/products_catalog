import { FC, useContext } from 'react';
import './ThemeSwitcher.scss';
import { ThemeContext } from '../../context/ThemeContext';
import { THEME_LIGHT } from '../../utils/constants';

interface ThemeSwitcherProps {
  onThemeChange: () => void;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ onThemeChange }) => {
  const { theme } = useContext(ThemeContext);
  const isThemeLight = theme === THEME_LIGHT;

  return (

    <label className="switch">
      <input
        onClick={onThemeChange}
        type="checkbox"
        defaultChecked={isThemeLight}
      />
      <span className="slider" />
    </label>
  );
};
