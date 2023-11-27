import React, { Component, useContext, useState } from "react";
import { Helmet } from "react-helmet";
import SideBar from "../side-bar/side-bar";
import withWebsiteData from "../hoc/with-website-data";
import spilit_in_three from "../functions/spilit_in_three";
import convert_to_persian from "../functions/convert-to-persian";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

import classCal from "../../assets/images/class-cal.webp";
import teacherNext from "../../assets/images/next-btn-teacher.webp";
import plusWhiteCircle from "../../assets/images/plus-white-circle.webp";
import downArrowBlue from "../../assets/images/down-arrow-blue.webp";
import avatar from "../../assets/images/avatar.webp";
import LittleLoading from "../reuseables/little-loading";
import convert_days from "../functions/convert-days";
import AparatVideo from "../video/aparat-video";
import scrollToTop from "../functions/scroll";
import { DataContext } from "../context/DataContext";

const SingleCourse = () => {
  const { doreha, kelasses, teachers, sample_files, cart, handle_cart, user } =
    useContext(DataContext);
  const [more_desc, set_more_desc] = useState(false);
  const [more_cm, set_more_cm] = useState(false);
  const [class_carousel_pos, set_class_carousel_pos] = useState(0);
  const [open_sample_drop_down, set_open_sample_drop_down] = useState(false);

  const handle_cm = () => {
    // this.setState({ more_cm });
    set_more_cm(!more_cm);
  };
  const handle_desc = () => {
    // const more_desc = !this.state.more_desc;
    // this.setState({ more_desc });
    set_more_desc(!more_desc);
  };
  const course_carousel = (way) => {
    const my_length = Math.floor(single_course.kelases.length / 4);
    if (way === "next") {
      if (my_length !== class_carousel_pos)
        // this.setState({ class_carousel_pos: class_carousel_pos + 1 });
        set_class_carousel_pos(class_carousel_pos + 1);
    } else {
      if (class_carousel_pos !== 0)
        // this.setState({ class_carousel_pos: class_carousel_pos - 1 });
        set_class_carousel_pos(class_carousel_pos - 1);
    }
  };
  const handle_sample = (entry) => {
    if (entry !== open_sample_drop_down)
      // this.setState({ open_sample_drop_down });
      set_open_sample_drop_down(entry);
    else {
      // this.setState({ open_sample_drop_down: false });
      set_open_sample_drop_down(false);
    }
  };
  const my_path = window.location.pathname.split("/")[2];
  const single_course = doreha
    ? doreha.find(
        (d) =>
          d.dore_id === parseInt(my_path) ||
          d.slug_name === decodeURIComponent(my_path)
      )
    : false;
  const dore_kelases =
    kelasses && single_course
      ? kelasses.filter((k) => k.parent_dore_id === single_course.dore_id)
      : [];
  const jozveha =
    single_course && sample_files
      ? [
          ...sample_files.pdf_sample_files.filter(
            (f) =>
              f.file_type === "نمونه جزوه" &&
              !f.is_for_jalase &&
              f.dore_id === single_course.dore_id
          ),
        ]
      : false;
  const taklifha =
    single_course && sample_files
      ? [
          ...sample_files.pdf_sample_files.filter(
            (f) =>
              f.file_type === "نمونه تکلیف" &&
              !f.is_for_jalase &&
              f.dore_id === single_course.dore_id
          ),
        ]
      : false;
  const azmonha =
    single_course && sample_files
      ? [
          ...sample_files.pdf_sample_files.filter(
            (f) =>
              f.file_type === "نمونه آزمون" &&
              !f.is_for_jalase &&
              f.dore_id === single_course.dore_id
          ),
        ]
      : false;
  const nemone_tadris =
    single_course && sample_files
      ? [
          ...sample_files.video_sample_files.filter(
            (f) =>
              f.file_type === "نمونه تدریس" &&
              !f.is_for_jalase &&
              f.dore_id === single_course.dore_id
          ),
        ]
      : false;
  const intro_video =
    single_course && sample_files
      ? {
          ...sample_files.video_sample_files.filter(
            (f) =>
              f.file_type === "معرفی دوره" &&
              !f.is_for_jalase &&
              f.dore_id === single_course.dore_id
          ),
        }
      : false;
  return (
    <>
      <Helmet>
        <title>{single_course ? single_course.dore_title : "دوره"}</title>
        <meta
          name="description"
          content={`دوره ${single_course ? single_course.dore_title : ""}`}
        />
        <meta
          name="keywords"
          content={`${single_course ? single_course.dore_title : ""}`}
        />
      </Helmet>
      <section className="bgc-wrapper single-course-wrapper">
        <div className="single_course mm-width">
          <SideBar />
          <div className="main-content">
            <h1 className="title">
              {single_course ? single_course.dore_title : <LittleLoading />}
            </h1>
            <div className="intro-class-wrapper">
              <div className="intro-course">
                <h2 className="intro-title h2-before">معرفی دوره</h2>
                <ul
                  className={
                    single_course
                      ? more_desc && single_course.descriptions.length > 1
                        ? "course-description visible-desc"
                        : "course-description"
                      : "course-description"
                  }
                >
                  {single_course ? (
                    single_course.descriptions.length !== 0 ? (
                      single_course.descriptions.map((d, i) => (
                        <li key={i++}>{d}</li>
                      ))
                    ) : (
                      <li> هنوز توضیحات دوره ثبت نشده</li>
                    )
                  ) : (
                    ""
                  )}
                  {single_course ? (
                    single_course.descriptions.length > 1 ? (
                      <li
                        onClick={() => {
                          handle_desc();
                        }}
                        className="more-description"
                      >
                        {more_desc ? "کمتر ... " : "بیشتر ..."}
                      </li>
                    ) : (
                      <></>
                    )
                  ) : (
                    <></>
                  )}
                </ul>
              </div>
              <div className="class-details">
                <span className="video-wrapper">
                  {Object.keys(intro_video).length !== 0 ? (
                    <AparatVideo src={intro_video.file_link} />
                  ) : (
                    "ویدیو برای دوره قرار نگرفته است"
                  )}

                  {/* <AparatVideo /> */}
                </span>
                <span className="class-time">
                  <img src={classCal} alt="" />
                  <span className="class-text">
                    تاریخ شروع دوره:
                    <span className="date-dore">
                      {single_course ? (
                        new Date(
                          single_course.dore_start_date
                        ).toLocaleDateString("fa-IR")
                      ) : (
                        <LittleLoading />
                      )}
                    </span>
                  </span>
                </span>
              </div>
            </div>
            <div className="teachers-part-wrapper">
              <h2 className="teachers-title h2-before">کلاس های دوره</h2>
              <div className="teachers-wrapper-btn">
                {single_course && dore_kelases.length >= 4 ? (
                  <span
                    className="prev arrows"
                    onClick={() => {
                      course_carousel("prev");
                    }}
                  >
                    <img
                      src={teacherNext}
                      alt="بعدی"
                      width={15}
                      height={28}
                      loading="lazy"
                    />
                  </span>
                ) : (
                  ""
                )}
                <div className={"teachers-wrapper car-" + class_carousel_pos}>
                  {single_course && kelasses ? (
                    dore_kelases.map((k, i) => (
                      <div className="teacher" key={i++}>
                        <span className="img-name-date">
                          <Link
                            onClick={() => {
                              scrollToTop();
                            }}
                            to={`/Shop/product/${k.slug_name}`}
                            className="img-wrapper"
                          >
                            <img
                              src={k.image_link}
                              alt={k.kelas_title}
                              loading="lazy"
                            />
                          </Link>
                          <h3 className="teacher-name">
                            <Link
                              onClick={() => {
                                scrollToTop();
                              }}
                              to={
                                teachers
                                  ? `/Teachers/${teachers.find((t) =>
                                      t.kelases.includes(k.kelas_id)
                                    )}`
                                  : "/Teachers"
                              }
                            >
                              {
                                teachers.find((t) =>
                                  t.kelases.includes(k.kelas_id)
                                ).fullname
                              }
                            </Link>
                          </h3>
                          <span className="dates">
                            {k.stream_plans.map(
                              (p) => convert_days(p.week_day_english) + " "
                            )}
                          </span>
                        </span>
                        {user && cart ? (
                          cart.ids.includes(k.kelas_id) ? (
                            <span
                              className="add-teacher"
                              onClick={() => {
                                handle_cart(k);
                              }}
                            >
                              <img
                                src={plusWhiteCircle}
                                alt=""
                                className="rotate-45"
                              />

                              {k.price ? (
                                k.discounted_price ? (
                                  <>
                                    <span className="discounted-price">
                                      {spilit_in_three(
                                        convert_to_persian(k.price)
                                      )}
                                    </span>
                                    <span className="normal-price">
                                      {spilit_in_three(
                                        convert_to_persian(k.discounted_price)
                                      )}
                                    </span>
                                    <span className="currency">تومان</span>
                                  </>
                                ) : (
                                  <>
                                    <span className="discounted-price"></span>
                                    <span className="normal-price">
                                      {spilit_in_three(
                                        convert_to_persian(k.price)
                                      )}
                                    </span>
                                    <span className="currency">تومان</span>
                                  </>
                                )
                              ) : (
                                <>
                                  <span className="discounted-price"></span>
                                  <span className="normal-price"></span>
                                  <span className="currency">رایگان</span>
                                </>
                              )}
                            </span>
                          ) : (
                            <span
                              className="add-teacher"
                              onClick={() => {
                                handle_cart(k);
                              }}
                            >
                              <img src={plusWhiteCircle} alt="" />

                              {k.price ? (
                                k.discounted_price ? (
                                  <>
                                    <span className="discounted-price">
                                      {spilit_in_three(
                                        convert_to_persian(k.price)
                                      )}
                                    </span>
                                    <span className="normal-price">
                                      {spilit_in_three(
                                        convert_to_persian(k.discounted_price)
                                      )}
                                    </span>
                                    <span className="currency">تومان</span>
                                  </>
                                ) : (
                                  <>
                                    <span className="discounted-price"></span>
                                    <span className="normal-price">
                                      {spilit_in_three(
                                        convert_to_persian(k.price)
                                      )}
                                    </span>
                                    <span className="currency">تومان</span>
                                  </>
                                )
                              ) : (
                                <>
                                  <span className="discounted-price"></span>
                                  <span className="normal-price"></span>
                                  <span className="currency">رایگان</span>
                                </>
                              )}
                            </span>
                          )
                        ) : (
                          <Link
                            onClick={() => {
                              scrollToTop();
                            }}
                            to={"/Login"}
                            className="add-teacher"
                          >
                            <img src={plusWhiteCircle} alt="" />
                            {k.price ? (
                              k.discounted_price ? (
                                <>
                                  <span className="discounted-price">
                                    {spilit_in_three(
                                      convert_to_persian(k.price)
                                    )}
                                  </span>
                                  <span className="normal-price">
                                    {spilit_in_three(
                                      convert_to_persian(k.discounted_price)
                                    )}
                                  </span>
                                  <span className="currency">تومان</span>
                                </>
                              ) : (
                                <>
                                  <span className="discounted-price"></span>
                                  <span className="normal-price">
                                    {spilit_in_three(
                                      convert_to_persian(k.price)
                                    )}
                                  </span>
                                  <span className="currency">تومان</span>
                                </>
                              )
                            ) : (
                              <>
                                <span className="discounted-price"></span>
                                <span className="normal-price"></span>
                                <span className="currency">رایگان</span>
                              </>
                            )}
                          </Link>
                        )}
                      </div>
                    ))
                  ) : (
                    <></>
                  )}
                </div>
                {single_course && dore_kelases.length >= 4 ? (
                  <span
                    className="next arrows"
                    onClick={() => {
                      course_carousel("next");
                    }}
                  >
                    <img
                      src={teacherNext}
                      alt="بعدی"
                      width={15}
                      height={28}
                      loading="lazy"
                    />
                  </span>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="sample-teach-wrapper">
              <h2 className="h2-before teacher-sample-title">نمونه تدریس</h2>
              <div className="samples-wrapper-btns">
                {/* {single_course ? (
                    nemone_tadris.length >= 4 ? (
                      <span className="arrows prev">
                        <img src={teacherNext} alt="" />
                      </span>
                    ) : (
                      ""
                    )
                  ) : (
                    <span className="arrows prev">
                      <img src={teacherNext} alt="" />
                    </span>
                  )} */}
                <div className="samples-wrapper">
                  {single_course ? (
                    nemone_tadris.length !== 0 && nemone_tadris ? (
                      nemone_tadris.map((sv) => (
                        <div key={sv.file_id} className="sample-wrapper">
                          <span className="img-wrapper">
                            <AparatVideo src={sv.file_link} />
                          </span>
                        </div>
                      ))
                    ) : (
                      <span className="no-sample">
                        نمونه تدریسی برای نمایش وجود ندارد
                      </span>
                    )
                  ) : (
                    <></>
                  )}
                </div>
                {/* {single_course ? (
                    nemone_tadris.length >= 4 ? (
                      <span className="arrows next">
                        <img src={teacherNext} alt="" />
                      </span>
                    ) : (
                      ""
                    )
                  ) : (
                    <span className="arrows next">
                      <img src={teacherNext} alt="" />
                    </span>
                  )} */}
              </div>
              <div className="sample-btns-wrapper">
                <span
                  className="sample-btn"
                  onClick={() => {
                    handle_sample("jozve");
                  }}
                >
                  نمونه جزوه
                  {open_sample_drop_down === "jozve" ? (
                    single_course ? (
                      jozveha && jozveha.length !== 0 ? (
                        <span className="sample-files">
                          {jozveha.map((sf) => (
                            <a
                              key={sf.file_id}
                              target="_blank"
                              href={sf.file_link}
                              className="sample-file"
                            >
                              دانلود نمونه جزوه
                            </a>
                          ))}
                        </span>
                      ) : (
                        <span className="sample-files">
                          <span className="sample-file">فایل ندارد</span>
                        </span>
                      )
                    ) : (
                      <LittleLoading />
                    )
                  ) : (
                    <></>
                  )}
                </span>
                <span
                  className="sample-btn"
                  onClick={() => {
                    handle_sample("test");
                  }}
                >
                  نمونه آزمون
                  {open_sample_drop_down === "test" ? (
                    single_course ? (
                      azmonha && azmonha.length !== 0 ? (
                        <span className="sample-files">
                          {azmonha.map((sf) => (
                            <a
                              key={sf.file_id}
                              target="_blank"
                              href={sf.file_link}
                              className="sample-file"
                            >
                              دانلود نمونه آزمون
                            </a>
                          ))}
                        </span>
                      ) : (
                        <span className="sample-files">
                          <span className="sample-file">فایل ندارد</span>
                        </span>
                      )
                    ) : (
                      <LittleLoading />
                    )
                  ) : (
                    <></>
                  )}
                </span>
                <span
                  className="sample-btn"
                  onClick={() => {
                    handle_sample("taklif");
                  }}
                >
                  نمونه تکلیف
                  {open_sample_drop_down === "taklif" ? (
                    single_course ? (
                      taklifha && taklifha.length !== 0 ? (
                        <span className="sample-files">
                          {taklifha.map((sf) => (
                            <a
                              key={sf.file_id}
                              target="_blank"
                              href={sf.file_link}
                              className="sample-file"
                            >
                              دانلود نمونه تکلیف
                            </a>
                          ))}
                        </span>
                      ) : (
                        <span className="sample-files">
                          <span className="sample-file">فایل ندارد</span>
                        </span>
                      )
                    ) : (
                      <LittleLoading />
                    )
                  ) : (
                    <></>
                  )}
                </span>
              </div>
            </div>
            <div className="students-comments-wrapper">
              <h3 className="semi-2-title">نظرات دانش آموزان</h3>

              <div
                className={
                  more_cm ? "comments-wrapper open-cm" : "comments-wrapper"
                }
              >
                <div className="comment">
                  <span className="name-avatar">
                    <img src={avatar} alt="" />
                    شاهین اکبری
                  </span>
                  <p className="comment-text">
                    کنکورو نمیدونم خراب کردم یا نه 😅منتظر نتایجم ... خلاصه کاد
                    استادای باتجربه ای داره متاسفانه دیر آشنا شدم باهاتون استاد
                    سودیان استاد مرتضوی عالیییی ( من کلاساتون شرکت نکردم فقط تو
                    همایش رایگان شرکت کردم....) ولی تعریف بقیه استاداتون رو هم
                    شنیدم خلاصه کاد بهترین موسسه برای کنکور هست 🫶🏼
                  </p>
                </div>
                <div className="comment">
                  <span className="name-avatar">
                    <img src={avatar} alt="" />
                    محمد کاظمی
                  </span>
                  <p className="comment-text">
                    سلام مرسی که امسال کنارمون بودید واقعا کلاساتون خیلی تاثیر
                    داشت برام. از مجموعه تون و استاداتون خیلی راضی بودم اگه
                    برگردم عقب قطعا کلاسای بیشتری و شرکت میکردم خلاصه که خیلی
                    خوبید همیشه همینجوری بمونید❤️
                  </p>
                </div>
                <div className="comment">
                  <span className="name-avatar">
                    <img src={avatar} alt="" />
                    پریسا شریفی
                  </span>
                  <p className="comment-text">
                    مرسی بابت تیمتون کاد امسال خیلی کمکم کرد💛✨امیدوارم هرکدوم
                    از ماهایی که واقعا تلاش کردیم نتیجشو بزودی ببینیم
                  </p>
                </div>
                <div className="comment">
                  <span className="name-avatar">
                    <img src={avatar} alt="" />
                    ملیکا موسوی
                  </span>
                  <p className="comment-text">
                    دعا کنید ک بهترین نتیجه ها برامون رقم بخوره🥲💙 آشنایی با
                    مجموعه شما برام خیلیی خیلیییی خوب بود،ممنون ازتون ،امیدوارم
                    موفق و شاد باشید.
                  </p>
                </div>
                <div className="comment">
                  <span className="name-avatar">
                    <img src={avatar} alt="" />
                    فرشید کریمی
                  </span>
                  <p className="comment-text">
                    کاد بهترینه شاید زیاد معروف نباشین ولی بی شک بهترین اساتید و
                    بی حاشیه ترین استادا رو دارین
                  </p>
                </div>
                <span
                  onClick={() => {
                    handle_cm();
                  }}
                  className={more_cm ? "more close" : "more"}
                >
                  {more_cm ? "کمتر" : "بیشتر"}
                  <img src={downArrowBlue} alt="" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

// export default SingleCourse;
// class SingleCourse2 extends Component {
//   state = {
//     more_desc: false,
//     more_cm: false,
//     class_carousel_pos: 0,
//     open_sample_drop_down: false,
//   };
//   componentDidMount() {
//     const my_path = window.location.pathname.split("/")[2];
//     let page_id;
//     const test_slug = decodeURIComponent(my_path);
//     if (/\d/.test(test_slug)) {
//       page_id = parseInt(my_path);
//     } else {
//       page_id = decodeURIComponent(my_path);
//     }
//     this.props.find_single_course(page_id);
//     const data_check = setInterval(() => {
//       if (this.props.single_course) {
//         clearInterval(data_check);
//       } else {
//         this.props.find_single_course(page_id);
//       }
//     }, 2000);
//   }
//   handle_cm = () => {
//     const more_cm = !more_cm;
//     this.setState({ more_cm });
//   };
//   handle_desc = () => {
//     const more_desc = !more_desc;
//     this.setState({ more_desc });
//   };
//   course_carousel = (way) => {
//     const class_carousel_pos = class_carousel_pos;
//     const my_length = Math.floor(this.props.single_course.kelases.length / 4);
//     if (way === "next") {
//       if (my_length !== class_carousel_pos)
//         this.setState({ class_carousel_pos: class_carousel_pos + 1 });
//     } else {
//       if (class_carousel_pos !== 0)
//         this.setState({ class_carousel_pos: class_carousel_pos - 1 });
//     }
//   };
//   handle_sample = (open_sample_drop_down) => {
//     if (open_sample_drop_down !== open_sample_drop_down)
//       this.setState({ open_sample_drop_down });
//     else {
//       this.setState({ open_sample_drop_down: false });
//     }
//   };
//   render() {
//     const { single_course, cart, handle_cart, request_id } = this.props;
//     const jozveha = single_course
//       ? [
//           ...single_course.sample_files.pdf_sample_files.filter(
//             (f) =>
//               f.file_type === "نمونه جزوه" &&
//               !f.is_for_jalase &&
//               f.dore_id === single_course.dore_id
//           ),
//         ]
//       : false;
//     const taklifha = single_course
//       ? [
//           ...single_course.sample_files.pdf_sample_files.filter(
//             (f) =>
//               f.file_type === "نمونه تکلیف" &&
//               !f.is_for_jalase &&
//               f.dore_id === single_course.dore_id
//           ),
//         ]
//       : false;
//     const azmonha = single_course
//       ? [
//           ...single_course.sample_files.pdf_sample_files.filter(
//             (f) =>
//               f.file_type === "نمونه آزمون" &&
//               !f.is_for_jalase &&
//               f.dore_id === single_course.dore_id
//           ),
//         ]
//       : false;
//     const nemone_tadris = single_course
//       ? [
//           ...single_course.sample_files.video_sample_files.filter(
//             (f) =>
//               f.file_type === "نمونه تدریس" &&
//               !f.is_for_jalase &&
//               f.dore_id === single_course.dore_id
//           ),
//         ]
//       : false;
//     const intro_video = single_course
//       ? {
//           ...single_course.sample_files.video_sample_files.filter(
//             (f) =>
//               f.file_type === "معرفی دوره" &&
//               !f.is_for_jalase &&
//               f.dore_id === single_course.dore_id
//           ),
//         }
//       : false;
//     return (
//       <>
//         <Helmet>
//           <title>{single_course ? single_course.dore_title : "دوره"}</title>
//           <meta
//             name="description"
//             content={`دوره ${single_course ? single_course.dore_title : ""}`}
//           />
//           <meta
//             name="keywords"
//             content={`${single_course ? single_course.dore_title : ""}`}
//           />
//         </Helmet>
//         <section className="bgc-wrapper single-course-wrapper">
//           <div className="single_course mm-width">
//             <SideBar />
//             <div className="main-content">
//               <h1 className="title">
//                 {single_course ? single_course.dore_title : <LittleLoading />}
//               </h1>
//               <div className="intro-class-wrapper">
//                 <div className="intro-course">
//                   <h2 className="intro-title h2-before">معرفی دوره</h2>
//                   <ul
//                     className={
//                       single_course
//                         ? more_desc && single_course.descriptions.length > 1
//                           ? "course-description visible-desc"
//                           : "course-description"
//                         : "course-description"
//                     }
//                   >
//                     {single_course ? (
//                       single_course.descriptions.length !== 0 ? (
//                         single_course.descriptions.map((d, i) => (
//                           <li key={i++}>{d}</li>
//                         ))
//                       ) : (
//                         <li> هنوز توضیحات دوره ثبت نشده</li>
//                       )
//                     ) : (
//                       ""
//                     )}
//                     {single_course ? (
//                       single_course.descriptions.length > 1 ? (
//                         <li
//                           onClick={() => {
//                             this.handle_desc();
//                           }}
//                           className="more-description"
//                         >
//                           {more_desc ? "کمتر ... " : "بیشتر ..."}
//                         </li>
//                       ) : (
//                         <></>
//                       )
//                     ) : (
//                       <></>
//                     )}
//                   </ul>
//                 </div>
//                 <div className="class-details">
//                   <span className="video-wrapper">
//                     {Object.keys(intro_video).length !== 0 ? (
//                       <AparatVideo src={intro_video.file_link} />
//                     ) : (
//                       "ویدیو برای دوره قرار نگرفته است"
//                     )}

//                     {/* <AparatVideo /> */}
//                   </span>
//                   <span className="class-time">
//                     <img src={classCal} alt="" />
//                     <span className="class-text">
//                       تاریخ شروع دوره:
//                       <span className="date-dore">
//                         {single_course ? (
//                           new Date(
//                             single_course.dore_start_date
//                           ).toLocaleDateString("fa-IR")
//                         ) : (
//                           <LittleLoading />
//                         )}
//                       </span>
//                     </span>
//                   </span>
//                 </div>
//               </div>
//               <div className="teachers-part-wrapper">
//                 <h2 className="teachers-title h2-before">استاد های دوره</h2>
//                 <div className="teachers-wrapper-btn">
//                   {single_course && single_course.kelases.length >= 4 ? (
//                     <span
//                       className="prev arrows"
//                       onClick={() => {
//                         this.course_carousel("prev");
//                       }}
//                     >
//                       <img
//                         src={teacherNext}
//                         alt="بعدی"
//                         width={15}
//                         height={28}
//                         loading="lazy"
//                       />
//                     </span>
//                   ) : (
//                     ""
//                   )}
//                   <div className={"teachers-wrapper car-" + class_carousel_pos}>
//                     {single_course.kelases ? (
//                       single_course.kelases.map((k, i) => (
//                         <div className="teacher" key={i++}>
//                           <span className="img-name-date">
//                             <Link
//                               onClick={() => {
//                                 scrollToTop();
//                               }}
//                               to={`/Shop/product/${k.slug_name}`}
//                               className="img-wrapper"
//                             >
//                               <img
//                                 src={k.image_link}
//                                 alt={k.kelas_title}
//                                 loading="lazy"
//                               />
//                             </Link>
//                             <h3 className="teacher-name">
//                               <Link
//                                 onClick={() => {
//                                   scrollToTop();
//                                 }}
//                                 to={`/Teachers/${single_course.teachers[i].slug_name}`}
//                               >
//                                 {single_course.teachers[i].fullname}
//                               </Link>
//                             </h3>
//                             <span className="dates">
//                               {k.stream_plans.map(
//                                 (p) => convert_days(p.week_day_english) + " "
//                               )}
//                             </span>
//                           </span>
//                           {cart ? (
//                             cart.items_ids.includes(k.kelas_id) ? (
//                               <span
//                                 className="add-teacher"
//                                 onClick={() => {
//                                   handle_cart(k.kelas_id);
//                                 }}
//                               >
//                                 {request_id === k.kelas_id ? (
//                                   <LittleLoading />
//                                 ) : (
//                                   <img
//                                     src={plusWhiteCircle}
//                                     alt=""
//                                     className="rotate-45"
//                                   />
//                                 )}

//                                 {k.price ? (
//                                   k.discounted_price ? (
//                                     <>
//                                       <span className="discounted-price">
//                                         {spilit_in_three(
//                                           convert_to_persian(k.price)
//                                         )}
//                                       </span>
//                                       <span className="normal-price">
//                                         {spilit_in_three(
//                                           convert_to_persian(k.discounted_price)
//                                         )}
//                                       </span>
//                                       <span className="currency">تومان</span>
//                                     </>
//                                   ) : (
//                                     <>
//                                       <span className="discounted-price"></span>
//                                       <span className="normal-price">
//                                         {spilit_in_three(
//                                           convert_to_persian(k.price)
//                                         )}
//                                       </span>
//                                       <span className="currency">تومان</span>
//                                     </>
//                                   )
//                                 ) : (
//                                   <>
//                                     <span className="discounted-price"></span>
//                                     <span className="normal-price"></span>
//                                     <span className="currency">رایگان</span>
//                                   </>
//                                 )}
//                               </span>
//                             ) : (
//                               <span
//                                 className="add-teacher"
//                                 onClick={() => {
//                                   handle_cart(k.kelas_id);
//                                 }}
//                               >
//                                 {request_id === k.kelas_id ? (
//                                   <LittleLoading />
//                                 ) : (
//                                   <img src={plusWhiteCircle} alt="" />
//                                 )}
//                                 {k.price ? (
//                                   k.discounted_price ? (
//                                     <>
//                                       <span className="discounted-price">
//                                         {spilit_in_three(
//                                           convert_to_persian(k.price)
//                                         )}
//                                       </span>
//                                       <span className="normal-price">
//                                         {spilit_in_three(
//                                           convert_to_persian(k.discounted_price)
//                                         )}
//                                       </span>
//                                       <span className="currency">تومان</span>
//                                     </>
//                                   ) : (
//                                     <>
//                                       <span className="discounted-price"></span>
//                                       <span className="normal-price">
//                                         {spilit_in_three(
//                                           convert_to_persian(k.price)
//                                         )}
//                                       </span>
//                                       <span className="currency">تومان</span>
//                                     </>
//                                   )
//                                 ) : (
//                                   <>
//                                     <span className="discounted-price"></span>
//                                     <span className="normal-price"></span>
//                                     <span className="currency">رایگان</span>
//                                   </>
//                                 )}
//                               </span>
//                             )
//                           ) : (
//                             <Link
//                               onClick={() => {
//                                 scrollToTop();
//                               }}
//                               to={"/Login"}
//                               className="add-teacher"
//                             >
//                               <img src={plusWhiteCircle} alt="" />
//                               {k.price ? (
//                                 k.discounted_price ? (
//                                   <>
//                                     <span className="discounted-price">
//                                       {spilit_in_three(
//                                         convert_to_persian(k.price)
//                                       )}
//                                     </span>
//                                     <span className="normal-price">
//                                       {spilit_in_three(
//                                         convert_to_persian(k.discounted_price)
//                                       )}
//                                     </span>
//                                     <span className="currency">تومان</span>
//                                   </>
//                                 ) : (
//                                   <>
//                                     <span className="discounted-price"></span>
//                                     <span className="normal-price">
//                                       {spilit_in_three(
//                                         convert_to_persian(k.price)
//                                       )}
//                                     </span>
//                                     <span className="currency">تومان</span>
//                                   </>
//                                 )
//                               ) : (
//                                 <>
//                                   <span className="discounted-price"></span>
//                                   <span className="normal-price"></span>
//                                   <span className="currency">رایگان</span>
//                                 </>
//                               )}
//                             </Link>
//                           )}
//                         </div>
//                       ))
//                     ) : (
//                       <></>
//                     )}
//                   </div>
//                   {single_course && single_course.kelases.length >= 4 ? (
//                     <span
//                       className="next arrows"
//                       onClick={() => {
//                         this.course_carousel("next");
//                       }}
//                     >
//                       <img
//                         src={teacherNext}
//                         alt="بعدی"
//                         width={15}
//                         height={28}
//                         loading="lazy"
//                       />
//                     </span>
//                   ) : (
//                     ""
//                   )}
//                 </div>
//               </div>
//               <div className="sample-teach-wrapper">
//                 <h2 className="h2-before teacher-sample-title">نمونه تدریس</h2>
//                 <div className="samples-wrapper-btns">
//                   {/* {single_course ? (
//                     nemone_tadris.length >= 4 ? (
//                       <span className="arrows prev">
//                         <img src={teacherNext} alt="" />
//                       </span>
//                     ) : (
//                       ""
//                     )
//                   ) : (
//                     <span className="arrows prev">
//                       <img src={teacherNext} alt="" />
//                     </span>
//                   )} */}
//                   <div className="samples-wrapper">
//                     {single_course ? (
//                       nemone_tadris.length !== 0 && nemone_tadris ? (
//                         nemone_tadris.map((sv) => (
//                           <div key={sv.file_id} className="sample-wrapper">
//                             <span className="img-wrapper">
//                               <AparatVideo src={sv.file_link} />
//                             </span>
//                           </div>
//                         ))
//                       ) : (
//                         <span className="no-sample">
//                           نمونه تدریسی برای نمایش وجود ندارد
//                         </span>
//                       )
//                     ) : (
//                       <></>
//                     )}
//                   </div>
//                   {/* {single_course ? (
//                     nemone_tadris.length >= 4 ? (
//                       <span className="arrows next">
//                         <img src={teacherNext} alt="" />
//                       </span>
//                     ) : (
//                       ""
//                     )
//                   ) : (
//                     <span className="arrows next">
//                       <img src={teacherNext} alt="" />
//                     </span>
//                   )} */}
//                 </div>
//                 <div className="sample-btns-wrapper">
//                   <span
//                     className="sample-btn"
//                     onClick={() => {
//                       this.handle_sample("jozve");
//                     }}
//                   >
//                     نمونه جزوه
//                     {this.state.open_sample_drop_down === "jozve" ? (
//                       single_course ? (
//                         jozveha && jozveha.length !== 0 ? (
//                           <span className="sample-files">
//                             {jozveha.map((sf) => (
//                               <a
//                                 key={sf.file_id}
//                                 target="_blank"
//                                 href={sf.file_link}
//                                 className="sample-file"
//                               >
//                                 دانلود نمونه جزوه
//                               </a>
//                             ))}
//                           </span>
//                         ) : (
//                           <span className="sample-files">
//                             <span className="sample-file">فایل ندارد</span>
//                           </span>
//                         )
//                       ) : (
//                         <LittleLoading />
//                       )
//                     ) : (
//                       <></>
//                     )}
//                   </span>
//                   <span
//                     className="sample-btn"
//                     onClick={() => {
//                       this.handle_sample("test");
//                     }}
//                   >
//                     نمونه آزمون
//                     {this.state.open_sample_drop_down === "test" ? (
//                       single_course ? (
//                         azmonha && azmonha.length !== 0 ? (
//                           <span className="sample-files">
//                             {azmonha.map((sf) => (
//                               <a
//                                 key={sf.file_id}
//                                 target="_blank"
//                                 href={sf.file_link}
//                                 className="sample-file"
//                               >
//                                 دانلود نمونه آزمون
//                               </a>
//                             ))}
//                           </span>
//                         ) : (
//                           <span className="sample-files">
//                             <span className="sample-file">فایل ندارد</span>
//                           </span>
//                         )
//                       ) : (
//                         <LittleLoading />
//                       )
//                     ) : (
//                       <></>
//                     )}
//                   </span>
//                   <span
//                     className="sample-btn"
//                     onClick={() => {
//                       this.handle_sample("taklif");
//                     }}
//                   >
//                     نمونه تکلیف
//                     {this.state.open_sample_drop_down === "taklif" ? (
//                       single_course ? (
//                         taklifha && taklifha.length !== 0 ? (
//                           <span className="sample-files">
//                             {taklifha.map((sf) => (
//                               <a
//                                 key={sf.file_id}
//                                 target="_blank"
//                                 href={sf.file_link}
//                                 className="sample-file"
//                               >
//                                 دانلود نمونه تکلیف
//                               </a>
//                             ))}
//                           </span>
//                         ) : (
//                           <span className="sample-files">
//                             <span className="sample-file">فایل ندارد</span>
//                           </span>
//                         )
//                       ) : (
//                         <LittleLoading />
//                       )
//                     ) : (
//                       <></>
//                     )}
//                   </span>
//                 </div>
//               </div>
//               <div className="students-comments-wrapper">
//                 <h3 className="semi-2-title">نظرات دانش آموزان</h3>
//                 {/* <textarea
//                   name=""
//                   id=""
//                   placeholder="type ..."
//                   className="text-area"></textarea>
//                 <span className="submit-btn-wrapper">
//                   <span className="submit-comment">ارسال</span>
//                 </span> */}
//                 <div
//                   className={
//                     more_cm ? "comments-wrapper open-cm" : "comments-wrapper"
//                   }
//                 >
//                   <div className="comment">
//                     <span className="name-avatar">
//                       <img src={avatar} alt="" />
//                       شاهین اکبری
//                     </span>
//                     <p className="comment-text">
//                       کنکورو نمیدونم خراب کردم یا نه 😅منتظر نتایجم ... خلاصه
//                       کاد استادای باتجربه ای داره متاسفانه دیر آشنا شدم باهاتون
//                       استاد سودیان استاد مرتضوی عالیییی ( من کلاساتون شرکت نکردم
//                       فقط تو همایش رایگان شرکت کردم....) ولی تعریف بقیه
//                       استاداتون رو هم شنیدم خلاصه کاد بهترین موسسه برای کنکور
//                       هست 🫶🏼
//                     </p>
//                   </div>
//                   <div className="comment">
//                     <span className="name-avatar">
//                       <img src={avatar} alt="" />
//                       محمد کاظمی
//                     </span>
//                     <p className="comment-text">
//                       سلام مرسی که امسال کنارمون بودید واقعا کلاساتون خیلی تاثیر
//                       داشت برام. از مجموعه تون و استاداتون خیلی راضی بودم اگه
//                       برگردم عقب قطعا کلاسای بیشتری و شرکت میکردم خلاصه که خیلی
//                       خوبید همیشه همینجوری بمونید❤️
//                     </p>
//                   </div>
//                   <div className="comment">
//                     <span className="name-avatar">
//                       <img src={avatar} alt="" />
//                       پریسا شریفی
//                     </span>
//                     <p className="comment-text">
//                       مرسی بابت تیمتون کاد امسال خیلی کمکم کرد💛✨امیدوارم
//                       هرکدوم از ماهایی که واقعا تلاش کردیم نتیجشو بزودی ببینیم
//                     </p>
//                   </div>
//                   <div className="comment">
//                     <span className="name-avatar">
//                       <img src={avatar} alt="" />
//                       ملیکا موسوی
//                     </span>
//                     <p className="comment-text">
//                       دعا کنید ک بهترین نتیجه ها برامون رقم بخوره🥲💙 آشنایی با
//                       مجموعه شما برام خیلیی خیلیییی خوب بود،ممنون ازتون
//                       ،امیدوارم موفق و شاد باشید.
//                     </p>
//                   </div>
//                   <div className="comment">
//                     <span className="name-avatar">
//                       <img src={avatar} alt="" />
//                       فرشید کریمی
//                     </span>
//                     <p className="comment-text">
//                       کاد بهترینه شاید زیاد معروف نباشین ولی بی شک بهترین اساتید
//                       و بی حاشیه ترین استادا رو دارین
//                     </p>
//                   </div>
//                   {/* <div className="comment">
//                     <span className="name-avatar">
//                       <img src={avatar} alt="" />
//                       نام کاربری
//                     </span>
//                     <p className="comment-text">
//                       لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم استفاده از
//                       طراحان گرافیک است.
//                     </p>
//                   </div> */}

//                   <span
//                     onClick={() => {
//                       this.handle_cm();
//                     }}
//                     className={this.state.more_cm ? "more close" : "more"}
//                   >
//                     {this.state.more_cm ? "کمتر" : "بیشتر"}
//                     <img src={downArrowBlue} alt="" />
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//       </>
//     );
//   }
// }

export default SingleCourse;
