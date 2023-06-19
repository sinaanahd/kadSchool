import React, { Component } from "react";
import { Helmet } from "react-helmet";
import SideBar from "../side-bar/side-bar";
import withWebsiteData from "../hoc/with-website-data";
import spilit_in_three from "../functions/spilit_in_three";
import convert_to_persian from "../functions/convert-to-persian";

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
    dore: false,
    dore_kelases: false,
    dore_teachers: false,
    teacher_carousel: false,
    teacher_carousel_pos: 0,
  };
  componentDidMount() {
    const { doreha, kelasses, teachers, initial_data } = this.props;
    if (doreha && kelasses && teachers) {
      this.start_page();
    } else {
      initial_data();
      this.start_page();
    }
  }
  start_page = () => {
    const my_path = parseInt(window.location.pathname.split("/")[2]);
    const { doreha, kelasses, teachers } = this.props;
    if (doreha && kelasses && teachers) {
      const dore_kelases = [];
      const dore_teachers = [];
      const dore = doreha.find((d) => d.dore_id === my_path);
      if (dore) this.setState({ dore });
      else window.location.pathname = "/not-found";
      dore.kelases.forEach((k_id) => {
        const kelas = kelasses.find((k) => k_id === k.kelas_id);
        if (kelas) dore_kelases.push(kelas);
      });
      dore_kelases.forEach((k) => {
        k.teachers.forEach((t_id) => {
          const teacher = teachers.find((t) => t_id === t.teacher_id);
          if (teacher && !dore_teachers.includes(teacher))
            dore_teachers.push(teacher);
        });
      });
      this.setState({ dore_kelases, dore_teachers });
      if (dore_teachers.length <= 4) this.setState({ teacher_carousel: false });
      else this.setState({ teacher_carousel: true });
    } else {
      setTimeout(() => {
        this.start_page();
      }, 500);
    }
  };
  handle_cm = () => {
    const more_cm = !this.state.more_cm;
    this.setState({ more_cm });
  };
  handle_desc = () => {
    const more_desc = !this.state.more_desc;
    this.setState({ more_desc });
  };
  handle_carousel_move = (way) => {
    const teacher_carousel_pos = this.state.teacher_carousel_pos;
    const my_length = Math.ceil(this.state.dore_teachers.length / 4);
    if (way === "next") {
      if (my_length !== teacher_carousel_pos)
        this.setState({ teacher_carousel_pos: teacher_carousel_pos + 1 });
    } else {
      if (teacher_carousel_pos !== 0)
        this.setState({ teacher_carousel_pos: teacher_carousel_pos - 1 });
    }
  };
  render() {
    return (
      <>
        <Helmet>
          <title>{this.state.dore ? this.state.dore.dore_title : "دوره"}</title>
        </Helmet>
        <section className="bgc-wrapper single-course-wrapper">
          <div className="single_course mm-width">
            <SideBar />
            <div className="main-content">
              <h1 className="title">
                {this.state.dore ? (
                  this.state.dore.dore_title
                ) : (
                  <LittleLoading />
                )}
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
                    <li>
                      {this.state.dore ? this.state.dore.description : ""}
                    </li>
                    {/* <li>
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                      و با استفاده از طراحان گرافیک است.
                    </li>
                    <li>
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                      و با استفاده از طراحان گرافیک است.
                    </li>
                    <li>
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                      و با استفاده از طراحان گرافیک است.
                    </li>
                    <li>
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                      و با استفاده از طراحان گرافیک است.
                    </li> */}
                    <li
                      onClick={() => {
                        this.handle_desc();
                      }}
                      className="more-description">
                      {this.state.more_desc ? "کمتر ... " : "بیشتر ..."}
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
                  {this.state.teacher_carousel ? (
                    <span
                      className="prev arrows"
                      onClick={() => {
                        this.handle_carousel_move("prev");
                      }}>
                      <img src={teacherNext} alt="" />
                    </span>
                  ) : (
                    ""
                  )}
                  <div
                    className={
                      "teachers-wrapper car-" + this.state.teacher_carousel_pos
                    }>
                    {this.state.dore_teachers ? (
                      this.state.dore_teachers.map((t, i) => (
                        <div className="teacher" key={t.teacher_id}>
                          <span className="img-name-date">
                            <span className="img-wrapper">
                              <img src="" alt={t.fullname} />
                            </span>
                            <h3 className="teacher-name">
                              {t.fullname}
                              {i++}
                            </h3>
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
                  {this.state.teacher_carousel ? (
                    <span
                      className="next arrows"
                      onClick={() => {
                        this.handle_carousel_move("next");
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
