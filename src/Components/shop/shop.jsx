import React, { Component, useContext, useState } from "react";
import { Helmet } from "react-helmet";
import Product from "./product/product";

import downArrow from "../../assets/images/dow-arroow-filter.webp";
import LittleLoading from "../reuseables/little-loading";
import ShopSlider from "./shop-slider/shop-slider";
import ShopPopUp from "./shop-pop-up/shop-pop-up";
import { DataContext } from "../context/DataContext";
import Navigate_to_specials from "../navigate-to-specilas/navigate-to-specials";

const Shop = () => {
  const [shown, set_shown] = useState(false);
  const [year, set_year] = useState(false);
  const [subject, set_subject] = useState(false);
  const [course, set_course] = useState(false);
  const [dore, set_dore] = useState(false);
  const [filtered_products, set_filtered_products] = useState(false);
  const [shop_pop_up, set_shop_pop_up] = useState(false);
  const {
    doreha,
    kelasses,
    teachers,
    courses,
    handle_cart,
    cart,
    years,
    subjects,
    banners,
    user,
  } = useContext(DataContext);
  const handle_filter_show = (entry) => {
    // const prev_state = shown;
    if (entry === shown) {
      set_shown(false);
    } else {
      set_shown(entry);
    }
  };
  const get_year = (year) => {
    if (year === "all") set_year("all");
    else set_year(year);
    final_klasses(year, subject, dore, course);
  };
  const year_text = (year) => {
    switch (year) {
      case 10:
        return "دهم";
      case 11:
        return "یازدهم";
      case 12:
        return "دوازدهم";
      case 18:
        return "کنکور";
      case 0:
        return "فارغ التحصیل";
      case "all":
        return "همه پایه ها";
    }
  };
  const get_subject = (subject) => {
    if (subject === "all") {
      set_subject("all");
    } else {
      set_subject(subject);
    }
    final_klasses(year, subject, dore, course);
  };
  const subject_text = (subject) => {
    switch (subject) {
      case 0:
        return "ریاضی";
      case 1:
        return "تجربی";
      case 2:
        return "انسانی";
      case 3:
        return "هنر";
      case "all":
        return "همه رشته ها";
    }
  };
  const get_dore = (dore) => {
    if (dore === "all") {
      set_dore("all");
    } else {
      set_dore(dore);
    }
    final_klasses(year, subject, dore, course);
  };
  const get_course = (course) => {
    if (course === "all") {
      set_course("all");
    } else {
      set_course(course);
    }
    final_klasses(year, subject, dore, course);
  };
  const reset_filter = () => {
    set_dore(false);
    set_year(false);
    set_subject(false);
    set_course(false);
    set_filtered_products(false);
  };
  const final_klasses = (year, subject, dore, course) => {
    let yaer_kelases = [];
    let subject_kelases = [];
    let dore_kelases = [];
    let course_kelases = [];
    let counter = 0;
    if (year && year !== "all") {
      yaer_kelases = kelasses.filter((k) => k.year === year);
      counter++;
    } else if (year === "all") {
      yaer_kelases = [...kelasses];
      counter++;
    }
    if ((subject || subject === 0) && subject !== "all") {
      subject_kelases = kelasses.filter((k) => k.subject.includes(subject));
      counter++;
    } else if (subject === "all") {
      subject_kelases = [...kelasses];
      counter++;
    }
    if (dore && dore !== "all") {
      dore_kelases = kelasses.filter((k) => k.parent_dore_id === dore);
      counter++;
    } else if (dore === "all") {
      dore_kelases = [...kelasses];
      counter++;
    }
    if (course && course !== "all") {
      course_kelases = kelasses.filter((k) => k.course === course);
      counter++;
    } else if (course === "all") {
      course_kelases = [...kelasses];
      counter++;
    }
    const all_kelasses = yaer_kelases.concat(
      subject_kelases,
      dore_kelases,
      course_kelases
    );
    const objectCounts = {};

    // Count the occurrences of each object
    all_kelasses.forEach((obj) => {
      const stringifiedObj = JSON.stringify(obj);
      objectCounts[stringifiedObj] = (objectCounts[stringifiedObj] || 0) + 1;
    });

    const final_kelasses = [];
    Object.entries(objectCounts).forEach(([stringifiedObj, count]) => {
      if (count === counter) {
        const obj = JSON.parse(stringifiedObj);
        final_kelasses.push({ ...obj, repetitionCount: count });
      }
    });
    set_filtered_products(final_kelasses);
  };
  const handle_shop_pop_up = (e) => {
    if (shop_pop_up) {
      const classes = [...e.target.classList];
      if (classes.includes("shop-pu-bgc")) {
        set_shop_pop_up(!shop_pop_up);
      }
    } else {
      set_shop_pop_up(!shop_pop_up);
    }
  };
  const shop_banners = banners
    ? [...banners.filter((b) => b.banner_type === "store_banners")]
    : [];
  return (
    <>
      <Helmet>
        <title>فروشگاه کاد</title>
        <meta
          name="description"
          content="صفحه فروشگاه ما شامل مجموعه‌ای از کلاس‌های آنلاین با کیفیت برتر است که برای  ارائه به دانش‌آموزان برتر در نظر گرفته شده است. این کلاس‌ها فرصتی عالی برای آمادگی برای کنکور در تمامی رشته ها است. با تنوع در موضوعات و استفاده از روش‌های آموزشی جذاب، دانش‌آموزان می‌توانند به طریقی هیجان‌انگیز و موثر در مسیر یادگیری خود پیشروی کنند. به فروشگاه ما بپیوندید و با استفاده از فروشگاه کاد، بهترین کلاس‌های آنلاین را به دست آورید و تجربه آموزشی عالی را تجربه کنید."
        />
        <meta name="keywords" content="داشبورد کاربری کاد, میز مطالعه کاد," />
      </Helmet>
      <section className="bgc-wrapper shop-wrapper-section">
        <div className="mm-width shop-wrapper">
          <div className="main-content">
            <h1 className="page-title font-bold">فروشگاه</h1>
            <p className="shop-desc-p font-bold">
              به فروشگاه کاد خوش اومدی ! اینجا میتونی بهترین کلاس های مجازی رو
              پیدا کنی و با بهترین و باتجربه ترین استاید ایران کلاس داشته باشی.{" "}
              <br />
              کلاس های مجازی کاد برای پایه های دهم ، یازدهم ، دوازدهم مطابق بر
              آخرین تغییرات کتاب های درسی برای شما دانش آموزان عزیز کاد آماده
              است.
              <br />
              از خرید کلاس تا شرکت سر کلاس فقط چند کلیک فاصله داری ...
            </p>
            <Navigate_to_specials />
            <ShopSlider
              shop_banners={shop_banners}
              handle_shop_pop_up={handle_shop_pop_up}
            />
            <div className="filters-wrapper">
              <div
                className="filter"
                onClick={() => {
                  handle_filter_show("grade");
                }}
              >
                <span className="filter-title">پایه تحصیلی </span>
                <span className="main-filter">
                  <span className="filter-text">
                    {year || year === 0 ? year_text(year) : "پایه تحصیلی"}
                  </span>
                  <img src={downArrow} alt="باز کردن" width={20} height={12} />
                </span>
                <span
                  className={
                    shown === "grade"
                      ? "filter-items-wrapper show-filter"
                      : "filter-items-wrapper"
                  }
                >
                  <span
                    className={
                      year === "all" ? "filter-item active" : "filter-item"
                    }
                    onClick={() => {
                      get_year("all");
                    }}
                  >
                    همه پایه ها
                  </span>
                  {years ? (
                    years.map((y) => (
                      <span
                        key={y.id}
                        className={
                          year === y.id ? "filter-item active" : "filter-item"
                        }
                        onClick={() => {
                          get_year(y.id);
                        }}
                      >
                        {y.name}
                      </span>
                    ))
                  ) : (
                    <></>
                  )}
                </span>
              </div>
              <div
                className="filter"
                onClick={() => {
                  handle_filter_show("subject");
                }}
              >
                <span className="filter-title">رشته تحصیلی</span>
                <span className="main-filter">
                  <span className="filter-text">
                    {subject || subject === 0
                      ? subject_text(subject)
                      : "رشته تحصیلی"}
                  </span>
                  <img src={downArrow} alt="باز کردن" width={20} height={12} />
                </span>
                <span
                  className={
                    shown === "subject"
                      ? "filter-items-wrapper show-filter"
                      : "filter-items-wrapper"
                  }
                >
                  <span
                    className={
                      subject === "all" ? "filter-item active" : "filter-item"
                    }
                    onClick={() => {
                      get_subject("all");
                    }}
                  >
                    همه رشته ها
                  </span>
                  {subjects ? (
                    subjects.map((s) => (
                      <span
                        key={s.id}
                        className={
                          subject === s.id
                            ? "filter-item active"
                            : "filter-item"
                        }
                        onClick={() => {
                          get_subject(s.id);
                        }}
                      >
                        {s.name}
                      </span>
                    ))
                  ) : (
                    <></>
                  )}
                </span>
              </div>
              <div
                className="filter"
                onClick={() => {
                  handle_filter_show("kind");
                }}
              >
                <span className="filter-title">دوره </span>
                <span className="main-filter">
                  <span className="filter-text">
                    {dore && dore !== "all"
                      ? doreha.find((d) => d.dore_id === dore).dore_title
                      : dore === "all"
                      ? "همه دوره ها"
                      : "دوره"}{" "}
                  </span>
                  <img src={downArrow} alt="باز کردن" width={20} height={12} />
                </span>
                <span
                  className={
                    shown === "kind"
                      ? "filter-items-wrapper show-filter"
                      : "filter-items-wrapper"
                  }
                >
                  <span
                    onClick={() => {
                      get_dore("all");
                    }}
                    className={
                      dore === "all" ? "filter-item active" : "filter-item"
                    }
                  >
                    همه دوره ها
                  </span>
                  {doreha ? (
                    doreha.map((d) => (
                      <span
                        onClick={() => {
                          get_dore(d.dore_id);
                        }}
                        key={d.dore_id}
                        className={
                          dore === d.dore_id
                            ? "filter-item active"
                            : "filter-item"
                        }
                      >
                        {d.dore_title}
                      </span>
                    ))
                  ) : (
                    <></>
                  )}
                </span>
              </div>
              <div
                className="filter"
                onClick={() => {
                  handle_filter_show("course");
                }}
              >
                <span className="filter-title">درس </span>
                <span className="main-filter">
                  <span className="filter-text">
                    {course && course !== "all"
                      ? courses.find((c) => c.course_id === course).name
                      : course === "all"
                      ? "همه درس ها"
                      : "درس"}{" "}
                  </span>
                  <img src={downArrow} alt="باز کردن" width={20} height={12} />
                </span>
                <span
                  className={
                    shown === "course"
                      ? "filter-items-wrapper course-fu show-filter"
                      : "filter-items-wrapper course-fu"
                  }
                >
                  <span
                    onClick={() => {
                      if (course) get_course("all");
                    }}
                    className={!course ? "filter-item active" : "filter-item"}
                  >
                    همه درس ها
                  </span>
                  {courses ? (
                    courses.map((c) => (
                      <span
                        onClick={() => {
                          get_course(c.course_id);
                        }}
                        key={c.course_id}
                        className={
                          course === c.course_id
                            ? "filter-item active"
                            : "filter-item"
                        }
                      >
                        {c.name}
                      </span>
                    ))
                  ) : (
                    <></>
                  )}
                </span>
              </div>
            </div>
            <div className="products-wrapper">
              {!filtered_products ? (
                kelasses && teachers ? (
                  kelasses.map((k) => (
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
                ) : (
                  <></>
                )
              ) : filtered_products.length !== 0 ? (
                filtered_products.map((k) => (
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
              ) : (
                <div className="no-prods-found">
                  <p>متاسفانه محصولی با امکانات مورد نظر شما یافت نشد</p>
                  <span
                    onClick={() => {
                      reset_filter();
                    }}
                    className="reset-filter"
                  >
                    بازگردانی فیلتر ها
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      {shop_pop_up ? (
        <ShopPopUp handle_shop_pop_up={handle_shop_pop_up} />
      ) : (
        <></>
      )}
    </>
  );
};

export default Shop;
