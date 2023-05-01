import React, { Component } from "react";
import sample_img from "../../../assets/images/sample-rectangle-v.svg";
class Slider extends Component {
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
      if (active_item !== 7) {
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
      if (active_item !== 7) {
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
    this.myRef.current.style.transform = `translateX(${(num - 1) * 400}px)`;
  };
  show_change_touch = (num) => {
    this.myRef.current.style.transform = `translateX(${(num - 1) * 100}%)`;
  };
  animate_end_touch = () => {
    const { active_item } = this.state;
    this.myRef.current.style.transform = `translateX(${
      (active_item - 1) * 101
    }%)`;
    setTimeout(() => {
      this.show_change_touch(active_item);
    }, 300);
  };
  animate_end = (pos) => {
    const { active_item } = this.state;
    if (pos === "end") {
      this.myRef.current.style.transform = `translateX(${
        active_item * 400 - 390
      }px)`;
    } else {
      this.myRef.current.style.transform = `translateX(-10px)`;
    }
    setTimeout(() => {
      this.show_change(active_item);
    }, 300);
  };
  render() {
    return (
      <div className="orange-wrapper">
        <div ref={this.myRef} className="slider-area">
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
          <div className="slide">
            <img src={sample_img} />
            <span className="abs-to-show">1</span>
          </div>
          <div className="slide">
            <img src={sample_img} />
            <span className="abs-to-show">2</span>
          </div>
          <div className="slide">
            <img src={sample_img} />
            <span className="abs-to-show">3</span>
          </div>
          <div className="slide">
            <img src={sample_img} />
            <span className="abs-to-show">4</span>
          </div>
          <div className="slide">
            <img src={sample_img} />
            <span className="abs-to-show">5</span>
          </div>
          <div className="slide">
            <img src={sample_img} />
            <span className="abs-to-show">6</span>
          </div>
          <div className="slide">
            <img src={sample_img} />
            <span className="abs-to-show">7</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Slider;
