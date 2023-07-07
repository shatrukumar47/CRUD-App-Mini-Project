import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT_SUCCESS } from "../actionTypes";


const initialState = {
    isLoading: false,
    token : "",
    isAuth : false,
    isError: false
}

export const reducer = (state=initialState, {type, payload})=>{
   switch(type){
    case LOGIN_REQUEST:{
        return {...state, isLoading: true}
    }
    case LOGIN_FAILURE:{
        return {...state, isLoading: false, isError: true}
    }
    case LOGIN_SUCCESS:{
        return {...state, isLoading: false, isAuth:true, token: payload}
    }
    case LOGOUT_SUCCESS:{
        return {...state, isLoading: false, isAuth:false, token: ""}
    }
    default:
        return state;
   }
}