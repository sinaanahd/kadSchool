import React, { Component } from "react";
import FCourse from "./fcourse/fcourse";
class FCourses extends Component {
  state = {};
  render() {
    return (
      <div className="f-courses-wrapper">
        <FCourse />
        <FCourse />
        <FCourse />
        <FCourse />
        <FCourse />
        <FCourse />
        <FCourse />
        <FCourse />
      </div>
    );
  }
}

export default FCourses;
