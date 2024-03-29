import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Lottie from "react-lottie";
import scrollToTop from "../functions/scroll";
import withWebsiteData from "../hoc/with-website-data";
import axios from "axios";
import LittleLoading from "../reuseables/little-loading";

import rocket from "../lotties/rocket.json";
import astronut from "../lotties/astronot.json";
import astronut_laptop from "../lotties/space-developer.json";
import hero_animation from "../lotties/hero-animation.json";

import mainLogo from "../../assets/images/main-logo-white-1.webp";
import menuIcon from "../../assets/images/menu-white.webp";
import leftIcon from "../../assets/images/CaretLeft.webp";
import avatar from "../../assets/images/home-cm-avatar.webp";
import aparatLogo from "../../assets/images/aparat.webp";
import telegramIcon from "../../assets/images/telegram-icon.webp";
import whatsappIcon from "../../assets/images/whatsapp-icon.webp";
import instagramIcon from "../../assets/images/instagram-icon.webp";
import closeMenu from "../../assets/images/close-menu-white.webp";
import jump_img from "../../assets/images/jump-img.webp";
import hero_little_icon from "../../assets/images/space-ship-new.webp";

// sample teacher

import teacher_img_3 from "../../assets/images/kad-teacher-3.webp";
import teacher_img_4 from "../../assets/images/kad-teacher-4.webp";
import teacher_img_5 from "../../assets/images/kad-teacher-5.webp";
import teacher_img_6 from "../../assets/images/kad-teacher-6.webp";

import good_students_1 from "../../assets/images/svg/g-s-1.svg";
import good_students_2 from "../../assets/images/svg/g-s-2.svg";
import good_students_3 from "../../assets/images/svg/g-s-3.svg";
import good_students_4 from "../../assets/images/svg/g-s-4.svg";
import good_students_5 from "../../assets/images/svg/g-s-5.svg";
import good_students_6 from "../../assets/images/svg/g-s-6.svg";
import good_students_7 from "../../assets/images/svg/g-s-7.svg";
import good_students_8 from "../../assets/images/svg/g-s-8.svg";
import good_students_9 from "../../assets/images/svg/g-s-9.svg";
import good_students_10 from "../../assets/images/svg/g-s-10.svg";
import good_students_11 from "../../assets/images/svg/g-s-11.svg";
import good_students_12 from "../../assets/images/svg/g-s-12.svg";
import good_students_13 from "../../assets/images/svg/g-s-13.svg";

const len = 8;
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
    active_teacher: 1,
    active_student: 1,
    menu: false,
    name: false,
    phone_number: false,
    phone_number_2: false,
    name_err: false,
    phone_err: false,
    phone_err_2: false,
    pause: false,
    pause_2: false,
    final_message: false,
    final_message_2: false,
  };
  constructor(props) {
    super(props);
    this.teachers_ref = React.createRef();
    this.students_ref = React.createRef();
  }
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
    }, 10000);
    // setInterval(() => {
    //   this.move_teacher("forward");
    // }, 1000);
  }
  move_teacher = (way) => {
    const num = this.state.active_teacher;
    const teachers_dom = [...this.teachers_ref.current.children];
    const len = teachers_dom.length;
    if (way === "forward") {
      if (num !== len) {
        teachers_dom.forEach((td) => {
          //console.log(td.style.transform);
          td.style.transform = `translateX(calc(${num * 100}% + ${
            num * 20
          }px))`;
          // console.log(
          //   `num : ${num} ,translateX(calc(${num * 100}% + ${num * 20}px)) `
          // );
        });
        this.setState({ active_teacher: num + 1 });
      }
    } else {
      if (num !== 1) {
        teachers_dom.forEach((td) => {
          td.style.transform = `translateX(calc(${(num - 2) * 100}% + ${
            (num - 2) * 20
          }px))`;
          // console.log(
          //   `num : ${num} ,translateX(calc(${(num - 2) * 100}% + ${
          //     (num - 2) * 20
          //   }px)) `
          // );
        });
        this.setState({ active_teacher: num - 1 });
      }
    }
  };
  move_student = (way) => {
    const num = this.state.active_student;
    const students_dom = [...this.students_ref.current.children];
    const len = students_dom.length;
    if (way === "forward") {
      if (num !== len) {
        students_dom.forEach((td) => {
          //console.log(td.style.transform);
          td.style.transform = `translateX(calc(${num * 100}% + ${
            num * 20
          }px))`;
        });
        this.setState({ active_student: num + 1 });
      }
    } else {
      if (num !== 1) {
        students_dom.forEach((td) => {
          td.style.transform = `translateX(calc(${(num - 2) * 100}% + ${
            (num - 2) * 20
          }px))`;
        });
        this.setState({ active_student: num - 1 });
      }
    }
  };
  send_gift_request = (e) => {
    const name = this.state.name;
    const phone_number = this.state.phone_number;
    const send_obj = { fullname: name, phone_number: phone_number, type: 0 };
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
        width: 300,
        height: 300,
      },
    };
    const hero_animation_options = {
      loop: true,
      autoplay: true,
      animationData: hero_animation,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
        width: 800,
        height: 600,
      },
    };
    return (
      <>
        <Helmet>
          <title>کاد اولین و قوی ترین سفینه کنکور</title>
          <meta name="description" content="" />
          <meta
            name="keywords"
            content="کاد, کلاس اینترنتی, کلاس اینترنتی دریافت, کلاس کنکور, کلاس آنلاین کنکور, کنکور ۱۴۰۳, کنکور,"
          />
          <meta
            name="description"
            content="آمادگی برای کنکور در تمام رشته‌ها با کلاس‌های آنلاین برتر ما. از ریاضیات و تجربی تا رشته‌های انسانی و هنر، مدرسان ما با تجربه و استعداد آموزشی برجسته، برنامه‌های جامعی را ارائه می‌دهند. با ما بپیوندید و در کنکور با موفقیت بیشتری شرکت کنید و در دانشگاه رشته مورد علاقه خود قبول شوید."
          />
        </Helmet>
        <div className="home-page">
          <header className="home-page-header mm-width">
            <Link
              onClick={() => {
                scrollToTop();
              }}
              to="/HomePage">
              <img src={mainLogo} alt="کاد" width={175} height={42} />
            </Link>
            <span
              className="menu-burger"
              onClick={() => {
                this.menu_handler();
              }}>
              {this.state.menu ? (
                <img
                  src={closeMenu}
                  width={30}
                  height={30}
                  alt="بستن منو"
                  className="close-pos"
                />
              ) : (
                <img src={menuIcon} width={30} height={30} alt="باز کردن منو" />
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
              <Lottie options={hero_animation_options} />
              {/* <video
                loop={true}
                autoPlay={true}
                muted
                src={hero_video}
                className="video-hero"></video> */}
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
                <span className="hero-gift-text-img">
                  <span className="img-animate">
                    <img
                      src={hero_little_icon}
                      alt="جایزه بگیر"
                      width={30}
                      height={30}
                    />
                  </span>
                  <p>
                    سوار سفینه کاد بشو و هدیه <font>۱ میلیون تومانی</font>{" "}
                    تومانی بگیر
                  </p>
                </span>
                <span className="hero-input-wrapper">
                  <input
                    type="text"
                    onInput={({ target }) => {
                      this.handle_name(target);
                    }}
                    placeholder="نام و نام خانوادگی"
                  />
                </span>
                <span className="hero-input-wrapper">
                  <input
                    type="number"
                    onInput={({ target }) => {
                      this.handle_phone(target);
                    }}
                    placeholder="شماره تماس"
                  />
                  {this.state.phone_err === "ok" &&
                  this.state.name_err === "ok" ? (
                    <span
                      onClick={() => this.send_gift_request()}
                      className="fly-btn">
                      {this.state.pause ? <LittleLoading /> : "پرواز سفینه"}
                    </span>
                  ) : (
                    <span className="fly-btn dont-fly-yet">پرواز سفینه</span>
                  )}
                </span>
                {this.state.phone_err && this.state.phone_err !== "ok" ? (
                  <span className="input-error">{this.state.phone_err}</span>
                ) : (
                  ""
                )}
                {this.state.name_err && this.state.name_err !== "ok" ? (
                  <span className="input-error">{this.state.name_err}</span>
                ) : (
                  ""
                )}
                {this.state.final_message ? (
                  <span className="final-msg">{this.state.final_message}</span>
                ) : (
                  ""
                )}
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
                <img src={leftIcon} alt="بعدی" width={47} height={47} />
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
          <section className="teachers-wrapper mm-width">
            <h2 className="semi-title">استادان حرفه ای کاد</h2>
            <div className="teachers" ref={this.teachers_ref}>
              <Link
                to="/Teachers/استاد-عماد-فیض-آبادی"
                onClick={() => {
                  scrollToTop();
                }}
                className="teacher">
                <span className="teacher-img-wrapper">
                  <img
                    width={224}
                    loading="lazy"
                    height={298.13}
                    src="https://kadschool.com/media/Kad_Teachers_Photos/Teacher_استاد_عماد_فیض_آبادی.webp"
                    alt="استاد عماد فیض آبادی"></img>
                </span>
                <h3 className="teacher-name">استاد عماد فیض آبادی</h3>
              </Link>
              <Link
                to="/Teachers/استاد-حمید-سودیان"
                onClick={() => {
                  scrollToTop();
                }}
                className="teacher">
                <span className="teacher-img-wrapper">
                  <img
                    width={224}
                    loading="lazy"
                    height={298.13}
                    src="https://kadschool.com/media/Kad_Teachers_Photos/Teacher_استاد_حمید_سودیان.webp"
                    alt="استاد حمید سودیان"></img>
                </span>
                <h3 className="teacher-name">استاد حمید سودیان</h3>
              </Link>
              <Link
                to="/Teachers/استاد-آروین-حسینی"
                onClick={() => {
                  scrollToTop();
                }}
                className="teacher">
                <span className="teacher-img-wrapper">
                  <img
                    width={224}
                    loading="lazy"
                    height={298.13}
                    src="https://kadschool.com/media/Kad_Teachers_Photos/Teacher_استاد_آروین_حسینی.webp"
                    alt="استاد آروین حسینی"></img>
                </span>
                <h3 className="teacher-name">استاد آروین حسینی</h3>
              </Link>
              <Link
                to="/Teachers/استاد-امیر-محمد-دهقان"
                onClick={() => {
                  scrollToTop();
                }}
                className="teacher">
                <span className="teacher-img-wrapper">
                  <img
                    width={224}
                    loading="lazy"
                    height={298.13}
                    src="https://kadschool.com/media/Kad_Teachers_Photos/Teacher_استاد_امیر_محمد_دهقان.webp"
                    alt="استاد امیر محمد دهقان"></img>
                </span>
                <h3 className="teacher-name">استاد امیر محمد دهقان</h3>
              </Link>
              <Link
                to="/Teachers/استاد-هامون-سبطی"
                onClick={() => {
                  scrollToTop();
                }}
                className="teacher">
                <span className="teacher-img-wrapper">
                  <img
                    width={224}
                    loading="lazy"
                    height={298.13}
                    src="https://kadschool.com/media/Kad_Teachers_Photos/Teacher_استاد_هامون_سبطی.webp"
                    alt="استاد هامون سبطی"></img>
                </span>
                <h3 className="teacher-name">استاد هامون سبطی</h3>
              </Link>
              <Link
                to="/Teachers/استاد-نیما-جواهری"
                onClick={() => {
                  scrollToTop();
                }}
                className="teacher">
                <span className="teacher-img-wrapper">
                  <img
                    width={224}
                    loading="lazy"
                    height={298.13}
                    src="https://kadschool.com/media/Kad_Teachers_Photos/Teacher_استاد_نیما_جواهری.webp"
                    alt="استاد نیما جواهری"></img>
                </span>
                <h3 className="teacher-name">استاد نیما جواهری</h3>
              </Link>
              <Link
                to="/Teachers/استاد-مهران-ترکمان"
                onClick={() => {
                  scrollToTop();
                }}
                className="teacher">
                <span className="teacher-img-wrapper">
                  <img
                    width={224}
                    loading="lazy"
                    height={298.13}
                    src="https://kadschool.com/media/Kad_Teachers_Photos/Teacher_استاد_مهران_ترکمان.webp"
                    alt="استاد مهران ترکمان"></img>
                </span>
                <h3 className="teacher-name">استاد مهران ترکمان</h3>
              </Link>
              <Link
                to="/Teachers/استاد-مهسا-عفتی"
                onClick={() => {
                  scrollToTop();
                }}
                className="teacher">
                <span className="teacher-img-wrapper">
                  <img
                    width={224}
                    loading="lazy"
                    height={298.13}
                    src="https://kadschool.com/media/Kad_Teachers_Photos/Teacher_استاد_مهسا_عفتی.webp"
                    alt="استاد مهسا عفتی"></img>
                </span>
                <h3 className="teacher-name">استاد مهسا عفتی</h3>
              </Link>
              <Link
                to="/Teachers/استاد-سارا-شریفی"
                onClick={() => {
                  scrollToTop();
                }}
                className="teacher">
                <span className="teacher-img-wrapper">
                  <img
                    width={224}
                    loading="lazy"
                    height={298.13}
                    src="https://kadschool.com/media/Kad_Teachers_Photos/Teacher_استاد_سارا_شریفی.webp"
                    alt="استاد سارا شریفی"></img>
                </span>
                <h3 className="teacher-name"> استاد سارا شریفی</h3>
              </Link>
              <Link
                to="/not-found"
                onClick={() => {
                  scrollToTop();
                }}
                className="teacher">
                <span className="teacher-img-wrapper">
                  <img
                    width={224}
                    loading="lazy"
                    height={298.13}
                    src={teacher_img_3}
                    alt="رضا امیر"></img>
                </span>
                <h3 className="teacher-name">استاد رضا امیر</h3>
              </Link>
              <Link
                to="/not-found"
                onClick={() => {
                  scrollToTop();
                }}
                className="teacher">
                <span className="teacher-img-wrapper">
                  <img
                    width={224}
                    loading="lazy"
                    height={298.13}
                    src={teacher_img_4}
                    alt="مهندس علیرضا علمداری"></img>
                </span>
                <h3 className="teacher-name">مهندس علیرضا علمداری</h3>
              </Link>
              <Link
                to="/not-found"
                onClick={() => {
                  scrollToTop();
                }}
                className="teacher">
                <span className="teacher-img-wrapper">
                  <img
                    width={224}
                    loading="lazy"
                    height={298.13}
                    src={teacher_img_5}
                    alt="مهندس علیرضا ایدلخانی"></img>
                </span>
                <h3 className="teacher-name">مهندس علیرضا ایدلخانی</h3>
              </Link>
              <Link
                to="/not-found"
                onClick={() => {
                  scrollToTop();
                }}
                className="teacher">
                <span className="teacher-img-wrapper">
                  <img
                    width={224}
                    loading="lazy"
                    height={298.13}
                    src={teacher_img_6}
                    alt="علیرضا احمدی"></img>
                </span>
                <h3 className="teacher-name">علیرضا احمدی</h3>
              </Link>
            </div>
            <span
              onClick={() => {
                this.move_teacher("forward");
              }}
              className="resoan-back-btn">
              <img src={leftIcon} alt="بعدی" width={47} height={47} />
            </span>
            <span
              onClick={() => {
                this.move_teacher("back");
              }}
              className="resoan-back-btn rev">
              <img src={leftIcon} alt="بعدی" width={47} height={47} />
            </span>
          </section>
          <section className="good-students-wrapper mm-width">
            <h2 className="semi-title">بخشی از رتبه‌های برتر کاد</h2>
            <div className="good-students" ref={this.students_ref}>
              <div className="good-student">
                <span className="good-student-img-wrapper">
                  <img
                    loading="lazy"
                    width={224}
                    height={298}
                    src={good_students_1}
                    alt="مائده ملکی"></img>
                </span>
                <h3 className="good-student-name">مائده ملکی</h3>
              </div>
              <div className="good-student">
                <span className="good-student-img-wrapper">
                  <img
                    loading="lazy"
                    width={224}
                    height={298}
                    src={good_students_13}
                    alt="علی اصغر وجدانی"></img>
                </span>
                <h3 className="good-student-name">علی اصغر وجدانی</h3>
              </div>
              <div className="good-student">
                <span className="good-student-img-wrapper">
                  <img
                    loading="lazy"
                    width={224}
                    height={298}
                    src={good_students_12}
                    alt="رها روزبهانی"></img>
                </span>
                <h3 className="good-student-name">رها روزبهانی</h3>
              </div>
              <div className="good-student">
                <span className="good-student-img-wrapper">
                  <img
                    loading="lazy"
                    width={224}
                    height={298}
                    src={good_students_10}
                    alt="امیرحسین چهاردولی"></img>
                </span>
                <h3 className="good-student-name">امیرحسین چهاردولی</h3>
              </div>
              <div className="good-student">
                <span className="good-student-img-wrapper">
                  <img
                    loading="lazy"
                    width={224}
                    height={298}
                    src={good_students_11}
                    alt="فردین برهور"></img>
                </span>
                <h3 className="good-student-name">فردین برهور</h3>
              </div>
              <div className="good-student">
                <span className="good-student-img-wrapper">
                  <img
                    loading="lazy"
                    width={224}
                    height={298}
                    src={good_students_9}
                    alt="آریا نظری فر"></img>
                </span>
                <h3 className="good-student-name">آریا نظری فر</h3>
              </div>
              <div className="good-student">
                <span className="good-student-img-wrapper">
                  <img
                    loading="lazy"
                    width={224}
                    height={298}
                    src={good_students_8}
                    alt="مطهره السادات هاشمی"></img>
                </span>
                <h3 className="good-student-name">مطهره السادات هاشمی</h3>
              </div>
              <div className="good-student">
                <span className="good-student-img-wrapper">
                  <img
                    loading="lazy"
                    width={224}
                    height={298}
                    src={good_students_7}
                    alt="متین قدیمی"></img>
                </span>
                <h3 className="good-student-name">متین قدیمی</h3>
              </div>
              <div className="good-student">
                <span className="good-student-img-wrapper">
                  <img
                    loading="lazy"
                    width={224}
                    height={298}
                    src={good_students_6}
                    alt="فاطمه میر"></img>
                </span>
                <h3 className="good-student-name">فاطمه میر</h3>
              </div>
              <div className="good-student">
                <span className="good-student-img-wrapper">
                  <img
                    loading="lazy"
                    width={224}
                    height={298}
                    src={good_students_5}
                    alt="سام نظری"></img>
                </span>
                <h3 className="good-student-name">سام نظری</h3>
              </div>
              <div className="good-student">
                <span className="good-student-img-wrapper">
                  <img
                    loading="lazy"
                    width={224}
                    height={298}
                    src={good_students_4}
                    alt="سینا سیفی"></img>
                </span>
                <h3 className="good-student-name">سینا سیفی</h3>
              </div>
              <div className="good-student">
                <span className="good-student-img-wrapper">
                  <img
                    loading="lazy"
                    width={224}
                    height={298}
                    src={good_students_3}
                    alt="زهرا علینقیان"></img>
                </span>
                <h3 className="good-student-name">زهرا علینقیان</h3>
              </div>
              <div className="good-student">
                <span className="good-student-img-wrapper">
                  <img
                    loading="lazy"
                    width={224}
                    height={298}
                    src={good_students_2}
                    alt="صالح اسماعیل زاده"></img>
                </span>
                <h3 className="good-student-name">صالح اسماعیل زاده</h3>
              </div>
            </div>
            <span
              onClick={() => {
                this.move_student("forward");
              }}
              className="resoan-back-btn">
              <img src={leftIcon} alt="بعدی" width={47} height={47} />
            </span>
            <span
              onClick={() => {
                this.move_student("back");
              }}
              className="resoan-back-btn rev">
              <img src={leftIcon} alt="بعدی" width={47} height={47} />
            </span>
          </section>
          <section className="comments-on-kad-wrapper mm-width">
            <h2 className="semi-title">نظر دوستاتون در مورد کاد</h2>
            <div className="comment-img">
              <div className={"comments cm-" + this.state.comment_pos}>
                <div className="home-comment">
                  <p className="home-comment-text">
                    من امسال در کلاس های فلسفه،ادبیات،عربی، درک و دریافت شعر و
                    مشاوره موسسه کاد شرکت کردم کلاس ها همگی به شدت جذاب و عالی
                    بود و کاری میکرد دانش آموز با شور و علاقه،سر کلاس حاضر بشه.
                    پاسخگویی پشتیبانی هم خیلی سریع و خوب بود بی شک دانش آموز
                    موسسه کاد بودن،از بهترین و به یادماندنی ترین و زیبا ترین
                    تجربه های دوران تحصیل من خواهد بود. خیلی خوشحالم که با کاد
                    آشنا شدم
                  </p>
                  <span className="home-user-wrapper">
                    <span className="img-bgc">
                      <img
                        src={avatar}
                        alt="اسم کاربر"
                        width={80}
                        height={96}
                        className="home-comment-avatar-img"
                      />
                    </span>
                    <span className="home-comment-user-name">
                      نفیسه گل چشمه
                    </span>
                    <span className="home-comment-user-subject">انسانی</span>
                  </span>
                </div>
                <div className="home-comment">
                  <p className="home-comment-text">
                    خب حقیقتش من کلاس های علوم فنون دکتر سبطی و همایش دکتر
                    ترکمان و دکتر سودیان رو شرکت کردم و سطح استاد ها فوق العادس
                    و نحوه تدریس هم عالیه در مورد تاثیری که برای من داشته اینه
                    که راحت تر و سریع تر میتونم تست حل کنم گره های درسی هم که
                    برای رفع اشکال داشتیم عالی بود و همه سوالام رو پاسخ میدادن
                  </p>
                  <span className="home-user-wrapper">
                    <span className="img-bgc">
                      <img
                        src={avatar}
                        alt="اسم کاربر"
                        width={80}
                        height={96}
                        className="home-comment-avatar-img"
                      />
                    </span>
                    <span className="home-comment-user-name">شیدا رضایی</span>
                    <span className="home-comment-user-subject">انسانی</span>
                  </span>
                </div>
                <div className="home-comment">
                  <p className="home-comment-text">
                    من در کلاسای فلسفه منطق استاد جواهری و ریاضی استاد حسینی و
                    عربی ترکمان شرکت کردم خیلی راضی بودم ازشون سطح سوادشون بسیار
                    عالی و قدرت بیانشون بسیار تاثیر گذار بود. خیلی ممنون از
                    موسسه خوبتون درپناه حق باشید
                  </p>
                  <span className="home-user-wrapper">
                    <span className="img-bgc">
                      <img
                        src={avatar}
                        alt="اسم کاربر"
                        width={80}
                        height={96}
                        className="home-comment-avatar-img"
                      />
                    </span>
                    <span className="home-comment-user-name">محسن مرادی</span>
                    <span className="home-comment-user-subject">انسانی</span>
                  </span>
                </div>
                <div className="home-comment">
                  <p className="home-comment-text">
                    من در همه درس های انسانی کاد شرکت کردم و با اینکه از اسفند
                    تو کلاسا حاضر شدم واقعا مفید بود مخصوصا فلسفه و منطق که برای
                    فهم درست و کامل متن درس خیلی اهمیت داره.ریاضی هم که برای من
                    از اول یک غول بود تا اخر سال کم کم قبحش برام ریخت و تونستم
                    از درصد 7 به درصد 72 برسم.عربی و علوم فنون هم عالییییی بودن
                  </p>
                  <span className="home-user-wrapper">
                    <span className="img-bgc">
                      <img
                        src={avatar}
                        alt="اسم کاربر"
                        width={80}
                        height={96}
                        className="home-comment-avatar-img"
                      />
                    </span>
                    <span className="home-comment-user-name">نادیا هوشمند</span>
                    <span className="home-comment-user-subject">انسانی</span>
                  </span>
                </div>
                <div className="home-comment">
                  <p className="home-comment-text">
                    امسال شانس یاری نکرد نشد ۳ ماه آخرو استفاده کنم متاسفانه اما
                    در کل کاد عالیه از هر نظر مخصوصا پشتیبانی و رفع اشکال شیش
                    هیچ از بقیه موسسات جلوتره امسال هم احتمالا پشت کنکور میمونم
                    و دوباره همه کلاس های انسانی رو ثبت نام میکنم
                  </p>
                  <span className="home-user-wrapper">
                    <span className="img-bgc">
                      <img
                        src={avatar}
                        alt="اسم کاربر"
                        width={80}
                        height={96}
                        className="home-comment-avatar-img"
                      />
                    </span>
                    <span className="home-comment-user-name">مهدی عبادی</span>
                    <span className="home-comment-user-subject">انسانی</span>
                  </span>
                </div>
                <div className="home-comment">
                  <p className="home-comment-text">
                    من توی کلاس ادبیات اختصاصی و عربی و فلسفه و دینی و زبان شرکت
                    کردم و خیلی راضیم و خداروشکر نتیجش رو توی کنکور دیدم. این که
                    توی اکثر جلسات بهمون تکلیف میدن و آزمون منظم ازمون میگیرن
                    برای منی که نیازه زور بالا سرم باشه خیلی خوب بود. در کل
                    ممنونم از همه استادای کاد
                  </p>
                  <span className="home-user-wrapper">
                    <span className="img-bgc">
                      <img
                        src={avatar}
                        alt="اسم کاربر"
                        width={80}
                        height={96}
                        className="home-comment-avatar-img"
                      />
                    </span>
                    <span className="home-comment-user-name">
                      محدثه خوش باور
                    </span>
                    <span className="home-comment-user-subject">انسانی</span>
                  </span>
                </div>
                <div className="home-comment">
                  <p className="home-comment-text">
                    {" "}
                    من امسال از آبان کلاس ها رو ثبت نام کردن قبلش یک موسسه دیگه
                    بودم که به خاطر حاشیه های زیاد سر کلاس ترجیح دادم با این که
                    هزینه کلاس رو بهم بر نگردوندن بیام کاد ثبت نام کنن خداییش
                    کارتون درسته از همه نظر به همه دوستای کنکوری سال دیگم هم
                    معرفیتون کردم
                  </p>
                  <span className="home-user-wrapper">
                    <span className="img-bgc">
                      <img
                        src={avatar}
                        alt="اسم کاربر"
                        width={80}
                        height={96}
                        className="home-comment-avatar-img"
                      />
                    </span>
                    <span className="home-comment-user-name">گلنوش خرمی</span>
                    <span className="home-comment-user-subject">انسانی</span>
                  </span>
                </div>
                <div className="home-comment">
                  <p className="home-comment-text">
                    من اوایل که اومدم کاد چون بعضی دوستام موسسات دیگه رفته بودن
                    نگران بودم که نکنه زیاد کلاسا خوب نباشن اما هر چی رفتم جلو
                    خیالم راحت تر شد خوبی کاد نسبت به خیلی از کلاسای دیگه اینه
                    که جو دانش اموزای کلاساش با بقیه خیلی متفاوته یک جورایی
                    انگار گزینش شدن و همه دنبال درسن و خب این خیلی به من کمک کرد
                    بر خلاف همون دوستام که از وسطای سال درگیر حرف این معلم و اون
                    معلم شدن. آزمون ها و بانک تستی هم که طی سال دادن واقعا عالی
                    بود و من همه تست ها رو تحلیل میکردم و خیلی مشابهش توی کنکور
                    اومد
                  </p>
                  <span className="home-user-wrapper">
                    <span className="img-bgc">
                      <img
                        src={avatar}
                        alt="اسم کاربر"
                        width={80}
                        height={96}
                        className="home-comment-avatar-img"
                      />
                    </span>
                    <span className="home-comment-user-name">محمد حسینی</span>
                    <span className="home-comment-user-subject">انسانی</span>
                  </span>
                </div>
              </div>
              <div className="astronut-lap-top">
                <Lottie options={astronut_laptop_options} />
              </div>
            </div>
          </section>
          <section className="jump-on-spaceship-wrapper">
            <span className="right-img-wrapper jump-img-wrapper">
              <img
                src={jump_img}
                width={72}
                height={72}
                alt="سوار سفینه کاد شو"
              />
            </span>
            <div className="forms-data">
              <span className="jump-titles-wrapper">
                <h2 className="jump-title">
                  اگه هنوزم سوالی داری یا از چیزی نگرانی کاد با تک تک اتم هاش
                  کنارته
                </h2>
                <h3 className="seconf-jum-title">
                  کافیه مشخصاتت رو بهمون پیام بدی تا در سریع ترین زمان باهات
                  تماس بگیریم
                </h3>
              </span>
              <span className="jump-input-wrapper">
                <input
                  type="text"
                  placeholder="نام و نام خانوادگی"
                  onInput={({ target }) => {
                    this.handle_name(target);
                  }}
                />
              </span>
              <span className="jump-input-wrapper">
                <input
                  type="number"
                  placeholder="شماره تلفن"
                  onInput={({ target }) => {
                    this.handle_phone(target);
                  }}
                />
                {this.state.phone_err === "ok" &&
                this.state.name_err === "ok" ? (
                  <span
                    onClick={() => {
                      this.send_gift_request();
                    }}
                    className="fly-spaceship-btn">
                    {this.state.pause ? <LittleLoading /> : "پرواز سفینه"}
                  </span>
                ) : (
                  <span className="fly-spaceship-btn no-fly">پرواز سفینه</span>
                )}
              </span>
            </div>
            <span className="left-img-wrapper jump-img-wrapper">
              <img
                src={jump_img}
                width={72}
                height={72}
                alt="سوار سفینه کاد شو"
              />
            </span>
            <span className="jump-error-place">
              {this.state.final_message ? (
                <span className="jump-final-msg">
                  {this.state.final_message}
                </span>
              ) : (
                ""
              )}
              {this.state.name_err && this.state.name_err !== "ok" ? (
                <span className="jump-err">{this.state.name_err}</span>
              ) : (
                ""
              )}
              {this.state.phone_err && this.state.phone_err !== "ok" ? (
                <span className="jump-err">{this.state.phone_err}</span>
              ) : (
                ""
              )}
            </span>
          </section>
          <footer className="home-footer mm-width">
            <Link
              onClick={() => {
                scrollToTop();
              }}
              to="/HomePage"
              className="home-page-link">
              <img src={mainLogo} alt="کاد" width={175} height={42} />
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
                      className="fly-spaceship-btn">
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
