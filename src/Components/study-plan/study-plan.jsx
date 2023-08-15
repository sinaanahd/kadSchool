import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
const StudyPlan = () => {
  useEffect(() => {
    const active_major = majors.find((m) => m.selected === true);
    const filtered_courses = all_courses.filter((c) =>
      c.major.includes(active_major.name)
    );
    setCourses(filtered_courses);
  }, []);
  const [plan, setPlan] = useState(false);
  const [week_days, setWeekDays] = useState([
    {
      id: 1,
      name: "شنبه",
      is_school_day: "unset",
      selected: true,
    },
    {
      id: 2,
      name: "یکشنبه",
      is_school_day: "unset",
      selected: false,
    },
    {
      id: 3,
      name: "دوشنبه",
      is_school_day: "unset",
      selected: false,
    },
    {
      id: 4,
      name: "سه‌شنبه",
      is_school_day: "unset",
      selected: false,
    },
    {
      id: 5,
      name: "چهار‌شنبه",
      is_school_day: "unset",
      selected: false,
    },
    {
      id: 6,
      name: "پنج‌شنبه",
      is_school_day: "unset",
      selected: false,
    },
    {
      id: 7,
      name: "جمعه",
      is_school_day: "unset",
      selected: false,
    },
  ]);
  const [hours, setHours] = useState([
    {
      selected: true,
      value: 4,
      id: 1,
    },
    {
      selected: false,
      value: 5,
      id: 2,
    },
    {
      selected: false,
      value: 6,
      id: 3,
    },
    {
      selected: false,
      value: 7,
      id: 4,
    },
    {
      selected: false,
      value: 8,
      id: 5,
    },
  ]);
  const [majors, setMajors] = useState([
    {
      name: "ریاضی",
      id: 1,
      selected: false,
    },
    {
      name: "انسانی",
      id: 2,
      selected: true,
    },
  ]);
  const all_courses = [
    {
      name: "حسابان",
      selected: false,
      id: 1,
      major: ["ریاضی"],
      course_in_stock: [],
      min_time: 2,
      importance: 10,
      min_repetation: 3,
    },
    {
      name: "هندسه",
      selected: false,
      id: 2,
      major: ["ریاضی"],
      course_in_stock: [],
      min_time: 2,
      importance: 10,
      min_repetation: 3,
    },
    {
      name: "گسسته",
      selected: false,
      id: 3,
      major: ["ریاضی"],
      course_in_stock: [],
      min_time: 2,
      importance: 10,
      min_repetation: 2,
    },
    {
      name: "فیزیک",
      selected: false,
      id: 4,
      major: ["ریاضی"],
      course_in_stock: [],
      min_time: 2,
      importance: 10,
      min_repetation: 1,
    },
    {
      name: "شیمی",
      selected: false,
      id: 5,
      major: ["ریاضی"],
      course_in_stock: [],
      min_time: 2,
      importance: 10,
      min_repetation: 2,
    },
    {
      name: "فلسفه و منطق",
      selected: false,
      id: 6,
      major: ["انسانی"],
      course_in_stock: [],
      min_time: 4,
      importance: 10,
      min_repetation: 4,
    },
    {
      name: "عربی",
      selected: false,
      id: 7,
      major: ["انسانی"],
      course_in_stock: [],
      min_time: 4,
      importance: 10,
      min_repetation: 4,
    },
    {
      name: "ریاضی انسانی",
      selected: false,
      id: 8,
      major: ["انسانی"],
      course_in_stock: [],
      min_time: 4,
      importance: 10,
      min_repetation: 4,
    },
  ];
  const [courses, setCourses] = useState([]);

  const active_course = (id) => {
    const old_course = [...courses];
    const index = old_course.findIndex((c) => c.id === id);
    const selected_course = old_course[index];
    selected_course.selected = !selected_course.selected;
    old_course.splice(index, 1, selected_course);
    setCourses(old_course);
  };
  const active_week_day = (id) => {
    const old_weekday = [...week_days];
    const index = old_weekday.findIndex((c) => c.id === id);
    const selected_day = old_weekday[index];
    selected_day.selected = !selected_day.selected;
    old_weekday.splice(index, 1, selected_day);
    setWeekDays(old_weekday);
  };
  const active_hour = (id) => {
    const old_hours = [...hours];
    old_hours.forEach((h) => {
      if (h.id === id) {
        h.selected = true;
      } else {
        h.selected = false;
      }
    });
    setHours(old_hours);
  };
  const get_needed_hours = () => {
    let sum = 0;
    courses.forEach((c) => {
      if (c.selected) {
        sum += c.min_time * c.min_repetation;
      }
    });
    return sum;
  };
  const get_needed_days = () => {
    let sum = 0;
    week_days.forEach((c) => {
      if (c.selected) {
        sum += 1;
      }
    });
    return sum;
  };
  const suggested_min_day = () => {
    let max = 0;
    courses.forEach((c) => {
      if (c.selected) {
        if (max < c.min_repetation) {
          max = c.min_repetation;
        }
      }
    });
    return max;
  };
  const calculate_time = () => {
    const active_hour = hours.find((h) => h.selected === true);
    const seleted_days = week_days.filter((wd) => wd.selected === true);
    const final_value = active_hour.value * seleted_days.length;
    return final_value;
  };
  const active_major = (id) => {
    const all_majors = [...majors];
    let selected_major;
    all_majors.forEach((m) => {
      if (m.id === id) {
        m.selected = true;
        selected_major = m.name;
      } else {
        m.selected = false;
      }
    });
    setMajors(all_majors);
    const filtered_courses = all_courses.filter((c) =>
      c.major.includes(selected_major)
    );
    setCourses(filtered_courses);
  };
  const make_week_plan = () => {
    const active_days = [...week_days.filter((wd) => wd.selected === true)];
    const active_courses = [...courses.filter((c) => c.selected === true)];
    const active_hours = { ...hours.find((h) => h.selected === true) };
    const needed_time = calculate_time();
    const school_portion = [
      "14-15",
      "15:15-16:15",
      "16:30-17-30",
      "17:45-18:45",
      "19-20",
      "20:15-21:15",
      "22-23",
      "23:15-24:15",
    ];
    const non_school_portion = [
      "7-8",
      "8:15-9:15",
      "9:30-10:30",
      "10:45-11:45",
      "12-13",
      ...school_portion,
    ];
    const time_splice = active_hours.value;
    const portion = non_school_portion.slice(0, time_splice);
    let quan = portion.length * active_days.length;
    const course_arr = [];
    let reset_quan = 0;
    while (quan !== 0) {
      course_arr.push(active_courses[reset_quan]);
      if (reset_quan >= active_courses.length - 1) {
        reset_quan = 0;
      } else {
        reset_quan += 1;
      }
      quan -= 1;
    }

    const plan = [];
    active_days.forEach((d) => {
      const day_obj = {
        day: d.name,
        time: [],
        courses: [],
      };
      plan.push(day_obj);
    });
    reset_quan = 0;
    plan.forEach((p) => {
      portion.forEach((po) => {
        p.time.push(po);
        course_arr.push(active_courses[reset_quan]);
        if (reset_quan >= active_courses.length - 1) {
          reset_quan = 0;
        } else {
          reset_quan += 1;
        }
        p.courses.push(course_arr[reset_quan]);
      });
    });
    setPlan(plan);
  };
  return (
    <>
      <Helmet>
        <title>برنامه هفتگی ساز</title>
      </Helmet>
      <section className="make-week-plan bgc-wrapper mm-width">
        <h1 className="title">ساخت برنامه هفتگی</h1>
        <p className="page-desc">
          در این بخش میتونی برنامه هفتگی خودت رو بسازی
        </p>
        <div className="select-your-day">
          <h2 className="semi-title">رشته تحصیلی</h2>
          <p className="course-details">در این بخش رشته تحصیلیت رو انتخاب کن</p>
          <div className="select-day-wrapper">
            {majors.map((major) => (
              <div
                key={major.id}
                className={major.selected ? "week-day selected" : "week-day"}
                onClick={() => {
                  active_major(major.id);
                }}
              >
                <span className="week-day-name">{major.name}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="select-your-day">
          <h2 className="semi-title">روز های مورد نظر خودت رو انتخاب کن</h2>
          <p className="course-details">
            روز هایی که میتونی درس بخونی رو توی این بخش انتخاب کن توجه داشته باش
            اگه فیلد مدرسه داری رو انتخاب کنی برنامه هات از ساعت ۱۴ برات برنامه
            نوشته میشه
          </p>
          <div className="select-day-wrapper">
            {week_days.map((wd) => (
              <div
                key={wd.id}
                className={wd.selected ? "week-day selected" : "week-day"}
                onClick={() => {
                  active_week_day(wd.id);
                }}
              >
                <span className="week-day-name">{wd.name}</span>
                <span className="data-box">
                  <span className="data-title">مدرسه داری ؟</span>
                  <span className="data-text">
                    {wd.is_school_day && wd.is_school_day !== "unset"
                      ? "دارم"
                      : "ندارم"}
                  </span>
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="select-your-day">
          <h2 className="semi-title">ساعت درس خوندنت رو انتخاب کن</h2>
          <p className="course-details">
            تعداد ساعت هایی که میتونی توی یک روز درس بخونی رو انتخاب کن
          </p>
          <div className="select-day-wrapper">
            {hours.map((h) => (
              <div
                key={h.id}
                className={h.selected ? "week-day selected" : "week-day"}
                onClick={() => {
                  active_hour(h.id);
                }}
              >
                <span className="week-day-name">{h.value} ساعت</span>
              </div>
            ))}
          </div>
        </div>

        <div className="select-your-course">
          <h2 className="semi-title">درس های مورد نظر خودت رو انتخاب کن</h2>
          <p className="course-details">
            در این بخش شما می توانید اهمیت درس های برای کنکور و مقدار مورد نیاز
            تکرار و اطلاعات بدست آمده از طریق مشاوران با تجربه کاد در اختیار
            داشته باشید
          </p>
          <div className="courses-wrapper">
            {courses.map((course) => (
              <div
                key={course.id}
                className={
                  course.selected
                    ? "select-course-option selected"
                    : "select-course-option"
                }
                onClick={() => {
                  active_course(course.id);
                }}
              >
                <h3 className="course-name">{course.name}</h3>
                <span className="data-box">
                  <span className="data-title">رشته</span>
                  <span className="data-text">{course.major[0]}</span>
                </span>
                <span className="data-box">
                  <span className="data-title">حداقل زمان در هفته</span>
                  <span className="data-text">{course.min_time} ساعت</span>
                </span>
                <span className="data-box">
                  <span className="data-title">دفعات مورد نیاز در هفته</span>
                  <span className="data-text">{course.min_repetation} روز</span>
                </span>
                <span className="data-box">
                  <span className="data-title">اهمیت درس</span>
                  <span className="data-text">
                    {course.importance > 5 ? "مهم" : "معمولی"}
                  </span>
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="final-result-wrapper">
          <h2 className="semi-title">اطلاعات نهایی</h2>
          <p className="course-details">
            در این قسمت میتونی اطلاعات وارد شده ات و موارد پیشنهادی مارو ببینی
          </p>
          <div className="selected-data">
            <span className="data-box">
              <span className="data-title">زمان انتخابی در هفته</span>
              <span className="data-text">{calculate_time()} ساعت</span>
            </span>
            <span className="data-box">
              <span className="data-title">زمان پیشنهادی در هفته</span>
              <span className="data-text">{get_needed_hours()} ساعت</span>
            </span>
            <span className="data-box">
              <span className="data-title">روز های انتخاب شده</span>
              <span className="data-text">{get_needed_days()} روز</span>
            </span>
            <span className="data-box">
              <span className="data-title">حداقل روز پیشنهادی</span>
              <span className="data-text">{suggested_min_day()} روز</span>
            </span>
          </div>
          <span
            className="make-plan-btn"
            onClick={() => {
              make_week_plan();
            }}
          >
            برنامه ات رو بساز
          </span>
        </div>
        {plan ? (
          <div className="plan-wrapper">
            {plan.map((p, i) => (
              <div key={i} className="single-plan">
                اسم روز : {p.day}
                <div className="times-wrapper">
                  {p.time.map((t, j) => (
                    <span key={j++}>{t}</span>
                  ))}
                </div>
                <div className="times-wrapper">
                  {p.courses.map((c, k) => (
                    <span key={k++}>{c.name}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <></>
        )}
      </section>
    </>
  );
};

export default StudyPlan;
