import { GETALLCOLORS, GETALLSIZES, GETITEMCOUNT } from "./types";

const initialState = {
    colors: [],
    sizes: [],
    count: []
}

export const itemsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GETALLCOLORS: 
            return {...state, colors: action.payload}
        case GETALLSIZES: 
            return {...state, sizes: action.payload}
        case GETITEMCOUNT: 
            return {...state, count: action.payload}
        default:
            return state;
    }
}