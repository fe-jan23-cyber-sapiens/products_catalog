import { FC, useContext } from 'react';
import { Link } from 'react-router-dom';
import * as images from '../../assets';
import './Footer.scss';
import { PATH } from '../../routes/types/Path';
import { HeaderLinkWithIcon } from '../HeaderLinkWithIcon/HeaderLinkWithIcon';
import { THEME_LIGHT } from '../../utils/constants';
import { ThemeContext } from '../../context/ThemeContext';
import { RoutePath } from '../../routes/RoutePath';

export const Footer: FC = () => {
  const { theme } = useContext(ThemeContext);

  const currentLogo = theme === THEME_LIGHT
    ? images.main_logo
    : images.main_logo_dark;

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <HeaderLinkWithIcon
        path={RoutePath.main}
        imageSrc={currentLogo}
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
