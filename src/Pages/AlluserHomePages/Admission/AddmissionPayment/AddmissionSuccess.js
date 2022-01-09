import React from 'react';
import { Col, Row } from 'react-bootstrap';
import scuccess from '../../../../images/paymentsuccesslogo.png'
import Usernavber from '../../Usersnavber/Usernavber';
import logo from '../../../../images/shoollogo.jpg';

const AddmissionSuccess = () => {
    return (
        <Row className='container-fluid'>
              <Row className='d-flex justify-content-center'>
                <Col lg={2}>
                    <img className='w-75' src={logo} alt="" />
                </Col>
                <h2 className='fw-bold text-primary text-center mb-2'>Chittagong City Academy School</h2>
            </Row>
                <Usernavber></Usernavber>
            <Row className='d-flex justify-content-center'>
            <Col lg={8} md={10} sm={12}>
                <img className='img-fluid' src={scuccess} alt="" />
            </Col>
            </Row>
        </Row>
    );
};

export default AddmissionSuccess;