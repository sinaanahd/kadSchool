import React, { Component } from "react";
import { Helmet } from "react-helmet";
import withWebsiteData from "../../hoc/with-website-data";
import HomeHeader from "../../home/header/home-header";
import HomeFooter from "../../home/footer/home-footer";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

import hero_img from "../../../assets/images/campaign-hero-img.webp";
import comment_img from "../../../assets/images/comment-img-apolo.webp";
import jump_img from "../../../assets/images/space-ship-new.webp";
import arrow from "../../../assets/images/campaign-arrow-left.webp";
class Apollo_11 extends Component {
  state = {
    students_count: 0,
    under_1000_count: 0,
    not_satisfied_count: 0,
    konkor_match_count: 0,
    spotlight: 0,
    active_cm: 0,
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
  handel_teacher_carousel = (num) => {};
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
  render() {
    const { user } = this.props;
    return (
      <>
        <Helmet>
          <title>کمپین آپولو ۱۱</title>
          <meta
            name="description"
            content="کمپین آپولو ۱۱ اولین سفینه فضایی کنکور برای اینکه اولین باشید تا روی سیاره کنکور با موفقیت فرود بیاید. با کاد با خیال راحت برای موفقیت به کنکور سفر کنید "
          />
          <meta
            name="keywords"
            content="کاد, کمپ تابستانه کاد, آپولو ۱۱, آمادگی کنکور ۱۴۰۳, کمپ کنکور"
          />
          <link
            rel="preload"
            as="image"
            href="../../assets/images/campaign-bg-web-1.webp"
          />
        </Helmet>
        <div className="campaign-wrapper apolo-11">
          <HomeHeader user={user} />
          <section className="hero-part mm-width">
            <div className="hero-text-wrapper">
              <span className="hero-title">سلام !</span>
              <h1 className="hero-title">به کمپین آوپولو ۱۱ کاد خوش اومدین</h1>
              <h2 className="semi-hero-title">اصلا چرا آپولو ۱۱ ؟</h2>
              <p className="hero-desc">
                توی ماموریت آپولو 11 برای اولین بار فضانورد های ناسا تونستن
                اولین قدمشون رو روی ماه بذارنحالا کاد قراره توی کمپین آپولو 11
                بهت با ساعت ها تدریس رایگان و ساعت ها مشاوره شخصی رایگان کمک کنه
                قدم های اولت رو محکم برداری
              </p>
              <p className="lets-do-apolo">پس بزن بریم آپولو هوا کنیم</p>
            </div>
            <div className="hero-img">
              <img src={hero_img} alt="آپولو ۱۱" />
            </div>
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
            <h2 className="why-trust-kad-title">
              چرا تا به امروز 3875 نفر به کاد اعتماد کردن؟
            </h2>
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
              <div className="teachers-wrapper">
                <Link to="" className="teacher-wrapper">
                  <img
                    src="https://kadschool.com/media/Kad_Teachers_Photos/Teacher_استاد_عماد_فیض_آبادی.webp"
                    alt=""
                  />
                </Link>
                <Link to="" className="teacher-wrapper">
                  <img
                    src="https://kadschool.com/media/Kad_Teachers_Photos/Teacher_استاد_عماد_فیض_آبادی.webp"
                    alt=""
                  />
                </Link>
                <Link to="" className="teacher-wrapper">
                  <img
                    src="https://kadschool.com/media/Kad_Teachers_Photos/Teacher_استاد_عماد_فیض_آبادی.webp"
                    alt=""
                  />
                </Link>
                <Link to="" className="teacher-wrapper">
                  <img
                    src="https://kadschool.com/media/Kad_Teachers_Photos/Teacher_استاد_عماد_فیض_آبادی.webp"
                    alt=""
                  />
                </Link>
                <Link to="" className="teacher-wrapper">
                  <img
                    src="https://kadschool.com/media/Kad_Teachers_Photos/Teacher_استاد_عماد_فیض_آبادی.webp"
                    alt=""
                  />
                </Link>
                <Link to="" className="teacher-wrapper">
                  <img
                    src="https://kadschool.com/media/Kad_Teachers_Photos/Teacher_استاد_عماد_فیض_آبادی.webp"
                    alt=""
                  />
                </Link>
                <Link to="" className="teacher-wrapper">
                  <img
                    src="https://kadschool.com/media/Kad_Teachers_Photos/Teacher_استاد_عماد_فیض_آبادی.webp"
                    alt=""
                  />
                </Link>
                <Link to="" className="teacher-wrapper">
                  <img
                    src="https://kadschool.com/media/Kad_Teachers_Photos/Teacher_استاد_عماد_فیض_آبادی.webp"
                    alt=""
                  />
                </Link>
                <Link to="" className="teacher-wrapper">
                  <img
                    src="https://kadschool.com/media/Kad_Teachers_Photos/Teacher_استاد_عماد_فیض_آبادی.webp"
                    alt=""
                  />
                </Link>
                <Link to="" className="teacher-wrapper">
                  <img
                    src="https://kadschool.com/media/Kad_Teachers_Photos/Teacher_استاد_عماد_فیض_آبادی.webp"
                    alt=""
                  />
                </Link>
                <Link to="" className="teacher-wrapper">
                  <img
                    src="https://kadschool.com/media/Kad_Teachers_Photos/Teacher_استاد_عماد_فیض_آبادی.webp"
                    alt=""
                  />
                </Link>
                <Link to="" className="teacher-wrapper">
                  <img
                    src="https://kadschool.com/media/Kad_Teachers_Photos/Teacher_استاد_عماد_فیض_آبادی.webp"
                    alt=""
                  />
                </Link>
                <Link to="" className="teacher-wrapper">
                  <img
                    src="https://kadschool.com/media/Kad_Teachers_Photos/Teacher_استاد_عماد_فیض_آبادی.webp"
                    alt=""
                  />
                </Link>
                <Link to="" className="teacher-wrapper">
                  <img
                    src="https://kadschool.com/media/Kad_Teachers_Photos/Teacher_استاد_عماد_فیض_آبادی.webp"
                    alt=""
                  />
                </Link>
                <Link to="" className="teacher-wrapper">
                  <img
                    src="https://kadschool.com/media/Kad_Teachers_Photos/Teacher_استاد_عماد_فیض_آبادی.webp"
                    alt=""
                  />
                </Link>
              </div>
              <div className="dots-item-wrapper">
                <span className="dot"></span>
                <span className="dot active"></span>
                <span className="dot"></span>
              </div>
            </div>
            <div className="ranks-wrapper-title same-col">
              <h2 className="section-title">مسافرین قبلی این ماموریت</h2>
              <div className="teachers-wrapper">
                <Link to="" className="teacher-wrapper">
                  <img
                    src="https://kadschool.com/media/Kad_Teachers_Photos/Teacher_استاد_عماد_فیض_آبادی.webp"
                    alt=""
                  />
                </Link>
                <Link to="" className="teacher-wrapper">
                  <img
                    src="https://kadschool.com/media/Kad_Teachers_Photos/Teacher_استاد_عماد_فیض_آبادی.webp"
                    alt=""
                  />
                </Link>
                <Link to="" className="teacher-wrapper">
                  <img
                    src="https://kadschool.com/media/Kad_Teachers_Photos/Teacher_استاد_عماد_فیض_آبادی.webp"
                    alt=""
                  />
                </Link>
                <Link to="" className="teacher-wrapper">
                  <img
                    src="https://kadschool.com/media/Kad_Teachers_Photos/Teacher_استاد_عماد_فیض_آبادی.webp"
                    alt=""
                  />
                </Link>
                <Link to="" className="teacher-wrapper">
                  <img
                    src="https://kadschool.com/media/Kad_Teachers_Photos/Teacher_استاد_عماد_فیض_آبادی.webp"
                    alt=""
                  />
                </Link>
                <Link to="" className="teacher-wrapper">
                  <img
                    src="https://kadschool.com/media/Kad_Teachers_Photos/Teacher_استاد_عماد_فیض_آبادی.webp"
                    alt=""
                  />
                </Link>
              </div>
              <div className="dots-item-wrapper">
                <span className="dot"></span>
                <span className="dot active"></span>
                <span className="dot"></span>
              </div>
            </div>
          </section>
          <section className="commnets-part">
            <h2 className="section-title">نظر دوستاتون در مورد کاد</h2>
            <div className="comments-stage">
              <div className="content-controll mm-width">
                <span
                  className="move-arrow prev"
                  onClick={() => {
                    this.handle_cm("prev");
                  }}
                >
                  <img src={arrow} width={12} height={24} alt="بعدی" />
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
                  <img src={arrow} width={12} height={24} alt="قبلی" />
                </span>
              </div>
            </div>
          </section>
          <section className="get-details-wrapper mm-width">
            <div className="jump-on-space-shop-box">
              <span className="box-header-wrapper">
                <img src={jump_img} alt="سفینه فضایی" />
                <p className="jump-desc">
                  سوار سفینه کاد بشو و هدیه
                  <font> 1 میلیون تومانی </font>
                  بگیر
                </p>
              </span>
              <div className="inputs-wrapper">
                <span className="input-wrapper">
                  <input type="text" placeholder="نام و نام خانوادگی" />
                </span>
                <span className="input-wrapper">
                  <input type="number" placeholder="شماره تماس" />
                </span>
                <span className="input-wrapper">
                  <span className="custom-input">پایه</span>
                  <span className="entry-wrapper">
                    <span className="entry">دهم</span>
                    <span className="entry">یازدهم</span>
                    <span className="entry">دوازدهم</span>
                  </span>
                </span>
                <span className="input-wrapper">
                  <span className="custom-input">رشته</span>
                  <span className="entry-wrapper">
                    <span className="entry">تجربی</span>
                    <span className="entry">ریاضی</span>
                    <span className="entry">انسانی</span>
                  </span>
                </span>
              </div>
              <div className="jump-on-btn">
                <span className="jump-on-text">سوار شو!</span>
                <span className="send-code-btn">ارسال کد</span>
              </div>
            </div>
            <div className="comment-section-img-wrapper">
              <img src={comment_img} alt="پرواز کن و جایزه بگیر" />
            </div>
          </section>
          <HomeFooter />
        </div>
      </>
    );
  }
}

export default withWebsiteData(Apollo_11);
