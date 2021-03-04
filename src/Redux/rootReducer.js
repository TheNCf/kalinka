import { combineReducers } from "redux";
import { modelsReducer } from "./modelsReducer";
import { itemsReducer } from "./itemsReducer";

export const rootReducer = combineReducers({
    modelsdata: modelsReducer,
    itemsdata: itemsReducer,
});