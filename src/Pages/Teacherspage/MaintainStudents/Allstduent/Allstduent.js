import React, { useEffect, useState } from 'react';
import {  Row, Table } from 'react-bootstrap';
import { Link , useLocation} from 'react-router-dom';

const Allstduent = () => { 
    const {state} = useLocation();
    const [students, setStudents] = useState([])
    const {section , classteacher} =  state.state.sectionclass;

    useEffect(() => {
    fetch(`http://localhost:5000/maintainstudent?section=${section}&&class=${classteacher}`)
        .then(res => res.json())
        .then(data => setStudents(data))
    },[section, classteacher])


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
                    {
                        students?.map(student => 
                            <tr>
                    <td>{student.studentname}</td>
                    <td>{student.studentroll}</td>
                    <td><button className="btn btn-primary">See Performance</button> </td>
                    </tr>
                            
                            )
                    }
                </tbody>
            </Table>
        </Row>  
    );
};

export default Allstduent;