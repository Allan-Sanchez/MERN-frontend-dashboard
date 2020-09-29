import React, { useReducer } from "react";
import ProjectContext from "./ProjectContext";
import ProjectReducer from "./ProjectReducer";
import clientAxios from "../config/axios";
import {
  PROJECT_ERROR,
  FORM_PROJECT,
  GET_PROJECT,
  ADD_PROJECT,
  VALIDATE_FORM,
  CURRENT_PROJECT,
  DELETE_PROJECT,
} from "../types";
const ProjectState = (props) => {

  const initialState = {
    projects: [],
    formNew: false,
    errorForm: false,
    project: null,
    message:null
  };

  // Dispatch para ejecutar las acciones
  const [state, dispatch] = useReducer(ProjectReducer, initialState);

  // serie de funciones para el CRUD
  const openForm = () => {
    dispatch({
      type: FORM_PROJECT,
    });
  };

  const getProject =async () => {
    try {
      const response = await clientAxios.get('/api/projects');
      dispatch({
        type: GET_PROJECT,
        payload: response.data,
      });
    } catch (error) {
      console.log(error.response);
    }
  };
  // add project
  const addProject = async(project) => {
    try {
      const response = await clientAxios.post('/api/projects',project);
      
      dispatch({
        type: ADD_PROJECT,
        payload: response.data,
      });

    } catch (error) {
      console.log(error.response);
    }
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
  const deleteProject =async (projectId) =>{
    try {
      const response = await clientAxios.delete(`/api/projects/${projectId}`);
      console.log(response);
      dispatch({
        type:DELETE_PROJECT,
        payload:projectId
      });
    } catch (error) {
      
     let alert =error.response.data.msg;
      dispatch({
        type:PROJECT_ERROR,
        payload:alert
      })

      setTimeout(() =>{
        dispatch({
          type:PROJECT_ERROR,
          payload:''
        })
    },5000)
    }
  }

  return (
    <ProjectContext.Provider
      value={{
        projects: state.projects,
        formNew: state.formNew,
        errorForm: state.errorForm,
        project: state.project,
        message:state.message,
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
