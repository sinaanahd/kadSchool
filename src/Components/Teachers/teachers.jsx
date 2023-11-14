import React, { Component, useContext } from "react";
import { Helmet } from "react-helmet";
import SideBar from "../side-bar/side-bar";
import Teacher from "./teacher/teacher";
import { DataContext } from "../context/DataContext";

const Teachers = () => {
  const { teachers, courses } = useContext(DataContext);
  return (
    <>
      <Helmet>
        <title>بهترین و با تجربه ترین استادان کنکور ایران</title>
        <meta
          name="description"
          content="در صفحه اساتید کاد ، بهترین اساتید برای کنکور و ‌‌نهایی را داریم. اساتید ما با تجربه فراوان می‌توانند در تمام رشته‌ها و دروس مربوط به این آزمون‌ها به شما کمک کنند. به کاد بپیوندید و از تجربه یادگیری با بهترین اساتید استفاده کنید ."
        />
      </Helmet>
      <section className="teachers-page-wrapper bgc-wrapper">
        <div className="teachers-wrapper mm-width">
          <SideBar />
          <div className="main-content">
            <h1 className="title">
              بهترین و با تجربه ترین استادان کنکور ایران
            </h1>
            <div className="teachers">
              {teachers ? (
                teachers.map((t) => (
                  <Teacher
                    key={t.teacher_id}
                    teacher={t}
                    courses={courses ? courses : false}
                  />
                ))
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

// class Teachers3 extends Component {
//   state = {};
//   componentDidMount() {}
//   render() {
//     const { teachers, courses } = this.props;
//     return (

//     );
//   }
// }

export default Teachers;
