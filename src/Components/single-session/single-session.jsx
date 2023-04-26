import React, { Component } from "react";
import Header from "../header/header";
import SideBar from "../side-bar/side-bar";
import { Helmet } from "react-helmet";
import withWebsiteData from "../hoc/with-website-data";

import iSvg from "../../assets/images/i.svg";
import crossSvg from "../../assets/images/cross.svg";
import sampleImg from "../../assets/images/single-sample.svg";
class SingleSession extends Component {
  state = {
    jozve: false,
    no_jozve: false,
  };
  show_no_content = () => {
    const no_jozve = !this.state.no_jozve;
    this.setState({ no_jozve });
  };
  render() {
    const { user } = this.props;
    return (
      <>
        <Helmet>
          <title>جلسه ۲ - موضوع جلسه</title>
        </Helmet>
        <Header user={user ? user : false} />
        <section className="bgc-wrapper single-session-section">
          <div className="single-session mm-width">
            <SideBar />
            <div className="main-content">
              <h1 className="title">
                جلسه {2}- موضوع جلسه {"فیزیک هسته ای"}
              </h1>
              <img src={sampleImg} alt="موضوع جلسه" />
              <span className="single-details">توضیحات</span>
              <p className="single-text">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
                نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
                کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان
                جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را
                برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در
                زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و
                دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد
                وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات
                پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
              </p>
              {this.state.no_jozve ? (
                <div className="no-jozve-wrapper">
                  <span className="blue-box"></span>
                  <img src={iSvg} alt="info" className="info" />
                  <p>برای این جلسه جزوه ای قرار داده نشده</p>
                  <img
                    src={crossSvg}
                    alt="بستن"
                    className="cross"
                    onClick={() => {
                      this.show_no_content();
                    }}
                  />
                </div>
              ) : (
                <></>
              )}
              <div className="btns-wrapper">
                {this.state.jozve ? (
                  <a className="btn">دانلود جزوه</a>
                ) : (
                  <span
                    onClick={() => {
                      this.show_no_content();
                    }}
                    className="btn">
                    دانلود جزوه
                  </span>
                )}
                <span className="btn">تکلیف این جلسه</span>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default withWebsiteData(SingleSession);
