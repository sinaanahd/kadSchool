import React, { Component } from "react";
import withWebsiteData from "../hoc/with-website-data";
import { Helmet } from "react-helmet";
import HomeHeader from "../home/header/home-header";
import HomeFooter from "../home/footer/home-footer";

import heroImg from "../../assets/images/special-discount/special-main-photo-2.webp";
import stage_1 from "../../assets/images/special-discount/stage-bg.png";
import stage_2 from "../../assets/images/special-discount/stage-bg-2.png";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import scrollToTop from "../functions/scroll";
import copy_to_clip_board from "../functions/copy-to-clip-board";
class SpecialDiscountPage extends Component {
  state = {
    copid: false,
  };
  copy_code = () => {
    this.setState({ copid: true });
    setTimeout(() => {
      this.setState({ copid: false });
    }, 2000);
  };
  render() {
    const { user } = this.props;
    return (
      <>
        <Helmet>
          <title>کاد | تخفیف ویژه</title>
        </Helmet>
        <div className="campaign-wrapper apolo-11 discount-page-secret">
          <HomeHeader user={user} />
          <section className="secret-hero-section mm-width">
            <div className="hero-texts-wrapper">
              <h1 className="secret-title">تخفیف ویژه کاد</h1>
              <p className="secret-text">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
                نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
                کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان
                جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را
                برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در
                زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و
                دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد
                وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات
                پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
              </p>
            </div>
            <div className="secret-hero-img-wrapper">
              <img src={heroImg} alt="تخفیف ویژه کاد" />
            </div>
          </section>
          <section className="stage-show-data mm-width">
            <h2 className="secret-semi-title">مراحل این بازی تخفیف</h2>
            <p className="stage-desc">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
              نیاز و کاربردهای متنوع ب
            </p>
            <div className="all-stages">
              <div className="stage-wrapper">
                <h3 className="secret-stage-title">مرحله فلان</h3>
                <span className="secret-stage-status">طی شده</span>
                <p className="secret-stage-text">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                  تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود
                </p>
              </div>
              <div className="stage-wrapper">
                <h3 className="secret-stage-title">مرحله فلان</h3>
                <span className="secret-stage-status">طی شده</span>
                <p className="secret-stage-text">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                  تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود
                </p>
              </div>
              <div className="stage-wrapper">
                <h3 className="secret-stage-title">مرحله فلان</h3>
                <span className="secret-stage-status">طی شده</span>
                <p className="secret-stage-text">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                  تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود
                </p>
              </div>
              <div className="stage-wrapper">
                <h3 className="secret-stage-title">مرحله فلان</h3>
                <span className="secret-stage-status">طی شده</span>
                <p className="secret-stage-text">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                  تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود
                </p>
              </div>
              <div className="stage-wrapper">
                <h3 className="secret-stage-title">مرحله فلان</h3>
                <span className="secret-stage-status">طی شده</span>
                <p className="secret-stage-text">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                  تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود
                </p>
              </div>
              <div className="stage-wrapper">
                <h3 className="secret-stage-title">مرحله فلان</h3>
                <span className="secret-stage-status">طی شده</span>
                <p className="secret-stage-text">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                  تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود
                </p>
              </div>
            </div>
            <div className="abs-1-img">
              <img
                src={stage_1}
                alt="مراحل بازی تخفیف"
                loading="lazy"
                width={200}
                height={165}
              />
            </div>
            <div className="abs-2-img">
              <img
                src={stage_2}
                alt="مراحل بازی تخفیف"
                loading="lazy"
                width={200}
                height={109}
              />
            </div>
          </section>
          <section className="lets-start mm-width">
            <h2 className="secret-semi-title">
              آماده‌ای؟ بزن بریم برای شروع تخفیف
            </h2>
            <p className="secret-start-text">
              حالا که با شرایط اینا آشنا شدی پس رو دکمه زیر بزن و بریم تخفیف و
              مسخره بازی رو شروع کنیم
            </p>
            <span className="start-special-discount-btn">شروع بازی</span>
          </section>
          <section className="after-join-data mm-width">
            <h2 className="secret-semi-title">اطلاعات شما</h2>
            <p className="secret-start-text">
              در این قسمت میتونی اطلاعات مربوط به دیتا های لازم برای فلان و
              بهمان رو پیدا کنی که اینجا بعضی از اون اطلاعات هست
            </p>
            <div className="your-discount-code">
              <span className="discount-title">کد تخفیف اختصاصی شما : </span>
              <span className="your-code">TestCode-213</span>
              <span
                className="copy-code"
                onClick={() => {
                  copy_to_clip_board("test-code");
                  this.copy_code();
                }}
              >
                {this.state.copid ? "کپی شد..!" : "کپی کردن کد"}
              </span>
            </div>
            <div className="btns-wrapper">
              <Link to="/Shop" onClick={scrollToTop}>
                فروشگاه کاد
              </Link>
              <Link to="/Profile" onClick={scrollToTop}>
                پنل کاربری
              </Link>
            </div>
          </section>
          <div className="refresh-page">رفرش دیتا</div>
          <HomeFooter />
        </div>
      </>
    );
  }
}

export default withWebsiteData(SpecialDiscountPage);
