import React, { Component } from "react";
import withWebsiteData from "../../hoc/with-website-data";
import { Helmet } from "react-helmet";
import HomeFooter from "../../home/footer/home-footer";
import HomeHeader from "../../home/header/home-header";
import AparatVideo from "../../video/aparat-video";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import scrollToTop from "../../functions/scroll";

import arrow_img from "../../../assets/images/arrow-campaign.webp";
import hero_img from "../../../assets/images/welcome-prize-img-hero.webp";
import LittleLoading from "../../reuseables/little-loading";

class Apollo_11_2 extends Component {
  constructor(props) {
    super(props);
    this.box_ref = React.createRef();
    this.all_video = React.createRef();
  }
  state = {
    show_more_videos: false,
    videos: [
      {
        id: 7,
        name: "ریاضی انسانی",
        description: "تابع دکتر سلامیان",
        src: "https://www.aparat.com/video/video/embed/videohash/qIGT8/vt/frame",
        kelasses_id: [15, 14],
        long_desc:
          "استاد سلامیان در این نمونه تدریس ریز به ریز نکات لازم مبحث تابع رو برای شما دانش آموزان انسانی آماده کرده. بعد از دیدن این ویدیو به راحتی میتونید تابع رو بهترر درک کنید و سوالات مربوط بهش رو بهتر جواب بدید. حتما همراه این دوره باشید.",
      },
      {
        id: 11,
        name: "علوم و فنون ادبی",
        description: "استعاره دکتر سبطی",
        src: "https://www.aparat.com/video/video/embed/videohash/zeHKf/vt/frame",
        kelasses_id: [9, 10],
        long_desc:
          "دکتر سبطی در این ویدیو برای شما مبحث استعاره رو به طورت کامل توضیح میده. این مبحث به گفته اکثر دانش آموزان یکی از سخت ترین مباحث این درس است. پس بهتره که این ویدیو خیلی خوب تماشا کنید.",
      },
      {
        id: 2,
        name: "علوم و فنون ادبی",
        description: "قافیه استاد فیض آبادی(قسمت 1)",
        src: "https://www.aparat.com/video/video/embed/videohash/h2ilI/vt/frame",
        kelasses_id: [10, 9],
        long_desc:
          "در این سری ویدیو استاد فیض ابادی برای شما مبحث قافیه از درس علوم و فنون ادبی رو به ساده ترین شکل توضیح میده. در این چند قسمت ویدیو میتونید به راحتی رو یاین مبحث مسلط بشید",
      },
      {
        id: 9,
        name: "عربی انسانی",
        description: "ترجمه استاد مهران ترکمان",
        src: "https://www.aparat.com/video/video/embed/videohash/gUiYf/vt/frame",
        kelasses_id: [13, 24],
        long_desc:
          "ترجمه یکی از مهم ترین مباحث درس عربی توی کنکوره و توی این ویدیو استاد ترکمان برای شما نکات و آموزش هایی آماده کرده که به راحتی میتونید روی این درس مسلط باشید. این ویدیو رو از دست ندید.",
      },
      {
        id: 3,
        name: "علوم و فنون ادبی",
        description: "قافیه استاد فیض آبادی(قسمت 2)",
        src: "https://www.aparat.com/video/video/embed/videohash/eGK3k/vt/frame",
        kelasses_id: [10, 9],
        long_desc:
          "در این سری ویدیو استاد فیض ابادی برای شما مبحث قافیه از درس علوم و فنون ادبی رو به ساده ترین شکل توضیح میده. در این چند قسمت ویدیو میتونید به راحتی رو یاین مبحث مسلط بشید",
      },

      {
        id: 4,
        name: "فلسفه و منطق",
        description: "معرفت شناسی دکتر سودیان",
        src: "https://www.aparat.com/video/video/embed/videohash/hk2Zb/vt/frame",
        kelasses_id: [12, 11],
        long_desc:
          "دکتر سودیان براتون مبحث معرفت شناسی رو آماده کرده که به کمک این ویدیو درک راحت  تری از این مبحث پیچیده بدست میارید. حتما برای راحت تر مطالعه کردن خودتون برای درس فلسفه و منطق از این ویدیو غافل نشید",
      },
      {
        id: 5,
        name: "فلسفه و منطق",
        description: "قضیه در منطق استاد جواهری",
        src: "https://www.aparat.com/video/video/embed/videohash/CycJY/vt/frame",
        kelasses_id: [11, 12],
        long_desc:
          "استاد جواهری براتون به مبحث مهم از درس فلسفه و منطق رو کاور کرده که به شدت میتونه کمک حالتون باشه برای یادگیری بهتر این درس. همراه استاد نیما جواهری باشید تا خیلی راحت این مبحث رو بهتون آموزش بده ",
      },
      {
        id: 6,
        name: "ریاضی انسانی",
        description: "مقدمات ریاضی دکتر سلامیان",
        src: "https://www.aparat.com/video/video/embed/videohash/JyHbA/vt/frame",
        kelasses_id: [15, 14],
        long_desc:
          "دکتر سلامیان قصد داره شما رو با مقدمات ریاضی انسانی آشنا کنه تا در ادامه مسیر هیچ نگران یادگیری مباحث بعدی این درس نباشید. با این ویدیو با خیال راحت برید سراغ ریاضی انسانی و قورتش بدید.",
      },
      {
        id: 1,
        name: "علوم و فنون ادبی",
        description: "عروض سماعی استاد فیض آبادی",
        src: "https://www.aparat.com/video/video/embed/videohash/pNguv/vt/frame?startTime=0",
        kelasses_id: [10, 9],
        long_desc:
          "عروض سمایی یه مبحث پیچیده و در عین حال قشنگ درس علوم و فنون ادبی است. استاد فیض آبادی به بهترین شکل برای شما این مبجث رو توضیح داده تا یکبار برای همیشه خیال شما رو راحت راحت کنه.",
      },
      {
        id: 8,
        name: "ریاضی انسانی",
        description: "مقدمات ریاضی استاد حسینی",
        src: "https://www.aparat.com/video/video/embed/videohash/dF7Gf/vt/frame",
        kelasses_id: [14, 15],
        long_desc:
          "استاد آروین حسینی با توضیحات کامل برای مقدمات ریاضی انسانی پیش شماست. خیالتون از بابت این درس میتونه با این ویدیو راحت بشه و بدون استرس و بایه شروع قوی سراغ مطالعه این درس برای کنکور برید.",
      },

      {
        id: 10,
        name: "اقتصاد",
        description: "اقتصاد استاد سارا شریفی",
        src: "https://www.aparat.com/video/video/embed/videohash/DPmUM/vt/frame",
        kelasses_id: [16],
        long_desc:
          "استاد شریفی برای شما یک ویدیو کامل و خوب برای درس اقتصاد آماده کرده که پر از نکته و تمرین و سوال برای شماست.  این ویدیو خیلی میتونه به شما برای خوندن و بهتر فهمیدن این درس کمک کنه.",
      },
    ],
    filtered_videos: [],
    active_more: false,
    active_course: "همه درس ها",
    show_options: false,
  };
  componentDidMount() {
    const { user } = this.props;
    if (!user) {
      window.location.pathname = "/apollo-11";
    }
  }
  find_active = (id) => {
    const videos = [...this.state.videos];
    const active_more = videos.find((v) => v.id === id);
    this.setState({ active_more }, () => {
      //console.log(this.box_ref.current.getBoundingClientRect().y);
      const rect = this.box_ref.current.getBoundingClientRect();
      const offset = window.pageYOffset || document.documentElement.scrollTop;
      const top = rect.top + offset - 200;
      window.scrollTo({ top, behavior: "smooth" });
      // window.scrollTo({
      //   top: this.box_ref.current.getBoundingClientRect().y,
      //   behavior: "smooth",
      // });
    });
  };
  video_options = () => {
    const final_arr = [];
    const videos = [...this.state.videos];
    videos.forEach((v) => {
      if (!final_arr.includes(v.name)) {
        final_arr.push(v.name);
      }
    });
    return final_arr;
  };
  filter_videos = (name) => {
    const all_videos = [...this.state.videos];
    let filtered_videos;
    if (name !== "همه درس ها")
      filtered_videos = all_videos.filter((av) => av.name === name);
    else {
      filtered_videos = [];
    }
    this.setState({ filtered_videos });
  };
  render() {
    const { kelasses, user } = this.props;
    return (
      <>
        <Helmet>
          <title>جوایز کمپین آپولو ۱۱</title>
        </Helmet>
        <div className="campaign-wrapper apolo-11 apolo-11-2">
          <HomeHeader user={user} />
          <section className="welcome-to-prize-part mm-width">
            <div className="welcome-text-wrapper">
              <h1 className="title-2">جوایز کمپین آپولو ۱۱</h1>
              <p className="welcome-text">
                جوایز کمپین آپولو ۱۱ ساعت ها ویدئو رایگان و نمونه تدریس برای
                شماست. اما این نمونه تدریس ها فقط یه سری نمونه تدریس عادی نیستن.
                این نمونه تدریس ها سخت ترین مبحث درس ها با بهترین آموزش اساتید
                کاد برای شماست. کلی نمونه تدریس متناسب با رشته و مبحث براتون
                آماده کردیم ؟
              </p>
              <p
                className="ready-text"
                onClick={() => {
                  const rect = this.all_video.current.getBoundingClientRect();
                  const offset =
                    window.pageYOffset || document.documentElement.scrollTop;
                  const top = rect.top + offset - 200;
                  window.scrollTo({ top, behavior: "smooth" });
                }}
              >
                آماده اید براشون ؟
              </p>
            </div>
            <div className="welcome-video">
              <img src={hero_img} alt="" />
              {/* <AparatVideo src="https://www.aparat.com/video/video/embed/videohash/DPmUM/vt/frame" /> */}
            </div>
          </section>
          <section className="top-samples-part mm-width">
            <h2 className="semi-title-2">جدیدترین نمونه تدریس‌های کاد</h2>
            <div className="top-samples-wrapper">
              <div className="top-sample">
                <div className="top-sample-video">
                  <AparatVideo src={this.state.videos[1].src} />
                </div>
                <h3 className="h3-title">{this.state.videos[1].description}</h3>
                <p className="top-sample-desc">
                  دکتر سبطی این بار برای دانش آموزان کاد نمونه تدریسی در مبحث
                  استعاره از درس علوم و فنون ادبی آماده کرده است.
                </p>
              </div>
              <div className="top-sample">
                <div className="top-sample-video">
                  <AparatVideo src={this.state.videos[2].src} />
                </div>
                <h3 className="h3-title">{this.state.videos[2].description}</h3>
                <p className="top-sample-desc">
                  استاد فیض آبادی برای شما در چند جلسه مبحث مهم قافیه از درس
                  علوم و فنون رو بهتون آموزش میده.
                </p>
              </div>
              <div className="top-sample">
                <div className="top-sample-video">
                  <AparatVideo src={this.state.videos[3].src} />
                </div>
                <h3 className="h3-title">{this.state.videos[3].description}</h3>
                <p className="top-sample-desc">
                  استاد ترکمان با مینی دوره ترجمه در درس عربی انسان نکته های
                  زیادی برای گفتن بهتون داره. این مینی دوره رو از دست ندید.
                </p>
              </div>
            </div>
          </section>
          <section className="prizes-part" ref={this.all_video}>
            <h2 className="semi-title-2">تمامی نمونه تدریس‌ها</h2>
            {/* <p className="title-desc">رشته خود را انتخاب کنید</p> */}
            {/* <div className="choose-subjct">
              <span className="subject-choose active">انسانی</span>
              <span className="subject-choose">تجربی</span>
              <span className="subject-choose">ریاضی</span>
            </div> */}
            <div
              className={
                this.state.show_more_videos ||
                (this.state.filtered_videos.length !== 0 &&
                  this.state.filtered_videos.length < 5)
                  ? "sample-video-stage show"
                  : "sample-video-stage"
              }
            >
              <div className="sample-detials">
                <h3 className="subject-title">رشته انسانی</h3>
                <div className="subject-picker-wrapper">
                  <span
                    className="select-option-box"
                    onClick={() => {
                      this.setState({ show_options: !this.state.show_options });
                    }}
                  >
                    <span className="option-text">
                      {this.state.active_course}
                    </span>
                    <img
                      src={arrow_img}
                      width={24}
                      height={14}
                      alt="فلش"
                      className={this.state.show_options ? "rotate" : ""}
                    />
                  </span>
                  <div
                    className={
                      this.state.show_options
                        ? "subject-options-box shown"
                        : "subject-options-box"
                    }
                  >
                    <span
                      className="pick-subject-item"
                      onClick={() => {
                        this.setState({
                          active_course: "همه درس ها",
                          show_options: false,
                        });
                        this.filter_videos("همه درس ها");
                      }}
                    >
                      همه درس ها
                    </span>
                    {this.video_options().map((name, i) => (
                      <span
                        key={i++}
                        className="pick-subject-item"
                        onClick={() => {
                          this.setState({
                            active_course: name,
                            show_options: false,
                          });
                          this.filter_videos(name);
                        }}
                      >
                        {name}
                      </span>
                    ))}
                    {/* <span className="pick-subject-item">ریاضی دوازدهم</span>
                    <span className="pick-subject-item">ریاضی دوازدهم</span>
                    <span className="pick-subject-item">ریاضی دوازدهم</span>
                    <span className="pick-subject-item">ریاضی دوازدهم</span> */}
                  </div>
                </div>
                <p className="sample-stage-desc">
                  ساعت ها ویدیو از سخت ترین مباحث انسانی برای شما در این قسمت
                  قرار داده شده. شما می‌تونید نمونه تدریس ها و مینی دوره های
                  زیادی برای درس های{" "}
                  <Link target="_blank" to="/Shop/product/علوم-و-فنون">
                    علوم و فنون ادبی
                  </Link>{" "}
                  ٫{" "}
                  <Link target="_blank" to="/Shop/product/فلسفه-و-منطق">
                    فلسفه و منطق
                  </Link>{" "}
                  ٫{" "}
                  <Link target="_blank" to="/Shop/product/ریاضی-انسانی">
                    {" "}
                    ریاضی انسانی
                  </Link>{" "}
                  ٫{" "}
                  <Link target="_blank" to="/Shop/product/عربی-انسانی">
                    عربی انسانی
                  </Link>{" "}
                  و{" "}
                  <Link target="_blank" to="/Shop/product/اقتصاد">
                    اقتصاد
                  </Link>{" "}
                  رو با بهترین اساتید کاد به رایگان تماشا کنید. اساتید کاد در
                  این کمپین برای شما این ویدیو ها رو آماده کردن و می تونید با
                  انتخاب درس مورد نظرتون نمونه تدریس و مینی دوره ها رو به راحتی
                  مشاهده کنید.
                </p>
              </div>
              {this.state.filtered_videos.length === 0
                ? this.state.videos.map((v) => (
                    <div key={v.id} className="sample-video-item">
                      <div className="s-video-wrapper">
                        <AparatVideo src={v.src} />
                      </div>
                      <h4 className="sample-video-name">{v.name}</h4>
                      <p className="sample-video-desc">{v.description}</p>
                      <span
                        className="show-similar-kelas"
                        onClick={() => {
                          this.find_active(v.id);
                        }}
                      >
                        مشاهده توضیحات
                      </span>
                    </div>
                  ))
                : this.state.filtered_videos.map((v) => (
                    <div key={v.id} className="sample-video-item">
                      <div className="s-video-wrapper">
                        <AparatVideo src={v.src} />
                      </div>
                      <h4 className="sample-video-name">{v.name}</h4>
                      <p className="sample-video-desc">{v.description}</p>
                      <span
                        className="show-similar-kelas"
                        onClick={() => {
                          this.find_active(v.id);
                        }}
                      >
                        مشاهده توضیحات
                      </span>
                    </div>
                  ))}
            </div>
            {this.state.filtered_videos.length > 5 ||
            this.state.filtered_videos.length === 0 ? (
              <div
                className="show-more-videos"
                onClick={() => {
                  const show_more_videos = !this.state.show_more_videos;
                  this.setState({ show_more_videos });
                }}
              >
                <span className="text">
                  مشاهده ویدیو های{" "}
                  {!this.state.show_more_videos ? "بیشتر" : "کمتر"}
                </span>
                <span
                  className={
                    this.state.show_more_videos ? "arrows rotate" : "arrows"
                  }
                >
                  <img src={arrow_img} alt="فلش" width={24} height={14} />
                  <img src={arrow_img} alt="فلش" width={24} height={14} />
                </span>
              </div>
            ) : (
              <></>
            )}
            {/* {this.state.active_more ? ( */}
            {/* // ) : ( // <></>
            // )} */}
          </section>
          <span className="hidden" ref={this.box_ref}></span>
          {this.state.active_more ? (
            <div className="sample-video-more-details mm-width">
              <div className="video-more-info">
                <h4 className="h4-title">
                  {this.state.active_more.description}
                </h4>
                <div className="video-desc">
                  <div className="a-video">
                    <AparatVideo src={this.state.active_more.src} />
                  </div>
                  <p className="video-long-desc">
                    {this.state.active_more.long_desc}
                  </p>
                </div>
              </div>
              <div className="similar-courses-wrapper">
                <h4 className="h4-title">دوره های مشابه</h4>
                <div className="similar-courses">
                  {this.state.active_more.kelasses_id.map((k_id) => (
                    <Link
                      className="kelas-item"
                      key={k_id}
                      to={`/Shop/product/${
                        kelasses.find((k) => k.kelas_id === k_id).slug_name
                      }`}
                    >
                      <img
                        src={
                          kelasses.find((k) => k.kelas_id === k_id).image_link
                        }
                        alt={
                          kelasses.find((k) => k.kelas_id === k_id).kelas_title
                        }
                      />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <></>
          )}
          <section className="all-kelasses">
            <h2 className="semi-title-2">کلاس‌های کاد</h2>
            <div className="kelasses-wrapper mm-width">
              {kelasses ? (
                kelasses.map((k) => (
                  <Link
                    key={k.kelas_id}
                    to={`/shop/product/${k.slug_name}`}
                    className="kelas-item-final"
                  >
                    <h3 className="kelas-item-title">{k.kelas_title}</h3>
                    <p className="kelas-item-desc">{k.descriptions[0]}</p>
                  </Link>
                ))
              ) : (
                <LittleLoading />
              )}
            </div>
          </section>
          <HomeFooter />
        </div>
      </>
    );
  }
}

export default withWebsiteData(Apollo_11_2);
