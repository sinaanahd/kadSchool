import React, { Component } from "react";
import SideBar from "../side-bar/side-bar";
import { Helmet } from "react-helmet";
import withWebsiteData from "../hoc/with-website-data";

import iSvg from "../../assets/images/i.webp";
import crossSvg from "../../assets/images/cross.webp";
import AparatVideo from "../video/aparat-video";
class SingleSession extends Component {
  state = {
    jozve: false,
    no_jozve: false,
    course: false,
  };
  componentDidMount() {
    let my_path = parseInt(window.location.pathname.split("/")[2]);

    const course = {
      ...this.props.jalasat.find((j) => j.jalase_id === my_path),
    };
    console.log(course);
    if (Object.keys(course).length !== 0) this.setState({ course });
    else window.location.pathname = "/not-found";
  }
  show_no_content = () => {
    const no_jozve = !this.state.no_jozve;
    this.setState({ no_jozve });
  };
  render() {
    const { user } = this.props;
    return (
      <>
        <Helmet>
          <title>{this.state.course.jalase_title}</title>
          <meta name="robots" content="noindex" />
        </Helmet>
        <section className="bgc-wrapper single-session-section">
          <div className="single-session mm-width">
            <SideBar />
            <div className="main-content">
              <h1 className="title">{this.state.course.jalase_title}</h1>
              {/* <AparatVideo /> */}
              <span className="single-details">توضیحات</span>
              <p className="single-text">
                {this.state.course ? (
                  this.state.course.descriptions.map((d, i) => (
                    <React.Fragment key={i++}>
                      {d}
                      <br />
                    </React.Fragment>
                  ))
                ) : (
                  <></>
                )}
              </p>
              {this.state.no_jozve ? (
                <div className="no-jozve-wrapper">
                  <span className="blue-box"></span>
                  <img src={iSvg} alt="info" className="info" />
                  <p>برای این جلسه جزوه ای قرار داده نشده</p>
                  <img
                    src={crossSvg}
                    alt="بستن"
                    className="cross"
                    onClick={() => {
                      this.show_no_content();
                    }}
                  />
                </div>
              ) : (
                <></>
              )}
              <div className="btns-wrapper">
                {this.state.jozve ? (
                  <a className="btn">دانلود جزوه</a>
                ) : (
                  <span
                    onClick={() => {
                      this.show_no_content();
                    }}
                    className="btn"
                  >
                    دانلود جزوه
                  </span>
                )}
                <span className="btn">تکلیف این جلسه</span>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default withWebsiteData(SingleSession);
