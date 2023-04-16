import React, { Component } from "react";
import Header from "../header/header";
import SideBar from "../side-bar/side-bar";
import Calender from "./calender/calender";
import Counter from "./counter/counter";
import DateCalender from "./date/date";
import { Helmet } from "react-helmet";
import TodayClass from "./class/class";
import noClassImg from "../../assets/images/no-class.svg";
class Dashboard extends Component {
  state = {
    classes: true,
  };

  render() {
    return (
      <>
        <Helmet>
          <title>داشبورد کاربری کاد</title>
          <meta
            name="description"
            content="صفحه کابری پنل دانش آموزان کاد برای دیدن اطلاعات شخصی"
          />
          <meta
            name="keywords"
            content="پنل دانش آموزی, کاد, کلاس های اینترنتی دریافت"
          />
        </Helmet>
        <Header />
        <section className="bgc-wrapper">
          <div className="dashboard mm-width">
            <SideBar />
            <div className="contetnt-wrapper">
              <div className="orange-wrapper"></div>
              <div className="events-wrapper">
                <div className="todays-classes">
                  <h2 className="title">کلاس های امروز من</h2>
                  {this.state.classes ? (
                    <div className="classes-wrapper">
                      <TodayClass />
                      <TodayClass />
                      <TodayClass />
                      <TodayClass />
                      <TodayClass />
                      <TodayClass />
                      <TodayClass />
                      <TodayClass />
                    </div>
                  ) : (
                    <div className="no-class">
                      <img src={noClassImg} alt="کلاس ندارید" />
                      <p>امروز کلاسی نداری</p>
                    </div>
                  )}
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
