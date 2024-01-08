import React, { Component } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import scrollToTop from "../../functions/scroll";
import LittleLoading from "../../reuseables/little-loading";
class Teacher extends Component {
  state = {
    animate: "animate-teachers",
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({ animate: "" });
    }, 100);
  }
  render() {
    const { teacher, courses } = this.props;
    const course = courses
      ? courses.find((c) => teacher.course === c.course_id)
      : false;
    return (
      <div className={"teacher " + this.state.animate} key={teacher.teacher_id}>
        <Link
          onClick={() => {
            scrollToTop();
          }}
          to={`/Teachers/${teacher.slug_name}`}
          className="img-wrapper"
        >
          <img
            loading="lazy"
            width={192}
            height={256}
            src={teacher.image_link}
            alt={teacher.fullname}
          />
        </Link>
        <h2 className="teacher-name">
          <Link
            onClick={() => {
              scrollToTop();
            }}
            to={`/Teachers/${teacher.slug_name}`}
          >
            {teacher.fullname}
          </Link>
        </h2>
        <h3 className="course-name">
          {course ? course.name : <LittleLoading />}
        </h3>
      </div>
    );
  }
}

export default Teacher;
