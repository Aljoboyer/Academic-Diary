import React, { useState } from 'react';
import { Col, FloatingLabel, Form, Row } from 'react-bootstrap';
import teacherimg from '../../images/T-bg.jpg';
import studentimg from '../../images/papperpencil.jpg';
import principalimg from '../../images/a-bg.jpg'
import { useHistory } from 'react-router';
const Loginform = ({role}) => {
    const [logindata, setLogindata] = useState({});
    const history = useHistory()
    const OnBlurHandler = e => {
        const fieldname = e.target.name;
        const fieldvalue = e.target.value;

        const newdata = {...logindata};
        newdata[fieldname] = fieldvalue;
        setLogindata(newdata)
    }
    const onSubmitHandler = e => {
        const newdata = {...logindata, role: role}
        if(role === 'Student' && newdata.password === '123456')
        {
            if(newdata.email === 'student@gmail.com' &&  newdata.password === '123456')
            {  
                history.push('/studentdashboard')
            }
            
         
        }
        else if(role === 'Teacher')
        {
            if(newdata.email === 'teacher@gmail.com' && newdata.password === '123456')
            {
                history.push('/teacherhome')
            }
        }
        else if(role === 'Principal')
        {
            if(newdata.email === 'principal@gmail.com' && newdata.password === '123456')
            {
                history.push('/principaldashboard')
            }
            
        }
        console.log(newdata)
        e.preventDefault()
        e.target.reset()
    }
    return (
     <Row className="d-flex justify-content-center">
         <Col lg={4} md={6} sm={12}>
         {
           role === 'Teacher' &&  <img className="w-75 rounded" src={teacherimg} alt="" />
         }
         {
            role === 'Student' &&  <img className="w-75 rounded" src={studentimg} alt="" />
         }
         {
           role === 'Principal' &&   <img className="w-75 rounded" src={principalimg} alt="" />
         }
         </Col>
         <Col lg={7} sm={12} md={6}>
         <Form onSubmit={onSubmitHandler}>
            <Form.Group as={Col} controlId="formGridState">
        <Form.Label>State</Form.Label>
        <Form.Select name="role" onBlur={OnBlurHandler} defaultValue={role}>
            <option>{role}</option>
        </Form.Select>
          </Form.Group>

        <FloatingLabel
            controlId="floatingInput"
            label="Email address"
            className="mb-3"
        >
            <Form.Control name="email" onBlur={OnBlurHandler} type="email" placeholder="name@example.com" />
        </FloatingLabel>

        <FloatingLabel controlId="floatingPassword" label="Password">
            <Form.Control name="password" onBlur={OnBlurHandler} type="password" placeholder="Password" />
        </FloatingLabel>
        <button type="submit" className="btn btn-info fw-bold fs-5 my-4">Login</button>
        </Form>
         </Col>
     </Row>
    );
};

export default Loginform;