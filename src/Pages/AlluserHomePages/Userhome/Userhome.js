import React from 'react';
import Usernavber from '../Usersnavber/Usernavber';
import Abouteducation from './Abouteducation/Abouteducation'
import Everystep from './Everystep/Everystep';
import Whochoose from './Whochoose/Whochoose';
import Alluserfooter from '../AlluserFooter/Alluserfooter'
import { Col, Row } from 'react-bootstrap';
import logo from '../../../images/shoollogo.jpg';
import '../Home.css';
import header from '../../../images/header2.jpg'
import { useState } from 'react';
import UserAnouncement from './UserAnouncement';
import { useEffect } from 'react';
const Userhome = () => {
    const [anouncements, setAnouncements] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/getAnouncement')
        .then(res => res.json())
        .then(data => setAnouncements(data))
    },[])
    return (
        <div className="container-fluid">
            <Row className='d-flex justify-content-center'>
                <Col lg={2}>
                <img className='w-75' src={logo} alt="" />
                </Col>
                <h2 className='fw-bold text-primary text-center mb-2'>Chittagong City Academy School</h2>
            </Row>
                <Usernavber></Usernavber>
                <Row className='container-fluid '>
                    <Col lg={5} sm={12} md={6}>
                        <img className='h-100 w-100' src={header} alt=""/>
                    </Col>
                    <Col className='anouncementcolam ' lg={7} sm={12} md={6}>
                        <h3 className='fw-bold text-center my-2 anouncementtitle'>Latest Anouncement</h3>
                        <Row className='justify-content-center'>
                        {
                            anouncements?.map(anouncement => <UserAnouncement key={anouncement._id} anouncement={anouncement}></UserAnouncement>)
                        }
                        </Row>
                    </Col>
                </Row>
                <Abouteducation></Abouteducation>
                <Whochoose></Whochoose>
                <Everystep></Everystep>
                <Alluserfooter></Alluserfooter>
        </div>
    );
};

export default Userhome;