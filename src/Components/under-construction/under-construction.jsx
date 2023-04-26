import React, { Component } from "react";
import Header from "../header/header";
import { Helmet } from "react-helmet";
import SideBar from "../side-bar/side-bar";
import withWebsiteData from "../hoc/with-website-data";

import banner_img from "../../assets/images/under-construction.svg";
class UnderConstruction extends Component {
  state = {};
  render() {
    const { user } = this.props;
    return (
      <>
        <Helmet>
          <title>در حال ساخت این صفحه هستیم</title>
        </Helmet>
        <Header user={user ? user : false} />
        <section className="under-construction-section bgc-wrapper">
          <div className="under-construction mm-width">
            <SideBar />
            <div className="main-content">
              <h1>
                دوست خوبم این صفحه رو داریم برات آماده میکنیم طی چند روز آینده
                میتونی ازش استفاده کنی
              </h1>
              <img src={banner_img} alt="صفحه در حال ساخته شدن است" />
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default withWebsiteData(UnderConstruction);
