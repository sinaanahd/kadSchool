import React, { Component } from "react";

import leftArrow from "../../../assets/images/left-arrow.svg";
import PopUpQuestion from "./pop-up-question/pop-up-question";
class DaysTip extends Component {
  state = {
    pop_up: false,
  };
  toggle_pop_up = () => {
    const pop_up = !this.state.pop_up;
    this.setState({ pop_up });
  };
  render() {
    return (
      <>
        <div className="days-tip-wrapper">
          <div className="days-tip-title-wrapper">
            <h3 className="days-tip-title">تله و تست</h3>
            <span
              className="back-btn"
              onClick={() => {
                this.toggle_pop_up();
              }}>
              <img width={10} height={18.31} src={leftArrow} alt="بازگشت" />
            </span>
          </div>
          <div className="video-wrapper">
            <div className="h_iframe-aparat_embed_frame">
              <span style={{ display: "block", paddingTop: "57%" }}></span>
              <iframe src="https://www.aparat.com/video/video/embed/videohash/iNPJV/vt/frame?muted=true"></iframe>
            </div>
            {/* <iframe src="https://www.aparat.com/video/video/embed/videohash/iNPJV/vt/frame"></iframe> */}
          </div>
          <h3 className="video-title">عنوان</h3>
          <p className="video-description">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
          </p>
        </div>
        {this.state.pop_up ? (
          <PopUpQuestion close_func={this.toggle_pop_up} />
        ) : (
          <></>
        )}
      </>
    );
  }
}

export default DaysTip;
