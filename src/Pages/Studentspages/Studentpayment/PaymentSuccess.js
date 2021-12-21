import React from 'react';
import { Col, Row } from 'react-bootstrap';
import scuccess from '../../../images/paymentsuccesslogo.png'
const PaymentSuccess = () => {
    return (
        <Row className='container-fluid'>
            <Col lg={8} md={10} sm={12}>
                <img className='img-fluid' src={scuccess} alt="" />
            </Col>
        </Row>
    );
};

export default PaymentSuccess;