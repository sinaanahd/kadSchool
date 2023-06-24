// import React from "react";

// const BackendDataContext = React.createContext();

// const local_user = JSON.parse(localStorage.getItem("user-kad"));

// const local_doreha = JSON.parse(localStorage.getItem("doreha"));

// const local_kelasses = JSON.parse(localStorage.getItem("kelasses"));

// const local_teachers = JSON.parse(localStorage.getItem("teachers"));

// const local_courses = JSON.parse(localStorage.getItem("courses"));

// const local_jalasat = JSON.parse(localStorage.getItem("jalasat"));

// const local_free_courses = JSON.parse(localStorage.getItem("free-coures"));

// const local_cart = JSON.parse(sessionStorage.getItem("kad-cart"));

// class BackendDataProvider extends React.Component {
//   state = {
//     user: null,
//     teachers: null,
//     doreha: null,
//     kelasses: null,
//     courses: null,
//     jalasat: null,
//     free_courses: null,
//     cart: null,
//     doreha: null,
//     request_id: null,
//     cart_products: null,
//     single_prod: null,
//     cart_products: null,
//     err: {
//       state: false,
//       message: "",
//     },
//     active_day: "Friday",
//   };

//   componentDidMount() {
//     if (!local_user) {
//     }
//     if (!local_cart) {
//       this.get_cart();
//     }
//     setTimeout(() => {
//       const backendData2 = "Backend Data 2"; // Replace with actual fetched data
//       this.setState({ backendData2 });
//     }, 3000); // Simulating a delay of 3 seconds
//   }
//   get_user = (user_id) => {
//     axios
//       .get(`https://daryaftyar.ir/backend/kad_api/user/${user_id}`)
//       .then((res) => {
//         const user = res.data;
//         const kelasses = [];
//         const doreha = [];
//         const week_plan = {
//           Friday: [],
//           Monday: [],
//           Saturday: [],
//           Sunday: [],
//           Thursday: [],
//           Tuesday: [],
//           Wednesday: [],
//         };
//         if (this.state.kelasses) {
//           user.kelases.forEach((k_id) => {
//             const kelas = {
//               ...this.state.kelasses.find((k) => k.kelas_id === k_id),
//             };
//             kelasses.push(kelas);
//           });
//         }
//         user.kelases = kelasses;
//         if (this.state.doreha) {
//           user.doreha.forEach((d_id) => {
//             const dore = {
//               ...this.state.doreha.find((d) => d.dore_id === d_id),
//             };
//             doreha.push(dore);
//           });
//         }
//         user.doreha = doreha;
//         if (this.state.jalasat) {
//           for (let day in user.week_plan) {
//             user.week_plan[day].forEach((j_id) => {
//               const jalase = {
//                 ...this.state.jalasat.find((j) => j.jalase_id === j_id),
//               };
//               week_plan[day].push(jalase);
//             });
//           }
//         }
//         user.week_plan = week_plan;
//         localStorage.setItem("user-kad", JSON.stringify(user));
//       })
//       .catch((e) => {
//         this.handle_error(e);
//       });
//   };
//   get_cart = (user_id) => {
//     axios
//       .get(`https://daryaftyar.ir/backend/kad_api/cart/${user_id}`)
//       .then((res) => {
//         const cart = res.data;
//         localStorage.setItem("kad-cart", JSON.stringify(cart));
//         this.setState({ cart });
//         //this.get_cart_products(cart);
//       })
//       .catch((e) => {
//         this.handle_error(e);
//       });
//   };
//   handle_error = (e) => {
//     const err = {
//       state: true,
//       message: e.message,
//       classes: ["err-show ", " error-wrapper"],
//     };
//     this.setState({ err });
//     setTimeout(() => {
//       const err = {
//         state: true,
//         message: e.message,
//         classes: [" error-wrapper"],
//       };
//       this.setState({ err });
//     }, 100);
//     setTimeout(() => {
//       const err = {
//         state: true,
//         message: e.message,
//         classes: ["err-show ", " error-wrapper"],
//       };
//       this.setState({ err });
//     }, 4000);
//     setTimeout(() => {
//       const err = {
//         state: false,
//         message: "",
//         classes: [],
//       };
//       this.setState({ err, pause: false });
//     }, 5000);
//   };
//   render() {
//     const { backendData1, backendData2 } = this.state;
//     const { children } = this.props;

//     return (
//       <BackendDataContext.Provider
//         value={{
//           backendData1,
//           backendData2,
//         }}>
//         {children}
//       </BackendDataContext.Provider>
//     );
//   }
// }

// export { BackendDataContext, BackendDataProvider };
