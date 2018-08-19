import React from 'react';
import {
  Container, Row, Col, Navbar, Nav,
  NavLink, NavItem, NavbarBrand
} from 'reactstrap';

const NavBar = () => {
  return (
    <header>
      <Navbar fixed="top" color="light" light expand="xs" className="bg-white" style={{ height: 80 }}>
        <Container>
          <Row noGutters className="position-relative w-100 align-items-center">
            <NavbarBrand href="/">Logistics Fee Calculator</NavbarBrand>
            <Col className="d-none d-lg-flex justify-content-end">
              <Nav className="mrx-auto" navbar>
                <NavItem className="d-flex align-items-center">
                  <NavLink className="font-weight-thin" href="/">Home</NavLink>
                </NavItem>
              </Nav>
              <Nav className="mrx-auto" navbar>
                <NavItem className="d-flex align-items-center">
                  <NavLink className="font-weight-thin" href="/">About</NavLink>
                </NavItem>
              </Nav>
              <Nav className="mrx-auto" navbar>
                <NavItem className="d-flex align-items-center">
                  <NavLink className="font-weight-thin" href="/">Contact Us</NavLink>
                </NavItem>
              </Nav>
            </Col>
          </Row>
        </Container>

      </Navbar>
    </header>
  );
};

export default NavBar;
