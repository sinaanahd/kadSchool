import React, { Component } from "react";
import Header from "../header/header";
import { Helmet } from "react-helmet";
import SideBar from "../side-bar/side-bar";
import withWebsiteData from "../hoc/with-website-data";

import banner_img from "../../assets/images/under-construction.svg";
class UnderConstruction extends Component {
  state = {
    para_text: "",
    counter: 0,
  };
  componentDidMount() {
    setInterval(this.handle_para_text, 50);
  }
  handle_para_text = () => {
    const text =
      " دوست خوبم این صفحه رو داریم برات آماده میکنیم طی چند روز آینده میتونی ازش استفاده کنی ...";
    let para_text = this.state.para_text;
    if (text.length !== para_text.length) {
      para_text += text[para_text.length];
      this.setState({ para_text });
    } else {
      const counter = this.state.counter;
      this.setState({ counter: counter + 1 });
      if (counter === 50) {
        this.setState({ para_text: "", counter: 0 });
      }
    }
  };
  render() {
    const { user } = this.props;
    return (
      <>
        <Helmet>
          <title>در حال ساخت این صفحه هستیم</title>
        </Helmet>
        <section className="under-construction-section bgc-wrapper">
          <div className="under-construction mm-width">
            <SideBar />
            <div className="main-content">
              <h1>{this.state.para_text}</h1>
              <img src={banner_img} alt="صفحه در حال ساخته شدن است" />
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default withWebsiteData(UnderConstruction);
