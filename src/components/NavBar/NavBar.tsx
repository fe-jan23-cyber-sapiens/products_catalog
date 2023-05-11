import { NavigationLink } from '../NavigationLink';

import './NavBar.scss';
import { PATH } from '../../routes/types/Path';

export const NavBar = () => {
  return (
    <nav className="navbar">
      <NavigationLink to="/" title="home" />

      <NavigationLink to={PATH.Phones} title="phones" />

      <NavigationLink to={PATH.Tablets} title="tablets" />

      <NavigationLink to={PATH.Accessories} title="accessories" />
    </nav>
  );
};
