import React, { Component } from "react";
import { Helmet } from "react-helmet";
import withWebsiteData from "../../hoc/with-website-data";
import HomeHeader from "../../home/header/home-header";
import HomeFooter from "../../home/footer/home-footer";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import LittleLoading from "../../reuseables/little-loading";
import axios from "axios";

import hero_img from "../../../assets/images/campaign-hero-img.webp";
import comment_img from "../../../assets/images/comment-img-apolo.webp";
import jump_img from "../../../assets/images/space-ship-new.webp";
import arrow from "../../../assets/images/campaign-arrow-left.webp";

import good_students_1 from "../../../assets/images/svg/g-s-1.svg";
import good_students_2 from "../../../assets/images/svg/g-s-13.svg";
import good_students_3 from "../../../assets/images/svg/g-s-12.svg";
import good_students_4 from "../../../assets/images/svg/g-s-10.svg";
import good_students_5 from "../../../assets/images/svg/g-s-11.svg";
import good_students_6 from "../../../assets/images/svg/g-s-9.svg";
class Apollo_11 extends Component {
  state = {
    students_count: 0,
    under_1000_count: 0,
    not_satisfied_count: 0,
    konkor_match_count: 0,
    grade_box: false,
    subject_box: false,
    name: false,
    name_err: false,
    phone: false,
    phone_err: false,
    subject: false,
    grade: false,
    spotlight: 0,
    active_cm: 0,
    rank_dot: 0,
    teacher_dot: 0,
    res_rank_dot: 0,
    code: false,
    signUp: false,
    grade_err: false,
    subject_err: false,
    res_teacher_dot: 0,
    pause: false,
    been_before: false,
    code_err: false,
    entry_code: false,
    user_id: false,
    why_trust: [
      {
        id: 0,
        title: "رفع اشکال فضایی !",
        text: "سوالی توی کاد با وجود استادای حرفه‌ای و دستیار های خوبشون بی جواب نمیمونه. همه سوالات سریعا پاسخ داده میشه.",
      },
      {
        id: 1,
        title: "پوشش کل کهکشان !",
        text: "توی کاد همه آموزش‌ها به بهترین شکل و مستقل از مابقی دوره‌ها هستن. چیزی نیست که بهت آموزش داده نشه. از صفر تا صد اون مبحث رو به ما بسپر.",
      },
      {
        id: 2,
        title: "ماموریت های آمادگی !",
        text: "هر ماه توی کاد آزمون هایی رو بده که نزدیک ۷۱ درصد مثل کنکور سراسری باشن. با خیال راحت برای کنکورت آماده باش.",
      },
      {
        id: 3,
        title: "تکالیف ماموریت !",
        text: "توی کاد بعد از تموم شدن کلاس همچی تموم نمیشه بلکه کلی تکلیف و تمرین داریم که قبل هر جلسه تصحیح میشه و نمره اش بهت داده میشه.",
      },
      {
        id: 4,
        title: "پشتیبانی ماموریت !",
        text: "توی کاد پشتیبان ها قصدشون شرکت شما در کلاس نیست بلکه میخوان مثل یک دوست و مشاور تمامی راهنمایی ها رو با صبر حوصله در اختیارت بزارن و سوالی بی جواب نمونه.",
      },
      {
        id: 5,
        title: "مثل خانواده بودن !",
        text: "توی کاد هزینه‌های کلاست میتونه قسطی باشه که به خانواده‌ات فشار نیاد. ما توی کاد مثل یک خانواده ایم.",
      },
      {
        id: 6,
        title: "بدون هزینه اضافی !",
        text: "توی کاد برای دیدن کلاس‌های آفلاینت فقط کافیه یکبار هزینه اینترنت پرداخت کنی و بعدش کاد هواتو داره.",
      },
      {
        id: 7,
        title: "تضمین بازگشت !",
        text: "توی کاد اگه پیشرفت نکنی و هرروز بهتر نشی در پایان دوره کل هزینه بهت برگشت داده میشه. کاد جای متوسط بودن نیست.",
      },
    ],
  };
  constructor(props) {
    super(props);
    this.comments = React.createRef();
    this.teachers = React.createRef();
    this.ranks = React.createRef();
    this.box = React.createRef();
    this.name_bug = React.createRef();
  }
  componentDidMount() {
    setTimeout(() => {
      this.handle_count(71, "konkor_match_count");
      this.handle_count(28, "not_satisfied_count");
      this.handle_count(561, "under_1000_count");
      this.handle_count(3875, "students_count");
    }, 1000);
    this.set_spotlight();
  }
  handle_count = (count, name) => {
    if (name === "konkor_match_count") {
      const match_interval = setInterval(() => {
        let counts = this.state.konkor_match_count;
        if (count === counts) {
          clearInterval(match_interval);
        } else {
          counts = counts + 1;
          this.setState({ konkor_match_count: counts });
        }
      }, 50);
    }
    if (name === "not_satisfied_count") {
      const not_interval = setInterval(() => {
        let counts = this.state.not_satisfied_count;
        if (count === counts) {
          clearInterval(not_interval);
        } else {
          counts = counts + 1;
          this.setState({ not_satisfied_count: counts });
        }
      }, 100);
    }
    if (name === "under_1000_count") {
      const under_interval = setInterval(() => {
        let counts = this.state.under_1000_count;
        if (count === counts) {
          clearInterval(under_interval);
        } else {
          counts = counts + 1;
          this.setState({ under_1000_count: counts });
        }
      }, 1);
    }
    if (name === "students_count") {
      const students_interval = setInterval(() => {
        let counts = this.state.students_count;
        if (count === counts) {
          clearInterval(students_interval);
        } else {
          counts = counts + 5;
          this.setState({ students_count: counts });
        }
      }, 1);
    }
  };
  set_spotlight = () => {
    setInterval(() => {
      const spotlight = this.state.spotlight;
      const why_trust = [...this.state.why_trust];
      if (spotlight !== why_trust.length - 1) {
        this.setState({ spotlight: spotlight + 1 });
      } else {
        this.setState({ spotlight: 0 });
      }
    }, 3000);
  };
  handel_teacher_carousel = (num) => {
    const all_teachers = [...this.teachers.current.children];
    all_teachers.forEach((t) => {
      t.style.transform = `translateX(calc(${3 * num * 100}% + ${
        3 * num * 27
      }px))`;
    });
    this.setState({ teacher_dot: num });
  };
  handel_ranks_carousel = (num) => {
    const all_ranks = [...this.ranks.current.children];
    all_ranks.forEach((t) => {
      t.style.transform = `translateX(calc(${2 * num * 100}% + ${
        2 * num * 27
      }px))`;
    });
    this.setState({ rank_dot: num });
  };
  handle_cm = (state) => {
    const all_cms = [...this.comments.current.children];
    const len = all_cms.length - 1;
    const active_cm = this.state.active_cm;
    let new_active = 0;
    if (state === "next") {
      if (active_cm !== len) {
        new_active = active_cm + 1;
      } else {
        new_active = 0;
      }
    } else if (state === "prev") {
      if (active_cm !== 0) {
        new_active = active_cm - 1;
      } else {
        new_active = len;
      }
    }
    all_cms.forEach((cm) => {
      cm.style.transform = `translateX(${new_active * 100}%)`;
    });
    // console.log(new_active);
    this.setState({ active_cm: new_active });
  };
  res_carousel = (num, refrence) => {
    let childs;
    if (refrence === "teachers") {
      childs = [...this.teachers.current.children];
      this.setState({ res_teacher_dot: num });
    } else if (refrence === "ranks") {
      childs = [...this.ranks.current.children];
      this.setState({ res_rank_dot: num });
    }

    childs.forEach((c) => {
      c.style.transform = `translateX(calc(${2 * num * 100}% + ${
        2 * num * 10
      }px))`;
    });
  };
  handle_custom_input = (entry) => {
    const grade_box = !this.state.grade_box;
    const subject_box = !this.state.subject_box;
    if (entry === "grade") {
      this.setState({ grade_box, subject_box: false });
    } else if (entry === "subject") {
      this.setState({ subject_box, grade_box: false });
    }
  };
  handle_grade = (num) => {
    let grade = false;
    switch (num) {
      case 10:
        grade = {};
        grade.num = 10;
        grade.text = "دهم";
        break;
      case 11:
        grade = {};
        grade.num = 11;
        grade.text = "یازدهم";
        break;
      case 12:
        grade = {};
        grade.num = 12;
        grade.text = "دوازدهم";
        break;
    }
    this.setState({ grade, grade_box: false });
  };
  handle_subject = (num) => {
    let subject = false;
    switch (num) {
      case 0:
        subject = {};
        subject.num = 10;
        subject.text = "ریاضی";
        break;
      case 1:
        subject = {};
        subject.num = 11;
        subject.text = "تجربی";
        break;
      case 2:
        subject = {};
        subject.num = 12;
        subject.text = "انسانی";
        break;
    }
    this.setState({ subject, subject_box: false });
  };
  handle_name = (value) => {
    let name_err;
    let name;
    const persianRegex = /^[\u0621-\u06AB\u06C0-\u06FF\s]+$/;
    if (value.length < 3) {
      name = false;
      name_err = "اسم وارد شده کوتاه است";
    } else if (!persianRegex.test(value)) {
      name = false;
      name_err = "کاراکتر غیر مجاز";
    } else if (value.length > 50) {
      name_err = "اسم وارد شده طولانی است";
      name = false;
    } else {
      name_err = false;
      name = value;
    }
    this.setState({ name, name_err });
  };
  submit_user = () => {
    const name = this.state.name;
    const grade = this.state.grade;
    const subject = this.state.subject;
    const phone = this.state.phone;
    if (!name) {
      this.setState({ name_err: "نام وارد نشده" });
    } else if (!grade) {
      this.setState({ grade_err: "لطفا یک پایه را انتخاب کنید" });
    } else if (!subject) {
      this.setState({ subject_err: "لطفا یک رشته را انتخاب کنید" });
    } else {
      this.setState({
        name_err: false,
        grade_err: false,
        subject_err: false,
        pause: true,
      });
      const obj = {
        phone_number: phone,
        name: name,
        grade: grade.num,
        major: subject.num,
        is_from_campaign_mordad_1402: true,
      };
      axios
        .post(`https://kadschool.com/backend/kad_api/register_user`, obj)
        .then((res) => {
          let data = res.data;
          axios
            .get(`https://kadschool.com/backend/kad_api/user/${data.user_id}`)
            .then((res) => {
              const user = res.data;
              // console.log(user);
              this.props.inside_user(user);
              this.setState({ pause: false });
            })
            .catch((err) => this.props.handle_error(err));
        })
        .catch((err) => this.props.handle_error(err));
    }
  };
  handle_phone = (value) => {
    let phone_err;
    let phone;
    if (!value.startsWith("09")) {
      phone_err = "شماره باید با ۰۹ شروع شود";
      phone = false;
    } else if (value.length !== 11) {
      phone_err = "شماره باید ۱۱ رقم باشد";
      phone = false;
    } else {
      phone = value;
    }
    this.setState({ phone, phone_err });
  };
  send_code = () => {
    this.setState({ pause: true });
    axios
      .get(
        `https://kadschool.com/backend/kad_api/verify_phone_number/${this.state.phone}`
      )
      .then((res) => {
        this.setState({ pause: false });
        const { been_before, user_id, verification_code } = res.data;
        //console.log(verification_code);
        localStorage.setItem(
          "kad-phone-number",
          JSON.stringify(this.state.phone_number)
        );
        this.setState({ no_more_code: true });
        if (been_before) {
          this.setState({ user_id });
        }
        this.setState({ code: verification_code, been_before });
      })
      .catch((err) => this.props.handle_error(err));
  };
  fill_code = (value) => {
    this.setState({ entry_code: value });
  };
  check_code = () => {
    const code = this.state.code;
    const entry_code = this.state.entry_code;
    const been_before = this.state.been_before;
    this.setState({ pause: true });
    if (parseInt(code) === parseInt(entry_code)) {
      axios
        .get(
          `https://kadschool.com/backend/kad_api/apollo11_add_phone_number/${this.state.phone}`
        )
        .then((res) => {
          //console.log(res.data);
        })
        .catch((err) => {
          this.props.handle_error(err);
        });
      if (been_before) {
        axios
          .get(
            `https://kadschool.com/backend/kad_api/user/${this.state.user_id}`
          )
          .then((res) => {
            this.setState({ pause: false });
            const user = res.data;
            this.props.inside_user(user);
            // window.location.pathname = "/Dashboard";
          })
          .catch((err) => {
            this.props.handle_error(err);
          });
      } else {
        this.setState({ signUp: true, pause: false }, () => {
          this.name_bug.current.value = "";
        });
      }
    } else {
      const code_err = "کد وارد شده اشتباه است";
      this.setState({ code_err });
    }
  };
  render() {
    const { user } = this.props;
    return (
      <>
        <Helmet>
          <title>کمپین آپولو ۱۱ | کمپین تابستانه کاد | کاد</title>
          <meta
            name="description"
            content="کمپین آپولو ۱۱ اولین سفینه فضایی کنکور برای اینکه اولین باشید تا روی سیاره کنکور با موفقیت فرود بیاید. با کاد با خیال راحت برای موفقیت به کنکور سفر کنید "
          />
          <meta
            name="keywords"
            content=" کمپ تابستانه کاد, آپولو ۱۱, آمادگی کنکور ۱۴۰۳, کمپ کنکور, کاد"
          />
        </Helmet>
        <div className="campaign-wrapper apolo-11">
          <HomeHeader user={user} />
          <section className="hero-part mm-width">
            <div className="hero-text-wrapper">
              <span className="hero-title">سلام !</span>
              <h1 className="hero-title">به کمپین آپولو ۱۱ کاد خوش اومدین</h1>
              <h2 className="semi-hero-title">اصلا چرا آپولو ۱۱ ؟</h2>
              <p className="hero-desc">
                توی ماموریت آپولو 11 برای اولین بار فضانورد های ناسا تونستن
                اولین قدمشون رو روی ماه بذارن حالا کاد قراره توی کمپین آپولو 11
                بهت با ساعت ها تدریس رایگان و ساعت ها مشاوره شخصی رایگان کمک کنه
                قدم های اولت رو محکم برداری
              </p>
              <p
                onClick={() => {
                  window.scrollTo({
                    top: this.box.current.getBoundingClientRect().y - 200,
                    behavior: "smooth",
                  });
                }}
                className="lets-do-apolo"
              >
                بریم آپولو هوا کنیم
              </p>
            </div>
            <div className="hero-img">
              <span className="hero-title-res">سلام !</span>
              <h1 className="hero-title-res">
                به کمپین آپولو ۱۱ کاد خوش اومدین
              </h1>
              <img width={625} height={330} src={hero_img} alt="آپولو ۱۱" />
            </div>
          </section>
          <section className="video-section-wrapper">
            {/* <div className="aparat-video-wrapper">
              <div className="h_iframe-aparat_embed_frame">
                <span style={{ display: "block", paddingTop: "57%" }}></span>
                <iframe
                  allowFullScreen={true}
                  webkitallowfullscreen={true.toString()}
                  mozallowfullscreen={true.toString()}
                  src="https://www.aparat.com/video/video/embed/videohash/ECMpS/vt/frame"
                ></iframe>
              </div>
            </div> */}
            <p
              onClick={() => {
                window.scrollTo({
                  top: this.box.current.getBoundingClientRect().y + 300,
                  behavior: "smooth",
                });
              }}
              className="lets-do-apolo"
            >
              بریم آپولو هوا کنیم
            </p>
          </section>
          <section className="kad-glories mm-width">
            <h2 className="kad-glories-title">تاریخ فتوحات کاد</h2>
            <div className="kad-glories-wrapper">
              <span className="kad-glory-item">
                <span className="glory-count">{this.state.students_count}</span>
                <h3 className="glory-title">دانش آموز تا به امروز</h3>
              </span>
              <span className="kad-glory-item">
                <span className="glory-count">
                  {this.state.under_1000_count}
                </span>
                <h3 className="glory-title">رتبه زیر 1000</h3>
              </span>
              <span className="kad-glory-item">
                <span className="glory-count">
                  {this.state.not_satisfied_count}
                </span>
                <h3 className="glory-title">نفر عدم رضایت از کاد</h3>
              </span>
              <span className="kad-glory-item">
                <span className="glory-count">
                  {this.state.konkor_match_count}
                </span>
                <h3 className="glory-title">درصد تطابق با کنکور</h3>
              </span>
            </div>
          </section>
          <section className="why-trust-kad">
            <h2 className="why-trust-kad-title">چرا با کاد همسفر بشیم ؟</h2>
            <div className="kad-trust-items-wrapper mm-width">
              {this.state.why_trust.map((wt) => (
                <div
                  className={
                    this.state.spotlight === wt.id
                      ? "trust-item spotlight"
                      : "trust-item"
                  }
                  key={wt.id}
                >
                  <h3 className="trust-item-title">{wt.title}</h3>
                  <p className="trust-item-text">{wt.text}</p>
                </div>
              ))}
            </div>
          </section>
          <section className="ranks-teachers-wrapper mm-width">
            <div className="teachers-wrapper-title same-col">
              <h2 className="section-title">همراهان شما در این سفر</h2>
              <div className="teachers-wrapper" ref={this.teachers}>
                <Link
                  to="/Teachers/استاد-عماد-فیض-آبادی"
                  className="teacher-wrapper"
                >
                  <img
                    loading="lazy"
                    width={204}
                    height={272}
                    src="https://kadschool.com/media/Kad_Teachers_Photos/Teacher_استاد_عماد_فیض_آبادی.webp"
                    alt="استاد عماد فیض آبادی"
                  />
                </Link>
                <Link
                  to="/Teachers/استاد-حمید-سودیان"
                  className="teacher-wrapper"
                >
                  <img
                    loading="lazy"
                    width={204}
                    height={272}
                    src="https://kadschool.com/media/Kad_Teachers_Photos/Teacher_استاد_حمید_سودیان.webp"
                    alt="استاد حمید سودیان"
                  />
                </Link>
                <Link
                  to="/Teachers/استاد-آروین-حسینی"
                  className="teacher-wrapper"
                >
                  <img
                    loading="lazy"
                    width={204}
                    height={272}
                    src="https://kadschool.com/media/Kad_Teachers_Photos/Teacher_استاد_آروین_حسینی.webp"
                    alt="استاد آروین حسینی"
                  />
                </Link>
                <Link
                  to="/Teachers/استاد-حمید-سودیان"
                  className="teacher-wrapper"
                >
                  <img
                    loading="lazy"
                    width={204}
                    height={272}
                    src="https://kadschool.com/media/Kad_Teachers_Photos/Teacher_استاد_حمید_سودیان.webp"
                    alt="استاد حمید سودیان"
                  />
                </Link>
                <Link
                  to="/Teachers/استاد-امیر-محمد-دهقان"
                  className="teacher-wrapper"
                >
                  <img
                    loading="lazy"
                    width={204}
                    height={272}
                    src="https://kadschool.com/media/Kad_Teachers_Photos/Teacher_استاد_امیر_محمد_دهقان.webp"
                    alt="استاد امیر محمد دهقان"
                  />
                </Link>
                <Link
                  to="/Teachers/استاد-هامون-سبطی"
                  className="teacher-wrapper"
                >
                  <img
                    loading="lazy"
                    width={204}
                    height={272}
                    src="https://kadschool.com/media/Kad_Teachers_Photos/Teacher_استاد_هامون_سبطی.webp"
                    alt="استاد هامون سبطی"
                  />
                </Link>
                <Link
                  to="/Teachers/استاد-نیما-جواهری"
                  className="teacher-wrapper"
                >
                  <img
                    loading="lazy"
                    width={204}
                    height={272}
                    src="https://kadschool.com/media/Kad_Teachers_Photos/Teacher_استاد_نیما_جواهری.webp"
                    alt="استاد نیما جواهری"
                  />
                </Link>
                <Link
                  to="/Teachers/استاد-مهران-ترکمان"
                  className="teacher-wrapper"
                >
                  <img
                    loading="lazy"
                    width={204}
                    height={272}
                    src="https://kadschool.com/media/Kad_Teachers_Photos/Teacher_استاد_مهران_ترکمان.webp"
                    alt="استاد مهران ترکمان"
                  />
                </Link>
                <Link
                  to="/Teachers/استاد-مهسا-عفتی"
                  className="teacher-wrapper"
                >
                  <img
                    loading="lazy"
                    width={204}
                    height={272}
                    src="https://kadschool.com/media/Kad_Teachers_Photos/Teacher_استاد_مهسا_عفتی.webp"
                    alt="استاد مهسا عفتی"
                  />
                </Link>
                <Link
                  to="/Teachers/استاد-سارا-شریفی"
                  className="teacher-wrapper"
                >
                  <img
                    loading="lazy"
                    width={204}
                    height={272}
                    src="https://kadschool.com/media/Kad_Teachers_Photos/Teacher_استاد_سارا_شریفی.webp"
                    alt="استاد سارا شریفی"
                  />
                </Link>
                <Link to="/Teachers/استاد-رضا-امیر" className="teacher-wrapper">
                  <img
                    loading="lazy"
                    width={204}
                    height={272}
                    src="https://kadschool.com/media/Kad_Teachers_Photos/Teacher_استاد_نیما_جواهری.webp"
                    alt="رضا امیر"
                  />
                </Link>
                <Link
                  to="/Teachers/استاد-علیرضا-علمداری"
                  className="teacher-wrapper"
                >
                  <img
                    loading="lazy"
                    width={204}
                    height={272}
                    src="https://kadschool.com/media/Kad_Teachers_Photos/Teacher_استاد_علیرضا_علمداری.webp"
                    alt="مهندس علیرضا علمداری"
                  />
                </Link>
                <Link
                  to="/Teachers/استاد-علیرضا-ایدلخانی"
                  className="teacher-wrapper"
                >
                  <img
                    loading="lazy"
                    width={204}
                    height={272}
                    src="https://kadschool.com/media/Kad_Teachers_Photos/Teacher_استاد_علیرضا_ایدلخانی.webp"
                    alt="مهندس علیرضا ایدلخانی"
                  />
                </Link>
              </div>
              <div className="dots-item-wrapper">
                <span
                  className={
                    this.state.teacher_dot === 0 ? "dot active" : "dot"
                  }
                  onClick={() => {
                    this.handel_teacher_carousel(0);
                  }}
                ></span>
                <span
                  className={
                    this.state.teacher_dot === 1 ? "dot active" : "dot"
                  }
                  onClick={() => {
                    this.handel_teacher_carousel(1);
                  }}
                ></span>
                <span
                  className={
                    this.state.teacher_dot === 2 ? "dot active" : "dot"
                  }
                  onClick={() => {
                    this.handel_teacher_carousel(2);
                  }}
                ></span>
                <span
                  className={
                    this.state.teacher_dot === 3 ? "dot active" : "dot"
                  }
                  onClick={() => {
                    this.handel_teacher_carousel(3);
                  }}
                ></span>
                <span
                  className={
                    this.state.teacher_dot === 4 ? "dot active" : "dot"
                  }
                  onClick={() => {
                    this.handel_teacher_carousel(4);
                  }}
                ></span>
              </div>
              <div className="dots-item-wrapper res">
                <span
                  className={
                    this.state.res_teacher_dot === 0 ? "dot active" : "dot"
                  }
                  onClick={() => {
                    this.res_carousel(0, "teachers");
                  }}
                ></span>
                <span
                  className={
                    this.state.res_teacher_dot === 1 ? "dot active" : "dot"
                  }
                  onClick={() => {
                    this.res_carousel(1, "teachers");
                  }}
                ></span>
                <span
                  className={
                    this.state.res_teacher_dot === 2 ? "dot active" : "dot"
                  }
                  onClick={() => {
                    this.res_carousel(2, "teachers");
                  }}
                ></span>
                <span
                  className={
                    this.state.res_teacher_dot === 3 ? "dot active" : "dot"
                  }
                  onClick={() => {
                    this.res_carousel(3, "teachers");
                  }}
                ></span>
                <span
                  className={
                    this.state.res_teacher_dot === 4 ? "dot active" : "dot"
                  }
                  onClick={() => {
                    this.res_carousel(4, "teachers");
                  }}
                ></span>
                <span
                  className={
                    this.state.res_teacher_dot === 5 ? "dot active" : "dot"
                  }
                  onClick={() => {
                    this.res_carousel(5, "teachers");
                  }}
                ></span>
                <span
                  className={
                    this.state.res_teacher_dot === 6 ? "dot active" : "dot"
                  }
                  onClick={() => {
                    this.res_carousel(6, "teachers");
                  }}
                ></span>
              </div>
            </div>
            <div className="ranks-wrapper-title same-col">
              <h2 className="section-title">مسافرین قبلی این ماموریت</h2>
              <div className="teachers-wrapper" ref={this.ranks}>
                <div className="teacher-wrapper">
                  <img
                    loading="lazy"
                    width={204}
                    height={272}
                    src={good_students_1}
                    alt=""
                  />
                </div>
                <div className="teacher-wrapper">
                  <img
                    loading="lazy"
                    width={204}
                    height={272}
                    src={good_students_2}
                    alt=""
                  />
                </div>
                <div className="teacher-wrapper">
                  <img
                    loading="lazy"
                    width={204}
                    height={272}
                    src={good_students_3}
                    alt=""
                  />
                </div>
                <div className="teacher-wrapper">
                  <img
                    loading="lazy"
                    width={204}
                    height={272}
                    src={good_students_4}
                    alt=""
                  />
                </div>
                <div className="teacher-wrapper">
                  <img
                    loading="lazy"
                    width={204}
                    height={272}
                    src={good_students_5}
                    alt=""
                  />
                </div>
                <div className="teacher-wrapper">
                  <img
                    loading="lazy"
                    width={204}
                    height={272}
                    src={good_students_6}
                    alt=""
                  />
                </div>
              </div>
              <div className="dots-item-wrapper">
                <span
                  className={this.state.rank_dot === 0 ? "dot active" : "dot"}
                  onClick={() => {
                    this.handel_ranks_carousel(0);
                  }}
                ></span>
                <span
                  className={this.state.rank_dot === 1 ? "dot active" : "dot"}
                  onClick={() => {
                    this.handel_ranks_carousel(1);
                  }}
                ></span>
                <span
                  className={this.state.rank_dot === 2 ? "dot active" : "dot"}
                  onClick={() => {
                    this.handel_ranks_carousel(2);
                  }}
                ></span>
              </div>
              <div className="dots-item-wrapper res">
                <span
                  className={
                    this.state.res_rank_dot === 0 ? "dot active" : "dot"
                  }
                  onClick={() => {
                    this.res_carousel(0, "ranks");
                  }}
                ></span>
                <span
                  className={
                    this.state.res_rank_dot === 1 ? "dot active" : "dot"
                  }
                  onClick={() => {
                    this.res_carousel(1, "ranks");
                  }}
                ></span>
                <span
                  className={
                    this.state.res_rank_dot === 2 ? "dot active" : "dot"
                  }
                  onClick={() => {
                    this.res_carousel(2, "ranks");
                  }}
                ></span>
              </div>
            </div>
          </section>
          <section className="commnets-part">
            <h2 className="section-title">بخشی از نظرات درباره کاد </h2>
            <div className="comments-stage">
              <div className="content-controll mm-width">
                <span
                  className="move-arrow prev"
                  onClick={() => {
                    this.handle_cm("prev");
                  }}
                >
                  <img
                    loading="lazy"
                    src={arrow}
                    width={12}
                    height={21}
                    alt="بعدی"
                  />
                </span>
                <div className="comments-wrapper">
                  <div className="apolo-comments" ref={this.comments}>
                    <span className="apolo-comment">
                      <span className="apolo-cm-name">
                        نفیسه گل چشمه - انسانی
                      </span>
                      <span className="apolo-cm-text">
                        من امسال در کلاس های فلسفه،ادبیات،عربی، درک و دریافت شعر
                        و مشاوره موسسه کاد شرکت کردم کلاس ها همگی به شدت جذاب و
                        عالی بود و کاری میکرد دانش آموز با شور و علاقه،سر کلاس
                        حاضر بشه. پاسخگویی پشتیبانی هم خیلی سریع و خوب بود بی شک
                        دانش آموز موسسه کاد بودن،از بهترین و به یادماندنی ترین و
                        زیبا ترین تجربه های دوران تحصیل من خواهد بود. خیلی
                        خوشحالم که با کاد آشنا شدم
                      </span>
                    </span>
                    <span className="apolo-comment">
                      <span className="apolo-cm-name">شیدا رضایی - انسانی</span>
                      <span className="apolo-cm-text">
                        خب حقیقتش من کلاس های علوم فنون دکتر سبطی و همایش دکتر
                        ترکمان و دکتر سودیان رو شرکت کردم و سطح استاد ها فوق
                        العادس و نحوه تدریس هم عالیه در مورد تاثیری که برای من
                        داشته اینه که راحت تر و سریع تر میتونم تست حل کنم گره
                        های درسی هم که برای رفع اشکال داشتیم عالی بود و همه
                        سوالام رو پاسخ میدادن
                      </span>
                    </span>
                    <span className="apolo-comment">
                      <span className="apolo-cm-name">محسن مرادی - انسانی</span>
                      <span className="apolo-cm-text">
                        من در کلاسای فلسفه منطق استاد جواهری و ریاضی استاد حسینی
                        و عربی ترکمان شرکت کردم خیلی راضی بودم ازشون سطح سوادشون
                        بسیار عالی و قدرت بیانشون بسیار تاثیر گذار بود. خیلی
                        ممنون از موسسه خوبتون درپناه حق باشید
                      </span>
                    </span>
                    <span className="apolo-comment">
                      <span className="apolo-cm-name">
                        نادیا هوشمند - انسانی
                      </span>
                      <span className="apolo-cm-text">
                        من در همه درس های انسانی کاد شرکت کردم و با اینکه از
                        اسفند تو کلاسا حاضر شدم واقعا مفید بود مخصوصا فلسفه و
                        منطق که برای فهم درست و کامل متن درس خیلی اهمیت
                        داره.ریاضی هم که برای من از اول یک غول بود تا اخر سال کم
                        کم قبحش برام ریخت و تونستم از درصد 7 به درصد 72
                        برسم.عربی و علوم فنون هم عالییییی بودن
                      </span>
                    </span>
                    <span className="apolo-comment">
                      <span className="apolo-cm-name">مهدی عبادی - انسانی</span>
                      <span className="apolo-cm-text">
                        امسال شانس یاری نکرد نشد ۳ ماه آخرو استفاده کنم متاسفانه
                        اما در کل کاد عالیه از هر نظر مخصوصا پشتیبانی و رفع
                        اشکال شیش هیچ از بقیه موسسات جلوتره امسال هم احتمالا پشت
                        کنکور میمونم و دوباره همه کلاس های انسانی رو ثبت نام
                        میکنم
                      </span>
                    </span>
                    <span className="apolo-comment">
                      <span className="apolo-cm-name">
                        محدثه خوش باور - انسانی
                      </span>
                      <span className="apolo-cm-text">
                        من توی کلاس ادبیات اختصاصی و عربی و فلسفه و دینی و زبان
                        شرکت کردم و خیلی راضیم و خداروشکر نتیجش رو توی کنکور
                        دیدم. این که توی اکثر جلسات بهمون تکلیف میدن و آزمون
                        منظم ازمون میگیرن برای منی که نیازه زور بالا سرم باشه
                        خیلی خوب بود. در کل ممنونم از همه استادای کاد
                      </span>
                    </span>
                    <span className="apolo-comment">
                      <span className="apolo-cm-name">گلنوش خرمی - انسانی</span>
                      <span className="apolo-cm-text">
                        من امسال از آبان کلاس ها رو ثبت نام کردن قبلش یک موسسه
                        دیگه بودم که به خاطر حاشیه های زیاد سر کلاس ترجیح دادم
                        با این که هزینه کلاس رو بهم بر نگردوندن بیام کاد ثبت نام
                        کنن خداییش کارتون درسته از همه نظر به همه دوستای کنکوری
                        سال دیگم هم معرفیتون کردم
                      </span>
                    </span>
                    <span className="apolo-comment">
                      <span className="apolo-cm-name">محمد حسینی - انسانی</span>
                      <span className="apolo-cm-text">
                        من اوایل که اومدم کاد چون بعضی دوستام موسسات دیگه رفته
                        بودن نگران بودم که نکنه زیاد کلاسا خوب نباشن اما هر چی
                        رفتم جلو خیالم راحت تر شد خوبی کاد نسبت به خیلی از
                        کلاسای دیگه اینه که جو دانش اموزای کلاساش با بقیه خیلی
                        متفاوته یک جورایی انگار گزینش شدن و همه دنبال درسن و خب
                        این خیلی به من کمک کرد بر خلاف همون دوستام که از وسطای
                        سال درگیر حرف این معلم و اون معلم شدن. آزمون ها و بانک
                        تستی هم که طی سال دادن واقعا عالی بود و من همه تست ها رو
                        تحلیل میکردم و خیلی مشابهش توی کنکور اومد
                      </span>
                    </span>
                  </div>
                </div>
                <span
                  className="move-arrow "
                  onClick={() => {
                    this.handle_cm("next");
                  }}
                >
                  <img
                    loading="lazy"
                    src={arrow}
                    width={12}
                    height={21}
                    alt="قبلی"
                  />
                </span>
              </div>
            </div>
          </section>
          <section className="get-details-wrapper mm-width">
            <div className="jump-on-space-shop-box" ref={this.box}>
              <span className="box-header-wrapper">
                <img
                  loading="lazy"
                  width={33}
                  height={33}
                  src={jump_img}
                  alt="سفینه فضایی"
                />
                <p className="jump-desc">
                  سوار سفینه کاد بشو و ساعت ها<font> ویدیو رایگان </font>
                  هدیه بگیر
                </p>
              </span>
              <div className="inputs-wrapper">
                {this.state.signUp ? (
                  <>
                    <span className="input-wrapper">
                      <input
                        ref={this.name_bug}
                        onInput={({ target }) => {
                          this.handle_name(target.value);
                        }}
                        type="text"
                        placeholder="نام و نام خانوادگی"
                      />
                    </span>
                    {this.state.name_err ? (
                      <span className="err"> {this.state.name_err}</span>
                    ) : (
                      ""
                    )}

                    <span className="input-wrapper">
                      <span
                        className="custom-input"
                        onClick={() => {
                          this.handle_custom_input("grade");
                        }}
                      >
                        {this.state.grade ? this.state.grade.text : "پایه"}
                      </span>
                      {this.state.grade_box ? (
                        <span className="entry-wrapper">
                          <span
                            className="entry"
                            onClick={() => {
                              this.handle_grade(10);
                            }}
                          >
                            دهم
                          </span>
                          <span
                            className="entry"
                            onClick={() => {
                              this.handle_grade(11);
                            }}
                          >
                            یازدهم
                          </span>
                          <span
                            className="entry"
                            onClick={() => {
                              this.handle_grade(12);
                            }}
                          >
                            دوازدهم
                          </span>
                        </span>
                      ) : (
                        <></>
                      )}
                    </span>
                    {this.state.grade_err ? (
                      <span className="err"> {this.state.grade_err}</span>
                    ) : (
                      ""
                    )}
                    <span className="input-wrapper">
                      <span
                        className="custom-input"
                        onClick={() => {
                          this.handle_custom_input("subject");
                        }}
                      >
                        {this.state.subject ? this.state.subject.text : "رشته"}
                      </span>
                      {this.state.subject_box ? (
                        <span className="entry-wrapper">
                          <span
                            className="entry"
                            onClick={() => {
                              this.handle_subject(1);
                            }}
                          >
                            تجربی
                          </span>
                          <span
                            className="entry"
                            onClick={() => {
                              this.handle_subject(0);
                            }}
                          >
                            ریاضی
                          </span>
                          <span
                            className="entry"
                            onClick={() => {
                              this.handle_subject(2);
                            }}
                          >
                            انسانی
                          </span>
                        </span>
                      ) : (
                        <></>
                      )}
                    </span>
                    {this.state.subject_err ? (
                      <span className="err"> {this.state.subject_err}</span>
                    ) : (
                      ""
                    )}
                    <span className="btn-wrapper">
                      <span
                        className="send-code-btn"
                        onClick={() => {
                          this.submit_user();
                        }}
                      >
                        {this.state.pause ? <LittleLoading /> : "ثبت"}
                      </span>
                    </span>
                  </>
                ) : (
                  <>
                    <span className="input-wrapper">
                      <input
                        type="number"
                        onInput={({ target }) => {
                          this.handle_phone(target.value);
                        }}
                        placeholder="شماره تماس"
                      />
                    </span>
                    {this.state.phone_err ? (
                      <span className="err"> {this.state.phone_err}</span>
                    ) : (
                      ""
                    )}
                    <span className="input-wrapper">
                      {this.state.code ? (
                        <>
                          <input
                            type="number"
                            onInput={({ target }) => {
                              this.fill_code(target.value);
                            }}
                            placeholder="کد تایید"
                          />
                          <span
                            className="send-code-btn"
                            onClick={() => {
                              this.check_code();
                            }}
                          >
                            تایید کد
                          </span>
                        </>
                      ) : (
                        <span
                          className="send-code-btn"
                          onClick={() => {
                            this.send_code();
                          }}
                        >
                          {this.state.pause ? <LittleLoading /> : "ارسال کد"}
                        </span>
                      )}
                    </span>
                    {this.state.code_err ? (
                      <span className="err"> {this.state.code_err}</span>
                    ) : (
                      ""
                    )}
                  </>
                )}
              </div>
              {/* <div className="jump-on-btn">
                <span className="jump-on-text">سوار شو!</span>
                <span className="send-code-btn">ارسال کد</span>
              </div> */}
            </div>
            <div className="comment-section-img-wrapper">
              <img
                loading="lazy"
                width={960}
                height={602}
                src={comment_img}
                alt="پرواز کن و جایزه بگیر"
              />
            </div>
          </section>
          <HomeFooter />
        </div>
      </>
    );
  }
}

export default withWebsiteData(Apollo_11);
