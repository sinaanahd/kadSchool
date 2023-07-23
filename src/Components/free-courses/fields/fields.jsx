import React, { Component } from "react";
import Field from "./field/field";
import LittleLoading from "../../reuseables/little-loading";
class Fields extends Component {
  state = {};
  componentDidMount() {
    console.log(this.props.field);
  }
  render() {
    const { field, go_to_kinds } = this.props;
    return (
      <div className="fields">
        {field.length !== 0 ? (
          field.map((item) => (
            <Field item={item} key={item.course_id} go_to_kinds={go_to_kinds} />
          ))
        ) : (
          <LittleLoading />
        )}
      </div>
    );
  }
}

export default Fields;
