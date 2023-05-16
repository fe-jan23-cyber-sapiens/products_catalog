import {
  FC, memo, useContext, useEffect, useState,
} from 'react';

import { NavBar } from '../NavBar';
import { ThemeSwitcher } from '../ThemeSwitcher';
import { BurgerMenu } from '../BurgerMenu';
import { HeaderLinkWithIcon } from '../HeaderLinkWithIcon';
import * as images from '../../assets';
import './Header.scss';
import { RoutePath } from '../../routes/RoutePath';
import { ThemeContext } from '../../context/ThemeContext';
import { getCurrentImage } from '../../utils/utils';
import { CartLSUpdateContext } from '../../context/CartLSUpdateContext';
import { FavLSUpdateContext } from '../../context/FavLSUpdateContext';

interface HeaderProps {
  onThemeChange: () => void;
}

export const Header: FC<HeaderProps> = memo(({ onThemeChange }) => {
  const { theme } = useContext(ThemeContext);
  const { cartProducts } = useContext(CartLSUpdateContext);
  const { favProducts } = useContext(FavLSUpdateContext);

  const [isOpen, setIsOpen] = useState(false);

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

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const handleToggleMenu = () => {
    setIsOpen((currentPosition) => !currentPosition);
  };

  return (
    <header className="header">
      <div className="header__left-side">
        <BurgerMenu
          onThemeChange={onThemeChange}
          isOpen={isOpen}
          onCloseMenu={handleToggleMenu}
        />

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

          {favProducts.length > 0 && (
            <div className="header__count">
              {favProducts.length}
            </div>
          )}
        </div>

        <div className="header__logo-box">
          <HeaderLinkWithIcon
            path={RoutePath.cart}
            imageSrc={currentLogoCart}
            alt="Cart icon"
            className="header__link"
          />

          {cartProducts.length > 0 && (
            <div className="header__count">{cartProducts.length}</div>
          )}
        </div>

        <div className="header__logo-box">
          <ThemeSwitcher onThemeChange={onThemeChange} />
        </div>

        <button
          type="button"
          onClick={handleToggleMenu}
          className="header__logo-box"
        >
          <img src={currentLogoBurger} alt="Burger menu icon" />
        </button>
      </div>
    </header>
  );
});
