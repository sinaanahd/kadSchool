import React, { Component } from "react";
import FCourse from "./fcourse/fcourse";
class FCourses extends Component {
  state = {};
  render() {
    const { selected_courses } = this.props;
    return (
      <div className="f-courses-wrapper">
        {selected_courses && selected_courses.length !== 0
          ? selected_courses.map((sc) => (
              <FCourse key={sc.kelas_id} kelas={sc} />
            ))
          : "متاسفانه ای دوره ای وجود ندارد"}
      </div>
    );
  }
}

export default FCourses;
