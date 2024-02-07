import React, { Component } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import scrollToTop from "../../functions/scroll";
import LittleLoading from "../../reuseables/little-loading";
import axios from "axios";

import mainLogo from "../../../assets/images/main-logo-white-1.webp";
import aparatLogo from "../../../assets/images/aparat.webp";
import telegramIcon from "../../../assets/images/telegram-icon.webp";
import whatsappIcon from "../../../assets/images/whatsapp-icon.webp";
import instagramIcon from "../../../assets/images/instagram-icon.webp";

class HomeFooter extends Component {
  state = {
    phone_number_2: false,
    phone_err_2: false,
    final_message_2: false,
  };
  send_gift_request_2 = () => {
    const phone_number = this.state.phone_number_2;
    const send_obj = { phone_number: phone_number, type: 1 };
    this.setState({ pause_2: true });
    axios
      .post(
        `https://kadschool.com/backend/kad_api/call_request_marketing`,
        send_obj
      )
      .then((res) => {
        const { status } = res.data;
        //console.log(res.data);
        this.setState({ pause_2: false });
        if (status) {
          this.setState({ final_message_2: "درخواست شما با موفقیت ثبت شد" });
        } else {
          this.setState({
            final_message_2: "درخواست شما قبلا ثبت شده ",
          });
        }
        setTimeout(() => {
          this.setState({ final_message_2: false });
        }, 2000);
      })
      .catch((e) => {
        this.setState({ pause_2: false });
        this.props.handle_error(e);
      });
  };
  handle_phone_2 = (e) => {
    const { value } = e.target;
    //console.log(value);
    let phone_number_2 = false;
    let phone_err_2 = false;
    if (!value.startsWith("09")) {
      phone_err_2 = "شماره باید با ۰۹ شروع شود";
    } else if (value.length !== 11) {
      phone_err_2 = "شماره تلفن باید ۱۱ رقم باشد";
    } else {
      phone_err_2 = "ok";
      phone_number_2 = value;
    }
    this.setState({ phone_err_2, phone_number_2 });
  };
  send_gift_request_2 = () => {
    const phone_number = this.state.phone_number_2;
    const send_obj = { phone_number: phone_number, type: 1 };
    this.setState({ pause_2: true });
    axios
      .post(
        `https://kadschool.com/backend/kad_api/call_request_marketing`,
        send_obj
      )
      .then((res) => {
        const { status } = res.data;
        //console.log(res.data);
        this.setState({ pause_2: false });
        if (status) {
          this.setState({ final_message_2: "درخواست شما با موفقیت ثبت شد" });
        } else {
          this.setState({
            final_message_2: "درخواست شما قبلا ثبت شده ",
          });
        }
        setTimeout(() => {
          this.setState({ final_message_2: false });
        }, 2000);
      })
      .catch((e) => {
        this.setState({ pause_2: false });
        this.props.handle_error(e);
      });
  };
  render() {
    const { not_home } = this.props;
    return (
      <footer className={"home-footer " + not_home}>
        <div className="content-force  mm-width">
          <Link
            onClick={() => {
              scrollToTop();
            }}
            to="/HomePage"
            className="home-page-link"
          >
            <img
              src={mainLogo}
              alt="کاد"
              width={175}
              height={42}
              loading="lazy"
            />
          </Link>
          <div className="home-footer-cols">
            <div className="hf-col hf-col-1">
              <p className="get-present">دریافت هدیه</p>
              <p className="present-text">
                هدیه یک میلیون تومانیت رو همین الان از کاد بگیر
              </p>
              <span className="jump-input-wrapper">
                <input
                  onInput={(e) => {
                    this.handle_phone_2(e);
                  }}
                  type="number"
                  placeholder="شماره تلفن"
                />
                {this.state.phone_err_2 === "ok" ? (
                  <span
                    onClick={() => {
                      this.send_gift_request_2();
                    }}
                    className="fly-spaceship-btn"
                  >
                    {this.state.pause_2 ? <LittleLoading /> : "پرواز سفینه"}
                  </span>
                ) : (
                  <span className="fly-spaceship-btn wait-footer-home">
                    پرواز سفینه
                  </span>
                )}
              </span>
              {this.state.final_message_2 ? (
                <span className="hf-final-msg">
                  {this.state.final_message_2}
                </span>
              ) : (
                ""
              )}
              {this.state.phone_err_2 && this.state.phone_err_2 !== "ok" ? (
                <span className="hf-error-wrapper">
                  {this.state.phone_err_2}
                </span>
              ) : (
                ""
              )}
            </div>
            <div className="hf-col hf-col-2">
              <h2 className="hf-footer-title">دسترسی سریع</h2>
              <ul>
                <li>
                  <Link
                    onClick={() => {
                      scrollToTop();
                    }}
                    to="/Support"
                  >
                    پشتیبانی
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() => {
                      scrollToTop();
                    }}
                    to="/FAQ"
                  >
                    سوالات متداول
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() => {
                      scrollToTop();
                    }}
                    to="/Needed-apps"
                  >
                    نرم افزار‌های مورد نیاز
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() => {
                      scrollToTop();
                    }}
                    to="/wallet"
                  >
                    کیف پول
                  </Link>
                </li>
              </ul>
            </div>
            <div className="hf-col hf-col-3">
              <h2 className="hf-footer-title">درباره کاد</h2>
              <ul>
                <li>
                  <Link
                    onClick={() => {
                      scrollToTop();
                    }}
                    to="/Top-students"
                  >
                    رتبه‌های برتر کاد
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() => {
                      scrollToTop();
                    }}
                    to="/Why-kad"
                  >
                    چرا کاد؟
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() => {
                      scrollToTop();
                    }}
                    to="/Teachers"
                  >
                    استادان کاد
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() => {
                      scrollToTop();
                    }}
                    to="/Kad-calender"
                  >
                    تقویم کاد
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() => {
                      scrollToTop();
                    }}
                    to="/Rules"
                  >
                    قوانین کاد
                  </Link>
                </li>
              </ul>
            </div>
            <div className="hf-col hf-col-4">
              <div className="social-icons">
                <a
                  href="https://b2n.ir/y31513"
                  target="_blank"
                  className="icon"
                >
                  <img
                    loading="lazy"
                    width={20}
                    height={21}
                    src={aparatLogo}
                    alt="آپارات کاد"
                  />
                </a>
                <a
                  href="https://b2n.ir/y01578"
                  target="_blank"
                  className="icon"
                >
                  <img
                    loading="lazy"
                    width={20}
                    height={19.35}
                    src={instagramIcon}
                    alt="اینستاگرام کاد"
                  />
                </a>
                <a
                  href="https://b2n.ir/r59262"
                  target="_blank"
                  className="icon"
                >
                  <img
                    loading="lazy"
                    width={20}
                    height={19.35}
                    src={whatsappIcon}
                    alt="واتسپ کاد"
                  />
                </a>
                <a
                  href="https://b2n.ir/u76961"
                  target="_blank"
                  className="icon"
                >
                  <img
                    loading="lazy"
                    width={20}
                    height={18.36}
                    src={telegramIcon}
                    alt="تلگرام کاد"
                  />
                </a>
              </div>
              <div className="map-enamad">
                <span className="map">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.0909715519983!2d51.3952713!3d35.699378900000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e0122d3305d81%3A0xc26623dede1f537d!2z2qnYp9iv!5e0!3m2!1sen!2s!4v1684677706408!5m2!1sen!2s"
                    width="180"
                    height="133"
                    title="نقشه کاد"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </span>
                <span className="enamad">
                  <p>
                    <a
                      style={{
                        textAlign: "center",
                        margin: "auto",
                        display: "block",
                        background: "white",
                        padding: "5px",
                      }}
                      aria-label="اینماد"
                      href="https://trustseal.enamad.ir/?id=251229&amp;Code=Jmy33pCxvf9GCBxttooi"
                      target="_blank"
                      rel="noopener"
                    >
                      <img
                        data-lazyloaded="1"
                        src="https://Trustseal.eNamad.ir/logo.aspx?id=251229&amp;Code=Jmy33pCxvf9GCBxttooi"
                        id="Jmy33pCxvf9GCBxttooi"
                        style={{ cursor: "pointer" }}
                        data-src="https://Trustseal.eNamad.ir/logo.aspx?id=251229&amp;Code=Jmy33pCxvf9GCBxttooi"
                        alt="اینماد"
                        className="litespeed-loaded"
                        data-was-processed="true"
                        width={20}
                        height={20}
                      />
                    </a>
                  </p>
                </span>
              </div>
            </div>
          </div>
          <p className="hf-copy-text">
            کلیه حقوق مادی و معنوی این سایت در اختیار انتشارات دریافت می باشد و
            کپی برداری از کلیه محتوای آن غیر مجاز است
          </p>
        </div>
      </footer>
    );
  }
}

export default HomeFooter;
