import React, { Component } from "react";
import scrollToTop from "../../../functions/scroll";
class Field extends Component {
  state = {
    animate: "animate-FC",
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({ animate: "" });
    }, 100);
  }
  render() {
    const { item, go_to_kinds } = this.props;
    return (
      <span
        className={"field " + this.state.animate}
        onClick={() => {
          go_to_kinds(item);
          scrollToTop();
        }}>
        {item}
      </span>
    );
  }
}

export default Field;
