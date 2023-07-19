import React, { Component } from "react";
import SideBar from "../side-bar/side-bar";
import { Helmet } from "react-helmet";
import spilit_in_three from "../functions/spilit_in_three";
import withWebsiteData from "../hoc/with-website-data";
class Topics extends Component {
  state = {};
  render() {
    const { user } = this.props;
    const sampleRectangle = "1";
    return (
      <>
        <Helmet>
          <title>دوره های کاد</title>
        </Helmet>
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

export default withWebsiteData(Topics);
