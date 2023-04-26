import React, { Component } from "react";
import Header from "../header/header";
import SideBar from "../side-bar/side-bar";
import Counter from "./counter/counter";
import { Helmet } from "react-helmet";
import Calender_2 from "./calender/calender-2";
import withWebsiteData from "../hoc/with-website-data";
class Dashboard extends Component {
  state = {
    classes: true,
  };
  render() {
    const { user } = this.props;
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
        <Header user={user ? user : false} />
        <section className="bgc-wrapper">
          <div className="dashboard mm-width">
            <SideBar />
            <div className="contetnt-wrapper">
              <div className="slider-calender">
                <Counter />
                <div className="orange-wrapper"></div>
              </div>
              {/* <div className="events-wrapper">
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
              </div> */}
              {/* <Calender /> */}
              <Calender_2 />
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default withWebsiteData(Dashboard);
