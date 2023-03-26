import React, { Component } from "react";
import Header from "../header/header";
import SideBar from "../side-bar/side-bar";

import sampleRectangle from "../../assets/images/sample-rectangle.svg";
class Courses extends Component {
  state = {};
  render() {
    return (
      <>
        <Header />
        <section className="courses-section bgc-wrapper">
          <div className="main-content mm-width">
            <SideBar />
            <div className="courses-wrapper">
              <div className="course">
                <img src={sampleRectangle} alt="عکس کلاس" />
                <a href="#" className="enter-class">
                  ورود به کلاس
                </a>
                <a href="#" className="recorded-sessions">
                  جلسات ضبط شده
                </a>
              </div>
              <div className="course">
                <img src={sampleRectangle} alt="عکس کلاس" />
                <a href="#" className="enter-class">
                  ورود به کلاس
                </a>
                <a href="#" className="recorded-sessions">
                  جلسات ضبط شده
                </a>
              </div>
              <div className="course">
                <img src={sampleRectangle} alt="عکس کلاس" />
                <a href="#" className="enter-class">
                  ورود به کلاس
                </a>
                <a href="#" className="recorded-sessions">
                  جلسات ضبط شده
                </a>
              </div>
              <div className="course">
                <img src={sampleRectangle} alt="عکس کلاس" />
                <a href="#" className="enter-class">
                  ورود به کلاس
                </a>
                <a href="#" className="recorded-sessions">
                  جلسات ضبط شده
                </a>
              </div>
              <div className="course">
                <img src={sampleRectangle} alt="عکس کلاس" />
                <a href="#" className="enter-class">
                  ورود به کلاس
                </a>
                <a href="#" className="recorded-sessions">
                  جلسات ضبط شده
                </a>
              </div>
              <div className="course">
                <img src={sampleRectangle} alt="عکس کلاس" />
                <a href="#" className="enter-class">
                  ورود به کلاس
                </a>
                <a href="#" className="recorded-sessions">
                  جلسات ضبط شده
                </a>
              </div>
              <div className="course">
                <img src={sampleRectangle} alt="عکس کلاس" />
                <a href="#" className="enter-class">
                  ورود به کلاس
                </a>
                <a href="#" className="recorded-sessions">
                  جلسات ضبط شده
                </a>
              </div>
            </div>
          </div>
          <a href="#" className="buy-course">
            خرید دوره
          </a>
        </section>
      </>
    );
  }
}

export default Courses;
