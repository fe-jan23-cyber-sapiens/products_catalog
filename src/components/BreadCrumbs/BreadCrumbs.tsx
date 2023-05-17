import {
  FC,
  memo,
  Fragment,
  useContext,
  useMemo,
} from 'react';
import classNames from 'classnames';
import { Link, useLocation } from 'react-router-dom';
import './BreadCrumbs.scss';

import home from '../../assets/arrows/home.svg';
import home_dark from '../../assets/arrows/home_dark.svg';
import arrowRight from '../../assets/arrows/arrowRight_.svg';
import arrowRight_dark from '../../assets/arrows/arrowRight_dark.svg';
import { ThemeContext } from '../../context/ThemeContext';
import { getCurrentImage } from '../../utils/utils';
import { RoutePath } from '../../routes/RoutePath';

export const BreadCrumbs: FC = memo(() => {
  const { pathname } = useLocation();
  const { theme } = useContext(ThemeContext);
  const crumbs = useMemo(() => (
    pathname.split('/')
      .filter((el) => el !== '')), [pathname]);

  const currentIcon = getCurrentImage(theme, home, home_dark);
  const currentIconArrow = getCurrentImage(theme, arrowRight, arrowRight_dark);

  const current = crumbs[crumbs.length - 1];

  let link = '';

  return (
    <div className="path">
      <Link to={RoutePath.main}>
        <img src={currentIcon} alt="home icon" />
      </Link>

      {crumbs.map(crumb => {
        const path = crumb.split('-').join(' ');

        link += `/${crumb.toLowerCase()}`;

        return (
          <Fragment key={crumb}>
            <img src={currentIconArrow} alt="arrow right" />

            <Link
              to={`${link}`}
              className={classNames('path__link', {
                'path__link--disabled': crumb === current,
              })}
              key={crumb}
            >
              {path}
            </Link>
          </Fragment>
        );
      })}
    </div>
  );
});
