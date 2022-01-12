import React, { useState } from 'react';
import { useEffect } from 'react';
import {Col, Form, Row} from 'react-bootstrap';
import Swal from 'sweetalert2';

const Paymentupload = () => {
    const [payment, setPayment] = useState({})

    const OnblurHandler = e => {
        const fieldname = e.target.name;
        const fieldvalue = e.target.value;
  
        const newdata = {...payment};
        newdata[fieldname] = fieldvalue;
        setPayment(newdata)
    }
    const publishdate = new Date().toLocaleDateString()
        const newpayment = {...payment, publishdate}
    const [students, setStudents] = useState([])

    useEffect(() => {
    fetch('http://localhost:5000/getallstudent')
        .then(res => res.json())
        .then(data => setStudents(data))
    },[])
    const paymentarray = [];
    students.forEach(student => {
        delete student['_id'];
        const obj = {...student, month: newpayment.month, amount: newpayment.paymentamount, publishdate: newpayment.publishdate, lastdate: newpayment.lastdate};
        paymentarray.push(obj)
    })
    const PaymentUploadHandler = e => {
        e.preventDefault();

        fetch('http://localhost:5000/postpayment', {
            method: 'POST',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(paymentarray)
        })
        .then(res => res.json())
        .then(data => {
            Swal.fire(
                'Payment Added Successfully',
                '',
                'success'
              )
            e.target.reset()
        })
    }

    return (
       <Row className='container-fluid d-flex justify-content-center align-items-center'>
        <Col className='addresultform my-4' lg={8} md={10} sm={12}>
            <Form className='p-4' onSubmit={PaymentUploadHandler}>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridState">
                    <Form.Label className="fw-bold fs-6">Month</Form.Label>
                    <Form.Select onBlur={OnblurHandler} name="month" defaultValue="Choose Term">
                    <option>January</option>
                    <option>February</option>
                    <option>March</option>
                    <option>April</option>
                    <option>February</option>
                    <option>March</option>
                    <option>May</option>
                    <option>June</option>
                    <option>July</option>
                    <option>August</option>
                    <option>September</option>
                    <option>October</option>
                    <option>November</option>
                    <option>December</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label className="fw-bold fs-6">Payment Amount</Form.Label>
                    <Form.Control name="paymentamount" type="number" onBlur={OnblurHandler} placeholder="Payment Amount" />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label className="fw-bold fs-6">Last Date Of Payment</Form.Label>
                    <Form.Control name="lastdate" type="date" onBlur={OnblurHandler} placeholder="Last Date Of Payment" />
                </Form.Group>
            </Row>
            <button type='submit' className='btn btn-dark text-warning fw-bold '>Add Payment</button>
            </Form>
        </Col>
 
       </Row>
    );
};

export default Paymentupload;
