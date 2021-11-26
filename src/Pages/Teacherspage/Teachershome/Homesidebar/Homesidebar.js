import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import  './homesidebar.css';
const Homesidebar = () => {
    return (
        <ListGroup className="homebtn">
            <ListGroup.Item variant="primary"><Link to="/teachersmaintainence"><h4 className="fw-bold text-center homebtn">Go to Maintainence</h4></Link></ListGroup.Item>
        </ListGroup>
    );
};

export default Homesidebar;