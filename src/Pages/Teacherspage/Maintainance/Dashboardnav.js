import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Dashboardnav = () => {
    return (
        <Navbar  collapseOnSelect expand="lg" className="">
        <Container className="p-3">
        <Navbar.Brand className="fw-bold fs-1 text-dark" >Teachers Dashboard</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
           
          </Nav>
          <Nav>
            <Nav.Link className="fw-bold fs-5 text-primary" href="#deets">Login/Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Dashboardnav;