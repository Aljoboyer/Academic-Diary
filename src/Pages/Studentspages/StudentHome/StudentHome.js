import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import useAuth from '../../../Context/useAuth';
import './Studenthome.css'
const StudentHome = () => {
    const {allstduentsection} = useAuth();
    const [notices, setNotices] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/getstudentnotice?section=${allstduentsection.studentsection}&&class=${allstduentsection.studentclass}`)
        .then(res => res.json())
        .then(data => setNotices(data))
    },[allstduentsection.studentsection,allstduentsection.studentclass])
    return (
        <Row className="container-fluid justify-content-center studentcolam">
            <h2 className='text-center fw-bold text-primary my-4'>NOTICE BOARD</h2>
            {
                notices?.map(notice =>
                <Col  lg={8} className=" my-3  text-center bg-dark">

                   <h5 className='text-warning'>{notice?.title}</h5>
                    <p  className='text-light'>{notice?.description}</p>
                    <p className='text-muted text-light'>{notice?.publishdate}</p>
               
                </Col>)
            }
        </Row>
    );
};

export default StudentHome;