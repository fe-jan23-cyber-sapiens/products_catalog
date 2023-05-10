import React from 'react';
import classNames from 'classnames';

import { NavLink } from 'react-router-dom';

import './NavigationLink.scss';

type Props = {
  to: string;
  title: string;
};

export const NavigationLink: React.FC<Props> = ({ to, title }) => (
  <NavLink
    to={to}
    className={({ isActive }) => classNames(
      //
      'navbar__item',
      { 'navbar__item--is-active': isActive },
    )}
  >
    <span className="navbar__item-title">{title}</span>
  </NavLink>
);
