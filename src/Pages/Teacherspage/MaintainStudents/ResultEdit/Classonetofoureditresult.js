import React, { useEffect, useState } from 'react';
import { Col, Form , Button, Row} from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import useAuth from '../../../../Context/useAuth';
import Principalnavbar from '../../../Principalpages/Principalnavbar/Principalnavbar';
import Dashboardnav from '../../Maintainance/Dashboardnav';

const Classonetofoureditresult = () => {
    const {id} = useParams();
    const [result, setResult] = useState({});
    const {user}  = useAuth()

    const OnblurHandler = e => {
        const fieldname = e.target.name;
        const fieldvalue = e.target.value;
  
        const newdata = {...result};
        newdata[fieldname] = fieldvalue;
        setResult(newdata)
    }

    useEffect(() => {
      fetch(`http://localhost:5000/resultedit/${id}`)
      .then(res => res.json())
      .then(data => setResult(data))
    },[id])


    if(result.class === 'Class-One' || result.class === 'Class-Two' || result.class === 'Class-Three' || result.class === 'Class-Four') {

  
         if(parseInt(result.bangla1total) >= 33 && parseInt(result.bangla1total) <= 39)
        {
             result.bangla1Cgpa = 1.0
        }
         if(parseInt(result.bangla1total) >= 40 && parseInt(result.bangla1total) <= 49)
        {
             result.bangla1Cgpa = 2.0
        }
         if(parseInt(result.bangla1total) >= 50 && parseInt(result.bangla1total) <= 59)
        {
             result.bangla1Cgpa = 3.00
        }
         if(parseInt(result.bangla1total) >= 60 && parseInt(result.bangla1total) <= 69)
        {
             result.bangla1Cgpa = 3.50
        }
         if(parseInt(result.bangla1total) >= 70 && parseInt(result.bangla1total) <= 79)
        {
             result.bangla1Cgpa = 4.00
        }
        if(parseInt(result.bangla1total) >= 80 && parseInt(result.bangla1total) <= 100)
        {
             result.bangla1Cgpa = 5.00
        }
  
   
        if(parseInt(result.bangla2total) >= 33 && parseInt(result.bangla2total) <= 39)
        {
             result.bangla2Cgpa = 1.0
        }
        if(parseInt(result.bangla2total) >= 40 && parseInt(result.bangla2total) <= 49)
        {
             result.bangla2Cgpa = 2.0
        }
        if(parseInt(result.bangla2total) >= 50 && parseInt(result.bangla2total) <= 59)
        {
             result.bangla2Cgpa = 3.00
        }
        if(parseInt(result.bangla2total) >= 60 && parseInt(result.bangla2total) <= 69)
        {
             result.bangla2Cgpa = 3.50
        }
        if(parseInt(result.bangla2total) >= 70 && parseInt(result.bangla2total) <= 79)
        {
             result.bangla2Cgpa = 4.00
        }
        if(parseInt(result.bangla2total) >= 80 && parseInt(result.bangla2total) <= 100)
        {
             result.bangla2Cgpa = 5.00
        }
  
      
        if(parseInt(result.english1total) >= 33 && parseInt(result.english1total) <= 39)
        {
             result.english1Cgpa = 1.0
        }
        if(parseInt(result.english1total) >= 40 && parseInt(result.english1total) <= 49)
        {
             result.english1Cgpa = 2.0
        }
        if(parseInt(result.english1total) >= 50 && parseInt(result.english1total) <= 59)
        {
             result.english1Cgpa = 3.00
        }
        if(parseInt(result.english1total) >= 60 && parseInt(result.english1total) <= 69)
        {
             result.english1Cgpa = 3.50
        }
        if(parseInt(result.english1total) >= 70 && parseInt(result.english1total) <= 79)
        {
             result.english1Cgpa = 4.00
        }
        if(parseInt(result.english1total) >= 80 && parseInt(result.english1total) <= 100)
        {
             result.english1Cgpa = 5.00
        }
  
  

        if(parseInt(result.english2total) >= 33 && parseInt(result.english2total) <= 39)
        {
             result.english2Cgpa = 1.0
        }
        if(parseInt(result.english2total) >= 40 && parseInt(result.english2total) <= 49)
        {
             result.english2Cgpa = 2.0
        }
        if(parseInt(result.english2total) >= 50 && parseInt(result.english2total) <= 59)
        {
             result.english2Cgpa = 3.00
        }
        if(parseInt(result.english2total) >= 60  && parseInt(result.english2total) <= 69)
        {
         
             result.english2Cgpa = 3.50
        }
        if(parseInt(result.english2total) >= 70 && parseInt(result.english2total) <= 79)
        {
             result.english2Cgpa = 4.00
        }
        if(parseInt(result.english2total) >= 80 && parseInt(result.english2total) <= 100)
        {
             result.english2Cgpa = 5.00
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
  

        if(parseInt(result.gstotal) >= 33 && parseInt(result.gstotal) <= 39)
        {
            result.gsCgpa = 1.0
        }
        if(parseInt(result.gstotal) >= 40 && parseInt(result.gstotal) <= 49)
        {
            result.gsCgpa = 2.0
        }
        if(parseInt(result.gstotal) >= 50 && parseInt(result.gstotal) <= 59)
        {
            result.gsCgpa = 3.00
        }
        if(parseInt(result.gstotal) >= 60 && parseInt(result.gstotal) <= 69)
        {
            result.gsCgpa = 3.50
        }
        if(parseInt(result.gstotal) >= 70 && parseInt(result.gstotal) <= 79)
        {
            result.gsCgpa = 4.00
        }
        if(parseInt(result.gstotal) >= 80 && parseInt(result.gstotal) <= 100)
        {
            result.gsCgpa = 5.00
        }
  
          
        if(parseInt(result.religiontotal) >= 33 && parseInt(result.religiontotal) <= 39)
        {
            result.religionCgpa = 1.0
        }
        if(parseInt(result.religiontotal) >= 40 && parseInt(result.religiontotal) <= 49)
        {
            result.religionCgpa = 2.0
        }
        if(parseInt(result.religiontotal) >= 50 && parseInt(result.religiontotal) <= 59)
        {
            result.religionCgpa = 3.00
        }
        if(parseInt(result.religiontotal) >= 60 && parseInt(result.religiontotal) <= 69)
        {
            result.religionCgpa = 3.50
        }
        if(parseInt(result.religiontotal) >= 70 && parseInt(result.religiontotal) <= 79)
        {
            result.religionCgpa = 4.00
        }
        if(parseInt(result.religiontotal) >= 80 && parseInt(result.religiontotal) <= 100)
        {
            result.religionCgpa = 5.00
        }
    }


    
    if(result.term === 'First-Term')
    {
      result.firsttermCgpa = parseFloat(( result.bangla1Cgpa +  result.bangla2Cgpa +  result.english1Cgpa +  result.english2Cgpa +  result.mathCgpa + result.gsCgpa + result.religionCgpa) / 7).toFixed(2)
    }
    if(result.term === 'Second-Term')
    {
        result.secondtermCgpa = parseFloat(( result.bangla1Cgpa +  result.bangla2Cgpa +  result.english1Cgpa +  result.english2Cgpa +  result.mathCgpa + result.gsCgpa + result.religionCgpa) / 7).toFixed(2)
    }
    if(result.term === 'Third-Term')
    {
        result.thirdtermCgpa = parseFloat(( result.bangla1Cgpa +  result.bangla2Cgpa +  result.english1Cgpa +  result.english2Cgpa +  result.mathCgpa + result.gsCgpa + result.religionCgpa) / 7).toFixed(2)
    }
    let Failcount1 = 0;

    const ResultSubmitHandler = e => {
        e.preventDefault()

        if(parseInt(result.bangla1total) < 33)
        {
             result.bangla1Cgpa = 'Fail';
            Failcount1 = Failcount1 + 1
        }
        if(parseInt(result.bangla2total) < 33)
        {
             result.bangla2Cgpa = 'Fail';
            Failcount1 = Failcount1 + 1
        }
        if(parseInt(result.english1total) < 33)
        {
             result.english1Cgpa = 'Fail';
            Failcount1 = Failcount1 + 1
        }
        if(parseInt(result.english2total) < 33)
        {
             result.english2Cgpa = 'Fail';
            Failcount1 = Failcount1 + 1
        }
        if(parseInt(result.mathtotal) < 33)
        {
             result.mathCgpa = 'Fail';
            Failcount1 = Failcount1 + 1
        }
        if(parseInt(result.gstotal) < 33)
        {
            result.gsCgpa = 'Fail';
            Failcount1 = Failcount1 + 1
        }
        if(parseInt(result.religiontotal) < 33)
        {
            result.religionCgpa = 'Fail';
            Failcount1 = Failcount1 + 1
        }
        result.Failcount1 = Failcount1;
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
             { user.email === 'principal@gmail.com' ? <Principalnavbar></Principalnavbar> : <Dashboardnav></Dashboardnav>}
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
            <Form.Control name="class" type="text" onChange={OnblurHandler} value={result.class} />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label className="fw-bold fs-6">Section</Form.Label>
            <Form.Control name="section" type="text" onChange={OnblurHandler} value={result.section} />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label className="fw-bold fs-6">Term</Form.Label>
            <Form.Control name="term" type="text" onChange={OnblurHandler} value={result.term} />
          </Form.Group>
        </Row>

      <Row className="mb-3 ">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label className="fw-bold fs-6">Bangla First</Form.Label>
            <Form.Control name="bangla1" type="text" onChange={OnblurHandler}  value={result.bangla1} />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridAddress1">
          <Form.Label className="fw-bold fs-6">Mid term</Form.Label>
          <Form.Control name="bangla1mid" onChange={OnblurHandler} value={result.bangla1mid} />
        </Form.Group>

        <Form.Group as={Col}  controlId="formGridAddress1">
          <Form.Label className="fw-bold fs-6">Final Exam</Form.Label>
          <Form.Control name="bangla1final" onChange={OnblurHandler} value={result.bangla1final} />
        </Form.Group>

        <Form.Group as={Col}  controlId="formGridAddress1">
          <Form.Label className="fw-bold fs-6">Total Marks</Form.Label>
          <Form.Control name="bangla1total" onChange={OnblurHandler} value={result.bangla1total}/>
        </Form.Group>
      </Row>

      <Row className="mb-3 ">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label className="fw-bold fs-6">Bangla Second</Form.Label>
            <Form.Control name="bangla2" type="text" onChange={OnblurHandler}  value={result.bangla2} />
          </Form.Group>
      
          <Form.Group as={Col} controlId="formGridAddress1">
          <Form.Label className="fw-bold fs-6">Mid term</Form.Label>
          <Form.Control name="bangla2mid" onChange={OnblurHandler} value={result.bangla2mid} />
        </Form.Group>

        <Form.Group as={Col}  controlId="formGridAddress1">
          <Form.Label className="fw-bold fs-6">Final Exam</Form.Label>
          <Form.Control name="bangla2final" onChange={OnblurHandler} value={result.bangla2final} />
        </Form.Group>

        <Form.Group as={Col}  controlId="formGridAddress1">
          <Form.Label className="fw-bold fs-6">Total Marks</Form.Label>
          <Form.Control name="bangla2total" onChange={OnblurHandler} value={result.bangla2total} />
        </Form.Group>
      </Row>

      <Row className="mb-3 ">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label className="fw-bold fs-6">English First</Form.Label>
            <Form.Control name="english1" type="text" onChange={OnblurHandler} value={result.english1}  />
          </Form.Group>
      
          <Form.Group as={Col} controlId="formGridAddress1">
          <Form.Label className="fw-bold fs-6">Mid term</Form.Label>
          <Form.Control name="english1mid" onChange={OnblurHandler} value={result.english1mid}/>
        </Form.Group>

        <Form.Group as={Col}  controlId="formGridAddress1">
          <Form.Label className="fw-bold fs-6">Final Exam</Form.Label>
          <Form.Control name="english1final" onChange={OnblurHandler}  value={result.english1final} />
        </Form.Group>

        <Form.Group as={Col}  controlId="formGridAddress1">
          <Form.Label className="fw-bold fs-6">Total Marks</Form.Label>
          <Form.Control name="english1total" onChange={OnblurHandler}  value={result.english1total} />
        </Form.Group>
      </Row>

      <Row className="mb-3 ">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label className="fw-bold fs-6">English Second</Form.Label>
            <Form.Control name="english2" type="text" onChange={OnblurHandler} value={result.english2} />
          </Form.Group>
      
          <Form.Group as={Col} controlId="formGridAddress1">
          <Form.Label className="fw-bold fs-6">Mid term</Form.Label>
          <Form.Control name="english2mid" onChange={OnblurHandler} value={result.english2mid} />
        </Form.Group>

        <Form.Group as={Col}  controlId="formGridAddress1">
          <Form.Label className="fw-bold fs-6">Final Exam</Form.Label>
          <Form.Control name="english2final" onChange={OnblurHandler}  value={result.english2final}/>
        </Form.Group>

        <Form.Group as={Col}  controlId="formGridAddress1">
          <Form.Label className="fw-bold fs-6">Total Marks</Form.Label>
          <Form.Control name="english2total" onChange={OnblurHandler} value={result.english2total}/>
        </Form.Group>
      </Row>

      <Row className="mb-3 ">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label className="fw-bold fs-6">Math</Form.Label>
            <Form.Control name="math" type="text" onChange={OnblurHandler} value={result.math} />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridAddress1">
          <Form.Label className="fw-bold fs-6">Mid term</Form.Label>
          <Form.Control  name="mathmid" onChange={OnblurHandler} value={result.mathmid}/>
        </Form.Group>

        <Form.Group as={Col}  controlId="formGridAddress1">
          <Form.Label className="fw-bold fs-6">Final Exam</Form.Label>
          <Form.Control  name="mathfinal" onChange={OnblurHandler} value={result.mathfinal}/>
        </Form.Group>

        <Form.Group as={Col}  controlId="formGridAddress1">
          <Form.Label className="fw-bold fs-6">Total Marks</Form.Label>
          <Form.Control  name="mathtotal" onChange={OnblurHandler} value={result.mathtotal} />
        </Form.Group>
      </Row>

      <Row className="mb-3 ">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label className="fw-bold fs-6">Bangladesh and Global Studies</Form.Label>
            <Form.Control name="gs" type="text" onChange={OnblurHandler} value={result.gs} />
          </Form.Group>
      
          <Form.Group as={Col} controlId="formGridAddress1">
          <Form.Label className="fw-bold fs-6">Mid term</Form.Label>
          <Form.Control name="gsmid" onChange={OnblurHandler} value={result.gsmid} />
        </Form.Group>

        <Form.Group as={Col}  controlId="formGridAddress1">
          <Form.Label className="fw-bold fs-6">Final Exam</Form.Label>
          <Form.Control name="gsfinal" onChange={OnblurHandler} value={result.gsfinal} />
        </Form.Group>

        <Form.Group as={Col}  controlId="formGridAddress1">
          <Form.Label className="fw-bold fs-6">Total Marks</Form.Label>
          <Form.Control name="gstotal" onChange={OnblurHandler} value={result.gstotal} />
        </Form.Group>
      </Row>

      <Row className="mb-3 ">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label className="fw-bold fs-6">Religion</Form.Label>
            <Form.Control name="religion" type="text" onChange={OnblurHandler} value={result.religion} />
          </Form.Group>
      
          <Form.Group as={Col} controlId="formGridAddress1">
          <Form.Label className="fw-bold fs-6">Mid term</Form.Label>
          <Form.Control name="religionmid" onChange={OnblurHandler} value={result.religionmid}  />
        </Form.Group>

        <Form.Group as={Col}  controlId="formGridAddress1">
          <Form.Label className="fw-bold fs-6">Final Exam</Form.Label>
          <Form.Control name="religionfinal" onChange={OnblurHandler} value={result.religionfinal} />
        </Form.Group>

        <Form.Group as={Col}  controlId="formGridAddress1">
          <Form.Label className="fw-bold fs-6">Total Marks</Form.Label>
          <Form.Control name="religiontotal" onChange={OnblurHandler} value={result.religiontotal} />
        </Form.Group>
      </Row>

      <Button className="w-50 text-warning" variant="dark" type="submit">
        Submit
      </Button>
        </Form>
        </div>
    );
};

export default Classonetofoureditresult;