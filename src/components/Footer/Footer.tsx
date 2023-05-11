import React from 'react';
import logo from '../../assets/logos/Logo.svg';
import './Footer.scss';
import { HeaderLinkWithIcon } from '../HeaderLinkWithIcon/HeaderLinkWithIcon';

export const Footer: React.FC = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <HeaderLinkWithIcon path="/" imageSrc={logo} alt="logo" />

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
