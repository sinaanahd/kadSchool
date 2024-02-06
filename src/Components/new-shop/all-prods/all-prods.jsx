import React, { useRef, useState } from "react";
import NullKelasItem from "../../kelas-item/kelas-item-null";

import Kelas_item from "../../kelas-item/kelas-item";
import { FaMagnifyingGlass } from "react-icons/fa6";
import Filters from "./filters/filters";
import convert_to_persian from "../../functions/convert-to-persian";
const AllProds = ({ page_kelasses, page_title, disable_filter }) => {
  const [filtered_kelasess, set_filtered_kelasess] = useState(false);
  const [searched_kelasses, set_searched_kelasses] = useState(false);
  const [page, set_page] = useState(1);
  const box_ref = useRef(null);
  const handle_pagination = (num) => {
    set_page(num);
    scroll_to_box();
  };
  const make_pagination = (num) => {
    const ceil_num = Math.ceil(num / 12);
    const btns = [];
    for (let i = 1; i <= ceil_num; i++) {
      btns.push(i);
    }
    return btns;
  };
  const scroll_to_box = () => {
    box_ref.current.scrollIntoView({ block: "start" });
  };
  const handle_search = (e) => {
    const { value } = e.target;
    if (value.length > 2) {
      const searched = page_kelasses.filter(
        (k) =>
          k.kelas_title.includes(value) ||
          k.kelas_title_and_ostad_name.includes(value)
      );
      set_searched_kelasses(searched);
    } else {
      set_searched_kelasses(false);
    }
  };
  return (
    <section className="all-products-wrapper mm-width">
      <Filters
        set_filtered_kelasess={set_filtered_kelasess}
        page_kelasses={page_kelasses}
        set_page={set_page}
        disable_filter={disable_filter}
      />
      <div className="all-prods-grid">
        <div className="all-prods-header">
          <h2 className="semi-title font-bold" ref={box_ref}>
            {page_title.split("|")[1]}
          </h2>
          <span className="all-prods-search">
            <FaMagnifyingGlass />
            <input
              type="text"
              name="search"
              id="seacrch-box"
              placeholder="جستجوی محصولات"
              onInput={handle_search}
            />
          </span>
        </div>
        <div className="all-prods-place">
          {page_kelasses ? (
            searched_kelasses ? (
              searched_kelasses.length === 0 ? (
                <p className="no-class-found font-bold">
                  دوست خوبم متاسفانه کلاسی با این مشخصات پیدا نشد.
                </p>
              ) : (
                searched_kelasses.map((k) => (
                  <Kelas_item key={k.kelas_id} k={k} eager_load={true} />
                ))
              )
            ) : filtered_kelasess ? (
              filtered_kelasess.length === 0 ? (
                <p className="no-class-found font-bold">
                  دوست خوبم متاسفانه کلاسی با این مشخصات پیدا نشد.
                </p>
              ) : (
                filtered_kelasess.map((k) => (
                  <Kelas_item key={k.kelas_id} k={k} eager_load={true} />
                ))
              )
            ) : (
              page_kelasses
                // .slice((page - 1) * 12, page * 12)
                .map((k) => (
                  <Kelas_item key={k.kelas_id} k={k} eager_load={true} />
                ))
            )
          ) : (
            <>
              <NullKelasItem />
              <NullKelasItem />
              <NullKelasItem />
              <NullKelasItem />
              <NullKelasItem />
              <NullKelasItem />
              <NullKelasItem />
              <NullKelasItem />
              <NullKelasItem />
              <NullKelasItem />
              <NullKelasItem />
              <NullKelasItem />
            </>
          )}
        </div>
        {/* <div className="pagination-wrapper">
          {page_kelasses && !filtered_kelasess ? (
            make_pagination(page_kelasses.length).map((p) => (
              <button
                className={
                  page === p
                    ? "paginate-item font-bold active"
                    : "paginate-item font-bold"
                }
                key={p}
                onClick={() => {
                  handle_pagination(p);
                }}
              >
                {convert_to_persian(p)}
              </button>
            ))
          ) : (
            <></>
          )}
        </div> */}
      </div>
    </section>
  );
};

export default AllProds;
