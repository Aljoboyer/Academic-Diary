import React, { useState } from 'react';
import {Row, Col, Form} from 'react-bootstrap';

const Admissionform = () => {
    const [admissionData, setAddmissionData] = useState({});

    const OnBlurHandler = e => {
        const addmissionName = e.target.name
        const addmissionValue = e.target.value

        const newdata = {...admissionData}
        newdata[addmissionName] = addmissionValue;
        setAddmissionData(newdata)
    }

    const AddmissionHandler = (e) => {
        e.preventDefault()
    }
    return (
        <div className="container-fluid">
            <h3 className='text-center fw-bold text-primary my-4'>Chittagong City Academy School Addmission Form</h3>
            <Row className="d-flex justify-content-center my-4 text-primary fw-bold">
               <Col lg={8} md={10} sm={12}>
               <Form onSubmit={AddmissionHandler} className='admissionForm p-4'>
                <Row className='mb-3'>
                   <Form.Group as={Col} className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Students Name</Form.Label>
                        <Form.Control onBlur={OnBlurHandler} type="text" name='studentName' placeholder="Students Name" />
                    </Form.Group> 
                </Row>
                <Row className='mb-3'>
                   <Form.Group as={Col} className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Father Name</Form.Label>
                        <Form.Control onBlur={OnBlurHandler} type="text" name='fatherName' placeholder="Father Name" />
                    </Form.Group>
                    <Form.Group as={Col} className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Profession</Form.Label>
                        <Form.Control onBlur={OnBlurHandler} type="text" name='fatherProfession' placeholder="Profession" />
                    </Form.Group> 
                </Row>
                <Row className='mb-3'>
                   <Form.Group as={Col} className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Mother Name</Form.Label>
                        <Form.Control onBlur={OnBlurHandler} type="text" name='motherName' placeholder="Mother Name" />
                    </Form.Group>
                    <Form.Group as={Col} className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Profession</Form.Label>
                        <Form.Control onBlur={OnBlurHandler} type="text" name='motherProfession' placeholder="Profession" />
                    </Form.Group> 
                </Row>
                <Row className='mb-3'>
                   <Form.Group as={Col} className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Present Address</Form.Label>
                        <Form.Control onBlur={OnBlurHandler} type="text" name='presentAddress' placeholder="Present Address" />
                    </Form.Group>
                    <Form.Group as={Col} className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Permanent Address</Form.Label>
                        <Form.Control onBlur={OnBlurHandler} type="text" name='permanentAddress' placeholder="Permanent Address" />
                    </Form.Group> 
                </Row>
                <Row className='mb-3'>
                   <Form.Group as={Col} className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Post Office</Form.Label>
                        <Form.Control onBlur={OnBlurHandler} type="text" name='postOffice' placeholder="Post Office" />
                    </Form.Group>
                    <Form.Group as={Col} className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>District</Form.Label>
                        <Form.Control onBlur={OnBlurHandler} type="text" name='district' placeholder="District" />
                    </Form.Group>
                    <Form.Group as={Col} className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control onBlur={OnBlurHandler} type="text" name='phoneNumber' placeholder="Phone Number" />
                    </Form.Group>
                </Row>
                <Row className='mb-3'>
                   <Form.Group as={Col} className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Date Of Birth</Form.Label>
                        <Form.Control onBlur={OnBlurHandler} type="date" name='birthdate' placeholder="Date Of Birth" />
                    </Form.Group>
                    <Form.Group as={Col} className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Age</Form.Label>
                        <Form.Control onBlur={OnBlurHandler} type="text" name='age' placeholder="Age" />
                    </Form.Group>
                    <Form.Group as={Col} className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Gender</Form.Label>
                        <Form.Control onBlur={OnBlurHandler} type="text" name='gender' placeholder="Gender" />
                    </Form.Group>
                </Row>
                <Row className='mb-3'>
                   <Form.Group as={Col} className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Previous Institution</Form.Label>
                        <Form.Control onBlur={OnBlurHandler} type="text" name='previousInstitution' placeholder="Previous Institution" />
                    </Form.Group>
                    <Form.Group as={Col} className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Former Class</Form.Label>
                        <Form.Control onBlur={OnBlurHandler} type="text" name='formerClass' placeholder="Former Class" />
                    </Form.Group>
                    <Form.Group as={Col} className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Year</Form.Label>
                        <Form.Control onBlur={OnBlurHandler} type="text" name='previousYear' placeholder="Year" />
                    </Form.Group>
                </Row>
                <Row className='mb-3'>
                   <Form.Group as={Col} className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Birth Cirtificate No</Form.Label>
                        <Form.Control onBlur={OnBlurHandler} type="text" name='birthCirtificateNo' placeholder="Birth Cirtificate No" />
                    </Form.Group>
                </Row>
                <button type='submit' className='btn btn-dark fw-bold'>SUBMIT</button>
               </Form>
               </Col>
            </Row>
        </div>
    );
};

export default Admissionform;