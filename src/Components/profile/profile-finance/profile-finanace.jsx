import React, { Component } from "react";
import convert_to_persian from "../../functions/convert-to-persian";
import split_in_three from "../../functions/spilit_in_three";
import copy_to_clip_board from "../../functions/copy-to-clip-board";
import axios from "axios";

import copyIcon from "../../../assets/images/copy-icon.webp";
import LittleLoading from "../../reuseables/little-loading";

class ProfileFinanace extends Component {
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
    cash_pause: false,
  };
  componentDidMount() {}
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
  pay_next_ghest = (num, pay_id) => {
    const { user, handle_error } = this.props;
    this.setState({ cash_pause: true });
    console.log(pay_id, num);
    // prettier-ignore
    // const send_pay_id = { "pay_id": pay_id };
    axios
      .get(
        `https://kadschool.com/backend/kad_api/payment_link/${user.user_id}-${num}-${pay_id}`
        // `https://kadschool.com/backend/kad_api/payment_link2`
      )
      .then((res) => {
        const payment_link = res.data;
        // console.log(payment_link);
        window.open(payment_link.link);
        this.setState({ cash_pause: false });
      })
      .catch((e) => {
        handle_error(e);
      });
  };
  calculate_remain_debt = (user_pay_info) => {
    let sum = 0;
    const not_paid = [
      ...user_pay_info.filter((upi) => upi.status_text !== "پرداخت شده"),
    ];
    if (not_paid.length !== 0) {
      not_paid.forEach((np) => {
        sum += np.price;
      });
    }
    return sum;
  };
  render() {
    const { user_pay_info } = this.props;
    return (
      <div className="profile-finance">
        <div className="two-boxes-wrapper">
          <div className="short-desc-wrapper">
            <h2 className="short-desc-title">خلاصه گزارش مالی</h2>
            <div className="short-data">
              <span className="text">اعتبار کیف پول :</span>
              <span className="number-data">
                {split_in_three(convert_to_persian(0))}
              </span>
            </div>
            <div className="short-data">
              <span className="text">میزان بدهی :</span>
              <span className="number-data">
                {user_pay_info
                  ? split_in_three(
                      convert_to_persian(
                        this.calculate_remain_debt(user_pay_info)
                      )
                    )
                  : convert_to_persian(0)}
              </span>
            </div>
            <div className="short-data">
              <span className="text">وضعیت پرداختی آینده :</span>
              <span className="number-data">
                {user_pay_info
                  ? Object.keys({
                      ...user_pay_info.find(
                        (upi) => upi.status_text !== "پرداخت شده"
                      ),
                    }).length !== 0
                    ? split_in_three(
                        convert_to_persian(
                          {
                            ...user_pay_info.find(
                              (upi) => upi.status_text !== "پرداخت شده"
                            ),
                          }.price
                        )
                      )
                    : convert_to_persian(0)
                  : convert_to_persian(0)}
              </span>
            </div>
          </div>
        </div>
        <h2 className="semi-title">سفارشات و پرداخت اقساط</h2>
        <div className="orders-payments-wrapper">
          <div className="payment-wrapper">
            {user_pay_info && user_pay_info.length !== 0
              ? user_pay_info.map((p, i) => (
                  <div className="payment" key={i++}>
                    <span className="payment-header">
                      <span className="p-item">
                        <span className="text">کد پیگیری پرداخت :</span>
                        <span className="p-number">
                          {p.ref_id ? p.ref_id : "(پرداخت نشده)"}
                        </span>
                      </span>
                      <span className="p-item">
                        {p.is_ghesti ? (
                          <span className="text">
                            قسط ({convert_to_persian(p.ghest_index)})
                          </span>
                        ) : (
                          ""
                        )}
                        {/* <span className="p-number"></span> */}
                      </span>
                    </span>
                    <span className="main-data">
                      <span className="img-name-wrapper">
                        <img
                          src={p.data_kelasses[0].image_link}
                          alt={p.data_kelasses[0].kelas_title}
                        />
                        <span className="names">
                          <span className="prod-name">
                            {p.data_kelasses[0].kelas_title_and_ostad_name}
                          </span>
                          <span className="teacher-name">
                            {p.data_kelasses[0].data_teachers.fullname}
                          </span>
                        </span>
                      </span>
                      <span className="status-wrapper">
                        <span className="status-title">وضعیت پرداخت</span>
                        <span className="status">{p.status_text}</span>
                      </span>
                      <span className="payed-price-wrapper">
                        <span className="payed-title">مبلغ پرداختی</span>
                        <span className="pay-amount">
                          <span className="currency">تومان</span>
                          <span className="payed-number">
                            {split_in_three(convert_to_persian(p.price))}
                          </span>
                        </span>
                      </span>
                    </span>
                  </div>
                ))
              : "شما بدهی ای ندارید"}
            <span className="next-pay-price">
              <span className="next-pay-notifier">
                <span className="next-text">پرداخت قسط بعدی به مبلغ :</span>
                <span className="next-pay-amount">
                  {user_pay_info
                    ? Object.keys({
                        ...user_pay_info.find(
                          (upi) => upi.status_text !== "پرداخت شده"
                        ),
                      }).length !== 0
                      ? split_in_three(
                          convert_to_persian(
                            {
                              ...user_pay_info.find(
                                (upi) => upi.status_text !== "پرداخت شده"
                              ),
                            }.price
                          )
                        )
                      : "شما قسط پرداخت نشده ندارید"
                    : ""}
                </span>
              </span>
              {user_pay_info ? (
                Object.keys({
                  ...user_pay_info.find(
                    (upi) => upi.status_text !== "پرداخت شده"
                  ),
                }).length !== 0 ? (
                  <span
                    onClick={() => {
                      this.pay_next_ghest(
                        {
                          ...user_pay_info.find(
                            (upi) => upi.status_text !== "پرداخت شده"
                          ),
                        }.ghest_index,
                        {
                          ...user_pay_info.find(
                            (upi) => upi.status_text !== "پرداخت شده"
                          ),
                        }.pay_id
                      );
                    }}
                    className="next-pay-btn"
                  >
                    {this.state.cash_pause ? (
                      <LittleLoading />
                    ) : (
                      `پرداخت قسط (
                    ${
                      {
                        ...user_pay_info.find(
                          (upi) => upi.status_text !== "پرداخت شده"
                        ),
                      }.ghest_index
                    }
                    )`
                    )}
                  </span>
                ) : (
                  ""
                )
              ) : (
                ""
              )}
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileFinanace;
