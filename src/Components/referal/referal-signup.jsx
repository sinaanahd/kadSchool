import React, {
  Component,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import withWebsiteData from "../hoc/with-website-data";
import mainLogo from "../../assets/images/main-logo.webp";
import checked_img from "../../assets/images/checked.webp";
import axios from "axios";
import RulesPopUp from "../signup/rules-pop-up/rules-pop-up";
import LittleLoading from "../reuseables/little-loading";
import login_bgc from "../../assets/images/login-img.webp";
import urls from "../urls/url";
import { DataContext } from "../context/DataContext";

const ReferalSignUp = () => {
  const { user, setUser } = useContext(DataContext);
  const myRef = useRef(null);
  const myRef2 = useRef(null);
  const [agree, set_agree] = useState(false);
  const [phone, set_phone] = useState(false);
  const [phone_err, set_phone_err] = useState(false);
  const [year, set_year] = useState(-1);
  const [subject, set_subject] = useState(-1);
  const [name_err, set_name_err] = useState(false);
  const [entry_name, set_entry_name] = useState(false);
  const [pause, set_pause] = useState(false);
  const [pause_2, set_pause_2] = useState(false);
  const [err_fileds, set_err_fileds] = useState({
    year: false,
    subject: false,
  });
  const [rules_pop_up, set_rules_pop_up] = useState(false);
  const [code, set_code] = useState(false);
  const [entry_code, set_entry_code] = useState(false);
  const [code_err, set_code_err] = useState(false);
  const [code_check, set_code_check] = useState(false);
  useEffect(() => {
    if (user) {
      window.location.pathname = "/Profile";
    }
  }, []);

  const handle_phone_err = (value) => {
    let phone = false;
    let phone_err = false;
    if (!value.startsWith("09")) {
      phone = false;
      phone_err = "شماره باید با ۰۹ شروع شود";
    } else if (value.length !== 11) {
      phone = false;
      phone_err = "شماره موبایل باید ۱۱ رقم باشد";
    } else {
      phone_err = false;
      phone = value;
    }
    // this.setState({ phone, phone_err });
    set_phone(phone);
    set_phone_err(phone_err);
  };
  const handle_rule_pop_up = () => {
    // const rules_pop_up = !this.state.rules_pop_up;
    // this.setState({ rules_pop_up });
    set_rules_pop_up(!rules_pop_up);
  };
  const close_pop_up = () => {
    // const rules_pop_up = this.state.rules_pop_up;
    if (rules_pop_up) {
      // this.setState({ rules_pop_up: false });
      set_rules_pop_up(false);
    }
  };
  const agree_handler = () => {
    // const agree = !this.state.agree;
    // this.setState({ agree });
    set_agree(!agree);
  };
  const handle_name = ({ target }) => {
    const { value } = target;
    if (value.length === 0) {
      const name_err = "این فیلد نباید خالی باشد";
      // this.setState({ name_err });
      set_name_err(name_err);
    } else if (value.length < 3) {
      const name_err = "اسم حداقل باید ۳ کاراکتر باشد";
      // this.setState({ name_err });
      set_name_err(name_err);
    } else {
      const entry_name = value;
      // this.setState({ entry_name, name_err: false });
      set_entry_name(entry_name);
      set_name_err(false);
    }
  };
  const send_data = () => {
    let year = myRef.current.selectedIndex - 1;
    let subject = myRef2.current.selectedIndex - 1;
    const local_err_fileds = { ...err_fileds };
    const admin_id = window.location.pathname.split("/")[2];
    localStorage.setItem("kad-phone-number", JSON.stringify(phone));
    // this.setState({ pause: true });
    set_pause(true);
    switch (year) {
      case -1:
        year = -1;
        break;
      case 0:
        year = 10;
        break;
      case 1:
        year = 11;
        break;
      case 2:
        year = 12;
        break;
    }

    if (year !== -1 && subject !== -1 && !name_err) {
      const obj = {
        phone_number: phone,
        name: entry_name,
        grade: convert_year(year),
        major: convert_major(subject),
        admin_id: admin_id,
      };
      axios
        .post(`${urls.register_user}`, obj)
        .then((res) => {
          let data = res.data;
          axios
            .get(`${urls.user}${data.user_id}`)
            .then((res) => {
              const user = res.data;
              setUser(user);
              localStorage.setItem("user-kad", JSON.stringify(user));
              if (admin_id === "6") {
                window.location.pathname =
                  "/Shop/product/نکته-و-تست-فلسفه-و-منطق";
              } else if (admin_id === "16") {
                window.location.pathname =
                  "/Shop/product/دین-و-زندگی-دوازدهم-استاد-کبیر";
              } else {
                window.location.pathname = "/SetPassword";
              }
              set_pause(false);
            })
            .catch((err) => console.log(err));
        })
        .catch((err) => console.log(err));
    } else {
      if (year === -1) {
        local_err_fileds.year = "لطفا یک پایه را انتخاب کنید";
      } else if (subject === -1) {
        local_err_fileds.year = "لطفا یک رشته را انتخاب کنید";
      }
      // this.setState({ err_fileds });
      set_err_fileds(err_fileds);
    }
  };
  const convert_year = (year) => {
    switch (year) {
      case 10:
        return "دهم";
      case 11:
        return "یازدهم";
      case 12:
        return "دوازدهم";
    }
  };
  const convert_major = (subject) => {
    switch (subject) {
      case 0:
        return "ریاضی";
      case 1:
        return "تجربی";
      case 2:
        return "انسانی";
      case 3:
        return "هنر";
    }
  };
  const get_verification_code = () => {
    // this.setState({ pause_2: true });
    set_pause_2(true);
    axios
      .get(`${urls.verify_number}${phone}`)
      .then((res) => {
        // console.log(res.data);
        const { been_before, user_id, verification_code } = res.data;
        // this.setState({ pause_2: false, code: verification_code });
        set_pause_2(false);
        set_code(verification_code);
        // console.log(res.data);
        if (been_before) {
          window.location.pathname = "/Login";
        }
      })
      .catch((err) => this.props.handle_error(err));
  };
  const fill_code = (value) => {
    // this.setState({ entry_code: value });
    set_entry_code(value);
  };
  const check_code = () => {
    if (parseInt(code) === parseInt(entry_code)) {
      // this.setState({ code_check: true, code_err: false });
      set_code_check(true);
      set_code_err(false);
    } else {
      const code_err = "کد وارد شده صحیح نمیباشد";
      // this.setState({ code_err, code_check: false });
      set_code_err(code_err);
      set_code_check(false);
    }
  };
  return (
    <>
      <Helmet>
        <title>ثبت نام با کد دعوت </title>
        <meta name="description" content="صفحه ثبت نام کاد" />
        <meta name="robots" content="noindex" />
      </Helmet>
      <section
        className="login-wrapper-section"
        onClick={() => {
          close_pop_up();
        }}
      >
        <img
          src={login_bgc}
          alt="عکس پس زمینه برای صفحه ورود"
          className="login-bgc"
        />
        <Link to="/HomePage" className="main-logo">
          <img src={mainLogo} alt="وب سایت کاد" />
        </Link>
        <div className="login-wrapper">
          <div className="forms-wrapper">
            <h1 className="title">ثبت نام</h1>
            <input
              type="number"
              placeholder="شماره تماس"
              className="input"
              onInput={({ target }) => {
                handle_phone_err(target.value);
              }}
            />
            {phone_err ? (
              <span className="error-place">{phone_err}</span>
            ) : (
              <></>
            )}
            {phone ? (
              <span
                className="button-span"
                onClick={() => {
                  get_verification_code();
                }}
              >
                {pause_2 ? <LittleLoading /> : "دریافت کد"}
              </span>
            ) : (
              <span className="button-span fail">دریافت کد</span>
            )}
            {!code ? (
              ""
            ) : (
              <>
                <span className="input-with-btn">
                  <input
                    type="number"
                    placeholder="کد تایید را وارد کنید"
                    onInput={({ target }) => {
                      fill_code(target.value);
                    }}
                  />
                  <span
                    className="button-span"
                    onClick={() => {
                      check_code();
                    }}
                  >
                    تایید
                  </span>
                </span>
                {code_err ? (
                  <span className="error-place code-err">{code_err}</span>
                ) : (
                  ""
                )}
              </>
            )}
            {code_check ? (
              <>
                <input
                  type="text"
                  placeholder="نام و نام‌خانوادگی"
                  className="input"
                  onInput={(e) => {
                    handle_name(e);
                  }}
                />
                <select name="" id="" placeholder="" ref={myRef}>
                  <option value={-1}>پایه تحصیلی</option>
                  <option value={10}>دهم</option>
                  <option value={11}>یازدهم</option>
                  <option value={12}>دوازدهم</option>
                </select>
                <select name="" id="" placeholder="" ref={myRef2}>
                  <option value={-1}>رشته تحصیلی</option>
                  <option value={0}>ریاضی</option>
                  <option value={1}>تجربی</option>
                  <option value={2}>انسانی</option>
                  <option value={3}>هنر</option>
                </select>
                <span className="agree_to-rules">
                  <p>
                    با{" "}
                    <font
                      className="rules-text"
                      onClick={() => {
                        handle_rule_pop_up();
                      }}
                    >
                      قوانین و مقررات
                    </font>{" "}
                    کاد موافقم
                  </p>
                  <span
                    onClick={() => {
                      agree_handler();
                    }}
                    className={agree ? "check checked" : "check"}
                  >
                    {agree ? <img src={checked_img} /> : <></>}
                  </span>
                </span>
                {agree ? (
                  <span
                    onClick={() => {
                      send_data();
                    }}
                    className="button-span"
                  >
                    {pause ? <LittleLoading /> : "ثبت نام"}
                  </span>
                ) : (
                  <span className="button-span fail">ثبت نام</span>
                )}
                {name_err ? (
                  <span className="error-place need-margin">{name_err}</span>
                ) : err_fileds.subject ? (
                  <span className="error-place need-margin">
                    {err_fileds.subject}
                  </span>
                ) : err_fileds.year ? (
                  <span className="error-place need-margin">
                    {err_fileds.year}
                  </span>
                ) : (
                  <></>
                )}
              </>
            ) : (
              <></>
            )}
          </div>
          {rules_pop_up ? <RulesPopUp /> : <></>}
        </div>
      </section>
    </>
  );
};

export default ReferalSignUp;
// class ReferalSignUp2 extends Component {
//   constructor(props) {
//     super(props);
//     this.myRef = React.createRef();
//     this.myRef2 = React.createRef();
//   }
//   state = {
//     agree: false,
//     phone: false,
//     phone_err: false,
//     year: -1,
//     subject: -1,
//     name_err: false,
//     entry_name: false,
//     pause: false,
//     pause_2: false,
//     err_fileds: {
//       year: false,
//       subject: false,
//     },
//     rules_pop_up: false,
//     code: false,
//     entry_code: false,
//     code_err: false,
//     code_check: false,
//   };
//   componentDidMount() {
//     const { user } = this.props;
//     if (user) {
//       window.location.pathname = "/Profile";
//     }
//   }
//   handle_phone_err = (value) => {
//     let phone = false;
//     let phone_err = false;
//     if (!value.startsWith("09")) {
//       phone = false;
//       phone_err = "شماره باید با ۰۹ شروع شود";
//     } else if (value.length !== 11) {
//       phone = false;
//       phone_err = "شماره موبایل باید ۱۱ رقم باشد";
//     } else {
//       phone_err = false;
//       phone = value;
//     }
//     this.setState({ phone, phone_err });
//   };
//   handle_rule_pop_up = () => {
//     const rules_pop_up = !this.state.rules_pop_up;
//     this.setState({ rules_pop_up });
//   };
//   close_pop_up = () => {
//     const rules_pop_up = this.state.rules_pop_up;
//     if (rules_pop_up) {
//       this.setState({ rules_pop_up: false });
//     }
//   };
//   agree_handler = () => {
//     const agree = !this.state.agree;
//     this.setState({ agree });
//   };
//   handle_name = ({ target }) => {
//     const { value } = target;
//     if (value.length === 0) {
//       const name_err = "این فیلد نباید خالی باشد";
//       this.setState({ name_err });
//     } else if (value.length < 3) {
//       const name_err = "اسم حداقل باید ۳ کاراکتر باشد";
//       this.setState({ name_err });
//     } else {
//       const entry_name = value;
//       this.setState({ entry_name, name_err: false });
//     }
//   };
//   send_data = () => {
//     let year = this.myRef.current.selectedIndex - 1;
//     let subject = this.myRef2.current.selectedIndex - 1;
//     const err_fileds = { ...this.state.err_fileds };
//     const entry_name = this.state.entry_name;
//     const admin_id = window.location.pathname.split("/")[2];
//     localStorage.setItem("kad-phone-number", JSON.stringify(this.state.phone));
//     this.setState({ pause: true });
//     switch (year) {
//       case -1:
//         year = -1;
//         break;
//       case 0:
//         year = 10;
//         break;
//       case 1:
//         year = 11;
//         break;
//       case 2:
//         year = 12;
//         break;
//     }

//     if (year !== -1 && subject !== -1 && !this.state.name_err) {
//       const obj = {
//         phone_number: this.state.phone,
//         name: entry_name,
//         grade: this.convert_year(year),
//         major: this.convert_major(subject),
//         admin_id: admin_id,
//       };
//       axios
//         .post(`${urls.register_user}`, obj)
//         .then((res) => {
//           let data = res.data;
//           axios
//             .get(`${urls.user}${data.user_id}`)
//             .then((res) => {
//               const user = res.data;
//               this.props.inside_user(user);
//               if (admin_id === "6") {
//                 window.location.pathname = "/Shop/product/فلسفه-و-منطق-۱";
//               } else {
//                 window.location.pathname = "/SetPassword";
//               }
//               this.setState({ pause: false });
//             })
//             .catch((err) => this.props.handle_error(err));
//         })
//         .catch((err) => this.props.handle_error(err));
//     } else {
//       if (year === -1) {
//         err_fileds.year = "لطفا یک پایه را انتخاب کنید";
//       } else if (subject === -1) {
//         err_fileds.year = "لطفا یک رشته را انتخاب کنید";
//       }
//       this.setState({ err_fileds });
//     }
//   };
//   convert_year = (year) => {
//     switch (year) {
//       case 10:
//         return "دهم";
//       case 11:
//         return "یازدهم";
//       case 12:
//         return "دوازدهم";
//     }
//   };
//   convert_major = (subject) => {
//     switch (subject) {
//       case 0:
//         return "ریاضی";
//       case 1:
//         return "تجربی";
//       case 2:
//         return "انسانی";
//       case 3:
//         return "هنر";
//     }
//   };
//   get_verification_code = () => {
//     this.setState({ pause_2: true });
//     axios
//       .get(`${urls.verify_number}${this.state.phone}`)
//       .then((res) => {
//         // console.log(res.data);
//         const { been_before, user_id, verification_code } = res.data;
//         this.setState({ pause_2: false, code: verification_code });
//         if (been_before) {
//           window.location.pathname = "/Login";
//         }
//       })
//       .catch((err) => this.props.handle_error(err));
//   };
//   fill_code = (value) => {
//     this.setState({ entry_code: value });
//   };
//   check_code = () => {
//     const entry_code = this.state.entry_code;
//     const code = this.state.code;
//     if (parseInt(code) === parseInt(entry_code)) {
//       this.setState({ code_check: true, code_err: false });
//     } else {
//       const code_err = "کد وارد شده صحیح نمیباشد";
//       this.setState({ code_err, code_check: false });
//     }
//   };
//   render() {
//     return (
//       <>
//         <Helmet>
//           <title>ثبت نام با کد دعوت </title>
//           <meta name="description" content="صفحه ثبت نام کاد" />
//           <meta name="robots" content="noindex" />
//         </Helmet>
//         <section
//           className="login-wrapper-section"
//           onClick={() => {
//             this.close_pop_up();
//           }}
//         >
//           <img
//             src={login_bgc}
//             alt="عکس پس زمینه برای صفحه ورود"
//             className="login-bgc"
//           />
//           <Link to="/HomePage" className="main-logo">
//             <img src={mainLogo} alt="وب سایت کاد" />
//           </Link>
//           <div className="login-wrapper">
//             <div className="forms-wrapper">
//               <h1 className="title">ثبت نام</h1>
//               <input
//                 type="number"
//                 placeholder="شماره تماس"
//                 className="input"
//                 onInput={({ target }) => {
//                   this.handle_phone_err(target.value);
//                 }}
//               />
//               {this.state.phone_err ? (
//                 <span className="error-place">{this.state.phone_err}</span>
//               ) : (
//                 <></>
//               )}
//               {this.state.phone ? (
//                 <span
//                   className="button-span"
//                   onClick={() => {
//                     this.get_verification_code();
//                   }}
//                 >
//                   {this.state.pause_2 ? <LittleLoading /> : "دریافت کد"}
//                 </span>
//               ) : (
//                 <span className="button-span fail">دریافت کد</span>
//               )}
//               {!this.state.code ? (
//                 ""
//               ) : (
//                 <>
//                   <span className="input-with-btn">
//                     <input
//                       type="number"
//                       placeholder="کد تایید را وارد کنید"
//                       onInput={({ target }) => {
//                         this.fill_code(target.value);
//                       }}
//                     />
//                     <span
//                       className="button-span"
//                       onClick={() => {
//                         this.check_code();
//                       }}
//                     >
//                       تایید
//                     </span>
//                   </span>
//                   {this.state.code_err ? (
//                     <span className="error-place code-err">
//                       {this.state.code_err}
//                     </span>
//                   ) : (
//                     ""
//                   )}
//                 </>
//               )}
//               {this.state.code_check ? (
//                 <>
//                   <input
//                     type="text"
//                     placeholder="نام و نام‌خانوادگی"
//                     className="input"
//                     onInput={(e) => {
//                       this.handle_name(e);
//                     }}
//                   />
//                   <select name="" id="" placeholder="" ref={this.myRef}>
//                     <option value={-1}>پایه تحصیلی</option>
//                     <option value={10}>دهم</option>
//                     <option value={11}>یازدهم</option>
//                     <option value={12}>دوازدهم</option>
//                   </select>
//                   <select name="" id="" placeholder="" ref={this.myRef2}>
//                     <option value={-1}>رشته تحصیلی</option>
//                     <option value={0}>ریاضی</option>
//                     <option value={1}>تجربی</option>
//                     <option value={2}>انسانی</option>
//                     <option value={3}>هنر</option>
//                   </select>
//                   <span className="agree_to-rules">
//                     <p>
//                       با{" "}
//                       <font
//                         className="rules-text"
//                         onClick={() => {
//                           this.handle_rule_pop_up();
//                         }}
//                       >
//                         قوانین و مقررات
//                       </font>{" "}
//                       کاد موافقم
//                     </p>
//                     <span
//                       onClick={() => {
//                         this.agree_handler();
//                       }}
//                       className={this.state.agree ? "check checked" : "check"}
//                     >
//                       {this.state.agree ? <img src={checked_img} /> : <></>}
//                     </span>
//                   </span>
//                   {this.state.agree ? (
//                     <span
//                       onClick={() => {
//                         this.send_data();
//                       }}
//                       className="button-span"
//                     >
//                       {this.state.pause ? <LittleLoading /> : "ثبت نام"}
//                     </span>
//                   ) : (
//                     <span className="button-span fail">ثبت نام</span>
//                   )}
//                   {this.state.name_err ? (
//                     <span className="error-place need-margin">
//                       {this.state.name_err}
//                     </span>
//                   ) : this.state.err_fileds.subject ? (
//                     <span className="error-place need-margin">
//                       {this.state.err_fileds.subject}
//                     </span>
//                   ) : this.state.err_fileds.year ? (
//                     <span className="error-place need-margin">
//                       {this.state.err_fileds.year}
//                     </span>
//                   ) : (
//                     <></>
//                   )}
//                 </>
//               ) : (
//                 <></>
//               )}
//             </div>
//             {this.state.rules_pop_up ? <RulesPopUp /> : <></>}
//           </div>
//         </section>
//       </>
//     );
//   }
// }

// export default withWebsiteData(ReferalSignUp2);
