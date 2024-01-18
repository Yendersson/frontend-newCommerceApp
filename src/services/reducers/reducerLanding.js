import { LANDING_REQUEST, LANDING_REQUEST_FAILED, LANDING_REQUEST_SUCCESS } from "../types";

const initialState = {
    data:[],
    error:{
        exist:false,
        message:null
    },
    loader:true
};

export const reducerLanding =(state = initialState, action) => {

    switch(action.type){
        case LANDING_REQUEST:
            return {
                ...state,
                loader: true
            };

        case LANDING_REQUEST_FAILED:
            return {
                ...state,
                loader: false,
                error: {
                    exist:true,
                    message: action.payload
                }
            };

        case LANDING_REQUEST_SUCCESS:
            return {
                ...state,
                data: action.payload,
                loader: false,
            };


        default:
            return state;
    }
}