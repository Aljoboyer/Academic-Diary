import React, { useState } from 'react';
import {Button, Col, Form, Row } from 'react-bootstrap';

const Addteachers = () => {
    const [regdata, setRegData] = useState({})
  
    const OnblurHandler = e => {
        const fieldname = e.target.name;
        const fieldvalue = e.target.value;
  
        const newdata = {...regdata};
        newdata[fieldname] = fieldvalue;
        setRegData(newdata)
    }
    const AddstudentHanlder = (e) => {
      console.log(regdata)
      e.preventDefault()
    }
      return (
          <Form onSubmit={AddstudentHanlder} className="p-3 studentregform mt-4">
          <Row className="mb-3 ">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label className="fw-bold fs-6">Teachers Email</Form.Label>
              <Form.Control name="teachersEmail" onBlur={OnblurHandler} type="email" placeholder="Enter email" />
            </Form.Group>
        
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label className="fw-bold fs-6">Password</Form.Label>
              <Form.Control name="teachersPassword" onBlur={OnblurHandler}  type="password" placeholder="Password" />
            </Form.Group>
          </Row>
        
          <Form.Group className="mb-3 w-50" controlId="formGridAddress1">
            <Form.Label className="fw-bold fs-6">Teachers ID</Form.Label>
            <Form.Control name="teachersID" onBlur={OnblurHandler}  placeholder="student-ID" />
          </Form.Group>
  
          <Button className="w-50 " variant="success" type="submit">
            Submit
          </Button>
        </Form>
      );
};

export default Addteachers;