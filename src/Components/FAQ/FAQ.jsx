import React, { Component } from "react";
import { Helmet } from "react-helmet";
import SideBar from "../side-bar/side-bar";
import withWebsiteData from "../hoc/with-website-data";
import FaqQuestion from "./faq-question/faq-question";
import axios from "axios";
import LittleLoading from "../reuseables/little-loading";

class FAQ extends Component {
  state = {
    tab: 1,
    question_id: 0,
    questions: [
      {
        name: "technical",
        texts: [
          {
            question: "برای مشاهده کلاس حتما باید با گوشی وارد بشم؟",
            answer:
              "خیر! برای مشاهده کلاس با هر گوشی و هر کامپیوتر یا هر لپ تاپی میتونید از دیدن کلاس های کاد لذت ببرید",
            id: 1,
          },
          {
            question: "آیا امکان دانلود کلاس های ضبط شده وجود داره؟",
            answer:
              "کاد برای حفظ حقوق مادی و معنوی استادان خودش این امکان رو نمیتونه بده اما شما میتونید چند بار فیلم ضبط شده کلاستون رو بدون نیاز به دانلود دوباره ببینید.",
            id: 2,
          },
          {
            question: "برای مشاهده کلاس ها بهتره از چه مرورگری استفاده کنم؟",
            answer:
              "از همه مرورگر ها میتونی استفاده کنی اما بهتره از مرورگر Google Chrome استفاده کنی که لینک دانلودش توی پایین سایت در قسمت نرم افزار های مورد نیاز هست",
            id: 3,
          },
          {
            question: "برای مشاهده کلاس نیاز به اینترنت قوی داریم؟",
            answer:
              "خیر شما برای مشاهده کلاس های کاد نیاز به اینترنت قوی ندارید بلکه یک اینترنت با سرعت معمولی هم برای دریافت کلاس کفایت میکنه.",
            id: 4,
          },
          {
            question: "رمز عبورم رو فراموش کردم چه کاری باید انجام بدم؟",
            answer:
              "کافیه از قسمت ورود روی فراموشی رمز عبور بزنی و دوباره برای خودت یک رمز عبور تعریف کنی. علاوه بر این همیشه میتونی از طریق شماره تماست هم وارد پنلت بشی",
            id: 5,
          },
        ],
      },
      {
        name: "content",
        texts: [
          {
            question: "با ثبت نام کلاس های جامع(سالیانه) همه مباحث تدریس میشه؟",
            answer:
              "بله کاد و استاد کاد خودشون رو ملزم میدونن که تمامی مباحث رو صفر تا صد به شما آموزش بدن و آموزش هیچ مبحثی رو به دوره های دیگر موکول نکنند.",
            id: 1,
          },
          {
            question: "آیا در کلاس های کاد به اندازه کافی تست هم زده میشه؟",
            answer:
              "بله در کلاس های کاد نه تنها به اندازه کافی تست زده میشه بلکه با ارايه بانک تست و .... بیشتر از اون چه فکرش رو میکنید براتون تست میزنیم",
            id: 2,
          },
          {
            question:
              "آیا فایل ضبط شده کلاس های آنلاین کاد در اختیارمون قرار میگیره؟",
            answer:
              "بله فایل ضبط شده تمامی جلسات کلاس ها نهایتا بعد از 12 ساعت بر روی پنل کاربری شما قرار میگیره",
            id: 3,
          },
          {
            question: "آیا حضور در تمامی جلسات کلاس های آنلاین کاد الزامی هست؟",
            answer:
              "حضور در تمامی جلسات کلاس الزامی نیست اما پشتیبانان شما تعداد غیبت های شما رو بررسی میکنن که در صورت این که غیبت شما از حدی بیشتر شد دلیل غیبت شما رو متوجه بشن. علاوه بر این هر چقدر تعداد جلساتی که به صورت انلاین سر کلاس حاضر میشید بیشتر باشه کاد بهتون هدایی تقدیم میکنه",
            id: 4,
          },
          {
            question: "توی کلاس های کاد امکان رفع اشکال هم وجود داره؟",
            answer:
              "مگه کلاس بدون رفع اشکال هم میشه؟! بله رفع اشکال هم به صورت آنلاین در حین کلاس داریم و هم به صورت آفلاین و بعد از کلاس در ربات تلگرامی کاد و اکانت های شخصی استادان. حتی در صورت نیاز دانش آموزان یک سری جلسات به صورت آنلاین صرفا برای رفع اشکال هم برگزار خواهیم کرد",
            id: 5,
          },
          {
            question:
              "آیا رفع اشکال کلاس ها توسط خود استاد انجام میشه یا همکاران استاد؟",
            answer:
              "توی کاد بسته به صلاحدید استاد خود ایشون یا همکار با تجربه ایشون سوالات شما رو کاملا رفع اشکال میکنند. در کاد هیچ اشکالی از شما بدون رفع شدن باقی نمی مونه حتی اگر تعداد سوالاتتون زیاد باشه !",
            id: 6,
          },
          {
            question: "آیا توی کلاس های کاد بهمون تکلیف در منزل هم میدن؟",
            answer:
              "بله! کاد خودش رو موظف میدونه که ارتباطش رو با شما بعد از اتمام کلاس قطع نکنه. ما به شما بسته به صلاحدید استاد برای جلسه بعدی کلاستون هم تکلیف خواهیم داد و هم آزمون هایی رو از شما خواهیم گرفت",
            id: 7,
          },
          {
            question: "آیا توی کلاس های کاد آزمون هم برگزار میشه؟",
            answer:
              "بله! بدون شک یک مرحله از یادگیری شما با آزمون و حل تست تکمیل میشه. کاد خودش رو موظف میدونه هر ماه حداقل 2 آزمون آزمایشی از شما بگیره.",
            id: 8,
          },
          {
            question:
              "آیا شرکت در آزمون های آزمایشی کاد هزینه جداگانه ای داره؟",
            answer:
              "خیر! شما با ثبت نام در هر گونه از کلاس های کاد میتونید در آزمون های آزمایشی که کاد برگزار میکنه به صورت کاملا رایگان شرکت کنید.",
            id: 9,
          },
          {
            question: "آیا شرکت در آزمون های آزمایشی کاد الزامی هست؟",
            answer:
              "کاد شما رو ملزم به شرکت در آزمون ها نمیکنه اما در صورت عدم شرکت در آزمون ها پشتیبانان شما دلیل عدم شرکت در آزمون ها رو از شما جویا میشن. علاوه بر این با شرکت در آزمون ها بدون توجه به این که چه درصد و رتبه ای کسب میکنید کاد به شما هدایایی تقدیم میکنه",
            id: 10,
          },
        ],
      },
      {
        name: "support",
        texts: [
          {
            question: "چطور باید توی کلاس های کاد ثبت نام کرد؟",
            answer:
              "برای ثبت نام کلاس ها میتونی از طریق فروشگاه که داخل سایت کاد هست اقدام کنی و یا از طریق شبکه های اجتماعی کاد به ادمین پیام بدی و یا با شماره  تماس بگیری.",
            id: 1,
          },
          {
            question:
              "برای ثبت نام کلاس ها نیاز به کد تخفیف دارم از کجا کد تخفیف بگیرم؟",
            answer:
              "برای دریافت کد تخفیف کافیه به پشتیبان های کاد تماس بگیری یا به ادمین شبکه های اجتماعی ما پیام بدی و یا با شماره تماس 02166950624 تماس بگیری و بگی کد تخفیف میخوام",
            id: 2,
          },
          {
            question: "یا توی کاد هر دانش آموز یک پشتیبان داره؟",
            answer:
              "بله شما بعد از ثبت نام در کلاس هاتون یک پشتیبان خواهید داشت که هر مشکلی که در کلاس ها داشته باشید و هر کمکی بخواید هواتون رو داره. بعد از ثبت نام نهایتا بعد از 48 ساعت پشتیبان شما با شما تماس میگیره",
            id: 3,
          },
        ],
      },
      {
        name: "rules",
        texts: [
          {
            question:
              "کلاس های ضبط شده (آفلاین) کاد تا چه روزی روی پنل کاربری ما قرار داره؟",
            answer:
              "اگر کنکوری باشید تا روز کنکورتون به تمامی کلاس هاتون دسترسی دارید و اگر دانش آموز پایه باشید تا پایان زمان برگزاری امتحانات نوبت دوم به تمامی کلاس هاتون دسترسی دارید",
            id: 1,
          },
          {
            question: "امکان مشاهده کلاس ها به صورت چند نفره وجود داره؟",
            answer:
              "کاد هوای دانش آموزان خودش رو که شاید وضع مالی خوبی نداشته باشن رو داره. اگر وضع مالی خوبی ندارید به پشتیبانان کاد تماس بگیرید و یا به ادمین های شبکه های اجتماعی کاد پیام بدید و یا با شماره تماس 02166950624 تماس بگیرید",
            id: 2,
          },
          {
            question:
              "آیا کاد از فیلم هایی که به صورت غیر قانونی در سطح شبکه های اجتماعی پخش شده رضایت دارد؟",
            answer:
              "از اون جایی که کاد هوای دانش آموزان ضعیف از نظر مالی رو هم داره کاد و استادان کاد هیچگونه رضایتی از هر محتوایی که در شبکه های اجتماعی بدون اجازه صاحب اثر پخش شده ندارند. در صورت این که به دلایل مالی توانایی پرداخت هزینه کلاس ها رو ندارید با شماره 02166950624 تماس بگیرید تا کاد دستتون رو به گرمی فشار بده.",
            id: 3,
          },
        ],
      },
      {
        name: "why",
        texts: [
          {
            question: "چرا کلاس های کاد شرکت کنیم؟",
            answer:
              "کاد شما رو اجبار به شرکت در کلاس های خودش نمیکنه. شما میتونید با شرکت در کلاس های رایگان کاد کیفیت و سطح بسیار بالای استادان کاد رو مشاهده کنید و بعد تصمیم به ثبت نام کلاس ها بکنید",
            id: 1,
          },
          {
            question: "کلاس های کاد با سایر موسسات چه تفاوتی داره؟",
            answer:
              "از اون جایی که در کلاس های کاد تمرکز بر کیفیت کلاس هاست تا ثبت نام بیشتر دانش آموزان نتیجتا خدماتی که هر دانش آموز کسب میکنه شامل رفع اشکال و آزمون های آزمایشی و تکلیف در منزل و مشاوره کیفیت به مراتب بیشتری از سایر موسسات داره . گواه این ادعا کیفیت رتبه های برتر هر ساله کاد در کنکور سراسری هست.",
            id: 2,
          },
          {
            question: "رتبه های برتر سال های گذشته چه کسانی بودند؟",
            answer:
              'از اون جایی که تعداد رتبه های برتر کلاس های کاد خیلی زیاد هست شما میتونید در پایین همین صفحه در بخش "رتبه های برتر کاد" مصاحبه و نام و نام خانوادگی همه رتبه برتر ها رو مشاهده کنید',
            id: 3,
          },
          {
            question: "ویژگی اصلی کلاس های کاد چیه؟",
            answer:
              "تدریس علمی و بی حاشیه و کیفیت بالای آموزش و خدمات کلاس ویژگی ممتاز و متمایز کاد هست.",
            id: 4,
          },
        ],
      },
    ],
    phone_number: false,
    phone_err: false,
    pause: false,
    final_message: false,
  };
  send_advice_request = (e) => {
    const phone_number = this.state.phone_number;
    const send_obj = { phone_number: phone_number, type: 3 };
    this.setState({ pause: true });
    axios
      .post(
        `https://kadschool.com/backend/kad_api/call_request_marketing`,
        send_obj
      )
      .then((res) => {
        const { status } = res.data;
        //console.log(res.data);
        this.setState({ pause: false });
        if (status) {
          this.setState({ final_message: "درخواست شما با موفقیت ثبت شد" });
        } else {
          this.setState({
            final_message:
              "درخواست شما قبلا ثبت شده به زودی با شما تماس خواهیم گرفت",
          });
        }
        setTimeout(() => {
          this.setState({ final_message: false });
        }, 2000);
      })
      .catch((e) => {
        this.setState({ pause: false });
        this.props.handle_error(e);
      });
  };
  handle_phone = (target) => {
    const { value } = target;
    let phone_number = false;
    let phone_err = false;
    if (!value.startsWith("09")) {
      phone_err = "شماره باید با ۰۹ شروع شود";
    } else if (value.length !== 11) {
      phone_err = "شماره تلفن باید ۱۱ رقم باشد";
    } else {
      phone_err = "ok";
      phone_number = value;
    }
    this.setState({ phone_err, phone_number });
  };
  handle_tab = (tab) => {
    this.setState({ tab, question_id: 0 });
  };
  handle_clicked_question = (question_id) => {
    const last_id = this.state.question_id;
    if (last_id === question_id) {
      this.setState({ question_id: 0 });
    } else this.setState({ question_id });
  };
  render() {
    return (
      <>
        <Helmet>
          <title>سوالات متداول</title>
          <meta
            name="description"
            content="صفحه سوالات متداول  ما حاوی پاسخ‌هایی برای سوالات متداول شما است. در این صفحه، می‌توانید به سادگی به سوالات پرتکرار خود پاسخ بگیرید. اما اگر پاسخ مورد نظر خود را پیدا نکرده‌اید، هر زمان می‌توانید با ما تماس بگیرید و دریابید. تیم ما آماده‌ی پاسخگویی به شما می‌باشد و به شما کمک خواهد کرد."
          />
        </Helmet>
        <section className="bgc-wrapper">
          <div className="faq-wrapper mm-width">
            <SideBar />
            <div className="main-content">
              <h1 className="title">سوالات متداول</h1>
              <div className="tabs-with-contents">
                <div className="tabs">
                  <span
                    onClick={() => {
                      this.handle_tab(1);
                    }}
                    className={this.state.tab === 1 ? "tab active" : "tab"}>
                    سوالات فنی
                  </span>
                  <span
                    onClick={() => {
                      this.handle_tab(2);
                    }}
                    className={this.state.tab === 2 ? "tab active" : "tab"}>
                    سوالات محتوایی
                  </span>
                  <span
                    onClick={() => {
                      this.handle_tab(3);
                    }}
                    className={this.state.tab === 3 ? "tab active" : "tab"}>
                    ثبت نام و پشتیبانی
                  </span>
                  <span
                    onClick={() => {
                      this.handle_tab(4);
                    }}
                    className={this.state.tab === 4 ? "tab active" : "tab"}>
                    قوانین کاد
                  </span>
                  <span
                    onClick={() => {
                      this.handle_tab(5);
                    }}
                    className={this.state.tab === 5 ? "tab active" : "tab"}>
                    چرا کاد؟
                  </span>
                </div>
                <div className="questions-wrapper">
                  {this.state.questions[this.state.tab - 1].texts.map((q) => (
                    <FaqQuestion
                      key={q.id}
                      question={q.question}
                      answer={q.answer}
                      active_id={this.state.question_id}
                      handle_clicked_question={this.handle_clicked_question}
                      id={q.id}
                    />
                  ))}
                </div>
              </div>

              <div className="didnt-get-your-answer">
                <p>
                  جواب سوالت رو نگرفتی؟!
                  <br />
                  نگران نباش مشخصاتت رو بهمون بده به زودی باهات تماس میگیریم
                </p>
                <div className="input-wrapper">
                  <span className="input-title">تلفن همراه</span>
                  <input
                    type="number"
                    name="phone-number"
                    id="phone-num-faq"
                    placeholder="09121234567"
                    onInput={({ target }) => {
                      this.handle_phone(target);
                    }}
                  />
                  <span className="submit-wrapper">
                    {this.state.phone_err === "ok" ? (
                      <span
                        className="submit-btn"
                        onClick={() => {
                          this.send_advice_request();
                        }}>
                        {this.state.pause ? <LittleLoading /> : "تایید"}
                      </span>
                    ) : (
                      <span className="submit-btn mate-mate">تایید</span>
                    )}
                  </span>
                  {this.state.phone_err && this.state.phone_err !== "ok" ? (
                    <span className="error-faq">{this.state.phone_err}</span>
                  ) : (
                    ""
                  )}
                  {this.state.final_message ? (
                    <span className="final-msg-wrapper">
                      {this.state.final_message}
                    </span>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default withWebsiteData(FAQ);
