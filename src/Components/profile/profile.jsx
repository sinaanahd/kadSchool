import React, { Component } from "react";
import { Helmet } from "react-helmet";
import SideBar from "../side-bar/side-bar";
import withWebsiteData from "../hoc/with-website-data";
import PageDecider from "./page-decider/page-decider";
import Info from "./info/info";
import ProfileFinanace from "./profile-finance/profile-finanace";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

class Profile extends Component {
  state = {
    pause: false,
    page: "info",
  };
  componentDidMount() {}
  handle_page = (page) => {
    this.setState({ page });
  };

  render() {
    const { user, handle_error, subjects, years, inside_user, user_pay_info , make_user_empty} =
      this.props;
    return (
      <>
        <Helmet>
          <title>پروفایل</title>
          <meta
            name="description"
            content="در این صفحه می‌توانید اطلاعات پروفایل خود را تغییر دهید و همچنین صورتحساب خود را مشاهده کنید. اطلاعات شما با ما امن می‌باشد و کاد به خودش افتخار میکنه که همراهش هستی . به راحتی از امکانات صفحه استفاده کنید و اطلاعات خود را به‌روز نگه دارید و صورتحساب خود را مشاهده کنید."
          />
        </Helmet>
        <section className="bgc-wrapper profile-section">
          <div className="profile-wrapper mm-width">
            <SideBar />
            <div className="mian-content">
              <h1>پروفایل</h1>
              <div className="colums-3">
                {!user ? (
                  <div className="not-loged-in">
                    دوست خوبم برای استفاده از این صفحه نیاز هست که :
                    <Link to="/Login">لاگین کنید</Link>
                  </div>
                ) : (
                  <>
                    <PageDecider
                      handle_page={this.handle_page}
                      page={this.state.page}
                    />
                    {this.state.page === "info" ? (
                      <Info
                        handle_error={handle_error}
                        // month={this.state.month}
                        // months={this.state.months}
                        // days={this.state.days}
                        // day={this.state.day}
                        // year={this.state.year}
                        // years={this.state.years}
                        // handle_day={this.handle_day}
                        // handle_month={this.handle_month}
                        // handle_year={this.handle_year}
                        user={user ? user : false}
                        subjects={subjects}
                        ref_years={years}
                        inside_user={inside_user}
                        make_user_empty={make_user_empty}
                      />
                    ) : this.state.page === "fianance" ? (
                      <ProfileFinanace
                        user={user ? user : false}
                        handle_error={handle_error}
                        user_pay_info={user_pay_info}
                      />
                    ) : (
                      <div className="empty">در حال طراحی ...</div>
                    )}
                  </>
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
