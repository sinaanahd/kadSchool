import React, { Component } from "react";
import { Link } from "react-router-dom";
import scrollToTop from "../../functions/scroll";

import LittleLoading from "../../reuseables/little-loading";
import dots from "../../../assets/images/dots.webp";
class Session extends Component {
  state = {
    show_item: false,
  };
  componentDidMount() {
    console.log(this.props.jalase, this.props.course);
  }
  fill_sample_files = () => {
    const { jalase, sample_files } = this.props;
    const files = [];
    jalase.sample_files.pdf_sample_files_ids.forEach((id) => {
      const file = sample_files.pdf_sample_files.find((f) => f.file_id === id);
      console.log(file);
      if (file) {
        files.push(file);
      }
    });
    const jozve = [...files.filter((f) => f.file_type === "نمونه جزوه")];
    const azmon = [...files.filter((f) => f.file_type === "نمونه آزمون")];
    const taklif = [...files.filter((f) => f.file_type === "نمونه تکلیف")];
    return { jozve, azmon, taklif };
  };
  handle_show_item = (entry) => {
    const show_item = this.state.show_item;
    if (show_item !== entry) {
      this.setState({ show_item: entry });
    } else {
      this.setState({ show_item: false });
    }
  };
  render() {
    const { jalase, course } = this.props;
    return (
      <span className="recorded-session-item">
        <div
          // onClick={() => scrollToTop()}
          to={`/SingleSession/${jalase ? jalase.jalase_id : ""}`}
          className="session-num"
        >
          {jalase ? jalase.jalase_title : ""}
        </div>
        <span className="session-subject">
          {course ? course.name : <LittleLoading />}
        </span>
        <span className="session-date">
          {jalase
            ? new Date(jalase.jalase_date).toLocaleDateString("fa-IR")
            : ""}
        </span>
        <div className="show-files">
          <span className="pdf-btn">
            <span
              onClick={() => {
                this.handle_show_item("jozve");
              }}
              className="pdf-btn-title"
            >
              جزوه
            </span>
            <span
              className={
                this.state.show_item === "jozve"
                  ? "item-box-to-show show"
                  : "item-box-to-show"
              }
            >
              {this.fill_sample_files().jozve.map((j) => (
                <span className="pdf-item" key={j.file_id}>
                  <a href={j.file_link} target="_blank">
                    {j.title}
                  </a>
                </span>
              ))}
            </span>
          </span>
          <span className="pdf-btn">
            <span
              onClick={() => {
                this.handle_show_item("taklif");
              }}
              className="pdf-btn-title"
            >
              تکلیف
            </span>
            <span
              className={
                this.state.show_item === "taklif"
                  ? "item-box-to-show show"
                  : "item-box-to-show"
              }
            >
              {this.fill_sample_files().taklif.map((j) => (
                <span className="pdf-item" key={j.file_id}>
                  <a href={j.file_link} target="_blank">
                    {j.title}
                  </a>
                </span>
              ))}
            </span>
          </span>
          <span className="pdf-btn">
            <span
              onClick={() => {
                this.handle_show_item("azmon");
              }}
              className="pdf-btn-title"
            >
              آزمون
            </span>
            <span
              className={
                this.state.show_item === "azmon"
                  ? "item-box-to-show show"
                  : "item-box-to-show"
              }
            >
              {this.fill_sample_files().azmon.map((j) => (
                <span className="pdf-item" key={j.file_id}>
                  <a href={j.file_link} target="_blank">
                    {j.title}
                  </a>
                </span>
              ))}
            </span>
          </span>
        </div>
        {/* <div
          // onClick={() => scrollToTop()}
          to={`/SingleSession/${jalase ? jalase.jalase_id : ""}`}
          className="dots"
        >
          <img src={dots} alt="بیشتر" width={3} height={19} />
        </div> */}
      </span>
    );
  }
}

export default Session;
