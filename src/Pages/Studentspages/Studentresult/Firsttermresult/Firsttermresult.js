import React from 'react';
import Firsttermtable from './Firsttermtable'
import ReactToPdf  from 'react-to-pdf';
import { Col, Row } from 'react-bootstrap';

const ref = React.createRef();
const options = {
    unit: 'in',
    format: [4,2]
};
const Firsttermresult = () => {

    return (
        <div className="container-fluid">
        <div  className="container Post" ref={ref}>
            <Row className="d-flex justify-content-start">
                <Col lg={8}>
                <Firsttermtable></Firsttermtable>
                </Col>
            </Row>
        </div>
       
       <ReactToPdf  targetRef={ref} filename="post.pdf">
        {({toPdf}) => (
            <button  className="btn btn-primary" onClick={toPdf}>Download Result Sheet</button>
        )}
        </ReactToPdf >
    
        </div>
    );

}

export default Firsttermresult;