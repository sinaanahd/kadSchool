import React, { Component, useEffect, useState } from "react";
import Header from "../header/header";
import { Helmet } from "react-helmet";
import SideBar from "../side-bar/side-bar";
import withWebsiteData from "../hoc/with-website-data";

import banner_img from "../../assets/images/under-construction.webp";
let num = 2;
const UnderConstruction = () => {
  const [para_text, set_para_text] = useState("");
  const [counter, set_counter] = useState(0);
  useEffect(() => {
    if (num > 2) {
      setTimeout(handle_para_text, 50);
    } else {
      num = num + 1;
    }
  }, [para_text]);
  const handle_para_text = () => {
    const text =
      " دوست خوبم این صفحه رو داریم برات آماده میکنیم طی چند روز آینده میتونی ازش استفاده کنی ...";
    let para_text_new = para_text;
    if (text.length !== para_text.length) {
      para_text_new += text[para_text.length];
      // this.setState({ para_text });
      set_para_text(para_text_new);
    } else {
      // this.setState({ counter: counter + 1 });
      set_counter(counter + 1);
      if (counter === 50) {
        // this.setState({ para_text: "", counter: 0 });
        set_counter(0);
        set_para_text("");
      }
    }
  };
  return (
    <>
      <Helmet>
        <title>در حال ساخت این صفحه هستیم</title>
        <link
          rel="preload"
          as="image"
          href="../../assets/images/under-construction.webp"
        />
        <meta
          name="description"
          content="این صفحه در حال طراحی و ساخت است به زودی آماده میشه."
        />
      </Helmet>
      <section className="under-construction-section bgc-wrapper">
        <div className="under-construction mm-width">
          <SideBar />
          <div className="main-content">
            <h1>{para_text}</h1>
            <img
              width={800}
              height={498}
              src={banner_img}
              alt="صفحه در حال ساخته شدن است"
            />
          </div>
        </div>
      </section>
    </>
  );
};

// export default UnderConstruction;
// class UnderConstruction2 extends Component {
//   componentDidMount() {
//     setInterval(this.handle_para_text, 50);
//   }
//   handle_para_text = () => {
//     const text =
//       " دوست خوبم این صفحه رو داریم برات آماده میکنیم طی چند روز آینده میتونی ازش استفاده کنی ...";
//     let para_text = this.state.para_text;
//     if (text.length !== para_text.length) {
//       para_text += text[para_text.length];
//       this.setState({ para_text });
//     } else {
//       const counter = this.state.counter;
//       this.setState({ counter: counter + 1 });
//       if (counter === 50) {
//         this.setState({ para_text: "", counter: 0 });
//       }
//     }
//   };
//   render() {
//     const { user } = this.props;
//     return (
//       <>
//         <Helmet>
//           <title>در حال ساخت این صفحه هستیم</title>
//           <link
//             rel="preload"
//             as="image"
//             href="../../assets/images/under-construction.webp"
//           />
//           <meta
//             name="description"
//             content="این صفحه در حال طراحی و ساخت است به زودی آماده میشه."
//           />
//         </Helmet>
//         <section className="under-construction-section bgc-wrapper">
//           <div className="under-construction mm-width">
//             <SideBar />
//             <div className="main-content">
//               <h1>{this.state.para_text}</h1>
//               <img
//                 width={800}
//                 height={498}
//                 src={banner_img}
//                 alt="صفحه در حال ساخته شدن است"
//               />
//             </div>
//           </div>
//         </section>
//       </>
//     );
//   }
// }

export default UnderConstruction;
