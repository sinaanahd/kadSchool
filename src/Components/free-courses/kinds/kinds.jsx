import React, { Component } from "react";
import scrollToTop from "../../functions/scroll";
class Kinds extends Component {
  state = {
    animate: "animate-FC",
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({ animate: "" });
    }, 100);
  }
  render() {
    const { show_courses, doreha } = this.props;
    return (
      <div className="kinds">
        {doreha ? (
          doreha.map((d) => (
            <span
              key={d.dore_id}
              className={"kind " + this.state.animate}
              onClick={() => {
                scrollToTop();
                show_courses(d.dore_title, d.dore_id);
              }}>
              {d.dore_title}
            </span>
          ))
        ) : (
          <></>
        )}
        {/* <span
          className={"kind " + this.state.animate}
          onClick={() => {
            scrollToTop();
            show_courses("جامع");
          }}>
          جامع
        </span>
        <span
          className={"kind " + this.state.animate}
          onClick={() => {
            scrollToTop();
            show_courses(" نکته و تست");
          }}>
          نکته و تست
        </span>
        <span
          className={"kind " + this.state.animate}
          onClick={() => {
            scrollToTop();
            show_courses("نهایی");
          }}>
          نهایی
        </span>
        <span
          className={"kind " + this.state.animate}
          onClick={() => {
            scrollToTop();
            show_courses("تیر آخر");
          }}>
          تیر آخر
        </span> */}
      </div>
    );
  }
}

export default Kinds;
