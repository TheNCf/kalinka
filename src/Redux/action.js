import axios from "axios";
import { GETALLMODELS, GETALLTYPES, GETALLCOLORS, GETALLSIZES } from "./types";

export const getAllModels = (reqFilter) => {
    return async dispatch => {
        const response = await axios.post("/selectModels", {
            filter: reqFilter,
        });
        
        dispatch({
            type: GETALLMODELS, payload: response.data
        });
    }
}

export const getAllTypes = (reqKind) => {
    return async dispatch => {
        const response = await axios.post("/selectTypes", {
            kind: reqKind,
        });
        
        dispatch({
            type: GETALLTYPES, payload: response.data
        });
    }
}

export const getAllColors = (reqKind) => {
    return async dispatch => {
        const response = await axios.post("/selectColors", {
            kind: reqKind,
        });
        
        dispatch({
            type: GETALLCOLORS, payload: response.data
        });
    }
}

export const getAllSizes = (reqKind) => {
    return async dispatch => {
        const response = await axios.post("/selectSizes", {
            kind: reqKind,
        });
        
        dispatch({
            type: GETALLSIZES, payload: response.data
        });
    }
}