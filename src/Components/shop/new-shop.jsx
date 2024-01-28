import React, { useEffect, useState, useContext } from "react";
import { Helmet } from "react-helmet";
import { DataContext } from "../context/DataContext";
import LittleLoading from "../reuseables/little-loading";
import TestComponent from "./test/test";
import { CartProvider } from "../context/CartContext";
import NullKelasItem from "../kelas-item/kelas-item-null";
import arrow from "../../assets/images/single-teachers-asset/arrow.webp";
import filter_arrow from "../../assets/images/new-shop/filter-arrow.webp";
const NewShop = () => {
  const {
    ref_kelasses,
    ref_teachers,
    courses,
    banners,
    subjects,
    years,
    static_doreha,
  } = useContext(DataContext);
  const [page_kelasses, setKelasses] = useState(false);
  useEffect(() => {
    const kind = decodeURIComponent(window.location.pathname.split("/")[2]);
    const title = decodeURIComponent(window.location.pathname.split("/")[3]);
    let page_kelasses = false;
    if (kind === "دوره") {
      const dore = static_doreha.find((dore) => dore.dore_title === title);
      if (Object.keys(dore).length !== 0)
        page_kelasses = [
          ...ref_kelasses.filter(
            (kelas) => kelas.parent_dore_id === dore.dore_id
          ),
        ];
    } else if (kind === "رشته") {
      const selected_subject = subjects.find((s) => s.name === title);
      if (Object.keys(selected_subject).length !== 0)
        page_kelasses = [
          ...ref_kelasses.filter((kelas) =>
            kelas.subject.includes(selected_subject.id)
          ),
        ];
    } else if (kind === "پایه") {
      const selected_year = { ...years.find((y) => y.name === title) };
      if (Object.keys(selected_year).length !== 0)
        page_kelasses = [
          ...ref_kelasses.filter((kelas) => kelas.year === selected_year.id),
        ];
    } else if (kind === "درس") {
      const course = { ...courses.find((c) => c.name === title) };
      if (Object.keys(course).length !== 0) {
        page_kelasses = [
          ...ref_kelasses.filter((kelas) => kelas.course === course.course_id),
        ];
      }
    }
    if (page_kelasses.length !== 0) {
      setKelasses(page_kelasses);
    } else {
      setKelasses(false);
    }
  }, []);

  const shop_banners = banners
    ? [...banners.filter((b) => b.banner_type === "store_banners")]
    : [];
  return (
    <>
      <Helmet>
        <title>فروشگاه کاد</title>
      </Helmet>
      <div className="shop-redesign-wrapper">
        <section className="page-intro-wrapper mm-width">
          <h1 className="page-title font-bold">فروشگاه کاد</h1>
          <p className="intro-text">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی
            در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را
            می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
            الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.
          </p>
        </section>
        <section className="banners-part-wrapper mm-width">
          <button className="arrow-wrapper rotate-180">
            <img src={arrow} alt="بعدی" width={15} height={26} />
          </button>
          <div className="banner-place-wrapper">
            {shop_banners ? (
              shop_banners.map((b) => <img src={b.image_link} alt={b.alt} />)
            ) : (
              <span className="no-banner-ready"></span>
            )}
          </div>
          <button className="arrow-wrapper">
            <img src={arrow} alt="قبلی" width={15} height={26} />
          </button>
        </section>
        <section className="cat-suggestions-section mm-width">
          <h2 className="semi-title font-bold">
            نگاه اجمالی به کلاس های {"باید وارد بشه"}
          </h2>
          <div className="choose-categories">
            <button className="choose-type-btn active">جدید ترین ها</button>
            <button className="choose-type-btn">پرفروش ها</button>
            <button className="choose-type-btn">تخفیف هفته</button>
          </div>
          <div className="choosen-content-wrapper">
            <div className="choose-intro-texts">
              <h3 className="dynamic-title">تخفیف هفته کلاس های فلان</h3>
              <p className="dynamic-title-text">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
                نیاز و کاربردهای متنوع با هدف بهبود
              </p>
            </div>
            <div className="categories-class-wrapper">
              <NullKelasItem />
              <NullKelasItem />
              <NullKelasItem />
              <NullKelasItem />
              <NullKelasItem />
              <NullKelasItem />
            </div>
          </div>
        </section>
        <section className="all-products-wrapper mm-width">
          <aside className="shop-side-bar">
            <span className="filter-side-bar-header">
              <span className="filter-header-title">فیلترها</span>
              <button className="reset-filters font-bold">حذف فیلتر ها</button>
            </span>
            <span className="all-filters">
              <span className="filter-main-row">
                <span className="label">پایه</span>
                <button className="filter-open-btn">
                  <img
                    src={filter_arrow}
                    alt="باز کردن فیلتر"
                    width={15}
                    height={8}
                    loading="lazy"
                  />
                </button>
              </span>
              <span
                className={false ? "filter-options show" : "filter-options"}
              >
                {years ? (
                  years.map((year) => (
                    <span className="filter-option" key={year.id}>
                      <button className="select-btn"></button>
                      <span className="option-text">{year.name}</span>
                    </span>
                  ))
                ) : (
                  <LittleLoading />
                )}
              </span>
              <span className="filter-main-row">
                <span className="label">رشته</span>
                <button className="filter-open-btn">
                  <img
                    src={filter_arrow}
                    alt="باز کردن فیلتر"
                    width={15}
                    height={8}
                    loading="lazy"
                  />
                </button>
              </span>
              <span
                className={false ? "filter-options show" : "filter-options"}
              >
                {subjects ? (
                  subjects.map((subject) => (
                    <span className="filter-option" key={subject.id}>
                      <button className="select-btn"></button>
                      <span className="option-text">{subject.name}</span>
                    </span>
                  ))
                ) : (
                  <LittleLoading />
                )}
              </span>
              <span className="filter-main-row">
                <span className="label">دوره</span>
                <button className="filter-open-btn">
                  <img
                    src={filter_arrow}
                    alt="باز کردن فیلتر"
                    width={15}
                    height={8}
                    loading="lazy"
                  />
                </button>
              </span>
              <span
                className={false ? "filter-options show" : "filter-options"}
              >
                {static_doreha ? (
                  static_doreha.map((dore) => (
                    <span className="filter-option" key={dore.dore_id}>
                      <button className="select-btn"></button>
                      <span className="option-text">{dore.dore_title}</span>
                    </span>
                  ))
                ) : (
                  <LittleLoading />
                )}
              </span>
              <span className="filter-main-row">
                <span className="label">درس</span>
                <button className="filter-open-btn">
                  <img
                    src={filter_arrow}
                    alt="باز کردن فیلتر"
                    width={15}
                    height={8}
                    loading="lazy"
                  />
                </button>
              </span>
              <span
                className={false ? "filter-options show" : "filter-options"}
              >
                {courses ? (
                  courses.map((course) => (
                    <span className="filter-option" key={course.course_id}>
                      <button className="select-btn"></button>
                      <span className="option-text">{course.name}</span>
                    </span>
                  ))
                ) : (
                  <LittleLoading />
                )}
              </span>
            </span>
          </aside>
          <div className="all-prods-grid">
            <div className="all-prods-header">
              <h2 className="semi-title font-bold">نمایش محصولات</h2>
            </div>
            <div className="all-prods-place">
              <NullKelasItem />
              <NullKelasItem />
              <NullKelasItem />
              <NullKelasItem />
              <NullKelasItem />
              <NullKelasItem />
              <NullKelasItem />
              <NullKelasItem />
              <NullKelasItem />
              <NullKelasItem />
              <NullKelasItem />
              <NullKelasItem />
              <NullKelasItem />
              <NullKelasItem />
              <NullKelasItem />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default NewShop;
