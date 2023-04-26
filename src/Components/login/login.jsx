import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import scrollToTop from "../functions/scroll";
import withWebsiteData from "../hoc/with-website-data";
import mainLogo from "../../assets/images/main-logo.webp";
import login_bgc from "../../assets/images/login-img.svg";

class Login extends Component {
  state = {};
  componentDidMount() {
    const { user } = this.props;
    document.querySelector(".main-footer").style.display = "none";
    if (user) {
      window.location.href = window.location.href.replace("Login", "Dashboard");
    }
  }
  componentWillUnmount() {
    document.querySelector(".main-footer").style.display = "flex";
  }
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

export default withWebsiteData(Login);
