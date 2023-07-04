import React, { Component } from "react";
import { Helmet } from "react-helmet";
import SideBar from "../side-bar/side-bar";
import spilit_in_three from "../functions/spilit_in_three";
import convert_to_persian from "../functions/convert-to-persian";
import withWebsiteData from "../hoc/with-website-data";

import asset_1 from "../../assets/images/prod-asset-1.svg";
import asset_2 from "../../assets/images/prod-asset-2.svg";
import downArrowBlue from "../../assets/images/down-arrow-blue.svg";
import avatar from "../../assets/images/avatar.svg";
import cart_img from "../../assets/images/cart.svg";
import PopUp from "./pop-up/pop-up";
import convert_days from "../functions/convert-days";
import LittleLoading from "../reuseables/little-loading";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
class SingleProd extends Component {
  state = {
    more_cm: false,
    pop_up: false,
  };
  componentDidMount() {
    this.props.find_single_prod(
      parseInt(window.location.pathname.split("/")[2])
    );
    const data_check = setInterval(() => {
      if (this.props.single_prod) {
        clearInterval(data_check);
      } else {
        this.props.find_single_prod(
          parseInt(window.location.pathname.split("/")[2])
        );
      }
    }, 2000);
  }

  handle_cm = () => {
    const more_cm = !this.state.more_cm;
    this.setState({ more_cm });
  };
  handle_pop_up = (pop_up, e) => {
    if (e) {
      const classes = [...e.target.classList];
      if (classes.includes("pop-up-wrapper")) {
        this.setState({ pop_up: false });
      }
    } else {
      this.setState({ pop_up });
    }
  };
  render() {
    const { cart, request_id, handle_cart, single_prod } = this.props;
    return (
      <>
        <Helmet>
          <title>{single_prod ? single_prod.kelas_title : "اسم کلاس"}</title>
        </Helmet>
        <section className="bgc-wrapper single-prod-wrapper">
          <div className="main-single-prod mm-width">
            <SideBar />
            <div className="main-content">
              <h1 className="title">
                {single_prod ? single_prod.kelas_title : "اسم کلاس"}
              </h1>
              <div className="prod-details-wrapper">
                <div className="prod-details-spec">
                  <span className="add-to-cart-prod">
                    <img
                      src={single_prod ? single_prod.image_link : ""}
                      alt={single_prod ? single_prod.kelas_title : "اسم کلاس"}
                      className="prod-img"
                    />
                    <span className="price-wrapper">
                      <span className="price-title">قیمت :</span>
                      <span className="price">
                        {single_prod ? (
                          single_prod.price !== 0 ? (
                            spilit_in_three(
                              convert_to_persian(single_prod.price)
                            )
                          ) : (
                            "رایگان"
                          )
                        ) : (
                          <LittleLoading />
                        )}
                      </span>
                    </span>
                    {cart && single_prod ? (
                      cart.items_ids.includes(single_prod.kelas_id) ? (
                        <span
                          className="add-to-cart-btn"
                          onClick={() => {
                            handle_cart(single_prod.kelas_id);
                          }}>
                          <img src={cart_img} alt="" />
                          {request_id !== single_prod.kelas_id ? (
                            "حذف از سبد خرید"
                          ) : (
                            <LittleLoading />
                          )}
                        </span>
                      ) : (
                        <span
                          className="add-to-cart-btn"
                          onClick={() => {
                            handle_cart(single_prod.kelas_id);
                          }}>
                          <img src={cart_img} alt="" />
                          {request_id !== single_prod.kelas_id ? (
                            "افزودن به سبد خرید"
                          ) : (
                            <LittleLoading />
                          )}
                        </span>
                      )
                    ) : (
                      <Link to={"/Login"} className="add-to-cart-btn">
                        <img src={cart_img} alt="" />
                        افزودن به سبد خرید
                      </Link>
                    )}
                    {/* <span className="add-to-cart-btn">
                      <img src={cart_img} alt="" />
                      افزودن به سبد خرید
                    </span> */}
                  </span>
                  <span className="prod-details-text-wrapper">
                    <span className="prod-details-text">
                      <span className="detail-title">نام استاد : </span>
                      <span className="content">
                        {single_prod ? (
                          single_prod.teachers.map((t) => (
                            <span key={t.teacher_id}>{t.fullname}</span>
                          ))
                        ) : (
                          <></>
                        )}
                      </span>
                    </span>
                    <span className="prod-details-text">
                      <span className="detail-title">تاریخ شروع کلاس:</span>
                      <span className="content">
                        {/* //date = date.toLocaleDateString("fa-IR").split("/"); */}
                        {single_prod ? (
                          new Date(
                            single_prod.dore.dore_start_date
                          ).toLocaleDateString("fa-IR")
                        ) : (
                          <></>
                        )}
                      </span>
                    </span>
                    <span className="prod-details-text">
                      <span className="detail-title">
                        <img src={asset_1} alt="" />
                        برنامه هفتگی :
                      </span>
                      <span className="content column-need">
                        {single_prod ? (
                          single_prod.stream_plans.map((p, i) => (
                            <span key={i++}>
                              {convert_days(p.week_day_english)} ها{" "}
                              {convert_to_persian(p.start_time.split(":")[0])} -
                              {convert_to_persian(p.finish_time.split(":")[0])}
                            </span>
                          ))
                        ) : (
                          <></>
                        )}
                      </span>
                    </span>
                    {/* <span className="prod-details-text">
                      <span className="detail-title">
                        <img src={asset_2} alt="" />
                        ساعت برگزاری:
                      </span>
                      <span className="content">
                        {single_prod ? (
                          single_prod.stream_plans.map((p, i) => (
                            <span key={i++}>
                              {convert_to_persian(p.start_time.split(":")[0])}
                              {convert_to_persian(p.finish_time.split(":")[0])}
                            </span>
                          ))
                        ) : (
                          <></>
                        )}
                      </span>
                    </span> */}
                  </span>
                </div>
                <div className="prod-in-one-look">
                  <h2 className="semi-title">دوره در یک نگاه:</h2>
                  <ul className="prod-texts">
                    {single_prod ? (
                      single_prod.descriptions.length !== 0 ? (
                        single_prod.descriptions.map((d, i) => (
                          <li key={i++}>{d}</li>
                        ))
                      ) : (
                        <li>هنوز دوره در یک نگاه وارد نشده</li>
                      )
                    ) : (
                      <></>
                    )}
                    {/* <li>
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم استفاده از
                      طراحان گرافیک است.
                    </li>
                    <li>
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم استفاده از
                      طراحان گرافیک است.
                    </li>
                    <li>
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم استفاده از
                      طراحان گرافیک است.
                    </li>
                    <li>
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم استفاده از
                      طراحان گرافیک است.
                    </li> */}
                  </ul>
                </div>
              </div>
              <div className="boxes-wrapper">
                <div
                  className="box"
                  onClick={() => {
                    this.handle_pop_up("intro");
                  }}>
                  <p>معرفی دوره</p>
                </div>
                <div
                  className="box"
                  onClick={() => {
                    this.handle_pop_up("sample");
                  }}>
                  <p>نمونه تدریس و فایل ها</p>
                </div>
                <div
                  className="box"
                  onClick={() => {
                    this.handle_pop_up("faq");
                  }}>
                  <p>سوالات متداول</p>
                </div>
                <div
                  className="box"
                  onClick={() => {
                    this.handle_pop_up("resume");
                  }}>
                  <p>رزومه استاد</p>
                </div>
              </div>
              <div className="students-comments-wrapper">
                <h3 className="semi-2-title">نظرات دانش آموزان</h3>
                <textarea
                  name=""
                  id=""
                  placeholder="type ..."
                  className="text-area"></textarea>
                <span className="submit-btn-wrapper">
                  <span className="submit-comment">ارسال</span>
                </span>
                <div
                  className={
                    this.state.more_cm
                      ? "comments-wrapper open-cm"
                      : "comments-wrapper"
                  }>
                  <div className="comment">
                    <span className="name-avatar">
                      <img src={avatar} alt="" />
                      نام کاربری
                    </span>
                    <p className="comment-text">
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم استفاده از
                      طراحان گرافیک است.
                    </p>
                  </div>
                  <div className="comment">
                    <span className="name-avatar">
                      <img src={avatar} alt="" />
                      نام کاربری
                    </span>
                    <p className="comment-text">
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم استفاده از
                      طراحان گرافیک است.
                    </p>
                  </div>
                  <div className="comment">
                    <span className="name-avatar">
                      <img src={avatar} alt="" />
                      نام کاربری
                    </span>
                    <p className="comment-text">
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم استفاده از
                      طراحان گرافیک است.
                    </p>
                  </div>
                  <div className="comment">
                    <span className="name-avatar">
                      <img src={avatar} alt="" />
                      نام کاربری
                    </span>
                    <p className="comment-text">
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم استفاده از
                      طراحان گرافیک است.
                    </p>
                  </div>
                  <div className="comment">
                    <span className="name-avatar">
                      <img src={avatar} alt="" />
                      نام کاربری
                    </span>
                    <p className="comment-text">
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم استفاده از
                      طراحان گرافیک است.
                    </p>
                  </div>
                  <div className="comment">
                    <span className="name-avatar">
                      <img src={avatar} alt="" />
                      نام کاربری
                    </span>
                    <p className="comment-text">
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم استفاده از
                      طراحان گرافیک است.
                    </p>
                  </div>

                  <span
                    onClick={() => {
                      this.handle_cm();
                    }}
                    className={this.state.more_cm ? "more close" : "more"}>
                    {this.state.more_cm ? "کمتر" : "بیشتر"}
                    <img src={downArrowBlue} alt="" />
                  </span>
                </div>
              </div>
            </div>
          </div>
          {this.state.pop_up ? (
            <PopUp
              type={this.state.pop_up}
              handle_pop_up={this.handle_pop_up}
              sample_files={single_prod ? single_prod.sample_files : false}
              faq={single_prod ? single_prod.FAQ : false}
              cv={single_prod ? single_prod.teachers[0].cv : false}
              dore={single_prod ? single_prod.dore : false}
            />
          ) : (
            <></>
          )}
        </section>
      </>
    );
  }
}

export default withWebsiteData(SingleProd);
