import React, { Component } from "react";

import arrowUp from "../../../assets/images/arrow-up-blue.webp";

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
            width={20}
            height={12}
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
