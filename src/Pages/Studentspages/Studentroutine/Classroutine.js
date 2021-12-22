import React, { useEffect, useState } from 'react';
import { Col, Row, Spinner } from 'react-bootstrap';
import classroutines from '../../../images/classroutine.jpg'

const Classroutine = () => {
    const [routine, setRoutine] = useState([]);

    useEffect(() =>  {
        fetch('http://localhost:5000/getclassroutine')
        .then(res => res.json())
        .then(data => setRoutine(data))
    },[])
 
    let obj = {}
    const a = routine.forEach(c => {
        obj = {...c}
    })

    return (
        <Row className="container-fluid justify-content-center my-4">
            <h1 className="text-center my-4 fw-bold">Class Routine</h1>
            <Col lg={8}>
            {
                routine?.length ? <>  <a href={classroutines} target="blank" download><button className="detailsbtn p-2 fw-bold mb-2">Download Class Routine</button></a> <img className="" src={`data:image/jpeg;base64,${obj.img}`} alt="" /> </> :  <Spinner animation="border" />
            }
            </Col>
           
        </Row>
    );
};

export default Classroutine;