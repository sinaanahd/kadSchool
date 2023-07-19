import React, { Component } from "react";
import scrollToTop from "../../functions/scroll";

import profileOptionImg_white_1 from "../../../assets/images/profile-option-white-6.webp";
import profileOptionImg_1 from "../../../assets/images/profile-option-6.webp";
import profileOptionImg_2 from "../../../assets/images/profile-option-5.webp";
import profileOptionImg_white_2 from "../../../assets/images/profile-option-white-5.webp";
import profileOptionImg_3 from "../../../assets/images/profile-option-4.webp";
import profileOptionImg_white_3 from "../../../assets/images/profile-option-white-4.webp";
import profileOptionImg_4 from "../../../assets/images/profile-option-3.webp";
import profileOptionImg_white_4 from "../../../assets/images/profile-option-white-3.webp";
import profileOptionImg_5 from "../../../assets/images/profile-option-2.webp";
import profileOptionImg_white_5 from "../../../assets/images/profile-option-white-2.webp";
import profileOptionImg_6 from "../../../assets/images/profile-option-1.webp";
import profileOptionImg_white_6 from "../../../assets/images/profile-option-white-1.webp";

class PageDecider extends Component {
  state = {};
  render() {
    const { handle_page, page } = this.props;
    return (
      <div className="profile-options">
        <span
          onClick={() => {
            scrollToTop();
            handle_page("info");
          }}
          className={page === "info" ? "option active" : "option"}>
          <img
            width={25}
            height={25}
            src={
              page === "info" ? profileOptionImg_1 : profileOptionImg_white_1
            }
            alt=""
          />
          <p>مشخصات</p>
        </span>
        <span
          onClick={() => {
            scrollToTop();
            handle_page("fianance");
          }}
          className={page === "fianance" ? "option active" : "option"}>
          <img
            width={25}
            height={25}
            src={
              page !== "fianance"
                ? profileOptionImg_6
                : profileOptionImg_white_6
            }
            alt=""
          />
          <p>مالی</p>
        </span>
        <span
          onClick={() => {
            scrollToTop();
            handle_page("lesson");
          }}
          className={page === "lesson" ? "option active" : "option"}>
          <img
            width={25}
            height={25}
            src={
              page !== "lesson" ? profileOptionImg_2 : profileOptionImg_white_2
            }
            alt=""
          />
          <p>درس های من</p>
        </span>
        <span
          onClick={() => {
            scrollToTop();
            handle_page("exam");
          }}
          className={page === "exam" ? "option active" : "option"}>
          <img
            width={25}
            height={25}
            src={
              page !== "exam" ? profileOptionImg_3 : profileOptionImg_white_3
            }
            alt=""
          />
          <p>آزمون ها</p>
        </span>
        <span
          onClick={() => {
            scrollToTop();
            handle_page("exrcise");
          }}
          className={page === "exrcise" ? "option active" : "option"}>
          <img
            width={25}
            height={25}
            src={
              page !== "exrcise" ? profileOptionImg_4 : profileOptionImg_white_4
            }
            alt=""
          />
          <p>تکالیف</p>
        </span>
        <span
          onClick={() => {
            scrollToTop();
            handle_page("check");
          }}
          className={page === "check" ? "option active" : "option"}>
          <img
            width={25}
            height={25}
            src={
              page !== "check" ? profileOptionImg_5 : profileOptionImg_white_5
            }
            alt=""
          />
          <p>رفع اشکال</p>
        </span>
      </div>
    );
  }
}

export default PageDecider;
