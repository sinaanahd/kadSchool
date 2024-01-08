import React, { Component, useContext, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

import withWebsiteData from "../hoc/with-website-data";
import mainLogo from "../../assets/images/main-logo.webp";
import login_bgc from "../../assets/images/login-img.webp";
import axios from "axios";
import LittleLoading from "../reuseables/little-loading";
import { DataContext } from "../context/DataContext";
import { useEffect } from "react";
import urls from "../urls/url";

const LoginPass = () => {
  const { user, setUser } = useContext(DataContext);
  const [phone_number, set_phone_number] = useState(false);
  const [err_phone, set_err_phone] = useState(false);
  const [pause, set_pause] = useState(false);
  const [password, set_password] = useState(false);
  const [pass_err, set_pass_err] = useState(false);
  useEffect(() => {
    if (user) {
      window.location.pathname = "/Shop";
    }
  }, []);
  const handle_phone_number = (e) => {
    const value = e.target.value;
    if (value.length === 0) {
      const err_phone = "این فیلد نباید خالی باشد";
      // this.setState({ err_phone });
      set_err_phone(err_phone);
    } else if (!value.startsWith(0)) {
      const err_phone = "شماره موبایل باید با صفر شروع بشه";
      // this.setState({ err_phone });
      set_err_phone(err_phone);
    } else if (value.length !== 11) {
      const err_phone = "شماره تلفن باید ۱۱ رقم باشد";
      // this.setState({ err_phone });
      set_err_phone(err_phone);
    } else {
      // this.setState({ phone_number: value, err_phone: "ok" });
      set_phone_number(value);
      set_err_phone("ok");
    }
  };
  const check_password = (e) => {
    const value = e.target.value;
    if (value.length < 8) {
      // this.setState({ pass_err: "پسورد باید حداقل ۸ کاراکتر باشه" });
      set_pass_err("پسورد باید حداقل ۸ کاراکتر باشه");
    } else {
      // this.setState({ password: value, pass_err: "ok" });
      set_password(value);
      set_pass_err("ok");
    }
  };
  const check_user = () => {
    // this.setState({ pause: true });
    set_pause(true);
    axios
      .get(`${urls.password}${phone_number}`)
      .then((res) => {
        const { exists, password: got_pass, user_id } = res.data;
        // this.setState({ pause: false });
        set_pause(false);
        //console.log(res.data);
        if (exists) {
          if (password === got_pass) {
            axios
              .get(`${urls.user}${user_id}`)
              .then((res) => {
                const user = res.data;
                setUser(user);
                localStorage.setItem("user-kad", JSON.stringify(user));
                // this.props.inside_user(user);
                //console.log(user);
                window.location.pathname = "/HomePage";
                localStorage.setItem(
                  "kad-phone-number",
                  JSON.stringify(phone_number)
                );
              })
              .catch((err) => {
                console.log(err);
              });
          } else {
            const pass_err = "پسورد وارد شده صحیح نمی باشد";
            // this.setState({ pass_err });
            set_pass_err(pass_err);
          }
        } else {
          // this.setState({ err_phone: "شماره تلفن وارد شده اشتباه است" });
          set_err_phone("شماره تلفن وارد شده اشتباه است");
        }
      })
      .catch((e) => {
        // this.setState({ pause: false });
        set_pause(false);
        console.log(e);
        // this.props.handle_error(e);
      });
  };
  return (
    <>
      <Helmet>
        <title>ورود به سایت</title>
        <meta name="description" content="ورود به وسیله رمز عبور در کاد" />
        <meta name="keywords" content="ورود به وسیله رمز عبور کاد" />
      </Helmet>
      <section className="login-wrapper-section">
        <img
          src={login_bgc}
          alt="عکس پس زمینه برای صفحه ورود"
          className="login-bgc"
        />
        <Link to="/Dashboard" className="main-logo">
          <img src={mainLogo} alt="وب سایت کاد" />
        </Link>
        <div className="login-wrapper mm-width">
          <div className="forms-wrapper">
            <h1>ورود به سایت</h1>
            <input
              type="number"
              className="input-text input"
              placeholder="تلفن همراه"
              onInput={(e) => {
                handle_phone_number(e);
              }}
            />
            {err_phone && err_phone !== "ok" ? (
              <span className="error-place">{err_phone}</span>
            ) : (
              <></>
            )}
            <input
              type="password"
              className="input-text input pass"
              placeholder="رمز عبور"
              onInput={(e) => {
                check_password(e);
              }}
            />
            {pass_err === "ok" && err_phone === "ok" ? (
              <span
                onClick={() => {
                  check_user();
                }}
                className="enter button-span"
              >
                {pause ? <LittleLoading /> : "ورود"}
              </span>
            ) : (
              <span className="enter button-span fail">ورود</span>
            )}
            {pass_err && pass_err !== "ok" ? (
              <span className="error-place need-margin">{pass_err}</span>
            ) : (
              <></>
            )}
            <span className="enter-with-other-way forget">
              <Link to="/Forget-password">فراموشی رمز عبور</Link>
            </span>
            <span className="enter-with-other-way">
              <Link to="/Login">ورود با استفاده از کد یکبار مصرف</Link>
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

// export default LoginPass;
// class LoginPass2 extends Component {
//   state = {
//     phone_number: false,
//     err_phone: false,
//     pause: false,
//     password: false,
//     pass_err: false,
//   };
//   componentDidMount() {
//     const { user } = props;
//     if (user) {
//       window.location.pathname = "/Shop";
//     }
//   }
//   handle_phone_number = ({ target }) => {
//     const { value } = target;
//     if (value.length === 0) {
//       const err_phone = "این فیلد نباید خالی باشد";
//       this.setState({ err_phone });
//     } else if (!value.startsWith(0)) {
//       const err_phone = "شماره موبایل باید با صفر شروع بشه";
//       this.setState({ err_phone });
//     } else if (value.length !== 11) {
//       const err_phone = "شماره تلفن باید ۱۱ رقم باشد";
//       this.setState({ err_phone });
//     } else {
//       this.setState({ phone_number: value, err_phone: "ok" });
//     }
//   };
//   check_password = (e) => {
//     const value = e.target.value;
//     if (value.length < 8) {
//       this.setState({ pass_err: "پسورد باید حداقل ۸ کاراکتر باشه" });
//     } else {
//       this.setState({ password: value, pass_err: "ok" });
//     }
//   };
//   check_user = () => {
//     this.setState({ pause: true });
//     axios
//       .get(
//         `https://daryaftyar.ir/backend/kad_api/password/${this.state.phone_number}`
//       )
//       .then((res) => {
//         const { exists, password, user_id } = res.data;
//         this.setState({ pause: false });
//         //console.log(res.data);
//         if (exists) {
//           if (password === this.state.password) {
//             axios
//               .get(` https://daryaftyar.ir/backend/kad_api/user/${user_id}`)
//               .then((res) => {
//                 const user = res.data;
//                 this.props.inside_user(user);
//                 //console.log(user);
//                 window.location.pathname = "/Dashboard";
//                 localStorage.setItem(
//                   "kad-phone-number",
//                   JSON.stringify(this.state.phone_number)
//                 );
//               })
//               .catch((err) => {
//                 this.props.handle_error(err);
//               });
//           } else {
//             const pass_err = "پسورد وارد شده صحیح نمی باشد";
//             this.setState({ pass_err });
//           }
//         } else {
//           this.setState({ err_phone: "شماره تلفن وارد شده اشتباه است" });
//         }
//       })
//       .catch((e) => {
//         this.setState({ pause: false });
//         this.props.handle_error(e);
//       });
//   };
//   render() {
//     return (
//       <>
//         <Helmet>
//           <title>ورود به سایت</title>
//           <meta name="description" content="ورود به وسیله رمز عبور در کاد" />
//           <meta name="keywords" content="ورود به وسیله رمز عبور کاد" />
//         </Helmet>
//         <section className="login-wrapper-section">
//           <img
//             src={login_bgc}
//             alt="عکس پس زمینه برای صفحه ورود"
//             className="login-bgc"
//           />
//           <Link to="/Dashboard" className="main-logo">
//             <img src={mainLogo} alt="وب سایت کاد" />
//           </Link>
//           <div className="login-wrapper mm-width">
//             <div className="forms-wrapper">
//               <h1>ورود به سایت</h1>
//               <input
//                 type="number"
//                 className="input-text input"
//                 placeholder="تلفن همراه"
//                 onInput={(e) => {
//                   this.handle_phone_number(e);
//                 }}
//               />
//               {this.state.err_phone && this.state.err_phone !== "ok" ? (
//                 <span className="error-place">{this.state.err_phone}</span>
//               ) : (
//                 <></>
//               )}
//               <input
//                 type="password"
//                 className="input-text input pass"
//                 placeholder="رمز عبور"
//                 onInput={(e) => {
//                   this.check_password(e);
//                 }}
//               />
//               {this.state.pass_err === "ok" && this.state.err_phone === "ok" ? (
//                 <span
//                   onClick={() => {
//                     this.check_user();
//                   }}
//                   className="enter button-span"
//                 >
//                   {this.state.pause ? <LittleLoading /> : "ورود"}
//                 </span>
//               ) : (
//                 <span className="enter button-span fail">ورود</span>
//               )}
//               {this.state.pass_err && this.state.pass_err !== "ok" ? (
//                 <span className="error-place need-margin">
//                   {this.state.pass_err}
//                 </span>
//               ) : (
//                 <></>
//               )}
//               <span className="enter-with-other-way forget">
//                 <Link to="/Forget-password">فراموشی رمز عبور</Link>
//               </span>
//               <span className="enter-with-other-way">
//                 <Link to="/Login">ورود با استفاده از کد یکبار مصرف</Link>
//               </span>
//             </div>
//           </div>
//         </section>
//       </>
//     );
//   }
// }

export default LoginPass;
