import React from 'react';
import { Col, Row } from 'react-bootstrap';
import calender from '../../../images/academicCal.png'
const Calendar = () => {
    return (
        <Row className='justify-content-center text-center'>
            <h2 className='fw-bold text-primary my-4'>Our Academic Calendar</h2>
            <Col lg={10} md={12} sm={12}>
                <img className='img-fluid' src={calender} alt="" />
            </Col>
        </Row>
    );
};

export default Calendar;