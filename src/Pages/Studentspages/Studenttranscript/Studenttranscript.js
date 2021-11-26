import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Transcripttable from './Transcripttable';
import ReactToPdf  from 'react-to-pdf';

const ref = React.createRef();
const Studenttranscript = () => {
    return (
        <div className="container-fluid pb-2">
          


           <div  className="container Post" ref={ref}>
            <Row className="d-flex justify-content-start">
                <Col lg={12}>
                <Transcripttable></Transcripttable>
                </Col>
            </Row>
        </div>
       
       <ReactToPdf  targetRef={ref} filename="transcript.pdf">
        {({toPdf}) => (
            <button  className="btn btn-primary" onClick={toPdf}>Download Your Transcript</button>
        )}
        </ReactToPdf >
        </div>
    );
};

export default Studenttranscript;