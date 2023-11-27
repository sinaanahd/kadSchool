import React, { useState } from "react";
import LittleLoading from "../../reuseables/little-loading";
const Files_data = ({ taklifha, azmonha, jozveha }) => {
  const [active_box, set_active_box] = useState("jozve");
  const handle_active_type = (entry) => {
    set_active_box(entry);
  };
  return (
    <section className="files-section">
      {/* {`${taklifha.length} ${azmonha.length} ${jozveha.length}`} */}
      <h2 className="files-title">فایل ها</h2>
      <div className="sample-files-btns-wrapper">
        <span
          onClick={() => {
            handle_active_type("jozve");
          }}
          className={
            active_box === "jozve"
              ? "sample-file-btn  active"
              : "sample-file-btn"
          }
        >
          جزوات
        </span>
        <span
          onClick={() => {
            handle_active_type("azmon");
          }}
          className={
            active_box === "azmon"
              ? "sample-file-btn  active"
              : "sample-file-btn"
          }
        >
          آزمون ها
        </span>
        <span
          onClick={() => {
            handle_active_type("taklif");
          }}
          className={
            active_box === "taklif"
              ? "sample-file-btn  active"
              : "sample-file-btn"
          }
        >
          تکالیف
        </span>
      </div>
      <div className="files-places">
        {active_box === "jozve" ? (
          jozveha ? (
            jozveha.length !== 0 ? (
              jozveha.map((f) => (
                <div className="file-row" key={f.file_id}>
                  <span className="row-item name-wrapper">{f.title}</span>
                  <span className="row-item">فصل دوم</span>
                  <a className="row-item" href={f.file_link}>
                    دانلود
                  </a>
                </div>
              ))
            ) : (
              "موردی برای نمایش وجود ندارد"
            )
          ) : (
            <LittleLoading />
          )
        ) : (
          <></>
        )}
        {active_box === "taklif" ? (
          taklifha ? (
            taklifha.length !== 0 ? (
              taklifha.map((f) => (
                <div className="file-row" key={f.file_id}>
                  <span className="row-item name-wrapper">{f.title}</span>
                  <span className="row-item">فصل دوم</span>
                  <a className="row-item" href={f.file_link}>
                    دانلود
                  </a>
                </div>
              ))
            ) : (
              "موردی برای نمایش وجود ندارد"
            )
          ) : (
            <LittleLoading />
          )
        ) : (
          <></>
        )}
        {active_box === "azmon" ? (
          azmonha ? (
            azmonha.length !== 0 ? (
              azmonha.map((f) => (
                <div className="file-row" key={f.file_id}>
                  <span className="row-item name-wrapper">{f.title}</span>
                  <span className="row-item">فصل دوم</span>
                  <a className="row-item" href={f.file_link}>
                    دانلود
                  </a>
                </div>
              ))
            ) : (
              "موردی برای نمایش وجود ندارد"
            )
          ) : (
            <LittleLoading />
          )
        ) : (
          <></>
        )}

        {/* <div className="file-row">
          <span className="row-item name-wrapper">شهریار بهادری برای تست</span>
          <span className="row-item">فصل دوم</span>
          <span className="row-item">دانلود</span>
        </div>
        <div className="file-row">
          <span className="row-item name-wrapper">فسفه و منطق</span>
          <span className="row-item">فصل دوم</span>
          <span className="row-item">دانلود</span>
        </div> */}
      </div>
    </section>
  );
};

export default Files_data;
