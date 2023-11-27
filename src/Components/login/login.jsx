import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import mainLogo from "../../assets/images/main-logo.webp";
import login_bgc from "../../assets/images/login-img.webp";
import axios from "axios";
import LittleLoading from "../reuseables/little-loading";
import React, { useState, Component, useEffect, useContext } from "react";
import { DataContext } from "../context/DataContext";
import urls from "../urls/url";
const Login = () => {
  const { user, setUser } = useContext(DataContext);
  const [phone_number, set_phone_number] = useState(false);
  const [err_phone, set_err_phone] = useState(false);
  const [pause, set_pause] = useState(false);
  const [verification_code, set_verification_code] = useState(false);
  const [user_id, set_user_id] = useState(false);
  const [been_before, set_been_before] = useState(false);
  const [entry_code, set_entry_code] = useState(false);
  const [enter_code_status, set_enter_code_status] = useState(false);
  const [code_sent_msg, set_code_sent_msg] = useState(false);
  const [no_more_code, set_no_more_code] = useState(false);
  useEffect(() => {
    if (user) {
      window.location.pathname = "/Shop";
    }
  }, []);
  const handle_phone_number = ({ target }) => {
    const { value } = target;
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
      // this.setState({ phone_number: value, err_phone: false });
      set_phone_number(value);
      set_err_phone(false);
    }
  };
  const get_verification_code = () => {
    // this.setState({ pause: true });
    set_pause(true);
    axios
      .get(`${urls.verify_number}${phone_number}`)
      .then((res) => {
        // this.setState({ pause: false });
        set_pause(false);
        const { been_before, user_id, verification_code } = res.data;
        // this.setState({ code_sent_msg: "" });
        set_code_sent_msg("کد با موفقیت ارسال شد");
        console.log(verification_code);
        localStorage.setItem("kad-phone-number", JSON.stringify(phone_number));
        // this.setState({ no_more_code: true });
        set_no_more_code(true);
        if (been_before) {
          // this.setState({ user_id });
          set_user_id(user_id);
        }
        // this.setState({ verification_code, been_before });
        set_verification_code(verification_code);
        set_been_before(been_before);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const check_user = () => {
    // const entry_code = this.state.entry_code;
    // const code = this.state.verification_code;
    // const been = this.state.been_before;
    if (entry_code === verification_code) {
      if (been_before) {
        axios
          .get(`${urls.user}${user_id}`)
          .then((res) => {
            const user = res.data;
            // this.props.inside_user(user);
            setUser(user);
            localStorage.setItem("user-kad", JSON.stringify(user));
            window.location.pathname = "/Shop";
          })
          .catch((err) => {
            // this.props.handle_error(err);
            console.log(err);
          });
      } else {
        window.location.pathname = "/SignUp";
      }
    } else {
      const enter_code_status = "کد وارد شده صحیح نمی باشد";
      // this.setState({ enter_code_status });
      set_enter_code_status(enter_code_status);
    }
  };
  const handle_verication_code = ({ target }) => {
    const { value } = target;
    // const code = this.state.verification_code;
    if (value.length === verification_code.length) {
      // this.setState({ entry_code: value });
      set_entry_code(value);
    }
  };
  return (
    <>
      <Helmet>
        <title>ورود به سایت</title>
        <meta
          name="description"
          content="با ورود به سایت کاد میتونید بهترین کلاس های کنکور رو مشاهده کنی و  با بهترین اساتید کنکور درس هاتو یاد بگیری"
        />
        <meta
          name="keywords"
          content="ورود به کاد, ثبت نام در کاد, لاگین کاد, وارد شدن به کاد"
        />
      </Helmet>
      <section className="login-wrapper-section">
        <img
          src={login_bgc}
          alt="عکس پس زمینه برای صفحه ورود"
          className="login-bgc"
        />
        <Link to="/HomePage" className="main-logo">
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
            {err_phone ? (
              <span className="error-place">{err_phone}</span>
            ) : (
              <></>
            )}
            {code_sent_msg ? (
              <span className="error-place green">{code_sent_msg}</span>
            ) : (
              <></>
            )}
            {err_phone || !phone_number || no_more_code ? (
              <span className="get-code button-span fail">دریافت کد</span>
            ) : (
              <span
                className="get-code button-span"
                onClick={() => {
                  get_verification_code();
                }}
              >
                {pause ? <LittleLoading /> : "دریافت کد"}
              </span>
            )}

            <input
              type="number"
              className="input-text input"
              placeholder="کد یکبار مصرف"
              onInput={(e) => handle_verication_code(e)}
            />
            {/* onClick={() => {
                  scrollToTop();
                }} */}

            {verification_code ? (
              <span
                onClick={() => {
                  check_user();
                }}
                className="enter button-span"
              >
                ورود
              </span>
            ) : (
              <span className="enter button-span fail">ورود</span>
            )}
            {enter_code_status ? (
              <span className="error-place need-margin">
                {enter_code_status}
              </span>
            ) : (
              <></>
            )}
            <span className="enter-with-other-way">
              <Link to="/LoginPass">ورود با استفاده از رمز عبور</Link>
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

// class Login2 extends Component {
//   state = {
//     phone_number: false,
//     err_phone: false,
//     pause: false,
//     verification_code: false,
//     user_id: false,
//     been_before: false,
//     entry_code: false,
//     enter_code_status: false,
//     no_more_code: false,
//     code_sent_msg: false,
//   };
//   componentDidMount() {
//     const { user } = this.props;
//     if (user) {
//       window.location.pathname = "/Dashboard";
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
//       this.setState({ phone_number: value, err_phone: false });
//     }
//   };
//   get_verification_code = () => {
//     this.setState({ pause: true });
//     axios
//       .get(
//         `https://kadschool.com/backend/kad_api/verify_phone_number/${this.state.phone_number}`
//       )
//       .then((res) => {
//         this.setState({ pause: false });
//         const { been_before, user_id, verification_code } = res.data;
//         this.setState({ code_sent_msg: "کد با موفقیت ارسال شد" });
//         // console.log(verification_code);
//         localStorage.setItem(
//           "kad-phone-number",
//           JSON.stringify(this.state.phone_number)
//         );
//         this.setState({ no_more_code: true });
//         if (been_before) {
//           this.setState({ user_id });
//         }
//         this.setState({ verification_code, been_before });
//       })
//       .catch((err) => {
//         this.props.handle_error(err);
//         console.log(err);
//       });
//   };
//   check_user = () => {
//     const entry_code = this.state.entry_code;
//     const code = this.state.verification_code;
//     const been = this.state.been_before;
//     if (code === entry_code) {
//       if (been) {
//         axios
//           .get(
//             ` https://kadschool.com/backend/kad_api/user/${this.state.user_id}`
//           )
//           .then((res) => {
//             const user = res.data;
//             //localStorage.setItem("user-kad", JSON.stringify(user));
//             this.props.inside_user(user);
//             window.location.pathname = "/Dashboard";
//           })
//           .catch((err) => {
//             this.props.handle_error(err);
//             console.log(err);
//           });
//       } else {
//         window.location.pathname = "/SignUp";
//       }
//     } else {
//       const enter_code_status = "کد وارد شده صحیح نمی باشد";
//       this.setState({ enter_code_status });
//     }
//   };
//   handle_verication_code = ({ target }) => {
//     const { value } = target;
//     const code = this.state.verification_code;
//     if (value.length === code.length) {
//       this.setState({ entry_code: value });
//     }
//   };
//   render() {
//     return (
//       <>
//         <Helmet>
//           <title>ورود به سایت</title>
//           <meta name="description" content="صفحه ورود و ثبت نام کاد" />
//           <meta
//             name="keywords"
//             content="ورود به کاد, ثبت نام در کاد, لاگین کاد, وارد شدن به کاد"
//           />
//         </Helmet>
//         <section className="login-wrapper-section">
//           <img
//             src={login_bgc}
//             alt="عکس پس زمینه برای صفحه ورود"
//             className="login-bgc"
//           />
//           <Link to="/HomePage" className="main-logo">
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
//               {this.state.err_phone ? (
//                 <span className="error-place">{this.state.err_phone}</span>
//               ) : (
//                 <></>
//               )}
//               {this.state.code_sent_msg ? (
//                 <span className="error-place green">
//                   {this.state.code_sent_msg}
//                 </span>
//               ) : (
//                 <></>
//               )}
//               {this.state.err_phone ||
//               !this.state.phone_number ||
//               this.state.no_more_code ? (
//                 <span className="get-code button-span fail">دریافت کد</span>
//               ) : (
//                 <span
//                   className="get-code button-span"
//                   onClick={() => {
//                     this.get_verification_code();
//                   }}
//                 >
//                   {this.state.pause ? <LittleLoading /> : "دریافت کد"}
//                 </span>
//               )}

//               <input
//                 type="number"
//                 className="input-text input"
//                 placeholder="کد یکبار مصرف"
//                 onInput={(e) => this.handle_verication_code(e)}
//               />
//               {/* onClick={() => {
//                   scrollToTop();
//                 }} */}

//               {this.state.verification_code ? (
//                 <span
//                   onClick={() => {
//                     this.check_user();
//                   }}
//                   className="enter button-span"
//                 >
//                   ورود
//                 </span>
//               ) : (
//                 <span className="enter button-span fail">ورود</span>
//               )}
//               {this.state.enter_code_status ? (
//                 <span className="error-place need-margin">
//                   {this.state.enter_code_status}
//                 </span>
//               ) : (
//                 <></>
//               )}
//               <span className="enter-with-other-way">
//                 <Link to="/LoginPass">ورود با استفاده از رمز عبور</Link>
//               </span>
//             </div>
//           </div>
//         </section>
//       </>
//     );
//   }
// }

export default Login;
