import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import logo from '../../assets/logos/Logo.svg';
import './BurgerMenu.scss';
import { PATH } from '../../routes/types/Path';

export const BurgerMenu: FC = () => {
  return (
    <nav className="menu">
      <div className="menu__content">
        <div className="top-actions">
          <div className="top-actions__logo">
            <NavLink to={PATH.Main}>
              <img src={logo} alt="logo" />
            </NavLink>
          </div>

          <button
            className="top-actions__cross"
            type="button"
            aria-label="cross"
          />
        </div>

        <ul className="menu__list">
          <li className="menu__item">
            <NavLink
              to={PATH.Home}
              className={({ isActive }) => classNames('menu__link', {
                isActive,
              })}
            >
              home
            </NavLink>
          </li>

          <li className="menu__item">
            <NavLink
              to={PATH.Phones}
              className={({ isActive }) => classNames('menu__link', {
                isActive,
              })}
            >
              phones
            </NavLink>
          </li>

          <li className="menu__item">
            <NavLink
              to={PATH.Tablets}
              className={({ isActive }) => classNames('menu__link', {
                isActive,
              })}
            >
              tablets
            </NavLink>
          </li>

          <li className="menu__item">
            <NavLink
              to={PATH.Home}
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
            to={PATH.Favourites}
            aria-label="favorites"
            type="button"
            className={({ isActive }) => classNames(
              'menu__footer--button menu__footer--button--heart', {
                isActive,
              },
            )}
          />

          <NavLink
            to={PATH.Cart}
            aria-label="shopping_card"
            type="button"
            className={({ isActive }) => classNames(
              'menu__footer--button menu__footer--button--card', {
                isActive,
              },
            )}
          />
        </div>
      </div>
    </nav>
  );
};
