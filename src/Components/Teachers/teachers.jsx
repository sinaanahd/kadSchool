import React, { Component } from "react";
import withWebsiteData from "../hoc/with-website-data";
import { Helmet } from "react-helmet";
import SideBar from "../side-bar/side-bar";
import { Link } from "react-router-dom";
import scrollToTop from "../functions/scroll";
import Teacher from "./teacher/teacher";
class Teachers extends Component {
  state = {};
  componentDidMount() {}
  render() {
    const { teachers } = this.props;
    return (
      <>
        <Helmet>
          <title>بهترین و با تجربه ترین استادان کنکور ایران</title>
        </Helmet>
        <section className="teachers-page-wrapper bgc-wrapper">
          <div className="teachers-wrapper mm-width">
            <SideBar />
            <div className="main-content">
              <h1 className="title">
                بهترین و با تجربه ترین استادان کنکور ایران
              </h1>
              <div className="teachers">
                {teachers ? (
                  teachers.map((t) => <Teacher key={t.id} teacher={t} />)
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default withWebsiteData(Teachers);
