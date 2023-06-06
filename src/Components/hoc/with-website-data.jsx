import React from "react";
import axios from "axios";
import Header from "../header/header";
import NewFooter from "../footer/new-footer";
const local_user = JSON.parse(localStorage.getItem("user-kad"))
  ? JSON.parse(localStorage.getItem("user-kad"))
  : false;
function withWebsiteData(Component) {
  return class withWebsiteData extends Component {
    state = {
      user: local_user,
      my_log: "",
      err: {
        state: false,
        message: "",
      },
      active_day: "Friday",
    };
    componentDidMount() {
      if (this.state.user) {
        this.get_user();
      }
    }
    get_user = () => {
      axios
        .get(
          ` https://daryaftyar.ir/backend/kad_api/user/${local_user.user_id}`
        )
        .then((res) => {
          const user = res.data;
          this.setState({ my_log: res.data });
          this.setState({ user });
          localStorage.setItem("user-kad", JSON.stringify(user));
        })
        .catch((e) => {
          this.handle_error(e);
        });
    };
    handle_error = (e) => {
      const err = {
        state: true,
        message: e.message,
        classes: ["err-show ", " error-wrapper"],
      };
      this.setState({ err });
      setTimeout(() => {
        const err = {
          state: true,
          message: e.message,
          classes: [" error-wrapper"],
        };
        this.setState({ err });
      }, 100);
      setTimeout(() => {
        const err = {
          state: true,
          message: e.message,
          classes: ["err-show ", " error-wrapper"],
        };
        this.setState({ err });
      }, 4000);
      setTimeout(() => {
        const err = {
          state: false,
          message: "",
          classes: [],
        };
        this.setState({ err });
      }, 5000);
    };
    inside_user = (user) => {
      this.setState({ user });
      localStorage.setItem("user-kad", JSON.stringify(user));
    };
    change_active_date = (active_day) => {
      this.setState({ active_day });
    };
    render() {
      return (
        <>
          <Header user={this.state.user ? this.state.user : false} />
          <Component
            {...this.props}
            data={this.state}
            user={this.state.user}
            inside_user={this.inside_user}
            handle_error={this.handle_error}
            change_active_date={this.change_active_date}
          />
          {this.state.err.state ? (
            <div className={this.state.err.classes.map((c) => `${c}`)}>
              {this.state.err.message}
            </div>
          ) : (
            <></>
          )}
          <NewFooter />
        </>
      );
    }
  };
}
export default withWebsiteData;
