import React, { Component } from "react";

import telegramIcon from "../../assets/images/telegram-icon.svg";
import whatsappIcon from "../../assets/images/whatsapp-icon.svg";
import instagramIcon from "../../assets/images/instagram-icon.svg";
class Footer extends Component {
  state = {};
  render() {
    return (
      <>
        <footer className="main-footer">
          <div className="icons-wrapper">
            <a href="b2n.ir/f84751" className="icon">
              <img src={instagramIcon} alt="ایسنتاگرام کاد" />
            </a>
            <a href="b2n.ir/r59262" className="icon">
              <img src={whatsappIcon} alt="واتسپ کاد" />
            </a>
            <a href="b2n.ir/u76961" className="icon">
              <img src={telegramIcon} alt="تلگرام کاد" />
            </a>
          </div>
          <p className="gradient-signature">
            تمام حقوق مادی و معنوی کاد، محفوظ و متعلق به نشر دریافت است
          </p>
        </footer>
      </>
    );
  }
}

export default Footer;
