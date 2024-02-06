import React, { useState } from "react";
const ShopIntro = ({ page_content }) => {
  return (
    <section className="page-intro-wrapper mm-width">
      <h1 className="page-title font-bold">
        {page_content.title.split("|")[0]}
      </h1>
      <p className="intro-text">{page_content.desc_text}</p>
    </section>
  );
};

export default ShopIntro;
