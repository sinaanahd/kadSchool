import React, { Component } from "react";
import { Link } from "react-router-dom";
import scrollToTop from "../functions/scroll";
import axios from "axios";

import footerLogo from "../../assets/images/footer-logo-white-1.webp";
import aparatLogo from "../../assets/images/aparat.webp";
import telegramIcon from "../../assets/images/telegram-icon.webp";
import whatsappIcon from "../../assets/images/whatsapp-icon.webp";
import instagramIcon from "../../assets/images/instagram-icon.webp";
import LittleLoading from "../reuseables/little-loading";

class NewFooter extends Component {
  state = {
    phone_number: false,
    phone_err: false,
    pause: false,
    final_message: false,
  };
  send_gift_request = (e) => {
    const phone_number = this.state.phone_number;
    const send_obj = { phone_number: phone_number, type: 1 };
    this.setState({ pause: true });
    axios
      .post(
        `https://kadschool.com/backend/kad_api/call_request_marketing`,
        send_obj
      )
      .then((res) => {
        const { status } = res.data;
        //console.log(res.data);
        this.setState({ pause: false });
        if (status) {
          this.setState({ final_message: "درخواست شما با موفقیت ثبت شد" });
        } else {
          this.setState({
            final_message: "درخواست شما قبلا ثبت شده ",
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
  handle_phone = (e) => {
    const { value } = e.target;
    //console.log(value);
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
    return (
      <footer className="new-footer">
        <div className="logo-wrapper">
          <Link
            onClick={() => {
              scrollToTop();
            }}
            to="/HomePage">
            <img
              src={footerLogo}
              width={62}
              height={28}
              alt="کاد (کلاس اینترنتی دریافت)"
            />
          </Link>
        </div>
        <div className="footer-content">
          <div className="light-blue"></div>
          <div className="main-content mm-width">
            <div className="get-gift">
              <p className="h4">دریافت هدیه</p>
              <p>هدیه یک میلیون تومانیت رو همین الان از کاد بگیر</p>
              <span className="footer-input-wrapper">
                <input
                  onInput={(e) => {
                    this.handle_phone(e);
                  }}
                  type="number"
                  placeholder="09123456789"
                />
                {this.state.phone_err === "ok" ? (
                  <span
                    onClick={() => {
                      this.send_gift_request();
                    }}
                    className="submit-btn-footer">
                    {this.state.pause ? <LittleLoading /> : "ثبت"}
                  </span>
                ) : (
                  <span className="submit-btn-footer wait-btn-footer">ثبت</span>
                )}
              </span>
              {this.state.final_message ? (
                <span className="normal-footer-final-msg">
                  {this.state.final_message}
                </span>
              ) : (
                ""
              )}
              {this.state.phone_err && this.state.phone_err !== "ok" ? (
                <span className="normal-footer-err-wrapper">
                  {this.state.phone_err}
                </span>
              ) : (
                ""
              )}
            </div>
            <div className="quick-acsses ul-type">
              <p className="ul-title">درباره کاد</p>
              <ul>
                <li>
                  <Link
                    onClick={() => {
                      scrollToTop();
                    }}
                    to="/Support">
                    پشتیبانی
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() => {
                      scrollToTop();
                    }}
                    to="/FAQ">
                    سوالات متداول
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() => {
                      scrollToTop();
                    }}
                    to="/Needed-apps">
                    {" "}
                    نرم افزار های مورد نیاز
                  </Link>
                </li>
              </ul>
            </div>
            <div className="about-kad ul-type">
              <p className="ul-title">دسترسی سریع</p>
              <ul>
                <li>
                  <Link
                    onClick={() => {
                      scrollToTop();
                    }}
                    to="/Top-students">
                    {" "}
                    رتبه های برتر کاد
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() => {
                      scrollToTop();
                    }}
                    to="/Why-kad">
                    چرا کاد؟
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() => {
                      scrollToTop();
                    }}
                    to="/Teachers">
                    استادان کاد
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() => {
                      scrollToTop();
                    }}
                    to="/Kad-calender">
                    تقویم کاد
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() => {
                      scrollToTop();
                    }}
                    to="/Rules">
                    قوانین کاد
                  </Link>
                </li>
              </ul>
            </div>
            <div className="icon-img-map-col">
              <div className="icons">
                <a
                  href="https://b2n.ir/y31513"
                  target="_blank"
                  className="icon">
                  <img
                    width={20}
                    height={21}
                    src={aparatLogo}
                    alt="آپارات کاد"
                  />
                </a>
                <a
                  href="https://b2n.ir/y01578"
                  target="_blank"
                  className="icon">
                  <img
                    width={20}
                    height={19.35}
                    src={instagramIcon}
                    alt="اینستاگرام کاد"
                  />
                </a>
                <a
                  href="https://b2n.ir/r59262"
                  target="_blank"
                  className="icon">
                  <img
                    width={20}
                    height={19.35}
                    src={whatsappIcon}
                    alt="واتسپ کاد"
                  />
                </a>
                <a
                  href="https://b2n.ir/u76961"
                  target="_blank"
                  className="icon">
                  <img
                    width={20}
                    height={18.36}
                    src={telegramIcon}
                    alt="تلگرام کاد"
                  />
                </a>
              </div>
              <div className="map-img">
                <span className="map">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.0909715519983!2d51.3952713!3d35.699378900000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e0122d3305d81%3A0xc26623dede1f537d!2z2qnYp9iv!5e0!3m2!1sen!2s!4v1684677706408!5m2!1sen!2s"
                    width="180"
                    height="133"
                    title="نقشه کاد"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"></iframe>
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
                      rel="noopener">
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
        </div>
        <p className="abs-footer-copy">
          کلیه حقوق مادی و معنوی این سایت در اختیار انتشارات دریافت می باشد و
          کپی برداری از کلیه محتوای آن غیر مجاز است.
        </p>
      </footer>
    );
  }
}

export default NewFooter;
