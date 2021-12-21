import React from 'react';
import { ListGroup, Dropdown  } from 'react-bootstrap';
import {
    Link,
    useRouteMatch,
    useHistory
  } from "react-router-dom";
import useAuth from '../../../../Context/useAuth';

const Studentdashboardsidebar = () => {
    let {  url } = useRouteMatch();
    const {resultclass, LogOutUser} = useAuth();
    const history = useHistory();

    const LogoutHandler = () => {
        LogOutUser(history)
    }

    const onClickHandler = (result, term) => {
        history.push( `${url}/${result}`, {state: {term}})
    }
    return (
        <ListGroup className="text-center ">
            <ListGroup.Item onClick={LogoutHandler} action variant="dark">
            <h4 className="fw-bold text-center ">Logout</h4>
        </ListGroup.Item>
        <ListGroup.Item action variant="dark">
        <Link className="homelink" to={`${url}`}><h4 className="fw-bold text-center ">Home</h4></Link>
        </ListGroup.Item>
        <ListGroup.Item action variant="dark">
            <Dropdown>
                <Dropdown.Toggle variant="warning" id="dropdown-basic">
                   See Result
                </Dropdown.Toggle>

                <Dropdown.Menu>
                <Dropdown.Item onClick={() => onClickHandler('firsttermesultsheet', 'First-Term')}>First Term</Dropdown.Item>
                    <Dropdown.Item onClick={() => onClickHandler('secondtermresultsheet', 'Second-Term')}  >Second Term</Dropdown.Item>
                    <Dropdown.Item onClick={() => onClickHandler('thirtermresultsheet', 'Third-Term')}  >Third Term</Dropdown.Item>
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

        <ListGroup.Item action variant="secondary">
            <Link to={`${url}/studentpayment`}><button className='btn btn-warning fw-bold text-dark'>Payment</button></Link>
        </ListGroup.Item>
     </ListGroup>
    );
};

export default Studentdashboardsidebar;