import {
  GET_TASKS,
  ADD_TASKS,
  SHOW_ERROR,
  DELETE_TASK,
  STATE_TASK,
  CURRENT_TASK
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
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
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
    default:
      return state;
  }
};
