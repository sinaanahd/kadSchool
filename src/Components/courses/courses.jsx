import React, { Component } from "react";
import SideBar from "../side-bar/side-bar";
import { Helmet } from "react-helmet";
import Course from "./course/course";
import PopUp from "./pop-up/pop-up";
import withWebsiteData from "../hoc/with-website-data";
import EmptyCourses from "./empty-course/empty-courses";
import copy_to_clip_board from "../functions/copy-to-clip-board";

import copy_icon from "../../assets/images/copy-icon.svg";
class Courses extends Component {
  state = {
    pop_up: false,
  };
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  open_class_pop_up = (e, entry) => {
    if (!entry) {
      this.setState({ pop_up: true });
      e.preventDefault();
    }
    setTimeout(() => {
      if (this.myRef.current !== null) {
        this.myRef.current.classList.remove("animate-pop-up");
      }
    }, 100);
  };
  close_class_pop_up = () => {
    this.setState({ pop_up: false });
  };
  render() {
    const { user } = this.props;
    return (
      <>
        <Helmet>
          <title>درس های من</title>
        </Helmet>
        <section className="courses-section bgc-wrapper">
          <div className="main-content mm-width">
            <SideBar />
            {user ? (
              user.kelases.length !== 0 ? (
                <div className="spot-courses">
                  <div className="enter-class-spotplayer-info">
                    <span className="enter-online-class">
                      ورود به کلاس درحال برگزاری
                    </span>
                    <div className="spot-player-info">
                      <p>
                        دوست خوب کادی ❤️
                        <br />
                        برای ورود آنلاین به کلاس میتونی از یوزر نیم و پسوردت
                        استفاده کنی و برای مشاهده آفلاین کلاس هم میتونی کد
                        لایسنسن اسپات پلیر رو یک بار وارد نرم افزار کنی
                      </p>
                      <div className="spot-datas-wrapper">
                        <span className="spot-data">
                          <span className="spot-title"> یوزرنیم :</span>
                          <span className="code-copy">
                            <span className="spot-be-data">
                              {user.skyRoom_username}
                            </span>
                            <img
                              src={copy_icon}
                              onClick={() => {
                                copy_to_clip_board(user.skyRoom_username);
                              }}
                              alt="کپی کردن"
                            />
                          </span>
                        </span>
                        <span className="spot-data">
                          <span className="spot-title">پسوورد : </span>
                          <span className="code-copy">
                            <span className="spot-be-data">
                              {user.skyRoom_password}
                            </span>
                            <img
                              src={copy_icon}
                              onClick={() => {
                                copy_to_clip_board(user.skyRoom_password);
                              }}
                              alt="کپی کردن"
                            />
                          </span>
                        </span>
                        <span className="spot-data">
                          <span className="spot-title">لایسنس اسپات پلیر:</span>
                          <span className="code-copy">
                            <span className="spot-be-data">
                              {/* {user.} */}
                            </span>
                            <img
                              src={copy_icon}
                              onClick={() => {
                                copy_to_clip_board();
                              }}
                              alt="کپی کردن"
                            />
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="courses-wrapper">
                    {user.kelases.map((k) => (
                      <Course
                        key={k.kelas_id}
                        open_class_pop_up={this.open_class_pop_up}
                        kelas={k}
                      />
                    ))}
                  </div>
                </div>
              ) : (
                <EmptyCourses />
              )
            ) : (
              <EmptyCourses />
            )}
          </div>
          {/* <Link
            to="/Topics"
            className="buy-course"
            onClick={() => {
              scrollToTop();
            }}>
            خرید دوره
          </Link> */}
        </section>
        {this.state.pop_up ? (
          <PopUp
            close_pu={this.close_class_pop_up}
            my_ref={this.myRef}
            user={user}
          />
        ) : (
          <></>
        )}
      </>
    );
  }
}

export default withWebsiteData(Courses);
