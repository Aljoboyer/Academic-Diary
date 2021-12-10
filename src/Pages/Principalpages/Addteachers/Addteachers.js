import React, { useState } from 'react';
import {Button, Col, Form, Row } from 'react-bootstrap';
import useAuth from '../../../Context/useAuth';
const Addteachers = () => {
    const [regdata, setRegData] = useState({})
    const {RegisterUser, setUser} = useAuth();

    const OnblurHandler = e => {
        const fieldname = e.target.name;
        const fieldvalue = e.target.value;
  
        const newdata = {...regdata};
        newdata[fieldname] = fieldvalue;
        setRegData(newdata)
    }
    const AddTeacherHandler = (e) => {
      
      RegisterUser(regdata.email, regdata.teacherPassword)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        setUser(user);
        
        SaveTeacher(regdata.email, regdata.teachername, regdata.role, regdata.teacherclass, regdata.teachersection,regdata.teachernid, regdata.teacherphone)

        e.target.reset()
        
    }).catch((error) => {
         
        console.log('from register user', error.message)
    });
      
      e.preventDefault()
    }

     //saving teacher to database
     const SaveTeacher = (email, teachername, role, teacherclass, teachersection, teachernid, teacherphone) => {

      const teacherdata = {email, teachername, role, teacherclass, teachersection, teachernid, teacherphone}

        fetch('http://localhost:5000/useradd', {
            method: 'POST',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(teacherdata)
        })
        .then(res => res.json())
        .then(data => {
          if(data)
          {
            alert('teacher add successfully')
          }
        })
    }
      return (
          <Form onSubmit={AddTeacherHandler} className="p-3 studentregform mt-4">
            <Row className="mb-3 ">
              <h4 className="fw-bold  my-4">Teacher Of</h4>
              <Form.Group as={Col} controlId="formGridState">
        <Form.Label className="fw-bold fs-6">Class</Form.Label>
        <Form.Select required name="teacherclass" onBlur={OnblurHandler} defaultValue="Choose Class">
            <option>KG</option>
            <option>Nursery</option>
            <option>Class-One</option>
            <option>Class-Two</option>
            <option>Class-Three</option>
            <option>Class-Four</option>
            <option>Class-Five</option>
        </Form.Select>
          </Form.Group>
          
          <Form.Group as={Col} controlId="formGridState">
        <Form.Label className="fw-bold fs-6">Section</Form.Label>
        <Form.Select required  name="teachersection" onBlur={OnblurHandler} defaultValue="Choose Section">
            <option>Section-A</option>
            <option>Section-B</option>
        </Form.Select>
          </Form.Group>
          </Row>

          <Row className="mb-3 ">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label className="fw-bold fs-6">Teacher Name</Form.Label>
                <Form.Control name="teachername" onBlur={OnblurHandler} type="text" placeholder="Enter Name" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
              <Form.Label className="fw-bold fs-6">Role</Form.Label>
              <Form.Select  name="role" onBlur={OnblurHandler} defaultValue="Choose Role">
                  <option>Teacher</option>
                  <option>Principal</option>
              </Form.Select>
             </Form.Group>
          </Row>

          <Row className="mb-3 ">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label className="fw-bold fs-6">Teacher Email</Form.Label>
                <Form.Control required name="email" onBlur={OnblurHandler} type="email" placeholder="Enter email" />
              </Form.Group>
          
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label className="fw-bold fs-6">Password</Form.Label>
                <Form.Control required name="teacherPassword" onBlur={OnblurHandler}  type="password" placeholder="Password" />
              </Form.Group>
          </Row>

          <Row className="mb-3 ">
            <Form.Group  as={Col} className="mb-3 w-50" controlId="formGridAddress1">
              <Form.Label className="fw-bold fs-6">Teacher NID</Form.Label>
              <Form.Control required  type="number" name="teachernid" onBlur={OnblurHandler}  placeholder="Teacher Nid" />
            </Form.Group>
            <Form.Group as={Col} className="mb-3 w-50" controlId="formGridAddress1">
              <Form.Label className="fw-bold fs-6">Teacher Phone</Form.Label>
              <Form.Control required type="number" name="teacherphone" onBlur={OnblurHandler}  placeholder="Phone" />
            </Form.Group>
          </Row>
          <Button className="w-50 " variant="success" type="submit">
            Submit
          </Button>
        </Form>
      );
};

export default Addteachers;