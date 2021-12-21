import React from 'react';
import { Col, Row } from 'react-bootstrap';
import aboutimg from '../../../../images/about-educare.png'
const Abouteducation = () => {
    return (
        <Row className="container justify-content-center gap-3 gy-3 pt-4">
            <Col className="" lg={6} md={6} sm={12}>
                <h1 className="abouttitle"> ABOUT EDUCATION <span className="spans">Chittagong City Academy School</span></h1>
                <h4 className="littletitle">A little about us and a breif history of how we started.
                </h4>
                <p className="aboutp text-muted fw-bold">It takes a lot to make a school great—it comes with hard work and determination. School climate, a cohesive staff, community involvement, a strong leader, and a rigorous curriculum are the key factors that determine greatness.It takes a lot to make a school great—it comes with hard work and determination. School climate, a cohesive staff, community involvement, a strong leader, and a rigorous curriculum are the key factors that determine greatness.It takes a lot to make a school great—it comes with hard work and determination. School climate, a cohesive staff, community involvement, a strong leader, and a rigorous curriculum are the key factors that determine greatness.
                </p>
                <Row className="justify-content-center">
                    <Col lg={5} md={5} sm={12}>
                        <p className="aboutp"><i className="fas fa-check"></i> Pleasure and praising pain was born</p>
                    </Col>
                    <Col lg={5} md={5} sm={12}>
                    <p className="aboutp"><i className="fas fa-check"></i> The great explorer of the truth</p>
                    </Col>
                    <Col lg={5} md={5} sm={12}>
                    <p className="aboutp"><i className="fas fa-check"></i> Anyone who love and pursue</p>
                    </Col>
                    <Col lg={5} md={5} sm={12}>
                    <p className="aboutp"><i className="fas fa-check"></i> The printing typesetting</p>
                    </Col>
                </Row>
            </Col>
            <Col lg={4} md={6} sm={12}>
                <img className="w-100" src={aboutimg} alt="" />
            </Col>
        </Row>
    );
};

export default Abouteducation;