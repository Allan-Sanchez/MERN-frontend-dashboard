import React,{useReducer} from 'react'
import AuthContext from "./AuthContext";
import AuthReducer from "./AuthReducer";
import {
    REGISTER_SUCCESS,
    REGISTER_MISTAKE,
    GET_USER,
    LOGIN_MISTAKE,
    LOGIN_SUCCESS,
    CLOSE_SESSION,
  } from "../../types";
  
const AuthState = (props) => {
    const initialState = {
        token:localStorage.getItem('token'),
        authenticated:null,
        user:null,
        mensage:null
    }

    const [state, dispatch] = useReducer(AuthReducer,initialState);
    
    return ( 
        <AuthContext.Provider value={{
            token: state.token,
            authenticated: state.authenticated,
            user: state.user,
            mensage:state.mensage
        }}>
            {props.children}
        </AuthContext.Provider>
     );
}
 
export default AuthState;