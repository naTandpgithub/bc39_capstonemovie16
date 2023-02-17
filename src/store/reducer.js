import { combineReducers } from "redux";
import dataUserReducer from "../pages/AdminTemplate/User/duck/reducer";
const rootReducer = combineReducers({ dataUserReducer });

export default rootReducer;
