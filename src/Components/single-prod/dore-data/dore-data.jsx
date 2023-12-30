import React, { useState } from "react";
import { DataContext } from "../../context/DataContext";
import scrollToTop from "../../functions/scroll";
import LittleLoading from "../../reuseables/little-loading";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
const Dore_data = ({ dore }) => {
  return (
    <section className="dore-info-wrapper">
      <h2 className="info-title">
        معرفی دوره {dore ? dore.dore_title : <LittleLoading />}
      </h2>
      <p className="info-description">
        {dore ? dore.descriptions : <LittleLoading />}
      </p>
      <Link
        to={`/r-dore/${dore.slug_name}`}
        onClick={scrollToTop}
        className="leave-page-btn"
      >
        مشاهده دوره
      </Link>
    </section>
  );
};

export default Dore_data;
