import React, { Component } from "react";
import arrowDown from "../../../assets/images/down-arrow-blue.webp";
import AparatVideo from "../../video/aparat-video";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import scrollToTop from "../../functions/scroll";
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
    //console.log(this.props.sample_files);
  }
  handle_faq = (faq_number) => {
    if (faq_number === this.state.faq_number) {
      this.setState({ faq_number: false });
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
    const { type, handle_pop_up, sample_files, faq, cv, dore, teachers } =
      this.props;
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
    const nemone_tadris = sample_files
      ? {
          ...sample_files.video_sample_files.find(
            (sv) => sv.file_type === "نمونه تدریس"
          ),
        }
      : false;
    const teacher_resume = sample_files
      ? {
          ...sample_files.video_sample_files.find(
            (sv) => sv.file_type === "رزومه ویدیویی استاد"
          ),
        }
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
              <span className="video-place">
                ویدیو قرار داده نشده
                {/* <AparatVideo /> */}
              </span>
              <p className="pop-up-text intro-text">
                {dore
                  ? dore.descriptions.length !== 0
                    ? dore.descriptions.map((d, i) => <p key={i++}>{d}</p>)
                    : "توضیحات وارد نشده است"
                  : "توضیحات وارد نشده است"}
              </p>
            </>
          ) : (
            <></>
          )}
          {type === "sample" ? (
            <>
              {sample_files ? (
                <>
                  <span className="video-place">
                    {nemone_tadris &&
                    Object.keys(nemone_tadris).length !== 0 ? (
                      <AparatVideo src={nemone_tadris.file_link} />
                    ) : (
                      "ویدیو قرار داده نشده است"
                    )}
                  </span>
                  {/* <p className="pop-up-text sample-text">توضیحات...</p> */}
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
                      ) : this.state.show_sample === "jozveha" ? (
                        <span className="files-link">فایل ندارد</span>
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
                      ) : this.state.show_sample === "azmonha" ? (
                        <span className="files-link">فایل ندارد</span>
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
                      ) : this.state.show_sample === "taklifha" ? (
                        <span className="files-link">فایل ندارد</span>
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
              {faq ? (
                faq.map((f, i) => (
                  <span className="faq-question-wrapper" key={i++}>
                    <span className="question-icon">
                      <h2>{f.Q}</h2>
                      <span
                        className="pop-qustion-img-arrow"
                        onClick={() => {
                          this.handle_faq(f.Q);
                        }}>
                        <img
                          src={arrowDown}
                          className={
                            this.state.faq_number === f.Q ? "rotate" : ""
                          }
                          alt="باز شدن"
                          loading="lazy"
                        />
                      </span>
                    </span>
                    <p
                      className={
                        this.state.faq_number === f.Q
                          ? "answer-faq vis"
                          : "answer-faq"
                      }>
                      {f.A}
                    </p>
                  </span>
                ))
              ) : (
                <></>
              )}
              {/* <span className="faq-question-wrapper">
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
              </span> */}
            </>
          ) : (
            <></>
          )}
          {type === "resume" ? (
            <>
              <span className="video-place">
                {teacher_resume && Object.keys(teacher_resume).length !== 0 ? (
                  <AparatVideo src={teacher_resume.file_link} />
                ) : (
                  "ویدیو قرار داده نشده است"
                )}
              </span>
              {cv ? (
                cv.full_cv.map((fc, i) => (
                  <React.Fragment key={i++}>
                    <h3 className="pop-up-sub-title">{fc.title}</h3>
                    {fc.arrayed_text.length !== 0 ? (
                      fc.arrayed_text.map((at, j) => (
                        <p key={j++} className="resume-text">
                          {at}
                        </p>
                      ))
                    ) : (
                      <p className="resume-text">وارد نشده است</p>
                    )}
                  </React.Fragment>
                ))
              ) : (
                <p className="resume-text">رزومه وارد نشده است</p>
              )}
              <span className="go-to-teacher-pages">
                {teachers
                  ? teachers.map((t) => (
                      <Link
                        onClick={() => {
                          scrollToTop();
                        }}
                        key={t.teacher_id}
                        to={`/Teacher/${t.slug_name}`}>
                        صفحه رزومه {t.fullname}
                      </Link>
                    ))
                  : ""}
              </span>
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
