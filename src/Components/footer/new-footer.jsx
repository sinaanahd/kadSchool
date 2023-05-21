import React, { Component } from "react";
import { Link } from "react-router-dom";

import footerLogo from "../../assets/images/footer-logo.svg";
import aparatLogo from "../../assets/images/aparat.svg";
import telegramIcon from "../../assets/images/telegram-icon.svg";
import whatsappIcon from "../../assets/images/whatsapp-icon.svg";
import instagramIcon from "../../assets/images/instagram-icon.svg";
import rectangle_again from "../../assets/images/rectangle-again.svg";
class NewFooter extends Component {
  state = {};
  render() {
    return (
      <footer className="new-footer">
        <div className="logo-wrapper">
          <Link to="/Dashboard">
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
              <input type="number" placeholder="09123456789" />
              <span className="submit-btn-footer">ثبت</span>
            </div>
            <div className="quick-acsses ul-type">
              <h4 className="ul-title">دسترسی سریع</h4>
              <ul>
                <li>
                  <Link to="/Support">پشتیبانی</Link>
                </li>
                <li>
                  <Link to="#">سوالات متداول</Link>
                </li>
                <li>
                  <Link to="#"> نرم افزار های مورد نیاز</Link>
                </li>
              </ul>
            </div>
            <div className="about-kad ul-type">
              <h4 className="ul-title">دسترسی سریع</h4>
              <ul>
                <li>
                  <Link to="#"> رتبه های برتر کاد</Link>
                </li>
                <li>
                  <Link to="#">چرا کاد؟</Link>
                </li>
                <li>
                  <Link to="#">استادان کاد</Link>
                </li>
                <li>
                  <Link to="#">تقویم کاد</Link>
                </li>
                <li>
                  <Link to="#">قوانین کاد</Link>
                </li>
              </ul>
            </div>
            <div className="icon-img-map-col">
              <div className="icons">
                <a href="#" className="icon">
                  <img src={aparatLogo} alt="آپارات کاد" />
                </a>
                <a href="#" className="icon">
                  <img src={instagramIcon} alt="ایسنتاگرام کاد" />
                </a>
                <a href="#" className="icon">
                  <img src={whatsappIcon} alt="واتسپ کاد" />
                </a>
                <a href="#" className="icon">
                  <img src={telegramIcon} alt="تلگرام کاد" />
                </a>
              </div>
              <div className="map-img">
                <span className="map"></span>
                <img src={rectangle_again} alt="" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default NewFooter;
