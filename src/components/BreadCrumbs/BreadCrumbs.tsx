import classNames from 'classnames';
import { Link, useLocation } from 'react-router-dom';
import './BreadCrumbs.scss';

import home from '../../assets/Home.png';
import arrow from '../../assets/Chevron (Arrow Right).png';

export const BreadCrumbs = () => {
  const { pathname } = useLocation();
  const paths = pathname.split('/')
    .filter((el) => el !== '');

  const current = paths[paths.length - 1];

  let link = '';

  return (
    <div className="path">
      <Link to="/">
        <img src={home} alt="home icon" />
      </Link>

      {paths.map(path => {
        const text = path.split('-').join(' ');

        link += `/${text.toLowerCase()}`;

        return (
          <>
            <img src={arrow} alt="arrow right" />

            <Link
              to={`${link}`}
              className={classNames('path__link', {
                'path__link--disabled': path === current,
              })}
              key={path}
            >
              {path}
            </Link>
          </>
        );
      })}
    </div>
  );
};
