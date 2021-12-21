import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Row, Table } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Principalnavbar from '../Principalnavbar/Principalnavbar';

const Individualpaymentcheck = () => {
    const {id} = useParams();
    const [studentpayment, setStudentpayment] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/individualpaymentcheck/${id}`)
        .then(res => res.json())
        .then(data => setStudentpayment(data))
    },[id]);

    console.log('individual payment',studentpayment)
    return (
        <div className="container-fluid">
            <Principalnavbar></Principalnavbar>
            <h1 className="text-center">Payment History</h1>
            <Row>
            <Table striped bordered hover responsive="sm">
                <thead>
                    <tr>
                    <th>Month</th>
                    <th>Fee</th>
                    <th>Payment Last Date</th>
                    <th>Payment Receive Date</th>
                    <th>Payment Status</th>
                    <th>Transaction Id</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        studentpayment?.map(payment => 

                        <tr>
                            <td>{payment?.month}</td>
                            <td>{payment?.amount}</td>
                            <td>{payment?.lastdate}</td>
                            <td>{payment?.publishdate}</td>
                            <td>{payment?.paymentStatus === 'PAID' ? payment.Status : 'PENDING'} </td>
                            <td>{payment?.tran_id}</td>
                         </tr>
                        )
                    }
                </tbody>
            </Table>
            </Row>
        </div>
    );
};

export default Individualpaymentcheck;