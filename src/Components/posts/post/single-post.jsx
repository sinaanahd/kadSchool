import React, { useState } from "react";
import { Helmet } from "react-helmet";
import LittleLoading from "../../reuseables/little-loading";
import posts from "../posts-ref";
import { DataContext } from "../../context/DataContext";
import convert_to_persian from "../../functions/convert-to-persian";
const SinglePost = () => {
  const slug = decodeURIComponent(
    window.location.pathname.split("/")[2].replaceAll("-", " ")
  );
  const post = posts.find((p) => p.title === slug);
  return (
    <>
      <Helmet>
        <title>کاد | {slug}</title>
      </Helmet>
      <div className="single-post-wrapper mm-width">
        <h1 className="title">{slug}</h1>
        <div className="intro-img-text">
          <p className="intro-text">{post.intro_text}</p>
          <img src={post.main_img} alt={post.title} className="main-img" />
        </div>
        {post.sections.map((s) => (
          <section className="article-section">
            <h2 className="section-title" key={s.id}>
              {convert_to_persian(s.id)}. {s.title}
            </h2>
            <div className="img-text">
              <p className="section-text">{s.text}</p>
              {s.img ? (
                <span className="img-wrapper">
                  <img src={s.img} alt={s.title} />
                </span>
              ) : (
                <></>
              )}
            </div>
            {s.cta ? s.cta : <></>}
          </section>
        ))}
      </div>
    </>
  );
};

export default SinglePost;
