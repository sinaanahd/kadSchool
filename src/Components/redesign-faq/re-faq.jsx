import React, { useState } from "react";
import title_asset2 from "../../assets/images/single-class-assets/title-asset-2.webp";
import plus from "../../assets/images/single-teachers-asset/faq-icon.webp";
const FAQ_new = ({ faq }) => {
  return (
    <>
      <section className="faq-section-wrapper mm-width">
        <div className="section-header mm-width">
          <img src={title_asset2} alt="نظرات" width={100} height={100} />
          <h2 className="faq-section-title">سوالات متداول</h2>
        </div>
        {faq
          ? faq.map((f) => (
              <div className="faq-item opened">
                <div className="faq-header">
                  <h3 className="faq-question">لورم ایپسوم و داستان</h3>
                  <img
                    src={plus}
                    alt="باز کردن"
                    width={40}
                    height={40}
                    loading="lazy"
                  />
                </div>
                <p className="faq-answer">
                  لورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان
                  لورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان
                  لورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان
                  لورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان
                  لورم ایپسوم و داستان
                </p>
              </div>
            ))
          : "موردی برای نمایش وجود ندارد"}

        {/* <div className="faq-item">
          <div className="faq-header">
            <h3 className="faq-question">لورم ایپسوم و داستان</h3>
            <img
              src={plus}
              alt="باز کردن"
              width={40}
              height={40}
              loading="lazy"
            />
          </div>
          <p className="faq-answer">
            لورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان لورم
            ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان لورم
            ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان لورم
            ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان لورم
            ایپسوم و داستان
          </p>
        </div>
        <div className="faq-item">
          <div className="faq-header">
            <h3 className="faq-question">لورم ایپسوم و داستان</h3>
            <img
              src={plus}
              alt="باز کردن"
              width={40}
              height={40}
              loading="lazy"
            />
          </div>
          <p className="faq-answer">
            لورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان لورم
            ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان لورم
            ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان لورم
            ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان لورم
            ایپسوم و داستان
          </p>
        </div>
        <div className="faq-item">
          <div className="faq-header">
            <h3 className="faq-question">لورم ایپسوم و داستان</h3>
            <img
              src={plus}
              alt="باز کردن"
              width={40}
              height={40}
              loading="lazy"
            />
          </div>
          <p className="faq-answer">
            لورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان لورم
            ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان لورم
            ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان لورم
            ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان لورم
            ایپسوم و داستان
          </p>
        </div>
        <div className="faq-item">
          <div className="faq-header">
            <h3 className="faq-question">لورم ایپسوم و داستان</h3>
            <img
              src={plus}
              alt="باز کردن"
              width={40}
              height={40}
              loading="lazy"
            />
          </div>
          <p className="faq-answer">
            لورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان لورم
            ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان لورم
            ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان لورم
            ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان لورم
            ایپسوم و داستان
          </p>
        </div>
        <div className="faq-item">
          <div className="faq-header">
            <h3 className="faq-question">لورم ایپسوم و داستان</h3>
            <img
              src={plus}
              alt="باز کردن"
              width={40}
              height={40}
              loading="lazy"
            />
          </div>
          <p className="faq-answer">
            لورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان لورم
            ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان لورم
            ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان لورم
            ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان لورم
            ایپسوم و داستان
          </p>
        </div> */}
      </section>
    </>
  );
};

export default FAQ_new;
