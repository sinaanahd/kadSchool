import React, { Component } from "react";
import { Helmet } from "react-helmet";
import Header from "../header/header";
import SideBar from "../side-bar/side-bar";

import dots from "../../assets/images/dots.svg";
class FinancialStuff extends Component {
  state = {};
  render() {
    return (
      <>
        <Helmet>
          <title>امور مالی</title>
        </Helmet>
        <Header />
        <section className="finance-section bgc-wrapper">
          <div className="finance-wrapper mm-width">
            <SideBar />
            <div className="main-content">
              <h1>امور مالی</h1>
              <div className="sumbited-orders two-color-box">
                <div className="title-wrapper">
                  <h2 className="title">سفارشات ثبت شده</h2>
                  <img src={dots} className="dots" />
                </div>
                <div className="descriptions-wrapper">
                  <h3>توضیحات</h3>
                  <div className="descriptions"></div>
                </div>
              </div>
              <div className="payed-list two-color-box">
                <div className="title-wrapper">
                  <h2 className="title">لیست پرداختی‌ها</h2>
                  <img src={dots} className="dots" />
                </div>
                <div className="descriptions-wrapper">
                  <h3>توضیحات</h3>
                  <div className="descriptions"></div>
                </div>
              </div>
              <div className="sumbited-orders two-color-box">
                <div className="title-wrapper">
                  <h2 className="title">مجموع بدهی</h2>
                  <img src={dots} className="dots" />
                </div>
                <div className="descriptions-wrapper">
                  <h3>توضیحات</h3>
                  <div className="descriptions"></div>
                </div>
              </div>
            </div>
            <span className="discounts-btn">کد های تخفیف</span>
          </div>
        </section>
      </>
    );
  }
}

export default FinancialStuff;
