// DataContext.js
import axios from "axios";
import { createContext, useState, useEffect } from "react";
import last_login_check from "../functions/last-login-check";
import convert_to_persian from "../functions/convert-to-persian";
import HomeHeader from "../home/header/home-header";
import HomeFooter from "../home/footer/home-footer";
import TopSiteSlider from "../top-site-slider/top-site-slider";
import urls from "../urls/url";
const kelasses_data = JSON.parse(localStorage.getItem("kelasses")) || false;
const teachers_data = JSON.parse(localStorage.getItem("teachers")) || false;
const doreha_data = JSON.parse(localStorage.getItem("doreha")) || false;
const courses_data = JSON.parse(localStorage.getItem("courses")) || false;
const sample_files_data =
  JSON.parse(localStorage.getItem("sample_files")) || false;
const jalasat_data = JSON.parse(localStorage.getItem("jalasat")) || false;
const banners_data = JSON.parse(localStorage.getItem("banners")) || false;
const user_data = JSON.parse(localStorage.getItem("user-kad")) || false;
const pay_info_data = JSON.parse(localStorage.getItem("pay-info")) || false;
const cart_data = JSON.parse(localStorage.getItem("cart")) || {
  ids: [],
  items: [],
  pure_price: 0,
  discounts: 0,
  final_price: 0,
};
const this_time_login = new Date().getTime();
const last_login = JSON.parse(localStorage.getItem("LL"))
  ? JSON.parse(localStorage.getItem("LL"))
  : this_time_login;
const DataContext = createContext();
const DataProvider = ({ children }) => {
  const [ref_kelasses, setKelasses] = useState(kelasses_data);
  const [ref_teachers, setTeachers] = useState(teachers_data);
  const [ref_doreha, setDoreha] = useState(doreha_data);
  const [ref_courses, setCourses] = useState(courses_data);
  const [sample_files, setSampleFiles] = useState(sample_files_data);
  const [ref_jalasat, setJalasat] = useState(jalasat_data);
  const [banners, set_banners] = useState(banners_data);
  const [user, setUser] = useState(user_data);
  const [pay_info, set_pay_info] = useState(pay_info_data);
  const [cart, set_cart] = useState(cart_data);
  const subjects = [
    { id: 0, name: "ریاضی" },

    { id: 1, name: "تجربی" },

    { id: 2, name: "انسانی" },

    { id: 3, name: "هنر" },
  ];
  const years = [
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
  ];
  useEffect(() => {
    const is_time = last_login_check(last_login, this_time_login);
    if (is_time) {
      get_kelasses();
      get_teachers();
      get_doreha();
      get_courses();
      get_sample_files();
      get_jalasat();
      get_banners();
    } else {
      if (!kelasses_data) {
        get_kelasses();
      }
      if (!teachers_data) {
        get_teachers();
      }
      if (!doreha_data) {
        get_doreha();
      }
      if (!courses_data) {
        get_courses();
      }
      if (!sample_files_data) {
        get_sample_files();
      }
      if (!jalasat_data) {
        get_jalasat();
      }
      if (!banners_data) {
        get_banners();
      }
    }
    if (user) {
      get_user(user.user_id);
      get_pay_info(user.user_id);
    }
    if (
      window.location.pathname !== "/HomePage" &&
      window.location.pathname !== "/apollo-11" &&
      window.location.pathname !== "/special-discount" &&
      window.location.pathname !== "/apollo-prizes"
    ) {
      document.querySelector("#root").classList.add("root_test");
    }
  }, []);
  const get_kelasses = () => {
    axios
      .get(urls.kelasses)
      .then((res) => {
        const ref_kelasses = res.data;
        ref_kelasses.forEach((kelas) => {
          const kelas_name = kelas.kelas_title + "";
          const slug_name = kelas_name.replaceAll(" ", "-");
          kelas.slug_name = slug_name;
        });
        ref_kelasses.forEach((kelas) => {
          const duplicates = ref_kelasses.filter(
            (rk) =>
              rk.slug_name === kelas.slug_name && rk.kelas_id !== kelas.kelas_id
          );

          if (duplicates.length === 1) {
            const slug = duplicates[0].slug_name;
            if (!/\d/.test(slug)) {
              duplicates[0].slug_name += "-۱";
            }
          } else if (duplicates.length > 1) {
            let last_index = 1;
            duplicates.forEach((dk) => {
              if (!/\d/.test(dk.slug_name)) {
                dk.slug_name += "-" + convert_to_persian(last_index++);
              }
            });
          }
        });
        setKelasses(ref_kelasses);
        localStorage.setItem("kelasses", JSON.stringify(ref_kelasses));
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const get_teachers = () => {
    axios
      .get(urls.teachers)
      .then((res) => {
        const ref_teachers = res.data;
        ref_teachers.forEach((t) => {
          const name = t.fullname + "";
          const slug_name = name.replaceAll(" ", "-");
          t.slug_name = slug_name;
        });
        setTeachers(ref_teachers);
        localStorage.setItem("teachers", JSON.stringify(ref_teachers));
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const get_doreha = () => {
    axios
      .get(urls.doreha)
      .then((res) => {
        const ref_doreha = res.data;
        ref_doreha.forEach((dore) => {
          const slug_name = dore.dore_title.replaceAll(" ", "-");
          dore.slug_name = slug_name;
        });
        setDoreha(ref_doreha);
        localStorage.setItem("doreha", JSON.stringify(ref_doreha));
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const get_courses = () => {
    axios
      .get(urls.all_courses)
      .then((res) => {
        const ref_courses = res.data;
        setCourses(ref_courses);
        localStorage.setItem("courses", JSON.stringify(ref_courses));
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const get_sample_files = () => {
    axios
      .get(urls.sample_files)
      .then((res) => {
        const sample_files = res.data;
        localStorage.setItem("sample_files", JSON.stringify(sample_files));
        setSampleFiles(sample_files);
      })
      .catch((e) => {
        this.handle_error(e);
      });
  };
  const get_jalasat = () => {
    axios
      .get(urls.jalasat)
      .then((res) => {
        const ref_jalasat = res.data;
        //console.log(ref_jalasat);
        setJalasat(ref_jalasat);
        localStorage.setItem("jalasat", JSON.stringify(ref_jalasat));
      })
      .catch((e) => {
        console.log(e.message);
      });
  };
  const get_banners = () => {
    axios
      .get(urls.banners)
      .then((res) => {
        const banners = res.data;
        set_banners(banners);
        localStorage.setItem("banners", JSON.stringify(banners));
      })
      .catch((e) => {
        console.log(e.message);
      });
  };
  const get_user = (user_id) => {
    //.get(`https://kadschool.com/backend/kad_api/user/${9166}`)
    // .get(`https://kadschool.com/backend/kad_api/user/${1034}`)
    axios
      .get(`${urls.user}${user_id}`)
      .then((res) => {
        const user = res.data;
        setUser(user);
        localStorage.setItem("user-kad", JSON.stringify(user));
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const get_pay_info = (user_id) => {
    axios
      .get(
        `${urls.finance_records}${user_id}`
        //`https://kadschool.com/backend/kad_api/financial_records/${9166}`
      )
      .then((res) => {
        const pay_info = res.data;
        localStorage.setItem("pay-info", JSON.stringify(pay_info));
        set_pay_info(pay_info);
      })
      .catch((e) => {
        this.handle_error(e);
        //console.log(e);
      });
  };

  /* cart data */
  const handle_cart = (obj) => {
    const cart_sample_obj = {
      ids: [],
      items: [],
      pure_price: 0,
      discounts: 0,
      final_price: 0,
    };
    const new_cart = cart ? { ...cart } : cart_sample_obj;
    const searched_obj = new_cart.items.find(
      (item) => item.kelas_id === obj.kelas_id
    );
    if (!searched_obj) {
      new_cart.items.push(obj);
      new_cart.ids = get_ids(new_cart.items);
      new_cart.pure_price = calculate_pure_price(new_cart.items);
      new_cart.discounts = calculate_discounts(new_cart.items);
      new_cart.final_price = new_cart.pure_price - new_cart.discounts;
    } else {
      const deleted_cart = delete_from_cart(new_cart, searched_obj.kelas_id);
      new_cart.ids = get_ids(deleted_cart.items);
      new_cart.pure_price = calculate_pure_price(new_cart.items);
      new_cart.discounts = calculate_discounts(new_cart.items);
      new_cart.final_price = new_cart.pure_price - new_cart.discounts;
    }
    finilize_cart(new_cart);
  };
  const delete_from_cart = (cart, id) => {
    const index = cart.items.findIndex((item) => item.kelas_id === id);
    const splice_need = { ...cart };
    splice_need.items.splice(index, 1);
    return splice_need;
  };
  const finilize_cart = (cart) => {
    localStorage.setItem("cart", JSON.stringify(cart));
    set_cart(cart);
    // console.log(cart);
  };
  const get_ids = (arr) => {
    return arr.map((i) => i.kelas_id);
  };
  const calculate_pure_price = (arr) => {
    let sum = 0;
    arr.forEach((item) => {
      sum += item.price;
    });
    return sum;
  };
  const calculate_discounts = (arr) => {
    let sum = 0;
    arr.forEach((item) => {
      let discount_amount = 0;
      if (item.discounted_price) {
        discount_amount = item.price - item.discounted_price;
      }
      sum += discount_amount;
    });
    return sum;
  };
  /* cart data */

  return (
    <DataContext.Provider
      value={{
        kelasses: ref_kelasses,
        teachers: ref_teachers,
        doreha: ref_doreha,
        courses: ref_courses,
        sample_files,
        jalasat: ref_jalasat,
        banners,
        user,
        setUser,
        pay_info,
        handle_cart,
        cart,
        subjects,
        years,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export { DataContext, DataProvider };
