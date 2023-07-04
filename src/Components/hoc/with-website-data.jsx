import React from "react";
import axios from "axios";
import Header from "../header/header";
import NewFooter from "../footer/new-footer";
import last_login_check from "../functions/last-login-check";
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
const local_cart = JSON.parse(localStorage.getItem("kad-cart"))
  ? JSON.parse(localStorage.getItem("kad-cart"))
  : false;
const local_sample_files = JSON.parse(localStorage.getItem("sample_files"))
  ? JSON.parse(localStorage.getItem("sample_files"))
  : false;
const local_main_page_banners = JSON.parse(
  localStorage.getItem("main-page-banners")
)
  ? JSON.parse(localStorage.getItem("main-page-banners"))
  : false;
const local_shop_banners = JSON.parse(localStorage.getItem("shop-banners"))
  ? JSON.parse(localStorage.getItem("shop-banners"))
  : false;
const this_time_login = new Date().getTime();
const last_login = JSON.parse(localStorage.getItem("LL"))
  ? JSON.parse(localStorage.getItem("LL"))
  : this_time_login;
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
      single_kelas: false,
      request_wait: 0,
      main_page_banners: local_main_page_banners,
      shop_banners: local_shop_banners,
      subjects: [
        { id: 0, name: "ریاضی" },

        { id: 1, name: "تجربی" },

        { id: 2, name: "انسانی" },

        { id: 3, name: "هنر" },
      ],
      years: [
        {
          id: 10,
          name: "دهم",
        },
        {
          id: 11,
          name: "یازدهم",
        },
        {
          id: 12,
          name: "دوازدهم",
        },
        {
          id: 18,
          name: "کنکور",
        },
        {
          id: 0,
          name: "فارغ التحصیل",
        },
      ],
      err: {
        state: false,
        message: "",
      },
      active_day: "Friday",
    };
    componentDidMount() {
      //this.get_banners();
      const is_time = last_login_check(last_login, this_time_login);
      if (is_time) {
        this.get_banners();
        this.get_teachers();
        this.get_courses();
        this.get_doreha();
        this.get_kelasses();
        this.get_jalasat();
        this.get_sample_files();
        console.log("got it");
      } else {
        if (local_shop_banners && local_main_page_banners) {
          this.setState({
            shop_banners: local_shop_banners,
            main_page_banners: local_main_page_banners,
          });
        } else {
          this.get_banners();
        }
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
        this.get_jalasat();
        if (local_jalasat) {
          this.setState({ ref_jalasat: local_jalasat });
        } else {
          this.get_jalasat();
          //console.log("jalase");
        }
        if (local_free_courses) {
          this.setState({ free_courses: local_free_courses });
        } else {
          this.get_kelasses();
        }
        if (local_sample_files) {
          this.setState({ sample_files: local_sample_files });
        } else {
          this.get_sample_files();
        }
      }
      //this.get_user(3098);
      if (local_user) {
        this.get_user(local_user.user_id);
        this.get_cart(local_user.user_id);
      }
    }
    get_banners = () => {
      axios
        .get("https://daryaftyar.ir/backend/kad_api/banners")
        .then((res) => {
          console.log(res.data);
          this.setState({
            main_page_banners: res.data.main_page_banners,
            shop_banners: res.data.store_banners[0],
          });
          localStorage.setItem(
            "main-page-banners",
            JSON.stringify(res.data.main_page_banners)
          );
          localStorage.setItem(
            "shop-banners",
            JSON.stringify(res.data.store_banners[0])
          );
        })
        .catch((e) => {
          this.handle_error(e);
        });
    };
    get_ref = () => {
      axios
        .get("https://daryaftyar.ir/backend/kad_api/grades_and_majors")
        .then((res) => console.log(res.data))
        .catch((e) => {
          this.handle_error(e);
        });
    };
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
      const request_wait = this.state.request_wait;

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
                const teacher = {
                  ...ref_teachers.find((t) => t.teacher_id === t_id),
                };
                if (Object.keys(teacher).length !== 0)
                  kelas_teachers.push(teacher);
              });
              cart_product.teachers = kelas_teachers;
              cart_products.push(cart_product);
            }
          });
        this.setState({ cart_products });
      } else if (request_wait === 0) {
        if (local_teachers && local_kelasses) {
          this.setState(
            { ref_teachers: local_teachers, ref_kelasses: local_kelasses },
            () => {
              this.get_cart_products();
            }
          );
        } else {
          this.get_teachers();
          this.get_kelasses();
          setTimeout(() => {
            this.get_cart_products();
          }, 2000);
        }
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
          const free_courses = [...all_kelasses.filter((k) => k.price === 0)];
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
          //console.log(ref_jalasat);
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
          //console.log(user);
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
            const kelas = { ...ref_kelasses.find((k) => k.kelas_id === k_id) };
            if (Object.keys(kelas).length !== 0) user_kelasses.push(kelas);
          });
        }
        user.kelases = user_kelasses;
        if (ref_doreha) {
          user.doreha.forEach((d_id) => {
            const dore = { ...ref_doreha.find((d) => d.dore_id === d_id) };
            if (Object.keys(dore).length !== 0) user_doreha.push(dore);
          });
        }
        user.doreha = user_doreha;
        if (ref_jalasat) {
          for (let day in user.week_plan) {
            user.week_plan[day].forEach((j_id) => {
              const jalase = {
                ...ref_jalasat.find((j) => j.jalase_id === j_id),
              };
              if (Object.keys(jalase).length !== 0) week_plan[day].push(jalase);
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
      //console.log(e);
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
      const check_doreha = this.state.ref_doreha;
      const check_sample_files = this.state.sample_files;
      const request_wait = this.state.request_wait;

      if (
        check_kelasses &&
        check_teachers &&
        check_sample_files &&
        check_doreha
      ) {
        const ref_teachers = [...this.state.ref_teachers];
        const ref_kelasses = [...this.state.ref_kelasses];
        const sample_files = { ...this.state.sample_files };
        const ref_doreha = [...this.state.ref_doreha];
        const kelas_sample_files = {
          pdf_sample_files: [],
          video_sample_files: [],
        };
        let kelas = false;
        if (ref_kelasses) {
          kelas = { ...ref_kelasses.find((k) => k.kelas_id === id) };
        }
        const kelas_teachers = [];
        if (Object.keys(kelas).length !== 0) {
          kelas.teachers.forEach((t_id) => {
            const teacher = {
              ...ref_teachers.find((t) => t.teacher_id === t_id),
            };
            if (Object.keys(teacher).length !== 0) kelas_teachers.push(teacher);
          });
          kelas_sample_files.pdf_sample_files = [
            ...sample_files.pdf_sample_files.filter((sf) => sf.kelas_id === id),
          ];
          kelas_sample_files.video_sample_files = [
            ...sample_files.video_sample_files.filter(
              (sv) => sv.kelas_id === id
            ),
          ];
          kelas.teachers = kelas_teachers;
          const dore = {
            ...ref_doreha.find((d) => d.dore_id === kelas.parent_dore_id),
          };
          if (Object.keys(dore).length !== 0) kelas.dore = dore;
        }
        kelas.sample_files = kelas_sample_files;
        //console.log(kelas);
        this.setState({ single_prod: kelas ? kelas : false });
      } else if (local_teachers && local_kelasses && local_sample_files) {
        this.setState(
          {
            ref_teachers: local_teachers,
            ref_kelasses: local_kelasses,
            sample_files: local_sample_files,
          },
          () => {
            this.find_single_prod(id);
          }
        );
      } else if (request_wait === 0) {
        this.setState({ request_wait: request_wait + 1 });
        setTimeout(() => {
          this.find_single_prod(id);
        }, 2000);
      }
    };
    find_single_course = (id) => {
      const check_doreha = this.state.ref_doreha;
      const check_kelasses = this.state.ref_kelasses;
      const check_teachers = this.state.ref_teachers;
      const check_sample_files = this.state.sample_files;
      const request_wait = this.state.request_wait;
      if (
        check_doreha &&
        check_kelasses &&
        check_teachers &&
        check_sample_files
      ) {
        const doreha = [...this.state.ref_doreha];
        const kelasses = [...this.state.ref_kelasses];
        const teachers = [...this.state.ref_teachers];
        const sample_files = { ...this.state.sample_files };
        const dore_kelases = [];
        const dore_teachers = [];
        const dore_sample_files = {
          pdf_sample_files: [],
          video_sample_files: [],
        };
        const dore = { ...doreha.find((d) => d.dore_id === id) };
        if (Object.keys(dore).length === 0)
          window.location.pathname = "/not-found";
        else {
          dore.kelases.forEach((k_id) => {
            const kelas = { ...kelasses.find((k) => k_id === k.kelas_id) };
            if (Object.keys(kelas).length !== 0) {
              const teacher = {
                ...teachers.find((t) => kelas.teachers[0] === t.teacher_id),
              };
              if (Object.keys(teacher).length !== 0)
                dore_teachers.push(teacher);
              dore_kelases.push(kelas);
            }
            dore_sample_files.pdf_sample_files = [
              ...sample_files.pdf_sample_files.filter(
                (pf) => pf.dore_id === id
              ),
            ];
            dore_sample_files.video_sample_files = [
              ...sample_files.video_sample_files.filter(
                (vf) => vf.dore_id === id
              ),
            ];
          });
          dore.teachers = dore_teachers;
          dore.kelases = dore_kelases;
          dore.teacher_carousel_pos = 0;
          dore.sample_files = dore_sample_files;
          if (dore_kelases.length <= 4) dore.teacher_carousel = false;
          else dore.teacher_carousel = true;
          //console.log(dore);
          this.setState({ single_course: dore });
        }
      } else {
        if (
          local_doreha &&
          local_kelasses &&
          local_teachers &&
          local_sample_files
        ) {
          this.setState(
            {
              ref_kelasses: local_kelasses,
              ref_doreha: local_doreha,
              ref_teachers: local_teachers,
              sample_files: local_sample_files,
            },
            () => {
              this.find_single_course(id);
            }
          );
        } else if (request_wait === 0) {
          this.setState({ request_wait: request_wait + 1 });
          setTimeout(() => {
            this.find_single_course(id);
          }, 2000);
        }
      }
    };
    find_single_teacher = (id) => {
      const check_kelasses = this.state.ref_kelasses;
      const check_teachers = this.state.ref_teachers;
      const check_sample_files = this.state.sample_files;
      const request_wait = this.state.request_wait;
      if (check_kelasses && check_sample_files && check_teachers) {
        const teachers = [...this.state.ref_teachers];
        const kelasses = [...this.state.ref_kelasses];
        const sample_files = { ...this.state.sample_files };
        const teacher_kelasses = [];
        const teachers_sample_files = {
          pdf_sample_files: [],
          video_sample_files: [],
        };
        const teacher = { ...teachers.find((t) => t.teacher_id === id) };
        if (Object.keys(teacher).length !== 0) {
          teacher.kelases.forEach((d_id) => {
            const kelas = { ...kelasses.find((d) => d.kelas_id === d_id) };
            if (Object.keys(kelas).length !== 0) teacher_kelasses.push(kelas);
          });
          for (let item in teacher.sample_files) {
            teacher.sample_files[item].forEach((item_id) => {
              const correct_property_name = item.replace("_ids", "");
              const temp = {
                ...sample_files[correct_property_name].find(
                  (sf) => sf.file_id === item_id
                ),
              };
              if (Object.keys(temp).length !== 0)
                teachers_sample_files[item.replace("_ids", "")].push(temp);
            });
          }
        }

        teacher.sample_files = teachers_sample_files;
        teacher.kelases = teacher_kelasses;
        // console.log(teacher_kelasses);
        this.setState({ single_teacher: teacher });
      } else {
        if (local_kelasses && local_teachers && local_sample_files) {
          this.setState(
            {
              ref_teachers: local_teachers,
              ref_kelasses: local_kelasses,
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
          }, 2000);
        }
      }
    };
    find_class = (id) => {
      const check_kelasses = this.state.ref_kelasses;
      const check_jalasat = this.state.ref_jalasat;
      const check_courses = this.state.ref_courses;
      const request_wait = this.state.request_wait;
      if (check_courses && check_jalasat && check_kelasses) {
        const kelases = [...this.state.ref_kelasses];
        const jalasat = [...this.state.ref_jalasat];
        const courses = [...this.state.ref_courses];
        const kelas_jalasat = [];
        let course = false;
        const kelas = { ...kelases.find((k) => k.kelas_id === id) };
        if (kelas) {
          course = { ...courses.find((c) => c.course_id === kelas.course) };
          if (Object.keys(course).length !== 0) kelas.course = course;
          kelas.jalasat.forEach((j_id) => {
            const jalase = { ...jalasat.find((j) => j.jalase_id === j_id) };
            if (Object.keys(jalase).length !== 0) kelas_jalasat.push(jalase);
          });
          kelas.jalasat = kelas_jalasat;
        }
        // console.log(kelas);
        this.setState({ single_kelas: kelas });
      } else {
        if (local_courses && local_jalasat && local_kelasses) {
          this.setState(
            {
              ref_jalasat: local_jalasat,
              ref_kelasses: local_kelasses,
              ref_courses: local_courses,
            },
            () => {
              this.find_class(id);
            }
          );
        } else if (request_wait === 0) {
          this.setState({ request_wait: request_wait + 1 });
          setTimeout(() => {
            this.find_class(id);
          }, 2000);
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
          window.location.pathname === "/Home" ||
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
            years={this.state.years}
            subjects={this.state.subjects}
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
            single_teacher={this.state.single_teacher}
            find_single_teacher={this.find_single_teacher}
            find_class={this.find_class}
            single_kelas={this.state.single_kelas}
            main_page_banners={this.state.main_page_banners}
            shop_banners={this.state.shop_banners}
          />
          {this.state.err.state ? (
            <div className={this.state.err.classes.map((c) => `${c}`)}>
              {this.state.err.message}
            </div>
          ) : (
            <></>
          )}
          {window.location.pathname === "/Login" ||
          window.location.pathname === "/LoginPass" ||
          window.location.pathname === "/Forget-password" ||
          window.location.pathname === "/Set-new-password" ||
          window.location.pathname === "/SignUp" ||
          window.location.pathname === "/Home" ||
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
