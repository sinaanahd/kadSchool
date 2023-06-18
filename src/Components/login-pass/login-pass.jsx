import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import scrollToTop from "../functions/scroll";
import withWebsiteData from "../hoc/with-website-data";
import mainLogo from "../../assets/images/main-logo.webp";
import login_bgc from "../../assets/images/login-img.svg";
import axios from "axios";
import LittleLoading from "../reuseables/little-loading";

class LoginPass extends Component {
  state = {
    phone_number: false,
    err_phone: false,
    pause: false,
    verification_code: false,
    user_id: false,
    been_before: false,
    entry_code: false,
    enter_code_status: false,
    no_more_code: false,
  };
  componentDidMount() {
    const { user } = this.props;
    // document.querySelector(".new-footer").style.display = "none";
    // document.querySelector(".main-header").style.display = "none";
    // if (user) {
    //   window.location.href = window.location.href.replace("Login", "Dashboard");
    // }
  }
  // componentWillUnmount() {
  //   document.querySelector(".new-footer").style.display = "flex";
  //   document.querySelector(".main-header").style.display = "flex";
  // }
  handle_phone_number = ({ target }) => {
    const { value } = target;
    if (value.length === 0) {
      const err_phone = "این فیلد نباید خالی باشد";
      this.setState({ err_phone });
    } else if (!value.startsWith(0)) {
      const err_phone = "شماره موبایل باید با صفر شروع بشه";
      this.setState({ err_phone });
    } else if (value.length !== 11) {
      const err_phone = "شماره تلفن باید ۱۱ رقم باشد";
      this.setState({ err_phone });
    } else {
      this.setState({ phone_number: value, err_phone: false });
    }
  };
  render() {
    return (
      <>
        <Helmet>
          <title>ورود به سایت</title>
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
          <div className="login-wrapper mm-width">
            <div className="forms-wrapper">
              <h1>ورود به سایت</h1>
              <input
                type="number"
                className="input-text input"
                placeholder="تلفن همراه"
                onInput={(e) => {
                  this.handle_phone_number(e);
                }}
              />
              {this.state.err_phone ? (
                <span className="error-place">{this.state.err_phone}</span>
              ) : (
                <></>
              )}
              <input
                type="password"
                className="input-text input pass"
                placeholder="رمز عبور"
              />

              {this.state.verification_code ? (
                <span
                  onClick={() => {
                    this.check_user();
                  }}
                  className="enter button-span">
                  ورود
                </span>
              ) : (
                <span className="enter button-span fail">ورود</span>
              )}
              {this.state.enter_code_status ? (
                <span className="error-place need-margin">
                  {this.state.enter_code_status}
                </span>
              ) : (
                <></>
              )}
              <span className="enter-with-other-way forget">
                <Link to="/Forget-password">فراموشی رمز عبور</Link>
              </span>
              <span className="enter-with-other-way">
                <Link to="/Login">ورود با استفاده از کد یکبار مصرف</Link>
              </span>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default withWebsiteData(LoginPass);
