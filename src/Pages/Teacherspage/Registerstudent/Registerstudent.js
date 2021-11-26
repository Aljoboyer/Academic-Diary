import React, { useState } from 'react';
import {Button, Col, Form, Row } from 'react-bootstrap';
import './regstudent.css'
const Registerstudent = () => {
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
        <Form onSubmit={AddstudentHanlder} className="p-3 studentregform">
        <Row className="mb-3 ">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label className="fw-bold fs-6">Student Email</Form.Label>
            <Form.Control name="StudentEmail" onBlur={OnblurHandler} type="email" placeholder="Enter email" />
          </Form.Group>
      
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label className="fw-bold fs-6">Password</Form.Label>
            <Form.Control name="Password" onBlur={OnblurHandler}  type="password" placeholder="Password" />
          </Form.Group>
        </Row>
      
        <Form.Group className="mb-3 w-50" controlId="formGridAddress1">
          <Form.Label className="fw-bold fs-6">Student ID</Form.Label>
          <Form.Control name="studentID" onBlur={OnblurHandler}  placeholder="student-ID" />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label className="fw-bold fs-6">Class</Form.Label>
            <Form.Select name="class" onBlur={OnblurHandler}  defaultValue="Choose Class">
              <option>Class-1</option>
              <option>Class-2</option>
              <option>Class-3</option>
              <option>Class-4</option>
            </Form.Select>
          </Form.Group>
      
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label className="fw-bold fs-6">Roll No</Form.Label>
            <Form.Control name="rollNo" onBlur={OnblurHandler}  placeholder="student-Roll"/>
          </Form.Group>
        </Row>
        <Button className="w-50 " variant="success" type="submit">
          Submit
        </Button>
      </Form>
    );
};

export default Registerstudent;