import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Lottie from "react-lottie";
import scrollToTop from "../functions/scroll";
import withWebsiteData from "../hoc/with-website-data";

import rocket from "../lotties/rocket.json";
import astronut from "../lotties/astronot.json";
import astronut_laptop from "../lotties/space-developer.json";

import mainLogo from "../../assets/images/kad-logo-lq.svg";
import menuIcon from "../../assets/images/menu-white.png";
import hero_img from "../../assets/images/hero-img.png";
import leftIcon from "../../assets/images/CaretLeft.svg";
import avatar from "../../assets/images/home-cm-avatar.svg";
import aparatLogo from "../../assets/images/aparat.svg";
import telegramIcon from "../../assets/images/telegram-icon.svg";
import whatsappIcon from "../../assets/images/whatsapp-icon.svg";
import instagramIcon from "../../assets/images/instagram-icon.svg";
import closeMenu from "../../assets/images/close-menu-white.png";
const len = 5;
const user = JSON.parse(localStorage.getItem("user-kad"))
  ? JSON.parse(localStorage.getItem("user-kad"))
  : false;
class HomePage extends Component {
  state = {
    students: 0,
    under_1000: 0,
    un_loved: 0,
    konkor: 0,
    carousel_pos: 0,
    res_carouse_pos: 0,
    res_way: "forward",
    way: "forward",
    comment_pos: 0,
    comment_way: "forward",
    menu: false,
  };
  componentDidMount() {
    setTimeout(() => {
      this.count_students(3875);
      this.count_under_1000(561);
      this.count_un_loved(28);
      this.count_konkor(71);
    }, 3000);
    setInterval(() => {
      //this.handle_carousel();
      this.res_carousel();
    }, 5000);
    setInterval(() => {
      this.handle_commnet();
    }, 3000);
  }
  count_students = (final) => {
    let counted = 0;
    const count = setInterval(() => {
      if (counted !== final) {
        counted++;
        this.setState({ students: counted });
      } else {
        clearInterval(count);
      }
    }, 5);
  };
  count_under_1000 = (final) => {
    let counted = 0;
    const count = setInterval(() => {
      if (counted !== final) {
        counted++;
        this.setState({ under_1000: counted });
      } else {
        clearInterval(count);
      }
    }, 12);
  };
  count_un_loved = (final) => {
    let counted = 0;
    const count = setInterval(() => {
      if (counted !== final) {
        counted++;
        this.setState({ un_loved: counted });
      } else {
        clearInterval(count);
      }
    }, 200);
  };
  count_konkor = (final) => {
    let counted = 0;
    const count = setInterval(() => {
      if (counted !== final) {
        counted++;
        this.setState({ konkor: counted });
      } else {
        clearInterval(count);
      }
    }, 100);
  };
  handle_carousel = () => {
    const carousel_pos = this.state.carousel_pos;
    const way = this.state.way;
    if (way === "forward") {
      if (carousel_pos === 0) {
        this.setState({ carousel_pos: carousel_pos + 1 });
      } else if (carousel_pos === 1) {
        this.setState({ carousel_pos: carousel_pos + 1, way: "back" });
      }
    } else {
      if (carousel_pos === 2) {
        this.setState({ carousel_pos: carousel_pos - 1 });
      } else if (carousel_pos === 1) {
        this.setState({ carousel_pos: carousel_pos - 1, way: "forward" });
      }
    }
  };
  menu_handler = () => {
    const menu = this.state.menu;
    this.setState({ menu: !menu });
  };
  res_carousel = () => {
    const res_carouse_pos = this.state.res_carouse_pos;
    const res_way = this.state.res_way;
    if (res_way === "forward") {
      if (res_carouse_pos !== 7) {
        this.setState({ res_carouse_pos: res_carouse_pos + 1 });
      } else {
        this.setState({
          res_carouse_pos: res_carouse_pos - 1,
          res_way: "back",
        });
      }
    } else {
      if (res_carouse_pos !== 0) {
        this.setState({ res_carouse_pos: res_carouse_pos - 1 });
      } else {
        this.setState({
          res_carouse_pos: res_carouse_pos + 1,
          res_way: "forward",
        });
      }
    }
  };
  handle_commnet = () => {
    const comment_pos = this.state.comment_pos;
    const way = this.state.comment_way;
    if (way === "forward") {
      if (comment_pos !== len - 1) {
        this.setState({ comment_pos: comment_pos + 1 });
      } else {
        this.setState({ comment_pos: comment_pos - 1, comment_way: "back" });
      }
    } else {
      if (comment_pos !== 0) {
        this.setState({ comment_pos: comment_pos - 1 });
      } else {
        this.setState({ comment_pos: comment_pos + 1, comment_way: "forward" });
      }
    }
  };
  render() {
    const rocketOptions = {
      loop: true,
      autoplay: true,
      animationData: rocket,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
        width: 500,
        height: 500,
      },
    };
    const astronutOptions = {
      loop: true,
      autoplay: true,
      animationData: astronut,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
        width: 400,
        height: 400,
      },
    };
    const res_astronut = {
      loop: true,
      autoplay: true,
      animationData: astronut,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
        width: 200,
        height: 200,
      },
    };
    const astronut_laptop_options = {
      loop: true,
      autoplay: true,
      animationData: astronut_laptop,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
        width: 500,
        height: 500,
      },
    };
    return (
      <>
        <Helmet>
          <title>کاد اولین و قوی ترین سفینه کنکور</title>
        </Helmet>
        <div className="home-page">
          {/* <section className="lottie-test">
            <Lottie options={rocketOptions} />
          </section> */}
          <header className="home-page-header mm-width">
            <Link
              onClick={() => {
                scrollToTop();
              }}
              to="/Home">
              <img src={mainLogo} alt="کاد" width={175} height={42} />
            </Link>
            <span
              className="menu-burger"
              onClick={() => {
                this.menu_handler();
              }}>
              {this.state.menu ? (
                <img src={closeMenu} alt="بستن منو" className="close-pos" />
              ) : (
                <img src={menuIcon} alt="باز کردن منو" />
              )}
            </span>
            <nav
              className={
                this.state.menu
                  ? "links-wrapper home-res-menu"
                  : "links-wrapper"
              }>
              <ul>
                <li className="login-li">
                  <Link
                    onClick={() => {
                      scrollToTop();
                    }}
                    to={!user ? "/Login" : "/Profile"}>
                    ورود | ثبت نام
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() => {
                      scrollToTop();
                    }}
                    to="/Dashboard">
                    میز مطالعه
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() => {
                      scrollToTop();
                    }}
                    to="/Shop">
                    فروشگاه
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
                    to="/Support">
                    پشتیبانی
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() => {
                      scrollToTop();
                    }}
                    to="/Rules">
                    قوانین
                  </Link>
                </li>
              </ul>
            </nav>
          </header>
          <section className="hero-wrapper">
            <div className="hero-gif">
              <img src={hero_img} alt="" />
            </div>
            <div className="hero-text-wrapper">
              <h1 className="hero-title">کاد اولین و قوی‌ترین سفینه کنکور</h1>
              <p className="hero-text">
                کاد سفینه فضایی هست برای یک سفر آموزشی هیجان انگیز تا به کمک
                بقیه فضانورد های کاد با سلاح های مختلفی که داریم به جنگ آدم
                فضایی های هر سیاره بریم و فتحش کنیم به نظرت پایان سال تحصیلی
                میتونیم شکستشون بدیم؟
              </p>
              <span className="get-on-board">
                <p>سوار سفینه کاد بشو و هدیه 4 میلیون و 950 هزار تومانی بگیر</p>
                <span className="hero-input-wrapper">
                  <input type="text" placeholder="نام و نام خانوادگی" />
                </span>
                <span className="hero-input-wrapper">
                  <input type="number" placeholder="شماره تماس" />
                  <span className="fly-btn">پرواز سفینه</span>
                </span>
              </span>
            </div>
          </section>
          <section className="achivment-history-wrapper">
            <h2 className="semi-title">تاریخ فتوحات کاد</h2>
            <div className="numberical-contents">
              <span className="numerical-item">
                <span className="number">{this.state.students}</span>
                <p className="content-text">دانش آموز تا به امروز</p>
              </span>
              <span className="numerical-item">
                <span className="number">{this.state.under_1000}</span>
                <p className="content-text">رتبه زیر 1000</p>
              </span>
              <span className="numerical-item">
                <span className="number">{this.state.un_loved}</span>
                <p className="content-text">نفر عدم رضایت از کاد</p>
              </span>
              <span className="numerical-item">
                <span className="number">{this.state.konkor}</span>
                <p className="content-text">درصد تطابق با کنکور</p>
              </span>
            </div>
            <div className="gif-wrap">
              {/* <img src={rocket_gif} alt="" /> */}
              <Lottie options={rocketOptions} />
            </div>
          </section>
          <section className="why-in-kad-we-trust">
            <h2 className="semi-title">
              چرا تا به امروز 3875 نفر به کاد اعتماد کردن؟
            </h2>
            <div
              className={
                "reasons-wrapper res-pos-" + this.state.res_carouse_pos
              }>
              <div className={"reasons pos-" + this.state.carousel_pos}>
                <div className="reason">
                  <h3 className="reason-title">رفع اشکال به سرعت نور</h3>
                  <p className="reason-text">
                    توی کاد نمیذاریم سوالت بدون جواب بمونه.هم خود استاد هم
                    دستیاران استاد به تک تک سوال هات پاسخ میدن
                  </p>
                </div>
                <div className="reason">
                  <h3 className="reason-title">منفی بینهایت تا مثبت بینهایت</h3>
                  <p className="reason-text">
                    توی کاد هیچ مبحثی رو آموزشش رو به دوره دیگه ای مرتبط نمیکنیم
                    و ریز و درشت همه چی تدریس میشه
                  </p>
                </div>
                <div className="reason">
                  <h3 className="reason-title">آزمون های کهکشانی</h3>
                  <p className="reason-text">
                    توی کاد هر ماه آزمون هایی با درصد تطابق نزدیک به 71 درصد با
                    کنکور سراسری داری
                  </p>
                </div>
                <div className="reason">
                  <h3 className="reason-title">تکالیف مریخی</h3>
                  <p className="reason-text">
                    توی کاد بعد از تموم شدن کلاس به امون خدا رها نمیشی و کلی
                    تکلیف بهت میدیم که قبل از هر جلسه تکالیفت تصحیح هم میشن و
                    بهت نمره میدیم
                  </p>
                </div>
                <div className="reason">
                  <h3 className="reason-title">پشتیبانان ایستگاه فضایی کاد</h3>
                  <p className="reason-text">
                    توی کاد پشتیبان ها برای فروختن کلاس باهات تماس نمیگیرن بلکه
                    مثل یک دوست و مشاور هر سوال و راه نمایی لازم داشته باشی با
                    صبر و حوصله جوابت رو میدن
                  </p>
                </div>
                <div className="reason">
                  <h3 className="reason-title">رفیق همه راه بودن</h3>
                  <p className="reason-text">
                    توی کاد میتونی هزینه کلاس هات رو توی سه قسط پرداخت کنی که
                    روی خودت و پدر مادرت فشار نیاد. کاد رفیق نیمه راه نیست
                  </p>
                </div>
                <div className="reason">
                  <h3 className="reason-title">خرج کم تر زندگی بهتر</h3>
                  <p className="reason-text">
                    توی کاد برای دیدن آفلاین کلاس هات فقط یک بار حجم اینترنت
                    پرداخت میکنی نه بیشتر
                  </p>
                </div>
                <div className="reason">
                  <h3 className="reason-title">ضمانت بازگشت وجه</h3>
                  <p className="reason-text">
                    توی کاد اگه پیشرفت نکنی کل هزینه دوره در پایان دوره بهت
                    برگشت داده میشه. کاد جای متوسط موندن نیست!
                  </p>
                </div>
              </div>
              <span
                onClick={() => {
                  this.res_carousel();
                }}
                className={
                  this.state.res_way === "forward"
                    ? "resoan-back-btn"
                    : "resoan-back-btn rev"
                }>
                <img src={leftIcon} alt="بعدی" />
              </span>
            </div>
            <div className="astronut-img">
              {/* <img src={astronut} alt="فضانورد" /> */}
              <Lottie options={astronutOptions} />
            </div>
            <div className="astronut-img responsive">
              <Lottie options={res_astronut} />
            </div>
          </section>
          <section className="teachers-wrapper mm-width" id="#sina">
            <h2 className="semi-title">استادان حرفه ای کاد</h2>
            <div className="teachers">
              <div className="teacher">
                <span className="teacher-img-wrapper">
                  <img src="" alt=""></img>
                </span>
                <h3 className="teacher-name">نام استاد</h3>
              </div>
              <div className="teacher">
                <span className="teacher-img-wrapper">
                  <img src="" alt=""></img>
                </span>
                <h3 className="teacher-name">نام استاد</h3>
              </div>
              <div className="teacher">
                <span className="teacher-img-wrapper">
                  <img src="" alt=""></img>
                </span>
                <h3 className="teacher-name">نام استاد</h3>
              </div>
              <div className="teacher">
                <span className="teacher-img-wrapper">
                  <img src="" alt=""></img>
                </span>
                <h3 className="teacher-name">نام استاد</h3>
              </div>
              <div className="teacher">
                <span className="teacher-img-wrapper">
                  <img src="" alt=""></img>
                </span>
                <h3 className="teacher-name">نام استاد</h3>
              </div>
            </div>
          </section>
          <section className="good-students-wrapper mm-width" id="rotbe_bartar">
            <h2 className="semi-title">بخشی از رتبه‌های برتر کاد</h2>
            <div className="good-students">
              <div className="good-student">
                <span className="good-student-img-wrapper">
                  <img src="" alt=""></img>
                </span>
                <h3 className="good-student-name">نام رتبه برتر</h3>
              </div>
              <div className="good-student">
                <span className="good-student-img-wrapper">
                  <img src="" alt=""></img>
                </span>
                <h3 className="good-student-name">نام رتبه برتر</h3>
              </div>
              <div className="good-student">
                <span className="good-student-img-wrapper">
                  <img src="" alt=""></img>
                </span>
                <h3 className="good-student-name">نام رتبه برتر</h3>
              </div>
              <div className="good-student">
                <span className="good-student-img-wrapper">
                  <img src="" alt=""></img>
                </span>
                <h3 className="good-student-name">نام رتبه برتر</h3>
              </div>
              <div className="good-student">
                <span className="good-student-img-wrapper">
                  <img src="" alt=""></img>
                </span>
                <h3 className="good-student-name">نام رتبه برتر</h3>
              </div>
            </div>
          </section>
          <section className="comments-on-kad-wrapper mm-width">
            <h2 className="semi-title">نظر دوستاتون در مورد کاد</h2>
            <div className="comment-img">
              <div className={"comments cm-" + this.state.comment_pos}>
                <div className="home-comment">
                  <p className="home-comment-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliquat enim ad minim veniam.
                  </p>
                  <span className="home-user-wrapper">
                    <span className="img-bgc">
                      <img
                        src={avatar}
                        alt="اسم کاربر"
                        className="home-comment-avatar-img"
                      />
                    </span>
                    <span className="home-comment-user-name">اسم کاربر</span>
                    <span className="home-comment-user-subject">
                      رشته کاربر
                    </span>
                  </span>
                </div>
                <div className="home-comment">
                  <p className="home-comment-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliquat enim ad minim veniam.
                  </p>
                  <span className="home-user-wrapper">
                    <span className="img-bgc">
                      <img
                        src={avatar}
                        alt="اسم کاربر"
                        className="home-comment-avatar-img"
                      />
                    </span>
                    <span className="home-comment-user-name">اسم کاربر</span>
                    <span className="home-comment-user-subject">
                      رشته کاربر
                    </span>
                  </span>
                </div>
                <div className="home-comment">
                  <p className="home-comment-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliquat enim ad minim veniam.
                  </p>
                  <span className="home-user-wrapper">
                    <span className="img-bgc">
                      <img
                        src={avatar}
                        alt="اسم کاربر"
                        className="home-comment-avatar-img"
                      />
                    </span>
                    <span className="home-comment-user-name">اسم کاربر</span>
                    <span className="home-comment-user-subject">
                      رشته کاربر
                    </span>
                  </span>
                </div>
                <div className="home-comment">
                  <p className="home-comment-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliquat enim ad minim veniam.
                  </p>
                  <span className="home-user-wrapper">
                    <span className="img-bgc">
                      <img
                        src={avatar}
                        alt="اسم کاربر"
                        className="home-comment-avatar-img"
                      />
                    </span>
                    <span className="home-comment-user-name">اسم کاربر</span>
                    <span className="home-comment-user-subject">
                      رشته کاربر
                    </span>
                  </span>
                </div>
                <div className="home-comment">
                  <p className="home-comment-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliquat enim ad minim veniam.
                  </p>
                  <span className="home-user-wrapper">
                    <span className="img-bgc">
                      <img
                        src={avatar}
                        alt="اسم کاربر"
                        className="home-comment-avatar-img"
                      />
                    </span>
                    <span className="home-comment-user-name">اسم کاربر</span>
                    <span className="home-comment-user-subject">
                      رشته کاربر
                    </span>
                  </span>
                </div>
              </div>
              <div className="astronut-lap-top">
                <Lottie options={astronut_laptop_options} />
              </div>
            </div>
          </section>
          <section className="jump-on-spaceship-wrapper">
            <span className="right-img-wrapper jump-img-wrapper"></span>
            <div className="forms-data">
              <h2 className="jump-title">
                سوار سفینه کاد بشو و هدیه 4 میلیون و 950 هزار تومانی بگیر
              </h2>
              <span className="jump-input-wrapper">
                <input type="text" placeholder="نام و نام خانوادگی" />
              </span>
              <span className="jump-input-wrapper">
                <input type="number" placeholder="شماره تلفن" />
                <span className="fly-spaceship-btn">پرواز سفینه</span>
              </span>
            </div>
            <span className="left-img-wrapper jump-img-wrapper"></span>
          </section>
          <footer className="home-footer mm-width">
            <Link
              onClick={() => {
                scrollToTop();
              }}
              to="/Home"
              className="home-page-link">
              <img src={mainLogo} alt="کاد" />
            </Link>
            <div className="home-footer-cols">
              <div className="hf-col hf-col-1">
                <p className="get-present">دریافت هدیه</p>
                <p className="present-text">
                  هدیه یک میلیون تومانیت رو همین الان از کاد بگیر
                </p>
                <span className="jump-input-wrapper">
                  <input type="number" placeholder="شماره تلفن" />
                  <span className="fly-spaceship-btn">پرواز سفینه</span>
                </span>
              </div>
              <div className="hf-col hf-col-2">
                <h2 className="hf-footer-title">دسترسی سریع</h2>
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
                      نرم افزار‌های مورد نیاز
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
                      to="/Top-students">
                      رتبه‌های برتر کاد
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
              <div className="hf-col hf-col-4">
                <div className="social-icons">
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
            <p className="hf-copy-text">
              کلیه حقوق مادی و معنوی این سایت در اختیار انتشارات دریافت می باشد
              و کپی برداری از کلیه محتوای آن غیر مجاز است
            </p>
          </footer>
        </div>
      </>
    );
  }
}

export default withWebsiteData(HomePage);
