import React, { useEffect, useState } from 'react';
import { Col, Row, Spinner } from 'react-bootstrap';
import examroutine from '../../../../images/examroutine.jpg'
const Examroutine = () => {
    const [routine, setRoutine] = useState([]);
    useEffect(() =>  {
        fetch('http://localhost:5000/getExamroutine')
        .then(res => res.json())
        .then(data => setRoutine(data))
    },[])
    let obj = {}
    const a = routine.forEach(c => {
        obj = {...c}
    })
    return (
        <Row className="container-fluid justify-content-center my-4">
            <h1 className="text-center my-4 fw-bold">Exam Routine</h1>
            <Col lg={8}>
            {
                routine?.length ? <>  <a href={examroutine} target="blank" download><button className="detailsbtn p-2 fw-bold mb-2">Download Exam Routine</button></a> <img className="" src={`data:image/jpeg;base64,${obj.img}`} alt="" /> </> :  <Spinner animation="border" />
            }
            </Col>
           
        </Row>
    );
};

export default Examroutine;