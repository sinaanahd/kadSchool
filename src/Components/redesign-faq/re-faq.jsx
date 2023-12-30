import React, { useState } from "react";
import title_asset2 from "../../assets/images/single-class-assets/title-asset-2.webp";
import plus from "../../assets/images/single-teachers-asset/faq-icon.webp";
const FAQ_new = ({ faq }) => {
  const [active_faq, set_active_faq] = useState(0);
  return (
    <>
      <section className="faq-section-wrapper mm-width">
        <div className="section-header mm-width">
          <img src={title_asset2} alt="نظرات" width={100} height={100} />
          <h2 className="faq-section-title">سوالات متداول</h2>
        </div>
        {faq
          ? faq.map((f, i) => (
              <div
                key={i++}
                className={active_faq === i ? "faq-item opened" : "faq-item"}
              >
                <div
                  className="faq-header"
                  onClick={() => {
                    active_faq === i - 1
                      ? set_active_faq(false)
                      : set_active_faq(i - 1);
                  }}
                >
                  <h3 className="faq-question">{f.Q}</h3>
                  <img
                    src={plus}
                    alt="باز کردن"
                    width={40}
                    height={40}
                    loading="lazy"
                  />
                </div>
                <p className="faq-answer">{f.A}</p>
              </div>
            ))
          : "موردی برای نمایش وجود ندارد"}
      </section>
    </>
  );
};

export default FAQ_new;
