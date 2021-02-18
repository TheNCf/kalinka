import { combineReducers } from "redux";
import { modelsReducer } from "./modelsReducer";

export const rootReducer = combineReducers({
    modelsdata: modelsReducer
});