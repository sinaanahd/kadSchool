import React, { Component } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import scrollToTop from "../../functions/scroll";

import closeMenu from "../../../assets/images/close-menu-white.webp";
import menuIcon from "../../../assets/images/menu-white.webp";
import mainLogo from "../../../assets/images/main-logo-white-1.webp";

class HomeHeader extends Component {
  state = { menu: false };
  menu_handler = () => {
    const menu = this.state.menu;
    this.setState({ menu: !menu });
  };
  render() {
    const { user } = this.props;
    return (
      <header className="home-page-header mm-width">
        <Link
          onClick={() => {
            scrollToTop();
          }}
          to="/HomePage"
        >
          <img src={mainLogo} alt="کاد" width={175} height={42} />
        </Link>
        <span
          className="menu-burger"
          onClick={() => {
            this.menu_handler();
          }}
        >
          {this.state.menu ? (
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
        </span>
        <nav
          className={
            this.state.menu ? "links-wrapper home-res-menu" : "links-wrapper"
          }
        >
          <ul>
            <li className="login-li">
              <Link
                onClick={() => {
                  scrollToTop();
                }}
                to={!user ? "/Login" : "/Profile"}
              >
                ورود | ثبت نام
              </Link>
            </li>
            <li>
              <Link
                onClick={() => {
                  scrollToTop();
                }}
                to="/Dashboard"
              >
                میز مطالعه
              </Link>
            </li>
            <li>
              <Link
                onClick={() => {
                  scrollToTop();
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
                }}
                to="/Support"
              >
                پشتیبانی
              </Link>
            </li>
            <li>
              <Link
                onClick={() => {
                  scrollToTop();
                }}
                to="/Rules"
              >
                قوانین
              </Link>
            </li>
            <li>
              <Link
                onClick={() => {
                  scrollToTop();
                }}
                to="/apolo-11"
              >
                آپولو ۱۱
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default HomeHeader;
