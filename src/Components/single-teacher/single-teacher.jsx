import React, { Component } from "react";
import withWebsiteData from "../hoc/with-website-data";
import { Helmet } from "react-helmet";
import SideBar from "../side-bar/side-bar";
import LittleLoading from "../reuseables/little-loading";
import arrow from "../../assets/images/dow-arroow-filter.svg";
import downArrowBlue from "../../assets/images/down-arrow-blue.svg";
import avatar from "../../assets/images/avatar.svg";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import scrollToTop from "../functions/scroll";
class SingleTeacher extends Component {
  state = {
    more_cm: false,
    kelas_carouse_pos: 0,
    open_sample_drop_down: false,
  };
  componentDidMount() {
    const page_id = parseInt(window.location.pathname.split("/")[2]);
    this.props.find_single_teacher(page_id);
    const data_check = setInterval(() => {
      if (this.props.single_teacher) {
        clearInterval(data_check);
      } else {
        this.props.find_single_teacher(page_id);
      }
    }, 2000);
  }

  handle_cm = () => {
    const more_cm = !this.state.more_cm;
    this.setState({ more_cm });
  };
  handle_carousel_move = (way) => {
    const kelas_carouse_pos = this.state.kelas_carouse_pos;
    const my_length = Math.floor(this.props.single_teacher.kelases.length / 4);
    if (way === "next") {
      if (my_length !== kelas_carouse_pos)
        this.setState({ kelas_carouse_pos: kelas_carouse_pos + 1 });
    } else {
      if (kelas_carouse_pos !== 0)
        this.setState({ kelas_carouse_pos: kelas_carouse_pos - 1 });
    }
  };
  handle_sample = (open_sample_drop_down) => {
    if (open_sample_drop_down !== this.state.open_sample_drop_down)
      this.setState({ open_sample_drop_down });
    else {
      this.setState({ open_sample_drop_down: false });
    }
  };
  render() {
    const { single_teacher } = this.props;
    const jozveha = single_teacher
      ? [
          ...single_teacher.sample_files.pdf_sample_files.filter(
            (f) => f.file_type === "نمونه جزوه"
          ),
        ]
      : false;
    const taklifha = single_teacher
      ? [
          ...single_teacher.sample_files.pdf_sample_files.filter(
            (f) => f.file_type === "نمونه تکلیف"
          ),
        ]
      : false;
    const azmonha = single_teacher
      ? [
          ...single_teacher.sample_files.pdf_sample_files.filter(
            (f) => f.file_type === "نمونه آزمون"
          ),
        ]
      : false;
    return (
      <>
        <Helmet>
          <title>
            {single_teacher ? single_teacher.fullname : "اسم استاد"}
          </title>
        </Helmet>
        <section className="single-teacher-wrapper bgc-wrapper">
          <div className="single-teacher mm-width">
            <SideBar />
            <div className="main-content">
              <h1 className="title">
                {single_teacher ? single_teacher.fullname : <LittleLoading />}
              </h1>
              {/* {single_teacher ? single_teacher : <LittleLoading />} */}

              <div className="teacher-details">
                <span className="teacher-img-name">
                  {single_teacher ? (
                    <img
                      src={single_teacher.image_link}
                      alt={single_teacher.fullname}
                    />
                  ) : (
                    <LittleLoading />
                  )}

                  {/* <h2>نام استاد</h2> */}
                </span>
                <span className="teacher-resume-wrapper">
                  <h3 className="resume-title">رزومه</h3>
                  <ul className="teacher-resume-items">
                    <li>لورم ایپسوم</li>
                    <li>لورم ایپسوم</li>
                    <li>لورم ایپسوم</li>
                    <li>لورم ایپسوم</li>
                  </ul>
                </span>
              </div>
              <div className="intriduction-wrapper">
                <h3 className="intro-title">معرفی</h3>
                <div className="intro-video-wrapper"></div>
              </div>
              <div className="teachers-courses-wrapper">
                <h3 className="course-title">کلاس ها</h3>
                <div className="teacher-courses-wrapper">
                  {single_teacher ? (
                    single_teacher.kelases.length >= 4 ? (
                      <span
                        className="prev-course arrows"
                        onClick={() => {
                          this.handle_carousel_move("prev");
                        }}>
                        <img src={arrow} alt="قبلی" />
                      </span>
                    ) : (
                      <></>
                    )
                  ) : (
                    <></>
                  )}

                  <div
                    className={"courses car-" + this.state.kelas_carouse_pos}>
                    {single_teacher ? (
                      single_teacher.kelases.map((k) => (
                        <Link
                          onClick={() => {
                            scrollToTop();
                          }}
                          to={`/SingleProd/${k.kelas_id}`}
                          key={k.kelas_id}
                          className="course">
                          <span className="img-wrapper">
                            <img src={k.image_link} alt={k.kelas_title} />
                          </span>
                          <h2>{k.kelas_title}</h2>
                          <p>{k.descriptions}</p>
                        </Link>
                      ))
                    ) : (
                      <LittleLoading />
                    )}

                    {/* <div className="course">2</div>
                    <div className="course">3</div>
                    <div className="course">4</div>
                    <div className="course">5</div>
                    <div className="course">6</div> */}
                  </div>
                  {single_teacher ? (
                    single_teacher.kelases.length >= 4 ? (
                      <span
                        className="next-course arrows"
                        onClick={() => {
                          this.handle_carousel_move("next");
                        }}>
                        <img src={arrow} alt="بعدی" />
                      </span>
                    ) : (
                      ""
                    )
                  ) : (
                    <></>
                  )}
                </div>
              </div>
              <div className="teachers-sample-wrapper">
                <h3 className="teacher-sample-title">نمونه تدریس</h3>
                <div className="samples">
                  {single_teacher ? (
                    single_teacher.sample_files.video_sample_files.map((sv) =>
                      sv.file_type === "نمونه تدریس" ? (
                        <div className="sample-wrapper" key={sv.file_id}>
                          <span className="img-wrapper">
                            <img src={sv.file_link} alt="" />
                          </span>
                          <h4 className="sample-title">{sv.file_id}</h4>
                          <p>{sv.teacher_id}</p>
                        </div>
                      ) : (
                        <React.Fragment key={sv.file_id}></React.Fragment>
                      )
                    )
                  ) : (
                    <LittleLoading />
                  )}
                </div>
                <div className="sample-btns-wrapper">
                  <span
                    className="sample-btn"
                    onClick={() => {
                      this.handle_sample("jozve");
                    }}>
                    نمونه جزوه
                    {this.state.open_sample_drop_down === "jozve" ? (
                      single_teacher ? (
                        jozveha && jozveha.length !== 0 ? (
                          <span className="sample-files">
                            {jozveha.map((sf) => (
                              <a
                                key={sf.file_id}
                                target="_blank"
                                href={sf.file_link}
                                className="sample-file">
                                دانلود نمونه جزوه
                              </a>
                            ))}
                          </span>
                        ) : (
                          <></>
                        )
                      ) : (
                        <LittleLoading />
                      )
                    ) : (
                      <></>
                    )}
                  </span>
                  <span
                    className="sample-btn"
                    onClick={() => {
                      this.handle_sample("test");
                    }}>
                    نمونه آزمون
                    {this.state.open_sample_drop_down === "test" ? (
                      single_teacher ? (
                        azmonha && azmonha.length !== 0 ? (
                          <span className="sample-files">
                            {azmonha.map((sf) => (
                              <a
                                key={sf.file_id}
                                target="_blank"
                                href={sf.file_link}
                                className="sample-file">
                                دانلود نمونه آزمون
                              </a>
                            ))}
                          </span>
                        ) : (
                          <></>
                        )
                      ) : (
                        <LittleLoading />
                      )
                    ) : (
                      <></>
                    )}
                  </span>
                  <span
                    className="sample-btn"
                    onClick={() => {
                      this.handle_sample("taklif");
                    }}>
                    نمونه تکلیف
                    {this.state.open_sample_drop_down === "taklif" ? (
                      single_teacher ? (
                        taklifha && taklifha.length !== 0 ? (
                          <span className="sample-files">
                            {taklifha.map((sf) => (
                              <a
                                key={sf.file_id}
                                target="_blank"
                                href={sf.file_link}
                                className="sample-file">
                                دانلود نمونه تکلیف
                              </a>
                            ))}
                          </span>
                        ) : (
                          <></>
                        )
                      ) : (
                        <LittleLoading />
                      )
                    ) : (
                      <></>
                    )}
                  </span>
                </div>
              </div>
              <div className="students-comments-wrapper">
                <h3 className="semi-2-title">نظرات دانش آموزان</h3>
                <textarea
                  name=""
                  id=""
                  placeholder="type ..."
                  className="text-area"></textarea>
                <span className="submit-btn-wrapper">
                  <span className="submit-comment">ارسال</span>
                </span>
                <div
                  className={
                    this.state.more_cm
                      ? "comments-wrapper open-cm"
                      : "comments-wrapper"
                  }>
                  <div className="comment">
                    <span className="name-avatar">
                      <img src={avatar} alt="" />
                      نام کاربری
                    </span>
                    <p className="comment-text">
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم استفاده از
                      طراحان گرافیک است.
                    </p>
                  </div>
                  <div className="comment">
                    <span className="name-avatar">
                      <img src={avatar} alt="" />
                      نام کاربری
                    </span>
                    <p className="comment-text">
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم استفاده از
                      طراحان گرافیک است.
                    </p>
                  </div>
                  <div className="comment">
                    <span className="name-avatar">
                      <img src={avatar} alt="" />
                      نام کاربری
                    </span>
                    <p className="comment-text">
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم استفاده از
                      طراحان گرافیک است.
                    </p>
                  </div>
                  <div className="comment">
                    <span className="name-avatar">
                      <img src={avatar} alt="" />
                      نام کاربری
                    </span>
                    <p className="comment-text">
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم استفاده از
                      طراحان گرافیک است.
                    </p>
                  </div>
                  <div className="comment">
                    <span className="name-avatar">
                      <img src={avatar} alt="" />
                      نام کاربری
                    </span>
                    <p className="comment-text">
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم استفاده از
                      طراحان گرافیک است.
                    </p>
                  </div>
                  <div className="comment">
                    <span className="name-avatar">
                      <img src={avatar} alt="" />
                      نام کاربری
                    </span>
                    <p className="comment-text">
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم استفاده از
                      طراحان گرافیک است.
                    </p>
                  </div>

                  <span
                    onClick={() => {
                      this.handle_cm();
                    }}
                    className={this.state.more_cm ? "more close" : "more"}>
                    {this.state.more_cm ? "کمتر" : "بیشتر"}
                    <img src={downArrowBlue} alt="" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default withWebsiteData(SingleTeacher);
