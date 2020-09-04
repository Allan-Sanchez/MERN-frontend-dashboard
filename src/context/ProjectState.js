import React, { useReducer } from "react";
import { v4 as uuidv4 } from "uuid";
import ProjectContext from "./ProjectContext";
import ProjectReducer from "./ProjectReducer";
import {
  FORM_PROJECT,
  GET_PROJECT,
  ADD_PROJECT,
  VALIDATE_FORM,
  CURRENT_PROJECT,
  DELETE_PROJECT,
} from "../types";
const ProjectState = (props) => {
  const projects = [
    { id: 1, nameProject: "virtual shop" },
    { id: 2, nameProject: "intranet" },
    { id: 3, nameProject: "Desinger your own web" },
  ];

  const initialState = {
    projects: [],
    formNew: false,
    errorForm: false,
    project: null,
  };

  // Dispatch para ejecutar las acciones
  const [state, dispatch] = useReducer(ProjectReducer, initialState);

  // serie de funciones para el CRUD
  const openForm = () => {
    dispatch({
      type: FORM_PROJECT,
    });
  };

  const getProject = () => {
    dispatch({
      type: GET_PROJECT,
      payload: projects,
    });
  };
  // add project
  const addProject = (project) => {
    project.id = uuidv4();
    dispatch({
      type: ADD_PROJECT,
      payload: project,
    });
  };

  const showError = () => {
    dispatch({
      type: VALIDATE_FORM,
    });
  };

//Select current project 
  const currentProject = (projectId) => {
    dispatch({
      type: CURRENT_PROJECT,
      payload: projectId,
    });
  };

  // delete current projct
  const deleteProject = (projectId) =>{
    dispatch({
      type:DELETE_PROJECT,
      payload:projectId
    })
  }

  return (
    <ProjectContext.Provider
      value={{
        projects: state.projects,
        formNew: state.formNew,
        errorForm: state.errorForm,
        project: state.project,
        openForm,
        getProject,
        addProject,
        showError,
        currentProject,
        deleteProject
      }}
    >
      {props.children}
    </ProjectContext.Provider>
  );
};

export default ProjectState;
