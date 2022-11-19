import React from 'react';

import './HeaderNavLink.css';

// define a Navigation Link type for our links
export type NavLink = {
  label: string;
  route: string;
};

const HeaderNavLink: React.FC<NavLink> = React.memo(({ label }) => (
  <span className="nav-link">{label}</span>
));

export default HeaderNavLink;