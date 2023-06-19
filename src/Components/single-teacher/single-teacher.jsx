import React, { Component } from "react";
import withWebsiteData from "../hoc/with-website-data";
import { Helmet } from "react-helmet";
import SideBar from "../side-bar/side-bar";
import LittleLoading from "../reuseables/little-loading";
import arrow from "../../assets/images/dow-arroow-filter.svg";
import downArrowBlue from "../../assets/images/down-arrow-blue.svg";
import avatar from "../../assets/images/avatar.svg";
class SingleTeacher extends Component {
  state = {
    more_cm: false,
    teacher: false,
    teachers_doreha: false,
    dore_carousel: false,
    dore_carousel_pos: 0,
  };
  componentDidMount() {
    const { teachers, doreha, initial_data } = this.props;
    if (teachers && doreha) {
      this.statrt_page();
    } else {
      initial_data();
      this.statrt_page();
    }
  }
  statrt_page = () => {
    const { teachers, doreha } = this.props;
    if (teachers && doreha) {
      const page_id = parseInt(window.location.pathname.split("/")[2]);
      const state_doreha = [];
      const teacher = teachers.find((t) => t.teacher_id === page_id);

      teacher.doreha.forEach((d_id) => {
        const dore = doreha.find((d) => d.dore_id === d_id);
        state_doreha.push(dore);
      });
      if (state_doreha.length <= 4) this.setState({ dore_carousel: false });
      else this.setState({ dore_carousel: true });

      this.setState({ teacher, teachers_doreha: state_doreha });
    } else {
      setTimeout(() => {
        this.statrt_page();
      }, 500);
    }
  };
  handle_cm = () => {
    const more_cm = !this.state.more_cm;
    this.setState({ more_cm });
  };
  handle_carousel_move = (way) => {
    const dore_carousel_pos = this.state.dore_carousel_pos;
    const my_length = Math.ceil(this.state.teachers_doreha.length / 4);
    if (way === "next") {
      if (my_length !== dore_carousel_pos)
        this.setState({ dore_carousel_pos: dore_carousel_pos + 1 });
    } else {
      if (dore_carousel_pos !== 0)
        this.setState({ dore_carousel_pos: dore_carousel_pos - 1 });
    }
  };
  render() {
    return (
      <>
        <Helmet>
          <title>
            {this.state.teacher ? this.state.teacher.fullname : "اسم استاد"}
          </title>
        </Helmet>
        <section className="single-teacher-wrapper bgc-wrapper">
          <div className="single-teacher mm-width">
            <SideBar />
            <div className="main-content">
              <h1 className="title">
                {this.state.teacher ? (
                  this.state.teacher.fullname
                ) : (
                  <LittleLoading />
                )}
              </h1>
              {/* {this.state.teacher ? this.state.teacher : <LittleLoading />} */}

              <div className="teacher-details">
                <span className="teacher-img-name">
                  {this.state.teacher ? (
                    <img
                      src={this.state.teacher.image_link}
                      alt={this.state.teacher.fullname}
                    />
                  ) : (
                    <LittleLoading />
                  )}

                  {/* <h2>نام استاد</h2> */}
                </span>
                <span className="teacher-resume-wrapper">
                  <h3 className="resume-title">رزومه</h3>
                  <ul className="teacher-resume-items">
                    <li>لورم ایپسوم</li>
                    <li>لورم ایپسوم</li>
                    <li>لورم ایپسوم</li>
                    <li>لورم ایپسوم</li>
                  </ul>
                </span>
              </div>
              <div className="intriduction-wrapper">
                <h3 className="intro-title">معرفی</h3>
                <div className="intro-video-wrapper"></div>
              </div>
              <div className="teachers-courses-wrapper">
                <h3 className="course-title">دوره ها</h3>
                <div className="teacher-courses-wrapper">
                  {this.state.dore_carousel ? (
                    <span
                      className="prev-course arrows"
                      onClick={() => {
                        this.handle_carousel_move("prev");
                      }}>
                      <img src={arrow} alt="قبلی" />
                    </span>
                  ) : (
                    <></>
                  )}

                  <div
                    className={"courses car-" + this.state.dore_carousel_pos}>
                    {this.state.teachers_doreha ? (
                      this.state.teachers_doreha.map((d, i) => (
                        <div key={d.d_id} className="course">
                          {d.dore_title}
                        </div>
                      ))
                    ) : (
                      <LittleLoading />
                    )}

                    {/* <div className="course">2</div>
                    <div className="course">3</div>
                    <div className="course">4</div>
                    <div className="course">5</div>
                    <div className="course">6</div> */}
                  </div>
                  {this.state.dore_carousel ? (
                    <span
                      className="next-course arrows"
                      onClick={() => {
                        this.handle_carousel_move("next");
                      }}>
                      <img src={arrow} alt="بعدی" />
                    </span>
                  ) : (
                    ""
                  )}
                </div>
              </div>
              <div className="teachers-sample-wrapper">
                <h3 className="teacher-sample-title">نمونه تدریس</h3>
                <div className="samples">
                  <div className="sample-wrapper">
                    <span className="img-wrapper">
                      <img src="" alt="" />
                    </span>
                    <h4 className="sample-title">عنوان</h4>
                    <p>لورم ایپسوم متن ساختگی است</p>
                  </div>
                  <div className="sample-wrapper">
                    <span className="img-wrapper">
                      <img src="" alt="" />
                    </span>
                    <h4 className="sample-title">عنوان</h4>
                    <p>لورم ایپسوم متن ساختگی است</p>
                  </div>
                  <div className="sample-wrapper">
                    <span className="img-wrapper">
                      <img src="" alt="" />
                    </span>
                    <h4 className="sample-title">عنوان</h4>
                    <p>لورم ایپسوم متن ساختگی است</p>
                  </div>
                  <div className="sample-wrapper">
                    <span className="img-wrapper">
                      <img src="" alt="" />
                    </span>
                    <h4 className="sample-title">عنوان</h4>
                    <p>لورم ایپسوم متن ساختگی است</p>
                  </div>
                </div>
                <div className="sample-btns-wrapper">
                  <span className="sample-btn">نمونه جزوه</span>
                  <span className="sample-btn">نمونه آزمون</span>
                  <span className="sample-btn">نمونه تکلیف</span>
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

export default withWebsiteData(SingleTeacher);
