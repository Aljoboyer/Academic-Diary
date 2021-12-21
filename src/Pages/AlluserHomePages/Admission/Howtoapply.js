import React from 'react';
import { Col, Row } from 'react-bootstrap';

const Howtoapply = () => {
    return (
        <Row className='container-fluid justify-content-center my-4'>
            <h3 className='text-center text-primary fw-bold my-4'>How to Apply</h3>
            <Col lg={8} md={10} sm={12}>
                <p>1. Parent(s) will initially collect the Admission Form(s) from the School Office/ online</p>
                <p>2. Parent(s) should submit the filled in form(s) at MEMS office within the given date(s).</p>
                <p>3. Applicant has to face both written Test and Viva.</p>
                <p>4. Play Group student(s) and parents have to face an interview with the Principal on scheduled date.</p>
                <p>5. Admission Forms are available at MEMS School office and web site of Methodist English Medium School. (www.mems.edu.bd Admission Online Admission)</p>

                
         <h5 className='fw-bold'>Necessary Documents for the Applicants:</h5>
        <li>On the submission of the filled in Admission Form(s), parents must submit the following documents.</li>
        <li>Photocopy of the last Exam’s Report Card (Academic Transcript)</li>
        <li>Birth Certificate of the Applicant (issued by City Corporation/Union Council/Clinic/Hospital/vaccination Program).</li>
        <li>Photocopy of the NID (Parents)</li>
        <li>TIN Certificate (Parents)</li>
            </Col>
        </Row>
    );
};

export default Howtoapply;