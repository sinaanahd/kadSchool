import React, { Component } from "react";
import { Helmet } from "react-helmet";
import withWebsiteData from "../hoc/with-website-data";
import login_bgc from "../../assets/images/login-img.svg";

class SetPassWord extends Component {
  state = {};
  componentDidMount() {
    // document.querySelector(".new-footer").style.display = "none";
    // document.querySelector(".main-header").style.display = "none";
    const { user } = this.props;
    // if (user) {
    //   window.location.href = window.location.href.replace(
    //     "SignUp",
    //     "Dashboard"
    //   );
    // }
  }
  render() {
    return (
      <>
        <Helmet>
          <title>تعیین رمز عبور</title>
        </Helmet>
        <section className="login-wrapper-section">
          <img
            src={login_bgc}
            alt="عکس پس زمینه برای صفحه ورود"
            className="login-bgc"
          />
        </section>
      </>
    );
  }
}

export default withWebsiteData(SetPassWord);
