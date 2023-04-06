import React, { Component } from "react";
import fcourse_img from "../../../../assets/images/fcourse-sample-img.svg";
class FCourse extends Component {
  state = {};
  render() {
    return (
      <div className="fcourse">
        <img src={fcourse_img} alt="اسم دوره" />
        <span className="view-btn">مشاهده</span>
      </div>
    );
  }
}

export default FCourse;
