import { compare } from "../../utils/utils.js";
import { ORDER_BY, PRODUCTS_REQUEST, PRODUCTS_REQUEST_FAILED, PRODUCTS_REQUEST_SUCCESS } from "../types.js";

const initialState = {
    data: [],
    error: {
        exist: false,
        message: null
    },
    loader: true
};

export const reducerProduct = (state = initialState, action) => {

    switch (action.type) {

        case PRODUCTS_REQUEST:
            return {
                ...state,
                loader: true
            };

        case PRODUCTS_REQUEST_FAILED:
            return {
                ...state,
                loader: false,
                error: {
                    exist:true,
                    message: action.payload
                }
            };

        case PRODUCTS_REQUEST_SUCCESS:
            return {
                ...state,
                data: action.payload,
                loader: false,
            };

        case ORDER_BY:
            if (action.payload === "ALFABETICO") {
                let temparray = state.data.sort((a, b) => compare(a, b, "title"));
                return {
                    ...state,
                    data: temparray
                };
            } else if (action.payload === "P-MAYOR") {
                let temparray = state.data.sort((a, b) => compare(a, b, "current_price") * (-1));
                return {
                    ...state,
                    data: temparray
                };
            } else if (action.payload === "P-MENOR") {
                let temparray = state.data.sort((a, b) => compare(a, b, "current_price"));
                return {
                    ...state,
                    data: temparray
                };
            }
        default:
            return state;
    }
}