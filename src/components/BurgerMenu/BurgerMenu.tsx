import { FC, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import * as images from '../../assets';
import './BurgerMenu.scss';
import { RoutePath } from '../../routes/RoutePath';
import { ThemeContext } from '../../context/ThemeContext';
import { THEME_DARK } from '../../utils/constants';
import { ThemeSwitcher } from '../ThemeSwitcher';
import { getCurrentImage } from '../../utils/utils';

type Props = {
  isOpen: boolean,
  onCloseMenu: () => void,
  onThemeChange: () => void;
};

export const BurgerMenu: FC<Props> = ({
  isOpen,
  onCloseMenu,
  onThemeChange,
}) => {
  const { theme } = useContext(ThemeContext);

  const darkTheme = theme === THEME_DARK;
  const currentIcon = getCurrentImage(theme,
    images.main_logo,
    images.main_logo_dark);

  return (
    <nav
      className={classNames('menu', {
        'menu-open': isOpen,
      })}
    >
      <div className="menu__content">
        <div className="top-actions">
          <div className="top-actions__logo">
            <NavLink to={RoutePath.main}>
              <img src={currentIcon} alt="logo" />
            </NavLink>
          </div>

          <div className="top-actions__button-wrapper">
            <div className="top-actions__switcher">
              <ThemeSwitcher onThemeChange={onThemeChange} />
            </div>

            <button
              onClick={onCloseMenu}
              className={classNames('top-actions__cross', {
                'top-actions__cross--dark': darkTheme,
              })}
              type="button"
              aria-label="cross"
            />
          </div>
        </div>

        <ul className="menu__list">
          <li className="menu__item">
            <NavLink
              to={RoutePath.main}
              onClick={onCloseMenu}
              className={({ isActive }) => classNames('menu__link', {
                isActive,
              })}
            >
              home
            </NavLink>
          </li>

          <li className="menu__item">
            <NavLink
              to={RoutePath.phones}
              onClick={onCloseMenu}
              className={({ isActive }) => classNames('menu__link', {
                isActive,
              })}
            >
              phones
            </NavLink>
          </li>

          <li className="menu__item">
            <NavLink
              to={RoutePath.tablets}
              onClick={onCloseMenu}
              className={({ isActive }) => classNames('menu__link', {
                isActive,
              })}
            >
              tablets
            </NavLink>
          </li>

          <li className="menu__item">
            <NavLink
              to={RoutePath.accessories}
              onClick={onCloseMenu}
              className={({ isActive }) => classNames('menu__link', {
                isActive,
              })}
            >
              accessories
            </NavLink>
          </li>
        </ul>

        <div className="menu__footer">
          <NavLink
            to={RoutePath.favourites}
            onClick={onCloseMenu}
            aria-label="favorites"
            type="button"
            className={({ isActive }) => classNames(
              'menu__footer--button menu__footer--button--heart', {
                isActive,
                'menu__footer--button--heart--dark': darkTheme,
              },
            )}
          />

          <NavLink
            to={RoutePath.cart}
            onClick={onCloseMenu}
            aria-label="shopping_card"
            type="button"
            className={({ isActive }) => classNames(
              'menu__footer--button menu__footer--button--card', {
                isActive,
                'menu__footer--button--card--dark': darkTheme,
              },
            )}
          />
        </div>
      </div>
    </nav>
  );
};
