import React, { Component } from "react";
import ins_bg from "../../../assets/images/inspire-bg.svg";
class InspirationSentence extends Component {
  state = {};
  render() {
    return (
      <div className="ins-sentence">
        <p>
          یک فرد موفق کسی است که می‌تواند با آجر‌هایی که دیگران به سمت او پرتاب
          کرده‌اند، پایه و اساس محکمی برای خود بنا کند.
          <b>دیوید برینکلی - فیلمنامه‌نویس</b>
        </p>
        <img src={ins_bg} alt="جمله انگیزشی" />
      </div>
    );
  }
}

export default InspirationSentence;
