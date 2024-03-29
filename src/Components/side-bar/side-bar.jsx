import React, { Component } from "react";
import { Link } from "react-router-dom";
import sideBarIcon_1 from "../../assets/images/side-bar-icon-1.webp";
import sideBarIcon_blue_1 from "../../assets/images/side-bar-icon-blue-1.webp";
import sideBarIcon_2 from "../../assets/images/side-bar-icon-2.webp";
import sideBarIcon_blue_2 from "../../assets/images/side-bar-icon-blue-2.webp";
import sideBarIcon_3 from "../../assets/images/side-bar-icon-3.webp";
import sideBarIcon_blue_3 from "../../assets/images/side-bar-icon-blue-3.webp";
import sideBarIcon_4 from "../../assets/images/side-bar-icon-4-new.webp";
import sideBarIcon_blue_4 from "../../assets/images/side-bar-icon-blue-4.webp";
import sideBarIcon_5 from "../../assets/images/side-bar-icon-5-new.webp";
import sideBarIcon__blue_5 from "../../assets/images/side-bar-icon-blue-5-new.webp";
import sideBarIcon_6 from "../../assets/images/side-bar-icon-6.webp";
import sideBarIcon_7 from "../../assets/images/side-bar-icon-7.webp";
import sideBarIcon_blue_7 from "../../assets/images/side-bar-icon-blue-7.webp";
import scrollToTop from "../functions/scroll";

let location;
const local_user = JSON.parse(localStorage.getItem("user-kad"))
  ? JSON.parse(localStorage.getItem("user-kad"))
  : false;
class SideBar extends Component {
  state = {
    user_logged_in: local_user ? true : false,
  };
  componentDidMount() {}
  render() {
    location = window.location.pathname.split("/")[1];
    return (
      <aside className="side-bar-wrapper">
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
              width={33}
              height={34}
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
              width={40}
              height={27}
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
              width={26}
              height={25}
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
            <img
              width={25}
              height={25}
              src={sideBarIcon_4}
              alt="تکالیف و اشکالات"
            />
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
              width={33}
              height={29}
            />
            <span className="text">فروشگاه</span>
          </Link>
          {/* <Link
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
          </Link> */}
        </div>
        <Link
          onClick={() => {
            scrollToTop();
          }}
          to={this.state.user_logged_in ? "/Profile" : "/Login"}
          className="setting">
          <img src={sideBarIcon_6} alt="تنظیمات" width={24} height={24} />
        </Link>
      </aside>
    );
  }
}

export default SideBar;
