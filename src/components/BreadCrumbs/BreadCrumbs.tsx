import { Fragment } from 'react';
import classNames from 'classnames';
import { Link, useLocation } from 'react-router-dom';
import './BreadCrumbs.scss';

import home from '../../assets/Home.png';
import arrowRight from '../../assets/arrows/Arrow Right.png';

export const BreadCrumbs = () => {
  const { pathname } = useLocation();
  const crumbs = pathname.split('/')
    .filter((el) => el !== '');

  const current = crumbs[crumbs.length - 1];

  let link = '';

  return (
    <div className="path">
      <Link to="/">
        <img src={home} alt="home icon" />
      </Link>

      {crumbs.map(crumb => {
        const path = crumb.split('-').join(' ');

        link += `/${crumb.toLowerCase()}`;

        return (
          <Fragment key={crumb}>
            <img src={arrowRight} alt="arrow right" />

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
};
