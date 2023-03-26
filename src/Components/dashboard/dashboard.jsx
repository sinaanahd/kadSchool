import React, { Component } from "react";
import Header from "../header/header";
import LittleLoading from "../reuseables/little-loading";
import SideBar from "../side-bar/side-bar";
import Calender from "./calender/calender";
import Counter from "./counter/counter";
import DateCalender from "./date/date";
class Dashboard extends Component {
  state = {};
  render() {
    return (
      <>
        <Header />
        <section className="bgc-wrapper">
          <div className="dashboard mm-width">
            <SideBar />
            <div className="contetnt-wrapper">
              <div className="orange-wrapper"></div>
              <div className="events-wrapper">
                <div className="todays-classes">
                  <h2 className="title">کلاس های امروز</h2>
                  <div className="classes-wrapper">
                    <span className="class"></span>
                  </div>
                </div>
                <div className="date-and-counter">
                  <Counter />
                  <DateCalender />
                </div>
              </div>
              <Calender />
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Dashboard;
