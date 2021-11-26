import React from 'react';
import { Dropdown, ListGroup } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
  } from "react-router-dom";
const Teachersidebar = () => {
    let { path, url } = useRouteMatch();
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
                            <Dropdown.Item as={Link} to={`${url}/classone`}>Class-1</Dropdown.Item>
                                <Dropdown.Item as={Link} to={`${url}/classtwo`}>Class-2</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Class-3</Dropdown.Item>
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
                            <Dropdown.Item as={Link} to={`${url}/addresult`}>Add Result</Dropdown.Item>
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