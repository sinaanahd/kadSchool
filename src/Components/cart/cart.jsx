import React, { Component } from "react";
import { Helmet } from "react-helmet";
import withWebsiteData from "../hoc/with-website-data";
import SideBar from "../side-bar/side-bar";
import convert_to_persian from "../functions/convert-to-persian";
import spilit_in_three from "../functions/spilit_in_three";

import deleteIcon from "../../assets/images/delete-icon-dark-blue.svg";
import arrow_up from "../../assets/images/arrow-blue-up.svg";
import LittleLoading from "../reuseables/little-loading";
class Cart extends Component {
  state = {};
  componentDidMount() {}
  render() {
    const { cart, request_id, handle_cart, cart_products } = this.props;
    return (
      <>
        <Helmet>
          <title>سبد خرید</title>
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
                      <></>
                    )}
                  </div>
                  <div className="how-to-pay-wrapper">
                    <h2 className="semi-title">نحوه پرداخت</h2>
                    <div className="pay-details">
                      <span className="pay-titles">
                        <span className="pay-item-title">شماره قسط</span>
                        <span className="pay-item-title">مبلغ قسط</span>
                        <span className="pay-item-title">تاریخ سررسید</span>
                      </span>
                    </div>
                    <span className="pay-btn">پرداخت اقساطی</span>
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
                          {spilit_in_three(convert_to_persian(0))} تومان
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
                      cart.final_price === 0 ? (
                        <span className="pay-btn-bank">
                          اضافه کردن دوره رایگان
                        </span>
                      ) : (
                        <span className="pay-btn-bank">
                          انتقال به بانک و پرداخت
                        </span>
                      )
                    ) : (
                      <LittleLoading />
                    )}
                  </div>
                  <div className="discount-code">
                    <span className="discount-title">کد تخفیف</span>
                    <img src={arrow_up} alt="" />
                  </div>
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
