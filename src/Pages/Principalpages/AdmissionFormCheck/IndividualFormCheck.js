import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Principalnavbar from '../Principalnavbar/Principalnavbar';
import ReactToPdf  from 'react-to-pdf';

const ref = React.createRef();
const IndividualFormCheck = () => {
    const {id} = useParams()
    const [addmissionform, setAddmissionform] = useState({})
    useEffect(() => {
        fetch(`http://localhost:5000/getIndividualAddmissionForm/${id}`)
        .then(res => res.json())
        .then(data => setAddmissionform(data))
    },[id])
    return (
        <div className='container-fluid'>
            <Principalnavbar></Principalnavbar>
            <Row className='container d-flex justify-content-center p-3'>
                <Col ref={ref} className="indvidualform p-4 ms-4" lg={9} md={9} sm={12}>
                <h4 className='fw-bold text-center my-4 pb-4'>Chittagong City Academy School Addmission Form</h4>
                    <Row className='d-flex justify-content-end'>
                        <Col lg={5}> <img style={{width: '250px', height: '250px'}} src={`data:image/jpeg;base64,${addmissionform.img}`} alt="" /> </Col>
                    </Row>
                    <hr />
                    <h6 className='mb-3 mt-4'><span className='text-primary fw-bold'>Student Name:</span> <span className='formvalu'>{addmissionform.studentName}</span> </h6>
                    <hr  className='fw-bold'/>
                    <Row className='mb-3'>
                        <Col lg={7} md={8} sm={12}><h6><span className='text-primary fw-bold'>Father Name:</span> <span className='formvalu'>{addmissionform.fatherName} </span></h6></Col>
                        <Col lg={5} md={8} sm={12}><h6><span className='text-primary fw-bold'>Profession:</span> <span className='formvalu'>{addmissionform.fatherProfession}</span> </h6></Col>
                    </Row>
                    <hr  className='fw-bold'/>
                    <Row className='mb-3'>
                        <Col lg={7} md={8} sm={12}><h6><span className='text-primary fw-bold'>Mother Name:</span> <span className='formvalu'>{addmissionform.motherName} </span></h6></Col>
                        <Col lg={5} md={8} sm={12}><h6><span className='text-primary fw-bold'>Profession:</span> <span className='formvalu'>{addmissionform.motherProfession}</span> </h6></Col>
                    </Row>
                    <hr  className='fw-bold'/>
                    <h6 className='mb-3'><span className='text-primary fw-bold'>Present Address:</span> <span className='formvalu'>{addmissionform.presentAddress}</span></h6>
                    <hr  className='fw-bold'/>
                    <h6 className='mb-3'><span className='text-primary fw-bold'>Permanent Address: </span><span className='formvalu'>{addmissionform.permanentAddress}</span></h6>
                    <hr  className='fw-bold'/>
                    <Row className='mb-3'>
                        <Col lg={4} md={8} sm={12}><h6><span className='text-primary fw-bold'>Post Office:</span> <span className='formvalu'>{addmissionform.postOffice} </span></h6></Col>
                        <Col lg={4} md={8} sm={12}><h6><span className='text-primary fw-bold'>District:</span> <span className='formvalu'>{addmissionform.district}</span> </h6></Col>
                        <Col lg={4} md={8} sm={12}><h6><span className='text-primary fw-bold'>Phone:</span> <span className='formvalu'>{addmissionform.phoneNumber}</span> </h6></Col>
                    </Row>
                    <hr  className='fw-bold'/>
                    <Row className='mb-3'>
                        <Col lg={4} md={8} sm={12}><h6><span className='text-primary fw-bold'>Age:</span> <span className='formvalu'>{addmissionform.age}</span> </h6></Col>
                        <Col lg={4} md={8} sm={12}><h6><span className='text-primary fw-bold'>Gender:</span> <span className='formvalu'>{addmissionform.gender} </span></h6></Col>
                        <Col lg={4} md={8} sm={12}><h6><span className='text-primary fw-bold'>Birthdate:</span> <span className='formvalu'>{addmissionform.birthdate}</span> </h6></Col>
                    </Row>
                    <hr  className='fw-bold'/>
                    <h6 className='mb-3'><span className='text-primary fw-bold'>Previous Institution: <span className='formvalu'>{addmissionform.previousInstitution}</span></span></h6>
                    <hr  className='fw-bold'/>
                    <Row className='mb-3'>
                        <Col lg={6} md={8} sm={12}><h6><span className='text-primary fw-bold'>Former Class:</span> <span className='formvalu'>{addmissionform.formerClass}</span> </h6></Col>
                        <Col lg={6} md={8} sm={12}><h6><span className='text-primary fw-bold'>Year:</span> <span className='formvalu'>{addmissionform.previousYear}</span> </h6></Col>
                    </Row>
                    <hr  className='fw-bold'/>
                    <Row className='mb-3'>
                        <Col lg={6} md={8} sm={12}><h6><span className='text-primary fw-bold'>Previous Institution Post Office:</span> <span className='formvalu'>{addmissionform.PreviousInstitutionPostOffice} </span></h6></Col>
                        <Col lg={6} md={8} sm={12}><h6><span className='text-primary fw-bold'>Previous Institution District:</span> <span className='formvalu'>{addmissionform.PreviousInstitutionDistrict}</span> </h6></Col>
                    </Row>
                    <hr  className='fw-bold'/>
                    <h6 className='mb-3'><span className='text-primary fw-bold'>Birth Cirtificate No:</span> <span className='formvalu'>{addmissionform.birthCirtificateNo}</span></h6>
                    <hr  className='fw-bold'/>
                </Col>
            <Row className='d-flex justify-content-center'>
                <Col lg={3}>
                <ReactToPdf  targetRef={ref} filename="transcript.pdf">
                    {({toPdf}) => (
                        <button  className="btn btn-primary mt-4" onClick={toPdf}>Download The Form</button>
                    )}
                    </ReactToPdf >
                </Col>
            </Row>
            </Row>
        </div>
    );
};

export default IndividualFormCheck;