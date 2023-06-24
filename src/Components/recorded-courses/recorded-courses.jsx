import React, { Component } from "react";
import { Helmet } from "react-helmet";
import Header from "../header/header";
import SideBar from "../side-bar/side-bar";
import withWebsiteData from "../hoc/with-website-data";
import Session from "./session/session";

class RecordedCourses extends Component {
  state = {
    kelas: false,
    jalasat: false,
    course: false,
  };
  componentDidMount() {
    this.find_class();
  }
  find_class = () => {
    let my_path = window.location.pathname;
    my_path = parseInt(my_path.split("/")[2]);
    const kelas = this.props.user.kelases.find((k) => k.kelas_id === my_path);
    const jalasat = [];
    kelas.jalasat.forEach((j_id) => {
      const jalase = this.props.jalasat.find((j) => j.jalase_id === j_id);
      jalasat.push(jalase);
    });
    const { courses } = this.props;
    const course = courses.find((c) => c.course_id === kelas.course);
    this.setState({ kelas, jalasat, course });
  };
  render() {
    return (
      <>
        <Helmet>
          <title>{this.state.kelas ? this.state.kelas.kelas_title : ""}</title>
        </Helmet>
        <section className="recorded-sessions-section bgc-wrapper">
          <div className="recorded-sessions mm-width">
            <SideBar />
            <div className="main-content">
              <h1 className="title">جلسات ضبط شده</h1>
              {this.state.kelas && this.state.jalasat ? (
                this.state.jalasat.length !== 0 ? (
                  this.state.jalasat.map((j, i) => (
                    <Session
                      jalase={j}
                      key={i++}
                      course={this.state.course ? this.state.course : false}
                    />
                  ))
                ) : (
                  <p>
                    متاسفانه جلسه‌ی ضبط شده‌ای برای این کلاس هنوز قرار نگرفته
                    شده
                  </p>
                )
              ) : (
                <></>
              )}
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default withWebsiteData(RecordedCourses);
