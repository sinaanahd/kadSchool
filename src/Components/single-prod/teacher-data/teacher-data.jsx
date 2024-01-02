import React, { useState } from "react";
import LittleLoading from "../../reuseables/little-loading";
import { DataContext } from "../../context/DataContext";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import scrollToTop from "../../functions/scroll";
const Teacher_data = ({ teacher }) => {
  return (
    <section className="teachers-data">
      <img
        src={teacher ? teacher.image_link : ""}
        alt={teacher ? teacher.fullname : "اسم استاد"}
        width={142}
        height={189}
      />
      <div className="teacher-text-data">
        <h2 className="info-title">
          {teacher ? teacher.fullname : <LittleLoading />}
        </h2>
        <p className="info-description">
          {teacher ? (
            teacher.description ? (
              teacher.description
            ) : (
              `توضیحات برای استاد این درس هنوز وارد نشده اما شما میتونید با کلیک کردن
          دکمه زیر رزومه کامل استاد و کلاس های استاد به همراه نمونه تدریس هاش رو
          ببینید`
            )
          ) : (
            <LittleLoading />
          )}
        </p>
        <Link
          onClick={scrollToTop}
          to={teacher ? "/Teachers/" + teacher.slug_name : ""}
          className="leave-page-btn"
        >
          درباره استاد
        </Link>
      </div>
    </section>
  );
};

export default Teacher_data;
