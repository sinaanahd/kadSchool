import React from "react";
import axios from "axios";
const local_user = JSON.parse(localStorage.getItem("user-kad"))
  ? JSON.parse(localStorage.getItem("user-kad"))
  : false;
function withWebsiteData(Component) {
  return class withWebsiteData extends Component {
    state = {
      user: local_user,
    };
    componentDidMount() {
      axios
        .get(`https://daryaftyar.ir/backend/api/kad_user/${341393410}`)
        .then((res) => {
          const user = res.data;
          this.setState({ user });
          localStorage.setItem("user-kad", JSON.stringify(user));
        })
        .catch((err) => console.log(err));
    }
    render() {
      return (
        <Component {...this.props} data={this.state} user={this.state.user} />
      );
    }
  };
}
export default withWebsiteData;
