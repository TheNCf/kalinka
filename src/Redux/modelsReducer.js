import { GETALLMODELS, GETALLTYPES } from "./types";

const initialState = {
    models: [],
    types: []
}

export const modelsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GETALLMODELS: 
            return {...state, models: action.payload}
        case GETALLTYPES: 
            return {...state, types: action.payload}
        default:
            return state;
    }
}