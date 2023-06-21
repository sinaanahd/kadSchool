import React, { Component } from "react";
import spilit_in_three from "../../functions/spilit_in_three";
import convert_to_persian from "../../functions/convert-to-persian";
import { Link } from "react-router-dom";
import scrollToTop from "../../functions/scroll";
import LittleLoading from "../../reuseables/little-loading";

import cartWhite from "../../../assets/images/cart-white.svg";
class Product extends Component {
  state = {
    dore_kelases: false,
    kelas_teachers: false,
    pause: false,
  };
  componentDidMount() {
    const { kelas, teachers, initial_data, doreha } = this.props;
    if (kelas && teachers && doreha) {
      this.start_component();
    } else {
      initial_data();
      this.start_component();
    }
  }
  start_component = () => {
    const { kelas, teachers, doreha } = this.props;
    if (kelas && teachers && doreha) {
      const kelas_teachers = [];
      kelas.teachers.forEach((t_id) => {
        const teacher = teachers.find((t) => t_id === t.teacher_id);
        if (teacher && !kelas_teachers.includes(teacher))
          kelas_teachers.push(teacher);
      });
      const dore_kelases = doreha.find(
        (d) => d.dore_id === kelas.parent_dore_id
      );
      // console.log(dore_kelases);
      this.setState({ kelas_teachers, dore_kelases });
    } else {
      setTimeout(() => {
        this.start_component();
      }, 500);
    }
  };
  render() {
    const { kelas } = this.props;
    return (
      <div className="product-wrapper">
        <Link
          onClick={() => {
            scrollToTop();
          }}
          to={`/SingleProd/${kelas.kelas_id}`}
          className="prod-img-wrapper">
          <img src="" alt={kelas.kelas_title} />
        </Link>
        <h2 className="product-title">
          <Link
            onClick={() => {
              scrollToTop();
            }}
            to={`/SingleProd/${kelas.kelas_id}`}>
            {kelas.kelas_title}
          </Link>
        </h2>
        <span className="prod-details">
          <Link
            onClick={() => {
              scrollToTop();
            }}
            to={`/SingleCourse/${
              this.state.dore_kelases ? this.state.dore_kelases.dore_id : false
            }`}
            className="prod-class">
            {this.state.dore_kelases ? (
              this.state.dore_kelases.dore_title
            ) : (
              <LittleLoading />
            )}
          </Link>
          <span className="prod-teacher">
            {this.state.kelas_teachers ? (
              this.state.kelas_teachers.map((t) => (
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
          <span className="normal-price">
            {kelas.discounted_price
              ? kelas.price !== 0
                ? spilit_in_three(convert_to_persian(kelas.discounted_price))
                : "رایگان"
              : kelas.price !== 0
              ? spilit_in_three(convert_to_persian(kelas.price))
              : "رایگان"}
            {kelas.price !== 0 ? (
              <span className="currency">تومان</span>
            ) : (
              <></>
            )}
          </span>
          {kelas.discounted_price ? (
            <span className="discounted-price">
              {spilit_in_three(convert_to_persian(kelas.price))}
            </span>
          ) : (
            <></>
          )}
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
