import { GETALLMODELS } from "./types";

const initialState = {
    models: []
}

export const modelsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GETALLMODELS: 
            return {...state, models: action.payload}
        default:
            return state;
    }
}