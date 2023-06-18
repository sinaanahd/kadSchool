import React, { Component } from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";
import { Redirect } from 'react-router-dom';
import Dashboard from './Components/dashboard/dashboard';
import Courses from './Components/courses/courses';
import RecordedCourses from "./Components/recorded-courses/recorded-courses";
import Topics from './Components/topics/topics';
import FinancialStuff from './Components/finalcial-stuff/financial-stuff';
import Profile from './Components/profile/profile';
import UnderConstruction from './Components/under-construction/under-construction';
import Login from './Components/login/login';
import Support from './Components/support-page/support-page';
import SingleSession from './Components/single-session/single-session';
import FreeCourses from './Components/free-courses/free-courses';
import SignUp from './Components/signup/signup';
import Shop from "./Components/shop/shop";
import SingleProd from "./Components/single-prod/single-prod";
import Teacher from "./Components/teacher/teacher";
import SingleCourse from "./Components/single-course/single-course";
import Cart from './Components/cart/cart';
import Fianance from "./Components/fianance/fianance";
import newSingleSession from './Components/single-session/new-single-session';
import setPassword from './Components/set-password/set-password';
import Teachers from './Components/Teachers/teachers';
import FAQ from './Components/FAQ/FAQ';
import NeededApps from './Components/needed-apps/needed-apps';
import LoginPass from './Components/login-pass/login-pass';
import ForgetPassword from './Components/forget-password/forget-password';
import SetNewPassword from './Components/set-new-password/set-new-password';
import './App.css';
class App extends Component {
  state = {}
  render() {
    return (<>
      <Switch>
        <Route path="/Dashboard" component={Dashboard} />
        <Route path="/Topics" component={Topics} />
        <Route path="/Profile" component={Profile} />
        {/* <Route path="/Finance" component={FinancialStuff} /> */}
        <Route path="/Finance" component={Fianance} />
        <Route path="/Courses" component={Courses} />
        <Route path="/FreeCourses" component={FreeCourses} />
        <Route path="/Course/:id" component={RecordedCourses} />
        <Route path="/SingleSession/:id" component={SingleSession} />
        <Route path="/Stream/:id" component={newSingleSession} />
        <Route path="/Login" component={Login} />
        <Route path="/LoginPass" component={LoginPass} />
        <Route path="/Forget-password" component={ForgetPassword} />
        <Route path="/SignUp" component={SignUp} />
        <Route path="/SetPassword" component={setPassword} />
        <Route path="/Set-new-password" component={SetNewPassword} />
        <Route path="/Support" component={Support} />
        <Route path="/Shop" component={Shop} />
        <Route path="/Cart" component={Cart} />
        <Route path="/FAQ" component={FAQ} />
        <Route path="/Needed-apps" component={NeededApps} />
        <Route path="/SingleProd/:id" component={SingleProd} />
        <Route path="/Teachers/" component={Teachers} />
        <Route path="/Teacher/:id" component={Teacher} />
        <Route path="/SingleCourse/:id" component={SingleCourse} />
        <Redirect from="/" exact to="/Dashboard" />
        <Route path="/UnderConstruction" component={UnderConstruction} />
        <Route path="/not-found" component={UnderConstruction} />
        <Redirect to="/not-found" />
      </Switch>
      {/* <Footer /> */}
    </>);
  }
}

export default App;
