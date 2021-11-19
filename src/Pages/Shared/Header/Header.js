import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { HashLink } from 'react-router-hash-link';
import './Header.css';

const Header = () => {
  const { user, logOut } = useAuth();

  return (
    <>
      <Navbar collapseOnSelect expand="lg" sticky="top" bg="light" variant="light">
        <Container>
          <Navbar.Brand as={HashLink} to="/home"><span className='text-info'>TRAVEL</span>TOUR</Navbar.Brand>

          <Navbar.Toggle />

          <Navbar.Collapse className="justify-content-end">

            <Nav.Link className="text-info" as={HashLink} to="/home">Home</Nav.Link>

            <Nav.Link className="text-info" as={HashLink} to="/offers">Offers</Nav.Link>

            <Nav.Link className="text-info" as={HashLink} to="/addNewOffer">Add A New Offer</Nav.Link>

            <Nav.Link className="text-info" as={HashLink} to="/about-us">About Us</Nav.Link>

            {
              user?.email ?
                <Nav.Link className="text-info" as={HashLink} to="/adminDashboard">My Dashboard</Nav.Link> :
                ' '
            }

            <Navbar.Text>
              <a className="text-decoration-none text-info me-2" href="#login">
                {user?.displayName}
              </a>
            </Navbar.Text>

            {user?.email ?
              <Button onClick={logOut} variant="dark">Log Out</Button> :
              <Nav.Link className="text-dark" as={Link} to="/login">Login</Nav.Link>}

          </Navbar.Collapse>
        </Container>
      </Navbar>

    </>
  );
};

export default Header;