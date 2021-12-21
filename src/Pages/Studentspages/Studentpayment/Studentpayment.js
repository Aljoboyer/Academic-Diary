import React, { useEffect, useState } from 'react';
import {Row, Table} from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import useAuth from '../../../Context/useAuth';

const Studentpayment = () => {
    const {user} = useAuth()
    const [fees, setFees] = useState([]);
    const history = useHistory()
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
    
    return (
    <Row className="container-fluid">
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
    </Row>
    );
};

export default Studentpayment;