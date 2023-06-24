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
const local_sample_files = JSON.parse(sessionStorage.getItem("sample_files"))
  ? JSON.parse(sessionStorage.getItem("sample_files"))
  : false;
function withWebsiteData(Component) {
  return class withWebsiteData extends Component {
    state = {
      user: local_user,
      ref_teachers: local_teachers,
      ref_doreha: local_doreha,
      ref_kelasses: local_kelasses,
      ref_courses: local_courses,
      ref_jalasat: local_jalasat,
      free_courses: local_free_courses,
      sessionLogin: sessionLogin,
      cart: local_cart,
      sample_files: local_sample_files,
      request_id: false,
      cart_products: false,
      single_prod: false,
      single_course: false,
      single_teacher: false,
      request_wait: 0,
      err: {
        state: false,
        message: "",
      },
      active_day: "Friday",
    };
    componentDidMount() {
      if (local_teachers) {
        this.setState({ ref_teachers: local_teachers });
      } else {
        this.get_teachers();
      }
      if (local_courses) {
        this.setState({ ref_courses: local_courses });
      } else {
        this.get_courses();
      }
      if (local_doreha) {
        this.setState({ ref_doreha: local_doreha });
      } else {
        this.get_doreha();
      }
      if (local_kelasses) {
        this.setState({ ref_kelasses: local_kelasses });
      } else {
        this.get_kelasses();
      }
      if (local_jalasat) {
        this.setState({ ref_jalasat: local_jalasat });
      } else {
        this.get_jalasat();
      }
      if (local_free_courses) {
        this.setState({ free_courses: local_free_courses });
      } else {
        this.get_kelasses();
      }
      if (local_sample_files) {
        this.setState({ sample_files: local_free_courses });
      } else {
        this.get_sample_files();
      }
      if (local_user) {
        //this.get_user(3098);
        this.get_user(local_user.user_id);
        this.get_cart(local_user.user_id);
      }
    }
    get_sample_files = () => {
      axios
        .get("https://daryaftyar.ir/backend/kad_api/sample_files")
        .then((res) => {
          const sample_files = res.data;
          localStorage.setItem("sample_files", JSON.stringify(sample_files));
          this.setState({ sample_files });
        })
        .catch((e) => {
          this.handle_error(e);
        });
    };
    get_cart = (user_id) => {
      axios
        .get(`https://daryaftyar.ir/backend/kad_api/cart/${user_id}`)
        .then((res) => {
          const cart = res.data;
          localStorage.setItem("kad-cart", JSON.stringify(cart));
          this.setState({ cart }, () => {
            this.get_cart_products(cart);
          });
        })
        .catch((e) => {
          this.handle_error(e);
          //console.log(e);
        });
    };
    get_cart_products = (cart) => {
      const cart_products = [];
      const check_teachers = this.state.ref_teachers;
      const check_kelasses = this.state.ref_kelasses;

      if (check_kelasses && check_teachers) {
        const ref_teachers = [...this.state.ref_teachers];
        const ref_kelasses = [...this.state.ref_kelasses];
        if (cart)
          cart.items_ids.forEach((id) => {
            const cart_product = {
              ...ref_kelasses.find((k) => k.kelas_id === id),
            };
            if (cart_product) {
              const kelas_teachers = [];
              cart_product.teachers.forEach((t_id) => {
                const teacher = ref_teachers.find((t) => t.teacher_id === t_id);
                if (teacher) kelas_teachers.push(teacher);
              });
              cart_product.teachers = kelas_teachers;
              cart_products.push(cart_product);
            }
          });
        this.setState({ cart_products });
      } else {
        this.setState(
          { ref_teachers: local_teachers, ref_kelasses: local_kelasses },
          () => {
            this.get_cart_products();
          }
        );
      }
    };
    get_doreha = () => {
      axios
        .get("https://daryaftyar.ir/backend/kad_api/doreha")
        .then((res) => {
          const ref_doreha = res.data;
          this.setState({ ref_doreha });
          localStorage.setItem("doreha", JSON.stringify(ref_doreha));
        })
        .catch((e) => {
          this.handle_error(e);
        });
    };
    get_kelasses = () => {
      axios
        .get("https://daryaftyar.ir/backend/kad_api/kelases")
        .then((res) => {
          const ref_kelasses = res.data;
          const all_kelasses = [...ref_kelasses];
          const free_courses = all_kelasses.filter((k) => k.price === 0);
          this.setState({ ref_kelasses, free_courses });
          localStorage.setItem("kelasses", JSON.stringify(ref_kelasses));
          localStorage.setItem("free-coures", JSON.stringify(free_courses));
        })
        .catch((e) => {
          this.handle_error(e);
          //console.log(e);
        });
    };
    get_teachers = () => {
      axios
        .get("https://daryaftyar.ir/backend/kad_api/teachers")
        .then((res) => {
          const ref_teachers = res.data;
          this.setState({ ref_teachers });
          localStorage.setItem("teachers", JSON.stringify(ref_teachers));
        })
        .catch((e) => {
          this.handle_error(e);
        });
    };
    get_jalasat = () => {
      axios
        .get("https://daryaftyar.ir/backend/kad_api/jalasat")
        .then((res) => {
          const ref_jalasat = res.data;
          this.setState({ ref_jalasat });
          localStorage.setItem("jalasat", JSON.stringify(ref_jalasat));
        })
        .catch((e) => {
          this.handle_error(e);
        });
    };
    get_courses = () => {
      axios
        .get("https://daryaftyar.ir/backend/kad_api/courses")
        .then((res) => {
          const ref_courses = res.data;
          this.setState({ ref_courses });
          localStorage.setItem("courses", JSON.stringify(ref_courses));
        })
        .catch((e) => {
          this.handle_error(e);
        });
    };
    // prettier-ignore
    modify_cart = (user_id, item_ids) => {
      axios
        .patch(`https://daryaftyar.ir/backend/kad_api/cart/${user_id}`, {
          "ids": item_ids,
        })
        .then((res) => {
          const cart = res.data;
          localStorage.setItem("kad-cart", JSON.stringify(cart));
          this.setState({ cart, request_id: false });
          this.get_cart_products(cart);
        })
        .catch((e) => {
          this.handle_error(e);
        });
    };
    handle_cart = (id) => {
      const { items_ids } = { ...this.state.cart };
      const { user_id } = { ...this.state.user };
      this.setState({ request_id: id });
      if (items_ids.includes(id)) {
        const index = items_ids.indexOf(id);
        items_ids.splice(index, 1);
      } else {
        items_ids.push(id);
      }
      // console.log(user_id, items_ids);
      this.modify_cart(user_id, items_ids);
    };
    get_user = (user_id) => {
      axios
        .get(`https://daryaftyar.ir/backend/kad_api/user/${user_id}`)
        .then((res) => {
          const user = res.data;
          this.fill_user_datas(user);
        })
        .catch((e) => {
          this.handle_error(e);
        });
    };
    fill_user_datas = (user) => {
      const check_doreha = this.state.ref_doreha;
      const check_kelasses = this.state.ref_kelasses;
      const check_jalasat = this.state.ref_jalasat;
      const request_wait = this.state.request_wait;

      if (check_doreha && check_jalasat && check_kelasses) {
        const ref_kelasses = [...this.state.ref_kelasses];
        const ref_doreha = [...this.state.ref_doreha];
        const ref_jalasat = [...this.state.ref_jalasat];
        const user_kelasses = [];
        const user_doreha = [];
        const week_plan = {
          Friday: [],
          Monday: [],
          Saturday: [],
          Sunday: [],
          Thursday: [],
          Tuesday: [],
          Wednesday: [],
        };
        if (ref_kelasses) {
          user.kelases.forEach((k_id) => {
            const kelas = ref_kelasses.find((k) => k.kelas_id === k_id);
            user_kelasses.push(kelas);
          });
        }
        user.kelases = user_kelasses;
        if (ref_doreha) {
          user.doreha.forEach((d_id) => {
            const dore = ref_doreha.find((d) => d.dore_id === d_id);
            user_doreha.push(dore);
          });
        }
        user.doreha = user_doreha;
        if (ref_jalasat) {
          for (let day in user.week_plan) {
            user.week_plan[day].forEach((j_id) => {
              const jalase = ref_jalasat.find((j) => j.jalase_id === j_id);
              week_plan[day].push(jalase);
            });
          }
        }
        user.week_plan = week_plan;
        localStorage.setItem("user-kad", JSON.stringify(user));
        this.setState({ user });
      } else {
        if (local_doreha && local_jalasat && local_kelasses) {
          this.setState(
            {
              ref_doreha: local_doreha,
              ref_kelasses: local_kelasses,
              ref_jalasat: local_jalasat,
            },
            () => {
              this.fill_user_datas(user);
            }
          );
        } else if (request_wait === 0) {
          this.setState({ request_wait: request_wait + 1 });
          setTimeout(() => {
            this.fill_user_datas(user);
          }, 1000);
        }
      }
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
        this.setState({ err, pause: false });
      }, 5000);
      console.log(e);
    };
    inside_user = (user) => {
      // this.setState({ user });
      // localStorage.setItem("user-kad", JSON.stringify(user));
      this.fill_user_datas(user);
    };
    change_active_date = (active_day) => {
      this.setState({ active_day });
    };
    find_single_prod = (id) => {
      const check_teachers = this.state.ref_teachers;
      const check_kelasses = this.state.ref_kelasses;
      const request_wait = this.state.request_wait;

      if (check_kelasses && check_teachers) {
        const ref_teachers = [...this.state.ref_teachers];
        const ref_kelasses = [...this.state.ref_kelasses];
        let kelas = false;
        if (ref_kelasses) {
          kelas = ref_kelasses.find((k) => k.kelas_id === id);
        }
        const kelas_teachers = [];
        if (kelas) {
          kelas.teachers.forEach((t_id) => {
            const teacher = ref_teachers.find((t) => t.teacher_id === t_id);

            kelas_teachers.push(teacher);
          });
          kelas.teachers = kelas_teachers;
        }
        this.setState({ single_prod: kelas ? kelas : false });
      } else if (local_teachers && local_kelasses) {
        this.setState(
          { ref_teachers: local_teachers, ref_kelasses: local_kelasses },
          () => {
            this.find_single_prod(id);
          }
        );
      } else if (request_wait === 0) {
        this.setState({ request_wait: request_wait + 1 });
        setTimeout(() => {
          this.find_single_prod(id);
        }, 1000);
      }
    };
    find_single_course = (id) => {
      const check_doreha = this.state.ref_doreha;
      const check_kelasses = this.state.ref_kelasses;
      const check_teachers = this.state.ref_teachers;
      const request_wait = this.state.request_wait;

      if (check_doreha && check_kelasses && check_teachers) {
        const doreha = [...this.state.ref_doreha];
        const kelasses = [...this.state.ref_kelasses];
        const teachers = [...this.state.ref_teachers];
        const dore_kelases = [];
        const dore_teachers = [];
        const dore = doreha.find((d) => d.dore_id === id);
        if (!dore) window.location.pathname = "/not-found";
        dore.kelases.forEach((k_id) => {
          const kelas = kelasses.find((k) => k_id === k.kelas_id);
          if (kelas) {
            const teacher = teachers.find(
              (t) => kelas.teachers[0] === t.teacher_id
            );
            if (teacher) dore_teachers.push(teacher);
            // kelas.teachers.forEach((t_id) => {
            // });
            dore_kelases.push(kelas);
          }
        });
        dore.teachers = dore_teachers;
        dore.kelases = dore_kelases;
        dore.teacher_carousel_pos = 0;
        if (dore_kelases.length <= 4) dore.teacher_carousel = false;
        else dore.teacher_carousel = true;
        this.setState({ single_course: dore });
      } else {
        if (local_doreha && local_kelasses && local_teachers) {
          this.setState(
            {
              ref_kelasses: local_kelasses,
              ref_doreha: local_doreha,
              ref_teachers: local_teachers,
            },
            () => {
              this.find_single_course(id);
            }
          );
        } else if (request_wait === 0) {
          this.setState({ request_wait: request_wait + 1 });
          setTimeout(() => {
            this.find_single_course(id);
          }, 1000);
        }
      }
    };
    course_move = (way) => {
      const single_course = { ...this.state.single_course };
      const teacher_carousel_pos = single_course.teacher_carousel_pos;
      const my_length = Math.floor(single_course.kelases.length / 4) - 1;
      if (way === "next") {
        if (my_length !== teacher_carousel_pos)
          teacher_carousel_pos = teacher_carousel_pos + 1;
      } else {
        if (teacher_carousel_pos !== 0)
          teacher_carousel_pos = teacher_carousel_pos - 1;
      }
      this.setState({ single_course });
    };
    find_single_teacher = (id) => {
      const check_doreha = this.state.ref_doreha;
      const check_teachers = this.state.ref_kelasses;
      const check_sample_files = this.state.sample_files;
      const request_wait = this.state.request_wait;
      if (check_doreha && check_sample_files && check_teachers) {
        const teachers = [...this.state.ref_teachers];
        const doreha = [...this.state.ref_doreha];
        const sample_files = { ...this.state.sample_files };
        const teachers_doreha = [];
        const teachers_sample_files = {
          pdf_sample_files: [],
          video_sample_files: [],
        };
        const teacher = teachers.find((t) => t.teacher_id === id);
        if (teacher) {
          teacher.doreha.forEach((d_id) => {
            const dore = doreha.find((d) => d.dore_id === d_id);
            if (dore) teachers_doreha.push(dore);
          });
          for (let item in teacher.sample_files) {
            teacher.sample_files[item].forEach((item_id) => {
              const correct_property_name = item.replace("_ids", "");
              const temp = sample_files[correct_property_name].find(
                (sf) => sf.file_id === item_id
              );
              if (temp) teachers_sample_files[item] = temp;
            });
          }
        }
        teacher.sample_files = teachers_sample_files;
        teacher.doreha = teachers_doreha;
        this.setState({ single_teacher: teacher });
      } else {
        if (local_doreha && local_teachers && local_sample_files) {
          this.setState(
            {
              ref_teachers: local_teachers,
              ref_doreha: local_doreha,
              sample_files: local_sample_files,
            },
            () => {
              this.find_single_teacher(id);
            }
          );
        } else if (request_wait === 0) {
          this.setState({ request_wait: request_wait + 1 });
          setTimeout(() => {
            this.find_single_teacher(id);
          }, 1000);
        }
      }
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
            active_day={this.state.active_day}
            user={this.state.user}
            doreha={this.state.ref_doreha}
            kelasses={this.state.ref_kelasses}
            teachers={this.state.ref_teachers}
            courses={this.state.ref_courses}
            jalasat={this.state.ref_jalasat}
            free_courses={this.state.free_courses}
            inside_user={this.inside_user}
            handle_error={this.handle_error}
            change_active_date={this.change_active_date}
            get_doreha={this.get_doreha}
            get_courses={this.get_courses}
            get_kelasses={this.get_kelasses}
            get_jalasat={this.get_jalasat}
            handle_cart={this.handle_cart}
            cart={this.state.cart}
            request_id={this.state.request_id}
            cart_products={this.state.cart_products}
            find_single_prod={this.find_single_prod}
            single_prod={this.state.single_prod}
            get_kelass_data={this.get_kelass_data}
            find_single_course={this.find_single_course}
            single_course={this.state.single_course}
            course_move={this.course_move}
            single_teacher={this.state.single_teacher}
            find_single_teacher={this.find_single_teacher}
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
