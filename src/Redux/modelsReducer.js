import { GETALLMODELS, GETALLTYPES, GETNEWMODELS, GETDISCOUNTMODELS } from "./types";

const initialState = {
    models: [],
    types: [],
    new: [],
    discount: []
}

export const modelsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GETALLMODELS: 
            return {...state, models: action.payload}
        case GETALLTYPES: 
            return {...state, types: action.payload}
        case GETNEWMODELS: 
            return {...state, new: action.payload}
        case GETDISCOUNTMODELS: 
            return {...state, discount: action.payload}
        default:
            return state;
    }
}