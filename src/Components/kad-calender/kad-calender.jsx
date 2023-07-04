import React, { Component } from "react";
import { Helmet } from "react-helmet";
import SideBar from "../side-bar/side-bar";
import withWebsiteData from "../hoc/with-website-data";

import banner from "../../assets/images/week-plan-banner.jpg";

class Kad_calender extends Component {
  state = {};
  render() {
    return (
      <>
        <Helmet>
          <title>تقویم کاد</title>
        </Helmet>
        <section className="bgc-wrapper">
          <div className="weekplan-kad-wrapper mm-width">
            <SideBar />
            <div className="main-content">
              <h1 className="title">تقویم کاد</h1>
              <img src={banner} alt="برنامه هفتگی کاد" />
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default withWebsiteData(Kad_calender);
