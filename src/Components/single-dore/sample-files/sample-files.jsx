import React, { useContext, useState } from "react";
import { DataContext } from "../../context/DataContext";
import LittleLoading from "../../reuseables/little-loading";
import file_img from "../../../assets/images/single-dore-assets/file-img.webp";
import convert_to_persian from "../../functions/convert-to-persian";

const SampleFiles = ({ dore, slug_name }) => {
  const { sample_files, kelasses } = useContext(DataContext);
  const [active_type, set_active_type] = useState("jozve");
  const jozveha =
    sample_files && dore
      ? sample_files.pdf_sample_files.filter(
          (f) =>
            !f.is_for_jalase &&
            f.dore_id === dore.dore_id &&
            f.file_type === "نمونه جزوه"
        )
      : [];
  const taklifha =
    sample_files && dore
      ? sample_files.pdf_sample_files.filter(
          (f) =>
            !f.is_for_jalase &&
            f.dore_id === dore.dore_id &&
            f.file_type === "نمونه تکلیف"
        )
      : [];
  const azmonha =
    sample_files && dore
      ? sample_files.pdf_sample_files.filter(
          (f) =>
            !f.is_for_jalase &&
            f.dore_id === dore.dore_id &&
            f.file_type === "نمونه آزمون"
        )
      : [];
  return (
    <section className="sample-files-section mm-width">
      <div className="header-part">
        <div className="title-img">
          <img
            src={file_img}
            alt="فایل های دوره"
            width={59}
            height={59}
            loading="lazy"
          />
          <h2 className="file-section-title">فایل های دوره {slug_name}</h2>
        </div>
        <div className="file-btns">
          <button
            onClick={() => {
              set_active_type("jozve");
            }}
            className={active_type === "jozve" ? "file-btn active" : "file-btn"}
          >
            جزوات
          </button>
          <button
            onClick={() => {
              set_active_type("azmon");
            }}
            className={active_type === "azmon" ? "file-btn active" : "file-btn"}
          >
            آزمون ها
          </button>
          <button
            onClick={() => {
              set_active_type("taklif");
            }}
            className={
              active_type === "taklif" ? "file-btn active" : "file-btn"
            }
          >
            تکالیف
          </button>
        </div>
      </div>
      <div className="files-part">
        {active_type === "jozve" ? (
          jozveha && jozveha.length !== 0 ? (
            jozveha.map((f, i) => (
              <div key={f.file_id} className="file-item">
                <span className="file-span first-col">
                  {convert_to_persian(i++ + 1)}
                </span>
                <span className="file-span">{f.title}</span>
                <span className="file-span date-col">۱۰ مهر ۱۴۰۲</span>
                <span className="file-span">
                  {kelasses ? (
                    kelasses.find((k) => k.kelas_id === f.kelas_id) ? (
                      kelasses.find((k) => k.kelas_id === f.kelas_id)
                        .kelas_title
                    ) : (
                      "وارد نشده"
                    )
                  ) : (
                    <LittleLoading />
                  )}
                </span>
                <span className="file-span last-col">
                  <a
                    href={f.file_link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    دانلود
                  </a>
                </span>
              </div>
            ))
          ) : (
            <span className="nothing-to-show">موردی برای نمایش موجود نیست</span>
          )
        ) : (
          <></>
        )}
        {active_type === "azmon" ? (
          azmonha && azmonha.length !== 0 ? (
            azmonha.map((f, i) => (
              <div key={f.file_id} className="file-item">
                <span className="file-span first-col">
                  {convert_to_persian(i++ + 1)}
                </span>
                <span className="file-span">{f.title}</span>
                <span className="file-span date-col">۱۰ مهر ۱۴۰۲</span>
                <span className="file-span">
                  {kelasses ? (
                    kelasses.find((k) => k.kelas_id === f.kelas_id) ? (
                      kelasses.find((k) => k.kelas_id === f.kelas_id)
                        .kelas_title
                    ) : (
                      "وارد نشده"
                    )
                  ) : (
                    <LittleLoading />
                  )}
                </span>
                <span className="file-span last-col">
                  <a
                    href={f.file_link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    دانلود
                  </a>
                </span>
              </div>
            ))
          ) : (
            <span className="nothing-to-show">موردی برای نمایش موجود نیست</span>
          )
        ) : (
          <></>
        )}
        {active_type === "taklif" ? (
          taklifha && taklifha.length !== 0 ? (
            taklifha.map((f, i) => (
              <div key={f.file_id} className="file-item">
                <span className="file-span first-col">
                  {convert_to_persian(i++ + 1)}
                </span>
                <span className="file-span">{f.title}</span>
                <span className="file-span date-col">۱۰ مهر ۱۴۰۲</span>
                <span className="file-span">
                  {kelasses ? (
                    kelasses.find((k) => k.kelas_id === f.kelas_id) ? (
                      kelasses.find((k) => k.kelas_id === f.kelas_id)
                        .kelas_title
                    ) : (
                      "وارد نشده"
                    )
                  ) : (
                    <LittleLoading />
                  )}
                </span>
                <span className="file-span last-col">
                  <a
                    href={f.file_link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    دانلود
                  </a>
                </span>
              </div>
            ))
          ) : (
            <span className="nothing-to-show">موردی برای نمایش موجود نیست</span>
          )
        ) : (
          <></>
        )}
      </div>
    </section>
  );
};

export default SampleFiles;
