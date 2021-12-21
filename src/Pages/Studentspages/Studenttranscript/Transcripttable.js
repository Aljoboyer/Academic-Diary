import React, { useEffect, useState } from 'react';
import { Col, Row, Spinner, Table } from 'react-bootstrap';
import useAuth from '../../../Context/useAuth';
const Transcripttable = () => {
    const {user} = useAuth()
   const [cgpas, setCgpas] = useState([]);
    const [userdata, setUserdata] = useState({})

    useEffect(() => {
        fetch(`http://localhost:5000/transcriptget?email=${user.email}`)
        .then(res => res.json())
        .then(data => setCgpas(data))
    },[user.email])

    useEffect(() => {
        if(user.email)
        {
        fetch(`http://localhost:5000/gettransdetails?email=${user.email}`)
        .then(res => res.json())
        .then(data => setUserdata(data))
        }
        else{
            return 'HI'
        }
    },[user.email])

    

    const a = cgpas?.find(cg =>  cg.firsttermCgpa)
    const b = cgpas?.find(cg => cg.secondtermCgpa)
    const c = cgpas?.find(cg => cg.thirdtermCgpa)

    let cgobject = {first: a?.firsttermCgpa, second: b?.secondtermCgpa, third: c?.thirdtermCgpa};

    const totalcgpa = parseFloat((parseInt(cgobject.first) + parseInt(cgobject.second) + parseInt(cgobject.third)) / 3).toFixed(2)

    return (
        <>
            {
                cgpas?.length && userdata?.studentname ?
                <Row className="container-fluid">
                       <hr/>
        <h2 className="mx-4 ps-4 my-4 fw-bold">Chittagong City Academy School</h2>
        <hr/>
     
        <Row className="container">
        
            <Col  className=""  lg={3}>
                    <h5>Roll: {userdata.studentroll}</h5>
                    <hr/>
                    <h5>Result: {totalcgpa}</h5>
            </Col>
            <Col className="d-flex justify-content-center" lg={6}>
               <div>
               <h5 className="my-3">Name: {userdata.studentname} </h5>
                <hr/>
                <h5 className="my-3">Father Name: {userdata.studentfather}</h5>
                <hr/>
                <h5 className="my-3">Mother Name: {userdata.studentmother}</h5>
                <h5>Date Of birth:  {userdata.studentbirthdate}</h5>
                <hr/>
                <h5>Institution: Chittagong City Academy School</h5>
               </div>
            </Col>
        </Row>
        <Row className="container">
            <Col lg={8}>
            <Table  hover responsive="sm">
        <thead>
            <tr>
            <th>Semister Name</th>
            <th>Semister CGPA</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <td>First Semister</td>
            <td>{cgobject.first}</td>
            </tr>
            <tr>
            <td>Second Semister</td>
            <td>{cgobject.second}</td>
            </tr>
            <tr>
            <td>Third Semister</td>
            <td>{cgobject.third}</td>
            </tr>
        </tbody>
    </Table>
    <Table striped bordered hover responsive="sm">
        <thead>
            <tr>
            <th>#</th>
            <th>#</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <td><h5>Total GPA</h5></td>
            <td><h5>{totalcgpa}</h5></td>
            </tr>
        </tbody>
    </Table>
            </Col>
        </Row>
        </Row>
                
                : <Spinner animation="border" />
            }
        </>
    );
};

export default Transcripttable;