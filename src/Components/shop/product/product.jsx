import React, { Component } from "react";
import spilit_in_three from "../../functions/spilit_in_three";
import convert_to_persian from "../../functions/convert-to-persian";
import { Link } from "react-router-dom";
import scrollToTop from "../../functions/scroll";
import LittleLoading from "../../reuseables/little-loading";

import cartWhite from "../../../assets/images/cart-white.webp";

class Product extends Component {
  state = {
    dore_kelases: false,
    kelas_teachers: false,
    pause: false,
    animate: "animate-product",
  };
  componentDidMount() {
    const { kelas, teachers, doreha } = { ...this.props };
    if (kelas && teachers && doreha) {
      this.start_component();
    } else {
      //this.start_component();
    }
    setTimeout(() => {
      this.setState({ animate: "" });
    }, 100);
  }
  start_component = () => {
    const { kelas, teachers, doreha } = { ...this.props };
    if (kelas && teachers && doreha) {
      const kelas_teachers = [];
      kelas.teachers.forEach((t_id) => {
        const teacher = teachers.find((t) => t_id === t.teacher_id);
        kelas_teachers.push(teacher);
      });
      const dore_kelases = doreha.find(
        (d) => d.dore_id === kelas.parent_dore_id
      );
      this.setState({ kelas_teachers, dore_kelases });
    } else {
      setTimeout(() => {
        this.start_component();
      }, 500);
    }
  };
  render() {
    const { kelas, handle_cart, cart, request_id, user } = this.props;
    return (
      <div className={"product-wrapper " + this.state.animate}>
        <Link
          onClick={() => {
            scrollToTop();
          }}
          to={`/Shop/product/${kelas.slug_name}`}
          className="prod-img-wrapper"
        >
          <img
            src={kelas.image_link}
            alt={kelas.kelas_title}
            width={194}
            height={194}
            loading="lazy"
          />
        </Link>
        <h2 className="product-title">
          <Link
            onClick={() => {
              scrollToTop();
            }}
            to={`/Shop/product/${kelas.slug_name}`}
          >
            {kelas.kelas_title}
          </Link>
        </h2>
        <span className="prod-details">
          <Link
            onClick={() => {
              scrollToTop();
            }}
            to={`/Dore/${
              this.state.dore_kelases
                ? this.state.dore_kelases.slug_name
                : false
            }`}
            className="prod-class"
          >
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
                  to={`/Teachers/${t.slug_name}`}
                  key={t.teacher_id}
                >
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
        {user && cart ? (
          cart.ids.includes(kelas.kelas_id) ? (
            <span
              className="prod-add-to-cart"
              onClick={() => {
                handle_cart(kelas);
              }}
            >
              <img
                src={cartWhite}
                alt="اضافه کردن به سبد خرید"
                width={20}
                height={20}
              />
              {request_id === kelas.kelas_id ? (
                <span className="add-to-cart-text">
                  <LittleLoading />
                </span>
              ) : (
                <span className="add-to-cart-text">حذف از سبدخرید</span>
              )}
            </span>
          ) : (
            <span
              className="prod-add-to-cart"
              onClick={() => {
                handle_cart(kelas);
              }}
            >
              <img
                src={cartWhite}
                alt="اضافه کردن به سبد خرید"
                width={20}
                height={20}
                loading="lazy"
              />

              <span className="add-to-cart-text">افزودن به سبد</span>
            </span>
          )
        ) : (
          <Link to={"/Login"} className="prod-add-to-cart">
            <img
              src={cartWhite}
              alt="اضافه کردن به سبد خرید"
              width={20}
              height={20}
              loading="lazy"
            />
            <span className="add-to-cart-text">افزودن به سبد</span>
          </Link>
        )}
      </div>
    );
  }
}

export default Product;
