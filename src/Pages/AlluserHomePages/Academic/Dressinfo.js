import React from 'react';
import { Col, Row } from 'react-bootstrap';
import dress from '../../../images/dressinfo.jpg'
const Dressinfo = () => {
    return (
        <Row className='container-fluid justify-content-center text-center my-4'>
            <h2 className='fw-bold my-3 text-primary my-4'>Our School Dress Information</h2>
           <Col lg={10} md={12} sm={12}>
                <img className='img-fluid' src={dress} alt="" />
           </Col>
        </Row>
    );
};

export default Dressinfo;