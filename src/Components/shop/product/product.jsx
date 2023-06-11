import React, { Component } from "react";
import spilit_in_three from "../../functions/spilit_in_three";
import convert_to_persian from "../../functions/convert-to-persian";
import { Link } from "react-router-dom";
import scrollToTop from "../../functions/scroll";

import cartWhite from "../../../assets/images/cart-white.svg";
class Product extends Component {
  state = {};
  render() {
    return (
      <div className="product-wrapper">
        <Link
          onClick={() => {
            scrollToTop();
          }}
          to="/SingleCourse/:id"
          target="_blank"
          className="prod-img-wrapper">
          <img src="" alt="" />
        </Link>
        <h2 className="product-title">
          <Link
            onClick={() => {
              scrollToTop();
            }}
            to="/SingleCourse/:id"
            target="_blank">
            نام دوره
          </Link>
        </h2>
        <span className="prod-details">
          <Link
            onClick={() => {
              scrollToTop();
            }}
            to="/SingleProd/:id"
            target="_blank"
            className="prod-class">
            نام کلاس
          </Link>
          <Link
            onClick={() => {
              scrollToTop();
            }}
            to="/Teacher/:id"
            target="_blank"
            className="prod-teacher">
            نام استاد
          </Link>
        </span>
        <p className="prod-desc">توضیحات</p>
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
