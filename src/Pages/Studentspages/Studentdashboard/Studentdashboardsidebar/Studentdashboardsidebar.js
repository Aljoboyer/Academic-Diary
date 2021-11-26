import React from 'react';
import { ListGroup, Dropdown  } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
  } from "react-router-dom";

const Studentdashboardsidebar = () => {
    let { path, url } = useRouteMatch();
    return (
        <ListGroup className="text-center ">
        <ListGroup.Item action variant="dark">
        <Link className="homelink" to={`${url}`}><h4 className="fw-bold text-center ">Home</h4></Link>
        </ListGroup.Item>
        <ListGroup.Item action variant="dark">
            <Dropdown>
                <Dropdown.Toggle variant="warning" id="dropdown-basic">
                   See Result
                </Dropdown.Toggle>

                <Dropdown.Menu>
                <Dropdown.Item as={Link} to={`${url}/firsttermresult`}>First Term</Dropdown.Item>
                    <Dropdown.Item as={Link} to={`${url}/secondtermresult`}>Second Term</Dropdown.Item>
                    <Dropdown.Item as={Link} to="/thirdtermresult" >Final Term</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </ListGroup.Item>
        <ListGroup.Item action variant="dark">
           <Link to={`${url}/classroutine`}> <button className="btn btn-warning">Class Routine</button></Link>
        </ListGroup.Item>
        <ListGroup.Item action variant="dark">
           <Link to={`${url}/examroutine`}> <button className="btn btn-warning">Exam Routine</button></Link>
        </ListGroup.Item>
        <ListGroup.Item action variant="warning">
           <Link to={`${url}/studenttranscript`}> <button className="btn btn-warning">Transcript</button></Link>
        </ListGroup.Item>
        <ListGroup.Item action variant="warning">
        <Dropdown>
                <Dropdown.Toggle variant="warning" id="dropdown-basic">
                   Payment
                </Dropdown.Toggle>

                <Dropdown.Menu>
                <Dropdown.Item as={Link} to={`${url}/studentpayment`}>First Term</Dropdown.Item>
                    <Dropdown.Item as={Link} to={`${url}/classtwo`}>Second Term</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Final Term</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </ListGroup.Item>
     </ListGroup>
    );
};

export default Studentdashboardsidebar;