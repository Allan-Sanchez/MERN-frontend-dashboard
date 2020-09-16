import { CLOSE_ALERT, SHOW_ALERT } from "../../types";


export default (state,action) =>{
    switch (action.type) {
        case SHOW_ALERT:
            return{
                alert: action.payload
            }
        case CLOSE_ALERT:
            return{
                alert:null
            }
        default:
            return state;
    }
};