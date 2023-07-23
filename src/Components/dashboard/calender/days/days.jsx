import React, { Component } from "react";
import Day from "./day";

class Days extends Component {
  state = {};

  render() {
    const { my_class, animate, kelases, teachers, active_day } = this.props;
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
              active_day={active_day}
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
