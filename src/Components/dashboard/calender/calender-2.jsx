import React, { Component } from "react";
import Days from "./days/days";

class Calender_2 extends Component {
  state = {
    animate: " ",
  };
  componentDidMount() {
    //console.log(this.props.active_day);
  }
  handle_animation = (e) => {
    this.setState({ animate: " animate-days" });
    setTimeout(() => {
      this.setState({ animate: "" });
    }, 100);
  };
  render() {
    const { active_day, change_active_date, week_plan, kelases, teachers } =
      this.props;
    //console.log(week_plan["Saturday"]);
    return (
      <div className="new-calender-wraper">
        <div className="new-cal-content">
          <h3 className="new-cal-title">برنامه هفتگی</h3>
          <div className="days-wrapper">
            {/* <span
              onClick={() => {
                change_active_date("Saturday");
                this.handle_animation();
              }}
              className={active_day !== "Saturday" ? "day" : "day active"}>
              شنبه
            </span> */}
            <span
              onClick={() => {
                change_active_date("Friday");
                this.handle_animation();
              }}
              className={active_day !== "Friday" ? "day" : "day active"}>
              شنبه
            </span>
            <span
              onClick={() => {
                change_active_date("Sunday");
                this.handle_animation();
              }}
              className={
                active_day !== "Sunday" ? "day middle" : "day middle active"
              }>
              یک‌شنبه
            </span>
            <span
              onClick={() => {
                this.handle_animation();
                change_active_date("Monday");
              }}
              className={
                active_day !== "Monday" ? "day middle" : "day middle active"
              }>
              دو‌شنبه
            </span>
            <span
              onClick={() => {
                this.handle_animation();
                change_active_date("Tuesday");
              }}
              className={
                active_day !== "Tuesday" ? "day middle" : "day middle active"
              }>
              سه‌شنبه
            </span>
            <span
              onClick={() => {
                this.handle_animation();
                change_active_date("Wednesday");
              }}
              className={
                active_day !== "Wednesday" ? "day middle" : "day middle active"
              }>
              چهار‌شنبه
            </span>
            <span
              onClick={() => {
                this.handle_animation();
                change_active_date("Thursday");
              }}
              className={
                active_day !== "Thursday"
                  ? "day middle thur"
                  : "day middle active"
              }>
              پنج‌شنبه
            </span>
            {/* <span
              onClick={() => {
                change_active_date("fri");
              }}
              className={active_day !== "fri" ? "day" : "day active"}>
              جمعه
            </span> */}
          </div>
          <Days
            my_class={week_plan ? week_plan[active_day] : []}
            animate={this.state.animate}
            kelases={kelases ? kelases : false}
            teachers={teachers ? teachers : false}
          />
        </div>
      </div>
    );
  }
}

export default Calender_2;
