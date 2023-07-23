import React, { Component } from "react";
import Header from "../header/header";
import SideBar from "../side-bar/side-bar";
import Counter from "./counter/counter";
import { Helmet } from "react-helmet";
import Calender_2 from "./calender/calender-2";
import withWebsiteData from "../hoc/with-website-data";
import Slider from "./slider/slider";
import InspirationSentence from "./inspiration-sentece/inspiration-sentece";
import DaysTip from "./days-tip/days-tip";
class Dashboard extends Component {
  state = {
    classes: true,
  };
  render() {
    const {
      user,
      change_active_date,
      teachers,
      initial_data,
      active_day,
      main_page_banners,
      sample_week_plan,
      kelasses,
      motiv_quote,
    } = this.props;
    return (
      <>
        <Helmet>
          <title>داشبورد کاربری کاد</title>
          <meta
            name="description"
            content="در صفحه داشبورد ما، با خلاصه‌ای از برنامه هفتگی دانش‌آموزان و اخبار جذاب و مهم کنکور و اطلاعات را به اشتراک می‌گذاریم. با مراجعه به این صفحه، می‌توانید بازدهی و پیشرفت هفتگی دانش‌آموزان را به راحتی مشاهده کنید و از آخرین اخبار و رویدادهای کاد با خبر شوید. همراه ما باشید تا همیشه در جریان برنامه هفتگی دانش‌آموزان و اطلاعات مهم ما باشید"
          />
          <meta
            name="keywords"
            content="پنل دانش آموزی, کاد, کلاس های اینترنتی دریافت"
          />
          {main_page_banners
            ? main_page_banners.map((mpb, i) => (
                <link key={i++} rel="preload" as="image" href={mpb} />
              ))
            : ""}
        </Helmet>
        <section className="bgc-wrapper">
          <div className="dashboard mm-width">
            <SideBar />
            <div className="contetnt-wrapper">
              <div className="slider-calender">
                <Counter />
                <Slider main_page_banners={main_page_banners} />
                <InspirationSentence motiv_quote={motiv_quote} />
              </div>
              <div className="calender-video">
                <Calender_2
                  active_day={active_day}
                  change_active_date={change_active_date}
                  week_plan={
                    user
                      ? user.week_plan
                      : sample_week_plan
                      ? sample_week_plan
                      : false
                  }
                  kelases={kelasses ? kelasses : false}
                  teachers={teachers ? teachers : false}
                  initial_data={initial_data}
                />
                {/* <DaysTip /> */}
              </div>
            </div>
          </div>
        </section>
        {/* <div>{data.my_log}</div> */}
      </>
    );
  }
}

export default withWebsiteData(Dashboard);
