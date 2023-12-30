import React, { useState } from "react";
import { Helmet } from "react-helmet";
import split_in_three from "../functions/spilit_in_three";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
const PayResultPage = () => {
  const page_slug = window.location.pathname.split("/")[2].split("-");
  return (
    <>
      <Helmet>
        <title>نتیجه پرداخت</title>
      </Helmet>
      <div className="pay-result-page-wrapper">
        <h1 className="title">نتیجه پرداخت شما</h1>
        <div className="result-item-wrapper">
          <span className="result-title">وضعیت پرداخت :</span>
          <span className="result-data">
            {page_slug[1] !== "false" ? "موفق" : "ناموفق"}
          </span>
        </div>
        <div className="result-item-wrapper">
          <span className="result-title">مبلغ پرداختی :</span>
          <span className="result-data">
            {split_in_three(page_slug[0])} تومان
          </span>
        </div>
        <div className="result-item-wrapper">
          <span className="result-title">کد پیگیری :</span>
          <span className="result-data">{page_slug[2]}</span>
        </div>
        <a
          href="https://panel.kadschool.com/"
          target="_blank"
          className="return-to-panel-btn"
        >
          بازگشت به پنل
        </a>
      </div>
    </>
  );
};

export default PayResultPage;
