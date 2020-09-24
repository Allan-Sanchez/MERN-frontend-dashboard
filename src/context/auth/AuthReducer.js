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
      localStorage.setItem('token',action.payload.token);
      return{
        ...state,
        authenticated: true,
        message:null
      }
    case GET_USER:
      return{
        ...state,
        user:action.payload
      }
    case LOGIN_MISTAKE:
    case REGISTER_MISTAKE:
      localStorage.removeItem('token');
      return{
        ...state,
        token:null,
        message:action.payload
      }
    default:
      return state;
  }
};
