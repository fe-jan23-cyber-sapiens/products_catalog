import { NavigationLink } from '../NavigationLink';

import './NavBar.scss';

export const NavBar = () => {
  return (
    <nav className="navbar">
      <NavigationLink to="/" title="home" />

      <NavigationLink to="/phones" title="phones" />

      <NavigationLink to="/tablets" title="tablets" />

      <NavigationLink to="/accessories" title="accessories" />
    </nav>
  );
};
