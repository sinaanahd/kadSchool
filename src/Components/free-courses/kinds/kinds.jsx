import React, { Component } from "react";
import scrollToTop from "../../functions/scroll";
class Kinds extends Component {
  state = {};
  render() {
    const { show_courses } = this.props;
    return (
      <div className="kinds">
        <span
          className="kind"
          onClick={() => {
            scrollToTop();
            show_courses("جامع");
          }}>
          جامع
        </span>
        <span
          className="kind"
          onClick={() => {
            scrollToTop();
            show_courses(" نکته و تست");
          }}>
          نکته و تست
        </span>
        <span
          className="kind"
          onClick={() => {
            scrollToTop();
            show_courses("نهایی");
          }}>
          نهایی
        </span>
        <span
          className="kind"
          onClick={() => {
            scrollToTop();
            show_courses("تیر آخر");
          }}>
          تیر آخر
        </span>
      </div>
    );
  }
}

export default Kinds;
