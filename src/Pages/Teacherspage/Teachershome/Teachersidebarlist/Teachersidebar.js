import React from 'react';
import { Dropdown, ListGroup } from 'react-bootstrap';
import {
    useHistory,
    Link,
    useRouteMatch
  } from "react-router-dom";
import useAuth from '../../../../Context/useAuth';
const Teachersidebar = () => {
    let {  url } = useRouteMatch();
    const {sectionclass} = useAuth();
    const history = useHistory(); 

    const onClickHandler = (section) => {
        history.push( `${url}/${section}`, {state: {sectionclass}})
    }

    return (
        <ListGroup className="text-center">
                    <ListGroup.Item action variant="secondary">
                    <Link className="homelink" to="/teacherhome"><h4 className="fw-bold text-center ">Home</h4></Link>
                    </ListGroup.Item>
                    <ListGroup.Item action variant="secondary">
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Maintain Students
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        {
                        sectionclass.classteacher === 'Nursery' && <>{ sectionclass.section === 'Section-B' && <Dropdown.Item onClick={() => onClickHandler('allstduent')} >Nursery-Sec-B</Dropdown.Item> }</>
                        }
                                                {
                        sectionclass.classteacher === 'Nursery' && <>{ sectionclass.section === 'Section-A' && <Dropdown.Item onClick={() => onClickHandler('allstduent')} >Nursery-Sec-B</Dropdown.Item> }</>
                        }
                        
                        {
                          sectionclass.classteacher === 'KG' && <> {sectionclass.section === 'Section-A'  &&  <Dropdown.Item onClick={() => onClickHandler('allstduent')} >KG-Sec-A</Dropdown.Item>} </> 
                        }
                        
                        {
                          sectionclass.classteacher === 'KG' && <> {sectionclass.section === 'Section-B'  &&  <Dropdown.Item onClick={() => onClickHandler('allstduent')} >KG-Sec-B</Dropdown.Item>} </> 
                        }

                        {
                          sectionclass.classteacher === 'Class-One' && <> {sectionclass.section === 'Section-A'  &&  <Dropdown.Item onClick={() => onClickHandler('allstduent')} >Class-One-Sec-A</Dropdown.Item>} </> 
                        }
                         {
                          sectionclass.classteacher === 'Class-One' && <> {sectionclass.section === 'Section-B'  &&  <Dropdown.Item onClick={() => onClickHandler('allstduent')} >Class-One-Sec-B</Dropdown.Item>} </> 
                        }

                        {
                          sectionclass.classteacher === 'Class-Two' && <> {sectionclass.section === 'Section-A'  &&  <Dropdown.Item onClick={() => onClickHandler('allstduent')} >Class-Two-Sec-A</Dropdown.Item>} </> 
                        }
                        {
                          sectionclass.classteacher === 'Class-Two' && <> {sectionclass.section === 'Section-B'  &&  <Dropdown.Item onClick={() => onClickHandler('allstduent')} >Class-Two-Sec-B</Dropdown.Item>} </> 
                        }

                        {
                          sectionclass.classteacher === 'Class-Three' && <> {sectionclass.section === 'Section-A'  &&  <Dropdown.Item onClick={() => onClickHandler('allstduent')} >Class-Three-Sec-A</Dropdown.Item>} </> 
                        }
                        {
                          sectionclass.classteacher === 'Class-Three' && <> {sectionclass.section === 'Section-B'  &&  <Dropdown.Item onClick={() => onClickHandler('allstduent')} >Class-Three-Sec-B</Dropdown.Item>} </> 
                        }

                        {
                          sectionclass.classteacher === 'Class-Four' && <> {sectionclass.section === 'Section-A'  &&  <Dropdown.Item onClick={() => onClickHandler('allstduent')} >Class-Four-Sec-A</Dropdown.Item>} </> 
                        }
                        {
                          sectionclass.classteacher === 'Class-Four' && <> {sectionclass.section === 'Section-B'  &&  <Dropdown.Item onClick={() => onClickHandler('allstduent')} >Class-Four-Sec-B</Dropdown.Item>} </> 
                        }

                        {
                          sectionclass.classteacher === 'Class-Five' && <> {sectionclass.section === 'Section-A'  &&  <Dropdown.Item onClick={() => onClickHandler('allstduent')} >Class-Five-Sec-A</Dropdown.Item>} </> 
                        }
                        {
                          sectionclass.classteacher === 'Class-Five' && <> {sectionclass.section === 'Section-B'  &&  <Dropdown.Item onClick={() => onClickHandler('allstduent')} >Class-Five-Sec-B</Dropdown.Item>} </> 
                        }
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
                                {
                                  sectionclass.classteacher === 'Nursery' &&   <Dropdown.Item as={Link} to={`${url}/addresult`}>Add Result</Dropdown.Item>
                                }
                                {
                                  sectionclass.classteacher === 'KG' &&   <Dropdown.Item as={Link} to={`${url}/addresult`}>Add Result</Dropdown.Item>
                                }
                                {
                                  sectionclass.classteacher === 'Class-One' &&   <Dropdown.Item as={Link} to={`${url}/addresultforonetofour`}>Add Result</Dropdown.Item>
                                }
                                 {
                                  sectionclass.classteacher === 'Class-Two' &&   <Dropdown.Item as={Link} to={`${url}/addresultforonetofour`}>Add Result</Dropdown.Item>
                                }
                                 {
                                  sectionclass.classteacher === 'Class-Three' &&   <Dropdown.Item as={Link} to={`${url}/addresultforonetofour`}>Add Result</Dropdown.Item>
                                }
                                {
                                  sectionclass.classteacher === 'Class-Four' &&   <Dropdown.Item as={Link} to={`${url}/addresultforonetofour`}>Add Result</Dropdown.Item>
                                }

{
                                  sectionclass.classteacher === 'Class-Five' &&   <Dropdown.Item as={Link} to={`${url}/addresultfive`}>Add Result</Dropdown.Item>
                                }

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
        </ListGroup>
    );
};

export default Teachersidebar;