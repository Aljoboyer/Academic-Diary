import React from 'react';
import { Col, Row } from 'react-bootstrap';
import rules from '../../../images/rules.jpg'
const Rules = () => {
    return (
       <Row className='container-fluid'>
           <Row className='container my-4'>
            <Col lg={4} md={6} sm={12}>
                <img className='img-fluid' src={rules} alt="" />
            </Col>
            <Col lg={8} md={6} sm={12}>
                <h3>There are some rules student should follow:</h3>
                <li>Pay School fees within due time.</li>
                <li>New Admission for not paying fees ( 3 months)</li>
                <li>No Illegal Work</li>
                <li>No electronic device's</li>
                <li>No political activitie's</li>
                <li>Must carry Id Card in school campus</li>
                <li>Counselling each student</li>
                <li>Must attend in all internal exam</li>
                <li>Mark sheet and attendees will send to the guardian</li>
                <li>Discussion Period with guardian</li>
            </Col>
           </Row>
           <Row className='p-4 my-4'>
               <Col>
                    <h4>Student should Practice some skill</h4>
                    <li>Well manner</li>
                    <li>Communication Skill</li>
                    <li>Positive Thinking</li>
                    <li> Smart Work</li>
               </Col>
           </Row>
       </Row>
    );
};

export default Rules;