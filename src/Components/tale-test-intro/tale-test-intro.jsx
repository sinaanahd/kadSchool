import React, { useState } from "react";
import { Helmet } from "react-helmet";
const TaleTestIntro = () => {
  return (
    <>
      <Helmet>
        <title>کاد | جشنواره تله و تست</title>
      </Helmet>
      <div className="tale-test-page-wrapper">
        <section className="intro-part-section">
          <div className="intro-part-texts">
            <h1 className="page-title font-bold">جشنواره تله و تست</h1>
            <p className="intro-text">
              جشنواره تله و تست کاد یه مسابقه جذاب با جایزه های زیاد و متنوع هست
              که ما توی کاد تصمیم گرفتیم برای دانش آموزان خوبمون یک مسابقه جذاب
              آماده کنیم که نه تنها همه توی این مسابقه برنده باشن بلکه برای
              امتحانات و تست هاتون آماده تر بشید.
              <br />
              این مسابقه خیلی آسونه و همه شما از همه پایه ها میتونید توش شرکت
              کنید.
              <br />
              شاید براتون سوال باشه که جایزه این مسابقه چیه؟ جایزه این مسابقه
              هدیه نقدی بعد از پاسخ <font className="font-bold">درست</font> یا
              حتی <font className="font-bold">غلط</font> شما به تست هاست.
              <br />
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default TaleTestIntro;
