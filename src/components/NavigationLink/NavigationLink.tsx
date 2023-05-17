import { FC } from 'react';
import classNames from 'classnames';

import { NavLink } from 'react-router-dom';

import './NavigationLink.scss';

interface Props {
  to: string,
  title: string,
}

export const NavigationLink: FC<Props> = ({ to, title }) => (
  <NavLink
    to={to}
    className={({ isActive }) => classNames(
      'navigation-bar__item',
      { 'navigation-bar__item--is-active': isActive },
    )}
  >
    <span className="navigation-bar__item-title">{title}</span>
  </NavLink>
);
