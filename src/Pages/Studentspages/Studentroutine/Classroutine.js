import React, { useEffect, useState } from 'react';
import { Row, Table } from 'react-bootstrap';

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
 console.log()
    return (
        <Row className="container-fluid">
            <h1 className="text-center my-4">Class Routine</h1>
            {
                routine?.length && <img className="images" src={`data:image/jpeg;base64,${obj.img}`} alt="" />
            }
           
        </Row>
    );
};

export default Classroutine;