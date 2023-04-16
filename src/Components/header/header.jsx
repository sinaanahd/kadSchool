import React, { Component } from "react";
import { Link } from "react-router-dom";
import SideBar from "../side-bar/side-bar";
import mainLogo from "../../assets/images/main-logo.webp";
import cartIcon from "../../assets/images/cart-icon.svg";
import userIcon from "../../assets/images/user-icon.svg";
import menu_icon from "../../assets/images/menu-icon.svg";
import cross_menu_icon from "../../assets/images/cross-menu.svg";
class Header extends Component {
  state = {
    menu: false,
    user: false,
  };
  menu_toggle = () => {
    const menu = !this.state.menu;
    this.setState({ menu });
  };
  close_menu = () => {
    this.setState({ menu: false });
  };
  render() {
    return (
      <>
        <header className="main-header mm-width">
          <div
            className="menu-icon"
            onClick={() => {
              this.menu_toggle();
            }}>
            {this.state.menu ? (
              <img src={cross_menu_icon} />
            ) : (
              <img src={menu_icon} />
            )}
          </div>
          <div className="logo-wrapper">
            <Link to="/Dashboard">
              <img src={mainLogo} alt="کلاس های اینترنتی کاد" />
            </Link>
          </div>
          <div className="cart-name-wrapper">
            {/* <span className="cart-icon">
              <img src={cartIcon} alt="رفتن به سبد خرید" />
            </span> */}
            <Link
              to={this.state.user ? "#" : "/Login"}
              className="user-name-wrapper">
              {this.state.user ? (
                <>
                  <span className="name">نام کاربری</span>
                  <img src={userIcon} alt="نام کاربری" />
                </>
              ) : (
                <>
                  <span className="name">ثبت‌نام / ورود</span>
                  <img
                    src={userIcon}
                    className="reponsive-icon-for-login"
                    alt="نام کاربری"
                  />
                </>
              )}
            </Link>
          </div>
        </header>
        {this.state.menu ? (
          <div
            className="responsive-side-bar-menu-wrapper"
            onClick={() => {
              this.close_menu();
            }}>
            <SideBar />
          </div>
        ) : (
          <></>
        )}
      </>
    );
  }
}

export default Header;
