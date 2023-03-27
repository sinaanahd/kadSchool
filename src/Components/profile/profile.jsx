import React, { Component } from "react";
import { Helmet } from "react-helmet";
import Header from "../header/header";
import SideBar from "../side-bar/side-bar";
class Profile extends Component {
  state = {};
  render() {
    return (
      <>
        <Helmet>
          <title>ویرایش پروفایل</title>
        </Helmet>
        <Header />
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
                      <span className="data">{129048904}</span>
                    </span>
                    <span className="data-wrapper">
                      <span className="label">نام و نام‌خانوادگی:</span>
                      <span className="data">{"سینا اناهید"}</span>
                    </span>
                  </div>
                  <div className="form-box">
                    <h2>تغییر مشخصات کاربری</h2>
                    <span className="input-wrapper">
                      <span className="label">رشته تحصیلی:</span>
                      <span className="options">
                        <span className="option">ریاضی و فیزیک</span>
                        <span className="option">تجربی</span>
                        <span className="option">انسانی</span>
                        <span className="option">هنر</span>
                      </span>
                    </span>
                    <span className="input-wrapper">
                      <span className="label">پایه تحصیلی:</span>
                      <span className="options">
                        <span className="option">دهم</span>
                        <span className="option">یازدهم</span>
                        <span className="option">دوازدهم</span>
                      </span>
                    </span>
                    <span className="input-wrapper">
                      <span className="label">شهر:</span>
                      <input type="text" />
                    </span>
                    <span className="submit-btn">تغییر مشخصات کاربری</span>
                  </div>
                </div>
                <div className="col col-2">
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
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Profile;
