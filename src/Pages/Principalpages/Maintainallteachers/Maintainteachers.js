import React, { useEffect, useState } from 'react';
import { Row, Table } from 'react-bootstrap';
import Maintainteacher from './Maintainteacher';

const Maintainteachers = () => {
    const [teachers, setTeachers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/getteacher')
        .then(res => res.json())
        .then(data => setTeachers(data))
    },[])

    return (
        <div className="container-fluid">
            <Row>
            <h4 className="text-center fw-bold text-primary my-4">Teachers Of Schools</h4>
            <Table striped bordered hover responsive="sm">
                <thead>
                    <tr>
                    <th>Teacher Name</th>
                    <th>Teacher Email</th>
                    <th>Teacher Phone</th>
                    <th>Teacher NID No</th>
                    <th>Teacher Class</th>
                    <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                   {
                       teachers?.map(teacher =>
                       <Maintainteacher key={teacher._id} teacher={teacher}></Maintainteacher>)
                   }
                </tbody>
            </Table>
        </Row>  
        </div>
    );
};

export default Maintainteachers;