import React, { useState } from "react";
import posts from "./posts-ref";
import { Helmet } from "react-helmet";
import { DataContext } from "../context/DataContext";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
const AllBlogs = () => {
  return (
    <>
      <Helmet>
        <title>کاد | همه مقالات</title>
      </Helmet>
      <div className="all-blogs-page mm-width">
        <h1 className="page-title">مقالات کاد</h1>
        <p className="description">یه متن تقریبا بلند برای معرفی این بخش</p>
        <section className="blogs-wrapper">
          {posts.map((p) => (
            <div key={p.id} className="post-wrapper">
              <Link
                target="_blank"
                to={`/blogs/${p.title.replaceAll(" ", "-")}`}
              >
                <img
                  src={p.main_img}
                  alt={p.title}
                  width={300}
                  height={300}
                  loading="lazy"
                />
              </Link>
              <Link
                target="_blank"
                to={`/blogs/${p.title.replaceAll(" ", "-")}`}
              >
                <h2 className="post-title">{p.title}</h2>
              </Link>
              <p className="short-description">
                {p.description.slice(0, 100)} ...
              </p>
              <Link
                target="_blank"
                to={`/blogs/${p.title.replaceAll(" ", "-")}`}
                className="go-to-post-btn"
              >
                مطالعه بیشتر
              </Link>
            </div>
          ))}
        </section>
      </div>
    </>
  );
};

export default AllBlogs;
