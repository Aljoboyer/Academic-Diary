import React, { useState } from 'react';
import { Carousel, Row } from 'react-bootstrap';
import homeimg from '../../../images/header-1.jpg';
import '../Home.css';
const Homeslider = () => {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
    return (
    <Row>
          <Carousel className="" activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={homeimg}
          alt="First slide"
        />
        <Carousel.Caption>
          <h1 className="slidetitle">Chittagong City Academy school</h1>
          <p className="fw-bold fs-5 text-light">Teaching , Care, And Love</p>
          <button className="btn slidebtn">See Our Activity</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="d-block w-100"
          src={homeimg}
          alt="First slide"
        />
        <Carousel.Caption>
          <h1 className="slidetitle">Chittagong City Academy school</h1>
          <p className="fw-bold fs-5 text-light">Teaching , Care, And Love</p>
          <button className="btn slidebtn">See Our Activity</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="d-block w-100"
          src={homeimg}
          alt="First slide"
        />
        <Carousel.Caption>
          <h1 className="slidetitle">Chittagong City Academy school</h1>
          <p className="fw-bold fs-5 text-light">Teaching , Care, And Love</p>
          <button className="btn slidebtn">See Our Activity</button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </Row>
    );
};

export default Homeslider;