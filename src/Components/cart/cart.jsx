import React, { Component } from "react";
import { Helmet } from "react-helmet";
import withWebsiteData from "../hoc/with-website-data";
import SideBar from "../side-bar/side-bar";
import convert_to_persian from "../functions/convert-to-persian";
import spilit_in_three from "../functions/spilit_in_three";
import Discount from "./discount/discount";

import deleteIcon from "../../assets/images/delete-icon-dark-blue.webp";
import arrow_up from "../../assets/images/arrow-blue-up.webp";
import LittleLoading from "../reuseables/little-loading";
import axios from "axios";
class Cart extends Component {
  state = {
    pause: false,
    cash_pause: false,
  };
  componentDidMount() {}
  get_link = (num) => {
    const { user, handle_error } = this.props;
    this.setState({ cash_pause: true });
    axios
      .get(
        `https://kadschool.com/backend/kad_api/payment_link/${user.user_id}-${num}`
      )
      .then((res) => {
        const payment_link = res.data;
        window.open(payment_link.link);
        this.setState({ cash_pause: false });
      })
      .catch((e) => {
        handle_error(e);
      });
  };
  render() {
    const {
      cart,
      request_id,
      handle_cart,
      cart_products,
      ghests,
      wants_ghesti,
      user,
      gh_wait,
    } = this.props;
    return (
      <>
        <Helmet>
          <title>سبد خرید</title>
          <meta
            name="description"
            content="صفحه سبد خرید کاد برای مشاهده و اعمال تغییر در خرید های شما در سایت کاد"
          />
          <meta
            name="keywords"
            content="سبد خرید کاد, سبد خرید, مشاهده سبد خرید کاد"
          />
        </Helmet>
        <section className="bgc-wrapper cart-section-wrapper">
          <div className="cart-section mm-width">
            <SideBar />
            <div className="main-content">
              <h1 className="title">سبد خرید</h1>
              <div className="cols-wrapper">
                <div className="right-col">
                  <div className="cart-items-wrapper">
                    <h2 className="semi-title">محصولات</h2>
                    {cart_products ? (
                      cart_products.map((p) => (
                        <span key={p.kelas_id} className="cart-item">
                          <span className="img-wrapper-name">
                            <img src={p.image_link} alt={p.kelas_title} />
                            <span className="names">
                              <h3 className="prod-title">{p.kelas_title}</h3>
                              <span className="teacher-name">
                                {p.teachers.map((t) => (
                                  <span key={t.teacher_id}>{t.fullname} </span>
                                ))}
                              </span>
                            </span>
                          </span>
                          <span className="delete-price">
                            {request_id === p.kelas_id ? (
                              <LittleLoading />
                            ) : (
                              <img
                                src={deleteIcon}
                                alt="حذف کردن"
                                className="remove-cart-item"
                                onClick={() => {
                                  handle_cart(p.kelas_id);
                                }}
                              />
                            )}

                            <span className="prices-wrapper">
                              {p.discounted_price ? (
                                <span className="discounted-price">
                                  {spilit_in_three(convert_to_persian(p.price))}
                                </span>
                              ) : (
                                <></>
                              )}
                              {p.discounted_price ? (
                                p.price !== 0 ? (
                                  <>
                                    <span className="currency">تومان</span>
                                    <span className="price">
                                      {spilit_in_three(
                                        convert_to_persian(p.discounted_price)
                                      )}
                                    </span>
                                  </>
                                ) : (
                                  "رایگان"
                                )
                              ) : p.price !== 0 ? (
                                <>
                                  <span className="currency">تومان</span>
                                  <span className="price">
                                    {spilit_in_three(
                                      convert_to_persian(p.price)
                                    )}
                                  </span>
                                </>
                              ) : (
                                "رایگان"
                              )}
                            </span>
                          </span>
                        </span>
                      ))
                    ) : (
                      <LittleLoading />
                    )}
                  </div>
                  <div className="how-to-pay-wrapper">
                    <h2 className="semi-title">پرداخت اقساطی</h2>
                    <div className="pay-details">
                      <span className="pay-titles">
                        <span className="pay-item-title">شماره قسط</span>
                        <span className="pay-item-title">مبلغ قسط</span>
                        <span className="pay-item-title">تاریخ سررسید</span>
                      </span>
                      {ghests ? (
                        ghests.map((gh, i) => (
                          <span className="pay-item" key={i++}>
                            <span className="gh-item gh-gh-num">
                              {convert_to_persian(i + 1)}
                            </span>
                            <span className="gh-item gh-price">
                              {spilit_in_three(convert_to_persian(gh.price))}
                            </span>
                            <span className="gh-item gh-date">
                              {convert_to_persian(gh.day) +
                                " / " +
                                gh.farsi_month +
                                " / " +
                                convert_to_persian(gh.year)}
                            </span>
                          </span>
                        ))
                      ) : (
                        <></>
                      )}
                    </div>
                    {ghests ? (
                      <>
                        <span
                          className="pay-btn"
                          onClick={() => {
                            this.get_link(1);
                          }}
                        >
                          {this.state.cash_pause ? (
                            <LittleLoading />
                          ) : (
                            "پرداخت اولین قسط"
                          )}
                        </span>
                        {/* <div className="discont-not-cash">
                          <input
                            type="text"
                            className="discount-code-input"
                            name="discount-input"
                            placeholder="کد تخفیف خود را وارد کنید"
                          />
                          <span className="submit-discount-code">ثبت کد</span>
                        </div> */}
                      </>
                    ) : (
                      <span
                        className="pay-btn"
                        onClick={() => {
                          wants_ghesti(user.user_id);
                        }}
                      >
                        {gh_wait ? <LittleLoading /> : "پرداخت اقساطی"}
                      </span>
                    )}
                    {/* <span
                      className="pay-btn"
                      onClick={() => {
                        wants_ghesti(user.user_id);
                      }}>
                      {gh_wait ? <LittleLoading /> : "پرداخت اقساطی"}
                    </span> */}
                    <span className="arrow-up">
                      <img src={arrow_up} alt="" />
                    </span>
                  </div>
                </div>
                <div className="left-col">
                  <div className="price-details">
                    <div className="details">
                      <span className="details-item">
                        <span className="d-i-title">جمع مبلغ کالاها:</span>
                        <span className="amount">
                          {spilit_in_three(
                            convert_to_persian(cart ? cart.pure_price : 0)
                          )}{" "}
                          تومان
                        </span>
                      </span>
                      <span className="details-item">
                        <span className="d-i-title">سود شما از این خرید:</span>
                        <span className="amount">
                          {spilit_in_three(
                            convert_to_persian(
                              cart ? cart.pure_price - cart.final_price : 0
                            )
                          )}{" "}
                          تومان
                        </span>
                      </span>
                      <span className="details-item">
                        <span className="d-i-title">اعتبار کیف پول:</span>
                        <span className="amount">
                          {spilit_in_three(convert_to_persian(0))} تومان
                        </span>
                      </span>
                      <span className="details-item bold-style">
                        <span className="d-i-title">مبلغ پرداختی:</span>
                        <span className="amount">
                          {spilit_in_three(
                            convert_to_persian(cart ? cart.final_price : 0)
                          )}{" "}
                          تومان
                        </span>
                      </span>
                    </div>
                    {cart ? (
                      cart.items_ids.length === 0 ? (
                        ""
                      ) : cart.final_price === 0 ? (
                        <span className="pay-btn-bank">
                          اضافه کردن دوره رایگان
                        </span>
                      ) : (
                        <span
                          onClick={() => {
                            this.get_link(0);
                          }}
                          className="pay-btn-bank"
                        >
                          {this.state.cash_pause ? (
                            <LittleLoading />
                          ) : (
                            "خرید نقدی"
                          )}
                        </span>
                      )
                    ) : (
                      <LittleLoading />
                    )}
                  </div>
                  <Discount />
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default withWebsiteData(Cart);
