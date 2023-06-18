import React, { Component } from "react";
import { Link } from "react-router-dom";
import scrollToTop from "../functions/scroll";

import footerLogo from "../../assets/images/footer-logo.svg";
import aparatLogo from "../../assets/images/aparat.svg";
import telegramIcon from "../../assets/images/telegram-icon.svg";
import whatsappIcon from "../../assets/images/whatsapp-icon.svg";
import instagramIcon from "../../assets/images/instagram-icon.svg";

class NewFooter extends Component {
  state = {};
  render() {
    return (
      <footer className="new-footer">
        <div className="logo-wrapper">
          <Link
            onClick={() => {
              scrollToTop();
            }}
            to="/Dashboard">
            <img src={footerLogo} alt="کاد (کلاس اینترنتی دریافت)" />
          </Link>
        </div>
        <div className="footer-content">
          <div className="light-blue"></div>
          <div className="main-content mm-width">
            <div className="get-gift">
              <h4>دریافت هدیه</h4>
              <p>
                {" "}
                لورم ایپسوم متنی ساختگی توسط طراحانلورم ایپسوم متنی ساختگی توسط
                طراحان لورم ایپسوم متنی ساختگی توسط طراحان
              </p>
              <span className="footer-input-wrapper">
                <input type="number" placeholder="09123456789" />
                <span className="submit-btn-footer">ثبت</span>
              </span>
            </div>
            <div className="quick-acsses ul-type">
              <h4 className="ul-title">درباره کاد</h4>
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
              <h4 className="ul-title">دسترسی سریع</h4>
              <ul>
                <li>
                  <Link
                    onClick={() => {
                      scrollToTop();
                    }}
                    to="#">
                    {" "}
                    رتبه های برتر کاد
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() => {
                      scrollToTop();
                    }}
                    to="#">
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
                    to="#">
                    تقویم کاد
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() => {
                      scrollToTop();
                    }}
                    to="#">
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
                  <img src={aparatLogo} alt="آپارات کاد" />
                </a>
                <a
                  href="https://b2n.ir/y01578"
                  target="_blank"
                  className="icon">
                  <img src={instagramIcon} alt="ایسنتاگرام کاد" />
                </a>
                <a
                  href="https://b2n.ir/r59262"
                  target="_blank"
                  className="icon">
                  <img src={whatsappIcon} alt="واتسپ کاد" />
                </a>
                <a
                  href="https://b2n.ir/u76961"
                  target="_blank"
                  className="icon">
                  <img src={telegramIcon} alt="تلگرام کاد" />
                </a>
              </div>
              <div className="map-img">
                <span className="map">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.0909715519983!2d51.3952713!3d35.699378900000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e0122d3305d81%3A0xc26623dede1f537d!2z2qnYp9iv!5e0!3m2!1sen!2s!4v1684677706408!5m2!1sen!2s"
                    width="180"
                    height="133"
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
                      href="https://trustseal.enamad.ir/?id=251229&amp;Code=Jmy33pCxvf9GCBxttooi"
                      target="_blank"
                      rel="noopener">
                      <img
                        data-lazyloaded="1"
                        src="https://Trustseal.eNamad.ir/logo.aspx?id=251229&amp;Code=Jmy33pCxvf9GCBxttooi"
                        id="Jmy33pCxvf9GCBxttooi"
                        style={{ cursor: "pointer" }}
                        data-src="https://Trustseal.eNamad.ir/logo.aspx?id=251229&amp;Code=Jmy33pCxvf9GCBxttooi"
                        alt=""
                        className="litespeed-loaded"
                        data-was-processed="true"
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
