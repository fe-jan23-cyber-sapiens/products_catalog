import { FC, useContext } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import * as images from '../../assets';
import './Footer.scss';
import { THEME_DARK } from '../../utils/constants';
import { ThemeContext } from '../../context/ThemeContext';
import { RoutePath } from '../../routes/RoutePath';
import { getCurrentImage } from '../../utils/helper';
import { HeaderLinkWithIcon } from '../HeaderLinkWithIcon';
import { companyInfo, LinkType } from './companyInfo';

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
      <div className="footer__logo-wrapper">
        <HeaderLinkWithIcon
          path={RoutePath.main}
          imageSrc={currentLogo}
          alt="Main logo of Nice Gadgets"
          className="header__link header__link--main-logo"
        />
      </div>

      <ul className="footer-nav">
        {companyInfo.map(({
          link,
          title,
          type,
        }) => (
          <li className="footer-nav__item">
            <Link
              target={
                type === LinkType.LINK
                  ? '_blank'
                  : ''
              }
              className="footer-nav__link"
              to={link}
              onClick={
                type === LinkType.BUTTON
                  ? handleScrollToTop
                  : undefined
              }
            >
              {title}
            </Link>
          </li>
        ))}
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
