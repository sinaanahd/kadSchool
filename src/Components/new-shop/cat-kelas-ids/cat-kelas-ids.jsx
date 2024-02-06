import React, { useContext, useEffect, useRef, useState } from "react";
import NullKelasItem from "../../kelas-item/kelas-item-null";
import { DataContext } from "../../context/DataContext";
import axios from "axios";
import urls from "../../urls/url";
import LittleLoading from "../../reuseables/little-loading";
import Kelas_item from "../../kelas-item/kelas-item";
import arrow from "../../../assets/images/single-teachers-asset/arrow.webp";

const CatKelasses = ({ specials, one_look, page_title }) => {
  const { kelasses } = useContext(DataContext);
  const [active_type, set_active_type] = useState(false);
  const [special_kelasses, set_special_kelasses] = useState([]);
  const [specialsData, setSpecialsData] = useState([]);
  const [active_kelas_carousel, set_active_kelas_carousel] = useState(0);
  const kelas_ref = useRef(null);
  useEffect(() => {
    const all_ref = specialsData.map((sd) => sd.id);
    const fetchDataForSpecial = async (specialItem, i) => {
      try {
        const res = await axios.get(
          `${urls.specialKelasesList}${specialItem.url}`
        );
        const { result, response, error } = res.data;
        if (!all_ref.includes(specialItem.id)) {
          setSpecialsData((prevData) => [
            ...prevData,
            {
              ...specialItem,
              ids: result ? (response ? response : []) : [],
            },
          ]);
          if (i === 0) {
            set_active_type({
              ...specialItem,
              ids: result ? (response ? response : []) : [],
            });
          }
          all_ref.push(specialItem.id);
        }
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };
    specials.forEach((specialItem, i) => {
      fetchDataForSpecial(specialItem, i);
    });
  }, []);
  const fill_classes = (ids) => {
    const founded_ids = kelasses.filter((k) => ids.includes(k.kelas_id));
    return founded_ids;
  };
  const handle_kelas_ref = () => {
    const all_kelasses = [...kelas_ref.current.children];
    if (active_kelas_carousel !== active_type.ids.length - 1) {
      all_kelasses.forEach((k) => {
        k.style.transform = `translateX(${
          (active_kelas_carousel + 1) * 380
        }px)`;
      });
      set_active_kelas_carousel(active_kelas_carousel + 1);
    } else {
      all_kelasses.forEach((k) => {
        k.style.transform = `translateX(${0}px)`;
      });
      set_active_kelas_carousel(0);
    }
  };
  const reset_carousel = () => {
    const all_kelasses = [...kelas_ref.current.children];
    all_kelasses.forEach((k) => {
      k.style.transform = `translateX(${0}px)`;
    });
    set_active_kelas_carousel(0);
  };
  return (
    <section className="cat-suggestions-section mm-width">
      <h2 className="semi-title font-bold">{one_look}</h2>
      <div className="choose-categories">
        {specialsData ? (
          specialsData.map((sk) => (
            <button
              key={sk.id}
              className={
                sk.id === active_type.id
                  ? "choose-type-btn active"
                  : "choose-type-btn"
              }
              onClick={() => {
                set_active_type(sk);
                reset_carousel();
              }}
            >
              {sk.title}
            </button>
          ))
        ) : (
          <LittleLoading />
        )}
      </div>
      {active_type ? (
        <div className="choosen-content-wrapper">
          <div className="choose-intro-texts">
            <h3 className="dynamic-title">
              {active_type.title + page_title.split("|")[1]}
            </h3>
            <p className="dynamic-title-text">{active_type.text}</p>
          </div>
          <div className="cat-kelas-carousel-wrapper">
            <div className="categories-class-wrapper" ref={kelas_ref}>
              {active_type.ids.length !== 0 ? (
                kelasses ? (
                  fill_classes(active_type.ids).length !== 0 ? (
                    fill_classes(active_type.ids).map((k) => (
                      <Kelas_item k={k} key={k.kelas_id} eager_load={true} />
                    ))
                  ) : (
                    "موردی یافت نشد"
                  )
                ) : (
                  <>
                    <NullKelasItem />
                    <NullKelasItem />
                    <NullKelasItem />
                    <NullKelasItem />
                    <NullKelasItem />
                    <NullKelasItem />
                  </>
                )
              ) : (
                <>
                  <NullKelasItem />
                  <NullKelasItem />
                  <NullKelasItem />
                  <NullKelasItem />
                  <NullKelasItem />
                  <NullKelasItem />
                </>
              )}
            </div>
            <button className="arrow-wrapper" onClick={handle_kelas_ref}>
              <img src={arrow} alt="قبلی" width={15} height={26} />
            </button>
          </div>
        </div>
      ) : (
        <div className="choosen-content-wrapper">
          <div className="choose-intro-texts">
            <h3 className="dynamic-title">
              <LittleLoading />
            </h3>
            <p className="dynamic-title-text">
              <LittleLoading />
            </p>
          </div>
          <div className="categories-class-wrapper">
            <NullKelasItem />
            <NullKelasItem />
            <NullKelasItem />
            <NullKelasItem />
            <NullKelasItem />
            <NullKelasItem />
          </div>
        </div>
      )}
    </section>
  );
};

export default CatKelasses;
