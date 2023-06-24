import React, { Component } from "react";
import Day from "./day";
import sample_rectangle from "../../../../assets/images/sample-rectangle.svg";

class Days extends Component {
  state = {};

  render() {
    const { my_class, animate, kelases, teachers } = this.props;
    return (
      <div className="time-class-wrapper">
        {my_class && my_class.length !== 0 ? (
          my_class.map((c) => (
            <Day
              key={c.jalase_id}
              my_class={c}
              animate={animate}
              kelases={kelases}
              teachers={teachers ? teachers : false}
            />
          ))
        ) : (
          <div className="no-class-for-today">
            {" "}
            شما امروز هیچ کلاسی ندارید :({" "}
          </div>
        )}
      </div>
    );
  }
}

export default Days;
