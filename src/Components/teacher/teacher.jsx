import React, { Component } from "react";
import withWebsiteData from "../hoc/with-website-data";
import { Helmet } from "react-helmet";
import SideBar from "../side-bar/side-bar";
import arrow from "../../assets/images/dow-arroow-filter.svg";
import teacherImg from "../../assets/images/teacher-img.jpeg";
import downArrowBlue from "../../assets/images/down-arrow-blue.svg";
import avatar from "../../assets/images/avatar.svg";
class Teacher extends Component {
  state = {
    more_cm: false,
  };
  handle_cm = () => {
    const more_cm = !this.state.more_cm;
    this.setState({ more_cm });
  };
  render() {
    return (
      <>
        <Helmet>
          <title>اسم استاد</title>
        </Helmet>
        <section className="single-teacher-wrapper bgc-wrapper">
          <div className="single-teacher mm-width">
            <SideBar />
            <div className="main-content">
              <h1 className="title">اساتید کاد</h1>
              <div className="teacher-details">
                <span className="teacher-img-name">
                  <img src={teacherImg} alt="" />
                  <h2>نام استاد</h2>
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
                  <span className="prev-course arrows">
                    <img src={arrow} alt="" />
                  </span>
                  <div className="courses">
                    <div className="course">1</div>
                    <div className="course">2</div>
                    <div className="course">3</div>
                    <div className="course">4</div>
                    <div className="course">5</div>
                    <div className="course">6</div>
                  </div>
                  <span className="next-course arrows">
                    <img src={arrow} alt="" />
                  </span>
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

export default withWebsiteData(Teacher);
