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
import Footer from './Components/footer/footer';
import './App.css';
class App extends Component {
  state = {}
  render() {
    return (<>
      <Switch>
        <Route path="/Dashboard" component={Dashboard} />
        <Route path="/Topics" component={Topics} />
        <Route path="/Profile" component={Profile} />
        <Route path="/Finance" component={FinancialStuff} />
        <Route path="/Courses" component={Courses} />
        <Route path="/Course/:id" component={RecordedCourses} />
        <Redirect from="/" exact to="/Dashboard" />
      </Switch>
      <Footer />
    </>);
  }
}

export default App;
