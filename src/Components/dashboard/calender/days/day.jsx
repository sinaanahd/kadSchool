import React, { Component } from "react";
import make_time_relatable from "../../../functions/make-time-relatable";
import find_teacher_name from "../../../functions/find-teacher-name";
import { Link } from "react-router-dom";
import find_class from "../../../functions/find-class";
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
    let status = "unknown";
    if (now >= start && now <= finish) {
      status = "online";
      // status = "finished";
      // status = "notStarted";
    } else if (now > finish) {
      status = "finished";
    } else if (now < start) {
      start = "notStarted";
    }
    this.setState({ status });
  };
  render() {
    const { my_class, animate, kelases } = this.props;
    const teachers = find_teacher_name(kelases, my_class.parent_kelas_id);
    const [k_id, j_id] = find_class(
      kelases,
      my_class.parent_kelas_id,
      my_class.jalase_id
    );
    return (
      <div className={this.state.status + " time-class" + animate}>
        <span className="time">
          {make_time_relatable(my_class.start_time)}
          {"-"}
          {make_time_relatable(my_class.finish_time)}
        </span>
        <span className="class-wrapper">
          <h4 className="class-name">{my_class.jalase_title.split("-")[1]}</h4>
          <span className="teachers-name">
            {teachers.map((t, i) => (
              <span key={i++}>{t},</span>
            ))}
          </span>
        </span>
        <Link to={`/SingleSession/${k_id}/${j_id}`} className="dots-wrapper">
          ...
        </Link>
      </div>
    );
  }
}

export default Day;
