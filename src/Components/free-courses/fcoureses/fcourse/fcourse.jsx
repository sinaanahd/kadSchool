import React, { Component } from "react";
import fcourse_img from "../../../../assets/images/fcourse-sample-img.svg";
class FCourse extends Component {
  state = {
    animate: "animate-fcourse",
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({ animate: "" });
    }, 100);
  }
  render() {
    return (
      <div className={"fcourse " + this.state.animate}>
        <img src={fcourse_img} alt="اسم دوره" />
        <span className="view-btn">مشاهده</span>
      </div>
    );
  }
}

export default FCourse;
