import React, { useEffect, useState, useContext } from "react";
import { Helmet } from "react-helmet";
import { DataContext } from "../context/DataContext";
import LittleLoading from "../reuseables/little-loading";
import TestComponent from "./test/test";
import { CartProvider } from "../context/CartContext";
const NewShop = () => {
  const { ref_kelasses, ref_teachers, ref_doreha, ref_courses } =
    useContext(DataContext);
  const [page_kelasses, setKelasses] = useState(false);
  useEffect(() => {
    const kind = decodeURIComponent(window.location.pathname.split("/")[2]);
    const title = decodeURIComponent(window.location.pathname.split("/")[3]);
    let page_kelasses = false;
    if (kind === "دوره") {
      const dore = ref_doreha.find((dore) => dore.dore_title === title);
      if (Object.keys(dore).length !== 0)
        page_kelasses = [
          ...ref_kelasses.filter(
            (kelas) => kelas.parent_dore_id === dore.dore_id
          ),
        ];
    } else if (kind === "رشته") {
      const subjects = [
        { id: 0, name: "ریاضی" },

        { id: 1, name: "تجربی" },

        { id: 2, name: "انسانی" },

        { id: 3, name: "هنر" },
      ];
      const selected_subject = subjects.find((s) => s.name === title);
      if (Object.keys(selected_subject).length !== 0)
        page_kelasses = [
          ...ref_kelasses.filter((kelas) =>
            kelas.subject.includes(selected_subject.id)
          ),
        ];
    } else if (kind === "پایه") {
      const years = [
        {
          id: 10,
          name: "دهم",
        },
        {
          id: 11,
          name: "یازدهم",
        },
        {
          id: 12,
          name: "دوازدهم",
        },
        {
          id: 18,
          name: "کنکور",
        },
        {
          id: 0,
          name: "فارغ التحصیل",
        },
      ];
      const selected_year = { ...years.find((y) => y.name === title) };
      if (Object.keys(selected_year).length !== 0)
        page_kelasses = [
          ...ref_kelasses.filter((kelas) => kelas.year === selected_year.id),
        ];
    } else if (kind === "درس") {
      const course = { ...ref_courses.find((c) => c.name === title) };
      if (Object.keys(course).length !== 0) {
        page_kelasses = [
          ...ref_kelasses.filter((kelas) => kelas.course === course.course_id),
        ];
      }
    }
    if (page_kelasses.length !== 0) {
      setKelasses(page_kelasses);
    } else {
      setKelasses(false);
    }
  }, []);
  return (
    <>
      <Helmet>
        <title>فروشگاه کاد</title>
      </Helmet>
      <section className="new-shop mm-width">
        <CartProvider>
          <TestComponent />
        </CartProvider>
        <div className="prods-wrapper">
          {page_kelasses
            ? page_kelasses.map((k) => (
                <div key={k.kelas_id} className="kelas-wrapper">
                  <h2>{k.kelas_title}</h2>
                  <h3>
                    {
                      ref_teachers.find((t) =>
                        k.teachers.includes(t.teacher_id)
                      ).fullname
                    }
                  </h3>
                  <h3>
                    {
                      ref_doreha.find((d) => d.dore_id === k.parent_dore_id)
                        .dore_title
                    }
                  </h3>
                  <span>{k.price}</span>
                </div>
              ))
            : "دوره ای برای نمایش وجود ندارد"}
        </div>
      </section>
    </>
  );
};

export default NewShop;
