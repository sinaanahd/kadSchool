import React, { Component } from "react";
import { Helmet } from "react-helmet";
import Header from "../header/header";

import login_img from "../../assets/images/login-img.svg";
class Login extends Component {
  state = {};
  render() {
    return (
      <>
        <Helmet>
          <title>ورود به سایت</title>
        </Helmet>
        <Header />
        <section className="login-wrapper-section bgc-wrapper">
          <div className="login-wrapper mm-width">
            <img src={login_img} className="hero_img" />
            <div className="forms-wrapper">
              <h1>ورود به سایت</h1>
              <input
                type="text"
                className="input-text input"
                placeholder="تلفن همراه"
              />
              <span className="get-code button-span">دریافت کد</span>
              <input
                type="text"
                className="input-text input"
                placeholder="کد یکبار مصرف"
              />
              <span className="enter button-span">ورود</span>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Login;
