import React, { useEffect, useState } from 'react';
import {Col, Form, Modal, Row, Table,Button} from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAuth from '../../../Context/useAuth';
import bikashformlogo from '../../../images/bikashformlogo.png';

const Studentpayment = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const {user} = useAuth()
    const [fees, setFees] = useState([]);
    const history = useHistory();
    const [sessionFees, setSessionFees] = useState({});
    const [num, setNum] = useState('');

    useEffect(() => {
        if(user.email)
        {
            fetch(`http://localhost:5000/getfees?email=${user.email}`)
            .then(res => res.json())
            .then(data => setFees(data))
        }
        else{
            return 
        }
    }, [user.email]);

    useEffect(() => {
        if(user.email)
        {
            fetch(`http://localhost:5000/getSessionfees?email=${user.email}`)
            .then(res => res.json())
            .then(data => setSessionFees(data))
        }
        else{
            return 
        }
    }, [user.email]);

    const PaymentHandler = (e) => {
        e.preventDefault()
        const paymentDetails = {
            total_amount: parseInt(sessionFees.sessionFee),
            id: sessionFees._id,
            cus_name: sessionFees.studentname,
            cus_email: sessionFees.email
        }
        if(num.length >= 11){
            fetch('http://localhost:5000/sessionFee', {
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
    <Row className="container-fluid">
        <Col lg={8} md={10} sm={12}>
        <h4 className="text-center fw-bold text-primary my-4">Your Monthly Fee</h4>
        <Table striped bordered hover responsive="sm">
            <thead>
                <tr>
                <th>Fee Publish Date</th>
                <th>Month</th>
                <th>FEE</th>
                <th>Last Date Of Fee</th>
                <th>Pay Fee</th>
                </tr>
            </thead>
            <tbody>
                {
                    fees?.map(fee =>
                    <tr>
                    <td>{fee.publishdate}</td>
                    <td>{fee.month}</td>
                    <td>{fee.amount}</td>
                    <td>{fee.lastdate}</td>
                    <td>{fee?.paymentStatus ? <h4>PAID</h4> : <button onClick={() => {
                        history.push('/studentdashboard/bikashpayment', {state: {id: fee._id}})
                    }} className="btn btn-dark fw-bold text-warning">Pey Fee</button>}</td>
                    </tr>
                    )
                }
            </tbody>
        </Table>
        </Col>
        <Col lg={4} md={12} sm={12}>
            <h4 className='fw-bold text-primary my-4'>Session Fee</h4>
            <h5 className="fw-bold my-4">Your Total SessionFee: {sessionFees.sessionFee}</h5>
            {
                sessionFees?.paymentStatus === 'PAID' ? <h4 className='fw-bold text-success'>PAID</h4> : <button onClick={() => setShow(true)} className='btn btn-dark text-warning fw-bold my-4'>PAY FEE {sessionFees.sessionFee} TAKA</button>
            }
            
        </Col>


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

export default Studentpayment;