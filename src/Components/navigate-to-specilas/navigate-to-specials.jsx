import React, { useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import scrollToTop from "../functions/scroll";
const Navigate_to_specials = () => {
  return (
    <section className="navigation-to-special-classes-wrapper mm-width">
      <Link
        onClick={scrollToTop}
        className="navigate-link color-1"
        to="/shop/product/دوره-جامع-کنکور-فرهنگیان-1403-استاد-کنفچیان"
      >
        جامع
        <br />
        کنکور فرهنگیان
      </Link>
      <Link className="navigate-link color-2" to="/shop/امتحان-نهایی-دهم">
        امتحان نهایی
        <br />
        دهم
      </Link>
      <Link className="navigate-link color-3" to="/shop/امتحان-نهایی-یازدهم">
        امتحان نهایی
        <br />
        یازدهم
      </Link>
      <Link className="navigate-link color-4" to="/shop/امتحان-نهایی-دوازدهم">
        امتحان نهایی
        <br />
        دوازدهم
      </Link>
      <Link className="navigate-link color-5" to="/shop/آفلاین">
        کلاس های
        <br />
        آفلاین
      </Link>
      <Link
        className="navigate-link color-6"
        to="/shop/نکته-و-تست-کنکور-اختصاصی"
      >
        نکته و تست
        <br />
        کنکور اختصاصی
      </Link>
    </section>
  );
};

export default Navigate_to_specials;
