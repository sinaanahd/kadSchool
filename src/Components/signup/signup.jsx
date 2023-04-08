import React, { Component } from "react";
import { Helmet } from "react-helmet";
import Header from "../header/header";

import hero_img from "../../assets/images/login-img.svg";
class SignUp extends Component {
  state = {
    agree: false,
  };
  agree_handler = () => {
    const agree = !this.state.agree;
    this.setState({ agree });
  };
  render() {
    return (
      <>
        <Helmet>
          <title>ثبت نام در کاد</title>
        </Helmet>
        <Header />
        <section className="singup-wrapper-section bgc-wrapper">
          <div className="signup-wrapper mm-width">
            <img src={hero_img} className="hero_img" />
            <div className="forms-wrapper">
              <h1 className="title">ثبت نام</h1>
              <input type="text" placeholder="نام و نام‌خانوادگی" />
              <select name="" id="" placeholder="">
                <option value="">پایه تحصیلی</option>
                <option value="">دهم</option>
                <option value="">یازدهم</option>
                <option value="">دوازدهم</option>
              </select>
              <select name="" id="" placeholder="">
                <option value="">رشته تحصیلی</option>
                <option value="">ریاضی</option>
                <option value="">تجربی</option>
                <option value="">انسانی</option>
              </select>
              <span
                onClick={() => {
                  this.agree_handler();
                }}
                className="agree_to-rules">
                <p>با قوانین و مقررات کاد موافقم</p>
                <span
                  className={
                    this.state.agree ? "check checked" : "check"
                  }></span>
              </span>
              <span className="submit-btn">ثبت نام</span>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default SignUp;
