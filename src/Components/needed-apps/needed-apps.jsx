import React, { Component } from "react";
import { Helmet } from "react-helmet";
import withWebsiteData from "../hoc/with-website-data";
import SideBar from "../side-bar/side-bar";

import android from "../../assets/images/andriod-logo.webp";
import mac from "../../assets/images/mac-logo.webp";
import windows from "../../assets/images/windows-logo.webp";
import ios from "../../assets/images/ios-logo.webp";
import arrowDown from "../../assets/images/arrow-blue-up.webp";
class NeededApps extends Component {
  state = {
    active: 0,
  };
  handle_active = (active) => {
    const last = this.state.active;
    if (active === last) this.setState({ active: 0 });
    else this.setState({ active });
  };
  render() {
    return (
      <>
        <Helmet>
          <title>نرم افزار های مورد نیاز</title>
          <meta
            name="description"
            content="در این صفحه، می‌توانید تمام نرم‌افزارهای مورد نیاز برای استفاده از خدمات ما را برای تمام دستگاه‌ها و سیستم‌عامل‌ها پیدا کنید."
          />
        </Helmet>
        <section className="bgc-wrapper">
          <div className="mm-width needed-apps-wrapper">
            <SideBar />
            <div className="needed-apps">
              <h1 className="title">نرم افزار های مورد نیاز</h1>
              <div className="apps-wrapper">
                <div
                  className={
                    this.state.active === 1
                      ? "app-wrapper active"
                      : "app-wrapper"
                  }
                >
                  <span
                    className="app-title-icon"
                    onClick={() => {
                      this.handle_active(1);
                    }}
                  >
                    <h2 className="app-title">
                      نرم افزار Spot Player برای مشاهده آفلاین کلاس ها
                    </h2>
                    <img src={arrowDown} alt="بالا" width={15} height={9} />
                  </span>
                  <div className="spot-descriptions">
                    <h3>مراحل نصب و استفاده از برنامه اسپات پلیر:</h3>
                    <ol>
                      <li>
                        با توجه به نوع دستگاه خود، برنامه را از طریق لینک‌‌های
                        زیر نصب نمایید
                      </li>
                      <li>
                        پس از باز کردن برنامه، بر روی گزینۀ «باز کردن دوره جدید»
                        کلیک کنید
                      </li>
                      <li>
                        کلید لایسنس دوره را در بخش «License» برنامه وارد کنید.
                      </li>
                      <li>
                        با کلیک‌کردن بر روی دکمه پخش در هر جلسه، ویدیوی آن درس
                        دانلود می‌شود و محتوا قابل استفاده خواهد بود.
                      </li>
                    </ol>
                    <h3>لطفاً نکات زیر را در نظر داشته باشید:</h3>
                    <ol>
                      <li>
                        حد مجاز استفاده از کلید لایسنس، تا یک بار نصب برنامه
                        می‌باشد.(کد یکبارمصرف )
                      </li>
                      <li>
                        درصورت نیاز صدور مجدد کد هزینه برعهده خود دانش آموز
                        میباشد
                      </li>
                      <li>
                        اسپات پلیر بر روی دستگاه‌های زیر نصب نمی‌شود:
                        <br /> - اندروید پایین‌تر از نسخه‌ی 5
                        <br /> - ویندوز پایین‌تر از نسخه‌ی 7
                        <br /> - سیستم عامل آیفون ios (اسپات پلیر به‌زودی برای
                        این نوع سیستم هم برنامه ارائه خواهد کرد)
                      </li>
                    </ol>
                  </div>
                  <div className="os-wrapper">
                    <div className="os">
                      <img src={windows} alt="ویندوز" width={40} height={40} />
                      <a
                        href="https://app.spotplayer.ir/assets/bin/spotplayer/setup.exe"
                        target="_blank"
                        className="os-link"
                      >
                        Windows
                      </a>
                    </div>
                    <div className="os">
                      <img src={mac} alt="مکینتاش" width={40} height={44} />
                      <a
                        href="https://app.spotplayer.ir/assets/bin/spotplayer/setup.dmg"
                        target="_blank"
                        className="os-link"
                      >
                        MacOS
                      </a>
                    </div>
                    <div className="os">
                      <img src={android} alt="اندروید" width={40} height={48} />
                      <a
                        href="https://app.spotplayer.ir/assets/bin/spotplayer/setup.apk"
                        target="_blank"
                        className="os-link"
                      >
                        Android
                      </a>
                    </div>
                    {/* <div className="os">
                      <img src={ios} alt="ios" width={40} height={25} />
                      <a href="" target="_blank" className="os-link">
                        iOS
                      </a>
                    </div> */}
                  </div>
                </div>
                <div
                  className={
                    this.state.active === 2
                      ? "app-wrapper active"
                      : "app-wrapper"
                  }
                >
                  <span
                    className="app-title-icon"
                    onClick={() => {
                      this.handle_active(2);
                    }}
                  >
                    <h2 className="app-title">نرم افزار اجرای فایل PDF</h2>
                    <img src={arrowDown} alt="بالا" width={15} height={9} />
                  </span>
                  <div className="os-wrapper">
                    <div className="os">
                      <img src={windows} alt="ویندوز" width={40} height={40} />
                      <a
                        href="https://soft98.ir/software/pdf/338-adobe-reader-dc-download.html"
                        target="_blank"
                        className="os-link"
                      >
                        Windows
                      </a>
                    </div>
                    <div className="os">
                      <img src={mac} alt="مکینتاش" width={40} height={44} />
                      <a
                        href="https://soft98.ir/software/pdf/2932-%D8%AF%D8%A7%D9%86%D9%80%D9%84%D9%88%D8%AF-%D8%A2%DA%A9%D8%B1%D9%88%D8%A8%D8%A7%D8%AA-%D8%B1%DB%8C%D8%AF%D8%B1-%D9%BE%D8%B1%D9%88.html"
                        target="_blank"
                        className="os-link"
                      >
                        MacOS
                      </a>
                    </div>
                    <div className="os">
                      <img src={android} alt="اندروید" width={40} height={48} />
                      <a
                        href="bazaar://details?id=com.adobe.reader&ref=https%3A%2F%2Fwww.google.com%2F"
                        target="_blank"
                        className="os-link"
                      >
                        Android
                      </a>
                    </div>
                    <div className="os">
                      <img src={ios} alt="ios" width={40} height={25} />
                      <a
                        href="https://apps.apple.com/us/app/adobe-acrobat-reader-pdf-maker/id469337564"
                        target="_blank"
                        className="os-link"
                      >
                        iOS
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className={
                    this.state.active === 3
                      ? "app-wrapper active"
                      : "app-wrapper"
                  }
                >
                  <span
                    className="app-title-icon"
                    onClick={() => {
                      this.handle_active(3);
                    }}
                  >
                    <h2 className="app-title">مرورگر Google Chrome</h2>
                    <img src={arrowDown} alt="بالا" width={15} height={9} />
                  </span>
                  <div className="os-wrapper">
                    <div className="os">
                      <img src={windows} alt="ویندوز" width={40} height={40} />
                      <a
                        href="https://apps.apple.com/us/app/adobe-acrobat-reader-pdf-maker/id469337564"
                        target="_blank"
                        className="os-link"
                      >
                        Windows
                      </a>
                    </div>
                    <div className="os">
                      <img src={mac} alt="مکینتاش" width={40} height={44} />
                      <a
                        href="https://soft98.ir/internet/web-browser/244-google-chrome-desktop.html"
                        target="_blank"
                        className="os-link"
                      >
                        MacOS
                      </a>
                    </div>
                    <div className="os">
                      <img src={android} alt="اندروید" width={40} height={48} />
                      <a
                        href="bazaar://details?id=com.android.chrome&ref=https%3A%2F%2Fwww.google.com%2F"
                        target="_blank"
                        className="os-link"
                      >
                        Android
                      </a>
                    </div>
                    <div className="os">
                      <img src={ios} alt="ios" width={40} height={25} />
                      <a
                        href="https://apps.apple.com/us/app/google-chrome/id535886823"
                        target="_blank"
                        className="os-link"
                      >
                        iOS
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className={
                    this.state.active === 4
                      ? "app-wrapper active"
                      : "app-wrapper"
                  }
                >
                  <span
                    className="app-title-icon"
                    onClick={() => {
                      this.handle_active(4);
                    }}
                  >
                    <h2 className="app-title">
                      {" "}
                      نرم افزار AnyDesk برای رفع مشکلات فنی شما
                    </h2>
                    <img src={arrowDown} alt="بالا" width={15} height={9} />
                  </span>
                  <div className="os-wrapper">
                    <div className="os">
                      <img src={windows} alt="ویندوز" width={40} height={40} />
                      <a
                        href="https://soft98.ir/internet/remote-control/15737-anydesk-download.html"
                        target="_blank"
                        className="os-link"
                      >
                        Windows
                      </a>
                    </div>
                    <div className="os">
                      <img src={mac} alt="مکینتاش" width={40} height={44} />
                      <a
                        href="https://href.li/?https://play.google.com/store/apps/details?id=com.anydesk.anydeskandroid"
                        target="_blank"
                        className="os-link"
                      >
                        MacOS
                      </a>
                    </div>
                    <div className="os">
                      <img src={android} alt="اندروید" width={40} height={48} />
                      <a
                        href="https://href.li/?https://play.google.com/store/apps/details?id=com.anydesk.anydeskandroid"
                        target="_blank"
                        className="os-link"
                      >
                        Android
                      </a>
                    </div>
                    <div className="os">
                      <img src={ios} alt="ios" width={40} height={25} />
                      <a
                        href="https://href.li/?https://itunes.apple.com/us/app/anydesk/id1176131273&mt=8"
                        target="_blank"
                        className="os-link"
                      >
                        iOS
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default withWebsiteData(NeededApps);
