import React, { Component } from "react";
import withWebsiteData from "../hoc/with-website-data";
import { Helmet } from "react-helmet";
import SideBar from "../side-bar/side-bar";
import SecondSideBar from "./second-side-bar/second-side-bar";

import downloadIcon from "../../assets/images/download-icon.svg";
class SingleSessionNew extends Component {
  state = {
    jozve: false,
    no_jozve: false,
    course: false,
    active_side_bar: "download",
  };
  // componentDidMount() {
  //   let my_path = window.location.pathname;
  //   let my_path_arr = [];
  //   my_path_arr.push(parseInt(my_path.split("/")[2]));
  //   my_path_arr.push(parseInt(my_path.split("/")[3]));
  //   const my_session =
  //     this.props.user.kelases[my_path_arr[0]].jalasat[my_path_arr[1]];
  //   this.setState({ course: my_session });
  // }
  handle_active_side_bar = (active_side_bar) => {
    this.setState({ active_side_bar });
  };
  render() {
    return (
      <>
        <Helmet>
          <title>
            {this.state.course ? this.state.course.jalase_title : "استریم"}
          </title>
        </Helmet>
        <section className="bgc-wrapper new-single-session-wrapper">
          <div className="new-sigle-session mm-width">
            <SideBar />
            <div className="main-content">
              <h1 className="title">
                {this.state.course ? this.state.course.jalase_title : "استریم"}
              </h1>
              <div className="two-part-colums">
                <div className="second-side-bar-and-content">
                  <SecondSideBar
                    active_side_bar={this.state.active_side_bar}
                    handle_active_side_bar={this.handle_active_side_bar}
                  />
                  <div className="multiple-content">
                    {this.state.active_side_bar === "download" ? (
                      <div className="download">
                        <span className="download-item-wrapper">
                          <span className="file-name">-فایل {1}</span>
                          <img src={downloadIcon} alt="" />
                        </span>
                        <span className="download-item-wrapper">
                          <span className="file-name">-فایل {2}</span>
                          <img src={downloadIcon} alt="" />
                        </span>
                        <span className="download-item-wrapper">
                          <span className="file-name">-فایل {3}</span>
                          <img src={downloadIcon} alt="" />
                        </span>
                        <span className="download-item-wrapper">
                          <span className="file-name">-فایل {4}</span>
                          <img src={downloadIcon} alt="" />
                        </span>
                      </div>
                    ) : this.state.active_side_bar === "question" ? (
                      <div className="question">
                        <div className="question-wrapper">
                          <span className="question-text">متن سوال</span>
                          <span className="options-wrapper">
                            <span className="question-option">
                              لورم ایپسوم متن ساختگی است
                            </span>
                            <span className="question-option">
                              لورم ایپسوم متن ساختگی است
                            </span>
                            <span className="question-option">
                              لورم ایپسوم متن ساختگی است
                            </span>
                            <span className="question-option">
                              لورم ایپسوم متن ساختگی است
                            </span>
                          </span>
                          <span className="submit-question-answer-btn-wrapper">
                            <span className="submit-btn">ثبت پاسخ</span>
                          </span>
                        </div>
                        <div className="question-wrapper">
                          <span className="question-text">متن سوال</span>
                          <span className="options-wrapper">
                            <span className="question-option">
                              لورم ایپسوم متن ساختگی است
                            </span>
                            <span className="question-option">
                              لورم ایپسوم متن ساختگی است
                            </span>
                            <span className="question-option">
                              لورم ایپسوم متن ساختگی است
                            </span>
                            <span className="question-option">
                              لورم ایپسوم متن ساختگی است
                            </span>
                          </span>
                          <span className="submit-question-answer-btn-wrapper">
                            <span className="submit-btn">ثبت پاسخ</span>
                          </span>
                        </div>
                      </div>
                    ) : (
                      <div className="comment">
                        <span className="add-commnet">
                          <span className="avatar"></span>
                          <input type="text" placeholder="add commnet" />
                        </span>
                        <span className="commnets-part-wrapper">
                          <span className="single-commnet-wrapper">
                            <span className="avatar-name-time">
                              <span className="avatar"></span>
                              <span className="name">نام کاربری</span>
                              <span className="time">2 دقیقه پیش</span>
                            </span>
                            <p className="comment-text">
                              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
                              استفاده از طراحان گرافیک است.
                            </p>
                          </span>
                          <span className="single-commnet-wrapper">
                            <span className="avatar-name-time">
                              <span className="avatar"></span>
                              <span className="name">نام کاربری</span>
                              <span className="time">2 دقیقه پیش</span>
                            </span>
                            <p className="comment-text">
                              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
                              استفاده از طراحان گرافیک است.
                            </p>
                          </span>
                          <span className="single-commnet-wrapper">
                            <span className="avatar-name-time">
                              <span className="avatar"></span>
                              <span className="name">نام کاربری</span>
                              <span className="time">2 دقیقه پیش</span>
                            </span>
                            <p className="comment-text">
                              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
                              استفاده از طراحان گرافیک است.
                            </p>
                          </span>
                          <span className="single-commnet-wrapper">
                            <span className="avatar-name-time">
                              <span className="avatar"></span>
                              <span className="name">نام کاربری</span>
                              <span className="time">2 دقیقه پیش</span>
                            </span>
                            <p className="comment-text">
                              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
                              استفاده از طراحان گرافیک است.
                            </p>
                          </span>
                        </span>
                      </div>
                    )}
                  </div>
                </div>
                <div className="video-place">
                  <img src="" alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default withWebsiteData(SingleSessionNew);
