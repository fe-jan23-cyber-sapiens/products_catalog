import { FC, useContext } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import * as images from '../../assets';
import './Footer.scss';
import { THEME_DARK } from '../../utils/constants';
import { ThemeContext } from '../../context/ThemeContext';
import { RoutePath } from '../../routes/RoutePath';
import { getCurrentImage } from '../../utils/utils';
import { HeaderLinkWithIcon } from '../HeaderLinkWithIcon';

export const Footer: FC = () => {
  const { theme } = useContext(ThemeContext);

  const darkThemeIcon = theme === THEME_DARK;
  const currentLogo = getCurrentImage(
    theme,
    images.main_logo,
    images.main_logo_dark,
  );

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
          <Link
            className="footer-nav__link"
            to={RoutePath.contacts}
            onClick={handleScrollToTop}
          >
            Contacts
          </Link>
        </li>

        <li className="footer-nav__item">
          <Link
            className="footer-nav__link"
            to={RoutePath.rights}
            onClick={handleScrollToTop}
          >
            Rights
          </Link>
        </li>
      </ul>

      <div className="footer--back">
        <span>Back to top</span>

        <button
          className={classNames('footer--back__link', {
            'footer--back__link--dark': darkThemeIcon,
          })}
          type="button"
          aria-label="back"
          onClick={handleScrollToTop}
        />
      </div>
    </footer>
  );
};
