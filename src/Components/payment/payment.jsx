import React, { Component } from "react";
import { Helmet } from "react-helmet";
import withWebsiteData from "../hoc/with-website-data";
import SideBar from "../side-bar/side-bar";

import pay_green from "../../assets/images/pay-green.webp";
import pay_red from "../../assets/images/pay-red.webp";

class Payment extends Component {
  state = {
    status: "red",
  };
  handle_status = () => {
    const status = this.state.status;
    if (status === "green") this.setState({ status: "red" });
    else this.setState({ status: "green" });
  };
  render() {
    return (
      <>
        <Helmet>
          <title>پرداخت</title>
        </Helmet>
        <section className="bgc-wrapper">
          <div className="payment-page-wrapper mm-width">
            <SideBar />
            <div className="main-content">
              <div
                className="payment-status"
                onClick={() => {
                  this.handle_status();
                }}>
                <div className={this.state.status + " pay-img"}>
                  <img
                    src={this.state.status === "green" ? pay_green : pay_red}
                    alt={
                      this.state.status === "green"
                        ? "پرداخت موفق"
                        : "پرداخت ناموفق"
                    }
                  />
                </div>
                <p className={this.state.status + " pay-text"}>
                  {this.state.status === "green"
                    ? "پرداخت شما با موفقیت انجام شد"
                    : "پرداخت شما ناموفق بود"}
                </p>
              </div>
              <div className="select-pay-method">
                <h2 className="semi-title">انتخاب درگاه بانکی برای پرداخت</h2>
                <div className="pay-methods">
                  <div className="pay-method"></div>
                  <div className="pay-method"></div>
                  <div className="pay-method"></div>
                  <div className="pay-method"></div>
                </div>
                <p className="pay-desc">
                  با "هر کارت بانکی" که عضو شبکه شتاب باشد می توانید پرداخت خود
                  را انجام دهید.
                </p>
                <p className="notice-yellow">
                  قبل از اتصال به درگاه بانک، حتما فیلترشکن خود را خاموش کنید .
                </p>
              </div>
              <span className="finish-buy">اتمام خرید</span>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default withWebsiteData(Payment);
