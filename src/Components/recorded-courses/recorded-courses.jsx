import React, { Component } from "react";
import { Helmet } from "react-helmet";
import Header from "../header/header";
import SideBar from "../side-bar/side-bar";
import { Link } from "react-router-dom";
import scrollToTop from "../functions/scroll";
import withWebsiteData from "../hoc/with-website-data";

import dots from "../../assets/images/dots.svg";
class RecordedCourses extends Component {
  state = {};
  render() {
    const { user } = this.props;
    return (
      <>
        <Helmet>
          <title>جلسات ضبط شده درس</title>
        </Helmet>
        <Header user={user ? user : false} />
        <section className="recorded-sessions-section bgc-wrapper">
          <div className="recorded-sessions mm-width">
            <SideBar />
            <div className="main-content">
              <h1 className="title">جلسات ضبط شده</h1>
              <span className="recorded-session-item">
                <Link
                  onClick={() => scrollToTop()}
                  to="/SingleSession/:id"
                  className="session-num">
                  جلسه {1}
                </Link>
                <span className="session-subject">{"ریاضی"}</span>
                <span className="session-date">تاریخ برگزاری</span>
                <Link
                  onClick={() => scrollToTop()}
                  to="/SingleSession/:id"
                  className="dots">
                  <img src={dots} alt="بیشتر" width={3} height={19} />
                </Link>
              </span>
              <span className="recorded-session-item even-item">
                <Link
                  onClick={() => scrollToTop()}
                  to="/SingleSession/:id"
                  className="session-num">
                  جلسه {2}
                </Link>
                <span className="session-subject">{"ریاضی"}</span>
                <span className="session-date">تاریخ برگزاری</span>
                <Link
                  onClick={() => scrollToTop()}
                  to="/SingleSession/:id"
                  className="dots">
                  <img src={dots} alt="بیشتر" width={3} height={19} />
                </Link>
              </span>
              <span className="recorded-session-item">
                <Link
                  onClick={() => scrollToTop()}
                  to="/SingleSession/:id"
                  className="session-num">
                  جلسه {3}
                </Link>
                <span className="session-subject">{"ریاضی"}</span>
                <span className="session-date">تاریخ برگزاری</span>
                <Link
                  onClick={() => scrollToTop()}
                  to="/SingleSession/:id"
                  className="dots">
                  <img src={dots} alt="بیشتر" width={3} height={19} />
                </Link>
              </span>
              <span className="recorded-session-item even-item">
                <Link
                  onClick={() => scrollToTop()}
                  to="/SingleSession/:id"
                  className="session-num">
                  جلسه {4}
                </Link>
                <span className="session-subject">{"ریاضی"}</span>
                <span className="session-date">تاریخ برگزاری</span>
                <Link
                  onClick={() => scrollToTop()}
                  to="/SingleSession/:id"
                  className="dots">
                  <img src={dots} alt="بیشتر" width={3} height={19} />
                </Link>
              </span>
              <span className="recorded-session-item">
                <Link
                  onClick={() => scrollToTop()}
                  to="/SingleSession/:id"
                  className="session-num">
                  جلسه {5}
                </Link>
                <span className="session-subject">{"ریاضی"}</span>
                <span className="session-date">تاریخ برگزاری</span>
                <Link
                  onClick={() => scrollToTop()}
                  to="/SingleSession/:id"
                  className="dots">
                  <img src={dots} alt="بیشتر" width={3} height={19} />
                </Link>
              </span>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default withWebsiteData(RecordedCourses);
