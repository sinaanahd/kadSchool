import React, { Component } from "react";
import { Link } from "react-router-dom";
import scrollToTop from "../../functions/scroll";
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
    const { open_class_pop_up, kelas, temp_id } = this.props;
    return (
      <div
        className={
          kelas.is_online
            ? "course active " + this.state.animate
            : "course " + this.state.animate
        }>
        <img
          src={kelas.image_link}
          alt={kelas.kelas_title}
          width={246}
          height={246}
        />
        <a
          href={kelas.skyRoom_link}
          className="enter-class"
          onClick={(e) => {
            open_class_pop_up(e, kelas.active);
          }}>
          ورود به کلاس
        </a>
        <Link
          onClick={() => {
            scrollToTop();
          }}
          to={`/Course/${kelas.kelas_id}`}
          className="recorded-sessions">
          جلسات ضبط شده
        </Link>
      </div>
    );
  }
}

export default Course;
