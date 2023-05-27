import React, { Component } from "react";
import make_time_relatable from "../../../functions/make-time-relatable";
import find_teacher_name from "../../../functions/find-teacher-name";
class Day extends Component {
  state = {};
  render() {
    const { my_class, animate, kelases } = this.props;
    const teachers = find_teacher_name(kelases, my_class.parent_kelas_id);
    return (
      <li className={"time-class" + animate}>
        <span className="time">
          {make_time_relatable(my_class.start_time)}
          {" - "}
          {make_time_relatable(my_class.finish_time)}
        </span>
        <span className="class-wrapper">
          <h4 className="class-name">{my_class.jalase_title}</h4>
          <span className="teachers-name">
            {teachers.map((t, i) => (
              <span key={i++}>{t} , </span>
            ))}
          </span>
        </span>
      </li>
    );
  }
}

export default Day;
