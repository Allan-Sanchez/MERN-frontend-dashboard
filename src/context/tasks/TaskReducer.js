import {
  GET_TASKS,
  ADD_TASKS,
  SHOW_ERROR,
  CLOSE_ERROR,
  DELETE_TASK,
  CURRENT_TASK,
  UPDATE_TASK,
  CLEAN_TASK
} from "../../types";

export default (state, action) => {
  switch (action.type) {
    case GET_TASKS:
      return {
        ...state,
        tasksProject: action.payload,
      };
    case ADD_TASKS:
      return {
        ...state,
        tasksProject: [action.payload, ...state.tasksProject],
        errorProject: false,
        errorMessage: "",
      };
    case SHOW_ERROR:
      return {
        ...state,
        errorMessage: action.payload,
        errorProject: true,
      };
    case CLOSE_ERROR:
      return{
        ...state,
        errorProject: false,
        errorMessage:""
      };
    case DELETE_TASK:
      return {
        ...state,
        tasksProject: state.tasksProject.filter((task) => task._id !== action.payload),
      };
    case UPDATE_TASK:
      return {
        ...state,
        tasksProject: state.tasksProject.map((task) =>
          task._id === action.payload._id ? action.payload : task
        ),
      };
    case CURRENT_TASK:
        return{
            ...state,
            currentTask:action.payload
        }
    case CLEAN_TASK:
      return{
        ...state,
        currentTask:null
      }
    default:
      return state;
  }
};
