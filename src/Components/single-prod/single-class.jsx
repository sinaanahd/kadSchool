import React, { useState, useContext, useRef } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { DataContext } from "../context/DataContext";

import banner from "../../assets/images/single-class-assets/purple-watercolor-galaxy-background_23-2149248308 1.png";
import arrow_img from "../../assets/images/single-class-assets/arrow-orange.webp";
import LittleLoading from "../reuseables/little-loading";
import scrollToTop from "../functions/scroll";
import Teacher_data from "./teacher-data/teacher-data";
import Dore_data from "./dore-data/dore-data";
import Files_data from "./files-data/files-data";
import Time_cart_data from "./time-cart/time-cart";
import FAQ_new from "../redesign-faq/re-faq";
import Kelas_item from "../kelas-item/kelas-item";
import NewComments from "../new-comments/new-comments";
const SingleClass = () => {
  const { teachers, kelasses, doreha, sample_files } = useContext(DataContext);
  const [similar_carousel, set_similar_carousel] = useState(0);
  const [other_carousel, set_other_carousel] = useState(0);
  const [mabhasi_carousel, set_mabhasi_carousel] = useState(0);
  const similar_ref = useRef(false);
  const other_ref = useRef(false);
  const mabhasi_ref = useRef(false);

  const page_slug = decodeURI(window.location.pathname.split("/")[3])
    .replaceAll("---", " 1 ")
    .replaceAll("-", " ")
    .replaceAll(" 1 ", " - ");

  const page_slug_2 = decodeURI(window.location.pathname.split("/")[3]);

  const check_arr_includes = (arr1, arr2) => {
    let is = false;
    arr1.forEach((item) => {
      if (arr2.includes(item)) is = true;
    });
    return is;
  };
  const kelas = kelasses
    ? kelasses.find(
        (k) =>
          k.kelas_title_and_ostad_name === page_slug ||
          k.slug_name === page_slug_2
      )
    : false;
  const teacher =
    teachers && kelas
      ? teachers.find((t) => kelas.teachers[0] === t.teacher_id)
      : false;
  const kelas_teachers = kelas
    ? teachers
      ? teachers.filter((t) => kelas.teachers.includes(t.teacher_id))
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
  const mabhasi_kelasses = kelas
    ? kelasses.filter(
        (k) => kelas.course === k.course && k.parent_dore_id === 9
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
  const handle_mabhasi_carousel = () => {
    const childrens = [...mabhasi_ref.current.children];
    if (mabhasi_carousel !== mabhasi_kelasses.length - 1) {
      childrens.forEach((c) => {
        c.style.transform = `translateX(${(mabhasi_carousel + 1) * 378}px)`;
      });
      set_mabhasi_carousel(mabhasi_carousel + 1);
    } else {
      childrens.forEach((c) => {
        c.style.transform = `translateX(${0 * 378}px)`;
      });
      set_mabhasi_carousel(0);
    }
  };
  return (
    <>
      <Helmet>
        <title>
          کاد |{" "}
          {kelas
            ? kelas.kelas_title
            : decodeURI(window.location.pathname.split("/")[3]).replaceAll(
                "-",
                " "
              )}
        </title>
        <meta
          name="keywords"
          content={`${
            kelas
              ? kelas.kelas_title_and_ostad_name + "," + kelas.kelas_title
              : ""
          },${
            kelas_teachers
              ? kelas_teachers.map((t) => t.fullname.replace("استاد", ""))
              : ""
          }`}
        />
        <meta name="description" content={kelas ? kelas.descriptions : ""} />
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
            <div className="teachers-wrapper">
              {kelas_teachers ? (
                kelas_teachers.map((teacher, i) => (
                  <h2 className="info-teacher-name" key={teacher.teacher_id}>
                    <Link
                      onClick={scrollToTop}
                      to={"/Teachers/" + teacher.slug_name}
                    >
                      {teacher.fullname}
                    </Link>
                    {i !== kelas_teachers.length - 1 ? " -" : ""}
                  </h2>
                ))
              ) : (
                <LittleLoading />
              )}
            </div>

            <p className="info-desc-text">
              {kelas ? kelas.descriptions : <LittleLoading />}
            </p>
          </div>
        </section>
        <div className="additional-datas-wrapper mm-width">
          <div className="right-col">
            {kelas_teachers ? (
              kelas_teachers.map((teacher) => (
                <Teacher_data teacher={teacher} key={teacher.teacher_id} />
              ))
            ) : (
              <LittleLoading />
            )}

            <Dore_data dore={dore} />
          </div>
          <div className="left-col">
            <Files_data
              jozveha={jozveha}
              taklifha={taklifha}
              azmonha={azmonha}
            />
            <Time_cart_data kelas={kelas} />
            {/* <section className="banners-place">
              <img src={banner} alt="" />
            </section> */}
          </div>
        </div>
        <section className="classes-wrapper-section mm-width">
          <h2 className="class-section-title">
            کلاس های مشابه {kelas ? kelas.kelas_title : <LittleLoading />}
          </h2>
          <div className="classes-carousel">
            <div className="classes-place" ref={similar_ref}>
              {similar_kelasses ? (
                similar_kelasses.map((k) => (
                  <Kelas_item k={k} key={k.kelas_id} />
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
          </div>
        </section>
        {other_teachers_kelasses ? (
          other_teachers_kelasses.length !== 0 ? (
            <section className="classes-wrapper-section mm-width">
              <h2 className="class-section-title">
                کلاس های دیگر {teacher ? teacher.fullname : <LittleLoading />}
              </h2>
              <div className="classes-carousel">
                <div className="classes-place" ref={other_ref}>
                  {other_teachers_kelasses.map((k) => (
                    <Kelas_item key={k.kelas_id} k={k} />
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
          {mabhasi_kelasses ? (
            mabhasi_kelasses.length !== 0 ? (
              <section className="classes-wrapper-section mm-width">
                <h2 className="class-section-title">
                  کلاس های مبحثی از{" "}
                  {kelas ? kelas.kelas_title.split("-")[0] : <LittleLoading />}
                </h2>
                <div className="classes-carousel">
                  <div className="classes-place" ref={mabhasi_ref}>
                    {mabhasi_kelasses.map((k) => (
                      <Kelas_item key={k.kelas_id} k={k} />
                    ))}
                  </div>
                  {mabhasi_kelasses.length > 2 ? (
                    <button
                      className="arrow-next"
                      onClick={handle_mabhasi_carousel}
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
        </section>
        <NewComments />
        <FAQ_new faq={kelas ? kelas.FAQ : []} />
      </div>
    </>
  );
};

export default SingleClass;
