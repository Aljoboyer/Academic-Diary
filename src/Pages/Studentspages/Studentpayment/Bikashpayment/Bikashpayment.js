import React, { useEffect } from 'react';
import { useState } from 'react';
import { Col, Row, Modal, Form, Button } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';
import bikash from '../../../../images/bikashlogo.png';
import '../Payment.css';
import bikashformlogo from '../../../../images/bikashformlogo.png';

const Bikashpayment = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const [paymentdata, setPaymentdata] = useState({});
    const {state} = useLocation();
    const [num, setNum] = useState('');

    useEffect(() => {
        if(state.state.id){
            fetch(`http://localhost:5000/getpaymentmonth/${state.state.id}`)
        .then(res => res.json())
        .then(data => setPaymentdata(data))
        }
        else{
            return
        }
    },[state.state.id])


    const PaymentHandler = (e) => {
        e.preventDefault()
        const paymentDetails = {
            total_amount: parseInt(paymentdata.amount),
            id: paymentdata._id,
            cus_name: paymentdata.studentname,
            cus_email: paymentdata.email
        }
        if(num.length >= 11){
            fetch('http://localhost:5000/init', {
            method: 'POST',
            headers:{
                'content-type' : 'application/json'
            },
            body: JSON.stringify(paymentDetails)
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

    const OnBlurHandler = e => {
        setNum(e.target.value)
    }
    return (
        <Row className='container-fluid d-flex justify-content-center align-items-center'>
            <Col lg={6} md={9} sm={12}>
                <img onClick={() => setShow(true)} className='img-fluid bikashimg' src={bikash} alt="" />
            </Col>



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
            <img className='img-fluid' src={bikashformlogo} alt="" />
           <Row  className="d-flex justify-content-center  p-4 my-4">
                <Form onSubmit={PaymentHandler}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Enter Your Number</Form.Label>
                    <Form.Control name="teachernotice" type='number' placeholder='Enter Your Number' onBlur={OnBlurHandler} rows={4} />
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
        </Row>
    );
};

export default Bikashpayment;