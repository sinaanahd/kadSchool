import React, { Component } from "react";
import { Helmet } from "react-helmet";
import Header from "../header/header";
import SideBar from "../side-bar/side-bar";
import { Link } from "react-router-dom";
import scrollToTop from "../functions/scroll";
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
              <Link
                onClick={() => scrollToTop()}
                to="/SingleSession/:id"
                className="link-to-class">
                کلاس ضبط شده درس <b>{"ریاضی"}</b> جلسه &nbsp;{1}
              </Link>
              <Link
                onClick={() => scrollToTop()}
                to="/SingleSession/:id"
                className="link-to-class">
                کلاس ضبط شده درس <b>{"ریاضی"}</b> جلسه &nbsp;{2}
              </Link>
              <Link
                onClick={() => scrollToTop()}
                to="/SingleSession/:id"
                className="link-to-class">
                کلاس ضبط شده درس <b>{"ریاضی"}</b> جلسه &nbsp;{3}
              </Link>
              <Link
                onClick={() => scrollToTop()}
                to="/SingleSession/:id"
                className="link-to-class">
                کلاس ضبط شده درس <b>{"ریاضی"}</b> جلسه &nbsp;{4}
              </Link>
              <Link
                onClick={() => scrollToTop()}
                to="/SingleSession/:id"
                className="link-to-class">
                کلاس ضبط شده درس <b>{"ریاضی"}</b> جلسه &nbsp;{5}
              </Link>
              <Link
                onClick={() => scrollToTop()}
                to="/SingleSession/:id"
                className="link-to-class">
                کلاس ضبط شده درس <b>{"ریاضی"}</b> جلسه &nbsp;{6}
              </Link>
              <Link
                onClick={() => scrollToTop()}
                to="/SingleSession/:id"
                className="link-to-class">
                کلاس ضبط شده درس <b>{"ریاضی"}</b> جلسه &nbsp;{7}
              </Link>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default RecordedCourses;
