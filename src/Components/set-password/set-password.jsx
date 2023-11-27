import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import withWebsiteData from "../hoc/with-website-data";
import mainLogo from "../../assets/images/main-logo.webp";
import login_bgc from "../../assets/images/login-img.webp";
import axios from "axios";
import LittleLoading from "../reuseables/little-loading";
import urls from "../urls/url";

class SetPassword extends Component {
  state = {
    pass_1: false,
    pass_2: false,
    pass_err: false,
    pause: false,
  };
  componentDidMount() {
    const { user } = this.props;
    if (user) {
      window.location.pathname = "/Dashboard";
    }
  }
  get_pass_1 = (value) => {
    let pass_err = false;
    let pass_1 = false;
    if (value.length < 8) {
      pass_err = "پسورد نباید کم تر از ۸ کارکتر باشه";
    } else if (value.length > 29) {
      pass_err = "پسورد نباید بیشتر از ۳۰ کاراکتر باشه";
    } else {
      pass_err = "ok";
      pass_1 = value;
    }
    this.setState({ pass_1, pass_err });
  };
  get_pass_2 = (value) => {
    let pass_err = false;
    let pass_2 = false;
    if (value.length < 8) {
      pass_err = "پسورد نباید کم تر از ۸ کارکتر باشه";
    } else if (value.length > 29) {
      pass_err = "پسورد نباید بیشتر از ۳۰ کاراکتر باشه";
    } else {
      pass_err = "ok";
      pass_2 = value;
    }
    this.setState({ pass_2, pass_err });
  };
  change_pass = () => {
    const pass_1 = this.state.pass_1;
    const pass_2 = this.state.pass_2;
    if (pass_1 === pass_2) {
      this.setState({ pause: true });
      const phone_number = JSON.parse(localStorage.getItem("kad-phone-number"));
      // prettier-ignore
      axios
        .patch(
          `${urls.password}${phone_number}`,
          { new_password: pass_1 }
        )
        .then((res) => {
          console.log(res.data);
          const { status, message } = res.data;
          if (status) {
            window.location.pathname = "/Shop";
          } else {
            this.setState({ pass_err: message, pause: false });
          }
        })
        .catch((e) => {
          this.props.handle_error(e);
          this.setState({ pause: false });
        });
    } else {
      this.setState({ pass_err: "پسورد ها با هم مطابقت ندارند" });
    }
  };
  render() {
    return (
      <>
        <Helmet>
          <title>تعیین رمز عبور </title>
          <meta name="description" content="تعیین رمز عبور برای کاد" />
          <meta name="robots" content="noindex" />
        </Helmet>
        <section className="login-wrapper-section">
          <img
            src={login_bgc}
            alt="عکس پس زمینه برای صفحه ورود"
            className="login-bgc"
          />
          <Link to="/HomePage" className="main-logo">
            <img src={mainLogo} alt="وب سایت کاد" />
          </Link>
          <div className="login-wrapper mm-width">
            <div className="forms-wrapper">
              <h1>تعیین رمز عبور</h1>
              <input
                type="password"
                onInput={(e) => {
                  this.get_pass_1(e.target.value);
                }}
                className="input-text input"
                placeholder="رمز عبور"
                id="pass_1"
              />
              <input
                type="password"
                onInput={(e) => {
                  this.get_pass_2(e.target.value);
                }}
                className="input-text input pass"
                placeholder="تکرار رمز عبور"
                id="pass_2"
              />

              {this.state.pass_1 &&
              this.state.pass_2 &&
              this.state.pass_err === "ok" ? (
                <span
                  className="enter button-span"
                  onClick={() => {
                    this.change_pass();
                  }}
                >
                  {this.state.pause ? <LittleLoading /> : "تایید"}
                </span>
              ) : (
                <span className="enter button-span fail">تایید</span>
              )}
              {this.state.pass_err && this.state.pass_err !== "ok" ? (
                <span className="error-place need-margin">
                  {this.state.pass_err}
                </span>
              ) : (
                <></>
              )}
              <span className="skip-this-step">
                <Link to="/Shop">مرحله بعدی</Link>
              </span>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default withWebsiteData(SetPassword);
