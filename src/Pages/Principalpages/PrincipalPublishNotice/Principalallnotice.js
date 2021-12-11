import React from 'react';
import { Col } from 'react-bootstrap';

const Principalallnotice = ({notice, NoticeDeleteHandler, NoticeEditHandler}) => {

    return (
        <Col className='principalnotice p-2 my-3 text-center' lg={8}>
            <h5 className="text-center my-4">{notice?.teachernotice}</h5>
            <button onClick={() => NoticeEditHandler(notice._id)} className='btn btn-dark text-warning fw-bold mx-4 my-2'>Edit Notice</button>
            <button onClick={() => NoticeDeleteHandler(notice._id)} className='btn btn-warning text-dark fw-bold my-2'>Delete Notice</button>
        </Col>
    );
};

export default Principalallnotice;