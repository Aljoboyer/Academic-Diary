import React from 'react';
import { Col, Row } from 'react-bootstrap';

const Everystep = () => {
    return (
        <Row className="d-flex align-items-center justify-content-center everystep p-4">
           <Col className="p-4" lg={8} md={6} sm={12}>
                <h1 className="abouttitle p-4 my-3"  >We are with you every step Get Start Easily</h1>
                <p  className="stepp fw-bold fs-4" >Every student is special for us</p>
           </Col>
        </Row>
    );
};

export default Everystep;