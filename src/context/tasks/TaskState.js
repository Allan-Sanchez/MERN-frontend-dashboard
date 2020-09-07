import React, { useReducer } from 'react'
import TaskContext from "./TaskContext";
import TaskReducer from "./TaskReducer";

import {GET_TASKS,ADD_TASKS, SHOW_ERROR,DELETE_TASK} from   "../../types"
const TaskState = (props) => {

    const initialState ={
        tasks:[
        {id:1, name:"choose platform", state:true, projectId:1},
        {id:2, name:"choose color", state:false, projectId:2},
        {id:3, name:"choose color", state:false, projectId:3},
        {id:4, name:"choose color", state:false, projectId:3},
        {id:5, name:"choose page of platform", state:true, projectId:1},
        {id:6, name:"choose hosting", state:false, projectId:1},

        {id:7, name:"choose platform", state:true, projectId:1},
        {id:8, name:"choose color", state:false, projectId:2},
        {id:9, name:"choose color", state:false, projectId:3},
        {id:10, name:"choose color", state:false, projectId:2},
        {id:11, name:"choose page of platform", state:true, projectId:1},
        {id:12, name:"choose hosting", state:false, projectId:3},
        ],
        tasksProject:null,
        errorProject:false,
        errorMessage:''        
    }
    
    const [state,dispatch] = useReducer(TaskReducer,initialState);
    
    // get task project for id
    const getTasks = (projectId) =>{
        dispatch({
            type:GET_TASKS,
            payload:projectId
        })
    }

    const addTask = (task) =>{
        dispatch({
            type:ADD_TASKS,
            payload:task
        })
    };

    const showError = (message) =>{
        dispatch({
            type:SHOW_ERROR,
            payload:message
        })
    };

    const deleteTask = (id) =>{
        dispatch({
            type:DELETE_TASK,
            payload:id
        })
    }

    return ( 
        <TaskContext.Provider
            value={{
                tasks:state.tasks,
                tasksProject:state.tasksProject,
                errorProject:state.errorProject,
                errorMessage:state.errorMessage,
                getTasks,
                addTask,
                showError,
                deleteTask
            }}
        >
            {props.children}
        </TaskContext.Provider>
     );
}
 
export default TaskState;