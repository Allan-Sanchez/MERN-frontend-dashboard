import React, { useContext } from "react";

import ProjectContext from "../../context/ProjectContext";
import TaskContext from "../../context/tasks/TaskContext";


const ListProject = ({project}) => {

  // get state project
  const projectContext = useContext(ProjectContext);
  const {currentProject} = projectContext;
  
  // get state task

  const taskProject = useContext(TaskContext);
  const {getTasks} = taskProject;

  const onclickProduct = (id) =>{
    currentProject(id) //filter current project
    // console.log(id);
    getTasks(id);//filter tasks the current project
  }
  return (
    <li className="mb-2">
      <button className="w-full" onClick={() => onclickProduct(project.id)}>
        <span className="w-full text-md font-semibold inline-block py-1 px-2 uppercase rounded text-gray-700 bg-gray-100  last:mr-0 mr-1">
          {project.nameProject}
        </span>
      </button>
    </li>
  );
};

export default ListProject;
