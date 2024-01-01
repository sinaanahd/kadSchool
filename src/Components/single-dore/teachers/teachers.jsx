import React, { useRef, useState } from "react";
import scrollToTop from "../../functions/scroll";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import arrow from "../../../assets/images/single-class-assets/arrow-orange.webp";
import LittleLoading from "../../reuseables/little-loading";
const Teachers = ({ slug_name, dore_teachers }) => {
  const [carousel_num, set_carousel_num] = useState(0);
  const carousel_ref = useRef(false);
  const move_carousel = (e) => {
    const childrens = [...carousel_ref.current.children];
    if (carousel_num !== dore_teachers.length - 1) {
      childrens.forEach((c) => {
        c.style.transform = `translateX(${(carousel_num + 1) * 209}px)`;
      });
      set_carousel_num(carousel_num + 1);
    } else {
      childrens.forEach((c) => {
        c.style.transform = `translateX(${0 * 209}px)`;
      });
      set_carousel_num(0);
    }
  };
  return (
    <section className="dore-teachers-intro mm-width">
      <h2 className="semi-title">
        اساتید دوره <font>{slug_name}</font>
      </h2>
      <div className="teachers-carousel-wrapper" ref={carousel_ref}>
        {dore_teachers ? (
          dore_teachers.map((t) => (
            <Link
              to={"/Teachers/" + t.slug_name}
              key={t.teacher_id}
              className="teacher-wrapper"
              onClick={scrollToTop}
              target="_blank"
            >
              <img
                src={t.image_link}
                alt={`تصویر ${t.fullname}`}
                loading="lazy"
                width={159}
                height={212}
              />
              <h3 className="teacher-name">{t.fullname}</h3>
            </Link>
          ))
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

export default Teachers;
