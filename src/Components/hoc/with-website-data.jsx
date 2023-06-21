import React from "react";
import axios from "axios";
import Header from "../header/header";
import NewFooter from "../footer/new-footer";
const local_user = JSON.parse(localStorage.getItem("user-kad"))
  ? JSON.parse(localStorage.getItem("user-kad"))
  : false;
const local_doreha = JSON.parse(localStorage.getItem("doreha"))
  ? JSON.parse(localStorage.getItem("doreha"))
  : false;
const local_kelasses = JSON.parse(localStorage.getItem("kelasses"))
  ? JSON.parse(localStorage.getItem("kelasses"))
  : false;
const local_teachers = JSON.parse(localStorage.getItem("teachers"))
  ? JSON.parse(localStorage.getItem("teachers"))
  : false;
const local_courses = JSON.parse(localStorage.getItem("courses"))
  ? JSON.parse(localStorage.getItem("courses"))
  : false;
const local_jalasat = JSON.parse(localStorage.getItem("jalasat"))
  ? JSON.parse(localStorage.getItem("jalasat"))
  : false;
const local_free_courses = JSON.parse(localStorage.getItem("free-coures"))
  ? JSON.parse(localStorage.getItem("free-coures"))
  : false;
const sessionLogin = JSON.parse(sessionStorage.getItem("session-login"))
  ? JSON.parse(sessionStorage.getItem("session-login"))
  : false;
const local_cart = JSON.parse(sessionStorage.getItem("kad-cart"))
  ? JSON.parse(sessionStorage.getItem("kad-cart"))
  : false;
function withWebsiteData(Component) {
  return class withWebsiteData extends Component {
    state = {
      user: local_user,
      doreha: local_doreha,
      kelasses: local_kelasses,
      teachers: local_teachers,
      courses: local_courses,
      jalasat: local_jalasat,
      free_courses: local_free_courses,
      sessionLogin: sessionLogin,
      cart: local_cart,
      err: {
        state: false,
        message: "",
      },
      active_day: "Friday",
    };
    componentDidMount() {
      this.initial_data();
      if (this.state.user) {
        this.get_user(this.state.user.user_id);
        this.get_cart(this.state.user.user_id);
      }
    }
    initial_data = () => {
      this.get_doreha();
      this.get_kelasses();
      this.get_teachers();
      this.get_courses();
      this.get_jalasat();
    };
    get_cart = (user_id) => {
      axios
        .get(`https://daryaftyar.ir/backend/kad_api/cart/${user_id}`)
        .then((res) => {
          const cart = res.data;
          localStorage.setItem("kad-cart", JSON.stringify(cart));
          this.setState({ cart });
        })
        .catch((e) => {
          this.handle_error(e);
        });
    };
    get_doreha = () => {
      axios
        .get("https://daryaftyar.ir/backend/kad_api/doreha")
        .then((res) => {
          const doreha = res.data;

          this.setState({ doreha });
          localStorage.setItem("doreha", JSON.stringify(doreha));
        })
        .catch((e) => {
          this.handle_error(e);
        });
    };
    get_kelasses = () => {
      axios
        .get("https://daryaftyar.ir/backend/kad_api/kelases")
        .then((res) => {
          const kelasses = res.data;
          const free_courses = kelasses.filter((k) => k.price === 0);
          this.setState({ kelasses, free_courses });
          localStorage.setItem("kelasses", JSON.stringify(kelasses));
          localStorage.setItem("free-coures", JSON.stringify(free_courses));
        })
        .catch((e) => {
          this.handle_error(e);
        });
    };
    get_teachers = () => {
      axios
        .get("https://daryaftyar.ir/backend/kad_api/teachers")
        .then((res) => {
          const teachers = res.data;

          this.setState({ teachers });
          localStorage.setItem("teachers", JSON.stringify(teachers));
        })
        .catch((e) => {
          this.handle_error(e);
        });
    };
    get_jalasat = () => {
      axios
        .get("https://daryaftyar.ir/backend/kad_api/jalasat")
        .then((res) => {
          const jalasat = res.data;
          this.setState({ jalasat });
          localStorage.setItem("jalasat", JSON.stringify(jalasat));
        })
        .catch((e) => {
          this.handle_error(e);
        });
    };
    get_courses = () => {
      axios
        .get("https://daryaftyar.ir/backend/kad_api/courses")
        .then((res) => {
          const courses = res.data;
          this.setState({ courses });
          localStorage.setItem("courses", JSON.stringify(courses));
        })
        .catch((e) => {
          this.handle_error(e);
        });
    };
    get_user = (user_id) => {
      axios
        .get(` https://daryaftyar.ir/backend/kad_api/user/${user_id}`)
        .then((res) => {
          const user = res.data;
          const kelasses = [];
          const doreha = [];
          const week_plan = {
            Friday: [],
            Monday: [],
            Saturday: [],
            Sunday: [],
            Thursday: [],
            Tuesday: [],
            Wednesday: [],
          };
          if (this.state.kelasses) {
            user.kelases.forEach((k_id) => {
              const kelas = this.state.kelasses.find(
                (k) => k.kelas_id === k_id
              );
              kelasses.push(kelas);
            });
          }
          user.kelases = kelasses;
          if (this.state.doreha) {
            user.doreha.forEach((d_id) => {
              const dore = this.state.doreha.find((d) => d.dore_id === d_id);
              doreha.push(dore);
            });
          }
          user.doreha = doreha;
          if (this.state.jalasat) {
            for (let day in user.week_plan) {
              user.week_plan[day].forEach((j_id) => {
                const jalase = this.state.jalasat.find(
                  (j) => j.jalase_id === j_id
                );
                week_plan[day].push(jalase);
              });
            }
          }
          user.week_plan = week_plan;
          this.setState({ user });
          localStorage.setItem("user-kad", JSON.stringify(user));
        })
        .catch((e) => {
          this.handle_error(e);
        });
    };
    handle_error = (e) => {
      const err = {
        state: true,
        message: e.message,
        classes: ["err-show ", " error-wrapper"],
      };
      this.setState({ err });
      setTimeout(() => {
        const err = {
          state: true,
          message: e.message,
          classes: [" error-wrapper"],
        };
        this.setState({ err });
      }, 100);
      setTimeout(() => {
        const err = {
          state: true,
          message: e.message,
          classes: ["err-show ", " error-wrapper"],
        };
        this.setState({ err });
      }, 4000);
      setTimeout(() => {
        const err = {
          state: false,
          message: "",
          classes: [],
        };
        this.setState({ err });
      }, 5000);
    };
    inside_user = (user) => {
      this.setState({ user });
      localStorage.setItem("user-kad", JSON.stringify(user));
    };
    change_active_date = (active_day) => {
      this.setState({ active_day });
    };
    render() {
      return (
        <>
          {window.location.pathname === "/Login" ||
          window.location.pathname === "/LoginPass" ||
          window.location.pathname === "/Forget-password" ||
          window.location.pathname === "/Set-new-password" ||
          window.location.pathname === "/SignUp" ||
          window.location.pathname === "/SetPassword" ? (
            <></>
          ) : (
            <Header
              user={this.state.user ? this.state.user : false}
              cart={this.state.cart ? this.state.cart : false}
            />
          )}
          <Component
            {...this.props}
            data={this.state}
            user={this.state.user}
            doreha={this.state.doreha}
            kelasses={this.state.kelasses}
            teachers={this.state.teachers}
            courses={this.state.courses}
            jalasat={this.state.jalasat}
            free_courses={this.state.free_courses}
            inside_user={this.inside_user}
            handle_error={this.handle_error}
            change_active_date={this.change_active_date}
            get_doreha={this.get_doreha}
            get_courses={this.get_courses}
            get_kelasses={this.get_kelasses}
            get_jalasat={this.get_jalasat}
            initial_data={this.initial_data}
            cart={this.state.cart}
          />
          {this.state.err.state ? (
            <div className={this.state.err.classes.map((c) => `${c}`)}>
              {this.state.err.message}
            </div>
          ) : (
            <></>
          )}
          {window.location.pathname === "/Login" ||
          window.location.pathname === "/SignUp" ||
          window.location.pathname === "/SetPassword" ? (
            <></>
          ) : (
            <NewFooter />
          )}
        </>
      );
    }
  };
}
export default withWebsiteData;
