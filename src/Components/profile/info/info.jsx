import React, { Component } from "react";
import convert_to_persian from "../../functions/convert-to-persian";

import pen from "../../../assets/images/pen-profile.svg";
import arrow from "../../../assets/images/dow-arroow-filter.svg";
class Info extends Component {
  state = {
    active_option: false,
    s_g_active: false,
  };
  handle_active_option = (active_option) => {
    const prev_active = this.state.active_option;
    if (active_option !== prev_active) {
      this.setState({ active_option });
    } else {
      this.setState({ active_option: false });
    }
  };
  handle_sg_active = (s_g_active) => {
    const prev_active = this.state.s_g_active;
    if (s_g_active !== prev_active) {
      this.setState({ s_g_active });
    } else {
      this.setState({ s_g_active: false });
    }
  };
  render() {
    const { days, month, day, year, months, years } = this.props;
    return (
      <div className="info-wrapper">
        <div className="col-1 cols">
          <span className="profile-photo-wrapper">
            <span className="title">تصویر پروفایل</span>
            <span className="img-wrapper">
              <img src="" alt="" />
            </span>
            <img src={pen} alt="" />
          </span>
          <span className="input-wrapper">
            <span className="title">نام و نام خانوادگی*</span>
            <input type="text" />
          </span>
          <span className="input-wrapper">
            <span className="title">تاریخ تولد</span>
            <span className="birthday-input-wrapper">
              <span className="day birthday-input">
                <span className="text">{day ? day : ""}</span>
                <img
                  src={arrow}
                  onClick={() => {
                    this.handle_active_option("days");
                  }}
                  alt=""
                />
                {this.state.active_option === "days" ? (
                  <span className="days b-options">
                    {days.length !== 0 ? (
                      days.map((d) => (
                        <span
                          onClick={() => {
                            this.handle_active_option(false);
                          }}
                          key={d}>
                          {convert_to_persian(d)}
                        </span>
                      ))
                    ) : (
                      <></>
                    )}
                  </span>
                ) : (
                  <></>
                )}
              </span>
              <span className="month birthday-input">
                <span className="text">{month}</span>
                <img
                  src={arrow}
                  onClick={() => {
                    this.handle_active_option("months");
                  }}
                  alt=""
                />
                {this.state.active_option === "months" ? (
                  <span className="months  b-options">
                    {months ? (
                      months.map((m, i) => (
                        <span
                          onClick={() => {
                            this.handle_active_option(false);
                          }}
                          key={i++}>
                          {m}
                        </span>
                      ))
                    ) : (
                      <></>
                    )}
                  </span>
                ) : (
                  <></>
                )}
              </span>
              <span className="year birthday-input">
                <span className="text">{year ? year : ""}</span>
                <img
                  src={arrow}
                  onClick={() => {
                    this.handle_active_option("years");
                  }}
                  alt=""
                />
                {this.state.active_option === "years" ? (
                  <span className="years  b-options">
                    {years ? (
                      years.map((y) => (
                        <span
                          onClick={() => {
                            this.handle_active_option(false);
                          }}
                          key={y}>
                          {convert_to_persian(y)}
                        </span>
                      ))
                    ) : (
                      <></>
                    )}
                  </span>
                ) : (
                  <></>
                )}
              </span>
            </span>
          </span>
          <span className="input-wrapper">
            <span className="title">شماره همراه*</span>
            <input type="number" />
          </span>
          <span className="input-wrapper">
            <span className="title">آدرس منزل</span>
            <textarea></textarea>
          </span>
          <span className="input-wrapper">
            <span className="title">شماره ثابت*</span>
            <input type="number" />
          </span>
          <span className="input-wrapper">
            <span className="title">رشته تحصیلی*</span>
            <span className="subject-wrapper">
              <span className="text">ریاضی</span>
              <img
                onClick={() => {
                  this.handle_sg_active("subject");
                }}
                src={arrow}
                alt=""
              />
              {this.state.s_g_active === "subject" ? (
                <span className="s-g-options">
                  <span>ریاضی</span>
                  <span>تجربی</span>
                  <span>انسانی</span>
                  <span>هنر</span>
                </span>
              ) : (
                <></>
              )}
            </span>
          </span>
          <span className="input-wrapper">
            <span className="title">پایه تحصیلی*</span>
            <span className="subject-wrapper">
              <span className="text">۱۰</span>
              <img
                onClick={() => {
                  this.handle_sg_active("grade");
                }}
                src={arrow}
                alt=""
              />
              {this.state.s_g_active === "grade" ? (
                <span className="s-g-options">
                  <span>دهم</span>
                  <span>یازدهم</span>
                  <span>دوازدهم</span>
                </span>
              ) : (
                <></>
              )}
            </span>
          </span>
        </div>
        <div className="col-2 cols"></div>
      </div>
    );
  }
}

export default Info;
