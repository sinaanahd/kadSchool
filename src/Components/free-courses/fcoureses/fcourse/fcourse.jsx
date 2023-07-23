import React, { Component } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import scrollToTop from "../../../functions/scroll";
class FCourse extends Component {
  state = {
    animate: "animate-fcourse",
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({ animate: "" });
    }, 100);
  }
  render() {
    const { kelas } = this.props;
    return (
      <div className={"fcourse " + this.state.animate}>
        <img src={kelas.image_link} alt={kelas.kelas_title} />
        <span className="kelas-name">{kelas.kelas_title}</span>
        <Link
          onClick={() => {
            scrollToTop();
          }}
          to={`/SingleProd/${kelas.kelas_id}`}
          className="view-btn">
          مشاهده
        </Link>
      </div>
    );
  }
}

export default FCourse;
