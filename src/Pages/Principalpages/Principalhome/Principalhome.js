import React from 'react';
import { Col, Row } from 'react-bootstrap';
import principalbanner from '../../../images/principal.jpg'

const Principalhome = () => {
    return (
        <div className="container-fluid">
            <Row className="d-flex justify-content-center align-items-center">
                <Col lg={8} md={10} sm={12}>
                <img  className="w-100 h-100" src={principalbanner} />
                </Col>
            </Row>
        </div>
    );
};

export default Principalhome;