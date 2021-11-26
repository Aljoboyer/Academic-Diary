import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Teachersidebar from '../Teachershome/Teachersidebarlist/Teachersidebar';
import {
    Route,
    useRouteMatch
  } from "react-router-dom";
import Registerstudent from '../Registerstudent/Registerstudent';
import Addresult from '../Addstudentresult/Addresult';
import Classone from '../MaintainStudents/ClassOneStudent/Classone';
import Classtwo from '../MaintainStudents/ClassTowStudent/Classtwo';
import MaintainenceBanner from './MaintainenceBanner';
import Dashboardnav from './Dashboardnav';
import Classroutine from '../Routinepages/Classroutine'
import Examroutine from '../Routinepages/Examroutine';

const Maintainance = () => {
    let { path, url } = useRouteMatch();
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
                    <Route path={`${path}/classone`}>
                        <Classone></Classone>
                    </Route>
                    <Route path={`${path}/classtwo`}>
                        <Classtwo></Classtwo>
                    </Route>
                    <Route path={`${path}/classroutine`}>
                        <Classroutine></Classroutine>
                    </Route>
                    <Route path={`${path}/examroutine`}>
                        <Examroutine></Examroutine>
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