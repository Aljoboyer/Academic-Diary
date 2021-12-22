import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Row, Form, Col, Modal , Button} from 'react-bootstrap';
import Principalnavbar from '../Principalnavbar/Principalnavbar';
import Anouncement from './Anouncement';
import Swal from 'sweetalert2'

const Anouncements = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const [editanouncement, setEditanouncement] = useState({})

    const [anouncements, setAnouncements] = useState([]);
    const [fieldanouncement, setFieldanouncement] = useState('')
    const [demo, setDemo] = useState([]);

    const OnChangeHandler = e => {
        const name = e.target.name;
        const val = e.target.value;

        const newdata = {...editanouncement};
        newdata[name] = val;
        setEditanouncement(newdata)
    }

    const onBlurHandler = e => {
        const name = e.target.name;
        const val = e.target.value;

        const newdata = {...fieldanouncement};
        newdata[name] = val;
        setFieldanouncement(newdata)
    }

    useEffect(() => {
        fetch('http://localhost:5000/getAnouncement')
        .then(res => res.json())
        .then(data => setAnouncements(data))
    },[demo])

    const AnouncemetnPublishHandler = e =>{
        e.preventDefault();
        const dates = new Date().toLocaleDateString()
        const newanouncement = {title: fieldanouncement.title, description: fieldanouncement.description, publishdate: dates};

        fetch('http://localhost:5000/publishanouncement',{
            method: 'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(newanouncement)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId)
            {
                e.target.reset()
                 setDemo(anouncements)
                 Swal.fire(
                    'Notice Published Successfully',
                    '',
                    'success'
                  )
            }
        })
    }
    
    const AnouncementDeleteHandler = (id) => {
        fetch(`http://localhost:5000/anouncementdelete/${id}`,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0)
            {
                setDemo(anouncements)
                Swal.fire(
                    'Notice Successfully Deleted',
                    '',
                    'success'
                  )
            }
        })
    }

    const AnouncementEditHandler = (id) =>{
        
        fetch(`http://localhost:5000/getEditAnouncement/${id}`)
        .then(res => res.json())
        .then(data => {
            setEditanouncement(data)
            setShow(true)
        })
    }

    const Edithanlder = (e) => {
        e.preventDefault()
      
        fetch(`http://localhost:5000/putEditedAnouncement/${editanouncement._id}`,{
            method: 'PUT',
            headers: {
              'content-type':'application/json'
            },
            body: JSON.stringify(editanouncement)
        })
        .then(res => res.json())
        .then(data => {
            if(data)
            {
                setShow(false)
            Swal.fire(
                'Notice Edit Successfully',
                '',
                'success'
              )
              setDemo(anouncements)
            }
        })
    }
    return (
        <div className="container-fluid">
           <Principalnavbar></Principalnavbar>
        <Row className="container  justify-content-center publishnotice">
           <Row  className="d-flex justify-content-center  p-4 my-4">
                <Col lg={8} className="publishnoticehhome p-4">
                <Form onSubmit={AnouncemetnPublishHandler}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Announcement  Title</Form.Label>
                    <Form.Control name='title' onBlur={onBlurHandler} type='text' />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Write Announcement  Here</Form.Label>
                    <Form.Control name='description' onBlur={onBlurHandler} as="textarea" rows={3} />
                </Form.Group>
                <button type="submit" className="btn btn-dark text-warning">Publish</button>
            </Form>
                </Col>
           </Row>
             
              <Row className="justify-content-center">
              <h3 className="text-center fw-bold text-primary my-4">Manage Announcement </h3>
                {
                    anouncements.length > 0 && <>{
                        anouncements?.map(anouncement =>
                        <Anouncement key={anouncement._id} AnouncementEditHandler={AnouncementEditHandler} AnouncementDeleteHandler={AnouncementDeleteHandler} anouncement={anouncement} ></Anouncement>)
                    }</>
                }
              </Row>
        </Row>

        {/* ---------------------edit modal---------------------- */}

        <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Notice</Modal.Title>
        </Modal.Header>
        <Modal.Body>
           <Row  className="d-flex justify-content-center publishnoticehhome p-4 my-4">
                <Form onSubmit={Edithanlder}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Edit Anouncement Here</Form.Label>
                    <Form.Control name="title" value={editanouncement.title} onChange={OnChangeHandler} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Edit Anouncement Here</Form.Label>
                    <Form.Control name="description" value={editanouncement.description} onChange={OnChangeHandler} as="textarea" rows={4} />
                </Form.Group>
                <button type="submit" className="btn btn-dark text-warning">Publish</button>
            </Form>
           </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button  className="btn btn-warning" variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
        </div>
    );
};

export default Anouncements;