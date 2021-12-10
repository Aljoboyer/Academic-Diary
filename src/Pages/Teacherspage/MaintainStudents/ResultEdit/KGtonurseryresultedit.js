import React, { useState } from 'react';
import { useEffect } from 'react';
import {Button, Col, Form, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Dashboardnav from '../../Maintainance/Dashboardnav';
import './resultedit.css'
const KGtonurseryresultedit = () => {
    const {id} = useParams();
   
    const [result, setResult] = useState({})
    useEffect(() => {
      fetch(`http://localhost:5000/resultedit/${id}`)
      .then(res => res.json())
      .then(data => setResult(data))
    },[id])


  const OnblurHandler = e => {
      const fieldname = e.target.name;
      const fieldvalue = e.target.value;

      const newdata = {...result};
      newdata[fieldname] = fieldvalue;
      setResult(newdata)
  }

  if(result.class === 'KG' || result.class === 'Nursery')
  {
     
       if(parseInt(result.banglatotal) >= 33 && parseInt(result.banglatotal) <= 39)
      {
               result.banglaCgpa = 1.0
      }
       if(parseInt(result.banglatotal) >= 40 && parseInt(result.banglatotal) <= 49)
      {
               result.banglaCgpa = 2.0
      }
       if(parseInt(result.banglatotal) >= 50 && parseInt(result.banglatotal) <= 59)
      {
               result.banglaCgpa = 3.00
      }
       if(parseInt(result.banglatotal) >= 60 && parseInt(result.banglatotal) <= 69)
      {
               result.banglaCgpa = 3.50
      }
       if(parseInt(result.banglatotal) >= 70 && parseInt(result.banglatotal) <= 79)
      {
               result.banglaCgpa = 4.00
      }
       if(parseInt(result.banglatotal) >= 80 && parseInt(result.banglatotal) <= 100)
      {
               result.banglaCgpa = 5.00
      }

    
      if(parseInt(result.englishtotal) >= 33 && parseInt(result.englishtotal) <= 39)
      {
          result.englishCgpa = 1.0
      }
      if(parseInt(result.englishtotal) >= 40 && parseInt(result.englishtotal) <= 49)
      {
          result.englishCgpa = 2.0
      }
      if(parseInt(result.englishtotal) >= 50 && parseInt(result.englishtotal) <= 59)
      {
          result.englishCgpa = 3.00
      }
      if(parseInt(result.englishtotal) >= 60 && parseInt(result.englishtotal) <= 69)
      {
          result.englishCgpa = 3.50
      }
      if(parseInt(result.englishtotal) >= 70 && parseInt(result.englishtotal) <= 79)
      {
          result.englishCgpa = 4.00
      }
      if(parseInt(result.englishtotal) >= 80 && parseInt(result.englishtotal) <= 100)
      {
          result.englishCgpa = 5.00
      }

    
      if(parseInt(result.mathtotal) >= 33 && parseInt(result.mathtotal) <= 39)
      {
          result.mathCgpa = 1.0
      }
      if(parseInt(result.mathtotal) >= 40 && parseInt(result.mathtotal) <= 49)
      {
          result.mathCgpa = 2.0
      }
      if(parseInt(result.mathtotal) >= 50 && parseInt(result.mathtotal) <= 59)
      {
          result.mathCgpa = 3.00
      }
      if(parseInt(result.mathtotal) >= 60 && parseInt(result.mathtotal) <= 69)
      {
          result.mathCgpa = 3.50
      }
      if(parseInt(result.mathtotal) >= 70 && parseInt(result.mathtotal) <= 79)
      {
          result.mathCgpa = 4.00
      }
      if(parseInt(result.mathtotal) >= 80 && parseInt(result.mathtotal) <= 100)
      {
          result.mathCgpa = 5.00
      }


      if(parseInt(result.drawtotal) >= 33 && parseInt(result.drawtotal) <= 39)
      {
          result.drawCgpa = 1.0
      }
      if(parseInt(result.drawtotal) >= 40 && parseInt(result.drawtotal) <= 49)
      {
          result.drawCgpa = 2.0
      }
      if(parseInt(result.drawtotal) >= 50 && parseInt(result.drawtotal) <= 59)
      {
          result.drawCgpa = 3.00
      }
      if(parseInt(result.drawtotal) >= 60 && parseInt(result.drawtotal) <= 69)
      {
          result.drawCgpa = 3.50
      }
      if(parseInt(result.drawtotal) >= 70 && parseInt(result.drawtotal) <= 79)
      {
          result.drawCgpa = 4.00
      }
      if(parseInt(result.drawtotal) >= 80 && parseInt(result.drawtotal) <= 100)
      {
          result.drawCgpa = 5.00
      }
  }

  //---------- Class KG to Nursery-----------//
  if(result.term === 'First-Term')
  {
    result.firsttermCgpa = parseFloat((result.banglaCgpa + result.englishCgpa + result.mathCgpa + result.drawCgpa) / 4).toFixed(2)
  }
  if(result.term === 'Second-Term')
  {
    result.secondtermCgpa = parseFloat((result.banglaCgpa + result.englishCgpa + result.mathCgpa + result.drawCgpa) / 4).toFixed(2)
  }
  if(result.term === 'Third-Term')
  {
    result.thirdtermCgpa = parseFloat((result.banglaCgpa + result.englishCgpa + result.mathCgpa + result.drawCgpa) / 4).toFixed(2)
  }

  let  Failcount = 0;

  const ResultSubmitHandler = e => {
    e.preventDefault()
    if(parseInt(result.banglatotal) < 33)
    {
        result.banglaCgpa = 'Fail';
        Failcount = Failcount + 1
    }
    if(parseInt(result.englishtotal) < 33)
    {
        result.englishCgpa = 'Fail';
        Failcount = Failcount + 1
    }
    if(parseInt(result.mathtotal) < 33)
    {
        result.mathCgpa = 'Fail';
        Failcount = Failcount + 1
    }
    if(parseInt(result.drawtotal) < 33)
    {
        result.drawCgpa = 'Fail';
        Failcount = Failcount + 1
    }

    result.Failcount = Failcount
    delete result['_id'];
    fetch(`http://localhost:5000/postingeditresult?id=${id}`, {
      method: 'PUT',
      headers: {
        'content-type':'application/json'
      },
      body: JSON.stringify(result)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      alert('Inserted')
    })
  }
    return (
      <div className="container-fluid">
        <Dashboardnav></Dashboardnav>
        <Form onSubmit={ResultSubmitHandler} className="p-3 addresultform">
      <h4 className="fw-bold text-primary text-center my-4">Edit Student Result</h4>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCity">
                <Form.Label className="fw-bold fs-6">Student Name</Form.Label>
                <Form.Control name="studentname" onChange={OnblurHandler} value={result.studentname}/>
              </Form.Group>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label  className="fw-bold fs-6">Roll No</Form.Label>
              <Form.Control name="studentroll" onChange={OnblurHandler} value={result.studentroll}/>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label className="fw-bold fs-6">Class</Form.Label>
              <Form.Control name="class" type="text" onChange={OnblurHandler}
              value={result.class} />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label className="fw-bold fs-6">Section</Form.Label>
              <Form.Control name="section" type="text" onChange={OnblurHandler}
              value={result.section} />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label className="fw-bold fs-6">Term</Form.Label>
              <Form.Control name="term" type="text" onChange={OnblurHandler}
              value={result.term} />
            </Form.Group>

          </Row>

        <Row className="mb-3 ">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label className="fw-bold fs-6">Bangla</Form.Label>
              <Form.Control name="bangla" type="text" onChange={OnblurHandler} value={result.bangla} />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridAddress1">
            <Form.Label className="fw-bold fs-6">Mid term</Form.Label>
            <Form.Control name="banglamid" onChange={OnblurHandler} value={result.banglamid} />
          </Form.Group>

          <Form.Group as={Col}  controlId="formGridAddress1">
            <Form.Label className="fw-bold fs-6">Final Exam</Form.Label>
            <Form.Control name="banglafinal" onChange={OnblurHandler} value={result.banglafinal} />
          </Form.Group>

          <Form.Group as={Col}  controlId="formGridAddress1">
            <Form.Label className="fw-bold fs-6">Total Marks</Form.Label>
            <Form.Control name="banglatotal" onChange={OnblurHandler} value={result.banglatotal} />
          </Form.Group>
        </Row>

        <Row className="mb-3 ">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label className="fw-bold fs-6">English </Form.Label>
              <Form.Control name="english" type="text" onChange={OnblurHandler} value={result.english} />
            </Form.Group>
        
            <Form.Group as={Col} controlId="formGridAddress1">
            <Form.Label className="fw-bold fs-6">Mid term</Form.Label>
            <Form.Control name="englishmid" onChange={OnblurHandler} value={result.englishmid} />
          </Form.Group>

          <Form.Group as={Col}  controlId="formGridAddress1">
            <Form.Label className="fw-bold fs-6">Final Exam</Form.Label>
            <Form.Control name="englishfinal" onChange={OnblurHandler} value={result.englishfinal}  />
          </Form.Group>

          <Form.Group as={Col}  controlId="formGridAddress1">
            <Form.Label className="fw-bold fs-6">Total Marks</Form.Label>
            <Form.Control name="englishtotal" onChange={OnblurHandler} value={result.englishtotal} />
          </Form.Group>
        </Row>

        <Row className="mb-3 ">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label className="fw-bold fs-6">Math</Form.Label>
              <Form.Control name="math" type="text" onChange={OnblurHandler} value={result.math} />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridAddress1">
            <Form.Label className="fw-bold fs-6">Mid term</Form.Label>
            <Form.Control  name="mathmid" onChange={OnblurHandler} value={result.mathmid} />
          </Form.Group>

          <Form.Group as={Col}  controlId="formGridAddress1">
            <Form.Label className="fw-bold fs-6">Final Exam</Form.Label>
            <Form.Control  name="mathfinal" onChange={OnblurHandler}  value={result.mathfinal}/>
          </Form.Group>

          <Form.Group as={Col}  controlId="formGridAddress1">
            <Form.Label className="fw-bold fs-6">Total Marks</Form.Label>
            <Form.Control  name="mathtotal" onChange={OnblurHandler}  value={result.mathtotal} />
          </Form.Group>
        </Row>

        <Row className="mb-3 ">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label className="fw-bold fs-6">Drawing</Form.Label>
              <Form.Control name="draw" type="text" onChange={OnblurHandler}  value={result.draw}/>
            </Form.Group>
        
            <Form.Group as={Col} controlId="formGridAddress1">
            <Form.Label className="fw-bold fs-6">Mid term</Form.Label>
            <Form.Control name="drawmid" onChange={OnblurHandler} value={result.drawmid} />
          </Form.Group>

          <Form.Group as={Col}  controlId="formGridAddress1">
            <Form.Label className="fw-bold fs-6">Final Exam</Form.Label>
            <Form.Control name="drawfinal" onChange={OnblurHandler} value={result.drawfinal}  />
          </Form.Group>

          <Form.Group as={Col}  controlId="formGridAddress1">
            <Form.Label className="fw-bold fs-6">Total Marks</Form.Label>
            <Form.Control name="drawtotal" onChange={OnblurHandler}  value={result.drawtotal}/>
          </Form.Group>
        </Row>
  
        <Button className="w-50 text-warning" variant="dark" type="submit">
          Submit
        </Button>
         </Form>
      </div>
    );
};

export default KGtonurseryresultedit;