import React, { useContext, useEffect, useRef, useState } from "react";
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
  const profits_ref = useRef(false);
  const [active_profit, set_active_profit] = useState(0);
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
  const handle_profit_active_change = () => {
    const all_profits = [...profits_ref.current.children];
    const active =
      active_profit === all_profits.length - 1 ? 0 : active_profit + 1;
    all_profits.forEach((p) => {
      if (all_profits[active] === p) {
        p.classList.add("active");
      } else {
        p.classList.remove("active");
      }
    });
    set_active_profit(active);
  };
  useEffect(() => {
    setTimeout(() => {
      const page_check =
        decodeURI(window.location.pathname) === "/نکته-و-تست-انسانی";
      console.log(page_check);
      if (page_check) {
        handle_profit_active_change();
      }
    }, 3000);
  }, [active_profit]);
  return (
    <>
      <Helmet>
        <title>کاد | نکته و تست انسانی | کمپین نکته و تست</title>
        <meta
          name="keywords"
          content="نکته و تست, نکته و تست انسانی, نکته و تست کاد, دوره نکته و تست, نکته و تست کنکور, کنکور انسانی"
        />
        <meta
          name="description"
          content="دوره نکته  و تست انسانی دوره ای برای آموزش دقیق و پایه ای درس های اختصاصی کنکور انسانی برای تمامی سطوح دانش آموزان است"
        />
      </Helmet>
      <div className="not-landing-wrapper mm-width">
        <section className="landing-intro-wrapper">
          <div className="intro-texts">
            <h1 className="page-title">نکته و تست انسانی</h1>
            <p className="intro-para-text">
              دوره نکته و تست انسانی، دوره ای مناسب برای یادگیری، مرور و جمع
              بندی درس های اختصاصی رشته انسانی است. در این دوره با وجود اساتید
              به نام و برتر مثل دکتر هامون سبطی، نیما جواهری،حمید سودیان،مهران
              ترکمان و آروین حسینی میتونید با خیالی راحت تست زنی هر درس رو به
              بهترین شکل یاد بگیرید. اساتید این کلاس تمامی سطوح دانش آموزان را
              به کمک آموزش از پایه برای تست های گزینشی معتبر مثل کنکور،
              قلمچی،ماز و ... آماده میکنند.
              <br />
              نگران درس های اختصاصی انسانیت نباش چون کاد برات بهترین کلاس ها رو
              آماده کرده.
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

        <section className="dore-kelases-section">
          <h2 className="section-title" ref={box_ref}>
            کلاس های دوره نکته و تست انسانی
          </h2>
          <div className="all-dore-kelasses-wrapper">
            <LandingActiveKelas kelas_id={active_kelas} />
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
        <section className="dore-prophits-section">
          <h2 className="section-title">مزایا دوره نکته و تست انسانی</h2>
          <div className="all-profits-wrapper" ref={profits_ref}>
            <div className="profit-wrapper active">
              <h3 className="profit-title">آموزش نکته های تست زنی</h3>
              <p className="profit-text">
                اساتید کلاس های نکته و تست انسانی براتون نکات اصولی تست زدن و
                آموزش صحیح این درس ها رو آماده کردن تا بهترین نتایج رو بتونید
                بگیرید.
              </p>
            </div>
            <div className="profit-wrapper">
              <h3 className="profit-title">جمع بندی،مرور،تست</h3>
              <p className="profit-text">
                جمع بندی،مرور،تست سه نکته اصلی برای یادگیری هرچه بهتر یک درس قبل
                از کنکور و آزمون های آزمایشی است. کلاس های دوره نکته و تست
                انسانی به شما کمک میکنند که علاوه بر یادگیری به این موارد به
                بهترین شکل برسید
              </p>
            </div>
            <div className="profit-wrapper">
              <h3 className="profit-title">آمادگی برای آزمون</h3>
              <p className="profit-text">
                همونطور که از اسم نکته و تست انسانی مشخص و واضحه قراره به شما
                آمادگی هرچه بیشتر برای آزمون ها رو بدیم. اساتید این دوره شمارو
                برای بهترین نتایج آماده میکنند تا با خیالی راحت بتونید عالی ترین
                نتایج رو بدست بیارید.
              </p>
            </div>
            <div className="profit-wrapper">
              <h3 className="profit-title">مناسب برای تمامی دانش آموزان</h3>
              <p className="profit-text">
                نکته و تست انسانی فقط برای دانش آموزان قوی نیست بلکه حتی اگه سطح
                بالای درسی هم ندارید میتونید مطالب رو از پایه یادبگیرید و برای
                آزمون ها آماده باشید..
              </p>
            </div>
            {/* <div className="profit-wrapper">
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
            </div> */}
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
        <section className="special-discount-section reverse-section">
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
