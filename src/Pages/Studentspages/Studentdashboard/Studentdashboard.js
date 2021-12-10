import React from 'react';
import { Col, Row } from 'react-bootstrap';
import {
    Route,
    useRouteMatch
  } from "react-router-dom";
import StudentHome from '../StudentHome/StudentHome';
import Studentnavber from '../StudentHome/Studentnavber/Studentnavber';
import Studentpayment from '../Studentpayment/Studentpayment';
import Firsttermesultsheet from '../Studentresult/Firsttermresult/Firsttermesultsheet';
import Secondtermresultsheet from '../Studentresult/Secondtermresult/Secondtermresultsheet';
import Thirtermresultsheet from '../Studentresult/Thirtermresult/Thirtermresultsheet';
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
                    <Route path={`${path}/firsttermesultsheet`}>
                        <Firsttermesultsheet></Firsttermesultsheet>
                    </Route>

                    <Route path={`${path}/secondtermresultsheet`}>
                        <Secondtermresultsheet></Secondtermresultsheet>
                    </Route>

                    <Route path={`${path}/thirtermresultsheet`}>
                        <Thirtermresultsheet></Thirtermresultsheet>
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