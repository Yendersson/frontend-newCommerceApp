import { CATEGORY_REQUEST, CATEGORY_REQUEST_FAILED, CATEGORY_REQUEST_SUCCESS } from "../types";

const initialState = {
    data:[],
    error:{
        exist:false,
        message:null
    },
    loader:true
};

export const reducerCategory = (state = initialState, action) =>{

    switch (action.type) {

        case CATEGORY_REQUEST:
            return {
                ...state,
                loader: true
            };

        case CATEGORY_REQUEST_FAILED:
            return {
                ...state,
                loader: false,
                error: {
                    exist:true,
                    message: action.payload
                }
            };

        case CATEGORY_REQUEST_SUCCESS:
            return {
                ...state,
                data: action.payload,
                loader: false,
            };

        default:
            return state;
    }
}