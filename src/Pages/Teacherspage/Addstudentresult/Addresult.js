import React, { useState } from 'react';
import {Button, Col, Form, Row } from 'react-bootstrap';
import useAuth from '../../../Context/useAuth';
const Addresult = () => {
  const {user} = useAuth()
  const [result, setResult] = useState({})

  const OnblurHandler = e => {
      const fieldname = e.target.name;
      const fieldvalue = e.target.value;

      const newdata = {...result};
      newdata[fieldname] = fieldvalue;
      setResult(newdata)
  }

  let banglaCgpa;
  let englishCgpa;
  let mathCgpa;
  let drawCgpa;
  let Failcount = 0;
  let firsttermCgpa = 0;
  let secondtermCgpa = 0;
  let thirdtermCgpa = 0;
 
  if(result.class === 'KG' || result.class === 'Nursery')
  {
      if(parseInt(result.banglatotal) < 33)
          {
              banglaCgpa = 'Fail';
              Failcount = Failcount + 1
          }
      else if(parseInt(result.banglatotal) >= 33 && parseInt(result.banglatotal) <= 39)
      {
               banglaCgpa = 1.0
      }
      else if(parseInt(result.banglatotal) >= 40 && parseInt(result.banglatotal) <= 49)
      {
               banglaCgpa = 2.0
      }
      else if(parseInt(result.banglatotal) >= 50 && parseInt(result.banglatotal) <= 59)
      {
               banglaCgpa = 3.00
      }
      else if(parseInt(result.banglatotal) >= 60 && parseInt(result.banglatotal) <= 69)
      {
               banglaCgpa = 3.50
      }
      else if(parseInt(result.banglatotal) >= 70 && parseInt(result.banglatotal) <= 79)
      {
               banglaCgpa = 4.00
      }
      else if(parseInt(result.banglatotal) >= 80 && parseInt(result.banglatotal) <= 100)
      {
               banglaCgpa = 5.00
      }

      if(parseInt(result.englishtotal) < 33)
      {
          englishCgpa = 'Fail';
          Failcount = Failcount + 1
      }
      if(parseInt(result.englishtotal) >= 33 && parseInt(result.englishtotal) <= 39)
      {
          englishCgpa = 1.0
      }
      if(parseInt(result.englishtotal) >= 40 && parseInt(result.englishtotal) <= 49)
      {
          englishCgpa = 2.0
      }
      if(parseInt(result.englishtotal) >= 50 && parseInt(result.englishtotal) <= 59)
      {
          englishCgpa = 3.00
      }
      if(parseInt(result.englishtotal) >= 60 && parseInt(result.englishtotal) <= 69)
      {
          englishCgpa = 3.50
      }
      if(parseInt(result.englishtotal) >= 70 && parseInt(result.englishtotal) <= 79)
      {
          englishCgpa = 4.00
      }
      if(parseInt(result.englishtotal) >= 80 && parseInt(result.englishtotal) <= 100)
      {
          englishCgpa = 5.00
      }

      if(parseInt(result.mathtotal) < 33)
      {
          mathCgpa = 'Fail';
          Failcount = Failcount + 1
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

      if(parseInt(result.drawtotal) < 33)
      {
          drawCgpa = 'Fail';
          Failcount = Failcount + 1
      }
      if(parseInt(result.drawtotal) >= 33 && parseInt(result.drawtotal) <= 39)
      {
          drawCgpa = 1.0
      }
      if(parseInt(result.drawtotal) >= 40 && parseInt(result.drawtotal) <= 49)
      {
          drawCgpa = 2.0
      }
      if(parseInt(result.drawtotal) >= 50 && parseInt(result.drawtotal) <= 59)
      {
          drawCgpa = 3.00
      }
      if(parseInt(result.drawtotal) >= 60 && parseInt(result.drawtotal) <= 69)
      {
          drawCgpa = 3.50
      }
      if(parseInt(result.drawtotal) >= 70 && parseInt(result.drawtotal) <= 79)
      {
          drawCgpa = 4.00
      }
      if(parseInt(result.drawtotal) >= 80 && parseInt(result.drawtotal) <= 100)
      {
          drawCgpa = 5.00
      }
  }

  //---------- Class KG to Nursery-----------//
  if(result.term === 'First-Term')
  {
    firsttermCgpa = parseFloat((banglaCgpa + englishCgpa + mathCgpa + drawCgpa) / 4).toFixed(2)
  }
  if(result.term === 'Second-Term')
  {
    secondtermCgpa = parseFloat((banglaCgpa + englishCgpa + mathCgpa + drawCgpa) / 4).toFixed(2)
  }
  if(result.term === 'Third-Term')
  {
    thirdtermCgpa = parseFloat((banglaCgpa + englishCgpa + mathCgpa + drawCgpa) / 4).toFixed(2)
  }


  const ResultSubmitHandler = e => {
      const newresult = {...result,email: user.email, banglaCgpa,englishCgpa,mathCgpa,drawCgpa,Failcount, firsttermCgpa, secondtermCgpa, thirdtermCgpa}
 
      e.preventDefault()

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
            alert('result added success')
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
              <option>KG</option>
              <option>Nursery</option>
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
              <Form.Label className="fw-bold fs-6">Bangla</Form.Label>
              <Form.Control name="bangla" type="text" onBlur={OnblurHandler} placeholder="Bangla" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridAddress1">
            <Form.Label className="fw-bold fs-6">Mid term</Form.Label>
            <Form.Control name="banglamid" onBlur={OnblurHandler} placeholder="Mid-term" />
          </Form.Group>

          <Form.Group as={Col}  controlId="formGridAddress1">
            <Form.Label className="fw-bold fs-6">Final Exam</Form.Label>
            <Form.Control name="banglafinal" onBlur={OnblurHandler} placeholder="Final-Exam" />
          </Form.Group>

          <Form.Group as={Col}  controlId="formGridAddress1">
            <Form.Label className="fw-bold fs-6">Total Marks</Form.Label>
            <Form.Control name="banglatotal" onBlur={OnblurHandler} placeholder="Total Marks" />
          </Form.Group>
        </Row>

        <Row className="mb-3 ">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label className="fw-bold fs-6">English </Form.Label>
              <Form.Control name="english" type="text" onBlur={OnblurHandler} placeholder="English" />
            </Form.Group>
        
            <Form.Group as={Col} controlId="formGridAddress1">
            <Form.Label className="fw-bold fs-6">Mid term</Form.Label>
            <Form.Control name="englishmid" onBlur={OnblurHandler} placeholder="Mid-term" />
          </Form.Group>

          <Form.Group as={Col}  controlId="formGridAddress1">
            <Form.Label className="fw-bold fs-6">Final Exam</Form.Label>
            <Form.Control name="englishfinal" onBlur={OnblurHandler} placeholder="Final-Exam" />
          </Form.Group>

          <Form.Group as={Col}  controlId="formGridAddress1">
            <Form.Label className="fw-bold fs-6">Total Marks</Form.Label>
            <Form.Control name="englishtotal" onBlur={OnblurHandler} placeholder="Total Marks" />
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
              <Form.Label className="fw-bold fs-6">Drawing</Form.Label>
              <Form.Control name="gs" type="text" onBlur={OnblurHandler} placeholder="Enter Subject name" />
            </Form.Group>
        
            <Form.Group as={Col} controlId="formGridAddress1">
            <Form.Label className="fw-bold fs-6">Mid term</Form.Label>
            <Form.Control name="drawmid" onBlur={OnblurHandler} placeholder="Mid-term" />
          </Form.Group>

          <Form.Group as={Col}  controlId="formGridAddress1">
            <Form.Label className="fw-bold fs-6">Final Exam</Form.Label>
            <Form.Control name="drawfinal" onBlur={OnblurHandler} placeholder="Final-Exam" />
          </Form.Group>

          <Form.Group as={Col}  controlId="formGridAddress1">
            <Form.Label className="fw-bold fs-6">Total Marks</Form.Label>
            <Form.Control name="drawtotal" onBlur={OnblurHandler} placeholder="Total Marks" />
          </Form.Group>
        </Row>
  
        <Button className="w-50 text-warning" variant="dark" type="submit">
          Submit
        </Button>
         </Form>
    );
};

export default Addresult;