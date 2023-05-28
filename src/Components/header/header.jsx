import React, { Component } from "react";
import { Link } from "react-router-dom";
import SideBar from "../side-bar/side-bar";
import mainLogo from "../../assets/images/main-logo.webp";
import cartIcon from "../../assets/images/cart-blue.svg";
import userIcon from "../../assets/images/user-icon.svg";
import menu_icon from "../../assets/images/menu-icon.svg";
import cross_menu_icon from "../../assets/images/cross-menu.svg";
class Header extends Component {
  state = {
    menu: false,
  };
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  menu_toggle = () => {
    const menu = !this.state.menu;
    this.setState({ menu });
    setTimeout(() => {
      if (this.myRef.current !== null) {
        this.myRef.current.classList.remove("animate-menu");
      }
    }, 100);
  };
  close_menu = () => {
    this.setState({ menu: false });
  };
  render() {
    const { user } = this.props;
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
            <Link to="/Cart" className="cart-icon">
              <img src={cartIcon} alt="رفتن به سبد خرید" />
              <span className="number">3</span>
            </Link>
            <Link
              to={user ? "/Profile" : "/Login"}
              className="user-name-wrapper">
              {user ? (
                <>
                  <span className="name">{user.name}</span>
                  <img src={userIcon} alt={user.name} />
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
            className="responsive-side-bar-menu-wrapper animate-menu"
            ref={this.myRef}
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
