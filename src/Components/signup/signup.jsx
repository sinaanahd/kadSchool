import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import mainLogo from "../../assets/images/main-logo.webp";
import login_bgc from "../../assets/images/login-img.svg";
import checked_img from "../../assets/images/checked.svg";
class SignUp extends Component {
  state = {
    agree: false,
  };
  componentDidMount() {
    document.querySelector(".main-footer").style.display = "none";
  }
  componentWillUnmount() {
    document.querySelector(".main-footer").style.display = "flex";
  }
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
        <section className="login-wrapper-section">
          <img
            src={login_bgc}
            alt="عکس پس زمینه برای صفحه ورود"
            className="login-bgc"
          />
          <Link to="/Dashboard" className="main-logo">
            <img src={mainLogo} alt="وب سایت کاد" />
          </Link>
          <div className="login-wrapper">
            <div className="forms-wrapper">
              <h1 className="title">ثبت نام</h1>
              <input
                type="text"
                placeholder="نام و نام‌خانوادگی"
                className="input"
              />
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
                <span className={this.state.agree ? "check checked" : "check"}>
                  {this.state.agree ? <img src={checked_img} /> : <></>}
                </span>
              </span>
              <span className="button-span">ثبت نام</span>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default SignUp;
