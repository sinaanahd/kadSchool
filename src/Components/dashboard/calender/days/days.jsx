import React, { Component } from "react";
import Day from "./day";
import sample_rectangle from "../../../../assets/images/sample-rectangle.svg";

class Days extends Component {
  state = {};

  render() {
    const { my_class, animate, kelases } = this.props;
    return (
      <div className="time-class-wrapper">
        {my_class.length !== 0 ? (
          my_class.map((c) => (
            <Day
              key={c.jalase_id}
              my_class={c}
              animate={animate}
              kelases={kelases}
            />
          ))
        ) : (
          <div className="no-class-for-today">
            {" "}
            شما امروز هیچ کلاسی ندارید :({" "}
          </div>
        )}
        {/* <li className="time-class">
          <span className="time">8-10</span>
          <span className="class-wrapper">
            <img src={sample_rectangle} alt="اسم کلاس" />
            <h4 className="class-name">فیزیک جامع</h4>
            <h5 className="teachers-name">استاد شریفی</h5>
          </span>
        </li>

        <li className="time-class">
          <span className="time">10-12</span>
          <span className="class-wrapper">
            <img src={sample_rectangle} alt="اسم کلاس" />
            <h4 className="class-name">فیزیک جامع</h4>
            <h5 className="teachers-name">استاد شریفی</h5>
          </span>
        </li>

        <li className="time-class">
          <span className="time">12-14</span>
          <span className="class-wrapper">
            <img src={sample_rectangle} alt="اسم کلاس" />
            <h4 className="class-name">فیزیک جامع</h4>
            <h5 className="teachers-name">استاد شریفی</h5>
          </span>
        </li>

        <li className="time-class">
          <span className="time">14-16</span>
          <span className="class-wrapper">
            <img src={sample_rectangle} alt="اسم کلاس" />
            <h4 className="class-name">فیزیک جامع</h4>
            <h5 className="teachers-name">استاد شریفی</h5>
          </span>
        </li>

        <li className="time-class">
          <span className="time">16-18</span>
          <span className="class-wrapper">
            <img src={sample_rectangle} alt="اسم کلاس" />
            <h4 className="class-name">فیزیک جامع</h4>
            <h5 className="teachers-name">استاد شریفی</h5>
          </span>
        </li>

        <li className="time-class">
          <span className="time">18-20</span>
          <span className="class-wrapper">
            <img src={sample_rectangle} alt="اسم کلاس" />
            <h4 className="class-name">فیزیک جامع</h4>
            <h5 className="teachers-name">استاد شریفی</h5>
          </span>
        </li> */}
      </div>
    );
  }
}

export default Days;
