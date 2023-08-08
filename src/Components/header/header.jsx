import React, { Component } from "react";
import { Link } from "react-router-dom";
import SideBar from "../side-bar/side-bar";
import mainLogo from "../../assets/images/main-logo.webp";
import cartIcon from "../../assets/images/cart-blue.webp";
import userIcon from "../../assets/images/user-icon.webp";
import menu_icon from "../../assets/images/menu-icon.webp";
import cross_menu_icon from "../../assets/images/cross-menu.webp";
class Header extends Component {
  state = {
    menu: false,
    exit: "",
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
    const { user, cart } = this.props;
    return (
      <>
        <header className="main-header mm-width">
          <div
            className="menu-icon"
            onClick={() => {
              this.menu_toggle();
            }}
          >
            {this.state.menu ? (
              <img width={23} height={23} src={cross_menu_icon} />
            ) : (
              <img width={32} height={20} src={menu_icon} />
            )}
          </div>
          <div className="logo-wrapper">
            <Link to="/HomePage">
              <img
                width={181}
                height={43}
                src={mainLogo}
                alt="کلاس های اینترنتی کاد"
              />
            </Link>
          </div>
          <div className="cart-name-wrapper">
            <Link to="/Cart" className="cart-icon">
              <img
                src={cartIcon}
                width={27}
                height={27}
                alt="رفتن به سبد خرید"
              />
              <span className="number">{cart ? cart.items_ids.length : 0}</span>
            </Link>
            <Link
              to={user ? "/Profile" : "/Login"}
              className="user-name-wrapper"
            >
              {user ? (
                <>
                  <span className="name">{user.name}</span>
                  <img width={27} height={26} src={userIcon} alt={user.name} />
                  <span className={"exit-from-panel " + this.state.exit}>
                    خروج از حساب کاربری
                  </span>
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
            }}
          >
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
