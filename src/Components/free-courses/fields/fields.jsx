import React, { Component } from "react";
import Field from "./field/field";
class Fields extends Component {
  state = {};
  // componentDidMount() {
  //   console.log(this.props.field);
  // }
  render() {
    const { field, go_to_kinds } = this.props;
    return (
      <div className="fields">
        {field.map((item, i) => (
          <Field item={item} key={i++} go_to_kinds={go_to_kinds} />
        ))}
      </div>
    );
  }
}

export default Fields;
