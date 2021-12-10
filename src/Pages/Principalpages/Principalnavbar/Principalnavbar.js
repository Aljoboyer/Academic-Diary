import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link , useHistory} from 'react-router-dom';
import useAuth from '../../../Context/useAuth';

const Principalnavbar = () => {
  const {user, LogOutUser} = useAuth()
  const history = useHistory()
  const LogoutHandler = () => {
    LogOutUser(history)
  }
    return (
        <Navbar  collapseOnSelect expand="lg" bg="primary" className="teachersnavbar">
        <Container className="p-3">
        <Navbar.Brand className="fw-bold fs-1 text-light" as={Link} to="/principaldashboard" >Principal Dashboard</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="fw-bold fs-6 text-dark" as={Link} to="/princpalpublishnotice">Publish Notice For Teachers</Nav.Link>
          </Nav>
          <Nav>
            {
              user.email && <button onClick={LogoutHandler}  className="btn btn-light text-primary fw-bold p-2" >Logout</button>
            }
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Principalnavbar;