import React, { useState, useContext } from "react";
import LittleLoading from "../../../reuseables/little-loading";
import { DataContext } from "../../../context/DataContext";
import arrow from "../../../../assets/images/single-teachers-asset/arrow.webp";
import filter_arrow from "../../../../assets/images/new-shop/filter-arrow.webp";
import filter_icon from "../../../../assets/images/new-shop/filter-icon.webp";
const Filters = ({
  set_filtered_kelasess,
  page_kelasses: kelasses,
  set_page,
  disable_filter,
}) => {
  const { years, subjects, static_doreha, courses } = useContext(DataContext);
  const [active_years, set_active_years] = useState([]);
  const [active_subjects, set_active_subjects] = useState([]);
  const [active_doreha, set_active_doreha] = useState([]);
  const [active_courses, set_active_courses] = useState([]);
  const [opened_filter, set_open_filter] = useState(false);
  const [mobile_show, set_mobile_show] = useState(false);
  const handle_open_filter = (entry) => {
    if (kelasses) {
      if (entry === opened_filter) {
        set_open_filter(false);
      } else {
        set_open_filter(entry);
      }
    }
  };
  const handle_active_years = (num) => {
    let old_active_years = [...active_years];
    if (!old_active_years.includes(num)) {
      old_active_years.push(num);
    } else {
      const index = old_active_years.findIndex((id) => id === num);
      old_active_years.splice(index, 1);
    }
    set_active_years(old_active_years);
    handle_kelas_filter(
      old_active_years,
      active_subjects,
      active_doreha,
      active_courses
    );
  };
  const handle_active_subjects = (num) => {
    let old_active_subjects = [...active_subjects];
    if (!old_active_subjects.includes(num)) {
      old_active_subjects.push(num);
    } else {
      const index = old_active_subjects.findIndex((id) => id === num);
      old_active_subjects.splice(index, 1);
    }
    set_active_subjects(old_active_subjects);
    handle_kelas_filter(
      active_years,
      old_active_subjects,
      active_doreha,
      active_courses
    );
  };
  const handle_active_doreha = (num) => {
    let old_active_doreha = [...active_doreha];
    if (!old_active_doreha.includes(num)) {
      old_active_doreha.push(num);
    } else {
      const index = old_active_doreha.findIndex((id) => id === num);
      old_active_doreha.splice(index, 1);
    }
    set_active_doreha(old_active_doreha);
    handle_kelas_filter(
      active_years,
      active_subjects,
      old_active_doreha,
      active_courses
    );
  };
  const handle_active_courses = (num) => {
    let old_active_courses = [...active_courses];
    if (!old_active_courses.includes(num)) {
      old_active_courses.push(num);
    } else {
      const index = old_active_courses.findIndex((id) => id === num);
      old_active_courses.splice(index, 1);
    }
    set_active_courses(old_active_courses);
    handle_kelas_filter(
      active_years,
      active_subjects,
      active_doreha,
      old_active_courses
    );
  };
  const handle_kelas_filter = (years, subjects, doreha, courses) => {
    if (
      years.length !== 0 ||
      subjects.length !== 0 ||
      doreha.length !== 0 ||
      courses.length !== 0
    ) {
      const filtered = kelasses.filter(
        (k) =>
          check_years(years, k.year) &&
          check_subject(subjects, k.subject) &&
          check_doreha(doreha, k.parent_dore_id) &&
          check_course(courses, k.course)
      );
      set_filtered_kelasess(filtered);
    } else {
      set_filtered_kelasess(false);
      set_page(1);
    }
  };
  const check_years = (base_data, year) => {
    if (base_data.length === 0) {
      return true;
    } else return base_data.includes(year);
  };
  const check_subject = (base_data, subjects) => {
    if (base_data.length === 0) {
      return true;
    } else {
      let is_in = false;
      subjects.forEach((s) => {
        if (base_data.includes(s)) {
          is_in = true;
        }
      });
      return is_in;
    }
  };
  const check_doreha = (base_data, dore) => {
    if (base_data.length === 0) {
      return true;
    } else return base_data.includes(dore);
  };
  const check_course = (base_data, course) => {
    if (base_data.length === 0) {
      return true;
    } else return base_data.includes(course);
  };
  const handle_filter_remove = () => {
    set_active_courses([]);
    set_active_doreha([]);
    set_active_subjects([]);
    set_active_years([]);
    handle_kelas_filter([], [], [], []);
  };
  console.log(disable_filter === "subject");
  return (
    <aside
      className={mobile_show ? "shop-side-bar show-mobile" : "shop-side-bar"}
    >
      <span className="filter-side-bar-header">
        <span
          className="filter-header-title"
          onClick={() => {
            set_mobile_show(!mobile_show);
          }}
        >
          <span className="show-in-mobile">
            <img
              src={filter_icon}
              alt="فیلتر فروشگاه"
              width={20}
              height={16}
              loading="lazy"
            />
          </span>
          {mobile_show ? (
            <span className="close-filter-title">بستن</span>
          ) : (
            <></>
          )}
          فیلترها
        </span>
        <button
          className="reset-filters font-bold"
          onClick={handle_filter_remove}
        >
          حذف فیلتر ها
        </button>
      </span>
      <span className="all-filters">
        {disable_filter !== "year" ? (
          <span className="filter-main-row">
            <span className="label">پایه</span>
            <button
              className="filter-open-btn"
              onClick={() => {
                handle_open_filter("year");
              }}
            >
              <img
                src={filter_arrow}
                alt="باز کردن فیلتر"
                width={15}
                height={8}
                loading="lazy"
                className={opened_filter === "year" ? "rotate" : ""}
              />
            </button>
          </span>
        ) : (
          <></>
        )}
        {opened_filter === "year" ? (
          <span className={false ? "filter-options show" : "filter-options"}>
            {years ? (
              years.map((year) => (
                <span
                  className="filter-option"
                  key={year.id}
                  onClick={() => {
                    handle_active_years(year.id);
                  }}
                >
                  <button
                    className={
                      active_years.includes(year.id)
                        ? "select-btn selected"
                        : "select-btn"
                    }
                  ></button>
                  <span className="option-text">{year.name}</span>
                </span>
              ))
            ) : (
              <LittleLoading />
            )}
          </span>
        ) : (
          <></>
        )}
        {disable_filter !== "subject" ? (
          <span className="filter-main-row">
            <span className="label">رشته</span>
            <button
              className="filter-open-btn"
              onClick={() => {
                handle_open_filter("subject");
              }}
            >
              <img
                src={filter_arrow}
                alt="باز کردن فیلتر"
                width={15}
                height={8}
                loading="lazy"
                className={opened_filter === "subject" ? "rotate" : ""}
              />
            </button>
          </span>
        ) : (
          <></>
        )}

        {opened_filter === "subject" ? (
          <span className={false ? "filter-options show" : "filter-options"}>
            {subjects ? (
              subjects.map((subject) => (
                <span
                  className="filter-option"
                  key={subject.id}
                  onClick={() => {
                    handle_active_subjects(subject.id);
                  }}
                >
                  <button
                    className={
                      active_subjects.includes(subject.id)
                        ? "select-btn selected"
                        : "select-btn"
                    }
                  ></button>
                  <span className="option-text">{subject.name}</span>
                </span>
              ))
            ) : (
              <LittleLoading />
            )}
          </span>
        ) : (
          <></>
        )}
        {disable_filter !== "dore" ? (
          <span className="filter-main-row">
            <span className="label">دوره</span>
            <button
              className="filter-open-btn"
              onClick={() => {
                handle_open_filter("dore");
              }}
            >
              <img
                src={filter_arrow}
                alt="باز کردن فیلتر"
                width={15}
                height={8}
                loading="lazy"
                className={opened_filter === "dore" ? "rotate" : ""}
              />
            </button>
          </span>
        ) : (
          <></>
        )}
        {opened_filter === "dore" ? (
          <span className={false ? "filter-options show" : "filter-options"}>
            {static_doreha ? (
              static_doreha.map((dore) => (
                <span
                  className="filter-option"
                  key={dore.dore_id}
                  onClick={() => {
                    handle_active_doreha(dore.dore_id);
                  }}
                >
                  <button
                    className={
                      active_doreha.includes(dore.dore_id)
                        ? "select-btn selected"
                        : "select-btn"
                    }
                  ></button>
                  <span className="option-text">{dore.dore_title}</span>
                </span>
              ))
            ) : (
              <LittleLoading />
            )}
          </span>
        ) : (
          <></>
        )}
        {disable_filter !== "course" ? (
          <span className="filter-main-row">
            <span className="label">درس</span>
            <button
              className="filter-open-btn"
              onClick={() => {
                handle_open_filter("course");
              }}
            >
              <img
                src={filter_arrow}
                alt="باز کردن فیلتر"
                width={15}
                height={8}
                loading="lazy"
                className={opened_filter === "course" ? "rotate" : ""}
              />
            </button>
          </span>
        ) : (
          <></>
        )}
        {opened_filter === "course" ? (
          <span className={false ? "filter-options show" : "filter-options"}>
            {courses ? (
              courses.map((course) => (
                <span
                  className="filter-option"
                  key={course.course_id}
                  onClick={() => {
                    handle_active_courses(course.course_id);
                  }}
                >
                  <button
                    className={
                      active_courses.includes(course.course_id)
                        ? "select-btn selected"
                        : "select-btn"
                    }
                  ></button>
                  <span className="option-text">{course.name}</span>
                </span>
              ))
            ) : (
              <LittleLoading />
            )}
          </span>
        ) : (
          <></>
        )}
      </span>
      {active_courses.length !== 0 ||
      active_doreha.length !== 0 ||
      active_subjects.length !== 0 ||
      active_years.length !== 0 ? (
        <span className="choosen-filters">
          <span className="choosen-title font-bold">
            فیلتر های انتخاب شده :{" "}
          </span>
          {active_courses.map((c) => (
            <button
              className="choosen-filter"
              key={c}
              onClick={() => {
                handle_active_courses(c);
              }}
            >
              {courses.find((course) => course.course_id === c).name}
            </button>
          ))}
          {active_doreha.map((c) => (
            <button
              className="choosen-filter"
              key={c}
              onClick={() => {
                handle_active_doreha(c);
              }}
            >
              {static_doreha.find((dore) => dore.dore_id === c).dore_title}
            </button>
          ))}
          {active_subjects.map((c) => (
            <button
              className="choosen-filter"
              key={c}
              onClick={() => {
                handle_active_subjects(c);
              }}
            >
              {subjects.find((subject) => subject.id === c).name}
            </button>
          ))}
          {active_years.map((c) => (
            <button
              className="choosen-filter"
              key={c}
              onClick={() => {
                handle_active_years(c);
              }}
            >
              {years.find((year) => year.id === c).name}
            </button>
          ))}
        </span>
      ) : (
        <></>
      )}
    </aside>
  );
};

export default Filters;
