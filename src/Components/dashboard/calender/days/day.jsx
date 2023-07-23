import React, { Component } from "react";
import make_time_relatable from "../../../functions/make-time-relatable";
import find_teacher_name from "../../../functions/find-teacher-name";
import { Link } from "react-router-dom";
import find_class from "../../../functions/find-class";
import LittleLoading from "../../../reuseables/little-loading";
class Day extends Component {
  state = {
    status: "",
  };
  componentDidMount() {
    this.class_type_decieder(
      this.props.my_class.start_time,
      this.props.my_class.finish_time
    );
  }
  class_type_decieder = (start_time, finish_time) => {
    const time = new Date();
    const now = time.getHours();
    const start = parseInt(start_time.split(":")[0]);
    const finish = parseInt(finish_time.split(":")[0]);
    const { active_day } = this.props;
    let status = "unknown";
    if (this.handle_day_match(active_day)) {
      if (now >= start && now <= finish) {
        status = "online";
      } else if (now > finish) {
        status = "finished";
      } else if (now < start) {
        start = "notStarted";
      }
    } else {
      status = "notStarted";
    }
    this.setState({ status });
  };
  handle_day_match = (day_str) => {
    const time = new Date();
    const day = time.getDay();
    const day_strs = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const index = day_strs.indexOf(day_str);
    return day === index;
  };
  find_tacher = (id, kelases, teachers) => {
    const kelas = kelases.find((k) => k.kelas_id === id);
    const kelas_teachers = [];
    kelas.teachers.forEach((t_id) => {
      const teacher = teachers.find((t) => t_id === t.teacher_id);
      kelas_teachers.push(teacher);
    });

    return kelas_teachers;
  };
  render() {
    const { my_class, animate, kelases, teachers } = this.props;
    const kelas_name = find_class(kelases, my_class.parent_kelas_id);
    return (
      <div className={this.state.status + " time-class" + animate}>
        <span className="time">
          {make_time_relatable(my_class.start_time)}
          {"-"}
          {make_time_relatable(my_class.finish_time)}
        </span>
        <span className="class-wrapper">
          <h4 className="class-name">{kelas_name}</h4>
          <span className="teachers-name">
            {kelases ? (
              this.find_tacher(my_class.parent_kelas_id, kelases, teachers).map(
                (t) => <span key={t.teacher_id}>{t.fullname} </span>
              )
            ) : (
              <LittleLoading />
            )}
          </span>
        </span>
        {this.state.status === "online" ? (
          <Link
            to={`/SingleSession/${my_class.jalase_id}`}
            className="dots-wrapper">
            ...
          </Link>
        ) : (
          <span className="dots-wrapper">...</span>
        )}
      </div>
    );
  }
}

export default Day;
