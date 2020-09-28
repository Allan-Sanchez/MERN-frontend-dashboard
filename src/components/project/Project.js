import React, { useContext, useEffect } from "react";
import ProjectContext from "../../context/ProjectContext";
import TaskContext from "../../context/tasks/TaskContext";
import AuthContext from "../../context/auth/AuthContext"
import ErrorProject from "./ErrorProject";
import Menu from "../layout/Menu";
import MenuBar from "../layout/MenuBar";
import FormProject from "./FormProject";
import ListTask from "./ListTask";
import No_task from "../../no_task.svg";

const Project = () => {
  const projectContext = useContext(ProjectContext);
  const { project, deleteProject } = projectContext;

  const taskContext = useContext(TaskContext);
  const {errorProject, errorMessage} = taskContext;

  const authContext = useContext(AuthContext);
  const {userCurrently} = authContext;

  useEffect(() =>{
    userCurrently();
  },[]);

  const onClickdelete = () => {
    deleteProject(project[0].id);
  };

  return (
    <div style={{ minHeight: "100vh" }} className="flex bg-gray-400 ">
      <Menu></Menu>
      <div className="w-full">
        <MenuBar></MenuBar>

      {errorProject ? (
      <ErrorProject message={errorMessage}></ErrorProject>
      ) : null}

        {project ? (
          <div className="pt-10 bg-gray-400">
            <div className="max-w-xs mx-auto flex justify-between">
              <h2 className="text-center text-2xl text-gray-700 font-bold uppercase">
                {project[0].nameProject}
              </h2>
              <div>
                <button
                  className="bg-red-400 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none"
                  type="button"
                  onClick={onClickdelete}
                  style={{ transition: "all .15s ease" }}
                >
                  Delete
                </button>
              </div>
            </div>
            <FormProject id={project[0].id}></FormProject>

            <ListTask></ListTask>
          </div>
        ) : (
          <div className="w-full mt-10">
            <h2 className="text-center font-bold text-4xl text-gray-700">
              Select a project
            </h2>
            <div className="max-w-sm mx-auto mt-10">
              <img className="w-full" src={No_task} alt="no task" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Project;
