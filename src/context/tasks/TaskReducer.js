import {
  GET_TASKS,
  ADD_TASKS,
  SHOW_ERROR,
  CLOSE_ERROR,
  DELETE_TASK,
  STATE_TASK,
  CURRENT_TASK,
  UPDATE_TASK,
  CLEAN_TASK
} from "../../types";

export default (state, action) => {
  switch (action.type) {
    case GET_TASKS:
      return {
        ...state,
        tasksProject: state.tasks.filter(
          (task) => task.projectId === action.payload
        ),
      };
    case ADD_TASKS:
      return {
        ...state,
        tasks: [action.payload, ...state.tasks],
        errorProject: false,
        errorMessage: "",
      };
    case SHOW_ERROR:
      return {
        ...state,
        errorProject: true,
        errorMessage: action.payload,
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
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    case UPDATE_TASK:
    case STATE_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id ? action.payload : task
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
