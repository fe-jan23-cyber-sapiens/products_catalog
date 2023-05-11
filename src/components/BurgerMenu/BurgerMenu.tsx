import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import logo from '../../assets/logos/Logo.svg';
import './BurgerMenu.scss';
import { HeaderLinkWithIcon } from '../HeaderLinkWithIcon/HeaderLinkWithIcon';

export const BurgerMenu: React.FC = () => {
  return (
    <nav className="menu">
      <div className="menu__content">
        <div className="top-actions">
          <div className="top-actions__logo">
            <HeaderLinkWithIcon path="/" imageSrc={logo} alt="logo" />
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
              to="/home"
              className={({ isActive }) => classNames('menu__link', {
                isActive,
              })}
            >
              home
            </NavLink>
          </li>

          <li className="menu__item">
            <NavLink
              to="/home"
              className={({ isActive }) => classNames('menu__link', {
                isActive,
              })}
            >
              phones
            </NavLink>
          </li>

          <li className="menu__item">
            <NavLink
              to="/home"
              className={({ isActive }) => classNames('menu__link', {
                isActive,
              })}
            >
              tablets
            </NavLink>
          </li>

          <li className="menu__item">
            <NavLink
              to="/home"
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
            to="/favorites"
            aria-label="favorites"
            type="button"
            className={({ isActive }) => classNames(
              'menu__footer--button menu__footer--button--heart', {
                isActive,
              },
            )}
          />
          <NavLink
            to="/shopping_card"
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
