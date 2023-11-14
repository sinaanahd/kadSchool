import { Helmet } from "react-helmet";
import React, { Component } from "react";
class NewPanelNotice extends Component {
  state = {};
  render() {
    return (
      <>
        <Helmet>
          <title>اطلاعیه پنل دانش آموز جدید</title>
        </Helmet>
        <section className="new-panel-notice">
          <h1 className="title">یه خبر خوب برای دوستان کادی</h1>
          <p className="desc">
            برای راحتی بیشتر شما دانش آموزان عزیزمون پنل دانش آموزان طراحی و
            توسعه داده شد.
            <br />
            توی این پنل شما به راحتی میتونید تمامی کلاس هاتون رو با طراحی جدید و
            قشنگ ببینید و با راحتی بیشتری بتونید از کلاس هاتون استفاده کنید.
            <br />
            برای ورود به پنل فقط کافیه شماره و رمز عبور خودتون رو وارد کنید.
            اگرم تا الان رمز عبوری تنظیم نکردید نگران نباشید میتونید به وسیله
            شماره و کد یکبار مصرف پیامکی به راحتی وارد پنلتون بشید.
            <br />
            در آخر هم بهتون بگم اگه تا الان کاد افتخار همراهی شما رو نداشته
            میتونید داخل پنل جدید ثبت نام کنید و کلاس های مورد نظرتون رو در
            کمترین زمان و با بیشترین راحتی داشته باشید.
          </p>
          <a
            href="https://panel.kadschool.com"
            target="_blank"
            className="lets-go"
          >
            آماده‌ای ؟ پس بزن بریم !!!
          </a>
        </section>
      </>
    );
  }
}

export default NewPanelNotice;
