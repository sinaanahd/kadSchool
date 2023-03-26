import React, { Component } from "react";
import mainLogo from "../../assets/images/main-logo.svg";
import cartIcon from "../../assets/images/cart-icon.svg";
import userIcon from "../../assets/images/user-icon.svg";
import { Link } from "react-router-dom";
class Header extends Component {
  state = {};
  render() {
    return (
      <header className="main-header mm-width">
        <div className="logo-wrapper">
          <img src={mainLogo} alt="کلاس های اینترنتی کاد" />
        </div>
        <div className="cart-name-wrapper">
          <span className="cart-icon">
            <img src={cartIcon} alt="رفتن به سبد خرید" />
          </span>
          <Link to="#" className="user-name-wrapper">
            <span className="name">نام کاربری</span>
            <img src={userIcon} alt="نام کاربری" />
          </Link>
        </div>
      </header>
    );
  }
}

export default Header;
