import axios from "axios";
import React, { Component } from "react";
import LittleLoading from "../../reuseables/little-loading";
import urls from "../../urls/url";
class ShopPopUp extends Component {
  state = {
    name: false,
    phone_number: false,
    name_err: false,
    phone_err: false,
    pause: false,
    final_message: false,
  };
  send_advice_request = (e) => {
    const name = this.state.name;
    const phone_number = this.state.phone_number;
    const send_obj = { fullname: name, phone_number: phone_number, type: 3 };
    this.setState({ pause: true });
    axios
      .post(`${urls.call_request_marketing}`, send_obj)
      .then((res) => {
        const { status } = res.data;
        //console.log(res.data);
        this.setState({ pause: false });
        if (status) {
          this.setState({ final_message: "درخواست شما با موفقیت ثبت شد" });
        } else {
          this.setState({
            final_message:
              "درخواست شما قبلا ثبت شده به زودی با شما تماس خواهیم گرفت",
          });
        }
        setTimeout(() => {
          this.setState({ final_message: false });
        }, 2000);
      })
      .catch((e) => {
        this.setState({ pause: false });
        this.props.handle_error(e);
      });
  };
  handle_name = (target) => {
    const { value } = target;
    let name_err = false;
    let name = false;
    if (value.length === 0) {
      name_err = "این فیلد نباید خالی باشد";
    } else if (value.length < 3) {
      name_err = "اسم وارد شده کوتاه است";
    } else {
      name_err = "ok";
      name = value;
    }
    this.setState({ name_err, name });
  };
  handle_phone = (target) => {
    const { value } = target;
    let phone_number = false;
    let phone_err = false;
    if (!value.startsWith("09")) {
      phone_err = "شماره باید با ۰۹ شروع شود";
    } else if (value.length !== 11) {
      phone_err = "شماره تلفن باید ۱۱ رقم باشد";
    } else {
      phone_err = "ok";
      phone_number = value;
    }
    this.setState({ phone_err, phone_number });
  };
  render() {
    const { handle_shop_pop_up } = this.props;
    return (
      <>
        <div
          className="shop-pu-bgc"
          onClick={(e) => {
            handle_shop_pop_up(e);
          }}
        >
          <div className="shop-pu-content">
            <h3 className="shop-pu-title">مشاوره ثبت نام</h3>
            <p className="shop-pop-up-desc">
              کافیه مشخصاتت رو برامون بفرستی تا توی اولین فرصت باهات تماس بگیریم
            </p>
            <span className="spu-input-wrapper">
              <span className="si-title">نام و نام خانوادگی</span>
              <input
                onInput={({ target }) => {
                  this.handle_name(target);
                }}
                type="text"
                placeholder="نام و نام خانوادگی"
              />
            </span>
            {this.state.name_err && this.state.name_err !== "ok" ? (
              <span className="error-popup">{this.state.name_err}</span>
            ) : (
              ""
            )}
            <span className="spu-input-wrapper">
              <span className="si-title">تلفن همراه</span>
              <input
                onInput={({ target }) => {
                  this.handle_phone(target);
                }}
                type="number"
                placeholder="تلفن همراه"
              />
            </span>
            {this.state.phone_err && this.state.phone_err !== "ok" ? (
              <span className="error-popup">{this.state.phone_err}</span>
            ) : (
              ""
            )}
            {this.state.name_err === "ok" && this.state.phone_err === "ok" ? (
              <span
                onClick={() => {
                  this.send_advice_request();
                }}
                className="spu-submit-form"
              >
                {this.state.pause ? <LittleLoading /> : "تایید"}
              </span>
            ) : (
              <span className="spu-submit-form not-now">تایید</span>
            )}
            <span className="final-message">{this.state.final_message}</span>
          </div>
        </div>
      </>
    );
  }
}

export default ShopPopUp;
