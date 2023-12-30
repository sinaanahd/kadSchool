import React, { Component, useState, useRef, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Lottie from "react-lottie";
import scrollToTop from "../functions/scroll";
import withWebsiteData from "../hoc/with-website-data";
import axios from "axios";
import LittleLoading from "../reuseables/little-loading";
import HomeHeader from "./header/home-header";
import HomeFooter from "./footer/home-footer";

import rocket from "../lotties/rocket.json";
import astronut from "../lotties/astronot.json";
import astronut_laptop from "../lotties/space-developer.json";
import hero_animation from "../lotties/hero-animation.json";

// import mainLogo from "../../assets/images/main-logo-white-1.webp";
import leftIcon from "../../assets/images/CaretLeft.webp";
import avatar from "../../assets/images/home-cm-avatar.webp";
// import aparatLogo from "../../assets/images/aparat.webp";
// import telegramIcon from "../../assets/images/telegram-icon.webp";
// import whatsappIcon from "../../assets/images/whatsapp-icon.webp";
// import instagramIcon from "../../assets/images/instagram-icon.webp";
import jump_img from "../../assets/images/jump-img.webp";
import hero_little_icon from "../../assets/images/space-ship-new.webp";

// sample teacher

import teacher_img_6 from "../../assets/images/kad-teacher-6.webp";

import good_students_1 from "../../assets/images/rotbe-bartar/rotbe-1.webp";
import good_students_2 from "../../assets/images/rotbe-bartar/rotbe-2.webp";
import good_students_3 from "../../assets/images/rotbe-bartar/rotbe-3.webp";
import good_students_4 from "../../assets/images/rotbe-bartar/rotbe-4.webp";
import good_students_5 from "../../assets/images/rotbe-bartar/rotbe-5.webp";
import good_students_6 from "../../assets/images/rotbe-bartar/rotbe-6.webp";
import good_students_7 from "../../assets/images/rotbe-bartar/rotbe-7.webp";
import good_students_8 from "../../assets/images/rotbe-bartar/rotbe-8.webp";
import good_students_9 from "../../assets/images/rotbe-bartar/rotbe-9.webp";
import good_students_10 from "../../assets/images/rotbe-bartar/rotbe-10.webp";
import good_students_11 from "../../assets/images/rotbe-bartar/rotbe-11.webp";
import good_students_12 from "../../assets/images/rotbe-bartar/rotbe-12.webp";
import good_students_13 from "../../assets/images/rotbe-bartar/rotbe-13.webp";
import good_students_14 from "../../assets/images/rotbe-bartar/rotbe-14.webp";
import urls from "../urls/url";

const len = 8;
const user = JSON.parse(localStorage.getItem("user-kad"))
  ? JSON.parse(localStorage.getItem("user-kad"))
  : false;
const HomePage = () => {
  const teachers_ref = useRef(false);
  const students_ref = useRef(false);
  const [students, set_students] = useState(0);
  const [under_1000, set_under_1000] = useState(0);
  const [un_loved, set_un_loved] = useState(0);
  const [konkor, set_konkor] = useState(0);
  const [carousel_pos, set_carousel_pos] = useState(0);
  const [res_carouse_pos, set_res_carouse_pos] = useState(0);
  const [res_way, set_res_way] = useState("forward");
  const [way, set_way] = useState("forward");
  const [comment_pos, set_comment_pos] = useState(0);
  const [comment_way, set_comment_way] = useState("forward");
  const [active_teacher, set_active_teacher] = useState(1);
  const [active_student, set_active_student] = useState(1);
  const [name, set_name] = useState(false);
  const [phone_number, set_phone_number] = useState(false);
  const [phone_number_2, set_phone_number_2] = useState(false);
  const [name_err, set_name_err] = useState(false);
  const [phone_err, set_phone_err] = useState(false);
  const [phone_err_2, set_phone_err_2] = useState(false);
  const [pause, set_pause] = useState(false);
  const [pause_2, set_pause_2] = useState(false);
  const [final_message, set_final_message] = useState(false);
  const [final_message_2, set_final_message_2] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      count_students(3875);
      count_under_1000(561);
      count_un_loved(28);
      count_konkor(71);
    }, 3000);
    setInterval(() => {
      //handle_carousel();
      res_carousel();
    }, 5000);
    setInterval(() => {
      handle_commnet();
    }, 10000);
  }, []);
  const move_teacher = (way) => {
    const num = active_teacher;
    const teachers_dom = [...teachers_ref.current.children];
    const len = teachers_dom.length;
    if (way === "forward") {
      if (num !== len) {
        teachers_dom.forEach((td) => {
          //console.log(td.style.transform);
          td.style.transform = `translateX(calc(${num * 100}% + ${
            num * 20
          }px))`;
        });
        set_active_teacher(num + 1);
        // setState({ active_teacher: num + 1 });
      }
    } else {
      if (num !== 1) {
        teachers_dom.forEach((td) => {
          td.style.transform = `translateX(calc(${(num - 2) * 100}% + ${
            (num - 2) * 20
          }px))`;
        });
        set_active_teacher(num - 1);
        // setState({ active_teacher: num - 1 });
      }
    }
  };
  const move_student = (way) => {
    const num = active_student;
    const students_dom = [...students_ref.current.children];
    const len = students_dom.length;
    if (way === "forward") {
      if (num !== len) {
        students_dom.forEach((td) => {
          td.style.transform = `translateX(calc(${num * 100}% + ${
            num * 20
          }px))`;
        });
        set_active_student(num + 1);
        // setState({ active_student: num + 1 });
      }
    } else {
      if (num !== 1) {
        students_dom.forEach((td) => {
          td.style.transform = `translateX(calc(${(num - 2) * 100}% + ${
            (num - 2) * 20
          }px))`;
        });
        set_active_student(num - 1);
        // setState({ active_student: num - 1 });
      }
    }
  };
  const send_gift_request = (e) => {
    const send_obj = { fullname: name, phone_number: phone_number, type: 0 };
    set_pause(true);
    // setState({ pause: true });
    axios
      .post(`${urls.call_request_marketing}`, send_obj)
      .then((res) => {
        const { status } = res.data;
        //console.log(res.data);
        set_pause(false);
        // setState({ pause: false });
        if (status) {
          set_final_message("درخواست شما با موفقیت ثبت شد");
          // setState({ final_message: "درخواست شما با موفقیت ثبت شد" });
        } else {
          set_final_message("درخواست شما قبلا ثبت شده ");
          // setState({
          //   final_message: "درخواست شما قبلا ثبت شده ",
          // });
        }
        setTimeout(() => {
          set_final_message(false);
          // setState({ final_message: false });
        }, 2000);
      })
      .catch((e) => {
        set_pause(false);
        // setState({ pause: false });
        // props.handle_error(e);
        console.log(e.message);
      });
  };
  const handle_name = (target) => {
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
    set_name_err(name_err);
    set_name(name);
    // setState({ name_err, name });
  };
  const handle_phone = (target) => {
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
    set_phone_err(phone_err);
    set_phone_number(phone_number);
    // setState({ phone_err, phone_number });
  };

  const count_students = (final) => {
    let counted = 0;
    const count = setInterval(() => {
      if (counted !== final) {
        counted++;
        set_students(counted);
        // setState({ students: counted });
      } else {
        clearInterval(count);
      }
    }, 5);
  };
  const count_under_1000 = (final) => {
    let counted = 0;
    const count = setInterval(() => {
      if (counted !== final) {
        counted++;
        set_under_1000(counted);
        // setState({ under_1000: counted });
      } else {
        clearInterval(count);
      }
    }, 12);
  };
  const count_un_loved = (final) => {
    let counted = 0;
    const count = setInterval(() => {
      if (counted !== final) {
        counted++;
        set_un_loved(counted);
        // setState({ un_loved: counted });
      } else {
        clearInterval(count);
      }
    }, 200);
  };
  const count_konkor = (final) => {
    let counted = 0;
    const count = setInterval(() => {
      if (counted !== final) {
        counted++;
        set_konkor(counted);
        // setState({ konkor: counted });
      } else {
        clearInterval(count);
      }
    }, 100);
  };
  const handle_carousel = () => {
    if (way === "forward") {
      if (carousel_pos === 0) {
        set_carousel_pos(carousel_pos + 1);
        // setState({ carousel_pos: carousel_pos + 1 });
      } else if (carousel_pos === 1) {
        set_carousel_pos(carousel_pos + 1);
        set_way("back");
        // setState({ carousel_pos: carousel_pos + 1, way: "back" });
      }
    } else {
      if (carousel_pos === 2) {
        set_carousel_pos(carousel_pos - 1);
        // setState({ carousel_pos: carousel_pos - 1 });
      } else if (carousel_pos === 1) {
        set_carousel_pos(carousel_pos - 1);
        set_way("forward");
        // setState({ carousel_pos: carousel_pos - 1, way: "forward" });
      }
    }
  };

  const res_carousel = () => {
    if (res_way === "forward") {
      if (res_carouse_pos !== 6) {
        set_res_carouse_pos(res_carouse_pos + 1);
        // setState({ res_carouse_pos: res_carouse_pos + 1 });
      } else {
        set_res_carouse_pos(res_carouse_pos - 1);
        set_res_way("back");
        // setState({
        //   res_carouse_pos: res_carouse_pos - 1,
        //   res_way: "back",
        // });
      }
    } else {
      if (res_carouse_pos !== 0) {
        set_res_carouse_pos(res_carouse_pos - 1);
        // setState({ res_carouse_pos: res_carouse_pos - 1 });
      } else {
        set_res_carouse_pos(res_carouse_pos + 1);
        set_res_way("forward");
        // setState({
        //   res_carouse_pos: res_carouse_pos + 1,
        //   res_way: "forward",
        // });
      }
    }
  };
  const handle_commnet = () => {
    if (way === "forward") {
      if (comment_pos !== len - 1) {
        set_comment_pos(comment_pos + 1);
        // setState({ comment_pos: comment_pos + 1 });
      } else {
        set_comment_pos(comment_pos - 1);
        set_comment_way("back");
        // setState({ comment_pos: comment_pos - 1, comment_way: "back" });
      }
    } else {
      if (comment_pos !== 0) {
        set_comment_pos(comment_pos - 1);
        // setState({ comment_pos: comment_pos - 1 });
      } else {
        set_comment_pos(comment_pos + 1);
        set_comment_way("forward");
        // setState({ comment_pos: comment_pos + 1, comment_way: "forward" });
      }
    }
  };
  const send_gift_request_2 = () => {
    const send_obj = { phone_number: phone_number, type: 1 };
    set_pause_2(true);
    axios
      .post(`${urls.call_request_marketing}`, send_obj)
      .then((res) => {
        const { status } = res.data;
        //console.log(res.data);
        set_pause_2(false);
        // setState({ pause_2: false });
        if (status) {
          set_final_message_2("درخواست شما با موفقیت ثبت شد");
          // setState({ final_message_2: "درخواست شما با موفقیت ثبت شد" });
        } else {
          set_final_message_2("درخواست شما قبلا ثبت شده ");
          // setState({
          //   final_message_2: "درخواست شما قبلا ثبت شده ",
          // });
        }
        setTimeout(() => {
          set_final_message_2(false);
          // setState({ final_message_2: false });
        }, 2000);
      })
      .catch((e) => {
        set_pause_2(false);
        // setState({ pause_2: false });
        // props.handle_error(e);
        console.log(e.message);
      });
  };
  const handle_phone_2 = (e) => {
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
    set_phone_err_2(phone_err_2);
    set_phone_err(phone_err_2);
    // setState({ phone_err_2, phone_number_2 });
  };
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
        <title>کاد | کلاس های مجازی برای دهم ، یازدهم و دوازدهم</title>
        <meta name="description" content="" />
        <meta
          name="keywords"
          content="کاد, کلاس اینترنتی, کلاس های مجازی برای دهم, کلاس های مجازی برای یازدهم ,کلاس های مجازی برای دوازدهم , کلاس کنکور, کلاس آنلاین کنکور, کنکور ۱۴۰۳, کنکور,"
        />
        <meta
          name="description"
          content="آمادگی برای کنکور در تمام رشته‌ها با کلاس‌های آنلاین برتر ما. از ریاضیات و تجربی تا رشته‌های انسانی و هنر، مدرسان ما با تجربه و استعداد آموزشی برجسته، برنامه‌های جامعی را ارائه می‌دهند. با ما بپیوندید و در کنکور با موفقیت بیشتری شرکت کنید و در دانشگاه رشته مورد علاقه خود قبول شوید."
        />
      </Helmet>
      <div className="home-page">
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
            <h1 className="hero-title">
              کاد ، کلاس های مجازی برای
              <br />
              دهم ، یازدهم ، دوازدهم و کنکور
            </h1>
            <p className="hero-text">
              کاد ، آموزش رو براتون جذاب میکنه. ما اینجا فقط درس نمیدیم ما
              پشتیبان شما هم هستیم ماموریت ما فقط این نیست که شما موفق بشید بلکه
              میخوایم حالتون خوب باشه و از درس خوندن لذت ببرید. ما هم موفقیت و
              پیشرفت شما رو ببینیم تا حال ما هم خوب بشه.
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
                <p>شماره‌تو بذار تا کلاس رایگان هدیه بگیری</p>
              </span>
              <span className="hero-input-wrapper">
                <input
                  type="text"
                  onInput={({ target }) => {
                    handle_name(target);
                  }}
                  placeholder="نام و نام خانوادگی"
                />
              </span>
              <span className="hero-input-wrapper">
                <input
                  type="number"
                  onInput={({ target }) => {
                    handle_phone(target);
                  }}
                  placeholder="شماره تماس"
                />
                {phone_err === "ok" && name_err === "ok" ? (
                  <span onClick={() => send_gift_request()} className="fly-btn">
                    {pause ? <LittleLoading /> : "ثبت شماره"}
                  </span>
                ) : (
                  <span className="fly-btn dont-fly-yet">ثبت شماره</span>
                )}
              </span>
              {phone_err && phone_err !== "ok" ? (
                <span className="input-error">{phone_err}</span>
              ) : (
                ""
              )}
              {name_err && name_err !== "ok" ? (
                <span className="input-error">{name_err}</span>
              ) : (
                ""
              )}
              {final_message ? (
                <span className="final-msg">{final_message}</span>
              ) : (
                ""
              )}
            </span>
          </div>
        </section>
        <section className="achivment-history-wrapper">
          <h2 className="semi-title">تو کاد چه خبره ؟</h2>
          <div className="numberical-contents">
            <span className="numerical-item">
              <span className="number">{students}</span>
              <p className="content-text">دانش آموز تا به امروز</p>
            </span>
            <span className="numerical-item">
              <span className="number">{under_1000}</span>
              <p className="content-text">رتبه زیر ۱۰۰۰</p>
            </span>
            <span className="numerical-item">
              <span className="number">{un_loved}</span>
              <p className="content-text">رتبه زیر ۱۰۰</p>
            </span>
            <span className="numerical-item">
              <span className="number">{konkor}</span>
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
            چرا تا به امروز ۳۸۷۵ نفر به کاد اعتماد کردن؟
          </h2>
          <div className={"reasons-wrapper res-pos-" + res_carouse_pos}>
            <div className={"reasons pos-" + carousel_pos}>
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
                  توی کاد هیچ مبحثی رو آموزشش رو به دوره دیگه ای مرتبط نمیکنیم و
                  ریز و درشت همه چی تدریس میشه
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
                  توی کاد بعد از تموم شدن کلاس به امون خدا رها نمیشی و کلی تکلیف
                  بهت میدیم که قبل از هر جلسه تکالیفت تصحیح هم میشن و بهت نمره
                  میدیم
                </p>
              </div>
              <div className="reason">
                <h3 className="reason-title">پشتیبانان ایستگاه فضایی کاد</h3>
                <p className="reason-text">
                  توی کاد پشتیبان ها برای فروختن کلاس باهات تماس نمیگیرن بلکه
                  مثل یک دوست و مشاور هر سوال و راه نمایی لازم داشته باشی با صبر
                  و حوصله جوابت رو میدن
                </p>
              </div>
              <div className="reason">
                <h3 className="reason-title">رفیق همه راه بودن</h3>
                <p className="reason-text">
                  توی کاد میتونی هزینه کلاس هات رو توی سه قسط پرداخت کنی که روی
                  خودت و پدر مادرت فشار نیاد. کاد رفیق نیمه راه نیست
                </p>
              </div>
              <div className="reason">
                <h3 className="reason-title">خرج کم تر زندگی بهتر</h3>
                <p className="reason-text">
                  توی کاد برای دیدن آفلاین کلاس هات فقط یک بار حجم اینترنت
                  پرداخت میکنی نه بیشتر
                </p>
              </div>
              {/* <div className="reason">
                <h3 className="reason-title">ضمانت بازگشت وجه</h3>
                <p className="reason-text">
                  توی کاد اگه پیشرفت نکنی کل هزینه دوره در پایان دوره بهت برگشت
                  داده میشه. کاد جای متوسط موندن نیست!
                </p>
              </div> */}
            </div>
            <span
              onClick={() => {
                res_carousel();
              }}
              className={
                res_way === "forward"
                  ? "resoan-back-btn"
                  : "resoan-back-btn rev"
              }
            >
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
          <div className="teachers" ref={teachers_ref}>
            <Link
              to="/Teachers/استاد-هامون-سبطی"
              onClick={() => {
                scrollToTop();
              }}
              className="teacher"
            >
              <span className="teacher-img-wrapper">
                <img
                  width={224}
                  loading="lazy"
                  height={298.13}
                  src="https://kadschool.com/media/Kad_Teachers_Photos/Teacher_7792.webp"
                  alt="استاد هامون سبطی"
                ></img>
              </span>
              <h3 className="teacher-name">استاد هامون سبطی</h3>
            </Link>
            <Link
              to="/Teachers/استاد-عماد-فیض-آبادی"
              onClick={() => {
                scrollToTop();
              }}
              className="teacher"
            >
              <span className="teacher-img-wrapper">
                <img
                  width={224}
                  loading="lazy"
                  height={298.13}
                  src="https://kadschool.com/media/Kad_Teachers_Photos/Teacher_1949.webp"
                  alt="استاد عماد فیض آبادی"
                ></img>
              </span>
              <h3 className="teacher-name">استاد عماد فیض آبادی</h3>
            </Link>
            <Link
              to="/Teachers/استاد-حمید-سودیان"
              onClick={() => {
                scrollToTop();
              }}
              className="teacher"
            >
              <span className="teacher-img-wrapper">
                <img
                  width={224}
                  loading="lazy"
                  height={298.13}
                  src="https://kadschool.com/media/Kad_Teachers_Photos/Teacher_6512.webp"
                  alt="استاد حمید سودیان"
                ></img>
              </span>
              <h3 className="teacher-name">استاد حمید سودیان</h3>
            </Link>
            <Link
              to="/Teachers/استاد-آروین-حسینی"
              onClick={() => {
                scrollToTop();
              }}
              className="teacher"
            >
              <span className="teacher-img-wrapper">
                <img
                  width={224}
                  loading="lazy"
                  height={298.13}
                  src="https://kadschool.com/media/Kad_Teachers_Photos/Teacher_7137.webp"
                  alt="استاد آروین حسینی"
                ></img>
              </span>
              <h3 className="teacher-name">استاد آروین حسینی</h3>
            </Link>
            <Link
              to="/Teachers/استاد-امیر-محمد-دهقان"
              onClick={() => {
                scrollToTop();
              }}
              className="teacher"
            >
              <span className="teacher-img-wrapper">
                <img
                  width={224}
                  loading="lazy"
                  height={298.13}
                  src="https://kadschool.com/media/Kad_Teachers_Photos/Teacher_7711.webp"
                  alt="استاد امیر محمد دهقان"
                ></img>
              </span>
              <h3 className="teacher-name">استاد امیر محمد دهقان</h3>
            </Link>

            <Link
              to="/Teachers/استاد-نیما-جواهری"
              onClick={() => {
                scrollToTop();
              }}
              className="teacher"
            >
              <span className="teacher-img-wrapper">
                <img
                  width={224}
                  loading="lazy"
                  height={298.13}
                  src="https://kadschool.com/media/Kad_Teachers_Photos/Teacher_8325.webp"
                  alt="استاد نیما جواهری"
                ></img>
              </span>
              <h3 className="teacher-name">استاد نیما جواهری</h3>
            </Link>
            <Link
              to="/Teachers/استاد-مهران-ترکمان"
              onClick={() => {
                scrollToTop();
              }}
              className="teacher"
            >
              <span className="teacher-img-wrapper">
                <img
                  width={224}
                  loading="lazy"
                  height={298.13}
                  src="https://kadschool.com/media/Kad_Teachers_Photos/Teacher_9558.webp"
                  alt="استاد مهران ترکمان"
                ></img>
              </span>
              <h3 className="teacher-name">استاد مهران ترکمان</h3>
            </Link>
            <Link
              to="/Teachers/استاد-مهسا-عفتی"
              onClick={() => {
                scrollToTop();
              }}
              className="teacher"
            >
              <span className="teacher-img-wrapper">
                <img
                  width={224}
                  loading="lazy"
                  height={298.13}
                  src="https://kadschool.com/media/Kad_Teachers_Photos/Teacher_4605.webp"
                  alt="استاد مهسا عفتی"
                ></img>
              </span>
              <h3 className="teacher-name">استاد مهسا عفتی</h3>
            </Link>
            <Link
              to="/Teachers/استاد-سارا-شریفی"
              onClick={() => {
                scrollToTop();
              }}
              className="teacher"
            >
              <span className="teacher-img-wrapper">
                <img
                  width={224}
                  loading="lazy"
                  height={298.13}
                  src="https://kadschool.com/media/Kad_Teachers_Photos/Teacher_3548.webp"
                  alt="استاد سارا شریفی"
                ></img>
              </span>
              <h3 className="teacher-name"> استاد سارا شریفی</h3>
            </Link>

            <Link
              to="/Teachers/استاد-علیرضا-علمداری"
              onClick={() => {
                scrollToTop();
              }}
              className="teacher"
            >
              <span className="teacher-img-wrapper">
                <img
                  width={224}
                  loading="lazy"
                  height={298.13}
                  src="https://kadschool.com/media/Kad_Teachers_Photos/Teacher_4906.webp"
                  alt="مهندس علیرضا علمداری"
                ></img>
              </span>
              <h3 className="teacher-name">مهندس علیرضا علمداری</h3>
            </Link>
            <Link
              to="/Teachers/استاد-علیرضا-ایدلخانی"
              onClick={() => {
                scrollToTop();
              }}
              className="teacher"
            >
              <span className="teacher-img-wrapper">
                <img
                  width={224}
                  loading="lazy"
                  height={298.13}
                  src="https://kadschool.com/media/Kad_Teachers_Photos/Teacher_8981.webp"
                  alt="مهندس علیرضا ایدلخانی"
                ></img>
              </span>
              <h3 className="teacher-name">مهندس علیرضا ایدلخانی</h3>
            </Link>
            <Link
              to="/Teachers/استاد-میلاد-آهنی"
              onClick={() => {
                scrollToTop();
              }}
              className="teacher"
            >
              <span className="teacher-img-wrapper">
                <img
                  width={224}
                  loading="lazy"
                  height={298.13}
                  src="https://kadschool.com/media/Kad_Teachers_Photos/Teacher_7610.webp"
                  alt="میلاد آهنی"
                ></img>
              </span>
              <h3 className="teacher-name">استاد میلاد آهنی</h3>
            </Link>
          </div>
          <span
            onClick={() => {
              move_teacher("forward");
            }}
            className="resoan-back-btn"
          >
            <img src={leftIcon} alt="بعدی" width={47} height={47} />
          </span>
          <span
            onClick={() => {
              move_teacher("back");
            }}
            className="resoan-back-btn rev"
          >
            <img src={leftIcon} alt="بعدی" width={47} height={47} />
          </span>
        </section>
        <section className="good-students-wrapper mm-width">
          <h2 className="semi-title">بخشی از رتبه‌های برتر کاد</h2>
          <div className="good-students" ref={students_ref}>
            <div className="good-student">
              <span className="good-student-img-wrapper">
                <img
                  loading="lazy"
                  width={224}
                  height={298}
                  src={good_students_1}
                  alt="امین ساعی"
                ></img>
              </span>
              <h3 className="good-student-name">امین ساعی</h3>
            </div>
            <div className="good-student">
              <span className="good-student-img-wrapper">
                <img
                  loading="lazy"
                  width={224}
                  height={298}
                  src={good_students_2}
                  alt="فاطمه حسینی لیاولی"
                ></img>
              </span>
              <h3 className="good-student-name">فاطمه حسینی لیاولی</h3>
            </div>
            <div className="good-student">
              <span className="good-student-img-wrapper">
                <img
                  loading="lazy"
                  width={224}
                  height={298}
                  src={good_students_3}
                  alt="کیان حلاجی"
                ></img>
              </span>
              <h3 className="good-student-name">کیان حلاجی</h3>
            </div>
            <div className="good-student">
              <span className="good-student-img-wrapper">
                <img
                  loading="lazy"
                  width={224}
                  height={298}
                  src={good_students_4}
                  alt="نرجس کریمیان‌زاده"
                ></img>
              </span>
              <h3 className="good-student-name">نرجس کریمیان‌زاده</h3>
            </div>
            <div className="good-student">
              <span className="good-student-img-wrapper">
                <img
                  loading="lazy"
                  width={224}
                  height={298}
                  src={good_students_5}
                  alt="منیره گرفیروزجائی"
                ></img>
              </span>
              <h3 className="good-student-name">منیره گرفیروزجائی</h3>
            </div>
            <div className="good-student">
              <span className="good-student-img-wrapper">
                <img
                  loading="lazy"
                  width={224}
                  height={298}
                  src={good_students_6}
                  alt="ساجده جلیلی"
                ></img>
              </span>
              <h3 className="good-student-name">ساجده جلیلی</h3>
            </div>
            <div className="good-student">
              <span className="good-student-img-wrapper">
                <img
                  loading="lazy"
                  width={224}
                  height={298}
                  src={good_students_7}
                  alt="سید آمانج حسینی"
                ></img>
              </span>
              <h3 className="good-student-name">سید آمانج حسینی</h3>
            </div>
            <div className="good-student">
              <span className="good-student-img-wrapper">
                <img
                  loading="lazy"
                  width={224}
                  height={298}
                  src={good_students_8}
                  alt="زیبا سادات حسینی‌نژاد"
                ></img>
              </span>
              <h3 className="good-student-name">زیبا سادات حسینی‌نژاد</h3>
            </div>
            <div className="good-student">
              <span className="good-student-img-wrapper">
                <img
                  loading="lazy"
                  width={224}
                  height={298}
                  src={good_students_9}
                  alt="سانیا پورقاسمی"
                ></img>
              </span>
              <h3 className="good-student-name">سانیا پورقاسمی</h3>
            </div>
            <div className="good-student">
              <span className="good-student-img-wrapper">
                <img
                  loading="lazy"
                  width={224}
                  height={298}
                  src={good_students_10}
                  alt="محسن قاسمی"
                ></img>
              </span>
              <h3 className="good-student-name">محسن قاسمی</h3>
            </div>
            <div className="good-student">
              <span className="good-student-img-wrapper">
                <img
                  loading="lazy"
                  width={224}
                  height={298}
                  src={good_students_11}
                  alt="عرفان رجب پور"
                ></img>
              </span>
              <h3 className="good-student-name">عرفان رجب پور</h3>
            </div>
            <div className="good-student">
              <span className="good-student-img-wrapper">
                <img
                  loading="lazy"
                  width={224}
                  height={298}
                  src={good_students_12}
                  alt="معصومه مسرور"
                ></img>
              </span>
              <h3 className="good-student-name">معصومه مسرور</h3>
            </div>
            <div className="good-student">
              <span className="good-student-img-wrapper">
                <img
                  loading="lazy"
                  width={224}
                  height={298}
                  src={good_students_13}
                  alt="مهشید سلیمی"
                ></img>
              </span>
              <h3 className="good-student-name">مهشید سلیمی</h3>
            </div>
            <div className="good-student">
              <span className="good-student-img-wrapper">
                <img
                  loading="lazy"
                  width={224}
                  height={298}
                  src={good_students_14}
                  alt="فاطمه مالو"
                ></img>
              </span>
              <h3 className="good-student-name">فاطمه مالو</h3>
            </div>
          </div>
          <span
            onClick={() => {
              move_student("forward");
            }}
            className="resoan-back-btn"
          >
            <img src={leftIcon} alt="بعدی" width={47} height={47} />
          </span>
          <span
            onClick={() => {
              move_student("back");
            }}
            className="resoan-back-btn rev"
          >
            <img src={leftIcon} alt="بعدی" width={47} height={47} />
          </span>
        </section>
        <section className="comments-on-kad-wrapper mm-width">
          <h2 className="semi-title">نظر دوستاتون در مورد کاد</h2>
          <div className="comment-img">
            <div className={"comments cm-" + comment_pos}>
              <div className="home-comment">
                <p className="home-comment-text">
                  من امسال در کلاس های فلسفه،ادبیات،عربی، درک و دریافت شعر و
                  مشاوره موسسه کاد شرکت کردم کلاس ها همگی به شدت جذاب و عالی بود
                  و کاری میکرد دانش آموز با شور و علاقه،سر کلاس حاضر بشه.
                  پاسخگویی پشتیبانی هم خیلی سریع و خوب بود بی شک دانش آموز موسسه
                  کاد بودن،از بهترین و به یادماندنی ترین و زیبا ترین تجربه های
                  دوران تحصیل من خواهد بود. خیلی خوشحالم که با کاد آشنا شدم
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
                  <span className="home-comment-user-name">نفیسه گل چشمه</span>
                  <span className="home-comment-user-subject">انسانی</span>
                </span>
              </div>
              <div className="home-comment">
                <p className="home-comment-text">
                  خب حقیقتش من کلاس های علوم فنون دکتر سبطی و همایش دکتر ترکمان
                  و دکتر سودیان رو شرکت کردم و سطح استاد ها فوق العادس و نحوه
                  تدریس هم عالیه در مورد تاثیری که برای من داشته اینه که راحت تر
                  و سریع تر میتونم تست حل کنم گره های درسی هم که برای رفع اشکال
                  داشتیم عالی بود و همه سوالام رو پاسخ میدادن
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
                  عالی و قدرت بیانشون بسیار تاثیر گذار بود. خیلی ممنون از موسسه
                  خوبتون درپناه حق باشید
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
                  من در همه درس های انسانی کاد شرکت کردم و با اینکه از اسفند تو
                  کلاسا حاضر شدم واقعا مفید بود مخصوصا فلسفه و منطق که برای فهم
                  درست و کامل متن درس خیلی اهمیت داره.ریاضی هم که برای من از اول
                  یک غول بود تا اخر سال کم کم قبحش برام ریخت و تونستم از درصد 7
                  به درصد 72 برسم.عربی و علوم فنون هم عالییییی بودن
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
                  در کل کاد عالیه از هر نظر مخصوصا پشتیبانی و رفع اشکال شیش هیچ
                  از بقیه موسسات جلوتره امسال هم احتمالا پشت کنکور میمونم و
                  دوباره همه کلاس های انسانی رو ثبت نام میکنم
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
                  توی اکثر جلسات بهمون تکلیف میدن و آزمون منظم ازمون میگیرن برای
                  منی که نیازه زور بالا سرم باشه خیلی خوب بود. در کل ممنونم از
                  همه استادای کاد
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
                  <span className="home-comment-user-name">محدثه خوش باور</span>
                  <span className="home-comment-user-subject">انسانی</span>
                </span>
              </div>
              <div className="home-comment">
                <p className="home-comment-text">
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
                  خیالم راحت تر شد خوبی کاد نسبت به خیلی از کلاسای دیگه اینه که
                  جو دانش اموزای کلاساش با بقیه خیلی متفاوته یک جورایی انگار
                  گزینش شدن و همه دنبال درسن و خب این خیلی به من کمک کرد بر خلاف
                  همون دوستام که از وسطای سال درگیر حرف این معلم و اون معلم شدن.
                  آزمون ها و بانک تستی هم که طی سال دادن واقعا عالی بود و من همه
                  تست ها رو تحلیل میکردم و خیلی مشابهش توی کنکور اومد
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
                اگه هنوزم سوالی داری یا از چیزی نگرانی کاد در کنارته
              </h2>
              <h3 className="seconf-jum-title">
                کافیه مشخصاتت رو بهمون پیام بدی تا در سریع ترین زمان باهات تماس
                بگیریم
              </h3>
            </span>
            <span className="jump-input-wrapper">
              <input
                type="text"
                placeholder="نام و نام خانوادگی"
                onInput={({ target }) => {
                  handle_name(target);
                }}
              />
            </span>
            <span className="jump-input-wrapper">
              <input
                type="number"
                placeholder="شماره تلفن"
                onInput={({ target }) => {
                  handle_phone(target);
                }}
              />
              {phone_err === "ok" && name_err === "ok" ? (
                <span
                  onClick={() => {
                    send_gift_request();
                  }}
                  className="fly-spaceship-btn"
                >
                  {pause ? <LittleLoading /> : "ثبت شماره"}
                </span>
              ) : (
                <span className="fly-spaceship-btn no-fly">ثبت شماره</span>
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
            {final_message ? (
              <span className="jump-final-msg">{final_message}</span>
            ) : (
              ""
            )}
            {name_err && name_err !== "ok" ? (
              <span className="jump-err">{name_err}</span>
            ) : (
              ""
            )}
            {phone_err && phone_err !== "ok" ? (
              <span className="jump-err">{phone_err}</span>
            ) : (
              ""
            )}
          </span>
        </section>
      </div>
    </>
  );
};

// export default Home;
// class HomePage extends Component {
//   render() {
//     return (
//       <>
//         <Helmet>
//           <title>کاد اولین و قوی ترین سفینه کنکور</title>
//           <meta name="description" content="" />
//           <meta
//             name="keywords"
//             content="کاد, کلاس اینترنتی, کلاس اینترنتی دریافت, کلاس کنکور, کلاس آنلاین کنکور, کنکور ۱۴۰۳, کنکور,"
//           />
//           <meta
//             name="description"
//             content="آمادگی برای کنکور در تمام رشته‌ها با کلاس‌های آنلاین برتر ما. از ریاضیات و تجربی تا رشته‌های انسانی و هنر، مدرسان ما با تجربه و استعداد آموزشی برجسته، برنامه‌های جامعی را ارائه می‌دهند. با ما بپیوندید و در کنکور با موفقیت بیشتری شرکت کنید و در دانشگاه رشته مورد علاقه خود قبول شوید."
//           />
//         </Helmet>
//         <div className="home-page">
//           <HomeHeader user={user} />
//           <section className="hero-wrapper">
//             <div className="hero-gif">
//               <Lottie options={hero_animation_options} />
//               {/* <video
//                 loop={true}
//                 autoPlay={true}
//                 muted
//                 src={hero_video}
//                 className="video-hero"></video> */}
//             </div>
//             <div className="hero-text-wrapper">
//               <h1 className="hero-title">کاد اولین و قوی‌ترین سفینه کنکور</h1>
//               <p className="hero-text">
//                 کاد سفینه فضایی هست برای یک سفر آموزشی هیجان انگیز تا به کمک
//                 بقیه فضانورد های کاد با سلاح های مختلفی که داریم به جنگ آدم
//                 فضایی های هر سیاره بریم و فتحش کنیم به نظرت پایان سال تحصیلی
//                 میتونیم شکستشون بدیم؟
//               </p>
//               <span className="get-on-board">
//                 <span className="hero-gift-text-img">
//                   <span className="img-animate">
//                     <img
//                       src={hero_little_icon}
//                       alt="جایزه بگیر"
//                       width={30}
//                       height={30}
//                     />
//                   </span>
//                   <p>
//                     سوار سفینه کاد بشو و هدیه <font>۱ میلیون تومانی</font>{" "}
//                     تومانی بگیر
//                   </p>
//                 </span>
//                 <span className="hero-input-wrapper">
//                   <input
//                     type="text"
//                     onInput={({ target }) => {
//                       handle_name(target);
//                     }}
//                     placeholder="نام و نام خانوادگی"
//                   />
//                 </span>
//                 <span className="hero-input-wrapper">
//                   <input
//                     type="number"
//                     onInput={({ target }) => {
//                       handle_phone(target);
//                     }}
//                     placeholder="شماره تماس"
//                   />
//                   {state.phone_err === "ok" && state.name_err === "ok" ? (
//                     <span
//                       onClick={() => send_gift_request()}
//                       className="fly-btn"
//                     >
//                       {state.pause ? <LittleLoading /> : "پرواز سفینه"}
//                     </span>
//                   ) : (
//                     <span className="fly-btn dont-fly-yet">پرواز سفینه</span>
//                   )}
//                 </span>
//                 {state.phone_err && state.phone_err !== "ok" ? (
//                   <span className="input-error">{state.phone_err}</span>
//                 ) : (
//                   ""
//                 )}
//                 {state.name_err && state.name_err !== "ok" ? (
//                   <span className="input-error">{state.name_err}</span>
//                 ) : (
//                   ""
//                 )}
//                 {state.final_message ? (
//                   <span className="final-msg">{state.final_message}</span>
//                 ) : (
//                   ""
//                 )}
//               </span>
//             </div>
//           </section>
//           <section className="achivment-history-wrapper">
//             <h2 className="semi-title">تاریخ فتوحات کاد</h2>
//             <div className="numberical-contents">
//               <span className="numerical-item">
//                 <span className="number">{state.students}</span>
//                 <p className="content-text">دانش آموز تا به امروز</p>
//               </span>
//               <span className="numerical-item">
//                 <span className="number">{state.under_1000}</span>
//                 <p className="content-text">رتبه زیر 1000</p>
//               </span>
//               <span className="numerical-item">
//                 <span className="number">{state.un_loved}</span>
//                 <p className="content-text">نفر عدم رضایت از کاد</p>
//               </span>
//               <span className="numerical-item">
//                 <span className="number">{state.konkor}</span>
//                 <p className="content-text">درصد تطابق با کنکور</p>
//               </span>
//             </div>
//             <div className="gif-wrap">
//               {/* <img src={rocket_gif} alt="" /> */}
//               <Lottie options={rocketOptions} />
//             </div>
//           </section>
//           <section className="why-in-kad-we-trust">
//             <h2 className="semi-title">
//               چرا تا به امروز 3875 نفر به کاد اعتماد کردن؟
//             </h2>
//             <div className={"reasons-wrapper res-pos-" + state.res_carouse_pos}>
//               <div className={"reasons pos-" + state.carousel_pos}>
//                 <div className="reason">
//                   <h3 className="reason-title">رفع اشکال به سرعت نور</h3>
//                   <p className="reason-text">
//                     توی کاد نمیذاریم سوالت بدون جواب بمونه.هم خود استاد هم
//                     دستیاران استاد به تک تک سوال هات پاسخ میدن
//                   </p>
//                 </div>
//                 <div className="reason">
//                   <h3 className="reason-title">منفی بینهایت تا مثبت بینهایت</h3>
//                   <p className="reason-text">
//                     توی کاد هیچ مبحثی رو آموزشش رو به دوره دیگه ای مرتبط نمیکنیم
//                     و ریز و درشت همه چی تدریس میشه
//                   </p>
//                 </div>
//                 <div className="reason">
//                   <h3 className="reason-title">آزمون های کهکشانی</h3>
//                   <p className="reason-text">
//                     توی کاد هر ماه آزمون هایی با درصد تطابق نزدیک به 71 درصد با
//                     کنکور سراسری داری
//                   </p>
//                 </div>
//                 <div className="reason">
//                   <h3 className="reason-title">تکالیف مریخی</h3>
//                   <p className="reason-text">
//                     توی کاد بعد از تموم شدن کلاس به امون خدا رها نمیشی و کلی
//                     تکلیف بهت میدیم که قبل از هر جلسه تکالیفت تصحیح هم میشن و
//                     بهت نمره میدیم
//                   </p>
//                 </div>
//                 <div className="reason">
//                   <h3 className="reason-title">پشتیبانان ایستگاه فضایی کاد</h3>
//                   <p className="reason-text">
//                     توی کاد پشتیبان ها برای فروختن کلاس باهات تماس نمیگیرن بلکه
//                     مثل یک دوست و مشاور هر سوال و راه نمایی لازم داشته باشی با
//                     صبر و حوصله جوابت رو میدن
//                   </p>
//                 </div>
//                 <div className="reason">
//                   <h3 className="reason-title">رفیق همه راه بودن</h3>
//                   <p className="reason-text">
//                     توی کاد میتونی هزینه کلاس هات رو توی سه قسط پرداخت کنی که
//                     روی خودت و پدر مادرت فشار نیاد. کاد رفیق نیمه راه نیست
//                   </p>
//                 </div>
//                 <div className="reason">
//                   <h3 className="reason-title">خرج کم تر زندگی بهتر</h3>
//                   <p className="reason-text">
//                     توی کاد برای دیدن آفلاین کلاس هات فقط یک بار حجم اینترنت
//                     پرداخت میکنی نه بیشتر
//                   </p>
//                 </div>
//                 <div className="reason">
//                   <h3 className="reason-title">ضمانت بازگشت وجه</h3>
//                   <p className="reason-text">
//                     توی کاد اگه پیشرفت نکنی کل هزینه دوره در پایان دوره بهت
//                     برگشت داده میشه. کاد جای متوسط موندن نیست!
//                   </p>
//                 </div>
//               </div>
//               <span
//                 onClick={() => {
//                   res_carousel();
//                 }}
//                 className={
//                   state.res_way === "forward"
//                     ? "resoan-back-btn"
//                     : "resoan-back-btn rev"
//                 }
//               >
//                 <img src={leftIcon} alt="بعدی" width={47} height={47} />
//               </span>
//             </div>
//             <div className="astronut-img">
//               {/* <img src={astronut} alt="فضانورد" /> */}
//               <Lottie options={astronutOptions} />
//             </div>
//             <div className="astronut-img responsive">
//               <Lottie options={res_astronut} />
//             </div>
//           </section>
//           <section className="teachers-wrapper mm-width">
//             <h2 className="semi-title">استادان حرفه ای کاد</h2>
//             <div className="teachers" ref={teachers_ref}>
//               <Link
//                 to="/Teachers/استاد-هامون-سبطی"
//                 onClick={() => {
//                   scrollToTop();
//                 }}
//                 className="teacher"
//               >
//                 <span className="teacher-img-wrapper">
//                   <img
//                     width={224}
//                     loading="lazy"
//                     height={298.13}
//                     src="https://kadschool.com/media/Kad_Teachers_Photos/Teacher_استاد_هامون_سبطی.webp"
//                     alt="استاد هامون سبطی"
//                   ></img>
//                 </span>
//                 <h3 className="teacher-name">استاد هامون سبطی</h3>
//               </Link>
//               <Link
//                 to="/Teachers/استاد-عماد-فیض-آبادی"
//                 onClick={() => {
//                   scrollToTop();
//                 }}
//                 className="teacher"
//               >
//                 <span className="teacher-img-wrapper">
//                   <img
//                     width={224}
//                     loading="lazy"
//                     height={298.13}
//                     src="https://kadschool.com/media/Kad_Teachers_Photos/Teacher_استاد_عماد_فیض_آبادی.webp"
//                     alt="استاد عماد فیض آبادی"
//                   ></img>
//                 </span>
//                 <h3 className="teacher-name">استاد عماد فیض آبادی</h3>
//               </Link>
//               <Link
//                 to="/Teachers/استاد-حمید-سودیان"
//                 onClick={() => {
//                   scrollToTop();
//                 }}
//                 className="teacher"
//               >
//                 <span className="teacher-img-wrapper">
//                   <img
//                     width={224}
//                     loading="lazy"
//                     height={298.13}
//                     src="https://kadschool.com/media/Kad_Teachers_Photos/Teacher_استاد_حمید_سودیان.webp"
//                     alt="استاد حمید سودیان"
//                   ></img>
//                 </span>
//                 <h3 className="teacher-name">استاد حمید سودیان</h3>
//               </Link>
//               <Link
//                 to="/Teachers/استاد-آروین-حسینی"
//                 onClick={() => {
//                   scrollToTop();
//                 }}
//                 className="teacher"
//               >
//                 <span className="teacher-img-wrapper">
//                   <img
//                     width={224}
//                     loading="lazy"
//                     height={298.13}
//                     src="https://kadschool.com/media/Kad_Teachers_Photos/Teacher_استاد_آروین_حسینی.webp"
//                     alt="استاد آروین حسینی"
//                   ></img>
//                 </span>
//                 <h3 className="teacher-name">استاد آروین حسینی</h3>
//               </Link>
//               <Link
//                 to="/Teachers/استاد-امیر-محمد-دهقان"
//                 onClick={() => {
//                   scrollToTop();
//                 }}
//                 className="teacher"
//               >
//                 <span className="teacher-img-wrapper">
//                   <img
//                     width={224}
//                     loading="lazy"
//                     height={298.13}
//                     src="https://kadschool.com/media/Kad_Teachers_Photos/Teacher_استاد_امیر_محمد_دهقان.webp"
//                     alt="استاد امیر محمد دهقان"
//                   ></img>
//                 </span>
//                 <h3 className="teacher-name">استاد امیر محمد دهقان</h3>
//               </Link>

//               <Link
//                 to="/Teachers/استاد-نیما-جواهری"
//                 onClick={() => {
//                   scrollToTop();
//                 }}
//                 className="teacher"
//               >
//                 <span className="teacher-img-wrapper">
//                   <img
//                     width={224}
//                     loading="lazy"
//                     height={298.13}
//                     src="https://kadschool.com/media/Kad_Teachers_Photos/Teacher_استاد_نیما_جواهری.webp"
//                     alt="استاد نیما جواهری"
//                   ></img>
//                 </span>
//                 <h3 className="teacher-name">استاد نیما جواهری</h3>
//               </Link>
//               <Link
//                 to="/Teachers/استاد-مهران-ترکمان"
//                 onClick={() => {
//                   scrollToTop();
//                 }}
//                 className="teacher"
//               >
//                 <span className="teacher-img-wrapper">
//                   <img
//                     width={224}
//                     loading="lazy"
//                     height={298.13}
//                     src="https://kadschool.com/media/Kad_Teachers_Photos/Teacher_استاد_مهران_ترکمان.webp"
//                     alt="استاد مهران ترکمان"
//                   ></img>
//                 </span>
//                 <h3 className="teacher-name">استاد مهران ترکمان</h3>
//               </Link>
//               <Link
//                 to="/Teachers/استاد-مهسا-عفتی"
//                 onClick={() => {
//                   scrollToTop();
//                 }}
//                 className="teacher"
//               >
//                 <span className="teacher-img-wrapper">
//                   <img
//                     width={224}
//                     loading="lazy"
//                     height={298.13}
//                     src="https://kadschool.com/media/Kad_Teachers_Photos/Teacher_استاد_مهسا_عفتی.webp"
//                     alt="استاد مهسا عفتی"
//                   ></img>
//                 </span>
//                 <h3 className="teacher-name">استاد مهسا عفتی</h3>
//               </Link>
//               <Link
//                 to="/Teachers/استاد-سارا-شریفی"
//                 onClick={() => {
//                   scrollToTop();
//                 }}
//                 className="teacher"
//               >
//                 <span className="teacher-img-wrapper">
//                   <img
//                     width={224}
//                     loading="lazy"
//                     height={298.13}
//                     src="https://kadschool.com/media/Kad_Teachers_Photos/Teacher_استاد_سارا_شریفی.webp"
//                     alt="استاد سارا شریفی"
//                   ></img>
//                 </span>
//                 <h3 className="teacher-name"> استاد سارا شریفی</h3>
//               </Link>
//               {/* <Link
//                 to="/Teachers/استاد-رضا-امیر"
//                 onClick={() => {
//                   scrollToTop();
//                 }}
//                 className="teacher"
//               >
//                 <span className="teacher-img-wrapper">
//                   <img
//                     width={224}
//                     loading="lazy"
//                     height={298.13}
//                     src="https://kadschool.com/Teachers/استاد-نیما-جواهری"
//                     alt="نیما جواهری"
//                   ></img>
//                 </span>
//                 <h3 className="teacher-name">استاد نیما جواهری</h3>
//               </Link> */}
//               <Link
//                 to="/Teachers/استاد-علیرضا-علمداری"
//                 onClick={() => {
//                   scrollToTop();
//                 }}
//                 className="teacher"
//               >
//                 <span className="teacher-img-wrapper">
//                   <img
//                     width={224}
//                     loading="lazy"
//                     height={298.13}
//                     src="https://kadschool.com/media/Kad_Teachers_Photos/Teacher_استاد_علیرضا_علمداری.webp"
//                     alt="مهندس علیرضا علمداری"
//                   ></img>
//                 </span>
//                 <h3 className="teacher-name">مهندس علیرضا علمداری</h3>
//               </Link>
//               <Link
//                 to="/Teachers/استاد-علیرضا-ایدلخانی"
//                 onClick={() => {
//                   scrollToTop();
//                 }}
//                 className="teacher"
//               >
//                 <span className="teacher-img-wrapper">
//                   <img
//                     width={224}
//                     loading="lazy"
//                     height={298.13}
//                     src="https://kadschool.com/media/Kad_Teachers_Photos/Teacher_استاد_علیرضا_ایدلخانی.webp"
//                     alt="مهندس علیرضا ایدلخانی"
//                   ></img>
//                 </span>
//                 <h3 className="teacher-name">مهندس علیرضا ایدلخانی</h3>
//               </Link>
//               <Link
//                 to="/not-found"
//                 onClick={() => {
//                   scrollToTop();
//                 }}
//                 className="teacher"
//               >
//                 <span className="teacher-img-wrapper">
//                   <img
//                     width={224}
//                     loading="lazy"
//                     height={298.13}
//                     src={teacher_img_6}
//                     alt="علیرضا احمدی"
//                   ></img>
//                 </span>
//                 <h3 className="teacher-name">علیرضا احمدی</h3>
//               </Link>
//             </div>
//             <span
//               onClick={() => {
//                 move_teacher("forward");
//               }}
//               className="resoan-back-btn"
//             >
//               <img src={leftIcon} alt="بعدی" width={47} height={47} />
//             </span>
//             <span
//               onClick={() => {
//                 move_teacher("back");
//               }}
//               className="resoan-back-btn rev"
//             >
//               <img src={leftIcon} alt="بعدی" width={47} height={47} />
//             </span>
//           </section>
//           <section className="good-students-wrapper mm-width">
//             <h2 className="semi-title">بخشی از رتبه‌های برتر کاد</h2>
//             <div className="good-students" ref={students_ref}>
//               <div className="good-student">
//                 <span className="good-student-img-wrapper">
//                   <img
//                     loading="lazy"
//                     width={224}
//                     height={298}
//                     src={good_students_1}
//                     alt="امین ساعی"
//                   ></img>
//                 </span>
//                 <h3 className="good-student-name">امین ساعی</h3>
//               </div>
//               <div className="good-student">
//                 <span className="good-student-img-wrapper">
//                   <img
//                     loading="lazy"
//                     width={224}
//                     height={298}
//                     src={good_students_2}
//                     alt="فاطمه حسینی لیاولی"
//                   ></img>
//                 </span>
//                 <h3 className="good-student-name">فاطمه حسینی لیاولی</h3>
//               </div>
//               <div className="good-student">
//                 <span className="good-student-img-wrapper">
//                   <img
//                     loading="lazy"
//                     width={224}
//                     height={298}
//                     src={good_students_3}
//                     alt="کیان حلاجی"
//                   ></img>
//                 </span>
//                 <h3 className="good-student-name">کیان حلاجی</h3>
//               </div>
//               <div className="good-student">
//                 <span className="good-student-img-wrapper">
//                   <img
//                     loading="lazy"
//                     width={224}
//                     height={298}
//                     src={good_students_4}
//                     alt="نرجس کریمیان‌زاده"
//                   ></img>
//                 </span>
//                 <h3 className="good-student-name">نرجس کریمیان‌زاده</h3>
//               </div>
//               <div className="good-student">
//                 <span className="good-student-img-wrapper">
//                   <img
//                     loading="lazy"
//                     width={224}
//                     height={298}
//                     src={good_students_5}
//                     alt="منیره گرفیروزجائی"
//                   ></img>
//                 </span>
//                 <h3 className="good-student-name">منیره گرفیروزجائی</h3>
//               </div>
//               <div className="good-student">
//                 <span className="good-student-img-wrapper">
//                   <img
//                     loading="lazy"
//                     width={224}
//                     height={298}
//                     src={good_students_6}
//                     alt="ساجده جلیلی"
//                   ></img>
//                 </span>
//                 <h3 className="good-student-name">ساجده جلیلی</h3>
//               </div>
//               <div className="good-student">
//                 <span className="good-student-img-wrapper">
//                   <img
//                     loading="lazy"
//                     width={224}
//                     height={298}
//                     src={good_students_7}
//                     alt="سید آمانج حسینی"
//                   ></img>
//                 </span>
//                 <h3 className="good-student-name">سید آمانج حسینی</h3>
//               </div>
//               <div className="good-student">
//                 <span className="good-student-img-wrapper">
//                   <img
//                     loading="lazy"
//                     width={224}
//                     height={298}
//                     src={good_students_8}
//                     alt="زیبا سادات حسینی‌نژاد"
//                   ></img>
//                 </span>
//                 <h3 className="good-student-name">زیبا سادات حسینی‌نژاد</h3>
//               </div>
//               <div className="good-student">
//                 <span className="good-student-img-wrapper">
//                   <img
//                     loading="lazy"
//                     width={224}
//                     height={298}
//                     src={good_students_9}
//                     alt="سانیا پورقاسمی"
//                   ></img>
//                 </span>
//                 <h3 className="good-student-name">سانیا پورقاسمی</h3>
//               </div>
//               <div className="good-student">
//                 <span className="good-student-img-wrapper">
//                   <img
//                     loading="lazy"
//                     width={224}
//                     height={298}
//                     src={good_students_10}
//                     alt="محسن قاسمی"
//                   ></img>
//                 </span>
//                 <h3 className="good-student-name">محسن قاسمی</h3>
//               </div>
//               <div className="good-student">
//                 <span className="good-student-img-wrapper">
//                   <img
//                     loading="lazy"
//                     width={224}
//                     height={298}
//                     src={good_students_11}
//                     alt="عرفان رجب پور"
//                   ></img>
//                 </span>
//                 <h3 className="good-student-name">عرفان رجب پور</h3>
//               </div>
//               <div className="good-student">
//                 <span className="good-student-img-wrapper">
//                   <img
//                     loading="lazy"
//                     width={224}
//                     height={298}
//                     src={good_students_12}
//                     alt="معصومه مسرور"
//                   ></img>
//                 </span>
//                 <h3 className="good-student-name">معصومه مسرور</h3>
//               </div>
//               <div className="good-student">
//                 <span className="good-student-img-wrapper">
//                   <img
//                     loading="lazy"
//                     width={224}
//                     height={298}
//                     src={good_students_13}
//                     alt="مهشید سلیمی"
//                   ></img>
//                 </span>
//                 <h3 className="good-student-name">مهشید سلیمی</h3>
//               </div>
//               <div className="good-student">
//                 <span className="good-student-img-wrapper">
//                   <img
//                     loading="lazy"
//                     width={224}
//                     height={298}
//                     src={good_students_14}
//                     alt="فاطمه مالو"
//                   ></img>
//                 </span>
//                 <h3 className="good-student-name">فاطمه مالو</h3>
//               </div>
//             </div>
//             <span
//               onClick={() => {
//                 move_student("forward");
//               }}
//               className="resoan-back-btn"
//             >
//               <img src={leftIcon} alt="بعدی" width={47} height={47} />
//             </span>
//             <span
//               onClick={() => {
//                 move_student("back");
//               }}
//               className="resoan-back-btn rev"
//             >
//               <img src={leftIcon} alt="بعدی" width={47} height={47} />
//             </span>
//           </section>
//           <section className="comments-on-kad-wrapper mm-width">
//             <h2 className="semi-title">نظر دوستاتون در مورد کاد</h2>
//             <div className="comment-img">
//               <div className={"comments cm-" + state.comment_pos}>
//                 <div className="home-comment">
//                   <p className="home-comment-text">
//                     من امسال در کلاس های فلسفه،ادبیات،عربی، درک و دریافت شعر و
//                     مشاوره موسسه کاد شرکت کردم کلاس ها همگی به شدت جذاب و عالی
//                     بود و کاری میکرد دانش آموز با شور و علاقه،سر کلاس حاضر بشه.
//                     پاسخگویی پشتیبانی هم خیلی سریع و خوب بود بی شک دانش آموز
//                     موسسه کاد بودن،از بهترین و به یادماندنی ترین و زیبا ترین
//                     تجربه های دوران تحصیل من خواهد بود. خیلی خوشحالم که با کاد
//                     آشنا شدم
//                   </p>
//                   <span className="home-user-wrapper">
//                     <span className="img-bgc">
//                       <img
//                         src={avatar}
//                         alt="اسم کاربر"
//                         width={80}
//                         height={96}
//                         className="home-comment-avatar-img"
//                       />
//                     </span>
//                     <span className="home-comment-user-name">
//                       نفیسه گل چشمه
//                     </span>
//                     <span className="home-comment-user-subject">انسانی</span>
//                   </span>
//                 </div>
//                 <div className="home-comment">
//                   <p className="home-comment-text">
//                     خب حقیقتش من کلاس های علوم فنون دکتر سبطی و همایش دکتر
//                     ترکمان و دکتر سودیان رو شرکت کردم و سطح استاد ها فوق العادس
//                     و نحوه تدریس هم عالیه در مورد تاثیری که برای من داشته اینه
//                     که راحت تر و سریع تر میتونم تست حل کنم گره های درسی هم که
//                     برای رفع اشکال داشتیم عالی بود و همه سوالام رو پاسخ میدادن
//                   </p>
//                   <span className="home-user-wrapper">
//                     <span className="img-bgc">
//                       <img
//                         src={avatar}
//                         alt="اسم کاربر"
//                         width={80}
//                         height={96}
//                         className="home-comment-avatar-img"
//                       />
//                     </span>
//                     <span className="home-comment-user-name">شیدا رضایی</span>
//                     <span className="home-comment-user-subject">انسانی</span>
//                   </span>
//                 </div>
//                 <div className="home-comment">
//                   <p className="home-comment-text">
//                     من در کلاسای فلسفه منطق استاد جواهری و ریاضی استاد حسینی و
//                     عربی ترکمان شرکت کردم خیلی راضی بودم ازشون سطح سوادشون بسیار
//                     عالی و قدرت بیانشون بسیار تاثیر گذار بود. خیلی ممنون از
//                     موسسه خوبتون درپناه حق باشید
//                   </p>
//                   <span className="home-user-wrapper">
//                     <span className="img-bgc">
//                       <img
//                         src={avatar}
//                         alt="اسم کاربر"
//                         width={80}
//                         height={96}
//                         className="home-comment-avatar-img"
//                       />
//                     </span>
//                     <span className="home-comment-user-name">محسن مرادی</span>
//                     <span className="home-comment-user-subject">انسانی</span>
//                   </span>
//                 </div>
//                 <div className="home-comment">
//                   <p className="home-comment-text">
//                     من در همه درس های انسانی کاد شرکت کردم و با اینکه از اسفند
//                     تو کلاسا حاضر شدم واقعا مفید بود مخصوصا فلسفه و منطق که برای
//                     فهم درست و کامل متن درس خیلی اهمیت داره.ریاضی هم که برای من
//                     از اول یک غول بود تا اخر سال کم کم قبحش برام ریخت و تونستم
//                     از درصد 7 به درصد 72 برسم.عربی و علوم فنون هم عالییییی بودن
//                   </p>
//                   <span className="home-user-wrapper">
//                     <span className="img-bgc">
//                       <img
//                         src={avatar}
//                         alt="اسم کاربر"
//                         width={80}
//                         height={96}
//                         className="home-comment-avatar-img"
//                       />
//                     </span>
//                     <span className="home-comment-user-name">نادیا هوشمند</span>
//                     <span className="home-comment-user-subject">انسانی</span>
//                   </span>
//                 </div>
//                 <div className="home-comment">
//                   <p className="home-comment-text">
//                     امسال شانس یاری نکرد نشد ۳ ماه آخرو استفاده کنم متاسفانه اما
//                     در کل کاد عالیه از هر نظر مخصوصا پشتیبانی و رفع اشکال شیش
//                     هیچ از بقیه موسسات جلوتره امسال هم احتمالا پشت کنکور میمونم
//                     و دوباره همه کلاس های انسانی رو ثبت نام میکنم
//                   </p>
//                   <span className="home-user-wrapper">
//                     <span className="img-bgc">
//                       <img
//                         src={avatar}
//                         alt="اسم کاربر"
//                         width={80}
//                         height={96}
//                         className="home-comment-avatar-img"
//                       />
//                     </span>
//                     <span className="home-comment-user-name">مهدی عبادی</span>
//                     <span className="home-comment-user-subject">انسانی</span>
//                   </span>
//                 </div>
//                 <div className="home-comment">
//                   <p className="home-comment-text">
//                     من توی کلاس ادبیات اختصاصی و عربی و فلسفه و دینی و زبان شرکت
//                     کردم و خیلی راضیم و خداروشکر نتیجش رو توی کنکور دیدم. این که
//                     توی اکثر جلسات بهمون تکلیف میدن و آزمون منظم ازمون میگیرن
//                     برای منی که نیازه زور بالا سرم باشه خیلی خوب بود. در کل
//                     ممنونم از همه استادای کاد
//                   </p>
//                   <span className="home-user-wrapper">
//                     <span className="img-bgc">
//                       <img
//                         src={avatar}
//                         alt="اسم کاربر"
//                         width={80}
//                         height={96}
//                         className="home-comment-avatar-img"
//                       />
//                     </span>
//                     <span className="home-comment-user-name">
//                       محدثه خوش باور
//                     </span>
//                     <span className="home-comment-user-subject">انسانی</span>
//                   </span>
//                 </div>
//                 <div className="home-comment">
//                   <p className="home-comment-text">
//                     من امسال از آبان کلاس ها رو ثبت نام کردن قبلش یک موسسه دیگه
//                     بودم که به خاطر حاشیه های زیاد سر کلاس ترجیح دادم با این که
//                     هزینه کلاس رو بهم بر نگردوندن بیام کاد ثبت نام کنن خداییش
//                     کارتون درسته از همه نظر به همه دوستای کنکوری سال دیگم هم
//                     معرفیتون کردم
//                   </p>
//                   <span className="home-user-wrapper">
//                     <span className="img-bgc">
//                       <img
//                         src={avatar}
//                         alt="اسم کاربر"
//                         width={80}
//                         height={96}
//                         className="home-comment-avatar-img"
//                       />
//                     </span>
//                     <span className="home-comment-user-name">گلنوش خرمی</span>
//                     <span className="home-comment-user-subject">انسانی</span>
//                   </span>
//                 </div>
//                 <div className="home-comment">
//                   <p className="home-comment-text">
//                     من اوایل که اومدم کاد چون بعضی دوستام موسسات دیگه رفته بودن
//                     نگران بودم که نکنه زیاد کلاسا خوب نباشن اما هر چی رفتم جلو
//                     خیالم راحت تر شد خوبی کاد نسبت به خیلی از کلاسای دیگه اینه
//                     که جو دانش اموزای کلاساش با بقیه خیلی متفاوته یک جورایی
//                     انگار گزینش شدن و همه دنبال درسن و خب این خیلی به من کمک کرد
//                     بر خلاف همون دوستام که از وسطای سال درگیر حرف این معلم و اون
//                     معلم شدن. آزمون ها و بانک تستی هم که طی سال دادن واقعا عالی
//                     بود و من همه تست ها رو تحلیل میکردم و خیلی مشابهش توی کنکور
//                     اومد
//                   </p>
//                   <span className="home-user-wrapper">
//                     <span className="img-bgc">
//                       <img
//                         src={avatar}
//                         alt="اسم کاربر"
//                         width={80}
//                         height={96}
//                         className="home-comment-avatar-img"
//                       />
//                     </span>
//                     <span className="home-comment-user-name">محمد حسینی</span>
//                     <span className="home-comment-user-subject">انسانی</span>
//                   </span>
//                 </div>
//               </div>
//               <div className="astronut-lap-top">
//                 <Lottie options={astronut_laptop_options} />
//               </div>
//             </div>
//           </section>
//           <section className="jump-on-spaceship-wrapper">
//             <span className="right-img-wrapper jump-img-wrapper">
//               <img
//                 src={jump_img}
//                 width={72}
//                 height={72}
//                 alt="سوار سفینه کاد شو"
//               />
//             </span>
//             <div className="forms-data">
//               <span className="jump-titles-wrapper">
//                 <h2 className="jump-title">
//                   اگه هنوزم سوالی داری یا از چیزی نگرانی کاد با تک تک اتم هاش
//                   کنارته
//                 </h2>
//                 <h3 className="seconf-jum-title">
//                   کافیه مشخصاتت رو بهمون پیام بدی تا در سریع ترین زمان باهات
//                   تماس بگیریم
//                 </h3>
//               </span>
//               <span className="jump-input-wrapper">
//                 <input
//                   type="text"
//                   placeholder="نام و نام خانوادگی"
//                   onInput={({ target }) => {
//                     handle_name(target);
//                   }}
//                 />
//               </span>
//               <span className="jump-input-wrapper">
//                 <input
//                   type="number"
//                   placeholder="شماره تلفن"
//                   onInput={({ target }) => {
//                     handle_phone(target);
//                   }}
//                 />
//                 {state.phone_err === "ok" && state.name_err === "ok" ? (
//                   <span
//                     onClick={() => {
//                       send_gift_request();
//                     }}
//                     className="fly-spaceship-btn"
//                   >
//                     {state.pause ? <LittleLoading /> : "پرواز سفینه"}
//                   </span>
//                 ) : (
//                   <span className="fly-spaceship-btn no-fly">پرواز سفینه</span>
//                 )}
//               </span>
//             </div>
//             <span className="left-img-wrapper jump-img-wrapper">
//               <img
//                 src={jump_img}
//                 width={72}
//                 height={72}
//                 alt="سوار سفینه کاد شو"
//               />
//             </span>
//             <span className="jump-error-place">
//               {state.final_message ? (
//                 <span className="jump-final-msg">{state.final_message}</span>
//               ) : (
//                 ""
//               )}
//               {state.name_err && state.name_err !== "ok" ? (
//                 <span className="jump-err">{state.name_err}</span>
//               ) : (
//                 ""
//               )}
//               {state.phone_err && state.phone_err !== "ok" ? (
//                 <span className="jump-err">{state.phone_err}</span>
//               ) : (
//                 ""
//               )}
//             </span>
//           </section>
//           <HomeFooter />
//         </div>
//       </>
//     );
//   }
// }

export default HomePage;
