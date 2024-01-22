import React, { Component, useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import scrollToTop from "../../functions/scroll";
import { DataContext } from "../../context/DataContext";
import { BsFire } from "react-icons/bs";
import closeMenu from "../../../assets/images/close-menu-white.webp";
import menuIcon from "../../../assets/images/menu-white.webp";
import mainLogo from "../../../assets/images/main-logo-white-1.webp";

const HomeHeader = ({ not_home }) => {
  const [menu, set_menu] = useState(false);
  const [sticky, set_sticky] = useState(false);
  const [exit, set_exit] = useState(false);
  const menu_handler = () => {
    set_menu(!menu);
  };
  const clear_user = () => {
    window.localStorage.clear();
    window.location.pathname = "/Login";
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset >= 100) {
        set_sticky(true);
      } else {
        set_sticky(false);
      }
    });
  }, []);
  const { user } = useContext(DataContext);
  return (
    <header
      className={
        sticky
          ? "home-page-header mm-width scrolled" + ` ${not_home}`
          : "home-page-header mm-width" + ` ${not_home}`
      }
    >
      <Link
        onClick={() => {
          scrollToTop();
          set_menu(false);
        }}
        to="/HomePage"
      >
        <img src={mainLogo} alt="کاد" width={175} height={42} />
      </Link>
      <span
        className="menu-burger"
        onClick={() => {
          menu_handler();
        }}
      >
        {menu ? (
          <img
            src={closeMenu}
            width={30}
            height={30}
            alt="بستن منو"
            className="close-pos"
          />
        ) : (
          <img src={menuIcon} width={30} height={30} alt="باز کردن منو" />
        )}
        <span className="menu-text">منو</span>
      </span>
      <nav className={menu ? "links-wrapper home-res-menu" : "links-wrapper"}>
        <ul>
          <li className="vis-in-mobile">
            <Link
              onClick={() => {
                scrollToTop();
                set_menu(false);
              }}
              to="/HomePage"
            >
              <img
                src={mainLogo}
                alt="کاد"
                width={100}
                height={24}
                className="main-logo-mobile"
              />
            </Link>
            {menu ? (
              <img
                src={closeMenu}
                width={20}
                height={20}
                alt="بستن منو"
                className="close-pos"
                onClick={menu_handler}
              />
            ) : (
              <img
                src={menuIcon}
                width={20}
                height={20}
                alt="باز کردن منو"
                onClick={menu_handler}
              />
            )}
          </li>
          <li>
            <a href="https://panel.kadschool.com" target="_blank">
              پنل دانش آموزان
            </a>
          </li>
          <li className="login-li">
            <Link
              onClick={() => {
                scrollToTop();
                set_menu(false);
              }}
              to={!user ? "/Login" : "/Shop"}
            >
              ورود | ثبت نام
            </Link>
          </li>
          <li>
            <Link
              onClick={() => {
                scrollToTop();
                set_menu(false);
              }}
              to="/Cart"
            >
              سبد خرید
            </Link>
          </li>
          <li>
            <Link
              onClick={() => {
                scrollToTop();
                set_menu(false);
              }}
              to="/Shop"
            >
              فروشگاه
            </Link>
          </li>
          <li>
            <Link
              onClick={() => {
                scrollToTop();
                set_menu(false);
              }}
              to="/Teachers"
            >
              استادان کاد
            </Link>
          </li>
          <li>
            <Link
              onClick={() => {
                scrollToTop();
                set_menu(false);
              }}
              to="/Support"
            >
              پشتیبانی
            </Link>
          </li>
          <li onClick={clear_user}>خروج</li>
          {/* <li className="new-label">
            <BsFire />
            <Link
              onClick={() => {
                scrollToTop();
                set_menu(false)
              }}
              to="/نکته-و-تست-تجربی"
            >
              نکته و تست تجربی
            </Link>
          </li>
          <li className="new-label">
            <BsFire />
            <Link
              onClick={() => {
                scrollToTop();
                set_menu(false)
              }}
              to="/نکته-و-تست-انسانی"
            >
              نکته و تست انسانی
            </Link>
          </li> */}
        </ul>
      </nav>
    </header>
  );
};

export default HomeHeader;
