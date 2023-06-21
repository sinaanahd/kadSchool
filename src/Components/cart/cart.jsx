import React, { Component } from "react";
import { Helmet } from "react-helmet";
import withWebsiteData from "../hoc/with-website-data";
import SideBar from "../side-bar/side-bar";
import convert_to_persian from "../functions/convert-to-persian";
import spilit_in_three from "../functions/spilit_in_three";

import deleteIcon from "../../assets/images/delete-icon-dark-blue.svg";
import arrow_up from "../../assets/images/arrow-blue-up.svg";
class Cart extends Component {
  state = {
    products: false,
  };
  componentDidMount() {
    const { kelasses, cart, teachers, initial_data } = this.props;
    if (kelasses && cart && teachers) {
      this.start_page();
    } else {
      initial_data();
      this.start_page();
    }
  }
  start_page = () => {
    const { kelasses, cart, teachers } = this.props;
    const products = [];
    if (kelasses && cart && teachers) {
      cart.items_ids.forEach((item_id) => {
        const product = kelasses.find((k) => k.kelas_id === item_id);
        if (product) {
          const prod_teachers = [];
          product.teachers.forEach((t_id) => {
            const teacher = teachers.find((t) => t_id === t.teacher_id);
            if (teacher) prod_teachers.push(teacher);
          });
          product.teachers = prod_teachers;
          products.push(product);
        }
      });
      this.setState({ products });
      console.log(products);
    } else {
      setTimeout(() => {
        this.start_page();
      }, 500);
    }
  };
  render() {
    const { cart } = this.props;
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
                    {this.state.products ? (
                      this.state.products.map((p) => (
                        <span key={p.kelas_id} className="cart-item">
                          <span className="img-wrapper-name">
                            <img src="" alt={p.kelas_title} />
                            <span className="names">
                              <h3 className="prod-title">{p.kelas_title}</h3>
                              <span className="teacher-name">
                                {p.teachers.map((t) => (
                                  <span key={t.teacher_id}>{t.fullname}/</span>
                                ))}
                              </span>
                            </span>
                          </span>
                          <span className="delete-price">
                            <img
                              src={deleteIcon}
                              alt="حذف کردن"
                              className="remove-cart-item"
                            />
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
                    {/* <span className="cart-item">
                      <span className="img-wrapper-name">
                        <img src="" alt="" />
                        <span className="names">
                          <h3 className="prod-title">نام محصول</h3>
                          <h4 className="teacher-name">نام استاد</h4>
                        </span>
                      </span>
                      <span className="delete-price">
                        <img
                          src={deleteIcon}
                          alt="حذف کردن"
                          className="remove-cart-item"
                        />
                        <span className="prices-wrapper">
                          <span className="discounted-price">
                            {spilit_in_three(convert_to_persian(123456))}
                          </span>
                          <span className="currency">تومان</span>
                          <span className="price">
                            {spilit_in_three(convert_to_persian(123456))}
                          </span>
                        </span>
                      </span>
                    </span>
                    <span className="cart-item">
                      <span className="img-wrapper-name">
                        <img src="" alt="" />
                        <span className="names">
                          <h3 className="prod-title">نام محصول</h3>
                          <h4 className="teacher-name">نام استاد</h4>
                        </span>
                      </span>
                      <span className="delete-price">
                        <img
                          src={deleteIcon}
                          alt="حذف کردن"
                          className="remove-cart-item"
                        />
                        <span className="prices-wrapper">
                          <span className="discounted-price">
                            {spilit_in_three(convert_to_persian(123456))}
                          </span>
                          <span className="currency">تومان</span>
                          <span className="price">
                            {spilit_in_three(convert_to_persian(123456))}
                          </span>
                        </span>
                      </span>
                    </span>
                    <span className="cart-item">
                      <span className="img-wrapper-name">
                        <img src="" alt="" />
                        <span className="names">
                          <h3 className="prod-title">نام محصول</h3>
                          <h4 className="teacher-name">نام استاد</h4>
                        </span>
                      </span>
                      <span className="delete-price">
                        <img
                          src={deleteIcon}
                          alt="حذف کردن"
                          className="remove-cart-item"
                        />
                        <span className="prices-wrapper">
                          <span className="discounted-price">
                            {spilit_in_three(convert_to_persian(123456))}
                          </span>
                          <span className="currency">تومان</span>
                          <span className="price">
                            {spilit_in_three(convert_to_persian(123456))}
                          </span>
                        </span>
                      </span>
                    </span> */}
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
                    <span className="pay-btn-bank">
                      انتقال به بانک و پرداخت
                    </span>
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
