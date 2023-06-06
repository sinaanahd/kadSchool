import React, { Component } from "react";
import { Helmet } from "react-helmet";
import SideBar from "../side-bar/side-bar";
import withWebsiteData from "../hoc/with-website-data";
import PageDecider from "./page-decider/page-decider";
import give_date_data from "../functions/give-date-data";
import Info from "./info/info";
import find_month from "../functions/find-month";
import ProfileFinanace from "./profile-finance/profile-finanace";

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
  handle_month = (month) => {
    this.setState({ month: find_month(month) });
    const data = give_date_data(month);
    const days = [...this.state.days];
    const day = this.state.day;
    //console.log(data.arr, days);
    if (data.arr.length !== days.length) {
      this.setState({ days: data.arr });
      if (day === 31) this.setState({ day: 1 });
    }
  };
  handle_year = (year) => {
    this.setState({ year });
  };
  render() {
    const { user } = this.props;
    return (
      <>
        <Helmet>
          <title>پروفایل</title>
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
                    handle_day={this.handle_day}
                    handle_month={this.handle_month}
                    handle_year={this.handle_year}
                  />
                ) : this.state.page === "fianance" ? (
                  <ProfileFinanace />
                ) : (
                  <div className="empty">در حال طراحی ...</div>
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
