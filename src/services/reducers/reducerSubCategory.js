import { SUBCATEGORY_REQUEST, SUBCATEGORY_REQUEST_FAILED, SUBCATEGORY_REQUEST_SUCCESS } from "../types";

const initialState = {
    data:[],
    error:{
        exist:false,
        message:null
    },
    loader:true
};

export const reducerSubCategory = (state = initialState, action) =>{

    switch (action.type) {
        case SUBCATEGORY_REQUEST:
            return {
                ...state,
                loader: true
            };

        case SUBCATEGORY_REQUEST_FAILED:
            return {
                ...state,
                loader: false,
                error: {
                    exist:true,
                    message: action.payload
                }
            };

        case SUBCATEGORY_REQUEST_SUCCESS:
            return {
                ...state,
                data: action.payload,
                loader: false,
            };

        default:
            return state;
    }
}