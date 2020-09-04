import React, { useReducer } from 'react'
import TaskContext from "./TaskContext";
import TaskReducer from "./TaskReducer";

import {GET_TASKS} from   "../../types"
const TaskState = (props) => {

    const initialState ={
        tasks:[
        {name:"choose platform", state:true, projectId:1},
        {name:"choose color", state:false, projectId:2},
        {name:"choose color", state:false, projectId:3},
        {name:"choose color", state:false, projectId:2},
        {name:"choose page of platform", state:true, projectId:1},
        {name:"choose hosting", state:false, projectId:3},

        {name:"choose platform", state:true, projectId:1},
        {name:"choose color", state:false, projectId:2},
        {name:"choose color", state:false, projectId:3},
        {name:"choose color", state:false, projectId:2},
        {name:"choose page of platform", state:true, projectId:1},
        {name:"choose hosting", state:false, projectId:3},
        ]        
    }
    
    const [state,dispatch] = useReducer(TaskReducer,initialState);
    
    // get task project for id
    const getTasks = (projectId) =>{
        dispatch({
            type:GET_TASKS,
            payload:projectId
        })
    }

    return ( 
        <TaskContext.Provider
            value={{
                tasks:state.tasks,
                getTasks
            }}
        >
            {props.children}
        </TaskContext.Provider>
     );
}
 
export default TaskState;