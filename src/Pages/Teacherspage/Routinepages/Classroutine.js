import React from 'react';
import { Col, Form, Row,Button } from 'react-bootstrap';

const Classroutine = () => {
    return (
        <div className="container-fluid">
            <h1 className="text-center fw-bold text-primary">Add Class Routine</h1>
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

        <Row className="mb-3 ">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label className="fw-bold fs-6">Subject Name</Form.Label>
              <Form.Control type="text" placeholder="Subject Name" />
            </Form.Group>
        
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label className="fw-bold fs-6">Subject Code</Form.Label>
              <Form.Control type="text" placeholder="Subject-Code" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridAddress1">
            <Form.Label className="fw-bold fs-6">Time</Form.Label>
            <Form.Control placeholder="Time" />
          </Form.Group>

          <Form.Group as={Col}  controlId="formGridAddress1">
            <Form.Label className="fw-bold fs-6">Day</Form.Label>
            <Form.Control placeholder="Day" />
          </Form.Group>
        </Row>

        <Row className="mb-3 ">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label className="fw-bold fs-6">Subject Name</Form.Label>
              <Form.Control type="text" placeholder="Subject Name" />
            </Form.Group>
        
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label className="fw-bold fs-6">Subject Code</Form.Label>
              <Form.Control type="text" placeholder="Subject-Code" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridAddress1">
            <Form.Label className="fw-bold fs-6">Time</Form.Label>
            <Form.Control placeholder="Time" />
          </Form.Group>

          <Form.Group as={Col}  controlId="formGridAddress1">
            <Form.Label className="fw-bold fs-6">Day</Form.Label>
            <Form.Control placeholder="Day" />
          </Form.Group>
        </Row>

        <Row className="mb-3 ">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label className="fw-bold fs-6">Subject Name</Form.Label>
              <Form.Control type="text" placeholder="Subject Name" />
            </Form.Group>
        
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label className="fw-bold fs-6">Subject Code</Form.Label>
              <Form.Control type="text" placeholder="Subject-Code" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridAddress1">
            <Form.Label className="fw-bold fs-6">Time</Form.Label>
            <Form.Control placeholder="Time" />
          </Form.Group>

          <Form.Group as={Col}  controlId="formGridAddress1">
            <Form.Label className="fw-bold fs-6">Day</Form.Label>
            <Form.Control placeholder="Day" />
          </Form.Group>
        </Row>

        <Row className="mb-3 ">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label className="fw-bold fs-6">Subject Name</Form.Label>
              <Form.Control type="text" placeholder="Subject Name" />
            </Form.Group>
        
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label className="fw-bold fs-6">Subject Code</Form.Label>
              <Form.Control type="text" placeholder="Subject-Code" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridAddress1">
            <Form.Label className="fw-bold fs-6">Time</Form.Label>
            <Form.Control placeholder="Time" />
          </Form.Group>

          <Form.Group as={Col}  controlId="formGridAddress1">
            <Form.Label className="fw-bold fs-6">Day</Form.Label>
            <Form.Control placeholder="Day" />
          </Form.Group>
        </Row>

        <Row className="mb-3 ">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label className="fw-bold fs-6">Subject Name</Form.Label>
              <Form.Control type="text" placeholder="Subject Name" />
            </Form.Group>
        
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label className="fw-bold fs-6">Subject Code</Form.Label>
              <Form.Control type="text" placeholder="Subject-Code" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridAddress1">
            <Form.Label className="fw-bold fs-6">Time</Form.Label>
            <Form.Control placeholder="Time" />
          </Form.Group>

          <Form.Group as={Col}  controlId="formGridAddress1">
            <Form.Label className="fw-bold fs-6">Day</Form.Label>
            <Form.Control placeholder="Day" />
          </Form.Group>
        </Row>

        <Row className="mb-3 ">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label className="fw-bold fs-6">Subject Name</Form.Label>
              <Form.Control type="text" placeholder="Subject Name" />
            </Form.Group>
        
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label className="fw-bold fs-6">Subject Code</Form.Label>
              <Form.Control type="text" placeholder="Subject-Code" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridAddress1">
            <Form.Label className="fw-bold fs-6">Time</Form.Label>
            <Form.Control placeholder="Time" />
          </Form.Group>

          <Form.Group as={Col}  controlId="formGridAddress1">
            <Form.Label className="fw-bold fs-6">Day</Form.Label>
            <Form.Control placeholder="Day" />
          </Form.Group>
        </Row>
  
        <Button className="w-50 text-warning" variant="dark" type="submit">
          Submit
        </Button>
      </Form>
        </div>
    );
};

export default Classroutine;