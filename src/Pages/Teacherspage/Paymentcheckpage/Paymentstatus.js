import React from 'react';
import {Row, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Paymentstatus = () => {
    return (
        <Row>
        <h4 className="text-center">Students of Class One</h4>
        <Table striped bordered hover responsive="sm">
            <thead>
                <tr>
                <th>Student Name</th>
                <th>Student Roll</th>
                <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>Student-1</td>
                <td>1</td>
                <td><Link to="/individualpaymentcheck"><button className="btn btn-primary">Check Payment Status</button></Link></td>
                </tr>
                <tr>
                <td>Student-2</td>
                <td>2</td>
                <td><button className="btn btn-primary">Check Payment Status</button></td>
                </tr>
                <tr>
                <td>Student-3</td>
                <td>3</td>
                <td><button className="btn btn-primary">Check Payment Status</button></td>
                </tr>

                <tr>
                <td>Student-4</td>
                <td>4</td>
                <td><button className="btn btn-primary">Check Payment Status</button></td>
                </tr>
                <tr>
                <td>Student-5</td>
                <td>5</td>
                <td><button className="btn btn-primary">Check Payment Status</button></td>
                </tr>
                <tr>
                <td>Student-6</td>
                <td>6</td>
                <td><button className="btn btn-primary">Check Payment Status</button></td>
                </tr>
            </tbody>
        </Table>
    </Row>
    );
};

export default Paymentstatus;