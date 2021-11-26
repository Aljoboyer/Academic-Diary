import React from 'react';
import { Col, Row } from 'react-bootstrap';

const Alluserfooter = () => {
    return (
        <div className="container-fluid footer">
            <Row className="text-light p-3">
                <Col className="p-3" lg={3} md={6} sm={12}>
                    <h3 className="fw-bold text-light">Chittagong City academy school</h3>
                </Col>
                <Col className="p-3" lg={3} md={6} sm={12}>
                    <h4>OFFICE</h4>
                    <h6>Home</h6>
                    <h6>About</h6>
                    <h6>Contact</h6>
                </Col>
                <Col className="p-3" lg={3} md={6} sm={12}>
                    <h4>USEFUL LINKS</h4>
                    <h6>Terms and Conditions</h6>
                    <h6>Settings</h6>
                    <h6>FaQ</h6>
                    <h6>Help</h6>
                </Col>
                <Col className="p-3" lg={3} md={6} sm={12}>
                    <h4>CONTACT</h4>
                    <h6> Chittagong, Bangladesh</h6>
                    <h6>devzone302.2@gmail.com</h6>
                    <h6> + 01 234 567 88</h6>
                    <h6> + 85 255 568 89</h6>
                </Col>
            </Row>
        </div>
    );
};

export default Alluserfooter;