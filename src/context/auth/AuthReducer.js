import {
  REGISTER_SUCCESS,
  REGISTER_MISTAKE,
  GET_USER,
  LOGIN_MISTAKE,
  LOGIN_SUCCESS,
  CLOSE_SESSION,
} from "../../types";

export default (state, action) => {
  switch (action.type) {
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      localStorage.setItem('token',action.payload.token);
      return{
        ...state,
        authenticated: true,
        message:null,
        loading:false
      }
    case GET_USER:
      return{
        ...state,
        authenticated:true,
        user:action.payload,
        loading:false
      }
    case CLOSE_SESSION:  
    case LOGIN_MISTAKE:
    case REGISTER_MISTAKE:
      localStorage.removeItem('token');
      return{
        ...state,
        token:null,
        authenticated:null,
        user:null,
        message:action.payload,
        loading:false
      }
    default:
      return state;
  }
};
