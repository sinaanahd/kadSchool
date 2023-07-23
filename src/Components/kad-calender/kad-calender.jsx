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
          <meta
            name="description"
            content="در اینجا شما می‌توانید تقویم آموزشی کاد را مشاهده کنید و از برنامه هفتگی ما مطلع شوید و همچنین هیچ رویدادی را از دست ندهید. برنامه‌های یادگیری ما را با دقت دنبال کنید و از تمام رویدادهای آینده ما باخبر شوید."
          />
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
