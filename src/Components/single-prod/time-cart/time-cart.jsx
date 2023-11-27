import React, { useContext, useState } from "react";
import split_in_three from "../../functions/spilit_in_three";
import convert_days from "../../functions/convert-days";
import convert_to_persian from "../../functions/convert-to-persian";
import LittleLoading from "../../reuseables/little-loading";
import { DataContext } from "../../context/DataContext";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
const Time_cart_data = ({ kelas }) => {
  const { handle_cart, user, cart } = useContext(DataContext);
  return (
    <section className="class-times-wrapper">
      <h2 className="class-time-title">برنامه برگزاری:</h2>
      <div className="dates">
        {kelas ? (
          kelas.stream_plans.length !== 0 ? (
            kelas.stream_plans.map((sp, i) => (
              <span className="day" key={i++}>
                <span className="week-day">
                  {convert_days(sp.week_day_english)}
                </span>
                <span className="time">
                  {convert_to_persian(sp.start_time.split(":")[0])} تا{" "}
                  {convert_to_persian(sp.finish_time.split(":")[0])}
                </span>
              </span>
            ))
          ) : (
            <span className="day">
              <span className="week-day">آفلاین</span>
            </span>
          )
        ) : (
          <LittleLoading />
        )}
      </div>
      <h3 className="start-date-title">تاریخ شروع:</h3>
      <span className="start-date">۲۴ مرداد</span>
      <div className="prices">
        <span className="discount-status">
          {kelas ? (
            kelas.price !== kelas.discounted_price ? (
              <>
                <span className="discount-label">تخفیف</span>
                <span className="real-price-number">
                  {split_in_three(convert_to_persian(kelas.price))}
                </span>
              </>
            ) : (
              <></>
            )
          ) : (
            <LittleLoading />
          )}
        </span>
        <span className="final-price">
          <span className="price">
            {kelas ? (
              kelas.price !== kelas.discounted_price ? (
                split_in_three(convert_to_persian(kelas.discounted_price))
              ) : (
                split_in_three(convert_to_persian(kelas.price))
              )
            ) : (
              <LittleLoading />
            )}
          </span>
          تومان
        </span>
      </div>
      {user && kelas ? (
        <span
          className="buy-class-btn"
          onClick={() => {
            handle_cart(kelas);
          }}
        >
          {cart
            ? cart.ids.includes(kelas.kelas_id)
              ? "حذف از سبد خرید"
              : "افزودن به سبد خرید"
            : "افزودن به سبد خرید"}
        </span>
      ) : (
        <Link to="/Login" className="buy-class-btn">
          افزودن به سبد خرید
        </Link>
      )}
      {/* <span className="buy-class-btn">افزودن به سبد خرید</span> */}
    </section>
  );
};

export default Time_cart_data;
