import React, { useContext } from 'react';
import { Navbar, Container, Nav, Badge, NavDropdown } from 'react-bootstrap';
import { NavLink, useLocation } from 'react-router-dom';
import routes from '../../routes/routes.json';
import {
  Bag,
  BagFill,
  Cart,
  Cart4,
  MinecartLoaded,
  Person,
} from 'react-bootstrap-icons';
import { useSelector } from 'react-redux';
import { AuthContext } from '../../contexts/AuthContext';

const NavbarHeader = () => {
  const cartProductIds = useSelector((state) => state.cart.cartProductIds);

  const { logoutHandler } = useContext(AuthContext);

  const location = useLocation();

  const isHomePage = location.pathname === routes.HOME;

  return (
    <>
      {isHomePage && (
        <Navbar
          bg="light"
          variant="light"
          expand="md"
          fixed="top"
          className="sticky-top"
        >
          <Container>
            <Nav.Link as={NavLink} to={routes.HOME}>
              <Navbar.Brand style={{ fontWeight: '600' }}>
                <Bag size={28} /> Shop-Now
              </Navbar.Brand>
            </Nav.Link>
            <Navbar.Toggle aria-controls="navbar-nav" />
            <Navbar.Collapse>
              {cartProductIds.length > 0 && (
                <Nav className="justify-content-end mr-auto">
                  <Nav.Link as={NavLink} to={routes.CART}>
                    Carts
                  </Nav.Link>
                </Nav>
              )}
            </Navbar.Collapse>
            <Nav.Link as={NavLink} to={routes.CART} className="ml-auto">
              <Cart size={24} color="blue" />
              <Badge pill className="ml-1">
                {cartProductIds.length}
              </Badge>
            </Nav.Link>
            <NavDropdown align="end" title={<Person size={24} />}>
              <NavDropdown.Item
                style={{ backgroundColor: '#f8f9fa', color: 'red' }}
                onClick={logoutHandler}
              >
                Logout
              </NavDropdown.Item>
            </NavDropdown>
          </Container>
        </Navbar>
      )}
    </>
  );
};

export default NavbarHeader;
