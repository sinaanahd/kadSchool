import React, { Component } from "react";
import { Helmet } from "react-helmet";
import Header from "../header/header";
import SideBar from "../side-bar/side-bar";
import Subjects from "./subjects/subjects";
import fields from "./fields";
import Fields from "./fields/fields";
import Kinds from "./kinds/kinds";
import arrow from "../../assets/images/circle-arrow-right.svg";
import FCourses from "./fcoureses/fcourses";
class FreeCourse extends Component {
  state = {
    step: "subject",
    fields: fields,
    selected_options: {
      subject: false,
      field: false,
      kind: false,
    },
  };
  go_to_fields = (select) => {
    const step = "field";
    const selected_options = { ...this.state.selected_options };
    selected_options.subject = select;
    this.setState({ step, selected_options });
  };
  go_to_kinds = (select) => {
    const step = "kind";
    const selected_options = { ...this.state.selected_options };
    selected_options.field = select;
    this.setState({ step, selected_options });
  };
  show_courses = (select) => {
    const step = "course";
    const selected_options = { ...this.state.selected_options };
    selected_options.kind = select;
    this.setState({ step, selected_options });
  };
  back_handler = () => {
    const step = this.state.step;
    if (step === "field") {
      this.setState({ step: "subject" });
    } else if (step === "kind") {
      this.setState({ step: "field" });
    }
  };
  render() {
    return (
      <>
        <Helmet>
          <title>درس های رایگان کاد</title>
        </Helmet>
        <Header />
        <section className="bgc-wrapper">
          <div className="mm-width free-courses-wrapper">
            <SideBar />
            <div className="main-content">
              <h1
                className={
                  this.state.step === "course" ? "title" : "title three-part"
                }>
                {this.state.step === "course"
                  ? `درس‌های رایگان > ${this.state.selected_options.field} > ${this.state.selected_options.kind}`
                  : "درس های رایگان"}
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
                  <Kinds show_courses={this.show_courses} />
                ) : (
                  <></>
                )}
                {this.state.step === "course" ? <FCourses /> : <></>}
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default FreeCourse;
