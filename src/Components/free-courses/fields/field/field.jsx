import React, { Component } from "react";
import scrollToTop from "../../../functions/scroll";
class Field extends Component {
  state = {};
  render() {
    const { item, go_to_kinds } = this.props;
    return (
      <span
        className="field"
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
