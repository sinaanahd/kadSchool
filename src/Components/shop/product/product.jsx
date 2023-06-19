import React, { Component } from "react";
import spilit_in_three from "../../functions/spilit_in_three";
import convert_to_persian from "../../functions/convert-to-persian";
import { Link } from "react-router-dom";
import scrollToTop from "../../functions/scroll";

import cartWhite from "../../../assets/images/cart-white.svg";
class Product extends Component {
  state = {
    dore_kelases: false,
    dore_teachers: false,
    pause: false,
  };
  componentDidMount() {
    const { dore, kelasses, teachers, initial_data } = this.props;
    if (dore && kelasses && teachers) {
      this.start_component();
    } else {
      initial_data();
      this.start_component();
    }
  }
  start_component = () => {
    const { dore, kelasses, teachers } = this.props;
    if (dore && kelasses && teachers) {
      const dore_kelases = [];
      const dore_teachers = [];
      dore.kelases.forEach((k_id) => {
        const kelas = kelasses.find((k) => k_id === k.kelas_id);
        if (kelas) dore_kelases.push(kelas);
      });
      dore_kelases.forEach((k) => {
        k.teachers.forEach((t_id) => {
          const teacher = teachers.find((t) => t_id === t.teacher_id);
          if (teacher && !dore_teachers.includes(teacher))
            dore_teachers.push(teacher);
        });
      });
      this.setState({ dore_kelases, dore_teachers });
    } else {
      setTimeout(() => {
        this.start_component();
      }, 500);
    }
  };
  render() {
    const { dore } = this.props;
    return (
      <div className="product-wrapper">
        <Link
          onClick={() => {
            scrollToTop();
          }}
          to={`/SingleCourse/${dore.dore_id}`}
          className="prod-img-wrapper">
          <img src="" alt={dore.dore_title} />
        </Link>
        <h2 className="product-title">
          <Link
            onClick={() => {
              scrollToTop();
            }}
            to={`/SingleCourse/${dore.dore_id}`}>
            {dore.dore_title}
          </Link>
        </h2>
        <span className="prod-details">
          <span className="prod-class">
            {this.state.dore_kelases ? (
              this.state.dore_kelases.map((k) => (
                <Link
                  onClick={() => {
                    scrollToTop();
                  }}
                  to={`/SingleProd/${k.kelas_id}`}
                  key={k.kelas_id}>
                  {k.kelas_title}
                </Link>
              ))
            ) : (
              <></>
            )}
          </span>
          <span className="prod-teacher">
            {this.state.dore_teachers ? (
              this.state.dore_teachers.map((t) => (
                <Link
                  onClick={() => {
                    scrollToTop();
                  }}
                  to={`/Teacher/${t.teacher_id}`}
                  key={t.teacher_id}>
                  {t.fullname}
                </Link>
              ))
            ) : (
              <></>
            )}
          </span>
        </span>
        {/* <p className="prod-desc">{dore.description}</p> */}
        <span className="price-currency-wrapper">
          <span className="discounted-price">
            {spilit_in_three(convert_to_persian(123456))}
          </span>
          <span className="normal-price">
            {spilit_in_three(convert_to_persian(123456))}
            <span className="currency">تومان</span>
          </span>
        </span>
        <span className="prod-add-to-cart">
          <img src={cartWhite} alt="" />
          <span className="add-to-cart-text">افزودن به سبد</span>
        </span>
      </div>
    );
  }
}

export default Product;
