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
  check_class = (id) => {
    const { kelases222 } = this.props.user;
    const kelas = { ...kelases222.find((k) => k.kelas_id === id) };
    if (Object.keys(kelas).length !== 0) {
      return kelas.has_access;
    }
  };
  render() {
    const { open_class_pop_up, kelas, temp_id } = this.props;
    return (
      <div
        className={
          kelas.is_online
            ? "course active " + this.state.animate
            : "course " + this.state.animate
        }
      >
        <img
          src={kelas.image_link}
          alt={kelas.kelas_title}
          width={246}
          height={246}
        />
        {this.check_class(kelas.kelas_id) ? (
          <>
            <a
              href={kelas.direct_link}
              className="enter-class"
              onClick={(e) => {
                open_class_pop_up(e, kelas.stream_plans);
                //open_class_pop_up(e, 11);
              }}
            >
              ورود به کلاس
            </a>
            <Link
              onClick={() => {
                scrollToTop();
              }}
              to={`/Course/${kelas.kelas_id}`}
              className="recorded-sessions"
            >
              جلسات ضبط شده
            </Link>
          </>
        ) : (
          <span className="no-acc">دسترسی شما قطع شده است</span>
        )}
      </div>
    );
  }
}

export default Course;
