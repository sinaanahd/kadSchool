import React, { Component } from "react";
import { Helmet } from "react-helmet";
import SideBar from "../side-bar/side-bar";
import withWebsiteData from "../hoc/with-website-data";

import banner from "../../assets/images/top-students.jpg";

const TopStudents = () => {
  return (
    <>
      <Helmet>
        <title>رتبه‌های برتر کاد</title>
        <meta
          name="description"
          content="دانش آموزان برتر کاد که توانسته‌اند بهترین نتایج کنکور را کسب کنند. به کاد بپیوندید تا شما هم یکی از آنان باشید و بهترین نتیجه در کنکور را رقم بزنید."
        />
      </Helmet>
      <section className="bgc-wrapper">
        <div className="weekplan-kad-wrapper mm-width">
          <SideBar />
          <div className="main-content">
            <h1 className="title">رتبه‌های برتر کاد</h1>
            <img src={banner} alt="رتبه های برتر کاد" />
          </div>
        </div>
      </section>
    </>
  );
};

export default TopStudents;
// class TopStudents2 extends Component {
//   state = {};
//   render() {
//     return (

//     );
//   }
// }
