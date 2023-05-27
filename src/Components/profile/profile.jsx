import React, { Component } from "react";
import { Helmet } from "react-helmet";
import SideBar from "../side-bar/side-bar";
import withWebsiteData from "../hoc/with-website-data";
import convert_to_persian from "../functions/convert-to-persian";
import LittleLoading from "../reuseables/little-loading";
import axios from "axios";
import PageDecider from "./page-decider/page-decider";
import give_date_data from "../functions/give-date-data";
import Info from "./info/info";

class Profile extends Component {
  state = {
    pause: false,
    page: "info",
    days: [],
    month: "",
    day: "",
    years: [],
    year: "",
    months: [],
  };
  componentDidMount() {
    const data = give_date_data(1);
    this.setState({
      month: data.name,
      days: data.arr,
      months: data.months,
      years: data.years,
    });
  }
  handle_page = (page) => {
    this.setState({ page });
  };
  handle_day = (day) => {
    this.setState({ day });
  };
  render() {
    const { user } = this.props;
    return (
      <>
        <Helmet>
          <title>ویرایش پروفایل</title>
        </Helmet>
        <section className="bgc-wrapper profile-section">
          <div className="profile-wrapper mm-width">
            <SideBar />
            <div className="mian-content">
              <h1>پروفایل</h1>
              <div className="colums-3">
                <PageDecider
                  handle_page={this.handle_page}
                  page={this.state.page}
                />
                {this.state.page === "info" ? (
                  <Info
                    month={this.state.month}
                    months={this.state.months}
                    days={this.state.days}
                    day={this.state.day}
                    year={this.state.year}
                    years={this.state.years}
                  />
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

export default withWebsiteData(Profile);
