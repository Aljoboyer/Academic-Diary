import React, { useState } from 'react';
import {Row, Col, Form, Modal, Button} from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';
import bikashlogo from '../../../images/bikashformlogo.png';
import Usernavber from '../Usersnavber/Usernavber';
import logo from '../../../images/shoollogo.jpg'

const Admissionform = () => {
    const [infoshow, setInfoshow] = useState(false);
    const infoClose = () => setInfoshow(false);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);

    const [admissionData, setAddmissionData] = useState({});
    const history  = useHistory();
    const [img, setImg] = useState('');
    const totalAmount = parseInt(215);
    const [num, setNum] = useState('');

    const imgHandler = e => {
        const data = e.target.files[0];
        setImg(data)
    }

    const OnBlurHandler = e => {
        const addmissionName = e.target.name
        const addmissionValue = e.target.value

        const newdata = {...admissionData}
        newdata[addmissionName] = addmissionValue;
        setAddmissionData(newdata)
    }

    const AddmissionHandler = (e) => {
        e.preventDefault();

        if(!img)
        {
            Swal.fire(
                'Please Fill-Up The Full Form',
                '',
                'error'
              )
        }
    const fd = new FormData();
    fd.append('studentName', admissionData.studentName)
    fd.append('fatherName', admissionData.fatherName)
    fd.append('fatherProfession', admissionData.fatherProfession)
    fd.append('motherName', parseInt(admissionData.motherName))
    fd.append('motherProfession', admissionData.motherProfession)
    fd.append('postOffice', admissionData.postOffice)
    fd.append('district', admissionData.district)
    fd.append('phoneNumber', admissionData.phoneNumber)
    fd.append('birthdate', admissionData.birthdate)
    fd.append('age', admissionData.age)
    fd.append('gender', admissionData.gender)
    fd.append('previousInstitution', admissionData.previousInstitution)
    fd.append('formerClass', admissionData.formerClass)
    fd.append('previousYear', admissionData.previousYear)
    fd.append('PreviousInstitutionPostOffice', admissionData.PreviousInstitutionPostOffice)
    fd.append('PreviousInstitutionDistrict', admissionData.PreviousInstitutionDistrict)
    fd.append('birthCirtificateNo', admissionData.birthCirtificateNo)
    fd.append('img', img)
    fd.append('totalAmount', totalAmount)

          if(admissionData.birthCirtificateNo && admissionData.motherProfession)
            {
                // history.push('/AddmissionPayment', {state: fd})
                if(num.length >= 11){
                    fetch('http://localhost:5000/addmissionpayment', {
                    method: 'POST',
                    // headers:{
                    //     'content-type' : 'application/json'
                    // },
                    body: fd
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    window.location.replace(data)
                })
                setInfoshow(false)
                setShow(false)
            }
        else{
            Swal.fire(
                'Please Fill-Up The Full Form',
                '',
                'error'
              )
            }
    }
}
    const InfoShwoHandler = (e) => {
        e.preventDefault();
        setInfoshow(true)

    }
    return (
        <div className="container-fluid">
            <Row className='d-flex justify-content-center'>
                <Col lg={2}>
                <img className='w-75' src={logo} alt="" />
                </Col>
                <h2 className='fw-bold text-primary text-center mb-2'>Chittagong City Academy School</h2>
            </Row>
            <Usernavber></Usernavber>
            <h3 className='text-center fw-bold text-primary my-4'>Chittagong City Academy School Addmission Form</h3>
            <Row className="d-flex justify-content-center my-4 text-primary fw-bold">
               <Col lg={8} md={10} sm={12}>
               <Form onSubmit={InfoShwoHandler} className='admissionForm p-4'>
                <Row className='mb-3'>
                   <Form.Group as={Col} className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Students Name</Form.Label>
                        <Form.Control onBlur={OnBlurHandler} type="text" name='studentName' placeholder="Students Name" />
                    </Form.Group>

                    <Form.Group as={Col}  controlId="formFile" className="mb-3">
                        <Form.Label className="fw-bold">Choose Your Image</Form.Label>
                        <Form.Control onBlur={imgHandler} type="file" />
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
                        <Form.Control as="textarea" onBlur={OnBlurHandler} type="text" name='presentAddress' placeholder="Present Address" />
                    </Form.Group>
                    <Form.Group as={Col} className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Permanent Address</Form.Label>
                        <Form.Control as="textarea"  onBlur={OnBlurHandler} type="text" name='permanentAddress' placeholder="Permanent Address" />
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
                        <Form.Label>Previous Institution Post Office</Form.Label>
                        <Form.Control onBlur={OnBlurHandler} type="text" name='PreviousInstitutionPostOffice' placeholder="Previous Institution Post Office" />
                    </Form.Group>
                    <Form.Group as={Col} className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Previous Institution District</Form.Label>
                        <Form.Control onBlur={OnBlurHandler} type="text" name='PreviousInstitutionDistrict' placeholder="Previous Institution District" />
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

{/* --------------modals------------------ */}
            {/* -----------------MODAL----------- */}
            <Modal
            show={infoshow}
            onHide={infoClose}
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header closeButton>
            <Modal.Title className='modaltitle'>Pay Fee With Bikash</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <img className='img-fluid' src={bikashlogo} alt="" />
                <Row className="d-flex justify-content-center my-4">
                <Col className='text-center' lg={6} md={12} sm={12}>
                    <h4 className="anouncementtitle fw-bold">Please Pay 215 Taka . To Fillup the form Successfully</h4>
                    <button  onClick={() => {
                        setShow(true);
                        setInfoshow(false)
                    }} className='btn bikashbtn text-light fw-bold fs-4'> <img className='w-25' src={bikashlogo} alt="" /> PAY-215Taka</button>
                </Col>
            </Row>
            </Modal.Body>
            <Modal.Footer>
            <Button  className="btn btn-warning" variant="secondary" onClick={infoClose}>
                Close
            </Button>
            </Modal.Footer>
            </Modal>

            <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header closeButton>
            <Modal.Title className='modaltitle'>Pay Fee With Bikash</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <img className='img-fluid' src={bikashlogo} alt="" />
            <Row  className="d-flex justify-content-center  p-4 my-4">
                    <Form onSubmit={AddmissionHandler}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Enter Your Number</Form.Label>
                        <Form.Control name="teachernotice" type='number' placeholder='Enter Your Number' onBlur={(e) => setNum(e.target.value)} rows={4} />
                    </Form.Group>
                    <button type="submit" className="btn text-light fw-bold fs-6 bikashbtn">ENTER</button>
                </Form>
            </Row>
            </Modal.Body>
            <Modal.Footer>
            <Button  className="btn btn-warning" variant="secondary" onClick={handleClose}>
                Close
            </Button>
            </Modal.Footer>
        </Modal>
        </div>
    );
};

export default Admissionform;