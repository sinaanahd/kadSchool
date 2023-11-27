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
          قراره توی این بخش چند خطی همون ابتدای صفحه درباره هر استاد توضیح بدیم.
          مثل اولین متن و توضیحی که توی ویکیپدیا میبینید ( از لحاظ محتوایی )
        </p>
        <Link
          onClick={scrollToTop}
          to={teacher ? "/r-Teachers/" + teacher.slug_name : ""}
          className="leave-page-btn"
        >
          درباره استاد
        </Link>
      </div>
    </section>
  );
};

export default Teacher_data;
