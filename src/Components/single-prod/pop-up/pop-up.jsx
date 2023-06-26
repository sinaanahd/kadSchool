import React, { Component } from "react";
import arrowDown from "../../../assets/images/down-arrow-blue.svg";
class PopUp extends Component {
  state = {
    animate: "pp-animate ",
    faq_number: 0,
    show_sample: false,
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({ animate: " " });
    }, 300);
    console.log(this.props.sample_files);
  }
  handle_faq = (faq_number) => {
    if (faq_number === this.state.faq_number) {
      this.setState({ faq_number: 0 });
    } else {
      this.setState({ faq_number });
    }
  };
  show_samples_link = (show_sample) => {
    if (show_sample === this.state.show_sample) {
      this.setState({ show_sample: false });
    } else {
      this.setState({ show_sample });
    }
  };
  render() {
    const { type, handle_pop_up, sample_files } = this.props;
    const jozeha = sample_files
      ? [
          ...sample_files.pdf_sample_files.filter(
            (sf) => sf.file_type === "نمونه جزوه"
          ),
        ]
      : false;
    const azmonha = sample_files
      ? [
          ...sample_files.pdf_sample_files.filter(
            (sf) => sf.file_type === "نمونه آزمون"
          ),
        ]
      : false;
    const taklifha = sample_files
      ? [
          ...sample_files.pdf_sample_files.filter(
            (sf) => sf.file_type === "نمونه تکلیف"
          ),
        ]
      : false;
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
              {sample_files ? (
                <>
                  <span className="video-place">
                    {sample_files.video_sample_files.map(
                      (sv) =>
                        (sv.file_type = "نمونه تدریس" ? sv.file_link : <></>)
                    )}
                  </span>
                  <p className="pop-up-text sample-text">توضیحات...</p>
                  <span className="sample-btns-wrapper">
                    <span
                      className="sample-btn"
                      onClick={() => {
                        this.show_samples_link("jozveha");
                      }}>
                      نمونه جزوه
                      {jozeha.length !== 0 &&
                      jozeha &&
                      this.state.show_sample === "jozveha" ? (
                        <span className="files-link">
                          {jozeha.map((j) => (
                            <a
                              target="_blank"
                              key={j.file_id}
                              href={j.file_link}>
                              دانلود جزوه
                            </a>
                          ))}
                        </span>
                      ) : (
                        <></>
                      )}
                    </span>
                    <span
                      className="sample-btn"
                      onClick={() => {
                        this.show_samples_link("azmonha");
                      }}>
                      نمونه آزمون
                      {azmonha.length !== 0 &&
                      azmonha &&
                      this.state.show_sample === "azmonha" ? (
                        <span className="files-link">
                          {azmonha.map((a) => (
                            <a
                              target="_blank"
                              key={a.file_id}
                              href={a.file_link}>
                              دانلود آزمون
                            </a>
                          ))}
                        </span>
                      ) : (
                        <></>
                      )}
                    </span>
                    <span
                      className="sample-btn"
                      onClick={() => {
                        this.show_samples_link("taklifha");
                      }}>
                      نمونه تکلیف
                      {taklifha.length !== 0 &&
                      taklifha &&
                      this.state.show_sample === "taklifha" ? (
                        <span className="files-link">
                          {taklifha.map((t) => (
                            <a
                              target="_blank"
                              key={t.file_id}
                              href={t.file_link}>
                              دانلود تکلیف
                            </a>
                          ))}
                        </span>
                      ) : (
                        <></>
                      )}
                    </span>
                  </span>
                </>
              ) : (
                <></>
              )}
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
