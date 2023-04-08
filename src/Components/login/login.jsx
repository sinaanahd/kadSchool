import React, { Component } from "react";
import { Helmet } from "react-helmet";
import Header from "../header/header";

import login_img from "../../assets/images/login-img.svg";
import { Link } from "react-router-dom";
import scrollToTop from "../functions/scroll";
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
              <Link
                to="/SignUp"
                onClick={() => {
                  scrollToTop();
                }}
                className="enter button-span">
                ورود
              </Link>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Login;
