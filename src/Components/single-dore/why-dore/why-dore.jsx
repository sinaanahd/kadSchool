import React, { useState } from "react";
import why_img from "../../../assets/images/single-dore-assets/why-img.webp";
import LittleLoading from "../../reuseables/little-loading";
const WhyDore = ({ slug_name, reasons }) => {
  const [active_reason, set_active_reason] = useState(0);
  return (
    <section className="why-dore-section mm-width">
      <div className="dore-texts">
        <h2 className="why-title">چرا دوره {slug_name}</h2>
        <div className="why-resons">
          {reasons ? (
            reasons.map((r, i) => (
              <div
                key={i}
                className={active_reason === i ? "reason active" : "reason"}
                onClick={() => {
                  set_active_reason(i);
                }}
              >
                <h3 className="reason-title">{r.title}</h3>
                <p className="reason-text">{r.text}</p>
              </div>
            ))
          ) : (
            <LittleLoading />
          )}
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
