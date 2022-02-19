import React from 'react';
import { Col, Row,Modal, Button, Form } from 'react-bootstrap';
import Usernavber from '../../Usersnavber/Usernavber';
import logo from '../../../../images/shoollogo.jpg';
import bikashlogo from '../../../../images/bikashformlogo.png';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';

const AddmissionPayment = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const {state} = useLocation();
    const [num, setNum] = useState('');
    const admissiondata = state.state

    const PaymentHandler = (e) => {
        e.preventDefault()
     
        if(num.length >= 11){
            fetch('http://localhost:5000/addmissionpayment', {
            method: 'POST',
            headers:{
                'content-type' : 'application/json'
            },
            body: JSON.stringify(admissiondata)
        })
        .then(res => res.json())
        .then(data => {
            setShow(false)
            window.location.replace(data)
        })
        }
        else{
            Swal.fire(
                'Please Enter Your Number',
                '',
                'error'
              )
        }
    }
    return (
        <div className='container-fluid'>
            <Row className='d-flex justify-content-center'>
                <Col lg={2}>
                    <img className='w-75' src={logo} alt="" />
                </Col>
                <h2 className='fw-bold text-primary text-center mb-2'>Chittagong City Academy School</h2>
            </Row>
                <Usernavber></Usernavber>
            <Row className="d-flex justify-content-center my-4">
                <Col className='text-center' lg={6} md={12} sm={12}>
                    <h4 className="anouncementtitle fw-bold">Please Pay 215 Taka . To Fillup the form Successfully</h4>
                    <button  onClick={() => setShow(true)} className='btn bikashbtn text-light fw-bold fs-4'> <img className='w-25' src={bikashlogo} alt="" /> PAY-215Taka</button>
                </Col>
            </Row>

            {/* -----------------MODAL----------- */}
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
                    <Form onSubmit={PaymentHandler}>
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

export default AddmissionPayment;