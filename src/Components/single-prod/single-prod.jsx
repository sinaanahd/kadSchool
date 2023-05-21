import React, { Component } from "react";
import { Helmet } from "react-helmet";
import SideBar from "../side-bar/side-bar";
import spilit_in_three from "../functions/spilit_in_three";
import convert_to_persian from "../functions/convert-to-persian";
import withWebsiteData from "../hoc/with-website-data";

import asset_1 from "../../assets/images/prod-asset-1.svg";
import asset_2 from "../../assets/images/prod-asset-2.svg";
import downArrowBlue from "../../assets/images/down-arrow-blue.svg";
import avatar from "../../assets/images/avatar.svg";
import cart from "../../assets/images/cart.svg";
import PopUp from "./pop-up/pop-up";
class SingleProd extends Component {
  state = {
    more_cm: false,
    pop_up: "resume",
  };
  handle_cm = () => {
    const more_cm = !this.state.more_cm;
    this.setState({ more_cm });
  };
  handle_pop_up = (pop_up, e) => {
    if (e) {
      const classes = [...e.target.classList];
      if (classes.includes("pop-up-wrapper")) {
        this.setState({ pop_up: false });
      }
    } else {
      this.setState({ pop_up });
    }
  };
  render() {
    return (
      <>
        <Helmet>
          <title>محصول تست</title>
        </Helmet>
        <section className="bgc-wrapper single-prod-wrapper">
          <div className="main-single-prod mm-width">
            <SideBar />
            <div className="main-content">
              <h1 className="title">محصول</h1>
              <div className="prod-details-wrapper">
                <div className="prod-details-spec">
                  <span className="add-to-cart-prod">
                    <img src="" alt="" className="prod-img" />
                    <span className="price-wrapper">
                      <span className="price-title">قیمت :</span>
                      <span className="price">
                        {spilit_in_three(convert_to_persian(123456789))}
                      </span>
                    </span>
                    <span className="add-to-cart-btn">
                      <img src={cart} alt="" />
                      افزودن به سبد خرید
                    </span>
                  </span>
                  <span className="prod-details-text-wrapper">
                    <span className="prod-details-text">
                      <span className="detail-title">نام استاد : </span>
                      <span className="content">{"لورم ایپسوم"}</span>
                    </span>
                    <span className="prod-details-text">
                      <span className="detail-title">تاریخ شروع کلاس:</span>
                      <span className="content">{"لورم ایپسوم"}</span>
                    </span>
                    <span className="prod-details-text">
                      <span className="detail-title">
                        <img src={asset_1} alt="" />
                        روز های برگزاری:
                      </span>
                      <span className="content">{"لورم ایپسوم"}</span>
                    </span>
                    <span className="prod-details-text">
                      <span className="detail-title">
                        <img src={asset_2} alt="" />
                        ساعت برگزاری:
                      </span>
                      <span className="content">{"لورم ایپسوم"}</span>
                    </span>
                  </span>
                </div>
                <div className="prod-in-one-look">
                  <h2 className="semi-title">دوره در یک نگاه:</h2>
                  <ul className="prod-texts">
                    <li>
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم استفاده از
                      طراحان گرافیک است.
                    </li>
                    <li>
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم استفاده از
                      طراحان گرافیک است.
                    </li>
                    <li>
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم استفاده از
                      طراحان گرافیک است.
                    </li>
                    <li>
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم استفاده از
                      طراحان گرافیک است.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="boxes-wrapper">
                <div
                  className="box"
                  onClick={() => {
                    this.handle_pop_up("intro");
                  }}>
                  <p>معرفی دوره</p>
                </div>
                <div
                  className="box"
                  onClick={() => {
                    this.handle_pop_up("sample");
                  }}>
                  <p>نمونه تدریس و فایل ها</p>
                </div>
                <div
                  className="box"
                  onClick={() => {
                    this.handle_pop_up("faq");
                  }}>
                  <p>سوالات متداول</p>
                </div>
                <div
                  className="box"
                  onClick={() => {
                    this.handle_pop_up("resume");
                  }}>
                  <p>رزومه استاد</p>
                </div>
              </div>
              <div className="students-comments-wrapper">
                <h3 className="semi-2-title">نظرات دانش آموزان</h3>
                <textarea
                  name=""
                  id=""
                  placeholder="type ..."
                  className="text-area"></textarea>
                <span className="submit-btn-wrapper">
                  <span className="submit-comment">ارسال</span>
                </span>
                <div
                  className={
                    this.state.more_cm
                      ? "comments-wrapper open-cm"
                      : "comments-wrapper"
                  }>
                  <div className="comment">
                    <span className="name-avatar">
                      <img src={avatar} alt="" />
                      نام کاربری
                    </span>
                    <p className="comment-text">
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم استفاده از
                      طراحان گرافیک است.
                    </p>
                  </div>
                  <div className="comment">
                    <span className="name-avatar">
                      <img src={avatar} alt="" />
                      نام کاربری
                    </span>
                    <p className="comment-text">
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم استفاده از
                      طراحان گرافیک است.
                    </p>
                  </div>
                  <div className="comment">
                    <span className="name-avatar">
                      <img src={avatar} alt="" />
                      نام کاربری
                    </span>
                    <p className="comment-text">
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم استفاده از
                      طراحان گرافیک است.
                    </p>
                  </div>
                  <div className="comment">
                    <span className="name-avatar">
                      <img src={avatar} alt="" />
                      نام کاربری
                    </span>
                    <p className="comment-text">
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم استفاده از
                      طراحان گرافیک است.
                    </p>
                  </div>
                  <div className="comment">
                    <span className="name-avatar">
                      <img src={avatar} alt="" />
                      نام کاربری
                    </span>
                    <p className="comment-text">
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم استفاده از
                      طراحان گرافیک است.
                    </p>
                  </div>
                  <div className="comment">
                    <span className="name-avatar">
                      <img src={avatar} alt="" />
                      نام کاربری
                    </span>
                    <p className="comment-text">
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم استفاده از
                      طراحان گرافیک است.
                    </p>
                  </div>

                  <span
                    onClick={() => {
                      this.handle_cm();
                    }}
                    className={this.state.more_cm ? "more close" : "more"}>
                    {this.state.more_cm ? "کمتر" : "بیشتر"}
                    <img src={downArrowBlue} alt="" />
                  </span>
                </div>
              </div>
            </div>
          </div>
          {this.state.pop_up ? (
            <PopUp
              type={this.state.pop_up}
              handle_pop_up={this.handle_pop_up}
            />
          ) : (
            <></>
          )}
        </section>
      </>
    );
  }
}

export default withWebsiteData(SingleProd);
