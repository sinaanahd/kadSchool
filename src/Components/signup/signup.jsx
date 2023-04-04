import React, { Component } from "react";
import { Helmet } from "react-helmet";
import Header from "../header/header";

import hero_img from "../../assets/images/login-img.svg";
class SignUp extends Component {
  state = {};
  render() {
    return (
      <>
        <Helmet>
          <title>ثبت نام در کاد</title>
        </Helmet>
        <Header />
        <section className="login-wrapper-section bgc-wrapper">
          <img src={hero_img} className="hero_img" />
          <div className="forms-wrapper">
            <input type="text" placeholder="نام و نام‌خانوادگی" />
            <input type="number" placeholder="" />
          </div>
        </section>
      </>
    );
  }
}

export default SignUp;
