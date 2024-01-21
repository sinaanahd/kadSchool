import React, { Component, useContext, useState } from "react";
import { Helmet } from "react-helmet";
import Product from "../product/product";
import { DataContext } from "../../context/DataContext";
import Navigate_to_specials from "../../navigate-to-specilas/navigate-to-specials";

const SemiShop = () => {
  const { doreha, kelasses, teachers, handle_cart, cart, user } =
    useContext(DataContext);
  const page_slug = decodeURIComponent(window.location.pathname.split("/")[2]);

  // امتحان نهایی دهم
  // [34,64,61,44,41,37]

  // امتحان نهایی یازدهم
  // [63,34,43,42,40,38]

  // امتحان نهایی دوازدهم
  // [22,34,24,26,39,62,65,34]

  // کلاس های آفلاین
  // [27,28,29,18,19,20]

  // نکته و تست تخصصی کنکور
  // [54,53,52,51]
  const decide_page = () => {
    switch (page_slug) {
      case "امتحان-نهایی-دهم":
        return [34, 64, 61, 44, 41, 37];
      case "امتحان-نهایی-یازدهم":
        return [63, 34, 43, 42, 40, 38];
      case "امتحان-نهایی-دوازدهم":
        return [22, 34, 24, 26, 39, 62, 65, 34];
      case "نکته-و-تست-کنکور-اختصاصی":
        return [54, 53, 52, 51];
      case "آفلاین":
        return [27, 28, 29, 18, 19, 20];
      default:
        return [];
    }
  };
  const kelas_ids = decide_page();
  const products =
    kelasses && teachers
      ? kelasses.filter((k) => kelas_ids.includes(k.kelas_id))
      : false;
  return (
    <>
      <Helmet>
        <title>کلاس های {page_slug.replaceAll("-", " ")}</title>
        <meta
          name="description"
          content="صفحه فروشگاه ما شامل مجموعه‌ای از کلاس‌های آنلاین با کیفیت برتر است که برای  ارائه به دانش‌آموزان برتر در نظر گرفته شده است. این کلاس‌ها فرصتی عالی برای آمادگی برای کنکور در تمامی رشته ها است. با تنوع در موضوعات و استفاده از روش‌های آموزشی جذاب، دانش‌آموزان می‌توانند به طریقی هیجان‌انگیز و موثر در مسیر یادگیری خود پیشروی کنند. به فروشگاه ما بپیوندید و با استفاده از فروشگاه کاد، بهترین کلاس‌های آنلاین را به دست آورید و تجربه آموزشی عالی را تجربه کنید."
        />
        <meta name="keywords" content="داشبورد کاربری کاد, میز مطالعه کاد," />
      </Helmet>
      <section className="bgc-wrapper shop-wrapper-section semi-shop">
        <div className="mm-width shop-wrapper">
          <div className="main-content">
            <h1 className="page-title">
              کلاس های {page_slug.replaceAll("-", " ")}
            </h1>
            <Navigate_to_specials />
            <div className="products-wrapper">
              {products
                ? products.map((k) => (
                    <Product
                      key={k.kelas_id}
                      kelas={k}
                      teachers={teachers ? teachers : false}
                      doreha={doreha ? doreha : false}
                      handle_cart={handle_cart}
                      cart={cart ? cart : false}
                      user={user}
                    />
                  ))
                : "در حال بارگذاری کلاس ها هستیم کمی شکیبا باشید ..."}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SemiShop;
