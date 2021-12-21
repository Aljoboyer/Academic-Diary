import React from 'react';
import { Col, Row } from 'react-bootstrap';
import facult from '../../../images/Teaching-Staff-1.jpg'
const Faculty = () => {
    return (
        <Row className='container-fluid d-flex justify-content-center'>
            <Col lg={6} md={10} sm={12}>
                <img className='img-fluid' src={facult} alt="" />
            </Col>
        </Row>
    );
};

export default Faculty;