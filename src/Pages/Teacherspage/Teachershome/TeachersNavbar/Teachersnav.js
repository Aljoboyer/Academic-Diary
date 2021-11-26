import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Teachersnav = () => {
    return (

          <Navbar  collapseOnSelect expand="lg" className="teachersnavbar">
  <Container className="p-3">
  <Navbar.Brand className="fw-bold fs-1 text-light" as={Link} to="/teacherhome" >Teachers</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link className="fw-bold fs-6 text-dark" as={Link} to="/publishnotice">Publish Notice</Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link className="fw-bold fs-5 text-dark" href="#deets">Login/Logout</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    );
};

export default Teachersnav;