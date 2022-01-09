import React, { useEffect, useState } from 'react';
import { Col, Form, Row,Button } from 'react-bootstrap';
import Swal from 'sweetalert2';

const Examroutine = () => {
  const [img, setImg] = useState('');
  const [oldroutine, setOldroutine] = useState([]);
  const [demo, setDemo] = useState([])

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
      fetch('http://localhost:5000/addexamroutine', {
        method: 'POST',
        body: fd
        })
        .then(response => response.json())
        .then(result => {
            if(result){
              Swal.fire(
                'Routine Added Successfully',
                '',
                'success'
              )
                e.target.reset();
            }
        })
        .catch(error => {

        });

    }
    useEffect(() =>  {
      fetch('http://localhost:5000/getExamroutine')
      .then(res => res.json())
      .then(data => setOldroutine(data))
  },[demo])
    const imgarr = []
    oldroutine?.forEach(c => {
    let obj = {...c}
      imgarr.push(obj)
  })
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
          fetch(`http://localhost:5000/deleteExamRoutine/${id}`,{
            method: 'DELETE'
          })
          .then(res => res.json())
          .then(data => {
            setDemo(data)
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
            <h1 className="text-center fw-bold text-primary">Add Exam Routine</h1>
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

export default Examroutine;