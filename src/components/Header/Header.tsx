import {
  FC, useContext, useEffect, useState,
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
import { Auth } from '../AuthComponent/AuthComponent';
import { Modal } from '../Modal';
import { useModal } from '../../hooks/useModal';

interface HeaderProps {
  onThemeChange: () => void;
}

export const Header: FC<HeaderProps> = ({ onThemeChange }) => {
  const { theme } = useContext(ThemeContext);
  const { cartProducts } = useContext(CartLSUpdateContext);
  const { favProducts } = useContext(FavLSUpdateContext);

  const { modal, toggleModal } = useModal();

  const [isOpen, setIsOpen] = useState(false);
  const [userPhoto, setUserPhoto] = useState<string | null>(null);

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

  const currentUserPhoto = getCurrentImage(
    theme,
    images.user_circle,
    images.user_circle_dark,
  );

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  useEffect(() => {
    if (!userPhoto) {
      setUserPhoto(currentUserPhoto);
    }
  }, [userPhoto, theme]);

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
        <Modal modalMode={modal} closeModal={toggleModal}>
          <Auth setUserPhoto={setUserPhoto} />
        </Modal>
        <div className="header__logo-box">
          <button
            type="button"
            onClick={() => toggleModal()}
            className="header__logo-box__auth-button"
          >
            <img
              src={`${userPhoto}`}
              alt="userPhoto"
              className="header__logo-box__user-photo"
            />
          </button>
        </div>

        <div className="header__logo-box">
          <HeaderLinkWithIcon
            path={RoutePath.favourites}
            imageSrc={currentLogoHeart}
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
};
