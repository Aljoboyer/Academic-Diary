import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, useHistory} from 'react-router-dom';
import useAuth from '../../../Context/useAuth';

const Dashboardnav = () => {
  const {user, LogOutUser} = useAuth()
  const history = useHistory()
  const LogoutHandler = () => {
    LogOutUser(history)
  }

    return (
        <Navbar  collapseOnSelect expand="lg" className="">
        <Container className="p-3">
        <Navbar.Brand as={Link} to="/teachersmaintainence" className="fw-bold fs-1 text-dark" >Teachers Dashboard</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link className="fw-bold fs-6 text-dark" as={Link} to="/publishnotice">Publish Notice</Nav.Link>
          </Nav>
          <Nav>
          <Nav>
        {
          user.email && <button onClick={LogoutHandler}  className="btn btn-dark text-light fw-bold fs-5">Logout</button>
        }
    </Nav>          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Dashboardnav;