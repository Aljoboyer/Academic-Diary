import React from 'react';
import { Col, Row } from 'react-bootstrap';

const ClassSchedule = () => {
    return (
        <Row className='container-fluid justify-content-center g-4'>
            <h2 className='text-primary fw-bold text-center'>Our School Class Schedule</h2>
            <Col className='schedulecolam' lg={6} md={12} sm={1}>
                <h4 className='fw-bold'>Morning Shift</h4>
                <li><h5>KG Morning ---------- 8:00AM--10:30AM</h5></li>
                <li><h5>Nursery Morning ---------- 8:00AM--10:30AM</h5></li>
                <li><h5>Class-One---Class-Three Morning ---------- 8:00AM--11:00AM</h5></li>
                <li><h5>Class-IV---Class-V Morning---------- 8:00AM--12:00AM</h5></li>
            </Col>
            <Col className='schedulecolam' lg={6} md={12} sm={1}>
                <h4 className='fw-bold'>Day Shift</h4>
                <li><h5>KG Day ---------- 10:30AM--12:30PM</h5></li>
                <li><h5>Nursery Day ---------- 10:30AM--12:30PM</h5></li>
                <li><h5>Class-One---Class-Three Day ---------- 12:00PM--2:00PM</h5></li>
                <li><h5>Class-IV---Class-V Day---------- 12:00PM--2:30PM</h5></li>
            </Col>
        </Row>
    );
};

export default ClassSchedule;