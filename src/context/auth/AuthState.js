import React,{useReducer} from 'react'
import AuthContext from "./AuthContext";
import AuthReducer from "./AuthReducer";
import clientAxios from "../../config/axios"
import {
    REGISTER_SUCCESS,
    REGISTER_MISTAKE,
    GET_USER,
    LOGIN_MISTAKE,
    LOGIN_SUCCESS,
    CLOSE_SESSION,
  } from "../../types";
import authToken from '../../config/authToken';
  
const AuthState = (props) => {
    const initialState = {
        token:localStorage.getItem('token'),
        authenticated:null,
        user:null,
        message:null
    }

    const [state, dispatch] = useReducer(AuthReducer,initialState);

    const userRegister = async (data) =>{
        try {
            const response = await clientAxios.post('/api/users',data);
            dispatch({
                type:REGISTER_SUCCESS,
                payload: response.data
            });
            
            userCurrently();
            
        } catch (error) {
            const alert ={
                msg:error.response.data.msg,
                category:'bg-red-500'
            }
            dispatch({
                type:REGISTER_MISTAKE,
                payload:alert
            });
        }
    };

    const userCurrently = async () =>{
        const token = localStorage.getItem('token');
        if (token) {
            authToken(token);    
        }

        try {
            const response =await clientAxios.get('/api/auth');
            dispatch({
                type :GET_USER,
                payload:response.data.userCurrently
            })
            // console.log(response);

        } catch (error) {
            console.log(error.response.data.msg);
            dispatch({
                type:LOGIN_MISTAKE,
            });
        }
    };

    const userLogin = async (data) =>{
        try {
            const response =await clientAxios.post('/api/auth',data);
            console.log(response);
            
        } catch (error) {
            console.log(error.response);
            
            const alert ={
                msg:error.response.data.msg,
                category:'bg-red-500'
            };

            dispatch({
                type:LOGIN_MISTAKE,
                payload:alert
            });
        }
    }
    
    return ( 
        <AuthContext.Provider value={{
            token: state.token,
            authenticated: state.authenticated,
            user: state.user,
            message:state.message,
            userRegister,
            userLogin
        }}>
            {props.children}
        </AuthContext.Provider>
     );
}
 
export default AuthState;