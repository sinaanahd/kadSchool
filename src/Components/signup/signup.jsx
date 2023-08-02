import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import withWebsiteData from "../hoc/with-website-data";
import mainLogo from "../../assets/images/main-logo.webp";
import checked_img from "../../assets/images/checked.webp";
import axios from "axios";
import RulesPopUp from "./rules-pop-up/rules-pop-up";
import LittleLoading from "../reuseables/little-loading";
import login_bgc from "../../assets/images/login-img.webp";
class SignUp extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.myRef2 = React.createRef();
  }
  state = {
    agree: false,
    year: -1,
    subject: -1,
    name_err: false,
    entry_name: false,
    pause: false,
    err_fileds: {
      year: false,
      subject: false,
    },
    rules_pop_up: false,
  };
  componentDidMount() {
    const { user } = this.props;
    if (user) {
      window.location.href = window.location.href.replace(
        "SignUp",
        "Dashboard"
      );
    }
  }
  handle_rule_pop_up = () => {
    const rules_pop_up = !this.state.rules_pop_up;
    this.setState({ rules_pop_up });
  };
  close_pop_up = () => {
    const rules_pop_up = this.state.rules_pop_up;
    if (rules_pop_up) {
      this.setState({ rules_pop_up: false });
    }
  };
  agree_handler = () => {
    const agree = !this.state.agree;
    this.setState({ agree });
  };
  handle_name = ({ target }) => {
    const { value } = target;
    if (value.length === 0) {
      const name_err = "این فیلد نباید خالی باشد";
      this.setState({ name_err });
    } else if (value.length < 3) {
      const name_err = "اسم حداقل باید ۳ کاراکتر باشد";
      this.setState({ name_err });
    } else {
      const entry_name = value;
      this.setState({ entry_name, name_err: false });
    }
  };
  send_data = () => {
    let year = this.myRef.current.selectedIndex - 1;
    let subject = this.myRef2.current.selectedIndex - 1;
    const err_fileds = { ...this.state.err_fileds };
    const entry_name = this.state.entry_name;
    this.setState({ pause: true });
    switch (year) {
      case -1:
        year = -1;
        break;
      case 0:
        year = 10;
        break;
      case 1:
        year = 11;
        break;
      case 2:
        year = 12;
        break;
    }
    if (year !== -1 && subject !== -1 && !this.state.name_err) {
      const obj = {
        phone_number: JSON.parse(localStorage.getItem("kad-phone-number")),
        name: entry_name,
        grade: this.convert_year(year),
        major: this.convert_major(subject),
      };
      axios
        .post(`https://kadschool.com/backend/kad_api/register_user`, obj)
        .then((res) => {
          let data = res.data;
          axios
            .get(`https://kadschool.com/backend/kad_api/user/${data.user_id}`)
            .then((res) => {
              const user = res.data;
              this.props.inside_user(user);
              window.location.pathname = "/SetPassword";
              this.setState({ pause: false });
            })
            .catch((err) => this.props.handle_error(err));
        })
        .catch((err) => this.props.handle_error(err));
    } else {
      if (year === -1) {
        err_fileds.year = "لطفا یک پایه را انتخاب کنید";
      } else if (subject === -1) {
        err_fileds.year = "لطفا یک رشته را انتخاب کنید";
      }
      this.setState({ err_fileds });
    }
  };
  convert_year = (year) => {
    switch (year) {
      case 10:
        return "دهم";
      case 11:
        return "یازدهم";
      case 12:
        return "دوازدهم";
    }
  };
  convert_major = (subject) => {
    switch (subject) {
      case 0:
        return "ریاضی";
      case 1:
        return "تجربی";
      case 2:
        return "انسانی";
      case 3:
        return "هنر";
    }
  };
  render() {
    return (
      <>
        <Helmet>
          <title>ثبت نام در کاد</title>
          <meta name="description" content="صفحه ثبت نام کاد" />
        </Helmet>
        <section
          className="login-wrapper-section"
          onClick={() => {
            this.close_pop_up();
          }}
        >
          <img
            src={login_bgc}
            alt="عکس پس زمینه برای صفحه ورود"
            className="login-bgc"
          />
          <Link to="/HomePage" className="main-logo">
            <img src={mainLogo} alt="وب سایت کاد" />
          </Link>
          <div className="login-wrapper">
            <div className="forms-wrapper">
              <h1 className="title">ثبت نام</h1>
              <input
                type="text"
                placeholder="نام و نام‌خانوادگی"
                className="input"
                onInput={(e) => {
                  this.handle_name(e);
                }}
              />
              <select name="" id="" placeholder="" ref={this.myRef}>
                <option value={-1}>پایه تحصیلی</option>
                <option value={10}>دهم</option>
                <option value={11}>یازدهم</option>
                <option value={12}>دوازدهم</option>
              </select>
              <select name="" id="" placeholder="" ref={this.myRef2}>
                <option value={-1}>رشته تحصیلی</option>
                <option value={0}>ریاضی</option>
                <option value={1}>تجربی</option>
                <option value={2}>انسانی</option>
                <option value={3}>هنر</option>
              </select>
              <span className="agree_to-rules">
                <p>
                  با{" "}
                  <font
                    className="rules-text"
                    onClick={() => {
                      this.handle_rule_pop_up();
                    }}
                  >
                    قوانین و مقررات
                  </font>{" "}
                  کاد موافقم
                </p>
                <span
                  onClick={() => {
                    this.agree_handler();
                  }}
                  className={this.state.agree ? "check checked" : "check"}
                >
                  {this.state.agree ? <img src={checked_img} /> : <></>}
                </span>
              </span>
              {this.state.agree ? (
                <span
                  onClick={() => {
                    this.send_data();
                  }}
                  className="button-span"
                >
                  {this.state.pause ? <LittleLoading /> : "ثبت نام"}
                </span>
              ) : (
                <span className="button-span fail">ثبت نام</span>
              )}
              {this.state.name_err ? (
                <span className="error-place need-margin">
                  {this.state.name_err}
                </span>
              ) : this.state.err_fileds.subject ? (
                <span className="error-place need-margin">
                  {this.state.err_fileds.subject}
                </span>
              ) : this.state.err_fileds.year ? (
                <span className="error-place need-margin">
                  {this.state.err_fileds.year}
                </span>
              ) : (
                <></>
              )}
            </div>
            {this.state.rules_pop_up ? <RulesPopUp /> : <></>}
          </div>
        </section>
      </>
    );
  }
}

export default withWebsiteData(SignUp);
