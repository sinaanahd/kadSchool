import React, { Component } from "react";
import { Link } from "react-router-dom";
import sideBarIcon_1 from "../../assets/images/side-bar-icon-1.svg";
import sideBarIcon_blue_1 from "../../assets/images/side-bar-icon-blue-1.svg";
import sideBarIcon_2 from "../../assets/images/side-bar-icon-2.svg";
import sideBarIcon_blue_2 from "../../assets/images/side-bar-icon-blue-2.svg";
import sideBarIcon_3 from "../../assets/images/side-bar-icon-3.svg";
import sideBarIcon_4 from "../../assets/images/side-bar-icon-4.svg";
import sideBarIcon_5 from "../../assets/images/side-bar-icon-5.svg";
import sideBarIcon__blue_5 from "../../assets/images/side-bar-icon-blue-5.svg";
import sideBarIcon_6 from "../../assets/images/side-bar-icon-6.svg";

let location;
class SideBar extends Component {
  state = {};
  componentDidMount() {}
  render() {
    location = window.location.pathname.split("/")[1];
    return (
      <div className="side-bar-wrapper">
        <div className="items">
          <Link
            to="/Dashboard"
            className={
              location === "Dashboard"
                ? "active" + " side-bar-item"
                : "side-bar-item"
            }>
            <img
              src={
                location !== "Dashboard" ? sideBarIcon_1 : sideBarIcon_blue_1
              }
              alt="میز مطالعه"
            />
            <span className="text">میز مطالعه</span>
          </Link>
          <Link
            to="/Courses"
            className={
              location === "Courses"
                ? "active" + " side-bar-item"
                : "side-bar-item"
            }>
            <img
              src={location !== "Courses" ? sideBarIcon_2 : sideBarIcon_blue_2}
              alt="درس های من"
            />
            <span className="text">درس های من</span>
          </Link>
          <Link
            to="#"
            className={
              location === "" ? "active" + " side-bar-item" : "side-bar-item"
            }>
            <img src={sideBarIcon_3} alt="درس های رایگان" />
            <span className="text">درس های رایگان</span>
          </Link>
          <Link
            to="#"
            className={
              location === "" ? "active" + " side-bar-item" : "side-bar-item"
            }>
            <img src={sideBarIcon_4} alt="تکالیف و اشکالات" />
            <span className="text">تکالیف و اشکالات</span>
          </Link>
          <Link
            to="/Finance"
            className={
              location === "Finance"
                ? "active" + " side-bar-item"
                : "side-bar-item"
            }>
            <img
              src={location !== "Finance" ? sideBarIcon_5 : sideBarIcon__blue_5}
              alt="امور مالی"
            />
            <span className="text">امور مالی</span>
          </Link>
        </div>
        <Link to="/Profile" className="setting">
          <img src={sideBarIcon_6} alt="تنظیمات" />
        </Link>
      </div>
    );
  }
}

export default SideBar;
