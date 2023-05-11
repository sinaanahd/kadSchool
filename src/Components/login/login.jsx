import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import scrollToTop from "../functions/scroll";
import withWebsiteData from "../hoc/with-website-data";
import mainLogo from "../../assets/images/main-logo.webp";
import login_bgc from "../../assets/images/login-img.svg";
import axios from "axios";
import LittleLoading from "../reuseables/little-loading";

class Login extends Component {
  state = {
    phone_number: false,
    err_phone: false,
    pause: false,
    verification_code: false,
    user_id: false,
    been_before: false,
    entry_code: false,
    enter_code_status: false,
  };
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
  get_verification_code = () => {
    this.setState({ pause: true });
    axios
      .get(
        `https://daryaftyar.ir/backend/kad_api/verify_phone_number/${this.state.phone_number}`
      )
      .then((res) => {
        this.setState({ pause: false });
        const { been_before, user_id, verification_code } = res.data;
        const test = {
          been_before: been_before,
          user_id: user_id,
          verification_code: verification_code,
        };
        localStorage.setItem(
          "kad-phone-number",
          JSON.stringify(this.state.phone_number)
        );
        if (been_before) {
          //window.location.pathname = "/SignUp";
          this.setState({ user_id });
        }
        this.setState({ verification_code, been_before });
      })
      .catch((err) => console.log(err));
  };
  check_user = () => {
    const entry_code = this.state.entry_code;
    const code = this.state.verification_code;
    const been = this.state.been_before;
    if (code === entry_code) {
      if (been) {
        axios
          .get(
            ` https://daryaftyar.ir/backend/kad_api/user/${this.state.user_id}`
          )
          .then((res) => {
            const user = res.data;
            localStorage.setItem("user-kad", JSON.stringify(user));
            this.props.inside_user(user);
            window.location.pathname = "/Dashboard";
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        window.location.pathname = "/SignUp";
      }
    } else {
      const enter_code_status = "کد وارد شده صحیح نمی باشد";
      this.setState({ enter_code_status });
    }
  };
  handle_verication_code = ({ target }) => {
    const { value } = target;
    const code = this.state.verification_code;
    if (value.length === code.length) {
      this.setState({ entry_code: value });
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
              {this.state.err_phone || !this.state.phone_number ? (
                <span className="get-code button-span fail">دریافت کد</span>
              ) : (
                <span
                  className="get-code button-span"
                  onClick={() => {
                    this.get_verification_code();
                  }}>
                  {this.state.pause ? <LittleLoading /> : "دریافت کد"}
                </span>
              )}
              <input
                type="number"
                className="input-text input"
                placeholder="کد یکبار مصرف"
                onInput={(e) => this.handle_verication_code(e)}
              />
              {/* onClick={() => {
                  scrollToTop();
                }} */}

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
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default withWebsiteData(Login);
