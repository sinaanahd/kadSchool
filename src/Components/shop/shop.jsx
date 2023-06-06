import React, { Component } from "react";
import { Helmet } from "react-helmet";
import withWebsiteData from "../hoc/with-website-data";
import SideBar from "../side-bar/side-bar";
import Product from "./product/product";

import catImg1 from "../../assets/images/cat-img-1.svg";
import catImg2 from "../../assets/images/cat-img-2.svg";
import catImg3 from "../../assets/images/cat-img-3.svg";
import downArrow from "../../assets/images/dow-arroow-filter.svg";
class Shop extends Component {
  state = {
    shown: false,
  };
  handle_filter_show = (shown) => {
    const prev_state = this.state.shown;
    if (prev_state === shown) {
      this.setState({ shown: false });
    } else {
      this.setState({ shown });
    }
  };
  render() {
    return (
      <>
        <Helmet>
          <title>فروشگاه کاد</title>
        </Helmet>
        <section className="bgc-wrapper shop-wrapper-section">
          <div className="mm-width shop-wrapper">
            <SideBar />
            <div className="main-content">
              <h1 className="page-title">فروشگاه</h1>
              <div className="slider-wrapper">
                <span className="slider">
                  <span className="slider-btn"></span>
                </span>
              </div>
              <div className="categories-wrapper">
                <span className="category active">
                  <img src={catImg3} alt="" />
                  <span className="cat-text">کاد پلاس</span>
                </span>
                <span className="category">
                  <img src={catImg2} alt="" />
                  <span className="cat-text">جزوه</span>
                </span>
                <span className="category">
                  <img src={catImg1} alt="" />
                  <span className="cat-text">کلاس</span>
                </span>
              </div>
              <p>
                توضیحات : لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم استفاده
                از طراحان گرافیک است... - - - - - - - - - - - - - - - - - - - -
                - - -
              </p>
              <div className="filters-wrapper">
                <div
                  className="filter"
                  onClick={() => {
                    this.handle_filter_show("grade");
                  }}>
                  <span className="filter-title">پایه تحصیلی </span>
                  <span className="main-filter">
                    <span className="filter-text">پایه تحصیلی </span>
                    <img src={downArrow} alt="" />
                  </span>
                  <span
                    className={
                      this.state.shown === "grade"
                        ? "filter-items-wrapper show-filter"
                        : "filter-items-wrapper"
                    }>
                    <span className="filter-item">دهم</span>
                    <span className="filter-item">یازدهم</span>
                    <span className="filter-item">دوازدهم</span>
                  </span>
                </div>
                <div
                  className="filter"
                  onClick={() => {
                    this.handle_filter_show("subject");
                  }}>
                  <span className="filter-title">رشته تحصیلی</span>
                  <span className="main-filter">
                    <span className="filter-text">رشته تحصیلی</span>
                    <img src={downArrow} alt="" />
                  </span>
                  <span
                    className={
                      this.state.shown === "subject"
                        ? "filter-items-wrapper show-filter"
                        : "filter-items-wrapper"
                    }>
                    <span className="filter-item">ریاضی و فیزیک</span>
                    <span className="filter-item">تجربی</span>
                    <span className="filter-item">انسانی</span>
                    <span className="filter-item">هنر</span>
                  </span>
                </div>
                <div
                  className="filter"
                  onClick={() => {
                    this.handle_filter_show("kind");
                  }}>
                  <span className="filter-title">دوره </span>
                  <span className="main-filter">
                    <span className="filter-text">دوره </span>
                    <img src={downArrow} alt="" />
                  </span>
                  <span
                    className={
                      this.state.shown === "kind"
                        ? "filter-items-wrapper show-filter"
                        : "filter-items-wrapper"
                    }>
                    <span className="filter-item">جامع</span>
                    <span className="filter-item">نکته و تست</span>
                    <span className="filter-item">نهایی</span>
                    <span className="filter-item">تیر آخر</span>
                  </span>
                </div>
                <div
                  className="filter"
                  onClick={() => {
                    this.handle_filter_show("course");
                  }}>
                  <span className="filter-title">درس </span>
                  <span className="main-filter">
                    <span className="filter-text">درس </span>
                    <img src={downArrow} alt="" />
                  </span>
                  <span
                    className={
                      this.state.shown === "course"
                        ? "filter-items-wrapper show-filter"
                        : "filter-items-wrapper"
                    }>
                    <span className="filter-item">جامع</span>
                    <span className="filter-item">نکته و تست</span>
                    <span className="filter-item">نهایی</span>
                    <span className="filter-item">تیر آخر</span>
                  </span>
                </div>
              </div>
              <div className="products-wrapper">
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default withWebsiteData(Shop);
