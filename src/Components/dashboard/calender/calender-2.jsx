import React, { Component } from "react";
import Days from "./days/days";

class Calender_2 extends Component {
  state = {
    day: "sat",
    animate: " ",
    classes: {
      sat: [
        {
          name: "فیزیک ",
          id: 1,
          teacher: "شریفی",
          time: 10,
        },
        {
          name: "شیمی ",
          id: 2,
          teacher: "کاظمی",
          time: 12,
        },
        {
          name: "هندسه ",
          id: 3,
          teacher: "محمودی",
          time: 16,
        },
        {
          name: "فیزیک ",
          id: 4,
          teacher: "شریفی",
          time: 8,
        },
        {
          name: "حسابان ",
          id: 5,
          teacher: "کریمی",
          time: 20,
        },
      ],
      sun: [
        {
          name: "روانشناسی",
          id: 6,
          teacher: "کاظمی",
          time: 12,
        },
        {
          name: "منطق",
          id: 7,
          teacher: "شریفی",
          time: 10,
        },
        {
          name: "ریاضیات تجربی",
          id: 8,
          teacher: "شریفی",
          time: 10,
        },
        {
          name: "زبان انگلیسی",
          id: 9,
          teacher: "کریمی",
          time: 8,
        },
        {
          name: "گراف",
          id: 10,
          teacher: "محمودی",
          time: 16,
        },
      ],
      mon: [
        {
          name: "احتمال",
          id: 11,
          teacher: "شریفی",
          time: 10,
        },
        {
          name: "جغرافیا",
          id: 12,
          teacher: "شریفی",
          time: 10,
        },
        {
          name: "اجتماعی",
          id: 13,
          teacher: "کاظمی",
          time: 12,
        },
        {
          name: "تاریخ",
          id: 14,
          teacher: "کریمی",
          time: 8,
        },
        {
          name: "زیست",
          id: 15,
          teacher: "محمودی",
          time: 16,
        },
      ],
      tue: [
        {
          name: "زیست ",
          id: 16,
          teacher: "شریفی",
          time: 10,
        },
        {
          name: "زمین شناسی ",
          id: 17,
          teacher: "شریفی",
          time: 10,
        },
        {
          name: "جغرافیا ",
          id: 18,
          teacher: "کاظمی",
          time: 12,
        },
        {
          name: "حرفه و فن ",
          id: 19,
          teacher: "کریمی",
          time: 8,
        },
        {
          name: "کارآفرینی ",
          id: 20,
          teacher: "محمودی",
          time: 16,
        },
      ],
      wed: [
        {
          name: "شیمی ۲ ",
          id: 21,
          teacher: "شریفی",
          time: 10,
        },
        {
          name: "ادبیات ",
          id: 22,
          teacher: "شریفی",
          time: 10,
        },
        {
          name: "جبر ",
          id: 23,
          teacher: "کاظمی",
          time: 12,
        },
        {
          name: "ورزش ",
          id: 24,
          teacher: "کریمی",
          time: 8,
        },
        {
          name: "معارف ",
          id: 25,
          teacher: "محمودی",
          time: 16,
        },
      ],
      thu: [
        {
          name: "دینی ",
          id: 26,
          teacher: "شریفی",
          time: 10,
        },
        {
          name: "فارسی ",
          id: 27,
          teacher: "کاظمی",
          time: 12,
        },
        {
          name: "زیست ",
          id: 28,
          teacher: "کریمی",
          time: 8,
        },
        {
          name: "جبر ",
          id: 29,
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
  handle_animation = (e) => {
    this.setState({ animate: " animate-days" });
    setTimeout(() => {
      this.setState({ animate: "" });
    }, 100);
  };
  render() {
    return (
      <div className="new-calender-wraper">
        <div className="new-cal-content">
          <h3 className="new-cal-title">برنامه هفتگی</h3>
          <div className="days-wrapper">
            <span
              onClick={() => {
                this.change_active_date("sat");
                this.handle_animation();
              }}
              className={this.state.day !== "sat" ? "day" : "day active"}>
              شنبه
            </span>
            <span
              onClick={() => {
                this.change_active_date("sun");
                this.handle_animation();
              }}
              className={this.state.day !== "sun" ? "day" : "day active"}>
              یک‌شنبه
            </span>
            <span
              onClick={() => {
                this.handle_animation();
                this.change_active_date("mon");
              }}
              className={this.state.day !== "mon" ? "day" : "day active"}>
              دو‌شنبه
            </span>
            <span
              onClick={() => {
                this.handle_animation();
                this.change_active_date("tue");
              }}
              className={this.state.day !== "tue" ? "day" : "day active"}>
              سه‌شنبه
            </span>
            <span
              onClick={() => {
                this.handle_animation();
                this.change_active_date("wed");
              }}
              className={this.state.day !== "wed" ? "day" : "day active"}>
              چهار‌شنبه
            </span>
            <span
              onClick={() => {
                this.handle_animation();
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
          <Days
            my_class={this.state.classes[this.state.day]}
            animate={this.state.animate}
          />
        </div>
      </div>
    );
  }
}

export default Calender_2;
