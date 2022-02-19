import React, { useEffect, useState } from 'react';
import { Col, Form, Modal, Row , Button} from 'react-bootstrap';
import Teachersnav from '../Teachershome/TeachersNavbar/Teachersnav';
import './publishnotice.css';
import Swal from 'sweetalert2'
import Teacherpulishnotice from './Teacherpulishnotice';

import useAuth from '../../../Context/useAuth';

const Publishnotice = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const [editresult, setEditresult] = useState({})
    const {sectionclass} = useAuth()
    const [notices, setNotices] = useState([]);
    const [fieldnotice, setFieldnotice] = useState('')
    const [demo, setDemo] = useState([]);

    const OnChangeHandler = e => {
        const name = e.target.name;
        const val = e.target.value;

        const newdata = {...editresult};
        newdata[name] = val;
        setEditresult(newdata)
    }
    const onBlurHandler = e => {
        const name = e.target.name;
        const val = e.target.value;

        const newdata = {...fieldnotice};
        newdata[name] = val;
        setFieldnotice(newdata)

    }

    useEffect(() => {
        fetch(`http://localhost:5000/getstudentnotice?section=${sectionclass.section}&&class=${sectionclass.classteacher}`)
        .then(res => res.json())
        .then(data => setNotices(data))
    },[demo])

    const NoticeHandler = e =>{
        e.preventDefault();
        const dates = new Date().toLocaleDateString()
        const newnotice = {title: fieldnotice.title, description: fieldnotice.description, publishdate: dates, studentclass: sectionclass.classteacher, studentsection: sectionclass.section};


        fetch('http://localhost:5000/studentnotice',{
            method: 'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(newnotice)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId)
            {
                e.target.reset()
                 setDemo(notices)
                 Swal.fire(
                    'Notice Published Successfully',
                    '',
                    'success'
                  )
            }
        })
    }
    
    const NoticeDeleteHandler = (id) => {
        fetch(`http://localhost:5000/studentdeletenotice/${id}`,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0)
            {
                setDemo(notices)
                Swal.fire(
                    'Notice Successfully Deleted',
                    '',
                    'success'
                  )
            }
        })
    }

    const NoticeEditHandler = (id) =>{  
        fetch(`http://localhost:5000/getstudenteditnotice/${id}`)
        .then(res => res.json())
        .then(data => {
            setEditresult(data)
            setShow(true)
        })
    }

    const Edithanlder = (e) => {
        e.preventDefault()
        fetch(`http://localhost:5000/putstudenteditnotice/${editresult._id}`,{
            method: 'PUT',
            headers: {
              'content-type':'application/json'
            },
            body: JSON.stringify(editresult)
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
              setDemo(notices)
            }
        })
    }
    return (
        <div className="container-fluid">
            <Teachersnav></Teachersnav>
            <Row className="container  justify-content-center publishnotice">
           <Row  className="d-flex justify-content-center  p-4 my-4">
                <Col lg={8} className="publishnoticehhome p-4">
                <Form onSubmit={NoticeHandler}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Notice Title</Form.Label>
                    <Form.Control name='title' onBlur={onBlurHandler} type='text' />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Write Notice Here</Form.Label>
                    <Form.Control name='description' onBlur={onBlurHandler} as="textarea" rows={3} />
                </Form.Group>
                <button type="submit" className="btn btn-dark text-warning">Publish</button>
            </Form>
                </Col>
           </Row>
             
              <Row className="justify-content-center">
              <h3 className="text-center fw-bold text-primary my-4">Manage Notice</h3>
                {
                    notices.length > 0 && <>{
                        notices?.map(notice =>
                        <Teacherpulishnotice key={notice._id} NoticeEditHandler={NoticeEditHandler} NoticeDeleteHandler={NoticeDeleteHandler} notice={notice} ></Teacherpulishnotice>)
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
                    <Form.Label>Notice Title</Form.Label>
                    <Form.Control value={editresult.title} name='title' onChange={OnChangeHandler}  type='text' />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Edit Notice Here</Form.Label>
                    <Form.Control name="description" value={editresult.description} onChange={OnChangeHandler} as="textarea" rows={4} />
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

export default Publishnotice;