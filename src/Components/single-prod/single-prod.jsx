import React, { useContext, useState } from "react";
import { Helmet } from "react-helmet";
import SideBar from "../side-bar/side-bar";
import spilit_in_three from "../functions/spilit_in_three";
import convert_to_persian from "../functions/convert-to-persian";
import downArrowBlue from "../../assets/images/down-arrow-blue.webp";
import avatar from "../../assets/images/avatar.webp";
import cart_img from "../../assets/images/cart.webp";
import PopUp from "./pop-up/pop-up";
import convert_days from "../functions/convert-days";
import LittleLoading from "../reuseables/little-loading";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import scrollToTop from "../functions/scroll";
import { DataContext } from "../context/DataContext";

const SingleProd = () => {
  const { user, kelasses, teachers, cart, handle_cart, doreha, sample_files } =
    useContext(DataContext);
  const [more_cm, set_more_cm] = useState(false);
  const [pop_up, set_pop_up] = useState(false);

  const page_slug = window.location.pathname.split("/")[3];

  const single_prod = kelasses
    ? kelasses.find(
        (k) =>
          k.kelas_id === parseInt(page_slug) ||
          k.slug_name === decodeURIComponent(page_slug)
      )
    : false;

  const kelas_teachers =
    single_prod && teachers
      ? teachers.filter((t) => single_prod.teachers.includes(t.teacher_id))
      : [];
  const kelas_dore =
    single_prod && doreha
      ? doreha.find((d) => d.dore_id === single_prod.parent_dore_id)
      : false;
  const kelas_sample_files = {
    pdf_sample_files: [],
    video_sample_files: [],
  };
  kelas_sample_files.pdf_sample_files =
    sample_files && single_prod
      ? [
          ...sample_files.pdf_sample_files.filter(
            (pf) =>
              single_prod.sample_files.pdf_sample_files_ids.includes(
                pf.file_id
              ) && !pf.is_for_jalase
          ),
        ].concat([
          ...sample_files.pdf_sample_files.filter(
            (pf) =>
              kelas_teachers[0].sample_files.pdf_sample_files_ids.includes(
                pf.file_id
              ) && !pf.is_for_jalase
          ),
        ])
      : [];
  kelas_sample_files.video_sample_files =
    sample_files && single_prod
      ? [
          ...sample_files.video_sample_files.filter((pf) =>
            single_prod.sample_files.video_sample_files_ids.includes(pf.file_id)
          ),
        ].concat([
          ...sample_files.video_sample_files.filter((pf) =>
            kelas_teachers[0].sample_files.video_sample_files_ids.includes(
              pf.file_id
            )
          ),
        ])
      : [];
  const handle_cm = () => {
    // const more_cm = !this.state.more_cm;
    // this.setState({ more_cm });
    set_more_cm(!more_cm);
  };
  const handle_pop_up = (pop_up, e) => {
    if (e) {
      const classes = [...e.target.classList];
      if (classes.includes("pop-up-wrapper")) {
        // this.setState({ pop_up: false });
        set_pop_up(false);
      }
    } else {
      // this.setState({ pop_up });
      set_pop_up(pop_up);
    }
  };
  return (
    <>
      <Helmet>
        <title>{single_prod ? single_prod.kelas_title : "اسم کلاس"}</title>
        <meta
          name="description"
          content={`صفحه اطلاعات مربوط به کلاس ${
            single_prod ? single_prod.kelas_title : ""
          }`}
        />
      </Helmet>
      <section className="bgc-wrapper single-prod-wrapper">
        <div className="main-single-prod mm-width">
          <SideBar />
          <div className="main-content">
            <h1 className="title">
              {single_prod ? single_prod.kelas_title : "اسم کلاس"}
            </h1>
            <div className="prod-details-wrapper">
              <div className="prod-details-spec">
                <span className="add-to-cart-prod">
                  <img
                    src={single_prod ? single_prod.image_link : ""}
                    alt={single_prod ? single_prod.kelas_title : "اسم کلاس"}
                    className="prod-img"
                  />
                  <span className="price-wrapper">
                    <span className="price-title">قیمت :</span>
                    <span className="price">
                      {single_prod ? (
                        single_prod.price !== 0 ? (
                          spilit_in_three(convert_to_persian(single_prod.price))
                        ) : (
                          "رایگان"
                        )
                      ) : (
                        <LittleLoading />
                      )}
                    </span>
                  </span>
                  {user ? (
                    cart && single_prod ? (
                      cart.ids.includes(single_prod.kelas_id) ? (
                        <span
                          className="add-to-cart-btn"
                          onClick={() => {
                            handle_cart(single_prod);
                          }}
                        >
                          <img src={cart_img} alt="" />
                          حذف از سبد خرید
                        </span>
                      ) : (
                        <span
                          className="add-to-cart-btn"
                          onClick={() => {
                            handle_cart(single_prod);
                          }}
                        >
                          <img src={cart_img} alt="" />
                          افزودن به سبد خرید
                        </span>
                      )
                    ) : (
                      <Link to={"/Login"} className="add-to-cart-btn">
                        <img src={cart_img} alt="" />
                        افزودن به سبد خرید
                      </Link>
                    )
                  ) : (
                    <Link to={"/Login"} className="add-to-cart-btn">
                      <img src={cart_img} alt="" />
                      افزودن به سبد خرید
                    </Link>
                  )}
                </span>
                <span className="prod-details-text-wrapper">
                  <span className="prod-details-text">
                    <span className="detail-title">نام استاد : </span>
                    <span className="content">
                      {single_prod && kelas_teachers ? (
                        kelas_teachers.map((t) => (
                          <Link
                            onClick={() => {
                              scrollToTop();
                            }}
                            to={`/Teachers/${t.slug_name}`}
                            key={t.teacher_id}
                          >
                            {t.fullname}
                          </Link>
                        ))
                      ) : (
                        <></>
                      )}
                    </span>
                  </span>
                  <span className="prod-details-text">
                    <span className="detail-title">تاریخ شروع کلاس:</span>
                    <span className="content">
                      {single_prod && kelas_dore ? (
                        new Date(kelas_dore.dore_start_date).toLocaleDateString(
                          "fa-IR"
                        )
                      ) : (
                        <></>
                      )}
                    </span>
                  </span>
                  <span className="prod-details-text">
                    <span className="detail-title">برنامه هفتگی :</span>
                    <span className="content column-need">
                      {single_prod ? (
                        single_prod.stream_plans.map((p, i) => (
                          <span key={i++}>
                            {convert_days(p.week_day_english)} ها{" "}
                            {convert_to_persian(p.start_time.split(":")[0])} -
                            {convert_to_persian(p.finish_time.split(":")[0])}
                          </span>
                        ))
                      ) : (
                        <></>
                      )}
                    </span>
                  </span>
                </span>
              </div>
              <div className="prod-in-one-look">
                <h2 className="semi-title">کلاس در یک نگاه:</h2>
                <ul className="prod-texts">
                  {single_prod ? (
                    single_prod.descriptions.length !== 0 ? (
                      single_prod.descriptions.map((d, i) => (
                        <li key={i++}>{d}</li>
                      ))
                    ) : (
                      <li>هنوز دوره در یک نگاه وارد نشده</li>
                    )
                  ) : (
                    <></>
                  )}
                </ul>
              </div>
            </div>
            <div className="boxes-wrapper">
              <div
                className="box"
                onClick={() => {
                  handle_pop_up("intro");
                }}
              >
                <p>معرفی کلاس</p>
              </div>
              <div
                className="box"
                onClick={() => {
                  handle_pop_up("sample");
                }}
              >
                <p>نمونه تدریس و فایل ها</p>
              </div>
              <div
                className="box"
                onClick={() => {
                  handle_pop_up("faq");
                }}
              >
                <p>سوالات متداول</p>
              </div>
              <div
                className="box"
                onClick={() => {
                  handle_pop_up("resume");
                }}
              >
                <p>رزومه استاد</p>
              </div>
            </div>
            <div className="students-comments-wrapper">
              <h3 className="semi-2-title">نظرات دانش آموزان</h3>

              <div
                className={
                  more_cm ? "comments-wrapper open-cm" : "comments-wrapper"
                }
              >
                <div className="comment">
                  <span className="name-avatar">
                    <img src={avatar} alt="" />
                    سارا مهدویان
                  </span>
                  <p className="comment-text">
                    من امسال کنکور دادم و حقیقتا کاش زودتر با موسسه کاد آشنا
                    میشدم🥲 فقط گفتم بابت قدردانی ازتون براتون کامنت بذارم و
                    خسته نباشید بگم
                  </p>
                </div>
                <div className="comment">
                  <span className="name-avatar">
                    <img src={avatar} alt="" />
                    سینا محمدی
                  </span>
                  <p className="comment-text">
                    به به سایت جدید کاد بالاخره اومد😍 همه چی توی سال قبل خوب
                    بود جز سایت که خب الان عالی شده گمونم از ما کنکوریا 402 که
                    گذشت ولی 403 ای ها قدر بدونین و حتما نمونه تدریسای استادای
                    کاد رو نگاهی بندازید
                  </p>
                </div>
                <div className="comment">
                  <span className="name-avatar">
                    <img src={avatar} alt="" />
                    مجتبی نوری
                  </span>
                  <p className="comment-text">
                    تا الان موسسه ای مثل کاد ندیدم که اینقدر به فکر بچه ها باشن
                    حتی من که اصلا تو هیچ کلاسی هم ثبت نکردم علاوه بر این کلاسای
                    زیادی هم واقعا رایگان برگزار کردین انشاالله بتونم جبران
                    کنم❤️👌 یاعلی🙌
                  </p>
                </div>

                <span
                  onClick={() => {
                    handle_cm();
                  }}
                  className={more_cm ? "more close" : "more"}
                >
                  {more_cm ? "کمتر" : "بیشتر"}
                  <img src={downArrowBlue} alt="" />
                </span>
              </div>
            </div>
          </div>
        </div>
        {pop_up ? (
          <PopUp
            type={pop_up}
            handle_pop_up={handle_pop_up}
            sample_files={single_prod ? kelas_sample_files : false}
            faq={single_prod ? single_prod.FAQ : false}
            cv={single_prod ? kelas_teachers[0].cv : false}
            dore={single_prod ? kelas_dore : false}
            teachers={single_prod ? kelas_teachers : false}
          />
        ) : (
          <></>
        )}
      </section>
    </>
  );
};

// export default SingleProd;
// class SingleProd2 extends Component {
//   state = {
//     more_cm: false,
//     pop_up: false,
//   };
//   componentDidMount() {
//     const page_slug = window.location.pathname.split("/")[3];
//     let page_id;
//     const test_slug = decodeURIComponent(page_slug);
//     if (/\d/.test(test_slug)) {
//       page_id = parseInt(page_slug);
//     } else {
//       page_id = decodeURIComponent(page_slug);
//     }
//     props.find_single_prod(page_id);
//     const data_check = setInterval(() => {
//       if (this.props.single_prod) {
//         clearInterval(data_check);
//       } else {
//         this.props.find_single_prod(page_id);
//       }
//     }, 2000);
//   }

//   handle_cm = () => {
//     const more_cm = !this.more_cm;
//     this.setState({ more_cm });
//   };
//   handle_pop_up = (pop_up, e) => {
//     if (e) {
//       const classes = [...e.target.classList];
//       if (classes.includes("pop-up-wrapper")) {
//         this.setState({ pop_up: false });
//       }
//     } else {
//       this.setState({ pop_up });
//     }
//   };
//   render() {
//     const { cart, request_id, handle_cart, single_prod } = this.props;
//     return (
//       <>
//         <Helmet>
//           <title>{single_prod ? single_prod.kelas_title : "اسم کلاس"}</title>
//           <meta
//             name="description"
//             content={`صفحه اطلاعات مربوط به کلاس ${
//               single_prod ? single_prod.kelas_title : ""
//             }`}
//           />
//         </Helmet>
//         <section className="bgc-wrapper single-prod-wrapper">
//           <div className="main-single-prod mm-width">
//             <SideBar />
//             <div className="main-content">
//               <h1 className="title">
//                 {single_prod ? single_prod.kelas_title : "اسم کلاس"}
//               </h1>
//               <div className="prod-details-wrapper">
//                 <div className="prod-details-spec">
//                   <span className="add-to-cart-prod">
//                     <img
//                       src={single_prod ? single_prod.image_link : ""}
//                       alt={single_prod ? single_prod.kelas_title : "اسم کلاس"}
//                       className="prod-img"
//                     />
//                     <span className="price-wrapper">
//                       <span className="price-title">قیمت :</span>
//                       <span className="price">
//                         {single_prod ? (
//                           single_prod.price !== 0 ? (
//                             spilit_in_three(
//                               convert_to_persian(single_prod.price)
//                             )
//                           ) : (
//                             "رایگان"
//                           )
//                         ) : (
//                           <LittleLoading />
//                         )}
//                       </span>
//                     </span>
//                     {cart && single_prod ? (
//                       cart.items_ids.includes(single_prod.kelas_id) ? (
//                         <span
//                           className="add-to-cart-btn"
//                           onClick={() => {
//                             handle_cart(single_prod.kelas_id);
//                           }}
//                         >
//                           <img src={cart_img} alt="" />
//                           {request_id !== single_prod.kelas_id ? (
//                             "حذف از سبد خرید"
//                           ) : (
//                             <LittleLoading />
//                           )}
//                         </span>
//                       ) : (
//                         <span
//                           className="add-to-cart-btn"
//                           onClick={() => {
//                             handle_cart(single_prod.kelas_id);
//                           }}
//                         >
//                           <img src={cart_img} alt="" />
//                           {request_id !== single_prod.kelas_id ? (
//                             "افزودن به سبد خرید"
//                           ) : (
//                             <LittleLoading />
//                           )}
//                         </span>
//                       )
//                     ) : (
//                       <Link to={"/Login"} className="add-to-cart-btn">
//                         <img src={cart_img} alt="" />
//                         افزودن به سبد خرید
//                       </Link>
//                     )}
//                   </span>
//                   <span className="prod-details-text-wrapper">
//                     <span className="prod-details-text">
//                       <span className="detail-title">نام استاد : </span>
//                       <span className="content">
//                         {single_prod ? (
//                           single_prod.teachers.map((t) => (
//                             <Link
//                               onClick={() => {
//                                 scrollToTop();
//                               }}
//                               to={`/Teachers/${t.slug_name}`}
//                               key={t.teacher_id}
//                             >
//                               {t.fullname}
//                             </Link>
//                           ))
//                         ) : (
//                           <></>
//                         )}
//                       </span>
//                     </span>
//                     <span className="prod-details-text">
//                       <span className="detail-title">تاریخ شروع کلاس:</span>
//                       <span className="content">
//                         {single_prod ? (
//                           new Date(
//                             single_prod.dore.dore_start_date
//                           ).toLocaleDateString("fa-IR")
//                         ) : (
//                           <></>
//                         )}
//                       </span>
//                     </span>
//                     <span className="prod-details-text">
//                       <span className="detail-title">برنامه هفتگی :</span>
//                       <span className="content column-need">
//                         {single_prod ? (
//                           single_prod.stream_plans.map((p, i) => (
//                             <span key={i++}>
//                               {convert_days(p.week_day_english)} ها{" "}
//                               {convert_to_persian(p.start_time.split(":")[0])} -
//                               {convert_to_persian(p.finish_time.split(":")[0])}
//                             </span>
//                           ))
//                         ) : (
//                           <></>
//                         )}
//                       </span>
//                     </span>
//                   </span>
//                 </div>
//                 <div className="prod-in-one-look">
//                   <h2 className="semi-title">کلاس در یک نگاه:</h2>
//                   <ul className="prod-texts">
//                     {single_prod ? (
//                       single_prod.descriptions.length !== 0 ? (
//                         single_prod.descriptions.map((d, i) => (
//                           <li key={i++}>{d}</li>
//                         ))
//                       ) : (
//                         <li>هنوز دوره در یک نگاه وارد نشده</li>
//                       )
//                     ) : (
//                       <></>
//                     )}
//                   </ul>
//                 </div>
//               </div>
//               <div className="boxes-wrapper">
//                 <div
//                   className="box"
//                   onClick={() => {
//                     this.handle_pop_up("intro");
//                   }}
//                 >
//                   <p>معرفی کلاس</p>
//                 </div>
//                 <div
//                   className="box"
//                   onClick={() => {
//                     this.handle_pop_up("sample");
//                   }}
//                 >
//                   <p>نمونه تدریس و فایل ها</p>
//                 </div>
//                 <div
//                   className="box"
//                   onClick={() => {
//                     this.handle_pop_up("faq");
//                   }}
//                 >
//                   <p>سوالات متداول</p>
//                 </div>
//                 <div
//                   className="box"
//                   onClick={() => {
//                     this.handle_pop_up("resume");
//                   }}
//                 >
//                   <p>رزومه استاد</p>
//                 </div>
//               </div>
//               <div className="students-comments-wrapper">
//                 <h3 className="semi-2-title">نظرات دانش آموزان</h3>

//                 <div
//                   className={
//                     this.state.more_cm
//                       ? "comments-wrapper open-cm"
//                       : "comments-wrapper"
//                   }
//                 >
//                   <div className="comment">
//                     <span className="name-avatar">
//                       <img src={avatar} alt="" />
//                       سارا مهدویان
//                     </span>
//                     <p className="comment-text">
//                       من امسال کنکور دادم و حقیقتا کاش زودتر با موسسه کاد آشنا
//                       میشدم🥲 فقط گفتم بابت قدردانی ازتون براتون کامنت بذارم و
//                       خسته نباشید بگم
//                     </p>
//                   </div>
//                   <div className="comment">
//                     <span className="name-avatar">
//                       <img src={avatar} alt="" />
//                       سینا محمدی
//                     </span>
//                     <p className="comment-text">
//                       به به سایت جدید کاد بالاخره اومد😍 همه چی توی سال قبل خوب
//                       بود جز سایت که خب الان عالی شده گمونم از ما کنکوریا 402 که
//                       گذشت ولی 403 ای ها قدر بدونین و حتما نمونه تدریسای استادای
//                       کاد رو نگاهی بندازید
//                     </p>
//                   </div>
//                   <div className="comment">
//                     <span className="name-avatar">
//                       <img src={avatar} alt="" />
//                       مجتبی نوری
//                     </span>
//                     <p className="comment-text">
//                       تا الان موسسه ای مثل کاد ندیدم که اینقدر به فکر بچه ها
//                       باشن حتی من که اصلا تو هیچ کلاسی هم ثبت نکردم علاوه بر این
//                       کلاسای زیادی هم واقعا رایگان برگزار کردین انشاالله بتونم
//                       جبران کنم❤️👌 یاعلی🙌
//                     </p>
//                   </div>

//                   <span
//                     onClick={() => {
//                       this.handle_cm();
//                     }}
//                     className={this.state.more_cm ? "more close" : "more"}
//                   >
//                     {this.state.more_cm ? "کمتر" : "بیشتر"}
//                     <img src={downArrowBlue} alt="" />
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>
//           {this.state.pop_up ? (
//             <PopUp
//               type={this.state.pop_up}
//               handle_pop_up={this.handle_pop_up}
//               sample_files={single_prod ? single_prod.sample_files : false}
//               faq={single_prod ? single_prod.FAQ : false}
//               cv={single_prod ? single_prod.teachers[0].cv : false}
//               dore={single_prod ? single_prod.dore : false}
//               teachers={single_prod ? single_prod.teachers : false}
//             />
//           ) : (
//             <></>
//           )}
//         </section>
//       </>
//     );
//   }
// }

export default SingleProd;
