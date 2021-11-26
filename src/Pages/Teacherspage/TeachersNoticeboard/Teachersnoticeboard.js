import React from 'react';
import { Row } from 'react-bootstrap';
import './Teachersnotice.css'
const Teachersnoticeboard = () => {
    return (
        <Row className="text-center teachersnotice p-4">
            <h1 className="fw-bold  text-light">Teachers Notice Board</h1>
            <h3 className="text-light my-4">Wellcome Our Honerable Teachers</h3>
            <p className="text-light">Here Teacher Will See The Notice From Principal</p>
            <p className="text-light my-4">They Will See all Update Of internal Shools Authority</p>
        </Row>
    );
};

export default Teachersnoticeboard;