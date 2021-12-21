import React, { useEffect, useState } from 'react';
import {Row, Table } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
const Paymentstatus = () => {
    const {state} = useLocation();
    const [students, setStudents] = useState([])

    useEffect(() => {
    fetch(`http://localhost:5000/checkstudentpayments?class=${state.state}`)
        .then(res => res.json())
        .then(data => setStudents(data))
    },[state])
    
console.log('students',students)
    return (
        <Row>
        <h4 className="text-center">Students of Class {state.state}</h4>
        <Table striped bordered hover responsive="sm">
            <thead>
                <tr>
                <th>Student Name</th>
                <th>Student Roll</th>
                <th>Student Class</th>
                <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    students?.map(student => 
                        <tr>
                <td>{student.studentname}</td>
                <td>{student.studentroll}</td>
                <td>{student.studentclass}</td>
                <td><Link to={`/individualpaymentcheck/${student._id}`}><button className="btn btn-primary">Check Payment Status</button></Link></td>
                </tr>
                        )
                }
            </tbody>
        </Table>
    </Row>
    );
};

export default Paymentstatus;