import React from 'react';
import Usernavber from '../Usersnavber/Usernavber';
import logo from '../../../images/shoollogo.jpg';
import { Col, Row } from 'react-bootstrap';
import Rules from './Rules';
import { useLocation } from 'react-router-dom';
import Alluserfooter from '../AlluserFooter/Alluserfooter';
import Dressinfo from './Dressinfo';
import Calendar from './Calendar';
import ClassSchedule from './ClassSchedule';
import Faculty from './Faculty';
const Academic = () => { 
    const {state} = useLocation()
    return (
        <div className='container-fluid'>
            <Row className='d-flex justify-content-center'>
                <Col lg={2}>
                <img className='w-75' src={logo} alt="" />
                </Col>
                <h2 className='fw-bold text-primary text-center mb-2'>Chittagong City Academy School</h2>
            </Row>
            <Usernavber></Usernavber>
            {state.state === 'Rules' && <Rules></Rules>}
            {state.state === 'Dress' && <Dressinfo></Dressinfo>}
            {state.state === 'Calendar' && <Calendar></Calendar>}
            {state.state === 'Schedule' && <ClassSchedule></ClassSchedule>}
            {state.state === 'Faculty' && <Faculty></Faculty>}
            <Alluserfooter></Alluserfooter>
        </div>
    );
};

export default Academic;