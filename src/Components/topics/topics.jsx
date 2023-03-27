import React, { Component } from "react";
import Header from "../header/header";
import SideBar from "../side-bar/side-bar";
import { Helmet } from "react-helmet";
import spilit_in_three from "../functions/spilit_in_three";
import sampleRectangle from "../../assets/images/sample-rectangle-v.svg";
class Topics extends Component {
  state = {};
  render() {
    return (
      <>
        <Helmet>
          <title>دوره های کاد</title>
        </Helmet>
        <Header />
        <section className="topics-wrapper-section bgc-wrapper">
          <div className="topics-wrapper mm-width">
            <SideBar />
            <div className="main-content">
              <div className="topic">
                <img src={sampleRectangle} alt="" />
                <h2 className="title">عنوان دوره</h2>
                <p className="desc">توضیحات درباره دوره</p>
                <span className="price">
                  {spilit_in_three(209000)}
                  &nbsp; تومان
                </span>
                <span className="buy-topic">افزودن</span>
              </div>
              <div className="topic">
                <img src={sampleRectangle} alt="" />
                <h2 className="title">عنوان دوره</h2>
                <p className="desc">توضیحات درباره دوره</p>
                <span className="price">
                  {spilit_in_three(209000)}
                  &nbsp; تومان
                </span>
                <span className="buy-topic">افزودن</span>
              </div>
              <div className="topic">
                <img src={sampleRectangle} alt="" />
                <h2 className="title">عنوان دوره</h2>
                <p className="desc">توضیحات درباره دوره</p>
                <span className="price">
                  {spilit_in_three(209000)}
                  &nbsp; تومان
                </span>
                <span className="buy-topic">افزودن</span>
              </div>
              <div className="topic">
                <img src={sampleRectangle} alt="" />
                <h2 className="title">عنوان دوره</h2>
                <p className="desc">توضیحات درباره دوره</p>
                <span className="price">
                  {spilit_in_three(209000)}
                  &nbsp; تومان
                </span>
                <span className="buy-topic">افزودن</span>
              </div>
              <div className="topic">
                <img src={sampleRectangle} alt="" />
                <h2 className="title">عنوان دوره</h2>
                <p className="desc">توضیحات درباره دوره</p>
                <span className="price">
                  {spilit_in_three(209000)}
                  &nbsp; تومان
                </span>
                <span className="buy-topic">افزودن</span>
              </div>
              <div className="topic">
                <img src={sampleRectangle} alt="" />
                <h2 className="title">عنوان دوره</h2>
                <p className="desc">توضیحات درباره دوره</p>
                <span className="price">
                  {spilit_in_three(209000)}
                  &nbsp; تومان
                </span>
                <span className="buy-topic">افزودن</span>
              </div>
              <div className="topic">
                <img src={sampleRectangle} alt="" />
                <h2 className="title">عنوان دوره</h2>
                <p className="desc">توضیحات درباره دوره</p>
                <span className="price">
                  {spilit_in_three(209000)}
                  &nbsp; تومان
                </span>
                <span className="buy-topic">افزودن</span>
              </div>
              <div className="topic">
                <img src={sampleRectangle} alt="" />
                <h2 className="title">عنوان دوره</h2>
                <p className="desc">توضیحات درباره دوره</p>
                <span className="price">
                  {spilit_in_three(209000)}
                  &nbsp; تومان
                </span>
                <span className="buy-topic">افزودن</span>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Topics;
