import React, { Component } from "react";
import LittleLoading from "../../reuseables/little-loading";
import DateCalender from "../date/date";
class Counter extends Component {
  state = {
    counter: {
      days: false,
      hours: false,
      minutes: false,
      seconds: false,
    },
  };
  componentDidMount() {
    setInterval(() => {
      this.get_counter_time();
    }, 1000);
  }
  get_counter_time = () => {
    const date = new Date();
    const timestamp = date.getTime();
    const konkor_day = new Date(2023, 6, 5);
    const time = konkor_day - timestamp;
    const days = Math.floor(time / (24 * 60 * 60 * 1000));
    const hours = Math.floor((time / (24 * 60 * 60 * 1000) - days) * 24);
    const minutes = Math.floor(
      ((time / (24 * 60 * 60 * 1000) - days) * 24 - hours) * 60
    );
    const seconds = Math.floor(
      (((time / (24 * 60 * 60 * 1000) - days) * 24 - hours) * 60 - minutes) * 60
    );
    const counter = {
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    };
    this.setState({ counter });
  };
  render() {
    return (
      <div className="counter-wrapper">
        <DateCalender />
        <h2 className="title">روز شمار تا کنکور ۱۴۰۲</h2>
        <div className="counter">
          <span className="days c-wrapper">
            <span className="num">
              {this.state.counter.days || this.state.counter.days === 0 ? (
                this.state.counter.days
              ) : (
                <LittleLoading />
              )}
            </span>
            روز
          </span>
          :
          <span className="hours c-wrapper">
            <span className="num">
              {this.state.counter.hours || this.state.counter.hours === 0 ? (
                this.state.counter.hours
              ) : (
                <LittleLoading />
              )}
            </span>
            ساعت
          </span>
          :
          <span className="minutes c-wrapper">
            <span className="num">
              {this.state.counter.minutes ||
              this.state.counter.minutes === 0 ? (
                this.state.counter.minutes
              ) : (
                <LittleLoading />
              )}
            </span>
            دقیقه
          </span>
          :
          <span className="seconds c-wrapper">
            <span className="num">
              {this.state.counter.seconds ||
              this.state.counter.seconds === 0 ? (
                this.state.counter.seconds
              ) : (
                <LittleLoading />
              )}
            </span>
            ثانیه
          </span>
        </div>
      </div>
    );
  }
}

export default Counter;
