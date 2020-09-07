import {GET_TASKS, ADD_TASKS, SHOW_ERROR,DELETE_TASK} from "../../types"

export default (state,action)=>{
    
    switch (action.type) {
        case GET_TASKS:
            return{
                ...state,
                tasksProject:state.tasks.filter(task => task.projectId === action.payload)
            }
        case ADD_TASKS:
            return{
                ...state,
                tasks:[...state.tasks,action.payload],
                errorProject:false,
                errorMessage:''
            }
        case SHOW_ERROR:
            return{
                ...state,
                errorProject: true,
                errorMessage:action.payload
            }
        case DELETE_TASK:
            return{
                ...state,
                tasks:state.tasks.filter( task => task.id !== action.payload)
            }    
        default:
            return state;
    }
}