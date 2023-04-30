import React, { Component } from "react";
import { Link } from "react-router-dom";
import scrollToTop from "../../functions/scroll";
import sampleRectangle from "../../../assets/images/sample-rectangle.svg";
class Course extends Component {
  state = {
    animate: "animate-course",
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({ animate: " " });
    }, 100);
  }
  render() {
    const { active, open_class_pop_up } = this.props;
    return (
      <div
        className={
          active
            ? "course active " + this.state.animate
            : "course " + this.state.animate
        }>
        <img src={sampleRectangle} alt="عکس کلاس" />
        <a
          href="#"
          className="enter-class"
          onClick={(e) => {
            open_class_pop_up(e, active);
          }}>
          ورود به کلاس
        </a>
        <Link
          onClick={() => {
            scrollToTop();
          }}
          to="/Course/:id"
          className="recorded-sessions">
          جلسات ضبط شده
        </Link>
      </div>
    );
  }
}

export default Course;
