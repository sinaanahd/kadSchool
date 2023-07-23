import React, { Component } from "react";
import { Helmet } from "react-helmet";
import withWebsiteData from "../hoc/with-website-data";
import SideBar from "../side-bar/side-bar";
import Product from "./product/product";

import catImg1 from "../../assets/images/cat-img-1.webp";
import catImg2 from "../../assets/images/cat-img-2.webp";
import catImg3 from "../../assets/images/cat-img-3.webp";
import downArrow from "../../assets/images/dow-arroow-filter.webp";
import LittleLoading from "../reuseables/little-loading";
import ShopSlider from "./shop-slider/shop-slider";
import ShopPopUp from "./shop-pop-up/shop-pop-up";
class Shop extends Component {
  state = {
    shown: false,
    year: false,
    subject: false,
    dore: false,
    course: false,
    filtered_products: false,
    shop_pop_up: false,
  };
  componentDidMount() {}
  handle_filter_show = (shown) => {
    const prev_state = this.state.shown;
    if (prev_state === shown) {
      this.setState({ shown: false });
    } else {
      this.setState({ shown });
    }
  };
  get_year = (year) => {
    if (year === "all") this.setState({ year: "all" });
    else this.setState({ year });
    this.final_klasses(
      year,
      this.state.subject,
      this.state.dore,
      this.state.course
    );
  };
  year_text = (year) => {
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
  get_subject = (subject) => {
    if (subject === "all") {
      this.setState({ subject: "all" });
    } else {
      this.setState({ subject });
    }
    this.final_klasses(
      this.state.year,
      subject,
      this.state.dore,
      this.state.course
    );
  };
  subject_text = (subject) => {
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
  get_dore = (dore) => {
    if (dore === "all") {
      this.setState({ dore: "all" });
    } else {
      this.setState({ dore });
    }
    this.final_klasses(
      this.state.year,
      this.state.subject,
      dore,
      this.state.course
    );
  };
  get_course = (course) => {
    if (course === "all") {
      this.setState({ course: "all" });
    } else {
      this.setState({ course });
    }
    this.final_klasses(
      this.state.year,
      this.state.subject,
      this.state.dore,
      course
    );
  };
  reset_filter = () => {
    this.setState({
      year: false,
      subject: false,
      dore: false,
      course: false,
      filtered_products: false,
    });
  };
  final_klasses = (year, subject, dore, course) => {
    const { kelasses } = { ...this.props };
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
    this.setState({ filtered_products: final_kelasses });
  };
  handle_shop_pop_up = (e) => {
    const shop_pop_up = this.state.shop_pop_up;
    if (shop_pop_up) {
      const classes = [...e.target.classList];
      if (classes.includes("shop-pu-bgc")) {
        this.setState({ shop_pop_up: !shop_pop_up });
      }
    } else {
      this.setState({ shop_pop_up: !shop_pop_up });
    }
  };
  render() {
    const {
      doreha,
      kelasses,
      teachers,
      initial_data,
      courses,
      handle_cart,
      cart,
      request_id,
      get_kelass_data,
      years,
      subjects,
      shop_banners,
      handle_error,
    } = this.props;

    return (
      <>
        <Helmet>
          <title>فروشگاه کاد</title>
          {shop_banners
            ? shop_banners.map((sb, i) => (
                <link key={i} rel="preload" as="image" href={sb} />
              ))
            : ""}
          <meta
            name="description"
            content="صفحه فروشگاه ما شامل مجموعه‌ای از کلاس‌های آنلاین با کیفیت برتر است که برای  ارائه به دانش‌آموزان برتر در نظر گرفته شده است. این کلاس‌ها فرصتی عالی برای آمادگی برای کنکور در تمامی رشته ها است. با تنوع در موضوعات و استفاده از روش‌های آموزشی جذاب، دانش‌آموزان می‌توانند به طریقی هیجان‌انگیز و موثر در مسیر یادگیری خود پیشروی کنند. به فروشگاه ما بپیوندید و با استفاده از فروشگاه کاد، بهترین کلاس‌های آنلاین را به دست آورید و تجربه آموزشی عالی را تجربه کنید."
          />
          <meta name="keywords" content="داشبورد کاربری کاد, میز مطالعه کاد," />
        </Helmet>
        <section className="bgc-wrapper shop-wrapper-section">
          <div className="mm-width shop-wrapper">
            <SideBar />
            <div className="main-content">
              <h1 className="page-title">فروشگاه</h1>
              <ShopSlider
                shop_banners={shop_banners}
                handle_shop_pop_up={this.handle_shop_pop_up}
              />
              {/* <div className="categories-wrapper">
                <span className="category active">
                  <img src={catImg3} alt="" />
                  <span className="cat-text">کاد پلاس</span>
                </span>
                <span className="category">
                  <img src={catImg2} alt="" />
                  <span className="cat-text">جزوه</span>
                </span>
                <span className="category">
                  <img src={catImg1} alt="" />
                  <span className="cat-text">کلاس</span>
                </span>
              </div> */}
              <p className="shop-desc-p">
                توی این بخش میتونی لیست همه کلاس های آنلاین کاد رو ببینی😍.منتظر
                دیدنت سر کلاس ها هستیم.❤️
              </p>
              <div className="filters-wrapper">
                <div
                  className="filter"
                  onClick={() => {
                    this.handle_filter_show("grade");
                  }}>
                  <span className="filter-title">پایه تحصیلی </span>
                  <span className="main-filter">
                    <span className="filter-text">
                      {this.state.year || this.state.year === 0
                        ? this.year_text(this.state.year)
                        : "پایه تحصیلی"}
                    </span>
                    <img
                      src={downArrow}
                      alt="باز کردن"
                      width={20}
                      height={12}
                    />
                  </span>
                  <span
                    className={
                      this.state.shown === "grade"
                        ? "filter-items-wrapper show-filter"
                        : "filter-items-wrapper"
                    }>
                    <span
                      className={
                        this.state.year === "all"
                          ? "filter-item active"
                          : "filter-item"
                      }
                      onClick={() => {
                        this.get_year("all");
                      }}>
                      همه پایه ها
                    </span>
                    {years ? (
                      years.map((y) => (
                        <span
                          key={y.id}
                          className={
                            this.state.year === y.id
                              ? "filter-item active"
                              : "filter-item"
                          }
                          onClick={() => {
                            this.get_year(y.id);
                          }}>
                          {y.name}
                        </span>
                      ))
                    ) : (
                      <></>
                    )}
                    {/* <span
                      className={
                        this.state.year === 10
                          ? "filter-item active"
                          : "filter-item"
                      }
                      onClick={() => {
                        this.get_year(10);
                      }}>
                      دهم
                    </span>
                    <span
                      className={
                        this.state.year === 11
                          ? "filter-item active"
                          : "filter-item"
                      }
                      onClick={() => {
                        this.get_year(11);
                      }}>
                      یازدهم
                    </span>
                    <span
                      className={
                        this.state.year === 12
                          ? "filter-item active"
                          : "filter-item"
                      }
                      onClick={() => {
                        this.get_year(12);
                      }}>
                      دوازدهم
                    </span> */}
                  </span>
                </div>
                <div
                  className="filter"
                  onClick={() => {
                    this.handle_filter_show("subject");
                  }}>
                  <span className="filter-title">رشته تحصیلی</span>
                  <span className="main-filter">
                    <span className="filter-text">
                      {this.state.subject || this.state.subject === 0
                        ? this.subject_text(this.state.subject)
                        : "رشته تحصیلی"}
                    </span>
                    <img
                      src={downArrow}
                      alt="باز کردن"
                      width={20}
                      height={12}
                    />
                  </span>
                  <span
                    className={
                      this.state.shown === "subject"
                        ? "filter-items-wrapper show-filter"
                        : "filter-items-wrapper"
                    }>
                    <span
                      className={
                        this.state.subject === "all"
                          ? "filter-item active"
                          : "filter-item"
                      }
                      onClick={() => {
                        this.get_subject("all");
                      }}>
                      همه رشته ها
                    </span>
                    {subjects ? (
                      subjects.map((s) => (
                        <span
                          key={s.id}
                          className={
                            this.state.subject === s.id
                              ? "filter-item active"
                              : "filter-item"
                          }
                          onClick={() => {
                            this.get_subject(s.id);
                          }}>
                          {s.name}
                        </span>
                      ))
                    ) : (
                      <></>
                    )}

                    {/* <span
                      className={
                        this.state.subject === 1
                          ? "filter-item active"
                          : "filter-item"
                      }
                      onClick={() => {
                        this.get_subject(1);
                      }}>
                      تجربی
                    </span>
                    <span
                      className={
                        this.state.subject === 2
                          ? "filter-item active"
                          : "filter-item"
                      }
                      onClick={() => {
                        this.get_subject(2);
                      }}>
                      انسانی
                    </span>
                    <span
                      className={
                        this.state.subject === 3
                          ? "filter-item active"
                          : "filter-item"
                      }
                      onClick={() => {
                        this.get_subject(3);
                      }}>
                      هنر
                    </span> */}
                  </span>
                </div>
                <div
                  className="filter"
                  onClick={() => {
                    this.handle_filter_show("kind");
                  }}>
                  <span className="filter-title">دوره </span>
                  <span className="main-filter">
                    <span className="filter-text">
                      {this.state.dore && this.state.dore !== "all"
                        ? doreha.find((d) => d.dore_id === this.state.dore)
                            .dore_title
                        : this.state.dore === "all"
                        ? "همه دوره ها"
                        : "دوره"}{" "}
                    </span>
                    <img
                      src={downArrow}
                      alt="باز کردن"
                      width={20}
                      height={12}
                    />
                  </span>
                  <span
                    className={
                      this.state.shown === "kind"
                        ? "filter-items-wrapper show-filter"
                        : "filter-items-wrapper"
                    }>
                    <span
                      onClick={() => {
                        this.get_dore("all");
                      }}
                      className={
                        this.state.dore === "all"
                          ? "filter-item active"
                          : "filter-item"
                      }>
                      همه دوره ها
                    </span>
                    {doreha ? (
                      doreha.map((d) => (
                        <span
                          onClick={() => {
                            this.get_dore(d.dore_id);
                          }}
                          key={d.dore_id}
                          className={
                            this.state.dore === d.dore_id
                              ? "filter-item active"
                              : "filter-item"
                          }>
                          {d.dore_title}
                        </span>
                      ))
                    ) : (
                      <></>
                    )}
                    {/* 
                    <span className="filter-item">نکته و تست</span>
                    <span className="filter-item">نهایی</span>
                    <span className="filter-item">تیر آخر</span> */}
                  </span>
                </div>
                <div
                  className="filter"
                  onClick={() => {
                    this.handle_filter_show("course");
                  }}>
                  <span className="filter-title">درس </span>
                  <span className="main-filter">
                    <span className="filter-text">
                      {this.state.course && this.state.course !== "all"
                        ? courses.find((c) => c.course_id === this.state.course)
                            .name
                        : this.state.course === "all"
                        ? "همه درس ها"
                        : "درس"}{" "}
                    </span>
                    <img
                      src={downArrow}
                      alt="باز کردن"
                      width={20}
                      height={12}
                    />
                  </span>
                  <span
                    className={
                      this.state.shown === "course"
                        ? "filter-items-wrapper course-fu show-filter"
                        : "filter-items-wrapper course-fu"
                    }>
                    <span
                      onClick={() => {
                        if (this.state.course) this.get_course("all");
                      }}
                      className={
                        !this.state.course
                          ? "filter-item active"
                          : "filter-item"
                      }>
                      همه درس ها
                    </span>
                    {courses ? (
                      courses.map((c) => (
                        <span
                          onClick={() => {
                            this.get_course(c.course_id);
                          }}
                          key={c.course_id}
                          className={
                            this.state.course === c.course_id
                              ? "filter-item active"
                              : "filter-item"
                          }>
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
                {!this.state.filtered_products ? (
                  kelasses && teachers ? (
                    kelasses.map((k) => (
                      <Product
                        get_kelass_data={get_kelass_data}
                        key={k.kelas_id}
                        kelas={k}
                        teachers={teachers ? teachers : false}
                        initial_data={initial_data}
                        doreha={doreha ? doreha : false}
                        handle_cart={handle_cart}
                        cart={cart ? cart : false}
                        request_id={request_id}
                      />
                    ))
                  ) : (
                    <></>
                  )
                ) : this.state.filtered_products.length !== 0 ? (
                  this.state.filtered_products.map((k) => (
                    <Product
                      get_kelass_data={get_kelass_data}
                      key={k.kelas_id}
                      kelas={k}
                      teachers={teachers ? teachers : false}
                      initial_data={initial_data}
                      doreha={doreha ? doreha : false}
                      handle_cart={handle_cart}
                      cart={cart ? cart : false}
                      request_id={request_id}
                    />
                  ))
                ) : (
                  <div className="no-prods-found">
                    <p>متاسفانه محصولی با امکانات مورد نظر شما یافت نشد</p>
                    <span
                      onClick={() => {
                        this.reset_filter();
                      }}
                      className="reset-filter">
                      بازگردانی فیلتر ها
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
        {this.state.shop_pop_up ? (
          <ShopPopUp
            handle_shop_pop_up={this.handle_shop_pop_up}
            handle_error={handle_error}
          />
        ) : (
          <></>
        )}
      </>
    );
  }
}

export default withWebsiteData(Shop);
