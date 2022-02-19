import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Alluserfooter from '../AlluserFooter/Alluserfooter';
import Usernavber from '../Usersnavber/Usernavber';
import logo from '../../../images/shoollogo.jpg'
import { useLocation } from 'react-router-dom';
import Procedureandpolicy from './Procedureandpolicy';
import Howtoapply from './Howtoapply';
import Whocanapply from './Whocanapply';

const Admission = () => {
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
        {state.state === 'Policy' && <Procedureandpolicy></Procedureandpolicy>}
   
        {state.state === 'How' && <Howtoapply></Howtoapply>}
        {state.state === 'Who' && <Whocanapply></Whocanapply>}

        <Alluserfooter></Alluserfooter>
        </div>
    );
};

export default Admission;