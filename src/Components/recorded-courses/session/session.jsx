import React, { Component } from "react";
import { Link } from "react-router-dom";
import scrollToTop from "../../functions/scroll";

import dots from "../../../assets/images/dots.svg";
class Session extends Component {
  state = {
    course_number: false,
  };
  componentDidMount() {
    let my_path = window.location.pathname;
    my_path = parseInt(my_path.split("/")[2]);
    this.setState({ course_number: my_path });
  }
  render() {
    const { jalase, temp_id } = this.props;
    const date = new Date(jalase.jalase_date);
    return (
      <span className="recorded-session-item">
        <Link
          onClick={() => scrollToTop()}
          to={`/SingleSession/${this.state.course_number}/${temp_id}`}
          className="session-num">
          {jalase.jalase_title}
        </Link>
        <span className="session-subject">{"ریاضی"}</span>
        <span className="session-date">{date.toLocaleDateString("fa-IR")}</span>
        <Link
          onClick={() => scrollToTop()}
          to={`/SingleSession/${this.state.course_number}/${temp_id}`}
          className="dots">
          <img src={dots} alt="بیشتر" width={3} height={19} />
        </Link>
      </span>
    );
  }
}

export default Session;
