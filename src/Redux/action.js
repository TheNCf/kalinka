import axios from "axios";
import { GETALLMODELS } from "./types";

export const getAllModels = () => {
    return async dispatch => {
        const response = await axios.get("/selectModels");
        
        dispatch({
            type: GETALLMODELS, payload: response.data
        });
    }
}