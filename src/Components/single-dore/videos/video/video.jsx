import React, { useContext, useState } from "react";
import AparatVideo from "../../../video/aparat-video";
import { DataContext } from "../../../context/DataContext";
const Video = ({ f }) => {
  const { teachers } = useContext(DataContext);
  const teacher = teachers.find((t) => t.teacher_id === f.teacher_id) || false;
  return (
    <div key={f.file_id} className="sample-video-place">
      <AparatVideo src={f.file_link} />
      <div className="video-text-items">
        <h3 className="video-name">{f.title}</h3>
        <h4 className="video-teacher">{teacher.fullname}</h4>
      </div>
    </div>
  );
};

export default Video;
