import React, { Component, useContext } from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";
import { Redirect } from 'react-router-dom';
// import Dashboard from './Components/dashboard/dashboard';
// import Courses from './Components/courses/courses';
// import RecordedCourses from "./Components/recorded-courses/recorded-courses";
// import Topics from './Components/topics/topics';
// import FinancialStuff from './Components/finalcial-stuff/financial-stuff';
// import Profile from './Components/profile/profile';
import UnderConstruction from './Components/under-construction/under-construction';
import Login from './Components/login/login';
import Support from './Components/support-page/support-page';
// import SingleSession from './Components/single-session/single-session';
// import FreeCourses from './Components/free-courses/free-courses';
import SignUp from './Components/signup/signup';
import Shop from "./Components/shop/shop";
import SingleProd from "./Components/single-prod/single-prod";
import SingleTeacher from "./Components/single-teacher/single-teacher";
import SingleCourse from "./Components/single-course/single-course";
import Cart from './Components/cart/cart';
// import Fianance from "./Components/fianance/fianance";
// import newSingleSession from './Components/single-session/new-single-session';
import setPassword from './Components/set-password/set-password';
import Teachers from './Components/Teachers/teachers';
import FAQ from './Components/FAQ/FAQ';
// import NeededApps from './Components/needed-apps/needed-apps';
import LoginPass from './Components/login-pass/login-pass';
import ForgetPassword from './Components/forget-password/forget-password';
import SetNewPassword from './Components/set-new-password/set-new-password';
import Payment from './Components/payment/payment';
import HomePage from './Components/home/home';
import WhyKad from './Components/why-kad/why-kad';
import './App.css';
import KadCalender from './Components/kad-calender/kad-calender';
import Rules from './Components/rules/rules';
import TopStudents from './Components/top-students/top-students';
import Apolo11 from './Components/campaign/apolo-11/apolo-11';
import Apollo_11_2 from './Components/campaign/apolo-11/apollo-11-2';
import ReferalSignup from './Components/referal/referal-signup';
import StudyPlan from './Components/study-plan/study-plan';
import NewPanelNotice from './Components/new-panel-notice/new-panel-notice';
// context refactor
import NewShop from './Components/shop/new-shop';
import R_SingleTeacher from './Components/single-teacher/r-single-teacher';
import specialDiscount from './Components/special-discount/special-discount';
import SingleClass from './Components/single-prod/single-class';
import HomeHeader from './Components/home/header/home-header';
import HomeFooter from './Components/home/footer/home-footer';
import { DataContext } from './Components/context/DataContext';
import TopSiteSlider from './Components/top-site-slider/top-site-slider';
// context refactor

const App = () => {
  const {banners} = useContext(DataContext)
  return ( <>
  <TopSiteSlider
        banners={
          banners
            ? [...banners.filter((b) => b.banner_type === "home_page_banners")]
            : []
        }
      />
      {
        window.location.pathname === "/Login" ||
          window.location.pathname === "/LoginPass" ||
          window.location.pathname === "/Forget-password" ||
          window.location.pathname === "/Set-new-password" ||
          window.location.pathname === "/SignUp" ||
          window.location.pathname.includes("/Referal-signup") ||
          window.location.pathname === "/SetPassword" ? <></> : <HomeHeader not_home={
          window.location.pathname !== "/HomePage" ? "not-home" : "is-home"
        } />
      }
    
      <Switch>
        <Route path="/HomePage" component={HomePage} />
        {/* <Route path="/Dashboard" component={Dashboard} /> */}
        <Route path="/Dashboard" component={NewPanelNotice} />
        {/* <Route path="/Profile" component={Profile} /> */}
        <Route path="/Profile" component={NewPanelNotice} />
        <Route path="/apollo-11" component={Apolo11} />
        <Route path="/apollo-prizes" component={Apollo_11_2} />
        <Route path="/Why-kad" component={WhyKad} />
        {/* <Route path="/Payment" component={Payment} /> */}
        {/* <Route path="/Courses" component={Courses} /> */}
        <Route path="/Courses" component={NewPanelNotice} />
        <Route path="/Rules" component={Rules} />
        <Route path="/Kad-calender" component={KadCalender} />
        {/* <Route path="/FreeCourses" component={FreeCourses} /> */}
        <Route path="/FreeCourses" component={NewPanelNotice} />
        {/* <Route path="/Course/:id" component={RecordedCourses} /> */}
        <Route path="/Course/:id" component={NewPanelNotice} />
        {/* <Route path="/SingleSession/:id" component={SingleSession} /> */}
        <Route path="/SingleSession/:id" component={NewPanelNotice} />
        {/* <Route path="/Stream/:id" component={newSingleSession} /> */}
        <Route path="/Login" component={Login} />
        <Route path="/Top-students" component={TopStudents} />
        <Route path="/LoginPass" component={LoginPass} />
        <Route path="/Forget-password" component={ForgetPassword} />
        <Route path="/SignUp" component={SignUp} />
        <Route path="/SetPassword" component={setPassword} />
        <Route path="/Set-new-password" component={SetNewPassword} />
        <Route path="/Support" component={Support} />
        <Route path="/Cart" component={Cart} />
        <Route path="/FAQ" component={FAQ} />
        <Route path="/Needed-apps" component={NewPanelNotice} />
        <Route path="/Shop/product/:id" exact component={SingleProd} />
        <Route path="/Shop" component={Shop} />
        <Route path="/Teachers/:id" exact component={SingleTeacher} />
        <Route path="/Teachers/" component={Teachers} />
        <Route path="/Dore/:id" component={SingleCourse} />
        {/* 
          re-design / re-factor
        */}
        <Route path="/new-shop/:kind/:title" component={NewShop} />
        <Route path="/r-Teachers/:id" component={R_SingleTeacher} />
        <Route path="/r-class/:id" component={SingleClass} />
        {/* 
          re-design / re-factor
        */}


        {/*  special discount */}
        <Route path="/special-discount" component={specialDiscount} />
        {/*  special discount */}
        <Route path="/Referal-signup/:id" component={ReferalSignup} />
        <Route path="/study-plan" component={StudyPlan} />
        <Redirect from="/" exact to="/HomePage" />
        <Route path="/UnderConstruction" component={UnderConstruction} />
        <Route path="/not-found" component={UnderConstruction} />
        <Redirect to="/not-found" />
      </Switch>

      {
        window.location.pathname === "/Login" ||
          window.location.pathname === "/LoginPass" ||
          window.location.pathname === "/Forget-password" ||
          window.location.pathname === "/Set-new-password" ||
          window.location.pathname === "/SignUp" ||
          window.location.pathname.includes("/Referal-signup") ||
          window.location.pathname === "/SetPassword" ? <></> : 
          <HomeFooter not_home="f-not-home" />
      }
    </> );
}
export default App;
