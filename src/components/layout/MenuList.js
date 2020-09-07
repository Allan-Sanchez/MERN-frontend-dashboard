import React, { useContext, useEffect } from "react";
import ListProject from "./ListProject";

import ProjectContext from "../../context/ProjectContext";

const MenuList = () => {
  //  get project from global state
  const projectsContext = useContext(ProjectContext);
  const { projects, getProject } = projectsContext;

  useEffect(() => {
    getProject();
    //eslint-disable-next-line
  }, []);
  // validad that project not be void
  if (projects.length === 0) return (<h3 className="text-center text-xl text-gray-700">No projects available</h3>);

  return (
    <ul>
      {projects.map((project) => (
        <ListProject key={project.id} project={project}></ListProject>
      ))}
    </ul>
  );
};

export default MenuList;
