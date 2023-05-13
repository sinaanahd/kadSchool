import React, { Component } from "react";
import Header from "../header/header";
import SideBar from "../side-bar/side-bar";
import { Helmet } from "react-helmet";
import withWebsiteData from "../hoc/with-website-data";

import iSvg from "../../assets/images/i.svg";
import crossSvg from "../../assets/images/cross.svg";
import sampleImg from "../../assets/images/single-sample.svg";
class SingleSession extends Component {
  state = {
    jozve: false,
    no_jozve: false,
    course: false,
  };
  componentDidMount() {
    let my_path = window.location.pathname;
    let my_path_arr = [];
    my_path_arr.push(parseInt(my_path.split("/")[2]));
    my_path_arr.push(parseInt(my_path.split("/")[3]));
    const my_session =
      this.props.user.kelases[my_path_arr[0]].jalasat[my_path_arr[1]];
    this.setState({ course: my_session });
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
        </Helmet>
        <section className="bgc-wrapper single-session-section">
          <div className="single-session mm-width">
            <SideBar />
            <div className="main-content">
              <h1 className="title">{this.state.course.jalase_title}</h1>
              <img src={sampleImg} alt="موضوع جلسه" />
              <span className="single-details">توضیحات</span>
              <p className="single-text">{this.state.course.descriptions}</p>
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
                    className="btn">
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
