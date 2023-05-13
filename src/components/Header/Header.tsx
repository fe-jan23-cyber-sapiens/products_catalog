import {
  FC,
  useContext,
  useEffect,
  useState,
} from 'react';
import { HeaderLinkWithIcon } from '../HeaderLinkWithIcon/HeaderLinkWithIcon';

import { NavBar } from '../NavBar';

import './Header.scss';

import * as images from '../../assets';
import { ThemeSwitcher } from '../ThemeSwitcher';
import { RoutePath } from '../../routes/RoutePath';
import { ThemeContext } from '../../context/ThemeContext';
import { THEME_LIGHT } from '../../utils/constants';
import { CartLSUpdateContext } from '../../context/CartLSUpdateContext';
import { FavLSUpdateContext } from '../../context/FavLSUpdateContext';
import { BurgerMenu } from '../BurgerMenu/BurgerMenu';

interface HeaderProps {
  onThemeChange: () => void;
}

export const Header: FC<HeaderProps> = ({ onThemeChange }) => {
  const { theme } = useContext(ThemeContext);
  const { cartProducts } = useContext(CartLSUpdateContext);
  const { favProducts } = useContext(FavLSUpdateContext);

  const [isOpen, setIsOpen] = useState(false);

  const currentLogo = theme === THEME_LIGHT
    ? images.main_logo
    : images.main_logo_dark;

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
        <BurgerMenu isOpen={isOpen} onCloseMenu={handleToggleMenu} />

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

          {favProducts.length > 0 && (
            <div className="header__count">{favProducts.length}</div>
          )}
        </div>

        <div className="header__logo-box">
          <HeaderLinkWithIcon
            path={RoutePath.cart}
            imageSrc={images.cart_icon}
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
          <img src={images.burger_menu_icon} alt="Burger menu icon" />
        </button>
      </div>
    </header>
  );
};
