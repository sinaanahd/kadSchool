import React, { Component } from "react";
import withWebsiteData from "../hoc/with-website-data";
import { Helmet } from "react-helmet";
import SideBar from "../side-bar/side-bar";
import { Link } from "react-router-dom";
import scrollToTop from "../functions/scroll";
class Teachers extends Component {
  state = {};
  render() {
    return (
      <>
        <Helmet>
          <title>بهترین و با تجربه ترین استادان کنکور ایران</title>
        </Helmet>
        <section className="teachers-page-wrapper bgc-wrapper">
          <div className="teachers-wrapper mm-width">
            <SideBar />
            <div className="main-content">
              <h1 className="title">
                بهترین و با تجربه ترین استادان کنکور ایران
              </h1>
              <div className="teachers">
                <div className="teacher">
                  <Link
                    onClick={() => {
                      scrollToTop();
                    }}
                    to="/Teacher/:id"
                    className="img-wrapper">
                    <img src="" alt="" />
                  </Link>
                  <h2 className="teacher-name">
                    <Link
                      onClick={() => {
                        scrollToTop();
                      }}
                      to="/Teacher/:id">
                      نام استاد
                    </Link>
                  </h2>
                  <h3 className="course-name">
                    <Link
                      onClick={() => {
                        scrollToTop();
                      }}
                      to="/SingleCourse/:id">
                      نام درس
                    </Link>
                  </h3>
                </div>
                <div className="teacher">
                  <Link
                    onClick={() => {
                      scrollToTop();
                    }}
                    to="/Teacher/:id"
                    className="img-wrapper">
                    <img src="" alt="" />
                  </Link>
                  <h2 className="teacher-name">
                    <Link
                      onClick={() => {
                        scrollToTop();
                      }}
                      to="/Teacher/:id">
                      نام استاد
                    </Link>
                  </h2>
                  <h3 className="course-name">
                    <Link
                      onClick={() => {
                        scrollToTop();
                      }}
                      to="/SingleCourse/:id">
                      نام درس
                    </Link>
                  </h3>
                </div>
                <div className="teacher">
                  <Link
                    onClick={() => {
                      scrollToTop();
                    }}
                    to="/Teacher/:id"
                    className="img-wrapper">
                    <img src="" alt="" />
                  </Link>
                  <h2 className="teacher-name">
                    <Link
                      onClick={() => {
                        scrollToTop();
                      }}
                      to="/Teacher/:id">
                      نام استاد
                    </Link>
                  </h2>
                  <h3 className="course-name">
                    <Link
                      onClick={() => {
                        scrollToTop();
                      }}
                      to="/SingleCourse/:id">
                      نام درس
                    </Link>
                  </h3>
                </div>
                <div className="teacher">
                  <Link
                    onClick={() => {
                      scrollToTop();
                    }}
                    to="/Teacher/:id"
                    className="img-wrapper">
                    <img src="" alt="" />
                  </Link>
                  <h2 className="teacher-name">
                    <Link
                      onClick={() => {
                        scrollToTop();
                      }}
                      to="/Teacher/:id">
                      نام استاد
                    </Link>
                  </h2>
                  <h3 className="course-name">
                    <Link
                      onClick={() => {
                        scrollToTop();
                      }}
                      to="/SingleCourse/:id">
                      نام درس
                    </Link>
                  </h3>
                </div>
                <div className="teacher">
                  <Link
                    onClick={() => {
                      scrollToTop();
                    }}
                    to="/Teacher/:id"
                    className="img-wrapper">
                    <img src="" alt="" />
                  </Link>
                  <h2 className="teacher-name">
                    <Link
                      onClick={() => {
                        scrollToTop();
                      }}
                      to="/Teacher/:id">
                      نام استاد
                    </Link>
                  </h2>
                  <h3 className="course-name">
                    <Link
                      onClick={() => {
                        scrollToTop();
                      }}
                      to="/SingleCourse/:id">
                      نام درس
                    </Link>
                  </h3>
                </div>
                <div className="teacher">
                  <Link
                    onClick={() => {
                      scrollToTop();
                    }}
                    to="/Teacher/:id"
                    className="img-wrapper">
                    <img src="" alt="" />
                  </Link>
                  <h2 className="teacher-name">
                    <Link
                      onClick={() => {
                        scrollToTop();
                      }}
                      to="/Teacher/:id">
                      نام استاد
                    </Link>
                  </h2>
                  <h3 className="course-name">
                    <Link
                      onClick={() => {
                        scrollToTop();
                      }}
                      to="/SingleCourse/:id">
                      نام درس
                    </Link>
                  </h3>
                </div>
                <div className="teacher">
                  <Link
                    onClick={() => {
                      scrollToTop();
                    }}
                    to="/Teacher/:id"
                    className="img-wrapper">
                    <img src="" alt="" />
                  </Link>
                  <h2 className="teacher-name">
                    <Link
                      onClick={() => {
                        scrollToTop();
                      }}
                      to="/Teacher/:id">
                      نام استاد
                    </Link>
                  </h2>
                  <h3 className="course-name">
                    <Link
                      onClick={() => {
                        scrollToTop();
                      }}
                      to="/SingleCourse/:id">
                      نام درس
                    </Link>
                  </h3>
                </div>
                <div className="teacher">
                  <Link
                    onClick={() => {
                      scrollToTop();
                    }}
                    to="/Teacher/:id"
                    className="img-wrapper">
                    <img src="" alt="" />
                  </Link>
                  <h2 className="teacher-name">
                    <Link
                      onClick={() => {
                        scrollToTop();
                      }}
                      to="/Teacher/:id">
                      نام استاد
                    </Link>
                  </h2>
                  <h3 className="course-name">
                    <Link
                      onClick={() => {
                        scrollToTop();
                      }}
                      to="/SingleCourse/:id">
                      نام درس
                    </Link>
                  </h3>
                </div>
                <div className="teacher">
                  <Link
                    onClick={() => {
                      scrollToTop();
                    }}
                    to="/Teacher/:id"
                    className="img-wrapper">
                    <img src="" alt="" />
                  </Link>
                  <h2 className="teacher-name">
                    <Link
                      onClick={() => {
                        scrollToTop();
                      }}
                      to="/Teacher/:id">
                      نام استاد
                    </Link>
                  </h2>
                  <h3 className="course-name">
                    <Link
                      onClick={() => {
                        scrollToTop();
                      }}
                      to="/SingleCourse/:id">
                      نام درس
                    </Link>
                  </h3>
                </div>
                <div className="teacher">
                  <Link
                    onClick={() => {
                      scrollToTop();
                    }}
                    to="/Teacher/:id"
                    className="img-wrapper">
                    <img src="" alt="" />
                  </Link>
                  <h2 className="teacher-name">
                    <Link
                      onClick={() => {
                        scrollToTop();
                      }}
                      to="/Teacher/:id">
                      نام استاد
                    </Link>
                  </h2>
                  <h3 className="course-name">
                    <Link
                      onClick={() => {
                        scrollToTop();
                      }}
                      to="/SingleCourse/:id">
                      نام درس
                    </Link>
                  </h3>
                </div>
                <div className="teacher">
                  <Link
                    onClick={() => {
                      scrollToTop();
                    }}
                    to="/Teacher/:id"
                    className="img-wrapper">
                    <img src="" alt="" />
                  </Link>
                  <h2 className="teacher-name">
                    <Link
                      onClick={() => {
                        scrollToTop();
                      }}
                      to="/Teacher/:id">
                      نام استاد
                    </Link>
                  </h2>
                  <h3 className="course-name">
                    <Link
                      onClick={() => {
                        scrollToTop();
                      }}
                      to="/SingleCourse/:id">
                      نام درس
                    </Link>
                  </h3>
                </div>
                <div className="teacher">
                  <Link
                    onClick={() => {
                      scrollToTop();
                    }}
                    to="/Teacher/:id"
                    className="img-wrapper">
                    <img src="" alt="" />
                  </Link>
                  <h2 className="teacher-name">
                    <Link
                      onClick={() => {
                        scrollToTop();
                      }}
                      to="/Teacher/:id">
                      نام استاد
                    </Link>
                  </h2>
                  <h3 className="course-name">
                    <Link
                      onClick={() => {
                        scrollToTop();
                      }}
                      to="/SingleCourse/:id">
                      نام درس
                    </Link>
                  </h3>
                </div>
                <div className="teacher">
                  <Link
                    onClick={() => {
                      scrollToTop();
                    }}
                    to="/Teacher/:id"
                    className="img-wrapper">
                    <img src="" alt="" />
                  </Link>
                  <h2 className="teacher-name">
                    <Link
                      onClick={() => {
                        scrollToTop();
                      }}
                      to="/Teacher/:id">
                      نام استاد
                    </Link>
                  </h2>
                  <h3 className="course-name">
                    <Link
                      onClick={() => {
                        scrollToTop();
                      }}
                      to="/SingleCourse/:id">
                      نام درس
                    </Link>
                  </h3>
                </div>
                <div className="teacher">
                  <Link
                    onClick={() => {
                      scrollToTop();
                    }}
                    to="/Teacher/:id"
                    className="img-wrapper">
                    <img src="" alt="" />
                  </Link>
                  <h2 className="teacher-name">
                    <Link
                      onClick={() => {
                        scrollToTop();
                      }}
                      to="/Teacher/:id">
                      نام استاد
                    </Link>
                  </h2>
                  <h3 className="course-name">
                    <Link
                      onClick={() => {
                        scrollToTop();
                      }}
                      to="/SingleCourse/:id">
                      نام درس
                    </Link>
                  </h3>
                </div>
                <div className="teacher">
                  <Link
                    onClick={() => {
                      scrollToTop();
                    }}
                    to="/Teacher/:id"
                    className="img-wrapper">
                    <img src="" alt="" />
                  </Link>
                  <h2 className="teacher-name">
                    <Link
                      onClick={() => {
                        scrollToTop();
                      }}
                      to="/Teacher/:id">
                      نام استاد
                    </Link>
                  </h2>
                  <h3 className="course-name">
                    <Link
                      onClick={() => {
                        scrollToTop();
                      }}
                      to="/SingleCourse/:id">
                      نام درس
                    </Link>
                  </h3>
                </div>
                <div className="teacher">
                  <Link
                    onClick={() => {
                      scrollToTop();
                    }}
                    to="/Teacher/:id"
                    className="img-wrapper">
                    <img src="" alt="" />
                  </Link>
                  <h2 className="teacher-name">
                    <Link
                      onClick={() => {
                        scrollToTop();
                      }}
                      to="/Teacher/:id">
                      نام استاد
                    </Link>
                  </h2>
                  <h3 className="course-name">
                    <Link
                      onClick={() => {
                        scrollToTop();
                      }}
                      to="/SingleCourse/:id">
                      نام درس
                    </Link>
                  </h3>
                </div>
                <div className="teacher">
                  <Link
                    onClick={() => {
                      scrollToTop();
                    }}
                    to="/Teacher/:id"
                    className="img-wrapper">
                    <img src="" alt="" />
                  </Link>
                  <h2 className="teacher-name">
                    <Link
                      onClick={() => {
                        scrollToTop();
                      }}
                      to="/Teacher/:id">
                      نام استاد
                    </Link>
                  </h2>
                  <h3 className="course-name">
                    <Link
                      onClick={() => {
                        scrollToTop();
                      }}
                      to="/SingleCourse/:id">
                      نام درس
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default withWebsiteData(Teachers);
