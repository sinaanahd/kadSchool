import React, { useContext, useState } from "react";
import { Helmet } from "react-helmet";
import { DataContext } from "../context/DataContext";
import LittleLoading from "../reuseables/little-loading";
import Kelas_item from "../kelas-item/kelas-item";
import Video from "./videos/video/video";

import arrow from "../../assets/images/single-class-assets/arrow-orange.webp";
import kelas_img from "../../assets/images/single-dore-assets/kelas-img.webp";
import SampleFiles from "./sample-files/sample-files";
import NewComments from "../new-comments/new-comments";
import FAQ_new from "../redesign-faq/re-faq";
import Teachers from "./teachers/teachers";
import VideosSection from "./videos/videos-section";
import WhyDore from "./why-dore/why-dore";
const SingleDore = () => {
  const { static_doreha, teachers, kelasses, sample_files } =
    useContext(DataContext);
  const slug_name = decodeURI(window.location.pathname.split("/")[2]);
  const fill_teachers = () => {
    const all_teachers = [];
    dore_kelasses.forEach((kelas) => {
      const teacher = teachers.find((t) =>
        kelas.teachers.includes(t.teacher_id)
      );
      if (teacher && !all_teachers.includes(teacher)) {
        all_teachers.push(teacher);
      }
    });
    return all_teachers;
  };
  const s_dore = static_doreha.find((d) => d.slug_name === slug_name) || false;
  const dore_kelasses =
    s_dore && kelasses
      ? kelasses.filter((k) => s_dore.kelases.includes(k.kelas_id))
      : false;
  const dore_teachers =
    s_dore && teachers && dore_kelasses ? fill_teachers() : false;
  const videos =
    sample_files && s_dore
      ? sample_files.video_sample_files.filter(
          (sv) => sv.dore_id === s_dore.dore_id
        )
      : false;
  return (
    <>
      <Helmet>
        <title>کاد | دوره {slug_name.replaceAll("-", " ")}</title>
        <meta name="keywords" content={slug_name.replaceAll("-", " ")} />
        <meta name="description" content={s_dore ? s_dore.descriptions : ""} />
      </Helmet>
      <div className="re-single-dore">
        <section className="dore-intro mm-width">
          <div className="img-time-wrapper">
            <span className="dore-img-wrapper">
              <img
                src={s_dore ? s_dore.image_link : ""}
                alt={slug_name.replaceAll("-", " ")}
                width={228}
                height={303}
                loading="eager"
              />
            </span>
            <span className="dore-start-date">
              <span className="start-title">تاریخ شروع: </span>
              <span className="start-value">
                {new Date(s_dore.dore_start_date).toLocaleDateString("fa-ir")}
              </span>
            </span>
          </div>
          <div className="dore-text-wrapper">
            <h1 className="title">دوره {slug_name.replaceAll("-", " ")}</h1>
            <p className="dore-desc">
              {s_dore ? s_dore.descriptions : <LittleLoading />}
            </p>
          </div>
        </section>
        <Teachers
          slug_name={slug_name.replaceAll("-", " ")}
          dore_teachers={dore_teachers}
        />
        <section className="dore-kelasses-section mm-width">
          <div className="section-title-wrapper">
            <img
              src={kelas_img}
              alt="کلاس های دوره"
              width={71}
              height={71}
              loading="lazy"
            />
            <h2 className="section-title">
              کلاس های دوره {slug_name.replaceAll("-", " ")}
            </h2>
          </div>
          <div className="all-dore-kelasses-wrapper">
            <div className="all-kelasses">
              {s_dore && kelasses ? (
                dore_kelasses.map((k) => <Kelas_item k={k} key={k.kelas_id} />)
              ) : (
                <LittleLoading />
              )}
            </div>
          </div>
        </section>
        <WhyDore
          slug_name={slug_name.replaceAll("-", " ")}
          reasons={s_dore ? s_dore.reasons_full : []}
        />
        <VideosSection
          slug_name={slug_name.replaceAll("-", " ")}
          videos={videos}
        />
        <SampleFiles dore={s_dore} slug_name={slug_name.replaceAll("-", " ")} />
        <NewComments />
        <FAQ_new />
      </div>
    </>
  );
};

export default SingleDore;
