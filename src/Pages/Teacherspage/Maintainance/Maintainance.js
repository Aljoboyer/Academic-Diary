import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Teachersidebar from '../Teachershome/Teachersidebarlist/Teachersidebar';
import {
    Route,
    useRouteMatch
  } from "react-router-dom";
import Registerstudent from '../Registerstudent/Registerstudent';
import Addresult from '../Addstudentresult/Addresult';
import MaintainenceBanner from './MaintainenceBanner';
import Dashboardnav from './Dashboardnav';
import Classroutine from '../Routinepages/Classroutine'
import Examroutine from '../Routinepages/Examroutine';
import Addresultforonetofour from '../Addstudentresult/Addresultforonetofour';
import Allstduent from '../MaintainStudents/Allstduent/Allstduent';
import Addresultfive from '../Addstudentresult/Addresultfive'
const Maintainance = () => {
    let { path } = useRouteMatch();
    return (
        <div className="container-fluid">
            <Dashboardnav></Dashboardnav>
            <Row className="justify-content-center">
                <Col lg={10} sm={12} md={6}>
                    <Route exact path={path}>
                        <MaintainenceBanner></MaintainenceBanner>
                    </Route>
                    <Route path={`${path}/registerstudent`}>
                        <Registerstudent></Registerstudent>
                    </Route>
                    <Route path={`${path}/addresult`}>
                        <Addresult></Addresult>
                    </Route>
                    <Route path={`${path}/addresultforonetofour`}>
                        <Addresultforonetofour></Addresultforonetofour>
                    </Route>
                    <Route path={`${path}/allstduent`}>
                        <Allstduent></Allstduent>
                    </Route>
                    <Route path={`${path}/classroutine`}>
                        <Classroutine></Classroutine>
                    </Route>
                    <Route path={`${path}/examroutine`}>
                        <Examroutine></Examroutine>
                    </Route>

                    <Route path={`${path}/addresultfive`}>
                        <Addresultfive></Addresultfive>
                    </Route>
                </Col>
                <Col lg={2} sm={12} md={6}>
                    <Teachersidebar></Teachersidebar>
                </Col>
            </Row>
        </div>
    );
};

export default Maintainance;