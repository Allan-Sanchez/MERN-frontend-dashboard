
import React,{useReducer} from 'react'

import ProjectContext from "./ProjectContext";
import ProjectReducer from "./ProjectReducer";
import {FORM_PROJECT,GET_PROJECT} from "../types"
const ProjectState = (props) =>{
    
    const projects = [
        {id:1, name:"virtual shop"},
        {id:2, name:"intranet"},
        {id:3, name:"Desinger your own web"}
    ]

    const initialState = {
         projects : [],
        formNew: false
    }

    // Dispatch para ejecutar las acciones
    const [state, dispatch] = useReducer(ProjectReducer, initialState);

    // serie de funciones para el CRUD
    const openForm = () =>{
        dispatch({
            type:FORM_PROJECT
        })
    }

    const getProject = () =>{
        dispatch({
            type:GET_PROJECT,
            payload:projects
        })
    }


    return (
        <ProjectContext.Provider
        value={{
            projects:state.projects,
            formNew:state.formNew,
            openForm,
            getProject
        }}
        >
            {props.children}
        </ProjectContext.Provider>
    )
    
}

export default ProjectState;