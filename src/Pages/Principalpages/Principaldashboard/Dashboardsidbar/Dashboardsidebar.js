import React from 'react';
import { ListGroup,Dropdown } from 'react-bootstrap';
import {
    useHistory,
    Link,
    useRouteMatch
  } from "react-router-dom";

const Dashboardsidebar = () => {
    let {  url } = useRouteMatch();
    const history = useHistory(); 

    const onClickHandler = (rut,   classteacher, section) => {
         const sectionclass = {section , classteacher}
 
        history.push( `${url}/${rut}`, {state: {sectionclass}})
    }
    //this route going to payment check
    const PaymentCheck = (rut,studentclass) => {
        history.push( `${url}/${rut}`, {state: studentclass})
    }
    return (
        <ListGroup className="text-center">
        <ListGroup.Item action variant="secondary">
        <Link className="homelink" to={`${url}`}><h4 className="fw-bold text-center ">Home</h4></Link>
        </ListGroup.Item>
        <ListGroup.Item action variant="secondary">
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                   Maintain Students
                </Dropdown.Toggle>

                <Dropdown.Menu>
                <Dropdown.Item  onClick={() => onClickHandler('allstduent',
                'KG','Section-A')} >KG-Sec-A</Dropdown.Item>
                 <Dropdown.Item  onClick={() => onClickHandler('allstduent',
                'KG','Section-B')} >KG-Sec-B</Dropdown.Item>
                 <Dropdown.Item  onClick={() => onClickHandler('allstduent',
                'Nursery','Section-A')} >Nursery-Sec-A</Dropdown.Item>
                 <Dropdown.Item  onClick={() => onClickHandler('allstduent',
                'Nursery','Section-B')} >Nursery-Sec-B</Dropdown.Item>
                <Dropdown.Item  onClick={() => onClickHandler('allstduent',
                'Class-One','Section-A')} >Class-1-Sect-A</Dropdown.Item>
                 <Dropdown.Item  onClick={() => onClickHandler('allstduent',
                'Class-One','Section-B')} >Class-1-Sec-B</Dropdown.Item>

                 <Dropdown.Item  onClick={() => onClickHandler('allstduent',
                'Class-Two','Section-A')} >Class-2-Sec-A</Dropdown.Item>
                 <Dropdown.Item  onClick={() => onClickHandler('allstduent',
                'Class-Two','Section-B')} >Class-2-Sec-B</Dropdown.Item>

                 <Dropdown.Item  onClick={() => onClickHandler('allstduent',
                'Class-Three','Section-A')} >Class-3-Sec-A</Dropdown.Item>

                 <Dropdown.Item  onClick={() => onClickHandler('allstduent',
                'Class-Three','Section-B')} >Class-3-Sec-B</Dropdown.Item>

                <Dropdown.Item  onClick={() => onClickHandler('allstduent',
                'Class-Four','Section-A')} >Class-4-Sec-A</Dropdown.Item>
               

                <Dropdown.Item onClick={() => onClickHandler('allstduent',
                'Class-Four','Section-B')} >Class-4-Sec-B</Dropdown.Item>

                
                <Dropdown.Item  onClick={() => onClickHandler('allstduent',
                'Class-Five','Section-A')} >Class-5-Sec-A</Dropdown.Item>
              

                <Dropdown.Item onClick={() => onClickHandler('allstduent',
                'Class-Five','Section-B')} >Class-5-Sec-B</Dropdown.Item>
                 </Dropdown.Menu>
            </Dropdown>
                    

        </ListGroup.Item>

        <ListGroup.Item action variant="secondary">
        <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                   Register A Student
                </Dropdown.Toggle>

                <Dropdown.Menu>
                <Dropdown.Item  as={Link} to={`${url}/registerstudent`}>Register Student</Dropdown.Item >
                </Dropdown.Menu>
            </Dropdown>
        </ListGroup.Item>

        <ListGroup.Item action variant="secondary">
             <Dropdown>
                 
            <Dropdown.Toggle  variant="success" id="dropdown-basic">
                  Add Students Result
                </Dropdown.Toggle>


                <Dropdown.Menu>
                <Dropdown.Item as={Link} to={`${url}/addresult`}>Add Result KG and Nursery</Dropdown.Item>
                <Dropdown.Item as={Link} to={`${url}/addresultforonetofour`}>Add Result Class-1 to Class-4</Dropdown.Item>

                <Dropdown.Item as={Link} to={`${url}/addresultfive`}>Add Result Class-Five</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </ListGroup.Item>

        <ListGroup.Item action variant="secondary">
             <Dropdown>
                 
            <Dropdown.Toggle  variant="success" id="dropdown-basic">
                  Add Routine
                </Dropdown.Toggle>


                <Dropdown.Menu>
                <Dropdown.Item as={Link} to={`${url}/classroutine`}>Class Routine</Dropdown.Item>
                <Dropdown.Item as={Link} to={`${url}/examroutine`}>Exam Routine</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </ListGroup.Item>
        <ListGroup.Item action variant="secondary">
        <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                   Register A Teachers
                </Dropdown.Toggle>

                <Dropdown.Menu>
                <Dropdown.Item  as={Link} to={`${url}/addteachers`}>Register A Teachers</Dropdown.Item >
                </Dropdown.Menu>
            </Dropdown>
        </ListGroup.Item>

        {/* <ListGroup.Item action variant="secondary">
        <Link className="homelink" to={`${url}/addstudent`}><button className="btn btn-success">Add Student</button></Link>
        </ListGroup.Item> */}

        <ListGroup.Item action variant="secondary">
        <Link className="homelink" to={`${url}/maintainteachers`}><button className="btn btn-success">Maintain Teachers</button></Link>
        </ListGroup.Item>

        <ListGroup.Item action variant="secondary">
        <Link className="homelink" to={`${url}/paymentupload`}><button className="btn btn-success">Add Payments</button></Link>
        </ListGroup.Item>

         <ListGroup.Item action variant="secondary">
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                   Student Payment Status
                </Dropdown.Toggle>

                <Dropdown.Menu>
                <Dropdown.Item  onClick={() => PaymentCheck('paymentstatus',
                'KG')} >KG</Dropdown.Item>

                 <Dropdown.Item  onClick={() => PaymentCheck('paymentstatus',
                'Nursery')} >Nursery</Dropdown.Item>

                <Dropdown.Item  onClick={() => PaymentCheck('paymentstatus',
                'Class-One')} >Class-1</Dropdown.Item>

                 <Dropdown.Item  onClick={() => PaymentCheck('paymentstatus',
                'Class-Two')} >Class-2</Dropdown.Item>

                 <Dropdown.Item  onClick={() => PaymentCheck('paymentstatus',
                'Class-Three')} >Class-3</Dropdown.Item>
               
                <Dropdown.Item onClick={() => PaymentCheck('paymentstatus',
                'Class-Four')} >Class-4</Dropdown.Item>

                
                <Dropdown.Item  onClick={() => PaymentCheck('paymentstatus',
                'Class-Five')} >Class-5</Dropdown.Item>
              
                 </Dropdown.Menu>
            </Dropdown>
        </ListGroup.Item>
        <ListGroup.Item action variant="secondary">
        <Link className="homelink" to={`${url}/AdmissionFormCheck`}><button className="btn btn-success">Check Addmission Form</button></Link>
        </ListGroup.Item>
     </ListGroup>
    );
};

export default Dashboardsidebar;