import React, { Component } from "react";
import { Helmet } from "react-helmet";
import SideBar from "../side-bar/side-bar";
import withWebsiteData from "../hoc/with-website-data";
import spilit_in_three from "../functions/spilit_in_three";
import convert_to_persian from "../functions/convert-to-persian";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

import classCal from "../../assets/images/class-cal.svg";
import teacherNext from "../../assets/images/next-btn-teacher.svg";
import plusWhiteCircle from "../../assets/images/plus-white-circle.svg";
import downArrowBlue from "../../assets/images/down-arrow-blue.svg";
import avatar from "../../assets/images/avatar.svg";
import LittleLoading from "../reuseables/little-loading";
import convert_days from "../functions/convert-days";
class SingleCourse extends Component {
  state = {
    more_desc: false,
    more_cm: false,
    class_carousel_pos: 0,
    open_sample_drop_down: false,
  };
  componentDidMount() {
    const my_path = parseInt(window.location.pathname.split("/")[2]);
    this.props.find_single_course(my_path);
    const data_check = setInterval(() => {
      if (this.props.single_course) {
        clearInterval(data_check);
      } else {
        this.props.find_single_course(my_path);
      }
    }, 2000);
  }
  handle_cm = () => {
    const more_cm = !this.state.more_cm;
    this.setState({ more_cm });
  };
  handle_desc = () => {
    const more_desc = !this.state.more_desc;
    this.setState({ more_desc });
  };
  course_carousel = (way) => {
    const class_carousel_pos = this.state.class_carousel_pos;
    const my_length = Math.floor(this.props.single_course.kelases.length / 4);
    if (way === "next") {
      if (my_length !== class_carousel_pos)
        this.setState({ class_carousel_pos: class_carousel_pos + 1 });
    } else {
      if (class_carousel_pos !== 0)
        this.setState({ class_carousel_pos: class_carousel_pos - 1 });
    }
  };
  handle_sample = (open_sample_drop_down) => {
    if (open_sample_drop_down !== this.state.open_sample_drop_down)
      this.setState({ open_sample_drop_down });
    else {
      this.setState({ open_sample_drop_down: false });
    }
  };
  render() {
    const { single_course, cart, handle_cart, request_id } = this.props;
    const jozveha = single_course
      ? [
          ...single_course.sample_files.pdf_sample_files.filter(
            (f) => f.file_type === "نمونه جزوه" && !f.is_for_jalase
          ),
        ]
      : false;
    const taklifha = single_course
      ? [
          ...single_course.sample_files.pdf_sample_files.filter(
            (f) => f.file_type === "نمونه تکلیف" && !f.is_for_jalase
          ),
        ]
      : false;
    const azmonha = single_course
      ? [
          ...single_course.sample_files.pdf_sample_files.filter(
            (f) => f.file_type === "نمونه آزمون" && !f.is_for_jalase
          ),
        ]
      : false;
    const nemone_tadris = single_course
      ? [
          ...single_course.sample_files.video_sample_files.filter(
            (f) => f.file_type === "نمونه تدریس" && !f.is_for_jalase
          ),
        ]
      : false;
    return (
      <>
        <Helmet>
          <title>{single_course ? single_course.dore_title : "دوره"}</title>
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
                        ? this.state.more_desc &&
                          single_course.descriptions.length > 1
                          ? "course-description visible-desc"
                          : "course-description"
                        : "course-description"
                    }>
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
                            this.handle_desc();
                          }}
                          className="more-description">
                          {this.state.more_desc ? "کمتر ... " : "بیشتر ..."}
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
                  <span className="video-wrapper"></span>
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
                <h2 className="teachers-title h2-before">استاد های دوره</h2>
                <div className="teachers-wrapper-btn">
                  {single_course && single_course.kelases.length >= 4 ? (
                    <span
                      className="prev arrows"
                      onClick={() => {
                        this.course_carousel("prev");
                      }}>
                      <img src={teacherNext} alt="" />
                    </span>
                  ) : (
                    ""
                  )}
                  <div
                    className={
                      "teachers-wrapper car-" + this.state.class_carousel_pos
                    }>
                    {single_course.kelases ? (
                      single_course.kelases.map((k, i) => (
                        <div className="teacher" key={i++}>
                          <span className="img-name-date">
                            <Link
                              to={`/SingleProd/${k.kelas_id}`}
                              className="img-wrapper">
                              <img src={k.image_link} alt={k.kelas_title} />
                            </Link>
                            <h3 className="teacher-name">
                              <Link
                                to={`/Teacher/${single_course.teachers[i].teacher_id}`}>
                                {single_course.teachers[i].fullname}
                              </Link>
                            </h3>
                            <span className="dates">
                              {k.stream_plans.map(
                                (p) => convert_days(p.week_day_english) + " "
                              )}
                            </span>
                          </span>
                          {cart ? (
                            cart.items_ids.includes(k.kelas_id) ? (
                              <span
                                className="add-teacher"
                                onClick={() => {
                                  handle_cart(k.kelas_id);
                                }}>
                                {request_id === k.kelas_id ? (
                                  <LittleLoading />
                                ) : (
                                  <img
                                    src={plusWhiteCircle}
                                    alt=""
                                    className="rotate-45"
                                  />
                                )}

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
                                  handle_cart(k.kelas_id);
                                }}>
                                {request_id === k.kelas_id ? (
                                  <LittleLoading />
                                ) : (
                                  <img src={plusWhiteCircle} alt="" />
                                )}
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
                            <Link to={"/Login"} className="add-teacher">
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
                  {single_course && single_course.kelases.length >= 4 ? (
                    <span
                      className="next arrows"
                      onClick={() => {
                        this.course_carousel("next");
                      }}>
                      <img src={teacherNext} alt="" />
                    </span>
                  ) : (
                    ""
                  )}
                </div>
              </div>
              <div className="sample-teach-wrapper">
                <h2 className="h2-before teacher-sample-title">نمونه تدریس</h2>
                <div className="samples-wrapper-btns">
                  {single_course ? (
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
                  )}
                  {/* <span className="arrows prev">
                    <img src={teacherNext} alt="" />
                  </span> */}
                  <div className="samples-wrapper">
                    {/* <div className="sample-wrapper">
                      <span className="img-wrapper">
                        <img src="" alt="" />
                      </span>
                      <span className="links">دریافت نمونه جزوه</span>
                      <span className="links">دریافت نمونه آزمون</span>
                      <span className="links">دریافت نمونه تکلیف</span>
                    </div> */}

                    {/* {single_course ? (
                      single_course.sample_files.pdf_sample_files.length !==
                      0 ? (
                        single_course.sample_files.pdf_sample_files.map(
                          (sf) => (
                            <div className="sample-wrapper" key={sf.file_id}>
                              {single_course.sample_files.video_sample_files
                                .length !== 0 ? (
                                <span className="img-wrapper">
                                  <img src="" alt="" />
                                </span>
                              ) : (
                                <span className="img-wrapper">
                                  <p>ویدیو نداریم</p>
                                </span>
                              )}
                              {sf.file_type === "نمونه جزوه" ? (
                                <a href={sf.file_link} className="links">
                                  دریافت نمونه جزوه
                                </a>
                              ) : (
                                <></>
                              )}
                              {sf.file_type === "نمونه آزمون" ? (
                                <a href={sf.file_link} className="links">
                                  دریافت نمونه آزمون
                                </a>
                              ) : (
                                <></>
                              )}
                              {sf.file_type === "نمونه تکلیف" ? (
                                <a href={sf.file_link} className="links">
                                  دریافت نمونه تکلیف
                                </a>
                              ) : (
                                <></>
                              )}
                            </div>
                          )
                        )
                      ) : (
                        ""
                      )
                    ) : (
                      <LittleLoading />
                    )} */}
                    {single_course ? (
                      nemone_tadris.length !== 0 && nemone_tadris ? (
                        nemone_tadris.map((sv) => (
                          <div key={sv.file_id} className="sample-wrapper">
                            <span className="img-wrapper">
                              <img src="" alt={sv.file_id} />
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
                  {single_course ? (
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
                  )}
                </div>
                <div className="sample-btns-wrapper">
                  <span
                    className="sample-btn"
                    onClick={() => {
                      this.handle_sample("jozve");
                    }}>
                    نمونه جزوه
                    {this.state.open_sample_drop_down === "jozve" ? (
                      single_course ? (
                        jozveha && jozveha.length !== 0 ? (
                          <span className="sample-files">
                            {jozveha.map((sf) => (
                              <a
                                key={sf.file_id}
                                target="_blank"
                                href={sf.file_link}
                                className="sample-file">
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
                      this.handle_sample("test");
                    }}>
                    نمونه آزمون
                    {this.state.open_sample_drop_down === "test" ? (
                      single_course ? (
                        azmonha && azmonha.length !== 0 ? (
                          <span className="sample-files">
                            {azmonha.map((sf) => (
                              <a
                                key={sf.file_id}
                                target="_blank"
                                href={sf.file_link}
                                className="sample-file">
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
                      this.handle_sample("taklif");
                    }}>
                    نمونه تکلیف
                    {this.state.open_sample_drop_down === "taklif" ? (
                      single_course ? (
                        taklifha && taklifha.length !== 0 ? (
                          <span className="sample-files">
                            {taklifha.map((sf) => (
                              <a
                                key={sf.file_id}
                                target="_blank"
                                href={sf.file_link}
                                className="sample-file">
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
                <textarea
                  name=""
                  id=""
                  placeholder="type ..."
                  className="text-area"></textarea>
                <span className="submit-btn-wrapper">
                  <span className="submit-comment">ارسال</span>
                </span>
                <div
                  className={
                    this.state.more_cm
                      ? "comments-wrapper open-cm"
                      : "comments-wrapper"
                  }>
                  <div className="comment">
                    <span className="name-avatar">
                      <img src={avatar} alt="" />
                      نام کاربری
                    </span>
                    <p className="comment-text">
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم استفاده از
                      طراحان گرافیک است.
                    </p>
                  </div>
                  <div className="comment">
                    <span className="name-avatar">
                      <img src={avatar} alt="" />
                      نام کاربری
                    </span>
                    <p className="comment-text">
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم استفاده از
                      طراحان گرافیک است.
                    </p>
                  </div>
                  <div className="comment">
                    <span className="name-avatar">
                      <img src={avatar} alt="" />
                      نام کاربری
                    </span>
                    <p className="comment-text">
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم استفاده از
                      طراحان گرافیک است.
                    </p>
                  </div>
                  <div className="comment">
                    <span className="name-avatar">
                      <img src={avatar} alt="" />
                      نام کاربری
                    </span>
                    <p className="comment-text">
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم استفاده از
                      طراحان گرافیک است.
                    </p>
                  </div>
                  <div className="comment">
                    <span className="name-avatar">
                      <img src={avatar} alt="" />
                      نام کاربری
                    </span>
                    <p className="comment-text">
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم استفاده از
                      طراحان گرافیک است.
                    </p>
                  </div>
                  <div className="comment">
                    <span className="name-avatar">
                      <img src={avatar} alt="" />
                      نام کاربری
                    </span>
                    <p className="comment-text">
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم استفاده از
                      طراحان گرافیک است.
                    </p>
                  </div>

                  <span
                    onClick={() => {
                      this.handle_cm();
                    }}
                    className={this.state.more_cm ? "more close" : "more"}>
                    {this.state.more_cm ? "کمتر" : "بیشتر"}
                    <img src={downArrowBlue} alt="" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default withWebsiteData(SingleCourse);
