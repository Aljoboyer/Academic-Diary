import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Usernavber from '../Usersnavber/Usernavber';
import logo from '../../../images/shoollogo.jpg';

const Contactus = () => {
    return (
        <div className='container-fluid'>
                         <Row className='d-flex justify-content-center'>
                <Col lg={2}>
                <img className='w-75' src={logo} alt="" />
                </Col>
                <h2 className='fw-bold text-primary text-center mb-2'>Chittagong City Academy School</h2>
            </Row>
            <Usernavber></Usernavber>
            <Row className='justify-content-center'>
                <h3 className='anouncementtitle fw-bold my-4 text-center'>Contact Us To Know More Information</h3>
                <Col className='regborder p-2' lg={6} sm={12} md={10}>
                    <h5>Location: <span>Rahattarpool, Chittagong, Bangladesh</span></h5>
                    <h5 className='my-4'>Email: <span className='text-info'>ctgacademycity@gmail.com</span></h5>
                    <h5>Phone: <span>+8801845702501</span></h5>
                </Col>
            </Row>
        </div>
    );
};

export default Contactus;