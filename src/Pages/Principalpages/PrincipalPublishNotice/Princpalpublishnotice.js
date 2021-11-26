import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import Principalnavbar from '../Principalnavbar/Principalnavbar';

const Princpalpublishnotice = () => {
    return (
        <div className="container-fluid">
           <Principalnavbar></Principalnavbar>
        <Row className="container d-flex justify-content-center publishnotice">
           <Col lg={7} md={6} sm={12} className="publishnoticehhome p-4">
           <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Write Notice Here</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <button type="submit" className="btn btn-dark text-warning">Publish</button>
            </Form>
           </Col>
           <Col lg={5} md={6} sm={12}>
                <h4 className="text-center">Manage Notice</h4>
           </Col>
        </Row>
        </div>
    );
};

export default Princpalpublishnotice;