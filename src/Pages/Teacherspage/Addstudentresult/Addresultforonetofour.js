import React, { useState } from 'react';
import {Button, Col, Form, Row } from 'react-bootstrap';
import Swal from 'sweetalert2';
import useAuth from '../../../Context/useAuth';

const Addresultforonetofour = () => {
    const [result, setResult] = useState({})
    const {user} = useAuth()
    const OnblurHandler = e => {
        const fieldname = e.target.name;
        const fieldvalue = e.target.value;
  
        const newdata = {...result};
        newdata[fieldname] = fieldvalue;
        setResult(newdata)
    }

    let bangla1Cgpa;
    let bangla2Cgpa;
    let english1Cgpa;
    let english2Cgpa;
    let mathCgpa;
    let gsCgpa;
    let religionCgpa
    let Failcount1 = 0;
    let firsttermCgpa = 0;
    let secondtermCgpa = 0;
    let thirdtermCgpa = 0;

    if(result.class === 'Class-One' || result.class === 'Class-Two' || result.class === 'Class-Three' || result.class === 'Class-Four') {

      if(parseInt(result.bangla1total) < 33)
      {
          bangla1Cgpa = 'Fail';
          Failcount1 = Failcount1 + 1
      }
       if(parseInt(result.bangla1total) >= 33 && parseInt(result.bangla1total) <= 39)
      {
          bangla1Cgpa = 1.0
      }
       if(parseInt(result.bangla1total) >= 40 && parseInt(result.bangla1total) <= 49)
      {
          bangla1Cgpa = 2.0
      }
       if(parseInt(result.bangla1total) >= 50 && parseInt(result.bangla1total) <= 59)
      {
          bangla1Cgpa = 3.00
      }
       if(parseInt(result.bangla1total) >= 60 && parseInt(result.bangla1total) <= 69)
      {
          bangla1Cgpa = 3.50
      }
       if(parseInt(result.bangla1total) >= 70 && parseInt(result.bangla1total) <= 79)
      {
          bangla1Cgpa = 4.00
      }
      if(parseInt(result.bangla1total) >= 80 && parseInt(result.bangla1total) <= 100)
      {
          bangla1Cgpa = 5.00
      }

      if(parseInt(result.bangla2total) < 33)
      {
          bangla2Cgpa = 'Fail';
          Failcount1 = Failcount1 + 1
      }
      if(parseInt(result.bangla2total) >= 33 && parseInt(result.bangla2total) <= 39)
      {
          bangla2Cgpa = 1.0
      }
      if(parseInt(result.bangla2total) >= 40 && parseInt(result.bangla2total) <= 49)
      {
          bangla2Cgpa = 2.0
      }
      if(parseInt(result.bangla2total) >= 50 && parseInt(result.bangla2total) <= 59)
      {
          bangla2Cgpa = 3.00
      }
      if(parseInt(result.bangla2total) >= 60 && parseInt(result.bangla2total) <= 69)
      {
          bangla2Cgpa = 3.50
      }
      if(parseInt(result.bangla2total) >= 70 && parseInt(result.bangla2total) <= 79)
      {
          bangla2Cgpa = 4.00
      }
      if(parseInt(result.bangla2total) >= 80 && parseInt(result.bangla2total) <= 100)
      {
          bangla2Cgpa = 5.00
      }

      if(parseInt(result.english1total) < 33)
      {
          english1Cgpa = 'Fail';
          Failcount1 = Failcount1 + 1
      }
      if(parseInt(result.english1total) >= 33 && parseInt(result.english1total) <= 39)
      {
          english1Cgpa = 1.0
      }
      if(parseInt(result.english1total) >= 40 && parseInt(result.english1total) <= 49)
      {
          english1Cgpa = 2.0
      }
      if(parseInt(result.english1total) >= 50 && parseInt(result.english1total) <= 59)
      {
          english1Cgpa = 3.00
      }
      if(parseInt(result.english1total) >= 60 && parseInt(result.english1total) <= 69)
      {
          english1Cgpa = 3.50
      }
      if(parseInt(result.english1total) >= 70 && parseInt(result.english1total) <= 79)
      {
          english1Cgpa = 4.00
      }
      if(parseInt(result.english1total) >= 80 && parseInt(result.english1total) <= 100)
      {
          english1Cgpa = 5.00
      }


      if(parseInt(result.english2total) < 33)
      {
          english2Cgpa = 'Fail';
          Failcount1 = Failcount1 + 1
      }
      if(parseInt(result.english2total) >= 33 && parseInt(result.english2total) <= 39)
      {
          english2Cgpa = 1.0
      }
      if(parseInt(result.english2total) >= 40 && parseInt(result.english2total) <= 49)
      {
          english2Cgpa = 2.0
      }
      if(parseInt(result.english2total) >= 50 && parseInt(result.english2total) <= 59)
      {
          english2Cgpa = 3.00
      }
      if(parseInt(result.english2total) >= 60  && parseInt(result.english2total) <= 69)
      {
       
          english2Cgpa = 3.50
      }
      if(parseInt(result.english2total) >= 70 && parseInt(result.english2total) <= 79)
      {
          english2Cgpa = 4.00
      }
      if(parseInt(result.english2total) >= 80 && parseInt(result.english2total) <= 100)
      {
          english2Cgpa = 5.00
      }


      if(parseInt(result.mathtotal) < 33)
      {
          mathCgpa = 'Fail';
          Failcount1 = Failcount1 + 1
      }
      if(parseInt(result.mathtotal) >= 33 && parseInt(result.mathtotal) <= 39)
      {
          mathCgpa = 1.0
      }
      if(parseInt(result.mathtotal) >= 40 && parseInt(result.mathtotal) <= 49)
      {
          mathCgpa = 2.0
      }
      if(parseInt(result.mathtotal) >= 50 && parseInt(result.mathtotal) <= 59)
      {
          mathCgpa = 3.00
      }
      if(parseInt(result.mathtotal) >= 60 && parseInt(result.mathtotal) <= 69)
      {
          
          mathCgpa = 3.50
      }
      if(parseInt(result.mathtotal) >= 70 && parseInt(result.mathtotal) <= 79)
      {
          mathCgpa = 4.00
      }
      if(parseInt(result.mathtotal) >= 80 && parseInt(result.mathtotal) <= 100)
      {
          mathCgpa = 5.00
      }

      if(parseInt(result.gstotal) < 33)
      {
          gsCgpa = 'Fail';
          Failcount1 = Failcount1 + 1
      }
      if(parseInt(result.gstotal) >= 33 && parseInt(result.gstotal) <= 39)
      {
          gsCgpa = 1.0
      }
      if(parseInt(result.gstotal) >= 40 && parseInt(result.gstotal) <= 49)
      {
          gsCgpa = 2.0
      }
      if(parseInt(result.gstotal) >= 50 && parseInt(result.gstotal) <= 59)
      {
          gsCgpa = 3.00
      }
      if(parseInt(result.gstotal) >= 60 && parseInt(result.gstotal) <= 69)
      {
          gsCgpa = 3.50
      }
      if(parseInt(result.gstotal) >= 70 && parseInt(result.gstotal) <= 79)
      {
          gsCgpa = 4.00
      }
      if(parseInt(result.gstotal) >= 80 && parseInt(result.gstotal) <= 100)
      {
          gsCgpa = 5.00
      }

        
      if(parseInt(result.religiontotal) < 33)
      {
          religionCgpa = 'Fail';
          Failcount1 = Failcount1 + 1
      }
      if(parseInt(result.religiontotal) >= 33 && parseInt(result.religiontotal) <= 39)
      {
          religionCgpa = 1.0
      }
      if(parseInt(result.religiontotal) >= 40 && parseInt(result.religiontotal) <= 49)
      {
          religionCgpa = 2.0
      }
      if(parseInt(result.religiontotal) >= 50 && parseInt(result.religiontotal) <= 59)
      {
          religionCgpa = 3.00
      }
      if(parseInt(result.religiontotal) >= 60 && parseInt(result.religiontotal) <= 69)
      {
          religionCgpa = 3.50
      }
      if(parseInt(result.religiontotal) >= 70 && parseInt(result.religiontotal) <= 79)
      {
          religionCgpa = 4.00
      }
      if(parseInt(result.religiontotal) >= 80 && parseInt(result.religiontotal) <= 100)
      {
          religionCgpa = 5.00
      }
  }

  if(result.term === 'First-Term')
  {
    firsttermCgpa = parseFloat((bangla1Cgpa + bangla2Cgpa + english1Cgpa + english2Cgpa + mathCgpa + gsCgpa + religionCgpa) / 7).toFixed(2)
  }
  if(result.term === 'Second-Term')
  {
    secondtermCgpa = parseFloat((bangla1Cgpa + bangla2Cgpa + english1Cgpa + english2Cgpa + mathCgpa + gsCgpa + religionCgpa) / 7).toFixed(2)
  }
  if(result.term === 'Third-Term')
  {
    thirdtermCgpa = parseFloat((bangla1Cgpa + bangla2Cgpa + english1Cgpa + english2Cgpa + mathCgpa + gsCgpa + religionCgpa) / 7).toFixed(2)
  }

    const ResultSubmitHandler = e => {
        e.preventDefault()
        const newresult = {...result, studentname: result.studentname, studentclass: result.studentclass, firsttermCgpa, secondtermCgpa,mathCgpa, thirdtermCgpa, bangla1Cgpa, bangla2Cgpa, english1Cgpa, english2Cgpa, religionCgpa,gsCgpa, Failcount1}
          fetch('http://localhost:5000/resultinsert',{
            method: 'POST',
            headers:{
              'content-type':'application/json'
            },
            body: JSON.stringify(newresult)
          })
          .then(res => res.json())
          .then(data => {
            if(data.insertedId){
              Swal.fire(
                'Result Added Successfully',
                '',
                'success'
              )
              e.target.reset()
              console.log(data)
            }
          })
      
    }
    return (
        <Form onSubmit={ResultSubmitHandler} className="p-3 addresultform">
          <h4 className="fw-bold text-primary text-center my-4">Add Student Result</h4>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
              <Form.Label className="fw-bold fs-6">Student Name</Form.Label>
              <Form.Control name="studentname" onBlur={OnblurHandler} placeholder="Student-Name"/>
            </Form.Group>
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label  className="fw-bold fs-6">Roll No</Form.Label>
            <Form.Control name="studentroll" onBlur={OnblurHandler} placeholder="student-Roll"/>
          </Form.Group>
        </Row>
        <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridState">
          <Form.Label className="fw-bold fs-6">Class</Form.Label>
          <Form.Select onBlur={OnblurHandler} name="class" defaultValue="Choose Class">
            <option>Class-One</option>
            <option>Class-Two</option>
            <option>Class-Three</option>
            <option>Class-Four</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label className="fw-bold fs-6">Section</Form.Label>
          <Form.Select onBlur={OnblurHandler} name="section" defaultValue="Choose Section">
            <option>Section-A</option>
            <option>Section-B</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label className="fw-bold fs-6">Term</Form.Label>
          <Form.Select onBlur={OnblurHandler} name="term" defaultValue="Choose Term">
            <option>First-Term</option>
            <option>Second-Term</option>
            <option>Third-Term</option>
          </Form.Select>
        </Form.Group>
      </Row>

      <Row className="mb-3 ">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label className="fw-bold fs-6">Bangla First</Form.Label>
            <Form.Control name="bangla1" type="text" onBlur={OnblurHandler} placeholder="Bangla First" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridAddress1">
          <Form.Label className="fw-bold fs-6">Mid term</Form.Label>
          <Form.Control name="bangla1mid" onBlur={OnblurHandler} placeholder="Mid-term" />
        </Form.Group>

        <Form.Group as={Col}  controlId="formGridAddress1">
          <Form.Label className="fw-bold fs-6">Final Exam</Form.Label>
          <Form.Control name="bangla1final" onBlur={OnblurHandler} placeholder="Final-Exam" />
        </Form.Group>

        <Form.Group as={Col}  controlId="formGridAddress1">
          <Form.Label className="fw-bold fs-6">Total Marks</Form.Label>
          <Form.Control name="bangla1total" onBlur={OnblurHandler} placeholder="Total Marks" />
        </Form.Group>
      </Row>

      <Row className="mb-3 ">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label className="fw-bold fs-6">Bangla Second</Form.Label>
            <Form.Control name="bangla2" type="text" onBlur={OnblurHandler} placeholder="Bangla Second" />
          </Form.Group>
      
          <Form.Group as={Col} controlId="formGridAddress1">
          <Form.Label className="fw-bold fs-6">Mid term</Form.Label>
          <Form.Control name="bangla2mid" onBlur={OnblurHandler} placeholder="Mid-term" />
        </Form.Group>

        <Form.Group as={Col}  controlId="formGridAddress1">
          <Form.Label className="fw-bold fs-6">Final Exam</Form.Label>
          <Form.Control name="bangla2final" onBlur={OnblurHandler} placeholder="Final-Exam" />
        </Form.Group>

        <Form.Group as={Col}  controlId="formGridAddress1">
          <Form.Label className="fw-bold fs-6">Total Marks</Form.Label>
          <Form.Control name="bangla2total" onBlur={OnblurHandler} placeholder="Total Marks" />
        </Form.Group>
      </Row>

      <Row className="mb-3 ">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label className="fw-bold fs-6">English First</Form.Label>
            <Form.Control name="english1" type="text" onBlur={OnblurHandler} placeholder="English First" />
          </Form.Group>
      
          <Form.Group as={Col} controlId="formGridAddress1">
          <Form.Label className="fw-bold fs-6">Mid term</Form.Label>
          <Form.Control name="english1mid" onBlur={OnblurHandler} placeholder="Mid-term" />
        </Form.Group>

        <Form.Group as={Col}  controlId="formGridAddress1">
          <Form.Label className="fw-bold fs-6">Final Exam</Form.Label>
          <Form.Control name="english1final" onBlur={OnblurHandler} placeholder="Final-Exam" />
        </Form.Group>

        <Form.Group as={Col}  controlId="formGridAddress1">
          <Form.Label className="fw-bold fs-6">Total Marks</Form.Label>
          <Form.Control name="english1total" onBlur={OnblurHandler} placeholder="Total Marks" />
        </Form.Group>
      </Row>

      <Row className="mb-3 ">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label className="fw-bold fs-6">English Second</Form.Label>
            <Form.Control name="english2" type="text" onBlur={OnblurHandler} placeholder="English First" />
          </Form.Group>
      
          <Form.Group as={Col} controlId="formGridAddress1">
          <Form.Label className="fw-bold fs-6">Mid term</Form.Label>
          <Form.Control name="english2mid" onBlur={OnblurHandler} placeholder="Mid-term" />
        </Form.Group>

        <Form.Group as={Col}  controlId="formGridAddress1">
          <Form.Label className="fw-bold fs-6">Final Exam</Form.Label>
          <Form.Control name="english2final" onBlur={OnblurHandler} placeholder="Final-Exam" />
        </Form.Group>

        <Form.Group as={Col}  controlId="formGridAddress1">
          <Form.Label className="fw-bold fs-6">Total Marks</Form.Label>
          <Form.Control name="english2total" onBlur={OnblurHandler} placeholder="Total Marks" />
        </Form.Group>
      </Row>

      <Row className="mb-3 ">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label className="fw-bold fs-6">Math</Form.Label>
            <Form.Control name="math" type="text" onBlur={OnblurHandler} placeholder="Math" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridAddress1">
          <Form.Label className="fw-bold fs-6">Mid term</Form.Label>
          <Form.Control  name="mathmid" onBlur={OnblurHandler} placeholder="Mid-term" />
        </Form.Group>

        <Form.Group as={Col}  controlId="formGridAddress1">
          <Form.Label className="fw-bold fs-6">Final Exam</Form.Label>
          <Form.Control  name="mathfinal" onBlur={OnblurHandler} placeholder="Final-Exam" />
        </Form.Group>

        <Form.Group as={Col}  controlId="formGridAddress1">
          <Form.Label className="fw-bold fs-6">Total Marks</Form.Label>
          <Form.Control  name="mathtotal" onBlur={OnblurHandler} placeholder="Total Marks" />
        </Form.Group>
      </Row>

      <Row className="mb-3 ">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label className="fw-bold fs-6">Bangladesh and Global Studies</Form.Label>
            <Form.Control name="gs" type="text" onBlur={OnblurHandler} placeholder="Enter Subject name" />
          </Form.Group>
      
          <Form.Group as={Col} controlId="formGridAddress1">
          <Form.Label className="fw-bold fs-6">Mid term</Form.Label>
          <Form.Control name="gsmid" onBlur={OnblurHandler} placeholder="Mid-term" />
        </Form.Group>

        <Form.Group as={Col}  controlId="formGridAddress1">
          <Form.Label className="fw-bold fs-6">Final Exam</Form.Label>
          <Form.Control name="gsfinal" onBlur={OnblurHandler} placeholder="Final-Exam" />
        </Form.Group>

        <Form.Group as={Col}  controlId="formGridAddress1">
          <Form.Label className="fw-bold fs-6">Total Marks</Form.Label>
          <Form.Control name="gstotal" onBlur={OnblurHandler} placeholder="Total Marks" />
        </Form.Group>
      </Row>

      <Row className="mb-3 ">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label className="fw-bold fs-6">Religion</Form.Label>
            <Form.Control name="religion" type="text" onBlur={OnblurHandler} placeholder="Enter Subject name" />
          </Form.Group>
      
          <Form.Group as={Col} controlId="formGridAddress1">
          <Form.Label className="fw-bold fs-6">Mid term</Form.Label>
          <Form.Control name="religionmid" onBlur={OnblurHandler} placeholder="Mid-term" />
        </Form.Group>

        <Form.Group as={Col}  controlId="formGridAddress1">
          <Form.Label className="fw-bold fs-6">Final Exam</Form.Label>
          <Form.Control name="religionfinal" onBlur={OnblurHandler} placeholder="Final-Exam" />
        </Form.Group>

        <Form.Group as={Col}  controlId="formGridAddress1">
          <Form.Label className="fw-bold fs-6">Total Marks</Form.Label>
          <Form.Control name="religiontotal" onBlur={OnblurHandler} placeholder="Total Marks" />
        </Form.Group>
      </Row>

      <Button className="w-50 text-warning" variant="dark" type="submit">
        Submit
      </Button>
        </Form>
    );
};

export default Addresultforonetofour;