import React, { useEffect, useState } from 'react';
import { Col, Row, Spinner , Table} from 'react-bootstrap';
import classroutines from '../../../images/classroutine.jpg'
import useFirebase from '../../Authentictions/Authentictions';

const Classroutine = () => {
    const [routine, setRoutine] = useState([]);
    const [manualRoutine, setManualRoutine] = useState({});
    const {allstduentsection} = useFirebase()

    useEffect(() =>  {
        fetch('http://localhost:5000/getclassroutine')
        .then(res => res.json())
        .then(data => setRoutine(data))
    },[])
 
    let obj = {}
    const a = routine.forEach(c => {
        obj = {...c}
    })
    useEffect(() =>  {
        fetch(`http://localhost:5000/getManualClassRoutine?section=${allstduentsection.studentsection}&&routineClass=${allstduentsection.studentclass}`)
        .then(res => res.json())
        .then(data => setManualRoutine(data))
    },[allstduentsection.studentsection,allstduentsection.studentclass])
    return (
        <Row className="container-fluid justify-content-center my-4">
            <h1 className="text-center my-4 fw-bold">Class Routine {allstduentsection.studentclass} {allstduentsection.studentsection}</h1>
            <Row className='my-4 justify-content-center'>
                {
                    manualRoutine.sat && 
                <Table responsive striped bordered hover size="sm">
                    <thead>
                    <tr>
                        <th>Day</th>
                        <th>First Hour</th>
                        <th>Second Hour</th>
                        <th>Third Hour</th>
                        <th>Fourth Hour</th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='fw-bold'>{manualRoutine.sat}</td>
                            <td>{manualRoutine.sat1st}</td>
                            <td>{manualRoutine.sat2nd}</td>
                            <td>{manualRoutine.sat3rd}</td>
                            <td>{manualRoutine.sat4th}</td>
                        </tr>
                        <tr>
                            <td className='fw-bold'>{manualRoutine.sun}</td>
                            <td>{manualRoutine.sun1st}</td>
                            <td>{manualRoutine.sun2nd}</td>
                            <td>{manualRoutine.sun3rd}</td>
                            <td>{manualRoutine.sun4th}</td>
                        </tr>
                        <tr>
                            <td className='fw-bold'>{manualRoutine.mon}</td>
                            <td>{manualRoutine.mon1st}</td>
                            <td>{manualRoutine.mon2nd}</td>
                            <td>{manualRoutine.mon3rd}</td>
                            <td>{manualRoutine.mon4th}</td>
                        </tr>
                        <tr>
                            <td className='fw-bold'>{manualRoutine.tue}</td>
                            <td>{manualRoutine.tues1st}</td>
                            <td>{manualRoutine.tues2nd}</td>
                            <td>{manualRoutine.tues3rd}</td>
                            <td>{manualRoutine.tues4th}</td>
                        </tr>
                        <tr>
                            <td className='fw-bold'>{manualRoutine.wed}</td>
                            <td>{manualRoutine.wed1st}</td>
                            <td>{manualRoutine.wed2nd}</td>
                            <td>{manualRoutine.wed3rd}</td>
                            <td>{manualRoutine.wed4th}</td>
                        </tr>
                    </tbody>
                </Table>
                }
            </Row>
            <Row>
            <Col lg={8}>
            {
                routine?.length ? <>  <a href={classroutines} target="blank" download><button className="detailsbtn p-2 fw-bold mb-2">Download Class Routine</button></a> <img className="" src={`data:image/jpeg;base64,${obj.img}`} alt="" /> </> :  <Spinner animation="border" />
            }
            </Col>
            </Row>
        </Row>
    );
};

export default Classroutine;