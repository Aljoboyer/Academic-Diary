import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link , useHistory } from 'react-router-dom';
import useAuth from '../../../../Context/useAuth';
const Teachersnav = () => {
  const {user, LogOutUser} = useAuth()
  const history = useHistory()
  const LogoutHandler = () => {
    LogOutUser(history)
  }
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
        {
          user.email && <button onClick={LogoutHandler}  className="btn btn-dark text-light fw-bold fs-5">Logout</button>
        }
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    );
};

export default Teachersnav;