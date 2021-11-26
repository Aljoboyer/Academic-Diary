import React, { useState } from 'react';
import { Col, FloatingLabel, Form, Row } from 'react-bootstrap';
import Loginform from './Loginform';
import teacherpic from '../../images/t-2.png';
import studentpic from '../../images/st-1.png';
import principal from '../../images/a-bg.jpg';
import Usernavber from '../AlluserHomePages/Usersnavber/Usernavber';
const Alluserloginpage = () => {
    const [open, SetOpen] = useState(false);
    const [role, setRole] = useState('')
    const RoleHandler = (rols) => {
        SetOpen(true)
        setRole(rols)
    }
    return (
        <div className="container-fluid">
            <Usernavber></Usernavber>
            <Row className="justify-content-center">
                <Row className="gap-3 justify-content-center mt-4">
                    <Col onClick={() => RoleHandler('Student')} lg={3} md={3} sm={12}>
                        <img className="w-50 h-50" src={studentpic}  alt=""/>
                        <h3>Student</h3>
                    </Col>
                    <Col onClick={() => RoleHandler('Teacher')} lg={3} md={3} sm={12}>
                      <img className="w-50 h-50" src={teacherpic}  alt=""/>
                        <h3>Teacher</h3>
                    </Col>
                    <Col onClick={() => RoleHandler('Principal')} lg={3} md={3} sm={12}>
                        <img className="w-50 h-50" src={principal}  alt=""/>
                        <h3>Principal</h3>
                    </Col>
                </Row>
                <Col  lg={7} sm={12} md={10}>
                    {
                        open && <Loginform role={role}></Loginform>
                    }
                    
                </Col>
            </Row>
        </div>
    );
};

export default Alluserloginpage;