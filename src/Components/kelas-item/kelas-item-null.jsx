import React, { useContext, useState } from "react";
const NullKelasItem = () => {
  return (
    <div className="class-item-single-component null-kelas-component">
      <div className="img-dore-place">
        <span className="img-link"></span>
        <span className="dore-label">
          <span className="dore-label-title"></span>
          <span className="dore-content"></span>
        </span>
      </div>
      <div className="class-text-data">
        <span className="teacher-name-data"></span>
        <span className="cours-name-data"></span>
        <div className="prices-data-wrapper">
          <span className="price-title"></span>
          <span className="prices-kind-wrapper">
            <span className="real-discounted"></span>
            <span className="real-price"></span>
          </span>
        </div>
        <button className="add-to-cart-btn"></button>
      </div>
    </div>
  );
};

export default NullKelasItem;
