import React,{useReducer} from 'react'
import AlertReducer from "../alert/AlertReducer";
import AlertContext from "../alert/AlertContext";

import { CLOSE_ALERT, SHOW_ALERT } from "../../types";

const AlertState = (props) => {
    const initialState = {
        alert:null
    }

    const [state,dispatch] = useReducer(AlertReducer,initialState);

    const showAlert =(msg,category) =>{
        dispatch({
            type:SHOW_ALERT,
            payload:{
                msg,
                category
            }
        });
        setTimeout(() =>{
            dispatch({
                type:CLOSE_ALERT
            })
        },5000);
    }

    return (
        <AlertContext.Provider
            value={{alert:state.alert,showAlert}}
        >
            {props.children}
        </AlertContext.Provider>
    )
}
 
export default AlertState;
