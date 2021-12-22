import React from 'react';
import { Col } from 'react-bootstrap';

const UserAnouncement = ({anouncement}) => {
    
    return (
        <Col className='principalnotice p-2 my-3 text-center' lg={8}>
            <h5 className="text-center text-primary my-4">{anouncement?.title}</h5>
            <p>{anouncement?.description}</p>
            <p className='text-muted'>{anouncement?.publishdate}</p>
        </Col>
    );
};

export default UserAnouncement;