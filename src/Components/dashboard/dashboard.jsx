import React, { Component } from "react";
import Header from "../header/header";
import SideBar from "../side-bar/side-bar";
import Counter from "./counter/counter";
import { Helmet } from "react-helmet";
import Calender_2 from "./calender/calender-2";
import withWebsiteData from "../hoc/with-website-data";
import Slider from "./slider/slider";
import InspirationSentence from "./inspiration-sentece/inspiration-sentece";
import DaysTip from "./days-tip/days-tip";
class Dashboard extends Component {
  state = {
    classes: true,
  };
  render() {
    const { user, data } = this.props;
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
                <Slider />
                <InspirationSentence />
              </div>
              <div className="calender-video">
                <Calender_2 />
                <DaysTip />
              </div>
            </div>
          </div>
        </section>
        {/* <div>{data.my_log}</div> */}
      </>
    );
  }
}

export default withWebsiteData(Dashboard);
