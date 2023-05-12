import { FC } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logos/Logo.svg';
import './Footer.scss';
import { PATH } from '../../routes/types/Path';

export const Footer: FC = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <NavLink to={PATH.Home}>
        <img src={logo} alt="Nice Gadgets logotype" />
      </NavLink>

      <ul className="footer-nav">
        <li className="footer-nav__item">
          <Link
            target="_blank"
            className="footer-nav__link"
            to="https://github.com/fe-jan23-cyber-sapiens"
          >
            Github
          </Link>
        </li>

        <li className="footer-nav__item">
          <Link className="footer-nav__link" to="/contacts">
            Contacts
          </Link>
        </li>

        <li className="footer-nav__item">
          <Link className="footer-nav__link" to="/rights">
            Rights
          </Link>
        </li>
      </ul>

      <div className="footer--back">
        <span>Back to top</span>

        <button
          className="footer--back__link"
          type="button"
          aria-label="back"
          onClick={handleScrollToTop}
        />
      </div>
    </footer>
  );
};
