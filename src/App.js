import React, { Component } from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";
import { Redirect } from 'react-router-dom';
import Dashboard from './Components/dashboard/dashboard';
import Courses from './Components/courses/courses';
import Footer from './Components/footer/footer';
import './App.css';
class App extends Component {
  state = {}
  render() {
    return (<>
      <Switch>
        <Route path="/Dashboard" component={Dashboard} />
        <Route path="/Courses" component={Courses} />
        <Redirect from="/" exact to="/Dashboard" />
      </Switch>
      <Footer />
    </>);
  }
}

export default App;
