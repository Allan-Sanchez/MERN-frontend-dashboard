import React, { useReducer } from "react";
import TaskContext from "./TaskContext";
import TaskReducer from "./TaskReducer";
import { v4 as uuidv4 } from "uuid";

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
const TaskState = (props) => {
  const initialState = {
    tasks: [
      { id: 1, name: "choose platform", state: true, projectId: 1 },
      { id: 2, name: "choose color", state: false, projectId: 2 },
      { id: 3, name: "choose color", state: false, projectId: 3 },
      { id: 4, name: "choose color", state: false, projectId: 3 },
      { id: 5, name: "choose page of platform", state: true, projectId: 1 },
      { id: 6, name: "choose hosting", state: false, projectId: 1 },

      { id: 7, name: "choose platform", state: true, projectId: 1 },
      { id: 8, name: "choose color", state: false, projectId: 2 },
      { id: 9, name: "choose color", state: false, projectId: 3 },
      { id: 10, name: "choose color", state: false, projectId: 2 },
      { id: 11, name: "choose page of platform", state: true, projectId: 1 },
      { id: 12, name: "choose hosting", state: false, projectId: 3 },
    ],
    tasksProject: null,
    errorProject: false,
    errorMessage: "",
    currentTask: null
  };

  const [state, dispatch] = useReducer(TaskReducer, initialState);

  // get task project for id
  const getTasks = (projectId) => {
    dispatch({
      type: GET_TASKS,
      payload: projectId,
    });
  };

  const addTask = (task) => {
    task.id = uuidv4();
    dispatch({
      type: ADD_TASKS,
      payload: task,
    });
  };

  const showError = (message) => {
    dispatch({
      type: SHOW_ERROR,
      payload: message,
    });

    setTimeout(() =>{
      dispatch({
          type:CLOSE_ERROR
      })
  },5000);
  
  };

  const deleteTask = (id) => {
    dispatch({
      type: DELETE_TASK,
      payload: id,
    });
  };

  const changeStateTask = (task) =>{
      dispatch({
          type:STATE_TASK,
          payload:task
      })
  };

  const handleCurrentTask = (task) =>{
      dispatch({
          type:CURRENT_TASK,
          payload:task
      })
  };

  const updateTask = (task) =>{
    dispatch({
      type:UPDATE_TASK,
      payload:task
    })
  };

  const cleanTask = () =>{
    dispatch({
      type:CLEAN_TASK,
    })
  };

  return (
    <TaskContext.Provider
      value={{
        tasks: state.tasks,
        tasksProject: state.tasksProject,
        errorProject: state.errorProject,
        errorMessage: state.errorMessage,
        currentTask: state.currentTask,
        getTasks,
        addTask,
        showError,
        deleteTask,
        changeStateTask,
        handleCurrentTask,
        updateTask,
        cleanTask
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
};

export default TaskState;
