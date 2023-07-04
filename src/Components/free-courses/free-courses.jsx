import React, { Component } from "react";
import { Helmet } from "react-helmet";
import SideBar from "../side-bar/side-bar";
import Subjects from "./subjects/subjects";
// import fields from "./fields";
import Fields from "./fields/fields";
import Kinds from "./kinds/kinds";
import withWebsiteData from "../hoc/with-website-data";
import FCourses from "./fcoureses/fcourses";
import arrow from "../../assets/images/circle-arrow-right.svg";
import seprator from "../../assets/images/seprator.svg";

class FreeCourse extends Component {
  state = {
    step: "subject",
    fields: {
      tajrobi: [],
      riazi: [],
      ensani: [],
      honar: [],
    },
    selected_options: {
      subject: false,
      field: false,
      kind: false,
    },
    selected_id: {
      subject: false,
      field: false,
      kind: false,
    },
    selected_course: false,
  };
  componentDidMount() {
    const { courses } = this.props;
    if (courses) {
      this.fill_courses();
    }
  }
  fill_courses = () => {
    const { courses } = this.props;
    if (courses) {
      const fields = { ...this.state.fields };
      courses.forEach((course) => {
        if (course.subjects.includes(0)) {
          fields.riazi.push(course);
        }
        if (course.subjects.includes(1)) {
          fields.tajrobi.push(course);
        }
        if (course.subjects.includes(2)) {
          fields.ensani.push(course);
        }
        if (course.subjects.includes(3)) {
          fields.honar.push(course);
        }
      });
      // console.log(fields.honar);
      this.setState({ fields });
    } else {
      setTimeout(() => {
        this.fill_courses();
      }, 500);
    }
  };
  go_to_fields = (select, id) => {
    const step = "field";
    const selected_options = { ...this.state.selected_options };
    const selected_id = { ...this.state.selected_id };
    selected_options.subject = select;
    selected_id.subject = id;
    this.setState({ step, selected_options, selected_id });
  };
  go_to_kinds = (select, id) => {
    const step = "kind";
    const selected_options = { ...this.state.selected_options };
    const selected_id = { ...this.state.selected_id };
    selected_options.field = select;
    selected_id.field = id;
    this.setState({ step, selected_options, selected_id });
  };
  show_courses = (select, id) => {
    const step = "course";
    const selected_options = { ...this.state.selected_options };
    const selected_id = { ...this.state.selected_id };
    selected_options.kind = select;
    selected_id.kind = id;
    this.setState({ step, selected_options, selected_id });
    this.show_final_prods(id);
  };
  back_handler = () => {
    const step = this.state.step;
    if (step === "field") {
      this.setState({ step: "subject" });
    } else if (step === "kind") {
      this.setState({ step: "field" });
    }
  };
  title_back = (step) => {
    this.setState({ step });
  };
  show_final_prods = (kind) => {
    const { free_courses } = this.props;
    const { subject, field } = { ...this.state.selected_id };
    const selected_by_subject = free_courses.filter((fc) =>
      fc.subject.includes(subject)
    );
    const selected_by_field = selected_by_subject.filter(
      (ss) => ss.course === field
    );
    const selected_by_kind = selected_by_field.filter(
      (sf) => sf.parent_dore_id === kind
    );
    this.setState({ selected_course: selected_by_kind });
  };
  render() {
    const { doreha } = this.props;
    return (
      <>
        <Helmet>
          <title>درس های رایگان کاد</title>
        </Helmet>
        <section className="bgc-wrapper">
          <div className="mm-width free-courses-wrapper">
            <SideBar />
            <div className="main-content">
              <h1
                className={
                  this.state.step === "course" ? "title three-part" : "title"
                }>
                {this.state.step === "course" ? (
                  <>
                    <span
                      onClick={() => {
                        this.title_back("subject");
                      }}>
                      درس های رایگان
                    </span>
                    <img src={seprator} />
                    <span
                      onClick={() => {
                        this.title_back("field");
                      }}>
                      {this.state.selected_options.field}
                    </span>
                    <img src={seprator} />
                    <span
                      onClick={() => {
                        this.title_back("kind");
                      }}>
                      {this.state.selected_options.kind}
                    </span>
                  </>
                ) : (
                  "درس های رایگان"
                )}
              </h1>
              <div className="boxes-place">
                <span className="sub-title-wrapper">
                  <h2 className="sub-title">
                    {this.state.step === "subject" ? (
                      "رشته درسی"
                    ) : this.state.step === "field" ? (
                      "موضوع درسی"
                    ) : this.state.step === "kind" ? (
                      "نوع دوره"
                    ) : (
                      <></>
                    )}
                  </h2>
                  {this.state.step === "kind" || this.state.step === "field" ? (
                    <img
                      src={arrow}
                      onClick={() => {
                        this.back_handler();
                      }}
                    />
                  ) : (
                    <></>
                  )}
                </span>
                {this.state.step === "subject" ? (
                  <Subjects go_to_fields={this.go_to_fields} />
                ) : (
                  <></>
                )}
                {this.state.step === "field" ? (
                  <Fields
                    go_to_kinds={this.go_to_kinds}
                    field={
                      this.state.fields[this.state.selected_options.subject]
                    }
                  />
                ) : (
                  <></>
                )}
                {this.state.step === "kind" ? (
                  <Kinds
                    show_courses={this.show_courses}
                    doreha={doreha ? doreha : false}
                  />
                ) : (
                  <></>
                )}
                {this.state.step === "course" ? (
                  <FCourses
                    selected_courses={
                      this.state.selected_course
                        ? this.state.selected_course
                        : false
                    }
                  />
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default withWebsiteData(FreeCourse);
