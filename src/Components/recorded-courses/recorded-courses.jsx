import React, { Component } from "react";
import { Helmet } from "react-helmet";
import Header from "../header/header";
import SideBar from "../side-bar/side-bar";
class RecordedCourses extends Component {
  state = {};
  render() {
    return (
      <>
        <Helmet>
          <title>کلاس های ضبط شده درس</title>
        </Helmet>
        <Header />
        <section className="recorded-sessions-section bgc-wrapper">
          <div className="recorded-sessions mm-width">
            <SideBar />
            <div className="main-content">
              <a href="#" className="link-to-class">
                کلاس ضبط شده درس <b>{"ریاضی"}</b> جلسه &nbsp;{1}
              </a>
              <a href="#" className="link-to-class">
                کلاس ضبط شده درس <b>{"ریاضی"}</b> جلسه &nbsp;{2}
              </a>
              <a href="#" className="link-to-class">
                کلاس ضبط شده درس <b>{"ریاضی"}</b> جلسه &nbsp;{3}
              </a>
              <a href="#" className="link-to-class">
                کلاس ضبط شده درس <b>{"ریاضی"}</b> جلسه &nbsp;{4}
              </a>
              <a href="#" className="link-to-class">
                کلاس ضبط شده درس <b>{"ریاضی"}</b> جلسه &nbsp;{5}
              </a>
              <a href="#" className="link-to-class">
                کلاس ضبط شده درس <b>{"ریاضی"}</b> جلسه &nbsp;{6}
              </a>
              <a href="#" className="link-to-class">
                کلاس ضبط شده درس <b>{"ریاضی"}</b> جلسه &nbsp;{7}
              </a>
            </div>
          </div>
          <a href="#" className="buy-course">
            خرید دوره
          </a>
        </section>
      </>
    );
  }
}

export default RecordedCourses;
