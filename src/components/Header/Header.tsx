import { FC, useContext } from 'react';
import { HeaderLinkWithIcon } from '../HeaderLinkWithIcon/HeaderLinkWithIcon';

import { NavBar } from '../NavBar';

import './Header.scss';

import * as images from '../../assets';
import { ThemeSwitcher } from '../ThemeSwitcher';
import { RoutePath } from '../../routes/RoutePath';
import { ThemeContext } from '../../context/ThemeContext';
import { getCurrentImage } from '../../utils/utils';

interface HeaderProps {
  onThemeChange: () => void;
  onMenuOpen: () => void;
}

export const Header: FC<HeaderProps> = ({ onThemeChange, onMenuOpen }) => {
  const { theme } = useContext(ThemeContext);

  const currentLogo = getCurrentImage(
    theme,
    images.main_logo,
    images.main_logo_dark,
  );

  const currentLogoHeart = getCurrentImage(
    theme,
    images.heart_icon,
    images.heart_icon_dark,
  );

  const currentLogoCart = getCurrentImage(
    theme,
    images.cart_icon,
    images.cart_icon_dark,
  );

  const currentLogoBurger = getCurrentImage(
    theme,
    images.burger_menu_icon,
    images.burger_menu_icon_dark,
  );

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
            imageSrc={currentLogoHeart}
            alt="Favourites heart icon"
            className="header__link"
          />
        </div>

        <div className="header__logo-box">
          <HeaderLinkWithIcon
            path={RoutePath.cart}
            imageSrc={currentLogoCart}
            alt="Cart icon"
            className="header__link"
          />
        </div>

        <div className="header__logo-box">
          <ThemeSwitcher onThemeChange={onThemeChange} />
        </div>

        <button type="button" onClick={onMenuOpen} className="header__logo-box">
          <img src={currentLogoBurger} alt="Burger menu icon" />
        </button>
      </div>
    </header>
  );
};
