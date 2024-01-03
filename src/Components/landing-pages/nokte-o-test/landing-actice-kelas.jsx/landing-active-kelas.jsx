import React, { useContext, useRef, useState } from "react";
import convert_to_persian from "../../../functions/convert-to-persian";
import split_in_three from "../../../functions/spilit_in_three";
import AparatVideo from "../../../video/aparat-video";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { FaCircleInfo } from "react-icons/fa6";
import arrow from "../../../../assets/images/single-class-assets/arrow-orange.webp";
import { DataContext } from "../../../context/DataContext";
import LittleLoading from "../../../reuseables/little-loading";

const LandingActiveKelas = ({ kelas_id }) => {
  const { kelasses, teachers, user, cart, handle_cart, sample_files } =
    useContext(DataContext);
  const [active_carousel, set_active_carousel] = useState(0);
  const kelas = kelasses
    ? kelasses.find((k) => k.kelas_id === kelas_id)
    : false;
  const teacher =
    kelas && teachers
      ? teachers.find((t) => t.teacher_id === kelas.teachers[0])
      : false;
  const videos = sample_files
    ? sample_files.video_sample_files.filter((sv) => sv.kelas_id === kelas_id)
    : //   sample_files.video_sample_files.filter((sv) => sv.dore_id === 5)
      false;
  const videos_ref = useRef(false);
  const handle_carousel = (way) => {
    const all_videos = [...videos_ref.current.children];
    if (way === "next" && active_carousel !== videos.length - 1) {
      all_videos.forEach((v) => {
        v.style.transform = `translateX(${(active_carousel + 1) * 310}px)`;
      });
      set_active_carousel(active_carousel + 1);
    } else if (way === "back" && active_carousel !== 0) {
      all_videos.forEach((v) => {
        v.style.transform = `translateX(${(active_carousel - 1) * 310}px)`;
      });
      set_active_carousel(active_carousel - 1);
    }
  };
  return (
    <>
      <div className="active-kelas-col">
        <div className="kelas-item-wrapper active-kelas-content">
          <Link
            target="_blank"
            to={`/Shop/product/${
              kelas ? kelas.kelas_title_and_ostad_name.replaceAll(" ", "-") : ""
            }`}
            className="kelas-img-wrapper"
          >
            <img
              src={kelas ? kelas.image_link : ""}
              alt={kelas ? kelas.kelas_title : ""}
              width={160}
              height={160}
            />
          </Link>
          <div className="kelas-text-contet">
            <h3 className="kelas-teacher-name">
              <Link
                to={`/Teachers/${teacher ? teacher.slug_name : ""}`}
                target="_blank"
              >
                {teacher ? teacher.fullname : <LittleLoading />}
              </Link>
            </h3>
            <h4 className="kelas-name-text">
              <Link
                target="_blank"
                to={`/Shop/product/${
                  kelas
                    ? kelas.kelas_title_and_ostad_name.replaceAll(" ", "-")
                    : ""
                }`}
              >
                {kelas ? kelas.kelas_title : <LittleLoading />}
              </Link>
            </h4>
            <span className="price-title-text">قیمت :</span>
            <span className="add-btn-prices-wrapper">
              <span className="prices-wrapper">
                <span className="old-price price-box">
                  <span className="price-num-text">
                    {kelas
                      ? split_in_three(convert_to_persian(kelas.price))
                      : split_in_three(convert_to_persian(0))}
                  </span>
                  <span className="currency-wrapper">تومان</span>
                </span>
                <span className="new-price price-box">
                  <span className="price-num-text">
                    {kelas
                      ? kelas.discounted_price
                        ? split_in_three(
                            convert_to_persian(kelas.discounted_price)
                          )
                        : split_in_three(convert_to_persian(kelas.price))
                      : split_in_three(convert_to_persian(0))}
                  </span>
                  <span className="currency-wrapper">تومان</span>
                </span>
              </span>
              {user && kelas ? (
                <button
                  className="add-to-cart-btn"
                  onClick={() => {
                    handle_cart(kelas);
                  }}
                >
                  {cart
                    ? cart.ids.includes(kelas.kelas_id)
                      ? "حذف از سبد خرید"
                      : "اضافه کردن به سبد خرید"
                    : "اضافه کردن به سبد خرید"}
                </button>
              ) : (
                <Link to="/Login" className="add-to-cart-btn">
                  اضافه کردن به سبد خرید
                </Link>
              )}
            </span>
          </div>
        </div>
        <div className="kelas-desc-wrapper">
          <h4 className="kelas-desc-title">
            توضیحات کلاس {kelas ? kelas.kelas_title : ""}
          </h4>
          <p className="kelas-desc-text">
            {kelas ? kelas.descriptions : <LittleLoading />}
          </p>
        </div>
        <div className="kelas-desc-wrapper">
          <h4 className="kelas-desc-title">
            نمونه تدریس های کلاس {kelas ? kelas.kelas_title : ""}
          </h4>
          <div className="arrows-wrapper">
            <button
              onClick={() => {
                handle_carousel("back");
              }}
              className="arrow reverse"
            >
              <img src={arrow} alt="قبلی" />
            </button>
            <button
              onClick={() => {
                handle_carousel("next");
              }}
              className="arrow"
            >
              <img src={arrow} alt="بعدی" />
            </button>
          </div>
          <div className="sample-videos-wrapper" ref={videos_ref}>
            {videos ? (
              videos.map((v) => (
                <div key={v.file_id} className="sample-video">
                  <AparatVideo src={v.file_link} />
                </div>
              ))
            ) : (
              <LittleLoading />
            )}
          </div>
        </div>
        <div className="kelas-desc-wrapper">
          <h4 className="kelas-desc-title">
            {" "}
            درباره {teacher ? teacher.fullname : <LittleLoading />}
          </h4>
          <p className="kelas-desc-text">
            {teacher ? teacher.description : <LittleLoading />}
          </p>
        </div>
      </div>
    </>
  );
};

export default LandingActiveKelas;
