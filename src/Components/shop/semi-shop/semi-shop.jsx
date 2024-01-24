import React, { Component, useContext, useState } from "react";
import { Helmet } from "react-helmet";
import Product from "../product/product";
import { DataContext } from "../../context/DataContext";
import Navigate_to_specials from "../../navigate-to-specilas/navigate-to-specials";

const SemiShop = () => {
  const { doreha, kelasses, teachers, handle_cart, cart, user } =
    useContext(DataContext);
  const page_slug = decodeURIComponent(window.location.pathname.split("/")[2]);

  const decide_page = () => {
    switch (page_slug) {
      case "امتحان-نهایی-دهم":
        return [34, 67, 64, 44, 41, 37, 61];
      case "امتحان-نهایی-یازدهم":
        return [34, 67, 43, 40, 42, 38, 63];
      case "امتحان-نهایی-دوازدهم":
        return [34, 67, 22, 26, 24, 39, 62, 65];
      case "نکته-و-تست-کنکور-اختصاصی":
        return [55, 57, 56, 58, 59, 54, 53, 52, 51];
      case "آفلاین":
        return [68, 47, 48, 49, 50, 27, 28, 29, 18, 19, 20];
      default:
        return [];
    }
  };
  const get_description = () => {
    switch (page_slug) {
      case "امتحان-نهایی-دهم":
        return "با کلاس های امتحان نهایی دهم کاد میتونی آمادگی ۱۰۰ درصدی داشته باشی و با خیال راحت بری سر جلسه امتحان. کاد همیشه هواتو داره و خیالت از بابت امتحاناتت راحت باشه.";
      case "امتحان-نهایی-یازدهم":
        return "با کلاس های امتحان نهایی یازدهم کاد میتونی آمادگی ۱۰۰ درصدی داشته باشی و با خیال راحت بری سر جلسه امتحان. کاد همیشه هواتو داره و خیالت از بابت امتحاناتت راحت باشه.";

      case "امتحان-نهایی-دوازدهم":
        return "با کلاس های امتحان نهایی دوازدهم کاد میتونی آمادگی ۱۰۰ درصدی داشته باشی و با خیال راحت بری سر جلسه امتحان. کاد همیشه هواتو داره و خیالت از بابت امتحاناتت راحت باشه.";

      case "نکته-و-تست-کنکور-اختصاصی":
        return "با کلاس های نکته و تست اختصاصی میتونید خیلی راحت برای بهترین نتایج آماده باشین. این کلاس ها با بهترین اساتید و با بیشترین درصد تطبیق با کنکور ۱۴۰۳ هستند.";

      case "آفلاین":
        return "اگه وقت  نداری که سر کلاس حاضر باشی و برنامه درسیت خیلی شلوغه بهترین پیشنهاد برات کلاس های آفلاین کاده که بدون هزینه اینترنت میتونی این کلاس ها رو برای همیشه داشته باشی.";
      default:
        return "";
    }
  };
  const get_keywords = () => {
    switch (page_slug) {
      case "امتحان-نهایی-دهم":
        return "امتحان نهایی دهم, نهایی دهم, کلاس امتحان نهایی, دین و زندگی دهم, زیست دهم, عربی دهم, ادبیات دهم, دین و زندگی دهم, ریاضی دهم";
      case "امتحان-نهایی-یازدهم":
        return "امتحان نهایی یازدهم, نهایی یازدهم, زیست یازدهم, عربی یازدهم, دین و زندگی یازدهم, ادبیات یازدهم, کارگاه دستور زبان فارسی, ریاضی یازدهم انسانی";
      case "امتحان-نهایی-دوازدهم":
        return "امتحان نهایی دوازدهم, ریاضی دوازدهم, عربی دوزادهم, زبان دوازدهم, ادبیات دوازدهم, کارگاه دستور زبان, زیست دوازدهم, شیمی دوازدهم";
      case "نکته-و-تست-کنکور-اختصاصی":
        return "نکته و تست, ریاضی انسانی, عربی انسانی, فلسفه و منطق, نکته و تست فلسفه و منطق, علوم و فنون سبطی, نکته و تست شیمی, نکته و تست زیست شناسی, نکته و تست زیاضی تجربی";
      case "آفلاین":
        return "کلاس های آفلاین, کلاس آفلاین, شیمی جامع, فیزیک جامع, الکتریسه ساکن, زیست شناسی, تبادلات گازی, گوارش و جذب مواد, زیست شناسی جامع";
      default:
        return "";
    }
  };
  const kelas_ids = decide_page();
  const find_kelas_in_order = (e) => {
    const all_kelasses = [];
    kelas_ids.forEach((k_id) => {
      const kelas = kelasses.find((k) => k.kelas_id === k_id);
      if (kelas) {
        all_kelasses.push(kelas);
      }
    });
    return all_kelasses;
  };
  const products = kelasses && teachers ? find_kelas_in_order() : false;

  return (
    <>
      <Helmet>
        <title>کلاس های {page_slug.replaceAll("-", " ")}</title>
        <meta name="description" content={get_description()} />
        <meta
          name="keywords"
          content={`${page_slug.replaceAll("-", " ")}, ${get_keywords()}`}
        />
      </Helmet>
      <section className="bgc-wrapper shop-wrapper-section semi-shop">
        <div className="mm-width shop-wrapper">
          <div className="main-content">
            <h1 className="page-title font-bold">
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
            <p className="shop-desc-p font-bold">{get_description()}</p>
            <p className="small-font">{get_keywords()}</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default SemiShop;
