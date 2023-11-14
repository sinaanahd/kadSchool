import React, { Component } from "react";
import convert_to_persian from "../../functions/convert-to-persian";
import axios from "axios";
import give_date_data from "../../functions/give-date-data";
import find_month from "../../functions/find-month";
import make_full_objects from "../../functions/make-full-objects";

import arrow from "../../../assets/images/dow-arroow-filter.webp";
import LittleLoading from "../../reuseables/little-loading";
class Info extends Component {
  state = {
    active_option: false,
    s_g_active: false,
    intro: false,
    intro_text: "معرفی دوستان",
    subject_text: false,
    grade_text: false,
    pass_1: false,
    pass_2: false,
    pass_err: false,
    pause: false,
    pass_win: false,
    data_error: false,
    name: false,
    name_err: false,
    days: [],
    month: "",
    day: "",
    years: [],
    year: "",
    months: [],
    address: false,
    address_err: false,
    home_number: false,
    home_number_err: false,
    pause_2: false,
    data_ok: false,
  };
  componentDidMount() {
    const data = give_date_data(0);
    this.setState({
      month: data.name,
      days: data.arr,
      months: data.months,
      years: data.years,
    });
  }
  handle_day = (day) => {
    this.setState({ day });
  };
  handle_month = (month) => {
    this.setState({ month: find_month(month) });
    const data = give_date_data(month);
    const days = [...this.state.days];
    const day = this.state.day;
    //console.log(data.arr, days);
    if (data.arr.length !== days.length) {
      this.setState({ days: data.arr });
      if (day === 31) this.setState({ day: 1 });
    }
  };
  handle_year = (year) => {
    this.setState({ year });
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
          `https://daryaftyar.ir/backend/kad_api/password/${phone_number}`,
          { new_password: pass_1 }
        )
        .then((res) => {
          const { status, message } = res.data;
          if (status) {
            // window.location.pathname = "/Profile";
            this.setState({ pass_win: message, pause: false });
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
  handle_name = (e) => {
    const { value } = e.target;
    let name = false;
    let name_err = false;
    if (value.length === 0) {
      name_err = "ok";
    } else if (value.length < 3) {
      name = false;
      name_err = "اسم وارد شده کوتاه است";
    } else if (value > 50) {
      name = false;
      name_err = "اسم وارد شده طولانی است";
    } else {
      name = value;
      name_err = "ok";
    }
    this.setState({ name_err, name });
  };
  handle_address = (e) => {
    const { value } = e.target;
    let address = false;
    let address_err = false;
    if (value.length === 0) {
      address_err = "ok";
    } else if (value.length < 5) {
      address = false;
      address_err = "آدرس وارد شده کوتاه است";
    } else if (value.length > 100) {
      address = false;
      address_err = "آدرس وارد شده طولانی است";
    } else {
      address = value;
      address_err = "ok";
    }
    this.setState({ address_err, address });
  };
  handle_home_number = (e) => {
    const { value } = e.target;
    let home_number = false;
    let home_number_err = false;
    if (value.length !== 11) {
      home_number_err = "شماره تلفن ثابت باید ۱۱ رقم باشد";
      home_number = false;
    } else if (value.length === 0) {
      home_number_err = "ok";
    } else {
      home_number_err = "ok";
      home_number = value;
    }
    this.setState({ home_number, home_number_err });
  };
  send_data = () => {
    const { user, handle_error, inside_user } = { ...this.props };
    const name = this.state.name ? this.state.name : false;
    const birth_day = this.state.day ? this.state.day : false;
    const birth_month = this.state.month ? this.state.month : false;
    const birth_year = this.state.year ? this.state.year : false;
    const address = this.state.address ? this.state.address : false;
    const home_number = this.state.home_number ? this.state.home_number : false;
    const subject = this.state.subject_text ? this.state.subject_text : false;
    const grade = this.state.grade_text ? this.state.grade_text : false;
    const obj_arr = [
      { title: "name", value: name },
      { title: "birth_day", value: birth_day },
      { title: "birth_month", value: birth_month },
      { title: "birth_year", value: birth_year },
      { title: "home_address", value: address },
      { title: "home_phone_number", value: home_number },
      { title: "major", value: subject },
      { title: "year", value: grade },
    ];
    console.log(make_full_objects(obj_arr));
    const send_obj = make_full_objects(obj_arr);
    if (Object.keys(send_obj).length !== 0) {
      this.setState({ pause: true });
      axios
        .patch(
          `https://daryaftyar.ir/backend/kad_api/user/${user.user_id}`,
          send_obj
        )
        .then((res) => {
          const user = res.data;
          inside_user(user);
          this.setState({ pause: false, data_error: "ok" });
          // console.log(user);
          setTimeout(() => {
            this.setState({ data_error: false });
          }, 3000);
        })
        .catch((e) => {
          handle_error(e);
        });
    }
  };
  handle_recognition = () => {
    const kad_cognition_method = this.state.intro_text;
    const { user, inside_user, handle_error } = this.props;
    this.setState({ pause_2: true });
    axios
      .patch(`https://daryaftyar.ir/backend/kad_api/user/${user.user_id}`, {
        kad_cognition_method: kad_cognition_method,
      })
      .then((res) => {
        const user = res.data;
        inside_user(user);
        this.setState({ pause_2: false, data_ok: true });
        setTimeout(() => {
          this.setState({ data_ok: false });
        }, 3000);
      })
      .catch((e) => {
        handle_error(e);
      });
  };
  render() {
    const { user, ref_years, subjects, make_user_empty } = this.props;
    return (
      <div className="info-wrapper">
        <div className="col-1 cols">
          <span className="input-wrapper">
            <label htmlFor="full-name">
              نام و نام خانوادگی : ({user ? user.name : <LittleLoading />})
            </label>
            <input
              onInput={(e) => {
                this.handle_name(e);
              }}
              type="text"
              placeholder="مثال :‌ محمد محمدی"
              name="full-name"
            />
          </span>
          {this.state.name_err !== "ok" && this.state.name_err ? (
            <span className="data-error-wrapper">{this.state.name_err}</span>
          ) : (
            <></>
          )}
          <span className="input-wrapper">
            <span className="title">
              تاریخ تولد : (
              {user ? (
                user.birth_day && user.birth_month && user.birth_year ? (
                  user.birth_day +
                  " / " +
                  user.birth_month +
                  " / " +
                  user.birth_year
                ) : (
                  "وارد نشده"
                )
              ) : (
                <LittleLoading />
              )}
              )
            </span>
            <span className="birthday-input-wrapper">
              <span className="day birthday-input">
                <span className="text">
                  {this.state.day ? convert_to_persian(this.state.day) : ""}
                </span>
                <img
                  width={20}
                  height={12}
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
                    className="days b-options"
                  >
                    {this.state.days.length !== 0 ? (
                      this.state.days.map((d) => (
                        <span
                          onClick={() => {
                            this.handle_day(d);
                          }}
                          key={d}
                        >
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
                <span className="text">{this.state.month}</span>
                <img
                  width={20}
                  height={12}
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
                    className="months  b-options"
                  >
                    {this.state.months ? (
                      this.state.months.map((m, i) => (
                        <span
                          onClick={() => {
                            this.handle_month(i);
                          }}
                          key={i++}
                        >
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
                className="year birthday-input"
              >
                <span className="text">
                  {this.state.year ? convert_to_persian(this.state.year) : ""}
                </span>
                <img width={20} height={12} src={arrow} alt="" />
                {this.state.active_option === "years" ? (
                  <span
                    onClick={() => {
                      this.handle_active_option(false);
                    }}
                    className="years  b-options"
                  >
                    {this.state.years ? (
                      this.state.years.map((y) => (
                        <span
                          onClick={() => {
                            this.handle_year(y);
                          }}
                          key={y}
                        >
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
            <span className="title">شماره همراه</span>
            <span className="subject-wrapper">
              {user ? user.phone_number : <LittleLoading />}
            </span>
            {/* <input type="number" placeholder="مثال : ۰۹۱۲۳۴۵۶۷۸۹" /> */}
          </span>
          <span className="input-wrapper">
            <span className="title">
              آدرس منزل : (
              {user ? (
                user.home_address === null ? (
                  "وارد نشده"
                ) : (
                  "آدرس وارد شده"
                )
              ) : (
                <LittleLoading />
              )}
              )
            </span>
            <textarea
              onInput={(e) => {
                this.handle_address(e);
              }}
              placeholder={
                user
                  ? user.home_address !== null
                    ? user.home_address
                    : "مثال : تهران ٫ خیابان جمالزاده ٫ نرسیده به وحید نظری ٫ پلاک ۱ ٫ واحد ۱"
                  : "مثال : تهران ٫ خیابان جمالزاده ٫ نرسیده به وحید نظری ٫ پلاک ۱ ٫ واحد ۱"
              }
            ></textarea>
          </span>
          {this.state.address_err !== "ok" && this.state.address_err ? (
            <span className="data-error-wrapper">{this.state.address_err}</span>
          ) : (
            <></>
          )}
          <span className="input-wrapper">
            <label htmlFor="home-number" className="title">
              شماره ثابت : (
              {user ? (
                user.home_phone_number !== null ? (
                  user.home_phone_number
                ) : (
                  "وارد نشده"
                )
              ) : (
                <LittleLoading />
              )}
              )
            </label>
            <input
              onInput={(e) => {
                this.handle_home_number(e);
              }}
              type="number"
              name="home-number"
              placeholder="مثال : ۰۲۱۶۶۸۸۱۱۲۲"
            />
          </span>
          {this.state.home_number_err !== "ok" && this.state.home_number_err ? (
            <span className="data-error-wrapper">
              {this.state.home_number_err}
            </span>
          ) : (
            <></>
          )}
          <span className="input-wrapper">
            <span className="title">
              رشته تحصیلی : (
              {user ? (
                subjects.find((s) => s.id === user.subject).name
              ) : (
                <LittleLoading />
              )}
              )
            </span>
            <span className="subject-wrapper">
              <span className="text">{this.state.subject_text}</span>
              <img
                width={20}
                height={12}
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
                    }}
                  >
                    تجربی
                  </span>
                  <span
                    onClick={() => {
                      this.handle_subject_text("ریاضی");
                    }}
                  >
                    ریاضی
                  </span>
                  <span
                    onClick={() => {
                      this.handle_subject_text("انسانی");
                    }}
                  >
                    انسانی
                  </span>
                  <span
                    onClick={() => {
                      this.handle_subject_text("هنر");
                    }}
                  >
                    هنر
                  </span>
                </span>
              ) : (
                <></>
              )}
            </span>
          </span>
          <span className="input-wrapper">
            <span className="title">
              پایه تحصیلی : (
              {user ? (
                ref_years.find((y) => y.id === user.year).name
              ) : (
                <LittleLoading />
              )}
              )
            </span>
            <span className="subject-wrapper">
              <span className="text">{this.state.grade_text}</span>
              <img
                width={20}
                height={12}
                onClick={() => {
                  this.handle_sg_active("grade");
                }}
                src={arrow}
                alt=""
              />
              {this.state.s_g_active === "grade" ? (
                <span className="s-g-options">
                  {/* <span
                    onClick={() => {
                      this.handle_grade_text("نهم");
                    }}>
                    نهم
                  </span> */}
                  <span
                    onClick={() => {
                      this.handle_grade_text("دهم");
                    }}
                  >
                    دهم
                  </span>
                  <span
                    onClick={() => {
                      this.handle_grade_text("یازدهم");
                    }}
                  >
                    یازدهم
                  </span>
                  <span
                    onClick={() => {
                      this.handle_grade_text("دوازدهم");
                    }}
                  >
                    دوازدهم
                  </span>
                  <span
                    onClick={() => {
                      this.handle_grade_text("کنکور");
                    }}
                  >
                    کنکور
                  </span>
                  <span
                    onClick={() => {
                      this.handle_grade_text("فارغ التحصیل");
                    }}
                  >
                    فارغ التحصیل
                  </span>
                </span>
              ) : (
                <></>
              )}
            </span>
            {/* {this.state.name_err === "ok" ||
            this.state.address_err === "ok" ||
            this.state.home_number_err === "ok" ? ( */}
            <span
              onClick={() => {
                this.send_data();
              }}
              className="submit-info-data-btn"
            >
              {this.state.pause ? <LittleLoading /> : "ثبت تغییرات"}
            </span>
            {/* ) : (
              <span className="submit-info-data-btn fail">ثبت تغییرات</span>
            )} */}
          </span>
          {this.state.data_error === "ok" ? (
            <span className="data-error-wrapper ok">
              اطلاعات با موفقیت ذخیره شد
            </span>
          ) : (
            <></>
          )}
        </div>
        <div className="col-2 cols">
          <div className="introduced-to-kad">
            <span className="title-way">از چه طریقی با کاد آشنا شدید؟</span>
            <span className="input-btn-wrapper">
              <span
                className="select-input"
                onClick={() => {
                  this.handle_intro_ways();
                }}
              >
                <span className="s-text">{this.state.intro_text}</span>
                <img width={20} height={12} src={arrow} alt="" />
              </span>
              <span
                className="submit-ways"
                onClick={() => {
                  this.handle_recognition();
                }}
              >
                {this.state.pause_2 ? <LittleLoading /> : "ثبت"}
              </span>
              <span
                className={
                  this.state.intro
                    ? "select-options active-intro"
                    : "select-options"
                }
              >
                <span
                  className="select-option"
                  onClick={() => {
                    this.select_intro("معرفی دوستان");
                  }}
                >
                  معرفی دوستان
                </span>
                <span
                  className="select-option"
                  onClick={() => {
                    this.select_intro("تلگرام");
                  }}
                >
                  تلگرام
                </span>
                <span
                  className="select-option"
                  onClick={() => {
                    this.select_intro("اینستاگرام");
                  }}
                >
                  اینستاگرام
                </span>
                <span
                  className="select-option"
                  onClick={() => {
                    this.select_intro("شبکه های اجتماعی داخلی");
                  }}
                >
                  شبکه های اجتماعی داخلی
                </span>
                <span
                  className="select-option"
                  onClick={() => {
                    this.select_intro("تبلیغات سایت ها");
                  }}
                >
                  تبلیغات سایت ها
                </span>
                <span
                  className="select-option"
                  onClick={() => {
                    this.select_intro("معرفی مشاور تحصیلی");
                  }}
                >
                  معرفی مشاور تحصیلی
                </span>
                <span
                  className="select-option"
                  onClick={() => {
                    this.select_intro("تماس پشتیبان موسسه");
                  }}
                >
                  تماس پشتیبان موسسه
                </span>
              </span>
            </span>
            {this.state.data_ok ? (
              <span className="ok-way-data">اطلاعات با موفقیت ذخیره شد</span>
            ) : (
              <></>
            )}
          </div>
          <div className="change-pass-wrapper">
            <span className="change-pass-title">تغییر رمز عبور</span>
            <span className="pass-input-wrapper">
              <label htmlFor="pass-1" className="input-tt">
                رمز عبور
              </label>
              <input
                onInput={(e) => {
                  this.get_pass_1(e.target.value);
                }}
                type="password"
                name="pass-1"
                id="pass-1"
              />
            </span>
            <span className="pass-input-wrapper">
              <label htmlFor="pass-2" className="input-tt">
                تکرار رمز عبور
              </label>
              <input
                onInput={(e) => {
                  this.get_pass_2(e.target.value);
                }}
                type="password"
                name="pass-2"
                id="pass-2"
              />
            </span>
            {this.state.pass_1 &&
            this.state.pass_2 &&
            this.state.pass_err === "ok" ? (
              <span
                className="change-pass-btn"
                onClick={() => {
                  this.change_pass();
                }}
              >
                {this.state.pause ? <LittleLoading /> : "تغییر رمز عبور"}
              </span>
            ) : (
              <span className="change-pass-btn fail">تغییر رمز عبور</span>
            )}
            {this.state.pass_err && this.state.pass_err !== "ok" ? (
              <span className="pass-error-wrapper">{this.state.pass_err}</span>
            ) : (
              ""
            )}
            {this.state.pass_win ? (
              <span className="pass-error-wrapper green">
                {this.state.pass_win}
              </span>
            ) : (
              ""
            )}
          </div>
          <div
            className="exit-from-panel"
            onClick={() => {
              make_user_empty();
            }}
          >
            خروج از حساب کاربری
          </div>
        </div>
      </div>
    );
  }
}

export default Info;
