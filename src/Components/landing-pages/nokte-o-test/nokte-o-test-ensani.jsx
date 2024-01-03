import React, { useContext, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import LandingKelas from "./landing-kelas/landing-kelas";
import LandingActiveKelas from "./landing-actice-kelas.jsx/landing-active-kelas";
import intro_img from "../../../assets/images/landings/nokte-o-test/vis-nokte-1-1.webp";
import special_img from "../../../assets/images/landings/nokte-o-test/landing-image.webp";
import call_img from "../../../assets/images/landings/nokte-o-test/landing-image-2.webp";
import AparatVideo from "../../video/aparat-video";
import { DataContext } from "../../context/DataContext";
import LittleLoading from "../../reuseables/little-loading";
const NOT_ensani = () => {
  const { sample_files } = useContext(DataContext);
  const box_ref = useRef(null);
  const { kelasses } = useContext(DataContext);
  const kelas_ids = [57, 59, 58, 56, 55];
  const dore_kelasses = kelasses
    ? kelasses.filter((k) => kelas_ids.includes(k.kelas_id))
    : false;
  const [active_kelas, set_active_kelas] = useState(57);
  const handle_active_kelas = (id) => {
    set_active_kelas(id);
  };
  const videos = sample_files
    ? sample_files.video_sample_files.filter((v) =>
        kelas_ids.includes(v.kelas_id)
      )
    : false;
  return (
    <>
      <Helmet>
        <title>کاد | نکته و تست انسانی | کمپین نکته و تست</title>
        <meta
          name="keywords"
          content="نکته و تست, نکته و تست انسانی, نکته و تست کاد, دوره نکته و تست, نکته و تست کنکور, کنکور انسانی"
        />
      </Helmet>
      <div className="not-landing-wrapper mm-width">
        <section className="landing-intro-wrapper">
          <div className="intro-texts">
            <h1 className="page-title">نکته و تست انسانی</h1>
            <p className="intro-para-text">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
              نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
              کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان
            </p>
          </div>
          <div className="intro-img-wrapper">
            <img
              src={intro_img}
              alt="نکته و تست انسانی"
              loading="lazy"
              width={400}
              height={317}
            />
          </div>
        </section>
        <section className="dore-prophits-section">
          <h2 className="section-title">مزایا دوره نکته و تست انسانی</h2>
          <div className="all-profits-wrapper">
            <div className="profit-wrapper active">
              <h3 className="profit-title">لورم ایپسوم متن ساختگی</h3>
              <p className="profit-text">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است
              </p>
            </div>
            <div className="profit-wrapper">
              <h3 className="profit-title">لورم ایپسوم متن ساختگی</h3>
              <p className="profit-text">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است
              </p>
            </div>
            <div className="profit-wrapper">
              <h3 className="profit-title">لورم ایپسوم متن ساختگی</h3>
              <p className="profit-text">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است
              </p>
            </div>
            <div className="profit-wrapper">
              <h3 className="profit-title">لورم ایپسوم متن ساختگی</h3>
              <p className="profit-text">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است
              </p>
            </div>
            <div className="profit-wrapper">
              <h3 className="profit-title">لورم ایپسوم متن ساختگی</h3>
              <p className="profit-text">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است
              </p>
            </div>
            <div className="profit-wrapper">
              <h3 className="profit-title">لورم ایپسوم متن ساختگی</h3>
              <p className="profit-text">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است
              </p>
            </div>
            <div className="profit-wrapper">
              <h3 className="profit-title">لورم ایپسوم متن ساختگی</h3>
              <p className="profit-text">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است
              </p>
            </div>
            <div className="profit-wrapper">
              <h3 className="profit-title">لورم ایپسوم متن ساختگی</h3>
              <p className="profit-text">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است
              </p>
            </div>
          </div>
        </section>
        <section className="dore-kelases-section">
          <h2 className="section-title">کلاس های دوره نکته و تست انسانی</h2>
          <div className="all-dore-kelasses-wrapper" ref={box_ref}>
            <LandingActiveKelas kelas_id={active_kelas} refrence={box_ref} />
            <div className="other-class-col">
              {dore_kelasses ? (
                dore_kelasses.map((k) => (
                  <LandingKelas
                    key={k.kelas_id}
                    kelas={k}
                    handle_active_kelas={handle_active_kelas}
                    box_ref={box_ref}
                  />
                ))
              ) : (
                <LittleLoading />
              )}
              {/* <LandingKelas />
              <LandingKelas />
              <LandingKelas />
              <LandingKelas /> */}
            </div>
          </div>
        </section>
        <section className="special-discount-section">
          <div className="special-text-wrapper">
            <h2 className="section-title">تخفیف ویژه دوره نکته و تست</h2>
            <p className="special-part-text">
              کاد براتون یه پیشنهاد ویژه داره ! شما میتونید با تنها یک تماس
              علاوه بر هدیه‌ای که هر کلاس داره میتونی با خرید چند کلاس کلی تخفیف
              بگیری!
              <br />
              فقط کافیه با این شماره تماس بگیری :{"   "}
              <a href="tel:+98203912312938">
                <bdi>۰۲۱ - ۱۱۲۲۳۳۴۴</bdi>
              </a>
            </p>
          </div>
          <div className="special-img-wrapper">
            <img
              src={special_img}
              width={351}
              height={294}
              alt="تخفیف ویژه دوره"
              loading="lazy"
            />
          </div>
        </section>
        <section className="special-discount-section">
          <div className="special-img-wrapper">
            <img
              src={call_img}
              width={400}
              height={287}
              alt="پشتیبانی"
              loading="lazy"
            />
          </div>
          <div className="special-text-wrapper">
            <h2 className="section-title">پشتیبانی تا شب امتحان</h2>
            <p className="special-part-text">
              کاد پشتیبانی شمارو وظیفه خودش میدونه. کافیه یه تماس بگیری و
              پشتیبان مخصوص خودت تا شب امتحان حواسش بهت باشه.
              <br />
              نگران این نباش که قراره تنها بمونی توی این مسیر!
              <br />
              فقط کافیه با این شماره تماس بگیری :{"   "}
              <a href="tel:+98203912312938">
                <bdi>۰۲۱ - ۱۱۲۲۳۳۴۴</bdi>
              </a>
            </p>
          </div>
        </section>
        <section className="all-sample-videos-section">
          <h2 className="section-title">
            نمونه تدرس های دوره نکته و تست انسانی
          </h2>
          <div className="all-sample-videos-wrapper">
            {videos ? (
              videos.map((v) => (
                <div key={v.file_id} className="sample-video-wrapper">
                  <div className="needed-div-aparat-video-wrapper">
                    <AparatVideo src={v.file_link} />
                  </div>
                  <h3 className="video-title">{v.title}</h3>
                </div>
              ))
            ) : (
              <LittleLoading />
            )}
          </div>
        </section>
      </div>
    </>
  );
};

export default NOT_ensani;
