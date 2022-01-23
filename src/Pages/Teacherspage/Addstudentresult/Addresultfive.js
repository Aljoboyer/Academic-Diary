import React, { useState } from 'react';
import {Button, Col, Form, Row } from 'react-bootstrap';
import Swal from 'sweetalert2';
import useAuth from '../../../Context/useAuth';
const Addresultfive = () => {
    const {user} = useAuth()
    const [result, setResult] = useState({})

    const OnblurHandler = e => {
        const fieldname = e.target.name;
        const fieldvalue = e.target.value;
  
        const newdata = {...result};
        newdata[fieldname] = fieldvalue;
        setResult(newdata)
    }
    let fivebanglaCgpa;
    let fiveenglishCgpa;
    let fivemathCgpa;
    let fivegsCgpa;
    let scienceCgpa;
    let religionCgpa;
    let Failcount3 = 0;
    let firsttermCgpa = 0;
    let secondtermCgpa = 0;
    let thirdtermCgpa = 0;

    if(result.class === 'Class-Five') {

      if(parseInt(result.fivebanglatotal) < 33)
      {
          fivebanglaCgpa = 'Fail';
          Failcount3 = Failcount3 + 1
      }
       if(parseInt(result.fivebanglatotal) >= 33 && parseInt(result.fivebanglatotal) <= 39)
      {
          fivebanglaCgpa = 1.0
      }
       if(parseInt(result.fivebanglatotal) >= 40 && parseInt(result.fivebanglatotal) <= 49)
      {
          fivebanglaCgpa = 2.0
      }
       if(parseInt(result.fivebanglatotal) >= 50 && parseInt(result.fivebanglatotal) <= 59)
      {
          fivebanglaCgpa = 3.00
      }
       if(parseInt(result.fivebanglatotal) >= 60 && parseInt(result.fivebanglatotal) <= 69)
      {
          fivebanglaCgpa = 3.50
      }
       if(parseInt(result.fivebanglatotal) >= 70 && parseInt(result.fivebanglatotal) <= 79)
      {
          fivebanglaCgpa = 4.00
      }
      if(parseInt(result.fivebanglatotal) >= 80 && parseInt(result.fivebanglatotal) <= 100)
      {
          fivebanglaCgpa = 5.00
      }



      if(parseInt(result.fiveenglishtotal) < 33)
      {
          fiveenglishCgpa = 'Fail';
          Failcount3 = Failcount3 + 1
      }
      if(parseInt(result.fiveenglishtotal) >= 33 && parseInt(result.fiveenglishtotal) <= 39)
      {
          fiveenglishCgpa = 1.0
      }
      if(parseInt(result.fiveenglishtotal) >= 40 && parseInt(result.fiveenglishtotal) <= 49)
      {
          fiveenglishCgpa = 2.0
      }
      if(parseInt(result.fiveenglishtotal) >= 50 && parseInt(result.fiveenglishtotal) <= 59)
      {
          fiveenglishCgpa = 3.00
      }
      if(parseInt(result.fiveenglishtotal) >= 60 && parseInt(result.fiveenglishtotal) <= 69)
      {
          fiveenglishCgpa = 3.50
      }
      if(parseInt(result.fiveenglishtotal) >= 70 && parseInt(result.fiveenglishtotal) <= 79)
      {
          fiveenglishCgpa = 4.00
      }
      if(parseInt(result.fiveenglishtotal) >= 80 && parseInt(result.fiveenglishtotal) <= 100)
      {
          fiveenglishCgpa = 5.00
      }


      if(parseInt(result.fivemathtotal) < 33)
      {
          fivemathCgpa = 'Fail';
          Failcount3 = Failcount3 + 1
      }
      if(parseInt(result.fivemathtotal) >= 33 && parseInt(result.fivemathtotal) <= 39)
      {
          fivemathCgpa = 1.0
      }
      if(parseInt(result.fivemathtotal) >= 40 && parseInt(result.fivemathtotal) <= 49)
      {
          fivemathCgpa = 2.0
      }
      if(parseInt(result.fivemathtotal) >= 50 && parseInt(result.fivemathtotal) <= 59)
      {
          fivemathCgpa = 3.00
      }
      if(parseInt(result.fivemathtotal) >= 60 && parseInt(result.fivemathtotal) <= 69)
      {
          
          fivemathCgpa = 3.50
      }
      if(parseInt(result.fivemathtotal) >= 70 && parseInt(result.fivemathtotal) <= 79)
      {
          fivemathCgpa = 4.00
      }
      if(parseInt(result.fivemathtotal) >= 80 && parseInt(result.fivemathtotal) <= 100)
      {
          fivemathCgpa = 5.00
      }

      if(parseInt(result.gstotal) < 33)
      {
          fivegsCgpa = 'Fail';
          Failcount3 = Failcount3 + 1
      }
      if(parseInt(result.gstotal) >= 33 && parseInt(result.gstotal) <= 39)
      {
          fivegsCgpa = 1.0
      }
      if(parseInt(result.gstotal) >= 40 && parseInt(result.gstotal) <= 49)
      {
          fivegsCgpa = 2.0
      }
      if(parseInt(result.gstotal) >= 50 && parseInt(result.gstotal) <= 59)
      {
          fivegsCgpa = 3.00
      }
      if(parseInt(result.gstotal) >= 60 && parseInt(result.gstotal) <= 69)
      {
          fivegsCgpa = 3.50
      }
      if(parseInt(result.gstotal) >= 70 && parseInt(result.gstotal) <= 79)
      {
          fivegsCgpa = 4.00
      }
      if(parseInt(result.gstotal) >= 80 && parseInt(result.gstotal) <= 100)
      {
          fivegsCgpa = 5.00
      }

      if(parseInt(result.sciencetotal) < 33)
      {
          scienceCgpa = 'Fail';
          Failcount3 = Failcount3 + 1
      }
      if(parseInt(result.sciencetotal) >= 33 && parseInt(result.sciencetotal) <= 39)
      {
          scienceCgpa = 1.0
      }
      if(parseInt(result.sciencetotal) >= 40 && parseInt(result.sciencetotal) <= 49)
      {
          scienceCgpa = 2.0
      }
      if(parseInt(result.sciencetotal) >= 50 && parseInt(result.sciencetotal) <= 59)
      {
          scienceCgpa = 3.00
      }
      if(parseInt(result.sciencetotal) >= 60 && parseInt(result.sciencetotal) <= 69)
      {
          scienceCgpa = 3.50
      }
      if(parseInt(result.sciencetotal) >= 70 && parseInt(result.sciencetotal) <= 79)
      {
          scienceCgpa = 4.00
      }
      if(parseInt(result.sciencetotal) >= 80 && parseInt(result.sciencetotal) <= 100)
      {
          scienceCgpa = 5.00
      }


      
      if(parseInt(result.religiontotal) < 33)
      {
          religionCgpa = 'Fail';
          Failcount3 = Failcount3 + 1
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
    firsttermCgpa = parseFloat((fivebanglaCgpa + fiveenglishCgpa + fivemathCgpa + fivegsCgpa + religionCgpa + scienceCgpa) / 7).toFixed(2)
  }
  if(result.term === 'Second-Term')
  {
    secondtermCgpa =  parseFloat((fivebanglaCgpa + fiveenglishCgpa + fivemathCgpa + fivegsCgpa + religionCgpa + scienceCgpa) / 7).toFixed(2)
  }
  if(result.term === 'Third-Term')
  {
    thirdtermCgpa =  parseFloat((fivebanglaCgpa + fiveenglishCgpa + fivemathCgpa + fivegsCgpa + religionCgpa + scienceCgpa) / 7).toFixed(2)
  }
    const ResultSubmitHandler = e => {
        e.preventDefault()
          const newresult = {...result, studentname: result.studentname, studentclass: result.studentclass,  fivebanglaCgpa,fiveenglishCgpa , fivemathCgpa , fivegsCgpa , religionCgpa , scienceCgpa, firsttermCgpa, secondtermCgpa,thirdtermCgpa}
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
            <option>Class-Five</option>
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
            <Form.Control name="fivebangla" type="text" onBlur={OnblurHandler} placeholder="Bangla First" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridAddress1">
          <Form.Label className="fw-bold fs-6">Mid term</Form.Label>
          <Form.Control name="fivebanglamid" onBlur={OnblurHandler} placeholder="Mid-term" />
        </Form.Group>

        <Form.Group as={Col}  controlId="formGridAddress1">
          <Form.Label className="fw-bold fs-6">Final Exam</Form.Label>
          <Form.Control name="fivebanglafinal" onBlur={OnblurHandler} placeholder="Final-Exam" />
        </Form.Group>

        <Form.Group as={Col}  controlId="formGridAddress1">
          <Form.Label className="fw-bold fs-6">Total Marks</Form.Label>
          <Form.Control name="fivebanglatotal" onBlur={OnblurHandler} placeholder="Total Marks" />
        </Form.Group>
      </Row>


      <Row className="mb-3 ">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label className="fw-bold fs-6">English</Form.Label>
            <Form.Control name="fiveenglish" type="text" onBlur={OnblurHandler} placeholder="English First" />
          </Form.Group>
      
          <Form.Group as={Col} controlId="formGridAddress1">
          <Form.Label className="fw-bold fs-6">Mid term</Form.Label>
          <Form.Control name="fiveenglishmid" onBlur={OnblurHandler} placeholder="Mid-term" />
        </Form.Group>

        <Form.Group as={Col}  controlId="formGridAddress1">
          <Form.Label className="fw-bold fs-6">Final Exam</Form.Label>
          <Form.Control name="fiveenglishfinal" onBlur={OnblurHandler} placeholder="Final-Exam" />
        </Form.Group>

        <Form.Group as={Col}  controlId="formGridAddress1">
          <Form.Label className="fw-bold fs-6">Total Marks</Form.Label>
          <Form.Control name="fiveenglishtotal" onBlur={OnblurHandler} placeholder="Total Marks" />
        </Form.Group>
      </Row>

      <Row className="mb-3 ">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label className="fw-bold fs-6">Math</Form.Label>
            <Form.Control name="fivemath" type="text" onBlur={OnblurHandler} placeholder="fiveMath" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridAddress1">
          <Form.Label className="fw-bold fs-6">Mid term</Form.Label>
          <Form.Control  name="fivemathmid" onBlur={OnblurHandler} placeholder="Mid-term" />
        </Form.Group>

        <Form.Group as={Col}  controlId="formGridAddress1">
          <Form.Label className="fw-bold fs-6">Final Exam</Form.Label>
          <Form.Control  name="fivemathfinal" onBlur={OnblurHandler} placeholder="Final-Exam" />
        </Form.Group>

        <Form.Group as={Col}  controlId="formGridAddress1">
          <Form.Label className="fw-bold fs-6">Total Marks</Form.Label>
          <Form.Control  name="fivemathtotal" onBlur={OnblurHandler} placeholder="Total Marks" />
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
            <Form.Label className="fw-bold fs-6">Elementary Science</Form.Label>
            <Form.Control name="science" type="text" onBlur={OnblurHandler} placeholder="Enter Subject name" />
          </Form.Group>
      
          <Form.Group as={Col} controlId="formGridAddress1">
          <Form.Label className="fw-bold fs-6">Mid term</Form.Label>
          <Form.Control name="sciencenmid" onBlur={OnblurHandler} placeholder="Mid-term" />
        </Form.Group>

        <Form.Group as={Col}  controlId="formGridAddress1">
          <Form.Label className="fw-bold fs-6">Final Exam</Form.Label>
          <Form.Control name="sciencefinal" onBlur={OnblurHandler} placeholder="Final-Exam" />
        </Form.Group>

        <Form.Group as={Col}  controlId="formGridAddress1">
          <Form.Label className="fw-bold fs-6">Total Marks</Form.Label>
          <Form.Control name="sciencetotal" onBlur={OnblurHandler} placeholder="Total Marks" />
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

export default Addresultfive;