import React from 'react';
import { Col } from 'react-bootstrap';

const Anouncement = ({anouncement, AnouncementDeleteHandler, AnouncementEditHandler}) => {

    return (
        <Col className='principalnotice p-2 my-3 text-center' lg={8}>
            <h5 className="text-center text-primary my-4">{anouncement?.title}</h5>
            <p>{anouncement.description}</p>
            <button onClick={() => AnouncementEditHandler(anouncement._id)} className='btn btn-dark text-warning fw-bold mx-4 my-2'>Edit anouncement</button>
            <button onClick={() => AnouncementDeleteHandler(anouncement._id)} className='btn btn-warning text-dark fw-bold my-2'>Delete anouncement</button>
        </Col>
    );
};

export default Anouncement;