import React, { useContext, useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import split_in_three from "../../../functions/spilit_in_three";
import convert_to_persian from "../../../functions/convert-to-persian";
import { FaCircleInfo } from "react-icons/fa6";
import { FaEye } from "react-icons/fa6";
import { DataContext } from "../../../context/DataContext";
import LittleLoading from "../../../reuseables/little-loading";
const LandingKelas = ({ kelas, handle_active_kelas, box_ref }) => {
  const { teachers, cart, handle_cart, user } = useContext(DataContext);
  const teacher = teachers
    ? teachers.find((t) => t.teacher_id === kelas.teachers[0])
    : false;
  const scroll_to_box = () => {
    // const y = box_ref.current.clientHeight;
    // console.log(y);
    // console.log(box_ref.current.getBoundingClientRect().y);
    // window.scrollTo({
    //   // top: box_ref.current.getBoundingClientRect().y + 200,
    //   // top: y,
    //   behavior: "smooth",
    // });
    box_ref.current.scrollIntoView({ block: "start" });
  };
  return (
    <div className="kelas-item-wrapper">
      <span className="action-btns">
        <button
          className="more-info actin-btn"
          onClick={() => {
            handle_active_kelas(kelas.kelas_id);
            scroll_to_box();
          }}
        >
          <FaEye />
        </button>
      </span>
      <Link
        target="_blank"
        to={`/Shop/product/${kelas.kelas_title_and_ostad_name.replaceAll(
          " ",
          "-"
        )}`}
        className="kelas-img-wrapper"
      >
        <img
          src={kelas.image_link}
          alt={kelas.kelas_title}
          width={160}
          height={160}
        />
      </Link>
      <div className="kelas-text-contet">
        <h3 className="kelas-teacher-name">
          <Link
            to={`/Teachers/${teacher ? teacher.slug_name : ""}`}
            target="_blank"
          >
            {teacher ? teacher.fullname : <LittleLoading />}
          </Link>
        </h3>
        <h4 className="kelas-name-text">
          <Link
            target="_blank"
            to={`/Shop/product/${kelas.kelas_title_and_ostad_name.replaceAll(
              " ",
              "-"
            )}`}
          >
            {kelas.kelas_title}
          </Link>
        </h4>
        <span className="price-title-text">قیمت :</span>
        <span className="add-btn-prices-wrapper">
          <span className="prices-wrapper">
            <span className="old-price price-box">
              <span className="price-num-text">
                {split_in_three(convert_to_persian(kelas.price))}
              </span>
              <span className="currency-wrapper">تومان</span>
            </span>
            <span className="new-price price-box">
              <span className="price-num-text">
                {kelas.discounted_price
                  ? split_in_three(convert_to_persian(kelas.discounted_price))
                  : split_in_three(convert_to_persian(kelas.price))}
              </span>
              <span className="currency-wrapper">تومان</span>
            </span>
          </span>
          {user ? (
            <button
              className="add-to-cart-btn"
              onClick={() => {
                handle_cart(kelas);
              }}
            >
              {cart
                ? cart.ids.includes(kelas.kelas_id)
                  ? "حذف از سبد خرید"
                  : "اضافه کردن به سبد خرید"
                : "اضافه کردن به سبد خرید"}
            </button>
          ) : (
            <Link to="/Login" className="add-to-cart-btn">
              اضافه کردن به سبد خرید
            </Link>
          )}
        </span>
      </div>
    </div>
  );
};

export default LandingKelas;
