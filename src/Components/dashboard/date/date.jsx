import React, { Component } from "react";
import LittleLoading from "../../reuseables/little-loading";
class DateCalender extends Component {
  state = {
    date: {
      day: false,
      month: false,
      year: false,
    },
    week_day: false,
  };
  componentDidMount() {
    let date = new Date();
    const splited = (date + "").split(" ");
    const week_day = splited[0];
    this.get_week_day(week_day);
    date = date.toLocaleDateString("fa-IR").split("/");
    this.setState({
      date: {
        day: date[2],
        month: this.get_month(date[1]),
        year: date[0],
      },
    });
  }
  get_week_day = (d) => {
    let week_day;
    switch (d) {
      case "Sat":
        week_day = "شنبه";
        break;
      case "Sun":
        week_day = "یک شنبه";
        break;
      case "Mon":
        week_day = "دو شنبه";
        break;
      case "Tue":
        week_day = "سه شنبه";
        break;
      case "Wed":
        week_day = "چهار شنبه";
        break;
      case "Thu":
        week_day = "پنج شنبه";
        break;
      case "Fri":
        week_day = "جمعه";
        break;
    }
    this.setState({ week_day });
  };
  get_month = (m) => {
    let month;
    switch (m) {
      case "۱":
        month = "فروردین";
        break;
      case "۲":
        month = "اردیبهشت";
        break;
      case "۳":
        month = "خرداد";
        break;
      case "۴":
        month = "تیر";
        break;
      case "۵":
        month = "مرداد";
        break;
      case "۶":
        month = "شهریور";
        break;
      case "۷":
        month = "مهر";
        break;
      case "۸":
        month = "آبان";
        break;
      case "۹":
        month = "آذر";
        break;
      case "۱۰":
        month = "دی";
        break;
      case "۱۱":
        month = "بهمن";
        break;
      case "۱۲":
        month = "اسفند";
        break;
    }
    return month;
  };
  render() {
    return (
      <div className="date">
        <span className="month">
          {this.state.date.month ? this.state.date.month : <LittleLoading />}
        </span>
        <span className="day-number">
          {this.state.date.day ? this.state.date.day : <LittleLoading />}
        </span>
        <span className="week-day">
          {this.state.week_day ? this.state.week_day : <LittleLoading />}
        </span>
      </div>
    );
  }
}

export default DateCalender;
