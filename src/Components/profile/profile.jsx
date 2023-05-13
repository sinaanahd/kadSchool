import React, { Component } from "react";
import { Helmet } from "react-helmet";
import Header from "../header/header";
import SideBar from "../side-bar/side-bar";
import withWebsiteData from "../hoc/with-website-data";
import convert_to_persian from "../functions/convert-to-persian";
import LittleLoading from "../reuseables/little-loading";
import axios from "axios";
class Profile extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.myRef2 = React.createRef();
  }
  state = {
    pause: false,
  };
  change_data = () => {
    this.setState({ pause: true });
    let year = this.myRef.current.selectedIndex - 1;
    let subject = this.myRef2.current.selectedIndex - 1;
    const { user, inside_user, handle_error } = this.props;
    switch (year) {
      case -1:
        year = user.year;
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
    if (subject === -1) {
      subject = user.subject;
    }
    //console.log(`year : ${year} subject : ${subject}`);
    axios
      .patch(
        `https://daryaftyar.ir/backend/kad_api/user_year_and_subject/${user.user_id}`,
        { year, subject }
      )
      .then((res) => {
        const { subject, year } = res.data;
        const temp_user = { ...user };
        temp_user.subject = subject;
        temp_user.year = year;
        //console.log(temp_user);
        inside_user(temp_user);
        this.setState({ pause: false });
      })
      .catch((err) => handle_error(err));
  };
  render() {
    const { user } = this.props;
    return (
      <>
        <Helmet>
          <title>ویرایش پروفایل</title>
        </Helmet>
        <section className="bgc-wrapper profile-section">
          <div className="profile-wrapper mm-width">
            <SideBar />
            <div className="mian-content">
              <h1>ویرایش پروفایل</h1>
              <div className="forms-wrapper">
                <div className="col col-1">
                  <div className="constant-datas">
                    <span className="data-wrapper">
                      <span className="label">شماره موبایل:</span>
                      <span className="data">
                        <bdi>{user.phone_number}</bdi>
                      </span>
                    </span>
                    <span className="data-wrapper">
                      <span className="label">نام و نام‌خانوادگی:</span>
                      <span className="data">{user.name}</span>
                    </span>
                  </div>
                  <div className="form-box">
                    <h2>تغییر مشخصات کاربری</h2>
                    <span className="input-wrapper">
                      <span className="label">رشته تحصیلی:</span>
                      <select name="" id="" placeholder="" ref={this.myRef}>
                        <option value={-1}>پایه تحصیلی</option>
                        <option value={10}>دهم</option>
                        <option value={11}>یازدهم</option>
                        <option value={12}>دوازدهم</option>
                      </select>
                    </span>
                    <span className="input-wrapper">
                      <span className="label">پایه تحصیلی:</span>
                      <select name="" id="" placeholder="" ref={this.myRef2}>
                        <option value={-1}>رشته تحصیلی</option>
                        <option value={0}>ریاضی</option>
                        <option value={1}>تجربی</option>
                        <option value={2}>انسانی</option>
                        <option value={3}>هنر</option>
                      </select>
                    </span>
                    {this.state.pause ? (
                      <span className="submit-btn">
                        <LittleLoading />
                      </span>
                    ) : (
                      <span
                        className="submit-btn"
                        onClick={() => {
                          this.change_data();
                        }}>
                        تغییر مشخصات کاربری
                      </span>
                    )}
                  </div>
                </div>
                {/* <div className="col col-2">
                  <div className="form-box">
                    <h2>تغییر رمز عبور</h2>
                    <span className="input-wrapper">
                      <span className="label">رمز عبور :</span>
                      <input type="text" />
                    </span>
                    <span className="input-wrapper">
                      <span className="label"> تکرار رمز عبور :</span>
                      <input type="text" />
                    </span>
                    <span className="submit-btn">تغییر رمز عبور </span>
                  </div>
                  <div className="form-box">
                    <h2>مشخصات کارت ملی</h2>
                    <span className="input-wrapper upload">
                      <span className="label">
                        عکس از کارت ملی یا شناسنامه:
                      </span>
                      <span className="upload-documents">آپلود مدارک</span>
                    </span>
                    <span className="submit-btn">ارسال مدارک</span>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default withWebsiteData(Profile);
