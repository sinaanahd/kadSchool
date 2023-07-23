import React, { Component } from "react";

import closeImg from "../../../../assets/images/close-circle.webp";
import LittleLoading from "../../../reuseables/little-loading";
class PopUpQuestion extends Component {
  state = {
    answer: "",
    pause: false,
    animate: "animate-pop-up",
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({ animate: "" });
    }, 100);
  }
  handle_selected = (answer) => {
    this.setState({ answer });
  };
  show_answer = () => {
    this.setState({ pause: true });
    const answer = this.state.answer;
    setTimeout(() => {
      this.setState({ pause: false });
      alert(`شما گزینه ${answer} را انتخاب کردید`);
      this.props.close_func();
    }, 1000);
  };
  render() {
    const { close_func } = this.props;
    return (
      <div className={"pop-up-question-wrapper " + this.state.animate}>
        <div className="question-box">
          <div className="pop-up-header">
            <h3 className="pop-up-title">موضوع ( عنوان ویدئو / مبحث )</h3>
            <div className="points-close">
              <span className="points">۱ امتیاز</span>
              <span
                className="close-pop-up"
                onClick={() => {
                  close_func();
                }}>
                <img src={closeImg} alt="بستن سوال" />
              </span>
            </div>
          </div>
          <p className="question-text">
            - لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است.
          </p>
          <div className="options-wrapper">
            <span
              className={
                this.state.answer === 1
                  ? "answer-option active"
                  : "answer-option"
              }
              onClick={() => {
                this.handle_selected(1);
              }}>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
            </span>
            <span
              className={
                this.state.answer === 2
                  ? "answer-option active"
                  : "answer-option"
              }
              onClick={() => {
                this.handle_selected(2);
              }}>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
            </span>
            <span
              className={
                this.state.answer === 3
                  ? "answer-option active"
                  : "answer-option"
              }
              onClick={() => {
                this.handle_selected(3);
              }}>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
            </span>
            <span
              className={
                this.state.answer === 4
                  ? "answer-option active"
                  : "answer-option"
              }
              onClick={() => {
                this.handle_selected(4);
              }}>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
            </span>
          </div>
          <span className="submit-wrapper">
            {!this.state.pause ? (
              <span
                className="submit-answer"
                onClick={() => {
                  this.show_answer();
                }}>
                ثبت پاسخ
              </span>
            ) : (
              <span className="submit-answer">
                <LittleLoading />
              </span>
            )}
          </span>
        </div>
      </div>
    );
  }
}

export default PopUpQuestion;
