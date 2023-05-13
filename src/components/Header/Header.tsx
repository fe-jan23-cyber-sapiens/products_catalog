import { FC } from 'react';
import { HeaderLinkWithIcon } from '../HeaderLinkWithIcon/HeaderLinkWithIcon';

import { NavBar } from '../NavBar';

import './Header.scss';

import * as images from '../../assets';
import { ThemeSwitcher } from '../ThemeSwitcher';

interface HeaderProps {
  favourites: number,
  inCart: number,
  onThemeChange: () => void;
  onMenuOpen: () => void;
}

export const Header: FC<HeaderProps> = ({
  onThemeChange, onMenuOpen, favourites, inCart,
}) => {
  return (
    <header className="header">
      <div className="header__left-side">
        <HeaderLinkWithIcon
          path="/"
          imageSrc={images.main_logo}
          alt="Main logo of Nice Gadgets"
          className="header__link header__link--main-logo"
        />

        <NavBar />
      </div>

      <div className="header__right-side">
        <div className="header__logo-box">
          <HeaderLinkWithIcon
            path="/favourites"
            imageSrc={images.heart_icon}
            alt="Favourites heart icon"
            className="header__link"
          />

          <span className="header__count">
            {favourites}
          </span>
        </div>

        <div className="header__logo-box">
          <HeaderLinkWithIcon
            path="/cart"
            imageSrc={images.cart_icon}
            alt="Cart icon"
            className="header__link"
          />

          <span className="header__count">
            {inCart}
          </span>
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
