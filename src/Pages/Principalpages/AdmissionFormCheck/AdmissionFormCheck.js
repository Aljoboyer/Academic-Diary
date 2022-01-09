import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Table } from 'react-bootstrap';
import {Link} from 'react-router-dom';

const AdmissionFormCheck = () => {
    const [allforms, setAllforms] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/getallAddmissionForm')
        .then(res => res.json())
        .then(data => setAllforms(data))
    },[])
    return (
        <div className='container-fluid'>
            <h3 className='fw-bold text-center my-4 text-primary'>All Addmission Form Here</h3>
            <Table responsive striped bordered hover size="sm">
                <thead>
                    <tr>
                    <th>Student Name</th>
                    <th>Form No</th>
                    <th>See Full Form</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allforms?.map(data => 
                        <tr>
                        <td>{data.studentName}</td>
                        <td>{data._id}</td>
                        <td><Link to={`/IndividualFormCheck/${data._id}`}><button className='btn btn-info'>See Full Form</button></Link></td>
                        </tr>
                        )
                    }
                    
                </tbody>
            </Table>
        </div>
    );
};

export default AdmissionFormCheck;