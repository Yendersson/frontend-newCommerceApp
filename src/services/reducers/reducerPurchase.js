import { PURCHASE_REQUEST, PURCHASE_REQUEST_FAILED, PURCHASE_REQUEST_SUCCESS } from "../types.js";

const initialState = {
    data:[],
    error:{
        exist:false,
        message:null
    },
    loader:true
};

export const reducePurchase = (state = initialState, action) => {
    switch(action.type){
        case PURCHASE_REQUEST:
            return {
                ...state,
                loader: true
            };

        case PURCHASE_REQUEST_FAILED:
            return {
                ...state,
                loader: false,
                error: {
                    exist:true,
                    message: action.payload
                }
            };

        case PURCHASE_REQUEST_SUCCESS:
            return {
                ...state,
                data: action.payload,
                loader: false,
            };


        default:
            return state;
    }
}