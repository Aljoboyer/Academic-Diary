import React from 'react';
import { Col, Row } from 'react-bootstrap';
import {
    Route,
    useRouteMatch
  } from "react-router-dom";
import StudentHome from '../StudentHome/StudentHome';
import Studentnavber from '../StudentHome/Studentnavber/Studentnavber';
import Studentpayment from '../Studentpayment/Studentpayment';
import Firsttermresult from '../Studentresult/Firsttermresult/Firsttermresult';
import Secondtermresult from '../Studentresult/Secondtermresult/Secondtermresult';
import Thirdtermresult from '../Studentresult/Thirdtermresult/Thirdtermresult';
import Classroutine from '../Studentroutine/Classroutine';
import Examroutine from '../Studentroutine/Examroutine/Examroutine';
import Studenttranscript from '../Studenttranscript/Studenttranscript';
import Studentdashboardsidebar from './Studentdashboardsidebar/Studentdashboardsidebar';
const Studentdashboard = () => {
    let { path } = useRouteMatch();
    return (
        <div className="container-fluid">
            <Studentnavber> </Studentnavber>
             <Row className="justify-content-center">
                <Col lg={2} sm={12} md={6} >
                    <Studentdashboardsidebar></Studentdashboardsidebar>
                </Col>
                <Col lg={10} sm={12} md={6}>
                    <Route exact path={path}>
                       <StudentHome></StudentHome>
                    </Route>
                    <Route path={`${path}/firsttermresult`}>
                        <Firsttermresult></Firsttermresult>
                    </Route>
                    <Route path={`${path}/secondtermresult`}>
                        <Secondtermresult></Secondtermresult>
                    </Route>
                    <Route path={`${path}/examroutine`}>
                        <Examroutine></Examroutine>
                    </Route>
                    <Route path={`${path}/classroutine`}>
                        <Classroutine></Classroutine>
                    </Route>
                    <Route path={`${path}/studenttranscript`}>
                        <Studenttranscript></Studenttranscript>
                    </Route>
                    <Route path={`${path}/studentpayment`}>
                        <Studentpayment></Studentpayment>
                    </Route>
                </Col>
            </Row>
        </div>
    );
};

export default Studentdashboard;