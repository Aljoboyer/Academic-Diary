import React from 'react';
import {
    Route,
    useRouteMatch
  } from "react-router-dom";
import {Row, Col} from 'react-bootstrap'
import Principalhome from '../Principalhome/Principalhome';
import Registerstudent from '../../Teacherspage/Registerstudent/Registerstudent';
import Addresult from '../../Teacherspage/Addstudentresult/Addresult';
import Classroutine from '../../Teacherspage/Routinepages/Classroutine';
import Examroutine from '../../Teacherspage/Routinepages/Examroutine';
import Addteachers from '../Addteachers/Addteachers';
import Dashboardsidebar from './Dashboardsidbar/Dashboardsidebar';
import Principalnavbar from '../Principalnavbar/Principalnavbar';
import Maintainteachers from '../Maintainallteachers/Maintainteachers';
import Addstudents from '../Addstudent/Addstudents';
import Addresultforonetofour from '../../Teacherspage/Addstudentresult/Addresultforonetofour';
import Allstduent from '../../Teacherspage/MaintainStudents/Allstduent/Allstduent';
import Addresultfive from '../../Teacherspage/Addstudentresult/Addresultfive';
import Paymentupload from '../Paymentupload/Paymentupload';
import Paymentstatus from '../Paymentcheckpage/Paymentstatus';
import AdmissionFormCheck from '../AdmissionFormCheck/AdmissionFormCheck';

const Principaldashboard = () => {
    let { path } = useRouteMatch();
    return (
        <div className="container-fluid">
            <Principalnavbar></Principalnavbar>
            <Row className="justify-content-center">
                <Col lg={10} sm={12} md={6}>
                    <Route exact path={path}>
                       <Principalhome></Principalhome>
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
                    <Route path={`${path}/paymentstatus`}>
                        <Paymentstatus></Paymentstatus>
                    </Route>
                    <Route path={`${path}/addteachers`}>
                        <Addteachers></Addteachers>
                    </Route>
                    <Route path={`${path}/maintainteachers`}>
                        <Maintainteachers></Maintainteachers>
                    </Route>
                    <Route path={`${path}/addstudent`}>
                        <Addstudents></Addstudents>
                    </Route>

                    <Route path={`${path}/addresultfive`}>
                        <Addresultfive></Addresultfive>
                    </Route>
                    <Route path={`${path}/paymentupload`}>
                        <Paymentupload></Paymentupload>
                    </Route>
                    <Route path={`${path}/AdmissionFormCheck`}>
                        <AdmissionFormCheck></AdmissionFormCheck>
                    </Route>
                </Col>
                <Col lg={2} sm={12} md={6}>
                    <Dashboardsidebar></Dashboardsidebar>
                </Col>
            </Row>
        </div>
    );
};

export default Principaldashboard;