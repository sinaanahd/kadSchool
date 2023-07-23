import React, { Component } from "react";
import LittleLoading from "../../reuseables/little-loading";
class Calender extends Component {
  state = {
    sat: false,
    sun: false,
    mon: false,
    tue: false,
    wed: false,
    thu: false,
  };
  componentDidMount() {
    const date = new Date();
    const splited = (date + "").split(" ");
    const distance = this.day_identifier(splited[0]);
    const stamp = date.getTime();
    const weeK_start = stamp + distance * 86400000;
    this.calculate_date(weeK_start);
  }
  day_identifier = (day) => {
    let distance;
    switch (day) {
      case "Sat":
        distance = 0;
        break;
      case "Sun":
        distance = -1;
        break;
      case "Mon":
        distance = -2;
        break;
      case "Tue":
        distance = -3;
        break;
      case "Wed":
        distance = -4;
        break;
      case "Thu":
        distance = -5;
        break;
      case "Fri":
        distance = 1;
        break;
    }
    return distance;
  };
  calculate_date = (begin) => {
    const sat = new Date(begin).toLocaleDateString("fa-IR");
    const sun = new Date(begin + 86400000).toLocaleDateString("fa-IR");
    const mon = new Date(begin + 2 * 86400000).toLocaleDateString("fa-IR");
    const tue = new Date(begin + 3 * 86400000).toLocaleDateString("fa-IR");
    const wed = new Date(begin + 4 * 86400000).toLocaleDateString("fa-IR");
    const thu = new Date(begin + 5 * 86400000).toLocaleDateString("fa-IR");
    this.setState({ sat, sun, mon, tue, wed, thu });
  };
  render() {
    return (
      <div className="calender-wrapper">
        <h2 className="cal-title">برنامه هفتگی</h2>
        <div className="calender">
          <div className="days">
            <span className="day">
              <span className="name">شنبه</span>
              <span className="date">
                {this.state.sat ? (
                  "( " + this.state.sat + " )"
                ) : (
                  <LittleLoading />
                )}
              </span>
            </span>
            <span className="day">
              <span className="name">یکشنبه</span>
              <span className="date">
                {this.state.sun ? (
                  "( " + this.state.sun + " )"
                ) : (
                  <LittleLoading />
                )}
              </span>
            </span>
            <span className="day">
              <span className="name">دوشنبه</span>
              <span className="date">
                {this.state.mon ? (
                  "( " + this.state.mon + " )"
                ) : (
                  <LittleLoading />
                )}
              </span>
            </span>
            <span className="day">
              <span className="name">سه‌شنبه</span>
              <span className="date">
                {this.state.tue ? (
                  "( " + this.state.tue + " )"
                ) : (
                  <LittleLoading />
                )}
              </span>
            </span>
            <span className="day">
              <span className="name">چهارشنبه</span>
              <span className="date">
                {this.state.wed ? (
                  "( " + this.state.wed + " )"
                ) : (
                  <LittleLoading />
                )}
              </span>
            </span>
            <span className="day">
              <span className="name">پنج‌شنبه</span>
              <span className="date">
                {this.state.thu ? (
                  "( " + this.state.thu + " )"
                ) : (
                  <LittleLoading />
                )}
              </span>
            </span>
          </div>
          <div className="events-row-wrapper">
            <div className="row sat">
              <span className="event">
                <span className="class-name">فیزیک جامع</span>
                <span className="teacher">استاد تست</span>
                <span className="time">۱۵:۴۵ - ۱۸</span>
              </span>
              <span className="event">
                <span className="class-name">فیزیک جامع</span>
                <span className="teacher">استاد تست</span>
                <span className="time">۱۵:۴۵ - ۱۸</span>
              </span>
              <span className="event">
                <span className="class-name">فیزیک جامع</span>
                <span className="teacher">استاد تست</span>
                <span className="time">۱۵:۴۵ - ۱۸</span>
              </span>
              <span className="event">
                <span className="class-name">فیزیک جامع</span>
                <span className="teacher">استاد تست</span>
                <span className="time">۱۵:۴۵ - ۱۸</span>
              </span>
              <span className="event">
                <span className="class-name">فیزیک جامع</span>
                <span className="teacher">استاد تست</span>
                <span className="time">۱۵:۴۵ - ۱۸</span>
              </span>
              <span className="event">
                <span className="class-name">فیزیک جامع</span>
                <span className="teacher">استاد تست</span>
                <span className="time">۱۵:۴۵ - ۱۸</span>
              </span>
            </div>
            <div className="row sun">
              <span className="event">
                <span className="class-name">فیزیک جامع</span>
                <span className="teacher">استاد تست</span>
                <span className="time">۱۵:۴۵ - ۱۸</span>
              </span>
              <span className="event">
                <span className="class-name">فیزیک جامع</span>
                <span className="teacher">استاد تست</span>
                <span className="time">۱۵:۴۵ - ۱۸</span>
              </span>
              <span className="event">
                <span className="class-name">فیزیک جامع</span>
                <span className="teacher">استاد تست</span>
                <span className="time">۱۵:۴۵ - ۱۸</span>
              </span>
              <span className="event">
                <span className="class-name">فیزیک جامع</span>
                <span className="teacher">استاد تست</span>
                <span className="time">۱۵:۴۵ - ۱۸</span>
              </span>
              <span className="event">
                <span className="class-name">فیزیک جامع</span>
                <span className="teacher">استاد تست</span>
                <span className="time">۱۵:۴۵ - ۱۸</span>
              </span>
              <span className="event">
                <span className="class-name">فیزیک جامع</span>
                <span className="teacher">استاد تست</span>
                <span className="time">۱۵:۴۵ - ۱۸</span>
              </span>
            </div>
            <div className="row mon">
              <span className="event">
                <span className="class-name">فیزیک جامع</span>
                <span className="teacher">استاد تست</span>
                <span className="time">۱۵:۴۵ - ۱۸</span>
              </span>
              <span className="event">
                <span className="class-name">فیزیک جامع</span>
                <span className="teacher">استاد تست</span>
                <span className="time">۱۵:۴۵ - ۱۸</span>
              </span>
              <span className="event">
                <span className="class-name">فیزیک جامع</span>
                <span className="teacher">استاد تست</span>
                <span className="time">۱۵:۴۵ - ۱۸</span>
              </span>
              <span className="event">
                <span className="class-name">فیزیک جامع</span>
                <span className="teacher">استاد تست</span>
                <span className="time">۱۵:۴۵ - ۱۸</span>
              </span>
              <span className="event">
                <span className="class-name">فیزیک جامع</span>
                <span className="teacher">استاد تست</span>
                <span className="time">۱۵:۴۵ - ۱۸</span>
              </span>
              <span className="event">
                <span className="class-name">فیزیک جامع</span>
                <span className="teacher">استاد تست</span>
                <span className="time">۱۵:۴۵ - ۱۸</span>
              </span>
            </div>
            <div className="row tue">
              <span className="event">
                <span className="class-name">فیزیک جامع</span>
                <span className="teacher">استاد تست</span>
                <span className="time">۱۵:۴۵ - ۱۸</span>
              </span>
              <span className="event">
                <span className="class-name">فیزیک جامع</span>
                <span className="teacher">استاد تست</span>
                <span className="time">۱۵:۴۵ - ۱۸</span>
              </span>
              <span className="event">
                <span className="class-name">فیزیک جامع</span>
                <span className="teacher">استاد تست</span>
                <span className="time">۱۵:۴۵ - ۱۸</span>
              </span>
              <span className="event">
                <span className="class-name">فیزیک جامع</span>
                <span className="teacher">استاد تست</span>
                <span className="time">۱۵:۴۵ - ۱۸</span>
              </span>
              <span className="event">
                <span className="class-name">فیزیک جامع</span>
                <span className="teacher">استاد تست</span>
                <span className="time">۱۵:۴۵ - ۱۸</span>
              </span>
              <span className="event">
                <span className="class-name">فیزیک جامع</span>
                <span className="teacher">استاد تست</span>
                <span className="time">۱۵:۴۵ - ۱۸</span>
              </span>
            </div>
            <div className="row wed">
              <span className="event">
                <span className="class-name">فیزیک جامع</span>
                <span className="teacher">استاد تست</span>
                <span className="time">۱۵:۴۵ - ۱۸</span>
              </span>
              <span className="event">
                <span className="class-name">فیزیک جامع</span>
                <span className="teacher">استاد تست</span>
                <span className="time">۱۵:۴۵ - ۱۸</span>
              </span>
              <span className="event">
                <span className="class-name">فیزیک جامع</span>
                <span className="teacher">استاد تست</span>
                <span className="time">۱۵:۴۵ - ۱۸</span>
              </span>
              <span className="event">
                <span className="class-name">فیزیک جامع</span>
                <span className="teacher">استاد تست</span>
                <span className="time">۱۵:۴۵ - ۱۸</span>
              </span>
              <span className="event">
                <span className="class-name">فیزیک جامع</span>
                <span className="teacher">استاد تست</span>
                <span className="time">۱۵:۴۵ - ۱۸</span>
              </span>
              <span className="event">
                <span className="class-name">فیزیک جامع</span>
                <span className="teacher">استاد تست</span>
                <span className="time">۱۵:۴۵ - ۱۸</span>
              </span>
            </div>
            <div className="row thu">
              <span className="event">
                <span className="class-name">فیزیک جامع</span>
                <span className="teacher">استاد تست</span>
                <span className="time">۱۵:۴۵ - ۱۸</span>
              </span>
              <span className="event">
                <span className="class-name">فیزیک جامع</span>
                <span className="teacher">استاد تست</span>
                <span className="time">۱۵:۴۵ - ۱۸</span>
              </span>
              <span className="event">
                <span className="class-name">فیزیک جامع</span>
                <span className="teacher">استاد تست</span>
                <span className="time">۱۵:۴۵ - ۱۸</span>
              </span>
              <span className="event">
                <span className="class-name">فیزیک جامع</span>
                <span className="teacher">استاد تست</span>
                <span className="time">۱۵:۴۵ - ۱۸</span>
              </span>
              <span className="event">
                <span className="class-name">فیزیک جامع</span>
                <span className="teacher">استاد تست</span>
                <span className="time">۱۵:۴۵ - ۱۸</span>
              </span>
              <span className="event">
                <span className="class-name">فیزیک جامع</span>
                <span className="teacher">استاد تست</span>
                <span className="time">۱۵:۴۵ - ۱۸</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Calender;
