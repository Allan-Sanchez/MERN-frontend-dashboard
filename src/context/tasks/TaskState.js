import React, { useReducer } from "react";
import TaskContext from "./TaskContext";
import TaskReducer from "./TaskReducer";
import clientAxios from "../../config/axios";
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
const TaskState = (props) => {
  const initialState = {
    tasksProject: [],
    errorProject: false,
    errorMessage: "",
    currentTask: null
  };

  const [state, dispatch] = useReducer(TaskReducer, initialState);

  // get task project for id
  const getTasks = async (projectId) => {
    try {
      const response = await clientAxios.get('/api/tasks', { params:{projectId}});
      dispatch({
        type: GET_TASKS,
        payload: response.data.tasks,
      });
    } catch (error) {
      console.log(error.response);
    }
  };

  const addTask =async (task) => {
    try {
      const response = await clientAxios.post('/api/tasks',task);
      // console.log(response.data.task);
      dispatch({
        type: ADD_TASKS,
        payload: response.data.task,
      });
    } catch (error) {
      console.log(error.response);
    }
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

  const deleteTask =async (id,projectId) => {
    try {
      const response = await clientAxios.delete(`/api/tasks/${id}`,{ params:{projectId}});
      console.log(response);
      
      dispatch({
        type: DELETE_TASK,
        payload: id,
      });
    } catch (error) {
      console.log(error.response);
    }
  };


  const updateTask =async (task) =>{
    try {
      const response = await clientAxios.put(`/api/tasks/${task._id}`,task);
      console.log(response.data.task);
      dispatch({
        type:UPDATE_TASK,
        payload:response.data.task
      })
    } catch (error) {
      console.log(error.response);
    }
  };

  const handleCurrentTask = (task) =>{
      dispatch({
          type:CURRENT_TASK,
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
        // tasks: state.tasks,
        tasksProject: state.tasksProject,
        errorProject: state.errorProject,
        errorMessage: state.errorMessage,
        currentTask: state.currentTask,
        getTasks,
        addTask,
        showError,
        deleteTask,
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
