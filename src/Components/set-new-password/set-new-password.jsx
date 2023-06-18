import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import scrollToTop from "../functions/scroll";
import withWebsiteData from "../hoc/with-website-data";
import mainLogo from "../../assets/images/main-logo.webp";
import login_bgc from "../../assets/images/login-img.svg";
import axios from "axios";
import LittleLoading from "../reuseables/little-loading";

class SetNewPassword extends Component {
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

  render() {
    return (
      <>
        <Helmet>
          <title>تعیین رمز عبور جدید</title>
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
              <h1>تعیین رمز عبور جدید</h1>
              <p className="pass-desc">توضیحات</p>
              <input
                type="password"
                className="input-text input"
                placeholder="رمزعبور جدید"
              />
              {this.state.verification_code ? (
                <span
                  onClick={() => {
                    this.check_user();
                  }}
                  className="enter button-span">
                  تایید
                </span>
              ) : (
                <span className="enter button-span fail">تایید</span>
              )}
              {this.state.enter_code_status ? (
                <span className="error-place need-margin">
                  {this.state.enter_code_status}
                </span>
              ) : (
                <></>
              )}
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default withWebsiteData(SetNewPassword);
