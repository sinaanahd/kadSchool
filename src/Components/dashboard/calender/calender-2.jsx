import React, { Component } from "react";
import Days from "./days/days";

class Calender_2 extends Component {
  state = {
    day: "sat",
    classes: {
      sat: [
        {
          name: "فیزیک جامع",
          id: 1,
          teacher: "شریفی",
          time: 10,
        },
        {
          name: "شیمی جامع",
          id: 2,
          teacher: "کاظمی",
          time: 12,
        },
        {
          name: "هندسه جامع",
          id: 3,
          teacher: "محمودی",
          time: 16,
        },
        {
          name: "فیزیک جامع",
          id: 4,
          teacher: "شریفی",
          time: 8,
        },
        {
          name: "حسابان جامع",
          id: 5,
          teacher: "کریمی",
          time: 20,
        },
      ],
      sun: [
        {
          name: "شیمی جامع",
          id: 2,
          teacher: "کاظمی",
          time: 12,
        },
        {
          name: "فیزیک جامع",
          id: 1,
          teacher: "شریفی",
          time: 10,
        },
        {
          name: "فیزیک جامع",
          id: 4,
          teacher: "شریفی",
          time: 10,
        },
        {
          name: "حسابان جامع",
          id: 5,
          teacher: "کریمی",
          time: 8,
        },
        {
          name: "هندسه جامع",
          id: 3,
          teacher: "محمودی",
          time: 16,
        },
      ],
      mon: [
        {
          name: "فیزیک جامع",
          id: 1,
          teacher: "شریفی",
          time: 10,
        },
        {
          name: "فیزیک جامع",
          id: 4,
          teacher: "شریفی",
          time: 10,
        },
        {
          name: "شیمی جامع",
          id: 2,
          teacher: "کاظمی",
          time: 12,
        },
        {
          name: "حسابان جامع",
          id: 5,
          teacher: "کریمی",
          time: 8,
        },
        {
          name: "هندسه جامع",
          id: 3,
          teacher: "محمودی",
          time: 16,
        },
      ],
      tue: [
        {
          name: "فیزیک جامع",
          id: 1,
          teacher: "شریفی",
          time: 10,
        },
        {
          name: "فیزیک جامع",
          id: 4,
          teacher: "شریفی",
          time: 10,
        },
        {
          name: "شیمی جامع",
          id: 2,
          teacher: "کاظمی",
          time: 12,
        },
        {
          name: "حسابان جامع",
          id: 5,
          teacher: "کریمی",
          time: 8,
        },
        {
          name: "هندسه جامع",
          id: 3,
          teacher: "محمودی",
          time: 16,
        },
      ],
      wed: [
        {
          name: "فیزیک جامع",
          id: 1,
          teacher: "شریفی",
          time: 10,
        },
        {
          name: "فیزیک جامع",
          id: 4,
          teacher: "شریفی",
          time: 10,
        },
        {
          name: "شیمی جامع",
          id: 2,
          teacher: "کاظمی",
          time: 12,
        },
        {
          name: "حسابان جامع",
          id: 5,
          teacher: "کریمی",
          time: 8,
        },
        {
          name: "هندسه جامع",
          id: 3,
          teacher: "محمودی",
          time: 16,
        },
      ],
      thu: [
        {
          name: "فیزیک جامع",
          id: 1,
          teacher: "شریفی",
          time: 10,
        },
        {
          name: "فیزیک جامع",
          id: 4,
          teacher: "شریفی",
          time: 10,
        },
        {
          name: "شیمی جامع",
          id: 2,
          teacher: "کاظمی",
          time: 12,
        },
        {
          name: "حسابان جامع",
          id: 5,
          teacher: "کریمی",
          time: 8,
        },
        {
          name: "هندسه جامع",
          id: 3,
          teacher: "محمودی",
          time: 16,
        },
      ],
      fri: [],
    },
  };
  change_active_date = (day) => {
    this.setState({ day });
  };
  render() {
    return (
      <div className="new-calender-wraper">
        <h3 className="new-cal-title">برنامه هفتگی</h3>
        <div className="new-cal-content">
          <div className="days-wrapper">
            <span
              onClick={() => {
                this.change_active_date("sat");
              }}
              className={this.state.day !== "sat" ? "day" : "day active"}>
              شنبه
            </span>
            <span
              onClick={() => {
                this.change_active_date("sun");
              }}
              className={this.state.day !== "sun" ? "day" : "day active"}>
              یک‌شنبه
            </span>
            <span
              onClick={() => {
                this.change_active_date("mon");
              }}
              className={this.state.day !== "mon" ? "day" : "day active"}>
              دو‌شنبه
            </span>
            <span
              onClick={() => {
                this.change_active_date("tue");
              }}
              className={this.state.day !== "tue" ? "day" : "day active"}>
              سه‌شنبه
            </span>
            <span
              onClick={() => {
                this.change_active_date("wed");
              }}
              className={this.state.day !== "wed" ? "day" : "day active"}>
              چهار‌شنبه
            </span>
            <span
              onClick={() => {
                this.change_active_date("thu");
              }}
              className={this.state.day !== "thu" ? "day" : "day active"}>
              پنج‌شنبه
            </span>
            {/* <span
              onClick={() => {
                this.change_active_date("fri");
              }}
              className={this.state.day !== "fri" ? "day" : "day active"}>
              جمعه
            </span> */}
          </div>
          <Days my_class={this.state.classes[this.state.day]} />
        </div>
      </div>
    );
  }
}

export default Calender_2;
