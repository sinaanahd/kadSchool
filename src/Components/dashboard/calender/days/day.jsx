import React, { Component } from "react";
import make_time_relatable from "../../../functions/make-time-relatable";
class Day extends Component {
  state = {};
  render() {
    const { my_class, animate } = this.props;
    return (
      <li className={"time-class" + animate}>
        <span className="time">
          {make_time_relatable(my_class.start_time)}
          {" - "}
          {make_time_relatable(my_class.finish_time)}
        </span>
        <span className="class-wrapper">
          <h4 className="class-name">{my_class.jalase_title}</h4>
          <h5 className="teachers-name">استاد {my_class.parent_kelas_id}</h5>
        </span>
      </li>
    );
  }
}

export default Day;
