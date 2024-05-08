import React, { useEffect, useState, useContext } from "react";
import { Helmet } from "react-helmet";
import { DataContext } from "../context/DataContext";

import ShopIntro from "./intro/shop-intro";
import ShopBanners from "./banners/shop-banners";
import CatKelasses from "./cat-kelas-ids/cat-kelas-ids";
import AllProds from "./all-prods/all-prods";
import Navigate_to_specials from "../navigate-to-specilas/navigate-to-specials";
const NewShop = () => {
  const {
    kelasses,
    get_kelasses,
    static_doreha,
    ref_teachers,
    courses,
    subjects,
    years,
    banners,
  } = useContext(DataContext);
  useEffect(() => {
    get_kelasses();
  }, []);
  const slug = decodeURIComponent(window.location.pathname).split("/");
  let dore = false;
  let subject = false;
  let year = false;
  if (slug[2] === "دوره") {
    dore = static_doreha.find(
      (d) => d.dore_title === slug[3].replaceAll("-", " ")
    );
  } else if (slug[2] === "رشته") {
    subject = subjects.find((s) => s.name === slug[3]);
  } else if (slug[2] === "پایه") {
    year = years.find((s) => s.name === slug[3]);
  }
  const page_contents = [
    {
      id: 1,
      title: "فروشگاه | تمامی کلاس ها",
      one_look: "منتخب کلاس های کاد",
      seo: {
        keywords:
          "فروشگاه کاد, کلاس های کاد, کاد کلاس کنکور, کلاس کنکور, کلاس دوزادهم, کلاس کاد, خرید کلاس کنکور, خرید کلاس",
        desc: "اینجا میتونی بهترین کلاس های آنلاین رو فقط با چندتا کلیک داشته باشی. اگه قصدت خرید کلاس کنکور یا هر پایه دیگه ای هست اینجا کلی کلاس خوب و با کیفیت  بهترین و باتجربه ترین اساتید کنکور برای شما آماده است. به کلاس های آنلاین کاد سر بزن اگه میخوای بهترین نتایج کنکور مال تو باشه. کاد با کلاس های کنکور و متوسطه دوم اینجاست که شما بهترین نتیجه رو بگیرید",
      },

      desc_text: [
        "به فروشگاه کاد خوش آمدید. اینجا میتونی بهترین کلاس های آنلاین رو فقط با چندتا کلیک داشته باشی. اگه قصدت خرید کلاس کنکور یا هر پایه دیگه ای هست اینجا کلی کلاس خوب و با کیفیت  بهترین و باتجربه ترین اساتید کنکور برای شما آماده است. به کلاس های آنلاین کاد سر بزن اگه میخوای بهترین نتایج کنکور مال تو باشه. کاد با کلاس های کنکور و متوسطه دوم اینجاست که شما بهترین نتیجه رو بگیرید. پس حتما با ما همراه باش !",
      ],
      specials: [
        {
          id: 1,
          title: "جدید ترین",
          text: "کاد همیشه برای شما دانش آموزان عزیز کنکوری و پایه متوسط دوم کلاس  های جدیدی رو آماده میکنه تا مبحثی یاد نگرفته باقی نمونه. کاد کلی کلاس جدید داره تا شما رو تا یک قدمی کنکور و امتحانات آماده کنه.",
          url: "type1",
        },
        {
          id: 2,
          title: "پرفروش ترین",
          text: "این کلاس ها پرفروش ترین کلاس های امسال کاد بوده که به کلی دانش آموز کادی کمک کرده و براشون نتیجه های خوب به ارمغان آورده. میخوای تو هم یکی از اونا باشی ؟ پس همین الان ثبت نام کن.",
          url: "type2",
        },
        {
          id: 3,
          title: "تخفیف هفته",
          text: "کاد برای شما همیشه تخفیف داره که یه وقت از کلاسی جا نمونید و بتونید با مناسب ترین قیمت این کلاس های رو داشته باشید. حواست به این بخش باشه که برات همیشه کلی تخفیف خاص آماده کردیم. ",
          url: "type3",
        },
      ],
      disable_filter: "none",
      banners_name: "store_banners",
    },
    {
      id: 2,
      title: "کلاس های امتحان نهایی دهم | تمامی کلاس های امتحان نهایی دهم",
      one_look: "منتخب امتحان نهایی دهم",
      seo: {
        keywords:
          "امتحان نهایی دهم, نهایی دهم, کلاس امتحان نهایی, دین و زندگی دهم, زیست دهم, عربی دهم, ادبیات دهم, دین و زندگی دهم, ریاضی دهم",
        desc: "با کلاس های امتحان نهایی دهم کاد میتونی آمادگی ۱۰۰ درصدی داشته باشی و با خیال راحت بری سر جلسه امتحان. کاد همیشه هواتو داره و خیالت از بابت امتحاناتت راحت باشه.",
      },

      desc_text: [
        "با کلاس های امتحان نهایی دهم کاد میتونی آمادگی ۱۰۰ درصدی داشته باشی و با خیال راحت بری سر جلسه امتحان. کاد همیشه هواتو داره و خیالت از بابت امتحاناتت راحت باشه.",
      ],
      specials: [],
      disable_filter: "none",
      banners_name: false,
    },
    {
      id: 3,
      title:
        "کلاس های امتحان نهایی یازدهم | تمامی کلاس های امتحان نهایی یازدهم",
      one_look: "منتخب امتحان نهایی یازدهم",
      seo: {
        keywords:
          "امتحان نهایی یازدهم, نهایی یازدهم, زیست یازدهم, عربی یازدهم, دین و زندگی یازدهم, ادبیات یازدهم, کارگاه دستور زبان فارسی, ریاضی یازدهم انسانی",
        desc: "با کلاس های امتحان نهایی یازدهم کاد میتونی آمادگی ۱۰۰ درصدی داشته باشی و با خیال راحت بری سر جلسه امتحان. کاد همیشه هواتو داره و خیالت از بابت امتحاناتت راحت باشه.",
      },

      desc_text: [
        "با کلاس های امتحان نهایی یازدهم کاد میتونی آمادگی ۱۰۰ درصدی داشته باشی و با خیال راحت بری سر جلسه امتحان. کاد همیشه هواتو داره و خیالت از بابت امتحاناتت راحت باشه.",
      ],
      specials: [],
      disable_filter: "none",
      banners_name: false,
    },
    {
      id: 4,
      title:
        "کلاس های امتحان نهایی دوازدهم | تمامی کلاس های امتحان نهایی دوازدهم",
      one_look: "منتخب امتحان نهایی دوزادهم",
      seo: {
        keywords:
          "امتحان نهایی دوازدهم, ریاضی دوازدهم, عربی دوزادهم, زبان دوازدهم, ادبیات دوازدهم, کارگاه دستور زبان, زیست دوازدهم, شیمی دوازدهم",
        desc: "با کلاس های امتحان نهایی دوازدهم کاد میتونی آمادگی ۱۰۰ درصدی داشته باشی و با خیال راحت بری سر جلسه امتحان. کاد همیشه هواتو داره و خیالت از بابت امتحاناتت راحت باشه.",
      },

      desc_text: [
        "با کلاس های امتحان نهایی دوازدهم کاد میتونی آمادگی ۱۰۰ درصدی داشته باشی و با خیال راحت بری سر جلسه امتحان. کاد همیشه هواتو داره و خیالت از بابت امتحاناتت راحت باشه.",
      ],
      specials: [],
      disable_filter: "none",
      banners_name: false,
    },
    {
      id: 5,
      title:
        " کلاس های نکته و تست کنکور اختصاصی | تمامی کلاس های نکته و تست کنکور اختصاصی",
      one_look: "منتخب امتحان نهایی دوزادهم",
      seo: {
        keywords:
          "امتحان نهایی دوازدهم, ریاضی دوازدهم, عربی دوزادهم, زبان دوازدهم, ادبیات دوازدهم, کارگاه دستور زبان, زیست دوازدهم, شیمی دوازدهم",
        desc: "با کلاس های امتحان نهایی دوازدهم کاد میتونی آمادگی ۱۰۰ درصدی داشته باشی و با خیال راحت بری سر جلسه امتحان. کاد همیشه هواتو داره و خیالت از بابت امتحاناتت راحت باشه.",
      },

      desc_text: [
        "با کلاس های امتحان نهایی دوازدهم کاد میتونی آمادگی ۱۰۰ درصدی داشته باشی و با خیال راحت بری سر جلسه امتحان. کاد همیشه هواتو داره و خیالت از بابت امتحاناتت راحت باشه.",
      ],
      specials: [],
      disable_filter: "none",
      banners_name: false,
    },
    {
      id: 6,
      title: "کلاس های آفلاین | تمامی کلاس های آفلاین",
      one_look: "منتخب امتحان نهایی دوزادهم",
      seo: {
        keywords:
          "امتحان نهایی دوازدهم, ریاضی دوازدهم, عربی دوزادهم, زبان دوازدهم, ادبیات دوازدهم, کارگاه دستور زبان, زیست دوازدهم, شیمی دوازدهم",
        desc: "اگه وقت  نداری که سر کلاس حاضر باشی و برنامه درسیت خیلی شلوغه بهترین پیشنهاد برات کلاس های آفلاین کاده که بدون هزینه اینترنت میتونی این کلاس ها رو برای همیشه داشته باشی.",
      },

      desc_text: [
        "اگه وقت  نداری که سر کلاس حاضر باشی و برنامه درسیت خیلی شلوغه بهترین پیشنهاد برات کلاس های آفلاین کاده که بدون هزینه اینترنت میتونی این کلاس ها رو برای همیشه داشته باشی.",
      ],
      specials: [],
      disable_filter: "none",
      banners_name: false,
    },
    {
      id: 7,
      title: `کلاس های دوره ${
        slug[3] ? slug[3].replaceAll("-", " ") : ""
      } | تمامی کلاس های دوره ${slug[3] ? slug[3].replaceAll("-", " ") : ""}`,
      one_look: "منتخب امتحان نهایی دوزادهم",
      seo: {
        keywords: dore ? dore.seo_keywords : "",
        desc: dore ? dore.seo_description : "",
      },
      desc_text: [dore.descriptions],
      specials: [],
      disable_filter: "dore",
      banners_name: false,
    },
    {
      id: 8,
      title: `کلاس های رشته ${
        slug[3] ? slug[3].replaceAll("-", " ") : ""
      } | تمامی کلاس های رشته ${slug[3] ? slug[3].replaceAll("-", " ") : ""}`,
      one_look: "منتخب امتحان نهایی دوزادهم",
      seo: {
        keywords: subject ? subject.seo_keywords : "",
        desc: subject ? subject.seo_description : "",
      },
      desc_text: [subject.descriptions],
      specials: [],
      disable_filter: "subject",
      banners_name: false,
    },
    {
      id: 9,
      title: `کلاس های پایه ${
        slug[3] ? slug[3].replaceAll("-", " ") : ""
      } | تمامی کلاس های پایه ${slug[3] ? slug[3].replaceAll("-", " ") : ""}`,
      one_look: "منتخب امتحان نهایی دوزادهم",
      seo: {
        keywords: year ? year.seo_keywords : "",
        desc: year ? year.seo_description : "",
      },
      desc_text: [year.descriptions],
      specials: [],
      disable_filter: "year",
      banners_name: false,
    },
    {
      id: 10,
      title: "کلاس های اورژانسی کاد | تمامی کلاس های اورژانسی کاد",
      one_look: "منتخب کلاس های اورژانسی",
      seo: {
        keywords:
          "کلاس‌های اورژانسی, اورژانسی کاد, دم امتحان, کلاس های اورژانسی, کلاس های اورژانسی دم امتحان, آمادگی امتحان",
        desc: "فکر این نباش که دیر شده! کلاس‌های اورژانسی کاد برای شما این فرصت رو فراهم کرده که خیلی سریع و اورژانسی تا دیر نشده به درک درستی از مفاهیم و به آمادگی کامل برسی.",
      },

      desc_text: [
        "فکر این نباش که دیر شده! کلاس‌های اورژانسی کاد برای شما این فرصت رو فراهم کرده که خیلی سریع و اورژانسی تا دیر نشده به درک درستی از مفاهیم و به آمادگی کامل برسی.",
      ],
      specials: [],
      disable_filter: "none",
      banners_name: false,
    },
  ];
  let page_content = "";
  let option = false;
  if (slug.length === 3) {
    option = slug[2];
  } else if (slug.length === 2) {
    option = "";
  } else if (slug.length === 4) {
    option = slug[2];
  }
  switch (option) {
    case "":
      page_content = page_contents[0];
      break;
    case "امتحان-نهایی-دهم":
      page_content = page_contents[1];
      break;
    case "امتحان-نهایی-یازدهم":
      page_content = page_contents[2];
      break;
    case "امتحان-نهایی-دوازدهم":
      page_content = page_contents[3];
      break;
    case "نکته-و-تست-کنکور-اختصاصی":
      page_content = page_contents[4];
      break;
    case "کلاس-های-اورژانسی":
      page_content = page_contents[9];
      break;
    case "آفلاین":
      page_content = page_contents[5];
      break;
    case "دوره":
      page_content = page_contents[6];
      break;
    case "رشته":
      page_content = page_contents[7];
      break;
    case "پایه":
      page_content = page_contents[8];
      break;
    default:
      break;
  }
  const fill_kelasses = () => {
    let option = false;
    if (slug.length === 3) {
      option = slug[2];
    } else if (slug.length === 2) {
      option = "";
    } else if (slug.length === 4) {
      option = slug[2];
    }
    const nahaei_10 = [34, 67, 64, 44, 41, 37, 61];
    const nahaei_11 = [34, 67, 43, 40, 42, 38, 63];
    const nahaei_12 = [34, 67, 22, 26, 24, 39, 62, 23];
    const nokte_konkor = [55, 57, 56, 58, 59, 54, 53, 52, 51];
    const offline = [68, 47, 48, 49, 50, 27, 28, 29, 18, 19, 20];
    const emergency = [96, 97, 98, 99, 100, 101];
    switch (option) {
      case "":
        return kelasses;
      case "امتحان-نهایی-دهم":
        return kelasses.filter((k) => nahaei_10.includes(k.kelas_id));
      case "امتحان-نهایی-یازدهم":
        return kelasses.filter((k) => nahaei_11.includes(k.kelas_id));
      case "امتحان-نهایی-دوازدهم":
        return kelasses.filter((k) => nahaei_12.includes(k.kelas_id));
      case "نکته-و-تست-کنکور-اختصاصی":
        return kelasses.filter((k) => nokte_konkor.includes(k.kelas_id));
      case "کلاس-های-اورژانسی":
        return kelasses.filter((k) => emergency.includes(k.kelas_id));
      case "آفلاین":
        return kelasses.filter((k) => offline.includes(k.kelas_id));
      case "دوره":
        const dore = static_doreha.find(
          (d) => d.dore_title === slug[3].replaceAll("-", " ")
        );
        if (dore) {
          return kelasses.filter((k) => k.parent_dore_id === dore.dore_id);
        } else {
          return false;
        }
      case "رشته":
        const subject = subjects.find((d) => d.name === slug[3]);
        if (subject) {
          return kelasses.filter((k) => k.subject.includes(subject.id));
        } else {
          return false;
        }
      case "پایه":
        const year = years.find((d) => d.name === slug[3]);
        if (year) {
          return kelasses.filter((k) => k.year === year.id);
        } else {
          return false;
        }
      default:
        return false;
    }
  };
  const page_kelasses = kelasses ? fill_kelasses() : false;
  return (
    <>
      <Helmet>
        <title>{"کاد | " + page_content.title}</title>
        <meta name="description" content={page_content.seo.desc} />
        <meta name="keywords" content={page_content.seo.keywords} />
      </Helmet>
      <div className="shop-redesign-wrapper">
        <ShopIntro page_content={page_content} />
        <Navigate_to_specials />
        {page_content.banners_name ? (
          <ShopBanners banners_name={page_content.banners_name} />
        ) : (
          <></>
        )}
        {page_content.specials.length !== 0 ? (
          <CatKelasses
            specials={page_content.specials}
            one_look={page_content.one_look}
            page_title={page_content.title}
          />
        ) : (
          <></>
        )}
        <AllProds
          disable_filter={page_content.disable_filter}
          page_kelasses={page_kelasses}
          page_title={page_content.title}
        />
      </div>
    </>
  );
};

export default NewShop;
