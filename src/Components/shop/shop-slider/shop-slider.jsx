import React, { Component } from "react";
import LittleLoading from "../../reuseables/little-loading";
class ShopSlider extends Component {
  state = {
    is_dragging: false,
    start_pos: 0,
    active_item: 1,
  };
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  handle_mouse_down = (e) => {
    this.setState({ is_dragging: true, start_pos: e.clientX });
  };
  handle_mouse_up = (e) => {
    this.setState({ is_dragging: false });
  };
  handle_mouse_move = (e) => {
    const { is_dragging, start_pos } = this.state;
    if (is_dragging) {
      if (Math.abs(start_pos - e.clientX) > 100) {
        if (start_pos - e.clientX <= 0) {
          this.setState({ is_dragging: false });
          this.move_slider("next");
        } else {
          this.setState({ is_dragging: false });
          this.move_slider("prev");
        }
      }
    }
  };
  handle_touch_down = (e) => {
    this.setState({ is_dragging: true, start_pos: e.touches[0].clientX });
  };
  handle_touch_up = (e) => {
    this.setState({ is_dragging: false });
  };
  handle_touch_move = (e) => {
    const { is_dragging, start_pos } = this.state;
    if (is_dragging) {
      if (Math.abs(start_pos - e.touches[0].clientX) > 100) {
        if (start_pos - e.touches[0].clientX <= 0) {
          this.setState({ is_dragging: false });
          this.move_slider_touch("next");
        } else {
          this.setState({ is_dragging: false });
          this.move_slider_touch("prev");
        }
      }
    }
  };
  move_slider = (move) => {
    const { active_item } = this.state;
    if (move === "next") {
      if (active_item !== this.props.shop_banners.length) {
        this.show_change(active_item + 1);
        this.setState({ active_item: active_item + 1 });
      } else {
        this.animate_end("end");
      }
    } else {
      if (active_item !== 1) {
        this.show_change(active_item - 1);
        this.setState({ active_item: active_item - 1 });
      } else {
        this.animate_end("start");
      }
    }
  };
  move_slider_touch = (move) => {
    const { active_item } = this.state;
    if (move === "next") {
      if (active_item !== this.props.shop_banners.length) {
        this.show_change_touch(active_item + 1);
        this.setState({ active_item: active_item + 1 });
      } else {
        this.animate_end_touch("end");
      }
    } else {
      if (active_item !== 1) {
        this.show_change_touch(active_item - 1);
        this.setState({ active_item: active_item - 1 });
      } else {
        this.animate_end("start");
      }
    }
  };
  show_change = (num) => {
    // console.log(this.myRef.current.children);
    const kinder = [...this.myRef.current.children];
    const slides = kinder.filter((k) => k.classList.contains("slide"));
    slides.forEach((slide) => {
      slide.style.transform = `translateX(${(num - 1) * 100}%)`;
    });
    //this.myRef.current.style.transform = `translateX(${(num - 1) * 100}%)`;
  };
  show_change_touch = (num) => {
    const kinder = [...this.myRef.current.children];
    const slides = kinder.filter((k) => k.classList.contains("slide"));
    slides.forEach((slide) => {
      slide.style.transform = `translateX(${(num - 1) * 100}%)`;
    });
    //this.myRef.current.style.transform = `translateX(${(num - 1) * 100}%)`;
  };
  animate_end_touch = () => {
    const { active_item } = this.state;
    // this.myRef.current.style.transform = `translateX(${
    //   (active_item - 1) * 101
    //   }%)`;
    const kinder = [...this.myRef.current.children];
    const slides = kinder.filter((k) => k.classList.contains("slide"));
    slides.forEach((slide) => {
      slide.style.transform = `translateX(${(active_item - 1) * 101}%)`;
    });
    setTimeout(() => {
      this.show_change_touch(active_item);
    }, 300);
  };
  animate_end = (pos) => {
    const { active_item } = this.state;
    if (pos === "end") {
      const kinder = [...this.myRef.current.children];
      const slides = kinder.filter((k) => k.classList.contains("slide"));
      slides.forEach((slide) => {
        slide.style.transform = `translateX(${(active_item - 1) * 101}%)`;
      });
    } else {
      const kinder = [...this.myRef.current.children];
      const slides = kinder.filter((k) => k.classList.contains("slide"));
      slides.forEach((slide) => {
        slide.style.transform = `translateX(-10px)`;
      });
    }
    setTimeout(() => {
      this.show_change(active_item);
    }, 300);
  };
  render() {
    const { shop_banners, handle_shop_pop_up } = this.props;
    return (
      <div className="slider-wrapper" ref={this.myRef}>
        <div
          className="drag-place"
          onMouseDown={(e) => {
            this.handle_mouse_down(e);
          }}
          onTouchStart={(e) => {
            this.handle_touch_down(e);
          }}
          onMouseUp={(e) => {
            this.handle_mouse_up(e);
          }}
          onTouchEnd={(e) => {
            this.handle_touch_up(e);
          }}
          onMouseMove={(e) => {
            this.handle_mouse_move(e);
          }}
          onTouchMove={(e) => {
            this.handle_touch_move(e);
          }}></div>
        {shop_banners ? (
          shop_banners.map((b, i) => (
            <div className="slide" key={i++}>
              <img src={b} alt="چرا کاد متفاوت است" />
            </div>
          ))
        ) : (
          <LittleLoading />
        )}
        {/* <span
          onClick={(e) => {
            handle_shop_pop_up(e);
          }}
          className="get-council-btn">
          دریافت مشاوره ثبت نام
        </span> */}
      </div>
    );
  }
}

export default ShopSlider;
