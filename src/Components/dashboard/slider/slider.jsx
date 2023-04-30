import React, { Component } from "react";
class Slider extends Component {
  state = {
    animate: "animate-slider",
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({ animate: "" });
    }, 100);
  }
  render() {
    return <div className={"orange-wrapper " + this.state.animate}></div>;
  }
}

export default Slider;
