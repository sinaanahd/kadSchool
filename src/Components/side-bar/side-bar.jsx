import React, { Component } from "react";
import { Link } from "react-router-dom";
import sideBarIcon_1 from "../../assets/images/side-bar-icon-1.svg";
import sideBarIcon_blue_1 from "../../assets/images/side-bar-icon-blue-1.svg";
import sideBarIcon_2 from "../../assets/images/side-bar-icon-2.svg";
import sideBarIcon_blue_2 from "../../assets/images/side-bar-icon-blue-2.svg";
import sideBarIcon_3 from "../../assets/images/side-bar-icon-3.svg";
import sideBarIcon_blue_3 from "../../assets/images/side-bar-icon-blue-3.svg";
import sideBarIcon_4 from "../../assets/images/side-bar-icon-4.svg";
import sideBarIcon_blue_4 from "../../assets/images/side-bar-icon-blue-4.svg";
import sideBarIcon_5 from "../../assets/images/side-bar-icon-5-new.svg";
import sideBarIcon__blue_5 from "../../assets/images/side-bar-icon-blue-5-new.svg";
import sideBarIcon_6 from "../../assets/images/side-bar-icon-6.svg";
import sideBarIcon_7 from "../../assets/images/side-bar-icon-7.svg";
import sideBarIcon_blue_7 from "../../assets/images/side-bar-icon-blue-7.svg";
import scrollToTop from "../functions/scroll";

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
            onClick={() => {
              scrollToTop();
            }}
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
            onClick={() => {
              scrollToTop();
            }}
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
            onClick={() => {
              scrollToTop();
            }}
            to="/FreeCourses"
            className={
              location === "FreeCourses"
                ? "active" + " side-bar-item"
                : "side-bar-item"
            }>
            <img
              src={
                location === "FreeCourses" ? sideBarIcon_blue_3 : sideBarIcon_3
              }
              alt="درس های رایگان"
            />
            <span className="text">درس های رایگان</span>
          </Link>
          <Link
            onClick={() => {
              scrollToTop();
            }}
            to="/UnderConstruction"
            className={
              location === "" ? "active" + " side-bar-item" : "side-bar-item"
            }>
            <img src={sideBarIcon_4} alt="تکالیف و اشکالات" />
            <span className="text">تکالیف و اشکالات</span>
          </Link>
          <Link
            onClick={() => {
              scrollToTop();
            }}
            to="/Shop"
            className={
              location === "Shop"
                ? "active" + " side-bar-item"
                : "side-bar-item"
            }>
            <img
              src={location !== "Shop" ? sideBarIcon_5 : sideBarIcon__blue_5}
              alt="فروشگاه"
            />
            <span className="text">فروشگاه</span>
          </Link>
          <Link
            onClick={() => {
              scrollToTop();
            }}
            to="/Support"
            className={
              location === "Support"
                ? "active" + " side-bar-item"
                : "side-bar-item"
            }>
            <img
              src={location !== "Support" ? sideBarIcon_7 : sideBarIcon_blue_7}
              alt="امور مالی"
            />
            <span className="text">پشتیبانی</span>
          </Link>
        </div>
        <Link
          onClick={() => {
            scrollToTop();
          }}
          to="/Profile"
          className="setting">
          <img src={sideBarIcon_6} alt="تنظیمات" />
        </Link>
      </div>
    );
  }
}

export default SideBar;
