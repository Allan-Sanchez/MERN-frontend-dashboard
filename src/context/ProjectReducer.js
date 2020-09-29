import {
  PROJECT_ERROR,
  FORM_PROJECT,
  GET_PROJECT,
  ADD_PROJECT,
  VALIDATE_FORM,
  CURRENT_PROJECT,
  DELETE_PROJECT,
  CLEAN_PROJECT
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case FORM_PROJECT:
      return {
        ...state,
        formNew: true,
      };
    case GET_PROJECT:
      return {
        ...state,
        projects: action.payload,
      };
    case ADD_PROJECT:
      return {
        ...state,
        projects: [action.payload, ...state.projects],
        formNew: false,
        errorForm: false,
      };
    case VALIDATE_FORM:
      return {
        ...state,
        errorForm: true,
      };
    case CURRENT_PROJECT:
      return {
        ...state,
        project: state.projects.filter(
          (project) => project._id === action.payload
        ),
      };
    case DELETE_PROJECT:
      return {
        ...state,
        projects: state.projects.filter(
          (project) => project._id !== action.payload
        ),
        project: null,
      };
    case PROJECT_ERROR:
      return{
        ...state,
        message:action.payload
      };
    case CLEAN_PROJECT:
      return{
        ...state,
        project:null
      }
    default:
      return state;
  }
};
