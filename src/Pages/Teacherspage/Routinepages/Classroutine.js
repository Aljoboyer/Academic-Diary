import React, { useState } from 'react';
import { Col, Form, Row,Button } from 'react-bootstrap';

const Classroutine = () => {
    const [img, setImg] = useState('');

    const imgHandler = e => {
      const data = e.target.files[0];
      setImg(data)
  }
    const RoutineSubmitHandler = e => {
        e.preventDefault();
        
        if(!img)
            {
                return;
            }
            console.log(img)
        const fd = new FormData();
        fd.append('img', img)

                //uploading routine to database
                fetch('http://localhost:5000/addclassroutine', {
                  method: 'POST',
                  body: fd
                  })
                  .then(response => response.json())
                  .then(result => {
                      e.target.reset();
                  })
                  .catch(error => {

                  });

    }

    return (
        <div className="container-fluid">
            <h1 className="text-center fw-bold text-primary">Add Class Routine</h1>
            <Form className="p-3 addresultform" onSubmit={RoutineSubmitHandler}>
          <Row className="mb-3">
          <Row className="mb-3 ">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label className="fw-bold fs-6">Upload Routine</Form.Label>
              <Form.Control onChange={imgHandler} type="file" />
            </Form.Group>
        </Row>
            <Col lg={6}>
            <Form.Group as={Col} controlId="formGridState">
            <Form.Label className="fw-bold fs-6">Class</Form.Label>
            <Form.Select defaultValue="Choose Class">
              <option>Morning Shift</option>
              <option>Day Shift</option>
            </Form.Select>
          </Form.Group>
            </Col>
        </Row>

        <Button className="w-50 text-warning" variant="dark" type="submit">
          Submit
        </Button>
      </Form>
        </div>
    );
};

export default Classroutine;