import { compare } from "../../utils/utils.js";
import { ORDER_BY } from "../types.js";

const initialState = {
    data:[],
    error:{
        exist:false,
        message:null
    },
    loader:true
};

export const reducerProduct = (state = initialState, action) =>{

    switch (action.type) {
        case "api/getAllProducts":
            return {
                ...state,
                data: action.payload.data,
                loader: action.payload.loader,
                error:action.payload.error
            };

        case "api/getOneProducts":

            return {
                ...state,
                data: action.payload.data,
                loader: action.payload.loader,
                error:action.payload.error
            };

        case ORDER_BY:
            if (action.payload === "ALFABETICO") {
                let temparray = state.data.sort((a,b) => compare(a,b, "title"));
                return {
                    ...state,
                    data: temparray
                };
            } else if (action.payload === "P-MAYOR"){
                let temparray = state.data.sort((a,b) => compare(a,b, "current_price")*(-1));
                return {
                    ...state,
                    data: temparray
                };
            }else if (action.payload === "P-MENOR"){
                let temparray = state.data.sort((a,b) => compare(a,b, "current_price"));
                return {
                    ...state,
                    data: temparray
                };
            }
        default:
            return state;
    }
}