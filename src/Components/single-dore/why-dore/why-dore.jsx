import React, { useState } from "react";
import why_img from "../../../assets/images/single-dore-assets/why-img.webp";
const WhyDore = ({ slug_name }) => {
  const [active_reason, set_active_reason] = useState(1);
  const reasons = [
    {
      id: 1,
      title: "دلیل اول برای خوبی دوره",
      text: "لورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستانلورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان",
    },
    {
      id: 2,
      title: "دلیل دوم برای خوبی دوره",
      text: "لورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستانلورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان",
    },
    {
      id: 3,
      title: "دلیل سوم برای خوبی دوره",
      text: "لورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستانلورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان لورم ایپسوم و داستان",
    },
  ];
  return (
    <section className="why-dore-section mm-width">
      <div className="dore-texts">
        <h2 className="why-title">چرا دوره {slug_name}</h2>
        <div className="why-resons">
          {reasons.map((r) => (
            <div
              key={r.id}
              className={active_reason === r.id ? "reason active" : "reason"}
              onClick={() => {
                set_active_reason(r.id);
              }}
            >
              <h3 className="reason-title">{r.title}</h3>
              <p className="reason-text">{r.text}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="why-img">
        <img
          src={why_img}
          alt={`چرا دوره ${slug_name}`}
          width={500}
          height={336}
        />
      </div>
    </section>
  );
};

export default WhyDore;
