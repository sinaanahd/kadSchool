import React, { Component } from "react";

import profileOptionImg_1 from "../../../assets/images/profile-option-6.svg";
import profileOptionImg_2 from "../../../assets/images/profile-option-5.svg";
import profileOptionImg_3 from "../../../assets/images/profile-option-4.svg";
import profileOptionImg_4 from "../../../assets/images/profile-option-3.svg";
import profileOptionImg_5 from "../../../assets/images/profile-option-2.svg";
import profileOptionImg_6 from "../../../assets/images/profile-option-1.svg";
class PageDecider extends Component {
  state = {};
  render() {
    const { handle_page, page } = this.props;
    return (
      <div className="profile-options">
        <span
          onClick={() => {
            handle_page("info");
          }}
          className={page === "info" ? "option active" : "option"}>
          <img src={profileOptionImg_1} alt="" />
          <p>مشخصات</p>
        </span>
        <span
          onClick={() => {
            handle_page("lesson");
          }}
          className={page === "lesson" ? "option active" : "option"}>
          <img src={profileOptionImg_2} alt="" />
          <p>درس های من</p>
        </span>
        <span
          onClick={() => {
            handle_page("exam");
          }}
          className={page === "exam" ? "option active" : "option"}>
          <img src={profileOptionImg_3} alt="" />
          <p>آزمون ها</p>
        </span>
        <span
          onClick={() => {
            handle_page("exrcise");
          }}
          className={page === "exrcise" ? "option active" : "option"}>
          <img src={profileOptionImg_4} alt="" />
          <p>تکالیف</p>
        </span>
        <span
          onClick={() => {
            handle_page("check");
          }}
          className={page === "check" ? "option active" : "option"}>
          <img src={profileOptionImg_5} alt="" />
          <p>رفع اشکال</p>
        </span>
        <span
          onClick={() => {
            handle_page("fianance");
          }}
          className={page === "fianance" ? "option active" : "option"}>
          <img src={profileOptionImg_6} alt="" />
          <p>مالی</p>
        </span>
      </div>
    );
  }
}

export default PageDecider;
