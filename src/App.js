import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Teachershome from './Pages/Teacherspage/Teachershome/Teachershome';
import Maintainance from './Pages/Teacherspage/Maintainance/Maintainance';
import Publishnotice from './Pages/Teacherspage/Publishnotice/Publishnotice';
import Principaldashboard from './Pages/Principalpages/Principaldashboard/Principaldashboard';
import Princpalpublishnotice from './Pages/Principalpages/PrincipalPublishNotice/Princpalpublishnotice';
import Individualresult from './Pages/Teacherspage/MaintainStudents/Individualresult';
import Studentdashboard from './Pages/Studentspages/Studentdashboard/Studentdashboard';
import Userhome from './Pages/AlluserHomePages/Userhome/Userhome';
import Alluserloginpage from './Pages/AllusersLonginPage/Alluserloginpage';
import Authprovider from './Context/Authprovider';
import KGtonurseryresultedit from './Pages/Teacherspage/MaintainStudents/ResultEdit/KGtonurseryresultedit';
import Classonetofoureditresult from './Pages/Teacherspage/MaintainStudents/ResultEdit/Classonetofoureditresult';
import Classfiveeditresult from './Pages/Teacherspage/MaintainStudents/ResultEdit/Classfiveeditresult';
import Individualpaymentcheck from './Pages/Principalpages/Paymentcheckpage/Individualpaymentcheck';
import Facilities from './Pages/AlluserHomePages/Facilities/Facilities';
import Academic from './Pages/AlluserHomePages/Academic/Academic';
import Admission from './Pages/AlluserHomePages/Admission/Admission';
function App() {
  return (
    <div className="container-fluid">
      <Authprovider>
       
        <Router>
            <Switch>
              <Route exact path="/">
                <Userhome></Userhome>
                </Route>
                <Route exact path="/facilities">
                  <Facilities></Facilities>
                </Route>
                <Route exact path="/academic">
                  <Academic></Academic>
                </Route>
                <Route exact path="/admission">
                  <Admission></Admission>
                </Route>
                <Route exact path="/alluserloginpage">
                  <Alluserloginpage></Alluserloginpage>
                </Route>

            <Route  path="/studentdashboard">
              <Studentdashboard></Studentdashboard>
            </Route>

              {/* ---------------all teachers route---------- */}
            <Route exact  path="/teacherhome">
                  <Teachershome></Teachershome>
              </Route>
              <Route  path="/teachersmaintainence">
                  <Maintainance></Maintainance>
              </Route>
              <Route exact path="/individualresult/:id">
                <Individualresult></Individualresult>
              </Route>
              <Route exact path="/publishnotice">
                <Publishnotice></Publishnotice>
              </Route>
              <Route exact path="/kgtonurseryresultedit/:id">
                  <KGtonurseryresultedit></KGtonurseryresultedit>
              </Route>
              <Route exact path="/individualpaymentcheck/:id">
                <Individualpaymentcheck></Individualpaymentcheck>
              </Route>
              <Route exact path="/classonetofoureditresult/:id">
                  <Classonetofoureditresult></Classonetofoureditresult>
              </Route>
              
              <Route exact path="/classfiveeditresult/:id">
                  <Classfiveeditresult></Classfiveeditresult>
              </Route>
              
              {/* ------------principal route---------- */}
              <Route path="/principaldashboard">
                <Principaldashboard></Principaldashboard>
              </Route>
              <Route exact path="/princpalpublishnotice">
                <Princpalpublishnotice></Princpalpublishnotice>
              </Route>
              
            </Switch>
        </Router>
        </Authprovider>
    </div>
  );
}

export default App;
