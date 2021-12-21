import React, { useEffect, useState } from 'react';
import { Col, Form, Row , Button} from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import useAuth from '../../../../Context/useAuth';
import Principalnavbar from '../../../Principalpages/Principalnavbar/Principalnavbar';
import Dashboardnav from '../../Maintainance/Dashboardnav';

const Classfiveeditresult = () => {
    const {id} = useParams();
    const [result, setResult] = useState({});
    const {user}  = useAuth()

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
    
    if(result.class === 'Class-Five') {

        
         if(parseInt(result.fivebanglatotal) >= 33 && parseInt(result.fivebanglatotal) <= 39)
        {
            result.fivebanglaCgpa = 1.0
        }
         if(parseInt(result.fivebanglatotal) >= 40 && parseInt(result.fivebanglatotal) <= 49)
        {
            result.fivebanglaCgpa = 2.0
            
        }
         if(parseInt(result.fivebanglatotal) >= 50 && parseInt(result.fivebanglatotal) <= 59)
        {
            result.fivebanglaCgpa = 3.00
        }
         if(parseInt(result.fivebanglatotal) >= 60 && parseInt(result.fivebanglatotal) <= 69)
        {
            result.fivebanglaCgpa = 3.50
        }
         if(parseInt(result.fivebanglatotal) >= 70 && parseInt(result.fivebanglatotal) <= 79)
        {
            result.fivebanglaCgpa = 4.00
        }
        if(parseInt(result.fivebanglatotal) >= 80 && parseInt(result.fivebanglatotal) <= 100)
        {
            result.fivebanglaCgpa = 5.00
        }
  
  
        if(parseInt(result.fiveenglishtotal) >= 33 && parseInt(result.fiveenglishtotal) <= 39)
        {
            result.fiveenglishCgpa = 1.0
        }
        if(parseInt(result.fiveenglishtotal) >= 40 && parseInt(result.fiveenglishtotal) <= 49)
        {
            result.fiveenglishCgpa = 2.0
        }
        if(parseInt(result.fiveenglishtotal) >= 50 && parseInt(result.fiveenglishtotal) <= 59)
        {
            result.fiveenglishCgpa = 3.00
        }
        if(parseInt(result.fiveenglishtotal) >= 60 && parseInt(result.fiveenglishtotal) <= 69)
        {
            result.fiveenglishCgpa = 3.50
        }
        if(parseInt(result.fiveenglishtotal) >= 70 && parseInt(result.fiveenglishtotal) <= 79)
        {
            result.fiveenglishCgpa = 4.00
        }
        if(parseInt(result.fiveenglishtotal) >= 80 && parseInt(result.fiveenglishtotal) <= 100)
        {
            result.fiveenglishCgpa = 5.00
        }
  
  
        if(parseInt(result.fivemathtotal) >= 33 && parseInt(result.fivemathtotal) <= 39)
        {
            result.fivemathCgpa = 1.0
        }
        if(parseInt(result.fivemathtotal) >= 40 && parseInt(result.fivemathtotal) <= 49)
        {
            result.fivemathCgpa = 2.0
        }
        if(parseInt(result.fivemathtotal) >= 50 && parseInt(result.fivemathtotal) <= 59)
        {
            result.fivemathCgpa = 3.00
        }
        if(parseInt(result.fivemathtotal) >= 60 && parseInt(result.fivemathtotal) <= 69)
        {
            
            result.fivemathCgpa = 3.50
        }
        if(parseInt(result.fivemathtotal) >= 70 && parseInt(result.fivemathtotal) <= 79)
        {
            result.fivemathCgpa = 4.00
        }
        if(parseInt(result.fivemathtotal) >= 80 && parseInt(result.fivemathtotal) <= 100)
        {
            result.fivemathCgpa = 5.00
        }
  
        
        if(parseInt(result.gstotal) >= 33 && parseInt(result.gstotal) <= 39)
        {
            result.fivegsCgpa = 1.0
        }
        if(parseInt(result.gstotal) >= 40 && parseInt(result.gstotal) <= 49)
        {
            result.fivegsCgpa = 2.0
        }
        if(parseInt(result.gstotal) >= 50 && parseInt(result.gstotal) <= 59)
        {
            result.fivegsCgpa = 3.00
        }
        if(parseInt(result.gstotal) >= 60 && parseInt(result.gstotal) <= 69)
        {
            result.fivegsCgpa = 3.50
        }
        if(parseInt(result.gstotal) >= 70 && parseInt(result.gstotal) <= 79)
        {
            result.fivegsCgpa = 4.00
        }
        if(parseInt(result.gstotal) >= 80 && parseInt(result.gstotal) <= 100)
        {
            result.fivegsCgpa = 5.00
        }
  

        if(parseInt(result.sciencetotal) >= 33 && parseInt(result.sciencetotal) <= 39)
        {
            result.scienceCgpa = 1.0
        }
        if(parseInt(result.sciencetotal) >= 40 && parseInt(result.sciencetotal) <= 49)
        {
            result.scienceCgpa = 2.0
        }
        if(parseInt(result.sciencetotal) >= 50 && parseInt(result.sciencetotal) <= 59)
        {
            result.scienceCgpa = 3.00
        }
        if(parseInt(result.sciencetotal) >= 60 && parseInt(result.sciencetotal) <= 69)
        {
            result.scienceCgpa = 3.50
        }
        if(parseInt(result.sciencetotal) >= 70 && parseInt(result.sciencetotal) <= 79)
        {
            result.scienceCgpa = 4.00
        }
        if(parseInt(result.sciencetotal) >= 80 && parseInt(result.sciencetotal) <= 100)
        {
            result.scienceCgpa = 5.00
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
      result.firsttermCgpa = parseFloat((result.fivebanglaCgpa + result.fiveenglishCgpa + result.fivemathCgpa + result.fivegsCgpa + result.religionCgpa + result.scienceCgpa) / 7).toFixed(2)
    }
    if(result.term === 'Second-Term')
    {
        result.secondtermCgpa =  parseFloat((result.fivebanglaCgpa + result.fiveenglishCgpa + result.fivemathCgpa + result.fivegsCgpa + result.religionCgpa + result.scienceCgpa) / 7).toFixed(2)
    }
    if(result.term === 'Third-Term')
    {
        result.thirdtermCgpa =  parseFloat((result.fivebanglaCgpa + result.fiveenglishCgpa + result.fivemathCgpa + result.fivegsCgpa + result.religionCgpa + result.scienceCgpa) / 7).toFixed(2)
    }
   
 
  let Failcount3 = 0;
  
  const ResultSubmitHandler = e => {
    e.preventDefault()
    delete result['_id'];
    if(parseInt(result.fivebanglatotal) < 33)
        {
            result.fivebanglaCgpa = 'Fail';
            Failcount3 = Failcount3 + 1
           
    }
    if(parseInt(result.fiveenglishtotal) < 33)
    {
        result.fiveenglishCgpa = 'Fail';
        Failcount3 = Failcount3+ 1;
       
    }
    if(parseInt(result.fivemathtotal) < 33)
    {
        result.fivemathCgpa = 'Fail';
        Failcount3 = Failcount3 + 1
        
    }
    if(parseInt(result.sciencetotal) < 33)
    {
        result.scienceCgpa = 'Fail';
        Failcount3 = Failcount3 + 1
    }
    if(parseInt(result.religiontotal) < 33)
    {
        result.religionCgpa = 'Fail';
        Failcount3 = Failcount3 + 1
    }
    if(parseInt(result.gstotal) < 33)
        {
            result.fivegsCgpa = 'Fail';
            Failcount3 = Failcount3 + 1
    }
    result.Failcount3 = Failcount3;

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

          <Form.Group as={Col} controlId="formGridAddress1">
          <Form.Label className="fw-bold fs-6">Section</Form.Label>
          <Form.Control name="section" onChange={OnblurHandler} value={result.section} />
        </Form.Group>

        <Form.Group as={Col}  controlId="formGridAddress1">
          <Form.Label className="fw-bold fs-6">Term</Form.Label>
          <Form.Control name="term" onChange={OnblurHandler}  value={result.term} />
        </Form.Group>
      </Row>

      <Row className="mb-3 ">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label className="fw-bold fs-6">Bangla</Form.Label>
            <Form.Control name="fivebangla" type="text" onChange={OnblurHandler} value={result.fivebangla} />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridAddress1">
          <Form.Label className="fw-bold fs-6">Mid term</Form.Label>
          <Form.Control name="fivebanglamid" onChange={OnblurHandler} value={result.fivebanglamid} />
        </Form.Group>

        <Form.Group as={Col}  controlId="formGridAddress1">
          <Form.Label className="fw-bold fs-6">Final Exam</Form.Label>
          <Form.Control name="fivebanglafinal" onChange={OnblurHandler} value={result.fivebanglafinal}/>
        </Form.Group>

        <Form.Group as={Col}  controlId="formGridAddress1">
          <Form.Label className="fw-bold fs-6">Total Marks</Form.Label>
          <Form.Control name="fivebanglatotal" onChange={OnblurHandler} value={result.fivebanglatotal} />
        </Form.Group>
      </Row>


      <Row className="mb-3 ">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label className="fw-bold fs-6">English</Form.Label>
            <Form.Control name="fiveenglish" type="text" onChange={OnblurHandler} value={result.fiveenglish} />
          </Form.Group>
      
          <Form.Group as={Col} controlId="formGridAddress1">
          <Form.Label className="fw-bold fs-6">Mid term</Form.Label>
          <Form.Control name="fiveenglishmid" onChange={OnblurHandler} value={result.fiveenglishmid}  />
        </Form.Group>

        <Form.Group as={Col}  controlId="formGridAddress1">
          <Form.Label className="fw-bold fs-6">Final Exam</Form.Label>
          <Form.Control name="fiveenglishfinal" onChange={OnblurHandler} value={result.fiveenglishfinal} />
        </Form.Group>

        <Form.Group as={Col}  controlId="formGridAddress1">
          <Form.Label className="fw-bold fs-6">Total Marks</Form.Label>
          <Form.Control name="fiveenglishtotal" onChange={OnblurHandler} value={result.fiveenglishtotal}  />
        </Form.Group>
      </Row>

      <Row className="mb-3 ">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label className="fw-bold fs-6">Math</Form.Label>
            <Form.Control name="fivemath" type="text" onChange={OnblurHandler} value={result.fivemath}  />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridAddress1">
          <Form.Label className="fw-bold fs-6">Mid term</Form.Label>
          <Form.Control  name="fivemathmid" onChange={OnblurHandler}  value={result.fivemathmid}   />
        </Form.Group>

        <Form.Group as={Col}  controlId="formGridAddress1">
          <Form.Label className="fw-bold fs-6">Final Exam</Form.Label>
          <Form.Control  name="fivemathfinal" onChange={OnblurHandler} value={result.fivemathfinal}  />
        </Form.Group>

        <Form.Group as={Col}  controlId="formGridAddress1">
          <Form.Label className="fw-bold fs-6">Total Marks</Form.Label>
          <Form.Control  name="fivemathtotal" onChange={OnblurHandler} value={result.fivemathtotal} />
        </Form.Group>
      </Row>

      <Row className="mb-3 ">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label className="fw-bold fs-6">Bangladesh and Global Studies</Form.Label>
            <Form.Control name="gs" type="text" onChange={OnblurHandler} value={result.gs}/>
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
            <Form.Label className="fw-bold fs-6">Elementary Science</Form.Label>
            <Form.Control name="science" type="text" onChange={OnblurHandler} value={result.science} />
          </Form.Group>
      
          <Form.Group as={Col} controlId="formGridAddress1">
          <Form.Label className="fw-bold fs-6">Mid term</Form.Label>
          <Form.Control name="sciencenmid" onChange={OnblurHandler} value={result.sciencenmid} />
        </Form.Group>

        <Form.Group as={Col}  controlId="formGridAddress1">
          <Form.Label className="fw-bold fs-6">Final Exam</Form.Label>
          <Form.Control name="sciencefinal" onChange={OnblurHandler} value={result.sciencefinal}  />
        </Form.Group>

        <Form.Group as={Col}  controlId="formGridAddress1">
          <Form.Label className="fw-bold fs-6">Total Marks</Form.Label>
          <Form.Control name="sciencetotal" onChange={OnblurHandler} value={result.sciencetotal}  />
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

export default Classfiveeditresult;