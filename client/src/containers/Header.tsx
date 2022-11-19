import React from 'react';

import './Header.css';
import HeaderNavLink, { NavLink } from '../components/HeaderNavLink';

// Header properties that will be passed into the component
export type HeaderProps = {
  title: string;
  description: string;
  links: NavLink[];
};

//React FC variable will render our code for our header.
// React.FC takes a type of the props that can be passed into the component
const Header: React.FC<HeaderProps> = React.memo(
  ({ title, description, links }) => {
    return (
      <header className="app-header">
        <section className="app-title">
          <h1>{title}</h1>
          <small>{description}</small>
        </section>
        <span className="fill-space" />
        <section className="app-links">
          {links &&
            links.map((link: NavLink) => (
              <HeaderNavLink
                label={link.label}
                route={link.route}
                key={link.label}
              />
            ))}
        </section>
      </header>
    );
  }
);

export default Header;