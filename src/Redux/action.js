import axios from "axios";
import { GETALLMODELS, GETALLTYPES, GETALLCOLORS, GETALLSIZES } from "./types";

export const getAllModels = (reqTypeFilter, reqSizeFilter, reqColorFilter) => {
    return async dispatch => {
        const response = await axios.get("/selectModels", {
            typeFilter: reqTypeFilter,
            sizeFilter: reqSizeFilter,
            colorFilter: reqColorFilter
        });
        
        dispatch({
            type: GETALLMODELS, payload: response.data
        });
    }
}

export const getAllTypes = () => {
    return async dispatch => {
        const response = await axios.get("/selectTypes");
        
        dispatch({
            type: GETALLTYPES, payload: response.data
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