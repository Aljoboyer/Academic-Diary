import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Teachershome from './Pages/Teacherspage/Teachershome/Teachershome';
import Maintainance from './Pages/Teacherspage/Maintainance/Maintainance';
import Publishnotice from './Pages/Teacherspage/Publishnotice/Publishnotice';
import Resultedit from './Pages/Teacherspage/MaintainStudents/ResultEdit/Resultedit';
import Individualpaymentcheck from './Pages/Teacherspage/Paymentcheckpage/Individualpaymentcheck';
import Principaldashboard from './Pages/Principalpages/Principaldashboard/Principaldashboard';
import Princpalpublishnotice from './Pages/Principalpages/PrincipalPublishNotice/Princpalpublishnotice';
import Individualresult from './Pages/Teacherspage/MaintainStudents/Individualresult';
import Studentdashboard from './Pages/Studentspages/Studentdashboard/Studentdashboard';
import Userhome from './Pages/AlluserHomePages/Userhome/Userhome';
import Alluserloginpage from './Pages/AllusersLonginPage/Alluserloginpage';

function App() {
  return (
    <div className="container-fluid">
        <Router>
            <Switch>
              <Route exact path="/">
                <Userhome></Userhome>
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
              <Route exact path="/individualresult">
                <Individualresult></Individualresult>
              </Route>
              <Route exact path="/publishnotice">
                <Publishnotice></Publishnotice>
              </Route>
              <Route exact path="/resultedit">
                  <Resultedit></Resultedit>
              </Route>
              <Route exact path="/individualpaymentcheck">
                <Individualpaymentcheck></Individualpaymentcheck>
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
    </div>
  );
}

export default App;
