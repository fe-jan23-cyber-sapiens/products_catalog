import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo/Logo.svg';
import './Footer.scss';

export const Footer: React.FC = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <Link to="/">
        <img src={logo} alt="a" />
      </Link>

      <ul className="footer-nav">
        <li className="footer-nav__item">
          <a className="footer-nav__link" href="/">
            Github
          </a>
        </li>
        <li className="footer-nav__item">
          <a className="footer-nav__link" href="/">
            Contacts
          </a>
        </li>
        <li className="footer-nav__item">
          <a className="footer-nav__link" href="/">
            Rights
          </a>
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
