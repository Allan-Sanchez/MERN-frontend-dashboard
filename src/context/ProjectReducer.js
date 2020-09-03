import {FORM_PROJECT,GET_PROJECT, ADD_PROJECT, VALIDATE_FORM, CURRENT_PROJECT} from "../types"


export default (state, action) =>{
    switch (action.type) {
        case FORM_PROJECT:
        return{
            ...state,
            formNew:true
        }
        case GET_PROJECT:
            return{
                ...state,
                projects:action.payload
            }
        case ADD_PROJECT:
            return{
                ...state,
                projects:[...state.projects, action.payload],
                formNew:false,
                errorForm:false
            }
        case VALIDATE_FORM:
            return{
                ...state,
                errorForm:true
            }
        case CURRENT_PROJECT:
            return{
                ...state,
                project: state.projects.filter(project => project.id === action.payload)
            }    
        default:
            return state;
    }
}