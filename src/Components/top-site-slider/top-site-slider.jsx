import React, { Component } from "react";
import circle_arrow from "../../assets/images/arrow-up-blue.webp";
import main_banner_1 from "../../assets/images/top-slider-banners/top-slide-banner-1.jpeg";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
class TopSiteSlider extends Component {
  state = {};
  render() {
    return (
      <div className="top-site-slider-wrapper">
        {/* <span className="top-slide-btn next">
          <img src={circle_arrow} alt=" بعدی / قبلی" width={15} height={25} />
        </span> */}
        <Link to="/Shop/product/ادبیات-دوازدهم" className="img-place">
          <img src={main_banner_1} alt="اسم برای اسلایدر" />
          {/* <Link className="top-slider-link-btn">کلیک کنید</Link> */}
        </Link>
        {/* <span className="top-slide-btn">
          <img src={circle_arrow} alt=" بعدی / قبلی" width={15} height={25} />
        </span> */}
      </div>
    );
  }
}

export default TopSiteSlider;
