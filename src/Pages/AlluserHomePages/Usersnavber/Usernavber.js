import { Link, useHistory } from 'react-router-dom';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

const Usernavber = () => {
  const history = useHistory()
    return (
        <Navbar collapseOnSelect expand="lg" className="usernav">
        <Container className="p-4">
        <Navbar.Brand className=" fs-4 fw-bold text-secondary"  as={Link} to="/"> 
                </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="fw-bold fs-5" as={Link} to="/">Home</Nav.Link>
            <NavDropdown className="fw-bold fs-5 mx-4" title="Facilities" id="collasible-nav-dropdown">
              <NavDropdown.Item onClick={() => {
                  history.push('/facilities', {state: 'Auditorium'})
              }}>Auditorium</NavDropdown.Item>
               <NavDropdown.Divider />
              <NavDropdown.Item onClick={() => {
                  history.push('/facilities', {state: 'Library'})
              }}>Library</NavDropdown.Item>
               <NavDropdown.Divider />
              <NavDropdown.Item onClick={() => {
                  history.push('/facilities', {state: 'Prayer'})
              }}>Prayer Hall</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={() => {
                  history.push('/facilities', {state: 'Games'})
              }}>Games</NavDropdown.Item>
               <NavDropdown.Divider />
              <NavDropdown.Item onClick={() => {
                  history.push('/facilities', {state: 'Canteen'})
              }}>Canteen</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown className="fw-bold fs-5 mx-4" title="Academic" id="collasible-nav-dropdown">
              <NavDropdown.Item onClick={() => {
                  history.push('/academic', {state: 'Rules'})
              }}>Rules Regulation</NavDropdown.Item>
               <NavDropdown.Divider />
              <NavDropdown.Item onClick={() => {
                  history.push('/academic', {state: 'Calendar'})
              }}>Academic Calendar</NavDropdown.Item>
              <NavDropdown.Divider />
               <NavDropdown.Item onClick={() => {
                  history.push('/academic', {state: 'Dress'})
              }}>School Dress Info</NavDropdown.Item>
               <NavDropdown.Divider />
               <NavDropdown.Item onClick={() => {
                  history.push('/academic', {state: 'Schedule'})
              }}>Class Schedule</NavDropdown.Item>
               <NavDropdown.Divider />
               <NavDropdown.Item onClick={() => {
                  history.push('/academic', {state: 'Faculty'})
              }}>Faculty</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown className="fw-bold fs-5  mx-4" title="Admission" id="collasible-nav-dropdown">
              <NavDropdown.Item onClick={() => {
                  history.push('/admission', {state: 'Policy'})
              }}>Admission Procedure And Policy</NavDropdown.Item>
               <NavDropdown.Divider />
               <NavDropdown.Item onClick={() => {
                  history.push('/admission', {state: 'Form'})
              }}>Admission Form</NavDropdown.Item>
               <NavDropdown.Divider />
               <NavDropdown.Item onClick={() => {
                  history.push('/admission', {state: 'How'})
              }}>How To Apply</NavDropdown.Item>
               <NavDropdown.Divider />
               <NavDropdown.Item onClick={() => {
                  history.push('/admission', {state: 'Who'})
              }}>Who Can Apply</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
          <Nav.Link className=" fw-bold text-dark mx-2" as={Link} to="/contactus">Contact Us</Nav.Link>

            <Nav.Link className="loginbtn fw-bold text-dark p-3 rounded" as={Link} to="/alluserloginpage">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Usernavber;