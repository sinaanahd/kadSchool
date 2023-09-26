import React, { Component } from "react";
import { Helmet } from "react-helmet";
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
    // this.find_class();
    let my_path = window.location.pathname;
    my_path = parseInt(my_path.split("/")[2]);
    this.props.find_class(my_path);
    const data_check = setInterval(() => {
      if (this.props.single_kelas) {
        clearInterval(data_check);
      } else {
        this.find_class(my_path);
      }
    }, 2000);
  }
  // find_class = () => {
  //   let my_path = window.location.pathname;
  //   my_path = parseInt(my_path.split("/")[2]);

  //   const kelas = {
  //     ...this.props.user.kelases.find((k) => k.kelas_id === my_path),
  //   };
  //   const jalasat = [];
  //   kelas.jalasat.forEach((j_id) => {
  //     const jalase = {
  //       ...this.props.jalasat.find((j) => j.jalase_id === j_id),
  //     };
  //     jalasat.push(jalase);
  //   });
  //   const { courses } = this.props;
  //   const course = { ...courses.find((c) => c.course_id === kelas.course) };
  //   this.setState({ kelas, jalasat, course });
  // };
  render() {
    const { single_kelas, sample_files } = this.props;
    return (
      <>
        <Helmet>
          <title>{single_kelas ? single_kelas.kelas_title : ""}</title>
        </Helmet>
        <section className="recorded-sessions-section bgc-wrapper">
          <div className="recorded-sessions mm-width">
            <SideBar />
            <div className="main-content">
              <h1 className="title">جلسات ضبط شده</h1>
              {single_kelas && single_kelas.jalasat ? (
                single_kelas.jalasat.length !== 0 ? (
                  single_kelas.jalasat.map((j, i) => (
                    <Session
                      jalase={j}
                      key={i++}
                      course={single_kelas.course ? single_kelas.course : false}
                      sample_files={sample_files}
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
