import React, { Component } from "react";
import convert_to_persian from "../../functions/convert-to-persian";

import pen from "../../../assets/images/pen-profile.svg";
import arrow from "../../../assets/images/dow-arroow-filter.svg";
import profile_sample from "../../../assets/images/user-sample-icon.png";
class Info extends Component {
  state = {
    active_option: false,
    s_g_active: false,
    intro: false,
    intro_text: "معرفی دوستان",
    subject_text: "ریاضی",
    grade_text: "نهم",
    day: 1,
    month: "فروردین",
    year: "1401",
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
  handle_intro_ways = () => {
    const intro = !this.state.intro;
    this.setState({ intro });
  };
  select_intro = (intro_text) => {
    this.setState({ intro_text, intro: false });
  };
  handle_grade_text = (grade_text) => {
    this.setState({ grade_text, s_g_active: false });
  };
  handle_subject_text = (subject_text) => {
    this.setState({ subject_text, s_g_active: false });
  };
  render() {
    const {
      days,
      month,
      day,
      year,
      months,
      years,
      handle_day,
      handle_month,
      handle_year,
    } = this.props;
    return (
      <div className="info-wrapper">
        <div className="col-1 cols">
          <span className="profile-photo-wrapper">
            <span className="title">تصویر پروفایل</span>
            <span className="img-wrapper">
              <img src={profile_sample} alt="" />
            </span>
            <img src={pen} alt="" />
          </span>
          <span className="input-wrapper">
            <span className="title">نام و نام خانوادگی*</span>
            <input type="text" placeholder="مثال :‌ محمد محمدی" />
          </span>
          <span className="input-wrapper">
            <span className="title">تاریخ تولد</span>
            <span className="birthday-input-wrapper">
              <span className="day birthday-input">
                <span className="text">
                  {day ? convert_to_persian(day) : ""}
                </span>
                <img
                  src={arrow}
                  onClick={() => {
                    this.handle_active_option("days");
                  }}
                  alt=""
                />
                {this.state.active_option === "days" ? (
                  <span
                    onClick={() => {
                      this.handle_active_option(false);
                    }}
                    className="days b-options">
                    {days.length !== 0 ? (
                      days.map((d) => (
                        <span
                          onClick={() => {
                            handle_day(d);
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
                  <span
                    onClick={() => {
                      this.handle_active_option(false);
                    }}
                    className="months  b-options">
                    {months ? (
                      months.map((m, i) => (
                        <span
                          onClick={() => {
                            handle_month(i);
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
              <span
                onClick={() => {
                  this.handle_active_option("years");
                }}
                className="year birthday-input">
                <span className="text">
                  {year ? convert_to_persian(year) : ""}
                </span>
                <img src={arrow} alt="" />
                {this.state.active_option === "years" ? (
                  <span
                    onClick={() => {
                      this.handle_active_option(false);
                    }}
                    className="years  b-options">
                    {years ? (
                      years.map((y) => (
                        <span
                          onClick={() => {
                            handle_year(y);
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
            <input type="number" placeholder="مثال : ۰۹۱۲۳۴۵۶۷۸۹" />
          </span>
          <span className="input-wrapper">
            <span className="title">آدرس منزل</span>
            <textarea placeholder="مثال : تهران ٫ خیابان جمالزاده ٫ نرسیده به وحید نظری ٫ پلاک ۱ ٫ واحد ۱"></textarea>
          </span>
          <span className="input-wrapper">
            <span className="title">شماره ثابت*</span>
            <input type="number" placeholder="مثال : ۰۲۱۶۶۸۸۱۱۲۲" />
          </span>
          <span className="input-wrapper">
            <span className="title">رشته تحصیلی*</span>
            <span className="subject-wrapper">
              <span className="text">{this.state.subject_text}</span>
              <img
                onClick={() => {
                  this.handle_sg_active("subject");
                }}
                src={arrow}
                alt=""
              />
              {this.state.s_g_active === "subject" ? (
                <span className="s-g-options">
                  <span
                    onClick={() => {
                      this.handle_subject_text("تجربی");
                    }}>
                    تجربی
                  </span>
                  <span
                    onClick={() => {
                      this.handle_subject_text("ریاضی");
                    }}>
                    ریاضی
                  </span>
                  <span
                    onClick={() => {
                      this.handle_subject_text("انسانی");
                    }}>
                    انسانی
                  </span>
                  <span
                    onClick={() => {
                      this.handle_subject_text("هنر");
                    }}>
                    هنر
                  </span>
                  <span
                    onClick={() => {
                      this.handle_subject_text("زبان‌خارجه");
                    }}>
                    زبان‌خارجه
                  </span>
                </span>
              ) : (
                <></>
              )}
            </span>
          </span>
          <span className="input-wrapper">
            <span className="title">پایه تحصیلی*</span>
            <span className="subject-wrapper">
              <span className="text">{this.state.grade_text}</span>
              <img
                onClick={() => {
                  this.handle_sg_active("grade");
                }}
                src={arrow}
                alt=""
              />
              {this.state.s_g_active === "grade" ? (
                <span className="s-g-options">
                  <span
                    onClick={() => {
                      this.handle_grade_text("نهم");
                    }}>
                    نهم
                  </span>
                  <span
                    onClick={() => {
                      this.handle_grade_text("دهم");
                    }}>
                    دهم
                  </span>
                  <span
                    onClick={() => {
                      this.handle_grade_text("یازدهم");
                    }}>
                    یازدهم
                  </span>
                  <span
                    onClick={() => {
                      this.handle_grade_text("دوازدهم");
                    }}>
                    دوازدهم
                  </span>
                </span>
              ) : (
                <></>
              )}
            </span>
          </span>
        </div>
        <div className="col-2 cols">
          <div className="introduced-to-kad">
            <span className="title-way">از چه طریقی با کاد آشنا شدید؟</span>
            <span className="input-btn-wrapper">
              <span
                className="select-input"
                onClick={() => {
                  this.handle_intro_ways();
                }}>
                <span className="s-text">{this.state.intro_text}</span>
                <img src={arrow} alt="" />
              </span>
              <span className="submit-ways">ثبت</span>
              <span
                className={
                  this.state.intro
                    ? "select-options active-intro"
                    : "select-options"
                }>
                <span
                  className="select-option"
                  onClick={() => {
                    this.select_intro("معرفی دوستان");
                  }}>
                  معرفی دوستان
                </span>
                <span
                  className="select-option"
                  onClick={() => {
                    this.select_intro("تلگرام");
                  }}>
                  تلگرام
                </span>
                <span
                  className="select-option"
                  onClick={() => {
                    this.select_intro("ایسنتاگرام");
                  }}>
                  ایسنتاگرام
                </span>
                <span
                  className="select-option"
                  onClick={() => {
                    this.select_intro("شبکه های اجتماعی داخلی");
                  }}>
                  شبکه های اجتماعی داخلی
                </span>
                <span
                  className="select-option"
                  onClick={() => {
                    this.select_intro("تبلیغات سایت ها");
                  }}>
                  تبلیغات سایت ها
                </span>
                <span
                  className="select-option"
                  onClick={() => {
                    this.select_intro("معرفی مشاور تحصیلی");
                  }}>
                  معرفی مشاور تحصیلی
                </span>
                <span
                  className="select-option"
                  onClick={() => {
                    this.select_intro("تماس پشتیبان موسسه");
                  }}>
                  تماس پشتیبان موسسه
                </span>
              </span>
            </span>
          </div>
          <div className="change-pass-wrapper">
            <span className="change-pass-title">تغییر رمز عبور</span>
            <span className="pass-input-wrapper">
              <span className="input-tt">رمز عبور</span>
              <input type="password" name="" id="" />
            </span>
            <span className="pass-input-wrapper">
              <span className="input-tt">تکرار رمز عبور</span>
              <input type="password" name="" id="" />
            </span>
            <span className="change-pass-btn">تغییر رمز عبور</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Info;
