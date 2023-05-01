import React, { Component } from "react";
import { Helmet } from "react-helmet";
import Header from "../header/header";
import SideBar from "../side-bar/side-bar";
import withWebsiteData from "../hoc/with-website-data";
import convert_to_persian from "../functions/convert-to-persian";
class Profile extends Component {
  state = {};
  render() {
    const { user } = this.props;
    let phone_number = user.phone_number.split("+");
    phone_number = "+" + convert_to_persian(phone_number[1]);
    return (
      <>
        <Helmet>
          <title>ویرایش پروفایل</title>
        </Helmet>
        <Header user={user ? user : false} />
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
                        <bdi>{phone_number}</bdi>
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
                      <select name="" id="" placeholder="">
                        <option value="">پایه تحصیلی</option>
                        <option value="">دهم</option>
                        <option value="">یازدهم</option>
                        <option value="">دوازدهم</option>
                      </select>
                    </span>
                    <span className="input-wrapper">
                      <span className="label">پایه تحصیلی:</span>
                      <select name="" id="" placeholder="">
                        <option value="">رشته تحصیلی</option>
                        <option value="">ریاضی</option>
                        <option value="">تجربی</option>
                        <option value="">انسانی</option>
                      </select>
                    </span>
                    <span className="submit-btn">تغییر مشخصات کاربری</span>
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
