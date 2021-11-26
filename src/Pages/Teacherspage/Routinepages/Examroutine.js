import React from 'react';
import { Col, Form, Row,Button } from 'react-bootstrap';

const Examroutine = () => {
    return (
        <div className="container-fluid">
     <h1 className="text-center fw-bold text-primary">Add Exam Routine</h1>
            <Form className="p-3 addresultform">
          <Row className="mb-3">
          <Row className="mb-3 ">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label className="fw-bold fs-6">Upload Routine</Form.Label>
              <Form.Control type="file" />
            </Form.Group>
        </Row>
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label className="fw-bold fs-6">Class</Form.Label>
            <Form.Select defaultValue="Choose Class">
              <option>Class-1</option>
              <option>Class-2</option>
              <option>Class-3</option>
              <option>Class-4</option>
            </Form.Select>
          </Form.Group>
        </Row>
        <Button className="w-50 text-warning" variant="dark" type="submit">
          Submit
        </Button>
        </Form>
        </div>
    );
};

export default Examroutine;