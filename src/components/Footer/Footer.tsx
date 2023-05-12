import { FC } from 'react';
import { Link } from 'react-router-dom';
import * as images from '../../assets';
import './Footer.scss';
import { PATH } from '../../routes/types/Path';
import { HeaderLinkWithIcon } from '../HeaderLinkWithIcon/HeaderLinkWithIcon';

export const Footer: FC = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <HeaderLinkWithIcon
        path="/"
        imageSrc={images.main_logo}
        alt="Main logo of Nice Gadgets"
        className="header__link header__link--main-logo"
      />

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
          <Link className="footer-nav__link" to={PATH.Contacts}>
            Contacts
          </Link>
        </li>

        <li className="footer-nav__item">
          <Link className="footer-nav__link" to={PATH.Rights}>
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
