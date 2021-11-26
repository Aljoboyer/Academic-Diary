import React from 'react';
import { Col, Row, Table } from 'react-bootstrap';

const Transcripttable = () => {
    return (
        <Row className="container-fluid">
        <h4 className="text-star my-4">Chittagong City Academy School</h4>
        <Row className="container">
            <Col  className="d-flex"  lg={3}>
                <div>
                    <h5>Roll: </h5>
                    <h5>Result:</h5>
                </div>
                <div>
                   <p> 22</p>
                    <h6 className="ms-3 pb-4"> GPA=3.5</h6>
                </div>
            </Col>
            <Col className="d-flex" lg={6}>
                <div>
                <h5>Name: </h5>
                <h5>Father Name: </h5>
                <h5>Mother Name: </h5>
                <h5>Date Of birth: </h5>
                <h5>Institution: </h5>
                </div>
                <div>
                <h5> Student one </h5>
                <h5 className="ms-3"> XYZ </h5>
                <h5 className="ms-3"> Abc </h5>
                <h5 className="ms-3"> 22/06/39</h5>
                <h5 className="ms-3"> Chittagong City Academy School </h5>
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
            <td>3.50</td>
            </tr>
            <tr>
            <td>Second Semister</td>
            <td>3.88</td>
            </tr>
            <tr>
            <td>Third Semister</td>
            <td>2.90</td>
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
            <td><h5>GPA</h5></td>
            <td><h5>3.50</h5></td>
            </tr>
        </tbody>
    </Table>
            </Col>
        </Row>
    </Row>
    );
};

export default Transcripttable;