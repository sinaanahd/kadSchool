import React, { Component } from "react";
class Day extends Component {
  state = {};

  render() {
    const { time, name, teacher, animate } = this.props;
    return (
      <li
        className={"time-class" + animate}
        on={() => {
          //this.handle_animation();
          alert();
        }}>
        <span className="time">
          {time} - {time + 2}
        </span>
        <span className="class-wrapper">
          <h4 className="class-name">{name}</h4>
          <h5 className="teachers-name">استاد {teacher}</h5>
        </span>
      </li>
    );
  }
}

export default Day;
