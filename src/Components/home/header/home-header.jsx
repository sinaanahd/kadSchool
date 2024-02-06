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
  const [open_first_level, set_open_first_level] = useState(false);
  const [open_dore_sub_menu, set_open_dore_sub_menu] = useState(false);
  const [open_paye_sub_menu, set_open_paye_sub_menu] = useState(false);
  const [open_subject_sub_menu, set_open_subject_sub_menu] = useState(false);
  const { static_doreha, years, subjects } = useContext(DataContext);
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
  const handle_open_level_1 = (e) => {
    const classes = [...e.target.classList];
    if (classes.includes("contains-child") || classes.includes("shop-arrow")) {
      set_open_first_level(!open_first_level);
    }
  };
  const handle_open_dore = (e) => {
    const classes = [...e.target.classList];
    if (
      classes.includes("inside-header-item") ||
      classes.includes("has-child-need-arrow")
    ) {
      set_open_dore_sub_menu(!open_dore_sub_menu);
    }
  };
  const handle_open_paye = (e) => {
    const classes = [...e.target.classList];
    if (
      classes.includes("inside-header-item") ||
      classes.includes("has-child-need-arrow")
    ) {
      set_open_paye_sub_menu(!open_paye_sub_menu);
    }
  };
  const handle_open_subject = (e) => {
    const classes = [...e.target.classList];
    if (
      classes.includes("inside-header-item") ||
      classes.includes("has-child-need-arrow")
    ) {
      set_open_subject_sub_menu(!open_subject_sub_menu);
    }
  };
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
        <ul className="main-nav font-bold">
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
          <li
            className={
              open_first_level
                ? "contains-child shop-arrow show-level-1"
                : "contains-child shop-arrow"
            }
            onClick={(e) => {
              handle_open_level_1(e);
            }}
          >
            فروشگاه
            <ul className="inside-header-ul">
              <li className="inside-header-item align-left">
                <Link
                  to="/Shop"
                  onClick={() => {
                    scrollToTop();
                    set_menu(false);
                  }}
                >
                  تمامی کلاس ها
                </Link>
              </li>
              <li
                className={
                  open_dore_sub_menu
                    ? "inside-header-item has-child-need-arrow open-dore"
                    : "inside-header-item has-child-need-arrow"
                }
                onClick={(e) => {
                  handle_open_dore(e);
                }}
              >
                دوره
                <ul className="level-2-inside-header-ul">
                  {static_doreha.map((d) => (
                    <li className="level-2-inside-header-item" key={d.dore_id}>
                      <Link
                        to={`/Shop/دوره/${d.dore_title.replaceAll(" ", "-")}`}
                        onClick={() => {
                          scrollToTop();
                          set_menu(false);
                        }}
                      >
                        دوره {d.dore_title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
              <li
                className={
                  open_paye_sub_menu
                    ? "inside-header-item has-child-need-arrow open-paye"
                    : "inside-header-item has-child-need-arrow"
                }
                onClick={(e) => {
                  handle_open_paye(e);
                }}
              >
                پایه
                <ul className="level-2-inside-header-ul">
                  {years.map((y) => (
                    <li className="level-2-inside-header-item" key={y.id}>
                      <Link
                        to={`/Shop/پایه/${y.name}`}
                        onClick={() => {
                          scrollToTop();
                          set_menu(false);
                        }}
                      >
                        پایه {y.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
              <li
                className={
                  open_subject_sub_menu
                    ? "inside-header-item has-child-need-arrow open-subject"
                    : "inside-header-item has-child-need-arrow"
                }
                onClick={(e) => {
                  handle_open_subject(e);
                }}
              >
                رشته
                <ul className="level-2-inside-header-ul">
                  {subjects.map((s) => (
                    <li className="level-2-inside-header-item" key={s.id}>
                      <Link
                        to={`/Shop/رشته/${s.name}`}
                        onClick={() => {
                          scrollToTop();
                          set_menu(false);
                        }}
                      >
                        رشته {s.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
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
          <li className="new-label">
            <BsFire />
            <Link
              onClick={() => {
                scrollToTop();
                set_menu(false);
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
                set_menu(false);
              }}
              to="/نکته-و-تست-انسانی"
            >
              نکته و تست انسانی
            </Link>
          </li>
          <li className="color-black" onClick={clear_user}>
            خروج
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default HomeHeader;
