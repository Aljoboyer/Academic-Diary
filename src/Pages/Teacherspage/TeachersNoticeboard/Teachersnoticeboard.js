import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import './Teachersnotice.css'
const Teachersnoticeboard = () => {
    const [notices, setNotices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/gettechernotice')
        .then(res => res.json())
        .then(data => setNotices(data))
    },[])
    return (
        <Row className="justify-content-center text-center noticecol teachersnotice p-4">
            <h1 className="fw-bold  text-light">Teachers Notice Board</h1>
            {
                notices?.map(notice =>
                <Col lg={7} className="principalnotice my-3 bg-warning text-center">
                    <h5>{notice?.title}</h5>
                    <p>{notice?.description}</p>
                    <p className='text-muted'>{notice?.publishdate}</p>
                </Col>)
            }
        </Row>
    );
};

export default Teachersnoticeboard;