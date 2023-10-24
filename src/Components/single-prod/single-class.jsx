import React, { useState, useContext } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import convert_to_persian from "../functions/convert-to-persian";
import split_in_three from "../functions/spilit_in_three";
import { DataContext } from "../context/DataContext";

import banner from "../../assets/images/single-class-assets/purple-watercolor-galaxy-background_23-2149248308 1.png";
import arrow_img from "../../assets/images/single-class-assets/arrow-orange.webp";
import title_asset1 from "../../assets/images/single-class-assets/title-asset-1.webp";
import title_asset2 from "../../assets/images/single-class-assets/title-asset-2.webp";
import plus from "../../assets/images/single-teachers-asset/faq-icon.webp";
import LittleLoading from "../reuseables/little-loading";
import scrollToTop from "../functions/scroll";
const SingleClass = () => {
  const { teachers, kelasses, doreha, sample_files } = useContext(DataContext);
  const kelas = kelasses ? kelasses.find((k) => k.kelas_id === 12) : false;
  const teacher = kelas
    ? teachers
      ? teachers.find((t) => t.teacher_id === kelas.teachers[0])
      : false
    : false;
  return (
    <>
      <Helmet>
        <title>{kelas ? `کلاس ${kelas.kelas_title_and_ostad_name}` : ""}</title>
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
              و وضیحات چندخطی : این توضیحات به صورت خلاصه برای مشخص کردن اطلاعات
              اجمالی این کلاس و استاد میان.ضیحات چندخطی : این توضیحات به صوضیحات
              چندخطی : این توضیحات به صورت خلاصه برای مشخص کردن اطلاعات اجمالی
              این کلاس و استاد میان.ورت خلاصه برای مشخص کردن اوضیحات چندخطی :
              این توضیحات به صورت خلاصه برای مشخص کردن اطلاعات اجمالی این کلاس و
              استاد میان.طلاعات اجمالی این کلاس و استاد میان.
            </p>
          </div>
        </section>
        <div className="additional-datas-wrapper mm-width">
          <div className="right-col">
            <section className="teachers-data">
              <img
                src={teacher ? teacher.image_link : ""}
                alt={teacher ? teacher.fullname : "اسم استاد"}
                width={142}
                height={189}
              />
              <div className="teacher-text-data">
                <h2 className="info-title">
                  {teacher ? teacher.fullname : <LittleLoading />}
                </h2>
                <p className="info-description">
                  قراره توی این بخش چند خطی همون ابتدای صفحه درباره هر استاد
                  توضیح بدیم. مثل اولین متن و توضیحی که توی ویکیپدیا میبینید (
                  از لحاظ محتوایی )
                </p>
                <Link
                  onClick={scrollToTop}
                  to={teacher ? "/r-Teachers/" + teacher.slug_name : ""}
                  className="leave-page-btn"
                >
                  درباره استاد
                </Link>
              </div>
            </section>
            <section className="dore-info-wrapper">
              <h2 className="info-title">معرفی دوره</h2>
              <p className="info-description">
                و وضیحات چندخطی : این توضیحات به صورت خلاصه برای مشخص کردن
                اطلاعات اجمالی این کلاس و استاد میان.ضیحات چندخطی : این توضیحات
                به صوضیحات چندخطی : این توضیحات به صورت خلاصه برای مشخص کردن
                اطلاعات اجمالی این کلاس و استاد میان.ورت خلاصه برای مشخص کردن
                اوضیحات چندخطی : این توضیحات به صورت خلاصه برای مشخص کردن
                اطلاعات اجمالی این کلاس و استاد میان.طلاعات اجمالی این کلاس و
                استاد میان.
              </p>
              <Link onClick={scrollToTop} className="leave-page-btn">
                مشاهده دوره
              </Link>
            </section>
          </div>
          <div className="left-col">
            <section className="files-section">
              <h2 className="files-title">فایل ها</h2>
              <div className="sample-files-btns-wrapper">
                <span className="sample-file-btn active">جزوات</span>
                <span className="sample-file-btn">آزمون ها</span>
                <span className="sample-file-btn">تکالیف</span>
              </div>
              <div className="files-places">
                <div className="file-row">
                  <span className="row-item name-wrapper">فسفه و منطق</span>
                  <span className="row-item">فصل دوم</span>
                  <span className="row-item">دانلود</span>
                </div>
                <div className="file-row">
                  <span className="row-item name-wrapper">
                    شهریار بهادری برای تست
                  </span>
                  <span className="row-item">فصل دوم</span>
                  <span className="row-item">دانلود</span>
                </div>
                <div className="file-row">
                  <span className="row-item name-wrapper">فسفه و منطق</span>
                  <span className="row-item">فصل دوم</span>
                  <span className="row-item">دانلود</span>
                </div>
              </div>
            </section>
            <section className="class-times-wrapper">
              <h2 className="class-time-title">برنامه برگزاری:</h2>
              <div className="dates">
                <span className="day">
                  <span className="week-day">شنبه</span>
                  <span className="time">۱۰ تا ۱۲</span>
                </span>
                <span className="day">
                  <span className="week-day">شنبه</span>
                  <span className="time">۱۰ تا ۱۲</span>
                </span>
                <span className="day">
                  <span className="week-day">شنبه</span>
                  <span className="time">۱۰ تا ۱۲</span>
                </span>
              </div>
              <h3 className="start-date-title">تاریخ شروع:</h3>
              <span className="start-date">۲۴ مرداد</span>
              <div className="prices">
                <span className="discount-status">
                  <span className="discount-label">تخفیف</span>
                  <span className="real-price-number">
                    {split_in_three(convert_to_persian(2450000))}
                  </span>
                </span>
                <span className="final-price">
                  <span className="price">
                    {split_in_three(convert_to_persian(2450000))}
                  </span>
                  تومان
                </span>
              </div>
              <span className="buy-class-btn">افزودن به سبد خرید</span>
            </section>
            <section className="banners-place">
              <img src={banner} alt="" />
            </section>
          </div>
        </div>
        <section className="classes-wrapper-section mm-width">
          <h2 className="class-section-title">کلاس های مشابه</h2>
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
            <span className="arrow-next">
              <img src={arrow_img} alt="بعدی" width={14} height={24} />
            </span>
          </div>
        </section>
        <section className="classes-wrapper-section mm-width">
          <h2 className="class-section-title">کلاس های دیگر استاد</h2>
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
            <span className="arrow-next">
              <img src={arrow_img} alt="بعدی" width={14} height={24} />
            </span>
          </div>
        </section>
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
            <span className="arrow-next">
              <img src={arrow_img} alt="بعدی" width={14} height={24} />
            </span>
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
          </div>
          <div className="over-lay-left overlay"></div>
          <div className="over-lay-right overlay"></div>
        </section>
        <section className="faq-section-wrapper mm-width">
          <div className="section-header mm-width">
            <img src={title_asset2} alt="نظرات" width={100} height={100} />
            <h2 className="faq-section-title">سوالات متداول</h2>
          </div>
          <div className="faq-item opened">
            <div className="faq-header">
              <h3 className="faq-question">لورم ایپسوم و داستان</h3>
              <img
                src={plus}
                alt="باز کردن"
                width={40}
                height={40}
                loading="lazy"
              />
            </div>
            <p className="faq-answer">
              لورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان
              لورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان
              لورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان
              لورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان
              لورم ایپسوم و داستان
            </p>
          </div>
          <div className="faq-item">
            <div className="faq-header">
              <h3 className="faq-question">لورم ایپسوم و داستان</h3>
              <img
                src={plus}
                alt="باز کردن"
                width={40}
                height={40}
                loading="lazy"
              />
            </div>
            <p className="faq-answer">
              لورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان
              لورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان
              لورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان
              لورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان
              لورم ایپسوم و داستان
            </p>
          </div>
          <div className="faq-item">
            <div className="faq-header">
              <h3 className="faq-question">لورم ایپسوم و داستان</h3>
              <img
                src={plus}
                alt="باز کردن"
                width={40}
                height={40}
                loading="lazy"
              />
            </div>
            <p className="faq-answer">
              لورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان
              لورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان
              لورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان
              لورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان
              لورم ایپسوم و داستان
            </p>
          </div>
          <div className="faq-item">
            <div className="faq-header">
              <h3 className="faq-question">لورم ایپسوم و داستان</h3>
              <img
                src={plus}
                alt="باز کردن"
                width={40}
                height={40}
                loading="lazy"
              />
            </div>
            <p className="faq-answer">
              لورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان
              لورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان
              لورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان
              لورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان
              لورم ایپسوم و داستان
            </p>
          </div>
          <div className="faq-item">
            <div className="faq-header">
              <h3 className="faq-question">لورم ایپسوم و داستان</h3>
              <img
                src={plus}
                alt="باز کردن"
                width={40}
                height={40}
                loading="lazy"
              />
            </div>
            <p className="faq-answer">
              لورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان
              لورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان
              لورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان
              لورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان
              لورم ایپسوم و داستان
            </p>
          </div>
          <div className="faq-item">
            <div className="faq-header">
              <h3 className="faq-question">لورم ایپسوم و داستان</h3>
              <img
                src={plus}
                alt="باز کردن"
                width={40}
                height={40}
                loading="lazy"
              />
            </div>
            <p className="faq-answer">
              لورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان
              لورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان
              لورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان
              لورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان
              لورم ایپسوم و داستان
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default SingleClass;
