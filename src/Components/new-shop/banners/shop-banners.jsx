import React, { useContext, useRef, useState } from "react";
import { DataContext } from "../../context/DataContext";
import arrow from "../../../assets/images/single-teachers-asset/arrow.webp";
const ShopBanners = ({ banners_name }) => {
  const banners_ref = useRef(null);
  const { banners } = useContext(DataContext);
  const [active_banner, set_active_banner] = useState(0);
  const shop_banners = banners
    ? [...banners.filter((b) => b.banner_type === banners_name)]
    : [];
  const handle_banner_slider = (way) => {
    const all_banners = [...banners_ref.current.children];
    if (way === "forward" && active_banner !== shop_banners.length - 1) {
      all_banners.forEach((b) => {
        b.style.transform = `translateX(${(active_banner + 1) * 100}%)`;
      });
      set_active_banner(active_banner + 1);
    } else if (way === "back" && active_banner !== 0) {
      all_banners.forEach((b) => {
        b.style.transform = `translateX(${(active_banner - 1) * 100}%)`;
      });
      set_active_banner(active_banner - 1);
    }
  };
  return (
    <section className="banners-part-wrapper mm-width">
      <button
        className="arrow-wrapper rotate-180"
        onClick={() => {
          handle_banner_slider("back");
        }}
      >
        <img src={arrow} alt="بعدی" width={15} height={26} />
      </button>
      <div className="banner-place-wrapper" ref={banners_ref}>
        {shop_banners ? (
          shop_banners.map((b) => (
            <div className="banner_container" key={b.banner_id}>
              <img
                src={b.image_link}
                alt={b.alt}
                loading="eager"
                width={1165}
                height={184.02}
              />
            </div>
          ))
        ) : (
          <span className="no-banner-ready"></span>
        )}
      </div>
      <button
        className="arrow-wrapper"
        onClick={() => {
          handle_banner_slider("forward");
        }}
      >
        <img src={arrow} alt="قبلی" width={15} height={26} />
      </button>
    </section>
  );
};

export default ShopBanners;
