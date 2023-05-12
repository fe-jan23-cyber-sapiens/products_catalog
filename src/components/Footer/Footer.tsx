import { FC } from 'react';
import { Link } from 'react-router-dom';
import * as images from '../../assets';
import './Footer.scss';

export const Footer: FC = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <Link to="/">
        <img src={images.main_logo} alt="Nice Gadgets logotype" />
      </Link>

      <ul className="footer-nav">
        <li className="footer-nav__item">
          <Link className="footer-nav__link" to="/">
            Github
          </Link>
        </li>

        <li className="footer-nav__item">
          <Link className="footer-nav__link" to="/">
            Contacts
          </Link>
        </li>

        <li className="footer-nav__item">
          <Link className="footer-nav__link" to="/">
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
