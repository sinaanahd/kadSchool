import React, { Component } from "react";
import { Helmet } from "react-helmet";
import SideBar from "../side-bar/side-bar";
import hello_svg from "../../assets/images/hello-page.webp";
import convert_to_persian from "../functions/convert-to-persian";

const Support = () => {
  return (
    <>
      <Helmet>
        <title>پشتیبانی</title>
        <link rel="preload" as="image" href={hello_svg} />
        <meta
          name="description"
          content="در اینجا ما می‌توانیم به شما درباره تقریباً هر چیزی که نیاز دارید کمک کنیم و شما می‌توانید با ما برای مشاوره یا کمک تماس بگیرید. به ما بپیوندید و عضو خانواده بزرگ کاد باشید."
        />
      </Helmet>
      <section className="bgc-wrapper hello-page-section">
        <div className="hello-page mm-width">
          <SideBar />
          <div className="main-content">
            <img src={hello_svg} alt="پشتیبانی کاد" width={400} height={400} />
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
                <span className="way-title">شماره ثابت: </span>
                <a href="tel:+982162999110">
                  {"۰" + convert_to_persian(2162999110)}
                </a>
              </span>
              <span className="ways-to-contact-wrapper">
                <span className="way-title">پشتیبانی تلگرامی:</span>
                <a href="https://t.me/kadadmim">t.me/kadadmim</a>
              </span>
              {/* <span className="ways-to-contact-wrapper">
                <span className="way-title">پشتیبانی واتسپ:</span>
                <a href="https://wa.me/+989051300693">wa.me/09051300693</a>
              </span> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Support;
