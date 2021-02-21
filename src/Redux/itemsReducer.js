import { GETALLCOLORS, GETALLSIZES } from "./types";

const initialState = {
    colors: [],
    sizes: []
}

export const itemsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GETALLCOLORS: 
            return {...state, colors: action.payload}
        case GETALLSIZES: 
            return {...state, sizes: action.payload}
        default:
            return state;
    }
}