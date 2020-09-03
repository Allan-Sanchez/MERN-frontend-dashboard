import React, { useContext } from "react";

import ProjectContext from "../../context/ProjectContext";

const ListProject = ({project}) => {

  const projectContext = useContext(ProjectContext);
  const {currentProject} = projectContext;
  
  return (
    <li className="mb-2">
      <button className="w-full" onClick={() =>currentProject(project.id)}>
        <span className="w-full text-md font-semibold inline-block py-1 px-2 uppercase rounded text-gray-700 bg-gray-100  last:mr-0 mr-1">
          {project.nameProject}
        </span>
      </button>
    </li>
  );
};

export default ListProject;
