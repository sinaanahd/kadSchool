import React, { useState, useEffect } from "react";
import { PiGiftDuotone } from "react-icons/pi";
import convert_to_persian from "../functions/convert-to-persian";
import copy_to_clip_board from "../functions/copy-to-clip-board";
const NoticeBox = () => {
  const [active, set_active] = useState(false);
  const [copy, set_copy] = useState(false);
  let count = 0;
  useEffect(() => {
    if (count === 0) {
      setInterval(() => {
        if (
          window.location.pathname !== "/Login" &&
          window.location.pathname !== "/LoginPass" &&
          window.location.pathname !== "/Forget-password" &&
          window.location.pathname !== "/SignUp"
        ) {
          const open_need = JSON.parse(sessionStorage.getItem("pop-up"));
          if (!open_need) {
            setTimeout(() => {
              change_activation();
              sessionStorage.setItem("pop-up", JSON.stringify(true));
            }, 1000);
          }
        }
      }, 1000);
    }
  }, []);
  const change_activation = () => {
    set_active(true);
  };
  return (
    <div className="fixed-pop-up-wrapper">
      <div
        className="pop-up-icon"
        onClick={() => {
          set_active(true);
        }}
      >
        <PiGiftDuotone />
      </div>
      {active ? (
        <div className="pop-image-show-container">
          <div className="pop-up-img-wrapper mm-width">
            <p className="desc-text">
              کمپین <font className="font-bold">۳۰ درصد تخفیف</font> کلیه کلاس
              های کاد <font className="font-bold">پنجم</font> و{" "}
              <font className="font-bold">ششم</font> بهمن برای راهنمایی بیشتر به
              شماره{" "}
              <font
                className="font-bold"
                onClick={() => {
                  copy_to_clip_board("09128965613");
                  set_copy(true);
                }}
              >
                ۰۹۱۲۸۹۶۵۶۱۳
              </font>{" "}
              <font
                className="small-text font-bold"
                onClick={() => {
                  copy_to_clip_board("09128965613");
                  set_copy(true);
                }}
              >
                ( {copy ? "کپی شد!" : "کپی"} )
              </font>
              عدد <font className="font-bold">۳</font>
              را پیامک دهید.
            </p>
            {/* <p className="desc-text font-bold">
              میدونستی ما کلی مشاور داریم که منتظر شنیدن صدای شمان ؟
              <br />
              شما میتونی با مشاور های ما تماس بگیری و کلاسی رو که میخوای بخری،
              خیلی سریع توضیحاتشو داشته باشی. کلی تخفیف و هدیه منتظرته ! پس همین
              الان با آیدی زیر با ما در ارتباط باش :
            </p>
            <span className="btn-wrappers">
              <a href="tel:+982166950624" className="call-us-now-btn">
                @Kad_team
              </a>
            </span> */}

            {/* <span className="btn-wrappers">
              <a href="tel:+982166950624" className="call-us-now-btn">
                {"۰۲۱-" + convert_to_persian(66950624)}
              </a>
              <a href="tel:+982162999110" className="call-us-now-btn">
                {"۰۲۱-" + convert_to_persian(62999110)}
              </a>
            </span> */}
            <div className="pop-up-btns">
              <button
                className="close-btn pop-up-btn"
                onClick={() => {
                  set_active(false);
                }}
              >
                X
              </button>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default NoticeBox;
