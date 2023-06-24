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
class SingleCourse extends Component {
  state = {
    more_desc: false,
    more_cm: false,
    // teacher_carousel: false,
    // teacher_carousel_pos: 0,
  };
  componentDidMount() {
    const my_path = parseInt(window.location.pathname.split("/")[2]);
    this.props.find_single_course(my_path);
  }
  start_page = () => {
    // const my_path = parseInt(window.location.pathname.split("/")[2]);
    // const { doreha, kelasses, teachers } = this.props;
    // if (doreha && kelasses && teachers) {
    //   const dore_kelases = [];
    //   const dore_teachers = [];
    //   const dore = doreha.find((d) => d.dore_id === my_path);
    //   if (dore) this.setState({ dore });
    //   else window.location.pathname = "/not-found";
    //   dore.kelases.forEach((k_id) => {
    //     const kelas = kelasses.find((k) => k_id === k.kelas_id);
    //     if (kelas) {
    //       kelas.teachers.forEach((t_id) => {
    //         const teacher = teachers.find((t) => t_id === t.teacher_id);
    //         if (teacher) dore_teachers.push(teacher);
    //       });
    //       if (dore_teachers.length === 1) {
    //         //kelas.teachers = dore_teachers;
    //         dore_kelases.push(kelas);
    //       } else {
    //         dore_teachers.forEach((t) => {
    //           //kelas.teachers = [...t];
    //           dore_kelases.push(kelas);
    //         });
    //       }
    //     }
    //   });
    //   this.setState({ dore_kelases, dore_teachers });
    //   if (dore_kelases.length <= 4) this.setState({ teacher_carousel: false });
    //   else this.setState({ teacher_carousel: true });
    // }
  };
  handle_cm = () => {
    const more_cm = !this.state.more_cm;
    this.setState({ more_cm });
  };
  handle_desc = () => {
    const more_desc = !this.state.more_desc;
    this.setState({ more_desc });
  };
  // course_move = (way) => {
  //   const teacher_carousel_pos = this.state.teacher_carousel_pos;
  //   const my_length = Math.floor(this.state.dore_kelases.length / 4) - 1;
  //   if (way === "next") {
  //     if (my_length !== teacher_carousel_pos)
  //       this.setState({ teacher_carousel_pos: teacher_carousel_pos + 1 });
  //   } else {
  //     if (teacher_carousel_pos !== 0)
  //       this.setState({ teacher_carousel_pos: teacher_carousel_pos - 1 });
  //   }
  // };
  render() {
    const { single_course, course_move, cart } = this.props;
    // if (!doreha || !kelasses || !teachers) {
    //   return (
    //     <>
    //       <Helmet>
    //         <title>{"دوره"}</title>
    //       </Helmet>
    //       <section className="bgc-wrapper single-course-wrapper">
    //         <div className="single_course mm-width">
    //           <SideBar />
    //           <div className="main-content"></div>
    //         </div>
    //       </section>
    //     </>
    //   );
    // }
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
                      this.state.more_desc
                        ? "course-description visible-desc"
                        : "course-description"
                    }>
                    <li>{single_course ? single_course.description : ""}</li>
                    <li
                      onClick={() => {
                        this.handle_desc();
                      }}
                      className="more-description">
                      {single_course.more_desc ? "کمتر ... " : "بیشتر ..."}
                    </li>
                  </ul>
                </div>
                <div className="class-details">
                  <span className="video-wrapper"></span>
                  <span className="class-time">
                    <img src={classCal} alt="" />
                    <span className="class-text">تاریخ شروع دوره:</span>
                  </span>
                </div>
              </div>
              <div className="teachers-part-wrapper">
                <h2 className="teachers-title h2-before">اساتید</h2>
                <div className="teachers-wrapper-btn">
                  {single_course.teacher_carousel ? (
                    <span
                      className="prev arrows"
                      onClick={() => {
                        course_move("prev");
                      }}>
                      <img src={teacherNext} alt="" />
                    </span>
                  ) : (
                    ""
                  )}
                  <div
                    className={
                      "teachers-wrapper car-" +
                      single_course.teacher_carousel_pos
                    }>
                    {single_course.kelases ? (
                      single_course.kelases.map((k, i) => (
                        <div className="teacher" key={i++}>
                          <span className="img-name-date">
                            <span className="img-wrapper">
                              <img src="" alt={k.kelas_title} />
                            </span>
                            <h3 className="teacher-name">
                              {single_course.teachers[i].fullname}
                            </h3>
                            <span className="dates">روز های برگزاری</span>
                          </span>
                          {cart ? (
                            cart.items_ids.includes(k.kelas_id) ? (
                              <span className="add-teacher">
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
                            ) : (
                              <span className="add-teacher">
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
                          {/* <span className="add-teacher">
                            <img src={plusWhiteCircle} alt="" />
                            <span className="discounted-price">
                              {spilit_in_three(convert_to_persian(123456))}
                            </span>
                            <span className="normal-price">
                              {spilit_in_three(convert_to_persian(123456))}
                            </span>
                            <span className="currency">تومان</span>
                          </span> */}
                        </div>
                      ))
                    ) : (
                      <></>
                    )}

                    {/* <div className="teacher">
                      <span className="img-name-date">
                        <span className="img-wrapper">
                          <img src="" alt="" />
                        </span>
                        <h3 className="teacher-name">نام استاد</h3>
                        <span className="dates">روز های برگزاری</span>
                      </span>
                      <span className="add-teacher">
                        <img src={plusWhiteCircle} alt="" />
                        <span className="discounted-price">
                          {spilit_in_three(convert_to_persian(123456))}
                        </span>
                        <span className="normal-price">
                          {spilit_in_three(convert_to_persian(123456))}
                        </span>
                        <span className="currency">تومان</span>
                      </span>
                    </div>
                    <div className="teacher">
                      <span className="img-name-date">
                        <span className="img-wrapper">
                          <img src="" alt="" />
                        </span>
                        <h3 className="teacher-name">نام استاد</h3>
                        <span className="dates">روز های برگزاری</span>
                      </span>
                      <span className="add-teacher">
                        <img src={plusWhiteCircle} alt="" />
                        <span className="discounted-price">
                          {spilit_in_three(convert_to_persian(123456))}
                        </span>
                        <span className="normal-price">
                          {spilit_in_three(convert_to_persian(123456))}
                        </span>
                        <span className="currency">تومان</span>
                      </span>
                    </div>
                    <div className="teacher">
                      <span className="img-name-date">
                        <span className="img-wrapper">
                          <img src="" alt="" />
                        </span>
                        <h3 className="teacher-name">نام استاد</h3>
                        <span className="dates">روز های برگزاری</span>
                      </span>
                      <span className="add-teacher">
                        <img src={plusWhiteCircle} alt="" />
                        <span className="discounted-price">
                          {spilit_in_three(convert_to_persian(123456))}
                        </span>
                        <span className="normal-price">
                          {spilit_in_three(convert_to_persian(123456))}
                        </span>
                        <span className="currency">تومان</span>
                      </span>
                    </div>
                    <div className="teacher">
                      <span className="img-name-date">
                        <span className="img-wrapper">
                          <img src="" alt="" />
                        </span>
                        <h3 className="teacher-name">نام استاد</h3>
                        <span className="dates">روز های برگزاری</span>
                      </span>
                      <span className="add-teacher">
                        <img src={plusWhiteCircle} alt="" />
                        <span className="discounted-price">
                          {spilit_in_three(convert_to_persian(123456))}
                        </span>
                        <span className="normal-price">
                          {spilit_in_three(convert_to_persian(123456))}
                        </span>
                        <span className="currency">تومان</span>
                      </span>
                    </div>
                    <div className="teacher">
                      <span className="img-name-date">
                        <span className="img-wrapper">
                          <img src="" alt="" />
                        </span>
                        <h3 className="teacher-name">نام استاد</h3>
                        <span className="dates">روز های برگزاری</span>
                      </span>
                      <span className="add-teacher">
                        <img src={plusWhiteCircle} alt="" />
                        <span className="discounted-price">
                          {spilit_in_three(convert_to_persian(123456))}
                        </span>
                        <span className="normal-price">
                          {spilit_in_three(convert_to_persian(123456))}
                        </span>
                        <span className="currency">تومان</span>
                      </span>
                    </div>
                    <div className="teacher">
                      <span className="img-name-date">
                        <span className="img-wrapper">
                          <img src="" alt="" />
                        </span>
                        <h3 className="teacher-name">نام استاد</h3>
                        <span className="dates">روز های برگزاری</span>
                      </span>
                      <span className="add-teacher">
                        <img src={plusWhiteCircle} alt="" />
                        <span className="discounted-price">
                          {spilit_in_three(convert_to_persian(123456))}
                        </span>
                        <span className="normal-price">
                          {spilit_in_three(convert_to_persian(123456))}
                        </span>
                        <span className="currency">تومان</span>
                      </span>
                    </div> */}
                  </div>
                  {single_course.teacher_carousel ? (
                    <span
                      className="next arrows"
                      onClick={() => {
                        course_move("next");
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
                  <span className="arrows prev">
                    <img src={teacherNext} alt="" />
                  </span>
                  <div className="samples-wrapper">
                    <div className="sample-wrapper">
                      <span className="img-wrapper">
                        <img src="" alt="" />
                      </span>
                      <span className="links">دریافت نمونه جزوه</span>
                      <span className="links">دریافت نمونه آزمون</span>
                      <span className="links">دریافت نمونه تکلیف</span>
                    </div>
                    <div className="sample-wrapper">
                      <span className="img-wrapper">
                        <img src="" alt="" />
                      </span>
                      <span className="links">دریافت نمونه جزوه</span>
                      <span className="links">دریافت نمونه آزمون</span>
                      <span className="links">دریافت نمونه تکلیف</span>
                    </div>
                    <div className="sample-wrapper">
                      <span className="img-wrapper">
                        <img src="" alt="" />
                      </span>
                      <span className="links">دریافت نمونه جزوه</span>
                      <span className="links">دریافت نمونه آزمون</span>
                      <span className="links">دریافت نمونه تکلیف</span>
                    </div>
                    <div className="sample-wrapper">
                      <span className="img-wrapper">
                        <img src="" alt="" />
                      </span>
                      <span className="links">دریافت نمونه جزوه</span>
                      <span className="links">دریافت نمونه آزمون</span>
                      <span className="links">دریافت نمونه تکلیف</span>
                    </div>
                    <div className="sample-wrapper">
                      <span className="img-wrapper">
                        <img src="" alt="" />
                      </span>
                      <span className="links">دریافت نمونه جزوه</span>
                      <span className="links">دریافت نمونه آزمون</span>
                      <span className="links">دریافت نمونه تکلیف</span>
                    </div>
                    <div className="sample-wrapper">
                      <span className="img-wrapper">
                        <img src="" alt="" />
                      </span>
                      <span className="links">دریافت نمونه جزوه</span>
                      <span className="links">دریافت نمونه آزمون</span>
                      <span className="links">دریافت نمونه تکلیف</span>
                    </div>
                    <div className="sample-wrapper">
                      <span className="img-wrapper">
                        <img src="" alt="" />
                      </span>
                      <span className="links">دریافت نمونه جزوه</span>
                      <span className="links">دریافت نمونه آزمون</span>
                      <span className="links">دریافت نمونه تکلیف</span>
                    </div>
                    <div className="sample-wrapper">
                      <span className="img-wrapper">
                        <img src="" alt="" />
                      </span>
                      <span className="links">دریافت نمونه جزوه</span>
                      <span className="links">دریافت نمونه آزمون</span>
                      <span className="links">دریافت نمونه تکلیف</span>
                    </div>
                  </div>
                  <span className="arrows next">
                    <img src={teacherNext} alt="" />
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
