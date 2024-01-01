import React, { useState } from "react";
import title_asset1 from "../../assets/images/single-class-assets/title-asset-1.webp";

const NewComments = () => {
  return (
    <section className="re-students-comments-section">
      <div className="comment-section-header mm-width">
        <img src={title_asset1} alt="نظرات" width={60} height={60} />
        <h2 className="comment-section-title">نظرات دانش آموزان</h2>
      </div>
      <div className="cm-row">
        <div className="cm-wrapper">
          <span className="cm-header">
            <span className="cm-name">سارا مهدویان</span>
            <span className="cm-date"> شهریور ۱۴۰۲</span>
          </span>
          <p className="cm-text">
            من امسال کنکور دادم و حقیقتا کاش زودتر با موسسه کاد آشنا میشدم🥲 فقط
            گفتم بابت قدردانی ازتون براتون کامنت بذارم و خسته نباشید بگم
          </p>
        </div>
        <div className="cm-wrapper">
          <span className="cm-header">
            <span className="cm-name">سینا محمدی</span>
            <span className="cm-date"> مهر ۱۴۰۲</span>
          </span>
          <p className="cm-text">
            به به سایت جدید کاد بالاخره اومد😍 همه چی توی سال قبل خوب بود جز
            سایت که خب الان عالی شده گمونم از ما کنکوریا 402 که گذشت ولی 403 ای
            ها قدر بدونین و حتما نمونه تدریسای استادای کاد رو نگاهی بندازید
          </p>
        </div>
        <div className="cm-wrapper">
          <span className="cm-header">
            <span className="cm-name">مجتبی نوری</span>
            <span className="cm-date"> تیر ۱۴۰۲</span>
          </span>
          <p className="cm-text">
            تا الان موسسه ای مثل کاد ندیدم که اینقدر به فکر بچه ها باشن حتی من
            که اصلا تو هیچ کلاسی هم ثبت نکردم علاوه بر این کلاسای زیادی هم واقعا
            رایگان برگزار کردین انشاالله بتونم جبران کنم❤️👌 یاعلی🙌
          </p>
        </div>
        <div className="cm-wrapper">
          <span className="cm-header">
            <span className="cm-name">شاهین مهدوی</span>
            <span className="cm-date"> شهریور ۱۴۰۲</span>
          </span>
          <p className="cm-text">
            من امسال در کلاس های فلسفه،ادبیات،عربی، درک و دریافت شعر و مشاوره
            موسسه کاد شرکت کردم کلاس ها همگی به شدت جذاب و عالی بود و کاری میکرد
            دانش آموز با شور و علاقه،سر کلاس حاضر بشه. پاسخگویی پشتیبانی هم خیلی
            سریع و خوب بود بی شک دانش آموز موسسه کاد بودن،از بهترین و به
            یادماندنی ترین و زیبا ترین تجربه های دوران تحصیل من خواهد بود. خیلی
            خوشحالم که با کاد آشنا شدم
          </p>
        </div>
        <div className="cm-wrapper">
          <span className="cm-header">
            <span className="cm-name">فاطمه نظری</span>
            <span className="cm-date"> شهریور ۱۴۰۲</span>
          </span>
          <p className="cm-text">
            خب حقیقتش من کلاس های علوم فنون دکتر سبطی و همایش دکتر ترکمان و دکتر
            سودیان رو شرکت کردم و سطح استاد ها فوق العادس و نحوه تدریس هم عالیه
            در مورد تاثیری که برای من داشته اینه که راحت تر و سریع تر میتونم تست
            حل کنم گره های درسی هم که برای رفع اشکال داشتیم عالی بود و همه
            سوالام رو پاسخ میدادن
          </p>
        </div>
        <div className="cm-wrapper">
          <span className="cm-header">
            <span className="cm-name">شیدا رضایی</span>
            <span className="cm-date"> شهریور ۱۴۰۲</span>
          </span>
          <p className="cm-text">
            من در کلاسای فلسفه منطق استاد جواهری و ریاضی استاد حسینی و عربی
            ترکمان شرکت کردم خیلی راضی بودم ازشون سطح سوادشون بسیار عالی و قدرت
            بیانشون بسیار تاثیر گذار بود. خیلی ممنون از موسسه خوبتون درپناه حق
            باشید
          </p>
        </div>
        <div className="cm-wrapper">
          <span className="cm-header">
            <span className="cm-name">نادیا هوشمند</span>
            <span className="cm-date"> شهریور ۱۴۰۲</span>
          </span>
          <p className="cm-text">
            من در همه درس های انسانی کاد شرکت کردم و با اینکه از اسفند تو کلاسا
            حاضر شدم واقعا مفید بود مخصوصا فلسفه و منطق که برای فهم درست و کامل
            متن درس خیلی اهمیت داره.ریاضی هم که برای من از اول یک غول بود تا اخر
            سال کم کم قبحش برام ریخت و تونستم از درصد 7 به درصد 72 برسم.عربی و
            علوم فنون هم عالییییی بودن
          </p>
        </div>
        <div className="cm-wrapper">
          <span className="cm-header">
            <span className="cm-name">مهدی عبادی</span>
            <span className="cm-date"> شهریور ۱۴۰۲</span>
          </span>
          <p className="cm-text">
            من توی کلاس ادبیات اختصاصی و عربی و فلسفه و دینی و زبان شرکت کردم و
            خیلی راضیم و خداروشکر نتیجش رو توی کنکور دیدم. این که توی اکثر جلسات
            بهمون تکلیف میدن و آزمون منظم ازمون میگیرن برای منی که نیازه زور
            بالا سرم باشه خیلی خوب بود. در کل ممنونم از همه استادای کاد
          </p>
        </div>
        <div className="cm-wrapper">
          <span className="cm-header">
            <span className="cm-name">محدثه خوش باور</span>
            <span className="cm-date"> شهریور ۱۴۰۲</span>
          </span>
          <p className="cm-text">
            من امسال از آبان کلاس ها رو ثبت نام کردن قبلش یک موسسه دیگه بودم که
            به خاطر حاشیه های زیاد سر کلاس ترجیح دادم با این که هزینه کلاس رو
            بهم بر نگردوندن بیام کاد ثبت نام کنن خداییش کارتون درسته از همه نظر
            به همه دوستای کنکوری سال دیگم هم معرفیتون کردم
          </p>
        </div>
        <div className="cm-wrapper">
          <span className="cm-header">
            <span className="cm-name">گلنوش خرمی</span>
            <span className="cm-date"> شهریور ۱۴۰۲</span>
          </span>
          <p className="cm-text">
            من اوایل که اومدم کاد چون بعضی دوستام موسسات دیگه رفته بودن نگران
            بودم که نکنه زیاد کلاسا خوب نباشن اما هر چی رفتم جلو خیالم راحت تر
            شد خوبی کاد نسبت به خیلی از کلاسای دیگه اینه که جو دانش اموزای
            کلاساش با بقیه خیلی متفاوته یک جورایی انگار گزینش شدن و همه دنبال
            درسن و خب این خیلی به من کمک کرد بر خلاف همون دوستام که از وسطای سال
            درگیر حرف این معلم و اون معلم شدن. آزمون ها و بانک تستی هم که طی سال
            دادن واقعا عالی بود و من همه تست ها رو تحلیل میکردم و خیلی مشابهش
            توی کنکور اومد
          </p>
        </div>
      </div>
      {/* <div className="cm-row cm-row-2">
        <div className="cm-wrapper">
          <span className="cm-header">
            <span className="cm-name">سارا مهدویان</span>
            <span className="cm-date"> شهریور ۱۴۰۲</span>
          </span>
          <p className="cm-text">
            من امسال کنکور دادم و حقیقتا کاش زودتر با موسسه کاد آشنا میشدم🥲 فقط
            گفتم بابت قدردانی ازتون براتون کامنت بذارم و خسته نباشید بگم
          </p>
        </div>
        <div className="cm-wrapper">
          <span className="cm-header">
            <span className="cm-name">سینا محمدی</span>
            <span className="cm-date"> مهر ۱۴۰۲</span>
          </span>
          <p className="cm-text">
            به به سایت جدید کاد بالاخره اومد😍 همه چی توی سال قبل خوب بود جز
            سایت که خب الان عالی شده گمونم از ما کنکوریا 402 که گذشت ولی 403 ای
            ها قدر بدونین و حتما نمونه تدریسای استادای کاد رو نگاهی بندازید
          </p>
        </div>
        <div className="cm-wrapper">
          <span className="cm-header">
            <span className="cm-name">مجتبی نوری</span>
            <span className="cm-date"> تیر ۱۴۰۲</span>
          </span>
          <p className="cm-text">
            تا الان موسسه ای مثل کاد ندیدم که اینقدر به فکر بچه ها باشن حتی من
            که اصلا تو هیچ کلاسی هم ثبت نکردم علاوه بر این کلاسای زیادی هم واقعا
            رایگان برگزار کردین انشاالله بتونم جبران کنم❤️👌 یاعلی🙌
          </p>
        </div>
        <div className="cm-wrapper">
          <span className="cm-header">
            <span className="cm-name">شاهین مهدوی</span>
            <span className="cm-date"> شهریور ۱۴۰۲</span>
          </span>
          <p className="cm-text">
            من امسال در کلاس های فلسفه،ادبیات،عربی، درک و دریافت شعر و مشاوره
            موسسه کاد شرکت کردم کلاس ها همگی به شدت جذاب و عالی بود و کاری میکرد
            دانش آموز با شور و علاقه،سر کلاس حاضر بشه. پاسخگویی پشتیبانی هم خیلی
            سریع و خوب بود بی شک دانش آموز موسسه کاد بودن،از بهترین و به
            یادماندنی ترین و زیبا ترین تجربه های دوران تحصیل من خواهد بود. خیلی
            خوشحالم که با کاد آشنا شدم
          </p>
        </div>
        <div className="cm-wrapper">
          <span className="cm-header">
            <span className="cm-name">فاطمه نظری</span>
            <span className="cm-date"> شهریور ۱۴۰۲</span>
          </span>
          <p className="cm-text">
            خب حقیقتش من کلاس های علوم فنون دکتر سبطی و همایش دکتر ترکمان و دکتر
            سودیان رو شرکت کردم و سطح استاد ها فوق العادس و نحوه تدریس هم عالیه
            در مورد تاثیری که برای من داشته اینه که راحت تر و سریع تر میتونم تست
            حل کنم گره های درسی هم که برای رفع اشکال داشتیم عالی بود و همه
            سوالام رو پاسخ میدادن
          </p>
        </div>
        <div className="cm-wrapper">
          <span className="cm-header">
            <span className="cm-name">شیدا رضایی</span>
            <span className="cm-date"> شهریور ۱۴۰۲</span>
          </span>
          <p className="cm-text">
            من در کلاسای فلسفه منطق استاد جواهری و ریاضی استاد حسینی و عربی
            ترکمان شرکت کردم خیلی راضی بودم ازشون سطح سوادشون بسیار عالی و قدرت
            بیانشون بسیار تاثیر گذار بود. خیلی ممنون از موسسه خوبتون درپناه حق
            باشید
          </p>
        </div>
        <div className="cm-wrapper">
          <span className="cm-header">
            <span className="cm-name">نادیا هوشمند</span>
            <span className="cm-date"> شهریور ۱۴۰۲</span>
          </span>
          <p className="cm-text">
            من در همه درس های انسانی کاد شرکت کردم و با اینکه از اسفند تو کلاسا
            حاضر شدم واقعا مفید بود مخصوصا فلسفه و منطق که برای فهم درست و کامل
            متن درس خیلی اهمیت داره.ریاضی هم که برای من از اول یک غول بود تا اخر
            سال کم کم قبحش برام ریخت و تونستم از درصد 7 به درصد 72 برسم.عربی و
            علوم فنون هم عالییییی بودن
          </p>
        </div>
        <div className="cm-wrapper">
          <span className="cm-header">
            <span className="cm-name">مهدی عبادی</span>
            <span className="cm-date"> شهریور ۱۴۰۲</span>
          </span>
          <p className="cm-text">
            من توی کلاس ادبیات اختصاصی و عربی و فلسفه و دینی و زبان شرکت کردم و
            خیلی راضیم و خداروشکر نتیجش رو توی کنکور دیدم. این که توی اکثر جلسات
            بهمون تکلیف میدن و آزمون منظم ازمون میگیرن برای منی که نیازه زور
            بالا سرم باشه خیلی خوب بود. در کل ممنونم از همه استادای کاد
          </p>
        </div>
        <div className="cm-wrapper">
          <span className="cm-header">
            <span className="cm-name">محدثه خوش باور</span>
            <span className="cm-date"> شهریور ۱۴۰۲</span>
          </span>
          <p className="cm-text">
            من امسال از آبان کلاس ها رو ثبت نام کردن قبلش یک موسسه دیگه بودم که
            به خاطر حاشیه های زیاد سر کلاس ترجیح دادم با این که هزینه کلاس رو
            بهم بر نگردوندن بیام کاد ثبت نام کنن خداییش کارتون درسته از همه نظر
            به همه دوستای کنکوری سال دیگم هم معرفیتون کردم
          </p>
        </div>
        <div className="cm-wrapper">
          <span className="cm-header">
            <span className="cm-name">گلنوش خرمی</span>
            <span className="cm-date"> شهریور ۱۴۰۲</span>
          </span>
          <p className="cm-text">
            من اوایل که اومدم کاد چون بعضی دوستام موسسات دیگه رفته بودن نگران
            بودم که نکنه زیاد کلاسا خوب نباشن اما هر چی رفتم جلو خیالم راحت تر
            شد خوبی کاد نسبت به خیلی از کلاسای دیگه اینه که جو دانش اموزای
            کلاساش با بقیه خیلی متفاوته یک جورایی انگار گزینش شدن و همه دنبال
            درسن و خب این خیلی به من کمک کرد بر خلاف همون دوستام که از وسطای سال
            درگیر حرف این معلم و اون معلم شدن. آزمون ها و بانک تستی هم که طی سال
            دادن واقعا عالی بود و من همه تست ها رو تحلیل میکردم و خیلی مشابهش
            توی کنکور اومد
          </p>
        </div>
      </div> */}
      <div className="over-lay-left overlay"></div>
      <div className="over-lay-right overlay"></div>
    </section>
  );
};

export default NewComments;
