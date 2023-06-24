import React, { Component } from "react";
import { Link } from "react-router-dom";
import scrollToTop from "../../functions/scroll";

import LittleLoading from "../../reuseables/little-loading";
import dots from "../../../assets/images/dots.svg";
class Session extends Component {
  state = {};
  componentDidMount() {}
  render() {
    const { jalase, course } = this.props;
    return (
      <span className="recorded-session-item">
        <Link
          onClick={() => scrollToTop()}
          to={`/SingleSession/${jalase ? jalase.jalase_id : ""}`}
          className="session-num">
          {jalase ? jalase.jalase_title : ""}
        </Link>
        <span className="session-subject">
          {course ? course.name : <LittleLoading />}
        </span>
        <span className="session-date">
          {jalase
            ? new Date(jalase.jalase_date).toLocaleDateString("fa-IR")
            : ""}
        </span>
        <Link
          onClick={() => scrollToTop()}
          to={`/SingleSession/${jalase ? jalase.jalase_id : ""}`}
          className="dots">
          <img src={dots} alt="بیشتر" width={3} height={19} />
        </Link>
      </span>
    );
  }
}

export default Session;
