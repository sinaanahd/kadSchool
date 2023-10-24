import React, { useState, useContext, useEffect } from "react";
import { DataContext } from "../context/DataContext";
import AparatVideo from "../video/aparat-video";
import { Helmet } from "react-helmet";
import convert_to_persian from "../functions/convert-to-persian";
import split_in_three from "../functions/spilit_in_three";
// images

import exp_img from "../../assets/images/single-teachers-asset/exprience-resume.webp";
import pub_img from "../../assets/images/single-teachers-asset/publish-resume.webp";
import edu_img from "../../assets/images/single-teachers-asset/educational-resume.webp";
import qua_img from "../../assets/images/single-teachers-asset/qualities-resume.webp";
import ran_img from "../../assets/images/single-teachers-asset/ranks-resume.webp";
import tes_img from "../../assets/images/single-teachers-asset/test-resume.webp";
import arrow from "../../assets/images/single-teachers-asset/arrow.webp";
import plus from "../../assets/images/single-teachers-asset/faq-icon.webp";
import LittleLoading from "../reuseables/little-loading";

const R_SingleTeacher = () => {
  const { teachers, kelasses, doreha, sample_files } = useContext(DataContext);
  const find_slug = () => {
    const page_slug = window.location.pathname.split("/")[2];
    let page_id;
    const test_slug = decodeURIComponent(page_slug);
    if (/\d/.test(test_slug)) {
      page_id = parseInt(page_slug);
    } else {
      page_id = decodeURIComponent(page_slug);
    }
    return page_id;
  };
  const fill_classes = (arr) => {
    const final_arr = [];
    if (kelasses) {
      arr.forEach((id) => {
        const kelas = { ...kelasses.find((k) => k.kelas_id === id) };
        if (Object.keys(kelas).length !== 0) {
          if (doreha) {
            const dore = {
              ...doreha.find((d) => d.dore_id === kelas.parent_dore_id),
            };
            if (Object.keys(dore).length !== 0) {
              kelas.dore = dore;
            }
          }
          final_arr.push(kelas);
        }
      });
    }
    return final_arr;
  };
  const fill_sample_files = (e) => {
    const sample_files_obj = {};
    if (sample_files && teacher) {
      sample_files_obj.video = sample_files.video_sample_files.filter((sf) =>
        teacher.sample_files.video_sample_files_ids.includes(sf.file_id)
      );
      sample_files_obj.pdf = sample_files.pdf_sample_files.filter(
        (sf) =>
          teacher.sample_files.pdf_sample_files_ids.includes(sf.file_id) &&
          !sf.is_for_jalase
      );
    }
    // console.log(sample_files_obj);
    return sample_files_obj;
  };
  // useEffect(() => {
  //   fill_sample_files();
  // }, []);
  const slug = find_slug();
  const teacher = teachers
    ? Object.keys({
        ...teachers.find((t) => t.slug_name === slug || t.teacher_id === slug),
      }).length !== 0
      ? {
          ...teachers.find(
            (t) => t.slug_name === slug || t.teacher_id === slug
          ),
        }
      : false
    : false;
  return (
    <>
      <Helmet>
        <title>
          کاد |{" "}
          {decodeURIComponent(
            window.location.pathname.split("/")[2]
          ).replaceAll("-", " ")}
        </title>
      </Helmet>
      <div className="re-teacher-main-wrapper re">
        <section className="teacher-intro-wrapper">
          <div className="teahcer-img">
            <img
              src={teacher ? teacher.image_link : ""}
              alt={teacher ? teacher.fullname : ""}
              width={200}
              height={266}
            />
          </div>
          <div className="teacher-text-data">
            <h1 className="main-title">
              {decodeURIComponent(
                window.location.pathname.split("/")[2]
              ).replaceAll("-", " ")}
              {/* {teacher ? teacher.fullname : <LittleLoading />} */}
            </h1>
            <p className="teacher-short-desc">
              قراره توی این بخش چند خطی همون ابتدای صفحه درباره هر استاد توضیح
              بدیم. مثل اولین متن و توضیحی که توی ویکیپدیا میبینید ( از لحاظ
              محتوایی ) قراره توی این بخش چند خطی همون ابتدای صفحه درباره هر
              استاد توضیح بدیم. مثل اولین متن و توضیحی که توی ویکیپدیا میبینید (
              از لحاظ محتوایی )
            </p>
          </div>
        </section>
        <section className="full-resume-wrapper">
          <div className="right-col-resume resume-col">
            {teacher ? (
              Object.keys({
                ...teacher.cv.full_cv.find((c) => c.title === "سوابق تدریس"),
              }).length !== 0 ? (
                <div className="resume-item">
                  <div className="resume-title-wrapper">
                    <img
                      src={edu_img}
                      width={80}
                      height={80}
                      loading="lazy"
                      alt="سوابق تدریس"
                    />
                    <h2 className="resume-title">سوابق تدریس</h2>
                  </div>
                  <ul className="resume-content-items">
                    {{
                      ...teacher.cv.full_cv.find(
                        (c) => c.title === "سوابق تدریس"
                      ),
                    }.arrayed_text.map((t, i) => (
                      <li key={i++}>{t}</li>
                    ))}
                  </ul>
                </div>
              ) : (
                <></>
              )
            ) : (
              <LittleLoading />
            )}
            {teacher ? (
              Object.keys({
                ...teacher.cv.full_cv.find((c) => c.title === "تحصیلات"),
              }).length !== 0 ? (
                <div className="resume-item">
                  <div className="resume-title-wrapper">
                    <img
                      src={exp_img}
                      width={80}
                      height={80}
                      loading="lazy"
                      alt="تحصیلات"
                    />
                    <h2 className="resume-title">تحصیلات</h2>
                  </div>
                  <ul className="resume-content-items">
                    {{
                      ...teacher.cv.full_cv.find((c) => c.title === "تحصیلات"),
                    }.arrayed_text.map((t, i) => (
                      <li key={i++}>{t}</li>
                    ))}
                  </ul>
                </div>
              ) : (
                <></>
              )
            ) : (
              <LittleLoading />
            )}
            {teacher ? (
              Object.keys({
                ...teacher.cv.full_cv.find(
                  (c) => c.title === "رتبه های برتر سال های گذشته"
                ),
              }).length !== 0 ? (
                <div className="resume-item">
                  <div className="resume-title-wrapper">
                    <img
                      src={ran_img}
                      width={80}
                      height={80}
                      loading="lazy"
                      alt="رتبه های برتر سال های گذشته"
                    />
                    <h2 className="resume-title">
                      رتبه های برتر سال های گذشته
                    </h2>
                  </div>
                  <ul className="resume-content-items">
                    {{
                      ...teacher.cv.full_cv.find(
                        (c) => c.title === "رتبه های برتر سال های گذشته"
                      ),
                    }.arrayed_text.map((t, i) => (
                      <li key={i++}>{t}</li>
                    ))}
                  </ul>
                </div>
              ) : (
                <></>
              )
            ) : (
              <LittleLoading />
            )}
          </div>
          <div className="left-col-resume resume-col">
            {teacher ? (
              Object.keys({
                ...teacher.cv.full_cv.find((c) => c.title === "تالیفات"),
              }).length !== 0 ? (
                <div className="resume-item">
                  <div className="resume-title-wrapper">
                    <img
                      src={pub_img}
                      width={80}
                      height={80}
                      loading="lazy"
                      alt="تالیفات"
                    />
                    <h2 className="resume-title">تالیفات</h2>
                  </div>
                  <ul className="resume-content-items">
                    {{
                      ...teacher.cv.full_cv.find((c) => c.title === "تالیفات"),
                    }.arrayed_text.map((t, i) => (
                      <li key={i++}>{t}</li>
                    ))}
                  </ul>
                </div>
              ) : (
                <></>
              )
            ) : (
              <LittleLoading />
            )}
            {teacher ? (
              Object.keys({
                ...teacher.cv.full_cv.find(
                  (c) => c.title === "ویژگی های آموزشی"
                ),
              }).length !== 0 ? (
                <div className="resume-item">
                  <div className="resume-title-wrapper">
                    <img
                      src={qua_img}
                      width={80}
                      height={80}
                      loading="lazy"
                      alt="ویژگی های آموزشی"
                    />
                    <h2 className="resume-title">ویژگی های آموزشی</h2>
                  </div>
                  <ul className="resume-content-items">
                    {{
                      ...teacher.cv.full_cv.find(
                        (c) => c.title === "ویژگی های آموزشی"
                      ),
                    }.arrayed_text.map((t, i) => (
                      <li key={i++}>{t}</li>
                    ))}
                  </ul>
                </div>
              ) : (
                <></>
              )
            ) : (
              <LittleLoading />
            )}
            {teacher ? (
              Object.keys({
                ...teacher.cv.full_cv.find((c) => c.title === "طراحی آزمون"),
              }).length !== 0 ? (
                <div className="resume-item">
                  <div className="resume-title-wrapper">
                    <img
                      src={tes_img}
                      width={80}
                      height={80}
                      loading="lazy"
                      alt="طراحی آزمون"
                    />
                    <h2 className="resume-title">طراحی آزمون</h2>
                  </div>
                  <ul className="resume-content-items">
                    {{
                      ...teacher.cv.full_cv.find(
                        (c) => c.title === "طراحی آزمون"
                      ),
                    }.arrayed_text.map((t, i) => (
                      <li key={i++}>{t}</li>
                    ))}
                  </ul>
                </div>
              ) : (
                <></>
              )
            ) : (
              <LittleLoading />
            )}
          </div>

          {/* <div className="resume-item">
            <div className="resume-title-wrapper">
              <img
                src={pub_img}
                width={80}
                height={80}
                loading="lazy"
                alt="تالیفات"
              />
              <h2 className="resume-title">تالیفات</h2>
            </div>
            <ul className="resume-content-items">
              <li>مدرس کلاس های اینترنتی کاد</li>
              <li>مدرس کلاس های اینترنتی کاد</li>
              <li>مدرس کلاس های اینترنتی کاد</li>
              <li>مدرس کلاس های اینترنتی کاد</li>
            </ul>
          </div> */}
          {/* <div className="resume-item">
            <div className="resume-title-wrapper">
              <img
                src={exp_img}
                width={80}
                height={80}
                loading="lazy"
                alt="تحصیلات"
              />
              <h2 className="resume-title">تحصیلات</h2>
            </div>
            <ul className="resume-content-items">
              <li>مدرس کلاس های اینترنتی کاد</li>
              <li>مدرس کلاس های اینترنتی کاد</li>
              <li>مدرس کلاس های اینترنتی کاد</li>
              <li>مدرس کلاس های اینترنتی کاد</li>
            </ul>
          </div> */}
          {/* <div className="resume-item">
            <div className="resume-title-wrapper">
              <img
                src={qua_img}
                width={80}
                height={80}
                loading="lazy"
                alt="ویژگی های آموزشی"
              />
              <h2 className="resume-title">ویژگی های آموزشی</h2>
            </div>
            <ul className="resume-content-items">
              <li>مدرس کلاس های اینترنتی کاد</li>
              <li>مدرس کلاس های اینترنتی کاد</li>
              <li>مدرس کلاس های اینترنتی کاد</li>
              <li>مدرس کلاس های اینترنتی کاد</li>
            </ul>
          </div> */}
          {/* <div className="resume-item">
            <div className="resume-title-wrapper">
              <img
                src={ran_img}
                width={80}
                height={80}
                loading="lazy"
                alt="رتبه های برتر سال های گذشته"
              />
              <h2 className="resume-title">رتبه های برتر سال های گذشته</h2>
            </div>
            <ul className="resume-content-items">
              <li>مدرس کلاس های اینترنتی کاد</li>
              <li>مدرس کلاس های اینترنتی کاد</li>
              <li>مدرس کلاس های اینترنتی کاد</li>
              <li>مدرس کلاس های اینترنتی کاد</li>
            </ul>
          </div> */}
          {/* <div className="resume-item">
            <div className="resume-title-wrapper">
              <img
                src={tes_img}
                width={80}
                height={80}
                loading="lazy"
                alt="طراحی آزمون"
              />
              <h2 className="resume-title">طراحی آزمون</h2>
            </div>
            <ul className="resume-content-items">
              <li>مدرس کلاس های اینترنتی کاد</li>
              <li>مدرس کلاس های اینترنتی کاد</li>
              <li>مدرس کلاس های اینترنتی کاد</li>
              <li>مدرس کلاس های اینترنتی کاد</li>
            </ul>
          </div> */}
        </section>
        <section className="teacher-classes-wrapper">
          <h2 className="sectoin-title">کلاس های استاد</h2>
          <div className="classes-carousel-wrapper">
            <div className="classes-carousel-place">
              {teacher ? (
                fill_classes(teacher.kelases).map((k) => (
                  <div key={k.kelas_id} className="teachers-classe">
                    <img
                      src={k.image_link}
                      alt={k.kelas_title}
                      width={203}
                      height={203}
                      loading="lazy"
                    />
                    <h3 className="class-name">{k.kelas_title}</h3>
                    <span className="prices-wrapper">
                      <span className="price-label">قیمت :</span>
                      <span className="prices-place">
                        <span className="normal-price">
                          <span className="p-text">
                            {split_in_three(convert_to_persian(k.price))}
                          </span>
                          تومان
                        </span>
                        <span className="discounted-price">
                          <span className="p-text">
                            {split_in_three(
                              convert_to_persian(k.discounted_price)
                            )}
                          </span>
                          تومان
                        </span>
                      </span>
                    </span>
                    <span className="add-to-cart">افزودن به سبد خرید</span>
                    <span className="dore-label">سالیانه</span>
                  </div>
                ))
              ) : (
                <LittleLoading />
              )}
            </div>
            <span className="arrow-wrapper">
              <img
                src={arrow}
                alt="بعدی"
                width={15}
                height={26}
                loading="lazy"
              />
            </span>
          </div>
        </section>
        <section className="video-intros-wrapper">
          <div className="teacher-video-place">
            <h2 className="video-title">معرفی استاد</h2>
            <div className="video-need-div">
              {Object.keys({
                ...fill_sample_files().video.find(
                  (v) => v.file_type === "رزومه ویدیویی استاد"
                ),
              }).length !== 0 ? (
                <AparatVideo
                  src={
                    {
                      ...fill_sample_files().video.find(
                        (v) => v.file_type === "رزومه ویدیویی استاد"
                      ),
                    }.file_link
                  }
                />
              ) : (
                "موردی برای نمایش وجود ندارد"
              )}
            </div>
          </div>
          <div className="teacher-video-place">
            <h2 className="video-title">نمونه تدریس ها</h2>
            <div className="video-need-div">
              {[
                ...fill_sample_files().video.filter(
                  (v) => v.file_type === "نمونه تدریس"
                ),
              ].length !== 0
                ? [
                    ...fill_sample_files().video.filter(
                      (v) => v.file_type === "نمونه تدریس"
                    ),
                  ].map((v) => (
                    <AparatVideo key={v.file_id} src={v.file_link} />
                  ))
                : "موردی برای نمایش وجود ندارد"}
            </div>
          </div>
          <div className="teacher-video-place">
            <h2 className="video-title">درس های رایگان</h2>
            <div className="video-need-div">
              {[
                ...fill_sample_files().video.filter(
                  (v) => v.file_type === "نمونه تدریس"
                ),
              ].length !== 0
                ? [
                    ...fill_sample_files().video.filter(
                      (v) => v.file_type === "نمونه تدریس"
                    ),
                  ].map((v) => (
                    <AparatVideo key={v.file_id} src={v.file_link} />
                  ))
                : "موردی برای نمایش وجود ندارد"}
              {/* <AparatVideo src="https://www.aparat.com/video/video/embed/videohash/qIGT8/vt/frame" /> */}
            </div>
          </div>
        </section>
        <section className="files-section-wrapper">
          <div className="file-section-header">
            <h2 className="file-section-title">نمونه فایل ها</h2>
            <div className="sample-files-btns-wrapper">
              <span className="sample-file-btn active">جزوات</span>
              <span className="sample-file-btn">آزمون ها</span>
              <span className="sample-file-btn">تکالیف</span>
            </div>
          </div>
          <div className="files-places">
            <div className="file-row">
              <span className="row-item">1</span>
              <span className="row-item name-wrapper">فسفه و منطق</span>
              <span className="row-item">15 مهر 1402</span>
              <span className="row-item">فصل دوم</span>
              <span className="row-item">دانلود</span>
            </div>
            <div className="file-row">
              <span className="row-item">1</span>
              <span className="row-item name-wrapper">
                شهریار بهادری برای تست
              </span>
              <span className="row-item">15 مهر 1402</span>
              <span className="row-item">فصل دوم</span>
              <span className="row-item">دانلود</span>
            </div>
            <div className="file-row">
              <span className="row-item">1</span>
              <span className="row-item name-wrapper">فسفه و منطق</span>
              <span className="row-item">15 مهر 1402</span>
              <span className="row-item">فصل دوم</span>
              <span className="row-item">دانلود</span>
            </div>
          </div>
        </section>
        <section className="faq-section-wrapper">
          <h2 className="faq-section-title">سوالات متداول</h2>
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

export default R_SingleTeacher;
