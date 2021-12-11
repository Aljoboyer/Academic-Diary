import React from 'react';
import { Col, ListGroup, Row } from 'react-bootstrap';
import Teachersnoticeboard from '../TeachersNoticeboard/Teachersnoticeboard';
import Teachersnav from './TeachersNavbar/Teachersnav';
import Homesidebar from './Homesidebar/Homesidebar';
import './teachershome.css'


const Teachershome = () => {
   
    return (
        <div className="container-fluid ">
            <Teachersnav></Teachersnav>
            <Row className="p-3 teachershome justify-content-center ">
                <Col lg={3} md={6} sm={12} className="d-flex align-items-center">
                    <Homesidebar></Homesidebar>
                </Col>
                <Col lg={7} md={6} sm={12} className=" d-flex justify-content-center align-items-center">
                        <Teachersnoticeboard></Teachersnoticeboard>
                </Col>
                
            </Row>
            <Row className="geeks2"></Row>
        </div>
    );
};

export default Teachershome;