import React, { Component } from "react";
import { Helmet } from "react-helmet";
import withWebsiteData from "../hoc/with-website-data";
import SideBar from "../side-bar/side-bar";
import convert_to_persian from "../functions/convert-to-persian";
import split_in_three from "../functions/spilit_in_three";
import copy_to_clip_board from "../functions/copy-to-clip-board";

import copyIcon from "../../assets/images/copy-icon.webp";
class Fianace extends Component {
  state = {
    copied_item: [
      {
        id: 0,
        copied: false,
      },
      {
        id: 1,
        copied: false,
      },
    ],
  };
  handle_copy_to_clipboard = (text, id) => {
    copy_to_clip_board(text);
    const copied_item = [...this.state.copied_item];
    copied_item[id].copied = true;
    this.setState({ copied_item });
    setTimeout(() => {
      copied_item[id].copied = false;
      this.setState({ copied_item });
    }, 1500);
  };
  render() {
    return (
      <>
        <Helmet>
          <title>امور مالی</title>
        </Helmet>
        <section className="bgc-wrapper new-finance-wrapper">
          <div className="new-finance mm-width">
            <SideBar />
            <div className="main-content">
              <h1 className="title">امور مالی</h1>
              <div className="two-boxes-wrapper">
                <div className="short-desc-wrapper">
                  <h2 className="short-desc-title">خلاصه گزارش مالی</h2>
                  <div className="short-data">
                    <span className="text">اعتبار کیف پول :</span>
                    <span className="number-data">
                      {split_in_three(convert_to_persian(123456))}
                    </span>
                  </div>
                  <div className="short-data">
                    <span className="text">میزان بدهی :</span>
                    <span className="number-data">
                      {split_in_three(convert_to_persian(123456))}
                    </span>
                  </div>
                  <div className="short-data">
                    <span className="text">وضعیت پرداختی آینده :</span>
                    <span className="number-data">
                      {split_in_three(convert_to_persian(123456))}
                    </span>
                  </div>
                </div>
                <div className="gift-cart-wrapper">
                  <h2 className="gift-card-title">گیفت کارد کاد</h2>
                  <div className="link-boxes-wrapper n-m">
                    <span className="link-title">لینک‌عضویت مخصوص تو</span>
                    <span className="input-type">
                      <img
                        src={copyIcon}
                        alt=""
                        onClick={() => {
                          this.handle_copy_to_clipboard(
                            "daryaftyar-react.netlify.app",
                            0
                          );
                        }}
                      />
                      <span className="link-data">
                        https://daryaftyar-react.netlify.app/
                      </span>
                      {this.state.copied_item[0].copied ? (
                        <span className="copied-text">کپی شد !</span>
                      ) : (
                        <></>
                      )}
                    </span>
                  </div>
                  <div className="link-boxes-wrapper">
                    <span className="link-title">کد تخفیف مخصوص تو</span>
                    <span className="input-type">
                      <img
                        src={copyIcon}
                        alt=""
                        onClick={() => {
                          this.handle_copy_to_clipboard(
                            "daryaftyar-react.netlify.app",
                            1
                          );
                        }}
                      />
                      <span className="link-data">
                        https://daryaftyar-react.netlify.app/
                      </span>
                      {this.state.copied_item[1].copied ? (
                        <span className="copied-text">کپی شد !</span>
                      ) : (
                        <></>
                      )}
                    </span>
                  </div>
                </div>
              </div>
              <h2 className="semi-title">سفارشات و پرداخت اقساط</h2>
              <div className="orders-payments-wrapper">
                <div className="payment-wrapper">
                  <div className="payment">
                    <span className="payment-header">
                      <span className="p-item">
                        <span className="text">کد پیگیری پرداخت :</span>
                        <span className="p-number">{12345453}</span>
                      </span>
                      <span className="p-item">
                        <span className="text">قسط اول / تسویه کامل</span>
                        <span className="p-number"></span>
                      </span>
                    </span>
                    <span className="main-data">
                      <span className="img-name-wrapper">
                        <img src="" alt="" />
                        <span className="names">
                          <span className="prod-name">نام محصول</span>
                          <span className="teacher-name">نام استاد</span>
                        </span>
                      </span>
                      <span className="status-wrapper">
                        <span className="status-title">وضعیت پرداخت</span>
                        <span className="status">پرداخت شده</span>
                      </span>
                      <span className="payed-price-wrapper">
                        <span className="payed-title">مبلغ پرداختی</span>
                        <span className="pay-amount">
                          <span className="currency">تومان</span>
                          <span className="payed-number">
                            {split_in_three(convert_to_persian(1233445))}
                          </span>
                        </span>
                      </span>
                    </span>
                  </div>
                  <span className="next-pay-price">
                    <span className="next-text">پرداخت قسط دوم به مبلغ :</span>
                    <span className="next-pay-amount">
                      {split_in_three(convert_to_persian(12324234))}
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default withWebsiteData(Fianace);
