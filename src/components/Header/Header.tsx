import { FC } from 'react';
// import { Link } from 'react-router-dom';
import { HeaderLinkWithIcon } from '../HeaderLinkWithIcon/HeaderLinkWithIcon';

import { NavBar } from '../NavBar';

import './Header.scss';

import * as images from '../../assets';
import { ThemeSwitcher } from '../ThemeSwitcher';
// import { PATH } from '../../routes/types/Path';

interface HeaderProps {
  onThemeChange: () => void;
  onMenuOpen: () => void;
}

export const Header: FC<HeaderProps> = ({ onThemeChange, onMenuOpen }) => {
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
        </div>

        <div className="header__logo-box">
          <HeaderLinkWithIcon
            path="/cart"
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
