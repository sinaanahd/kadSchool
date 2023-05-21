import React, { Component } from "react";
import arrowDown from "../../../assets/images/down-arrow-blue.svg";
class PopUp extends Component {
  state = {
    animate: "pp-animate ",
    faq_number: 1,
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({ animate: " " });
    }, 300);
  }
  handle_faq = (faq_number) => {
    if (faq_number === this.state.faq_number) {
      this.setState({ faq_number: 0 });
    } else {
      this.setState({ faq_number });
    }
  };
  render() {
    const { type, handle_pop_up } = this.props;
    return (
      <div
        className={this.state.animate + "pop-up-wrapper " + type}
        onClick={(e) => {
          handle_pop_up(type, e);
        }}>
        <div className="main-data">
          <span className="pop-up-title">
            {type === "intro"
              ? "معرفی دوره"
              : type === "sample"
              ? "نمونه تدریس و فایل ها"
              : type === "faq"
              ? "سوالات متداول"
              : type === "resume"
              ? "رزومه استاد"
              : ""}
          </span>
          {type === "intro" ? (
            <>
              <span className="video-place"></span>
              <p className="pop-up-text intro-text">توضیحات...</p>
            </>
          ) : (
            <></>
          )}
          {type === "sample" ? (
            <>
              <span className="video-place"></span>
              <p className="pop-up-text sample-text">توضیحات...</p>
              <span className="sample-btns-wrapper">
                <span className="sample-btn">نمونه جزوه</span>
                <span className="sample-btn">نمونه آزمون</span>
                <span className="sample-btn">نمونه تکلیف</span>
              </span>
            </>
          ) : (
            <></>
          )}
          {type === "faq" ? (
            <>
              <span className="faq-question-wrapper">
                <span className="question-icon">
                  <h2>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                    با استفاده از طراحان گرافیک است؟
                  </h2>
                  <img
                    src={arrowDown}
                    className={this.state.faq_number === 1 ? "rotate" : ""}
                    onClick={() => {
                      this.handle_faq(1);
                    }}
                    alt=""
                  />
                </span>
                <p
                  className={
                    this.state.faq_number === 1
                      ? "answer-faq vis"
                      : "answer-faq"
                  }>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است
                </p>
              </span>
              <span className="faq-question-wrapper">
                <span className="question-icon">
                  <h2>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                    با استفاده از طراحان گرافیک است؟
                  </h2>
                  <img
                    src={arrowDown}
                    className={this.state.faq_number === 2 ? "rotate" : ""}
                    onClick={() => {
                      this.handle_faq(2);
                    }}
                    alt=""
                  />
                </span>
                <p
                  className={
                    this.state.faq_number === 2
                      ? "answer-faq vis"
                      : "answer-faq"
                  }>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است
                </p>
              </span>
              <span className="faq-question-wrapper">
                <span className="question-icon">
                  <h2>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                    با استفاده از طراحان گرافیک است؟
                  </h2>
                  <img
                    src={arrowDown}
                    className={this.state.faq_number === 3 ? "rotate" : ""}
                    onClick={() => {
                      this.handle_faq(3);
                    }}
                    alt=""
                  />
                </span>
                <p
                  className={
                    this.state.faq_number === 3
                      ? "answer-faq vis"
                      : "answer-faq"
                  }>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است
                </p>
              </span>
              <span className="faq-question-wrapper">
                <span className="question-icon">
                  <h2>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                    با استفاده از طراحان گرافیک است؟
                  </h2>
                  <img
                    src={arrowDown}
                    className={this.state.faq_number === 4 ? "rotate" : ""}
                    onClick={() => {
                      this.handle_faq(4);
                    }}
                    alt=""
                  />
                </span>
                <p
                  className={
                    this.state.faq_number === 4
                      ? "answer-faq vis"
                      : "answer-faq"
                  }>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است
                </p>
              </span>
              <span className="faq-question-wrapper">
                <span className="question-icon">
                  <h2>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                    با استفاده از طراحان گرافیک است؟
                  </h2>
                  <img
                    src={arrowDown}
                    className={this.state.faq_number === 5 ? "rotate" : ""}
                    onClick={() => {
                      this.handle_faq(5);
                    }}
                    alt=""
                  />
                </span>
                <p
                  className={
                    this.state.faq_number === 5
                      ? "answer-faq vis"
                      : "answer-faq"
                  }>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است
                </p>
              </span>
            </>
          ) : (
            <></>
          )}
          {type === "resume" ? (
            <>
              <span className="video-place"></span>
              <h3 className="pop-up-sub-title">سابقه آموزشی</h3>
              <p className="resume-text">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است
              </p>
              <p className="resume-text">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است
              </p>
              <h3 className="pop-up-sub-title">سابقه تحصیلی</h3>
              <p className="resume-text">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است
              </p>
              <p className="resume-text">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است
              </p>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    );
  }
}

export default PopUp;
