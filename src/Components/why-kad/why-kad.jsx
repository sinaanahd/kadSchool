import React, { Component, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import withWebsiteData from "../hoc/with-website-data";
import SideBar from "../side-bar/side-bar";

import img_1 from "../../assets/images/why-kad-img-1.webp";
import img_2 from "../../assets/images/why-kad-img-2.webp";
import img_3 from "../../assets/images/why-kad-img-3.webp";
import img_4 from "../../assets/images/why-kad-img-4.webp";
import img_5 from "../../assets/images/why-kad-img-5.webp";
import img_6 from "../../assets/images/why-kad-img-6.webp";
import img_7 from "../../assets/images/why-kad-img-7.webp";
import img_8 from "../../assets/images/why-kad-img-8.webp";

const WhyKad = () => {
  const [animate, set_animate] = useState("animate-why");
  useEffect(() => {
    setTimeout(() => {
      set_animate("");
    }, 100);
  }, []);

  return (
    <>
      <Helmet>
        <title>چرا کاد ؟</title>
        <meta
          name="description"
          content="چرا کاد از بین تمومی مجموعه های دیگه ؟ پشتیبانی کامل طول فرآیند یادگری، بازکشت وجه در صورت عدم رضایت، و قیمت‌های به صرفه. به ما بپیوندید و کادی شدن را تجربه کنید."
        />
      </Helmet>
      <section className="bgc-wrapper">
        <div className="why-kad-wrapper mm-width">
          <SideBar />
          <div className="main-content">
            <h1 className="title">چرا کاد ؟</h1>
            <div className={"why-boxes " + animate}>
              <div className="why-box">
                <img
                  loading="lazy"
                  width={60}
                  height={50}
                  src={img_1}
                  alt="ضمانت بازگشت وجه"
                />
                <h2 className="why-title">ضمانت بازگشت وجه</h2>
                <p className="why-text">
                  توی کاد اگه پیشرفت نکنی کل هزینه دوره در پایان دوره بهت برگشت
                  داده میشه. کاد جای متوسط موندن نیست!
                </p>
              </div>
              <div className="why-box">
                <img
                  loading="lazy"
                  width={60}
                  height={50}
                  src={img_2}
                  alt="رفع اشکال به سرعت نور"
                />
                <h2 className="why-title">رفع اشکال به سرعت نور</h2>
                <p className="why-text">
                  توی کاد نمیذاریم سوالت بدون جواب بمونه.هم خود استاد هم
                  دستیاران استاد به تک تک سوال هات پاسخ میدن
                </p>
              </div>
              <div className="why-box">
                <img
                  loading="lazy"
                  width={60}
                  height={50}
                  src={img_3}
                  alt="منفی بینهایت تا مثبت بینهایت"
                />
                <h2 className="why-title">منفی بینهایت تا مثبت بینهایت</h2>
                <p className="why-text">
                  توی کاد هیچ مبحثی رو آموزشش رو به دوره دیگه ای مرتبط نمیکنیم و
                  ریز و درشت همه چی تدریس میشه
                </p>
              </div>
              <div className="why-box">
                <img
                  loading="lazy"
                  width={60}
                  height={50}
                  src={img_4}
                  alt="آزمون های کهکشانی"
                />
                <h2 className="why-title">آزمون های کهکشانی</h2>
                <p className="why-text">
                  توی کاد هر ماه آزمون هایی با درصد تطابق نزدیک به 71 درصد با
                  کنکور سراسری داری
                </p>
              </div>
              <div className="why-box">
                <img
                  loading="lazy"
                  width={60}
                  height={50}
                  src={img_5}
                  alt="تکالیف مریخی"
                />
                <h2 className="why-title">تکالیف مریخی</h2>
                <p className="why-text">
                  توی کاد بعد از تموم شدن کلاس به امون خدا رها نمیشی و کلی تکلیف
                  بهت میدیم که قبل از هر جلسه تکالیفت تصحیح هم میشن و بهت نمره
                  میدیم
                </p>
              </div>
              <div className="why-box">
                <img
                  loading="lazy"
                  width={60}
                  height={50}
                  src={img_6}
                  alt="پشتیبانان ایستگاه فضایی کاد"
                />
                <h2 className="why-title">پشتیبانان ایستگاه فضایی کاد</h2>
                <p className="why-text">
                  توی کاد پشتیبان ها برای فروختن کلاس باهات تماس نمیگیرن بلکه
                  مثل یک دوست و مشاور هر سوال و راه نمایی لازم داشته باشی با صبر
                  و حوصله جوابت رو میدن
                </p>
              </div>
              <div className="why-box">
                <img
                  loading="lazy"
                  width={60}
                  height={50}
                  src={img_7}
                  alt="رفیق همه راه بودن"
                />
                <h2 className="why-title">رفیق همه راه بودن</h2>
                <p className="why-text">
                  توی کاد میتونی هزینه کلاس هات رو توی سه قسط پرداخت کنی که روی
                  خودت و پدر مادرت فشار نیاد. کاد رفیق نیمه راه نیست
                </p>
              </div>
              <div className="why-box">
                <img
                  loading="lazy"
                  width={60}
                  height={50}
                  src={img_8}
                  alt="خرج کم تر زندگی بهتر"
                />
                <h2 className="why-title">خرج کم تر زندگی بهتر</h2>
                <p className="why-text">
                  توی کاد برای دیدن آفلاین کلاس هات فقط یک بار حجم اینترنت
                  پرداخت میکنی نه بیشتر
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyKad;
class WhyKad2 extends Component {
  state = {
    animate: "animate-why",
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({ animate: "" });
    }, 100);
  }
  render() {
    return <></>;
  }
}
