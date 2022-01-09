import React, { useEffect, useState } from 'react';
import { Col, Form, Row,Button } from 'react-bootstrap';
import Swal from 'sweetalert2'
const Classroutine = () => {
    const [img, setImg] = useState('');
    const [oldroutine, setOldroutine] = useState([]);
    const [demo, setDemo] = useState([]);
    const [routineData, setRoutineData] = useState({});
    const days = {sat: 'Saturday', sun: 'Sunday', mon: 'Monday', tue: 'Tuesday', wed: 'Wednesday', thurs: 'Thursday'}
    const OnBlurHandler =(e) => {
      const dataName = e.target.name;
      const dataValue = e.target.value;

      const newdata = {...routineData}
      newdata[dataName] = dataValue;
      setRoutineData(newdata)
    }
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
              if(result){
                e.target.reset();
                Swal.fire(
                  'Routine Added Successfully',
                  '',
                  'success'
                )
              }
          })
          .catch(error => {

          });

    }
    useEffect(() =>  {
      fetch('http://localhost:5000/getclassroutine')
      .then(res => res.json())
      .then(data => setOldroutine(data))
  },[demo])

  const imgarr = []
    oldroutine?.forEach(c => {
    let obj = {...c}
      imgarr.push(obj)
  })

    const ManualRoutineHandler = (e) => {
      e.preventDefault()
      const fullroutine = {...days, ...routineData};

      fetch('http://localhost:5000/addManualRoutine',{
        method: 'POST',
        headers: {
          'content-type':'application/json'
        },
        body: JSON.stringify(fullroutine)
      })
      .then(res => res.json())
      .then(data => {
        if(data)
        {
          Swal.fire(
            'Routine Added Successfully',
            '',
            'success'
          )
          e.target.reset()
        }
      })
    }
    const DeleteHandler = (id) => {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          fetch(`http://localhost:5000/deleteclassroutine/${id}`,{
            method: 'DELETE'
          })
          .then(res => res.json())
          .then(data => {
            setDemo(oldroutine)
            Swal.fire(
              'Routine Deleted Successfully',
              '',
              'success'
            )
          })
        }
      })

    }
    return (
        <div className="container-fluid">
            <h1 className="text-center fw-bold text-primary">Add Class Routine</h1>
            <Form className="p-3 addresultform" onSubmit={RoutineSubmitHandler}>
              <Row className="mb-3 ">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label className="fw-bold fs-6">Upload Routine</Form.Label>
                  <Form.Control onChange={imgHandler} type="file" />
                </Form.Group>
              </Row>
                <Button className="w-50 text-warning" variant="dark" type="submit">
                Submit
                </Button>
            </Form>
            <Row className='my-4 justify-content-center'>
              <h4 className='fw-bold text-center my-4 text-primary'>Type Class Routine</h4>
              <Form className='classroutine-Form p-3' onSubmit={ManualRoutineHandler}>
                <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridState">
                <Form.Label className="fw-bold">Class</Form.Label>
                <Form.Select onBlur={OnBlurHandler} name="routineclass"   as={Col} aria-label="Default select example">
                  <option className='fw-bold'>Choose Class</option>
                  <option>KG</option>
                  <option>Nursery</option>
                  <option>Class-One</option>
                  <option>Class-Two</option>
                  <option>Class-Three</option>
                  <option>Class-Four</option>
                  <option>Class-Five</option>
                </Form.Select>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                <Form.Label className="fw-bold">Section</Form.Label>
                <Form.Select onBlur={OnBlurHandler} name="routinesection" defaultValue="Choose Section">
                  <option className='fw-bold'>Choose Section</option>
                  <option>Section-A</option>
                  <option>Section-B</option>
                </Form.Select>
                </Form.Group>
                </Row>
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="exampleForm.ControlInput1">
                    <Form.Label className='fw-bold text-primary fs-5'>Saturday</Form.Label>
                  </Form.Group>
                  <Form.Group as={Col} controlId="exampleForm.ControlInput1">
                    <Form.Label className='fw-bold'>1st Hour</Form.Label>
                    <Form.Control onBlur={OnBlurHandler} type="text" name="sat1st" placeholder="Subject" />
                  </Form.Group>
                  <Form.Group as={Col} controlId="exampleForm.ControlInput1">
                    <Form.Label className='fw-bold'>2nd Hour</Form.Label>
                    <Form.Control onBlur={OnBlurHandler} type="text" name="sat2nd" placeholder="Subject" />
                  </Form.Group>
                  <Form.Group as={Col} controlId="exampleForm.ControlInput1">
                    <Form.Label className='fw-bold'>3rd Hour</Form.Label>
                    <Form.Control onBlur={OnBlurHandler} type="text" name="sat3rd" placeholder="Subject" />
                  </Form.Group>
                  <Form.Group as={Col} controlId="exampleForm.ControlInput1">
                    <Form.Label className='fw-bold'>4th Hour</Form.Label>
                    <Form.Control onBlur={OnBlurHandler} type="text" name="sat4th" placeholder="Subject" />
                  </Form.Group>
                </Row>
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="exampleForm.ControlInput1">
                    <Form.Label className='fw-bold text-primary fs-5'>Sunday</Form.Label>
                  </Form.Group>
                  <Form.Group as={Col} controlId="exampleForm.ControlInput1">
                    <Form.Label className='fw-bold'>1st Hour</Form.Label>
                    <Form.Control onBlur={OnBlurHandler} type="text" name="sun1st" placeholder="Subject" />
                  </Form.Group>
                  <Form.Group as={Col} controlId="exampleForm.ControlInput1">
                    <Form.Label className='fw-bold'>2nd Hour</Form.Label>
                    <Form.Control onBlur={OnBlurHandler} type="text" name="sun2nd" placeholder="Subject" />
                  </Form.Group>
                  <Form.Group as={Col} controlId="exampleForm.ControlInput1">
                    <Form.Label className='fw-bold'>3rd Hour</Form.Label>
                    <Form.Control onBlur={OnBlurHandler} type="text" name="sun3rd" placeholder="Subject" />
                  </Form.Group>
                  <Form.Group as={Col} controlId="exampleForm.ControlInput1">
                    <Form.Label className='fw-bold'>4th Hour</Form.Label>
                    <Form.Control onBlur={OnBlurHandler} type="text" name="sun4th" placeholder="Subject" />
                  </Form.Group>
                </Row>
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="exampleForm.ControlInput1">
                    <Form.Label className='fw-bold text-primary fs-5'>Monday</Form.Label>
                  </Form.Group>
                  <Form.Group as={Col} controlId="exampleForm.ControlInput1">
                    <Form.Label className='fw-bold'>1st Hour</Form.Label>
                    <Form.Control onBlur={OnBlurHandler} type="text" name="mon1st" placeholder="Subject" />
                  </Form.Group>
                  <Form.Group as={Col} controlId="exampleForm.ControlInput1">
                    <Form.Label className='fw-bold'>2nd Hour</Form.Label>
                    <Form.Control onBlur={OnBlurHandler} type="text" name="mon2nd" placeholder="Subject" />
                  </Form.Group>
                  <Form.Group as={Col} controlId="exampleForm.ControlInput1">
                    <Form.Label className='fw-bold'>3rd Hour</Form.Label>
                    <Form.Control onBlur={OnBlurHandler} type="text" name="mon3rd" placeholder="Subject" />
                  </Form.Group>
                  <Form.Group as={Col} controlId="exampleForm.ControlInput1">
                    <Form.Label className='fw-bold'>4th Hour</Form.Label>
                    <Form.Control onBlur={OnBlurHandler} type="text" name="mon4th" placeholder="Subject" />
                  </Form.Group>
                </Row>
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="exampleForm.ControlInput1">
                    <Form.Label className='fw-bold text-primary fs-5'>Tuesday</Form.Label>
                  </Form.Group>
                  <Form.Group as={Col} controlId="exampleForm.ControlInput1">
                    <Form.Label className='fw-bold'>1st Hour</Form.Label>
                    <Form.Control onBlur={OnBlurHandler} type="text" name="tues1st" placeholder="Subject" />
                  </Form.Group>
                  <Form.Group as={Col} controlId="exampleForm.ControlInput1">
                    <Form.Label className='fw-bold'>2nd Hour</Form.Label>
                    <Form.Control onBlur={OnBlurHandler} type="text" name="tues2nd" placeholder="Subject" />
                  </Form.Group>
                  <Form.Group as={Col} controlId="exampleForm.ControlInput1">
                    <Form.Label className='fw-bold'>3rd Hour</Form.Label>
                    <Form.Control onBlur={OnBlurHandler} type="text" name="tues3rd" placeholder="Subject" />
                  </Form.Group>
                  <Form.Group as={Col} controlId="exampleForm.ControlInput1">
                    <Form.Label className='fw-bold'>4th Hour</Form.Label>
                    <Form.Control onBlur={OnBlurHandler} type="text" name="tues4th" placeholder="Subject" />
                  </Form.Group>
                </Row>
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="exampleForm.ControlInput1">
                    <Form.Label className='fw-bold text-primary fs-5'>Wednesday</Form.Label>
                  </Form.Group>
                  <Form.Group as={Col} controlId="exampleForm.ControlInput1">
                    <Form.Label className='fw-bold'>1st Hour</Form.Label>
                    <Form.Control onBlur={OnBlurHandler} type="text" name="wed1st" placeholder="Subject" />
                  </Form.Group>
                  <Form.Group as={Col} controlId="exampleForm.ControlInput1">
                    <Form.Label className='fw-bold'>2nd Hour</Form.Label>
                    <Form.Control onBlur={OnBlurHandler} type="text" name="wed2nd" placeholder="Subject" />
                  </Form.Group>
                  <Form.Group as={Col} controlId="exampleForm.ControlInput1">
                    <Form.Label className='fw-bold'>3rd Hour</Form.Label>
                    <Form.Control onBlur={OnBlurHandler} type="text" name="wed3rd" placeholder="Subject" />
                  </Form.Group>
                  <Form.Group as={Col} controlId="exampleForm.ControlInput1">
                    <Form.Label className='fw-bold'>4th Hour</Form.Label>
                    <Form.Control onBlur={OnBlurHandler} type="text" name="wed4th" placeholder="Subject" />
                  </Form.Group>
                </Row>
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="exampleForm.ControlInput1">
                    <Form.Label className='fw-bold text-primary fs-5'>Thursday</Form.Label>
                  </Form.Group>
                  <Form.Group as={Col} controlId="exampleForm.ControlInput1">
                    <Form.Label className='fw-bold'>1st Hour</Form.Label>
                    <Form.Control onBlur={OnBlurHandler} type="text" name="thurs1st" placeholder="Subject" />
                  </Form.Group>
                  <Form.Group as={Col} controlId="exampleForm.ControlInput1">
                    <Form.Label className='fw-bold'>2nd Hour</Form.Label>
                    <Form.Control onBlur={OnBlurHandler} type="text" name="thurs2nd" placeholder="Subject" />
                  </Form.Group>
                  <Form.Group as={Col} controlId="exampleForm.ControlInput1">
                    <Form.Label className='fw-bold'>3rd Hour</Form.Label>
                    <Form.Control onBlur={OnBlurHandler} type="text" name="thurs3rd" placeholder="Subject" />
                  </Form.Group>
                  <Form.Group as={Col} controlId="exampleForm.ControlInput1">
                    <Form.Label className='fw-bold'>4th Hour</Form.Label>
                    <Form.Control onBlur={OnBlurHandler} type="text" name="thurs4th" placeholder="Subject" />
                  </Form.Group>
                </Row>
                <button type='submit' className='btn btn-dark fw-bold text-warning my-2'>ADD ROUTINE</button>
              </Form>
            </Row>
            <Row className='my-4 justify-content-center g-4'>
              <h4 className='my-4 fw-bold text-center'>OLD ROUTINE</h4>
              {
                imgarr?.map(obj => <Col lg={4} md={6} sm={12}>
                  <img className="img-fluid" src={`data:image/jpeg;base64,${obj.img}`} alt="" />
                  <button onClick={() => DeleteHandler(obj._id)} className='btn btn-danger fw-bold text-light'>DELETE</button>
                </Col>)
              }
            </Row>
        </div>
    );
};

export default Classroutine;