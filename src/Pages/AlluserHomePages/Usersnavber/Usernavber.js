import { Link } from 'react-router-dom';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Usernavber = () => {
    return (
        <Navbar collapseOnSelect expand="lg" className="usernav">
        <Container className="p-4">
        <Navbar.Brand className=" fs-4 fw-bold text-secondary" href="#home">City School</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="fw-bold fs-5 text-light" as={Link} to="/">Home</Nav.Link>
            <Nav.Link className="fw-bold fs-5 text-light" >Pricing</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link className="bg-warning fw-bold text-dark p-3 rounded" as={Link} to="/alluserloginpage">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Usernavber;