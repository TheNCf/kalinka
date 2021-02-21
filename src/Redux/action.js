import axios from "axios";
import { GETALLMODELS, GETALLCOLORS, GETALLSIZES } from "./types";

export const getAllModels = () => {
    return async dispatch => {
        const response = await axios.get("/selectModels");
        
        dispatch({
            type: GETALLMODELS, payload: response.data
        });
    }
}

export const getAllColors = () => {
    return async dispatch => {
        const response = await axios.get("/selectColors");
        
        dispatch({
            type: GETALLCOLORS, payload: response.data
        });
    }
}

export const getAllSizes = () => {
    return async dispatch => {
        const response = await axios.get("/selectSizes");
        
        dispatch({
            type: GETALLSIZES, payload: response.data
        });
    }
}