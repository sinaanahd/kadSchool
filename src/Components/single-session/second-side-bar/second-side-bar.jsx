import React, { Component } from "react";
import sidebarIcon_1 from "../../../assets/images/second-side-bar-item-3.svg";
import sidebarIcon_2 from "../../../assets/images/second-side-bar-item-2.svg";
import sidebarIcon_3 from "../../../assets/images/second-side-bar-item-1.svg";
import sidebarIcon_3_white from "../../../assets/images/second-side-bar-item-white-1.svg";
import sidebarIcon_2_white from "../../../assets/images/second-side-bar-item-white-2.svg";
import sidebarIcon_1_white from "../../../assets/images/second-side-bar-item-white-3.svg";
class SecondSideBar extends Component {
  state = {};
  render() {
    const { active_side_bar, handle_active_side_bar } = this.props;
    return (
      <div className="second-side-bar-wrapper">
        <span
          className={
            active_side_bar === "download"
              ? "second-side-bar-item active"
              : "second-side-bar-item"
          }
          onClick={() => {
            handle_active_side_bar("download");
          }}>
          <img
            src={
              active_side_bar === "download"
                ? sidebarIcon_1_white
                : sidebarIcon_1
            }
            alt=""
          />
        </span>
        <span
          className={
            active_side_bar === "question"
              ? "second-side-bar-item active"
              : "second-side-bar-item"
          }
          onClick={() => {
            handle_active_side_bar("question");
          }}>
          <img
            src={
              active_side_bar === "question"
                ? sidebarIcon_2_white
                : sidebarIcon_2
            }
            alt=""
          />
        </span>
        <span
          className={
            active_side_bar === "comment"
              ? "second-side-bar-item active"
              : "second-side-bar-item"
          }
          onClick={() => {
            handle_active_side_bar("comment");
          }}>
          <img
            src={
              active_side_bar === "comment"
                ? sidebarIcon_3_white
                : sidebarIcon_3
            }
            alt=""
          />
        </span>
      </div>
    );
  }
}

export default SecondSideBar;
