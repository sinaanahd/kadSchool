import React, { Component } from "react";
import { Helmet } from "react-helmet";
import Header from "../header/header";
import SideBar from "../side-bar/side-bar";
import withWebsiteData from "../hoc/with-website-data";
import Session from "./session/session";

class RecordedCourses extends Component {
  state = {
    kelas: false,
  };
  componentDidMount() {
    let my_path = window.location.pathname;
    my_path = parseInt(my_path.split("/")[2]);
    const kelas = this.props.user.kelases[my_path];
    this.setState({ kelas });
  }
  render() {
    const { user } = this.props;
    return (
      <>
        <Helmet>
          <title>{this.state.kelas ? this.state.kelas.kelas_title : ""}</title>
        </Helmet>
        <Header user={user ? user : false} />
        <section className="recorded-sessions-section bgc-wrapper">
          <div className="recorded-sessions mm-width">
            <SideBar />
            <div className="main-content">
              <h1 className="title">جلسات ضبط شده</h1>
              {this.state.kelas ? (
                this.state.kelas.jalasat.map((j, i) => (
                  <Session jalase={j} temp_id={i} key={i++} />
                ))
              ) : (
                <></>
              )}
              {/* <span className="recorded-session-item even-item">
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
              </span> */}
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default withWebsiteData(RecordedCourses);
