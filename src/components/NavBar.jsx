import React from 'react';
import { Navbar, NavItem, Icon } from 'react-materialize';

const NavBar = () => {
  return (
    <Navbar className="black" brand="Logistics Fee Calculator" fixed={true} right>
      <NavItem href="/"><Icon>search</Icon></NavItem>
      <NavItem href="/"><Icon>view_module</Icon></NavItem>
      <NavItem href="/"><Icon>refresh</Icon></NavItem>
      <NavItem href="/"><Icon>more_vert</Icon></NavItem>
    </Navbar>
  );
};

export default NavBar;
