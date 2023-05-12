import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import logo from '../../assets/logos/Logo.svg';
import './BurgerMenu.scss';
import { RoutePath } from '../../routes/RoutePath';

export const BurgerMenu: FC = () => {
  return (
    <nav className="menu">
      <div className="menu__content">
        <div className="top-actions">
          <div className="top-actions__logo">
            <NavLink to={RoutePath.main}>
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
              to={RoutePath.main}
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
            aria-label="favorites"
            type="button"
            className={({ isActive }) => classNames(
              'menu__footer--button menu__footer--button--heart', {
                isActive,
              },
            )}
          />
          <NavLink
            to={RoutePath.cart}
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
