import React, { Component } from "react";

import clock_vector from "../../../assets/images/clock-vector.svg";
class PopUp extends Component {
  state = {};
  render() {
    const { close_pu, my_ref, user } = this.props;
    return (
      <div
        className="courses-pop-up-wrapper animate-pop-up"
        ref={my_ref}
        onClick={() => {
          close_pu();
        }}>
        <div className="main-content">
          <img src={clock_vector} />
          <p className="text">{user.name} عزیز الان تایم کلاست نیست</p>
        </div>
      </div>
    );
  }
}

export default PopUp;
