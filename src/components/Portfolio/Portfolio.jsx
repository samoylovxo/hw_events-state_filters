import { useState } from "react";
import { PORTFOLIO_FILTER_LIST, PORTFOLIO_IMAGES } from "../../consts/consts";
import ProjectList from "../ProjectList/ProjectList";
import Toolbar from "../Toolbar/Toolbar";
import styled from "./Portfolio.module.css";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [projects, setProjects] = useState(PORTFOLIO_IMAGES);

  const onSelectFilter = (filter) => {
    setActiveFilter(filter);

    const filteredProjects = PORTFOLIO_IMAGES.filter(
      (project) => project.category.toLowerCase() === filter.toLowerCase()
    );

    const isAll = filter.toLowerCase() === "all";

    setProjects(isAll ? PORTFOLIO_IMAGES : filteredProjects);
  };

  return (
    <div className={styled.portfolio}>
      <Toolbar
        filters={PORTFOLIO_FILTER_LIST}
        selected={activeFilter}
        onSelectFilter={onSelectFilter}
      />
      <ProjectList projects={projects} />
    </div>
  );
};

export default Portfolio;
