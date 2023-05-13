import React, { Component } from "react";
import { Helmet } from "react-helmet";
import Header from "../header/header";
import SideBar from "../side-bar/side-bar";
import withWebsiteData from "../hoc/with-website-data";
import hello_svg from "../../assets/images/hello-page.svg";
import convert_to_persian from "../functions/convert-to-persian";

class Support extends Component {
  state = {};
  render() {
    const { user } = this.props;
    return (
      <>
        <Helmet>
          <title>پشتیبانی</title>
        </Helmet>
        <section className="bgc-wrapper hello-page-section">
          <div className="hello-page mm-width">
            <SideBar />
            <div className="main-content">
              <img src={hello_svg} />
              <h1 className="title">سلام همراه خوب کاد</h1>
              <h2 className="sub-titile">احتمالا الان نیاز به کمک ما داری</h2>
              <div className="help-ways">
                <p>از طریق راه های زیر میتونیم کمکت کنیم:</p>
                <span className="ways-to-contact-wrapper">
                  <span className="way-title">شماره ثابت:</span>
                  <a href="tel:+982166950624">
                    {"۰" + convert_to_persian(2166950624)}
                  </a>
                </span>
                <span className="ways-to-contact-wrapper">
                  <span className="way-title">شماره همراه: </span>
                  <a href="tel:+989051300693">
                    {"۰" + convert_to_persian(9051300693)}
                  </a>
                </span>
                <span className="ways-to-contact-wrapper">
                  <span className="way-title">پشتیبانی تلگرامی:</span>
                  <a href="https://t.me/kadadmim">t.me/kadadmim</a>
                </span>
                <span className="ways-to-contact-wrapper">
                  <span className="way-title">پشتیبانی واتسپ:</span>
                  <a href="https://wa.me/+989051300693">wa.me/09051300693</a>
                </span>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default withWebsiteData(Support);
