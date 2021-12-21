import React from 'react';
import Usernavber from '../Usersnavber/Usernavber';
import Abouteducation from './Abouteducation/Abouteducation'
import Everystep from './Everystep/Everystep';
import Whochoose from './Whochoose/Whochoose';
import Alluserfooter from '../AlluserFooter/Alluserfooter'
import { Col, Row } from 'react-bootstrap';
import logo from '../../../images/shoollogo.jpg';
import '../Home.css'
const Userhome = () => {
    return (
        <div className="container-fluid">
            <Row className='d-flex justify-content-center'>
                <Col lg={2}>
                <img className='w-75' src={logo} alt="" />
                </Col>
                <h2 className='fw-bold text-primary text-center mb-2'>Chittagong City Academy School</h2>
            </Row>
                <Usernavber></Usernavber>
                <Row className='container-fluid'>
                    
                </Row>
                <Abouteducation></Abouteducation>
                <Whochoose></Whochoose>
                <Everystep></Everystep>
                <Alluserfooter></Alluserfooter>
        </div>
    );
};

export default Userhome;