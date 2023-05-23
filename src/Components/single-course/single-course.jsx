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
class SingleCourse extends Component {
  state = {
    more_desc: false,
    more_cm: false,
  };
  handle_cm = () => {
    const more_cm = !this.state.more_cm;
    this.setState({ more_cm });
  };
  handle_desc = () => {
    const more_desc = !this.state.more_desc;
    this.setState({ more_desc });
  };
  render() {
    return (
      <>
        <Helmet>
          <title>دوره تست</title>
        </Helmet>
        <section className="bgc-wrapper single-course-wrapper">
          <div className="single_course mm-width">
            <SideBar />
            <div className="main-content">
              <h1 className="title">دوره</h1>
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
                    </li>
                    <li>
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                      و با استفاده از طراحان گرافیک است.
                    </li>
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
                    <span className="class-text">تاریخ شروع کلاس:</span>
                  </span>
                </div>
              </div>
              <div className="teachers-part-wrapper">
                <h2 className="teachers-title h2-before">اساتید</h2>
                <div className="teachers-wrapper-btn">
                  <span className="prev arrows">
                    <img src={teacherNext} alt="" />
                  </span>
                  <div className="teachers-wrapper">
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
                  </div>
                  <span className="next arrows">
                    <img src={teacherNext} alt="" />
                  </span>
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
