import { combineReducers } from "redux";
import { authReducer } from "./AuthReducers";

 
 
 
 export const rootReducer = combineReducers({
    auth: authReducer
 })