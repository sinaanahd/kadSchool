// DataContext.js
import axios from "axios";
import { createContext, useState, useEffect } from "react";
import last_login_check from "../functions/last-login-check";
import convert_to_persian from "../functions/convert-to-persian";
const local_kelasses = JSON.parse(localStorage.getItem("kelasses"))
  ? JSON.parse(localStorage.getItem("kelasses"))
  : false;
const local_teachers = JSON.parse(localStorage.getItem("teachers"))
  ? JSON.parse(localStorage.getItem("teachers"))
  : false;
const local_doreha = JSON.parse(localStorage.getItem("doreha"))
  ? JSON.parse(localStorage.getItem("doreha"))
  : false;
const local_courses = JSON.parse(localStorage.getItem("courses"))
  ? JSON.parse(localStorage.getItem("courses"))
  : false;
const DataContext = createContext();
const DataProvider = ({ children }) => {
  const [ref_kelasses, setKelasses] = useState(local_kelasses);
  const [ref_teachers, setTeachers] = useState(local_teachers);
  const [ref_doreha, setDoreha] = useState(local_doreha);
  const [ref_courses, setCourses] = useState(local_courses);
  useEffect(() => {
    //const is_time = last_login_check(last_time, now_time);
    get_kelasses();
    get_teachers();
    get_doreha();
    get_courses();
  }, []);
  const get_kelasses = (e) => {
    axios
      .get("https://kadschool.com/backend/kad_api/kelases")
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
  const get_teachers = (e) => {
    axios
      .get("https://kadschool.com/backend/kad_api/teachers")
      .then((res) => {
        const ref_teachers = res.data;
        ref_teachers.forEach((t) => {
          const name = t.fullname + "";
          const slug_name = name.replaceAll(" ", "-");
          t.slug_name = slug_name;
          // console.log(t, slug_name);
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
      .get("https://kadschool.com/backend/kad_api/doreha")
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
      .get("https://kadschool.com/backend/kad_api/all_courses")
      .then((res) => {
        const ref_courses = res.data;
        setCourses(ref_courses);
        localStorage.setItem("courses", JSON.stringify(ref_courses));
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <DataContext.Provider
      value={{ ref_kelasses, ref_teachers, ref_doreha, ref_courses }}
    >
      {children}
    </DataContext.Provider>
  );
};

export { DataContext, DataProvider };
