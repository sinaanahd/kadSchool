import React, { Component } from "react";
class TodayClass extends Component {
  state = {};
  render() {
    return (
      <div className="single-class">
        <span className="class-title">فیزیک جامع</span>
        <span className="teacher-name">استاد</span>
        <span className="time-wrapper">۱۵:۱۵ - ۱۸:۴۵</span>
      </div>
    );
  }
}

export default TodayClass;
