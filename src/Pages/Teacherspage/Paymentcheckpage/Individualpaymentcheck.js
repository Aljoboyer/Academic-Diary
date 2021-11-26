import React from 'react';
import { Row, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Teachersnav from '../Teachershome/TeachersNavbar/Teachersnav';

const Individualpaymentcheck = () => {
    return (
        <div className="container-fluid">

            <h1 className="text-center">Student-1 Payment History</h1>
            <Row>
            <Table striped bordered hover responsive="sm">
                <thead>
                    <tr>
                    <th>Term</th>
                    <th>Fee</th>
                    <th>Payment Last Date</th>
                    <th>Paid Amount</th>
                    <th>Remain</th>
                    <th>Payment Receive Date</th>
                    <th>Payment Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>First Term Payment</td>
                    <td>5001</td>
                    <td>15/2/2022</td>
                    <td>5001</td>
                    <td>no</td>
                    <td>12/2/2022</td>
                    <td>Paid</td>
                    </tr>
                    <tr>
                    <td>Second Term Payment</td>
                    <td>6001</td>
                    <td>25/9/2022</td>
                    <td>5001</td>
                    <td>1001</td>
                    <td>12/2/2022</td>
                    <td>pending</td>
                    </tr>
                    <tr>
                    <td>Third Term Payment</td>
                    <td>7001</td>
                    <td>27/12/2022</td>
                    <td>7001</td>
                    <td>no</td>
                    <td>24/12/2022</td>
                    <td>Paid</td>
                    </tr>
                </tbody>
            </Table>
            </Row>
        </div>
    );
};

export default Individualpaymentcheck;