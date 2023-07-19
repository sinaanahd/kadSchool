import React, { Component } from "react";
import empty_img from "../../../assets/images/my-courses-photo.webp";
class EmptyCourses extends Component {
  state = {};
  render() {
    return (
      <div className="no-courses">
        <img src={empty_img} />
        <h1 className="title-for-empty">
          کاد به خودش افتخار میکنه که ما رو دنبال میکنی
          <br />
          هنوز توی کاد کلاسی ثبت نام نکردی و افتخار همراهیت رو تا الان نداشتیم
        </h1>
        <div className="datas-wrapper">
          <p>اگه برای ثبت نامت نیاز به مشاوره داری الان باهامون تماس بگیر</p>
          <span className="call-datas">
            <span className="label">شماره ثابت :</span>
            <a href="tel:+982166950624">02166950624</a>
          </span>
          <span className="call-datas">
            <span className="label">شماره همراه :</span>
            <a href="tel:+989051300693">09051300693</a>
          </span>
          <p>
            اگه هم نیاز به نمونه تدریس داری ساعت ها تدریس رایگان همین بغل گوشت
            برات گذاشتیم کافیه از منو درس های رایگان رو لمس کنی
          </p>
        </div>
      </div>
    );
  }
}

export default EmptyCourses;
