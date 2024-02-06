import React, { useContext, useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import scrollToTop from "../functions/scroll";
import { DataContext } from "../context/DataContext";
import LittleLoading from "../reuseables/little-loading";
import split_in_three from "../functions/spilit_in_three";
import convert_to_persian from "../functions/convert-to-persian";
const Kelas_item = ({ k, eager_load }) => {
  const { doreha, cart, user, handle_cart } = useContext(DataContext);
  const dore = doreha
    ? doreha.find((d) => d.dore_id === k.parent_dore_id)
    : false;
  return (
    <div className="class-item-single-component">
      <div className="img-dore-place">
        <Link
          onClick={scrollToTop}
          target="_blank"
          to={`/Shop/product/${k.kelas_title_and_ostad_name.replaceAll(
            " ",
            "-"
          )}`}
          className="img-link"
        >
          <img
            width={130}
            height={130}
            loading={eager_load ? "eager" : "lazy"}
            src={k.image_link}
            alt={k.kelas_title_and_ostad_name}
          />
        </Link>
        <span className="dore-label">
          <span className="dore-label-title">دوره :</span>
          {dore ? (
            <Link
              onClick={scrollToTop}
              to={`/Dore/${dore.slug_name}`}
              className="dore-content"
            >
              {dore.dore_title}
            </Link>
          ) : (
            <span className="dore-content">
              <LittleLoading />
            </span>
          )}
        </span>
      </div>
      <div className="class-text-data">
        <h3 className="teacher-name-data">
          استاد
          {k.kelas_title_and_ostad_name.split("استاد")[1].split("-")[0]}
        </h3>
        <h4 className="cours-name-data">
          <Link
            onClick={scrollToTop}
            target="_blank"
            to={`/Shop/product/${k.kelas_title_and_ostad_name.replaceAll(
              " ",
              "-"
            )}`}
          >
            {k.kelas_title}
          </Link>
        </h4>
        <div className="prices-data-wrapper">
          <span className="price-title">قیمت:</span>
          <span className="prices-kind-wrapper">
            <span className="real-discounted">
              {k.price !== k.discounted_price
                ? split_in_three(convert_to_persian(k.price))
                : split_in_three(convert_to_persian(k.discounted_price))}
              تومان
            </span>
            <span className="real-price">
              {k.discounted_price
                ? k.price === k.discounted_price
                  ? split_in_three(convert_to_persian(k.price))
                  : split_in_three(convert_to_persian(k.discounted_price))
                : split_in_three(convert_to_persian(k.price))}{" "}
              تومان
            </span>
          </span>
        </div>
        {user && cart ? (
          <button
            onClick={() => {
              handle_cart(k);
            }}
            className="add-to-cart-btn"
          >
            {cart.ids.includes(k.kelas_id)
              ? "حذف از سبد خرید"
              : "افزودن به سبد خرید"}
          </button>
        ) : (
          <Link to="/Login" className="add-to-cart-btn">
            افزودن به سبد خرید
          </Link>
        )}
      </div>
    </div>
  );
};

export default Kelas_item;
