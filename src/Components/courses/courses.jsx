import React, { Component } from "react";
import Header from "../header/header";
import SideBar from "../side-bar/side-bar";
import { Helmet } from "react-helmet";
import Course from "./course/course";
import PopUp from "./pop-up/pop-up";
import withWebsiteData from "../hoc/with-website-data";
import EmptyCourses from "./empty-course/empty-courses";
class Courses extends Component {
  state = {
    pop_up: false,
    courses: true,
  };
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  open_class_pop_up = (e, entry) => {
    if (!entry) {
      this.setState({ pop_up: true });
      e.preventDefault();
    }
    setTimeout(() => {
      console.log(this.myRef.current);
      if (this.myRef.current !== null) {
        this.myRef.current.classList.remove("animate-pop-up");
      }
    }, 100);
  };
  close_class_pop_up = () => {
    this.setState({ pop_up: false });
  };
  render() {
    const { user } = this.props;
    return (
      <>
        <Helmet>
          <title>درس های من</title>
        </Helmet>
        <Header user={user ? user : false} />
        <section className="courses-section bgc-wrapper">
          <div className="main-content mm-width">
            <SideBar />
            {this.state.courses ? (
              <div className="courses-wrapper">
                <Course
                  open_class_pop_up={this.open_class_pop_up}
                  active={false}
                />
                <Course
                  open_class_pop_up={this.open_class_pop_up}
                  active={true}
                />
                <Course
                  open_class_pop_up={this.open_class_pop_up}
                  active={true}
                />
                <Course
                  open_class_pop_up={this.open_class_pop_up}
                  active={true}
                />
                <Course
                  open_class_pop_up={this.open_class_pop_up}
                  active={true}
                />
                <Course
                  open_class_pop_up={this.open_class_pop_up}
                  active={false}
                />
                <Course
                  open_class_pop_up={this.open_class_pop_up}
                  active={false}
                />
                <Course
                  open_class_pop_up={this.open_class_pop_up}
                  active={false}
                />
                <Course
                  open_class_pop_up={this.open_class_pop_up}
                  active={false}
                />
                <Course
                  open_class_pop_up={this.open_class_pop_up}
                  active={false}
                />
              </div>
            ) : (
              <EmptyCourses />
            )}
          </div>
          {/* <Link
            to="/Topics"
            className="buy-course"
            onClick={() => {
              scrollToTop();
            }}>
            خرید دوره
          </Link> */}
        </section>
        {this.state.pop_up ? (
          <PopUp close_pu={this.close_class_pop_up} my_ref={this.myRef} />
        ) : (
          <></>
        )}
      </>
    );
  }
}

export default withWebsiteData(Courses);
