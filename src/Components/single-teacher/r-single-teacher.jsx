import React, { useState, useContext, useEffect, useRef } from "react";
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
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import scrollToTop from "../functions/scroll";
import FAQ_new from "../redesign-faq/re-faq";

const R_SingleTeacher = () => {
  const { teachers, kelasses, doreha, sample_files, handle_cart, cart, user } =
    useContext(DataContext);
  const kelas_ref = useRef(false);
  const [file_type, set_file_type] = useState("jozve");
  const [kelas_carousel, set_kelas_carousel] = useState(0);
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
  const slug = decodeURIComponent(window.location.pathname.split("/")[2]);
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
  const teacher_kelasses =
    kelasses && teacher
      ? kelasses.filter((k) => teacher.kelases.includes(k.kelas_id))
      : false;
  const intro_video =
    sample_files && teacher
      ? sample_files.video_sample_files.find(
          (sf) =>
            teacher.sample_files.video_sample_files_ids.includes(sf.file_id) &&
            sf.file_type === "رزومه ویدیویی استاد"
        )
      : false;
  const nemone_tadris =
    sample_files && teacher
      ? sample_files.video_sample_files.filter(
          (sf) =>
            teacher.sample_files.video_sample_files_ids.includes(sf.file_id) &&
            sf.file_type === "نمونه تدریس"
        )
      : false;
  const free_course =
    sample_files && teacher
      ? sample_files.video_sample_files.filter(
          (sf) =>
            teacher.sample_files.video_sample_files_ids.includes(sf.file_id) &&
            sf.file_type === "رزومه ویدیویی استاد"
        )
      : false;
  const jozveha =
    sample_files && teacher
      ? sample_files.pdf_sample_files.filter(
          (f) =>
            teacher.sample_files.pdf_sample_files_ids.includes(f.file_id) &&
            f.file_type === "نمونه جزوه" &&
            !f.is_for_jalase
        )
      : false;
  const azmonha =
    sample_files && teacher
      ? sample_files.pdf_sample_files.filter(
          (f) =>
            teacher.sample_files.pdf_sample_files_ids.includes(f.file_id) &&
            f.file_type === "نمونه آزمون" &&
            !f.is_for_jalase
        )
      : false;
  const takalif =
    sample_files && teacher
      ? sample_files.pdf_sample_files.filter(
          (f) =>
            teacher.sample_files.pdf_sample_files_ids.includes(f.file_id) &&
            f.file_type === "نمونه تکلیف" &&
            !f.is_for_jalase
        )
      : false;
  const handle_kelas_carousel = () => {
    const childrens = [...kelas_ref.current.children];
    if (kelas_carousel !== fill_classes(teacher.kelases).length - 1) {
      // if (kelas_carousel !== 1000) {
      childrens.forEach((c) => {
        c.style.transform = `translateX(${(kelas_carousel + 1) * 347}px)`;
      });
      set_kelas_carousel(kelas_carousel + 1);
    } else {
      childrens.forEach((c) => {
        c.style.transform = `translateX(${0 * 347}px)`;
      });
      set_kelas_carousel(0);
    }
  };
  return (
    <>
      <Helmet>
        <title>کاد | {slug.replaceAll("-", " ")}</title>
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
              {slug.replaceAll("-", " ")}
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
        </section>
        <section className="teacher-classes-wrapper">
          <h2 className="sectoin-title">
            کلاس های {slug.replaceAll("-", " ")}
          </h2>
          <div className="classes-carousel-wrapper">
            <div className="classes-carousel-place" ref={kelas_ref}>
              {teacher && teacher_kelasses ? (
                teacher_kelasses.map((k) => (
                  <div key={k.kelas_id} className="teachers-classe">
                    <Link
                      onClick={scrollToTop}
                      to={`/r-class/${k.kelas_title_and_ostad_name.replaceAll(
                        " ",
                        "-"
                      )}`}
                    >
                      <img
                        src={k.image_link}
                        alt={k.kelas_title}
                        width={203}
                        height={203}
                        loading="lazy"
                      />
                    </Link>

                    <Link
                      onClick={scrollToTop}
                      to={`/r-class/${k.kelas_title_and_ostad_name.replaceAll(
                        " ",
                        "-"
                      )}`}
                      className="class-name"
                    >
                      {k.kelas_title}
                    </Link>
                    <span className="prices-wrapper">
                      <span className="price-label">قیمت :</span>
                      <span className="prices-place">
                        <span className="normal-price">
                          {k.discounted_price ? (
                            <>
                              <span className="p-text">
                                {split_in_three(convert_to_persian(k.price))}
                              </span>
                              تومان
                            </>
                          ) : (
                            <>
                              <span className="p-text">
                                {split_in_three(convert_to_persian(k.price))}
                              </span>
                              تومان
                            </>
                          )}
                        </span>
                        <span className="discounted-price">
                          {k.discounted_price ? (
                            <>
                              <span className="p-text">
                                {split_in_three(
                                  convert_to_persian(k.discounted_price)
                                )}
                              </span>
                              تومان
                            </>
                          ) : (
                            <></>
                          )}
                        </span>
                      </span>
                    </span>
                    {user ? (
                      cart ? (
                        <button
                          className="add-to-cart"
                          onClick={() => {
                            handle_cart(k);
                          }}
                        >
                          {cart.ids.includes(k.kelas_id)
                            ? "حذف از سبد خرید"
                            : "افزودن به سبد خرید"}
                        </button>
                      ) : (
                        <span className="add-to-cart">افزودن به سبد خرید</span>
                      )
                    ) : (
                      <Link
                        to="/Login"
                        className="add-to-cart"
                        onClick={scrollToTop}
                      >
                        افزودن به سبد خرید
                      </Link>
                    )}
                    {doreha ? (
                      doreha.find((d) => k.parent_dore_id === d.dore_id) ? (
                        <span className="dore-label">
                          {
                            doreha.find((d) => k.parent_dore_id === d.dore_id)
                              .dore_title
                          }
                        </span>
                      ) : (
                        ""
                      )
                    ) : (
                      <LittleLoading />
                    )}
                  </div>
                ))
              ) : (
                <LittleLoading />
              )}
            </div>
            {teacher ? (
              fill_classes(teacher.kelases).length > 3 ? (
                <button
                  className="arrow-wrapper"
                  onClick={handle_kelas_carousel}
                >
                  <img
                    src={arrow}
                    alt="بعدی"
                    width={15}
                    height={26}
                    loading="lazy"
                  />
                </button>
              ) : (
                <></>
              )
            ) : (
              <></>
            )}
          </div>
        </section>
        <section className="video-intros-wrapper">
          <div className="teacher-video-place">
            <h2 className="video-title">معرفی {slug.replaceAll("-", " ")}</h2>
            <div className="video-need-div">
              {intro_video ? (
                <AparatVideo src={intro_video.file_link} />
              ) : (
                "موردی برای نمایش وجود ندارد"
              )}
            </div>
          </div>
          <div className="teacher-video-place">
            <h2 className="video-title">
              نمونه تدریس های {slug.replaceAll("-", " ")}
            </h2>
            <div className="video-need-div">
              {nemone_tadris ? (
                nemone_tadris.length !== 0 ? (
                  nemone_tadris.map((v) => (
                    <AparatVideo key={v.file_id} src={v.file_link} />
                  ))
                ) : (
                  "موردی برای نمایش وجود ندارد"
                )
              ) : (
                <LittleLoading />
              )}
            </div>
          </div>
          <div className="teacher-video-place">
            <h2 className="video-title">
              درس های رایگان {slug.replaceAll("-", " ")}
            </h2>
            <div className="video-need-div">
              {free_course ? (
                free_course.length !== 0 ? (
                  free_course.map((v) => (
                    <AparatVideo key={v.file_id} src={v.file_link} />
                  ))
                ) : (
                  "موردی برای نمایش وجود ندارد"
                )
              ) : (
                <LittleLoading />
              )}
            </div>
          </div>
        </section>
        <section className="files-section-wrapper">
          <div className="file-section-header">
            <h2 className="file-section-title">نمونه فایل ها</h2>
            <div className="sample-files-btns-wrapper">
              <button
                onClick={() => {
                  set_file_type("jozve");
                }}
                className={
                  file_type === "jozve"
                    ? "sample-file-btn active"
                    : "sample-file-btn"
                }
              >
                جزوات
              </button>
              <button
                onClick={() => {
                  set_file_type("azmon");
                }}
                className={
                  file_type === "azmon"
                    ? "sample-file-btn active"
                    : "sample-file-btn"
                }
              >
                آزمون ها
              </button>
              <button
                onClick={() => {
                  set_file_type("taklif");
                }}
                className={
                  file_type === "taklif"
                    ? "sample-file-btn active"
                    : "sample-file-btn"
                }
              >
                تکالیف
              </button>
            </div>
          </div>
          <div className="files-places">
            {file_type === "jozve" ? (
              jozveha ? (
                jozveha.length !== 0 ? (
                  jozveha.map((f, i = 1) => (
                    <div className="file-row" key={f.file_id}>
                      <span className="row-item">{i++ + 1}</span>
                      <span className="row-item name-wrapper">{f.title}</span>
                      <span className="row-item">15 مهر 1402</span>
                      <span className="row-item">فصل دوم</span>
                      <a
                        target="_blank"
                        href={f.file_link}
                        className="row-item"
                      >
                        دانلود
                      </a>
                    </div>
                  ))
                ) : (
                  "موردی برای نمایش وجود ندارد"
                )
              ) : (
                <LittleLoading />
              )
            ) : (
              <></>
            )}
            {file_type === "taklif" ? (
              takalif ? (
                takalif.length !== 0 ? (
                  takalif.map((f, i = 1) => (
                    <div className="file-row" key={f.file_id}>
                      <span className="row-item">{i++ + 1}</span>
                      <span className="row-item name-wrapper">{f.title}</span>
                      <span className="row-item">15 مهر 1402</span>
                      <span className="row-item">فصل دوم</span>
                      <a
                        target="_blank"
                        href={f.file_link}
                        className="row-item"
                      >
                        دانلود
                      </a>
                    </div>
                  ))
                ) : (
                  "موردی برای نمایش وجود ندارد"
                )
              ) : (
                <LittleLoading />
              )
            ) : (
              <></>
            )}
            {file_type === "azmon" ? (
              azmonha ? (
                azmonha.length !== 0 ? (
                  azmonha.map((f, i = 1) => (
                    <div className="file-row" key={f.file_id}>
                      <span className="row-item">{i++ + 1}</span>
                      <span className="row-item name-wrapper">{f.title}</span>
                      <span className="row-item">15 مهر 1402</span>
                      <span className="row-item">فصل دوم</span>
                      <a
                        target="_blank"
                        href={f.file_link}
                        className="row-item"
                      >
                        دانلود
                      </a>
                    </div>
                  ))
                ) : (
                  "موردی برای نمایش وجود ندارد"
                )
              ) : (
                <LittleLoading />
              )
            ) : (
              <></>
            )}
          </div>
        </section>
        <FAQ_new faq={teacher ? teacher.FAQ : false} />
      </div>
    </>
  );
};

export default R_SingleTeacher;
