import { FC } from 'react';
import './ThemeSwitcher.scss';

interface ThemeSwitcherProps {
  onThemeChange: () => void;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ onThemeChange }) => (
  <label className="switch">
    <input onClick={onThemeChange} type="checkbox" />
    <span className="slider" />
  </label>
);
