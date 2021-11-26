import React from 'react';
import {Button, Col, Form, Row } from 'react-bootstrap';
import Teachersnav from '../../Teachershome/TeachersNavbar/Teachersnav';
import './resultedit.css'
const Resultedit = () => {
    return (
      <div className="container-fluid">
        <Row className="container">
        <Form className="p-3 editresultform">
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCity">
                <Form.Label className="fw-bold fs-6">Student Name</Form.Label>
                <Form.Control placeholder="Student-Name"/>
              </Form.Group>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label className="fw-bold fs-6">Roll No</Form.Label>
              <Form.Control placeholder="student-Roll"/>
            </Form.Group>
          </Row>
          <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label className="fw-bold fs-6">Class</Form.Label>
            <Form.Select defaultValue="Choose Class">
              <option>Class-1</option>
              <option>Class-2</option>
              <option>Class-3</option>
              <option>Class-4</option>
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label className="fw-bold fs-6">Term</Form.Label>
            <Form.Select defaultValue="Choose Class">
              <option>Term-1</option>
              <option>Term-2</option>
              <option>Term-3</option>
            </Form.Select>
          </Form.Group>
        </Row>

        <Row className="mb-3 ">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label className="fw-bold fs-6">Bangla First</Form.Label>
              <Form.Control type="text" placeholder="Bangla First" />
            </Form.Group>
        
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label className="fw-bold fs-6">Subject Code</Form.Label>
              <Form.Control type="text" placeholder="Subject-Code" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridAddress1">
            <Form.Label className="fw-bold fs-6">Mid term</Form.Label>
            <Form.Control placeholder="Mid-term" />
          </Form.Group>

          <Form.Group as={Col}  controlId="formGridAddress1">
            <Form.Label className="fw-bold fs-6">Final Exam</Form.Label>
            <Form.Control placeholder="Final-Exam" />
          </Form.Group>

          <Form.Group as={Col}  controlId="formGridAddress1">
            <Form.Label className="fw-bold fs-6">Total Marks</Form.Label>
            <Form.Control placeholder="Total Marks" />
          </Form.Group>
        </Row>

        <Row className="mb-3 ">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label className="fw-bold fs-6">Bangla Second</Form.Label>
              <Form.Control type="text" placeholder="Bangla Second" />
            </Form.Group>
        
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label className="fw-bold fs-6">Subject Code</Form.Label>
              <Form.Control type="text" placeholder="Subject-Code" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridAddress1">
            <Form.Label className="fw-bold fs-6">Mid term</Form.Label>
            <Form.Control placeholder="Mid-term" />
          </Form.Group>

          <Form.Group as={Col}  controlId="formGridAddress1">
            <Form.Label className="fw-bold fs-6">Final Exam</Form.Label>
            <Form.Control placeholder="Final-Exam" />
          </Form.Group>

          <Form.Group as={Col}  controlId="formGridAddress1">
            <Form.Label className="fw-bold fs-6">Total Marks</Form.Label>
            <Form.Control placeholder="Total Marks" />
          </Form.Group>
        </Row>

        <Row className="mb-3 ">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label className="fw-bold fs-6">English First</Form.Label>
              <Form.Control type="text" placeholder="English First" />
            </Form.Group>
        
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label className="fw-bold fs-6">Subject Code</Form.Label>
              <Form.Control type="text" placeholder="Subject-Code" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridAddress1">
            <Form.Label className="fw-bold fs-6">Mid term</Form.Label>
            <Form.Control placeholder="Mid-term" />
          </Form.Group>

          <Form.Group as={Col}  controlId="formGridAddress1">
            <Form.Label className="fw-bold fs-6">Final Exam</Form.Label>
            <Form.Control placeholder="Final-Exam" />
          </Form.Group>

          <Form.Group as={Col}  controlId="formGridAddress1">
            <Form.Label className="fw-bold fs-6">Total Marks</Form.Label>
            <Form.Control placeholder="Total Marks" />
          </Form.Group>
        </Row>

        <Row className="mb-3 ">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label className="fw-bold fs-6">English Second</Form.Label>
              <Form.Control type="text" placeholder="English First" />
            </Form.Group>
        
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label className="fw-bold fs-6">Subject Code</Form.Label>
              <Form.Control type="text" placeholder="Subject-Code" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridAddress1">
            <Form.Label className="fw-bold fs-6">Mid term</Form.Label>
            <Form.Control placeholder="Mid-term" />
          </Form.Group>

          <Form.Group as={Col}  controlId="formGridAddress1">
            <Form.Label className="fw-bold fs-6">Final Exam</Form.Label>
            <Form.Control placeholder="Final-Exam" />
          </Form.Group>

          <Form.Group as={Col}  controlId="formGridAddress1">
            <Form.Label className="fw-bold fs-6">Total Marks</Form.Label>
            <Form.Control placeholder="Total Marks" />
          </Form.Group>
        </Row>

        <Row className="mb-3 ">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label className="fw-bold fs-6">Math</Form.Label>
              <Form.Control type="text" placeholder="Math" />
            </Form.Group>
        
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label className="fw-bold fs-6">Subject Code</Form.Label>
              <Form.Control type="text" placeholder="Subject-Code" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridAddress1">
            <Form.Label className="fw-bold fs-6">Mid term</Form.Label>
            <Form.Control placeholder="Mid-term" />
          </Form.Group>

          <Form.Group as={Col}  controlId="formGridAddress1">
            <Form.Label className="fw-bold fs-6">Final Exam</Form.Label>
            <Form.Control placeholder="Final-Exam" />
          </Form.Group>

          <Form.Group as={Col}  controlId="formGridAddress1">
            <Form.Label className="fw-bold fs-6">Total Marks</Form.Label>
            <Form.Control placeholder="Total Marks" />
          </Form.Group>
        </Row>

        <Row className="mb-3 ">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label className="fw-bold fs-6">General Science</Form.Label>
              <Form.Control type="text" placeholder="Enter email" />
            </Form.Group>
        
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label className="fw-bold fs-6">Subject Code</Form.Label>
              <Form.Control type="text" placeholder="Subject-Code" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridAddress1">
            <Form.Label className="fw-bold fs-6">Mid term</Form.Label>
            <Form.Control placeholder="Mid-term" />
          </Form.Group>

          <Form.Group as={Col}  controlId="formGridAddress1">
            <Form.Label className="fw-bold fs-6">Final Exam</Form.Label>
            <Form.Control placeholder="Final-Exam" />
          </Form.Group>

          <Form.Group as={Col}  controlId="formGridAddress1">
            <Form.Label className="fw-bold fs-6">Total Marks</Form.Label>
            <Form.Control placeholder="Total Marks" />
          </Form.Group>
        </Row>
  
        <Button className="w-50 text-warning" variant="dark" type="submit">
          Submit
        </Button>
      </Form>
        </Row>
      </div>
    );
};

export default Resultedit;