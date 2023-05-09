import React from 'react';
import logo from '../logo/Logo.svg';
// import arrow from '../arrow/arrow.svg';
import './Footer.scss';

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <a href="/">
        <img src={logo} alt="a" />
      </a>

      <ul className="footer-nav">
        <li>
          <a className="footer-nav_link" href="/">
            Github
          </a>
        </li>
        <li>
          <a className="footer-nav_link" href="/">
            Contacts
          </a>
        </li>
        <li>
          <a className="footer-nav_link" href="/">
            Rights
          </a>
        </li>
      </ul>

      <div className="footer-back">
        <span>Back to top</span>
        <button
          className="footer-back_link"
          type="button"
          aria-label="back"
        />
      </div>
    </footer>
  );
};
