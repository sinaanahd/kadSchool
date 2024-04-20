import React, { Component, useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import convert_to_persian from "../functions/convert-to-persian";
import split_in_three from "../functions/spilit_in_three";

import LittleLoading from "../reuseables/little-loading";
import axios from "axios";
import { DataContext } from "../context/DataContext";
import Cart_item from "./cart-item/cart-item";
import urls from "../urls/url";

const Cart = () => {
  const { user, cart } = useContext(DataContext);
  const [pay_option, set_pay_option] = useState(false);
  const [submit_pause, set_submit_pause] = useState(false);
  const [cash_pause, set_cash_pause] = useState(false);
  const [ghest_num, set_ghest_num] = useState(2);
  const [ghests, set_ghests] = useState(false);
  const [ghest_pause, set_ghest_pause] = useState(false);
  const [ghest_pay_pause, set_ghest_pay_pause] = useState(false);
  useEffect(() => {
    set_pay_option(false);
    set_ghests(false);
  }, [cart]);
  const get_naghd_link = () => {
    set_cash_pause(true);
    axios
      .get(`${urls.sale}${user.user_id}-0-true`)
      .then((res) => {
        // console.log(res.data);
        const { error, response, result } = res.data;
        if (result) {
          window.open(response);
        } else {
          alert(error);
        }
        set_cash_pause(false);
      })
      .catch((e) => {
        console.log(e.message);
        set_cash_pause(false);
      });
  };
  const get_ghest_link = () => {
    set_ghest_pay_pause(true);
    axios
      .get(`${urls.sale}${user.user_id}-2-true`)
      .then((res) => {
        // console.log(res.data);
        const { error, response, result } = res.data;
        if (result) {
          window.open(response);
        } else {
          alert(error);
        }
        set_ghest_pay_pause(false);
      })
      .catch((e) => {
        console.log(e.message);
        set_ghest_pay_pause(false);
      });
  };
  const calculate_ghest = () => {
    set_ghest_pause(true);
    axios
      .get(`${urls.ghest_details}${cart.final_price}-${ghest_num}`)
      .then((res) => {
        const { error, response, result } = res.data;
        if (result) {
          set_ghests(response);
        } else {
          alert(error);
        }
        set_ghest_pause(false);
      })
      .catch((e) => {
        console.log(e.message);
        set_ghest_pause(false);
      });
  };
  const submit_cart = () => {
    const ids = { products_ids: cart.ids };
    set_submit_pause(true);
    axios
      .patch(`${urls.buy_cart}${user.user_id}`, ids)
      .then((res) => {
        console.log(res.data);
        const { error, response, result } = res.data;
        if (result) {
          if (response.products_ids.length !== cart.ids.length) {
            console.log("problem detected");
          } else {
            set_pay_option(true);
          }
        } else {
          alert(error);
          console.log(error);
        }
        set_submit_pause(false);
      })
      .catch((e) => {
        console.log(e.message);
        set_submit_pause(false);
      });
  };
  const calcute_user_wallet = () => {
    let sum = 0;
    user.transactions.forEach((t) => {
      sum += t.amount;
    });
    return sum;
  };
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
      <section className="bgc-wrapper cart-page-new mm-width">
        <h1 className="title">سبد خرید</h1>
        <div className="cart-main-data">
          <section className="cart-items-part">
            <h2 className="semi-title">سبد خرید شما</h2>
            <div className="items-wrapper">
              {cart ? (
                cart.items.length !== 0 ? (
                  cart.items.map((k) => (
                    <Cart_item kelas={k} key={k.kelas_id} />
                  ))
                ) : (
                  "سبد خرید شما خالی است"
                )
              ) : (
                <LittleLoading />
              )}
            </div>
          </section>
          <div className="left-col">
            <section className="final-cart-data">
              <span className="final-data-item">
                <span className="item-title">قیمت کالا‌ها</span>
                <span className="item-num">
                  {split_in_three(
                    convert_to_persian(cart ? cart.pure_price : 0)
                  )}{" "}
                  تومان
                </span>
              </span>
              <span className="final-data-item">
                <span className="item-title">تخفیف</span>
                <span className="item-num">
                  {split_in_three(
                    convert_to_persian(cart ? cart.discounts : 0)
                  )}{" "}
                  تومان
                </span>
              </span>
              <span className="final-data-item">
                <span className="item-title">اعتبار کیف پول</span>
                <span className="item-num">
                  <bdi>
                    {" "}
                    {split_in_three(
                      convert_to_persian(user ? calcute_user_wallet() : 0)
                    ) + "-"}{" "}
                    تومان
                  </bdi>
                </span>
              </span>
              <span className="final-data-item sumation">
                <span className="item-title">جمع سبد خرید</span>
                <span className="item-num">
                  {split_in_three(
                    convert_to_persian(
                      cart && user
                        ? cart.final_price - calcute_user_wallet() >= 0
                          ? cart.final_price - calcute_user_wallet()
                          : 0
                        : 0
                    )
                  )}{" "}
                  تومان
                </span>
              </span>
              {!submit_pause ? (
                <span className="sumbit-order-btn" onClick={submit_cart}>
                  ثبت سفارش
                </span>
              ) : (
                <span className="sumbit-order-btn">
                  <LittleLoading />
                </span>
              )}
            </section>
            {pay_option ? (
              <section className="final-cart-data">
                <h3 className="choose-title">نوع پرداخت خود را انتخاب کنید</h3>
                <span className="options">
                  {cash_pause ? (
                    <span className="option-btn">
                      <LittleLoading />
                    </span>
                  ) : (
                    <span className="option-btn" onClick={get_naghd_link}>
                      نقدی
                    </span>
                  )}
                  {/* {ghest_pause ? (
                    <span className="option-btn">
                      <LittleLoading />
                    </span>
                  ) : (
                    <span className="option-btn" onClick={calculate_ghest}>
                      قسطی
                    </span>
                  )} */}
                </span>
                {ghests ? (
                  <>
                    <div className="all-ghests">
                      <span className="ghest-wrapper header-ghest">
                        <span className="ghest-num first-col">شماره </span>
                        <span className="ghest-num num-data">مبلغ </span>
                        <span className="ghest-num">تاریخ </span>
                      </span>
                      {ghests.map((g, i) => (
                        <span className="ghest-wrapper" key={i++}>
                          <span className="ghest-num first-col">
                            {convert_to_persian(i + 1)}
                          </span>
                          <span className="ghest-num num-data">
                            {split_in_three(
                              convert_to_persian(
                                g[0] - Math.ceil(calcute_user_wallet() / 2) >= 0
                                  ? g[0] - Math.ceil(calcute_user_wallet() / 2)
                                  : 0
                              )
                            )}{" "}
                            <span className="toman">تومان</span>
                          </span>
                          <span className="ghest-num">
                            {new Date(g[1]).toLocaleDateString("fa-ir")}
                          </span>
                        </span>
                      ))}
                      <span className="ghest-wrapper top-border"></span>
                    </div>
                    {ghest_pay_pause ? (
                      <span className="pay-in-ghesti-btn">
                        <LittleLoading />
                      </span>
                    ) : (
                      <span
                        className="pay-in-ghesti-btn"
                        onClick={get_ghest_link}
                      >
                        پرداخت اولین قسط
                      </span>
                    )}
                  </>
                ) : (
                  <></>
                )}
              </section>
            ) : (
              <></>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

// export default Cart;
// class Cart extends Component {
//   state = {
//     pause: false,
//     cash_pause: false,
//   };
//   componentDidMount() {}
//   // get_link = (num) => {
//   //   const { user, handle_error } = this.props;
//   //   this.setState({ cash_pause: true });
//   //   axios
//   //     .get(
//   //       `https://kadschool.com/backend/kad_api/payment_link/${user.user_id}-${num}-0`
//   //     )
//   //     .then((res) => {
//   //       const payment_link = res.data;
//   //       window.open(payment_link.link);
//   //       this.setState({ cash_pause: false });
//   //     })
//   //     .catch((e) => {
//   //       handle_error(e);
//   //     });
//   // };
//   render() {
//     const {
//       cart,
//       request_id,
//       handle_cart,
//       cart_products,
//       ghests,
//       wants_ghesti,
//       user,
//       gh_wait,
//     } = this.props;
//     return (
//       <>
//         <Helmet>
//           <title>سبد خرید</title>
//           <meta
//             name="description"
//             content="صفحه سبد خرید کاد برای مشاهده و اعمال تغییر در خرید های شما در سایت کاد"
//           />
//           <meta
//             name="keywords"
//             content="سبد خرید کاد, سبد خرید, مشاهده سبد خرید کاد"
//           />
//         </Helmet>
//         <section className="bgc-wrapper cart-section-wrapper">
//           <div className="cart-section mm-width">
//             <SideBar />
//             <div className="main-content">
//               <h1 className="title">سبد خرید</h1>
//               <div className="cols-wrapper">
//                 <div className="right-col">
//                   <div className="cart-items-wrapper">
//                     <h2 className="semi-title">محصولات</h2>
//                     {cart_products ? (
//                       cart_products.map((p) => (
//                         <span key={p.kelas_id} className="cart-item">
//                           <span className="img-wrapper-name">
//                             <img src={p.image_link} alt={p.kelas_title} />
//                             <span className="names">
//                               <h3 className="prod-title">{p.kelas_title}</h3>
//                               <span className="teacher-name">
//                                 {p.teachers.map((t) => (
//                                   <span key={t.teacher_id}>{t.fullname} </span>
//                                 ))}
//                               </span>
//                             </span>
//                           </span>
//                           <span className="delete-price">
//                             {request_id === p.kelas_id ? (
//                               <LittleLoading />
//                             ) : (
//                               <img
//                                 src={deleteIcon}
//                                 alt="حذف کردن"
//                                 className="remove-cart-item"
//                                 onClick={() => {
//                                   handle_cart(p.kelas_id);
//                                 }}
//                               />
//                             )}

//                             <span className="prices-wrapper">
//                               {p.discounted_price ? (
//                                 <span className="discounted-price">
//                                   {spilit_in_three(convert_to_persian(p.price))}
//                                 </span>
//                               ) : (
//                                 <></>
//                               )}
//                               {p.discounted_price ? (
//                                 p.price !== 0 ? (
//                                   <>
//                                     <span className="currency">تومان</span>
//                                     <span className="price">
//                                       {spilit_in_three(
//                                         convert_to_persian(p.discounted_price)
//                                       )}
//                                     </span>
//                                   </>
//                                 ) : (
//                                   "رایگان"
//                                 )
//                               ) : p.price !== 0 ? (
//                                 <>
//                                   <span className="currency">تومان</span>
//                                   <span className="price">
//                                     {spilit_in_three(
//                                       convert_to_persian(p.price)
//                                     )}
//                                   </span>
//                                 </>
//                               ) : (
//                                 "رایگان"
//                               )}
//                             </span>
//                           </span>
//                         </span>
//                       ))
//                     ) : (
//                       <LittleLoading />
//                     )}
//                   </div>
//                   <div className="how-to-pay-wrapper">
//                     <h2 className="semi-title">پرداخت اقساطی</h2>
//                     <div className="pay-details">
//                       <span className="pay-titles">
//                         <span className="pay-item-title">شماره قسط</span>
//                         <span className="pay-item-title">مبلغ قسط</span>
//                         <span className="pay-item-title">تاریخ سررسید</span>
//                       </span>
//                       {ghests ? (
//                         ghests.map((gh, i) => (
//                           <span className="pay-item" key={i++}>
//                             <span className="gh-item gh-gh-num">
//                               {convert_to_persian(i + 1)}
//                             </span>
//                             <span className="gh-item gh-price">
//                               {spilit_in_three(convert_to_persian(gh.price))}
//                             </span>
//                             <span className="gh-item gh-date">
//                               {convert_to_persian(gh.day) +
//                                 " / " +
//                                 gh.farsi_month +
//                                 " / " +
//                                 convert_to_persian(gh.year)}
//                             </span>
//                           </span>
//                         ))
//                       ) : (
//                         <></>
//                       )}
//                     </div>
//                     {ghests ? (
//                       <>
//                         <span
//                           className="pay-btn"
//                           onClick={() => {
//                             this.get_link(1);
//                           }}
//                         >
//                           {this.state.cash_pause ? (
//                             <LittleLoading />
//                           ) : (
//                             "پرداخت اولین قسط"
//                           )}
//                         </span>
//                         {/* <div className="discont-not-cash">
//                           <input
//                             type="text"
//                             className="discount-code-input"
//                             name="discount-input"
//                             placeholder="کد تخفیف خود را وارد کنید"
//                           />
//                           <span className="submit-discount-code">ثبت کد</span>
//                         </div> */}
//                       </>
//                     ) : (
//                       <span
//                         className="pay-btn"
//                         onClick={() => {
//                           wants_ghesti(user.user_id);
//                         }}
//                       >
//                         {gh_wait ? <LittleLoading /> : "پرداخت اقساطی"}
//                       </span>
//                     )}
//                     {/* <span
//                       className="pay-btn"
//                       onClick={() => {
//                         wants_ghesti(user.user_id);
//                       }}>
//                       {gh_wait ? <LittleLoading /> : "پرداخت اقساطی"}
//                     </span> */}
//                     <span className="arrow-up">
//                       <img src={arrow_up} alt="" />
//                     </span>
//                   </div>
//                 </div>
//                 <div className="left-col">
//                   <div className="price-details">
//                     <div className="details">
//                       <span className="details-item">
//                         <span className="d-i-title">جمع مبلغ کالاها:</span>
//                         <span className="amount">
//                           {spilit_in_three(
//                             convert_to_persian(cart ? cart.pure_price : 0)
//                           )}{" "}
//                           تومان
//                         </span>
//                       </span>
//                       <span className="details-item">
//                         <span className="d-i-title">سود شما از این خرید:</span>
//                         <span className="amount">
//                           {spilit_in_three(
//                             convert_to_persian(
//                               cart ? cart.pure_price - cart.final_price : 0
//                             )
//                           )}{" "}
//                           تومان
//                         </span>
//                       </span>
//                       <span className="details-item">
//                         <span className="d-i-title">اعتبار کیف پول:</span>
//                         <span className="amount">
//                           {spilit_in_three(convert_to_persian(0))} تومان
//                         </span>
//                       </span>
//                       <span className="details-item bold-style">
//                         <span className="d-i-title">مبلغ پرداختی:</span>
//                         <span className="amount">
//                           {spilit_in_three(
//                             convert_to_persian(cart ? cart.final_price : 0)
//                           )}{" "}
//                           تومان
//                         </span>
//                       </span>
//                     </div>
//                     {cart ? (
//                       cart.items_ids.length === 0 ? (
//                         ""
//                       ) : cart.final_price === 0 ? (
//                         <span className="pay-btn-bank">
//                           اضافه کردن دوره رایگان
//                         </span>
//                       ) : (
//                         <span
//                           onClick={() => {
//                             this.get_link(0);
//                           }}
//                           className="pay-btn-bank"
//                         >
//                           {this.state.cash_pause ? (
//                             <LittleLoading />
//                           ) : (
//                             "خرید نقدی"
//                           )}
//                         </span>
//                       )
//                     ) : (
//                       <LittleLoading />
//                     )}
//                   </div>
//                   {/* <Discount /> */}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//       </>
//     );
//   }
// }

export default Cart;
