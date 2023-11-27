import React, { useState, useContext, useRef } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import convert_to_persian from "../functions/convert-to-persian";
import split_in_three from "../functions/spilit_in_three";
import { DataContext } from "../context/DataContext";

import banner from "../../assets/images/single-class-assets/purple-watercolor-galaxy-background_23-2149248308 1.png";
import arrow_img from "../../assets/images/single-class-assets/arrow-orange.webp";
import title_asset1 from "../../assets/images/single-class-assets/title-asset-1.webp";
import LittleLoading from "../reuseables/little-loading";
import scrollToTop from "../functions/scroll";
import Teacher_data from "./teacher-data/teacher-data";
import Dore_data from "./dore-data/dore-data";
import Files_data from "./files-data/files-data";
import Time_cart_data from "./time-cart/time-cart";
import FAQ_new from "../redesign-faq/re-faq";
const SingleClass = () => {
  const { teachers, kelasses, doreha, sample_files } = useContext(DataContext);
  const [similar_carousel, set_similar_carousel] = useState(0);
  const [other_carousel, set_other_carousel] = useState(0);
  const similar_ref = useRef(false);
  const other_ref = useRef(false);
  const mabhasi_ref = useRef(false);

  const page_slug = decodeURI(window.location.pathname.split("/")[2])
    .replaceAll("---", " 1 ")
    .replaceAll("-", " ")
    .replaceAll(" 1 ", " - ");
  const check_arr_includes = (arr1, arr2) => {
    let is = false;
    arr1.forEach((item) => {
      if (arr2.includes(item)) is = true;
    });
    return is;
  };
  const kelas = kelasses
    ? kelasses.find((k) => k.kelas_title_and_ostad_name === page_slug)
    : false;
  const teacher = kelas
    ? teachers
      ? teachers.find((t) => t.teacher_id === kelas.teachers[0])
      : false
    : false;

  const dore =
    kelas && doreha
      ? doreha.find((d) => d.dore_id === kelas.parent_dore_id)
      : false;
  const jozveha =
    sample_files && kelas
      ? sample_files.pdf_sample_files.filter(
          (f) =>
            kelas.sample_files.pdf_sample_files_ids.includes(f.file_id) &&
            !f.is_for_jalase &&
            f.file_type === "نمونه جزوه"
        )
      : false;
  const azmonha =
    sample_files && kelas
      ? sample_files.pdf_sample_files.filter(
          (f) =>
            kelas.sample_files.pdf_sample_files_ids.includes(f.file_id) &&
            !f.is_for_jalase &&
            f.file_type === "نمونه آزمون"
        )
      : false;
  const taklifha =
    sample_files && kelas
      ? sample_files.pdf_sample_files.filter(
          (f) =>
            kelas.sample_files.pdf_sample_files_ids.includes(f.file_id) &&
            !f.is_for_jalase &&
            f.file_type === "نمونه تکلیف"
        )
      : false;

  const similar_kelasses = kelas
    ? kelasses
        .filter(
          (k) =>
            check_arr_includes(kelas.subject, k.subject) &&
            k.kelas_id !== kelas.kelas_id
        )
        .reverse()
    : [];
  const other_teachers_kelasses = kelas
    ? kelasses.filter(
        (k) =>
          check_arr_includes(kelas.teachers, k.teachers) ||
          k.kelas_id === kelas.kelas_id
      )
    : [];

  const handle_similar_carousel = () => {
    const childrens = [...similar_ref.current.children];
    if (similar_carousel !== similar_kelasses.length - 1) {
      childrens.forEach((c) => {
        c.style.transform = `translateX(${(similar_carousel + 1) * 378}px)`;
      });
      set_similar_carousel(similar_carousel + 1);
    } else {
      childrens.forEach((c) => {
        c.style.transform = `translateX(${0 * 378}px)`;
      });
      set_similar_carousel(0);
    }
  };
  const handle_other_carousel = () => {
    const childrens = [...other_ref.current.children];
    if (other_carousel !== other_teachers_kelasses.length - 1) {
      childrens.forEach((c) => {
        c.style.transform = `translateX(${(other_carousel + 1) * 378}px)`;
      });
      set_other_carousel(other_carousel + 1);
    } else {
      childrens.forEach((c) => {
        c.style.transform = `translateX(${0 * 378}px)`;
      });
      set_other_carousel(0);
    }
  };
  return (
    <>
      <Helmet>
        <title>
          {decodeURI(window.location.pathname.split("/")[2]).replaceAll(
            "-",
            " "
          )}
        </title>
      </Helmet>
      <div className="re-design-single-class">
        <section className="re-single-header-info mm-width">
          <img
            src={kelas ? kelas.image_link : ""}
            alt={kelas ? kelas.kelas_title_and_ostad_name : "اسم کلاس"}
            width={200}
            height={200}
            loading="lazy"
          />
          <div className="re-class-text-info">
            <h1 className="class-title">
              {kelas ? kelas.kelas_title : <LittleLoading />}
            </h1>
            <h2 className="info-teacher-name">
              {teacher ? (
                <Link
                  onClick={scrollToTop}
                  to={"/r-Teachers/" + teacher.slug_name}
                >
                  {teacher.fullname}
                </Link>
              ) : (
                <LittleLoading />
              )}
            </h2>
            <p className="info-desc-text">
              {kelas ? kelas.descriptions : <LittleLoading />}
              {/* 
              و وضیحات چندخطی :
              این توضیحات به صورت خلاصه برای مشخص کردن اطلاعات اجمالی این کلاس و
              استاد میان.ضیحات چندخطی : این توضیحات به صوضیحات چندخطی : این
              توضیحات به صورت خلاصه برای مشخص کردن اطلاعات اجمالی این کلاس و
              استاد میان.ورت خلاصه برای مشخص کردن اوضیحات چندخطی : این توضیحات
              به صورت خلاصه برای مشخص کردن اطلاعات اجمالی این کلاس و استاد
              میان.طلاعات اجمالی این کلاس و استاد میان. */}
            </p>
          </div>
        </section>
        <div className="additional-datas-wrapper mm-width">
          <div className="right-col">
            <Teacher_data teacher={teacher} />
            <Dore_data dore={dore} />
          </div>
          <div className="left-col">
            <Files_data
              jozveha={jozveha}
              taklifha={taklifha}
              azmonha={azmonha}
            />
            <Time_cart_data kelas={kelas} />
            <section className="banners-place">
              <img src={banner} alt="" />
            </section>
          </div>
        </div>
        <section className="classes-wrapper-section mm-width">
          <h2 className="class-section-title">کلاس های مشابه</h2>
          <div className="classes-carousel">
            <div className="classes-place" ref={similar_ref}>
              {similar_kelasses ? (
                similar_kelasses.map((k) => (
                  <div className="class-item" key={k.kelas_id}>
                    <div className="img-dore-place">
                      <Link
                        onClick={scrollToTop}
                        target="_blank"
                        to={`/r-class/${k.kelas_title_and_ostad_name.replaceAll(
                          " ",
                          "-"
                        )}`}
                      >
                        <img
                          width={130}
                          height={130}
                          loading="lazy"
                          src={k.image_link}
                          alt={k.kelas_title_and_ostad_name}
                        />
                      </Link>
                      <span className="dore-label">
                        <span className="dore-label-title">دوره :</span>
                        <span className="dore-content">
                          {doreha ? (
                            doreha.find(
                              (d) => d.dore_id === kelas.parent_dore_id
                            ).dore_title
                          ) : (
                            <LittleLoading />
                          )}
                        </span>
                      </span>
                    </div>
                    <div className="class-text-data">
                      <h3 className="teacher-name-data">
                        استاد
                        {
                          k.kelas_title_and_ostad_name
                            .split("استاد")[1]
                            .split("-")[0]
                        }
                      </h3>
                      <h4 className="cours-name-data">
                        <Link
                          onClick={scrollToTop}
                          target="_blank"
                          to={`/r-class/${k.kelas_title_and_ostad_name.replaceAll(
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
                              : split_in_three(
                                  convert_to_persian(k.discounted_price)
                                )}
                            تومان
                          </span>
                          <span className="real-price">
                            {k.discounted_price
                              ? k.price === k.discounted_price
                                ? split_in_three(convert_to_persian(k.price))
                                : split_in_three(
                                    convert_to_persian(k.discounted_price)
                                  )
                              : convert_to_persian(k.price)}{" "}
                            تومان
                          </span>
                        </span>
                      </div>
                      <span className="add-to-cart-btn">
                        افزودن به سبد خرید
                      </span>
                    </div>
                  </div>
                ))
              ) : (
                <LittleLoading />
              )}
            </div>
            {similar_kelasses.length > 2 ? (
              <button className="arrow-next" onClick={handle_similar_carousel}>
                <img src={arrow_img} alt="بعدی" width={14} height={24} />
              </button>
            ) : (
              <></>
            )}
            {/* <button className="arrow-next" onClick={handle_similar_carousel}>
              <img src={arrow_img} alt="بعدی" width={14} height={24} />
            </button> */}
          </div>
        </section>
        {other_teachers_kelasses ? (
          other_teachers_kelasses.length !== 0 ? (
            <section className="classes-wrapper-section mm-width">
              <h2 className="class-section-title">کلاس های دیگر استاد</h2>
              <div className="classes-carousel">
                <div className="classes-place" ref={other_ref}>
                  {other_teachers_kelasses.map((k) => (
                    <div className="class-item" key={k.kelas_id}>
                      <div className="img-dore-place">
                        <Link
                          onClick={scrollToTop}
                          target="_blank"
                          to={`/r-class/${k.kelas_title_and_ostad_name.replaceAll(
                            " ",
                            "-"
                          )}`}
                        >
                          <img
                            width={130}
                            height={130}
                            loading="lazy"
                            src={k.image_link}
                            alt={k.kelas_title_and_ostad_name}
                          />
                        </Link>
                        <span className="dore-label">
                          <span className="dore-label-title">دوره :</span>
                          <span className="dore-content">
                            {doreha ? (
                              doreha.find(
                                (d) => d.dore_id === kelas.parent_dore_id
                              ).dore_title
                            ) : (
                              <LittleLoading />
                            )}
                          </span>
                        </span>
                      </div>
                      <div className="class-text-data">
                        <h3 className="teacher-name-data">
                          استاد
                          {
                            k.kelas_title_and_ostad_name
                              .split("استاد")[1]
                              .split("-")[0]
                          }
                        </h3>
                        <h4 className="cours-name-data">
                          <Link
                            onClick={scrollToTop}
                            target="_blank"
                            to={`/r-class/${k.kelas_title_and_ostad_name.replaceAll(
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
                                : split_in_three(
                                    convert_to_persian(k.discounted_price)
                                  )}
                              تومان
                            </span>
                            <span className="real-price">
                              {k.discounted_price
                                ? k.price === k.discounted_price
                                  ? split_in_three(convert_to_persian(k.price))
                                  : split_in_three(
                                      convert_to_persian(k.discounted_price)
                                    )
                                : convert_to_persian(k.price)}{" "}
                              تومان
                            </span>
                          </span>
                        </div>
                        <span className="add-to-cart-btn">
                          افزودن به سبد خرید
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                {other_teachers_kelasses.length > 2 ? (
                  <button
                    className="arrow-next"
                    onClick={handle_other_carousel}
                  >
                    <img src={arrow_img} alt="بعدی" width={14} height={24} />
                  </button>
                ) : (
                  <></>
                )}
              </div>
            </section>
          ) : (
            <></>
          )
        ) : (
          <LittleLoading />
        )}

        <section className="classes-wrapper-section mm-width">
          <h2 className="class-section-title">کلاس های مبحثی</h2>
          <div className="classes-carousel">
            <div className="classes-place">
              <div className="class-item">
                <div className="img-dore-place">
                  <img
                    width={130}
                    height={130}
                    loading="lazy"
                    src="https://kadschool.com/media/Kad_Kelas_Photos/Kelas_علوم_و_فنون_استاد_سبطی.webp"
                    alt=""
                  />
                  <span className="dore-label">
                    <span className="dore-label-title">دوره :</span>
                    <span className="dore-content">سالانه</span>
                  </span>
                </div>
                <div className="class-text-data">
                  <h3 className="teacher-name-data">استاد هامون سبطی</h3>
                  <h4 className="cours-name-data">فسفه و منطق</h4>
                  <div className="prices-data-wrapper">
                    <span className="price-title">قیمت:</span>
                    <span className="prices-kind-wrapper">
                      <span className="real-discounted">
                        {split_in_three(convert_to_persian(1950000))}
                        تومان
                      </span>
                      <span className="real-price">
                        {split_in_three(convert_to_persian(1950000))}
                        تومان
                      </span>
                    </span>
                  </div>
                  <span className="add-to-cart-btn">افزودن به سبد خرید</span>
                </div>
              </div>
              <div className="class-item">
                <div className="img-dore-place">
                  <img
                    width={130}
                    height={130}
                    loading="lazy"
                    src="https://kadschool.com/media/Kad_Kelas_Photos/Kelas_علوم_و_فنون_استاد_سبطی.webp"
                    alt=""
                  />
                  <span className="dore-label">
                    <span className="dore-label-title">دوره :</span>
                    <span className="dore-content">سالانه</span>
                  </span>
                </div>
                <div className="class-text-data">
                  <h3 className="teacher-name-data">استاد هامون سبطی</h3>
                  <h4 className="cours-name-data">فسفه و منطق</h4>
                  <div className="prices-data-wrapper">
                    <span className="price-title">قیمت:</span>
                    <span className="prices-kind-wrapper">
                      <span className="real-discounted">
                        {split_in_three(convert_to_persian(1950000))}
                        تومان
                      </span>
                      <span className="real-price">
                        {split_in_three(convert_to_persian(1950000))}
                        تومان
                      </span>
                    </span>
                  </div>
                  <span className="add-to-cart-btn">افزودن به سبد خرید</span>
                </div>
              </div>
              <div className="class-item">
                <div className="img-dore-place">
                  <img
                    width={130}
                    height={130}
                    loading="lazy"
                    src="https://kadschool.com/media/Kad_Kelas_Photos/Kelas_علوم_و_فنون_استاد_سبطی.webp"
                    alt=""
                  />
                  <span className="dore-label">
                    <span className="dore-label-title">دوره :</span>
                    <span className="dore-content">سالانه</span>
                  </span>
                </div>
                <div className="class-text-data">
                  <h3 className="teacher-name-data">استاد هامون سبطی</h3>
                  <h4 className="cours-name-data">فسفه و منطق</h4>
                  <div className="prices-data-wrapper">
                    <span className="price-title">قیمت:</span>
                    <span className="prices-kind-wrapper">
                      <span className="real-discounted">
                        {split_in_three(convert_to_persian(1950000))}
                        تومان
                      </span>
                      <span className="real-price">
                        {split_in_three(convert_to_persian(1950000))}
                        تومان
                      </span>
                    </span>
                  </div>
                  <span className="add-to-cart-btn">افزودن به سبد خرید</span>
                </div>
              </div>
              <div className="class-item">
                <div className="img-dore-place">
                  <img
                    width={130}
                    height={130}
                    loading="lazy"
                    src="https://kadschool.com/media/Kad_Kelas_Photos/Kelas_علوم_و_فنون_استاد_سبطی.webp"
                    alt=""
                  />
                  <span className="dore-label">
                    <span className="dore-label-title">دوره :</span>
                    <span className="dore-content">سالانه</span>
                  </span>
                </div>
                <div className="class-text-data">
                  <h3 className="teacher-name-data">استاد هامون سبطی</h3>
                  <h4 className="cours-name-data">فسفه و منطق</h4>
                  <div className="prices-data-wrapper">
                    <span className="price-title">قیمت:</span>
                    <span className="prices-kind-wrapper">
                      <span className="real-discounted">
                        {split_in_three(convert_to_persian(1950000))}
                        تومان
                      </span>
                      <span className="real-price">
                        {split_in_three(convert_to_persian(1950000))}
                        تومان
                      </span>
                    </span>
                  </div>
                  <span className="add-to-cart-btn">افزودن به سبد خرید</span>
                </div>
              </div>
            </div>
            <button className="arrow-next">
              <img src={arrow_img} alt="بعدی" width={14} height={24} />
            </button>
          </div>
        </section>
        <section className="re-students-comments-section">
          <div className="section-header mm-width">
            <img src={title_asset1} alt="نظرات" width={60} height={60} />
            <h2 className="section-title">نظرات دانش آموزان</h2>
          </div>

          <div className="cm-row">
            <div className="cm-wrapper">
              <span className="cm-header">
                <span className="cm-name">اسم و فامیل</span>
                <span className="cm-date">۱ شهریور ۱۴۰۲</span>
              </span>
              <p className="cm-text">
                لورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان
                لورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان
                لورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایوم و داستان
              </p>
            </div>
            <div className="cm-wrapper">
              <span className="cm-header">
                <span className="cm-name">اسم و فامیل</span>
                <span className="cm-date">۱ شهریور ۱۴۰۲</span>
              </span>
              <p className="cm-text">
                لورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان
                لورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان
                لورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان
                لورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان
                لورم ایپسوم و داستان
              </p>
            </div>
            <div className="cm-wrapper">
              <span className="cm-header">
                <span className="cm-name">اسم و فامیل</span>
                <span className="cm-date">۱ شهریور ۱۴۰۲</span>
              </span>
              <p className="cm-text">
                لورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان
                لورم ایپسوم و داستان لورم ایپسوم و لورم ایپسوم و داستان لورم
                ایپسوم و داستان
              </p>
            </div>
            <div className="cm-wrapper">
              <span className="cm-header">
                <span className="cm-name">اسم و فامیل</span>
                <span className="cm-date">۱ شهریور ۱۴۰۲</span>
              </span>
              <p className="cm-text">
                لورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان
                لورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان
                لورم ایپسوم و داستان لورم ایپسوم و داورم ایپسوم و داستان لورم
                ایپسوم و داستان
              </p>
            </div>
            <div className="cm-wrapper">
              <span className="cm-header">
                <span className="cm-name">اسم و فامیل</span>
                <span className="cm-date">۱ شهریور ۱۴۰۲</span>
              </span>
              <p className="cm-text">
                لورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان
                لورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان
                لورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان
                لورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان
                لورم ایپسوم و داستان
              </p>
            </div>
            <div className="cm-wrapper">
              <span className="cm-header">
                <span className="cm-name">اسم و فامیل</span>
                <span className="cm-date">۱ شهریور ۱۴۰۲</span>
              </span>
              <p className="cm-text">
                لورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان
                لورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان
                لورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان
                لورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان
                لورم ایپسوم و داستان
              </p>
            </div>
            <div className="cm-wrapper">
              <span className="cm-header">
                <span className="cm-name">اسم و فامیل</span>
                <span className="cm-date">۱ شهریور ۱۴۰۲</span>
              </span>
              <p className="cm-text">
                لورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان
                لورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان
                لورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان
                لورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان
                لورم ایپسوم و داستان
              </p>
            </div>
            <div className="cm-wrapper">
              <span className="cm-header">
                <span className="cm-name">اسم و فامیل</span>
                <span className="cm-date">۱ شهریور ۱۴۰۲</span>
              </span>
              <p className="cm-text">
                لورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان
                لورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان
                لورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان
                لورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان
                لورم ایپسوم و داستان
              </p>
            </div>
            <div className="cm-wrapper">
              <span className="cm-header">
                <span className="cm-name">اسم و فامیل</span>
                <span className="cm-date">۱ شهریور ۱۴۰۲</span>
              </span>
              <p className="cm-text">
                لورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان
                لورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان
                لورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان
                لورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان
                لورم ایپسوم و داستان
              </p>
            </div>
            <div className="cm-wrapper">
              <span className="cm-header">
                <span className="cm-name">اسم و فامیل</span>
                <span className="cm-date">۱ شهریور ۱۴۰۲</span>
              </span>
              <p className="cm-text">
                لورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان
                لورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان
                لورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان
                لورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان
                لورم ایپسوم و داستان
              </p>
            </div>
            <div className="cm-wrapper">
              <span className="cm-header">
                <span className="cm-name">اسم و فامیل</span>
                <span className="cm-date">۱ شهریور ۱۴۰۲</span>
              </span>
              <p className="cm-text">
                لورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان
                لورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان
                لورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان
                لورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان
                لورم ایپسوم و داستان
              </p>
            </div>
            <div className="cm-wrapper">
              <span className="cm-header">
                <span className="cm-name">اسم و فامیل</span>
                <span className="cm-date">۱ شهریور ۱۴۰۲</span>
              </span>
              <p className="cm-text">
                لورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان
                لورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان
                لورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان
                لورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان
                لورم ایپسوم و داستان
              </p>
            </div>
            <div className="cm-wrapper">
              <span className="cm-header">
                <span className="cm-name">اسم و فامیل</span>
                <span className="cm-date">۱ شهریور ۱۴۰۲</span>
              </span>
              <p className="cm-text">
                لورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان
                لورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان
                لورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان
                لورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان
                لورم ایپسوم و داستان
              </p>
            </div>
            <div className="cm-wrapper">
              <span className="cm-header">
                <span className="cm-name">اسم و فامیل</span>
                <span className="cm-date">۱ شهریور ۱۴۰۲</span>
              </span>
              <p className="cm-text">
                لورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان
                لورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان
                لورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان
                لورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان
                لورم ایپسوم و داستان
              </p>
            </div>
            <div className="cm-wrapper">
              <span className="cm-header">
                <span className="cm-name">اسم و فامیل</span>
                <span className="cm-date">۱ شهریور ۱۴۰۲</span>
              </span>
              <p className="cm-text">
                لورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان
                لورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان
                لورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان
                لورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان
                لورم ایپسوم و داستان
              </p>
            </div>
            <div className="cm-wrapper">
              <span className="cm-header">
                <span className="cm-name">اسم و فامیل</span>
                <span className="cm-date">۱ شهریور ۱۴۰۲</span>
              </span>
              <p className="cm-text">
                لورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان
                لورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان
                لورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان
                لورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان
                لورم ایپسوم و داستان
              </p>
            </div>
            <div className="cm-wrapper">
              <span className="cm-header">
                <span className="cm-name">اسم و فامیل</span>
                <span className="cm-date">۱ شهریور ۱۴۰۲</span>
              </span>
              <p className="cm-text">
                لورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان
                لورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان
                لورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان
                لورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان
                لورم ایپسوم و داستان
              </p>
            </div>
            <div className="cm-wrapper">
              <span className="cm-header">
                <span className="cm-name">اسم و فامیل</span>
                <span className="cm-date">۱ شهریور ۱۴۰۲</span>
              </span>
              <p className="cm-text">
                لورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان
                لورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان
                لورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان
                لورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان
                لورم ایپسوم و داستان
              </p>
            </div>
            <div className="cm-wrapper">
              <span className="cm-header">
                <span className="cm-name">اسم و فامیل</span>
                <span className="cm-date">۱ شهریور ۱۴۰۲</span>
              </span>
              <p className="cm-text">
                لورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان
                لورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان
                لورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان
                لورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان
                لورم ایپسوم و داستان
              </p>
            </div>
            <div className="cm-wrapper">
              <span className="cm-header">
                <span className="cm-name">اسم و فامیل</span>
                <span className="cm-date">۱ شهریور ۱۴۰۲</span>
              </span>
              <p className="cm-text">
                لورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان
                لورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان
                لورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان
                لورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان
                لورم ایپسوم و داستان
              </p>
            </div>
          </div>
          <div className="cm-row cm-row-2">
            <div className="cm-wrapper">
              <span className="cm-header">
                <span className="cm-name">اسم و فامیل</span>
                <span className="cm-date">۱ شهریور ۱۴۰۲</span>
              </span>
              <p className="cm-text">
                لورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان
                لورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان
                لورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایوم و داستان
              </p>
            </div>
            <div className="cm-wrapper">
              <span className="cm-header">
                <span className="cm-name">اسم و فامیل</span>
                <span className="cm-date">۱ شهریور ۱۴۰۲</span>
              </span>
              <p className="cm-text">
                لورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان
                لورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان
                لورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان
                لورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان
                لورم ایپسوم و داستان
              </p>
            </div>
            <div className="cm-wrapper">
              <span className="cm-header">
                <span className="cm-name">اسم و فامیل</span>
                <span className="cm-date">۱ شهریور ۱۴۰۲</span>
              </span>
              <p className="cm-text">
                لورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان
                لورم ایپسوم و داستان لورم ایپسوم و لورم ایپسوم و داستان لورم
                ایپسوم و داستان
              </p>
            </div>
            <div className="cm-wrapper">
              <span className="cm-header">
                <span className="cm-name">اسم و فامیل</span>
                <span className="cm-date">۱ شهریور ۱۴۰۲</span>
              </span>
              <p className="cm-text">
                لورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان
                لورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان
                لورم ایپسوم و داستان لورم ایپسوم و داورم ایپسوم و داستان لورم
                ایپسوم و داستان
              </p>
            </div>
            <div className="cm-wrapper">
              <span className="cm-header">
                <span className="cm-name">اسم و فامیل</span>
                <span className="cm-date">۱ شهریور ۱۴۰۲</span>
              </span>
              <p className="cm-text">
                لورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان
                لورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان
                لورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان
                لورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان
                لورم ایپسوم و داستان
              </p>
            </div>
            <div className="cm-wrapper">
              <span className="cm-header">
                <span className="cm-name">اسم و فامیل</span>
                <span className="cm-date">۱ شهریور ۱۴۰۲</span>
              </span>
              <p className="cm-text">
                لورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان
                لورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان
                لورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان
                لورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان
                لورم ایپسوم و داستان
              </p>
            </div>
            <div className="cm-wrapper">
              <span className="cm-header">
                <span className="cm-name">اسم و فامیل</span>
                <span className="cm-date">۱ شهریور ۱۴۰۲</span>
              </span>
              <p className="cm-text">
                لورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان
                لورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان
                لورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان
                لورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان
                لورم ایپسوم و داستان
              </p>
            </div>
            <div className="cm-wrapper">
              <span className="cm-header">
                <span className="cm-name">اسم و فامیل</span>
                <span className="cm-date">۱ شهریور ۱۴۰۲</span>
              </span>
              <p className="cm-text">
                لورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان
                لورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان
                لورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان
                لورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان
                لورم ایپسوم و داستان
              </p>
            </div>
            <div className="cm-wrapper">
              <span className="cm-header">
                <span className="cm-name">اسم و فامیل</span>
                <span className="cm-date">۱ شهریور ۱۴۰۲</span>
              </span>
              <p className="cm-text">
                لورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان
                لورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان
                لورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان
                لورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان
                لورم ایپسوم و داستان
              </p>
            </div>
            <div className="cm-wrapper">
              <span className="cm-header">
                <span className="cm-name">اسم و فامیل</span>
                <span className="cm-date">۱ شهریور ۱۴۰۲</span>
              </span>
              <p className="cm-text">
                لورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان
                لورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان
                لورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان
                لورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان
                لورم ایپسوم و داستان
              </p>
            </div>
            <div className="cm-wrapper">
              <span className="cm-header">
                <span className="cm-name">اسم و فامیل</span>
                <span className="cm-date">۱ شهریور ۱۴۰۲</span>
              </span>
              <p className="cm-text">
                لورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان
                لورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان
                لورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان
                لورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان
                لورم ایپسوم و داستان
              </p>
            </div>
            <div className="cm-wrapper">
              <span className="cm-header">
                <span className="cm-name">اسم و فامیل</span>
                <span className="cm-date">۱ شهریور ۱۴۰۲</span>
              </span>
              <p className="cm-text">
                لورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان
                لورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان
                لورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان
                لورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان
                لورم ایپسوم و داستان
              </p>
            </div>
            <div className="cm-wrapper">
              <span className="cm-header">
                <span className="cm-name">اسم و فامیل</span>
                <span className="cm-date">۱ شهریور ۱۴۰۲</span>
              </span>
              <p className="cm-text">
                لورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان
                لورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان
                لورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان
                لورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان
                لورم ایپسوم و داستان
              </p>
            </div>
            <div className="cm-wrapper">
              <span className="cm-header">
                <span className="cm-name">اسم و فامیل</span>
                <span className="cm-date">۱ شهریور ۱۴۰۲</span>
              </span>
              <p className="cm-text">
                لورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان
                لورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان
                لورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان
                لورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان
                لورم ایپسوم و داستان
              </p>
            </div>
            <div className="cm-wrapper">
              <span className="cm-header">
                <span className="cm-name">اسم و فامیل</span>
                <span className="cm-date">۱ شهریور ۱۴۰۲</span>
              </span>
              <p className="cm-text">
                لورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان
                لورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان
                لورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان
                لورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان
                لورم ایپسوم و داستان
              </p>
            </div>
            <div className="cm-wrapper">
              <span className="cm-header">
                <span className="cm-name">اسم و فامیل</span>
                <span className="cm-date">۱ شهریور ۱۴۰۲</span>
              </span>
              <p className="cm-text">
                لورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان
                لورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان
                لورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان
                لورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان
                لورم ایپسوم و داستان
              </p>
            </div>
            <div className="cm-wrapper">
              <span className="cm-header">
                <span className="cm-name">اسم و فامیل</span>
                <span className="cm-date">۱ شهریور ۱۴۰۲</span>
              </span>
              <p className="cm-text">
                لورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان
                لورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان
                لورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان
                لورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان
                لورم ایپسوم و داستان
              </p>
            </div>
            <div className="cm-wrapper">
              <span className="cm-header">
                <span className="cm-name">اسم و فامیل</span>
                <span className="cm-date">۱ شهریور ۱۴۰۲</span>
              </span>
              <p className="cm-text">
                لورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان
                لورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان
                لورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان
                لورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان
                لورم ایپسوم و داستان
              </p>
            </div>
            <div className="cm-wrapper">
              <span className="cm-header">
                <span className="cm-name">اسم و فامیل</span>
                <span className="cm-date">۱ شهریور ۱۴۰۲</span>
              </span>
              <p className="cm-text">
                لورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان
                لورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان
                لورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان
                لورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان
                لورم ایپسوم و داستان
              </p>
            </div>
            <div className="cm-wrapper">
              <span className="cm-header">
                <span className="cm-name">اسم و فامیل</span>
                <span className="cm-date">۱ شهریور ۱۴۰۲</span>
              </span>
              <p className="cm-text">
                لورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان
                لورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان
                لورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان
                لورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان
                لورم ایپسوم و داستان
              </p>
            </div>
          </div>
          <div className="over-lay-left overlay"></div>
          <div className="over-lay-right overlay"></div>
        </section>
        <FAQ_new faq={kelas ? kelas.FAQ : []} />
      </div>
    </>
  );
};

export default SingleClass;
