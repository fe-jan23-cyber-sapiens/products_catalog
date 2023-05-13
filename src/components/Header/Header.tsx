import { FC, useContext } from 'react';
import { HeaderLinkWithIcon } from '../HeaderLinkWithIcon/HeaderLinkWithIcon';

import { NavBar } from '../NavBar';

import './Header.scss';

import * as images from '../../assets';
import { ThemeSwitcher } from '../ThemeSwitcher';
import { RoutePath } from '../../routes/RoutePath';
import { ThemeContext } from '../../context/ThemeContext';
import { THEME_LIGHT } from '../../utils/constants';

interface HeaderProps {
  onThemeChange: () => void;
  onMenuOpen: () => void;
}

export const Header: FC<HeaderProps> = ({ onThemeChange, onMenuOpen }) => {
  const { theme } = useContext(ThemeContext);

  const currentLogo = theme === THEME_LIGHT
    ? images.main_logo
    : images.main_logo_dark;

  return (
    <header className="header">
      <div className="header__left-side">
        <HeaderLinkWithIcon
          path={RoutePath.main}
          imageSrc={currentLogo}
          alt="Main logo of Nice Gadgets"
          className="header__link header__link--main-logo"
        />

        <NavBar />
      </div>

      <div className="header__right-side">
        <div className="header__logo-box">
          <HeaderLinkWithIcon
            path={RoutePath.favourites}
            imageSrc={images.heart_icon}
            alt="Favourites heart icon"
            className="header__link"
          />
        </div>

        <div className="header__logo-box">
          <HeaderLinkWithIcon
            path={RoutePath.cart}
            imageSrc={images.cart_icon}
            alt="Cart icon"
            className="header__link"
          />
        </div>

        <div className="header__logo-box">
          <ThemeSwitcher onThemeChange={onThemeChange} />
        </div>

        <button type="button" onClick={onMenuOpen} className="header__logo-box">
          <img src={images.burger_menu_icon} alt="Burger menu icon" />
        </button>
      </div>
    </header>
  );
};
