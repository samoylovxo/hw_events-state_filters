import styled from "./ProjectList.module.css";

const ProjectList = (props) => {
  const { projects } = props;

  return (
    <div className={styled.projectList}>
      {projects.map((project, index) => {
        const { img, category } = project;

        return (
          <div key={index} className={styled.project}>
            <img src={img} alt={category} />
          </div>
        );
      })}
    </div>
  );
};

export default ProjectList;
