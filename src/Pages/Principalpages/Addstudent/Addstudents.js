import React, { useState } from 'react';
import {Button, Col, Form, Row } from 'react-bootstrap';
import useAuth from '../../../Context/useAuth';
import Swal from 'sweetalert2'

const Addstudents = () => {
    const [regdata, setRegData] = useState({})
    const {RegisterUser, setUser} = useAuth();
   
    const OnblurHandler = e => {
        const fieldname = e.target.name;
        const fieldvalue = e.target.value;
  
        const newdata = {...regdata};
        newdata[fieldname] = fieldvalue;
        setRegData(newdata)
    }

    const AddstudentsHandler = (e) => {
      console.log('hitted')
        RegisterUser(regdata.email, regdata.studentPassword)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          setUser(user);
          
          SaveStudent(regdata.email, regdata.studentname, regdata.role, regdata.studentclass, regdata.studentsection,regdata.studentnid, regdata.studentphone, regdata.studentmothername, regdata.studentfathername, regdata.studentaddress, regdata.studentroll)

         
          e.target.reset()
          
      }).catch((error) => {
           
          console.log('from register user', error.message)
      });

      e.preventDefault()
    }

    //saving student to database
    const SaveStudent = (email, studentname, role, studentclass, studentsection, studentnid, studentphone, studentfather, studentmother, studentaddress, studentroll) => {

      const studentdata = {email, studentname, role, studentclass, studentsection, studentnid, studentphone, studentfather, studentmother, studentaddress, studentroll}

        fetch('http://localhost:5000/useradd', {
            method: 'POST',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(studentdata)
        })
        .then(res => res.json())
        .then(data => {
          if(data)
          {
            Swal.fire(
              'Student Added Successfully',
              '',
              'success'
            )
          }
        })
    }
  
    return (
        <Form onSubmit={AddstudentsHandler} className="p-3 studentregform mt-4">
        <Row className="mb-3 ">
          <h4 className="fw-bold  my-4 text-center">Add Student</h4>
          <Form.Group as={Col} controlId="formGridState">
    <Form.Label className="fw-bold fs-6">Class</Form.Label>
    <Form.Select name="studentclass" onBlur={OnblurHandler} defaultValue="Choose Class">
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
    <Form.Select  name="studentsection" onBlur={OnblurHandler} defaultValue="Choose Section">
        <option>Section-A</option>
        <option>Section-B</option>
    </Form.Select>
      </Form.Group>

      <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label className="fw-bold fs-6">Student Roll</Form.Label>
            <Form.Control name="studentroll" onBlur={OnblurHandler} type="text" placeholder="Enter Roll" />
          </Form.Group>
        </Row>

      <Row className="mb-3 ">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label className="fw-bold fs-6">Student Name</Form.Label>
            <Form.Control name="studentname" onBlur={OnblurHandler} type="text" placeholder="Enter Name" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
          <Form.Label className="fw-bold fs-6">Role</Form.Label>
          <Form.Select  name="role" onBlur={OnblurHandler} defaultValue="Choose Role">
              <option>Student</option>
          </Form.Select>
         </Form.Group>
      </Row>

      <Row className="mb-3 ">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label className="fw-bold fs-6">Student Email</Form.Label>
            <Form.Control name="email" onBlur={OnblurHandler} type="email" placeholder="Enter email" />
          </Form.Group>
      
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label className="fw-bold fs-6">Password</Form.Label>
            <Form.Control name="studentPassword" onBlur={OnblurHandler}  type="password" placeholder="Password" />
          </Form.Group>
      </Row>

      <Row className="mb-3 ">
        <Form.Group as={Col} className="mb-3 w-50" controlId="formGridAddress1">
          <Form.Label className="fw-bold fs-6">Student Birth Cirtificate No</Form.Label>
          <Form.Control  type="number" name="studentnid" onBlur={OnblurHandler}  placeholder="Student Birth Cirtificate No" />
        </Form.Group>
        <Form.Group as={Col} className="mb-3 w-50" controlId="formGridAddress1">
          <Form.Label className="fw-bold fs-6">Student Phone</Form.Label>
          <Form.Control type="number" name="studentphone" onBlur={OnblurHandler}  placeholder="Phone" />
        </Form.Group>

        <Form.Group as={Col} className="mb-3 w-50" controlId="formGridAddress1">
        <Form.Label className="fw-bold fs-6">Date Of Birth</Form.Label>
        <Form.Control type="date" name="studentbirthdate" onBlur={OnblurHandler}  placeholder="Phone" />
      </Form.Group>
      </Row>

      <Row className="mb-3 ">
        <Form.Group as={Col} className="mb-3 w-50" controlId="formGridAddress1">
          <Form.Label className="fw-bold fs-6">Student Father Name</Form.Label>
          <Form.Control  type="text" name="studentfathername" onBlur={OnblurHandler}  placeholder="Student Father Name" />
        </Form.Group>
        <Form.Group as={Col} className="mb-3 w-50" controlId="formGridAddress1">
          <Form.Label className="fw-bold fs-6">Student Mother Name</Form.Label>
          <Form.Control type="text" name="studentmothername" onBlur={OnblurHandler}  placeholder="Student Mother Name" />
        </Form.Group>
      </Row>

      <Row className="mb-3 ">
        <Form.Group as={Col} className="mb-3 w-50" controlId="formGridAddress1">
          <Form.Label className="fw-bold fs-6">Student Address</Form.Label>
          <Form.Control as="textarea"  type="text" name="studentaddress" onBlur={OnblurHandler}  placeholder="Student Address" />
        </Form.Group>
      </Row>

      <Button className="w-50 " variant="success" type="submit">
        Submit
      </Button>
    </Form>
    );
};

export default Addstudents;