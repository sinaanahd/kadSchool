import React, { Component } from "react";
import Header from "../header/header";
import SideBar from "../side-bar/side-bar";
import { Helmet } from "react-helmet";
import sampleRectangle from "../../assets/images/sample-rectangle.svg";
import { Link } from "react-router-dom";
class Courses extends Component {
  state = {};
  render() {
    return (
      <>
        <Helmet>
          <title>درس های من</title>
        </Helmet>
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
                <Link to="/Course/:id" className="recorded-sessions">
                  جلسات ضبط شده
                </Link>
              </div>
              <div className="course">
                <img src={sampleRectangle} alt="عکس کلاس" />
                <a href="#" className="enter-class">
                  ورود به کلاس
                </a>
                <Link to="/Course/:id" className="recorded-sessions">
                  جلسات ضبط شده
                </Link>
              </div>
              <div className="course">
                <img src={sampleRectangle} alt="عکس کلاس" />
                <a href="#" className="enter-class">
                  ورود به کلاس
                </a>
                <Link to="/Course/:id" className="recorded-sessions">
                  جلسات ضبط شده
                </Link>
              </div>
              <div className="course">
                <img src={sampleRectangle} alt="عکس کلاس" />
                <a href="#" className="enter-class">
                  ورود به کلاس
                </a>
                <Link to="/Course/:id" className="recorded-sessions">
                  جلسات ضبط شده
                </Link>
              </div>
              <div className="course">
                <img src={sampleRectangle} alt="عکس کلاس" />
                <a href="#" className="enter-class">
                  ورود به کلاس
                </a>
                <Link to="/Course/:id" className="recorded-sessions">
                  جلسات ضبط شده
                </Link>
              </div>
              <div className="course">
                <img src={sampleRectangle} alt="عکس کلاس" />
                <a href="#" className="enter-class">
                  ورود به کلاس
                </a>
                <Link to="/Course/:id" className="recorded-sessions">
                  جلسات ضبط شده
                </Link>
              </div>
              <div className="course">
                <img src={sampleRectangle} alt="عکس کلاس" />
                <a href="#" className="enter-class">
                  ورود به کلاس
                </a>
                <Link to="/Course/:id" className="recorded-sessions">
                  جلسات ضبط شده
                </Link>
              </div>
            </div>
          </div>
          <Link to="/Topics" className="buy-course">
            خرید دوره
          </Link>
        </section>
      </>
    );
  }
}

export default Courses;
