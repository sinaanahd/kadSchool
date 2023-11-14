import React, { Component } from "react";
import circle_arrow from "../../assets/images/arrow-up-blue.webp";
import main_banner_1 from "../../assets/images/top-slider-banners/top-slide-banner-1.jpeg";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
class TopSiteSlider extends Component {
  state = {
    active_slider: 1,
  };
  constructor(props) {
    super(props);
    this.slider_wrapper = React.createRef();
  }
  handle_slider_change = (way) => {
    const banners = this.props.banners;
    const active_slider = this.state.active_slider;
    // console.log(active_slider);
    if (way === "next") {
      if (active_slider !== banners.length) {
        const slides = [...this.slider_wrapper.current.children];
        slides.forEach((s) => {
          s.style.transform = `translateX(${active_slider * 100}%)`;
        });
        this.setState({ active_slider: active_slider + 1 });
      }
    } else if (way === "previous") {
      if (active_slider !== 1) {
        const slides = [...this.slider_wrapper.current.children];
        slides.forEach((s) => {
          s.style.transform = `translateX(${(active_slider - 2) * 100}%)`;
        });
        this.setState({ active_slider: active_slider - 1 });
      }
    }
  };
  render() {
    const { banners } = this.props;
    return (
      <div
        className={
          banners.length !== 0
            ? "top-site-slider-wrapper"
            : "top-site-slider-wrapper display-none"
        }
      >
        <div className="top-site-slider-slides" ref={this.slider_wrapper}>
          {banners.length !== 0 ? (
            banners.map((b) => (
              <a
                href={
                  b.target_page_link
                    ? b.target_page_link
                    : "https://kadschool.com/Shop"
                }
                className="img-place"
                target="_blank"
                key={b.banner_id}
              >
                <img src={b.image_link} alt="اسم برای اسلایدر" />
              </a>
            ))
          ) : (
            <></>
          )}
        </div>
        {banners.length !== 1 ? (
          <>
            <span
              className="top-slide-btn next"
              onClick={() => {
                this.handle_slider_change("next");
              }}
            >
              <img
                src={circle_arrow}
                alt=" بعدی / قبلی"
                width={15}
                height={25}
              />
            </span>
            <span
              className="top-slide-btn"
              onClick={() => {
                this.handle_slider_change("previous");
              }}
            >
              <img
                src={circle_arrow}
                alt=" بعدی / قبلی"
                width={15}
                height={25}
              />
            </span>
          </>
        ) : (
          <></>
        )}
      </div>
    );
  }
}

export default TopSiteSlider;
