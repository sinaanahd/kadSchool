import React, { Component } from "react";
import { Helmet } from "react-helmet";
import withWebsiteData from "../hoc/with-website-data";
import SideBar from "../side-bar/side-bar";
import Product from "./product/product";

import catImg1 from "../../assets/images/cat-img-1.svg";
import catImg2 from "../../assets/images/cat-img-2.svg";
import catImg3 from "../../assets/images/cat-img-3.svg";
import downArrow from "../../assets/images/dow-arroow-filter.svg";
import LittleLoading from "../reuseables/little-loading";
class Shop extends Component {
  state = {
    shown: false,
    year: false,
    subject: false,
    dore: false,
    course: false,
    filtered_products: false,
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
    this.setState({ year });
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
    }
  };
  get_subject = (subject) => {
    this.setState({ subject });
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
        return "ریاضی و فیزیک";
      case 1:
        return "تجربی";
      case 2:
        return "انسانی";
      case 3:
        return "هنر";
    }
  };
  get_dore = (dore) => {
    this.setState({ dore });
    this.final_klasses(
      this.state.year,
      this.state.subject,
      dore,
      this.state.course
    );
  };
  get_course = (course) => {
    this.setState({ course });
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
    if (year) {
      yaer_kelases = kelasses.filter((k) => k.year === year);
      counter++;
    }
    if (subject || subject === 0) {
      subject_kelases = kelasses.filter((k) => k.subject.includes(subject));
      counter++;
    }
    if (dore) {
      dore_kelases = kelasses.filter((k) => k.parent_dore_id === dore);
      counter++;
    }
    if (course) {
      course_kelases = kelasses.filter((k) => k.course === course);
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
    } = this.props;
    if (
      doreha === null ||
      kelasses === null ||
      teachers === null ||
      courses === null ||
      cart === null
    ) {
      return (
        <>
          <Helmet>
            <title>فروشگاه کاد</title>
          </Helmet>
          <section className="bgc-wrapper shop-wrapper-section">
            <div className="mm-width shop-wrapper">
              <SideBar />
              <div className="main-content">
                <h1 className="page-title">فروشگاه</h1>
                <div className="slider-wrapper">
                  <span className="slider">
                    <span className="slider-btn"></span>
                  </span>
                </div>
                <div className="categories-wrapper">
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
                </div>
                <div className="filters-wrapper">
                  <LittleLoading />
                </div>
              </div>
            </div>
          </section>
        </>
      );
    }
    return (
      <>
        <Helmet>
          <title>فروشگاه کاد</title>
        </Helmet>
        <section className="bgc-wrapper shop-wrapper-section">
          <div className="mm-width shop-wrapper">
            <SideBar />
            <div className="main-content">
              <h1 className="page-title">فروشگاه</h1>
              <div className="slider-wrapper">
                <span className="slider">
                  <span className="slider-btn"></span>
                </span>
              </div>
              <div className="categories-wrapper">
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
              </div>
              {/* <p>
                توضیحات : لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم استفاده
                از طراحان گرافیک است... - - - - - - - - - - - - - - - - - - - -
                - - -
              </p> */}
              <div className="filters-wrapper">
                <div
                  className="filter"
                  onClick={() => {
                    this.handle_filter_show("grade");
                  }}>
                  <span className="filter-title">پایه تحصیلی </span>
                  <span className="main-filter">
                    <span className="filter-text">
                      {this.state.year
                        ? this.year_text(this.state.year)
                        : "پایه تحصیلی"}
                    </span>
                    <img src={downArrow} alt="" />
                  </span>
                  <span
                    className={
                      this.state.shown === "grade"
                        ? "filter-items-wrapper show-filter"
                        : "filter-items-wrapper"
                    }>
                    <span
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
                    </span>
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
                    <img src={downArrow} alt="" />
                  </span>
                  <span
                    className={
                      this.state.shown === "subject"
                        ? "filter-items-wrapper show-filter"
                        : "filter-items-wrapper"
                    }>
                    <span
                      className={
                        this.state.subject === 0
                          ? "filter-item active"
                          : "filter-item"
                      }
                      onClick={() => {
                        this.get_subject(0);
                      }}>
                      ریاضی و فیزیک
                    </span>
                    <span
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
                    </span>
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
                      {this.state.dore
                        ? doreha.find((d) => d.dore_id === this.state.dore)
                            .dore_title
                        : "دوره"}{" "}
                    </span>
                    <img src={downArrow} alt="" />
                  </span>
                  <span
                    className={
                      this.state.shown === "kind"
                        ? "filter-items-wrapper show-filter"
                        : "filter-items-wrapper"
                    }>
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
                      {this.state.course
                        ? courses.find((c) => c.course_id === this.state.course)
                            .name
                        : "درس"}{" "}
                    </span>
                    <img src={downArrow} alt="" />
                  </span>
                  <span
                    className={
                      this.state.shown === "course"
                        ? "filter-items-wrapper course-fu show-filter"
                        : "filter-items-wrapper course-fu"
                    }>
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
      </>
    );
  }
}

export default withWebsiteData(Shop);
