import { NavigationLink } from '../NavigationLink';

import './NavBar.scss';
import { RoutePath } from '../../routes/RoutePath';

export const NavBar = () => {
  return (
    <nav className="navigation-bar">
      <NavigationLink to={RoutePath.main} title="home" />

      <NavigationLink to={RoutePath.phones} title="phones" />

      <NavigationLink to={RoutePath.tablets} title="tablets" />

      <NavigationLink to={RoutePath.accessories} title="accessories" />
    </nav>
  );
};
