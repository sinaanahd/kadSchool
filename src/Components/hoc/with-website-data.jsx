import React from "react";
import axios from "axios";
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
    };
    componentDidMount() {
      if (this.state.user) {
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
      }
    }
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
    };
    render() {
      return (
        <>
          <Component
            {...this.props}
            data={this.state}
            user={this.state.user}
            inside_user={this.inside_user}
          />
          {this.state.err.state ? (
            <div className={this.state.err.classes.map((c) => `${c}`)}>
              {this.state.err.message}
            </div>
          ) : (
            <></>
          )}
        </>
      );
    }
  };
}
export default withWebsiteData;
