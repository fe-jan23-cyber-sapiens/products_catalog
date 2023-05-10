// import * as images from './Images';
import logo from '../logo/Logo.svg';
// import cross from './Cross.svg';
import './BurgerMenu.scss';

export const BurgerMenu: React.FC = () => {
  //   const { Cross, Heart, ShoppingBag } = images;

  return (
    <nav className="menu">
      <div className="menu__content">
        <div className="top-actions">
          <div className="top-actions__logo">
            <a href="/">
              <img src={logo} alt="logo" />
            </a>
          </div>

          <button
            className="top-actions__cross"
            type="button"
            aria-label="cross"
          />
        </div>

        <ul className="menu__list">
          <li className="menu__item">
            <a href="#home" className="menu__link">
              home
            </a>
          </li>

          <li className="menu__item">
            <a href="#phones" className="menu__link">
              phones
            </a>
          </li>

          <li className="menu__item">
            <a href="#tablets" className="menu__link">
              tablets
            </a>
          </li>

          <li className="menu__item">
            <a href="#accessories" className="menu__link">
              accessories
            </a>
          </li>
        </ul>

        <div className="menu__footer">
          <button
            aria-label="favorites"
            type="button"
            className="menu__footer--button menu__footer--button--heart"
          />
          <button
            aria-label="shopping_card"
            type="button"
            className="menu__footer--button menu__footer--button--card"
          />
        </div>
      </div>
    </nav>
  );
};
