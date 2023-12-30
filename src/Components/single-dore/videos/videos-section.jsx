import React, { useState, useRef } from "react";
import Video from "./video/video";
import arrow from "../../../assets/images/single-class-assets/arrow-orange.webp";
import LittleLoading from "../../reuseables/little-loading";
const VideosSection = ({ slug_name, videos }) => {
  const [carousel_num, set_carousel_num] = useState(0);
  const carousel_ref = useRef(false);
  const move_carousel = (e) => {
    const childrens = [...carousel_ref.current.children];
    if (carousel_num !== videos.length - 1) {
      childrens.forEach((c) => {
        c.style.transform = `translateX(${(carousel_num + 1) * 379}px)`;
      });
      set_carousel_num(carousel_num + 1);
    } else {
      childrens.forEach((c) => {
        c.style.transform = `translateX(${0 * 379}px)`;
      });
      set_carousel_num(0);
    }
  };
  return (
    <section className="dore-sample-videos-section mm-width">
      <h2 className="sample-section-title">
        نمونه تدریس های اساتید دوره <font>{slug_name}</font>
      </h2>
      <div className="sample-videos-wrapper" ref={carousel_ref}>
        {videos ? (
          videos.map((v) => <Video f={v} key={v.file_id} />)
        ) : (
          <LittleLoading />
        )}
      </div>
      <button className="move-carousel" onClick={move_carousel}>
        <img src={arrow} alt="بعدی" width={8} height={19} loading="lazy" />
      </button>
    </section>
  );
};

export default VideosSection;
