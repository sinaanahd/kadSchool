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

const NOT_tajrobi = () => {
  const { sample_files } = useContext(DataContext);
  const box_ref = useRef(null);
  const profits_ref = useRef(false);
  const [active_profit, set_active_profit] = useState(0);
  const { kelasses } = useContext(DataContext);
  const kelas_ids = [51, 52, 54];
  const dore_kelasses = kelasses
    ? kelasses.filter((k) => kelas_ids.includes(k.kelas_id))
    : false;
  const [active_kelas, set_active_kelas] = useState(51);
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
        decodeURI(window.location.pathname) === "/نکته-و-تست-تجربی";
      if (page_check) {
        handle_profit_active_change();
      }
    }, 3000);
  }, [active_profit]);
  return (
    <>
      <Helmet>
        <title>کاد | نکته و تست تجربی | کمپین نکته و تست</title>
        <meta
          name="keywords"
          content="نکته و تست, نکته و تست تجربی, نکته و تست کاد, دوره نکته و تست, نکته و تست کنکور, کنکور تجربی"
        />
        <meta
          name="description"
          content="دوره نکته و تست تجربی، دوره ای مناسب برای جمع بندی دروس اختصاصی رشته تجربی است. این دوره برای تمامی سطح های دانش آموزان کاملا مناسب است و فرصت خوبی برای بدست آوردن بهترین نتایج است"
        />
      </Helmet>
      <div className="not-landing-wrapper mm-width">
        <section className="landing-intro-wrapper">
          <div className="intro-texts">
            <h1 className="page-title">نکته و تست تجربی</h1>
            <p className="intro-para-text">
              دوره نکته و تست تجربی، دوره ای مناسب برای جمع بندی دروس اختصاصی
              رشته تجربی است. این دوره برای تمامی سطح های دانش آموزان کاملا
              مناسب است و فرصت خوبی برای بدست آوردن بهترین نتایج است. دوره نکته
              و تست تجربی تنها به کمک دانش آموزان قوی فکر نمیکنه. تمامی مباحث از
              پایه و توضیح داده میشه که بچه های متوسط و ضعیف بتونن سریع مطالب رو
              متوجه بشن و برای بچه های قوی مروری باشه برای جمع بندی این درس ها.
              هر هفته تکلیف داریم و هر جلسه کلی تست آموزشی مطابق با منابع امتحان
              های آموزشی اصلی داریم.
            </p>
          </div>
          <div className="intro-img-wrapper">
            <img
              src={intro_img}
              alt="نکته و تست تجربی"
              loading="lazy"
              width={400}
              height={317}
            />
          </div>
        </section>
        <section className="dore-kelases-section">
          <h2 className="section-title" ref={box_ref}>
            کلاس های دوره نکته و تست تجربی
          </h2>
          <div className="all-dore-kelasses-wrapper">
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
        <section className="dore-prophits-section">
          <h2 className="section-title">مزایا دوره نکته و تست تجربی</h2>
          <div className="all-profits-wrapper" ref={profits_ref}>
            <div className="profit-wrapper active">
              <h3 className="profit-title">مناسب تمامی دانش آموزان</h3>
              <p className="profit-text">
                این دوره فقط برای دانش آموزان ضعیف یا قوی نیست و همه سطح دانش
                آموز میتونن درس های اختصاصی رو یاد بگیرن و با خیال راحت به دوره
                و جمع بندی برسن
              </p>
            </div>
            <div className="profit-wrapper">
              <h3 className="profit-title">تکلیف و تمرین</h3>
              <p className="profit-text">
                تمامی کلاس های این دوره با خودش تکالیف و تمرین داره که بعد از حل
                تست تو کلاس ها به راحتی بتونین مطالب رو تمرین کنید و راحت تر به
                یادگیری و دوره کردن برسید.
              </p>
            </div>
            <div className="profit-wrapper">
              <h3 className="profit-title">رفع اشکال سر کلاس</h3>
              <p className="profit-text">
                تو کلاس های نکته و تست تجربی شما خیلی راحت میتونید سر کلاس
                سوالاتتون رو بپرسید و رفع اشکال کنید که مشکلی براتون دیگه باقی
                نمونه.
              </p>
            </div>
            <div className="profit-wrapper">
              <h3 className="profit-title">مطابق با آزمون آزمایشی</h3>
              <p className="profit-text">
                این کلاس ها کاملا مطابق آزمون های آزمایشی و برنامه راهبردی درسی
                شماست. شما بعد از یادگیری و تمرین کاملا برای هر نوع آزمون
                آزمایشی آماده هستید و بهترین نتایج رو میتونید بگیرید.
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
              <a href="tel:+982166950624">
                <bdi>۰۲۱ - ۶۶۹۵۰۶۲۴</bdi>
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
              <a href="tel:+982162999110">
                <bdi>۰۲۱ - ۶۲۹۹۹۱۱۰</bdi>
              </a>
            </p>
          </div>
        </section>
        <section className="all-sample-videos-section">
          <h2 className="section-title">
            نمونه تدرس های دوره نکته و تست تجربی
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

export default NOT_tajrobi;
