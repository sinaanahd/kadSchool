import React, { Component } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import scrollToTop from "../../functions/scroll";
import LittleLoading from "../../reuseables/little-loading";
class Teacher extends Component {
  state = {};
  render() {
    const { teacher, courses } = this.props;
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
          {courses ? (
            { ...courses.find((c) => c.course_id === teacher.course) }.name
          ) : (
            <LittleLoading />
          )}
        </h3>
      </div>
    );
  }
}

export default Teacher;
