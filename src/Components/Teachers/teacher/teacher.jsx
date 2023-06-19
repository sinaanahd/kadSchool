import React, { Component } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import scrollToTop from "../../functions/scroll";
class Teacher extends Component {
  state = {};
  render() {
    const { teacher } = this.props;
    return (
      <div className="teacher" key={teacher.teacher_id}>
        <Link
          onClick={() => {
            scrollToTop();
          }}
          to={`/Teacher/${teacher.teacher_id}`}
          className="img-wrapper">
          <img src={teacher.image_link} alt={teacher.fullname} />
        </Link>
        <h2 className="teacher-name">
          <Link
            onClick={() => {
              scrollToTop();
            }}
            to={`/Teacher/${teacher.teacher_id}`}>
            {teacher.fullname}
          </Link>
        </h2>
        <h3 className="course-name">
          <Link
            onClick={() => {
              scrollToTop();
            }}
            to={`/SingleCourse/${teacher.course}`}>
            نام درس
          </Link>
        </h3>
      </div>
    );
  }
}

export default Teacher;
