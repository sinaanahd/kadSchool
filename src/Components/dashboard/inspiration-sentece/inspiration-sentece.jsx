import React, { Component } from "react";
import ins_bg from "../../../assets/images/inspire-bg.webp";
class InspirationSentence extends Component {
  state = {};
  render() {
    const { motiv_quote } = this.props;
    return (
      <div className="ins-sentence">
        <p>
          {motiv_quote}
          {/* <b>دیوید برینکلی - فیلمنامه‌نویس</b> */}
        </p>
        <img src={ins_bg} alt="جمله انگیزشی" />
      </div>
    );
  }
}

export default InspirationSentence;
