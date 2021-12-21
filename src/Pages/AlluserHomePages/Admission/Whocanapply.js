import React from 'react';
import { Col, Row } from 'react-bootstrap';

const Whocanapply = () => {
    return (
       <Row className='d-flex justify-content-center my-4'>
           <h2 className='text-primary my-4 fw-bold text-center'>Who can Apply</h2>
           <Col lg={7} md={9} sm={12}>
               <li>For Play group - Nursery the age limit of the applicant(s) should be 3.5 to 4+ year.</li>
               <li>From  Class-One -– Class-V, applicant has to face both written Test and Viva.
New Admission may be considered on the basis of previous School record (s), personal interview and the result of the Admission Test.</li>
           </Col>
       </Row>
    );
};

export default Whocanapply;