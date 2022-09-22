import React from "react";
import "./mywork.css";

import ProjectWorkCard from "../common/ProjectWorkCard/ProjectWorkCard";

function MyWork({ data }) {
  return (
    <div className="work-container">
      <div className="work-content">
        {data?.map((d, index) => (
          <ProjectWorkCard key={index} project={d} />
        ))}
      </div>
    </div>
  );
}

export default MyWork;
