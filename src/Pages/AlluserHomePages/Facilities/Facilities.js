import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import Usernavber from '../Usersnavber/Usernavber';
import logo from '../../../images/shoollogo.jpg';
import auditoriam from '../../../images/Facilites/auditoriam.jpg';
import Library from '../../../images/Facilites/library.png';
import Prayer from '../../../images/Facilites/prayerhall.jpg';
import indoor1 from '../../../images/Facilites/indoor1.jpg';
import indoor2 from '../../../images/Facilites/indoor2.jpg';
import indoor3 from '../../../images/Facilites/indoorthree.jpg';
import indoor4 from '../../../images/Facilites/indoor4.jpg';
import outdoor1 from '../../../images/Facilites/outdoor1.jpg';
import outdoor2 from '../../../images/Facilites/outdoor2.jpg';
import outdoor3 from '../../../images/Facilites/outdoor3.webp';
import outdoor4 from '../../../images/Facilites/outdoor4.jpg';
import Canteen from '../../../images/Facilites/canteen.jpg';
import Alluserfooter from '../AlluserFooter/Alluserfooter';

const Facilities = () => {
    const {state} = useLocation()
   
    return (
        <div className='container-fuid'>
              <Row className='d-flex justify-content-center'>
                <Col lg={2}>
                <img className='w-75' src={logo} alt="" />
                </Col>
                <h2 className='fw-bold text-primary text-center mb-2'>Chittagong City Academy School</h2>
            </Row>
            <Usernavber></Usernavber>
            {state.state === 'Auditorium' &&
                 <Row className='justify-content-center'>
                      <h1 className='text-center fw-bold my-4'>Our Auditorium. Where we celebrate all program </h1>
                     <Col lg={9} md={10} sm={12}>
                         <img className='img-fluid' src={auditoriam} alt="" />
                     </Col>
                </Row>}

                {state.state === 'Library' &&
                 <Row className='justify-content-center'>
                     <h1 className='text-center fw-bold my-4'>We Have a Library. Where student can read and by Reading they can improve their knowledge</h1>
                     <Col lg={9} md={10} sm={12}>
                         <img className='img-fluid' src={Library} alt="" />
                     </Col>
                </Row>}

                {state.state === 'Prayer' &&
                 <Row className='justify-content-center'>
                     <h1 className='text-center fw-bold my-4'>We Have Prayer Hall</h1>
                     <Col lg={9} md={10} sm={12}>
                         <img className='img-fluid' src={Prayer} alt="" />
                     </Col>
                </Row>}

                {state.state === 'Games' &&
                 <Row className='justify-content-center'>
                     <h1 className='text-center fw-bold my-4'>We Have Indoor And OutDoor Game Facilities For Student so that they refresh their mind</h1>
                     <Row className='justify-content-center my-4'>
                        <h4 className='fw-bold '>Indoor Game</h4>
                        <Col lg={6} md={6} sm={12}>
                            <img className='w-75 h-75' src={indoor1} alt="" />
                        </Col>
                        <Col lg={6} md={6} sm={12}>
                            <img className='w-75 h-75' src={indoor2} alt="" />
                        </Col>
                        <Col lg={6} md={6} sm={12}>
                            <img className='w-75 h-75' src={indoor3} alt="" />
                        </Col>
                        <Col lg={6} md={6} sm={12}>
                            <img className='w-75 h-75' src={indoor4} alt="" />
                        </Col>
                     </Row>
                     <Row className='justify-content-center my-4'>
                        <h4 className='fw-bold '>Outdoor Game</h4>
                        <Col lg={6} md={6} sm={12}>
                            <img className='w-75 h-75' src={outdoor1} alt="" />
                        </Col>
                        <Col lg={6} md={6} sm={12}>
                            <img className='w-75 h-75' src={outdoor2} alt="" />
                        </Col>
                        <Col lg={6} md={6} sm={12}>
                            <img className='w-75 h-75' src={outdoor3} alt="" />
                        </Col>
                        <Col lg={6} md={6} sm={12}>
                            <img className='w-75 h-75' src={outdoor4} alt="" />
                        </Col>
                     </Row>
                </Row>}

                
                {state.state === 'Canteen' &&
                 <Row className='justify-content-center'>
                     <h1 className='text-center fw-bold my-4'>We Have Best Quality Canteen</h1>
                     <Col lg={9} md={10} sm={12}>
                         <img className='img-fluid' src={Canteen} alt="" />
                     </Col>
                </Row>}
            <Alluserfooter></Alluserfooter>
        </div>
    );
};

export default Facilities;