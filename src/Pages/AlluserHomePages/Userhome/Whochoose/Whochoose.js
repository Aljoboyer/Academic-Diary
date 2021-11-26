import React from 'react';
import { Row, Col } from 'react-bootstrap';
import choosimg from '../../../../images/chones-educare.png';

const Whochoose = () => {
    return (
        <Row className="justify-content-center pt-4">
             <h1 className="abouttitle text-center"> Why Choose<span className="spans"> Education Portal</span></h1>
             <p className="aboutp text-center my-4 fw-bold">We focus on develop skill of every student, so student have beautiful result</p>
             <Row className="justify-content-center my-4">
                <Col lg={5} sm={12} md={6}>
                    <img className="w-100" src={choosimg} alt="" />
                </Col>
                <Col className="d-flex align-items-center" lg={5} sm={12} md={6}>
                    <div>
                    <h4 className="fw-bold"><i className="fas fa-cloud-download-alt fa-2x"></i>BEST TEACHERS</h4>
                    <p className="text-muted ms-4">Teaching is done by experienced and helpful teachers.</p>

                    <h4 className="fw-bold"><i className="fab fa-think-peaks fa-2x"></i>EXTERA CARENESS</h4>
                    <p className="text-muted ms-4">Weak students are quided separetly.</p>
                    <h4 className="fw-bold"><i className="fas fa-balance-scale fa-2x"></i>PRACTICAL CLASSES VIDEOS.</h4>
                    <p className="text-muted ms-4">Recoded videos are realiased to better understand practical classes.</p>

                    <h4 className="fw-bold"><i className="fas fa-bullhorn fa-2x"></i>24 HOURS SERVICES</h4>
                    <p className="text-muted ms-4">Backed by some of the biggest names in the industry, Firefox OS is an open platform that fosters greater</p>
                    </div>
                </Col>
             </Row>
        </Row>
    );
};

export default Whochoose;