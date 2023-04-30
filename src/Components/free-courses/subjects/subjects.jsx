import React, { Component } from "react";
import ensani_logo from "../../../assets/images/ensani-icon.svg";
import tajrobi_logo from "../../../assets/images/tajrobi-icon.svg";
import riazi_logo from "../../../assets/images/riazi-icon.svg";
import scrollToTop from "../../functions/scroll";
class Subjects extends Component {
  state = {
    animate: "animate-FC",
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({ animate: "" });
    }, 100);
  }
  render() {
    const { go_to_fields } = this.props;
    return (
      <div className="subjects">
        <div
          className={"subject " + this.state.animate}
          onClick={() => {
            scrollToTop();
            go_to_fields("tajrobi");
          }}>
          <img src={tajrobi_logo} alt="رشته تجربی" />
          <h3 className="box-title">رشته تجربی</h3>
        </div>
        <div
          className={"subject " + this.state.animate}
          onClick={() => {
            scrollToTop();
            go_to_fields("riazi");
          }}>
          <img src={riazi_logo} alt="رشته ریاضی" />
          <h3 className="box-title">رشته ریاضی</h3>
        </div>
        <div
          className={"subject " + this.state.animate}
          onClick={() => {
            scrollToTop();
            go_to_fields("ensani");
          }}>
          <img src={ensani_logo} alt="رشته انسانی" />
          <h3 className="box-title">رشته انسانی</h3>
        </div>
      </div>
    );
  }
}

export default Subjects;
