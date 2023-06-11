import React, { Component } from "react";

import arrowUp from "../../../assets/images/arrow-up-blue.svg";

class FaqQuestion extends Component {
  state = {};
  render() {
    const { question, answer, active_id, handle_clicked_question, id } =
      this.props;
    return (
      <div className={active_id === id ? "question active" : "question"}>
        <div className="question-header">
          <h2 className="question-title">{question}</h2>
          <img
            src={arrowUp}
            alt="بالا"
            onClick={() => {
              handle_clicked_question(id);
            }}
          />
        </div>
        <p className="question-answer">{answer}</p>
      </div>
    );
  }
}

export default FaqQuestion;
